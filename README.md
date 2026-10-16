# asgorobets.com

Alexei Gorobet's personal website, portfolio, and blog, built with Next.js, React, and Tailwind CSS.

## Development

Requires Node.js 20.9 or newer and pnpm.

```sh
git clone git@github.com:asgorobets/website.git
cd website
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Validation and production

```sh
pnpm typecheck
pnpm build
pnpm start
```

## Content

- Site metadata and social links: `app/config.ts`
- Home page: `app/page.tsx`
- Portfolio projects: `app/projects/project-data.tsx`
- Blog posts: `content/*.mdx`

The site includes light and dark themes, RSS/Atom/JSON feeds, generated Open Graph images, and Vercel Analytics and Speed Insights.

## License

MIT. See [LICENSE](LICENSE).
