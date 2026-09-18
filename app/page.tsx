"use client"
import { useState, useEffect } from 'react';

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => { setTimeout(()=>setShowPopup(true), 2000) }, []);

  return (
    <div style={{fontFamily: 'Arial, sans-serif', margin:0, background:'#f8f9fa'}}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@600;700&display=swap');`}</style>

      {/* HEADER */}
      <div style={{background:'white', padding:'12px 15px', display:'flex', justifyContent:'space-between', alignItems:'center', boxShadow:'0 2px 10px rgba(0,0,0,0.1)', position:'sticky', top:0, zIndex:100}}>
        <div style={{fontWeight:'bold', fontSize:'18px', color:'#e11d48'}}>🔧 Chimney Expert</div>
        <a href="tel:8796284796" style={{background:'#16a34a', color:'white', padding:'8px 15px', borderRadius:'20px', textDecoration:'none', fontWeight:'bold'}}>📞 8796284796</a>
      </div>

      {/* POPUP */}
      {showPopup && (
        <div style={{position:'fixed', inset:0, background:'rgba(0,0,0,0.7)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:999, padding:'20px'}}>
          <div style={{background:'white', padding:'25px', borderRadius:'15px', textAlign:'center', width:'100%', maxWidth:'340px'}}>
            <div style={{fontSize:'50px'}}>👨‍🔧</div>
            <h2 style={{fontSize:'22px', fontWeight:'bold', margin:'10px 0'}}>24x7 Chimney Service</h2>
            <p style={{color:'#666', marginBottom:'15px'}}>Noida & Ghaziabad - All Brands</p>
            <a href="tel:8796284796" style={{display:'block', background:'#dc2626', color:'white', padding:'15px', borderRadius:'10px', textDecoration:'none', fontWeight:'bold', fontSize:'18px'}}>📞 8796284796 CALL NOW</a>
            <button onClick={()=>setShowPopup(false)} style={{marginTop:'12px', border:'1px solid #ccc', padding:'6px 15px', borderRadius:'5px'}}>Close</button>
          </div>
        </div>
      )}

      {/* HERO */}
      <div style={{background:'linear-gradient(135deg, #e11d48, #be123c)', color:'white', padding:'25px 15px', textAlign:'center'}}>
        <h1 style={{fontSize:'28px', fontWeight:'800', lineHeight:'1.2', margin:0}}>Chimney Service<br/>Noida Ghaziabad</h1>
        <p style={{margin:'10px 0', opacity:0.9}}>Faber | Elica | Hindware | Kaff | Glen | Bosch</p>
        <div style={{background:'white', color:'#e11d48', display:'inline-block', padding:'5px 15px', borderRadius:'20px', fontSize:'12px', fontWeight:'bold'}}>📍 ALL PINCODE SERVICE AVAILABLE</div>
      </div>

      {/* 4 PHOTO - Professional */}
      <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px', padding:'15px'}}>
        <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=500" style={{width:'100%', height:'160px', objectFit:'cover', borderRadius:'12px'}} />
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500" style={{width:'100%', height:'160px', objectFit:'cover', borderRadius:'12px'}} />
        <img src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500" style={{width:'100%', height:'160px', objectFit:'cover', borderRadius:'12px'}} />
        <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500" style={{width:'100%', height:'160px', objectFit:'cover', borderRadius:'12px'}} />
      </div>

      {/* SERVICES BOX */}
      <div style={{padding:'0 15px'}}>
        <h2 style={{fontSize:'20px', fontWeight:'bold'}}>✅ Our Services</h2>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'10px', marginTop:'10px'}}>
          {['Deep Cleaning ₹499','Repair & Motor','Filter Replacement','Installation','AMC Service','Oil/Grease Cleaning'].map(s=>(
            <div key={s} style={{background:'white', padding:'12px', borderRadius:'10px', borderLeft:'4px solid #e11d48', boxShadow:'0 2px 5px rgba(0,0,0,0.05)', fontWeight:'bold', fontSize:'13px'}}>{s}</div>
          ))}
        </div>
      </div>

      {/* BRANDS */}
      <div style={{padding:'15px', marginTop:'20px'}}>
        <h2 style={{fontSize:'20px', fontWeight:'bold'}}>🔥 All Brands We Service</h2>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr 1fr', gap:'8px', marginTop:'10px'}}>
          {["Faber","Elica","Hindware","Kaff","Glen","Bosch","Hafele","Sunflame","Prestige","Kutchina","Inalsa","Whirlpool"].map(b=>(
            <div key={b} style={{background:'white', padding:'10px', textAlign:'center', borderRadius:'10px', fontWeight:'bold', fontSize:'13px', boxShadow:'0 1px 3px rgba(0,0,0,0.1)'}}>{b}</div>
          ))}
        </div>
      </div>

      {/* PINCODE WISE */}
      <div style={{padding:'15px'}}>
        <h2 style={{fontSize:'20px', fontWeight:'bold'}}>📍 Noida & Ghaziabad Pincode Wise</h2>
        <div style={{display:'grid', gap:'10px', marginTop:'10px'}}>
          {[
            "Indirapuram 201014","Vaishali 201010","Vasundhara 201012","Kaushambi 201010","Raj Nagar 201002","Crossing Republik 201016",
            "Sahibabad 201005","Govindpuram 201013","Mohan Nagar 201007","Loni 201102","Noida Sec 18 - 201301","Noida Sec 62 - 201309","Greater Noida 201310","Greater Noida West 201306"
          ].map(area=>(
            <div key={area} style={{background:'white', padding:'12px', borderRadius:'10px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
              <div><div style={{fontWeight:'bold', fontSize:'14px'}}>Chimney Service in {area}</div><div style={{fontSize:'11px', color:'#666'}}>Same Day Service • All Brands</div></div>
              <a href="tel:8796284796" style={{background:'#2563eb', color:'white', padding:'6px 12px', borderRadius:'15px', textDecoration:'none', fontSize:'12px'}}>Call</a>
            </div>
          ))}
        </div>
      </div>

      {/* STICKY CALL */}
      <a href="tel:8796284796" style={{position:'fixed', bottom:'15px', left:'15px', right:'15px', background:'#16a34a', color:'white', padding:'16px', borderRadius:'30px', textAlign:'center', fontWeight:'bold', fontSize:'18px', textDecoration:'none', boxShadow:'0 5px 20px rgba(0,0,0,0.3)', zIndex:50}}>📞 CALL NOW - 8796284796</a>

      <div style={{height:'80px'}}></div>

      {/* SEO HIDDEN */}
      <div style={{fontSize:'10px', color:'#eee', padding:'15px', lineHeight:'1.8'}}>
        chimney service noida 201301 chimney repair noida sector 18 201301 noida sector 62 201309 greater noida 201310 greater noida west 201306 indirapuram 201014 vaishali 201010 vasundhara 201012 raj nagar 201002 crossing republik 201016 sahibabad 201005 govindpuram 201013 mohan nagar 201007 loni 201102 modinagar 201204 murad nagar 201206 ghaziabad 201001 faber elica hindware kaff glen bosch service
      </div>
    </div>
  )
}
