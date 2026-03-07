import products from "@/data/products.json"
import { notFound } from "next/navigation"
import AddToCartButton from "@/components/AddToCartButton"

export default function ProductPage({
params
}:{
params:{slug:string}
}){

const product = products.find(
(p:any)=>p.name.toLowerCase().replace(/ /g,"-")===params.slug
)

if(!product) return notFound()

return(

<div className="max-w-5xl mx-auto py-16 px-4">

<h1 className="text-4xl font-bold text-green-800 mb-4">
{product.name}
</h1>

<p className="text-gray-600 mb-6">
{product.description}
</p>


<h3 className="text-xl font-semibold mt-6">
Key Benefits
</h3>

<ul className="list-disc ml-6 text-gray-700">
{product.benefits.map((b:string,i:number)=>(
<li key={i}>{b}</li>
))}
</ul>


<h3 className="text-xl font-semibold mt-6">
Ingredients
</h3>

<ul className="list-disc ml-6 text-gray-700">
{product.ingredients.map((i:string,index:number)=>(
<li key={index}>{i}</li>
))}
</ul>


<div className="mt-6 flex gap-2">

{product.certifications.map((c:string,i:number)=>(
<span
key={i}
className="bg-green-100 text-green-700 px-3 py-1 rounded text-sm"
>
{c}
</span>
))}

</div>

<AddToCartButton product={product}/>

</div>

)
};