import { Search, SlidersHorizontal, Star } from "lucide-react";
import { useEffect, useState } from "react";

export default function HomePage() {
  const [burgers, setBurgers] = useState([]);

  useEffect(() => {
    fetch("/data/burgers.json")
      .then((res) => res.json())
      .then((data) => setBurgers(data));
  }, []);

  return (
    <>
      <header className="header-wrapper">
        <div className="header-text">
          <h1>Foodgo</h1>
          <p>Order your favourite food</p>
        </div>
        <div className="profile-div">
          <img
            src="https://t4.ftcdn.net/jpg/05/59/91/77/360_F_559917754_dPi14NuRWEofju2XA0Jz07kSITgjYYJm.jpg"
            id="profileImg"
            className="profile-img"
            alt="Profile"
          />
        </div>
      </header>

      <main className="main-wrapper">
        <div className="search-div">
          <div className="input-div">
            <Search size={22} />
            <input className="input-search" type="text" placeholder="Search" />
          </div>
          <button className="filters">
            <SlidersHorizontal />
          </button>
        </div>

        <ul className="burgers-list">
          {burgers.map((burger) => (
            <figure className="burger-card">
                <div className="burger-card-img"><img src={`public/img/${burger.img}`} alt="" /></div>
                <figcaption className="burger-card-text">
                    <h3 className="burger-category">{burger.category}</h3>
                    <h4 className="burger-title">{burger.name}</h4>
                    <p className="burger-rating"><Star size={16} color="#FF9633"fill="#FF9633" /> {burger.rating}</p>
                </figcaption>
            </figure>
          ))}
        </ul>
      </main>
      <div className="nav-bar">
            <ul>
                <li></li>
            </ul>
        </div>
    </>
  );
}
