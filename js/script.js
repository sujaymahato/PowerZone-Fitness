const aboutSection = document.querySelector('.about');

aboutSection.addEventListener('click', function() {
    this.classList.toggle('toggled');
});




function countUp() {
    const counters = document.querySelectorAll('.count'); 
        
        counters.forEach(counter => {
            const target = +counter.getAttribute('data-target'); 
            let count = 0; 
            const increment = target / 100; 

            const updateCounter = () => {
                count += increment; 
                if (count < target) {
                    counter.innerText = Math.ceil(count); 
                    setTimeout(updateCounter, 20); 
                } else {
                    counter.innerText = target; 
                }
            };

            updateCounter(); 
        });
}

   
    const statsSection = document.querySelector('.stats');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                countUp(); 
                observer.unobserve(entry.target); 
            }
        });
    });

    observer.observe(statsSection); 









    

      