import { NavLink, useParams } from "react-router";
import { useEffect, useState } from "react";
import { Star, ArrowLeft, Search, Plus, Minus } from "lucide-react";

export default function Details() {
  const { id } = useParams();
  const [burger, setBurger] = useState(null);
  const [portionNumber, setPortionNumber] = useState("1")

  useEffect(() => {
    fetch("/data/burgers.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((b) => b.id === parseInt(id));
        setBurger(found);
      });
  }, [id]);

  if (!burger) return <p>Loading burger details...</p>;

  function counterPlus(){
    setPortionNumber( portionNumber +1)
  }
  function counterMinus(){
    setPortionNumber( portionNumber -1)
  }
  
  return (
    <div className="page-wrapper">
      <div className="details-top">
        <NavLink to={"/"}>
          <ArrowLeft />
        </NavLink>
        <Search />
      </div>
      <figure className="details-card">
        <div className="details-card-img">
          <img
            src={`../public/img/${burger.img}`}
            alt={burger.name}
            className="details-img"
          />
        </div>
        <figcaption>
          <h2>
            {burger.category} - {burger.name}
          </h2>
          <p className="details-rating">
            <Star size={18} color="#FF9633" fill="#FF9633" /> {burger.rating} -{" "}
            {burger.preparationTime} mins
          </p>
          <p className="details-description">{burger.description}</p>
          <div className="details-adjust">
            <div>
              <h4>Spicy</h4>
              <input className="spicyLvl" type="range" min={1} max={100} />
              <div className="mild-hot-con">
                <p>Mild</p>
                <p>Hot</p>
              </div>
            </div>
            <div className="details-portion">
              <h4>Portion</h4>
              <ul className="portion-container">

                <button onClick={counterMinus} id="minus"  className="portion-btn">
                  <Minus size={18} />
                </button>

                <p id="counter" className="portion-num">{portionNumber}</p>

                <button onClick={counterPlus} id="plus" className="portion-btn">
                  <Plus size={18} />
                </button>
              </ul>
            </div>
          </div>
        </figcaption>
      </figure>
    </div>
  );
}
