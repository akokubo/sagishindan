/*jslint browser, devel */
/*global $, window */

var SAGISHINDAN = {};

SAGISHINDAN.buildPage = function () {
    "use strict";

    $("#type_" + SAGISHINDAN.matrix).replaceWith("<td id=\"type_" + SAGISHINDAN.matrix + "\"><span class=\"glyphicon glyphicon glyphicon-ok\" aria-hidden=\"true\"></span></td>");
};

$(document).ready(function () {
    "use strict";

    SAGISHINDAN.matrix = sessionStorage.getItem("matrix");

    SAGISHINDAN.buildPage();
});
