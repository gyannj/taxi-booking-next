"use client";
import React from 'react'
import AutoCompleteAddress from './AutoCompleteAddress'
function Booking() {
  const screenHeight= window.innerHeight*0.8;
  return (
    <div className="p-5">
      <h2 className="text-[20px] font-semibold">Booking</h2>
      <div
        className="border-[1px] p-1 rounded-md"
        style={{ height: screenHeight}}
      >
        <AutoCompleteAddress />
      </div>
    </div>
  );
}

export default Booking