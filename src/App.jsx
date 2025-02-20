import {Route, Routes} from "react-router-dom";
import Questions from "./page/questions/Questions.jsx";
import Quiz from "./page/quiz/Quiz.jsx";

function App() {
  return (
      <Routes>
          <Route path="/" element={<Questions />} />
          <Route path="/quiz/:subject" element={<Quiz />} />
      </Routes>
  )
}

export default App
