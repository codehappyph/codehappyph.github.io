# CodeHappy website

Static website for CodeHappy's software engineering and applied AI training practice. No installation, framework, backend, or build step is required.

## Preview locally

From the repository root:

```sh
python -m http.server 8000
```

Open http://localhost:8000/ for the current site or http://localhost:8000/archive/ for the previous website. Stop the server with Ctrl+C.

## Structure and editing

- `index.html`: homepage content and metadata. Visible sections are About Us, Services, Why Choose Us, Our Values, Our Team, and Contact Us.
- `assets/css/refresh.css`: responsive styles, including the color tokens at the top of the file. The site uses system fonts.
- `assets/js/refresh.js`: mobile navigation, Escape-key handling, active navigation links, and the header's scrolling state. Content and navigation remain accessible without JavaScript.
- `assets/images/`: brand illustrations, founder portraits, and organization logos.
- `about.html`, `courses.html`, `python-training-series.html`: forwarding pages preserving older entry points.
- `archive/`: the previous website's pages and supporting assets, with its own README. Historical content, template placeholders, and inherited broken references are retained.
- `robots.txt`, `sitemap.xml`: crawler guidance and the current homepage URL. The archive remains publicly accessible even though crawling is disallowed.
- `CNAME`: the `codehappy.ph` custom domain for GitHub Pages.

Earlier assets and `index_2021-04-02.html` remain at the root for URL compatibility. Local-only backup and reference files are excluded through `.gitignore`.

## Maintaining content

- The hero consultation button links to Calendly. The contact button opens an email application with organization, goals, and timeline prompts; the site does not receive form submissions.
- Update profile links, social links, organization logos, and the copyright year in `index.html` as needed.
- Deferred content is preserved in labeled HTML comments: the detailed learning-area catalog, repeated testimonial teaser, curriculum-development offering, learning journey, standalone Our Work introduction, and newsletter.
- Follow each comment's restoration instructions. Restoring the catalog requires removing its matching Services anchor aliases to avoid duplicate IDs. Update section numbering when adding sections.
- The deferred newsletter retains the earlier Mailchimp form. Restoring it also requires revisiting the compact footer layout and confirming the subscription flow.

## Checks

```sh
node --check assets/js/refresh.js
git diff --check
```

No automated build or test suite is configured. Preview desktop and mobile layouts, keyboard navigation, image loading, links, and contact actions before publishing.
