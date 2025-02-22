//  carousal
document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector("#carouselMultiItem .carousel-track");
    const slides = document.querySelectorAll("#carouselMultiItem .carousel-slide");
    const slideWidth = slides[0].offsetWidth;
    let index = 0;


    slides.forEach(slide => {
        let clone = slide.cloneNode(true);
        track.appendChild(clone);
    });

    function moveSlide() {
        index++;
        track.style.transition = "transform 0.5s ease-in-out";
        track.style.transform = `translateX(-${index * (100 / 3)}%)`;

       
        setTimeout(() => {
            if (index >= slides.length) {
                track.style.transition = "none";
                track.style.transform = "translateX(0)";
                index = 0;
            }
        }, 500); 
    }

    setInterval(moveSlide, 2500);
});
// login popup
    document.addEventListener("DOMContentLoaded", function () {
        const toggleSwitch = document.getElementById("toggleSwitch");
        const loginTab = document.getElementById("loginTab");
        const registerTab = document.getElementById("registerTab");

        toggleSwitch.addEventListener("change", function () {
            if (toggleSwitch.checked) {
                loginTab.classList.remove("show", "active");
                registerTab.classList.add("show", "active");
            } else {
                registerTab.classList.remove("show", "active");
                loginTab.classList.add("show", "active");
            }
        });
    });


