import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style';

import c from 'classnames';

export default class Button extends Component {
	render(props) {
		return (
      <div class={style.container}>
			  <button class={c(style.button, {
					[style.happy]: props.type === 'happy',
					[style.joyful]: props.type === 'joyful',
				})}>
          {props.children}
        </button>
      </div>
		);
	}
}
