import { useState } from 'react';

function App() {
  const [gold, setGold] = useState(900);
  const [soldiers, setSoldiers] = useState(1);
  const [level, setLevel] = useState(1);

  const collectGold = () => {
    setGold(gold + 100);
  };

  const trainSoldier = () => {
    if (gold >= 200) {
      setGold(gold - 200);
      setSoldiers(soldiers + 1);
    } else {
      alert('الذهب غير كافي لتدريب جندي!');
    }
  };

  return (
    <div style={{backgroundColor: '#0f0f23', color: 'white', minHeight: '100vh', textAlign: 'center', padding: '20px', direction: 'rtl'}}>
      <h1>أرش الواجيه 👑 المرجب 👑</h1>
      <h2>مستوى القلعة: {level}</h2>
      <p>🪙 الذهب: {gold}</p>
      <p>⚔️ عدد الجنود: {soldiers}</p>
      
      <button onClick={trainSoldier} style={{backgroundColor: 'red', color: 'white', padding: '15px', margin: '10px', border: 'none', borderRadius: '8px', fontSize: '16px'}}>
        تدريب جندي -200 ذهب
      </button>
      
      <button onClick={collectGold} style={{backgroundColor: 'gold', color: 'black', padding: '15px', margin: '10px', border: 'none', borderRadius: '8px', fontSize: '16px'}}>
        جمع ذهب +100
      </button>
    </div>
  );
}

export default App;
