---
title:          "D-Watch: Embracing “bad” Multipaths for Device-Free Localization with COTS RFID Devices"
date:           2016-12-06 00:01:00 +0800
type:           Algorithm
selected:       false
pub:            "Co-Next’16  (CCF-B)"
pub_date:       "2016"
abstract: >-
  Device-free localization, which does not require any device attached to the target is playing a critical role in many applications such as intrusion detection, elderly monitoring, etc. This paper introduces D-Watch, a device-free system built on top of low cost commodity-off-the-shelf (COTS) RFID hardware. Unlike previous works which consider multipaths detrimental, D-Watch leverages the "bad" multipaths to provide a decimeter level localization accuracy without offline training. D-Watch harnesses the angle-of-arrival (AoA) information from the RFID tags' backscatter signals. The key intuition is that whenever a target blocks a signal's propagation path, the signal power experiences a drop which can be accurately captured by the proposed novel P-MUSIC algorithm. The wireless phase calibration scheme proposed does not interrupt the ongoing communication. Real-world experiments demonstrate the effectiveness of D-Watch. In a rich-multipath library environment, D-Watch can localize a human target at a median accuracy of 16.5 cm. In a table area of 2 m×2 m, D-Watch can track a user's fist at a median accuracy of 5.8 cm. D-Watch is capable of localizing multiple targets which is well known to be challenging in passive localization.
cover:          /assets/images/covers/2016/d-watch.png
authors:
  - Ju Wang
  - Jie Xiong
  - Hongbo Jiang
  - <strong>Xiaojiang Chen</strong>
  - Dingyi Fang
links:
  Weblink: https://doi.org/10.1145/2999572.2999589
  Paper: https://ink.library.smu.edu.sg/cgi/viewcontent.cgi?article=4387&context=sis_research
---
