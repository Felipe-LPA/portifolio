export interface Card {
  background: string;
  banner: {
    url: string;
    alt: string;
  };
  title: string;
  description: string;
  technologies: string[];
  linkGitHub: string;
  site?: string;
}
