$(".slider").click(function(){
  var x = document.getElementById("basic-price");
  if (x.innerHTML === "$199.99") {
    x.innerHTML = "$19.99";
  } else {
    x.innerHTML = "$199.99";
  }

  var x = document.getElementById("professional-price");
  if (x.innerHTML === "$249.99") {
    x.innerHTML = "$24.99";
  } else {
    x.innerHTML = "$249.99";
  }

  var x = document.getElementById("master-price");
  if (x.innerHTML === "$399.99") {
    x.innerHTML = "$39.99";
  } else {
    x.innerHTML = "$399.99";
  }

  $(".basic-box").toggleClass("basic-toggle");
  $(".professional-box").toggleClass("professional-toggle");
  $(".master-box").toggleClass("master-toggle");

});
