import {getState, setState, STATUS} from "./state.js";

function check() {
    document.getElementById("enter").disabled = true
    var val = document.getElementById('input-answer2').value;
    if (val == "am") {
        document.getElementById("correct").style = "display:block";
        var v2 = getState()["2"]
        var v1 = getState()["1"];
        var href = "1.html";
        var v4 = v2.question;
        var v5 = v2.answer;
        var v6 = STATUS.ANSWERED;
        var v7 = {
            href: href,
            question: v4,
            answer: v5,
            status: v6
        };
        setState({
            "1": v7
            , "2": v1
        });
    } else {
        document.getElementById("wrong").style = "display:block";
    }
}

document.getElementById("enter").addEventListener("click", check)