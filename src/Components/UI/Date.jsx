import React from 'react'

const Date = () => {
  return (
    <div>
       <div className="flex gap-10 mx-20 mt-10">
          <div>
            <label className="text-3xl font-sans p-2 block ml-10">
              Departure Date
            </label>
            <input
              className="border focus:border-blue-200 w-70 outline-0 px-3 py-2 rounded-2xl ml-10"
              type="date"
            />
          </div>

          <div>
            <label className="text-3xl font-sans p-2 block">Passengers</label>

            <select className="border w-70 px-3 py-2 rounded-2xl outline-0">
              <option value="">Select</option>
              <option value="1">1 Adult</option>
              <option value="2">2 Adults</option>
              <option value="3">3 Adults</option>
              <option value="4">4 Adults</option>
              <option value="5">5 Adults</option>
              <option value="6">6 Adults</option>
              <option value="7">7 Adults</option>
              <option value="8">8 Adults</option>
            </select>
          </div>
          <button className="border-2 p-2 w-80 rounded-4xl my-10 bg-blue-600 text-3xl text-white hover:bg-black ">
            Search Flights
          </button>
        </div>
    </div>
  )
}

export default Date
