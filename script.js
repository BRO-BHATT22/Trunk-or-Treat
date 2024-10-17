$(document).ready(function() {
    $('.gallery').on('mouseenter', function() {
        $(this).find('.description').fadeIn();
    }).on('mouseleave', function() {
        $(this).find('.description').fadeOut();
    });
    $('.button a').on('click', function() {
        const info = $(this).data('info'); 
        $('#modalDescription').text(info); 
            $('#infoModal').modal('show');
        });
    $('.infoBtn').on('click', function() {
        
    })
    
    
    })