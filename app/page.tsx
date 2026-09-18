"use client"
import { useState, useEffect } from 'react';

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => { setTimeout(()=>setShowPopup(true), 2500) }, []);

  return (
    <div style={{fontFamily:'system-ui, Arial', background:'#f8f9fa', margin:0, paddingBottom:'90px'}}>
      
      {/* HEADER */}
      <div style={{background:'white', padding:'12px 15px', display:'flex', justifyContent:'space-between', alignItems:'center', boxShadow:'0 2px 10px rgba(0,0,0,0.1)', position:'sticky', top:0, zIndex:100}}>
        <div style={{fontWeight:'900', fontSize:'18px', color:'#dc2626'}}>🔧 CHIMNEY EXPERT</div>
        <a href="tel:8796284796" style={{background:'#16a34a', color:'white', padding:'8px 14px', borderRadius:'20px', textDecoration:'none', fontWeight:'bold', fontSize:'13px'}}>📞 8796284796</a>
      </div>

      {showPopup && (
        <div style={{position:'fixed', inset:0, background:'rgba(0,0,0,0.75)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:999, padding:'20px'}}>
          <div style={{background:'white', padding:'25px', borderRadius:'18px', textAlign:'center', maxWidth:'340px', width:'100%'}}>
            <h2 style={{fontSize:'24px', fontWeight:'800', margin:'0'}}>Chimney Service @ ₹1250</h2>
            <p style={{color:'#666', fontSize:'13px', marginTop:'5px'}}>Noida & Ghaziabad - Same Day</p>
            <a href="tel:8796284796" style={{display:'block', background:'#dc2626', color:'white', padding:'14px', borderRadius:'12px', textDecoration:'none', fontWeight:'800', fontSize:'18px', marginTop:'15px'}}>📞 8796284796</a>
            <button onClick={()=>setShowPopup(false)} style={{marginTop:'12px', background:'none', border:'none', color:'#888'}}>Close</button>
          </div>
        </div>
      )}

      {/* YOUR PHOTO 1 */}
      <img src="/c1.jpg" style={{width:'100%', height:'280px', objectFit:'cover'}} alt="chimney" />
      
      {/* SERVICES @1250 */}
      <div style={{padding:'15px', display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px', marginTop:'-30px', position:'relative', zIndex:2}}>
        {['Deep Clean ₹1250','Repair ₹1250','Install ₹1250','Motor ₹1250'].map(s=>(
          <div key={s} style={{background:'white', padding:'14px', borderRadius:'12px', fontWeight:'800', fontSize:'13px', textAlign:'center', boxShadow:'0 4px 12px rgba(0,0,0,0.1)'}}>{s}</div>
        ))}
      </div>

      {/* YOUR PHOTO 2 */}
      <div style={{padding:'0 15px', marginTop:'5px'}}>
        <img src="/c2.jpg" style={{width:'100%', height:'220px', objectFit:'cover', borderRadius:'15px'}} alt="chimney" />
      </div>

      {/* PINCODE LIST - AB BILKUL SAHI */}
      <div style={{padding:'15px'}}>
        <h2 style={{fontSize:'18px', fontWeight:'800', margin:'0 0 10px'}}>📍 Area Wise Service - ₹1250 Fixed</h2>
        <div style={{display:'grid', gap:'10px'}}>
          {[
            "Indirapuram 201014","Vaishali 201010","Vasundhara 201012","Kaushambi 201010","Raj Nagar 201002","Crossing Republik 201016","Sahibabad 201005","Govindpuram 201013","Mohan Nagar 201007","Loni 201102","Noida Sec 18 - 201301","Noida Sec 62 - 201309","Greater Noida 201310","Greater Noida West 201306"
          ].map(area=>(
            <div key={area} style={{background:'white', padding:'12px 14px', borderRadius:'12px', display:'flex', justifyContent:'space-between', alignItems:'center', boxShadow:'0 1px 4px rgba(0,0,0,0.05)'}}>
              <div><div style={{fontWeight:'700', fontSize:'14px'}}>Chimney Service in {area}</div><div style={{fontSize:'11px', color:'#666'}}>Same Day • ₹1250</div></div>
              <a href="tel:8796284796" style={{background:'#2563eb', color:'white', padding:'7px 14px', borderRadius:'20px', textDecoration:'none', fontSize:'12px', fontWeight:'bold'}}>Call</a>
            </div>
          ))}
        </div>
      </div>

      {/* BRANDS - AB NICHE LE AAYA */}
      <div style={{padding:'15px', background:'white', margin:'15px', borderRadius:'15px'}}>
        <h2 style={{fontSize:'16px', fontWeight:'800', margin:'0 0 10px'}}>🔥 All Brands We Service @ ₹1250</h2>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'8px'}}>
          {["Faber","Elica","Hindware","Kaff","Glen","Bosch","Hafele","Sunflame","Prestige","Kutchina","Inalsa","Whirlpool"].map(b=>(
            <div key={b} style={{background:'#f8f9fa', padding:'10px', textAlign:'center', borderRadius:'8px', fontWeight:'bold', fontSize:'12px', border:'1px solid #eee'}}>{b}</div>
          ))}
        </div>
      </div>

      {/* CALL BUTTON */}
      <a href="tel:8796284796" style={{position:'fixed', bottom:'15px', left:'15px', right:'15px', background:'#16a34a', color:'white', padding:'16px', borderRadius:'30px', textAlign:'center', fontWeight:'900', fontSize:'18px', textDecoration:'none', boxShadow:'0 8px 25px rgba(0,0,0,0.3)', zIndex:50}}>📞 CALL NOW - ₹1250 - 8796284796</a>

      {/* SEO - AB BILKUL HIDDEN, DIKHEGA HI NAHI */}
      <div style={{display:'none'}}>chimney service noida ghaziabad</div>
    </div>
  )
}
