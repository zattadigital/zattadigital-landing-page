// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import {sendContactEmail} from '../../libs/email';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {

    if(req.method === 'POST') {

        const {data} = req.body;

        const email:any = await sendContactEmail(data);

        const {ok} = email;

        if(ok) {
            return res.status(200).json({})
        }
        return res.status(400).json({})
    }

    return res.status(400).json({})
}
