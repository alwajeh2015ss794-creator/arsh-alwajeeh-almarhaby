import React, { useState } from 'react';

export default function App() {
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const [booked, setBooked] = useState(false);

  const handleBooking = () => {
    if(checkIn && checkOut) {
      setBooked(true);
    }
  };

  return (
    <div style={{fontFamily: 'Arial', direction: 'rtl', textAlign: 'center', padding: '20px', background: '#f5f5f5', minHeight: '100vh'}}>
      
      <h1 style={{color: '#8B4513'}}>🏰 عرش الوجيه المرحب</h1>
      <p style={{color: '#555'}}>حجز غرف فندقية فاخرة</p>

      <div style={{background: 'white', padding: '20px', borderRadius: '10px', maxWidth: '400px', margin: '20px auto', boxShadow: '0 2px 10px rgba(0,0,0,0.1)'}}>
        
        <h2>احجز غرفتك الان</h2>
        
        <label>تاريخ الدخول:</label>
        <input type="date" value={checkIn} onChange={(e) => setCheckIn(e.target.value)} style={{width: '100%', padding: '8px', margin: '10px 0'}} />
        
        <label>تاريخ الخروج:</label>
        <input type="date" value={checkOut} onChange={(e) => setCheckOut(e.target.value)} style={{width: '100%', padding: '8px', margin: '10px 0'}} />
        
        <label>عدد الضيوف:</label>
        <input type="number" value={guests} onChange={(e) => setGuests(e.target.value)} min="1" style={{width: '100%', padding: '8px', margin: '10px 0'}} />
        
        <button onClick={handleBooking} style={{width: '100%', padding: '12px', background: '#8B4513', color: 'white', border: 'none', borderRadius: '5px', fontSize: '16px', cursor: 'pointer'}}>
          احجز الان
        </button>

        {booked && <p style={{color: 'green', marginTop: '15px'}}>✅ تم استلام طلب الحجز بنجاح!</p>}
      </div>

    </div>
  );
}
