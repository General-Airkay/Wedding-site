# /public — Static Assets

Place your static files here. They will be served at the root URL.

## Recommended files to add:

- `favicon.ico` — Browser tab icon (use couple photo or initials)
- `og-image.jpg` — Social share preview image (1200×630px)
- `couple.jpg` — Main couple photo for the hero/homepage
- `engagement-01.jpg`, `engagement-02.jpg` etc. — Gallery photos
- `pre-wedding-01.jpg` etc. — Pre-wedding photos
- `portraits-01.jpg` etc. — Couple portrait photos

## How to use in pages:

```jsx
import Image from 'next/image';

// Reference files directly from /public:
<Image src="/couple.jpg" width={600} height={800} alt="Lydia and Ndiana" />
<img src="/favicon.ico" alt="favicon" />
```

## Favicon
Generate a free favicon at https://favicon.io and drop `favicon.ico` here.
