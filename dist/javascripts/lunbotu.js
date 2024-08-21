
        var container1 = new Swiper(".container1" , {
                  loop : true ,
                  autoplay : true,
                //   delay:100,
                  delay:100,
                  effect : "slide",
                  navigation: {
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                  },
                  pagination :{
                        el : ".swiper-pagination",
                        clickable :true,
                        bulletActiveClass: 'active',
                        dynamicBullets: true,
                  },
                  
            });
   