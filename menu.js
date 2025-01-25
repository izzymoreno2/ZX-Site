
 $(document).ready(function(){

   $("#mm1").mouseover(function(){
      $("#anbg").animate({left:0},200);
      $('#menubg').animate({opacity: 0}, 100, function() {
        $(this)
            .css({'background-image': 'url(spec.png)'})
            .animate({opacity: 1});
    });
   });
   $("#mm1").mouseover(function(){ $(".sub").fadeOut(0)});
   $("#mm1").mouseover(function(){ $("#sub1").fadeIn(0)});


   $("#mm2").mouseover(function(){
      $("#anbg").animate({left:167},200);
      $('#menubg').animate({opacity: 0}, 100, function() {
        $(this)
            .css({'background-image': 'url(forum.png)'})
            .animate({opacity: 1});
    });
   });
   $("#mm2").mouseover(function(){ $(".sub").fadeOut(0)});
   $("#mm2").mouseover(function(){ $("#sub2").fadeIn(0)});


   $("#mm3").mouseover(function(){
      $("#anbg").animate({left:334},200);
      $('#menubg').animate({opacity: 0}, 100, function() {
        $(this)
            .css({'background-image': 'url(athor.png)'})
            .animate({opacity: 1});
    });
   });
   $("#mm3").mouseover(function(){ $(".sub").fadeOut(0)});
   $("#mm3").mouseover(function(){ $("#sub3").fadeIn(0)});


   $("#mm4").mouseover(function(){
      $("#anbg").animate({left:501},200);
      $('#menubg').animate({opacity: 0}, 100, function() {
        $(this)
            .css({'background-image': 'url(biblio.png)'})
            .animate({opacity: 1});
    });
   });
   $("#mm4").mouseover(function(){ $(".sub").fadeOut(0)});
   $("#mm4").mouseover(function(){ $("#sub4").fadeIn(0)});


   $("#mm5").mouseover(function(){
      $("#anbg").animate({left:668},200);
      $('#menubg').animate({opacity: 0}, 100, function() {
        $(this)
            .css({'background-image': 'url(article.png)'})
            .animate({opacity: 1});
    });
   });
   $("#mm5").mouseover(function(){ $(".sub").fadeOut(0)});
   $("#mm5").mouseover(function(){ $("#sub5").fadeIn(0)});


   $("#mm6").mouseover(function(){
      $("#anbg").animate({left:835},200);
      $('#menubg').animate({opacity: 0}, 100, function() {
        $(this)
            .css({'background-image': 'url(web.png)'})
            .animate({opacity: 1});
    });
   });
   $("#mm6").mouseover(function(){ $(".sub").fadeOut(0)});
   $("#mm6").mouseover(function(){ $("#sub6").fadeIn(0)});

   $("#sm01").click(function(){$("#mc00").slideUp(300)});
   $("#sm01").click(function(){$(".maincontent").slideUp(300)});
   $("#sm01").click(function(){$("#mc01").slideDown(300)});

   $("#sm02").click(function(){$("#mc00").slideUp(300)});
   $("#sm02").click(function(){$(".maincontent").slideUp(300)});
   $("#sm02").click(function(){$("#mc02").slideDown(300)});

   $("#sm03").click(function(){$("#mc00").slideUp(300)});
   $("#sm03").click(function(){$(".maincontent").slideUp(300)});
   $("#sm03").click(function(){$("#mc03").slideDown(300)});

   $("#sm04").click(function(){$("#mc00").slideUp(300)});
   $("#sm04").click(function(){$(".maincontent").slideUp(300)});
   $("#sm04").click(function(){$("#mc04").slideDown(300)});

   $("#sm05").click(function(){$("#mc00").slideUp(300)});
   $("#sm05").click(function(){$(".maincontent").slideUp(300)});
   $("#sm05").click(function(){$("#mc05").slideDown(300)});

   $("#sm06").click(function(){$("#mc00").slideUp(300)});
   $("#sm06").click(function(){$(".maincontent").slideUp(300)});
   $("#sm06").click(function(){$("#mc06").slideDown(300)});

   $("#sm07").click(function(){$("#mc00").slideUp(300)});
   $("#sm07").click(function(){$(".maincontent").slideUp(300)});
   $("#sm07").click(function(){$("#mc07").slideDown(300)});

   $("#sm08").click(function(){$("#mc00").slideUp(300)});
   $("#sm08").click(function(){$(".maincontent").slideUp(300)});
   $("#sm08").click(function(){$("#mc08").slideDown(300)});

   $("#sm09").click(function(){$("#mc00").slideUp(300)});
   $("#sm09").click(function(){$(".maincontent").slideUp(300)});
   $("#sm09").click(function(){$("#mc09").slideDown(300)});

   $("#sm10").click(function(){$("#mc00").slideUp(300)});
   $("#sm10").click(function(){$(".maincontent").slideUp(300)});
   $("#sm10").click(function(){$("#mc10").slideDown(300)});

   $("#sm11").click(function(){$("#mc00").slideUp(300)});
   $("#sm11").click(function(){$(".maincontent").slideUp(300)});
   $("#sm11").click(function(){$("#mc11").slideDown(300)});

   $("#sm12").click(function(){$("#mc00").slideUp(300)});
   $("#sm12").click(function(){$(".maincontent").slideUp(300)});
   $("#sm12").click(function(){$("#mc12").slideDown(300)});

   $("#sm13").click(function(){$("#mc00").slideUp(300)});
   $("#sm13").click(function(){$(".maincontent").slideUp(300)});
   $("#sm13").click(function(){$("#mc13").slideDown(300)});

   $("#sm14").click(function(){$("#mc00").slideUp(300)});
   $("#sm14").click(function(){$(".maincontent").slideUp(300)});
   $("#sm14").click(function(){$("#mc14").slideDown(300)});

   $("#sm15").click(function(){$("#mc00").slideUp(300)});
   $("#sm15").click(function(){$(".maincontent").slideUp(300)});
   $("#sm15").click(function(){$("#mc15").slideDown(300)});

   $("#sm16").click(function(){$("#mc00").slideUp(300)});
   $("#sm16").click(function(){$(".maincontent").slideUp(300)});
   $("#sm16").click(function(){$("#mc16").slideDown(300)});

   $("#sm17").click(function(){$("#mc00").slideUp(300)});
   $("#sm17").click(function(){$(".maincontent").slideUp(300)});
   $("#sm17").click(function(){$("#mc17").slideDown(300)});

   $("#sm18").click(function(){$("#mc00").slideUp(300)});
   $("#sm18").click(function(){$(".maincontent").slideUp(300)});
   $("#sm18").click(function(){$("#mc18").slideDown(300)});

});