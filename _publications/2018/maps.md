---
title:          "Line separation from topographic maps using regional color and spatial information"
date:           2018-07-13 00:01:00 +0800
selected:       false
pub:            "IJCAI’18"
pub_date:       "2018"
abstract: >-
  The lines in topographic maps are difficult to be separated from each other because of their confusing colors. To solve this problem, we propose a novel line separation method using their regional color and spatial information. Firstly, we divide the lines into lots of circular regions with a certain diameter, and consider these regions as the basic processing units. Then based on a new concept of regional color confusion, we classify all the divided circular regions into two kinds of regions by whether the color is pure or mixed. Further, for pure color regions, a fuzzy clustering algorithm with Gaussian kernel can be used to cluster them into different lines based on their color information. Meanwhile, we determine the memberships of the mixed color regions according to their spatial relations with the clustered pure color regions. The concept of regional color confusion is proposed to reduce the influences of the confusing colors to line separation, and the spatial relations are utilized to solve the problems of the membership determination of the mixed color regions. The experimental results demonstrate that our method can achieve higher accuracy compare with other two state-of-the-art methods, which provides a novel idea for line element segmentation from scanned topographic maps.
cover:          /assets/images/covers/2018/map.png
authors:
  - Pengfei Xu
  - Qiguang Miao
  - Tiange Liu
  - <strong>Xiaojiang Chen</strong>
  - Dingyi Fang
links:
  Paper: https://www.ijcai.org/proceedings/2018/0501.pdf
  Weblink: https://dl.acm.org/doi/abs/10.5555/3304222.3304269
---