import { Star, Heart } from "lucide-react";

export default function BurgerCard({ burger, onClick }) {
  return (
    <figure className="burger-card" onClick={() => onClick(burger)}>
      <div className="burger-card-img">
        <img src={`/public/img/${burger.img}`} loading="lazy" alt={burger.name} />
      </div>
      <figcaption className="burger-card-text">
        <div>
          <h3 className="burger-category">{burger.category}</h3>
          <h4 className="burger-title">{burger.name}</h4>
        </div>
        <div className="burger-card-lower">
          <p className="burger-rating">
            <Star size={16} color="#FF9633" fill="#FF9633" /> {burger.rating}
          </p>
          <Heart size={20} />
        </div>
      </figcaption>
    </figure>
  );
}
