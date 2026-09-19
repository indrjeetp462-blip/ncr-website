export default function Page({ params }: { params: { area: string } }) {
  const areaName = params.area.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
  return (
    <main style={{padding:'20px', fontFamily:'sans-serif'}}>
      <h1 style={{fontSize:'32px', fontWeight:'bold'}}>Chimney Service in {areaName}</h1>
      <p style={{marginTop:'10px', fontSize:'18px'}}>
        Best chimney cleaning, repair & installation in {areaName}. 
        We provide same day service in Indirapuram, Vaishali, Kaushambi, Vasundhara, Raj Nagar, 
        Noida Sector 18/62/50, Laxmi Nagar, Patel Nagar, Shahdara.
      </p>
      <h2 style={{marginTop:'20px'}}>Our Services in {areaName}</h2>
      <ul>
        <li>Chimney Cleaning in {areaName}</li>
        <li>Chimney Repair in {areaName}</li>
        <li>Chimney Installation in {areaName}</li>
      </ul>
      <p style={{marginTop:'20px', fontWeight:'bold'}}>Call Now for Same Day Service!</p>
    </main>
  );
}
