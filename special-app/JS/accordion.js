$(".accordion").accordion({
    heightStyle: "content",
active:2
        });
    $(document).ready(function() {
        $('.section-question__link').click(function(){
            $('.section-question__link').toggleClass('active');
           });
    });


