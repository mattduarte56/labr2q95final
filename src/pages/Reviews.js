import React from 'react';
import './Reviews.css';

const reviews = [
  {
    name: "Tyler H.",
    review: "The coaches at RFR Pro completely changed my game. I’m faster, more confident with the puck, and finally getting noticed by scouts.",
  },
  {
    name: "Brayden S.",
    review: "Training with RFR Pro is like nothing else. These guys have actually played at high levels and it shows. Best decision I’ve made for my development.",
  },
  {
    name: "Liam C.",
    review: "My son looks forward to every session. His shot is stronger, his skating improved, and his love for the game has never been higher.",
  },
  {
    name: "Mason R.",
    review: "RFR Pro is the real deal. Their one-on-one attention and game-specific drills helped me make the jump to AAA this season.",
  },
  {
    name: "Avery T.",
    review: "The coaches treat every player like a pro. It’s intense, but supportive. My hockey IQ and confidence are at another level now.",
  },
];

const Reviews = () => {
  return (
    <div className="reviews">
      <h1 className="reviews-title">⭐ What Players and Parents Are Saying</h1>
      <p className="reviews-subtitle">Real feedback from athletes and families who trust RFR Pro with their hockey journey.</p>
      <div className="reviews-container">
        {reviews.map((r, i) => (
          <div key={i} className="review-card">
            <div className="stars">★★★★★</div>
            <p className="review-text">"{r.review}"</p>
            <p className="review-author">— {r.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
