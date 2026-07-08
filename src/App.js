import { useState, useEffect } from 'react';

function App() {
  const [gold, setGold] = useState(1000);
  const [soldiers, setSoldiers] = useState(5);
  const [level, setLevel] = useState(1);
  const [goldPerClick, setGoldPerClick] = useState(100);
  const [message, setMessage] = useState('مرحبا في ارش الواجيه المرجب 👑');

  // حفظ تلقائي
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('arshGameV2'));
    if(saved) {
      setGold(saved.gold);
      setSoldiers(saved.soldiers);
      setLevel(saved.level);
      setGoldPerClick(saved.goldPerClick);
    }
  }, []);
  useEffect(() => {
    localStorage.setItem('arshGameV2', JSON.stringify({gold, soldiers, level, goldPerClick}));
  }, [gold, soldiers, level, goldPerClick]);

  const collectGold = () => {
    setGold(gold + goldPerClick * level);
    setMessage(`جمعت ${goldPerClick * level} ذهب 🪙`);
  }
  const trainSoldier = () => {
    if(gold >= 200) {setGold(gold - 200); setSoldiers(soldiers + 1); setMessage('تم تدريب جندي ⚔️');} 
    else {setMessage('الذهب غير كافي!')}
  }
  const attack = () => {
    if(soldiers >= 5) {
      const loot = Math.floor(Math.random() * 500) + 200;
      setGold(gold + loot); setSoldiers(soldiers - 1);
      setMessage(`هجوم ناجح! غنمت ${loot} ذهب و خسرت جندي ⚔️`);
    } else {setMessage('تحتاج 5 جنود على الاقل')}
  }
  const upgradeCastle = () => {
    const cost = 500 * level;
    if(gold >= cost) {setGold(gold - cost); setLevel(level + 1); setMessage(`ترقية للقلعة مستوى ${level + 1} 🏰`);} 
    else {setMessage(`تحتاج ${cost} ذهب`)}
  }
  const buyUpgrade = () => {
    if(gold >= 1000) {setGold(gold - 1000); setGoldPerClick(goldPerClick + 50); setMessage('ترقية الجمع +50 ذهب 💎');} 
    else {setMessage('تحتاج 1000 ذهب')}
  }

  const btn = (color) => ({backgroundColor: color, color: color==='gold'?'black':'white', padding: '14px', margin: '6px', border: 'none', borderRadius: '10px', fontSize: '15px', width: '90%', fontWeight: 'bold'});

  return (
    <div style={{background: 'linear-gradient(#0f0f23, #1a1a3e)', color: 'white', minHeight: '100vh', textAlign: 'center', padding: '20px', direction: 'rtl', fontFamily: 'Arial'}}>
      <h1>👑 أرش الواجيه المرجب 👑</h1>
      <h3>مستوى القلعة: {level} 🏰</h3>
      <p style={{fontSize: '22px'}}>الذهب: {gold.toLocaleString()} 🪙</p>
      <p style={{fontSize: '18px'}}>الجنود: {soldiers} ⚔️ | جمع: +{goldPerClick * level}</p>
      <p style={{color: 'yellow', height: '25px', fontWeight: 'bold'}}>{message}</p>
      
      <button onClick={collectGold} style={btn('gold')}>جمع ذهب</button>
      <button onClick={trainSoldier} style={btn('red')}>تدريب جندي -200</button>
      <button onClick={attack} style={btn('orange')}>هجوم -1 جندي</button>
      <button onClick={upgradeCastle} style={btn('purple')}>ترقية القلعة -{500 * level}</button>
      <button onClick={buyUpgrade} style={btn('cyan')}>ترقية الجمع -1000</button>
    </div>
  );
}
export default App;
