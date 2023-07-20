/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Dashboard from './Dashboard';
import * as useDashboardModule from './useDashboard';

jest.mock('./useDashboard', () => ({
  useDashboard: jest.fn(),
}));

describe('Dashboard component', () => {
  it('renders the username correctly', () => {
    useDashboardModule.useDashboard.mockReturnValue({
      username: 'JohnDoe',
      completedTopics: 5,
      totalQuizzes: 10,
      averageScore: 80,
      handleStartQuiz: jest.fn(),
    });

    const { getByText } = render(<Dashboard />);
    expect(getByText('Welcome, JohnDoe!')).toBeInTheDocument();
  });

  it('renders the progress overview correctly', () => {
    useDashboardModule.useDashboard.mockReturnValue({
      username: 'JohnDoe',
      completedTopics: 5,
      totalQuizzes: 10,
      averageScore: 80,
      handleStartQuiz: jest.fn(),
    });

    const { getByText } = render(<Dashboard />);
    expect(getByText('Completed Topics: 5')).toBeInTheDocument();
    expect(getByText('Total Quizzes Taken: 10')).toBeInTheDocument();
    expect(getByText('Average Score: 80%')).toBeInTheDocument();
  });

  it('calls handleStartQuiz when "Start New Quiz" button is clicked', () => {
    const handleStartQuiz = jest.fn();
    useDashboardModule.useDashboard.mockReturnValue({
      username: 'JohnDoe',
      completedTopics: 5,
      totalQuizzes: 10,
      averageScore: 80,
      handleStartQuiz,
    });

    const { getByText } = render(<Dashboard />);
    fireEvent.click(getByText('Start New Quiz'));
    expect(handleStartQuiz).toHaveBeenCalledTimes(1);
  });

  it('renders the profile, leaderboard, and settings buttons', () => {
    useDashboardModule.useDashboard.mockReturnValue({
      username: 'JohnDoe',
      completedTopics: 5,
      totalQuizzes: 10,
      averageScore: 80,
      handleStartQuiz: jest.fn(),
    });

    const { getByText } = render(<Dashboard />);
    expect(getByText('Profile')).toBeInTheDocument();
    expect(getByText('Leaderboard')).toBeInTheDocument();
    expect(getByText('Settings')).toBeInTheDocument();
  });
});
