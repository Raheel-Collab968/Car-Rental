import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const CarCard = ({ car }) => {
  const currency = import.meta.env.VITE_CURRENCY
  const navigate = useNavigate()

  return (
    <div
      onClick={() => {
        navigate(`/car-details/${car._id}`)
        scrollTo(0, 0)
      }}
      className="group rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 transition-all duration-500 cursor-pointer bg-white"
    >
      {/* Image Block */}
      <div className="relative h-48 overflow-hidden">
         {car.isAvaliable && (
    <span className="absolute top-2 left-2 bg-blue-600 text-white text-xs px-3 py-1 rounded-full shadow-md z-10">
      Available Now
    </span>
  )}
        <img
          src={car.image}
          alt={`${car.brand} ${car.model}`}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
            <span className='absolute bottom-5 right-5 bg-black text-white px-3 py-2 rounded-2xl z-10'><b>{currency}{car.pricePerDay}</b> / day</span>
      </div>

      {/* Info Block */}
      <div className="p-4 space-y-4">
        <div>
          <h1 className="text-xl font-bold">{car.brand} {car.model}</h1>
          <p className="text-gray-500 text-sm">{car.category} · {car.year}</p>
        </div>

        <div className="grid grid-cols-2 gap-y-2 text-sm text-gray-600">
          <div className="flex items-center">
            <img src={assets.users_icon} alt="Seats" className="h-4 mr-2" />
            <span>{car.seating_capacity} Seats</span>
          </div>
          <div className="flex items-center">
            <img src={assets.fuel_icon} alt="Fuel" className="h-4 mr-2" />
            <span>{car.fuel_type}</span>
          </div>
          <div className="flex items-center">
            <img src={assets.car_icon} alt="Transmission" className="h-4 mr-2" />
            <span>{car.transmission}</span>
          </div>
          <div className="flex items-center">
            <img src={assets.location_icon} alt="Location" className="h-4 mr-2" />
            <span>{car.location}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CarCard
