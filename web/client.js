import sanityClient from '@sanity/client'

const client = sanityClient({
  projectId: 'm6lk64wl',
  dataset: 'production',
  useCdn: false, // `false` if you want to ensure fresh data
  apiVersion: '2022-01-31',
})

export default client
