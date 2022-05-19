import { Request, Response } from 'express';

import rp from 'request-promise';
import scrape from 'website-scraper';
import cheerio from 'cheerio';


export const getLojas = async (req: Request, res: Response) => {

    const page: any             = req.query.page 

    const options = {
        uri: 'https://cursounhasdefibra.com.br/',
        transform: function (body): any {
          return cheerio.load(body)
        }
      }
  
    let ret = await rp(options)

    

    for (const key in ret('img')) {
      try {
        
        
        console.log(ret('img')[key].attribs.src)
        ret('img')[key].attribs.src = `https://cursounhasdefibra.com.br/${ret('img')[key].attribs.src}`
        //ret('img')[key].attr("src", `https://cursounhasdefibra.com.br/${ret('img')[key].attribs.src}`); 
        //ret.setHeader('Content-Type', 'application/json')
        
      } catch (error) {
        console.log(error)
      }
    
    }


    console.log(ret.load())
  
    
    return res.send(ret);
} 


