import { h, Component } from 'preact';
import { Link } from 'preact-router';
import style from './style';
import c from 'classnames';

import Button from '../button'

export default class Home extends Component {

	handleDemoClick() {
		if (!window.ga) {return}
		window.ga('send', 'event', 'interaction', 'click', `livedemo`)
	}

	handleDownloadClick(optOut) {
		if (!window.ga) {return}
		window.ga('send', 'event', 'interaction', 'click', `download-tracking${optOut ? 'optout' : 'optin'}`)
	}

	handleSubmitIssueClick() {
		if (!window.ga) {return}
		window.ga('send', 'event', 'interaction', 'click', `submitissue`)
	}

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

					<a href='http://unwttng.com' target='_blank' onClick={this.handleDemoClick.bind(this)}>
						<Button type='happy'>See a live demo</Button>
					</a>

					<h2>install</h2>

					<p><b>bleak</b> is easy to install. Just download the files you want below.</p>

					<a href='https://github.com/unwitting/bleak/archive/master.zip' target='_blank' onClick={this.handleDownloadClick.bind(this, false)}>
						<Button type='joyful'>download .zip</Button>
					</a>
					<a href='https://github.com/unwitting/bleak/archive/tracking_opt_out.zip' target='_blank' onClick={this.handleDownloadClick.bind(this, true)}>
						<Button type='happy'>.zip | no tracking (?▾)</Button>
					</a>

					<p><b>Full disclosure</b> - the core version of <b>bleak</b> includes a Google Analytics tag.</p>
					<p>This tracking helps me, the developer, measure its reach and usage, assess the uptake of new features and the kinds of device it's being used on.</p>
					<p><b>You can opt out of this</b>. That's totally fine - the tracking-less version is exactly the same in every other way. Thanks for reading ❤.</p>

				</div>

				<a href={`${process.env.NODE_ENV === 'production' ? '//unwitting.github.io' : ''}/assets/img/screenshot_index_page.png`} target='_blank'>
					<img src={`${process.env.NODE_ENV === 'production' ? '//unwitting.github.io' : ''}/assets/img/screenshot_index_page.png`}/>
				</a>

				<div class={style.content}>

					<h2>configure</h2>

					<p>Configuration of <b>bleak</b> can all be done inside the Ghost admin screens at <code>/ghost</code>.</p>

					<h3>logo</h3>

					<p>Your blog logo should be <b>high-res</b> enough to display nicely at the full width of a phone screen (at least 700px as a rough guide), and should be <b>square</b>. This requirement is unfortunately the only way to ensure that your pages will display beautifully on their AMP versions (at <code>.../amp</code>).</p>
					<p>You can set your blog logo at <code>yourblog.com/ghost/settings/general/</code>. You should add a blog cover photo too, whilst you're there.</p>

					<h3>social links</h3>

					<p><b>bleak</b> has a ton of support for social links with your networks. All configuration lines below can just be dropped into the header code injection at <code>yourblog.com/ghost/settings/code-injection/</code>.</p>

					<p>For any network listed below, just configure <code>window.__themeCfg.&lt;socialnetwork&gt;Username</code> in your blog header code injection. For example, to add a navigation item to your Twitter profile, you would add:</p>

					<p><code>&lt;script&gt; window.__themeCfg.twitterUsername = 'unwttng'; &lt;/script&gt;</code></p>

					<p>As if by magic, you now have a social links bar in your sidebar with a Twitter-icon link.</p>

					<p>Which networks are available?</p>

					<ul class={style.ul}>
						<li class={style.li}><b>500px</b> <code>window.__themeCfg.fivehundredpxUsername = '...';</code></li>
						<li class={style.li}><b>bitbucket</b> <code>window.__themeCfg.bitbucketUsername = '...';</code></li>
						<li class={style.li}><b>deviantart</b> <code>window.__themeCfg.deviantartUsername = '...';</code></li>
						<li class={style.li}><b>etsy</b> <code>window.__themeCfg.etsyUsername = '...';</code></li>
						<li class={style.li}><b>facebook</b> <code>window.__themeCfg.facebookUsername = '...';</code></li>
						<li class={style.li}><b>flickr</b> <code>window.__themeCfg.flickrUsername = '...';</code></li>
						<li class={style.li}><b>github</b> <code>window.__themeCfg.githubUsername = '...';</code></li>
						<li class={style.li}><b>instagram</b> <code>window.__themeCfg.instagramUsername = '...';</code></li>
						<li class={style.li}><b>linkedin</b> <code>window.__themeCfg.linkedinUsername = '...';</code></li>
						<li class={style.li}><b>pinterest</b> <code>window.__themeCfg.pinterestUsername = '...';</code></li>
						<li class={style.li}><b>soundcloud</b> <code>window.__themeCfg.soundcloudUsername = '...';</code></li>
						<li class={style.li}><b>twitch</b> <code>window.__themeCfg.twitchUsername = '...';</code></li>
						<li class={style.li}><b>twitter</b> <code>window.__themeCfg.twitterUsername = '...';</code></li>
						<li class={style.li}><b>vimeo</b> <code>window.__themeCfg.vimeoUsername = '...';</code></li>
						<li class={style.li}><b>youtube</b> <code>window.__themeCfg.youtubeUsername = '...';</code></li>
					</ul>

					<h3>Google Analytics</h3>

					<p>Got a Google Analytics tracking ID? Instantly enable tracking on your blog by adding the following line to header code injection:</p>

					<p><code>&lt;script&gt; window.__themeCfg.googleAnalyticsId = 'UA-12345678-1'; &lt;/script&gt;</code></p>

					<h3>Disqus</h3>

					<p>To integrate a bleak blog with Disqus, you just need a Disqus username. Drop it into your configuration with this one line in the header code injection interface:</p>

					<p><code>&lt;script&gt; window.__themeCfg.disqusUsername = 'mydisqususername'; &lt;/script&gt;</code></p>

				</div>

				<a href={`${process.env.NODE_ENV === 'production' ? '//unwitting.github.io' : ''}/assets/img/screenshot_post_page.png`} target='_blank'>
					<img src={`${process.env.NODE_ENV === 'production' ? '//unwitting.github.io' : ''}/assets/img/screenshot_post_page.png`}/>
				</a>

				<div class={style.content}>

					<h2>that's it</h2>

					<p>You're done! If you have any problems with <b>bleak</b>, head over to the Github project and raise an issue! I'll take a look.</p>

					<a href='https://github.com/unwitting/bleak/issues' target='_blank' onClick={this.handleSubmitIssueClick.bind(this)}>
						<Button type='happy'>submit an issue</Button>
					</a>

				</div>

			</div>
		);
	}
}
