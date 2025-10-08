import { Search, SlidersHorizontal } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import BottomNav from "../components/nav-bar";
import BurgerCard from "../components/BurgerCard";

export default function HomePage() {
  const [burgers, setBurgers] = useState([]);
  const [user, setUser] = useState("");
  const [userImg, setUserImg] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    const fetchBurgers = async () => {
      try {
        const res = await fetch("/data/burgers.json");
        const data = await res.json();
        setBurgers(data);
      } catch (error) {
        console.error("Failed to fetch burgers:", error);
      }
    };

    fetchBurgers();
  }, []);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res2 = await fetch(`/data/mockProfile.json`);
        const data2 = await res2.json();
        setUserImg(data2[0].profileImg);
        setUser(data2);
      } catch (error) {
        console.error("Failed find user, error");
      }
    };
    fetchUser();
  }, []);

  const handleBurgerClick = (burger) => {
    navigate(`/details/${burger.id}`);
  };
  const handleUserClick = (user) => {
    navigate(`/profile`);
  };

  return (
    <div className="page-wrapper">
      <header className="header-wrapper">
        <div className="header-text">
          <h1>Foodgo</h1>
          <p>Order your favourite food</p>
        </div>

        <div onClick={handleUserClick} user={user} className="profile-div">
          <img
            src={`public/img/user/${userImg}`}
            id="profileImg"
            className="profile-img"
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
            <BurgerCard
              key={burger.id}
              burger={burger}
              onClick={handleBurgerClick}
            />
          ))}
        </ul>
      </main>
      <BottomNav />
    </div>
  );
}
