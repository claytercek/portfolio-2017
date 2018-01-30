

$(document).ready(function () {
    $('.eyeWhite').followCursor();

    var currentMousePos = { x: -1, y: -1 };
    var l_eyePosition = $('#leftEye').offset();
    var r_eyePosition = $('#rightEye').offset();

    $(document).mousemove(function (event) {
        currentMousePos.x = event.pageX;
        currentMousePos.y = event.pageY;

        var l_eyeCursorDistance = Math.sqrt(Math.pow(currentMousePos.x - l_eyePosition.left, 2) + Math.pow(currentMousePos.y - l_eyePosition.top, 2));
        var r_eyeCursorDistance = Math.sqrt(Math.pow(currentMousePos.x - r_eyePosition.left, 2) + Math.pow(currentMousePos.y - r_eyePosition.top, 2));

        var l_eyeDisplacement = 100 * l_eyeCursorDistance / 1600;
        var r_eyeDisplacement = 100 * r_eyeCursorDistance / 1600;

        if (l_eyeDisplacement <= 30) {
            $('#leftEye').css('margin-top', '-' + l_eyeDisplacement + '%');
        };

        if (r_eyeDisplacement <= 30) {
            $('#rightEye').css('margin-top', '-' + r_eyeDisplacement + '%');
        };
    });

    function blink() {
        var l_eyelid = document.getElementById('l_eyelid');
        var r_eyelid = document.getElementById('r_eyelid');
        $('#blinkleft').attr('values', 'M0.5,217.5v-138h299v138H0.5z M150.5,89C95.6,89,44,110.3,5.2,149.1l-0.4,0.4l0.4,0.4 C44,188.7,95.6,210,150.5,210c54.9,0,106.5-21.4,145.3-60.2l0.4-0.4l-0.4-0.4C257,110.3,205.4,89,150.5,89z ; M0.5,217.5v-138h299v138H0.5z M150.5,149c-54.9,0-106.5,0.2-145.3,0.5l-0.4,0l0.4,0 c38.8,0.3,90.4,0.5,145.3,0.5c54.9,0,106.5-0.2,145.3-0.5l0.4,0l-0.4,0C257,149.2,205.4,149,150.5,149z ; M0.5,217.5v-138h299v138H0.5z M150.5,89C95.6,89,44,110.3,5.2,149.1l-0.4,0.4l0.4,0.4 C44,188.7,95.6,210,150.5,210c54.9,0,106.5-21.4,145.3-60.2l0.4-0.4l-0.4-0.4C257,110.3,205.4,89,150.5,89z');
        l_eyelid.pauseAnimations();
        l_eyelid.setCurrentTime(0);
        $('#blinkright').attr('values', 'M0.5,217.5v-138h299v138H0.5z M150.5,89C95.6,89,44,110.3,5.2,149.1l-0.4,0.4l0.4,0.4 C44,188.7,95.6,210,150.5,210c54.9,0,106.5-21.4,145.3-60.2l0.4-0.4l-0.4-0.4C257,110.3,205.4,89,150.5,89z ; M0.5,217.5v-138h299v138H0.5z M150.5,149c-54.9,0-106.5,0.2-145.3,0.5l-0.4,0l0.4,0 c38.8,0.3,90.4,0.5,145.3,0.5c54.9,0,106.5-0.2,145.3-0.5l0.4,0l-0.4,0C257,149.2,205.4,149,150.5,149z ; M0.5,217.5v-138h299v138H0.5z M150.5,89C95.6,89,44,110.3,5.2,149.1l-0.4,0.4l0.4,0.4 C44,188.7,95.6,210,150.5,210c54.9,0,106.5-21.4,145.3-60.2l0.4-0.4l-0.4-0.4C257,110.3,205.4,89,150.5,89z');
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

