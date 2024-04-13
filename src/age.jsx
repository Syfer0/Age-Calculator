import React, { useState } from 'react';

function AgeCalculator() {
  const [date, setDate] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [age, setAge] = useState('');

  const calculateAge = () => {
    const today = new Date();
    const birthDate = new Date(`${year}-${month}-${date}`);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    setAge(age);
  };

  return (
    <div>
      <h2>Age Calculator</h2>
      <div>
        <label>Date:</label>
        <input type="number" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      <div>
        <label>Month:</label>
        <input type="number" value={month} onChange={(e) => setMonth(e.target.value)} />
      </div>
      <div>
        <label>Year:</label>
        <input type="number" value={year} onChange={(e) => setYear(e.target.value)} />
      </div>
      <button onClick={calculateAge}>Calculate Age</button>
      {age !== '' && <p>Your age is {age} years.</p>}
    </div>
  );
}

export default AgeCalculator;
