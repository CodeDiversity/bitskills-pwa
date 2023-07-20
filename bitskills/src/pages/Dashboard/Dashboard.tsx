import React from 'react';
import { useDashboard } from './useDashboard';

const Dashboard = () => {

  const {username, completedTopics, totalQuizzes, averageScore, handleStartQuiz} = useDashboard();
 
  return (
    <div>
      <h1>Dashboard</h1>
      <h2>Welcome, {username}!</h2>
      <div>
        <h3>Progress Overview</h3>
        <p>Completed Topics: {completedTopics}</p>
        <p>Total Quizzes Taken: {totalQuizzes}</p>
        <p>Average Score: {averageScore}%</p>
      </div>
      <button onClick={handleStartQuiz}>Start New Quiz</button>
      <div>
        <button>Profile</button>
        <button>Leaderboard</button>
        <button>Settings</button>
      </div>
    </div>
  );
};

export default Dashboard;

