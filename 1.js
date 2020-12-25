import {setState,STATUS,getState} from './state.js';
function check() {
    document.getElementById("enter").disabled = true
    var val = document.getElementById('input-answer').value;
    if (val == 90) {
        var v1=getState()["2"];
        var v2=getState()["1"];
        var href="1.html";
        var v4 = v2.question;
        var v5=v2.answer;
        var v6=STATUS.ANSWERED;
        var v7={
            href:href,
            question:v4,
            answer:v5,
            status: v6
        };
        setState({
            "1":v7
            ,"2":v1
        });
        document.getElementById("correct").style = "display:block"
    } else {
        document.getElementById("wrong").style = "display:block"
    }
}

document.getElementById("enter").addEventListener("click", check)