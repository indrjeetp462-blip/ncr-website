
"use client";
import { useState, useEffect } from "react";
export default function Home() {
  const [show, setShow] = useState(false);
  useEffect(() => { setTimeout(() => setShow(true), 2500); }, []);
  const noida = ["Sector 1-201301","Sector 2-201301","Sector 6-201301","Sector 10-201301","Sector 15-201301","Sector 16-201301","Sector 18-201301","Sector 19-201301","Sector 20-201301","Sector 27-201301","Sector 50-201303","Sector 51-201303","Sector 62-201309","Sector 63-201309","Sector 122-201307","Sector 128-201304","Sector 137-201305","Sector 150-201310","Greater Noida West-201306","Greater Noida-201310","Noida Extension-201306"];
  const gzb = ["Indirapuram-201014","Shakti Khand-201014","Vaishali-201010","Vasundhara-201012","Kaushambi-201010","Sahibabad-201005","Shalimar Garden-201005","Mohan Nagar-201007","Raj Nagar-201002","Kavi Nagar-201002","Shastri Nagar-201002","Raj Nagar Ext-201017","Crossings Republik-201016","Vijay Nagar-201009","Govindpuram-201002","Loni-201102","Dasna-201302","Lal Kuan-201015","Modinagar-201204"];
  const brands = ["Faber","Elica","Hindware","Kaff","Glen","Sunflame","Prestige","Bosch","Siemens","Whirlpool","Bajaj","Pigeon","Inalsa","Hafele","Carysil"];
  return (
    <div style={{fontFamily:'system-ui',padding:'15px',maxWidth:'900px',margin:'auto',background:'#fff'}}>
      {show && (<div style={{position:'fixed',inset:0,background:'rgba(0,0,0,0.8)',zIndex:9999,display:'flex',alignItems:'center',justifyContent:'center'}}><div style={{background:'#fff',padding:'25px',borderRadius:'16px',textAlign:'center',width:'90%',maxWidth:'360px'}}><h2 style={{fontWeight:900}}>Chimney Not Working?</h2><p>Same Day Service in Noida & Ghaziabad</p><a href="tel:8796284796" style={{display:'block',background:'#000',color:'#fff',padding:'14px',borderRadius:'10px',textDecoration:'none',fontWeight:900,marginTop:'10px'}}>📞 CALL 8796284796</a><button onClick={()=>setShow(false)} style={{marginTop:'10px',border:'none',background:'none',color:'#999'}}>Close</button></div></div>)}
      <div style={{textAlign:'center'}}><img src="/logo.png" alt="NCR Chimney Solution" style={{width:'210px'}}/></div>
      <h1 style={{fontSize:'29px',fontWeight:900,textAlign:'center',lineHeight:1.1}}>CHIMNEY NOT WORKING SERVICE NEAR ME - GHAZIABAD, NOIDA</h1>
      <p style={{textAlign:'center',fontWeight:600}}>Same Day Chimney Repair - Call 8796284796</p>
      <div style={{textAlign:'center',margin:'15px 0'}}><a href="tel:8796284796" style={{display:'inline-block',background:'#25D366',color:'#fff',padding:'16px 30px',borderRadius:'12px',fontWeight:900,textDecoration:'none',fontSize:'20px'}}>📞 CALL NOW 8796284796</a></div>
      <div style={{display:'grid',gridTemplateColumns:'1fr 1fr',gap:'10px',margin:'20px 0'}}><img src="/service1.jpg" style={{width:'100%',borderRadius:'10px',height:'150px',objectFit:'cover',background:'#eee'}}/><img src="/service2.jpg" style={{width:'100%',borderRadius:'10px',height:'150px',objectFit:'cover',background:'#eee'}}/><img src="/service3.jpg" style={{width:'100%',borderRadius:'10px',height:'150px',objectFit:'cover',background:'#eee'}}/><img src="/service4.jpg" style={{width:'100%',borderRadius:'10px',height:'150px',objectFit:'cover',background:'#eee'}}/><img src="/service5.jpg" style={{width:'100%',borderRadius:'10px',height:'150px',objectFit:'cover',background:'#eee',gridColumn:'span 2'}}/></div>
      <h2>All Chimney Brands</h2><p style={{background:'#f5f5f5',padding:'10px',borderRadius:'8px',fontWeight:700}}>{brands.join
