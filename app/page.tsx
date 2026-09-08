
export default function Home() {
  const phone = "8796284796";
  return (
    <main style={{fontFamily:'system-ui', background:'#fff'}}>
      <div style={{background:'#ff6600', color:'white', textAlign:'center', padding:'8px', fontWeight:'bold'}}>
        🔥 Same Day Chimney Service in Delhi NCR - Call {phone}
      </div>
      <header style={{padding:'20px', display:'flex', justifyContent:'space-between', maxWidth:'1000px', margin:'0 auto'}}>
        <h1 style={{fontWeight:'800', fontSize:'20px'}}>NCR CHIMNEY<br/>SERVICE & REPAIR</h1>
        <a href={`tel:${phone}`} style={{background:'black', color:'white', padding:'10px 20px', borderRadius:'30px', textDecoration:'none', fontWeight:'bold'}}>Call Now</a>
      </header>
      <section style={{background:'#111', color:'white', padding:'50px 20px', textAlign:'center'}}>
        <h2 style={{fontSize:'36px', fontWeight:'900'}}>Kitchen Chimney<br/>Cleaning & Repair Expert</h2>
        <p style={{marginTop:'15px', color:'#ccc', fontSize:'18px'}}>Deep Cleaning Rs. 499 | All Brands Repair in 1 Hour</p>
        <div style={{marginTop:'30px', display:'flex', gap:'15px', justifyContent:'center', flexWrap:'wrap'}}>
          <a href={`https://wa.me/91${phone}`} style={{background:'#25D366', color:'white', padding:'18px 35px', borderRadius:'50px', textDecoration:'none', fontWeight:'bold', fontSize:'18px'}}>WhatsApp {phone}</a>
          <a href={`tel:${phone}`} style={{background:'white', color:'black', padding:'18px 35px', borderRadius:'50px', textDecoration:'none', fontWeight:'bold', fontSize:'18px'}}>📞 Call {phone}</a>
        </div>
        <p style={{marginTop:'20px', color:'#ffcc00'}}>✓ Delhi | Noida | Gurgaon | Faridabad | Ghaziabad</p>
      </section>
      <section style={{padding:'40px 20px', maxWidth:'1000px', margin:'0 auto'}}>
        <h3 style={{textAlign:'center', fontSize:'26px', fontWeight:'800'}}>Our Services</h3>
        <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'15px', marginTop:'25px'}}>
          <div style={{border:'2px solid #eee', padding:'20px', borderRadius:'16px', textAlign:'center'}}><b>🧹 Deep Cleaning</b><br/>Rs. 499/- Full</div>
          <div style={{border:'2px solid #eee', padding:'20px', borderRadius:'16px', textAlign:'center'}}><b>🔧 Repair Service</b><br/>Motor, PCB, Filter</div>
          <div style={{border:'2px solid #eee', padding:'20px', borderRadius:'16px', textAlign:'center'}}><b>🏠 Installation</b><br/>New & Old</div>
          <div style={{border:'2px solid #eee', padding:'20px', borderRadius:'16px', textAlign:'center'}}><b>🛡️ AMC Plan</b><br/>Yearly</div>
        </div>
      </section>
      <section style={{background:'#f6f6f6', padding:'30px 20px', textAlign:'center'}}>
        <p style={{fontWeight:'bold'}}>All Brands: Faber | Elica | Hindware | Kaff | Glen | Inalsa</p>
      </section>
      <footer style={{background:'black', color:'white', padding:'40px 20px', textAlign:'center'}}>
        <h2 style={{fontSize:'22px', fontWeight:'bold'}}>Book Your Service Today</h2>
        <a href={`tel:${phone}`} style={{display:'inline-block', marginTop:'20px', background:'#ff6600', color:'white', padding:'15px 40px', borderRadius:'40px', textDecoration:'none', fontWeight:'900', fontSize:'20px'}}>CALL {phone}</a>
        <p style={{marginTop:'20px', fontSize:'12px', color:'#777'}}>© NCR Chimney Service And Repair</p>
      </footer>
    </main>
  )
}
