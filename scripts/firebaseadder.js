var visits = firebase.database().ref('Visits');


function registerVisit(){
  /*$.getJSON("http://jsonip.com?callback=?", function (data) {
        this.ipAddress = data.ip;

  });
  alert("Your ip address: " + ipAddress);*/
  $.getJSON('https://ipapi.co/json/', function(data) {
  var JSONObject = JSON.parse(JSON.stringify(data,null,2));
  //console.log(JSON.stringify(data, null, 2));
  //console.log(JSONObject.ip);
  //console.log(JSONObject.city);
  //console.log(JSONObject.country_name);
  saveVisit(JSONObject.ip,JSONObject.city,JSONObject.country_name);
});
}
function saveVisit(IPAddress,City,Country){
  var newVisit = visits.push();
  newVisit.set({
    IPAddress: IPAddress,
    Country: Country,
    City: City
  })
}
