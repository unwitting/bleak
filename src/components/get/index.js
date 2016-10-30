import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style';

import Button from '../button'

export default class Get extends Component {
	render() {
		return (
			<div class={style.get}>

				<div class={style.hero}>
					<h1>bleak</h1>
					<h2>downloads</h2>
				</div>

				<div class={style.content}>

					<p><b>bleak</b> is easy to install. Just download the files you want below.</p>

					<a href='https://github.com/unwitting/bleak/archive/master.zip' target='_blank'>
						<Button type='happy'>.zip</Button>
					</a>
					<a href='https://github.com/unwitting/bleak/archive/tracking_opt_out.zip' target='_blank'>
						<Button type='joyful'>.zip | no tracking (?▾)</Button>
					</a>

					<p><b>Full disclosure</b> - the core version of <b>bleak</b> includes a Google Analytics tag.</p>
					<p>This tracking helps me, the developer, measure its reach and usage, assess the uptake of new features and the kinds of device it's being used on.</p>
					<p><b>You can opt out of this</b>. That's totally fine - the tracking-less version is exactly the same in every other way. Thanks for reading ❤.</p>

					<Link href='/configure'>
						<Button type='happy'>Configure <b>bleak</b></Button>
					</Link>

				</div>

			</div>
		);
	}
}
