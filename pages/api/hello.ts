import { NextApiRequest, NextApiResponse } from 'next';

type Data = {
    name: string;
};

export default (_: NextApiRequest, res: NextApiResponse<Data>): void => {
    res.status(200).json({ name: 'Pablo Porto' });
};
