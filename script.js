var lines = {
    "!": {
        service: "train",
        name: "Information",
        colour: "#323232"
    },
    "bus": {
        service: "bus",
        type: "bus",
        colour: "#00A8DE"
    },
    "L1": {
        service: "tram",
        type: "lightrail",
        name: "Dulwich Hill Line",
        colour: "#BE1D2C"
    },
    "L2": {
        service: "tram",
        type: "lightrail",
        name: "City Line",
        colour: "#BE1D2C"
    },
    "L3": {
        service: "tram",
        type: "lightrail",
        name: "South East Line",
        colour: "#BE1D2C"
    },
    "F1": {
        service: "ferry",
        type: "ferry",
        name: "Manly",
        colour: "#00764A"
    },
    "F2": {
        service: "ferry",
        type: "ferry",
        name: "Taronga",
        colour: "#0F4733"
    },
    "F3": {
        service: "ferry",
        type: "ferry",
        name: "Parramatta River",
        colour: "#97C93C"
    },
    "F4": {
        service: "ferry",
        type: "ferry",
        name: "Darling Harbour",
        colour: "#00964C"
    },
    "F5": {
        service: "ferry",
        type: "ferry",
        name: "Neutral Bay",
        colour: "#206141"
    },
    "F6": {
        service: "ferry",
        type: "ferry",
        name: "Mosman Bay",
        colour: "#00AB51"
    },
    "F7": {
        service: "ferry",
        type: "ferry",
        name: "Eastern Suburbs",
        colour: "#09B188"
    },
    "T1": {
        service: "train",
        type: "suburban",
        name: "North Shore, Northern & Western Line",
        colour: "#F5A81C"
    },
    "T2": {
        service: "train",
        type: "suburban",
        name: "Airport, Inner West & South Line",
        colour: "#4D9C2D"
    },
    "T3": {
        service: "train",
        type: "suburban",
        name: "Bankstown Line",
        colour: "#F2672B"
    },
    "T4": {
        service: "train",
        type: "suburban",
        name: "Eastern Suburbs & Illawarra Line",
        colour: "#0082BD"
    },
    "T5": {
        service: "train",
        type: "suburban",
        name: "Cumberland Line",
        colour: "#C34A99"
    },
    "T6": {
        service: "train",
        type: "suburban",
        name: "Carlingford Line",
        colour: "#366093"
    },
    "T7": {
        service: "train",
        type: "suburban",
        name: "Olympic Park Line",
        colour: "#9AA4A9"
    },
    "BLU": {
        service: "train",
        type: "intercity",
        name: "Blue Mountains Line",
        colour: "#F5A81D"
    },
    "NEW": {
        service: "train",
        type: "intercity",
        name: "Central Coast & Newcastle Line",
        colour: "#D11F2F"
    },
    "HUN": {
        service: "train",
        type: "intercity",
        name: "Hunter Line",
        colour: "#843135"
    },
    "SOC": {
        service: "train",
        type: "intercity",
        name: "South Coast Line",
        colour: "#0083BF"
    },
    "HIL": {
        service: "train",
        type: "intercity",
        name: "Southern Highlands Line",
        colour: "#509E45"
    }
}

var themes = {
    "train": {
        colour: "#F7662D",
        platform: "Platform"
    },
    "tram": {
        colour: "#EF343F",
        platform: "Side"
    },
    "ferry": {
        colour: "#4EB859",
        platform: "Side"
    },
    "bus": {
        colour: "#00B6E9",
        platform: "Stand"
    }
}

var data = [
    {
        service: "tram",
        line: "L2",
        to: "Circular Quay",
        thru: "Central",
        platform: "A",
        departs: 4,
        stops: [
            "Rawson Place",
            "Chinatown",
            "Town Hall",
            "Queen Victoria",
            "Wynyard",
            "Grosvenor St",
            "Circular Quay"
        ]
    },
    {
        service: "train",
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
    },
    {
        service: "train",
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
        service: "ferry",
        line: "F1",
        to: "Manly",
        thru: "Circular Quay",
        platform: "A",
        departs: 243,
        stops: [
            "Manly"
        ]
    },
    {
        service: "bus",
        line: "782",
        to: "St Marys",
        thru: "Cambridge Gardens",
        platform: "12",
        departs: 15
    },
    {
        service: "train",
        line: "!",
        to: "Does not stop",
        thru: "Please stand behind the yellow line"
    }
]

var generate = function(canvas, input) {
    $.jCanvas.defaults.fromCenter = false
    let theme = input.service === "bus" ? lines.bus.colour : themes[lines[input.line].service].colour

    canvas = $(canvas)

    // Header
    canvas.drawRect({
        fillStyle: theme,
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

    // Service Line
    if (lines[input.line].type === "intercity") {
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
    } else {
        // Line Identifier
        canvas.drawRect({
            fillStyle: input.line in lines ? lines[input.line].colour : "#333",
            cornerRadius: 8,
            width: 55,
            height: 55,
            x: 10, y: 40
        }).drawText({
            fillStyle: "#FFF",
            fontFamily: "tp_frankmedium",
            fromCenter: true,
            fontSize: 38,
            text: input.line,
            x: 38, y: 68
        })
    }

    // TO: Station
    canvas.drawText({
        fillStyle: "#232323",
        fontFamily: "tp_frankmedium",
        fontSize: 36,
        text: input.to,
        x: 76, y: 38
    })

    // VIA: Station
    if (input.thru) {
        canvas.drawText({
            fillStyle: "#555",
            fontFamily: "tp_frankregular",
            fontSize: 20,
            text: input.line in lines ? "via " + input.thru : input.thru,
            x: 78, y: 77
        })
    }

    // Platform / Side
    if (input.platform !== undefined) {
        canvas.drawText({
            fillStyle: "#232323",
            fontFamily: "tp_frankregular",
            fontSize: 14,
            align: "right",
            respectAlign: true,
            text: themes[lines[input.line].service].platform,
            x: 501, y: 40
        }).drawText({
            fillStyle: theme,
            fontFamily: "tp_frankregular",
            fontSize: 44,
            align: "middle",
            text: input.platform,
            x: 502, y: 57
        })
    }

    // Separator
    if (input.stops) {
        canvas.drawLine({
            strokeStyle: "#000",
            strokeWidth: 1,
            x1: 10, y1: 108,
            x2: 530, y2: 108
        })
    }

    // Stops
    if (input.stops) {
        canvas.drawText({
            fillStyle: "#232323",
            fontFamily: "tp_frankregular",
            fontSize: 24,
            align: "left",
            lineHeight: 1.2,
            text: input.stops.join("\n"),
            x: 10, y: 118
        })
    }

    // Departure Time
    if (input.departs >= 0) {
        let pos = 412

        if (String(input.departs).length === 1) pos = 412
        else if (String(input.departs).length === 2) pos = 387
        else if (String(input.departs).length === 3) pos = 361

        canvas.drawText({
            fillStyle: "#232323",
            fontFamily: "tp_frankregular",
            fontSize: 14,
            align: "right",
            text: "Departs",
            x: 472, y: 240
        }).drawText({
            fillStyle: theme,
            fontFamily: "tp_frankregular",
            fontSize: 44,
            text: input.departs + " min",
            x: pos, y: 260
        })
    }

    // Service Information
    if (input.info) {
        let box_height = 120
        let text_height = 122

        input.info.forEach(function(i) {
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
}

$(window).on("load", function() {
    generate("#screen1", data[0])
    generate("#screen2", data[1])
    generate("#screen3", data[2])
    generate("#screen4", data[3])
    /*generate("#screen5", data[4])
    generate("#screen6", data[5])*/
})
