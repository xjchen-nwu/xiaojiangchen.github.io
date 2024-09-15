---
title:          "Cracking Android Pattern Lock in Five Attempts"
date:           2017-10-15 00:01:00 +0800
type:           software
selected:       false
pub:            "NDSS’17   (CCF-B)"
pub_date:       "2017"
abstract: >-
  Pattern lock is widely used as a mechanism for authentication and authorization on Android devices. In this paper, we demonstrate a novel video-based attack to reconstruct Android lock patterns from video footage filmed using a mobile phone camera. Unlike prior attacks on pattern lock, our approach does not require the video to capture any content displayed on the screen. Instead, we employ a computer vision algorithm to track the fingertip movements to infer the pattern. Using the geometry information extracted from the tracked fingertip motions, our approach is able to accurately identify a small number of (often one) candidate patterns to be tested by an adversary. We thoroughly evaluated our approach using 120 unique patterns collected from 215 independent users, by applying it to reconstruct patterns from video footage filmed using smartphone cameras. Experimental results show that our approach can break over 95% of the patterns in five attempts before the device is automatically locked by the Android system. We discovered that, in contrast to many people   s belief, complex patterns do not offer stronger protection under our attacking scenarios. This is demonstrated by the fact that we are able to break all but one complex patterns (with a 97.5% success rate) as opposed to 60% of the simple patterns in the first attempt. Since our threat model is common in day-to-day lives, our workr calls for the community to revisit the risks of using Android pattern lock to protect sensitive information.
cover:          /assets/images/covers/2017/crack.png
authors:
  - Guixin Ye
  - Zhanyong Tang
  - Dingyi Fang
  - <strong>Xiaojiang Chen</strong>
  - Kwang In Kim
  - Ben Taylor
  - Zheng Wang
links:
  Paper: https://www.ndss-symposium.org/wp-content/uploads/2017/09/ndss2017_03A-5_Ye_paper.pdf
  Weblink: https://www.ndss-symposium.org/ndss2017/ndss-2017-programme/cracking-android-pattern-lock-five-attempts/
---
