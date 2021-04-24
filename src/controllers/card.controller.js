import fetch from 'node-fetch'

const baseUrl = `https://api.trello.com/1/cards/`
const token = '03b54776ef34e5946ae20265152e76c55240aa1470e4562eb914c88cb75ad8aa'
const key = '34e978abaa5d55429964b9eea6308ccb'

export const cardPost = (req,res)=>{
    const {idList, name} = req.body;
    let reqUrl = `${baseUrl}name=${name}&idList=${idList}&token=${token}&key=${key}`
    fetch(reqUrl, 
        {method: 'POST'})
        .then(res => res.json())
        .then(json => res.status(200).json(json))
        .catch(err => console.log(err))
}

export const cardGet = (req,res)=>{
    const {id} = req.params
    console.log(id);
    let reqUrl = `${baseUrl}${id}?&token=${token}&key=${key}`
    fetch(reqUrl, 
        {method: 'GET'})
        .then(res => res.json())
        .then(json => res.status(200).json(json))
        .catch(err => console.log(err))
}