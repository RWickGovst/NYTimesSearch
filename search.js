// worked with the video
// 
// ---------------------------------------
// variables
var queryTerm = "";
var numResults = 0;
var startYear = 0;
var endYear = 0;


var authKey = "ahJHkqfNgN6OcOzqeCRTjmoyFpgO8SD4";
// if (start === "" || end === "") {
//     start = "20120101";
//     end = "20160309";

// url base ----------
    var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey;
    
    var articleCounter = 0;

    function runQuery(numArticles, queryURL) {
        // ajax function
        $.ajax({
            url: query,
            method: "GET"

        }).done(function (NYTData) {
            console.log(queryURL);
            console.log(NYTData);
            
    $("#searchBtn").on("click", function () {
        runQuery(10, "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=ahJHkqfNgN6OcOzqeCRTjmoyFpgO8SD4&q=Obama");
        // alert("test");
        // term = $("#search").val().trim();
        // console.log(term);
        return false;
    })
        })
}
// break down the data into the fields needed
// dealing with edge cases