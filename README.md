# bleak. a theme for ghost
__bleak__ is a stunning theme for the [Ghost](https://ghost.org/) blog platform. It features
full-section images and a slick responsive design that puts the right content right in your
readers' faces.

## Configurability
bleak is super configurable. It supports __Google Analytics__, __Disqus__ integration and
a whole suite of __social profile links__. And the best thing is, not a single bit of it requires
you to hack around with the theme's files. It works right out of the box, and you can set it
up however you like using the Ghost admin interface.

All theme configuration is done by adding one-line items to your Ghost blog __header__ via the
code injection interface at `yourblog.com/ghost/settings/code-injection`.

### Google Analytics
Got a Google Analytics tracking ID? Instantly enable tracking on your blog by adding the following
line to header code injection:

```html
<script>window._bleak.googleAnalyticsId = 'UA-12345678-1';</script>
```

### Disqus
To integrate a __bleak__ blog with Disqus, you just need a Disqus username. Drop it into your
configuration with this one line in the header code injection interface:

```html
<script>window._bleak.disqusUsername = 'mydisqususername';</script>
```

Done! Disqus threads will now appear on all of your posts.

### Social links
__bleak__ supports a wide range of social profile links. Configuring any of these will cause the
appropriate navigation items to appear in your sidebar.

For any network listed below, just configure `window._bleak.<socialnetwork>Username` in your
blog header code injection. For example, to add a navigation item to your Twitter profile, you
would add:

```html
<script>window._bleak.twitterUsername = 'unwttng';</script>
```

As if by magic, you now have a social links bar in your sidebar with a Twitter-icon link.

Which networks are available?

* bitbucket: `window._bleak.bitbucketUsername = '...';`
* deviantart: `window._bleak.deviantartUsername = '...';`
* facebook: `window._bleak.facebookUsername = '...';`
* flickr: `window._bleak.flickrUsername = '...';`
* github: `window._bleak.githubUsername = '...';`
* instagram: `window._bleak.instagramUsername = '...';`
* linkedin: `window._bleak.linkedinUsername = '...';`
* pinterest: `window._bleak.pinterestUsername = '...';`
* soundcloud: `window._bleak.soundcloudUsername = '...';`
* twitch: `window._bleak.twitchUsername = '...';`
* twitter: `window._bleak.twitterUsername = '...';`
* vimeo: `window._bleak.vimeoUsername = '...';`
* youtube: `window._bleak.youtubeUsername = '...';`

The theme looks best when you use one, two or three of the above in combination!
