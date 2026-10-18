# NIN SPOT Guide v0.3

## Deploy on GitHub Pages
Upload **index.html** and **showcases.js** to the same directory (repository root when GitHub Pages uses main / root). Both files are required.

## Add, remove, reorder videos
Edit **showcases.js** only. Each `{ ... }` inside `window.NIN_SHOWCASES` represents one card. Copy a whole entry to add a card; remove an entry to delete it; reorder entries to change display order.

Fields:
- `videoUrl`: YouTube URL (normal videos and Shorts supported). Empty string shows a video placeholder.
- `title`: title shown on both sides.
- `description`: short explanation on the reverse.
- `tags`: array of Basic Guide feature names.
- `creator`: creator name.
- `location`: text location.
- `domainSpaceId`: Domain Space number (leave empty if unknown).
- `domainSpaceUrl`: exact Domain Space link (leave empty if unknown).
- `objects`: **maximum two displayed**, each `{ name: '...', url: '...' }`. URL can later point to the Object Store. Extra objects are ignored by the UI.
- `details`: array of recipe steps.

Set `window.NIN_BASIC_GUIDES` URLs at the bottom of showcases.js to connect feature tags and Recipe guide links to official Basic Guide videos.

## Current sample limitations
- World Cup location, exact objects and creator attribution need confirmation against video details; descriptive text is illustrative.
- BTS Gwanghwamun video URL was not supplied; leave `videoUrl` blank until available.
- No Domain Space IDs or Object Store URLs were invented.
- YouTube video thumbnails load from YouTube and videos play in an embedded YouTube player on click. Playback can be restricted by browser or by video owner embedding settings.
- The original NIN logo asset was not available in this session. Header uses a temporary location symbol and footer a text NIN mark; replace with official logo when supplied.
