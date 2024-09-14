// /assets/js/video-popup.js
function openVideoPopup(videoSrc) {
    const videoWindow = window.open("", "VideoPopup", "width=600,height=400");
    videoWindow.document.write(`
        <html>
        <head>
            <title>视频播放</title>
        </head>
        <body style="margin:0; padding:0; display:flex; justify-content:center; align-items:center;">
            <video width="600" height="400" controls autoplay>
                <source src="${videoSrc}" type="video/mp4">
                您的浏览器不支持 HTML5 视频播放。
            </video>
        </body>
        </html>
    `);
}
