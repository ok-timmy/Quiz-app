var questions = [
   { 
    number: '1',
    question: 'If the cerebellum of a person is slightly damaged, which of the following will be impaired?',
    a: 'vision',
    b: 'Walking',
    c: 'Breathing',
    d: 'Digestion',
    correct: 'b',
} ,
 {
     number: '2', 
     question: 'The structure of the ear that is responsible for balancing is the',
     a: 'semi-circular canals',
     b: 'pinna',
     c: 'auditory nerve',
     d: 'fenestra ovalis',
     correct: 'a',
},
{       number: '3',
        question: 'When a person moves from a dark room to bright light, the pupil becomes ',
        a: 'Red',
        b: 'larger',
        c: 'white',
        d: 'smaller',
        correct: 'd',
},
{   
        number: '4',
        question: 'The following are social insect except',
        a: 'wasps',
        b: 'termites',
        c: 'bees', 
        d: 'cotton-stainers',
        correct: 'd', 
},
{    
      number: '5',
        question: 'Which of the following organs in humans is responsible for removal of excess water in humans?',
        a: 'Spleen',
        b: 'Kidney',
        c: 'Large Intestine',
        d: 'Small intestine',
        correct: 'c',
}

]

const number = document.getElementById('number');
const quizSection = document.getElementById('quiz-question');
const quizEl = document.getElementById('question');
const a = document.getElementById('option_a');
const b = document.getElementById('option_b');
const c = document.getElementById('option_c');
const d = document.getElementById('option_d');
const submit = document.getElementById('submit');
var input = document.querySelectorAll('input');
const answerEls = document.querySelectorAll('option');

// got all html id.


let currentQuestion = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    var quiz = questions[currentQuestion];
    number.innerText = quiz.number;
    quizEl.innerText = quiz.question;
    a.innerText = quiz.a;
    b.innerText = quiz.b;
    c.innerText = quiz.c;
    d.innerText = quiz.d;

    // Load Quiz

}

submit.addEventListener('click', ()=>{
   const answer = getSelected();
   console.log(answer);

   if (answer) {
        if(answer===questions[currentQuestion].correct){
            score++;
        }


       currentQuestion++
       if(currentQuestion<questions.length){
              loadQuiz();
          }
          else {
            number.innerHTML = '';
           quizSection.innerText = 'You got ' + score + '/' + questions.length;
        }
    }
     
})



function getSelected(){
    const answerEls = document.querySelectorAll('option');

    let answer = undefined;

   input.forEach((answerEl) => {
       if(answerEl.checked){
           answer = answerEl.id;
           //To check if any answer has been selected and also return the selected option.
       }
   });
       return answer;

}

function deselectAnswers(){
    input.forEach((answerEl) => {
        answerEl.checked= false;
    });
    // To deselect the options once next question has been loaded.
}


 
/*To Do:
1. Add Next and Previous Buttons and make them respond according to what their name depicts.
2. For Each round of attempted Questions set, Questions should be selected at random. */