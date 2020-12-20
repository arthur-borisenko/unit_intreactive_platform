function check() {
    document.getElementById("enter").disabled = true
    var val = document.getElementById('input-answer2').value;
    if (val == "am") {
        document.getElementById("correct").style = "display:block"
    } else {
        document.getElementById("wrong").style = "display:block"
    }
}

document.getElementById("enter").addEventListener("click", check)