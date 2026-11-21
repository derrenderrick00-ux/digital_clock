# Modern Clock

I built this responsive digital clock web app as a hands-on frontend practice project to learn CSS Flexbox, `@keyframes` animations, media queries, and JavaScript DOM manipulation.

## What I Built & Learned

* **Layout & Styling:** I used a dark-mode `#121212` background with `rgb(3, 137, 246)` accents, CSS Flexbox for alignment, `box-sizing: border-box` to keep card dimensions predictable, and `font-variant-numeric: tabular-nums` so digits stay steady as time changes.
* **Keyframes Animation:** I created a custom `@keyframes blink` animation and applied it to the `.colon` separators so they pulse smoothly in real time.
* **Live Time Logic:** In `script.js`, I selected the `.hours-output`, `.minutes-output`, and `.seconds-output` elements, read live values from JavaScript's `Date` object, and formatted single digits with `.toString().padStart(2, "0")`.
* **Responsive Breakpoints:** I refined the card sizing and digit scaling across `@media` breakpoints (`640px`, `768px`, and `1024px`) to prevent awkward crowding and border overflow.

## Project Structure

* `index.html` — Markup for the clock card, heading, and live time readouts.
* `style.css` — Dark-mode styling, Flexbox layout, blink keyframes, and responsive media queries.
* `script.js` — Real-time clock updates and zero-padded digit formatting.

## How to Run It

1. Clone or download the repository.
2. Open `index.html` in any web browser.

## Future Improvements

* Add a toggle between 24-hour and 12-hour (AM/PM) formats.
* Fine-tune mobile spacing and typography for extra-narrow screens.