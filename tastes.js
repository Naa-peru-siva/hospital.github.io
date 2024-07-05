$(document).ready(function(){
            var items = $('#items .item');
            items.sort(function() {
                return Math.random() - 0.5;
            });
            $('#items').html(items);
        });
        
$(document).ready(function() {
    // Initially show the first content
    $('#content1').show();

    // Handle click event on navigation links
    $('.nav-link').click(function(event) {
        event.preventDefault(); // Prevent default link behavior

        // Get the target content ID from the data-target attribute
        var target = $(this).data('target');

        // Hide all content sections
        $('.content').hide();

        // Show the target content section
        $(target).show();
    });
});

$(document).ready(function(){
            $('#searchBox').on('input', function() {
                var searchText = $(this).val().toLowerCase();
                var items = $('#items .item');
                var matched = 0;
                
                items.each(function() {
                    var itemText = $(this).text().toLowerCase();
                    if (itemText.indexOf(searchText) !== -1) {
                        $(this).removeClass('hidden');
                        matched++;
                    } else {
                        $(this).addClass('hidden');
                    }
                });

                if (matched === 0) {
                    $('#not-found').show();
                } else {
                    $('#not-found').hide();
                }
            });
          });  
        
$(document).ready(function(){
    // Toggle the menu when the menu button is clicked
    $("#menubutton").click(function(){
        $("#mnav").toggle();
    });
    
    // Hide the menu when clicking anywhere outside the menu
    $(document).click(function(event) {
        if (!$(event.target).closest('#mnav, #menubutton').length) {
            $("#mnav").css("display", "none");
        }
    });

    // Prevent the menu from hiding when clicking inside the menu
    $("#mnav").click(function(event){
        event.stopPropagation();
    });

    // Hide the menu when any <ul> <li> inside #mnav is clicked
    $("#mnav ul li").click(function(){
        $("#mnav").css("display", "none");
    });
});

$(document).ready(function() {
    var $instantScroll = $('#instantscroll');
    var halfPageHeight = $(document).height() / 2;

    // Initially hide the element
    $instantScroll.hide();

    // Show the element when scrolled to the middle of the page
    $(window).scroll(function() {
        if ($(window).scrollTop() > halfPageHeight) {
            $instantScroll.fadeIn();
        } else {
            $instantScroll.fadeOut();
        }
    });

    // Scroll to the top and hide the element when it is clicked
    $instantScroll.click(function() {
        $('html, body').animate({ scrollTop: 0 }, 'slow', function() {
            // Hide the element after scrolling to the top
            $instantScroll.fadeOut();
        });
        return false; // Prevents the default action of the click event
    });
});

              
