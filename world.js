var countrySearch;
var citySearch;
var rsltSection;
var file = 'world.php';
var country = "?country="
var city = "&context="


window.onload = function() {
    countrySearch = document.getElementById("cntry");
    countrySearch.addEventListener("click", BtnHandler);
	citySearch = document.getElementById("city");
    citySearch.addEventListener("click", cityHandler);
    bxSEARCH = document.getElementById("country");
    rsltSection = document.querySelector("#result");
}

function websiteName(){
	let ctry = country+bxSEARCH.value.trim();
	let site = file+ctry
	return site;	
}

function BtnHandler(e){
    e.preventDefault();
	let site = websiteName();
    fetch(site).then(response => response.text()).then(data => rsltSection.innerHTML = data);
}


function cityHandler(e){
	e.preventDefault();
	citySite = websiteName()+city+"cities";
	fetch(citySite).then(response => response.text()).then(data => rsltSection.innerHTML = data);
	
}