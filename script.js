var lines = {
    "T1": {
        type: "suburban",
        name: "North Shore, Northern & Western Line",
        colour: "#F5A81C"
    },
    "T2": {
        type: "suburban",
        name: "Airport, Inner West & South Line",
        colour: "#4D9C2D"
    },
    "T3": {
        type: "suburban",
        name: "Bankstown Line",
        colour: "#F2672B"
    },
    "T4": {
        type: "suburban",
        name: "Eastern Suburbs & Illawarra Line",
        colour: "#0082BD"
    },
    "T5": {
        type: "suburban",
        name: "Cumberland Line",
        colour: "#C34A99"
    },
    "T6": {
        type: "suburban",
        name: "Carlingford Line",
        colour: "#366093"
    },
    "T7": {
        type: "suburban",
        name: "Olympic Park Line",
        colour: "#9AA4A9"
    },
    "BLU": {
        type: "intercity",
        name: "Blue Mountains Line",
        colour: "#F5A81D"
    },
    "NEW": {
        type: "intercity",
        name: "Central Coast & Newcastle Line",
        colour: "#D11F2F"
    },
    "HUN": {
        type: "intercity",
        name: "Hunter Line",
        colour: "#843135"
    },
    "SOU": {
        type: "intercity",
        name: "South Coast Line",
        colour: "#0083BF"
    },
    "HIG": {
        type: "intercity",
        name: "Southern Highlands Line",
        colour: "#509E45"
    }
}

var data = [
    {
        line: "BLU",
        to: "Lithgow",
        thru: "Parramatta",
        platform: 19,
        departs: 7,
        stops: [
            "Parramatta",
            "Blacktown",
            "Penrith",
            "Emu Plains",
            "Lapstone",
            "Glenbrook",
            "Blaxland",
            "Springwood",
            "Hazelbrook",
            "Lawson",
            "Wentworth Falls",
            "Leura",
            "Katoomba",
            "Blackheath",
            "Mount Victoria",
            "Bell",
            "Zig Zag",
            "Lithgow"
        ],
        info: [
            "4 cars",
            "Limited Stops"
        ]
    },
    {
        line: "!",
        to: "Does not stop",
        thru: "Please stand behind the yellow line"
    },
    {
        line: "T7",
        to: "Olympic Park",
        thru: "Lidcombe",
        platform: 0,
        departs: 24,
        info: [
            "8 cars",
            "All stops"
        ]
    },
    {
        line: "T1",
        to: "Penrith",
        thru: "Central",
        platform: 2,
        departs: 2,
        stops: [
            "Central",
            "Redfern",
            "Strathfield",
            "Lidcombe",
            "Parramatta",
            "Westmead",
            "Seven Hills",
            "Blacktown",
            "Doonside",
            "Rooty Hill",
            "Mount Druitt",
            "St Marys",
            "Werrington",
            "Kingswood",
            "Penrith"
        ],
        info: [
            "8 cars",
            "Limited Stops"
        ]
    }
]

$(window).on("load", function() {
    $.jCanvas.defaults.fromCenter = false

    let canvas = $("#screen1")

    // Header
    canvas.drawRect({
        fillStyle: "#F7662D",
        width: 540,
        height: 30,
        x: 0, y: 0
    }).drawText({
        fillStyle: "#FFF",
        fontFamily: "tp_frankregular",
        fontSize: 21,
        text: "Next service",
        x: 13, y: 5
    })

    // Train Line
    if (lines[data[0].line].type === "suburban") {
        // Line Identifier
        canvas.drawRect({
            fillStyle: data[0].line in lines ? lines[data[0].line].colour : "#333",
            cornerRadius: 8,
            width: 55,
            height: 55,
            x: 10, y: 40
        }).drawText({
            fillStyle: "#FFF",
            fontFamily: "tp_frankmedium",
            fromCenter: true,
            fontSize: 38,
            text: data[0].line,
            x: 38, y: 68
        })
    } else if (lines[data[0].line].type === "intercity") {
        canvas.drawArc({
            fillStyle: "#F5891D",
            strokeStyle: "#FFF",
            strokeWidth: 3,
            x: 10, y: 40,
            radius: 28
        }).drawText({
            fillStyle: "#FFF",
            fontFamily: "tp_frankmedium",
            fromCenter: true,
            fontSize: 38,
            text: "T",
            x: 38, y: 69
        })
    }

    // TO: Station
    canvas.drawText({
        fillStyle: "#232323",
        fontFamily: "tp_frankmedium",
        fontSize: 36,
        text: data[0].to,
        x: 76, y: 38
    })

    // VIA: Station
    if (data[0].thru) {
        canvas.drawText({
            fillStyle: "#555",
            fontFamily: "tp_frankregular",
            fontSize: 20,
            text: data[0].line in lines ? "via " + data[0].thru : data[0].thru,
            x: 78, y: 77
        })
    }

    // Separator
    if (data[0].stops) {
        canvas.drawLine({
            strokeStyle: "#000",
            strokeWidth: 1,
            x1: 10, y1: 108,
            x2: 530, y2: 108
        })
    }

    // Stops
    if (data[0].stops) {
        canvas.drawText({
            fillStyle: "#232323",
            fontFamily: "tp_frankregular",
            fontSize: 24,
            align: "left",
            lineHeight: 1.2,
            text: data[0].stops.join("\n"),
            x: 10, y: 118
        })
    }

    // Platform
    if (data[0].platform >= 0) {
        canvas.drawText({
            fillStyle: "#232323",
            fontFamily: "tp_frankregular",
            fontSize: 14,
            align: "right",
            text: "Platform",
            x: 472, y: 40
        }).drawText({
            fillStyle: "#F7662D",
            fontFamily: "tp_frankregular",
            fontSize: 44,
            align: "middle",
            text: data[0].platform,
            x: 502, y: 57
        })
    }

    // Departure Time
    if (data[0].departs >= 0) {
        canvas.drawText({
            fillStyle: "#232323",
            fontFamily: "tp_frankregular",
            fontSize: 14,
            align: "right",
            text: "Departs",
            x: 472, y: 240
        }).drawText({
            fillStyle: "#F7662D",
            fontFamily: "tp_frankregular",
            fontSize: 44,
            align: "right",
            text: data[0].departs + " min",
            x: 412, y: 260
        })
    }

    // Service Information
    if (data[0].info) {
        let box_height = 120
        let text_height = 122

        data[0].info.forEach(function(i) {
            canvas.drawRect({
                fillStyle: "#232323",
                width: 100,
                height: 18,
                x: 430, y: box_height
            }).drawText({
                fillStyle: "#FFF",
                fontFamily: "tp_frankregular",
                fontSize: 13,
                text: i,
                x: 436, y: text_height
            })

            box_height += 22
            text_height += 22
        })
    }
})
