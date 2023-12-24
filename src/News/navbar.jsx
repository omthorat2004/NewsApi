import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import style from "../navbar.module.css";
const Navbar = ({ setData }) => {
  const [search, setsearch] = useState("");
  let navigate=useNavigate();
  function getValue(e){
    console.log(e.target.value);
    setsearch(e.target.value);
  }

  async function apiCall() {
    const response = await fetch(
      "https://newsapi.org/v2/everything?q=" + search + "&apiKey=3ec191c2ce5f420c955281392e732a13"
    );
    const data = await response.json();

    
    setData(data.articles);
    navigate('/')
  }

  return (
    <div className={style.navbar}>
      <h1>News</h1>
      <NavLink to='/sport' className={style.navlink} >Sport</NavLink>
      <NavLink to='/India' className={style.navlink}>India</NavLink>
      <NavLink to='/StockMarket'className={style.navlink} >Stock-Market</NavLink>
      <NavLink to='/Cricket' className={style.navlink} >Cricket</NavLink>
      <NavLink to='/Politics' className={style.navlink} >Politics</NavLink>
      <input
        type="text"
        className="search"
        name="search"
        placeholder="Search.."
        onChange={getValue}
      />
      <input type="submit"  onClick={apiCall} />
    </div>
  );
};

export default Navbar;
