export const allPosts = [
  {
    title: 'Why React?',
    slug: 'the-react-library',
    blurb: `
      We've settled on building a static site in React.
      How did we get here?
    `,
    imageSrc: '/images/blog-posts/react-logo.png',
    dateCreated: 'Nov 20, 2020',
    tags: ['react', 'static site', 'frontend'],
    body: require('./principled-frontend/the-react-library').default,
  },
  // {
  //   title: 'Static sites: Folder structure fundamentals',
  //   slug: 'folder-structure',
  //   blurb: `How to structure your code so future you is happy you.`,
  //   imageSrc: '/images/blog-posts/sitemap.jpg',
  //   dateCreated: 'Nov 20, 2020',
  //   tags: ['static site', 'frontend'],
  //   body: require('./principled-frontend/folder-structure').default,
  // },
]
