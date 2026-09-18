"use client"
import { useState, useEffect } from 'react';

export default function Home() {
  const [show, setShow] = useState(false);
  useEffect(()=>{ setTimeout(()=>setShow(true), 2000) },[]);

  return (
    <div style={{fontFamily:'Arial, sans-serif', background:'#f8fafc', margin:0, color:'#111'}}>

      {/* SECTION 1 - HEADER + HERO + PHOTO */}
      <div style={{background:'#fff', position:'sticky', top:0, zIndex:20, borderBottom:'1px solid #e5e7eb', padding:'10px 16px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <div style={{fontWeight:'900'}}>NCR Chimney Expert</div>
        <a href="tel:8796284796" style={{background:'#111', color:'#fff', padding:'8px 14px', borderRadius:'20px', textDecoration:'none', fontSize:'12px', fontWeight:'800'}}>8796284796</a>
      </div>

      <div style={{background:'#fff'}}>
        <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800" alt="Chimney" style={{width:'100%', height:'260px', objectFit:'cover'}} />
        <div style={{padding:'18px 16px', background:'linear-gradient(180deg,#fff,#f8fafc)'}}>
          <div style={{fontSize:'11px', background:'#fef2f2', color:'#dc2626', display:'inline-block', padding:'4px 10px', borderRadius:'20px', fontWeight:'800'}}>30 MIN ARRIVAL • SAME DAY SERVICE</div>
          <h1 style={{fontSize:'28px', fontWeight:'900', lineHeight:'1.1', margin:'10px 0 0}}>Kitchen Chimney Repair Service in Ghaziabad Noida</h1>
          <p style={{fontSize:'13px', color:'#64748b', marginTop:'10px', lineHeight:'1.6'}}>All brands repair, deep cleaning, motor, PCB expert technician at your doorstep.</p>
          <a href="tel:8796284796" style={{display:'inline-block', marginTop:'14px', background:'linear-gradient(90deg,#dc2626,#ef4444)', color:'#fff', padding:'13px 22px', borderRadius:'12px', textDecoration:'none', fontWeight:'900', boxShadow:'0 8px 20px rgba(220,38,38,0.3)'}}>📞 Call Now - 8796284796</a>
        </div>
      </div>

      {/* SECTION 2 - PROBLEMS TABLE */}
      <div style={{margin:'16px', background:'#fff', borderRadius:'16px', border:'1px solid #e2e8f0', overflow:'hidden', boxShadow:'0 4px 12px rgba(0,0,0,0.04)'}}>
        <div style={{padding:'14px 16px', fontWeight:'900', fontSize:'15px', background:'#0f172a', color:'#fff'}}>SECTION 2 - Common Chimney Problems</div>
        <div style={{display:'grid'}}>
          {[
            ["Not Starting","PCB Issue","PCB Repair"],
            ["Low Suction","Filter Choked","Deep Cleaning"],
            ["Loud Noise","Motor Fault","Motor Service"],
            ["Oil Leakage","Grease Block","Full Service"],
            ["Auto-Clean Fail","Sensor Fault","Sensor Fix"],
          ].map((r,i)=>(
            <div key={i} style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', padding:'12px 16px', fontSize:'12px', borderTop:'1px solid #f1f5f9'}}>
              <b>{r[0]}</b><span style={{color:'#64748b'}}>{r[1]}</span><span style={{background:'#f1f5f9', borderRadius:'6px', textAlign:'center', padding:'4px', fontWeight:'700'}}>{r[2]}</span>
            </div>
          ))}
        </div>
      </div>

      {/* SECTION 3 - WHY CHOOSE US */}
      <div style={{margin:'16px', background:'linear-gradient(135deg,#0f172a,#1e293b)', borderRadius:'16px', padding:'16px', color:'#fff'}}>
        <div style={{fontWeight:'900', fontSize:'15px'}}>SECTION 3 - Why Choose Us?</div>
        <div style={{marginTop:'14px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px'}}>
          <div style={{background:'rgba(255,255,255,0.08)', padding:'12px', borderRadius:'12px'}}><div style={{fontSize:'20px'}}>⚡</div><b style={{fontSize:'12px'}}>Same Day</b><div style={{fontSize:'10px', color:'#94a3b8'}}>30-45 Min Arrival</div></div>
          <div style={{background:'rgba(255,255,255,0.08)', padding:'12px', borderRadius:'12px'}}><div style={{fontSize:'20px'}}>🛡️</div><b style={{fontSize:'12px'}}>Warranty</b><div style={{fontSize:'10px', color:'#94a3b8'}}>30 Days Service</div></div>
          <div style={{background:'rgba(255,255,255,0.08)', padding:'12px', borderRadius:'12px'}}><div style={{fontSize:'20px'}}>🔧</div><b style={{fontSize:'12px'}}>All Brands</b><div style={{fontSize:'10px', color:'#94a3b8'}}>Expert Technician</div></div>
          <div style={{background:'rgba(255,255,255,0.08)', padding:'12px', borderRadius:'12px'}}><div style={{fontSize:'20px'}}>💰</div><b style={{fontSize:'12px'}}>No Hidden</b><div style={{fontSize:'10px', color:'#94a3b8'}}>Transparent Bill</div></div>
        </div>
      </div>

      {/* SECTION 4 - OUR SERVICES */}
      <div style={{margin:'16px', background:'#fff', borderRadius:'16px', border:'1px solid #e2e8f0', padding:'16px'}}>
        <div style={{fontWeight:'900', fontSize:'15px'}}>SECTION 4 - Our Services</div>
        <div style={{marginTop:'12px', display:'grid', gap:'10px'}}>
          {[
            "Deep Chemical Cleaning Service",
            "Motor Repair & Capacitor Change",
            "PCB, Touch & Gesture Control Repair",
            "Filter Replacement - Baffle, Mesh, Carbon",
            "Duct Cleaning & Installation",
            "New Chimney Installation",
            "AMC - Annual Maintenance"
          ].map(s=>(
            <div key={s} style={{display:'flex', gap:'10px', alignItems:'center', border:'1px solid #f1f5f9', padding:'10px 12px', borderRadius:'10px', fontSize:'13px'}}><div style={{width:'28px', height:'28px', background:'#fef2f2', borderRadius:'8px', display:'flex', alignItems:'center', justifyContent:'center'}}>✓</div>{s}</div>
          ))}
        </div>
      </div>

      {/* SECTION 5 - BRANDS BOX */}
      <div style={{margin:'16px', background:'#fff', borderRadius:'16px', border:'1px solid #e2e8f0', padding:'16px'}}>
        <div style={{fontWeight:'900', fontSize:'15px'}}>SECTION 5 - All Brands We Service</div>
        <div style={{marginTop:'14px', display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'10px'}}>
          {["Faber","Elica","Kaff","Hindware","Glen","Bosch","Hafele","Sunflame","Prestige","Pigeon","Eurodomo","Inalsa","Carysil","Seavy","Kutchina","Faber Hood","Elica Filterless","Kaff Auto-Clean","Hindware Opto","Glen Touch"].map(b=>(
            <div key={b} style={{border:'1px solid #e2e8f0', background:'#f8fafc', padding:'12px 6px', borderRadius:'12px', textAlign:'center', fontWeight:'800', fontSize:'11px'}}>{b}</div>
          ))}
        </div>
      </div>

      {/* SECTION 6 - HOW IT WORKS */}
      <div style={{margin:'16px', background:'#fff', borderRadius:'16px', border:'1px solid #e2e8f0', padding:'16px'}}>
        <div style={{fontWeight:'900', fontSize:'15px'}}>SECTION 6 - How It Works</div>
        <div style={{marginTop:'14px', display:'grid', gap:'12px'}}>
          <div style={{display:'flex', gap:'12px'}}><div style={{width:'32px', height:'32px', background:'#111', color:'#fff', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'900', fontSize:'12px'}}>1</div><div><b style={{fontSize:'13px'}}>Call Us 8796284796</b><div style={{fontSize:'11px', color:'#64748b'}}>Book your service on call</div></div></div>
          <div style={{display:'flex', gap:'12px'}}><div style={{width:'32px', height:'32px', background:'#111', color:'#fff', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'900', fontSize:'12px'}}>2</div><div><b style={{fontSize:'13px'}}>Technician Assigned</b><div style={{fontSize:'11px', color:'#64748b'}}>Nearest expert in 30-60 min</div></div></div>
          <div style={{display:'flex', gap:'12px'}}><div style={{width:'32px', height:'32px', background:'#111', color:'#fff', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'900', fontSize:'12px'}}>3</div><div><b style={{fontSize:'13px'}}>Diagnosis & Repair</b><div style={{fontSize:'11px', color:'#64748b'}}>Same visit repair with genuine parts</div></div></div>
          <div style={{display:'flex', gap:'12px'}}><div style={{width:'32px', height:'32px', background:'#16a34a', color:'#fff', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', fontWeight:'900', fontSize:'12px'}}>4</div><div><b style={{fontSize:'13px'}}>Testing & Payment</b><div style={{fontSize:'11px', color:'#64748b'}}>After testing, pay with bill</div></div></div>
        </div>
      </div>

      {/* SECTION 7 - AREAS + SEO + FOOTER */}
      <div style={{background:'#0f172a', color:'#fff', padding:'18px 16px', margin:'16px', borderRadius:'16px', marginBottom:'90px'}}>
        <div style={{fontWeight:'900', fontSize:'15px'}}>SECTION 7 - Service Areas + Contact</div>
        <div style={{fontSize:'12px', color:'#cbd5e1', marginTop:'10px', lineHeight:'1.8'}}>Ghaziabad, Indirapuram, Vaishali, Vasundhara, Kaushambi, Crossing Republik, Sahibabad, Mohan Nagar, Raj Nagar, Shalimar Garden, Patel Nagar, Noida Sector 18, 62, 50, Greater Noida, Delhi NCR</div>
        <div style={{marginTop:'14px', background:'rgba(255,255,255,0.08)', padding:'12px', borderRadius:'10px', textAlign:'center'}}>
          <div style={{fontWeight:'900', fontSize:'14px'}}>Call Technician Now</div>
          <a href="tel:8796284796" style={{display:'block', marginTop:'8px', background:'#16a34a', color:'#fff', padding:'12px', borderRadius:'10px', textDecoration:'none', fontWeight:'900'}}>📞 8796284796</a>
        </div>
        <div style={{marginTop:'16px', fontSize:'10px', color:'#475569', lineHeight:'1.9', borderTop:'1px solid #1e293b', paddingTop:'12px', textAlign:'justify'}}>
          SEO: kitchen chimney repair ghaziabad, chimney repair ghaziabad, chimney service ghaziabad, chimney cleaning ghaziabad, chimney technician ghaziabad, faber chimney repair ghaziabad, elica chimney repair ghaziabad, kaff chimney repair, hindware chimney repair, glen chimney repair, bosch chimney repair, hafele chimney repair, chimney motor repair, chimney pcb repair, chimney deep cleaning, chimney filter replacement, chimney duct cleaning, best chimney repair ghaziabad, same day chimney repair, doorstep chimney repair, chimney service near me, chimney repair near me, chimney repair indirapuram, chimney repair vaishali, chimney repair vasundhara, chimney repair noida, chimney service noida, pincode 201001 201014 201010 201012 201016 chimney repair
        </div>
      </div>

      <a href="tel:8796284796" style={{position:'fixed', bottom:0, left:0, right:0, background:'#16a34a', color:'#fff', padding:'16px', textAlign:'center', fontWeight:'900', fontSize:'15px', textDecoration:'none', zIndex:30}}>📞 CALL NOW - 8796284796</a>

      {show && (
        <div style={{position:'fixed', inset:0, background:'rgba(0,0,0,0.6)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:50, padding:'20px'}}>
          <div style={{background:'#fff', padding:'24px', borderRadius:'20px', width:'100%', maxWidth:'320px', textAlign:'center'}}>
            <div style={{fontWeight:'900', fontSize:'20px'}}>Need Chimney Repair?</div>
            <a href="tel:8796284796" style={{display:'block', background:'#111', color:'#fff', padding:'14px', borderRadius:'12px', textDecoration:'none', fontWeight:'900', marginTop:'16px'}}>📞 8796284796</a>
            <button onClick={()=>setShow(false)} style={{marginTop:'12px', border:'none', background:'none', color:'#94a3b8'}}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}
