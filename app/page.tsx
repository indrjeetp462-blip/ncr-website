"use client";
import { useState, useEffect } from "react";
export default function Home() {
  const [show,setShow]=useState(false);
  useEffect(()=>{setTimeout(()=>setShow(true),3000)},[]);
  const noida=["Sector 18-201301","Sector 27-201301","Sector 50-201303","Sector 62-201309","Sector 63-201309","Sector 128-201304","Sector 137-201305","Sector 150-201310","Greater Noida West-201306"];
  const gzb=["Indirapuram-201014","Vaishali-201010","Vasundhara-201012","Kaushambi-201010","Sahibabad-201005","Mohan Nagar-201007","Raj Nagar-201002","Raj Nagar Ext-201017","Crossings-201016"];
  return (
    <div style={{fontFamily:'system-ui',background:'#fff'}}>
      {show && <div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.8)',zIndex:9999,display:'flex',alignItems:'center',justifyContent:'center'}}><div style={{background:'#fff',padding:'20px',borderRadius:'15px',textAlign:'center',width:'90%'}}><h2>Chimney Not Working?</h2><a href="tel:8796284796" style={{display:'block',background:'#000',color:'#fff',padding:'12px',borderRadius:'8px',textDecoration:'none',fontWeight:900}}>CALL 8796284796</a><button onClick={()=>setShow(false)} style={{marginTop:'10px',border:'none',background:'none'}}>Close</button></div></div>}
      
      <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',padding:'12px 15px',background:'#fff',position:'sticky',top:0,zIndex:10}}>
        <b style={{lineHeight:1.1}}>NCR CHIMNEY<br/>SOLUTION</b>
        <span style={{background:'#0f172a',color:'#facc15',padding:'8px 14px',borderRadius:'20px',fontSize:'11px',fontWeight:900}}>90 DAYS REPAIR GUARANTEE</span>
      </div>

      <div style={{background:'#0f172a',color:'#fff',padding:'20px 15px'}}>
        <h1 style={{fontSize:'24px',fontWeight:900,lineHeight:1.2}}>CHIMNEY NOT WORKING SERVICE NEAR ME - GHAZIABAD, NOIDA</h1>
        <p>Same Day Visit in Delhi NCR - Call 8796284796</p>
        <div style={{background:'#facc15',color:'#000',padding:'15px',borderRadius:'12px',fontWeight:900,margin:'15px 0'}}>✅ 90 DAYS CHIMNEY REPAIR GUARANTEE<br/><span style={{fontWeight:400,fontSize:'13px'}}>If any fault occurs within 90 days, get FREE service!</span></div>
        <div style={{display:'flex',gap:'10px'}}><a href="tel:8796284796" style={{flex:1,background:'#22c55e',color:'#fff',padding:'14px',borderRadius:'10px',textAlign:'center',textDecoration:'none',fontWeight:900}}>BOOK SERVICE</a><a href="tel:8796284796" style={{flex:1,background:'#fff',color:'#000',padding:'14px',borderRadius:'10px',textAlign:'center',textDecoration:'none',fontWeight:900}}>CALL 8796284796</a></div>
      </div>

      <div style={{padding:'15px'}}>
        <div style={{textAlign:'center'}}><img src="/logo.png" style={{width:'180px'}}/></div>
        <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'10px',margin:'20px 0'}}>
          <img src="/service1.jpg" style={{width:'100%',height:'140px',objectFit:'cover',borderRadius:'10px',background:'#eee'}}/>
          <img src="/service2.jpg" style={{width:'100%',height:'140px',objectFit:'cover',borderRadius:'10px',background:'#eee'}}/>
          <img src="/service3.jpg" style={{width:'100%',height:'140px',objectFit:'cover',borderRadius:'10px',background:'#eee'}}/>
          <img src="/service4.jpg" style={{width:'100%',height:'140px',objectFit:'cover',borderRadius:'10px',background:'#eee'}}/>
          <img src="/service5.jpg" style={{width:'100%',height:'140px',objectFit:'cover',borderRadius:'10px',background:'#eee',gridColumn:'span 2'}}/>
        </div>
        <h3>Noida Pincode Areas</h3><p style={{fontSize:'14px'}}>{noida.join(" | ")}</p>
        <h3>Ghaziabad Pincode Areas</h3><p style={{fontSize:'14px'}}>{gzb.join(" | ")}</p>
      </div>

      <div style={{position:'fixed',bottom:0,left:0,right:0,display:'flex',gap:'10px',padding:'10px',background:'#fff',borderTop:'1px solid #ddd'}}>
        <a href="https://wa.me/918796284796" style={{flex:1,background:'#22c55e',color:'#fff',padding:'14px',borderRadius:'10px',textAlign:'center',textDecoration:'none',fontWeight:900}}>WhatsApp</a>
        <a href="tel:8796284796" style={{flex:1,background:'#0f172a',color:'#fff',padding:'14px',borderRadius:'10px',textAlign:'center',textDecoration:'none',fontWeight:900}}>Call Now</a>
      </div>
      <div style={{height:'70px'}}></div>
    </div>
  );
}
