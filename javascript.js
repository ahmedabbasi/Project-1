var channelName= "IrfanJunejo"

$(document).ready (function(){
    function pid(){
        var queryURL="https://www.googleapis.com/youtube/v3/channels?part=contentDetails&forUsername="+channelName+"&key=AIzaSyC30mnkcq5ly-Nr-kHMh0f05WwzzVtuO3Q"

        $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {
            console.log(response);



          })
    }
      
    function vid(){
        var queryURL="https://www.googleapis.com/youtube/v3/search?part=snippet&q="+channelName+"&key=AIzaSyC30mnkcq5ly-Nr-kHMh0f05WwzzVtuO3Q&maxResults=3"


    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        var result= response;
        var vidId=result.items[1].id.videoId;
        var object='<iframe src =\"//www.youtube.com/embed/'+vidId+'\"></iframe>';
        $("#results").append(object);
    
      })
      
    }
    vid();
}) 