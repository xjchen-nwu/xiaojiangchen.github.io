---
title:          "iGuard: A Real-Time Anti-Theft System for Smartphones"
date:           2017-10-15 00:01:00 +0800
selected:       false
pub:            "INFOCOM’17 "
pub_date:       "2017"
abstract: >-
 Smartphone theft is a non-negligible problem that causes serious concerns on personal property, privacy, and public security. The existing solutions to this problem either provide only functions like retrieving a phone, or require dedicated hardware to detect thefts. How to protect smartphones from being stolen at all times is still an open problem. In this paper, we propose iGuard, a real-time anti-theft system for smartphones. iGuard utilizes only the inertial sensing data from the smartphone. The basic idea behind iGuard is to distinguish different people holding a smartphone, by identifying the order of the motions during the ‘take-out’ behavior and how each motion is performed. For this purpose, we design a motion segmentation algorithm to detect the transition between two motions from the noisy sensing data. We then leverage the distinct feature contained in each sub-segment of a motion, instead of the entire motion, to estimate the probability that the motion is performed by the smartphone owner himself/herself. Based on such pre-processed data, we propose a Markov Chain based model to track the behavior of a smartphone user. According to this model, iGuard instantly alarms once the tracked data deviate from the smartphone owner's usual habit. We implement iGuard on Android and evaluate its performance in real environments. The experimental results show that iGuard is accurate and robust in various scenarios.
cover:          /assets/images/covers/2017/iguard.png
authors:
  - Meng jin
  - He yuan
  - Dingyi Fang
  - <strong>Xiaojiang Chen</strong>
  - Xin Meng
  - Tianzhang Xing
links:
  Weblink: https://doi.org/10.1109/INFOCOM.2017.8057021
---
