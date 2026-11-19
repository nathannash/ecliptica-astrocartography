# Ecliptica

Relocation astrology and astrocartography in the browser. Ecliptica draws your planetary
lines on a world map, re-angles your birth chart for any of ~24,000 cities, and scores
places by livability, activation and fit.

It is a static site with no build step and no backend, so any static host can serve it, GitHub Pages included.

## Run locally

Any static file server works. From the repository root:

```bash
python3 -m http.server 8000
```

Then open <http://localhost:8000>. (Opening `index.html` directly from disk also works in most browsers.)

## Publish on GitHub Pages

1. Push this repository to GitHub with the code on the `main` branch.
2. In the repository, go to **Settings → Pages** and set **Source** to **GitHub Actions**.
3. The workflow in `.github/workflows/pages.yml` deploys on every push to `main`
   (or run it by hand from the **Actions** tab). The site appears at
   `https://<user>.github.io/<repository>/`.

## Project layout

| Path | What it is |
| --- | --- |
| `index.html` | Page markup |
| `assets/styles.css` | All styles |
| `assets/app.js` | Application code (chart casting, scoring, map, UI) |
| `assets/data/land.js` | World land polygons (GeoJSON) |
| `assets/data/cities.js` | City database (name, country, coordinates) |
| `assets/vendor/` | Pinned copies of [D3](https://d3js.org) 7.9.0 and [Astronomy Engine](https://github.com/cosinekitty/astronomy) 2.1.19 (both MIT) |

Fonts load from Google Fonts. Everything else is served from this repository.

## Data storage

Birth data, saved profiles and the last-open view are kept in the visitor's own browser
(`localStorage`). Nothing is sent to a server.

## Optional: AI-written portrait

The relocation chart includes a "Daily Life Portrait" section. By default it shows the
built-in template text. If you have an Anthropic API key, you can have Claude rewrite that
section for you: open the browser's developer console on the site and run

```js
localStorage.setItem('ecliptica:anthropic-key', 'sk-ant-...')
```

The key stays in that browser and is sent only to `api.anthropic.com`. Don't do this on a shared
computer. To turn it off:

```js
localStorage.removeItem('ecliptica:anthropic-key')
```
