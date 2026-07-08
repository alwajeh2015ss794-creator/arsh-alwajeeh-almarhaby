import { useState, useEffect } from 'react';

function App() {
  const [gold, setGold] = useState(1000);
  const [soldiers, setSoldiers] = useState(5);
  const [level, setLevel] = useState(1);
  const [goldPerClick, setGoldPerClick] = useState(100);
  const [message, setMessage] = useState('مرحبا في ارش الواجيه المرجب 👑');

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('arshGame3DPro'));
    if(saved) {setGold(saved.gold); setSoldiers(saved.soldiers); setLevel(saved.level); setGoldPerClick(saved.goldPerClick);}
  }, []);
  useEffect(() => {
    localStorage.setItem('arshGame3DPro', JSON.stringify({gold, soldiers, level, goldPerClick}));
  }, [gold, soldiers, level, goldPerClick]);

  const collectGold = () => {setGold(gold + goldPerClick * level); setMessage(`جمعت ${goldPerClick * level} ذهب 🪙`)}
  const trainSoldier = () => {if(gold >= 200) {setGold(gold - 200); setSoldiers(soldiers + 1); setMessage('تم تدريب جندي ⚔️');} else {setMessage('الذهب غير كافي!')}}
  const attack = () => {if(soldiers >= 5) {const loot = Math.floor(Math.random() * 500) + 200; setGold(gold + loot); setSoldiers(soldiers - 1); setMessage(`هجوم ناجح! غنمت ${loot} ذهب ⚔️`);} else {setMessage('تحتاج 5 جنود')}}
  const upgradeCastle = () => {const cost = 500 * level; if(gold >= cost) {setGold(gold - cost); setLevel(level + 1); setMessage(`تم تحديث القصر للمستوى ${level + 1} 🏰`);} else {setMessage(`تحتاج ${cost} ذهب`)}}
  const buyUpgrade = () => {if(gold >= 1000) {setGold(gold - 1000); setGoldPerClick(goldPerClick + 50); setMessage('ترقية الجمع +50 ذهب 💎');} else {setMessage('تحتاج 1000 ذهب')}}

  const btn = (color) => ({backgroundColor: color, color: color==='gold'?'black':'white', padding: '14px', margin: '6px', border: 'none', borderRadius: '10px', fontSize: '15px', width: '90%', fontWeight: 'bold'});

  return (
    <div style={{background: 'linear-gradient(#0f0f23, #1a1a3e)', color: 'white', minHeight: '100vh', textAlign: 'center', padding: '20px', direction: 'rtl', fontFamily: 'Arial'}}>
      <h1>👑 أرش الواجيه المرجب 👑</h1>
      
      {/* القصر الحجري 3D */}
      <div style={{
        width: '200px', height: '150px', margin: '20px auto',
        background: `linear-gradient(145deg, #${level*2+5}55, #${level*3+4}44)`,
        border: '3px solid #8B7355',
        boxShadow: `${level*5}px ${level*5}px 20px rgba(0,0,0,0.6)`,
        transform: `perspective(500px) rotateX(${level*2}deg)`,
        transition: 'all 0.5s', borderRadius: '5px'
      }}>
        <div style={{fontSize: '50px', paddingTop: '30px'}}>🏰</div>
      </div>

      {/* الجنود 3D */}
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px', margin: '20px'}}>
        {Array.from({length: soldiers > 20 ? 20 : soldiers}).map((_, i) => (
          <div key={i} style={{
            fontSize: '30px', 
            transform: `perspective(200px) rotateY(${i*10}deg)`,
            textShadow: '2px 2px 4px black'
          }}>🛡️</div>
        ))}
        {soldiers > 20 && <p>+{soldiers - 20}</p>}
      </div>

      <h2>القصر مستوى {level} | الجنود: {soldiers} ⚔️</h2>
      <p style={{fontSize: '22px'}}>الذهب: {gold.toLocaleString()} 🪙</p>
      <p style={{fontSize: '18px'}}>جمع: +{goldPerClick * level}</p>
      <p style={{color: 'yellow', height: '25px', fontWeight: 'bold'}}>{message}</p>
      
      <button onClick={collectGold} style={btn('gold')}>جمع ذهب</button>
      <button onClick={trainSoldier} style={btn('red')}>تدريب جندي -200</button>
      <button onClick={attack} style={btn('orange')}>هجوم -1 جندي</button>
      <button onClick={upgradeCastle} style={btn('purple')}>تحديث القصر -{500 * level}</button>
      <button onClick={buyUpgrade} style={btn('cyan')}>ترقية الجمع -1000</button>
    </div>
  );
}
export default App;
