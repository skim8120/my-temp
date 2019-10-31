/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// $(document).ready(function(){
//     var baseURL = "https://soa.smext.faa.gov/asws/";
//         var service = "api/airport/status/";
//         var parameter = "IND"

//         $.get(baseURL + service + parameter, function(result){
//             //do something when success
//             var response = JSON.parse(result);
//             var div = $("#airpot");
//             div.append("<p>airport name=" + response.Name + "</p>");
//             div.append("<p>airport city=" + response.City + "</p>");
//             div.append("<p>airport state=" + response.State + "</p>");
//             div.append("<p>airport status=" + response.Status + "</p>");
//         }, "json");
// });
$.support.cors = true;

var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    onDeviceReady: function() {
        this.receivedEvent('deviceready');

        var corsServer = "https://cors-anywhere.herokuapp.com/"
        var baseURL = "https://api.nytimes.com/svc/";
        var parameter1 = "movies/v2/reviews/picks.json?order=by-opening-date&api-key=";
        var parameter2 = "topstories/v2/science.json?api-key=";
        var key = "z1FTPhW4JqWZRfbsoD8Vrm6DnZD0qMQS";
        var url = baseURL + parameter1 + key;
        var url2 = baseURL + parameter2 + key;
        console.log(url);

        $.ajaxPrefilter(function(options) {
            if (options.crossDomain && jQuery.support.cors){
                options.url = corsServer + options.url;
                options.url2 = corsServer + options.url2;
                console.log(options.url);
            }
        });

        $.ajax({
            url: url,
            type: 'GET',
            dataTyps:'json',
            headers: {'X-Requested-With': 'XMLHttpRequest'},
            crossDomain:true,
            success: function(result){
                console.log("Success");
                console.log(result);
                //var response = JSON.parse(result);
             for(var i = 0; i <= 4; i++){

                $("#weather").append("<b><h1>" + result.results[i]['display_title']  + "</h1></b><br>");
                $("#weather").append("<p>" + "Headline: " + result.results[i]['headline'] + "</p>");
                $("#weather").append("<p>" + "Byline: " + result.results[i]['byline'] + "</p>");
                $("#weather").append("<p>" + "publication_date: " + result.results[i]['publication_date'] + "</p>");
                $("#weather").append("<p>" + "link Url: " + "<a href=\"" + result.results[i].link.url + "\">"+ result.results[i].link.url + "</a>" +"</p><hr><br>");


                }

            },
            error: function(xhr, status, error){
                console.log("Error");
                console.log(xhr.statusText);
                console.log(xhr.responseText);
                console.log(status);
                console.log(error);
            }


        });


         $.ajax({
                    url: url2,
                    type: 'GET',
                    dataTyps:'json',
                    headers: {'X-Requested-With': 'XMLHttpRequest'},
                    crossDomain:true,
                    success: function(result2){
                        console.log("Success");
                        console.log(result2);
                        //var response = JSON.parse(result);

                     for(var i = 0; i <= 4; i++){

                        $("#story").append("<b><h1>" + result2.results[i]['title']  + "</h1></b><br>");
                        $("#story").append("<p>" + "Byline: " + result2.results[i]['byline'] + "</p>");
                        $("#story").append("<p>" + "publication_date: " + result2.results[i]['published_date'] + "</p>");
                        $("#story").append("<p>" + "link Url: " + "<a href=\"" + result2.results[i]['url'] + "\">"+ result2.results[i]['url'] + "</a>" +"</p><hr><br>");


                    }

                    },
                    error: function(xhr, status, error){
                        console.log("Error");
                        console.log(xhr.statusText);
                        console.log(xhr.responseText);
                        console.log(status);
                        console.log(error);
                    }


                });
/*
        $.get(url2, function(result2){
        //     //do something when success
             console.log("Success");
             alert("success");
             var response = JSON.parse(result2);

             for(var i = 0; i <= 4; i++){
             var div = $("#story");
               div.append("<p>airport name=" + response.results[i]['title'] + "</p>");
               div.append("<p>airport city=" + response.City + "</p>");
               div.append("<p>airport state=" + response.State + "</p>");
               div.append("<p>airport status=" + response.Status + "</p>");
               }
           }, "json");
*/

    },

    // Update DOM on a Received Event
    receivedEvent: function(id) {
        // var parentElement = document.getElementById(id);
        // var listeningElement = parentElement.querySelector('.listening');
        // var receivedElement = parentElement.querySelector('.received');

        // listeningElement.setAttribute('style', 'display:none;');
        // receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

app.initialize();