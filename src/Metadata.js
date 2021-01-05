import React from 'react'
import { Helmet } from 'react-helmet'

const defaultMetadata = {
  image:
    'https://showboard.ams3.cdn.digitaloceanspaces.com/assets/funny-hat.jpg',
  title: 'jweatherby.dev',
  description:
    'An avid full-stack software engineer specializing in web technologies.',
  url: 'https://jweatherby.dev/',
  imageAlt: 'a silly hat',
}

export const Metadata = ({ url, title, ...metadata }) => {
  const _metadata = {
    ...defaultMetadata,
    ...metadata,
    url: url
      ? `${defaultMetadata.url.replace(/\/$/, '')}${url}`
      : defaultMetadata,
    title: title
      ? `${title} | ${defaultMetadata.title}`
      : defaultMetadata.title,
  }

  return (
    <Helmet>
      <title>{_metadata.title}</title>
      <link rel="canonical" href={_metadata.url} />
      <meta property="og:site_name" content={defaultMetadata.title} />
      <meta property="og:title" content={_metadata.title} />
      <meta property="og:description" content={_metadata.description} />
      <meta property="og:image" content={_metadata.image} />
      <meta property="og:url" content={_metadata.url} />

      <meta name="twitter:title" content={_metadata.title} />
      <meta name="twitter:image" content={_metadata.image} />
      <meta name="twitter:image:alt" content={_metadata.imageAlt} />
      <meta name="twitter:description" content={_metadata.description} />
      <meta name="twitter:url" content={_metadata.url} />
      <meta name="twitter:card" content="summary" />
    </Helmet>
  )
}
