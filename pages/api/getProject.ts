// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import  sanityCli  from '../../portfolio/sanity.cli'
import { client } from '../../sanity'

import { Project } from '../../typings'

const query = groq`
    *[_type=="project"]
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
