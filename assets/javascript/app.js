jQuery.ajaxSetup({
  'beforeSend': function(xhr) {xhr.setRequestHeader("header key", "header value")}
})

$(document).ready (function(){
    $("#go").on("click",function(event){
      event.preventDefault();
      var channelName=$("#channel").val();
      console.log(channelName)
      $(".artist-name").append(channelName);
      
        var queryURL="https://www.googleapis.com/youtube/v3/search?part=snippet&q="+channelName+"&key=AIzaSyC30mnkcq5ly-Nr-kHMh0f05WwzzVtuO3Q&maxResults=6"
   
       $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response);
        var result= response;
        var vidId1=result.items[4].id.videoId;
        var object1='<iframe width=\"100%\" height=\"100%\" src =\"http://www.youtube.com/embed/' +vidId1+ '\"></iframe>';
        var vidId2=result.items[5].id.videoId
        var object2='<iframe width=\"100%\" height=\"100%\"  src =\"http://www.youtube.com/embed/' +vidId2+ '\"></iframe>';
        $("#results1").append(object1);
        $("#results2").append(object2);
      })
    })
}) 