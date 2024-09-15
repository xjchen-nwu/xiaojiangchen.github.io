---
title:          "RS3CIS: Robust Single-Step Spectral Clustering with Intrinsic Subspace"
date:           2019-07-16 00:01:00 +0800
type:           software
selected:       false
pub:            "AAAI Technical Track: Machine Learning "
pub_date:       "2019"
abstract: >-
  Spectral clustering has been widely adopted because it can mine structures between data clusters. The clustering performance of spectral clustering depends largely on the quality of the constructed affinity graph, especially when the data has noise. Subspace learning can transform the original input features to a low-dimensional subspace and help to produce a robust method. Therefore, how to learn an intrinsic subspace and construct a pure affinity graph on a dataset with noise is a challenge in spectral clustering. In order to deal with this challenge, a new Robust Single-Step Spectral Clustering with Intrinsic Subspace (RS3CIS) method is proposed in this paper. RS3CIS uses a local representation method that projects the original data into a low-dimensional subspace through a row-sparse transformation matrix and uses the `2,1-norm of the transformation matrix as a penalty term to achieve noise suppression. In addition, RS3CIS introduces Laplacian matrix rank constraint so that it can output an affinity graph with an explicit clustering structure, which makes the final clustering result to be obtained in a single-step of constructing an affinity matrix. One synthetic dataset and six real benchmark datasets are used to verify the performance of the proposed method by performing clustering and projection experiments. Experimental results show that RS3CIS outperforms the related methods with respect to clustering quality, robustness and dimension reduction. 
# cover:          /assets/images/covers/2020/rfid.png
authors:
  - Yun Xiao
  - Pengzhen Ren
  - Zhihui Li
  - <strong>Xiaojiang Chen</strong>
  - Xin Wang
  - Dingyi Fang
links:
  Paper: https://ojs.aaai.org/index.php/AAAI/article/view/4489/4367
  Weblink: https://doi.org/10.1609/aaai.v33i01.33015482
---
