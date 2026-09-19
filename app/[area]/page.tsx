
export default async function Page({ params }: { params: Promise<{ area: string }> }) {
  const { area } = await params;
  const areaName = area.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  return (
    <main style={{padding:'20px', fontFamily:'sans-serif'}}>
      <h1 style={{fontSize:'28px', fontWeight:'bold'}}>Kitchen Chimney Repair in {areaName} - 30 Min Doorstep</h1>
      <p style={{marginTop:'10px'}}>Same day repair for all brands in {areaName}. Motor, PCB, Cleaning, Filter, Noise, Suction. Original parts, warranty bill.</p>
      <p style={{marginTop:'10px', fontWeight:'bold'}}>We Serve: Indirapuram, Vaishali, Kaushambi, Vasundhara, Raj Nagar, Noida Sec 62/50/18, Laxmi Nagar, Patel Nagar, Shahdara.</p>
      <a href="tel:8796284796" style={{display:'inline-block', marginTop:'20px', background:'#e11d48', color:'white', padding:'12px 20px', borderRadius:'8px', textDecoration:'none', fontWeight:'bold'}}>Call 8796284796</a>
    </main>
  );
}
