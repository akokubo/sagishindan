/*jslint browser, devel */
/*global $, window */

var SAGISHINDAN = {};

SAGISHINDAN.buildPage = function () {
    "use strict";

    var icon;

    if (SAGISHINDAN.type === "詐欺に引っかかりにくい") {
        icon = "triangle.svg";
    } else {
        icon = "circle.svg";
    }
    $("#type_" + SAGISHINDAN.matrix).replaceWith("<td id=\"type_" + SAGISHINDAN.matrix + "\"><img src=\"fonts/" + icon + "\" alt=\"○\" style=\"width: 20px;\"></td>");
};

$(document).ready(function () {
    "use strict";

    SAGISHINDAN.matrix = sessionStorage.getItem("matrix");
    SAGISHINDAN.type = sessionStorage.getItem("type");

    SAGISHINDAN.buildPage();
});
