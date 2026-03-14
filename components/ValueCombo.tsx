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

<section className="py-16 bg-gradient-to-b from-emerald-50 via-white to-emerald-50">

<div className="max-w-6xl mx-auto px-4">
<h2 className="text-3xl font-bold text-center text-emerald-800 mb-3">
Value Combo Packs
</h2>

<p className="text-center text-sm text-slate-600 mb-10">
Curated pairings for complete, targeted wellness.
</p>

<div className="grid md:grid-cols-4 gap-6">

{combos.map((combo,i)=>(

<div
key={i}
className="rounded-2xl border border-emerald-100 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
>

<h3 className="font-semibold text-lg text-slate-900">
{combo.name}
</h3>

<p className="text-slate-600 mt-2 text-sm">
{combo.products}
</p>

<p className="text-emerald-700 text-xs mt-4 font-semibold tracking-widest">
{combo.volume}
</p>

</div>

))}

</div>
</div>

</section>

)
};
