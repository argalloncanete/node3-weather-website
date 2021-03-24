const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "http://api.weatherstack.com//current?access_key=5e5cd0bb1b7cf4d4ce3569caf2baf461&query=" +
    latitude +
    "," +
    longitude +
    "&units=f";

  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unable to connect to weather service!", undefined);
    } else if (body.error) {
      callback("Unable to find location", undefined);
    } else {
      callback(
        undefined,
        "Since " +
          body.current.observation_time +
          " " +
          "it was " +
          body.current.weather_descriptions[0] +
          ". The humidity was " +
          body.current.humidity +
          "ρv " +
          " and it is currently " +
          body.current.temperature +
          " degrees out. There is a  " +
          body.current.feelslike +
          "% chance of rain."
      );
    }
  });
};
module.exports = forecast;
