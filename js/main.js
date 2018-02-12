

$(document).ready(function () {
    $('.eyeWhite').followCursor();

    var currentMousePos = { x: -1, y: -1 };
    var l_eyePosition = $('#leftEye').offset();
    var r_eyePosition = $('#rightEye').offset();

    var eyewidth = $('#leftEye').width();

    //get center of eyes instead of top left position:
    l_eyePosition.left = l_eyePosition.left + eyewidth / 2;
    l_eyePosition.top = l_eyePosition.top + eyewidth / 2;
    r_eyePosition.left = r_eyePosition.left + eyewidth / 2;
    r_eyePosition.top = r_eyePosition.top + eyewidth / 2;

    $(document).mousemove(function (event) {
        currentMousePos.x = event.pageX;
        currentMousePos.y = event.pageY;

        var l_eyeCursorDistance = Math.sqrt(Math.pow(currentMousePos.x - l_eyePosition.left, 2) + Math.pow(currentMousePos.y - l_eyePosition.top, 2));
        var r_eyeCursorDistance = Math.sqrt(Math.pow(currentMousePos.x - r_eyePosition.left, 2) + Math.pow(currentMousePos.y - r_eyePosition.top, 2));

        var l_eyeDisplacement = l_eyeCursorDistance / 25;
        var r_eyeDisplacement = r_eyeCursorDistance / 25;

        console.log(l_eyeCursorDistance)
        if (l_eyeDisplacement <= 30) {
            $('#leftEye').css('top', 50 - l_eyeDisplacement + '%');
        };

        if (r_eyeDisplacement <= 30) {
            $('#rightEye').css('margin-top', '-' + r_eyeDisplacement + '%');
        };
    });

    function blink() {
        var l_eyelid = document.getElementById('l_eyelid');
        var r_eyelid = document.getElementById('r_eyelid');
        $('#blinkleft').attr('values', 'M0,300V0h300v300H0z M150.5,90.5C95.6,90.5,44,111.8,5.2,150.6L4.8,151l0.4,0.4 c38.8,38.8,90.4,60.2,145.3,60.2c54.9,0,106.5-21.4,145.3-60.2l0.4-0.4l-0.4-0.4C257,111.8,205.4,90.5,150.5,90.5z  ; M0,300V0h300v300H0z M150.5,150c-54.9,0-106.5,0.4-145.3,1l-0.4,0l0.4,0c38.8,0.6,90.4,1,145.3,1 c54.9,0,106.5-0.4,145.3-1l0.4,0l-0.4,0C257,150.4,205.4,150,150.5,150z ; M0,300V0h300v300H0z M150.5,90.5C95.6,90.5,44,111.8,5.2,150.6L4.8,151l0.4,0.4 c38.8,38.8,90.4,60.2,145.3,60.2c54.9,0,106.5-21.4,145.3-60.2l0.4-0.4l-0.4-0.4C257,111.8,205.4,90.5,150.5,90.5z ');
        l_eyelid.pauseAnimations();
        l_eyelid.setCurrentTime(0);
        $('#blinkright').attr('values', 'M0,300V0h300v300H0z M150.5,90.5C95.6,90.5,44,111.8,5.2,150.6L4.8,151l0.4,0.4 c38.8,38.8,90.4,60.2,145.3,60.2c54.9,0,106.5-21.4,145.3-60.2l0.4-0.4l-0.4-0.4C257,111.8,205.4,90.5,150.5,90.5z  ; M0,300V0h300v300H0z M150.5,150c-54.9,0-106.5,0.4-145.3,1l-0.4,0l0.4,0c38.8,0.6,90.4,1,145.3,1 c54.9,0,106.5-0.4,145.3-1l0.4,0l-0.4,0C257,150.4,205.4,150,150.5,150z ; M0,300V0h300v300H0z M150.5,90.5C95.6,90.5,44,111.8,5.2,150.6L4.8,151l0.4,0.4 c38.8,38.8,90.4,60.2,145.3,60.2c54.9,0,106.5-21.4,145.3-60.2l0.4-0.4l-0.4-0.4C257,111.8,205.4,90.5,150.5,90.5z ');
        r_eyelid.pauseAnimations();
        r_eyelid.setCurrentTime(0);

        l_eyelid.unpauseAnimations();
        r_eyelid.unpauseAnimations();
    };

    (function loop() {
        var rand = Math.round(Math.random() * (6000 - 500)) + 500;
        setTimeout(function () {
            blink();
            loop();
        }, rand);
    }());




});

