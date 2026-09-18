"use client"
import { useState } from "react"

export default function Home() {
  const [open, setOpen] = useState(0)
  return (
    <div style={{fontFamily:"Arial", background:"#f8fafc", margin:0}}>
      
      <div style={{background:"#fff", padding:"12px 16px", display:"flex", justifyContent:"space-between", alignItems:"center", borderBottom:"1px solid #eee", position:"sticky", top:0, zIndex:10}}>
        <b>NCR Chimney Expert</b>
        <a href="tel:8796284796" style={{background:"#111", color:"#fff", padding:"8px 14px", borderRadius:"8px", textDecoration:"none", fontSize:"12px", fontWeight:"800"}}>8796284796</a>
      </div>

      <div style={{background:"#fff"}}>
        <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=800" alt="chimney" style={{width:"100%", height:"240px", objectFit:"cover"}} />
        <div style={{padding:"16px"}}>
          <h1 style={{fontSize:"26px", fontWeight:"900", margin:0, lineHeight:"1.1"}}>Kitchen Chimney Repair Service Ghaziabad Noida</h1>
          <p style={{fontSize:"13px", color:"#666", marginTop:"8px"}}>Same day doorstep repair for all brands. Motor, PCB, Cleaning, Filter expert.</p>
          <a href="tel:8796284796" style={{display:"inline-block", marginTop:"12px", background:"#dc2626", color:"#fff", padding:"12px 20px", borderRadius:"10px", textDecoration:"none", fontWeight:"900"}}>Call 8796284796</a>
        </div>
      </div>

      <div style={{margin:"12px", background:"#fff", borderRadius:"12px", border:"1px solid #e5e7eb", overflow:"hidden"}}>
        <div style={{padding:"12px 16px", fontWeight:"800", background:"#111", color:"#fff"}}>Common Problems We Fix</div>
        <div style={{display:"grid"}}>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", padding:"10px 16px", fontSize:"12px", borderTop:"1px solid #f1f5f9"}}><b>Not Starting</b><span>PCB Issue</span><span>Repair</span></div>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", padding:"10px 16px", fontSize:"12px", borderTop:"1px solid #f1f5f9"}}><b>Low Suction</b><span>Filter Jam</span><span>Cleaning</span></div>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", padding:"10px 16px", fontSize:"12px", borderTop:"1px solid #f1f5f9"}}><b>Loud Noise</b><span>Motor Fault</span><span>Service</span></div>
          <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", padding:"10px 16px", fontSize:"12px", borderTop:"1px solid #f1f5f9"}}><b>Oil Leak</b><span>Grease Block</span><span>Full Service</span></div>
        </div>
      </div>

      <div style={{margin:"12px", background:"#fff", borderRadius:"12px", border:"1px solid #e5e7eb", padding:"16px"}}>
        <div style={{fontWeight:"800"}}>Why Choose Us</div>
        <div style={{marginTop:"10px", display:"grid", gridTemplateColumns:"1fr 1fr", gap:"10px"}}>
          <div style={{background:"#fef2f2", padding:"12px", borderRadius:"10px", textAlign:"center"}}><b style={{fontSize:"12px"}}>Same Day</b><div style={{fontSize:"10px"}}>Fast Service</div></div>
          <div style={{background:"#f0fdf4", padding:"12px", borderRadius:"10px", textAlign:"center"}}><b style={{fontSize:"12px"}}>Warranty</b><div style={{fontSize:"10px"}}>30 Days</div></div>
          <div style={{background:"#eff6ff", padding:"12px", borderRadius:"10px", textAlign:"center"}}><b style={{fontSize:"12px"}}>All Brands</b><div style={{fontSize:"10px"}}>Expert Fix</div></div>
          <div style={{background:"#fef9c3", padding:"12px", borderRadius:"10px", textAlign:"center"}}><b style={{fontSize:"12px"}}>Genuine Parts</b><div style={{fontSize:"10px"}}>Original</div></div>
        </div>
      </div>

      <div style={{margin:"12px", background:"#fff", borderRadius:"12px", border:"1px solid #e5e7eb", padding:"16px"}}>
        <div style={{fontWeight:"800"}}>Our Services</div>
        <div style={{fontSize:"13px", lineHeight:"2", marginTop:"8px"}}>1. Deep Cleaning Service<br/>2. Motor Repair<br/>3. PCB Repair<br/>4. Filter Change<br/>5. Duct Service<br/>6. Installation<br/>7. AMC Service</div>
      </div>

      <div style={{margin:"12px", background:"#fff", borderRadius:"12px", border:"1px solid #e5e7eb", padding:"16px"}}>
        <div style={{fontWeight:"800"}}>All Brands We Service</div>
        <div style={{marginTop:"10px", display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap:"8px"}}>
          {["Faber","Elica","Kaff","Hindware","Glen","Bosch","Hafele","Sunflame","Prestige","Pigeon","Eurodomo","Inalsa","Carysil","Seavy","Kutchina"].map((b)=>(
            <div key={b} style={{border:"1px solid #e5e7eb", background:"#f8fafc", padding:"10px", borderRadius:"10px", textAlign:"center", fontWeight:"800", fontSize:"11px"}}>{b}</div>
          ))}
        </div>
      </div>

      <div style={{margin:"12px", background:"#fff", borderRadius:"12px", border:"1px solid #e5e7eb", padding:"16px"}}>
        <div style={{fontWeight:"800"}}>How It Works</div>
        <div style={{fontSize:"12px", lineHeight:"1.8", marginTop:"8px"}}>Step 1 - Call 8796284796<br/>Step 2 - Technician in 30-60 min<br/>Step 3 - Diagnosis and Repair<br/>Step 4 - Testing and Billing</div>
      </div>

      <div style={{background:"#111", color:"#fff", padding:"16px", marginTop:"12px", marginBottom:"70px"}}>
        <div style={{fontWeight:"800"}}>Service Areas</div>
        <div style={{fontSize:"11px", color:"#aaa", marginTop:"8px", lineHeight:"1.8"}}>Ghaziabad, Indirapuram, Vaishali, Vasundhara, Kaushambi, Crossing Republik, Sahibabad, Mohan Nagar, Noida Sec 18, 62, Greater Noida, Delhi NCR</div>
        <div style={{fontSize:"9px", color:"#555", marginTop:"12px", lineHeight:"1.8", borderTop:"1px solid #222", paddingTop:"10px"}}>chimney repair ghaziabad, chimney service ghaziabad, chimney cleaning ghaziabad, chimney technician ghaziabad, faber chimney repair, elica chimney repair, kaff chimney repair, hindware chimney repair, glen chimney repair, bosch chimney repair, chimney motor repair, chimney pcb repair, chimney deep cleaning, chimney service near me, chimney repair near me, chimney repair indirapuram, chimney repair vaishali, chimney repair noida</div>
      </div>

      <a href="tel:8796284796" style={{position:"fixed", bottom:0, left:0, right:0, background:"#16a34a", color:"#fff", padding:"16px", textAlign:"center", fontWeight:"900", textDecoration:"none"}}>CALL NOW 8796284796</a>

    </div>
  )
}
