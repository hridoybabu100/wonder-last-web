"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function DestinationCard({ data }) {
  return (
    <div className="">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.03 }}
        className="bg-white rounded-2xl shadow-xl overflow-hidden border"
      >
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

           <Link href={`/destination/${data._id}`}>
            <button className="px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition">
              Book Now
            </button></Link>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
