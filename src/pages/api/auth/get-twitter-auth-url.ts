import authController from '@backend/controller/authController';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { method } = req;

  switch (method) {
    case 'GET':
      await authController.getTwitterAuthUrl(req, res);
      break;
    default:
      res.status(405).end();
      break;
  }
}
