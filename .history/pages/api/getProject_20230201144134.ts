// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import  sanityCli  from '../../portfolio/sanity.cli'
import { client } from '../../lib/sanity'

import { Project } from '../../typings'

const query = groq`
*[_type == "project"] {
  ..., 
  
} | order(_createdAt asc)
`

type Data = {
    project: Project[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const project: Project [] = await client.fetch(query)
    res.status(200).json({ project })
  }
