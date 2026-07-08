import React, { useState } from 'react';

function App() {
  const [gold, setGold] = useState(1000);
  const [soldiers, setSoldiers] = useState(0);
  const [castle, setCastle] = useState(1);

  const trainSoldier = () => {
    if(gold >= 200) {
      setGold(gold - 200);
      setSoldiers(soldiers + 1);
    }
  }

  return (
    <div style={{padding: '20px', textAlign: 'center', direction: 'rtl', background: '#1a1a2e', color: 'white', minHeight: '100vh'}}>
      <h1>👑 أرش الواجيه المرحب 👑</h1>
      <h2>مستوى القلعة: {castle}</h2>
      <p>الذهب: {gold} 🪙</p>
      <p>عدد الجنود: {soldiers} ⚔️</p>
      
      <button onClick={() => setGold(gold + 100)} style={{padding: '12px', margin: '5px', background: 'gold', border: 'none', borderRadius: '8px'}}>
        جمع ذهب +100
      </button>
      <button onClick={trainSoldier} style={{padding: '12px', margin: '5px', background: 'red', color: 'white', border: 'none', borderRadius: '8px'}}>
        تدريب جندي -200 ذهب
      </button>
    </div>
  );
}

export default App;
