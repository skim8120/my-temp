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
        var baseURL = "https://api.nytimes.com/svc/movies/v2/reviews/picks.json?order=by-opening-date&api-key=";
        var key = "z1FTPhW4JqWZRfbsoD8Vrm6DnZD0qMQS";
        //var parameter = "picks,integer,by-opening-date";
        var url = baseURL + key;// + parameter;
        console.log(url);

        $.ajaxPrefilter(function(options) {
            if (options.crossDomain && jQuery.support.cors){
                options.url = corsServer + options.url;
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
                var response = JSON.parse(result);

                $("#display_title").text(response.display_title);
                $("#headline").text(result.headline);
                $("#byline").text(result.byline);
                $("#publicatoin_date").text(result.publication_date);
                $("#linkUrl").text(result.link.url);

            },
            error: function(xhr, status, error){
                console.log("Error");
                console.log(xhr.statusText);
                console.log(xhr.responseText);
                console.log(status);
                console.log(error);
            }


        });

        // $.get(baseURL + service + parameter, function(result){
        //     //do something when success
        //     var response = JSON.parse(result);
        //     var div = $("#airpot");
        //     div.append("<p>airport name=" + response.Name + "</p>");
        //     div.append("<p>airport city=" + response.City + "</p>");
        //     div.append("<p>airport state=" + response.State + "</p>");
        //     div.append("<p>airport status=" + response.Status + "</p>");
        // }, "json");


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

app.initialize();g