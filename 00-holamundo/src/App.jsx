import { Fragment } from "react"
import {FollowCard} from './FollowCard.jsx'

export function App() {
	return (
		<Fragment>
			<section className="follow-section">
				<FollowCard username='midudev' name='Miguel Duran' />
				<FollowCard username='janderson' name='John Anderson' />
				<FollowCard username='pachom' name='Francisco Jose Muribu' />
			</section>
		</Fragment>
		)
}