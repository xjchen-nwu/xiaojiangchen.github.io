---
title:          "Parallel Backscatter in the Wild: When Burstiness and Randomness Play with You"
date:           2018-10-15 00:01:00 +0800
type:           Algorithm
selected:       false
conference:     MobiCom
pub:            "MobiCom’18  (CCF-A)"
pub_date:       "2018"
abstract: >-
  Parallel backscatter is a promising technique for high throughput, low power communications. The existing approaches of parallel backscatter are based on a common assumption, i.e. the states of the collided signals are distinguishable from each other in either the time domain or the IQ (the In-phase and Quadrature) domain. We in this paper disclose the superclustering phenomenon, which invalidates that assumption and seriously affects the decoding performance. Then we propose an interstellar travelling model to capture the bursty Gaussian process of a collided signal. Based on this model, we design Hubble, a reliable signal processing approach to support parallel backscatter in the wild. Hubble addresses several technical challenges: (i) a novel scheme based on Pearson's Chi-Square test to extract the collided signals' combined states, (ii) a Markov driven method to capture the law of signal state transitions, and (iii) error correction schemes to guarantee the reliability of parallel decoding. Theoretically, Hubble is able to decode all the backscattered data, as long as the signals are detectable by the receiver. The experiment results demonstrate that the median throughput of Hubble is $11.7times$ higher than that of the state-of-the-art approach.
cover:          /assets/images/covers/2018/Parallel.png
authors:
  - Meng Jin
  - Dingyi Fang
  - Yuan He
  - Xin Meng 
  - <strong>Xiaojiang Chen</strong>
links:
  Weblink: https://dl.acm.org/doi/abs/10.1145/3241539.3241544
  Paper: https://dl.acm.org/doi/pdf/10.1145/3241539.3241544
---
