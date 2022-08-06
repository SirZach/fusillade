import { NextApiRequest, NextApiResponse } from "next";

interface File {
  name: string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<File[]>
) {
  res.status(200).json([
    {
      name: 'test'
    }
  ])
}