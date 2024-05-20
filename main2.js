let questions = [
    {
        question: 'Which HTML tag is used to define an inline style?',
        choicel: '<script>',
        choice2: '<css>',
        choice3: '<style>',
        choice4: '<span>',
        answer: 3,
    },
    {
        question: 'Which property is used to change the text color in CSS?',
        choicel: 'text-color',
        choice2: 'font-color',
        choice3: 'text-style',
        choice4: 'color',
        answer: 4,
    },
    {
        question: 'Which of the following is the correct way to comment in HTML?',
        choicel: '// Comment',
        choice2: '&lt;!-- Comment --&gt;',
        choice3: '/ Comment */',
        choice4: '&lt;! Comment&gt;',
        answer: 2,
    },
    {
        question: 'What is the capital of France?',
        choicel: 'Paris',
        choice2: 'London',
        choice3: 'Berlin',
        choice4: 'Madrid',
        answer: 1,
    },
    {
        question: 'Which planet is known as the Red Planet?',
        choicel: 'Mars',
        choice2: 'Venus',
        choice3: 'Jupiter',
        choice4: 'Saturn',
        answer: 1,
    },
    {
        question: 'What is the chemical symbol for water?',
        choicel: 'H2O',
        choice2: 'CO2',
        choice3: 'O2',
        choice4: 'NaCl',
        answer: 1,
    },
    {
        question: 'What is the largest mammal?',
        choicel: 'Elephant',
        choice2: 'Giraffe',
        choice3: 'Blue Whale',
        choice4: 'Lion',
        answer: 3,
    },
    {
        question: 'Who painted the Mona Lisa?',
        choicel: 'Leonardo da Vinci',
        choice2: 'Pablo Picasso',
        choice3: 'Vincent van Gogh',
        choice4: 'Michelangelo',
        answer: 1,
    },
    {
        question: 'What is the capital of Australia?',
        choicel: 'Sydney',
        choice2: 'Canberra',
        choice3: 'Melbourne',
        choice4: 'Brisbane',
        answer: 2,
    },
    {
        question: 'Which element has the chemical symbol "H"?',
        choicel: 'Hydrogen',
        choice2: 'Helium',
        choice3: 'Carbon',
        choice4: 'Oxygen',
        answer: 1,
    }
    
]
document.getElementById('num1').innerHTML ="1/"+questions.length;
let qulist = new Set();
async function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
async function updateQuestion(){
    await sleep(1000);
    let element = document.getElementsByClassName('custom-button')[0];
    element.style.backgroundColor = "white";
    element = document.getElementsByClassName('custom-button')[1];
    element.style.backgroundColor = "white";
    element = document.getElementsByClassName('custom-button')[2];
    element.style.backgroundColor = "white";
    element = document.getElementsByClassName('custom-button')[3];
    element.style.backgroundColor = "white";

    currentQuestion = currentQuestion + 1;
    if(currentQuestion === questions.length){
       
        console.log('Quiz Over'+score);
        document.getElementById('num2').innerHTML = score;
        return;
       
    }
    
    
    

    let quest = questions[currentQuestion];
    console.log(currentQuestion);
    document.getElementById('num2').innerHTML = score;
    document.getElementById('num1').innerHTML =(currentQuestion+1) +"/"+questions.length;
    document.getElementById('ask').innerHTML = quest.question;
    document.getElementById('opt1').innerHTML = quest.choicel;
    document.getElementById('opt2').innerHTML = quest.choice2;
    document.getElementById('opt3').innerHTML = quest.choice3;
    document.getElementById('opt4').innerHTML = quest.choice4;

}
let currentQuestion = 0;
let score =0;
let options = document.querySelectorAll('.option');

document.getElementsByClassName('custom-button')[0].onclick = function() {
    console.log('Button clicked A');
    if (questions[currentQuestion].answer === 1) {
        console.log('Correct');
        this.style.backgroundColor = 'green';
        score = score+1;
    } else {
        this.style.backgroundColor = 'red';
        console.log('Incorrect');
    }
    updateQuestion();
    

}
document.getElementsByClassName('custom-button')[1].onclick = function() {
    console.log('Button clicked B');
    if (questions[currentQuestion].answer === 2) {
        console.log('Correct');
        score = score+1;
        this.style.backgroundColor = 'green';
    } else {
        this.style.backgroundColor = 'red';
        console.log('Incorrect');
    }
    updateQuestion();
}
document.getElementsByClassName('custom-button')[2].onclick = function() {
    console.log('Button clicked C');
    if (questions[currentQuestion].answer === 3) {
        console.log('Correct');
        score = score+1;
        this.style.backgroundColor = 'green';
    } else {
        this.style.backgroundColor = 'red';
        console.log('Incorrect');
    }
    updateQuestion();
}
document.getElementsByClassName('custom-button')[3].onclick = function() {
    console.log('Button clicked D');
    if (questions[currentQuestion].answer === 4) {
        console.log('Correct');
        score = score+1;
        this.style.backgroundColor = 'green';
    } else {
        this.style.backgroundColor = 'red';
        console.log('Incorrect');
    }
    updateQuestion();
}