import { Link } from 'react-router-dom'
import hero_1 from '../images/hero_1.jpeg'
import hero_2 from '../images/hero_2.jpeg'

import event_1 from '../images/game1.png'
import e_2 from '../images/game2.png'
import e_3 from '../images/game3.png'
import shape from '../images/shape2.png'

function Main() {
	return (
		<>

			<section class="hero_area">
				<div class="container">
					<div class="hero_inner">
						<div class="hero_left">
							<h1>THE BEST FREE SOCIAL <span>CASINO GAME</span> Play today.</h1>
							<p>Experience the thrill of casino gaming without spending a dime! The best free social casino game is here, offering exciting slots, poker, blackjack, roulette, and more – all for free!</p>
							<div class="main_btn">
								<a href="#">
									learn more
								</a>
							</div>
						</div>
						<div class="hero_right">
							<div class="hero_right_img">
								<img src={hero_1} alt="hero_1" />
								{/* <img src={hero_2} alt="hero_2"/> */}
							</div>
							{/* <div class="hero_right_img_3">
						<img src={hero_3} alt="hero_3"/>
					</div> */}
						</div>
					</div>
				</div>
			</section>

			<section class="about_us_area">
				<div class="container">
					<div class="about_inner">
						<div class="about_us_right">
							<img src={hero_2} alt="" />
						</div>
						<div class="about_us_left">
							<h2>About the Social Casino</h2>
							<p>These platforms offer a wide range of games, including slots, poker, blackjack, roulette, and more, providing an exciting and immersive experience. Social casinos focus on entertainment, social interaction, and friendly competition, allowing players to connect with friends, participate in tournaments, and climb leaderboards.</p>
							<div class="main_btn">
								<a href="#">
									About Us
								</a>
							</div>
						</div>
					</div>
				</div>
			</section>


			<section class="events_area">
	<div class="container">
		<div class="events_title">
			<h2>Most Exciting Casino Games</h2>
			<p>Immerse yourself in the thrill of live casino gaming! Enjoy real-time streaming with professional dealers, interact with fellow players, and experience captivating gameplay anytime, anywhere.</p>
		</div>
		<div class="event_wrapper">
			<div class="event_inner">
				<div class="event_img">
					<img src={event_1} alt="Bigmax Casino Adventure" />
				</div>
				<div class="event_cnt">
					<h3>Bigmax: Diamonds &amp; Wilds Adventure Casino Game</h3>
					<p>Discover the allure of Bigmax: Diamonds &amp; Wilds. Spin the reels to unveil dazzling diamonds and wild symbols, unlocking bonus rounds, free spins, and spectacular jackpots.</p>
					<div class="h-btn">
						<a href="/bigmax"><i class="fa-regular fa-circle-play"></i>Play now</a>
					</div>
				</div>
				<div class="ball"></div>
			</div>
			<div class="event_inner">
				<div class="event_img">
					<img src={e_2} alt="Pharaoh's Legacy Casino" />
				</div>
				<div class="event_cnt">
					<h3>Pharaoh's Legacy Casino Game</h3>
					<p>Step into the mystical realm of ancient Egypt with Pharaoh's Legacy. Uncover hidden treasures, spin for monumental wins, and revel in immersive bonus rounds amid stunning visuals.</p>
					<div class="h-btn">
						<a href="/king"><i class="fa-regular fa-circle-play"></i>Play now</a>
					</div>
				</div>
				<div class="ball"></div>
			</div>
			<div class="event_inner">
				<div class="event_img">
					<img src={e_3} alt="Oceanic Wins Casino Game" />
				</div>
				<div class="event_cnt">
					<h3>Oceanic Wins Casino Game</h3>
					<p>Dive into an underwater adventure with Oceanic Wins! Enjoy a unique blend of classic slots, poker, and blackjack, and challenge friends for extraordinary rewards.</p>
					<div class="h-btn">
						<a href="/fish"><i class="fa-regular fa-circle-play"></i>Play now</a>
					</div>
				</div>
				<div class="ball"></div>
			</div>
		</div>
	</div>
</section>

			<section class="why_play_area">
	<div class="container">
		<div class="why_cnt_wrapper">
			<div class="why_cnt_left">
				<h2>Discover Why Our Social Casino Stands Out</h2>
				<p>Casinos serve as premier destinations for a variety of gambling games, often paired with luxurious hotels and resorts.</p>
				<p><span>Debitis ad dolor sint consequatur hic, facere est doloribus tempora in laborum similique saepe blanditiis odio nulla repellat dicta reprehenderit. Obcaecati, sed perferendis? Quam cum debitis odit recusandae dolor earum.</span></p>
			</div>
			<div class="why_cnt_right">
				<div class="why_cnt_right_inner">
					<i class="fa-solid fa-shield-halved"></i>
					<h3>Secure Casino Games</h3>
					<p>Enjoy a safe and reliable gaming experience with a broad selection of trusted casino games.</p>
				</div>
				<div class="why_cnt_right_inner">
					<i class="fa-solid fa-dice-six"></i>
					<h3>Exceptional Gaming Experience</h3>
					<p>Immerse yourself in a gaming environment crafted for unparalleled excitement and fun.</p>
				</div>
				<div class="why_cnt_right_inner">
					<i class="fa-solid fa-trophy"></i>
					<h3>Enhanced Winning Opportunities</h3>
					<p>Take advantage of improved odds and diverse games designed to boost your chances of winning.</p>
				</div>
				<div class="why_cnt_right_inner">
					<i class="fa-solid fa-coins"></i>
					<h3>Play, Win, and Prosper</h3>
					<p>Seize the opportunity to invest in entertainment that rewards you with profitable returns.</p>
				</div>
			</div>
		</div>
	</div>
	<div class="shape-3">
		<img src={shape} alt="shape" />
	</div>
</section>


		</>
	)
}

export default Main
