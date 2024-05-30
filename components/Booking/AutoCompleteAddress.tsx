import React, { useEffect, useState } from 'react'

function AutoCompleteAddress() {

  const [source, setSource] = useState<any>()
  const [sourceChange,setSourceChange]=useState<any>(false)
  const [destinationChange,setDestinationChange]=useState<any>(false)

  const [addressList, setAddressList] = useState<any>([{}])
  const [destination,setDestination]=useState<any>()

  useEffect(() => {
    const delay = setTimeout(() => {
      getAddressList()
    }, 1000);
    return () => clearTimeout(delay);
    // getAddressList()
  }, [source,destination]);


  const getAddressList = async () => {
    setAddressList([])
    const query=sourceChange?source:destination;
    const res = await fetch('/api/search-address?q=' + query, {
      headers: {
        "Content-Type": "application/json"
      }
    });
    const result = await res.json();
    setAddressList(result)
  }

  return (
    <div className='relative'>
      <div className='mt-3'>
        <label className='text-gray-400'>Pickup</label>
        <input
          type='text'
          value={source}
          className='rounded-md p-1 border-[1px] bg-white w-full outline-none focus:border-yellow-500' onChange={(e) =>{ setSource(e.target.value);setSourceChange(true)}}
        />

        {addressList?.suggestions&&sourceChange?
          <div className='shadow-md p-1 rounded-md
            absolute w-full bg-white z-20'>
            {addressList?.suggestions.map((item: any, index: number) => (
              <h2 key={index} className='p-3 hover:bg-gray-100
                cursor-pointer'
                onClick={()=>{setSource(item.name);setAddressList([]);setSourceChange(false)}}
              >{item.name}<br/>
              {item.full_address}</h2>
            ))}
          </div> : null}

      </div>
      <div className='mt-3 mb-5'>
        <label className='text-gray-400'>Destination</label>
        <input
          type='text'
          value={destination}
          className='rounded-md p-1 border-[1px] bg-white w-full outline-none focus:border-yellow-500' onChange={(e) =>{ setDestination(e.target.value);setDestinationChange(true)}}
        />
        {addressList?.suggestions&&destinationChange?
          <div className='shadow-md p-1 rounded-md
            absolute w-full bg-white z-20'>
            {addressList?.suggestions.map((item: any, index: number) => (
              <h2 key={index} className='p-3 hover:bg-gray-100
                cursor-pointer'
                onClick={()=>{setDestination(item.name);setAddressList([]);setDestinationChange(false)}}
              >{item.name}<br/>
              {item.full_address}</h2>
            ))}
          </div> : null}

      </div>
    </div>
  )
}

export default AutoCompleteAddress