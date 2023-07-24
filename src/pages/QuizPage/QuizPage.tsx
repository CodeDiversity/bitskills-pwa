import React from 'react';
import Quiz from '../../organisms/Quiz/Quiz';
import { useParams } from 'react-router-dom';
import question from '../../data/reactQuestions.json';
import './QuizPage.css';


type QuizQuestion = {
    question: string;
    options: string[];
    correctAnswer: number;
  };

const QuizPage: React.FC<{}> = () => {
//   const topicId = useParams<{ topicId: string }>().topicId;
const currentQuestions: QuizQuestion[] = question.questions;
  return (
    <div className="QuizPage">
      <h1>Test Your Knowledge</h1>
      <Quiz questions={currentQuestions} />
    </div>
  );
};

export default QuizPage;
