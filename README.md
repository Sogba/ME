# Portfolio (Assignment)

This is a small static portfolio site scaffold for an assignment.

Features implemented:
- Full-screen "About me" section with centered text
- Projects section: horizontal swiper for categories (Mechanics, Electronics, Web, Software)
  - Each category contains a vertical nested swiper that pages through grid pages of project cards
- Contacts section with email and GitHub link

How to run
1. Open `index.html` in your browser (double-click or use a local static server).
2. The site uses Swiper (CDN) for the swiping behavior; an internet connection is needed for the CDN.

Customize
- Edit the `index.html` content (replace your name, project titles, and links).
- Tweak layout and colors in `style.css`.
- Add/remove project cards inside the `.project-grid` elements. Each inner `.swiper-slide` is a grid page.

Notes
- This uses Swiper v12 from CDN. If you need offline development, download the Swiper bundle and reference it locally.
- For accessibility, keyboard navigation is enabled for both outer and inner swipers.

Done by: You
