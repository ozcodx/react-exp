import "./App.css"

export function App() {
	return (
		<article className='follow-card'>
			<header>
				<img className='profile-img' src= "https://shorturl.at/JKk4E" />
				<div>
					<strong>Name</strong>
					<span>@username</span>
				</div>
			</header>

			<aside>
				Seguir
			</aside>
		</article>
		)
}