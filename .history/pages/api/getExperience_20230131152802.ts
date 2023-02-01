// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import  sanityCli  from '../../portfolio/sanity.cli'
import { client } from '../../sanity'

import { Experience } from '../../typings'

const query = groq`
    *[_type=="experience"]
`

type Data = {
    experience: Experience[]
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
  ) {
    const experience: Experience [] = await client.fetch(query)
    res.status(200).json({ experience })
  }
