import {NextApiRequest, NextApiResponse} from "next";

const friends = [
    {
        "id": 1,
        "clashId": "9GU0880R",
        "name": "Moi"
    },
    {
        "id": 2,
        "clashId": "2GV8PRQ89",
        "name": "Hablih"
    },
    {
        "id": 3,
        "clashId": "2YYJ9RP9",
        "name": "Benji"
    }
];

const FriendApi = (req: NextApiRequest, res: NextApiResponse) => {
    if (!req.headers.authorization){
        res.status(403).json({message: "Not authorized"});
    } else {
        res.status(200).json({friends});
    }
};

export default FriendApi;