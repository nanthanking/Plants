// changing images
$("document").ready(function(){
    $('#next-click').click(function(){
      var image = $('#image-on-hand');
      image.attr('src','../assets/images/wallpaper4.jpeg');
    });
  
    $('#previous-click').click(function(){
      var image = $('#image-on-hand');
      image.attr('src','../assets/images/plant-inside-hand.png');
    });
  });

//dynamic 
var output = "";
$.ajax({
  type:"GET",
  url: "https://mocki.io/v1/846703d9-bfc2-4c6d-baba-88a89735df60",
  success:  function(items){
    items.map((item) =>{
      output+=` <div class="gallary-image-wrapper">
      <img class="photos" src="${item.image}" alt="plants-images"/>
      <div class="amount">
          <p>${item.plantName}</p>
          <p>${item.rate}</p>
      </div>
    </div>`
    });
    $('.gallery').html(output);
  }
})