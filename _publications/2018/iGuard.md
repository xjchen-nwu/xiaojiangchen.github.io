---
title:          "iGuard: A Real-Time Anti-Theft System for Smartphones"
date:           2018-01-25 00:01:00 +0800
type:           software
selected:       false
article:        TMC
pub:            "IEEE Transactions on Mobile Computing (CCF-A)"
pub_date:       "2018"
abstract: >-
  Smartphone theft is a non-negligible problem that causes serious concerns on personal property and privacy. The existing solutions to this problem either provide only functions like retrieving a phone, or require dedicated hardware to detect thefts. How to protect smartphones from being stolen at all times is still an open problem. In this paper, we propose iGuard, a real-time anti-theft system for smartphones. iGuard utilizes only the inertial sensing data from the smartphone. The basic idea behind iGuard is to distinguish different people holding a smartphone, by identifying the order of the motions during the `take-out' behavior and how each motion is performed. For this purpose, we design a motion segmentation algorithm to detect the transition between two motions from the noisy sensing data. We then leverage the distinct feature contained in each sub-segment of a motion to estimate the probability that the motion is performed by the smartphone owner himself/herself. Based on such pre-processed data, we propose a Markov based model to track the behavior of a smartphone user. According to this model, iGuard instantly alarms once the tracked data deviate from the smartphone owner's usual habit. We implement iGuard on Android and evaluate its performance in real environments. The experimental results show that iGuard is accurate and robust in various scenarios. 
cover:          /assets/images/covers/2018/iguad.jpg
authors:
  - Meng Jin
  - Yuan He
  - Dingyi Fang
  - <strong>Xiaojiang Chen</strong>
  - Tianzheng Xing
links:
  Weblink: https://ieeexplore.ieee.org/document/8057021/
  Paper: https://raw.githubusercontent.com/xjchen-nwu/xiaojiangchen.github.io/main/paper/2018/iGuard.pdf
---
