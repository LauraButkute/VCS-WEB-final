// click prev/next to slide show
let slide_index = 17;  
        displaySlides(slide_index);  
        function nextSlide(n) {  
            displaySlides(slide_index += n);  
        }  
        function currentSlide(n) {  
            displaySlides(slide_index = n);  
        }  
        function displaySlides(n) {  
            let slides = document.getElementsByClassName("slide fade");  
            if (n > slides.length) { slide_index = 1 }  
            if (n < 1) { slide_index = slides.length }  
            for (let i = 0; i < slides.length; i++) {  
                slides[i].style.display = "none";  
            }  
            slides[slide_index - 1].style.display = "block";  
        }
