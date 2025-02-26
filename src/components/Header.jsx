import logoImg  from "../images/logo_mobile.png";
import { Link } from "react-router-dom";
import MobileMenu from "./MobileMenu";
import { useState } from "react";

const Header = () => {
  const [menuOpen,setMenuOPen]=useState(false)
  return (
    <>
	<header class="header-area">
		<div class="container">
			<div class="header_inner">
				<div class="logo">
			<a href="/">TrueNorth10CA </a>
				</div>
				<div class="nav_items">
					<ul>
						<li><a href="#">home</a></li>
						<li><a href="#">games</a></li>
						<li><a href="#">Contact Us</a></li>
					</ul>
				</div>
				<div class="menu-btn" onClick={()=>setMenuOPen(true)}>
				 <span></span>
				 <span></span>
				 <span></span>
			   </div>
			</div>
		</div>
	</header>
  <MobileMenu menuOpen={menuOpen} setMenuOPen={setMenuOPen}/>
    </>
  );
};

export default Header;
