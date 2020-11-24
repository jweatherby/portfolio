export const allPosts = [
  {
    title: 'The Full Stack Developer',
    slug: 'the-fullstack-dev',
    blurb: `
      A series focusing on all the things I've learned in my years doing frontend development.
    `,
    imageSrc: '/images/blog-posts/frontend-principles.png',
    dateCreated: 'Nov 23, 2020',
    tags: ['fullstack-track'],
    body: require('./principled-frontend/the-fullstack-dev').default,
  },
  {
    title: 'The Frontend Stack',
    slug: 'the-frontend-stack',
    blurb: `
      My essential selection of libraries for frontend development.
    `,
    imageSrc: '/images/blog-posts/js-logo.jpeg',
    dateCreated: 'Nov 23, 2020',
    tags: ['fullstack-track', 'frontend'],
    body: require('./principled-frontend/frontend-stack').default,
  },
  // {
  //   title: 'Why React?',
  //   slug: 'the-react-library',
  //   blurb: `
  //     Why do I choose react?
  //   `,
  //   imageSrc: '/images/blog-posts/react-logo.png',
  //   dateCreated: 'Nov 23, 2020',
  //   tags: ['fullstack-track'],
  //   body: require('./principled-frontend/the-react-library').default,
  // },
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
