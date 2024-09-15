---
title:          "Using Generative Adversarial Networks to Break and Protect Text Captchas"
date:           2020-04-16 00:01:00 +0800
type:           software
selected:       false
pub:            "ACM Transactions on Privacy and Security  (CCF-B)"
pub_date:       "2020"
abstract: >-
  Text-based CAPTCHAs remains a popular scheme for distinguishing between a legitimate human user and an automated program. This article presents a novel genetic text captcha solver based on the generative adversarial network. As a departure from prior text captcha solvers that require a labor-intensive and time-consuming process to construct, our scheme needs significantly fewer real captchas but yields better performance in solving captchas. Our approach works by first learning a synthesizer to automatically generate synthetic captchas to construct a base solver. It then improves and fine-tunes the base solver using a small number of labeled real captchas. As a result, our attack requires only a small set of manually labeled captchas, which reduces the cost of launching an attack on a captcha scheme. We evaluate our scheme by applying it to 33 captcha schemes, of which 11 are currently used by 32 of the top-50 popular websites. Experimental results demonstrate that our scheme significantly outperforms four prior captcha solvers and can solve captcha schemes where others fail. As a countermeasure, we propose to add imperceptible perturbations onto a captcha image. We demonstrate that our countermeasure can greatly reduce the success rate of the attack. 
cover:          /assets/images/covers/2020/6.png
authors:
  - Guixin Ye
  - Zhanyong Tang
  - Dingyi Fang
  - Zhanxing Zhu
  - Yansong Feng
  - Pengfei Xu 
  - <strong>Xiaojiang Chen</strong>
  - JunGong Han
  - Zheng Wang
links:
  Paper: https://eprints.whiterose.ac.uk/156512/1/TOPS-2019-06-0079-R1.pdf
  Weblink: https://dl.acm.org/doi/abs/10.1145/3378446
---
