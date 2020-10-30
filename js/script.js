var ipinfo;

var region;
var season;

$.getJSON("http://ipinfo.io", function (data) {

            $("#info").html("City: " + data.city + " ,County: " + data.country + " ,IP: " + data.ip + " ,Location: " + data.loc + " ,Organisation: " + data.org + " ,Postal Code: " + data.postal + " ,Region: " + data.region + "")
            $("#info").html("City: " + data.city)
            $("#info1").html("Country: " + data.country)
            $("#info2").html("Ip: " + data.ip)
            $("#info3").html("Location: " + data.loc)
            $("#info4").html("Organisation: " + data.org)
            $("#inf5o").html("Postal Code: " + data.postal)
            $("#info6").html("Region: " + data.region)
    //city=JSON.stringify(data.city);
    //city=data.city;
   // city=data.city;
   // region=data.region;
})

//window.alert(city);
var y;
function myFunction() {
  var d = new Date();
  var n = d.getMonth();
  window.y=d.getFullYear();
  var z=n+1;
  if(z>=6 && z<=10)
  {
      m="Kharif";
  }
  if(z>=10 && z<=11)
  {
      m="Rabi";
  }
  if(z>=3 && z<=5)
  {
      m="Zaid";
  }
  document.getElementById("season").innerHTML = (m);
    
}

smyFunction();
//window.alert(m);

//var j=document.getElementById("season");
//window.alert(j);

var d1 = new Date();
var n1 = d1.getMonth();
var y1 = d1.getFullYear();

window.alert(m.toString());
window.alert(y1.toString());
var area;
function submitForm()
{
    window.area=parseInt((document.getElementById("area1")).value);
    //window.alert(area.toString());
    var y_maize=1.02495*parseInt(y)*window.area;
    var y_wheat=0.38135*parseInt(y)*window.area;
    var y_rice=1.50346*parseInt(y)*window.area;
    var ans=Math.max(y_maize,Math.max(y_wheat,y_rice));
    if(ans==y_maize)
        {
            //window.alert("Maize");
            document.getElementById("cropname").innerHTML="Maize";
            
        }
    else if (ans==y_wheat)
        {
            //window.alert("Wheat");
            document.getElementById("cropname").innerHTML="Wheat";
        }
    else{
        //window.alert("Rice");
        document.getElementById("cropname").innerHTML="Rice";
        document.getElementById("rainfall").innerHTML="175-300 cm";
        document.getElementById("temperature").innerHTML="20-27 C ";
        document.getElementById("effort").innerHTML="High";
        document.getElementById("myImg").src="assets/img/background/img5.jpeg";
        
    }
    //window.alert(ans);
}


//city;
//region
//m;

var y_maize=1.02495*parseInt(y)*area;
var y_wheat=0.38135*parseInt(y)*area;
var y_rice=1.50346*parseInt(y)*area;
var ans=Math.max(y_maize,Math.max(y_wheat,y_rice));
window.alert(ans.toString());
                            



myFunction();
