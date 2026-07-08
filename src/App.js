import { useState, useEffect } from 'react';

function App() {
  const [gold, setGold] = useState(1000);
  const [soldiers, setSoldiers] = useState(5);
  const [level, setLevel] = useState(1);
  const [goldPerClick, setGoldPerClick] = useState(100);
  const [message, setMessage] = useState('مرحبا في ارش الواجيه المرجب 👑');

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('arshGame3DPro'));
    if(saved) {
      setGold(saved.gold); 
      setSoldiers(saved.soldiers); 
      setLevel(saved.level); 
      setGoldPerClick(saved.goldPerClick);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('arshGame3DPro', JSON.stringify({gold, soldiers, level, goldPerClick}));
  }, [gold, soldiers, level, goldPerClick]);

  const collectGold = () => {
    setGold(gold + goldPerClick * level); 
    setMessage(`جمعت ${goldPerClick * level} ذهب 🪙`)
  }

  const trainSoldier = () => {
    if(gold >= 200) {
      setGold(gold - 200); 
      setSoldiers(soldiers + 1); 
      setMessage('تم تدريب جندي ⚔️');
    } else {
      setMessage('الذهب غير كافي!')
    }
  }

  const attack = () => {
    if(soldiers >= 5) {
      const loot = Math.floor(Math.random() * 500) + 200; 
      setGold(gold + loot); 
      setSoldiers(soldiers - 1); 
      setMessage(`هجوم ناجح! غنمت ${loot} ذهب ⚔️`);
    } else {
      setMessage('تحتاج 5 جنود على الاقل')
    }
  }

  const upgradeCastle = () => {
    const cost = 500 * level; 
    if(gold >= cost) {
      setGold(gold - cost); 
      setLevel(level + 1); 
      setMessage(`تم تحديث القصر للمستوى ${level + 1} 🏰`);
    } else {
      setMessage(`تحتاج ${cost} ذهب`)
    }
  }

  const buyUpgrade = () => {
    if(gold >= 1000) {
      setGold(gold - 1000); 
      setGoldPerClick(goldPerClick + 50); 
      setMessage('ترقية الجمع +50 ذهب 💎');
    } else {
      setMessage('تحتاج 1000 ذهب')
    }
  }

  const btn = (color) => ({
    backgroundColor: color, 
    color: color==='gold'?'black':'white', 
    padding: '14px', 
    margin: '6px', 
    border: 'none', 
    borderRadius: '10px', 
    fontSize: '15px', 
    width: '90%', 
    fontWeight: 'bold',
    cursor: 'pointer'
  });

  return (
    <div style={{
      background: 'url(/bg.jpg) center/cover fixed', 
      color: 'white', 
      minHeight: '100vh', 
      textAlign: 'center', 
      padding: '20px', 
      direction: 'rtl', 
      fontFamily: 'Arial'
    }}>
      <h1>👑 أرش الواجيه المرجب 👑</h1>
      
      {/* القصر يتغير مع المستوى */}
      <img 
        src={`/castle${level}.png`} 
        alt="castle" 
        style={{
          width: '250px', 
          filter: `brightness(${0.8 + level*0.1})`, 
          transform: `scale(${1 + level*0.05})`, 
          transition: '0.5s'
        }} 
      />

      {/* الجنود صور حقيقية */}
      <div style={{display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '5px', margin: '20px'}}>
        {Array.from({length: soldiers > 15 ? 15 : soldiers}).map((_, i) => (
          <img 
            key={i} 
            src="/soldier.png" 
            alt="soldier" 
            style={{
              width: '40px', 
              transform: `rotateY(${i*10}deg)`,
              filter: 'drop-shadow(2px 2px 4px black)'
            }} 
          />
        ))}
        {soldiers > 15 && <p style={{fontSize: '20px'}}>+{soldiers - 15}</p>}
      </div>

      <h2>القصر مستوى {level} | الجنود: {soldiers} ⚔️</h2>
      <p style={{fontSize: '22px', fontWeight: 'bold'}}>الذهب: {gold.toLocaleString()} 🪙</p>
      <p style={{fontSize: '16px'}}>قوة الجمع: {goldPerClick * level} / ضغطة</p>
      <p style={{color: 'yellow', height: '25px', fontWeight: 'bold'}}>{message}</p>
      
      <button onClick={collectGold} style={btn('gold')}>جمع ذهب +{goldPerClick * level}</button>
      <button onClick={trainSoldier} style={btn('red')}>تدريب جندي -200</button>
      <button onClick={attack} style={btn('orange')}>هجوم -1 جندي</button>
      <button onClick={upgradeCastle} style={btn('purple')}>تحديث القصر -{500 * level}</button>
      <button onClick={buyUpgrade} style={btn('cyan')}>ترقية الجمع -1000</button>

      <p style={{marginTop: '30px', fontSize: '12px', opacity: 0.7}}>يتم الحفظ تلقائي</p>
    </div>
  );
}
export default App;
