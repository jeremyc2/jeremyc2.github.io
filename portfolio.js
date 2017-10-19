
        $(document).ready(function () {
            if($('body').height() > 1000)
                $('nav').affix({ offset: { top: 20} });
            $("nav").css({ 'width': ($(".well").outerWidth() + 'px') });
            $(".screenshot").css({ 'width': ($(".screenshot:first").width() + 'px'), height: ($(".screenshot:first").width() + 'px' )});
            $("nav").on('affix.bs.affix', function () {
                document.getElementById("title").innerHTML = "Jeremy Chandler";
                document.getElementById("header").style.display = "none";
            });
            $('nav').on('affix-top.bs.affix', function () {
                document.getElementById("title").innerHTML = "";
                document.getElementById("header").style.display = "block";
            });
        });
        $(window).resize(function() {
            $(".screenshot:first").css({ 'height': ($(".screenshot:first").width() + 'px')});
            $(".screenshot:not(:first)").css({ 'width': ($(".screenshot:first").width() + 'px'), height: ($(".screenshot:first").width() + 'px' )});
            $("nav").css({ 'width': ($(".well").outerWidth() + 'px') });
            });