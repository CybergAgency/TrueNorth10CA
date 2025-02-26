import logoMobileImg  from "../images/logo_mobile.png";
import { Link } from "react-router-dom";

const MobileMenu = ({menuOpen,setMenuOPen}) => {
  return (
    <>
      <div className="sidebar-menu"style={{left: menuOpen ? '0px' : '-250px' }}>
		<div class="menu-header">
			<div class="mobil-brand">
				<img class="img-fluid" src="images/event_4_logo.png" alt=""/>
			</div>
			<div class="close-btn" onClick={()=>setMenuOPen(false)}>
			<span class="close-icon"></span>
			</div>
		</div>
		<div class="menu-wrap">
			<div class="menu-item"><a href="#">Home</a></div>
			<div class="menu-item"><a href="#">games</a></div>
			<div class="menu-item"><a href="#">Contact us</a></div>
		</div>
      </div>
    </>
  );
};

export default MobileMenu;
