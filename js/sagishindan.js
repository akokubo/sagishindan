/*jslint browser, devel */
/*global $, window */

var SAGISHINDAN = {};

SAGISHINDAN.buildPage = function () {
    "use strict";
    var question = SAGISHINDAN.questions[SAGISHINDAN.question_number];
    $("#question_number").replaceWith("<span id=\"question_number\">" + SAGISHINDAN.question_number + "</span>");
    $("#text").replaceWith("<p id=\"text\">" + question.text + "</p>");
    $("#buttons").replaceWith("<a id=\"yes\" class=\"btn btn-lg btn-primary\" role=\"button\" href=\"#\">&nbsp;はい&nbsp;</a> <a id=\"no\" class=\"btn btn-lg btn-success\" role=\"button\" href=\"#\">いいえ</a>");
};

$(document).ready(function () {
    "use strict";
    SAGISHINDAN.question_number = 1;
    SAGISHINDAN.scores = {"自信過剰": 0, "他者過剰信頼": 0, "うっかり": 0};
    SAGISHINDAN.questions = [
        {"type": "intro", "text": "診断開始"},
        {"type": "question", "scores": {"yes": {"自信過剰": 0, "他者過剰信頼": 0, "うっかり": 0}, "no": {"自信過剰": 0, "他者過剰信頼": 0, "うっかり": 0}}, "text": "自分の名前が言えなくなる時がある。"},
        {"type": "question", "scores": {"yes": {"自信過剰": 0, "他者過剰信頼": 0, "うっかり": 0}, "no": {"自信過剰": 0, "他者過剰信頼": 0, "うっかり": 0}}, "text": "話す時、物の名前が出にくく、「あれ」「これ」などと言うようになった。"},
        {"type": "question", "scores": {"yes": {"自信過剰": 0, "他者過剰信頼": 0, "うっかり": 0}, "no": {"自信過剰": 0, "他者過剰信頼": 0, "うっかり": 0}}, "text": "時間や場所の感覚が不確かになり、約束事を間違えるようになった。"},
        {"type": "question", "scores": {"yes": {"自信過剰": 0, "他者過剰信頼": 0, "うっかり": 0}, "no": {"自信過剰": 0, "他者過剰信頼": 0, "うっかり": 0}}, "text": "今日、何曜日かわからない時がある。"},
        {"type": "question", "scores": {"yes": {"自信過剰": 0, "他者過剰信頼": 0, "うっかり": 0}, "no": {"自信過剰": 0, "他者過剰信頼": 0, "うっかり": 0}}, "text": "計算の間違いが多くなった。"},
        {"type": "question", "scores": {"yes": {"自信過剰": 0, "他者過剰信頼": 0, "うっかり": 0}, "no": {"自信過剰": 0, "他者過剰信頼": 0, "うっかり": 0}}, "text": "慣れている所で、道に迷ったことがある。"},
        {"type": "question", "scores": {"yes": {"自信過剰": 0, "他者過剰信頼": 0, "うっかり": 0}, "no": {"自信過剰": 0, "他者過剰信頼": 0, "うっかり": 0}}, "text": "蛇口やガス栓の締め忘れが目立つようになった。"},
        {"type": "question", "scores": {"yes": {"自信過剰": 0, "他者過剰信頼": 0, "うっかり": 0}, "no": {"自信過剰": 0, "他者過剰信頼": 0, "うっかり": 0}}, "text": "人の顔は浮かぶのに名前が出てこない。"},
        {"type": "question", "scores": {"yes": {"自信過剰": 0, "他者過剰信頼": 0, "うっかり": 0}, "no": {"自信過剰": 0, "他者過剰信頼": 0, "うっかり": 0}}, "text": "料理や洗濯など、段取りが必要なことができない。"},
        {"type": "question", "scores": {"yes": {"自信過剰": 0, "他者過剰信頼": 0, "うっかり": 0}, "no": {"自信過剰": 0, "他者過剰信頼": 0, "うっかり": 0}}, "text": "置き忘れやしまい忘れが目立つ。"},
        {"type": "question", "scores": {"yes": {"自信過剰": 0, "他者過剰信頼": 0, "うっかり": 0}, "no": {"自信過剰": 0, "他者過剰信頼": 0, "うっかり": 0}}, "text": "相手を信頼して物事を任せることができる。"},
        {"type": "question", "scores": {"yes": {"自信過剰": 0, "他者過剰信頼": 0, "うっかり": 0}, "no": {"自信過剰": 0, "他者過剰信頼": 0, "うっかり": 0}}, "text": "同じ仕事を人より速くできる方だ。"},
        {"type": "question", "scores": {"yes": {"自信過剰": 0, "他者過剰信頼": 0, "うっかり": 0}, "no": {"自信過剰": 0, "他者過剰信頼": 0, "うっかり": 0}}, "text": "つらくても途中で投げ出さず最後までやり遂げる。"},
        {"type": "question", "scores": {"yes": {"自信過剰": 0, "他者過剰信頼": 0, "うっかり": 0}, "no": {"自信過剰": 0, "他者過剰信頼": 0, "うっかり": 0}}, "text": "相手が次にどんな行動を起こすのか想像できる。"},
        {"type": "question", "scores": {"yes": {"自信過剰": 0, "他者過剰信頼": 0, "うっかり": 0}, "no": {"自信過剰": 0, "他者過剰信頼": 0, "うっかり": 0}}, "text": "考えるよりも先に行動する。"},
        {"type": "question", "scores": {"yes": {"自信過剰": 0, "他者過剰信頼": 0, "うっかり": 0}, "no": {"自信過剰": 0, "他者過剰信頼": 0, "うっかり": 0}}, "text": "何もないところから何かを創り上げることが得意だ。"},
        {"type": "question", "scores": {"yes": {"自信過剰": 0, "他者過剰信頼": 0, "うっかり": 0}, "no": {"自信過剰": 0, "他者過剰信頼": 0, "うっかり": 0}}, "text": "人から相談されることが多い。"},
        {"type": "question", "scores": {"yes": {"自信過剰": 0, "他者過剰信頼": 0, "うっかり": 0}, "no": {"自信過剰": 0, "他者過剰信頼": 0, "うっかり": 0}}, "text": "今日できることを明日に伸ばさない。"},
        {"type": "question", "scores": {"yes": {"自信過剰": 0, "他者過剰信頼": 0, "うっかり": 0}, "no": {"自信過剰": 0, "他者過剰信頼": 0, "うっかり": 0}}, "text": "物事のポイント(何が重要か)をつかむのが速い。"},
        {"type": "question", "scores": {"yes": {"自信過剰": 0, "他者過剰信頼": 0, "うっかり": 0}, "no": {"自信過剰": 0, "他者過剰信頼": 0, "うっかり": 0}}, "text": "虚勢を張らず、素直に自分を表現できる。"},
        {"type": "result", "text": "診断結果"}
    ];

    $(document).on("click", "#yes", function (e) {
        e.preventDefault();
        if (SAGISHINDAN.question_number === SAGISHINDAN.questions.length - 2) {
            sessionStorage.setItem("socres", SAGISHINDAN.scores);
            window.location.href = "result.html";
        } else {
            SAGISHINDAN.question_number = SAGISHINDAN.question_number + 1;
            SAGISHINDAN.buildPage();
        }
    });

    $(document).on("click", "#no", function (e) {
        e.preventDefault();
        if (SAGISHINDAN.question_number === SAGISHINDAN.questions.length - 2) {
            sessionStorage.setItem("socres", SAGISHINDAN.scores);
            window.location.href = "result.html";
        } else {
            SAGISHINDAN.question_number = SAGISHINDAN.question_number + 1;
            SAGISHINDAN.buildPage();
        }
    });

    SAGISHINDAN.buildPage();
});
