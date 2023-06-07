
const express = require('express')
const app = express()
const router = express.Router()
const cors = require('cors')
const https = require('https')

//middleware
app.use(express.json()) //all request comes in passed to req 
// app.use(express.urlencoded({ extended: true}));
app.use(cors());

// const postdata = async(req,res)=>{
//     const city = req.body.city
//     const apiKey = '66ddf46b0702049a55a3e32695007c02'
//     const url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apiKey+'&units=metric'

//     https.get(url,(response)=>{
//                response.on('data',(data)=>{
//                 try{  
//                     const weatherData = JSON.parse(data)
//                     const temp = weatherData.main.temp
//                     res.json(`The temprature in ${city} is ${temp}`)
//                 }
//                 catch(error){
//                     res.json('Invalid City Name')
//                 }
//                 })
//               })
//  }
 
// const routeWeather = router.post('/',postdata)
// app.use('/weather',routeWeather)

app.post('/weather',(req,res)=>{
    const city = req.body.city
    const apiKey = '66ddf46b0702049a55a3e32695007c02'
    const url = 'https://api.openweathermap.org/data/2.5/weather?q='+city+'&appid='+apiKey+'&units=metric'

    https.get(url,(response)=>{
               response.on('data',(data)=>{
                try{  
                    const weatherData = JSON.parse(data)
                    const temp = weatherData.main.temp
                    res.json(`The temprature in ${city} is ${temp}`)
                }
                catch(error){
                    res.json('Invalid City Name')
                }
                })
              })

})
app.listen(4000,()=>{
    console.log('Connected')
})