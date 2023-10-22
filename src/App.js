import React, { useState } from 'react';
import './App.css';

function App() {
  const [birthdate, setBirthdate] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = (event) => {
    event.preventDefault();
    const birthdateDate = new Date(birthdate);
    const today = new Date();
    const ageInMilliseconds = today - birthdateDate;
    const ageInYears = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
    setAge(ageInYears);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Your Age in Years</h1>
        <form onSubmit={calculateAge}>
          <label htmlFor="birthdate">Enter your date of birth:</label>
          <input
            type="date"
            id="birthdate"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
            required
          />
          <button type="submit" className='cal'>Calculate Age</button>
        </form>
        {age && <p>Your age is {age} years.</p>}
      </header>
    </div>
  );
}

export default App;
