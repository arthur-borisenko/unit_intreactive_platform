export let STATUS = {
    NOT_ENTERED: {value: 0, image: "no_answer.png"},
    ANSWERED: {value: 1, image: "correct_answer.png"},
    WRONG_ANSWERED: {value: 2, image: "no_answer.png"}
};

let question1 = {
    href: "1.html",
    question: "",
    answer: "",
    status: STATUS.NOT_ENTERED
};
let question2 = {
    href: "e2.html",
    question: "",
    answer: "",
    status: STATUS.NOT_ENTERED
};
let question3 = {
    href: "e2.html",
    question: "",
    answer: "",
    status: STATUS.NOT_ENTERED
};
export let questions = {
    "1": question1,
    "2": question2,
    "3": question3
};


/**
 * Save state to localStorage
 */
export var setState = function (myData) {
    localStorage.setItem('unit-interactive-platform', JSON.stringify(myData));
};

/**
 * Get saved state from localStorage (if it exists)
 * @return {Object} The data, or an empty object
 */
export var getState = function () {
    var saved = localStorage.getItem('unit-interactive-platform');
    if (saved) {
        return JSON.parse(saved);
    }
    setState(questions);
    return questions;
};

export var renderMainPage = function (state) {
    var innerHTML = "";
    for (const id in state) {
        let question = state[id];
        innerHTML = innerHTML + '<a href="' + question.href + '">\n' +
            '    exercise #2\n' +
            '    <img src="'+question.status.image+'" width="200" height="200" id="' + id + '">\n' +
            '</a>';
    }
    document.getElementById("body").innerHTML = innerHTML;
}

