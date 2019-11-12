$(document).ready(function() {
	
      $(document).scroll(function() {
        $("h2").each(function() {
          if ($(this).offset().top <= $(document).scrollTop() + 150) {
            $(this).css("opacity", "0");
          } else {
            $(this).css("opacity", "1");
          }
        });
      });
	
      $(document).scroll(function() {
        $("h3").each(function() {
          if ($(this).offset().top <= $(document).scrollTop() + 160) {
            $(this).css("opacity", "0");
          } else {
            $(this).css("opacity", "1");
          }
        });
      });
	
	$('html').mousemove(function(e){
		var amountMovedX = (e.pageX * -1 / 6);
		var amountMovedY = (e.pageY * -1 / 6);
		$(this).css('background-position', amountMovedX + 'px ' + amountMovedY + 'px');
	});
	
	
	
	$('.js--scroll-to-shows').click(function () {
		$('html, body').animate({scrollTop: $('.js--section-shows').offset().top}, 1500);
	});
	
	$('.js--scroll-to-videos').click(function () {
		$('html, body').animate({scrollTop: $('.js--section-videos').offset().top}, 1600);
	});
	
	$('.js--scroll-to-music').click(function () {
		$('html, body').animate({scrollTop: $('.js--section-music').offset().top}, 1700);
	});
	
	$('.js--scroll-to-merch').click(function () {
		$('html, body').animate({scrollTop: $('.js--section-merch').offset().top}, 1800);
	});
	
	$('.js--scroll-to-about').click(function () {
		$('html, body').animate({scrollTop: $('.js--section-about').offset().top}, 1900);
	});
	
	$('.js--scroll-to-top').click(function () {
		$('html, body').animate({scrollTop: $('.js--section-top').offset().top}, 2000);
	});
	
	
	
	const items = document.querySelectorAll('img');
	const itemCount = items.length;
	const nextItem = document.querySelector('.next');
	const previousItem = document.querySelector('.previous');
	let count = 0;

	function showNextItem() {
	  items[count].classList.remove('active');

	  if(count < itemCount - 1) {
		count++;
	  } else {
		count = 0;
	  }

	  items[count].classList.add('active');
	  console.log(count);
	}

	function showPreviousItem() {
	  items[count].classList.remove('active');

	  if(count > 0) {
		count--;
	  } else {
		count = itemCount - 1;
	  }

	  items[count].classList.add('active');
	  console.log(count);
	}

	function keyPress(e) {
	  e = e || window.event;

	  if (e.keyCode == '37') {
		showPreviousItem();
	  } else if (e.keyCode == '39') {
		showNextItem();
	  }
	}

	nextItem.addEventListener('click', showNextItem);
	previousItem.addEventListener('click', showPreviousItem);
	document.addEventListener('keydown', keyPress);
	
	
});
