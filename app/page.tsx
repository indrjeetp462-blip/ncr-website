"use client";
import { useState } from "react";
export default function Home(){
const ph="8796284796";
const [o,setO]=useState(false);
return(
<main style={{paddingBottom:'80px'}}>
<style>{`*{font-family:system-ui;margin:0;padding:0;box-sizing:border-box}html,body{overflow-y:auto;height:auto}
.top{background:#111;color:#fff;padding:12px 15px;display:flex;justify-content:space-between;align-items:center;position:sticky;top:0;z-index:100}
.hero{background:#000;color:#fff;text-align:center;padding:25px 15px 40px}
.btn{display:block;width:100%;padding:16px;border-radius:50px;font-weight:900;font-size:18px;text-align:center;margin:12px 0;text-decoration:none}
.g{background:#25D366;color:#fff}
.w{background:#fff;color:#000}
.bottom{position:fixed;bottom:0;left:0;right:0;background:#fff;display:flex;gap:10px;padding:10px;border-top:1px solid #ddd;z-index:9999}
.bottom a{flex:1;padding:14px;border-radius:10px;text-align:center;font-weight:900;text-decoration:none;display:flex;align-items:center;justify-content:center}
`}</style>
<div className="top"><b>NCR CHIMNEY</b><button onClick={()=>setO(!o)} style={{background:'#333',color:'#fff',padding:'8px 14px',borderRadius:'10px'}}>MENU</button></div>
<div className="hero">
<div style={{color:'gold',fontWeight:900}}>4.9/5 Rated | 10000+ Happy Customers</div>
<h1 style={{fontSize:'38px',fontWeight:900,marginTop:'20px'}}>Kitchen Chimney<br/>Cleaning & Repair<br/><span style={{color:'orange'}}>Expert</span></h1>
<p style={{marginTop:'12px',color:'#aaa'}}>All Brands Service in 60 Minutes - Delhi NCR</p>
<a href={`https://wa.me/91${ph}`} className="btn g">WhatsApp {ph}</a>
<a href={`tel:+91${ph}`} className="btn w">CALL {ph}</a>
<div style={{color:'#888',marginTop:'10px'}}>Delhi | Noida | Gurgaon | Faridabad | Ghaziabad</div>
</div>
<div style={{padding:'20px',textAlign:'center'}}>
<h2>Our Services - Deep Cleaning Rs. 1650 | Repair Rs. 299</h2>
<p style={{marginTop:'20px',color:'#666'}}>We clean all brands - Hindware, Faber, Elica, Kaff etc. 60 min service across NCR. Lorem ipsum extra content for scroll test - add more services here later.</p>
<p style={{marginTop:'400px'}}>End of Page - Now you can scroll!</p>
</div>
<div className="bottom">
<a href={`tel:+91${ph}`} style={{background:'#000',color:'#fff'}}>CALL NOW</a>
<a href={`https://wa.me/91${ph}`} style={{background:'#25D366',color:'#fff'}}>WhatsApp Booking</a>
</div>
</main>
)}
