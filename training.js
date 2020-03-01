var cron = require('node-cron');
cron.schedule('0,5,10,15,20,25,30,35,40,45,50,55 * * * * *', function(){


let url1 = ["http://www.yahoo.com","http://www.google.com","http://www.ibm.com"];
var today = new Date();
var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds() + today.getMilliseconds();
var datetime = date+' '+time;

let datetimeelk = new Date().toISOString().substr(0, 25);

let response_code = "404";


for(let i=0; i<url1.length; i++ ){
  let request = require('request');  

  request(url1[i], {timeout: 2000}, function (error, response, body) {

    if(response){
    if (response.statusCode > 0){
      response_code = response.statusCode;
      datetimeelk = new Date().toISOString().substr(0, 25);

      console.log(datetimeelk +' : ' + url1[i] + ' : ', response_code); // Print the response status code if a response was received
    }else{
      response_code = "404";
      console.log(datetimeelk +' : ' + url1[i] + ' : ', response_code + ' Error1 ' + error);
    }
  }else{
    response_code = "404";
    console.log(datetimeelk +' : ' + url1[i] + ' : ', response_code + ' : Error ' + error);
  }


    response_code = "404";
    
  })

}
});
