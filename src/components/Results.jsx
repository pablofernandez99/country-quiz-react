import { useContext, useEffect } from 'react'

import { quizContext } from '../context/quizBank'

import cup from '../assets/images/cup.svg'

const Results = () => {

    const { score, setScore, setAmount, setPreviousQuestions } = useContext(quizContext)

    const playAgain = () => {
        setPreviousQuestions([])
        setAmount(0)
        setScore(0)
    }

    return (
        <div className="bg-white overflow-hidden p-8 w-96 mx-auto rounded rounded-xl text-center">
            <div className='w-48 mx-auto mb-5'>
                <img src={cup} alt='cup' className='w-full' />
            </div>
            <p className='text-3xl text-gray-700 font-bold mb-5'>Results</p>
            <p className='text-gray-400 mb-5'>You got {score} / 5 correct answers</p>
            <button
                onClick={playAgain}
                className='border border-gray-600 text-gray-700 rounded rounded-xl py-2 px-8 hover:bg-orange-400 hover:text-white hover:border-orange-400'>
                Try again
            </button>
        </div>
    )
}

export default Results