/*jslint browser, devel */
/*global $, window */

var SAGISHINDAN = {};

SAGISHINDAN.buildPage = function () {
    "use strict";
    $("#type").replaceWith("<span id=\"type\">" + SAGISHINDAN.type + "</span>");
    $("#fraud").replaceWith("<span id=\"fraud\">" + SAGISHINDAN.fraud.name + "</span>");
    $("#fraud_defense").replaceWith("<span id=\"fraud_defense\">" + SAGISHINDAN.fraud.name + "</span>");
    $("#fraud_image").replaceWith("<span id=\"fraud_image\"><img src=\"images/" + SAGISHINDAN.fraud.image + "\" style=\"max-width: 200px;\" alt=\"\"></span>");
};

$(document).ready(function () {
    "use strict";

    var result1, result2;

    SAGISHINDAN.type = sessionStorage.getItem("type");
    SAGISHINDAN.fraud = {
        name: sessionStorage.getItem("fraud_name"),
        image: sessionStorage.getItem("fraud_image")
    };

    if (SAGISHINDAN.type === null) {
        SAGISHINDAN.types = [
            "自信過剰",
            "他者過剰信頼",
            "うっかり"
        ];

        SAGISHINDAN.frauds = [
            {name: "振り込め詐欺", image: "akutoku_shouhou_furikome_sagi.png"},
            {name: "点検商法", image: "syoubou_seibishi_syoukaki.png"},
            {name: "次々販売", image: "akutoku_shouhou_houmon.png"}
        ];

        result1 = Math.floor(Math.random() * SAGISHINDAN.types.length);
        result2 = Math.floor(Math.random() * SAGISHINDAN.frauds.length);
        SAGISHINDAN.type = SAGISHINDAN.types[result1];
        SAGISHINDAN.fraud = SAGISHINDAN.frauds[result2];

        sessionStorage.setItem("type", SAGISHINDAN.type);
        sessionStorage.setItem("fraud_name", SAGISHINDAN.fraud.name);
        sessionStorage.setItem("fraud_image", SAGISHINDAN.fraud.image);
        sessionStorage.setItem("matrix", result1 + "_" + result2);
    }

    SAGISHINDAN.buildPage();
});
