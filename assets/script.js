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

// Replacemenet icon array
var icons = [
  {
    code: "01",
    day: "fas fa-sun",
    night: "fas fa-moon",
  },
  {
    code: "02",
    day: "fas fa-cloud-sun",
    night: "fas fa-cloud-moon",
  },
  {
    code: "03",
    day: "fas fa-cloud",
    night: "fas fa-cloud",
  },
  {
    code: "04",
    day: "fas fa-cloud-sun",
    night: "fas fa-cloud-moon",
  },
  {
    code: "09",
    day: "fas fa-cloud-rain",
    night: "fas fa-cloud-rain",
  },
  {
    code: "10",
    day: "fas fa-cloud-showers-heavy",
    night: "fas fa-cloud-showers-heavy",
  },
  {
    code: "11",
    day: "fas fa-bolt",
    night: "fas fa-bolt",
  },
  {
    code: "13",
    day: "fas fa-snowflake",
    night: "fas fa-snowflake",
  },
  {
    code: "50",
    day: "fas fa-smog",
    night: "fas fa-smog",
  },
];

// Initialize application
init();

function init() {
  // Set current date in page header
  $("#today").text(currentDate);

  // Set initial search history visibility conditions
  if (window.innerWidth >= 578) {
    $("#search-history").addClass("show");
    $("#collapse-search-history").hide();
  }

  // Load cities in local storage back into application
  getSearchHistory();
}
