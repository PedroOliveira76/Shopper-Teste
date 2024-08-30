import {Response, Request} from 'express'

export function notFoundHandler(req:Request, res:Response, err:any){
   console.log(err.stack);
   res.status(err.status)
   res.json({
    message:err.message
   })
    
}