const startButton = document.getElementById("start-btn");

const questionContainerElement=document.getElementById("question-container");

const NextButton = document.getElementById("Next-btn");

let shuffledQuestions,currentQuestionIndex;

const questionElement=document.getElementById('question');

const answerButtonsElement=document.getElementById('answer-buttons');


startButton.addEventListener("click",startGame);
NextButton.addEventListener('click',()=>{
    currentQuestionIndex++;
    setNextQuestion();
});


function startGame() {
    console.log("I am going to start Game");
    startButton.classList.add('hide');
    shuffledQuestions=questions.sort(()=> Math.random() - 0.5);
    currentQuestionIndex=0;
    questionContainerElement.classList.remove('hide');
    // NextButton.classList.remove('hide');
    setNextQuestion();
}


function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);

}

// function showQuestion(question) {
//     questionElement.innerText=question.question;
//     question.answers.forEach(answer => {
//         const button = document.createElement('button');
//         button.innerText=answer.text;
//         button.classList.add('btn');
//         if(answer.correct){
//             button.dataset.correct=answer.correct;
//         }
//         button.addEventListener('click',selectAnswer);
//         answerButtonsElement.appendChild(button)
//     });
// }
function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
      const button = document.createElement('button')
      button.innerText = answer.text
      button.classList.add('btn')
      if (answer.correct) {
        button.dataset.correct = answer.correct
      }
      button.addEventListener('click', selectAnswer)
      answerButtonsElement.appendChild(button)
    })
  }

function resetState(){
    console.log("resetstate is calling")
    clearStatusClass(document.body)
    NextButton.classList.add('hide');
    while(answerButtonsElement.firstChild){
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }

}

function selectAnswer(e) {
    console.log("Answer has been selected")
    const selectedButton=e.target;
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body,correct);
    Array.from(answerButtonsElement.children).forEach(button =>{
        setStatusClass(button,button.dataset.correct);
    });
    if(shuffledQuestions.length > currentQuestionIndex+1){
        NextButton.classList.remove('hide');
    }else{
        startButton.innerText="Restart";
        startButton.classList.remove('hide');
    }
   
}


function setStatusClass(element,correct){
    console.log("setStauts is running")
    clearStatusClass(element);
    if(correct){
        element.classList.add('correct');
    }else{
        element.classList.add('wrong');
    }
}

function clearStatusClass(element){
    console.log("clearStatusclass is runnig")
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [
    {
        question:"What is 2 + 3",
        answers : [
            {text:'5',correct:true},
            {text:'6',correct:false}
        ]
    },

    {
        question:"Who is PM of India",
        answers:[
            {text:'Amit Shah',correct:false},
            {text:'Narendra Modi',correct:true},
            {text:'RajNath Singh',correct:false},
            {text:'Rahul Ghandi',correct:false}
        ]
    },

    {
        question:"Who is Best Youtuber",
        answers:[
            {text:'VKB Math',correct:false},
            {text:'Web Dev Simplified',correct:false},
            {text:'Clever Programmer',correct:false},
            {text:'Harry Bhai',correct:true}
        ]
    },

    {
        question:"Who is Best Cricketer",
        answers:[
            {text:'Virat Kohli',correct:false},
            {text:'MS Dhoni',correct:false},
            {text:'Sachin Tendulkar',correct:true},
            {text:'Veerendra Sahbag',correct:false}
        ]
    }
]