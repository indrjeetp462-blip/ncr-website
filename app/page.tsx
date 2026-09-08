"use client";
import { useState, useEffect } from "react";
export default function Home(){
  const phone="8706284796";
  const wa=`https://wa.me/91${phone}?text=Hi%20Chimney%20Service%20Book%20Karni%20Hai%20Rs%201650%20Me`;
  const [pop,setPop]=useState(false);
  useEffect(()=>{setTimeout(()=>setPop(true),3000)},[]);
  return(
    <main aria-label="NCR Chimney Service Website" style={{fontFamily:'system-ui', background:'#f5f5f5', paddingBottom:'90px'}}>
      <header aria-label="Top Navigation" role="banner" style={{position:'sticky', top:0, zIndex:100, background:'white', padding:'14px 16px', display:'flex', justifyContent:'space-between', alignItems:'center', boxShadow:'0 2px 15px rgba(0,0,0,0.1)'}}>
        <b style={{fontSize:'20px'}}>NCR CHIMNEY 🔥</b>
        <div style={{display:'flex', gap:'8px'}}>
          <a aria-label="Call Chimney Service" href={`tel:+91${phone}`} style={{background:'#111', color:'white', padding:'9px 14px', borderRadius:'25px', fontSize:'13px', textDecoration:'none', fontWeight:'bold'}}>📞 Call</a>
          <a aria-label="Book on WhatsApp" href={wa} style={{background:'#25D366', color:'white', padding:'9px 14px', borderRadius:'25px', fontSize:'13px', fontWeight:'bold', textDecoration:'none'}}>WhatsApp</a>
        </div>
      </header>

      <div aria-label="Offer" style={{background:'#ffcc00', textAlign:'center', padding:'10px', fontWeight:'bold', fontSize:'13px'}}>🔥 TODAY ONLY - Deep Cleaning @ Rs 1650 - Delhi NCR 🔥</div>

      <section aria-label="Hero Banner">
        <img alt="Chimney Service Delhi NCR" src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=900" style={{width:'100%', height:'380px', objectFit:'cover'}}/>
        <div style={{background:'black', color:'white', padding:'20px', textAlign:'center'}}>
          <h1 style={{fontSize:'32px', fontWeight:900, lineHeight:'1.1'}}>Professional<br/>Chimney Service</h1>
          <p style={{fontSize
