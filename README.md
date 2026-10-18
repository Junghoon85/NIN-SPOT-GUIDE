# NIN SPOT GUIDE v4.0

GitHub Pages: upload `index.html`, `showcases.js`, and `nin-logo-white.png` to the same folder.

## Content editing

Edit `showcases.js` only. Each Showcase includes videoUrl, title, description, tags, creator, `location: {name, url}`, up to two `objects: [{name, url}]`, and `steps`.

Each Recipe step accepts `title`, `description`, `settings: {key: value}`, and `guideKey` (lookup in `NIN_BASIC_GUIDES`) or `guideUrl` (step-specific override). `guideTitle` controls the guide link label. Steps are shown in order with settings and the corresponding Basic Guide **immediately below that step**.

Fill real specifications from the actual production settings. Blank setting values are hidden; the sample files intentionally do not invent object speed, scale, altitude, or other measurements. Blank URLs do not create dead links.

Location names link to the URL you supply. Each object renders as an individually linked hashtag when its URL is supplied. Maximum 2 objects per Showcase.

YouTube preview images and embeds require internet. Official social icons use jsDelivr Simple Icons.
