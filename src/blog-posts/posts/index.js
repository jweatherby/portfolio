export const allPosts = [
  {
    title: 'Being a Full Stack Dev',
    slug: 'being-full-stack',
    blurb: `
      A series focusing on all the things I've learned in my years doing full-stack web development.
    `,
    imageSrc: '/images/blog-posts/frontend-principles.png',
    dateCreated: 'Nov 23, 2020',
    tags: ['being-full-stack'],
    body: require('./being-full-stack/being-full-stack').default,
    published: true,
  },
  {
    title: 'My Frontend Stack',
    slug: 'the-frontend-stack',
    blurb: `
      My essential selection of libraries for frontend development.
    `,
    imageSrc: '/images/blog-posts/js-logo.jpeg',
    dateCreated: 'Nov 23, 2020',
    tags: ['being-full-stack', 'frontend'],
    body: require('./being-full-stack/the-frontend-stack').default,
    published: true,
  },
  {
    title: 'Folder structure',
    slug: 'folder-structure',
    blurb: `Two core fundamentals to follow to better structure your code.`,
    imageSrc: '/images/blog-posts/sitemap.jpg',
    dateCreated: 'Jan 4, 2020',
    tags: ['being-full-stack'],
    body: require('./being-full-stack/folder-structure').default,
    published: true,
  },
  {
    title: 'API Error Handling',
    slug: 'api-error-handling',
    blurb: `
       Here, I'll walk through a conventional API design for consistent
       contracts across the different endpoints.
    `,
    imageSrc: '/images/blog-posts/sitemap.jpg',
    dateCreated: 'Jan 18, 2020',
    tags: ['being-full-stack', 'backend'],
    body: require('./being-full-stack/api-error-handling').default,
    published: false,
  },
  // {
  //   title: 'The Functional Programming Mindset',
  //   slug: 'functional-programming',
  //   blurb: `
  //      How functional programming changes how you think about
  //      your design your code and your solutions
  //   `,
  //   imageSrc: '/images/blog-posts/sitemap.jpg',
  //   dateCreated: 'Nov 20, 2020',
  //   tags: ['principled-dev', 'functional programming'],
  //   body: require('./principled-dev/functional-programming').default,
  //   published: false,
  // },
  // {
  //   title: 'Testing Strategy',
  //   slug: 'testing-strategy',
  //   blurb: `
  //     What is the pyramid of tests? How I approach testing my applications.
  //   `,
  //   imageSrc: '/images/blog-posts/js-logo.jpeg',
  //   dateCreated: 'Nov 23, 2020',
  //   tags: ['principled-dev', 'tests'],
  //   body: require('./principled-dev/testing-strategy').default,
  //   published: false,
  // },
  // {
  //   title: 'API Design',
  //   slug: 'api-design',
  //   blurb: `
  //      Here, I'll walk through a conventional API design for consistent
  //      contracts across the different endpoints.
  //   `,
  //   imageSrc: '/images/blog-posts/sitemap.jpg',
  //   dateCreated: 'Nov 20, 2020',
  //   tags: ['principled-dev', 'backend'],
  //   body: require('./principled-dev/api-design').default,
  //   published: false,
  // },
  // {
  //   title: 'Connecting to the API: the API client',
  //   slug: 'the-api-client',
  //   blurb: `Wrapping js-fetch to handle all your API needs.`,
  //   imageSrc: '/images/blog-posts/sitemap.jpg',
  //   dateCreated: 'Nov 20, 2020',
  //   tags: ['principled-dev', 'api'],
  //   body: require('./principled-dev/api-client').default,
  //   published: false,
  // },
  // {
  //   title: 'Connecting to the API: Loading Components',
  //   slug: 'loading-components',
  //   blurb: `Wrap your components in a HOC to automate how you fetch your data.`,
  //   imageSrc: '/images/blog-posts/sitemap.jpg',
  //   dateCreated: 'Nov 20, 2020',
  //   tags: ['principled-dev', 'api'],
  //   body: require('./principled-dev/loading-components').default,
  //   published: false,
  // },
  // {
  //   title: 'Connecting to the API: Submitting Requests',
  //   slug: 'submitting-requests',
  //   blurb: `Use a custom hook to simplify how you send data to the API.`,
  //   imageSrc: '/images/blog-posts/sitemap.jpg',
  //   dateCreated: 'Nov 20, 2020',
  //   tags: ['principled-dev', 'api'],
  //   body: require('./principled-dev/submitting-requests').default,
  //   published: false,
  // },
]
