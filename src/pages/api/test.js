// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import getConfig from 'next/config';
// define your handler function
export default function handler(req, res) {
    // send a JSON response
    res.status(200).json({ name: 'John Doe' });
}
