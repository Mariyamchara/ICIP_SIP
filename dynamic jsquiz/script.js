const quizData = [{
    question: "To whom are the governors of the states responsible for their conduct under the constitution?",
    a: " Chief Minister of the State",
    b: "President",
    c: "State Assembly",
    d: "Prime Minister of the Union",
    correct: "b",
},
{
    question: "Who among the following holds office only during the pleasure of the President of India?",
    a: " Election Commissioner",
    b: "Lok Sabha Speaker",
    c: "Judge of the Supreme Court",
    d: "Governor",
    correct: "d",
},
{
    question: "India is a welfare state. Where does it come from?",
    a: "by introduction",
    b: "by fundamental duties",
    c: "by fundamental rights",
    d: "Directive Principles",
    correct: "d",
},
{
    question: "By whom is the ordinance issued by the governor approved??",
    a: " Ministers of the Legislative Council",
    b: "Legislature",
    c: "President",
    d: "All of these",
    correct: "b",
}
];
let index = 0;
let correct = 0,
incorrect = 0,
total = quizData.length;
let questionBox = document.getElementById("questionBox");
let allInputs = document.querySelectorAll("input[type='radio']")
const loadQuestion = () => {
if (total === index) {
    return quizEnd()
}
reset()
const data = quizData[index]
questionBox.innerHTML = `${index + 1}) ${data.question}`
allInputs[0].nextElementSibling.innerText = data.a
allInputs[1].nextElementSibling.innerText = data.b
allInputs[2].nextElementSibling.innerText = data.c
allInputs[3].nextElementSibling.innerText = data.d
}

document.querySelector("#submit").addEventListener(
"click",
function() {
    const data = quizData[index]
    const ans = getAnswer()
    if (ans === data.correct) {
        correct++;
    } else {
        incorrect++;
    }
    index++;
    loadQuestion()
}
)

const getAnswer = () => {
let ans;
allInputs.forEach(
    (inputEl) => {
        if (inputEl.checked) {
            ans = inputEl.value;
        }
    }
)
return ans;
}

const reset = () => {
allInputs.forEach(
    (inputEl) => {
        inputEl.checked = false;
    }
)
}

const quizEnd = () => {
// console.log(document.getElementsByClassName("container"));
document.getElementsByClassName("container")[0].innerHTML = `
    <div class="col">
        <h3 class="w-100"> Hii, you've scored ${correct} / ${total} </h3>
    </div>
`
}
loadQuestion(index);