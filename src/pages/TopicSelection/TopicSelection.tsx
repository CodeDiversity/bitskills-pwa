import React, { useEffect, useState } from 'react';
import topicsData from '../../data/topics.json';
import { useNavigate } from 'react-router-dom';

interface Topic {
  id: number;
  name: string;
  description: string;
}

const TopicsPage: React.FC = () => {
  const [selectedTopic, setSelectedTopic] = useState<Topic | null>(null);
  const [topics, setTopics] = useState<Topic[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    setTopics(topicsData);
  }, []);

  const handleTopicSelection = (topic: Topic) => {
    setSelectedTopic(topic);
  };

  const handleStartQuiz = () => {
    // Navigate to the quiz page
    navigate('/quiz/react')
  };

  return (
    <div>
      <h1>Topics Page</h1>
      <h2>Select a Web Development Topic</h2>
      <ul>
        {topics.map((topic) => (
          <li
            key={topic.id}
            onClick={() => handleTopicSelection(topic)}
            className={selectedTopic === topic ? 'selected' : ''}
          >
            <h3>{topic.name}</h3>
            <p>{topic.description}</p>
          </li>
        ))}
      </ul>
      {selectedTopic && (
        <>
          <p>You have selected: {selectedTopic.name}</p>
        </>
        // Display any additional information or actions related to the selected topic
      )}
      <button onClick={handleStartQuiz}>Start Quiz</button>
    </div>
  );
};

export default TopicsPage;
