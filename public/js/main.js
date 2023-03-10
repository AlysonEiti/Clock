(function ($) {
    function updateClock() {
        
        let now = new Date();
        let hour = now.getHours();
        let minute = now.getMinutes();
        let second = now.getSeconds();

        $('.digital').html(`${fixZero(hour)}:${fixZero(minute)}:${fixZero(second)}`);

        let sDeg = ((360 / 60) * second) - 90;
        let mDeg = ((360 / 60) * minute) - 90;
        let hDeg = ((360 / 12) * hour) - 90;

        $('.seconds').css({'transform':`rotate(${sDeg}deg)`});
        $('.minutes').css({'transform':`rotate(${mDeg}deg)`});
        $('.hours').css({'transform':`rotate(${hDeg}deg)`});
    }

    function fixZero(time) {
        return time < 10 ? `0${time}` : time;
    }
    
    setInterval(updateClock, 1000);
    
})(jQuery);