var cs = "";
var conversation = "";

$("#document").ready(function(){
  $("#inputSubmit").click(function(e){
    e.preventDefault();
    if($("#in").val() !== ""){
    console.log($("#in").val());
    conversation += '<p class="user">' + $("#in").val() + '</p>';
    $("#conversation").html(conversation);
    var myURL;
    if(cs === ""){
      myURL = "http://www.cleverbot.com/getreply?key=CC76znb3bo6rlz-GvH2FHrbWbDA&input=" + $("#in").val();
    } else {
      myURL = "http://www.cleverbot.com/getreply?key=CC76znb3bo6rlz-GvH2FHrbWbDA&input=" + $("#in").val() + "&cs=" + cs;
    }
    $("#in").val("");
    $(window).scrollTop($(document).height());
    $.ajax({
      url : myURL,
      dataType : "json",
      success : function(json) {
        console.log(json);
        cs = json.cs;
        conversation += '<p class="bot">' + json.clever_output + '</p>';
        $("#conversation").html(conversation);
        $(window).scrollTop($(document).height());
	    }

	});
}


  })




})
