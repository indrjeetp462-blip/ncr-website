"use client";
import { useState, useEffect } from "react";
export default function Home() {
  const phone = "8706284796";
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setShowPopup(true), 2500);
    return () => clearTimeout(t);
  }, []);
  const waLink = `https://wa.me/91${phone}?text=Hi, Chimney Service Rs 1650 Chahiye`;

  return (
    <main style={{fontFamily:'system-ui', background:'#fff'}}>
      <header style={{position:'sticky', top:0, zIndex:50, background:'white', borderBottom:'1px solid #eee', padding:'12px 20px', display:'flex', justifyContent:'space-between'}}>
        <b>NCR CHIMNEY 🔥</b>
        <button onClick={()=>setMenuOpen(!menuOpen)} style={{background:'#111', color:'white', padding:'8px 14px', borderRadius:'6px'}}>Menu</button>
      </header>

      {menuOpen && <div style={{background:'#111', color:'white', padding:'20px', display:'flex', flexDirection:'column', gap:'15px'}}><a href="#services">Services</a><a href={waLink}>WhatsApp</a></div>}

      <div style={{background:'#111', color:'#ffcc00', textAlign:'center', padding:'10px', fontWeight:'bold'}}>OFFER - Service @ Rs 1650 Only!</div>

      <section style={{padding:'30px 20px', textAlign:'center', background:'#111', color:'white'}}>
        <h1 style={{fontSize:'26px', fontWeight:'bold'}}>NCR's #1 Chimney Service<br/>Repair & Service</h1>
        <p style={{marginTop:'10px'}}>Same Day Service in Delhi NCR</p>
        <a href={wa
