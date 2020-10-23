// Handler when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function(){
    //slide-wrap
    var slideWrapper = document.getElementById('slider-wrap');
    //current slideIndexition
    var slideIndex = 0;
    //items
    var slides = document.querySelectorAll('#slider-wrap ul li');
    //number of slides
    var totalSlides = slides.length;
    //get the slide width
    var sliderWidth = slideWrapper.clientWidth;

    setSlideWidth();

    //set width to be 'x' times the number of slides
    var slider = document.querySelector('#slider-wrap ul#slider');
    slider.style.width = sliderWidth * totalSlides + 'px';

    // next, prev
    var nextBtn = document.getElementById('next');
    var prevBtn = document.getElementById('previous');
    nextBtn.addEventListener('click', function () {
        plusSlides(1);
    });
    prevBtn.addEventListener('click', function () {
        plusSlides(-1);
    });

    // hover
    slideWrapper.addEventListener('mouseover', function () {
        this.classList.add('active');
        clearInterval(autoSlider);
    });
    slideWrapper.addEventListener('mouseleave', function () {
        this.classList.remove('active');
        autoSlider = setInterval(function () {
            plusSlides(0);
        }, 3000);
    });

    /** To Lee
     * slider width를 설정하는 부분 함수로 만듬
     * (코드 재사용을 위해)
     *                          From Bin
     */
    function setSlideWidth() {
        //set width of items
        slides.forEach(function (element) {
            element.style.width = sliderWidth + 'px';
        })
    }

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function currentSlides(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        slideIndex = n;
        if (slideIndex == -1) {
            slideIndex = totalSlides - 1;
        } else if (slideIndex === totalSlides) {
            slideIndex = 0;
        }

        slider.style.left = -(sliderWidth * slideIndex) + 'px';
        pagination();
    }

    //pagination
    slides.forEach(function () {
        var li = document.createElement('li');
        document.querySelector('#slider-pagination-wrap ul').appendChild(li);
    })

    function pagination() {
        var dots = document.querySelectorAll('#slider-pagination-wrap ul li');
        dots.forEach(function (element) {
            element.classList.remove('active');
        });
        dots[slideIndex].classList.add('active');
    }

    pagination();
    var autoSlider = setInterval(function () {
        plusSlides(0);
    }, 3000);

    /** To Lee
     * 브라우저 창 크기가 변경되면 발생하는 resize event를
     * window 객체에 listener 추가를 해줌
     * Event Flow :
     * 브라우저 창 크기 변화 감지 -> resize 이벤트 발생 -> window 객체에서 resize Event Listener가 감지
     * -> Listener에 Binding 된 function 실행 -> slider width 변경
     * 너의 요구사항 충족 완료
     *                          From Bin
     */
    window.addEventListener('resize', function(event){
        totalSlides = slides.length;
        sliderWidth = slideWrapper.clientWidth;
        slider.style.width = sliderWidth * totalSlides + 'px';
        setSlideWidth();
    });
});
