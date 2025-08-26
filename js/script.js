// Heading script start
document.addEventListener('DOMContentLoaded', function () {
  // Select all nav links
  const navLinks = document.querySelectorAll('.nav-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      // Remove active-link from all
      navLinks.forEach(l => l.classList.remove('active-link'));

      // Add active-link to clicked one
      this.classList.add('active-link');
    });
  });
});

// Heading script end

// moving circle script start
// const circle = document.querySelector('.cursor-circle');
// let mouseX = 0, mouseY = 0;
// let circleX = 0, circleY = 0;

// document.addEventListener('mousemove', function (e) {
//   mouseX = e.clientX;
//   mouseY = e.clientY;

//   // Scale effect when moving fast
//   circle.style.transform = 'translate(-50%, -50%) scale(1.3)';

//   // Reset scale back after a short delay
//   clearTimeout(circle.timeoutId);
//   circle.timeoutId = setTimeout(() => {
//     circle.style.transform = 'translate(-50%, -50%) scale(1)';
//   }, 100);
// });

// function animate() {
//   circleX += (mouseX - circleX) * 0.2;  // smoother
//   circleY += (mouseY - circleY) * 0.2;
//   circle.style.top = `${circleY}px`;
//   circle.style.left = `${circleX}px`;
//   requestAnimationFrame(animate);
// }

// animate();


// moving circle script end
