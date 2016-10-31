import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style';

export default class Header extends Component {
	render() {
		return (
			<header class={style.header}>
				<nav>
					<a href="https://github.com/unwitting/bleak/">Github</a>
				</nav>
			</header>
		);
	}
}
