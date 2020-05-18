$(document).ready(function () {
    var videobackground = new $.backgroundVideo($('body'), {
        "align": "centerXY",
        "width": 1280,
        "height": 720,
        "path": "video/",
        "filename": "bg",
        "types": ["mp4", "ogv", "webm"],
        "preload": true,
        "autoplay": true,
        "loop": true
    });
});