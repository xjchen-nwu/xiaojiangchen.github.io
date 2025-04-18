---
title:          "Yet Another Text Captcha Solver: A Generative Adversarial Network Based Approach"
date:           2018-10-15 00:01:00 +0800
type:           Algorithm
selected:       false
conference:     CCS
pub:            "CCS’18"
pub_date:       "2018"
abstract: >-
  Despite several attacks have been proposed, text-based CAPTCHAs are still being widely used as a security mechanism. One of the reasons for the pervasive use of text captchas is that many of the prior attacks are scheme-specific and require a labor-intensive and time-consuming process to construct. This means that a change in the captcha security features like a noisier background can simply invalid an earlier attack. This paper presents a generic, yet effective text captcha solver based on the generative adversarial network. Unlike prior machine-learning-based approaches that need a large volume of manually-labeled real captchas to learn an effective solver, our approach requires significantly fewer real captchas but yields much better performance. This is achieved by first learning a captcha synthesizer to automatically generate synthetic captchas to learn a base solver, and then fine-tuning the base solver on a small set of real captchas using transfer learning. We evaluate our approach by applying it to 33 captcha schemes, including 11 schemes that are currently being used by 32 of the top-50 popular websites including Microsoft, Wikipedia, eBay and Google. Our approach is the most capable attack on text captchas seen to date. It outperforms four state-of-the-art text-captcha solvers by not only delivering a significant higher accuracy on all testing schemes, but also successfully attacking schemes where others have zero chance. We show that our approach is highly efficient as it can solve a captcha within 0.05 second using a desktop GPU. We demonstrate that our attack is generally applicable because it can bypass the advanced security features employed by most modern text captcha schemes. We hope the results of our work can encourage the community to revisit the design and practical use of text captchas.
cover:          /assets/images/covers/2018/yet.png
authors:
  - Guixin Ye
  - Zhanyong Tang
  - Dingyi Fang
  - Zhanxing Zhu
  - Yansong Feng
  - Pengfei Xu
  - <strong>Xiaojiang Chen</strong>
  - Zheng Wang
links:
  Weblink: https://doi.org/10.1145/3243734.3243754
  Paper: https://eprints.whiterose.ac.uk/151526/1/ccs18.pdf
---
