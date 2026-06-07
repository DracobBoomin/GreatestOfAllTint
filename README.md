# G.O.A.T Greatest of All Tint Website

This is a free static website. You can host it on GitHub Pages, Netlify, Cloudflare Pages, or Vercel without paying for a backend.

## Edit Contact Info

Open `script.js` and change:

```js
quoteEmail: "quotes@example.com",
quotePhone: "555-555-5555"
```

The quote form opens the visitor's email app with the message filled in. For a stronger booking setup later, connect the form to a free form service like Formspree, Basin, Netlify Forms, or a Google Form.

## Instagram Work

The site links to:

```text
https://www.instagram.com/Greatesofalltint/
```

To show real work directly on the page for free, save a few approved customer photos into `assets/`, then replace the gallery placeholder blocks in `index.html` with image tags.

## Your 5 Percent Booking Fee

Do not put this on the customer-facing website. Keep the fee agreement in writing with your friend, then track each booking source manually or through a form service. If the customer came from this website, charge 5 percent of the booked job total.

Suggested tracking columns:

```text
Date, Customer, Vehicle, Job Total, Source, Your 5 Percent Fee, Paid
```

## Local Preview

Open `index.html` in a browser, or run a local static server from this folder:

```powershell
python -m http.server 8080
```

Then visit:

```text
http://localhost:8080
```
