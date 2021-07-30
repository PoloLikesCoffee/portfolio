// mouse position
const getMousePos = (e) => {
	let posx = 0;
	let posy = 0;
	if (!e) e = window.event;
	if (e.pageX || e.pageY) {
		posx = e.pageX;
		posy = e.pageY;
	} else if (e.clientX || e.clientY) {
		posx =
			e.clientX +
			document.body.scrollLeft +
			document.documentElement.scrollLeft;
		posy =
			e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
	}
	return { x: posx, y: posy };
};

//loading screen
setTimeout(function () {
	document.body.classList.add('loaded');
}, 6000);

//title hover effect & custom cursor
document.body.addEventListener('mousemove', (event) => {
	//const mouseX = event.clientX;
	//const mouseY = event.clientY;
	const mousePos = getMousePos(event);

	gsap.set('.cursor', {
		x: mousePos.x,
		y: mousePos.y,
	});
});

// 3d hover effect
const aboutTitle = document.querySelector('.about-title-content');
const skillsTitle = document.querySelector('.skills-title-content');
const projectsTitle = document.querySelector('.projects-title-content');
const writingTitle = document.querySelector('.writing-title-content');
const contactTitle = document.querySelector('.contact-title-content');

document.addEventListener('mousemove', function (e) {
	let ax = -(window.innerWidth / 2 - e.pageX) / 20;
	let ay = (window.innerHeight / 2 - e.pageY) / 10;
	aboutTitle.setAttribute(
		'style',
		'transform: rotateY(' + ax + 'deg) rotateX(' + ay + 'deg);'
	);
	skillsTitle.setAttribute(
		'style',
		'transform: rotateY(' + ax + 'deg) rotateX(' + ay + 'deg);'
	);
	projectsTitle.setAttribute(
		'style',
		'transform: rotateY(' + ax + 'deg) rotateX(' + ay + 'deg);'
	);
	writingTitle.setAttribute(
		'style',
		'transform: rotateY(' + ax + 'deg) rotateX(' + ay + 'deg);'
	);
	contactTitle.setAttribute(
		'style',
		'transform: rotateY(' + ax + 'deg) rotateX(' + ay + 'deg);'
	);
});

// photo hover effect
const photoItem = document.querySelector('.photo-item');

const photo = photoItem.querySelector('img');

photoItem.addEventListener('mouseenter', (e) => {
	gsap.to(photo, { autoAlpha: 1 });
	gsap.to('.cursor', {
		autoAlpha: 0,
	});
});

photoItem.addEventListener('mouseleave', (e) => {
	gsap.to(photo, { autoAlpha: 0 });
	gsap.to('.cursor', {
		autoAlpha: 1,
	});
});
photoItem.addEventListener('mousemove', (e) => {
	const mousePos = getMousePos(e);
	gsap.to(photo, { x: mousePos.x, y: mousePos.y, slagger: -0.1 });
});

// transitions feature
const appearOptions = { threshold: 0, rootMargin: '0px 0px -50px 0px' };

const appearOnScroll = new IntersectionObserver(function (
	entries,
	appearOnScroll
) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			entry.target.classList.remove('appear');
			//return;
		} else {
			entry.target.classList.add('appear');
			//appearOnScroll.unobserve(entry.target);
		}
	});
},
appearOptions);

// fade-in effect
const faders = document.querySelectorAll('.fade-in');

faders.forEach((fader) => {
	appearOnScroll.observe(fader);
});

// from-left & from-right effect
const sliders = document.querySelectorAll('.slide-in');

sliders.forEach((slider) => {
	appearOnScroll.observe(slider);
});

// last section day of the week feature
let date = new Date();
let weekdays = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];

let today = weekdays[date.getDay()];

document.querySelector('.day').innerHTML = `<b>${today}</b>.`;
