// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from 'next-sanity'
import  sanityCli  from '../../portfolio/sanity.cli'
import { client } from '../../sanity'

const query = groq`
*[_type=="pageInfo"]
`
