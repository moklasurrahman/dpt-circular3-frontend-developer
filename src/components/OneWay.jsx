import React, { useState } from 'react'
import Flights from './Flights';
import flightresponseData from "../data/flightresponse.json"

const OneWay = () => {

  const [searchResponseData, setSearchResponseData] = useState(null)

  const [fromAirportInputvalue, setFromAirportInputvalue] = useState('LHR');
  const [toAirportInputvalue, setToAirportInputvalue] = useState('CDG');
  const [startdate, setStartDate] = useState('');
  const [selectedDateDown, setSelectedDateDown] = useState('');
  const [selectedDateAdd, setSelectedDateAdd] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedTravelerType, setSelectedTravelerType] = useState('');
  const [selectedNumberOfPassenger, setSelectedNumberOfPassenger] = useState('');
  const [isChecked, setIsChecked] = useState(false);
  const [selectedOption, setSelectedOption] = useState('dummy');

  // Function to handle changes in the "From" airport input value
  const handleFromAirportInputvalueChange = (event) => {
    setFromAirportInputvalue(event.target.value);
  };
  // Function to handle changes in the "To" airport input value
  const handleToAirportInputvalueChange = (event) => {
    setToAirportInputvalue(event.target.value);
  };

  // Function to handle changes in the start date
  const handleStartDateChange = (event) => {
    setStartDate(event.target.value);
  };

  const handleDateDownChange = (event) => {
    setSelectedDateDown(event.target.value);
  };
  const handleDateAddChange = (event) => {
    setSelectedDateAdd(event.target.value);
  };
  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };
  // Function to handle changes in the selected traveler type
  const handleTravelerTypeChange = (event) => {
    setSelectedTravelerType(event.target.value);
  };
  // Function to handle changes in the selected number of passengers
  const handleNumberOfPassengerChange = (event) => {
    setSelectedNumberOfPassenger(event.target.value);
  };
  // Function to handle changes in the checkbox status
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  // Function to handle changes in the selected option
  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };




  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchResponseData(flightresponseData)
  };

  return (
    <section className='w-full mt-10 px-2 md:px-0 md:w-[95%] xl:w-[85%] 2xl:w-[85%] md:flex flex-col m-auto justify-center items-center'>

      <form onSubmit={handleSubmit} className='border-t border-b border-blue-400 w-full'>
        <div className=" mt-5 flex flex-col md:flex-row items-center gap-3 w-full">

          <div className="flex flex-col md:flex-row items-center gap-3 w-full">
            <input type="text"
              value={fromAirportInputvalue}
              onClick={handleFromAirportInputvalueChange}
              placeholder='Form'
              className='w-full p-2 border-2 border-gray-400 rounded-sm outline-none' />

            <input type="text"
              value={toAirportInputvalue}
              onClick={handleToAirportInputvalueChange}
              placeholder='To'
              className='w-full p-2 border-2 border-gray-400 rounded-sm outline-none' />

            <input type="date"
              value={startdate}
              onChange={handleStartDateChange}
              className='w-full p-2 border-2 border-gray-400 rounded-sm outline-none' />

          </div>

          <div className="w-full flex flex-col md:flex-row gap-3 items-center">
            <select id="dateDown" name="dateDown" form="dateDown" value={selectedDateDown} onChange={handleDateDownChange} className='w-full p-2 border-2 border-gray-400 rounded-sm outline-none'>
              <option value="">Date-</option>
              <option value="1">1</option>
              <option value="saab">2</option>
              <option value="opel">3</option>
              <option value="audi">4</option>
            </select>

            <select id="dateAdd" name="dateAdd" form="dateAdd" value={selectedDateAdd} onChange={handleDateAddChange} className='w-full p-2 border-2 border-gray-400 rounded-sm outline-none'>
              <option value="">Date+</option>
              <option value="1">1</option>
              <option value="saab">2</option>
              <option value="opel">3</option>
              <option value="audi">4</option>
            </select>
          </div>

          <div className="w-full md:w-[50%]">
            <select id="timeSelect" name="timeSelect" value={selectedTime} onChange={handleTimeChange} className='w-full p-2 border-2 border-gray-400 rounded-sm outline-none'>
              <option value="">Any Time</option>
              <option value="1">8.</option>
              <option value="saab">7.</option>
              <option value="opel">9.</option>
              <option value="audi">9.</option>
            </select>
          </div>

          <div className="w-full flex items-center gap-3">
            <div className="text-[25px] font-bold text-black cursor-pointer">+</div>
            <div className="w-full">
              <select id="travelerType" name="travelerType" value={selectedTravelerType} onChange={handleTravelerTypeChange} className='w-full p-2 border-2 border-gray-400 rounded-sm outline-none'>
                <option value="adult">Adult</option>
                <option value="children">Children</option>
                <option value="kids">Kids</option>
                <option value="Infant">Infant</option>
              </select>
            </div>

            <div className="w-full">
              <select id="numberOfPassenger" name="numberOfPassenger" value={selectedNumberOfPassenger} onChange={handleNumberOfPassengerChange} className='w-full p-2 border-2 border-gray-400 rounded-sm outline-none'>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
              </select>
            </div>
            <div className="text-[25px] font-bold text-black cursor-pointer">+</div>
          </div>
        </div>

        <div className="py-3 sm:flex items-center justify-between border-t border-blue-400 mt-3">

          <div className='flex gap-2 items-center cursor-pointer'>
            <input
              type="checkbox"
              id="checkButton"
              checked={isChecked}
              onChange={handleCheckboxChange}
            />
            <label htmlFor="checkButton">Extra option</label>
          </div>

          <div className="">
            <div className='flex gap-3 items-center'>
              <p>Environment</p>
              <label className='flex items-center gap-2'>
                <input
                  type="radio"
                  value="dummy"
                  checked={selectedOption === 'dummy'}
                  onChange={handleOptionChange}
                />
                Dummy
              </label>
              <br />
              <label className='flex items-center gap-2'>
                <input
                  type="radio"
                  value="pdt"
                  checked={selectedOption === 'pdt'}
                  onChange={handleOptionChange}
                />
                PDT
              </label>
            </div>
          </div>

          <div className="pt-2 sm:pt-0">
            <button type='submit' className='py-2 px-5 rounded-sm bg-blue-900 text-white hover:bg-blue-800'>Search</button>
          </div>

        </div>
      </form>


      <Flights searchResponseData={searchResponseData} />

    </section>
  )
}

export default OneWay