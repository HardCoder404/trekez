import React from 'react'

const PopularDestinations = () => {
  return (
    <section className="popular" id="destination">
        <div className="container">

          <p className="section-subtitle">Uncover place</p>

          <h2 className="h2 section-title">Popular destination</h2>

          <p className="section-text">
            Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium.
            Sit ornare
            mollitia tenetur, aptent.
          </p>

          <ul className="popular-list">

            <li>
              <div className="popular-card">

                <figure className="card-img">
                  <img src="https://www.walksinsiderome.com/wp-content/uploads/2020/11/Venice-Grand-Canal-from-Above-henrique-ferreira.jpg" alt="San miguel, italy" loading="lazy"/>
                </figure>

                <div className="card-content">

                  <div className="card-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>

                  <p className="card-subtitle">
                    <a href="#">Italy</a>
                  </p>

                  <h3 className="h3 card-title">
                    <a href="#">San miguel</a>
                  </h3>

                  <p className="card-text">
                    Fusce hic augue velit wisi ips quibusdam pariatur, iusto.
                  </p>

                </div>

              </div>
            </li>

            <li>
              <div className="popular-card">

                <figure className="card-img">
                  <img src="https://miro.medium.com/v2/resize:fit:1400/1*r945sfV5-BHsjuHOayqr_Q.jpeg" alt="Burj khalifa, dubai" loading="lazy"/>
                </figure>

                <div className="card-content">

                  <div className="card-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>

                  <p className="card-subtitle">
                    <a href="#">Dubai</a>
                  </p>

                  <h3 className="h3 card-title">
                    <a href="#">Burj khalifa</a>
                  </h3>

                  <p className="card-text">
                    Fusce hic augue velit wisi ips quibusdam pariatur, iusto.
                  </p>

                </div>

              </div>
            </li>

            <li>
              <div className="popular-card">

                <figure className="card-img">
                  <img src="https://media.architecturaldigest.com/photos/5903ad5c1732ef7d3c2b9e38/1:1/w_1998,h_1998,c_limit/5%20Seaside%20Towns%20in%20Italy.jpg" alt="Kyoto temple, japan" loading="lazy"/>
                </figure>

                <div className="card-content">

                  <div className="card-rating">
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                    <ion-icon name="star"></ion-icon>
                  </div>

                  <p className="card-subtitle">
                    <a href="#">Japan</a>
                  </p>

                  <h3 className="h3 card-title">
                    <a href="#">Kyoto temple</a>
                  </h3>

                  <p className="card-text">
                    Fusce hic augue velit wisi ips quibusdam pariatur, iusto.
                  </p>

                </div>

              </div>
            </li>

          </ul>

          <button className="btn btn-primary">More destintion</button>

        </div>
      </section>
  )
}

export default PopularDestinations