import React from "react";
import i5 from './img/i5.png';
import { Link } from 'react-router-dom';


function Header(){
return(

<div class="navbar">
    <h1>Fantezie</h1>
    <img src={i5} alt=""/>
    <ul>
       <Link to="/" className="menu-link">Acasă</Link>
        <Link to="/Produse" className="menu-link">Produse </Link>
        <Link to="/Promo" className="menu-link">Promoții </Link>
        <Link to="/Contact" className="menu-link">Contact </Link>
        <Link to="/Cos" className="menu-link">Coș </Link>
    </ul>
</div>



)

}
export default  Header;