const questions = [
    {
        question: "Who is often referred to as the 'King of Bollywood'?",
        options: [
            "Shah Rukh Khan",
            "Amitabh Bachchan",
            "Aamir Khan",
            "Salman Khan",
        ],
        correctAnswerIndex: 0,
    },
    {
        question: "Which Indian state is famous for its backwaters and houseboat cruises?",
        options: [
            "Goa",
            "Kerala",
            "Himachal Pradesh",
            "Uttarakhand"
        ],
        correctAnswerIndex: 1,
    },
    {
        question: "Which famous Indian film director directed the movie 'Slumdog Millionaire'?",
        options: [
            "Sanjay Leela Bhansali",
            "Satyajit Ray",
            "Danny Boyle",
            "Rajkumar Hirani",
        ],
        correctAnswerIndex: 2,
    },
    {
        question: "Which Indian freedom fighter is known as the 'Nightingle of India'?",
        options: [
            "Sarojini Naidu",
            "Bhikaji Cama",
            "Rani Lakshmi Bai",
            "Annie Besant",
        ],
        correctAnswerIndex: 0,
    },
    {
        question: "Who is known for hitting the first century in IPL history?",
        options: [
            "Sachin Tendulkar",
            "Virender Sehwag",
            "Brendon McCullum",
            "Gautam Gambhir",
        ],
        correctAnswerIndex: 2,
    },
    {
        question: "Who is the legendary playback singer known for songs like 'Lag Ja Gale' and 'Aap Ki Nazron Ne Samjha'?",
        options: [
            "Lata Mangeshkar",
            "Asha Bhosle",
            "Kishore Kumar",
            "Mohammed Rafi",
        ],
        correctAnswerIndex: 0,
    },
    {
        question: "Which Indian state is renowned for its tea plantations, known as the 'Scotland of the East'?",
        options: [
            "Assam",
            "Meghalaya",
            "Himachal Pradesh",
            "Mizoram",
        ],
        correctAnswerIndex: 1,
    },
    {
        question: "In which state is the 'City of Joy,' Kolkata, located and known for its cultural heritage and literature?",
        options: [
            "West Bengal",
            "Uttar Pradesh",
            "Bihar",
            "Tamil Nadu",
        ],
        correctAnswerIndex: 0,
    },
    {
        question: "In which Bollywood film did Aamir Khan play the role of a wrestler named 'Mahavir Singh Phogat'?",
        options: [
            "PK",
            "Dangal",
            "Lagaan",
            "3 Idiots",
        ],
        correctAnswerIndex: 1,
    },
    {
        question: "Which team won the inaugural IPL season in 2008?",
        options: [
            "Mumbai Indians",
            "Chennai Super Kings",
            "Kolkata Knight Riders",
            "Rajasthan Royals",
        ],
        correctAnswerIndex: 1,
    },
    {
        question: "What is the national emblem of India?",
        options: [
            "Lion Capital of Ashoka",
            "Taj Mahal",
            "Red Fort",
            "Hampi Monuments",
        ],
        correctAnswerIndex: 0
    },
    {
        question: "Who holds the record for the most runs in a single IPL season?",
        options: [
            "Virat Kohli",
            "Chris Gayle",
            "Suresh Raina",
            "David Warner",
        ],
        correctAnswerIndex: 0,
    },
    {
        question: "What is India's largest state by area?",
        options: [
            "Uttar Pradesh",
            "Madhya Pradesh",
            "Maharashtra",
            "Rajasthan",],
        correctAnswerIndex: 3,
    },
    {
        question: "Which city is represented by the IPL team 'Kings XI Punjab'?",
        options: [
            "Mumbai",
            "Chennai",
            "Kolkata",
            "Mohali",
        ],
        correctAnswerIndex: 3,
    },
    {
        question: "Which city is known as the 'Pink City' of India?",
        options: [
            "Delhi",
            "Jaipur",
            "Agra",
            "Mumbai",
        ],
        correctAnswerIndex: 1,
    },
    {
        question: "Who is known as the 'Captain Cool' in the IPL?",
        options: [
            "Virat Kohli",
            "MS Dhoni",
            "Rohit Sharma",
            "David Warner",
        ],
        correctAnswerIndex: 1,
    },
    {
        question: "What is the capital of India?",
        options: [
            "Mumbai",
            "Chennai",
            "Delhi",
            "Kolkata",
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Who is the leading run-scorer in the history of the IPL as of 2022?",
        options: [
            "Virat Kohli",
            "Suresh Raina",
            "Rohit Sharma",
            "David Warner",
        ],
        correctAnswerIndex: 0,
    },
    {
        question: "Which river is known as the 'Lifeline of South India'?",
        options: [
            "Kaveri River",
            "Krishna River",
            "Narmada River",
            "Tapti River",
        ],
        correctAnswerIndex: 1,
    },
    {
        question: "Which team won the IPL title in 2016?",
        options: [
            "Sunrisers Hyderabad",
            "Mumbai Indians",
            "Chennai Super Kings",
            "Kolkata Knight Riders",
        ],
        correctAnswerIndex: 0,
    },
    {
        question: "Which Bollywood actress is known for her role as 'Piku' in the film of the same name?",
        options: [
            "Deepika Padukone",
            "Priyanka Chopra",
            "Kareena Kapoor Khan",
            "Anushka Sharma",
        ],
        correctAnswerIndex: 0,
    },
    {
        question: "Which team won the IPL title in 2020, held in the United Arab Emirates?",
        options: [
            "Mumbai Indians",
            "Chennai Super Kings",
            "Sunrisers Hyderabad",
            "Royal Challengers Bangalore",
        ],
        correctAnswerIndex: 0,
    },
    {
        question: "What is the largest wildlife sanctuary in India?",
        options: [
            "Periyar Wildlife Sanctuary",
            "Kaziranga National Park",
            "Hemis National Park",
            "Sundarbans National Park",
        ],
        correctAnswerIndex: 2,
    },
    {
        question: "Who is the only bowler to have taken 5 wickets in an innings in the IPL twice?",
        options: [
            "Amit Mishra",
            "Lasith Malinga",
            "Yuzvendra Chahal",
            "Ravichandran Ashwin",
        ],
        correctAnswerIndex: 0,
    },
    {
        question: "In Hindu mythology, who is the goddess of wealth and prosperity?",
        options: [
            "Goddess Saraswati",
            "Goddess Lakshmi",
            "Goddess Durga",
            "Goddess Parvati",
        ],
        correctAnswerIndex: 1,
    },
    {
        question: "What is the cycle of birth, death, and rebirth in Hinduism known as?",
        options: [
            "Moksha",
            "Dharma",
            "Samsara",
            "Karma",
        ],
        correctAnswerIndex: 2,
    },
    {
        question: "Who was the first Prime Minister of India?",
        options: [
            "Mahatma Gandhi",
            "Indira Gandhi",
            "Sardar Patel",
            "Jawaharlal Nehru",
        ],
        correctAnswerIndex: 3
    },
    {
        question: "Which epic narrative poem tells the story of Lord Rama and is attributed to the sage Valmiki?",
        options: [
            "Mahabharata",
            "Ramayana",
            "Bhagavad Gita",
            "Upanishads",
        ],
        correctAnswerIndex: 1,
    },
    {
        question: "Which Indian city is famous for its IT industry and is known as the 'Silicon Valley of India'?",
        options: [
            "Hyderabad",
            "Bengaluru",
            "Chennai",
            "Mumbai"],
        correctAnswerIndex: 1,
    },
    {
        question: "Who is the elephant-headed god in Hinduism, often associated with wisdom and removing obstacles?",
        options: [
            "Lord Shiva",
            "Lord Brahma",
            "Lord Vishnu",
            "Lord Ganesha",
        ],
        correctAnswerIndex: 3,
    },
    {
        question: "Who is known as the 'Dancing Diva' of Bollywood?",
        options: [
            "Deepika Padukone",
            "Kareena Kapoor Khan",
            "Madhuri Dixit",
            "Priyanka Chopra",
        ],
        correctAnswerIndex: 2,
    },
    {
        question: "Which mountain range separates India from China?",
        options: [
            "Himalayas",
            "Aravalli Range",
            "Western Ghats",
            "Eastern Ghats",
        ],
        correctAnswerIndex: 0,
    },
    {
        question: "Which Bollywood movie features the character 'Gabbar Singh' as the iconic villain?",
        options: [
            "Sholay",
            "Deewar",
            "Don",
            "Lagaan",
        ],
        correctAnswerIndex: 0,
    },
    {
        question: "Who wrote the Indian national anthem 'Jana Gana Mana'?",
        options: [
            "Bankim Chandra Chattopadhyay",
            "Sarojini Naidu",
            "Rabindranath Tagore",
            "Vande Mataram",
        ],
        correctAnswerIndex: 2
    },
    {
        question: "Who is the director of the critically acclaimed Bollywood film 'Gangs of Wasseypur'?",
        options: [
            "Anurag Kashyap",
            "Rajkumar Hirani",
            "Sanjay Leela Bhansali",
            "Karan Johar",
        ],
        correctAnswerIndex: 0,
    },
    {
        question: "Which Indian state is known as the 'Land of Five Rivers' and is famous for its fertile agricultural land?",
        options: [
            "Punjab",
            "Kerala",
            "Gujarat",
            "Rajasthan",
        ],
        correctAnswerIndex: 0,
    },
    {
        question: "Who directed the Bollywood film 'Dil Chahta Hai'?",
        options: [
            "Karan Johar",
            "Farhan Akhtar",
            "Rohit Shetty",
            "Sanjay Leela Bhansali",
        ],
        correctAnswerIndex: 1,
    },
    {
        question: "Which river is considered the holiest river in India?",
        options: [
            "Ganga",
            "Yamuna",
            "Brahmaputra",
            "Godavari",
        ],
        correctAnswerIndex: 0,
    },
    {
        question: "Which Bollywood actress is known as the 'Desi Girl'?",
        options: [
            "Deepika Padukone",
            "Kareena Kapoor Khan",
            "Priyanka Chopra",
            "Anushka Sharma",
        ],
        correctAnswerIndex: 2,
    },
    {
        question: "Who is the highest wicket-taker in the history of the IPL?",
        options: [
            "Lasith Malinga",
            "Amit Mishra",
            "Dwayne Bravo",
            "Harbhajan Singh",
        ],
        correctAnswerIndex: 0,
    },
];
// There are 40 questions.

const levels = ['10', '20', '50', '100', '500', '1,000', '2,000', '3,000', '5,000', '8,000', '13,000', '21,000', '34,000', '50,000', '85,000', '1,00,000', '1,40,000', '1,80,000', '2,30,000', '2,80,000', '3,77,000', '4,85,000', '6,10,000', '8,30,000', '9,87,000', '11,50,000', '15,97,000', '20,00,000', '25,84,000', '41,81,000', '67,65,000', '1 Crore', '2.5 Crores', '3 Crores', '5 Crores', '7 Crores', '8.5 Crores', '10 Crores', '12 Crores', '24 Crores'];



shuffleArray(questions);

// Dispaly Questions:
let currentQuestionIndex = 0;
let money = 0;

function displayQuestion() {
    const questionContainer = document.getElementById('questionContainer');
    const optionsContainer = document.getElementById('optionsContainer');
    const questionNumberElement = document.getElementById('questionNumber');

    questionNumberElement.textContent = `Question No: ${currentQuestionIndex + 1}/40`;

    if (currentQuestionIndex < questions.length) {
        questionContainer.innerHTML = `<h3>Question for Rs. ${levels[currentQuestionIndex]}</h3>`;
        questionContainer.innerHTML += `<p>${questions[currentQuestionIndex].question}</p>`;
        optionsContainer.innerHTML = '';
        const firstRowContainer = document.createElement('div');
        const secondRowContainer = document.createElement('div');
        firstRowContainer.classList.add('row-container');
        secondRowContainer.classList.add('row-container');
        optionsContainer.appendChild(firstRowContainer);
        optionsContainer.appendChild(secondRowContainer);

        for (let i = 0; i < 4; i++) {
            const targetContainer = i < 2 ? firstRowContainer : secondRowContainer;
            targetContainer.innerHTML += `<button class="answer-button" onclick="checkAnswer(${i})">${questions[currentQuestionIndex].options[i]}</button>`;
        }
    } else {
        questionContainer.innerHTML = '<h3>No more questions</h3>';
        optionsContainer.innerHTML = '';
    }
}
displayQuestion();



// Reset the question:
let questionAnswered = false;
function resetQuestion() {
    questionAnswered = false;
    sessionStorage.setItem('questionAnswered', 'false');

    const optionElements = document.getElementsByClassName('option');
    for (let i = 0; i < optionElements.length; i++) {
        optionElements[i].disabled = false;
    }

    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = '';
    document.getElementById('buttonContainer').disabled = true;

    setTimeout(function () {
        shuffleArray(questions);
        currentQuestionIndex = 0;
        displayQuestion();
    }, 5000);
}



// Answer checking:
function checkAnswer(selectedOption) {
    if (questionAnswered) {
        return;
    }
    questionAnswered = true;

    const correctAnswerIndex = questions[currentQuestionIndex].correctAnswerIndex;
    const resultContainer = document.getElementById('resultContainer');

    const optionElements = document.getElementsByClassName('option');
    for (let i = 0; i < optionElements.length; i++) {
        optionElements[i].disabled = true;
    }

    // console.log(selectedOption, correctAnswerIndex, questions[correctAnswerIndex]);

    if (selectedOption === correctAnswerIndex) {
        resultContainer.innerHTML = `<p>Correct answer, you have won Rs. ${levels[currentQuestionIndex]}</p>`;
        money = levels[currentQuestionIndex];
        document.getElementById('buttonContainer').disabled = false;
    } else {
        resultContainer.innerHTML = "<p>Wrong answer!!</p>";
        document.getElementById('buttonContainer').disabled = true;

        setTimeout(function () {
            resultContainer.innerHTML = `<p>Your final take-home money is Rs. ${money}</p>`;
            setTimeout(function () {
                resultContainer.innerHTML = "<p>The game will restart in <span id='countdown'>5</span> seconds.</p>";
                countdownToRestart(5);
            }, 7000);
        }, 7000);
    }
}



// Restart countdown timer:
function countdownToRestart(seconds) {
    const countdownElement = document.getElementById('countdown');
    let remainingSeconds = seconds;
    const countdownInterval = setInterval(function () {
        remainingSeconds--;
        if (remainingSeconds < 1) {
            clearInterval(countdownInterval);
            restartGame();
        } else {
            countdownElement.textContent = remainingSeconds;
        }
    }, 1000);
}



// Restart the game:
function restartGame() {
    money = 0;
    document.getElementById('buttonContainer').disabled = true;
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = '';

    // Shuffle the questions
    shuffleArray(questions);

    // Reset to the first question
    currentQuestionIndex = 0;
    displayQuestion();
    questionAnswered = false;
}



// Change question:
function nextQuestion() {
    currentQuestionIndex++;
    const resultContainer = document.getElementById('resultContainer');
    resultContainer.innerHTML = '';
    if (currentQuestionIndex >= questions.length) {
        currentQuestionIndex = questions.length - 1;
        resultContainer.innerHTML = `<p>Your final take home money is Rs. ${money}</p>`;
        document.getElementById('buttonContainer').disabled = true;
    } else {
        displayQuestion();
        questionAnswered = false;
        document.getElementById('buttonContainer').disabled = true;
    }
}



// Shuffle Questions:
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}
// shuffleArray(questions);



