"use client";
import { useState, useEffect } from "react";
export default function Home() {
  const phone = "8796284796";
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShowPopup(true), 2500);
    return () => clearTimeout(t);
  }, []);
  return (
    <main style={{fontFamily:'system-ui', background:'#fff'}}>
      <header style={{position:'sticky', top:0, zIndex:50, background:'white', borderBottom:'1px solid #eee', padding:'12px 20px', display:'flex', justifyContent:'space-between', alignItems:'center'}}>
        <b>NCR CHIMNEY 🔥</b>
        <button onClick={()=>setMenuOpen(!menuOpen)} style={{background:'#111', color:'white', border:'none', padding:'8px 14px', borderRadius:'8px'}}>☰ MENU</button>
      </header>
      {menuOpen && (
        <div style={{background:'#111', color:'white', padding:'20px', display:'flex', flexDirection:'column', gap:'15px', fontWeight:'bold'}}>
          <a href="#services" onClick={()=>setMenuOpen(false)} style={{color:'white', textDecoration:'none'}}>Services</a>
          <a href="#gallery" onClick={()=>setMenuOpen(false)} style={{color:'white', textDecoration:'none'}}>Gallery - Our Work</a>
          <a href={`tel:${phone}`} style={{background:'#ff6600', padding:'12px', borderRadius:'10px', textAlign:'center', color:'white', textDecoration:'none'}}>Call {phone}</a>
        </div>
      )}
      <div style={{background:'#111', color:'#ffcc00', textAlign:'center', padding:'10px', fontWeight:'bold', fontSize:'13px'}}>⭐ 4.9/5 Rated | 10000+ Happy Customers | 30 Days Warranty</div>
      
      <section style={{padding:'30px 20px', textAlign:'center', background:'#111', color:'white'}}>
        <h1 style={{fontSize:'36px', fontWeight:'900', lineHeight:'1.1'}}>Kitchen Chimney<br/>Cleaning & Repair<br/><span style={{color:'#ff6600'}}>Expert</span></h1>
        <p style={{marginTop:'12px', color:'#bbb'}}>All Brands Service in 60 Minutes - Delhi NCR</p>
        <div style={{marginTop:'20px', display:'flex', flexDirection:'column', gap:'10px', maxWidth:'400px', margin:'20px auto'}}>
          <a href={`https://wa.me/91${phone}?text=Hi, Chimney Service Chahiye`} style={{background:'#25D366', color:'white', padding:'16px', borderRadius:'50px', textDecoration:'none', fontWeight:'900'}}>WhatsApp {phone}</a>
          <a href={`tel:${phone}`} style={{background:'white', color:'black', padding:'16px', borderRadius:'50px', textDecoration:'none', fontWeight:'900'}}>📞 CALL {phone}</a>
        </div>
        <p style={{fontSize:'12px', color:'#999', marginTop:'10px'}}>Delhi | Noida | Gurgaon | Faridabad | Ghaziabad</p>
      </section>

      <section id="services" style={{padding:'30px 20px', maxWidth:'1000px', margin:'0 auto'}}>
        <h2 style={{fontSize:'22px', fontWeight:'800', textAlign:'center'}}>Our Services</h2>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px', marginTop:'20px'}}>
          <div style={{border:'2px solid #ff6600', padding:'20px', borderRadius:'14px', textAlign:'center', background:'#fff7ed'}}><b>Deep Cleaning</b><br/><span style={{fontSize:'22px', fontWeight:'900', color:'#ff6600'}}>Rs. 1650</span></div>
          <div style={{border:'1px solid #eee', padding:'20px', borderRadius:'14px', textAlign:'center'}}><b>Repair Visit</b><br/><span style={{fontSize:'18px', fontWeight:'900'}}>Rs. 299</span></div>
          <div style={{border:'1px solid #eee', padding:'20px', borderRadius:'14px', textAlign:'center'}}><b>Installation</b><br/><span style={{fontSize:'18px', fontWeight:'900'}}>Rs. 599</span></div>
          <div style={{border:'1px solid #eee', padding:'20px', borderRadius:'14px', textAlign:'center'}}><b>AMC Plan</b><br/><span style={{fontSize:'18px', fontWeight:'900'}}>Yearly</span></div>
        </div>
      </section>

      <section id="gallery" style={{background:'#f7f7f7', padding:'30px 20px'}}>
        <h2 style={{fontSize:'22px', fontWeight:'800', textAlign:'center'}}>Our Recent Work - 3 Photos</h2>
        <div style={{display:'grid', gap:'15px', marginTop:'20px', maxWidth:'600px', margin:'20px auto'}}>
          <div style={{borderRadius:'16px', overflow:'hidden', background:'white', border:'1px solid #eee'}}><img src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600" style={{width:'100%', height:'200px', objectFit:'cover'}} /><div style={{padding:'12px', fontWeight:'bold', fontSize:'14px'}}>✅ Deep Cleaning - 10000+ Customers Trust Us</div></div>
          <div style={{borderRadius:'16px', overflow:'hidden', background:'white', border:'1px solid #eee'}}><img src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600" style={{width:'100%', height:'200px', objectFit:'cover'}} /><div style={{padding:'12px', fontWeight:'bold', fontSize:'14px'}}>🔧 Motor Repair - Delhi NCR</div></div>
          <div style={{borderRadius:'16px', overflow:'hidden', background:'white', border:'1px solid #eee'}}><img src="https://images.unsplash.com/photo-1484154218962-a197022b5858?w=600" style={{width:'100%', height:'200px', objectFit:'cover'}} /><div style={{padding:'12px', fontWeight:'bold', fontSize:'14px'}}>🏠 New Installation Service</div></div>
        </div>
      </section>

      <footer style={{background:'black', color:'white', padding:'30px 20px', textAlign:'center'}}>
        <b style={{fontSize:'20px'}}>10000+ Happy Customers</b><p style={{fontSize:'13px', color:'#aaa', marginTop:'8px'}}>Book Your Service Today - NCR Chimney Service And Repair</p>
        <a href={`tel:${phone}`} style={{display:'inline-block', marginTop:'15px', background:'#ff6600', color:'white', padding:'16px 40px', borderRadius:'50px', textDecoration:'none', fontWeight:'900'}}>CALL {phone}</a>
      </footer>

      {showPopup && (
        <div style={{position:'fixed', inset:0, background:'rgba(0,0,0,0.6)', zIndex:100, display:'flex', alignItems:'center', justifyContent:'center', padding:'20px'}}>
          <div style={{background:'white', borderRadius:'20px', padding:'25px', maxWidth:'340px', width:'100%', textAlign:'center', position:'relative'}}>
            <button onClick={()=>setShowPopup(false)} style={{position:'absolute', top:'10px', right:'15px', border:'none', background:'none', fontSize:'22px'}}>✕</button>
            <h3 style={{fontSize:'22px', fontWeight:'900'}}>🔥 10000+ Happy Customers!</h3>
            <p style={{fontSize:'14px', color:'#666', marginTop:'10px'}}>Chimney Service @ Rs. 1650 Only. Limited Offer!</p>
            <a href={`tel:${phone}`} style={{display:'block', marginTop:'15px', background:'#111', color:'white', padding:'16px', borderRadius:'12px', textDecoration:'none', fontWeight:'900'}}>📞 CALL NOW - {phone}</a>
          </div>
        </div>
      )}
    </main>
  )
}
