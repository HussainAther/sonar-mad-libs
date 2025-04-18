import React, { useState } from 'react';
import StoryOutput from './components/StoryOutput';

function App() {
  const [words, setWords] = useState('');
  const [style, setStyle] = useState('Fairy Tale');
  const [story, setStory] = useState('');

  const handleGenerate = async () => {
    const res = await fetch('http://localhost:5000/api/generate', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ words: words.split(','), style }),
    });
    const data = await res.json();
    setStory(data.story);
  };

  return (
    <div className="p-8 max-w-xl mx-auto">
      <h1 className="text-3xl font-bold mb-4">Sonar Mad Libs</h1>
      <input
        type="text"
        placeholder="Enter 3-5 words separated by commas"
        className="w-full border p-2 mb-4"
        onChange={(e) => setWords(e.target.value)}
      />
      <select
        className="w-full border p-2 mb-4"
        onChange={(e) => setStyle(e.target.value)}
      >
        <option>Fairy Tale</option>
        <option>Sci-Fi</option>
        <option>Academic Essay</option>
        <option>News Report</option>
      </select>
      <button
        onClick={handleGenerate}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Generate Story
      </button>
      <StoryOutput story={story} />
    </div>
  );
}

export default App;

