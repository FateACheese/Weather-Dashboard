// Init local storage array and current city holding variable
var cities = [];
var currentCity;

// Init day.js
var now = dayjs();
var currentDate = now.format("dddd MMM. D, YYYY");

// API Query Parameters
var baseURL = "https://api.openweathermap.org/data/2.5/";
var APIKey = "f4d6848eb3a488816cecbd2392d8a108";
var units = "imperial";
