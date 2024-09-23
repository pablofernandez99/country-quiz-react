import { createContext, useState, useEffect } from 'react'

import quizServices from '../quizServices/questions'

export const quizContext = createContext()

const QuizContextProvider = ({ children }) => {

    const [quizBank, setQuizBank] = useState([])
    const [score, setScore] = useState(0)
    const [amount, setAmount] = useState(0)
    const [showResponse, setShowResponse] = useState(false)

    const [previousQuestions, setPreviousQuestions] = useState([])

    const getQuestions = () => {

        quizServices().then(question => {
            if (previousQuestions.includes(question[0].id)) {
                return getQuestions()
            } else {
                setQuizBank(question)
                setPreviousQuestions([...previousQuestions, question[0].id])
            }

        })
    }

    useEffect(() => {
        getQuestions()
    }, [amount === 0])

    return (
        <quizContext.Provider
            value={{
                quizBank,
                getQuestions,
                score,
                setScore,
                amount,
                setAmount,
                showResponse,
                setShowResponse,
                previousQuestions,
                setPreviousQuestions
            }}
        >
            {children}
        </quizContext.Provider>
    )
}

export default QuizContextProvider