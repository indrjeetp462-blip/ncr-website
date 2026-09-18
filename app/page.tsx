"use client"
import { useState, useEffect } from 'react';

export default function Home() {
  const [show, setShow] = useState(false);
  useEffect(()=>{ setTimeout(()=>setShow(true), 2500) },[]);

  return (
    <div style={{fontFamily:'Arial, sans-serif', background:'#f8fafc', margin:0, color:'#111'}}>

      <div style={{background:'#fff', padding:'12px 16px', display:'flex', justifyContent:'space-between', alignItems:'center', position:'sticky', top:0, zIndex:30, borderBottom:'1px solid #e5e7eb'}}>
        <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
          <div style={{width:'32px', height:'32px', background:'linear-gradient(135deg,#dc2626,#ef4444)', borderRadius:'8px', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:'900'}}>N</div>
          <div style={{fontWeight:'900', fontSize:'17px'}}>NCR Chimney <span style={{color:'#dc2626'}}>Expert</span></div>
        </div>
        <a href="tel:8796284796" style={{background:'#111827', color:'#fff', padding:'8px 14px', borderRadius:'20px', textDecoration:'none', fontWeight:'800', fontSize:'12px'}}>8796284796</a>
      </div>

      {/* CHIMNEY PHOTO - 1 ONLY */}
      <div style={{background:'#fff'}}>
        <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800" alt="Kitchen Chimney Repair Ghaziabad" style={{width:'100%', height:'250px', objectFit:'cover'}} />
        <div style={{padding:'16px'}}>
          <h1 style={{fontSize:'26px', fontWeight:'900', lineHeight:'1.1', margin:0}}>Kitchen Chimney Repair Service</h1>
          <p style={{fontSize:'13px', color:'#64748b', marginTop:'8px', lineHeight:'1.6'}}>Same-day doorstep repair for all brands. Motor, PCB, Deep Cleaning, Filter Change - Expert technician at your home in Ghaziabad, Noida, Delhi NCR.</p>
          <a href="tel:8796284796" style={{display:'inline-block', marginTop:'12px', background:'#dc2626', color:'#fff', padding:'12px 20px', borderRadius:'12px', textDecoration:'none', fontWeight:'900', fontSize:'14px'}}>📞 Call Technician - 8796284796</a>
        </div>
      </div>

      <div style={{margin:'16px', background:'#fff', borderRadius:'16px', border:'1px solid #e2e8f0', overflow:'hidden'}}>
        <div style={{padding:'14px 16px', fontWeight:'900', fontSize:'15px'}}>Top Problems We Fix</div>
        <div style={{display:'grid'}}>
          {[
            {p:'No Power / Not Starting', r:'PCB Fault', s:'PCB Repair'},
            {p:'Low Suction', r:'Filter Choked', s:'Cleaning'},
            {p:'Loud Noise', r:'Motor Fault', s:'Service'},
            {p:'Oil Leakage', r:'Grease Jam', s:'Full Service'},
            {p:'Auto-Clean Fail', r:'Sensor Issue', s:'Module Fix'},
          ].map((x,i)=>(
            <div key={i} style={{display:'grid', gridTemplateColumns:'1.2fr 1fr 0.8fr', padding:'12px 16px', fontSize:'12px', borderTop:'1px solid #f1f5f9'}}>
              <div style={{fontWeight:'700'}}>{x.p}</div><div style={{color:'#64748b'}}>{x.r}</div><div style={{background:'#f1f5f9', padding:'4px 8px', borderRadius:'6px', fontWeight:'700', textAlign:'center'}}>{x.s}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{margin:'16px', background:'#fff', borderRadius:'16px', border:'1px solid #e2e8f0', padding:'16px'}}>
        <div style={{fontWeight:'900', fontSize:'15px', display:'flex', alignItems:'center', gap:'8px'}}>
          <div style={{width:'28px', height:'28px', background:'#0f172a', borderRadius:'8px', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff'}}>®</div>
          All Brands We Service
        </div>
        <div style={{marginTop:'14px', display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'10px'}}>
          {["Faber","Elica","Kaff","Hindware","Glen","Bosch","Hafele","Sunflame","Prestige","Pigeon","Eurodomo","Inalsa","Carysil","Seavy","Kutchina","Elica Filterless","Kaff Auto-Clean","Hindware Opto","Glen Touch","Bosch Chimney"].map((b)=>(
            <div key={b} style={{border:'1px solid #e2e8f0', background:'#f8fafc', padding:'12px 6px', borderRadius:'12px', textAlign:'center', fontWeight:'800', fontSize:'11px'}}>{b}</div>
          ))}
        </div>
      </div>

      <div style={{margin:'16px', background:'#fff', borderRadius:'16px', border:'1px solid #e2e8f0', padding:'16px'}}>
        <div style={{fontWeight:'900'}}>Why Choose Us?</div>
        <div style={{fontSize:'13px', lineHeight:'2', marginTop:'8px'}}>✓ Same Day Service - 30-45 Min Arrival<br/>✓ All Brands Specialist<br/>✓ Genuine Spare Parts<br/>✓ Transparent Billing</div>
      </div>

      <div style={{background:'#0f172a', color:'#fff', padding:'18px 16px', margin:'16px', borderRadius:'16px'}}>
        <div style={{fontWeight:'800', fontSize:'14px'}}>Service Areas</div>
        <div style={{fontSize:'11px', color:'#94a3b8', marginTop:'8px', lineHeight:'1.8'}}>Ghaziabad, Patel Nagar, Shalimar Garden, Raj Nagar, Indirapuram, Vaishali, Vasundhara, Kaushambi, Crossing Republik, Sahibabad, Mohan Nagar, Noida Sec 18, Sec 62, Greater Noida, Delhi NCR</div>
        <div style={{marginTop:'12px', fontSize:'10px', color:'#475569', lineHeight:'1.9', borderTop:'1px solid #1e293b', paddingTop:'12px', textAlign:'justify'}}>
          kitchen chimney repair service ghaziabad, chimney repair ghaziabad, chimney service ghaziabad, chimney cleaning ghaziabad, chimney technician ghaziabad, chimney mechanic ghaziabad, chimney installation ghaziabad, auto clean chimney repair, filterless chimney repair, faber chimney repair, elica chimney repair, kaff chimney repair, hindware chimney repair, glen chimney repair, bosch chimney repair, hafele chimney repair, sunflame chimney service, chimney motor repair, chimney pcb repair, chimney deep cleaning, chimney filter replacement, chimney duct cleaning, best chimney repair service in ghaziabad, same day chimney repair, doorstep chimney repair, professional chimney technician, chimney service near me, chimney repair near me, faber chimney service center ghaziabad, elica chimney service center, kaff chimney service center, chimney amc service ghaziabad, pincode 201001 chimney repair, 201014 chimney service, 201010 chimney repair
        </div>
      </div>

      <a href="tel:8796284796" style={{position:'fixed', bottom:0, left:0, right:0, background:'#16a34a', color:'#fff', padding:'16px', textAlign:'center', fontWeight:'900', fontSize:'15px', textDecoration:'none', zIndex:30}}>📞 CALL NOW - 8796284796</a>

      {show && (
        <div style={{position:'fixed', inset:0, background:'rgba(0,0,0,0.6)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:50, padding:'20px'}}>
          <div style={{background:'#fff', padding:'24px', borderRadius:'20px', width:'100%', maxWidth:'320px', textAlign:'center'}}>
            <div style={{fontWeight:'900', fontSize:'20px'}}>Need Chimney Repair?</div>
            <div style={{fontSize:'13px', color:'#64748b', margin:'8px 0'}}>Technician Available Now</div>
            <a href="tel:8796284796" style={{display:'block', background:'#111827', color:'#fff', padding:'14px', borderRadius:'12px', textDecoration:'none', fontWeight:'900', marginTop:'16px'}}>📞 8796284796 CALL NOW</a>
            <button onClick={()=>setShow(false)} style={{marginTop:'12px', border:'none', background:'none', color:'#94a3b8'}}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}
