# AiResumeDraft

Free online resume builder at [airesumedraft.com](https://airesumedraft.com/).

Visual design is aligned with FlowCV’s marketing site: sand canvas (`#F0EEEB`), ink buttons (`#200E32`), DM Sans, sticky header, hero + template carousel + free-plan + FAQ layout — branded as **AiResumeDraft**.

## Local

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

Production URL: [https://airesumedraft.com/](https://airesumedraft.com/)

GitHub Actions publishes `dist/` to the `gh-pages` branch. Point the domain in Hostinger (hPanel → Domains → DNS):

- **A** `@` → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
- **CNAME** `www` → `suprakashmajee.github.io`

Or keep Hostinger LiteSpeed: upload the contents of `dist/` into `public_html` (`.htaccess` is included for SPA routes).
