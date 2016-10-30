import { h, Component } from 'preact';
import style from './style';

import Button from '../button'

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>

				<div class={style.hero}>
					<h1>bleak</h1>
					<h2>a Ghost theme</h2>
				</div>

				<div class={style.content}>

					<p><b>bleak</b> is a stunning free theme for the Ghost blog platform. It features full-section images and a slick responsive design that puts the right content right in your readers' faces.</p>
					<p>Stupidly pain-free configuration without having to mess around with the theme's files. Everything is possible right inside Ghost's admin pages.</p>
					<p>Oh, and  AMP pages are covered too.</p>

					<a href='http://unwttng.com' target='_blank'>
						<Button type='happy'>See a live demo</Button>
					</a>

				</div>

			</div>
		);
	}
}
