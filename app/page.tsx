"use client"
import { useState, useEffect } from 'react';

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(()=>{setTimeout(()=>setShowPopup(true), 2000)},[]);

  return (
    <div style={{fontFamily:'Arial, sans-serif', background:'#f5f5f5', margin:0, lineHeight:'1.5'}}>

      {/* CLEAN HEADER */}
      <div style={{background:'#fff', borderBottom:'2px solid #dc2626', padding:'10px 15px', display:'flex', justifyContent:'space-between', alignItems:'center', position:'sticky', top:0, zIndex:10}}>
        <div style={{fontWeight:'900', fontSize:'18px'}}><span style={{color:'#dc2626'}}>GEN1</span> Chimney Expert</div>
        <a href="tel:8796284796" style={{background:'#000', color:'#fff', padding:'8px 15px', borderRadius:'5px', textDecoration:'none', fontWeight:'bold', fontSize:'14px'}}>8796284796</a>
      </div>

      <div style={{background:'#fff', padding:'12px 15px'}}>
        <h1 style={{fontSize:'20px', fontWeight:'800', margin:'0 0 5px'}}>Kitchen Chimney Repair Service in Nehru Nagar Ghaziabad</h1>
        <p style={{fontSize:'13px', color:'#555', margin:0}}>Same Day Doorstep Service in Nehru Nagar, Indirapuram, Vaishali, Noida • Fixed Price <b style={{color:'#16a34a'}}>₹1250</b> • 30 Min Arrival</p>
      </div>

      {/* NO IMAGE NEEDED - CLEAN SERVICE BOXES */}
      <div style={{padding:'12px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px'}}>
        <div style={{background:'#fff', padding:'15px', borderRadius:'10px', textAlign:'center', border:'1px solid #e5e7eb'}}><div style={{fontSize:'24px'}}>🧹</div><div style={{fontWeight:'700', fontSize:'14px'}}>Deep Cleaning</div><div style={{color:'#16a34a', fontWeight:'800'}}>₹1250</div></div>
        <div style={{background:'#fff', padding:'15px', borderRadius:'10px', textAlign:'center', border:'1px solid #e5e7eb'}}><div style={{fontSize:'24px'}}>🔧</div><div style={{fontWeight:'700', fontSize:'14px'}}>Repair Service</div><div style={{color:'#16a34a', fontWeight:'800'}}>₹1250</div></div>
        <div style={{background:'#fff', padding:'15px', borderRadius:'10px', textAlign:'center', border:'1px solid #e5e7eb'}}><div style={{fontSize:'24px'}}>⚙️</div><div style={{fontWeight:'700', fontSize:'14px'}}>Motor Service</div><div style={{color:'#16a34a', fontWeight:'800'}}>₹1250</div></div>
        <div style={{background:'#fff', padding:'15px', borderRadius:'10px', textAlign:'center', border:'1px solid #e5e7eb'}}><div style={{fontSize:'24px'}}>🏠</div><div style={{fontWeight:'700', fontSize:'14px'}}>Installation</div><div style={{color:'#16a34a', fontWeight:'800'}}>₹1250</div></div>
      </div>

      {/* GEN1 EXACT TABLE */}
      <div style={{background:'#fff', margin:'10px', borderRadius:'10px', overflow:'hidden', border:'1px solid #e5e7eb'}}>
        <div style={{background:'#f9fafb', padding:'12px 15px', fontWeight:'800', fontSize:'15px', borderBottom:'1px solid #e5e7eb'}}>Top Chimney Issues We Resolve in Nehru Nagar</div>
        <table style={{width:'100%', borderCollapse:'collapse', fontSize:'13px'}}>
          <tr style={{background:'#f3f4f6'}}><th style={{padding:'10px', textAlign:'left', borderBottom:'1px solid #e5e7eb'}}>Problem</th><th style={{padding:'10px', textAlign:'left', borderBottom:'1px solid #e5e7eb'}}>Reason</th><th style={{padding:'10px', textAlign:'left', borderBottom:'1px solid #e5e7eb'}}>Solution</th></tr>
          <tr><td style={{padding:'10px', borderBottom:'1px solid #eee'}}>No Power</td><td style={{padding:'10px', borderBottom:'1px solid #eee'}}>PCB / Wiring</td><td style={{padding:'10px', borderBottom:'1px solid #eee', color:'#16a34a', fontWeight:'700'}}>₹1250 Fix</td></tr>
          <tr><td style={{padding:'10px', borderBottom:'1px solid #eee'}}>Low Suction</td><td style={{padding:'10px', borderBottom:'1px solid #eee'}}>Filter Block</td><td style={{padding:'10px', borderBottom:'1px solid #eee', color:'#16a34a', fontWeight:'700'}}>₹1250 Clean</td></tr>
          <tr><td style={{padding:'10px', borderBottom:'1px solid #eee'}}>Noise / Vibration</td><td style={{padding:'10px', borderBottom:'1px solid #eee'}}>Motor Fault</td><td style={{padding:'10px', borderBottom:'1px solid #eee', color:'#16a34a', fontWeight:'700'}}>₹1250 Repair</td></tr>
          <tr><td style={{padding:'10px'}}>Oil Leakage</td><td style={{padding:'10px'}}>Grease Jam</td><td style={{padding:'10px', color:'#16a34a', fontWeight:'700'}}>₹1250 Service</td></tr>
        </table>
      </div>

      {/* WHY CHOOSE */}
      <div style={{background:'#fff', margin:'10px', padding:'15px', borderRadius:'10px', border:'1px solid #e5e7eb'}}>
        <div style={{fontWeight:'800', fontSize:'15px', marginBottom:'10px'}}>⭐ Why Choose Gen1 Chimney Expert?</div>
        <div style={{fontSize:'13px', display:'grid', gap:'8px'}}>
          <div>⚡ <b>Same-Day Repairs</b> - Fast dispatch in Nehru Nagar</div>
          <div>👨‍🔧 <b>Local Experts</b> - Faber, Elica, Kaff, Glen, Hindware, Bosch</div>
          <div>🔩 <b>Genuine Parts</b> - Original warranty</div>
          <div>💰 <b>Fixed ₹1250</b> - No hidden charge</div>
        </div>
      </div>

      {/* BRANDS CLEAN */}
      <div style={{background:'#fff', margin:'10px', padding:'15px', borderRadius:'10px', border:'1px solid #e5e7eb'}}>
        <div style={{fontWeight:'800', fontSize:'14px'}}>All Brands Repair @ ₹1250 - Ghaziabad Noida</div>
        <div style={{display:'flex', flexWrap:'wrap', gap:'6px', marginTop:'10px'}}>
          {["Faber","Elica","Hindware","Kaff","Glen","Bosch","Hafele","Sunflame","Prestige"].map(b=>(
            <span key={b} style={{border:'1px solid #ddd', padding:'5px 10px', borderRadius:'5px', fontSize:'12px', fontWeight:'600'}}>{b}</span>
          ))}
        </div>
      </div>

      {/* AREAS */}
      <div style={{background:'#fff', margin:'10px', padding:'15px', borderRadius:'10px', border:'1px solid #e5e7eb', marginBottom:'80px'}}>
        <div style={{fontWeight:'800', fontSize:'14px'}}>Service Area - Nehru Nagar & NCR @ ₹1250</div>
        <div style={{fontSize:'12px', color:'#555', marginTop:'8px', lineHeight:'1.8'}}>
          Nehru Nagar 201001, Patel Nagar, Shalimar Garden, Raj Nagar, Indirapuram 201014, Vaishali 201010, Vasundhara 201012, Kaushambi, Crossing Republik 201016, Sahibabad, Mohan Nagar, Noida Sec 18 201301, Sec 62 201309, Greater Noida 201310
        </div>
      </div>

      <a href="tel:8796284796" style={{position:'fixed', bottom:'0', left:'0', right:'0', background:'#16a34a', color:'#fff', padding:'16px', textAlign:'center', fontWeight:'900', fontSize:'16px', textDecoration:'none', zIndex:20}}>📞 CALL NOW - FIXED ₹1250 - 8796284796</a>

      {showPopup && (
        <div style={{position:'fixed', inset:0, background:'rgba(0,0,0,0.5)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:50, padding:'20px'}}>
          <div style={{background:'#fff', padding:'20px', borderRadius:'12px', width:'100%', maxWidth:'300px', textAlign:'center'}}>
            <div style={{fontWeight:'800', fontSize:'18px'}}>Chimney Service @ ₹1250</div><div style={{fontSize:'12px', color:'#666', margin:'5px 0'}}>Nehru Nagar Ghaziabad - 30 Min</div>
            <a href="tel:8796284796" style={{display:'block', background:'#dc2626', color:'#fff', padding:'12px', borderRadius:'8px', textDecoration:'none', fontWeight:'800', marginTop:'12px'}}>📞 8796284796</a>
            <button onClick={()=>setShowPopup(false)} style={{marginTop:'10px', border:'none', background:'none', color:'#888', fontSize:'13px'}}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}
