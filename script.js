function updateTimer() {
    const startDate = new Date('2023-08-16T00:00:00'); // Replace with your anniversary date
    const currentDate = new Date();
    
    const difference = currentDate - startDate;
    
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    
    document.getElementById('timer').innerHTML = 
        `<span style="font-family: 'Press Start 2P', system-ui; font-size: 21px;">
        ${days} days:
        ${hours} hrs:
        ${minutes} mins: ${seconds} secs </span>`;
}

setInterval(updateTimer, 1000);

updateTimer();


$(document).ready(function() {
    $(".container").hover(
        function() {
            $(".card").stop().animate({
                top: "-10px"
            }, 500);
        },
        function() {
            $(".card").stop().animate({
                top: "100px"
            }, 500);
        }
    );
});

