import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style';
import c from 'classnames';

import Button from '../button'

export default class Bravenet extends Component {

	render() {
		return (
			<div class={style['bravenet-subscribe']}>

				<form action="https://pub48.bravenet.com/elist/add.php" method="post">
					<h2 class={style['bravenet-jointext']}>sign up for news</h2>
					<input class={style['bravenet-input']} type="text" id="elistname" name="ename" placeholder="name"/>
					<input class={style['bravenet-input']} type="text" name="emailaddress" id="elistaddress10646043205" placeholder="email"/>
					<input type="hidden" name="usernum" value="4091571187"/>
					<input type="hidden" name="action" value="join"/>
					<Button type='joyful'>subscribe</Button>
					<div id="elist_err10646043205"></div>
				</form>

			</div>
		);
	}
}
