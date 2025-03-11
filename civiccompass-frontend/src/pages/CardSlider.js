import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./CardSlider.css"; // Add this file for styles

const CardSlider = () => {
  const cards = [
    { id: 1, title: "Government Info", emoji: "🏛️", content: "Access comprehensive government information." },
    { id: 2, title: "Profile", emoji: "👤", content: "Manage your personal details and eligibility." },
    { id: 3, title: "Accountability Tracker", emoji: "📌", content: "Track responsibilities and Accountibility." },
    { id: 4, title: "Scheme Recommender", emoji: "📜", content: "Discover schemes tailored to you." },
    { id: 5, title: "Chatbot", emoji: "🤖", content: "Interact with our AI-powered chatbot." },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    focusOnSelect: true,
    autoplay: true, // Auto scroll
    autoplaySpeed: 3000, // Adjust speed
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          centerMode: true,
          centerPadding: "0",
        },
      },
    ],
  };

  return (
    <div className="card-slider-container">
      <Slider {...settings}>
        {cards.map((card) => (
          <div key={card.id} className="card">
            <span className="emoji">{card.emoji}</span>
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;
