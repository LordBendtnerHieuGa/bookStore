$(function() {
    $('a.confirmDelete').on('click', function() {
        if(!confirm('Confirm delete')) 
            return false;
        
    });

      
    if ($("[data-fancybox]").length) {
        $("[data-fancybox]").fancybox();
    }

});

// Go to top

//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


