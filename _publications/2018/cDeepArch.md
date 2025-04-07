---
title:          "cDeepArch: A Compact Deep Neural Network Architecture for Mobile Sensing"
date:           2019-10-01 00:01:00 +0800
type:           software
selected:       false
pub:            "SECON’18  (CCF-B)"
pub_date:       "2019"
abstract: >-
  Mobile sensing is a promising sensing paradigm in the era of Internet of Things IoT that utilizes mobile device sensors to collect sensory data about sensing targets and further applies learning techniques to recognize the sensed targets to correct classes or categories. Due to the recent great success of deep learning, an emerging trend is to adopt deep learning in this recognition process, while we find an overlooked yet crucial issue to be solved in this paper — The size of deep learning models should be sufficiently large for reliably classifying various types of recognition targets, while the achieved processing delay may fail to satisfy the stringent latency requirement from applications. If we blindly shrink the deep learning model for acceleration, the performance cannot be guaranteed. To cope with this challenge, this paper presents a compact deep neural network architecture, namely cDeepArch. The key idea of the cDeepArch design is to decompose the entire recognition task into two lightweight sub-problems: context recognition and the context-oriented target recognitions. This decomposition essentially utilizes the adequate storage to trade for the CPU and memory resource consumptions during execution. In addition, we further formulate the execution latency for decomposed deep learning models and propose a set of enhancement techniques, so that system performance and resource consumption can be quantitatively balanced. We implement a cDeepArch prototype system and conduct extensive experiments. The result shows that cDeepArch achieves excellent recognition performance and the execution latency is also lightweight.
cover:          /assets/images/covers/2018/cdeep.png
authors:
  - Kang Yang
  - Tianzhang Xing
  - Yang Liu
  - Zhenjiang Li
  - Xiaoqing Gong
  - <strong>Xiaojiang Chen</strong>
  - Dingyi Fang
links:
  Weblink: https://dl.acm.org/doi/10.1109/TNET.2019.2936939
  Paper: https://www.cs.cityu.edu.hk/~zhenjili/2018-SECON-cDeepArch.pdf
---
