---
title:          "FlipTracer: Practical Parallel Decoding for Backscatter Communication"
date:           2019-01-11 00:01:00 +0800
selected:       false
pub:            "IEEE/ACM Transactions on Networking  (CCF-A)"
pub_date:       "2019"
abstract: >-
 With parallel decoding for backscatter communication, tags are allowed to transmit concurrently and more efficiently. Existing parallel decoding mechanisms, however, assume that signals of the tags are highly stable and, hence, may not perform optimally in the naturally dynamic backscatter systems. This paper introduces FlipTracer, a practical system that achieves highly reliable parallel decoding even in hostile channel conditions. FlipTracer is designed with a key insight; although the collided signal is time-varying and irregular, transitions between signals' combined states follow highly stable probabilities, which offers important clues for identifying the collided signals and provides us with an opportunity to decode the collided signals without relying on stable signals. Motivated by this observation, we propose a graphical model, called one-flip-graph (OFG), to capture the transition pattern of collided signals, and design a reliable approach to construct the OFG in a manner robust to the diversity in backscatter systems. Then, FlipTracer can resolve the collided signals by tracking the OFG. We have implemented FlipTracer and evaluated its performance with extensive experiments across a wide variety of scenarios. Our experimental results have shown that FlipTracer achieves a maximum aggregated throughput that approaches 2 Mb/s, which is 6× higher than the state of the art. 
cover:          /assets/images/covers/2019/parallelize.png
authors:
  - Meng Jin
  - Yuan He
  - Xin Meng
  - Yilun Zheng
  - Dingyi Fang
  - <strong>Xiaojiang Chen</strong>
links:
  Weblink: https://ieeexplore.ieee.org/document/8610187
---