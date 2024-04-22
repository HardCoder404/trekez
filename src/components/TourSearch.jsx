import React from 'react'
import {Plane,School,TrainFront,CarTaxiFront,Bus} from "lucide-react"
const TourSearch = () => {
  return (
    <section className="tour-search">
        <div className="container">
          <div className='container-search'>
            <div>
            <Plane size={40} className='navbar-link-icon' strokeWidth={1.2}/>
            <p>Flight</p>
            <hr className='horizontal-line' />
            </div>
            <div>
            <School size={40}  className='navbar-link-icon' strokeWidth={1.2}/>
            <p>Hotels</p>
            </div>
            <div>
            <TrainFront size={40}  className='navbar-link-icon' strokeWidth={1.2}/>
            <p>Train</p>
            </div>
            <div>
            <CarTaxiFront size={40}  className='navbar-link-icon' strokeWidth={1.2}/>
              <p className='cab'>Cab</p>
            </div>
            <div>
            <Bus size={40}  className='navbar-link-icon' strokeWidth={1.2}/>
              <p className='bus'>Bus</p>
            </div>
          </div>

          <form action="" className="tour-search-form">

            <div className="input-wrapper">
              <label for="destination" className="input-label">From*</label>

              <input type="text" name="destination" id="destination" required placeholder="Enter Destination"
                className="input-field"/>
            </div>

            <div className="input-wrapper">
              <label for="destination" className="input-label">To*</label>

              <input type="text" name="destination" id="destination" required placeholder="Enter Destination"
                className="input-field"/>
            </div>

            <div className="input-wrapper">
              <label for="checkin" className="input-label">Departure**</label>

              <input type="date" name="checkin" id="checkin" required className="input-field"/>
            </div>

            <div className="input-wrapper">
              <label for="people" className="input-label">Travellers*</label>

              <input type="number" name="people" id="people" required placeholder="No.of People" className="input-field"/>
            </div>

            <div className="input-wrapper">
              <label for="checkout" className="input-label">Return</label>

              <input type="date" name="checkout" id="checkout" required className="input-field"/>
            </div>

          </form>
        </div>
          <button type="submit" className="search-btn-main">Search</button>
      </section>
  )
}

export default TourSearch