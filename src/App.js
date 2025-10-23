import React, { useState } from 'react';
import './App.css';

function App() {
  const [showSecret, setShowSecret, showWOTD, serShowWOTD] = useState(false);

  const revealSecret = () => {
    setShowSecret(false);
  };
  const revealWOTD = () => {
    setShowWOTD(false);
  };

  // STUDENT INFO - Replace these with your own information!
  const studentInfo = {
    name: '[Your Name Here]',
    grade: '[Your Grade]',
    hobby: '[Your Hobby]',
    interest: '[Something You Love]',
    reason: '[Why You Want to Learn Coding]',
    superpower: '[What Your Superpower Would Be]',
    favoriteMovie: '[Your Favorite Movie]',
    favoriteFood: '[Your Favorite Food]',
    favoriteSong: '[Your Favorite Song]',
    favoriteSubject: '[Your Favorite Subject]',
    secretFact: '[Something Cool About You That Might Surprise People!]',
    projectIdea: '[What You Want to Build in This Class]',
    whyItsCool: '[Why Your Project Idea Would Be Awesome]',
    talkAbout: '[Topics You Like Talking About]',
  };

  return (
    <div className="container">
      <h1>Hi! I'm {studentInfo.name} 👋</h1>
      <p className="subtitle">Welcome to my awesome bio page!</p>

      <div className="section">
        <h3>🎯 About Me</h3>
        <p>
          I'm a {studentInfo.grade} grader who loves {studentInfo.hobby}. I'm
          excited to learn coding because {studentInfo.reason}. My superpower
          would be {studentInfo.superpower}!
        </p>
      </div>

      <div className="section">
        <h3>⭐ My Favorites</h3>
        <div className="favorites-grid">
          <div className="favorite-item">
            <div>🎮</div>
            <strong>Movie:</strong>
            <br />
            {studentInfo.favoriteGame}
          </div>
          <div className="favorite-item">
            <div>🍕</div>
            <strong>Food:</strong>
            <br />
            {studentInfo.favoriteFood}
          </div>
          <div className="favorite-item">
            <div>🎵</div>
            <strong>Song:</strong>
            <br />
            {studentInfo.favoriteSong}
          </div>
          <div className="favorite-item">
            <div>📚</div>
            <strong>Subject:</strong>
            <br />
            {studentInfo.favoriteSubject}
          </div>
        </div>
      </div>

      <div className="fun-fact" onClick={revealSecret}>
        <h2>Click me for a fun fact!</h2>
      </div>

      {showSecret && (
        <div className="section show">
          <h3>🤫 Secret Fun Fact</h3>
          <p>{studentInfo.secretfact}</p>
        </div>
      )}

      <div className="section">
        <h3>🚀 What I Want to Build</h3>
        <p>
          In this coding class, I hope to create {studentInfo.projectIdea}. It
          would be awesome because {studentInfo.whyItsCool}!
        </p>
      </div>

      <div className="section" style={{ textAlign: 'center' }}>
        <h3>💬 Ask Me About</h3>
        <p>{studentInfo.talkAbout}</p>
      </div>
  
      <div className="w-o-t-d" onClick={revealSecret}>
        <h2>Click me for the word of the day!</h2>
      </div>
      {showWOTD && (
        <div className="section show">
          <h3>Word of the Day</h3>
          <p>{studentInfo.secretfact}</p>
        </div>
      )}
    </div>
  );
}

export default App;
