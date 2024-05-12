import React, { useState } from 'react';
import OneWay from './OneWay';
import MultiCity from './MultiCity';
import { RoundWay } from './RoundWay';

const FlightSearchForm = () => {
  const [selectedOption, setSelectedOption] = useState('oneWay');

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <section className='w-full relative'>

      <div className="border-b">
        <div className='w-full mt-5 px-2 md:px-0 md:w-[95%] xl:w-[85%] 2xl:w-[85%] md:flex flex-col m-auto'>

          <h2 className='text-[25px] font-bold text-gray-900'>Master Price</h2>

        </div>
      </div>

      <div className="mt-10">
        <div className="flex items-center justify-center m-auto border rounded-sm border-blue-900 w-fit">
          <button
            className={`option-button py-2 px-5 ${selectedOption === 'roundWay' ? 'active bg-blue-900 text-white' : ''}`}
            onClick={() => handleOptionChange('roundWay')}
          >
            Round Way
          </button>
          <button
            className={`option-button py-2 px-5 ${selectedOption === 'oneWay' ? 'active bg-blue-900 text-white' : ''}`}
            onClick={() => handleOptionChange('oneWay')}
          >
            One Way
          </button>
          <button
            className={`option-button py-2 px-5 ${selectedOption === 'multiCity' ? 'active bg-blue-900 text-white' : ''}`}
            onClick={() => handleOptionChange('multiCity')}
          >
            Multi City
          </button>
        </div>

        <div>
          {selectedOption === 'oneWay' && <OneWay />}
          {selectedOption === 'roundWay' && <RoundWay />}
          {selectedOption === 'multiCity' && <MultiCity />}
        </div>
      </div>
    </section>
  );
};

export default FlightSearchForm;
