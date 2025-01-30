// script.js

const glowingImage = document.querySelector('.glowing-image');

// Add event listener for mouseover
glowingImage.addEventListener('mouseover', () => {
	glowingImage.style.transform = 'scale(1.2)';
});

// Add event listener for mouseout
glowingImage.addEventListener('mouseout', () => {
	glowingImage.style.transform = 'scale(1)';
});