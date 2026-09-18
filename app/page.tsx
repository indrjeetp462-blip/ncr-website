"use client"
import { useState, useEffect } from "react"

export default function Page() {
  const [faq, setFaq] = useState(-1)
  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setShowPopup(true), 3000)
    return () => clearTimeout(t)
  }, [])

  return (
    <div style={{fontFamily:"Arial", background:"#ffffff", color:"#111827", margin:0}}>
      
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

      <div style={{margin:"16px", display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"8px"}}>
        <div style={{border:"1px solid #e2e8f0", borderRadius:"12px", padding:"12px", textAlign:"center"}}><div style={{fontWeight:"900"}}>5000+</div><div style={{fontSize:"10px"}}>Repairs</div></div>
        <div style={{border:"1px solid #e2e8f0", borderRadius:"12px", padding:"12px", textAlign:"center"}}><div style={{fontWeight:"900"}}>4.9 Star</div><div style={{fontSize:"10px"}}>Rating</div></div>
        <div style={{border:"1px solid #e2e8f0", borderRadius:"12px", padding:"12px", textAlign:"center"}}><div style={{fontWeight:"900"}}>30 Min</div><div style={{fontSize:"10px"}}>Arrival</div></div>
      </div>

      <div style={{margin:"16px", border:"1px solid #e2e8f0", borderRadius:"16px", overflow:"hidden"}}>
        <div style={{padding:"16px", fontWeight:"900", fontSize:"16px", background:"#0f172a", color:"#fff"}}>Common Chimney Issues We Fix</div>
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
          {["Elica","Glen","Kaff","Faber","Hindware","Bosch","Hafele","Sunflame","Prestige","Pigeon","Carysil","Seavy","Kutchina","BlowHot","Eurodomo","Inalsa"].map(b=>(
            <div key={b} style={{background:"#fff", border:"1px solid #e2e8f0", padding:"10px", borderRadius:"10px", textAlign:"center", fontWeight:"800", fontSize:"12px"}}>{b}</div>
          ))}
        </div>
      </div>

      <div style={{margin:"16px"}}>
        <div style={{fontWeight:"900", fontSize:"16px", marginBottom:"10px"}}>FAQ</div>
        {[
          {q:"How often should I service my chimney?", a:"Empty oil collector every 2-3 weeks and deep cleaning every 6-8 months."},
          {q:"Do you provide installation?", a:"Yes, Rs 999-1499 including mounting and ducting up to 3 feet."},
          {q:"Service available in my area?", a:"All Ghaziabad, Indirapuram, Vaishali, Vasundhara, Kaushambi, Raj Nagar Ext, Crossing Republik, Sahibabad, Noida, Greater Noida."},
        ].map((f,i)=>(
          <div key={i} onClick={()=>setFaq(faq===i? -1 : i)} style={{border:"1px solid #e2e8f0", borderRadius:"12px", padding:"14px", marginBottom:"8px", cursor:"pointer", background: faq===i ? "#f8fafc" : "#fff"}}>
            <div style={{fontWeight:"800", fontSize:"13px", display:"flex", justifyContent:"space-between"}}>{f.q}<span>{faq===i ? "-" : "+"}</span></div>
            {faq===i && <div style={{fontSize:"12px", color:"#475569", marginTop:"8px"}}>{f.a}</div>}
          </div>
        ))}
      </div>

      <div style={{background:"#f8fafc", borderTop:"1px solid #e2e8f0", padding:"20px 16px", marginBottom:"80px"}}>
        <div style={{fontWeight:"900", fontSize:"14px"}}>Service Areas</div>
        <div style={{fontSize:"11px", color:"#475569", marginTop:"8px", lineHeight:"1.8"}}>Ghaziabad, Patel Nagar, Shalimar Garden, Raj Nagar, Indirapuram, Vaishali, Vasundhara, Kaushambi, Crossing Republik, Sahibabad, Noida, Greater Noida, Delhi NCR</div>
      </div>

      {/* BOTTOM FIXED CALL */}
      <a href="tel:8796284796" style={{position:"fixed", bottom:0, left:0, right:0, background:"#dc2626", color:"#fff", padding:"16px", textAlign:"center", fontWeight:"900", fontSize:"15px", textDecoration:"none", zIndex:30}}>Call Now - 8796284796</a>

      {/* POPUP CALL */}
      {showPopup && (
        <div style={{position:"fixed", inset:0, background:"rgba(0,0,0,0.6)", backdropFilter:"blur(4px)", display:"flex", alignItems:"center", justifyContent:"center", zIndex:50, padding:"20px"}}>
          <div style={{background:"#fff", borderRadius:"20px", padding:"24px", width:"100%", maxWidth:"340px", textAlign:"center", boxShadow:"0 20px 60px rgba(0,0,0,0.3)", animation:"pop 0.3s"}}>
            <div style={{width:"60px", height:"60px", background:"linear-gradient(135deg,#dc2626,#ef4444)", borderRadius:"50%", margin:"0 auto 12px", display:"flex", alignItems:"center", justifyContent:"center", fontSize:"28px"}}>📞</div>
            <div style={{fontWeight:"900", fontSize:"20px"}}>Need Chimney Repair?</div>
            <div style={{fontSize:"13px", color:"#64748b", marginTop:"6px"}}>Technician available nearby - 30 min arrival in Ghaziabad</div>
            <div style={{marginTop:"16px", display:"grid", gap:"10px"}}>
              <a href="tel:8796284796" style={{background:"#111827", color:"#fff", padding:"14px", borderRadius:"12px", textDecoration:"none", fontWeight:"900", fontSize:"15px"}}>📞 8796284796 - Call Now</a>
              <a href="https://wa.me/918796284796" style={{background:"#f1f5f9", color:"#111", padding:"12px", borderRadius:"12px", textDecoration:"none", fontWeight:"800", fontSize:"13px"}}>WhatsApp Us</a>
            </div>
            <button onClick={()=>setShowPopup(false)} style={{marginTop:"14px", border:"none", background:"none", color:"#94a3b8", fontSize:"13px", cursor:"pointer"}}>Maybe Later</button>
          </div>
        </div>
      )}

    </div>
  )
}
