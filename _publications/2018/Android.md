---
title:          "A Video-based Attack for Android Pattern Lock"
date:           2018-07-24 00:01:00 +0800
selected:       false
pub:            "ACM Transactions on Privacy and Security (CCF-B)"
pub_date:       "2018"
abstract: >-
  Pattern lock is widely used for identification and authentication on Android devices. This article presents a novel video-based side channel attack that can reconstruct Android locking patterns from video footage filmed using a smartphone. As a departure from previous attacks on pattern lock, this new attack does not require the camera to capture any content displayed on the screen. Instead, it employs a computer vision algorithm to track the fingertip movement trajectory to infer the pattern. Using the geometry information extracted from the tracked fingertip motions, the method can accurately infer a small number of (often one) candidate patterns to be tested by an attacker. We conduct extensive experiments to evaluate our approach using 120 unique patterns collected from 215 independent users. Experimental results show that the proposed attack can reconstruct over 95% of the patterns in five attempts. We discovered that, in contrast to most people’s belief, complex patterns do not offer stronger protection under our attacking scenarios. This is demonstrated by the fact that we are able to break all but one complex patterns (with a 97.5% success rate) as opposed to 60% of the simple patterns in the first attempt. 
cover:      /assets/images/covers/2018/video.png
authors:
  - Guixin Ye
  - Zhanyong Tang
  - Dingyi Fang
  - <strong>Xiaojiang Chen</strong>
  - Willy Wolff
  - Adam Aviv
  - Zheng Wang
links:
  Paper: https://eprints.whiterose.ac.uk/151216/1/tops%2018%20AAM.pdf
  Weblink: https://dl.acm.org/doi/abs/10.1145/3230740
---
