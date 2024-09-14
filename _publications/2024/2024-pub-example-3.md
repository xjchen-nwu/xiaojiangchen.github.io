---
title:          "Cyclops: A Nanomaterial-based, Baterry-Free Intraocular Pressure (IOP) Monitoring System inside Contact Lens"
type:           hardware
date:           2024-04-16 00:01:00 +0800
selected:       true
pub:            "NSDI’24 (CCF-A)"
# pub_pre:        "Submitted to "
# pub_post:       'Under review.'
# pub_last:       ' <span class="badge badge-pill badge-publication badge-success">Spotlight</span>'
pub_date:       "2024"

abstract: >-
  Intraocular pressure (IOP), commonly known as eye pressure, is a critical physiological parameter related to health. Contact lens-based IOP sensing has garnered significant attention in research. Existing research has been focusing on developing the sensor itself, so the techniques used to read sensing data only support a reading range of several centimeters, becoming the main obstacle for real-world deployment. This paper presents Cyclops, the first battery-free IOP sensing system integrated into a contact lens, which overcomes the proximity constraints of traditional reading methods. Cyclops features a three-layer antenna comprising two metallic layers and a nanomaterial-based sensing layer in between. This innovative antenna serves a dual purpose, functioning as both a pressure sensor and a communication antenna simultaneously. The antenna is connected to an RFID chip, which utilizes a low-power self-tuning circuit to achieve high-precision pressure sensing, akin to a 9-bit ADC. Extensive experimental results demonstrate that Cyclops supports communication at meter-level distances, and its IOP measurement accuracy surpasses that of commercial portable IOP measurement devices.
cover:          /assets/images/covers/2024/nsdi-li.png
authors:
  - Liyao Li
  - Bozhao Shang
  - Yun Wu
  - Jie Xiong
  - <strong>Xiaojiang Chen</strong>
  - Yaxiong Xie
links:
  Presentation: https://www.usenix.org/conference/nsdi24/presentation/li-liyao
  video: https://xjchen-nwu.github.io/xiaojiangchen.github.io/video/video_page/vedio2.html
---
<button onclick="openVideoPopup()">Play Video</button>

<script>
    function openVideoPopup() {
        // 设置窗口的宽度和高度
        const popupWidth = 640;
        const popupHeight = 360;

        // 计算窗口位置以使其居中显示
        const left = (screen.width - popupWidth) / 2;
        const top = (screen.height - popupHeight) / 2;

        // 打开一个新的弹出窗口，用于显示视频
        const videoWindow = window.open("", "VideoPlayer", `width=${popupWidth},height=${popupHeight},top=${top},left=${left},resizable=no,scrollbars=no,status=no`);

        // 在弹出窗口中写入HTML内容，嵌入视频
        videoWindow.document.write(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Video Player</title>
                <style>
                    body {
                        margin: 0;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        background-color: #000;
                        height: 100%;
                    }
                    video {
                        width: 100%;
                        height: 100%;
                        object-fit: cover;
                    }
                </style>
            </head>
            <body>
                <video controls autoplay>
                    <source src="video2/2.mp4" type="video/mp4">
                    Your browser does not support the video tag.
                </video>
            </body>
            </html>
        `);

        // 关闭文档写入流
        videoWindow.document.close();
    }
</script>

