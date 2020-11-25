export const allPosts = [
  {
    title: 'Best Practices for Principled Development',
    slug: 'principled-development',
    blurb: `
      A series focusing on all the things I've learned in my years doing full-stack web development.
    `,
    imageSrc: '/images/blog-posts/frontend-principles.png',
    dateCreated: 'Nov 23, 2020',
    tags: ['principled-dev'],
    body: require('./principled-dev/principled-development').default,
  },
  {
    title: 'My Frontend Stack',
    slug: 'the-frontend-stack',
    blurb: `
      My essential selection of libraries for frontend development.
    `,
    imageSrc: '/images/blog-posts/js-logo.jpeg',
    dateCreated: 'Nov 23, 2020',
    tags: ['principled-dev', 'frontend'],
    body: require('./principled-dev/the-frontend-stack').default,
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
