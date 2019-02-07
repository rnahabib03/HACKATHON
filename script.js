$("#star").click(function(){
    $("#burn").show();
    $("#begin").hide();
    $("#2").show();
});
$("#bo").click(function(){
    $("#bo").hide();
    $("#in").hide();
    $("#tweet").css("visibility","visible");
    $("#score").css("visibility","visible");
    $("#f").css("visibility","visible");
    $("#sco").css("visibility","visible");

});
$("#q").dblclick(function(){
    $("#q").hide();
    $("#q").show(1500);
});
$("#w").dblclick(function(){
    $("#w").hide();
    $("#w").show(1500);
});
$("#e").dblclick(function(){
    $("#e").hide();
    $("#e").show(1500);
});
$("#r").dblclick(function(){
    $("#r").hide();
    $("#r").show(1500);
});
document.getElementById('q').ondblclick=function(){
    var score = parseInt(document.getElementById("score").innerHTML);
    score++;
    document.getElementById("score").innerHTML = score;
};
document.getElementById('w').ondblclick=function(){
    var score = parseInt(document.getElementById("score").innerHTML);
    score++;
    document.getElementById("score").innerHTML = score;
};
document.getElementById('e').ondblclick=function(){
    var score = parseInt(document.getElementById("score").innerHTML);
    score++;
    document.getElementById("score").innerHTML = score;
};
document.getElementById('r').ondblclick=function(){
    var score = parseInt(document.getElementById("score").innerHTML);
    score++;
    document.getElementById("score").innerHTML = score;
};
function myFunction() {
  setTimeout(function(){ alert ("Times Up! Check your Score Below!!"); }, 30000);
}
$("#f").ready(function(){
    $("#score").bind("click");
});

function resetScore(){
    var score=0;
    score = 0;
}

