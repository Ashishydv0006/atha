export default function Footer(){

return(

<footer className="bg-gradient-to-b from-emerald-950 via-emerald-900 to-emerald-950 text-white py-12 mt-20">

<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 px-4">

<div>

<h2 className="text-xl font-semibold mb-2 tracking-widest uppercase">
Atha
</h2>

<p className="text-sm text-emerald-100">
Authentic Ayurveda wellness juices made from
100% fresh botanical ingredients.
</p>

</div>

<div>

<h3 className="font-semibold mb-2">
Quick Links
</h3>

<ul className="text-sm space-y-1 text-emerald-100">
<li>Home</li>
<li>Products</li>
<li>About</li>
</ul>

</div>

<div>

<h3 className="font-semibold mb-2">
Trust
</h3>

<ul className="text-sm space-y-1 text-emerald-100">
<li>GMP Certified</li>
<li>ISO Certified</li>
<li>No Added Sugar</li>
<li>BPA Free</li>
</ul>

</div>

</div>

<p className="text-center text-sm mt-8 text-emerald-100">
(c) {new Date().getFullYear()} Atha. All rights reserved.
</p>

</footer>

)
};
