const quizBank = [
    {
        question: "Lima is the capital of",
        answers: ["Paraguay", "Argentina", "Mexico", "Peru"],
        correct: "Peru",
        id: "1",
    },
    {
        question: "Berlin is the capital of",
        answers: ["Spain", "Italy", "Portugal", "Germany"],
        correct: "Germany",
        id: "2",
    },
    {
        question: "Paris is the capital of",
        answers: ["France", "Chile", "Italy", "Germany"],
        correct: "France",
        id: "3",
    },
    {
        question: "San José is the capital of",
        answers: ["Peru", "Uruguay", "Costa Rica", "Nicaragua"],
        correct: "Costa Rica",
        id: "4",
    },
    {
        question: "Madrid is the capital of",
        answers: ["Italy", "Spain", "Bolivia", "Chile"],
        correct: "Spain",
        id: "5",
    },
    {
        question: "Ottawa is the capital of",
        answers: ["Mexico", "United States", "Canada", "England"],
        correct: "Canada",
        id: "6",
    },
    {
        question: "Montevideo is the capital of",
        answers: ["Argentina", "Spain", "Uruguay", "Italy"],
        correct: "Uruguay",
        id: "7",
    },
    {
        question: "Buenos Aires is the capital of",
        answers: ["Chile", "Paraguay", "Venezuela", "Argentina"],
        correct: "Argentina",
        id: "8",
    },
    {
        question: "Asunción is the capital of",
        answers: ["Paraguay", "Chile", "Bolivia", "Colombia"],
        correct: "Paraguay",
        id: "9",
    },
    {
        question: "London is the capital of",
        answers: ["Italy", "England", "Portugal", "France"],
        correct: "England",
        id: "10",
    },
    {
        question: "Tokyo is the capital of",
        answers: ["China", "Japan", "South Korea", "Vietnam"],
        correct: "Japan",
        id: "11",
    },
    {
        question: "Canberra is the capital of",
        answers: ["New Zealand", "Australia", "Fiji", "Papua New Guinea"],
        correct: "Australia",
        id: "12",
    },
    {
        question: "Rome is the capital of",
        answers: ["Italy", "Greece", "Portugal", "Turkey"],
        correct: "Italy",
        id: "13",
    },
    {
        question: "Cairo is the capital of",
        answers: ["Egypt", "Morocco", "Sudan", "Libya"],
        correct: "Egypt",
        id: "14",
    },
    {
        question: "Moscow is the capital of",
        answers: ["Russia", "Ukraine", "Belarus", "Poland"],
        correct: "Russia",
        id: "15",
    },
]


export default () => Promise.resolve(quizBank.sort(() => 0.5 - Math.random()).slice(0, 1))