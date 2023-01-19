// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {sendContactEmail} from '../../libs/email';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if(req.method === 'POST') {

        const {data} = req.body;

        const email = await sendContactEmail(data);

        const {ok = false} = email;

        if(ok) {
            res.status(200).json({})
        }
    }

    res.status(400).json({})
}
