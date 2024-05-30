"use client";
import Booking from "@/components/Booking/Booking";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-3">
        <div className="bg-white">
          <Booking />
        </div>
        <div className="col-span-2 bg-red-200">
          Map
        </div>
      </div>
    </div>
  );
}
