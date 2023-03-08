let header = document.querySelector('header');
let icon = document.querySelector('.navbar__icons');
let menu = document.querySelector('.navbar');

window.addEventListener('scroll', ()=>{
    header.classList.toggle('shadow', window.scrollY > 0);
}) 

icon.addEventListener('click', () =>{
  menu.classList.toggle('navbar-open');
  icon.classList.toggle('open'); 
  header.classList.toggle('shadow-none')
})
  $('.img-slider').slick({
    slidesToShow: 1,
    autoplay: true,
    infinite: true,
    autoplaySpeed: 1000,
    dots:true,
  });

  $('.coming-lists').slick({
    slidesToShow: 5,
    slidesToScroll: 5,
    infinite: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll:4
        }
      },

      {
        breakpoint:724,
        settings: {
          slidesToShow: 3,
          slidesToScroll:3
        }
      }
    ]
  });
