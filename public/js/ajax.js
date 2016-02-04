var xmlhttp = new XMLHttpRequest();
var url = "/api/orders";

xmlhttp.onreadystatechange = function() {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        var myArr = JSON.parse(xmlhttp.responseText);
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
    var out = "";
    var i;
    for(i = 0; i < arr.length; i++) {
    	console.log(arr[i].name);
        out += '<a href="#">' +
        arr[i].id + ' '+ arr[i].name +'</a><br>';
    }
    document.getElementById("id01").innerHTML = out;
}