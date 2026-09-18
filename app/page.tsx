"use client"
import { useState, useEffect } from "react"

export default function Page() {
  const [faq, setFaq] = useState(-1)
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShowPopup(true), 3500)
    return () => clearTimeout(t)
  }, [])

  // 10000 chars SEO
  const seoKeywords = `kitchen chimney repair service in ghaziabad, chimney repair ghaziabad, chimney service ghaziabad, chimney cleaning ghaziabad, chimney deep cleaning ghaziabad, chimney motor repair ghaziabad, chimney pcb repair ghaziabad, chimney filter replacement ghaziabad, chimney installation ghaziabad, chimney technician ghaziabad, chimney mechanic ghaziabad, chimney service near me, chimney repair near me, chimney cleaning near me, chimney technician near me, best chimney repair service in ghaziabad, same day chimney repair ghaziabad, doorstep chimney repair ghaziabad, chimney repair Patel Nagar ghaziabad, chimney service Patel Nagar ghaziabad, chimney cleaning Patel Nagar ghaziabad, chimney motor repair Patel Nagar, chimney pcb repair Patel Nagar, chimney filter replacement Patel Nagar, faber chimney repair Patel Nagar, faber chimney service Patel Nagar, faber chimney cleaning Patel Nagar, elica chimney repair Patel Nagar, elica chimney service Patel Nagar, kaff chimney repair Patel Nagar, kaff chimney service Patel Nagar, hindware chimney repair Patel Nagar, glen chimney repair Patel Nagar, bosch chimney repair Patel Nagar, hafele chimney repair Patel Nagar, hafele chimney service Patel Nagar, hafele chimney cleaning Patel Nagar, chimney repair Indirapuram, chimney service Indirapuram, chimney cleaning Indirapuram, chimney motor repair Indirapuram, chimney pcb repair Indirapuram, faber chimney repair Indirapuram, elica chimney repair Indirapuram, kaff chimney repair Indirapuram, hindware chimney repair Indirapuram, chimney repair Vaishali, chimney service Vaishali, chimney cleaning Vaishali, chimney repair Vasundhara, chimney service Vasundhara, chimney repair Kaushambi, chimney service Kaushambi, chimney repair Crossing Republik, chimney service Crossing Republik, chimney repair Sahibabad, chimney service Sahibabad, chimney repair Mohan Nagar, chimney repair Raj Nagar, chimney repair Shalimar Garden, chimney repair Kavi Nagar, chimney repair Noida, chimney service Noida, chimney repair Noida Sector 18, chimney repair Noida Sector 62, chimney repair Greater Noida, chimney repair Delhi NCR, auto clean chimney repair ghaziabad, filterless chimney repair ghaziabad, chimney suction problem ghaziabad, chimney noise repair ghaziabad, chimney oil leak repair ghaziabad, chimney not starting repair ghaziabad, chimney touch panel repair ghaziabad, chimney gesture control repair ghaziabad, chimney carbon filter replacement, chimney baffle filter cleaning, chimney duct cleaning service, chimney amc service ghaziabad, chimney warranty service ghaziabad, chimney repair 201001, chimney repair 201014, chimney repair 201010, chimney repair 201012, chimney service 201001, chimney service 201014, call now chimney technician near me, call now chimney repair near me, 24x7 chimney service ghaziabad, emergency chimney repair ghaziabad, local chimney technician ghaziabad, professional chimney service ghaziabad, affordable chimney repair ghaziabad, ` .repeat(4)

  return (
    <div style={{fontFamily:"Arial", background:"#fff", margin:0}}>

      {/* HEADER */}
      <div style={{background:"#111", color:"#fff", padding:"10px 16px", fontSize:"11px", display:"flex", justifyContent:"space-between"}}><span>30 MIN ARRIVAL - SAME DAY</span><span>GHZ | NOIDA | DELHI</span></div>
      <div style={{padding:"12px 16px", display:"flex", justifyContent:"space-between", alignItems:"center", borderBottom:"1px solid #eee", position:"sticky", top:0, background:"#fff", zIndex:20}}>
        <div style={{fontWeight:"900", fontSize:"19px"}}>NCR Chimney <span style={{color:"#dc2626"}}>Expert</span></div>
        <a href="tel:8796284796" style={{background:"#dc2626", color:"#fff", padding:"10px 18px", borderRadius:"30px", textDecoration:"none", fontWeight:"900", fontSize:"14px"}}>8796284796</a>
      </div>

      {/* HERO - BIGGER */}
      <div style={{padding:"20px 16px", background:"linear-gradient(180deg,#fff,#f8fafc)"}}>
        <h1 style={{fontSize:"32px", fontWeight:"900", lineHeight:"1", letterSpacing:"-1px"}}>Kitchen Chimney Repair Service in Ghaziabad <br/><span style={{color:"#dc2626"}}>30 Min Doorstep</span></h1>
        <p style={{fontSize:"14px", color:"#555", marginTop:"12px", lineHeight:"1.6"}}>Same day repair for all brands - Motor, PCB, Cleaning, Filter, Noise, Suction. Original parts, warranty bill.</p>
        <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800" alt="chimney" style={{width:"100%", height:"280px", objectFit:"cover", borderRadius:"20px", marginTop:"16px", border:"1px solid #eee"}} />
        <div style={{marginTop:"16px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"12px"}}>
          <a href="tel:8796284796" style={{background:"#111", color:"#fff", textAlign:"center", padding:"16px", borderRadius:"14px", textDecoration:"none", fontWeight:"900"}}>📞 Call Now</a>
          <a href="https://wa.me/918796284796" style={{background:"#16a34a", color:"#fff", textAlign:"center", padding:"16px", borderRadius:"14px", textDecoration:"none", fontWeight:"900"}}>WhatsApp</a>
        </div>
      </div>

      {/* CALL NOW NEAR ME - NEW SECTION */}
      <div style={{margin:"16px", background:"linear-gradient(135deg,#dc2626,#ef4444)", borderRadius:"16px", padding:"16px", color:"#fff", display:"flex", justifyContent:"space-between", alignItems:"center"}}>
        <div><div style={{fontWeight:"900", fontSize:"16px"}}>Call Now Near Me</div><div style={{fontSize:"11px", opacity:0.9, marginTop:"2px"}}>Technician Near You - 30 Min Arrival</div></div>
        <a href="tel:8796284796" style={{background:"#fff", color:"#dc2626", padding:"10px 16px", borderRadius:"30px", textDecoration:"none", fontWeight:"900", fontSize:"13px"}}>CALL NOW</a>
      </div>

      {/* ISSUES */}
      <div style={{margin:"16px", border:"1px solid #e2e8f0", borderRadius:"16px", overflow:"hidden"}}>
        <div style={{padding:"14px 16px", fontWeight:"900", background:"#111", color:"#fff"}}>Common Issues We Fix</div>
        <div style={{display:"grid", fontSize:"12px"}}>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", padding:"12px", background:"#f8fafc", fontWeight:"800"}}><span>Issue</span><span>Notice</span><span>Fix</span></div>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", padding:"12px", borderTop:"1px solid #f1f5f9"}}><span>Smoke Not Pulled</span><span>Smoke in kitchen</span><span>Motor/Duct</span></div>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", padding:"12px", borderTop:"1px solid #f1f5f9"}}><span>Loud Noise</span><span>Rattling</span><span>Balancing</span></div>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", padding:"12px", borderTop:"1px solid #f1f5f9"}}><span>Not Starting</span><span>No power</span><span>PCB Repair</span></div>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", padding:"12px", borderTop:"1px solid #f1f5f9"}}><span>Oil Leaks</span><span>Greasy hood</span><span>Deep Cleaning</span></div>
        </div>
      </div>

      {/* BRANDS */}
      <div style={{margin:"16px", background:"#f8fafc", border:"1px solid #e2e8f0", borderRadius:"16px", padding:"16px"}}>
        <div style={{fontWeight:"900"}}>All Brands Service</div>
        <div style={{marginTop:"12px", display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr", gap:"8px"}}>
          {["Faber","Elica","Kaff","Hindware","Glen","Bosch","Hafele","Sunflame","Prestige","Pigeon","Carysil","Seavy"].map(b=>(
            <div key={b} style={{background:"#fff", border:"1px solid #e2e8f0", padding:"12px 4px", borderRadius:"10px", textAlign:"center", fontWeight:"800", fontSize:"11px"}}>{b}</div>
          ))}
        </div>
      </div>

      {/* SEO - 10000 CHARS - LIGHT VISIBLE */}
      <div style={{margin:"16px", background:"#fff", border:"1px solid #e2e8f0", borderRadius:"16px", padding:"16px"}}>
        <div style={{fontWeight:"900", fontSize:"14px"}}>Chimney Repair Service - Ghaziabad, Noida, Delhi NCR - SEO Keywords (10000+)</div>
        <div style={{marginTop:"12px", fontSize:"10px", color:"#475569", lineHeight:"2", textAlign:"justify", background:"#f8fafc", padding:"12px", borderRadius:"10px", wordBreak:"break-word"}}>
          {seoKeywords.slice(0,10000)}
        </div>
        <div style={{marginTop:"8px", fontSize:"10px", color:"#94a3b8"}}>Total Length: {seoKeywords.slice(0,10000).length} characters | Keyword optimized for Google ranking</div>
      </div>

      <div style={{background:"#111", color:"#fff", padding:"20px 16px", marginBottom:"90px", marginTop:"20px"}}>
        <div style={{fontWeight:"900"}}>Service Areas</div>
        <div style={{fontSize:"11px", color:"#aaa", marginTop:"8px", lineHeight:"1.8"}}>Ghaziabad, Indirapuram, Vaishali, Vasundhara, Kaushambi, Crossing Republik, Sahibabad, Mohan Nagar, Raj Nagar, Shalimar Garden, Patel Nagar, Noida Sec 18, 62, 50, Greater Noida, East Delhi</div>
        <div style={{marginTop:"12px", textAlign:"center", fontSize:"11px", color:"#555"}}>© 2026 NCR Chimney Expert | 8796284796</div>
      </div>

      {/* BOTTOM FIXED - CALL NOW NEAR ME */}
      <div style={{position:"fixed", bottom:0, left:0, right:0, background:"#111", padding:"10px 16px", display:"flex", gap:"10px", zIndex:30}}>
        <a href="tel:8796284796" style={{flex:1, background:"#dc2626", color:"#fff", padding:"14px", borderRadius:"12px", textAlign:"center", textDecoration:"none", fontWeight:"900"}}>📞 CALL NOW NEAR ME</a>
        <a href="https://wa.me/918796284796" style={{background:"#16a34a", color:"#fff", padding:"14px 16px", borderRadius:"12px", textDecoration:"none", fontWeight:"900"}}>WA</a>
      </div>

      {/* POPUP */}
      {showPopup && (
        <div style={{position:"fixed", inset:0, background:"rgba(0,0,0,0.7)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:50, padding:"20px"}}>
          <div style={{background:"#fff", borderRadius:"20px", padding:"24px", width:"100%", maxWidth:"360px", textAlign:"center", boxShadow:"0 20px 60px rgba(0,0,0,0.4)"}}>
            <div style={{width:"70px", height:"70px", background:"linear-gradient(135deg,#dc2626,#ef4444)", borderRadius:"50%", margin:"0 auto 12px", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"30px", color:"#fff"}}>📞</div>
            <div style={{fontWeight:"900", fontSize:"22px"}}>Chimney Repair Near Me?</div>
            <div style={{fontSize:"13px", color:"#64748b", marginTop:"6px"}}>Call Now - Technician 30 min me aayega - Ghaziabad, Noida</div>
            <div style={{marginTop:"6px", fontSize:"12px", background:"#fef2f2", color:"#dc2626", display:"inline-block", padding:"4px 10px", borderRadius:"20px", fontWeight:"800"}}>Same Day Doorstep Service</div>
            <a href="tel:8796284796" style={{display:"block", marginTop:"16px", background:"#111", color:"#fff", padding:"16px", borderRadius:"14px", textDecoration:"none", fontWeight:"900", fontSize:"16px"}}>📞 8796284796 - CALL NOW</a>
            <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", marginTop:"10px"}}>
              <a href="https://wa.me/918796284796" style={{background:"#f0fdf4", color:"#16a34a", padding:"12px", borderRadius:"10px", textDecoration:"none", fontWeight:"800", fontSize:"13px", border:"1px solid #bbf7d0"}}>WhatsApp</a>
              <button onClick={()=>setShowPopup(false)} style={{background:"#f8fafc", border:"1px solid #e2e8f0", padding:"12px", borderRadius:"10px", fontWeight:"700", fontSize:"13px"}}>Later</button>
            </div>
          </div>
        </div>
      )}

    </div>
  )
}
