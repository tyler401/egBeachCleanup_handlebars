const imageContainer = $("#image-container");
const images = ["images/trash.png", "images/turtles.webp"];
const textContainer = $("#text-container");
let currentImage = 0;
let currentText=0;
const texts = [
    "Trash on the beach is a major issue are local beaches are facing! Are number one job is to help clean our beaches. We perform routine cleanups to help as much as we can!",
    "By cleaning our beaches we are protecting the ecosystem for thousdands of marine animals."
  ];

$(window).on("scroll", function() {
    const scrollPercentage = ($(window).scrollTop() / ($(document).height() - $(window).height())) * 100;
    
    if (scrollPercentage < 40) {

      currentImage = 0;
      currentText = 0;
    } else if( scrollPercentage >55) {
      currentImage = 1;
      currentText = 1;
    }
  
    imageContainer.html(`<img src="${images[currentImage]}" alt="Beach cleanup">`);
    textContainer.html(`<p>  <strong>${texts[currentText]} </strong></p>`);


});




    $.ajax({
      url: "Accomplishments.xml",
      success: function(data) {
        var $Accomplishments = $(data).find('accomplishments');
        $('#text-accomplishments').append($Accomplishments);
      }
    });

