"use client"
import { useState, useEffect } from 'react';

export default function Home() {
  const [show, setShow] = useState(false);
  useEffect(()=>{ setTimeout(()=>setShow(true), 2500) },[]);

  return (
    <div style={{fontFamily:'Inter, Arial, sans-serif', background:'#f8fafc', margin:0, color:'#111'}}>

      <div style={{background:'rgba(255,255,255,0.9)', backdropFilter:'blur(10px)', padding:'12px 16px', display:'flex', justifyContent:'space-between', alignItems:'center', position:'sticky', top:0, zIndex:30, borderBottom:'1px solid #e5e7eb'}}>
        <div style={{display:'flex', alignItems:'center', gap:'8px'}}>
          <div style={{width:'32px', height:'32px', background:'linear-gradient(135deg,#dc2626,#ef4444)', borderRadius:'8px', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontWeight:'900', fontSize:'14px'}}>N</div>
          <div style={{fontWeight:'900', fontSize:'17px', letterSpacing:'-0.5px'}}>NCR Chimney <span style={{color:'#dc2626'}}>Expert</span></div>
        </div>
        <a href="tel:8796284796" style={{background:'#111827', color:'#fff', padding:'8px 14px', borderRadius:'20px', textDecoration:'none', fontWeight:'800', fontSize:'12px'}}>📞 8796284796</a>
      </div>

      <div style={{background:'linear-gradient(135deg,#0f172a,#1e293b)', color:'#fff', padding:'24px 16px 20px', position:'relative', overflow:'hidden'}}>
        <div style={{position:'absolute', top:'-40px', right:'-40px', width:'120px', height:'120px', background:'rgba(220,38,38,0.3)', borderRadius:'50%', filter:'blur(30px)'}}></div>
        <div style={{fontSize:'11px', background:'rgba(255,255,255,0.15)', display:'inline-block', padding:'4px 10px', borderRadius:'20px', letterSpacing:'1px'}}>📍 NEHRU NAGAR GHAZIABAD • 30 MIN ARRIVAL</div>
        <h1 style={{fontSize:'28px', fontWeight:'900', lineHeight:'1.1', margin:'12px 0 0', letterSpacing:'-1px'}}>Kitchen Chimney<br/>Repair Service</h1>
        <p style={{fontSize:'13px', color:'#cbd5e1', marginTop:'10px', lineHeight:'1.6'}}>Same-day doorstep repair for all brands. Motor, PCB, Deep Cleaning, Filter Change - Expert technician at your home.</p>
        <div style={{marginTop:'16px', display:'flex', gap:'10px'}}>
          <a href="tel:8796284796" style={{background:'#dc2626', color:'#fff', padding:'12px 20px', borderRadius:'12px', textDecoration:'none', fontWeight:'900', fontSize:'14px', boxShadow:'0 10px 20px rgba(220,38,38,0.3)'}}>Call Technician</a>
          <div style={{background:'rgba(255,255,255,0.1)', padding:'12px 14px', borderRadius:'12px', fontSize:'12px', fontWeight:'700'}}>✓ No Visit Charge</div>
        </div>
      </div>

      <div style={{margin:'-12px 16px 0', background:'#fff', borderRadius:'16px', padding:'4px', display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'4px', boxShadow:'0 10px 30px rgba(0,0,0,0.08)', position:'relative', zIndex:10}}>
        <div style={{textAlign:'center', padding:'12px 4px'}}><div style={{fontSize:'20px'}}>⚡</div><div style={{fontWeight:'800', fontSize:'12px', marginTop:'4px'}}>Same Day</div><div style={{fontSize:'10px', color:'#64748b'}}>Fast Service</div></div>
        <div style={{textAlign:'center', padding:'12px 4px', borderLeft:'1px solid #f1f5f9', borderRight:'1px solid #f1f5f9'}}><div style={{fontSize:'20px'}}>🛡️</div><div style={{fontWeight:'800', fontSize:'12px', marginTop:'4px'}}>Warranty</div><div style={{fontSize:'10px', color:'#64748b'}}>30 Days</div></div>
        <div style={{textAlign:'center', padding:'12px 4px'}}><div style={{fontSize:'20px'}}>🔧</div><div style={{fontWeight:'800', fontSize:'12px', marginTop:'4px'}}>All Brands</div><div style={{fontSize:'10px', color:'#64748b'}}>Expert Fix</div></div>
      </div>

      <div style={{margin:'16px', background:'#fff', borderRadius:'16px', border:'1px solid #e2e8f0', overflow:'hidden', boxShadow:'0 4px 12px rgba(0,0,0,0.04)'}}>
        <div style={{padding:'14px 16px', fontWeight:'900', fontSize:'15px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>Top Problems We Fix <span style={{background:'#fef2f2', color:'#dc2626', fontSize:'11px', padding:'4px 8px', borderRadius:'20px'}}>Nehru Nagar</span></div>
        <div style={{display:'grid'}}>
          {[
            {p:'No Power / Not Starting', r:'PCB / Wiring', s:'PCB Repair'},
            {p:'Low Suction Smoke', r:'Filter Choked', s:'Cleaning'},
            {p:'Loud Noise Vibration', r:'Motor Fault', s:'Motor Service'},
            {p:'Oil Leakage Sticky', r:'Grease Jam', s:'Full Service'},
            {p:'Auto-Clean Failure', r:'Sensor Issue', s:'Module Fix'},
          ].map((x,i)=>(
            <div key={i} style={{display:'grid', gridTemplateColumns:'1.2fr 1fr 0.8fr', padding:'12px 16px', fontSize:'12px', borderTop:'1px solid #f1f5f9', alignItems:'center'}}>
              <div style={{fontWeight:'700'}}>{x.p}</div><div style={{color:'#64748b'}}>{x.r}</div><div style={{background:'#f1f5f9', padding:'4px 8px', borderRadius:'6px', fontWeight:'700', fontSize:'11px', textAlign:'center'}}>{x.s}</div>
            </div>
          ))}
        </div>
      </div>

      <div style={{margin:'16px', background:'linear-gradient(135deg,#fff,#fef2f2)', borderRadius:'16px', border:'1px solid #fecaca', padding:'16px'}}>
        <div style={{fontWeight:'900', fontSize:'15px'}}>Why Nehru Nagar Trusts Us?</div>
        <div style={{marginTop:'12px', display:'grid', gap:'10px'}}>
          <div style={{display:'flex', gap:'10px', alignItems:'center'}}><div style={{width:'36px', height:'36px', background:'#dc2626', borderRadius:'10px', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff'}}>⚡</div><div><div style={{fontWeight:'800', fontSize:'13px'}}>Lightning Fast Arrival</div><div style={{fontSize:'11px', color:'#64748b'}}>Technician in 30-45 min in Nehru Nagar</div></div></div>
          <div style={{display:'flex', gap:'10px', alignItems:'center'}}><div style={{width:'36px', height:'36px', background:'#0f172a', borderRadius:'10px', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff'}}>👨‍🔧</div><div><div style={{fontWeight:'800', fontSize:'13px'}}>All Brands Specialist</div><div style={{fontSize:'11px', color:'#64748b'}}>Faber, Elica, Kaff, Glen, Hindware, Bosch, Hafele</div></div></div>
          <div style={{display:'flex', gap:'10px', alignItems:'center'}}><div style={{width:'36px', height:'36px', background:'#16a34a', borderRadius:'10px', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff'}}>✓</div><div><div style={{fontWeight:'800', fontSize:'13px'}}>Genuine Parts + Bill</div><div style={{fontSize:'11px', color:'#64748b'}}>Transparent pricing, no hidden charges</div></div></div>
        </div>
      </div>

      <div style={{margin:'16px', background:'#fff', borderRadius:'16px', border:'1px solid #e2e8f0', padding:'16px', boxShadow:'0 4px 12px rgba(0,0,0,0.04)'}}>
        <div style={{fontWeight:'900', fontSize:'15px', display:'flex', alignItems:'center', gap:'8px'}}>
          <div style={{width:'28px', height:'28px', background:'#0f172a', borderRadius:'8px', display:'flex', alignItems:'center', justifyContent:'center', color:'#fff', fontSize:'14px'}}>®</div>
          All Brands We Service
        </div>
        <div style={{marginTop:'14px', display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'10px'}}>
          {[
            "Faber","Elica","Kaff","Hindware","Glen","Bosch","Hafele","Sunflame","Prestige","Pigeon","Eurodomo","Inalsa","Carysil","Seavy","Kutchina","Faber Hood","Elica Filterless","Kaff Auto-Clean","Hindware Opto","Glen Touch"
          ].map((brand)=>(
            <div key={brand} style={{border:'1px solid #e2e8f0', background:'linear-gradient(135deg,#f8fafc,#ffffff)', padding:'12px 8px', borderRadius:'12px', textAlign:'center', fontWeight:'800', fontSize:'11px', boxShadow:'0 2px 6px rgba(0,0,0,0.03)'}}>
              {brand}
            </div>
          ))}
        </div>
        <div style={{marginTop:'12px', background:'#fef2f2', border:'1px dashed #fecaca', padding:'10px', borderRadius:'10px', fontSize:'11px', color:'#991b1b', fontWeight:'600', textAlign:'center'}}>
          ✓ Genuine Spare Parts Available For All Brands • PCB, Motor, Filter, Touch Panel
        </div>
      </div>

      <div style={{margin:'16px', background:'#fff', borderRadius:'16px', border:'1px solid #e2e8f0', padding:'16px'}}>
        <div style={{fontWeight:'900'}}>Our Services</div>
        <div style={{marginTop:'12px', display:'flex', flexWrap:'wrap', gap:'8px'}}>
          {["Deep Cleaning","Motor Repair","PCB Repair","Filter Change","Duct Service","Installation","AMC"].map(t=>(
            <span key={t} style={{background:'#f8fafc', border:'1px solid #e2e8f0', padding:'7px 12px', borderRadius:'10px', fontSize:'12px', fontWeight:'700'}}>{t}</span>
          ))}
        </div>
      </div>

      <div style={{background:'#0f172a', color:'#fff', padding:'18px 16px', marginTop:'16px', borderRadius:'16px', marginLeft:'16px', marginRight:'16px'}}>
        <div style={{fontWeight:'800', fontSize:'14px'}}>Service Areas - Full NCR</div>
        <div style={{fontSize:'11px', color:'#94a3b8', marginTop:'8px', lineHeight:'1.8'}}>Nehru Nagar 201001, Patel Nagar, Shalimar Garden, Raj Nagar, Indirapuram 201014, Vaishali 201010, Vasundhara 201012, Kaushambi, Crossing Republik 201016, Sahibabad, Mohan Nagar, Noida Sec 18, Sec 62, Greater Noida</div>
      </div>

      <div style={{background:'#fff', margin:'16px', padding:'16px', borderRadius:'16px', border:'1px solid #e2e8f0', marginBottom:'90px'}}>
        <div style={{fontWeight:'800', fontSize:'12px', color:'#111'}}>SEO Keywords - Chimney Repair Ghaziabad Noida</div>
        <div style={{fontSize:'10px', color:'#94a3b8', marginTop:'10px', lineHeight:'2', textAlign:'justify'}}>
          kitchen chimney repair service in nehru nagar ghaziabad, chimney repair nehru nagar, chimney service nehru nagar ghaziabad, chimney cleaning nehru nagar, chimney technician nehru nagar, chimney mechanic nehru nagar, chimney installation nehru nagar, auto clean chimney repair nehru nagar, filterless chimney repair nehru nagar, faber chimney repair nehru nagar, elica chimney repair nehru nagar, kaff chimney repair nehru nagar, hindware chimney repair nehru nagar, glen chimney repair nehru nagar, bosch chimney repair nehru nagar, hafele chimney repair nehru nagar, sunflame chimney service nehru nagar, prestige chimney repair nehru nagar, pigeon chimney repair nehru nagar, chimney repair service in patel nagar ghaziabad, chimney repair patel nagar, chimney service patel nagar, chimney cleaning patel nagar, chimney repair shalimar garden, chimney service shalimar garden, chimney cleaning shalimar garden, chimney repair raj nagar, chimney service raj nagar, chimney repair raj nagar extension, chimney service raj nagar extension, chimney repair service in indirapuram, chimney service indirapuram, chimney cleaning indirapuram, chimney technician indirapuram, chimney repair vaishali, chimney service vaishali, chimney cleaning vaishali, chimney repair vasundhara, chimney service vasundhara, chimney cleaning vasundhara, chimney repair kaushambi, chimney service kaushambi, chimney repair crossing republik, chimney service crossing republik, chimney repair sahibabad, chimney service sahibabad, chimney repair mohan nagar, chimney service mohan nagar, chimney repair govindpuram, chimney service govindpuram, chimney repair service in noida, chimney service noida, chimney cleaning noida, chimney repair noida sector 18, chimney repair noida sector 62, chimney repair noida sector 50, chimney repair greater noida, chimney service greater noida, kitchen chimney deep cleaning service, chimney motor repair, chimney pcb repair, chimney touch panel repair, chimney suction problem, chimney noise problem, chimney oil leakage, chimney filter replacement, chimney duct cleaning, best chimney repair service in ghaziabad, same day chimney repair, doorstep chimney repair, professional chimney technician, local chimney service near me, chimney service near me, chimney repair near me, faber chimney service center ghaziabad, elica chimney service center ghaziabad, kaff chimney service center, hindware chimney service center, glen chimney service center, bosch chimney service center, chimney amc service ghaziabad, chimney maintenance service, pincode 201001 chimney repair, 201014 chimney service, 201010 chimney repair, 201012 chimney service, nehru nagar ii chimney repair, new nehru nagar chimney repair, chimney repair ahinsa khand, chimney service nyay khand, chimney repair shakti khand, chimney repair gaur city, chimney service wave city, chimney repair rajendra nagar
        </div>
      </div>

      <a href="tel:8796284796" style={{position:'fixed', bottom:'0', left:'0', right:'0', background:'linear-gradient(90deg,#16a34a,#15803d)', color:'#fff', padding:'16px', textAlign:'center', fontWeight:'900', fontSize:'15px', textDecoration:'none', zIndex:30, letterSpacing:'0.5px'}}>📞 CALL NOW - 8796284796 • 30 MIN ARRIVAL</a>

      {show && (
        <div style={{position:'fixed', inset:0, background:'rgba(15,23,42,0.7)', backdropFilter:'blur(8px)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:50, padding:'20px'}}>
          <div style={{background:'#fff', padding:'24px', borderRadius:'20px', width:'100%', maxWidth:'320px', textAlign:'center'}}>
            <div style={{width:'60px', height:'60px', background:'linear-gradient(135deg,#dc2626,#ef4444)', borderRadius:'50%', margin:'0 auto 12px', display:'flex', alignItems:'center', justifyContent:'center', fontSize:'28px', color:'#fff'}}>⚡</div>
            <div style={{fontWeight:'900', fontSize:'20px'}}>Technician in 30 Min?</div>
            <div style={{fontSize:'13px', color:'#64748b', margin:'8px 0'}}>Nehru Nagar - Doorstep Expert</div>
            <a href="tel:8796284796" style={{display:'block', background:'#111827', color:'#fff', padding:'14px', borderRadius:'12px', textDecoration:'none', fontWeight:'900', marginTop:'16px'}}>📞 8796284796 CALL NOW</a>
            <button onClick={()=>setShow(false)} style={{marginTop:'12px', border:'none', background:'none', color:'#94a3b8', fontSize:'13px'}}>Maybe Later</button>
          </div>
        </div>
      )}
    </div>
  )
}
