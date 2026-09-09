"use client";

export default function Home() {
  const phone = "8796284796";
  const waLink = `https://wa.me/91${phone}?text=Hi,%20I%20need%20Chimney%20Repair%20Service%20in%20Delhi%20NCR`;

  return (
    <main style={{fontFamily:'system-ui', background:'#f8f9fa', paddingBottom:'90px'}}>
      {/* Header */}
      <header style={{position:'sticky', top:0, zIndex:100, background:'white', padding:'14px 16px', display:'flex', justifyContent:'space-between', alignItems:'center', boxShadow:'0 2px 10px rgba(0,0,0,0.08)'}}>
        <b style={{fontSize:'16px', lineHeight:'1.1'}}>NCR CHIMNEY<br/>SOLUTION</b>
        <span style={{background:'#0a1931', color:'#ffcc00', padding:'8px 16px', borderRadius:'20px', fontSize:'11px', fontWeight:900}}>90 DAYS REPAIR GUARANTEE</span>
      </header>

      {/* Hero */}
      <section style={{background:'#0a1931', color:'white', padding:'20px'}}>
        <p style={{fontSize:'18px', opacity:0.9}}>Same Day Visit in Delhi NCR</p>
        <div style={{background:'#ffcc00', color:'black', padding:'14px', borderRadius:'12px', marginTop:'15px', fontWeight:900, fontSize:'16px'}}>
          ✅ 90 DAYS CHIMNEY REPAIR GUARANTEE
        </div>
        <p style={{marginTop:'10px', fontSize:'14px', opacity:0.9}}>
          If any fault occurs within 90 days of repair, get FREE service!
        </p>
        <div style={{display:'flex', gap:'10px', marginTop:'18px'}}>
          <a href={waLink} style={{flex:1, background:'#00d26a', color:'white', padding:'14px', borderRadius:'12px', textAlign:'center', fontWeight:900, textDecoration:'none', fontSize:'14px'}}>BOOK SERVICE</a>
          <a href={`tel:+91${phone}`} style={{flex:1, background:'white', color:'black', padding:'14px', borderRadius:'12px', textAlign:'center', fontWeight:900, textDecoration:'none', fontSize:'13px'}}>CALL {phone}</a>
        </div>
      </section>

      {/* PHOTO ADDED HERE - CHIMNEY SERVICE */}
      <section style={{padding:'15px'}}>
        <div style={{background:'white', borderRadius:'16px', overflow:'hidden', boxShadow:'0 4px 15px rgba(0,0,0,0.1)'}}>
          <img 
            src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=800" 
            alt="Professional Chimney Cleaning Service in Delhi"
            style={{width:'100%', height:'260px', objectFit:'cover'}}
          />
          <div style={{padding:'14px'}}>
            <b style={{fontSize:'16px'}}>🔧 Live Chimney Service in Progress</b>
            <p style={{fontSize:'13px', opacity:0.6, marginTop:'4px'}}>Our expert technician cleaning chimney at customer home in Delhi NCR</p>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section style={{background:'#0a1931', color:'white', margin:'15px', borderRadius:'16px', padding:'22px'}}>
        <h2 style={{textAlign:'center', fontSize:'22px', fontWeight:900}}>Why Choose Us?</h2>
        <div style={{marginTop:'15px', lineHeight:'1.8', fontSize:'15px'}}>
          ✓ 90 Days Repair Guarantee<br/>
          ✓ Same Day Technician Visit<br/>
          ✓ 5000+ Happy Customers<br/>
          ✓ No Hidden Charges - Call for Best Price
        </div>
      </section>

      {/* FAQ ENGLISH */}
      <section style={{padding:'0 15px 15px'}}>
        <div style={{background:'white', padding:'16px', borderRadius:'12px', marginBottom:'12px'}}>
          <b>Q: How much time to reach South Delhi?</b>
          <p style={{fontSize:'14px', marginTop:'6px', opacity:0.7}}>Within 60 minutes. Malviya Nagar, GK, Vasant Kunj, Lajpat Nagar.</p>
        </div>
        <div style={{background:'white', padding:'16px', borderRadius:'12px', marginBottom:'12px'}}>
          <b>Q: What is the guarantee?</b>
          <p style={{fontSize:'14px', marginTop:'6px', opacity:0.7}}>90 Days Repair Guarantee. FREE service for 90 days after repair.</p>
        </div>
        <div style={{background:'white', padding:'16px', borderRadius:'12px', marginBottom:'12px'}}>
          <b>Q: Which brands do you repair?</b>
          <p style={{fontSize:'14px', marginTop:'6px', opacity:0.7}}>All brands - Faber, Elica, Hindware, Kaff, Glen etc.</p>
        </div>
      </section>

      {/* Sticky */}
      <div style={{position:'fixed', bottom:0, left:0, right:0, background:'white', padding:'12px 15px', display:'flex', gap:'12px', boxShadow:'0 -4px 20px rgba(0,0,0,0.15)', zIndex:999}}>
        <a href={waLink} style={{flex:1, background:'#25D366', color:'white', padding:'16px', borderRadius:'12px', textAlign:'center', fontWeight:900, textDecoration:'none'}}>WhatsApp</a>
        <a href={`tel:+91${phone}`} style={{flex:1, background:'#0a1931', color:'white', padding:'16px', borderRadius:'12px', textAlign:'center', fontWeight:900, textDecoration:'none'}}>Call Now</a>
      </div>
    </main>
  );
}
