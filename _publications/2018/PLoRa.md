---
title:          "PLoRa: a passive long-range data network from ambient LoRa transmissions"
date:           2018-08-07 00:01:00 +0800
selected:       false
pub:            "Sigcomm’18  (CCF-A)"
pub_date:       "2018"
abstract: >-
  This paper presents PLoRa, an ambient backscatter design that enables long-range wireless connectivity for batteryless IoT devices. PLoRa takes ambient LoRa transmissions as the excitation signals, conveys data by modulating an excitation signal into a new standard LoRa "chirp" signal, and shifts this new signal to a different LoRa channel to be received at a gateway faraway. PLoRa achieves this by a holistic RF front-end hardware and software design, including a low-power packet detection circuit, a blind chirp modulation algorithm and a low-power energy management circuit. To form a complete ambient LoRa backscatter network, we integrate a light-weight backscatter signal decoding algorithm with a MAC-layer protocol that work together to make coexistence of PLoRa tags and active LoRa nodes possible in the network. We prototype PLoRa on a four-layer printed circuit board, and test it in various outdoor and indoor environments. Our experimental results demonstrate that our prototype PCB PLoRa tag can backscatter an ambient LoRa transmission sent from a nearby LoRa node (20 cm away) to a gateway up to 1.1 km away, and deliver 284 bytes data every 24 minutes indoors, or every 17 minutes outdoors. We also simulate a 28-nm low-power FPGA based prototype whose digital baseband processor achieves 220 μW power consumption.
cover:          /assets/images/covers/2018/PLoRa.png
authors:
  - Yao Peng
  - Longfei Shangguan
  - Yue Hu
  - Yujie Qian
  - Xianshang Lin
  - <strong>Xiaojiang Chen</strong>
  - Dingyi Fang
  - Kyle Jamieson
links:
  Paper: https://dl.acm.org/doi/pdf/10.1145/3230543.3230567
  Weblink: https://dl.acm.org/doi/10.1145/3230543.3230567
---
