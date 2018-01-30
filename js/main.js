

$(document).ready(function () {
    $('.eyeContainer').followCursor();

    var currentMousePos = { x: -1, y: -1 };
    var l_eyePosition = $('#leftEye').offset();
    var r_eyePosition = $('#rightEye').offset();

    $(document).mousemove(function (event) {
        currentMousePos.x = event.pageX;
        currentMousePos.y = event.pageY;

        var l_eyeCursorDistance = Math.sqrt(Math.pow(currentMousePos.x - l_eyePosition.left, 2) + Math.pow(currentMousePos.y - l_eyePosition.top, 2));
        var r_eyeCursorDistance = Math.sqrt(Math.pow(currentMousePos.x - r_eyePosition.left, 2) + Math.pow(currentMousePos.y - r_eyePosition.top, 2));

        var l_eyeDisplacement = 100 * l_eyeCursorDistance / 1500;
        var r_eyeDisplacement = 100 * r_eyeCursorDistance / 1500;

        if (l_eyeDisplacement <= 40) {
            $('#leftEye').css('margin-top', '-' + l_eyeDisplacement + '%');
        };

        if (r_eyeDisplacement <= 40) {
            $('#rightEye').css('margin-top', '-' + r_eyeDisplacement + '%');
        };


    });
});