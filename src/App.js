import { useState } from "react";
import { CssBaseline, Box, Container } from "@mui/material";
import { lightBlue } from "@mui/material/colors";

import QuestionCard from "./QuestionCard";
import Result from "./Result";
import questions from "./data/questions";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState([]);
  const finishedQuiz = currentQuestionIndex === questions.length;
  const currentQuestion = questions[currentQuestionIndex];

  const goToNext = () => {
    setCurrentQuestionIndex((prevState) => prevState + 1);
  }

  const submitAnswer = (value) => {
    setAnswers((prevState) => [...prevState, value]);
    goToNext();
  }

  const restartQuiz = () => {
    setCurrentQuestionIndex(0);
    setAnswers([]);
  }

  return (
    <div>
      <CssBaseline />
      <Box sx={{
        backgroundColor: lightBlue[500],
        height: "100vh", display: "flex", alignItems: "center"
      }}>
        <Container maxWidth="sm">
          {finishedQuiz ? <Result restartQuiz={restartQuiz} answers={answers} /> : <QuestionCard question={currentQuestion} questionNumber={currentQuestionIndex + 1}
            submitAnswer={submitAnswer} />}

        </Container>
      </Box>
    </div>
  );
}

export default App;
