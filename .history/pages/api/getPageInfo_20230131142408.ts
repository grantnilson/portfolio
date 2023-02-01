// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import  sanityCli  from '../../portfolio/sanity.cli'
import { client } from '../../sanity'

const query = groq`
    *[_type=="pageInfo"]
`

type Data = {
    pageInfo: PageInfo[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const pageInfo: PageInfo [] = await client.fetch(query)
    res.status(200).json({ name: 'John Doe' })
  }
