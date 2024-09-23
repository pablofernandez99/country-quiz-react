import { useContext } from "react"

import { quizContext } from "../context/quizBank"

const Options = ({ option, correct }) => {

    const { setScore, showResponse, setShowResponse } = useContext(quizContext)

    const handleClick = () => {
        if (option === correct) {
            setScore(score => score + 1)
        }

        setShowResponse(true)
    }

    const getButtonStyles = () => {
        if (showResponse) {
            return option === correct
                ? "border-green-400 bg-green-400 text-white"
                : "border-red-400 bg-red-400 text-white text-white"
        }

        return " text-gray-600 hover:bg-orange-400 hover:border-orange-400 hover:text-white"
    }

    return (
        <button
            onClick={!showResponse ? handleClick : undefined}
            disabled={showResponse}
            className={`border-2 mb-5 text-left py-3 px-2 rounded ${getButtonStyles()}`}
        >
            {option}
        </button>
    )
}

export default Options