"use client"
import { useState, useEffect } from 'react';
export default function Home() {
  const [show, setShow] = useState(false);
  useEffect(()=>{setTimeout(()=>setShow(true), 2000)},[]);
  return (
    <div style={{fontFamily:'Arial', background:'#f6f6f6', margin:0}}>
      <div style={{background:'#fff', padding:'12px 16px', display:'flex', justifyContent:'space-between', alignItems:'center', borderBottom:'1px solid #eee', position:'sticky', top:0, zIndex:10}}>
        <div style={{fontWeight:'900', fontSize:'18px'}}>NCR Chimney Expert</div>
        <a href="tel:8796284796" style={{background:'#000', color:'#fff', padding:'8px 14px', borderRadius:'6px', textDecoration:'none', fontWeight:'800', fontSize:'13px'}}>8796284796</a>
      </div>

      {/* PHOTO SECTION - GEN1 JESA */}
      <div style={{background:'#fff'}}>
        <img src="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600" alt="Kitchen Chimney" style={{width:'100%', height:'220px', objectFit:'cover'}} />
        <div style={{padding:'16px'}}>
          <h1 style={{fontSize:'22px', fontWeight:'800', margin:0, lineHeight:'1.2'}}>Kitchen Chimney Repair Service in Nehru Nagar Ghaziabad</h1>
          <p style={{fontSize:'13px', color:'#666', marginTop:'8px'}}>Same Day Doorstep Service in Nehru Nagar, Shalimar Garden, Indirapuram, Vaishali, Noida</p>
          <a href="tel:8796284796" style={{display:'inline-block', background:'#16a34a', color:'#fff', padding:'10px 18px', borderRadius:'8px', textDecoration:'none', fontWeight:'800', marginTop:'12px'}}>Call Technician - 8796284796</a>
        </div>
      </div>

      <div style={{background:'#fff', margin:'10px', borderRadius:'8px', border:'1px solid #e5e7eb', overflow:'hidden'}}>
        <div style={{padding:'12px 15px', fontWeight:'800', background:'#fafafa', borderBottom:'1px solid #eee'}}>Chimney Problems We Fix</div>
        <table style={{width:'100%', fontSize:'13px', borderCollapse:'collapse'}}>
          <tr style={{background:'#f3f4f6'}}><th style={{padding:'10px', textAlign:'left'}}>Problem</th><th style={{padding:'10px', textAlign:'left'}}>Reason</th><th style={{padding:'10px', textAlign:'left'}}>Fix</th></tr>
          <tr><td style={{padding:'10px', borderTop:'1px solid #eee'}}>Not Starting</td><td style={{padding:'10px', borderTop:'1px solid #eee'}}>PCB Issue</td><td style={{padding:'10px', borderTop:'1px solid #eee'}}>Repair</td></tr>
          <tr><td style={{padding:'10px', borderTop:'1px solid #eee'}}>Low Suction</td><td style={{padding:'10px', borderTop:'1px solid #eee'}}>Filter Choked</td><td style={{padding:'10px', borderTop:'1px solid #eee'}}>Cleaning</td></tr>
          <tr><td style={{padding:'10px', borderTop:'1px solid #eee'}}>Loud Noise</td><td style={{padding:'10px', borderTop:'1px solid #eee'}}>Motor Fault</td><td style={{padding:'10px', borderTop:'1px solid #eee'}}>Service</td></tr>
          <tr><td style={{padding:'10px', borderTop:'1px solid #eee'}}>Oil Leakage</td><td style={{padding:'10px', borderTop:'1px solid #eee'}}>Grease Block</td><td style={{padding:'10px', borderTop:'1px solid #eee'}}>Full Service</td></tr>
        </table>
      </div>

      <div style={{background:'#fff', margin:'10px', padding:'15px', borderRadius:'8px', border:'1px solid #e5e7eb', marginBottom:'90px'}}>
        <div style={{fontWeight:'800'}}>Why Choose Us?</div>
        <div style={{fontSize:'13px', lineHeight:'2', marginTop:'8px'}}>✓ Same Day Service<br/>✓ All Brands - Faber, Elica, Kaff, Glen, Hindware<br/>✓ Genuine Parts<br/>✓ No Hidden Charges</div>
      </div>

      <a href="tel:8796284796" style={{position:'fixed', bottom:0, left:0, right:0, background:'#16a34a', color:'#fff', padding:'16px', textAlign:'center', fontWeight:'900', textDecoration:'none', zIndex:20}}>📞 CALL NOW - 8796284796</a>

      {show && (
        <div style={{position:'fixed', inset:0, background:'rgba(0,0,0,0.5)', display:'flex', alignItems:'center', justifyContent:'center', zIndex:50, padding:'20px'}}>
          <div style={{background:'#fff', padding:'20px', borderRadius:'12px', width:'100%', maxWidth:'300px', textAlign:'center'}}>
            <div style={{fontWeight:'800', fontSize:'18px'}}>Need Chimney Repair?</div>
            <div style={{fontSize:'12px', color:'#666', margin:'6px 0'}}>Technician Available in Nehru Nagar</div>
            <a href="tel:8796284796" style={{display:'block', background:'#000', color:'#fff', padding:'12px', borderRadius:'8px', textDecoration:'none', fontWeight:'800', marginTop:'12px'}}>Call 8796284796</a>
            <button onClick={()=>setShow(false)} style={{marginTop:'10px', border:'none', background:'none', color:'#888', fontSize:'13px'}}>Close</button>
          </div>
        </div>
      )}
    </div>
  )
}
