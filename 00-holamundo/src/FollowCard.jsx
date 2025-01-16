import "./FollowCard.css"

export function FollowCard ({name, username, isFollowing}) {
	const profilepic = `https://unavatar.io/${username}`
	return(
		<article className='follow-card'>
			<header>
				<img className='profile-img' src={profilepic} />
				<div className="follow-card-info">
					<strong className='info-name'>{name}</strong>
					<span className='info-username'>@{username}</span>
				</div>
			</header>

			<aside>
				<button className='follow-button'>
					Seguir
				</button>
			</aside>
		</article>
	)
}