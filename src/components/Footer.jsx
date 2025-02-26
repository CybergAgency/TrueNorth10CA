
import redesignImg from '../images/redesign.webp'

function Footer() {
	return (
		<footer class="footer_area">
			<div class="container">
				<div class="f-inner"
				><div class="f-left">
						<a href="/">
							<img src={redesignImg} alt="redesign" />
						</a>
						<p>Disclaimer: Get ready to dive into the world of exciting games designed purely for your entertainment. TrueNorth10CA offers a free online social casino platform, where all game functions and rewards are virtual and have no real monetary value. This means you can enjoy the thrill of casino games without the risk of losing real money. Please note that TrueNorth10CA  intended for persons over the age of 19. By using our platform, you confirm that you meet this age requirement.</p>
					</div>
					<div class="f-r">
						<div class="f-r-title">
							<h3>Contact Info</h3>
						</div>
						<div class="f-r-btm">
							<p><span>Location:</span></p>
							<p>50 Maple Avenue Toronto, ON M5H 2N2 Canada</p>
						</div><div class="f-r-btm"><p>
							<span>Phone:</span>
						</p>
							<a href="/">+1 (416) 972-8985</a>
						</div>
						<ul>
							<li>
								<a href="/">Terms of Service</a>
							</li>
							<li>
								<a href="/">Privacy Policy</a>
							</li>
						</ul>
					</div>
				</div>

			</div>
		</footer>
	)
}

export default Footer
