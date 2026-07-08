import { useState } from 'react';

function App() {
  const [gold, setGold] = useState(900);
  const [soldiers, setSoldiers] = useState(2);
  const [level, setLevel] = useState(1);

  return (
    <div style={{backgroundColor: '#0f0f23', color: 'white', minHeight: '100vh', textAlign: 'center', padding: '20px', direction: 'rtl'}}>
      <h1>👑 أرش الواجيه 👑</h1>
      <h1>المرجب 👑</h1>
      <h2>مستوى القلعة: {level}</h2>
      <p>الذهب: {gold} 🪙</p>
      <p>عدد الجنود: {soldiers} ⚔️</p>
      
      <button onClick={() => {
        if(gold >= 200) {setGold(gold - 200); setSoldiers(soldiers + 1)} 
        else {alert('الذهب غير كافي!')}
      }} style={{backgroundColor: 'red', color: 'white', padding: '15px', margin: '10px', border: 'none', borderRadius: '8px'}}>
        تدريب جندي -200 ذهب
      </button>
      
      <button onClick={() => setGold(gold + 100)} style={{backgroundColor: 'gold', color: 'black', padding: '15px', margin: '10px', border: 'none', borderRadius: '8px'}}>
        جمع ذهب +100
      </button>
    </div>
  );
}
export default App;
