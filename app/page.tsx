"use client";
export default function Home(){
const ph="8796284796";
const i1="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=600";
const i2="https://images.unsplash.com/photo-1556911220-bff31c812dba?w=600";
const i3="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600";
return(
<main>
<style>{`*{font-family:system-ui,sans-serif;margin:0;padding:0;box-sizing:border-box} body{overflow:auto!important} .top{background:#111;color:#fff;padding:12px 16px;display:flex;justify-content:space-between} .hero{background:#000;color:#fff;text-align:center;padding:25px 16px 35px} .btn{display:block;width:100%;padding:16px;border-radius:50px;font-weight:900;text-align:center;margin:12px 0;text-decoration:none} .g{background:#25D366;color:#fff} .w{background:#fff;color:#000} .card{border-radius:16px;overflow:hidden;border:1px solid #eee;margin-bottom:14px} .card img{width:100%;height:200px;object-fit:cover} .card div{padding:12px} .brand{border:1px solid #eee;border-radius:10px;padding:12px;text-align:center;font-weight:900;background:#fff} .brand-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px} .list li{padding:10px 0;border-bottom:1px solid #f0f0f0;list-style:none;font-weight:600} .list li span{color:#25D366;margin-right:8px} .bottom{position:fixed;bottom:0;left:0;right:0;background:#fff;display:flex;gap:10px;padding:10px;border-top:1px solid #ddd;z-index:99}`}</style>

<div className="top"><b>NCR CHIMNEY</b><span style={{background:'#25D366',padding:'4px 8px',borderRadius:'20px',fontSize:'11px'}}>OPEN NOW</span></div>

<div className="hero">
<div style={{color:'gold',fontWeight:900}}>⭐ 4.9/5 Rated - Delhi NCR #1</div>
<h1 style={{fontSize:'28px',fontWeight:900,marginTop:'12px',lineHeight:'1.1'}}>Kitchen Chimney Cleaning & Repair Expert</h1>
<p style={{marginTop:'8px',color:'#aaa'}}>Professional Technician Visit in 60 Mins</p>
<a href={`https://wa.me/91${ph}`} className="btn g">WhatsApp {ph}</a>
<a href={`tel:+91${ph}`} className="btn w">📞 CALL {ph}</a>
</div>

<div style={{padding:'16px',paddingBottom:'110px'}}>

<div style={{background:'#f7f7f7',borderRadius:'16px',padding:'16px'}}>
<h2 style={{marginBottom:'10px'}}>Our Services</h2>
<ul className="list">
<li><span>✔</span> Chimney Deep Cleaning - ₹1650</li>
<li><span>✔</span> Chimney Lacquer Coating</li>
<li><span>✔</span> Chimney Repair - All Faults</li>
<li><span>✔</span> Same Day Service</li>
<li><span>✔</span> Professional Technician Visit - ₹299</li>
</ul>
</div>

<h2 style={{margin:'20px 0 12px'}}>Our Work</h2>
<div className="card"><img src={i1} alt="cleaning"/><div><b>Deep Cleaning Service</b><p style={{color:'#666',fontSize:'13px'}}>Filter + Motor + Full Body Cleaning</p></div></div>
<div className="card"><img src={i2} alt="before after"/><div><b>Lacquer Coating + Cleaning</b><p style={{color:'#666',fontSize:'13px'}}>Shiny & Protected for 6 Months</p></div></div>
<div className="card"><img src={i3} alt="repair"/><div><b>Repair & Installation</b><p style={{color:'#666',fontSize:'13px'}}>Same Day Repair by Expert</p></div></div>

<h2 style={{margin:'20px 0 12px'}}>All Brands We Service</h2>
<div className="brand-grid">
<div className="brand">HINDWARE</div>
<div className="brand">FABER</div>
<div className="brand">ELICA</div>
<div className="brand">SIEMENS</div>
<div className="brand">GLEN</div>
<div className="brand">SUNFLAME</div>
<div className="brand">BOSCH</div>
<div className="brand">KAFF & More</div>
</div>

<div style={{marginTop:'20px',background:'#111',color:'#fff',padding:'16px',borderRadius:'16px',textAlign:'center'}}>
<h3>📍 Delhi | Noida | Gurgaon | Faridabad | Ghaziabad</h3>
<p style={{marginTop:'8px',color:'#25D366',fontWeight:900}}>✔ Same Day ✔ Professional Technician Visit</p>
</div>

</div>

<div className="bottom">
<a href={`tel:+91${ph}`} style={{flex:1,background:'#000',color:'#fff',padding:'14px',borderRadius:'10px',textAlign:'center',fontWeight:900,textDecoration:'none'}}>CALL NOW</a>
<a href={`https://wa.me/91${ph}`} style={{flex:1,background:'#25D366',color:'#fff',padding:'14px',borderRadius:'10px',textAlign:'center',fontWeight:900,textDecoration:'none'}}>WhatsApp Booking</a>
</div>
</main>
)}
