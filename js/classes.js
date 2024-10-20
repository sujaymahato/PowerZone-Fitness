$(document).ready(function () {
    $('.btn-danger').click(function () {
        const card = $(this).closest('.class-card');
        const title = card.data('title');
        const schedule = card.data('schedule');
        const description = card.data('description');
        const details = card.data('details');
        
        $('.detailed-card-title').text(title);
        $('.detailed-card-schedule').text(schedule);

        
        const classDetails = details.split('<br>').filter(text => text.trim() !== '');

        let combinedHTML = '';
        classDetails.forEach((detail, index) => {
            const heading = detail.split(' ')[0]; 
            const bodyText = detail; 
            combinedHTML += '<h4>' + heading + '</h4>' + bodyText + '<br>';
        });

        $('.detailed-card-description').html(combinedHTML); 

        const gallery = $('.gallery');
        gallery.empty(); 


        $('.detailed-card').removeClass('d-none');
        $('html, body').animate({
            scrollTop: $('.detailed-card').offset().top
        }, 400);
    });
});
