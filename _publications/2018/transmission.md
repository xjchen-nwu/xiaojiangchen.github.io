---
title:          "Enabling robust and reliable transmission in Internet of Things with multiple gateways"
date:           2018-12-09 00:01:00 +0800
selected:       false
pub:            "Computer Networks (CCF-B)"
pub_date:       "2018"
abstract: >-
  This paper investigates the robust and reliable transmission problem in Internet of Things (IoT) applications, where multiple gateways are deployed. We discover that the reliable routing path with the best link qualities may not always gain the reliable transmission. The main reason is that the majority of existing routing metrics generally do not consider the working state of gateways. And the gateways may significantly reduce the reliability of data transmission at the last hop when they operate at the variable duty cycles (e.g., due to insufficient energy harvesting from ambiance). Last-hop data loss will lead to the inefficient transmission in all previous hops. To address this issue, we propose a novel routing metric ETD (Expected Transmission Direction, ETD), which efficiently selects a proper set of gateways with improved reliability in variable duty-cycled IoT through estimating the working state of gateways. Based on ETD, we design an efficient opportunistic routing protocol PoR to ensure reliable data transmission. Our simulations demonstrate the superior performance of PoR. It is shown that PoR achieves over 98% packet delivery ratio even in the worst network setting, with effective load balancing among selected gateways.
cover:         /assets/images/covers/2018/robust.jpg
authors:
  - Dan Xu
  - Wenli Jiao
  - Zhuang Yin
  - Bin Wu
  - Yao Peng
  - <strong>Xiaojiang Chen#</strong>
  - Feng Chen
  - Dingyi Fang
links:
  Paper: https://www.sciencedirect.com/science/article/pii/S1389128618309708/pdfft?md5=225730fe4c92d3ddbd1a757d90b21525&pid=1-s2.0-S1389128618309708-main.pdf
  Weblink: https://www.sciencedirect.com/science/article/pii/S1389128618309708
---
