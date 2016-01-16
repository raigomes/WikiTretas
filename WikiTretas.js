/*
#####WIKITRETAS####
Script para descobrir as revisões recorrentes (tretas) entre usuários no Wikipédia.

QUERY: http://quarry.wmflabs.org/query/6875
@input: JSON da query.
*/
var url = "http://quarry.wmflabs.org/run/58341/output/0/json";

var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (xmlhttp.status == 200) {
        var myArr = JSON.parse(xmlhttp.responseText);
        myFunction(myArr);
    }
};

var myFunction = function (arr) {
    var answer = arr.headers[0] + " " + arr.headers[1] + " " + arr.headers[2] + "\n";

    for (var i = 0; i < arr.rows.length-1; i++) {
        for (var j = i+1; j < arr.rows.length; j++) {
            if (arr.rows[i][0] == arr.rows[j][1] && arr.rows[i][0] != arr.rows[i][1] && arr.rows[i][2] == arr.rows[j][2] && arr.rows[i][3] == 0) {
                answer += arr.rows[i][0] + " " + arr.rows[i][1] + " " + arr.rows[i][2] + "\n";
                break;
            }
        }
    }

    alert(answer);
};

xmlhttp.open("GET", url, true);
xmlhttp.send();
