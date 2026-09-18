"use client"
import { useState, useEffect } from 'react';

const brands = ["Faber","Elica","Hindware","Kaff","Glen","Bosch","Hafele","Sunflame","Prestige","Kutchina","Inalsa","Eurodomo","Carysil","Whirlpool","LG","Samsung","Pigeon"];

const noidaAreas = [
  { area: "Noida Sector 18", pin: "201301" }, { area: "Noida Sector 27", pin: "201301" },
  { area: "Noida Sector 62", pin: "201309" }, { area: "Noida Sector 63", pin: "201301" },
  { area: "Noida Sector 50", pin: "201301" }, { area: "Noida Sector 150", pin: "201310" },
  { area: "Greater Noida", pin: "201310" }, { area: "Greater Noida West", pin: "201306" },
];

const gzbAreas = [
  { area: "Indirapuram", pin: "201014" }, { area: "Vaishali", pin: "201010" },
  { area: "Kaushambi", pin: "201010" }, { area: "Vasundhara", pin: "201012" },
  { area: "Raj Nagar", pin: "201002" }, { area: "Crossing Republik", pin: "201016" },
  { area: "Mohan Nagar", pin: "201007" }, { area: "Sahibabad", pin: "201005" },
  { area: "Govindpuram", pin: "201013" }, { area: "Loni", pin: "201102" },
  { area: "Raj Nagar Extension", pin: "201017" }, { area: "Ghaziabad City", pin: "201001" },
  { area: "Murad Nagar", pin: "201206" }, { area: "Modinagar", pin: "201204" },
];

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const t = setTimeout(()=> setShowPopup(true), 3000);
    return ()=> clearTimeout(t);
  },[])

  return (
    <div className="p-4 bg-gray-50 min-h-screen">
      {/* AUTO POPUP CALL NOW */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-2xl text-center max-w-sm w-full">
            <h2 className="text-2xl font-bold mb-2">Chimney Service 24x7</h2>
            <p className="mb-4 text-gray-600">Noida & Ghaziabad - All Brands</p>
            <a href="tel:8796284796" className="bg-red-600 text-white px-8 py-3 rounded-full font-bold text-lg block">📞 8796284796 CALL NOW</a>
            <button onClick={()=>setShowPopup(false)} className="mt-4 text-gray-500">Close</button>
          </div>
        </div>
      )}

      <a href="tel:8796284796" className="fixed bottom-5 right-5 bg-green-600 text-white px-6 py-4 rounded-full shadow-xl z-40 font-bold animate-pulse">📞 Call Now</a>

      {/* 4 PHOTO */}
      <h1 className="text-3xl font-bold text-center">Chimney Service Noida Ghaziabad</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
        <img src="https://images.unsplash.com/photo-1556911220-e15b29be8c8f?w=500" alt="Chimney Service Noida 201301" className="rounded-xl h-56 object-cover w-full border-2" />
        <img src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=500" alt="Chimney Repair Ghaziabad 201001" className="rounded-xl h-56 object-cover w-full border-2" />
        <img src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=500" alt="Kitchen Chimney Cleaning" className="rounded-xl h-56 object-cover w-full border-2" />
        <img src="https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=500" alt="Chimney Installation Service" className="rounded-xl h-56 object-cover w-full border-2" />
      </div>

      {/* BRANDS BOX */}
      <h2 className="text-2xl font-bold my-6">All Brands - Ek Ek Brand Ka Service</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {brands.map(b=>(
          <div key={b} className="bg-white border p-4 text-center rounded-xl shadow hover:shadow-lg">
            <h3 className="font-bold">{b}</h3>
            <p className="text-xs">Service in Noida Ghaziabad</p>
            <a href="tel:8796284796" className="mt-2 inline-block bg-blue-600 text-white px-3 py-1 rounded text-xs">Call Now</a>
          </div>
        ))}
      </div>

      {/* PINCODE WISE BOX */}
      <h2 className="text-2xl font-bold mt-10">Noida - Pincode Wise Service</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {noidaAreas.map(item=>(
          <div key={item.area} className="bg-white p-4 rounded-xl border shadow">
            <h3 className="font-bold text-blue-700">Chimney Service in {item.area} - {item.pin}</h3>
            <p className="text-sm mt-1">Faber, Elica, Hindware, Kaff, Glen repair, cleaning, installation in {item.area} {item.pin}. Same day service near you.</p>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-10">Ghaziabad - Pincode Wise Service</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {gzbAreas.map(item=>(
          <div key={item.area} className="bg-white p-4 rounded-xl border shadow">
            <h3 className="font-bold text-red-700">Chimney Service in {item.area} - {item.pin}</h3>
            <p className="text-sm mt-1">Best chimney service center in {item.area} Ghaziabad {item.pin}. All brands service, filter cleaning, motor repair.</p>
          </div>
        ))}
      </div>

      {/* SEO HIDDEN 5000+ KEYWORDS */}
      <div className="mt-12 bg-white p-4 rounded text-[11px] text-gray-500 leading-6">
        <h4 className="font-bold">SEO Keywords - Noida Ghaziabad All Pin Codes</h4>
        chimney service noida 201301, chimney repair noida sector 18 201301, chimney cleaning noida sector 62 201309, chimney installation greater noida 201310, chimney AMC greater noida west 201306, chimney service indirapuram 201014, chimney service vaishali 201010, kaushambi 201010, vasundhara 201012, raj nagar 201002, kavi nagar 201002, crossing republik 201016, mohan nagar 201007, sahibabad 201005, govindpuram 201013, shalimar garden 201005, loni 201102, modinagar 201204, murad nagar 201206, ghaziabad city 201001, faber chimney service noida, elica chimney service ghaziabad, hindware chimney service indirapuram, kaff chimney service vaishali, glen chimney service raj nagar, bosch chimney service crossing republik, hafele chimney service noida extension... [5000 words SEO block - isko mat hatana, Google isi se rank karega]
      </div>
    </div>
  )
}
