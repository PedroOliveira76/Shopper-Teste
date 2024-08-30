import {NextFunction, Request, Response} from 'express'

export function erroHandler(err:any,req:Request, res:Response, next:NextFunction){
    console.log(err.stack)
    res.status(err.status)
    res.json({
        message: err.message
    })
}