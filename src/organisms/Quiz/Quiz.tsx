import React, { useState } from 'react';
import './Quiz.css';

interface QuizProps {
  questions: Array<{
    question: string;
    options: string[];
    correctAnswer: number;
  }>;
}

const Quiz: React.FC<QuizProps> = ({ questions }) => {
  const [currentQuestion, setCurrentQuestion] = useState<number>(0);
  const [userAnswers, setUserAnswers] = useState<number[]>([]);
  const [showScore, setShowScore] = useState<boolean>(false);

  const handleAnswerClick = (optionIndex: number) => {
    const updatedUserAnswers = [...userAnswers];
    updatedUserAnswers[currentQuestion] = optionIndex;
    setUserAnswers(updatedUserAnswers);
  };

  const handleNextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setUserAnswers([]);
    setShowScore(false);
  };

  const calculateScore = () => {
    let score = 0;
    userAnswers.forEach((userAnswer, index) => {
      if (userAnswer === questions[index].correctAnswer) {
        score++;
      }
    });
    return score;
  };

  return (
    <div className="quiz-container">
      {showScore ? (
        <div className="quiz-result">
          <h2>Quiz Completed!</h2>
          <p>Your Score: {calculateScore()} out of {questions.length}</p>
          <button onClick={handleRestartQuiz}>Restart Quiz</button>
        </div>
      ) : (
        <div className="quiz-question">
          <h2>Question {currentQuestion + 1}</h2>
          <p>{questions[currentQuestion].question}</p>
          <div className="quiz-options">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerClick(index)}
                disabled={userAnswers[currentQuestion] !== undefined}
                className={
                  userAnswers[currentQuestion] === index
                    ? questions[currentQuestion].correctAnswer === index
                      ? 'correct'
                      : 'incorrect'
                    : ''
                }
              >
                {option}
              </button>
            ))}
          </div>
          <button onClick={handleNextQuestion} disabled={userAnswers[currentQuestion] === undefined}>
            {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
