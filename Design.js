function go(loc = "") {
  if (loc === "") {
    window.scrollTo(0, 0);
    return;
  }
  let elem = document.getElementById(loc);
  window.scrollTo(
    0,
    window.pageYOffset + elem.getBoundingClientRect().top - 60.6
  );
}

function show_hide(a) {
  let element = document.getElementById(a);
  if (this.innerText === "Show more") {
    $(element).show(500);
    this.innerHTML = "Show less";
  } else {
    $(element).hide(500);
    this.innerHTML = "Show more";
  }
}

(function updateCopyright(){
  const copyrightElement = document.getElementsByClassName('copyright')[0];
  copyrightElement.children[1].innerText = `| ${(new Date()).getFullYear()}`
})()

window.onscroll = function () {
  let topbtn = document.getElementById("top-btn");
  if (document.documentElement.scrollTop < 71) {
    topbtn.style.display = "none";
  } else {
    topbtn.style.display = "block";
  }
};

function barMenuClick() {
  let navbar = document.querySelector(".nav .links");
  navbar.style.width = "200px";
}
function closeMenuClick() {
  let navbar = document.querySelector(".nav .links");
  navbar.style.width = "0";
}
function getDifferenceText(joiningDate, today) {
	let years = today.getFullYear() - joiningDate.getFullYear();
	let months = today.getMonth() - joiningDate.getMonth();
	let days = today.getDate() - joiningDate.getDate();
	let hours = today.getHours() - joiningDate.getHours();
	let minutes = today.getMinutes() - joiningDate.getMinutes();
	let seconds = today.getSeconds() - joiningDate.getSeconds();

	if (seconds < 0) {
		minutes--;
		seconds += 60;
	}

	if (minutes < 0) {
		hours--;
		minutes += 60;
	}

	if (hours < 0) {
		days--;
		hours += 24;
	}

	if (days < 0) {
		months--;
		const previousMonth = today.getMonth() === 0 ? 11 : today.getMonth() - 1;
		const daysInPreviousMonth = new Date(today.getFullYear(), previousMonth + 1, 0).getDate();
		days += daysInPreviousMonth;
	}

	if (months < 0) {
		years--;
		months += 12;
	}

	let result = `${years}y ${months}m ${days}d | ${hours}h : ${minutes}m : ${seconds}s`;

	return result.trim();
}

function updateExperienceTime(experienceTimeElement) {
    const joiningDate = new Date('11 July 2022');
	setInterval(() => {
        experienceTimeElement.innerText = getDifferenceText(joiningDate, new Date());
	}, 1000);
}

updateExperienceTime(document.getElementById('exp-time-calc'));

var slideIndex = [0, 0, 0];
showSlide(slideIndex[0], 0);
showSlide(slideIndex[1], 1);
showSlide(slideIndex[2], 2);

function changeSlide(n, i) {
  slideIndex[i] += n;
  showSlide(slideIndex[i], i);
}
function currentSlide(n, i) {
  slideIndex[i] = n;
  showSlide(slideIndex[i], i);
}
function showSlide(n, i) {
  let slideshows = $(".slideshow-container");
  let slides = slideshows[i].getElementsByClassName("mySlide");
  let dots = slideshows[i].querySelectorAll(".dots span");
  let last = slides.length - 1;

  if (n > last) {
    slideIndex[i] = 0;
  }
  if (n < 0) {
    slideIndex[i] = last;
  }

  $(slides).hide();

  $(dots).removeClass(" active");
  $(slides).removeClass("fade");

  $(slides).eq(slideIndex[i]).show();
  $(slides).eq(slideIndex[i]).addClass(" fade");
  dots[slideIndex[i]].className += " active";
}
