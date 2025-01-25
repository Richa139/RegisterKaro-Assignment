import React from "react";
import img4 from "./Asset/Coinbase-logo.png";
import img2 from "./Asset/Dropbox-Logo.png";
import img3 from "./Asset/Spotify_logo_with_text.svg.png";
import img1 from "./Asset/download (4).png";
import img5 from "./Asset/Zoom-Logo.png";

function Companies() {
  const images = [
    { src: img1, alt: "Coinbase" },
    { src: img2, alt: "Dropbox" },
    { src: img3, alt: "Spotify" },
    { src: img4, alt: "Slack" },
    { src: img5, alt: "Zoom" },
  ];

  return (
    <div className="container py-4 bg-white">
      <div className="row justify-content-center align-items-center text-center g-4">
        {images.map((image, index) => (
          <div key={index} className="col-4 col-md-2 col-lg-2">
            <img
              src={image.src}
              alt={image.alt}
              className="img-fluid"
              style={{ maxHeight: "50px", width: "auto" }}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Companies;
