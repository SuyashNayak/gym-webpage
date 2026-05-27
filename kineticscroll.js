document.addEventListener("DOMContentLoaded", function() {
  
  // 1. Grab all the words we want to animate
  const words = document.querySelectorAll('.word');

  // 2. Set up the Observer (The Tripwire)
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      // If the word touches the middle of the screen...
      if (entry.isIntersecting) {
        entry.target.classList.add('active'); // Turn it red
      } else {
        entry.target.classList.remove('active'); // Fade it out
      }
    });
  }, {
    // This creates the invisible tripwire exactly in the middle of the viewport
    rootMargin: "-45% 0px -45% 0px" 
  });

  // 3. Tell the observer to watch every single word in our list
  words.forEach(word => {
    observer.observe(word);
  });
  
});