import fetch from 'node-fetch'

const baseUrl = `https://api.trello.com/1/lists/?`
const token = '03b54776ef34e5946ae20265152e76c55240aa1470e4562eb914c88cb75ad8aa'
const key = '34e978abaa5d55429964b9eea6308ccb'

export const listPost = async(req,res) =>{
    const {name, idBoard} = req.body;

    let reqUrl = `${baseUrl}name=${name}&idBoard=${idBoard}&token=${token}&key=${key}`
    fetch(reqUrl, 
        {method: 'POST'})
        .then(res => res.json())
        .then(json => res.status(200).json(json))
        .catch(err => console.log(err))
        
}