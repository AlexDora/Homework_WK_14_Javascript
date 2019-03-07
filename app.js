var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#date");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");
var $resetBtn = document.querySelector("#reset");

$searchBtn.addEventListener("click", SearchButton);
$resetBtn.addEventListener("click", ResetButton);

var filteredData = data;



function Table() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredData.length; i++) {

    var ufodata = filteredData[i];
    var fields = Object.keys(ufodata);
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = ufodata[field];
    }
  }
}

function SearchButton() {


  var filterDate = $dateInput.value.trim();
  if (filterDate != "") {
    filteredData = data.filter(function (ufodata) {
      var Date_info = ufodata.datetime;
      return Date_info.includes(filterDate);
    });
  };
  var filterCity = $cityInput.value.trim().toLowerCase();
  if (filterCity != "") {
    filteredData = filteredData.filter(function (ufodata) {
      var City_info = ufodata.city;
      return City_info === filterCity;
    });
  };
  var filterState = $stateInput.value.trim().toLowerCase();
  if (filterState != "") {
    filteredData = filteredData.filter(function (ufodata) {
      var State_info = ufodata.state;
      return State_info === filterState;
    });
  };
  var filterCountry = $countryInput.value.trim().toLowerCase();
  if (filterCountry != "") {
    filteredData = filteredData.filter(function (ufodata) {
      var Country_info = ufodata.country;
      return Country_info === filterCountry;
    });
  };
  var filterShape = $shapeInput.value.trim().toLowerCase();
  if (filterShape != "") {
    filteredData = filteredData.filter(function (ufodata) {
      var Shape_info = ufodata.shape;
      return Shape_info === filterShape;
    });
  };
  Table();
};


function ResetButton() {
  filteredData = data;
  $dateInput.value = "";
  $cityInput.value = "";
  $stateInput.value = "";
  $countryInput.value = "";
  $shapeInput.value = "";
  Table();
}

Table();

