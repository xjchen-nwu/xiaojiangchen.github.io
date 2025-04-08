---
title:          "Pushing the Throughput Limit of OFDM-based Wi-Fi Backscatter Communication"
date:           2024-11-28 00:01:00 +0800
selected:       false
type:           Algorithm
conference:     Mobicom
pub:            "Mobicom’24 (CCF-A)"
#pub_date:       "20234"
abstract: >-
  The majority of existing Wi-Fi backscatter systems transmit tag data at rates lower than 250 kbps, as the tag data is modulated at OFDM symbol level, allowing for demodulation using commercial Wi-Fi receivers. However, it is necessary to modulate tag data at OFDM sample level to satisfy the requirements for higher throughput. A comprehensive theoretical analysis and experimental investigation conducted in this paper demonstrates that demodulating sample-level modulated tag data using commercial Wi-Fi receivers is unattainable due to excessive computational overhead and demodulation errors. This is because the significant tag information dispersion, loss, and shuffling are caused by Wi-Fi physical layer operations. We conclude that the optimal position for demodulation is the time-domain IQ samples, which do not undergo any Wi-Fi physical layer operations and preserve the intact, ordered, and undispersed information of tag-modulated data, thereby minimizing complexity and maximizing accuracy. We devise a demodulation algorithm using time domain IQ samples and implement on two types of demodulator: a dual radio chain demodulator and a single radio chain demodulator. Experiments show that our demodulation algorithm not only decrease the BER by at least three orders of magnitude, but also reduces the time complexity from exponential to linear. It achieves a tag data rate of up to 10 Mbps with QPSK modulation and a BER at 10−4 for the dual radio chain demodulator, and a tag data rate of up to 1 Mbps with BPSK and a BER at 10−4 for the single radio demodulator. We believe our results pave the way for designing Wi-Fi backscatter system with extremely high throughput.
authors:
  - Qihui Qin
  - Kai Chen
  - Yaxiong Xie
  - Heng Luo
  - Dingyi Fang
  - Xiaojiang Chen
cover:          /assets/images/covers/2024/wifi.png
links:
  Weblink: https://dl.acm.org/doi/10.1145/3636534.3690672
  Paper: https://raw.githubusercontent.com/xjchen-nwu/xiaojiangchen.github.io/main/paper/2024/Backscatter.pdf
---
