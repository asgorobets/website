export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
}

export const projects: Project[] = [
  {
    title: "Acquia DAM Contentful App",
    year: 2023,
    description:
      "Acquia DAM Contentful App that allows direct use of Acquia DAM assets in Contentful based on Contentful DAM Base",
    url: "https://github.com/ffw-us/contentful-app-acquia-dam",
  },
];
