import { Request, Response } from 'express'

export let main = (req: Request, res: Response) => {
    // code here
    let r = [{ name: 'ehigiepaul' }]
    Array.from(r).forEach((rs) => {
        rs
    })

    res.send(r[0])



}

