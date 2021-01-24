let request = new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload = function()  {
    let countrydata = JSON.parse(this.response);
    console.log(countrydata);
   
    }
    try{
        alert('line is incorrect please check');
        lala;
        alert('line is correct please check');
      
    }
    catch (error) {
    alert('name' +error.name)
    alert('message' +error.message)
    alert('stack' +error.stack)

    }