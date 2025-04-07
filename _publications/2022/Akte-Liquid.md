---
title:          "Akte-Liquid: Acoustic-Based Liquid Identification with Smartphones"
date:           2023-02-21 00:01:00 +0800
type:           software
selected:       false
pub:            "ACM Transactions on Sensor Networks  (CCF-B)"
pub_date:       "2023"
abstract: >-
  Liquid identification plays an essential role in our daily lives. However, existing RF sensing approaches still require dedicated hardware such as RFID readers and UWB transceivers, which are not readily available to most users. In this article, we propose Akte-Liquid, which leverages the speaker on smartphones to transmit acoustic signals, and the microphone on smartphones to receive reflected signals to identify liquid types and analyze the liquid concentration. Our work arises from the acoustic intrinsic impedance property of liquids, in that different liquids have different intrinsic impedance, causing reflected acoustic signals of liquids to differ. Then, we discover that the amplitude-frequency feature of reflected signals may be utilized to represent the liquid feature. With this insight, we propose new mechanisms to eliminate the interference caused by hardware and multi-path propagation effects to extract the liquid features. In addition, we design a new Siamese network-based structure with a specific training sample selection mechanism to reconstruct the extracted feature to container-irrelevant features. Our experimental evaluations demonstrate that Akte-Liquid is able to distinguish 20 types of liquids at a higher accuracy, and to identify food additives and measure protein concentration in the artificial urine with a 92.3% accuracy under 1 mg/100 mL as well. 
cover:          /assets/images/covers/2022/akte.jpg
authors:
  - Xue Sun
  - Wenwen Deng
  - Xudong Wei
  - Dingyi Fang
  - Baochun Li
  - <strong>Xiaojiang Chen</strong>
links:
  Weblink: https://dl.acm.org/doi/10.1145/3551640
  Paper: https://raw.githubusercontent.com/xjchen-nwu/xiaojiangchen.github.io/main/paper/2022/Akte-Liquid.pdf
---
