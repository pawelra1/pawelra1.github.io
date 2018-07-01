'use strict';

//definicja funkcji ajax
function ajax(method, url) {

    var httpReq = new XMLHttpRequest();

    httpReq.open( method, url );

    // stan połączenia
    httpReq.onreadystatechange = function () {

        if (httpReq.readyState == 4) {
            if (httpReq.status == 200) {
                var returnData = httpReq.resonseText;
                var returnJSONData = JSON.parse(returnData);

                console.log(returnData);
                console.log(returnJSONData);

                httpReq = null;
            }
        }
    }

httpReq.send();
}

ajax( "GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl" );
ajax( "GET", "http://echo.jsontest.com/student1/rafal/student2/agata" );