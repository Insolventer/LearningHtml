let score = 0; //Variable let/var 1 = name of the variable, 2 = value of the variable
let currentQuestionIndex = 0; // Same as above

let questions = [  // Array of questions array is a list of items/Strings/Numbers/Bla bla bla

    //1
    {
        question: "Was ist ein Algorithmus?", // Question this is the question 0
        //          0       1       2 These are the indexes of the answers the first is always 0
        answers: ["Eine Programmiersprache", "Eine Schritt-fuer-Schritt Anleitung zur Loesung eines Problems", "Ein Hardwareteil"], // Answers to the question
        correctAnswer: 1 // Correct answer to the question
    },
    //2
    {
        question: "Was versteht man unter einer Variablen?",
        answers: ["Ein Container fuer Daten", "Eine Schleife", "Eine Konstante"],
        correctAnswer: 0
    },
    //3
    {
        question: "Was ist ein Compiler?",
        answers: ["Ein Programm, das Quellcode in Maschinensprache uebersetzt", "Eine Art von Datenstruktur", "Ein Betriebssystem"],
        correctAnswer: 0
    },
    //4
    {
        question: "Was bedeutet 'IF' in einer Programmiersprache?",
        answers: ["Eine Schleife", "Eine Bedingte Anweisung", "Eine Funktion"],
        correctAnswer: 1
    },
    //5
    {
        question: "Was ist ein Array?",
        answers: ["Eine Funktion", "Eine Datenstruktur, die eine Liste von Werten speichert", "Ein Logikoperator"],
        correctAnswer: 1
    },
    //6
    {
        question: "Welches dieser ist eine Programmiersprache?",
        answers: ["HTML", "CSS", "Python"],
        correctAnswer: 2
    },
    //7
    {
        question: "Wofuer steht 'HTTP'?",
        answers: ["HyperText Transfer Protocol", "High Transfer Text Process", "HyperText Table Protocol"],
        correctAnswer: 0
    },
    //8
    {
        question: "Was ist ein Framework?",
        answers: ["Ein standardisiertes Geruest zur Entwicklung von Software", "Eine Art von Datenbank", "Eine Programmiersprache"],
        correctAnswer: 0
    },
    //9
    {
        question: "Was ist der Unterschied zwischen Frontend und Backend?",
        answers: ["Frontend betrifft die Benutzeroberflaeche, Backend die Serverlogik", "Backend ist schneller", "Frontend ist komplizierter"],
        correctAnswer: 0
    },
    //10
    {
        question: "Was ist die Hauptaufgabe eines Betriebssystems?",
        answers: ["Die Verwaltung von Hardware und Software-Ressourcen", "Das Rendern von Webseiten", "Das Speichern von Daten in der Cloud"],
        correctAnswer: 0
    }
];

function displayQuestion() {// Function to display the question

    if (currentQuestionIndex >= questions.length) { // Check if the current question index is greater than or equal to the length of the questions array

        document.getElementById("quiz-container").hidden = true; // Hide the quiz container, hidden is a boolean attribute that is used to hide or show an element
        document.getElementById("result").hidden = false; // Show the result container. Same as above
        document.getElementById("score").textContent = score; // Display the score in the result container, Text content is the text that will be displayed

        return; // Return from the function if the current question index is greater than or equal to the length of the questions array. In simple terms this means that we have reached the end of the quiz
    }

    let question = questions[currentQuestionIndex]; // We could do 0 But we don't want to hard code the number so we use currentQuestionIndex

    document.getElementById("question").textContent = question.question; // Display the question by getting the element by id and setting the text content to the question

    let answersDiv = document.getElementById("answers"); // Get the answers div element by id

    answersDiv.innerHTML = ""; // Clear the answers div element before displaying the new answers for the next question


    question.answers.forEach((answer, index) => { // Loop through the answers array of the questions
        let answerButton = document.createElement("button"); // Create a button element for each answer
        answerButton.classList.add("btn", "btn-dark", "me-2"); // Add classes to the button element using the classList property using bootstrap classes. We make them look cooler, We also add some space so they aren't so thigh
        answerButton.textContent = answer; // Set the text content of the button to the answer text
        answerButton.onclick = () => checkAnswer(index); // Add an onclick event listener to the button that calls the checkAnswer function with the answer index as an argument
        answersDiv.appendChild(answerButton); // Append the button to the answers div element
    });
} // Display the questions

displayQuestion(); // Call the function to display the first question

function checkAnswer(userAnswerIndex) {
    let correctAnswerIndex = questions[currentQuestionIndex].correctAnswer; // Get the correct answer of the current question by using the currentQuestionIndex. This will give us the index of the current question in the questions array

    if (userAnswerIndex === correctAnswerIndex) { // Check if the user answer is equal to the correct answer
        score++; // Increment the score by 1 if the answer is correct
    }


    //  currentQuestionIndex++;
    //  displayQuestion();
    // We could do this above, but we want clean code so we will call the NextQuestion function

    nextQuestion();
} // Check if the user answer is equal to the correct answer

function nextQuestion() { // Make the code cleaner by creating a function to display the next question
    currentQuestionIndex++; // Increment the current question index by 1
    displayQuestion(); // Display the next question
} // Increment the current question index by 1 so we can display the next question



