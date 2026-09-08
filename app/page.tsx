
"use client";
export default function Home(){
const ph="8796284796";
return(
<main style={{paddingBottom:'80px'}}>
<style>{`*{font-family:system-ui;margin:0;padding:0;box-sizing:border-box}body{overflow:auto!important} .top{background:#111;color:#fff;padding:12px 15px;display:flex;justify-content:space-between} .hero{background:#000;color:#fff;text-align:center;padding:25px 15px 40px} .btn{display:block;width:100%;padding:16px;border-radius:50px;font-weight:900;text-align:center;margin:12px 0;text-decoration:none} .g{background:#25D366;color:#fff} .w{background:#fff;color:#000} .bottom{position:fixed;bottom:0;left:0;right:0;background:#fff;display:flex;gap:10px;padding:10px;border-top:1px solid #ddd}`}</style>
<div className="top"><b>NCR CHIMNEY</b></div>
<div className="hero">
<div style={{color:'gold',fontWeight:900}}>4.9/5 Rated</div>
<h1 style={{fontSize:'36px',fontWeight:900,marginTop:'15px'}}>Kitchen Chimney Cleaning & Repair Expert</h1>
<a href={`https://wa.me/91${ph}`} className="btn g">WhatsApp {ph}</a>
<a href={`tel:+91${ph}`} className="btn w">CALL {ph}</a>
</div>
<div style={{padding:'20px',paddingBottom:'100px'}}>
<h2>Services - 1650 Cleaning / 299 Repair</h2>
<p style={{marginTop:'15px'}}>All brands - Hindware, Faber, Elica</p>
<p style={{marginTop:'15px'}}>Delhi | Noida | Gurgaon | Faridabad</p>
<p style={{marginTop:'300px',color:'#999'}}>Scroll end - ab scroll ho raha hai</p>
</div>
<div className="bottom">
<a href={`tel:+91${ph}`} style={{flex:1,background:'#000',color:'#fff',padding:'14px',borderRadius:'10px',textAlign:'center',fontWeight:900,textDecoration:'none'}}>CALL NOW</a>
<a href={`https://wa.me/91${ph}`} style={{flex:1,background:'#25D366',color:'#fff',padding:'14px',borderRadius:'10px',textAlign:'center',fontWeight:900,textDecoration:'none'}}>WhatsApp Booking</a>
</div>
</main>
)}
