export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Migrate SDK",
    year: 2026,
    description:
      "TypeScript toolkit for moving data between APIs, databases, and files, with resumable runs, retries, and rollback. Built with Effect, with CLI and terminal UI support.",
    url: "https://migrate-sdk.dev",
  },
  {
    title: "Next Hydra",
    year: 2025,
    description:
      "Composable commerce and CMS architecture built with Next.js and TypeScript, bringing together swappable providers for content, commerce, authentication, and shared platform services.",
    url: "https://next-hydra.dev",
  },
  {
    title: "Next CMS Starter Kit",
    year: 2022,
    description:
      "Next.js and Contentful starter kit with type-safe GraphQL data fetching, React Server Components, live previews, and a shared component architecture.",
    url: "https://next-cms.dev",
  },
];
