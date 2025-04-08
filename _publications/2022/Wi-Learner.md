---
title:          "Wi-Learner: Towards One-shot Learning for Cross-Domain Wi-Fi based Gesture Recognition"
date:           2022-10-14 00:01:00 +0800
type:           Algorithm
selected:       false
conference:     UbiComp
pub:            "UbiComp’22   (CCF-A)"
pub_date:       "2022"
abstract: >-
  Contactless RF-based sensing techniques are emerging as a viable means for building gesture recognition systems. While promising, existing RF-based gesture solutions have poor generalization ability when targeting new users, environments or device deployment. They also often require multiple pairs of transceivers and a large number of training samples for each target domain. These limitations either lead to poor cross-domain performance or incur a huge labor cost, hindering their practical adoption. This paper introduces Wi-Learner, a novel RF-based sensing solution that relies on just one pair of transceivers but can deliver accurate cross-domain gesture recognition using just one data sample per gesture for a target user, environment or device setup. Wi-Learner achieves this by first capturing the gesture-induced Doppler frequency shift (DFS) from noisy measurements using carefully designed signal processing schemes. It then employs a convolution neural network-based autoencoder to extract the low-dimensional features to be fed into a downstream model for gesture recognition. Wi-Learner introduces a novel meta-learner to "teach" the neural network to learn effectively from a small set of data points, allowing the base model to quickly adapt to a new domain using just one training sample. By so doing, we reduce the overhead of training data collection and allow a sensing system to adapt to the change of the deployed environment. We evaluate Wi-Learner by applying it to gesture recognition using the Widar 3.0 dataset. Extensive experiments demonstrate Wi-Learner is highly efficient and has a good generalization ability, by delivering an accuracy of 93.2% and 74.2% - 94.9% for in-domain and cross-domain using just one sample per gesture, respectively. 
cover:          /assets/images/covers/2022/wi-learner.png
authors:
  - Chao Feng
  - Nan Wang
  - Yicheng Jiang
  - Xia Zheng
  - Kang Li
  - Zheng Wang
  - <strong>Xiaojiang Chen</strong>
links:
  Weblink: https://dl.acm.org/doi/abs/10.1145/3550318
  Paper: https://eprints.whiterose.ac.uk/190042/1/UbiComp_2022_WiGesture.pdf
---
