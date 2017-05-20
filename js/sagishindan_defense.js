/*jslint browser, devel */
/*global $, window */

var SAGISHINDAN = {};

SAGISHINDAN.buildPage = function () {
    "use strict";

    $("#fraud_name").replaceWith("<span id=\"fraud_name\">" + SAGISHINDAN.fraud_name + "</span>");
    $("#body_fraud_name").replaceWith("<span id=\"fraud_name\">" + SAGISHINDAN.fraud_name + "</span>");
    $("#fraud_image").replaceWith("<span id=\"fraud_image\"><img src=\"images/" + SAGISHINDAN.fraud_image + "\" alt=\"\" style=\"max-width: 200px;\">");
};

$(document).ready(function () {
    "use strict";

    SAGISHINDAN.fraud_name = sessionStorage.getItem("fraud_name");
    SAGISHINDAN.fraud_image = sessionStorage.getItem("fraud_image");
    SAGISHINDAN.matrix = sessionStorage.getItem("matrix");

    SAGISHINDAN.buildPage();
});
