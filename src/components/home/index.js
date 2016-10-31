import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style';
import c from 'classnames';

import Button from '../button'

export default class Home extends Component {
	render() {
		return (
			<div class={style.home}>

				<div class={c(style.hero, {[style.prod]: process.env.NODE_ENV === 'production'})}>
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

					<h2>install</h2>

					<p><b>bleak</b> is easy to install. Just download the files you want below.</p>

					<a href='https://github.com/unwitting/bleak/archive/master.zip' target='_blank'>
						<Button type='joyful'>download .zip</Button>
					</a>
					<a href='https://github.com/unwitting/bleak/archive/tracking_opt_out.zip' target='_blank'>
						<Button type='happy'>.zip | no tracking (?▾)</Button>
					</a>

					<p><b>Full disclosure</b> - the core version of <b>bleak</b> includes a Google Analytics tag.</p>
					<p>This tracking helps me, the developer, measure its reach and usage, assess the uptake of new features and the kinds of device it's being used on.</p>
					<p><b>You can opt out of this</b>. That's totally fine - the tracking-less version is exactly the same in every other way. Thanks for reading ❤.</p>

					<h2>configure</h2>

					<Link href='/configure'>
						<Button type='happy'>Configure <b>bleak</b></Button>
					</Link>

				</div>

			</div>
		);
	}
}
