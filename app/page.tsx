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
            {p:'Loud Noise Vibration', r:'Motor Fault', s
