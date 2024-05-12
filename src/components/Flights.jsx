import React from 'react'
import { Link } from 'react-router-dom'

const Flights = ({ searchResponseData }) => {
    return (
        <section className='w-full'>

            <div className="relative overflow-x-auto my-5">

                <p className='pb-2 font-medium'>
                    {
                        searchResponseData?.message
                    }
                </p>
                {searchResponseData?.flightOffer ? (<table className="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead className=" w-full text-xs text-gray-700 uppercase bg-gray-200">
                        <tr className='w-full'>
                            <th scope="col" className="px-6 py-3">
                                FLIGHT
                            </th>
                            <th scope="col" className="px-6 py-3">
                                aircraft
                            </th>
                            <th scope="col" className="px-6 py-3">
                                className
                            </th>
                            <th scope="col" className="px-6 py-3">
                                fare
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Route
                            </th>
                            <th scope="col" className="px-6 py-3">
                                departure
                            </th>
                            <th scope="col" className="px-6 py-3">
                                arrival
                            </th>
                            <th scope="col" className="px-6 py-3">

                            </th>
                            <th scope="col" className="px-6 py-3">
                                duration
                            </th>
                            <th scope="col" className="px-6 py-3">
                                price
                            </th>
                        </tr>
                    </thead>

                    {/* ----------------------------------------Mapping-------------------------------------- */}
                    {
                        searchResponseData?.flightOffer?.map((flightOffer, index) => (
                            <tbody key={flightOffer.id}
                                className={index % 2 === 0 ? 'bg-gray-100 border-b border-red-400' : 'bg-gray-200 border-b border-red-400'}>
                                {
                                    flightOffer.itineraries.map((itinerary, itineraryIndex) => (
                                        itinerary.segments.map((segment, segmentIndex) => (
                                            <React.Fragment key={itinerary.id}>
                                                <tr className="w-full">
                                                    <td className="px-6 py-1">
                                                        <span className='pr-2'>{segment.carrierCode}</span>
                                                        <span>{segment.aircraft}</span>
                                                    </td>
                                                    <td className="px-6 py-1">
                                                        {segment.flightNumber}
                                                    </td>
                                                    <td className="px-6 py-1">
                                                        {flightOffer.class[0][0]}
                                                    </td>
                                                    <td className="px-6 py-1">
                                                        {flightOffer.fareBasis[0][0]}
                                                    </td>
                                                    <td className="px-6 py-1 flex items-center gap-2">
                                                        <span>{segment.departure.iataCode}</span>
                                                        -
                                                        <span>{segment.arrival.iataCode}</span>
                                                    </td>
                                                    <td className="px-6 py-1">
                                                        {segment.departure.at}
                                                    </td>

                                                    <td className="px-6 py-1">
                                                        {segment.arrival.at}
                                                    </td>

                                                    <td className="px-6 py-1">
                                                        ---
                                                    </td>
                                                    <td className="px-6 py-1">
                                                        {segmentIndex === 0 ? `${itinerary.duration}` : ''}
                                                    </td>

                                                    {/* {segmentIndex === 0 ? <td>
                                                        <span> {flightOffer.price}</span>
                                                    </td> : segmentIndex > 1 ? "kkk":"yj"
                                                    } */}

                                                    <td className='flex flex-col items-center row-span-3'>
                                                        {segmentIndex === 0 ? `${flightOffer.price}` : ''}
                                                        {
                                                            segmentIndex === itinerary.segments.length - 1 ?
                                                                <Link to="#" className='mb-1 py-2 px-4 bg-blue-900 rounded-sm text-white'>Select</Link>
                                                                :
                                                                null
                                                        }

                                                    </td>
                                                </tr>
                                            </React.Fragment>

                                        ))

                                    ))

                                }

                            </tbody>
                        ))
                    }



                </table>) : (<p className='text-center text-red-500'>No Flight to show! Please search...</p>)}

            </div>































        </section>
    )
}

export default Flights