const request = require('request')

const forecast = (lat, lon, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=a2226a54f2676b80ebb9bb6e190578eb&query=' + lat + ',' + lon + '&units=f'

    request({ url, json: true }, (error, { body }) => {
        
        if (error) {
            callback('Unable to connect to weather service', undefined)
        } else if (body.error) {
            callback('Unable to find the location. Please try another search.', undefined)
        } else {
            callback(undefined, 
            body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees outside. It feels like ' + body.current.feelslike + '. The humidity is ' + body.current.humidity + '%.')
        }
    })
}

module.exports = forecast