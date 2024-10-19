const counters = document.querySelectorAll('.counter');

const countUp = (counter, target) => {
  let count = 0;
  const speed = 2000; // Total time for the counter to reach target (in milliseconds)
  const increment = Math.ceil(target / (speed / 100)); // Count up every 100ms

  const interval = setInterval(() => {
    count += increment;
    if (count >= target) {
      count = target;
      clearInterval(interval);
    }
    counter.innerHTML = `<span id="plus">+</span>${count}`; // Retain the plus sign
  }, 100); // Update every 100ms
};

const observerOptions = {
  root: null,
  rootMargin: '0px',
  threshold: 0.1 // Trigger when 10% of the element is visible
};

const observerCallback = (entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const target = +entry.target.getAttribute('data-target');
      countUp(entry.target, target); // Call countUp for the current counter
      observer.unobserve(entry.target); // Stop observing once counted
    }
  });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);
counters.forEach(counter => observer.observe(counter));












function playVideo() {
  const videoContainer = document.getElementById('youtube-video');
  videoContainer.src += "?autoplay=1"; // Start video automatically
  document.querySelector('.custom-thumbnail').style.display = 'none'; // Hide custom image
}