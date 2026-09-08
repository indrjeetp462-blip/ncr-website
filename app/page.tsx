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
        
