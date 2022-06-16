import type { NextApiRequest, NextApiResponse } from 'next'
import { getSession } from "next-auth/react"

type Data = {
  name: string
}

export default async function handler(req, res) {
 const session = await getSession({ req })
 if(!session.user) {
   res.status(401).json({ message: 'Unauthorized' })
   return
 }
 if (req.method === 'POST') {
  console.log(session.user.email)
   // Process a POST request
 } else {
   // Handle any other HTTP method
 }
}
