import { useContext } from "react"

import QuestionBox from "./components/QuestionBox"
import Results from "./components/Results"

import { quizContext } from "./context/quizBank"

function App() {

  const { quizBank, amount } = useContext(quizContext)

  return (
    <div className="px-6 bg-app min-h-screen flex items-center justify-center font-lexend lg:px-0">

      {quizBank.length && amount < 5 && (
        <QuestionBox />
      )}

      {amount === 5 && (
        <Results />
      )}

    </div>
  )
}

export default App
