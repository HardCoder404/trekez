import React from 'react'

const Gallery = () => {
  return (
    <section className="gallery" id="gallery">
        <div className="container">

          <p className="section-subtitle">Photo Gallery</p>

          <h2 className="h2 section-title">Photo's From Travellers</h2>

          <p className="section-text">
            Fusce hic augue velit wisi quibusdam pariatur, iusto primis, nec nemo, rutrum. Vestibulum cumque laudantium.
            Sit ornare
            mollitia tenetur, aptent.
          </p>

          <ul className="gallery-list">

            <li className="gallery-item">
              <figure className="gallery-image">
                <img src="https://www.mountaineers.org/blog/how-i-became-a-mountaineer/@@images/image" alt="Gallery image"/>
              </figure>
            </li>

            <li className="gallery-item">
              <figure className="gallery-image">
                <img src="https://st.depositphotos.com/5392356/58887/i/450/depositphotos_588875918-stock-photo-happy-young-women-friends-map.jpg" alt="Gallery image"/>
              </figure>
            </li>

            <li className="gallery-item">
              <figure className="gallery-image">
                <img src="https://media.istockphoto.com/id/1096035138/photo/beautiful-young-couple-relaxing-after-hiking-and-taking-a-break.jpg?s=612x612&w=0&k=20&c=iwNan7K7gbiIl2unv-9EuE5Yej-h_l1OrLNMel0husU=" alt="Gallery image"/>
              </figure>
            </li>

            <li className="gallery-item">
              <figure className="gallery-image">
                <img src="https://www.holidayrider.com/wp-content/uploads/2018/07/Tips-For-First-Time-Traveler-Europe-Travel-Tips.jpg" alt="Gallery image"/>
              </figure>
            </li>

            <li className="gallery-item">
              <figure className="gallery-image">
                <img src="https://www.concur.com/sites/default/files/297209_gettyimages-1261121596_medium_jpg.jpg" alt="Gallery image"/>
              </figure>
            </li>

          </ul>

        </div>
      </section>
  )
}

export default Gallery