// Change color of message
function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeTextColor() {
    var msgElement = document.querySelector("#msg h3");
    var questionElement = document.querySelector("#questionNumber");
    if (msgElement) {
        msgElement.style.color = getRandomColor();
    }
    if (questionElement) {
        questionElement.style.color = getRandomColor();
    }
}
setInterval(changeTextColor, 12000);



// Date and time function
function updateCountdown() {
    var currentTime = new Date();

    var day = currentTime.getDate();
    var month = currentTime.getMonth() + 1;
    var year = currentTime.getFullYear();

    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();
    var ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12;

    var formattedDate = `${day < 10 ? "0" : ""}${day}-${month < 10 ? "0" : ""}${month}-${year}`;
    var formattedTime = `${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds} ${ampm}`;
    document.getElementById("countdownText").innerText = `${formattedTime}\n${formattedDate}`;
}
updateCountdown();
var countdownInterval = setInterval(updateCountdown, 1000);



// Background Wallpapers
const backgrounds = [
    {
        src: '../images/image1.png',
        width: '100%',
        height: '100vh'
    },
    {
        src: '../images/image3.png',
        width: '100%',
        height: '100vh'
    },
    {
        src: '../images/image5.png',
        width: '100%',
        height: '100vh'
    },
    {
        src: '../images/image7.png',
        width: '100%',
        height: '100vh'
    },
    {
        src: '../images/image2.png',
        width: '100%',
        height: '100vh'
    },
    {
        src: '../images/image4.png',
        width: '100%',
        height: '100vh'
    },
    {
        src: '../images/image6.png',
        width: '100%',
        height: '100vh'
    },
    {
        src: '../images/image8.png',
        width: '100%',
        height: '100vh'
    }
];

// changeBackground();
let currentBackgroundIndex = 0;
function changeBackground() {
    const background = backgrounds[currentBackgroundIndex];
    document.body.style.backgroundRepeat = 'no-repeat';
    document.body.style.backgroundImage = `url(${background.src})`;
    document.body.style.backgroundSize = background.width + ' ' + background.height;
    currentBackgroundIndex = (currentBackgroundIndex + 1) % backgrounds.length;
}
changeBackground();
setInterval(changeBackground, 5000);

function updateBackground() {
    shuffleArray(backgrounds);
    const currentBackground = backgrounds[0];
}
setInterval(updateBackground, 5050);