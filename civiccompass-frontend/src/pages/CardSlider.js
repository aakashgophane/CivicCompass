import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CardSlider = () => {
  // Sample card data
  const cards = [
    { id: 1, title: "Government Info", emoji: "🏛️", content: "Access comprehensive government information." },
    { id: 2, title: "Profile", emoji: "👤", content: "Manage your personal details and eligibility." },
    { id: 3, title: "Accountability Tracker", emoji: "📌", content: "Track responsibilities and Accountibility." },
    { id: 4, title: "Scheme Recommender", emoji: "📜", content: "Discover schemes tailored to you." },
    { id: 5, title: "Chatbot", emoji: "🤖", content: "Interact with our AI-powered chatbot." },
  ];

  // Slider settings
  const settings = {
    dots: true, // Show dots for navigation
    infinite: true, // Infinite looping
    speed: 500, // Transition speed
    slidesToShow: 3, // Number of cards to show at once
    slidesToScroll: 1, // Number of cards to scroll
    centerMode: true, // Center the current card
    centerPadding: "0", // No padding around the center card
    focusOnSelect: true, // Focus on the selected card
    responsive: [
      {
        breakpoint: 768, // Adjust for smaller screens
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
            <h3>{card.title}</h3>
            <p>{card.content}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default CardSlider;