"use client"
import { useState, useEffect } from 'react';

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(()=>{setTimeout(()=>setShowPopup(true), 1500)},[]);

  return (
    <div style={{fontFamily:'Inter, system-ui', background:'#f6f7f9', minHeight:'100vh', overflowX:'hidden'}}>
      <style>{`
        @keyframes pulse { 0%{transform:scale(1); box-shadow:0 0 0 0 rgba(22,163,74,0.7)} 70%{transform:scale(1.05); box-shadow:0 0 0 15px rgba(22,163,74,0)} 100%{transform:scale(1); box-shadow:0 0 0 0 rgba(22,163,74,0)}}
        @keyframes slideUp { from{transform:translateY(20px); opacity:0} to{transform:translateY(0); opacity:1}}
        @keyframes shimmer { 0%{background-position:-200% 0} 100%{background-position:200% 0}}
        @keyframes float { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)}}
        .glass {backdrop-filter:blur(12px); background:rgba(255,255,255,0.85)}
        .shimmer {background:linear-gradient(90deg,#f0f0f0 25%,#e0e0e0 50%,#f0f0f0 75%); background-size:200% 100%; animation:shimmer 1.5s infinite}
      `}</style>

      {/* DYNAMIC HEADER */}
      <div style={{background:'linear-gradient(135deg,#0f172a 0%,#1e293b 100%)', color:'white', padding:'10px 15px', display:'flex', justifyContent:'space-between', alignItems:'center', position:'sticky', top:0, zIndex:100, boxShadow:'0 4px 20px rgba(0,0,0,0.2)'}}>
        <div style={{display:'flex', alignItems:'center', gap:'10px', animation:'slideUp 0.6s ease'}}>
          <div style={{width:'36px', height:'36px', background:'linear-gradient(135deg,#ef4444,#dc2626)', borderRadius:'10px', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'900', animation:'float 3s ease infinite'}}>🔧</div>
          <div><div style={{fontWeight:'900', fontSize:'16px', letterSpacing:'-0.5px'}}>CHIMNEY EXPERT</div><div style={{fontSize:'10px', opacity:0.7, letterSpacing:'1px'}}>NEHRU NAGAR • NCR</div></div>
        </div>
        <a href="tel:8796284796" style={{background:'linear-gradient(135deg,#16a34a,#15803d)', color:'white', padding:'9px 16px', borderRadius:'25px', textDecoration:'none', fontWeight:'800', fontSize:'13px', animation:'pulse 2s infinite'}}>📞 8796284796</a>
      </div>

      {/* HERO - DYNAMIC PARALLAX */}
      <div style={{position:'relative', height:'380px', overflow:'hidden'}}>
        <img src="/c1.jpg" style={{width:'100%', height:'100%', objectFit:'cover', transform:'scale(1.1)', filter:'brightness(0.7)'}} />
        <div style={{position:'absolute', inset:0, background:'linear-gradient(180deg, transparent 0%, rgba(0,0,0,0.3) 40%, rgba(0,0,0,0.85) 100%)'}}></div>
        <div style={{position:'absolute', bottom:'20px', left:'15px', right:'15px', color:'white', animation:'slideUp 0.8s ease'}}>
          <div style={{background:'rgba(22,163,74,0.9)', display:'inline-block', padding:'5px 12px', borderRadius:'20px', fontSize:'11px', fontWeight:'800', letterSpacing:'1px', marginBottom:'10px'}}>🔥 4.9★ RATED • 12,500+ SERVICES</div>
          <h1 style={{fontSize:'32px', fontWeight:'900', margin:0, lineHeight:'0.95', letterSpacing:'-1px'}}>Pure Kitchen Air<br/><span style={{background:'linear-gradient(90deg,#facc15,#f97316)', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent'}}>Expert Service</span></h1>
          <p style={{fontSize:'13px', opacity:0.9, margin:'8px 0 12px'}}>Nehru Nagar Ghaziabad • Same Day @ ₹1250 Fixed</p>
          <div style={{display:'flex', gap:'8px'}}>
            <span style={{background:'white', color:'black', padding:'6px 12px', borderRadius:'20px', fontSize:'11px', fontWeight:'800'}}>✓ 30 Min Arrival</span>
            <span style={{background:'#facc15', color:'black', padding:'6px 12px', borderRadius:'20px', fontSize:'11px', fontWeight:'800'}}>₹1250 ONLY</span>
          </div>
        </div>
      </div>

      {/* FLOATING STATS - DYNAMIC */}
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'10px', padding:'0 15px', marginTop:'-25px', position:'relative', zIndex:10}}>
        {[
          ["12.5K+", "Services Done"],
          ["4.9★", "Rating"],
          ["30 Min", "Arrival"]
        ].map(([n,l])=>(
          <div key={n} style={{background:'white', padding:'14px', borderRadius:'16px', textAlign:'center', boxShadow:'0 8px 25px rgba(0,0,0,0.08)', animation:'slideUp 0.6s ease', border:'1px solid #f1f5f9'}}>
            <div style={{fontSize:'18px', fontWeight:'900'}}>{n}</div><div style={{fontSize:'10px', color:'#64748b', fontWeight:'600'}}>{l}</div>
          </div>
        ))}
      </div>

      {/* SERVICES CARD - DYNAMIC HOVER */}
      <div style={{padding:'15px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px', marginTop:'10px'}}>
        {[
          ["🧹", "Deep Clean", "₹1250"],
          ["⚙️", "Repair", "₹1250"],
          ["🔧", "Install", "₹1250"],
          ["🌀", "Motor", "₹1250"],
        ].map(([icon,title,price],i)=>(
          <div key={title} style={{background:'white', padding:'16px', borderRadius:'18px', boxShadow:'0 4px 15px rgba(0,0,0,0.05)', border:'1px solid #f1f5f9', animation:`slideUp ${0.4+i*0.1}s ease`, position:'relative', overflow:'hidden'}}>
            <div style={{position:'absolute', top:'-10px', right:'-10px', width:'60px', height:'60px', background:'linear-gradient(135deg,#fef3c7,#fde68a)', borderRadius:'50%', opacity:0.5}}></div>
            <div style={{fontSize:'22px'}}>{icon}</div>
            <div style={{fontWeight:'800', marginTop:'6px', fontSize:'14px'}}>{title}</div>
            <div style={{background:'#dcfce7', color:'#166534', display:'inline-block', padding:'3px 8px', borderRadius:'10px', fontSize:'11px', fontWeight:'800', marginTop:'5px'}}>{price}</div>
          </div>
        ))}
      </div>

      {/* SECOND IMAGE - WITH FRAME */}
      <div style={{padding:'15px'}}>
        <div style={{position:'relative', borderRadius:'20px', overflow:'hidden', boxShadow:'0 15px 40px rgba(0,0,0,0.15)', transform:'rotate(-1deg)'}}>
          <img src="/c2.jpg" style={{width:'100%', height:'240px', objectFit:'cover'}} />
          <div style={{position:'absolute', bottom:'10px', left:'10px', background:'rgba(0,0,0,0.8)', color:'white', padding:'6px 12px', borderRadius:'20px', fontSize:'11px', fontWeight:'700'}}>📸 Real Work - Hafele Chimney Service</div>
        </div>
      </div>

      {/* GEN1 STYLE TABLE - DYNAMIC */}
      <div style={{margin:'15px', background:'white', borderRadius:'20px', overflow:'hidden', boxShadow:'0 8px 30px rgba(0,0,0,0.06)'}}>
        <div style={{padding:'15px', background:'linear-gradient(135deg,#0f172a,#1e293b)', color:'white'}}><h2 style={{margin:0, fontSize:'16px', fontWeight:'800'}}>🛠️ Issues We Fix @ ₹1250</h2></div>
        <div style={{padding:'10px'}}>
          {[
            ["No Power", "PCB Fail", "Fixed @ ₹1250"],
            ["Low Suction", "Filter Block", "Clean @ ₹1250"],
            ["Noise", "Motor", "Repair @ ₹1250"],
          ].map(([p,m,f])=>(
            <div key={p} style={{display:'flex', justifyContent:'space-between', padding:'12px', borderBottom:'1px solid #f1f5f9', fontSize:'12px', alignItems:'center'}}>
              <b>{p}</b><span style={{color:'#64748b'}}>{m}</span><span style={{background:'#fef2f2', color:'#dc2626', padding:'4px 8px', borderRadius:'10px', fontWeight:'800', fontSize:'10px'}}>{f}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{height:'90px'}}></div>

      {/* SUPER DYNAMIC CALL BUTTON */}
      <a href="tel:8796284796" style={{position:'fixed', bottom:'15px', left:'15px', right:'15px', background:'linear-gradient(135deg,#16a34a 0%,#15803d 100%)', color:'white', padding:'18px', borderRadius:'30px', textAlign:'center', fontWeight:'900', fontSize:'18px', textDecoration:'none', boxShadow:'0 10px 30px rgba(22,163,74,0.4)', zIndex:99, display:'flex', alignItems:'center', justifyContent:'center', gap:'10px', animation:'pulse 2s infinite'}}>
        <span style={{width:'28px', height:'28px', background:'white', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', color:'#16a34a'}}>📞</span>
        CALL NOW - ₹1250 - 8796284796
      </a>

      {showPopup && (
        <div style={{position:'fixed', inset:0, background:'rgba(0,0,0,0.6)', backdropFilter:'blur(8px)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:200, padding:'20px'}}>
          <div style={{background:'white', padding:'25px', borderRadius:'24px', textAlign:'center', maxWidth:'320px', width:'100%', boxShadow:'0 25px 60px rgba(0,0,0,0.3)', animation:'slideUp 0.5s ease'}}>
            <div style={{width:'60px', height:'60px', background:'linear-gradient(135deg,#dcfce7,#bbf7d0)', borderRadius:'50%', margin:'0 auto 12px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'28px'}}>⚡</div>
            <h3 style={{margin:0, fontSize:'20px', fontWeight:'900'}}>30 Min Me Technician?</h3><p style={{fontSize:'13px', color:'#64748b', margin:'6px 0'}}>Nehru Nagar - Fixed ₹1250</p>
            <a href="tel:8796284796" style={{display:'block', background:'linear-gradient(135deg,#16a34a,#15803d)', color:'white', padding:'14px', borderRadius:'15px', textDecoration:'none', fontWeight:'900', marginTop:'12px'}}>📞 8796284796 CALL</a>
            <button onClick={()=>setShowPopup(false)} style={{marginTop:'10px', border:'none', background:'none', color:'#94a3b8', fontSize:'12px'}}>Baad me</button>
          </div>
        </div>
      )}
    </div>
  )
      }
