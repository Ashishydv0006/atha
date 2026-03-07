export default function ValueCombo(){

const combos = [

{
name:"Heart & Blood Sugar Dual Care",
products:"Cholesterol Care + Diabo Care",
volume:"1000ml each"
},

{
name:"Complete Gut Health",
products:"Digestive Care + Aloe Vera",
volume:"1000ml each"
},

{
name:"Women's Hormonal Wellness",
products:"She Care + Thyroid Care",
volume:"1000ml each"
},

{
name:"Skin Radiance Combo",
products:"Sea Buckthorn + Skin & Pimple Care",
volume:"500ml each"
}

]

return(

<section className="py-16 bg-green-100">

<h2 className="text-3xl font-bold text-center text-green-800 mb-10">
Value Combo Packs
</h2>

<div className="grid md:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">

{combos.map((combo,i)=>(

<div key={i} className="bg-white p-6 rounded-xl shadow">

<h3 className="font-semibold text-lg">
{combo.name}
</h3>

<p className="text-gray-600 mt-2">
{combo.products}
</p>

<p className="text-green-700 text-sm mt-2">
{combo.volume}
</p>

</div>

))}

</div>

</section>

)
};