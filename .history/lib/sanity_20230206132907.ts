import {createClient, groq} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'

const projectId = "pcejs438" // ""
//console.log(projectId); 
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET // "production"
const apiVersion = "2022-02-03"

export const client = createClient({
  projectId,
  dataset,
  apiVersion, // https://www.sanity.io/docs/api-versioning
  useCdn: typeof document !== 'undefined', // server-side is statically generated, the CDN is only necessary beneficial if queries are called on-demand
})

const data = async () => {await client.fetch(groq`*[]`)}

const builder = imageUrlBuilder(client)

export function urlFor(source) {
  return builder.image(source)
}
