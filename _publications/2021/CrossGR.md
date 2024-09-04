---
title:          "CrossGR: Accurate and Low-cost Cross-target Gesture Recognition Using Wi-Fi"
date:           2021-03-30 00:01:00 +0800
selected:       false
pub:            "UbiComp’21  (CCF-A)"
pub_date:       "2021"
abstract: >-
  This paper focuses on a fundamental question in Wi-Fi-based gesture recognition: "Can we use the knowledge learned from some users to perform gesture recognition for others?". This problem is also known as cross-target recognition. It arises in many practical deployments of Wi-Fi-based gesture recognition where it is prohibitively expensive to collect training data from every single user. We present CrossGR, a low-cost cross-target gesture recognition system. As a departure from existing approaches, CrossGR does not require prior knowledge (such as who is currently performing a gesture) of the target user. Instead, CrossGR employs a deep neural network to extract user-agnostic but gesture-related Wi-Fi signal characteristics to perform gesture recognition. To provide sufficient training data to build an effective deep learning model, CrossGR employs a generative adversarial network to automatically generate many synthetic training data from a small set of real-world examples collected from a small number of users. Such a strategy allows CrossGR to minimize the user involvement and the associated cost in collecting training examples for building an accurate gesture recognition system. We evaluate CrossGR by applying it to perform gesture recognition across 10 users and 15 gestures. Experimental results show that CrossGR achieves an accuracy of over 82.6% (up to 99.75%). We demonstrate that CrossGR delivers comparable recognition accuracy, but uses an order of magnitude less training samples collected from the end-users when compared to state-of-the-art recognition systems. 
cover:          /assets/images/covers/2021/crossgr.png
authors:
  - Xinyi Li
  - Liqiong Chang#
  - Fangfang Song
  - Ju Wang 
  - <strong>Xiaojiang Chen</strong>
  - Zhanyong Tang
  - Zheng Wang
links:
  Paper: https://eprints.whiterose.ac.uk/170933/6/ubicomp2021.pdf
  Weblink: https://dl.acm.org/doi/abs/10.1145/3448100
---
