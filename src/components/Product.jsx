import { useLocation } from "react-router-dom"

export default function Product() {
  const {state} = useLocation();
  return (
    <div className="flex flex-row justify-between p-6">
      <div className="w-2/5">
        <img src={state?.product?.image} alt={state?.product?.title} className="w-full h-96 object-contain" />
      </div>
      <div className="w-3/5 p-10">
        <h1 className="text-2xl font-bold">{state?.product?.title}</h1>
        <p className="text-lg">Price: Rs.{state?.product?.price}</p>
        <p className="mt-4">{state?.product?.description}</p>
      </div>
    </div>
  )
}
