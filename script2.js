
var estados = [{name:"Alabama", positive:206567, deaths:3120}, {name:"Alaska", positive:20715, deaths:87},
                {name:"Arizona", positive:263445, deaths:6198}, {name:"Arkansas", positive: 124235, deaths: 2112},
                {name:"California", positive:994341, deaths: 18073}, {name:"Colorado", positive:139246, deaths: 2469},
        {name:"Connecticut", positive:82987, deaths:4707}, {name:"Delawere", positive:27112, deaths: 722},
      {name:"Washington D.C", positive:18173,deaths:657}, {name:"Florida",positive:852166, deaths:17247},
    {name:"Georgia", positive:396498, deaths:8507}, {name:"Hawaii", positive:16193, deaths:221},
  {name:"Idaho",positive:76010, deaths:720},{name:"Illinois", positive:512688, deaths:10658}, {name:"Indiana",positive:221894, deaths:4731},
{name:"Iowa", positive:163827, deaths:1898},{name:"Kansas",positive:105760,deaths:1181},{name:"Kentucky", positive:127472,deaths:1674},
{name:"Louisiana",positive:194702,deaths:6058},{name:"Maine",positive:8060,deaths:156},{name:"Maryland",positive:157149, deaths:4233}, {name:"Massachusetts", positive:174881, deaths:10184},
{name:"Michigan", positive:245005,deaths:8095},{name:"Minnesota",positive:189735,deaths:2752},{name:"Mississippi", positive:128138,deaths:3480},{name:"Missouri",positive:226225,deaths:3375},
{name:"Montana",positive:41219,deaths:468},{name:"Nebraska",positive:87733,deaths:741},{name:"Nevada",positive:112602,deaths:1863},{name:"New Hampshire",positive:12919,deaths:489},
{name:"New Jersey",positive:262230,deaths:16461},{name:"New Mexico",positive:57547,deaths:1144},{name:"New York", positive:540897,deaths:33373},{name:"North Carolina",positive:298089,deaths:4685},
{name:"North Dakota",positive:56357,deaths:679},{name:"Ohio",positive:261482,deaths:5547},{name:"Oklahoma",positive:140157,deaths:1451},{name:"Oregon",positive:51909,deaths:741},
{name:"Pennsylvania",positive:244046,deaths:9156},{name:"Rhode Island",positive:38798,deaths:1237},{name:"South Carolina",positive:187738,deaths:4062},{name:"South Dakota",positive:57334,deaths:540},
{name:"Tennessee",positive:284725,deaths:3639},{name:"Texas",positive:1038135,deaths:19423},{name:"Utah",positive:137523,deaths:672},{name:"Vermont",positive:2462,deaths:59},
{name:"Virginia",positive:194912,deaths:3726},{name:"Washington",positive:126091,deaths:2594},{name:"West Virginia",positive:29316,deaths:546},{name:"Wisconsin",positive:293862,deaths:2497},
{name:"Wyoming",positive:19242,deaths:127}]

function printPanel(){
  var table = document.getElementById("myTable");
  for(var i=0; i<estados.length;i++){
    var row = table.insertRow(i+1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    cell1.innerHTML = estados[i].name;
    cell2.innerHTML = estados[i].positive;
    cell3.innerHTML = estados[i].deaths;
  }
}

$(document).ready(function(){
  printPanel();
});
