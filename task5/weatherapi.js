
let request = new XMLHttpRequest();

request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.open('GET',url,true);



request.send();
request.onload = function() {
    let countrydata = JSON.parse(this.response);
    
  for(i=0;i<countrydata.length;i++)
  { var a =  'api.openweathermap.org/data/2.5/weather?lat={';
    var b = countrydata[i].latlng[0];
    var c = '  }&lon={';
    var d = countrydata[i].latlng[1];
    let e = '}&appid={f7b05e887b3649073bb8376fda646874}';
    var url = a+b+c+d+e; 
    {
        let request = new XMLHttpRequest();
        request.open('GET',url,true);
        request.send();
request.onload = function() {
    let data = JSON.parse(this.response);
    for(i=0;i<data.length;i++){
        
    }
    }
    
    return url;
}

}
