# Kim Carlo Rosita — Portfolio

A personal portfolio for web development and enterprise systems, built with React 19, Vite, Tailwind CSS, and Lucide icons. The site includes selected work, capabilities, experience, a contact form, and persistent dark/light themes.

## Run locally

Install Node.js and npm, then run:

```sh
npm ci
npm run dev
```

Vite prints the local development URL. To check the production output:

```sh
npm run lint
npm test
npm run build
npm run preview
```

The build is generated in `dist/`, which is ignored by Git. Do not edit generated files there; rebuild after changing `src/`, `public/`, or `index.html`.

## Update your content

The authoritative content file is `src/data/portfolio.js`:

- `profile`: name, role, contact details, and Facebook profile URL.
- `navigation`: labels and section IDs.
- `projects`: title, description, technology list, cover style, and optional repository URL.
- `capabilities`: technology groups and supporting descriptions.
- `experiences`: employment history and descriptions.
- `biography` and `toolGroups`: programming and professional background, plus everyday tools.

Only add achievements, clients, outcomes, dates, and availability statements you can confirm. The biography, role progression, and project dates were updated from the supplied resume. Education and academic honors are omitted at the owner's request. Review employment dates when your circumstances change. Current website contact details remain in place because the resume lists different ones.

The current project covers are **illustrations**, not screenshots of deployed projects. Selected work includes the doctor's portfolio, coffee shop website, and BBCCC loan/payroll systems described in the resume. Project cards include dates and contributions. Projects without a supplied destination show a descriptive status instead of an inactive button. The original `doctors` repository URL is retained; verify its public accessibility before publishing.

To add a real project screenshot, store it under `src/assets/`, import it into the content module, and update `ProjectCover` in `src/components/ProjectsSection.jsx` to render the image with suitable alternative text, dimensions, and lazy loading. Remove the illustration caption for actual screenshots.

The portrait is `src/assets/profile-pic.png`. Its framing is controlled by `.portrait-frame` in `src/index.css`.

## Design and components

`src/index.css` owns shared colors, typography, spacing, layout, and responsive rules. Theme colors use CSS variables on the root element; the light theme overrides those variables rather than duplicating each component's styles.

`src/App.jsx` manages the theme and active section observer. The first visit defaults to dark mode. A selected theme is saved as `portfolio-theme` in local storage. Storage failures fall back to a usable theme. The small script in `index.html` applies a saved theme before React starts to reduce theme flashing.

The page order is hero → selected work → about/capabilities → experience → contact. Each section lives in its matching file under `src/components/`. Keep section IDs synchronized with navigation links.

Navigation uses anchors so section URLs can be bookmarked. The mobile menu closes after navigation, an outside click, Escape, or a switch to a desktop layout. Hidden menu links are removed from keyboard navigation. The site includes a skip link, visible focus styles, named icon controls, visible form labels, and reduced-motion rules.

## Contact form

The existing EmailJS service, template, public key, destination, and template parameter names were preserved:

- `from_name`
- `from_email`
- `message`
- `to_email`

Optional build-time overrides are documented in `.env.example`. Copy it to `.env.local` and fill in the values only if you need another EmailJS configuration. Empty overrides use the existing configuration. Restart the development server or rebuild after changing environment values.

**All `VITE_` values are public and bundled into the frontend.** Use only EmailJS browser/public identifiers here. Private credentials belong on a server.

Validation is in `src/lib/contactValidation.js`; its boundary and email-format tests are in `tests/contactValidation.test.js`. A message requires a 2–50 character name, a valid email address of at most 254 characters, and a 10–1,000 character message. Input is trimmed before sending. On failure, the form retains the message and offers direct email as an alternative. While sending, fields and submission are disabled.

Browser tests can intercept the EmailJS request to exercise loading, success, and failure states without sending an email. Those checks do not establish live delivery. Confirm actual delivery with a deliberate test message and verify the EmailJS template and account settings before publishing.

## Metadata and publishing

Edit the page title, description, and Open Graph/Twitter text in `index.html`. The favicon is `public/favicon.svg`.

A canonical URL and absolute social image URL should be added when the final public domain is confirmed. The project currently assumes deployment at a domain root. For a subdirectory deployment, configure Vite's `base` to match that path and verify generated asset URLs.

Publish the contents of `dist/` to your static host after a successful build. No deployment is performed by the build or preview commands.

## Before publishing

1. Run lint, validation tests, and a production build.
2. Preview the production output at desktop, tablet, and phone widths, including 320px.
3. Check both themes, theme persistence, project/social links, and navigation anchors.
4. Use the keyboard to test the skip link, mobile menu, Escape, and contact fields.
5. Check empty/invalid form input, success and failure presentation, and a deliberate live delivery test.
6. Confirm real project destinations, personal details, employment dates, and illustrative-cover labels.
7. Verify the favicon and metadata on the final deployed domain.
