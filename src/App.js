import React, { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
  const [selectedService, setSelectedService] = useState(null);

  const services = [
    {
      name: "Royal Pedicure",
      description: "A relaxing foot ritual with warm soak and gentle care.",
      benefits: ["Stress Relief", "Soft & Relaxed Feet", "Pure Pampering"],
      kisses: 5,
    },
    {
      name: "Deluxe Manicure",
      description: "Hand massage and nail care with premium attention.",
      benefits: ["Elegant Hands", "Deep Relaxation", "Romantic Bonding"],
      kisses: 4,
    },
    {
      name: "Head Massage",
      description: "Slow and calming therapy for total peace.",
      benefits: ["Tension Release", "Better Mood", "Queen Treatment"],
      kisses: 6,
    },
    {
      name: "Glow Facial",
      description: "Face care session with extra love.",
      benefits: ["Radiant Glow", "Fresh Feeling", "Extra Cuddles"],
      kisses: 7,
    },
  ];

  const homeImage = process.env.PUBLIC_URL + "/caricature1.png";

  const onMyWayGif = process.env.PUBLIC_URL + "/onmyway.gif";

  const serviceGifs = [
    process.env.PUBLIC_URL + "/pedicure.gif",
    process.env.PUBLIC_URL + "/nails.gif",
    process.env.PUBLIC_URL + "/head-massage.gif",
    process.env.PUBLIC_URL + "/facial.gif",
  ];

  return (
    <div className="app-container">
      {page === "home" && (
        <div className="home-section d-flex flex-column justify-content-center align-items-center text-center">
          <img
            src={homeImage}
            alt="Cute spa"
            className="home-gif mb-3"
            style={{ width: "200px", height: "300px", borderRadius: "20px" }}
          />
          <h1 className="main-title">Welcome to Jackpot's SPA 💖</h1>
          <p className="subtitle">Relax. Refresh. Romance.</p>
          <button
            className="btn enter-btn mt-4"
            onClick={() => setPage("menu")}
          >
            Enter the Spa ✨
          </button>
        </div>
      )}

      {page === "menu" && (
        <div className="container py-4">
          <h2 className="text-center menu-title mb-4">
            Choose Your Package 💅
          </h2>

          {services.map((service, index) => (
            <div className="card spa-card mb-4" key={index}>
              <div className="card-body">
                <img
                  src={serviceGifs[index]}
                  alt={service.name}
                  className="service-gif mb-3"
                />
                <h4 className="card-title newsletter-text">{service.name}</h4>
                <p className="card-text newsletter-text">
                  {service.description}
                </p>

                <ul>
                  {service.benefits.map((b, i) => (
                    <li key={i} className="newsletter-text">
                      {b}
                    </li>
                  ))}
                </ul>

                <p className="price-tag newsletter-text">
                  <span className="price-label">Price:</span>
                  <span className="kisses-text">
                    {service.kisses} Kisses😘🤌🏽
                  </span>
                </p>

                <button
                  className="btn select-btn w-100"
                  onClick={() => {
                    setSelectedService(service);
                    setPage("confirmation");
                  }}
                >
                  ✨ Select Treatment ✨
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {page === "confirmation" && (
        <div className="confirmation-section text-center d-flex flex-column justify-content-center align-items-center">
          <div className="confirmation-card">
            <img
              src={onMyWayGif}
              alt="On my way"
              className="home-gif mb-3"
              style={{ width: "200px", height: "200px", borderRadius: "20px" }}
            />
            <div className="elegant-hearts">💕 💗 💖</div>
            <h2 className="newsletter-text confirmation-title">
              Booking Confirmed
            </h2>
            <p className="newsletter-text confirmation-subtitle">
              Your Love Awaits
            </p>

            <div className="selected-package">
              <h4 className="newsletter-text">{selectedService.name}</h4>
              <p className="package-price">{selectedService.kisses} Kisses</p>
            </div>

            <p className="romantic-message">
              My Queen deserves the best 😘
              <br />
              <span className="message-sub">Your appointment begins now</span>
            </p>

            <div className="elegant-sparkles">✨ ⭐ ✨</div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
