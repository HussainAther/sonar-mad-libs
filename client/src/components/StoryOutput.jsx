import React from 'react';

function StoryOutput({ story }) {
  if (!story) return null;
  return (
    <div className="mt-6 bg-gray-100 p-4 rounded">
      <h2 className="text-xl font-semibold mb-2">Your Mad Lib:</h2>
      <p className="whitespace-pre-line">{story}</p>
    </div>
  );
}

export default StoryOutput;

