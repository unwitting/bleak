import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<nav>
					<Link href="/">Home</Link>
					<Link href="/get">Get <b>bleak</b></Link>
					<a href="https://github.com/unwitting/bleak/">Github</a>
				</nav>
			</header>
		);
	}
}
