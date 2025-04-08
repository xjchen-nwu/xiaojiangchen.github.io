---
title:          "Smogy-Link: Fingerprinting Interference for Predictable Wireless Concurrency"
date:           2016-12-15 00:01:00 +0800
type:           Algorithm
selected:       false
pub:            "ICNP’16  (CCF-B)"
pub_date:       "2016"
abstract: >-
  Operating in unlicensed ISM bands, ZigBee devices often yield poor throughput and packet reception ratio due to the interference from ever increasing wireless devices in 2.4 GHz band. Although there have been many efforts made for interference avoidance, they come at the cost of miscellaneous overhead, which oppositely hurts channel utilization. Our empirical results show that, a specific interference is likely to have different influence on different outbound links of a ZigBee sender, which indicates the chance of concurrent transmissions. Based on this insight, we propose Smoggy-Link, a practical protocol to exploit the potential concurrency for adaptive ZigBee transmissions under harsh interference. Smoggy-Link maintains an accurate link model to describe and trace the relationship between interference and link quality of the sender's outbound links. With such a link model, Smoggy-Link can obtain fine-grained spatiotemporal link information through a low-cost interference identification method. The link information is further utilized for adaptive link selection and intelligent transmission schedule. We implement and evaluate a prototype of our approach with TinyOS and TelosB motes. The evaluation results show that Smoggy-Link has consistent improvements in both throughput and packet reception ratio under interference from various interferer.
cover:          /assets/images/covers/2016/smoke.png
authors:
  - Meng Jin
  - Yuan He
  - Xiaolong Zheng
  - Dingyi Fang
  - Dan Xu
  - Tianzhang Xing
  - <strong>Xiaojiang Chen</strong>
links:
  Weblink: https://ieeexplore.ieee.org/document/7784420
  Paper: http://tns.thss.tsinghua.edu.cn/sun/publications/2016.8.pdf
---
