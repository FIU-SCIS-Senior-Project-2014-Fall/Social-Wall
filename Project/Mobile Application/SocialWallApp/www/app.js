//AngularJS Controllers
var myApp = angular.module('myApp', ['onsen.directives']);

    myApp.controller("RSSFeedController", function($http, $scope) {
        
    $scope.feedURL = "";
    $scope.currentFeedName = "";
    
    $scope.loadRSS = function() 
    {
        if($scope.feedURL.length > 0)
        {
            $http.get("http://ajax.googleapis.com/ajax/services/feed/load", { params: { "v": "1.0", "q": $scope.feedURL , "num": "30" } })
            
            .success(function(data) 
            {
                $scope.entries = data.responseData.feed.entries;
                $scope.currentFeedName = data.responseData.feed.title;
                $scope.content = data.responseData.feed.content;

                
            })
            
            .error(function(data) 
            {
                $scope.feedURL = "Error: Incorrect URL";
                console.log("ERROR: " + data);
            });
        }
        else
        {
            $scope.feedURL = "Error: Incorrect URL";
        }
    }
    

});

/* Google Feed API Response
{
  "responseData": {
    "feed": {
      "feedUrl": "",
      "title": "",
      "link": "",
      "author": "",
      "description": "",
      "type": "rss20",
      "entries": [
        {
          "title": "",
          "link": "",
          "author": "",
          "publishedDate": "",
          "contentSnippet": "",
          "content": "",
          "categories": [
            ""
          ]
        }
      ]
    }
  },
  "responseDetails": null,
  "responseStatus": 200
}
*/
 