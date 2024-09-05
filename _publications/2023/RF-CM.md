---
title:          "RF-CM: Cross-Modal Framework for RF-enabled Few-Shot Human Activity Recognition"
date:           2023-03-28 00:01:00 +0800
selected:       false
pub:            "UbiComp’23 (CCF-A)"
#pub_date:       "2023"
abstract: >-
  Radio-Frequency (RF) based human activity recognition (HAR) enables many attractive applications such as smart home, health monitoring, and virtual reality (VR). Among multiple RF sensors, mmWave radar is emerging as a new trend due to its fine-grained sensing capability. However, laborious data collection and labeling processes are required when employing a radar-based sensing system in a new environment. To this end, we propose RF-CM, a general cross-modal human activity recognition framework. The key enabler is to leverage the knowledge learned from a massive WiFi dataset to build a radar-based HAR system with limited radar samples. It can significantly reduce the overhead of training data collection. In addition, RF-CM can work well regardless of the deployment setups of WiFi and mmWave radar, such as performing environments, users' characteristics, and device deployment. RF-CM achieves this by first capturing the activity-related variation patterns through data processing schemes. It then employs a convolution neural network-based feature extraction module to extract the high-dimensional features to be fed into the activity recognition module. Finally, RF-CM takes the generalization knowledge from WiFi networks as guide labels to supervise the training of the radar model, thus enabling a few-shot radar-based HAR system. We evaluate RF-CM by applying it to two HAR applications, fine-grained American sign language recognition (WiFi-cross-radar) and coarse-grained gesture recognition (WiFi-cross-RFID). The accuracy improvement of over 10% in both applications demonstrates the effectiveness of RF-CM. This cross-modal ability allows RF-CM to support more cross-modal applications.

cover:          /assets/images/covers/2023/RF-CM.png
authors:
  - Xuan Wang
  - Tong Liu
  - Chao Feng
  - Dingyi Fang
  - Xiaojiang Chen
links:
  Weblink: https://dl.acm.org/doi/abs/10.1145/3580859
---
