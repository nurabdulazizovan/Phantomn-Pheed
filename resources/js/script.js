/*======================================
                Navbar
======================================*/
const navbar = document.querySelector('.navbar')

navbar.querySelector('.toggle').addEventListener('click',()=>{
	
	navbar.classList.toggle('collapsed')
	
})



window.addEventListener('scroll',(e)=>{
	
	let windowY = window.pageYOffset
	
	let navbarHeight = document.querySelector('.navbar').offsetHeight
	
	if(windowY>navbarHeight) navbar.classList.add('sticky')
	else navbar.classList.remove('sticky')
	
	
	
	
})

/*======================================
            image hover
======================================*/

/* Demo purposes only */
var snippet = [].slice.call(document.querySelectorAll('.hover'));
if (snippet.length) {
  snippet.forEach(function (snippet) {
    snippet.addEventListener('mouseout', function (event) {
      if (event.target.parentNode.tagName === 'figure') {
        event.target.parentNode.classList.remove('hover')
      } else {
        event.target.parentNode.classList.remove('hover')
      }
    });
  });
}




/*======================================
            blog hover
======================================*/
  /* Demo purposes only */
  $(".hover").mouseleave(
    function () {
      $(this).removeClass("hover");
    }
  );

/*======================================
            about hover
======================================*/
$(".hover").mouseleave(
  function () {
    $(this).removeClass("hover");
  }
);
/*============================================================================
                               load more
  ============================================================================*/



$(function () {
    $(".col-md-4").slice(0, 3).show();
    $("body").on('click touchstart', '.load-more', function (e) {
        e.preventDefault();
        $(".col-md-4:hidden").slice(0, 3).slideDown();
        if ($(".col-md-4:hidden").length == 0) {
            $(".load-more").css('visibility', 'hidden');
        }
    });
});


/*===============================================
                    Photo GaLlery
===============================================s*/

const photos = document.querySelectorAll(".photo");
const gallery = document.querySelector(".gallery");
let isOpen = false;
let activePhoto;

photos.forEach(photo => {
  photo.addEventListener("click", handleClick);
});

function handlePosition(photo) {
  const { width, height, top, left } = photo.getBoundingClientRect();
  photo.style.transform = `translateY(${innerHeight / 2 -
  height / 2 -
  top}px) translateX(${innerWidth / 2 - width / 2 - left}px) scale(1.7)`;
}

function handleClick(e) {
  activePhoto = e.target;
  photos.forEach(photo => photo.setAttribute("style", ""));
  handlePosition(activePhoto);
  activePhoto.classList.add("is-active");
  gallery.classList.add("is-expanded");
  setTimeout(() => {
    isOpen = true;
  }, 0);
}

function hide() {
  if (isOpen) {
    activePhoto.setAttribute("style", "position: relative; z-index: 1");
    activePhoto.classList.remove("is-active");
    gallery.classList.remove("is-expanded");
    isOpen = false;
  }
}

window.addEventListener("resize", hide);
document.addEventListener("click", hide);


// for demo

window.onload = () => document.querySelector(".loading").remove();

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("img").forEach(img => {
    img.onerror = function () {
      this.style.display = "none";
    };
  });
});







/*===============================================
                    Blog share
===============================================s*/

$(document).ready(function($) {

	$('.card__share > a').on('click', function(e){ 
		e.preventDefault() // prevent default action - hash doesn't appear in url
   		$(this).parent().find( 'div' ).toggleClass( 'card__social--active' );
		$(this).toggleClass('share-expanded');
    });
  
});