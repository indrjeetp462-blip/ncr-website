"use client"
import { useState, useEffect } from "react"

export default function Page() {
  const [faq, setFaq] = useState(-1)
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShowPopup(true), 3000)
    return () => clearTimeout(t)
  }, [])

  // 50000 chars SEO generate
  const brands = ["Faber","Elica","Kaff","Hindware","Glen","Bosch","Hafele","Sunflame","Prestige","Pigeon","Carysil","Seavy","Kutchina","BlowHot","Eurodomo","Inalsa","Whirlpool","LG","Samsung","Faber India"]
  const areas = ["Patel Nagar","Shalimar Garden","Raj Nagar","Raj Nagar Extension","Kavi Nagar","Indirapuram","Ahinsa Khand 1","Ahinsa Khand 2","Nyay Khand","Shakti Khand","Gyani Border","Shipra Suncity","Vaishali","Vasundhara","Kaushambi","Crossing Republik","Sahibabad","Mohan Nagar","Shyam Park","Govindpuram","Vijay Nagar","Pratap Vihar","Wave City","Gaur City","Gaur City 1","Gaur City 2","Noida","Noida Sector 18","Noida Sector 62","Noida Sector 50","Greater Noida","Delhi","East Delhi","Laxmi Nagar","Preet Vihar"]
  const services = ["repair","service","cleaning","deep cleaning","motor repair","pcb repair","touch panel repair","filter replacement","carbon filter change","baffle filter cleaning","duct cleaning","installation","auto clean repair","filterless repair","suction repair","noise repair","oil leak repair","not starting repair"]

  let seoText = ""
  areas.forEach(a => {
    brands.forEach(b => {
      services.forEach(s => {
        seoText += `chimney ${s} in ${a} ghaziabad, ${b.toLowerCase()} chimney ${s} in ${a}, ${b.toLowerCase()} chimney ${s} in ghaziabad, kitchen chimney ${s} ${a}, `
      })
    })
  })
  // Extra long tail to make 50000+
  seoText += `chimney repair ghaziabad 201001, chimney repair ghaziabad 201014, chimney repair ghaziabad 201010, chimney service near me, chimney repair near me, best chimney repair service in ghaziabad, same day chimney repair ghaziabad, doorstep chimney repair ghaziabad, professional chimney technician ghaziabad, local chimney service ghaziabad, `.repeat(200)

  return (
    <div style={{fontFamily:"Arial", background:"#fff", color:"#111827", margin:0}}>
      
      <div style={{background:"#0f172a", color:"#fff", padding:"8px 16px", fontSize:"11px", display:"flex", justifyContent:"space-between"}}>
        <span>Same Day Service Ghaziabad Noida</span><span>Call: 8796284796</span>
      </div>
      <div style={{padding:"14px 16px", display:"flex", justifyContent:"space-between", alignItems:"center", borderBottom:"1px solid #e5e7eb", position:"sticky", top:0, background:"#fff", zIndex:20}}>
        <div style={{fontWeight:"900", fontSize:"18px"}}>NCR Chimney <span style={{color:"#dc2626"}}>Expert</span></div>
        <a href="tel:8796284796" style={{background:"#dc2626", color:"#fff", padding:"10px 16px", borderRadius:"10px", textDecoration:"none", fontWeight:"800", fontSize:"13px"}}>8796284796</a>
      </div>

      <div style={{padding:"20px 16px"}}>
        <div style={{background:"#fef2f2", color:"#dc2626", display:"inline-block", padding:"6px 12px", borderRadius:"20px", fontSize:"11px", fontWeight:"800"}}>Kitchen Chimney Repair Service in Ghaziabad</div>
        <h1 style={{fontSize:"28px", fontWeight:"900", lineHeight:"1.1", marginTop:"12px"}}>Kitchen Chimney Repair Service in Ghaziabad - Same Day Doorstep</h1>
        <p style={{fontSize:"14px", color:"#475569", lineHeight:"1.6", marginTop:"10px"}}>Fast and trusted repair at your doorstep by skilled technicians using original parts. All brands repair in your home.</p>
        <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800" alt="Chimney Repair" style={{width:"100%", height:"260px", objectFit:"cover", borderRadius:"16px", marginTop:"16px"}} />
        <div style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px", marginTop:"16px"}}>
          <a href="tel:8796284796" style={{background:"#111827", color:"#fff", textAlign:"center", padding:"14px", borderRadius:"12px", textDecoration:"none", fontWeight:"900"}}>Call Technician</a>
          <a href="https://wa.me/918796284796" style={{background:"#16a34a", color:"#fff", textAlign:"center", padding:"14px", borderRadius:"12px", textDecoration:"none", fontWeight:"900"}}>WhatsApp</a>
        </div>
      </div>

      <div style={{margin:"16px", border:"1px solid #e2e8f0", borderRadius:"16px", overflow:"hidden"}}>
        <div style={{padding:"16px", fontWeight:"900", fontSize:"16px", background:"#0f172a", color:"#fff"}}>Common Chimney Issues We Fix in Ghaziabad</div>
        <div style={{display:"grid"}}>
          <div style={{display:"grid", gridTemplateColumns:"1.2fr 1fr 1fr", padding:"12px", background:"#f8fafc", fontWeight:"800", fontSize:"12px"}}><span>Issue</span><span>You Notice</span><span>Our Fix</span></div>
          <div style={{display:"grid", gridTemplateColumns:"1.2fr 1fr 1fr", padding:"12px", fontSize:"12px", borderTop:"1px solid #f1f5f9"}}><span>Smoke Not Pulled</span><span>Smoke in kitchen</span><span>Motor, Duct Service</span></div>
          <div style={{display:"grid", gridTemplateColumns:"1.2fr 1fr 1fr", padding:"12px", fontSize:"12px", borderTop:"1px solid #f1f5f9"}}><span>Loud Noise</span><span>Rattling Sound</span><span>Motor Balancing</span></div>
          <div style={{display:"grid", gridTemplateColumns:"1.2fr 1fr 1fr", padding:"12px", fontSize:"12px", borderTop:"1px solid #f1f5f9"}}><span>Not Starting</span><span>No power</span><span>PCB Repair</span></div>
        </div>
      </div>

      <div style={{margin:"16px", background:"#f8fafc", borderRadius:"16px", padding:"16px", border:"1px solid #e2e8f0"}}>
        <div style={{fontWeight:"900", fontSize:"16px"}}>All Brands We Service</div>
        <div style={{marginTop:"12px", display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"8px"}}>
          {brands.slice(0,16).map(b=>(
            <div key={b} style={{background:"#fff", border:"1px solid #e2e8f0", padding:"10px", borderRadius:"10px", textAlign:"center", fontWeight:"800", fontSize:"12px"}}>{b}</div>
          ))}
        </div>
      </div>

      {/* SEO - 50000 CHARS */}
      <div style={{background:"#0f172a", padding:"20px 16px", marginTop:"20px", marginBottom:"80px"}}>
        <div style={{fontWeight:"900", fontSize:"14px", color:"#fff"}}>Service Areas - 50000 Keywords SEO Block</div>
        <div style={{fontSize:"10px", color:"#64748b", lineHeight:"2", marginTop:"12px", textAlign:"justify", wordBreak:"break-word"}}>
          {seoText}
        </div>
        <div style={{marginTop:"16px", textAlign:"center", fontSize:"11px", color:"#475569"}}>© 2026 NCR Chimney Expert | Total SEO Length: {seoText.length} characters | Call 8796284796</div>
      </div>

      <a href="tel:8796284796" style={{position:"fixed", bottom:0, left:0, right:0, background:"#dc2626", color:"#fff", padding:"16px", textAlign:"center", fontWeight:"900", fontSize:"15px", textDecoration:"none", zIndex:30}}>Call Now - 8796284796</a>

      {showPopup && (
        <div style={{position:"fixed", inset:0, background:"rgba(0,0,0,0.6)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:50, padding:"20px"}}>
          <div style={{background:"#fff", borderRadius:"20px", padding:"24px", width:"100%", maxWidth:"340px", textAlign:"center"}}>
            <div style={{width:"60px", height:"60px", background:"#dc2626", borderRadius:"50%", margin:"0 auto 12px", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"28px", color:"#fff"}}>📞</div>
            <div style={{fontWeight:"900", fontSize:"20px"}}>Need Chimney Repair?</div>
            <div style={{fontSize:"13px", color:"#64748b", marginTop:"6px"}}>Technician available nearby - 30 min arrival</div>
            <a href="tel:8796284796" style={{display:"block", marginTop:"16px", background:"#111827", color:"#fff", padding:"14px", borderRadius:"12px", textDecoration:"none", fontWeight:"900"}}>📞 8796284796 - Call Now</a>
            <button onClick={()=>setShowPopup(false)} style={{marginTop:"12px", border:"none", background:"none", color:"#94a3b8", fontSize:"13px"}}>Maybe Later</button>
          </div>
        </div>
      )}

    </div>
  )
}
