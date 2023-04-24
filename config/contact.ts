export enum ContactType {
  github = 'github',
  linkedin = 'linkedin',
  twitter = 'twitter',
  youtube = 'youtube',
  email = 'email',
  buymeacoffee = 'buymeacoffee',
}

export interface Contact {
  twitter: string;
  site: string;
  calendly?: string;
  links: Record<ContactType, string>;
}

export const contact: Contact = {
  twitter: '@kaizendae',
  site: 'karanpratapsingh.com',
  // calendly: 'https://calendly.com/karanpratapsingh',
  links: {
    github: 'https://github.com/kaizendae',
    linkedin: 'https://linkedin.com/in/elasri-abdelati',
    twitter: 'https://twitter.com/kaizendae',
    youtube: 'https://www.youtube.com/@kaizendae',
    email: 'mailto:abdelattie@gmail.com',
    buymeacoffee: 'https://www.buymeacoffee.com/devsinstyle',
  },
};
