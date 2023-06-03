var lastScrollTop = 0;
window.addEventListener("scroll", function() {
  var st = window.pageYOffset || document.documentElement.scrollTop;
  if (st > lastScrollTop) {
    document.getElementById("bottombar").style.bottom = "-100%";
  } else {
    document.getElementById("bottombar").style.bottom = "0";
  }
  lastScrollTop = st;
}, false);

window.onscroll = function(){
  scrollFunction()
}
function scrollFunction(){
  var sn = document.getElementById("sticky_nav");
     if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100){
        sn.style.top = "0"
     }
     else{
        sn.style.top = "-40px"
     }
}

// '''''

$(document).ready(function() {

   var jobCount = $('#list .in').length;
   $('.list-count').text(jobCount + ' items');

   $("#search-text").keyup(function () {
      //$(this).addClass('hidden');
   
     var searchTerm = $("#search-text").val();
     var listItem = $('#list').children('li');

     var searchSplit = searchTerm.replace(/ /g, "'):containsi('")

       //extends :contains to be case insensitive
   $.extend($.expr[':'], {
   'containsi': function(elem, i, match, array)
   {
     return (elem.textContent || elem.innerText || '').toLowerCase()
     .indexOf((match[3] || "").toLowerCase()) >= 0;
   }
 });
     
     
 $("#list li").not(":containsi('" + searchSplit + "')").each(function(e)   {
  $(this).addClass('hiding out').removeClass('in');
  setTimeout(function() {
      $('.out').addClass('hidden');
    }, 300);
});

$("#list li:containsi('" + searchSplit + "')").each(function(e) {
  $(this).removeClass('hidden out').addClass('in');
  setTimeout(function() {
      $('.in').removeClass('hiding');
    }, 1);
});


  var jobCount = $('#list .in').length;
$('.list-count').text(jobCount + ' items');

//shows empty state text when no jobs found
if(jobCount == '0') {
  $('#list').addClass('empty');
}
else {
  $('#list').removeClass('empty');
}

});
 
                     
 });

 // Get All buttons with attribute data-model
let triggers = document.querySelectorAll("[data-modal]");
let closeBtns = document.getElementsByClassName("btnClose");

// Add event listener for open dialog buttons
triggers.forEach((el) => {
  el.addEventListener("click", () => {
    document.getElementById(el.getAttribute("data-modal")).showModal();
  });
});

// Add event listener for close dialog buttons
Array.from(closeBtns).forEach((el) => {
  el.addEventListener("click", () => {
    el.closest("dialog").close();
  });
});

 const year = document.getElementById("year");

  year.textContent = new Date().getFullYear();

  $('a.stop-video').click(function(){
    $('.youtube-video')[0].contentWindow.postMessage('{"event":"command","func":"' + 'stopVideo' + '","args":""}', '*');
  });

  function openNav() {
    document.getElementById("myNav").style.height = "100%";
  }
  
  function closeNav() {
    document.getElementById("myNav").style.height = "0%";
  }
 
 
 
 
 
 