import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const DestinationDetailsPage = async ({ params }) => {
  const { id } = await params;
  // console.log(id, 'id');

  const res = await fetch(`http://localhost:5000/destination/${id}`);
  const data = await res.json();

    console.log("total data", data);

  return (
    <div className="max-w-[80%] mx-auto my-10">
        <h1 className="text-4xl font-bold my-4">Details page</h1>
    
        {/* Image */}
        <div className="relative w-full h-52">
          <Image
            src={data.imageUrl}
            alt={data.destinationName}
            fill
            className="object-cover"
          />
          <div className="absolute top-3 left-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
            {data.category}
          </div>
        </div>

        {/* Content */}
        <div className="p-5 space-y-3">
          <h2 className="text-xl font-bold text-gray-800">
            {data.destinationName}
          </h2>

          <p className="text-sm text-gray-500">{data.country}</p>

          <p className="text-sm text-gray-600">{data.description}</p>

          <div className="flex justify-between text-sm text-gray-700 mt-3">
            <span>⏱ {data.duration}</span>
            <span>📅 {data.departureDate}</span>
          </div>

          <div className="flex justify-between items-center mt-4">
            <p className="text-lg font-bold text-green-600">${data.price}</p>

           <Link href={'/'}>
            <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              Go Back
            </button></Link>
          </div>
        </div>
   
    </div>
  );
};

export default DestinationDetailsPage;
