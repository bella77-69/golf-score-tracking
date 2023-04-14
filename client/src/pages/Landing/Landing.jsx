import React from 'react';

function LandingPage() {
  return (
    <div className="landing-page">
      <header>
        <h1>Golf Score Tracker</h1>
        <p>Track your golf scores and improve your game!</p>
      </header>
      <main>
        <h2>Features</h2>
        <ul>
          <li>Record and view scores for individual golf games</li>
          <li>Create and manage courses and tee boxes</li>
          <li>View statistics and progress over time</li>
        </ul>
        <button>Get Started</button>
      </main>
      <footer>
        <p>&copy; 2023 Golf Score Tracker. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default LandingPage;