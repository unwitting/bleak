![bleak](https://dl.dropboxusercontent.com/s/kcl7il32x5d59r5/bleak_index_large.png)

[![gtca button](https://camo.githubusercontent.com/ebcfabe77067823252071c7b7554dd5d6644e4c5/68747470733a2f2f646c2e64726f70626f7875736572636f6e74656e742e636f6d2f732f786a64336637387934667536366e632f53637265656e73686f74253230323031362d30312d323325323031312e30382e34322e706e67)](https://github.com/unwitting/gtca)

# bleak. a theme for ghost
__bleak__ is a stunning theme for the [Ghost](https://ghost.org/) blog platform. It features
full-section images and a slick responsive design that puts the right content right in your
readers' faces. [See some more screenshots below](#screenshots), or
__see it in action__ on my blog, [unwttng.com](http://unwttng.com).

## Quick installation
We'll talk about how insanely customisable bleak is in a second, but if you just want to get
started, it works without any configuration too.

Get the .zip file for the latest version [here](https://github.com/unwitting/bleak/archive/master.zip),
and install it however you normally do:

* Ghost(Pro) users can upload this .zip file via the Pro dashboard. See the
[official guide](http://support.ghost.org/upload-theme-ghostpro/).
* Self-hosted Ghost users should upload the .zip file to Ghost's `content/themes/` directory and
extract it with `unzip -o bleak.zip`.

Once you go live with bleak, please get in touch! I'd love to feature your blog as a user of the theme right here.

## Configuration
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
<script>window.__themeCfg.googleAnalyticsId = 'UA-12345678-1';</script>
```

### Disqus
To integrate a __bleak__ blog with Disqus, you just need a Disqus username. Drop it into your
configuration with this one line in the header code injection interface:

```html
<script>window.__themeCfg.disqusUsername = 'mydisqususername';</script>
```

Done! Disqus threads will now appear on all of your posts.

### Social links
__bleak__ supports a wide range of social profile links. Configuring any of these will cause the
appropriate navigation items to appear in your sidebar.

For any network listed below, just configure `window.__themeCfg.<socialnetwork>Username` in your
blog header code injection. For example, to add a navigation item to your Twitter profile, you
would add:

```html
<script>window.__themeCfg.twitterUsername = 'unwttng';</script>
```

As if by magic, you now have a social links bar in your sidebar with a Twitter-icon link.

Which networks are available?

* bitbucket: `window.__themeCfg.bitbucketUsername = '...';`
* deviantart: `window.__themeCfg.deviantartUsername = '...';`
* facebook: `window.__themeCfg.facebookUsername = '...';`
* flickr: `window.__themeCfg.flickrUsername = '...';`
* github: `window.__themeCfg.githubUsername = '...';`
* instagram: `window.__themeCfg.instagramUsername = '...';`
* linkedin: `window.__themeCfg.linkedinUsername = '...';`
* pinterest: `window.__themeCfg.pinterestUsername = '...';`
* soundcloud: `window.__themeCfg.soundcloudUsername = '...';`
* twitch: `window.__themeCfg.twitchUsername = '...';`
* twitter: `window.__themeCfg.twitterUsername = '...';`
* vimeo: `window.__themeCfg.vimeoUsername = '...';`
* youtube: `window.__themeCfg.youtubeUsername = '...';`

The theme looks best when you use one, two or three of the above in combination!

## See it in action

### Real life blogs using __bleak__

Let me know if your blog uses the theme!

* [Dinchamion](https://www.dinchamion.com/)
* [Datafluisteraar](http://datafluisteraar.org/)

### Index page
![bleak](https://dl.dropboxusercontent.com/s/kcl7il32x5d59r5/bleak_index_large.png)

### Post
![bleak](https://dl.dropboxusercontent.com/s/c3nveo3zk981s70/bleak_post_large.png)

### Static page
![bleak](https://dl.dropboxusercontent.com/s/vsoqq45omnkbr7k/bleak_page_large.png)

## Mobile screenshots
bleak is responsive, switching to a tailored vertical layout with the right content top
and center when on small devices.

### Index page
![bleak](https://dl.dropboxusercontent.com/s/h58x9bzv01aooa9/bleak_index_small.png)

### Post
![bleak](https://dl.dropboxusercontent.com/s/ynzc97blvcv3op0/bleak_post_small.png)

### Static page
![bleak](https://dl.dropboxusercontent.com/s/ruvcym6b0nr3ja2/bleak_page_small.png)
