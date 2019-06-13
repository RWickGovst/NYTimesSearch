$("#run-search").on("click", function (e) {
    e.preventDefault();
    // console.log("hi");
    var term = $("#search-term").val().trim();
    // console.log(term);
    var start = $("#start-year").val();
    var end = $("#end-year").val();

    console.log(start + end);
    var num = $("#article-count").val();
    // console.log(num);



    var apiKey = "ahJHkqfNgN6OcOzqeCRTjmoyFpgO8SD4";
    if (start === "" || end === "") {
        start = "20120101";
        end = "20160309";

        var query = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + term + "&api-key=" + apiKey + "&begin_date=" + start + "&end_date=" + end + "";
        console.log(query);

        $.ajax({
            url: query,
            method: "GET"
        }).then(function (res) {
            console.log(res.response.docs);
            for (let i = 0; i < num; i++) {
                $("#article-section").append(res.response.docs[i]);
                console.log(res.response.docs[i]);
            }

        })
    }
    else {
        start = start + "0101";
        end = end + "1231";
        var query = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + term + "&api-key=" + apiKey + "&begin_date=" + start + "&end_date=" + end + "";
        console.log(query);

        $.ajax({
            url: query,
            method: "GET"
        }).then(function (res) {
            console.log(res);

        })
    }
})