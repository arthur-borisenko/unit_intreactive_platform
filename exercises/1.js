function check() {
    document.getElementById("enter").disabled=true
    var val = document.getElementById('input-answer').value;
    if (val == 90) {
        document.getElementById("correct").style = "display:block"
    } else {
        document.getElementById("wrong").style = "display:block"
    }
}
document.getElementById("enter").addEventListener("click",check)