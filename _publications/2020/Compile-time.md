---
title:          "Compile-time code virtualization for Android applications"
date:           2020-06-16 00:01:00 +0800
type:           software
selected:       false
pub:            "Computers & Security  (CCF-B)"
pub_date:       "2020"
abstract: >-
  Infringing intellectual property by reverse analysis is a severe threat to Android applications. By replacing the program instructions with virtual instructions that an adversary is unfamiliar with, code obfuscation based on virtualization is a promising way of protecting Android applications against reverse engineering. However, the current code virtualization approaches for Android only target at the DEX bytecode level. The DEX file with the open file format and more semantic information makes the decode-dispatch pattern easier to expose, which has been identified as a severe vulnerability of security and can be exploited by various attacks. Further, decode-dispatch interpretation frequently uses indirect branches in this structure to introduce extra overhead. This paper presents a novel approach to transfer code virtualization from DEX level to native level, which possesses strong security strength and good stealth, with only modest cost. Our approach contains two components: pre-compilation and compile-time virtualization. Pre-compilation is designed for performance improvement by identifying and decompiling the critical functions which consume a significant fraction of execution time. Compile-time virtualization builds upon the widely used LLVM compiler framework. It automatically translates the DEX bytecode into the common LLVM intermediate representations where a unified code virtualization pass can be applied for DEX code. We have implemented a working prototype Dex2VM of our technique and applied it to eight representative Android applications. Our experimental results show that the proposed approach can effectively protect the target code against a state-of-the-art code reverse engineering tool that is specifically designed for code virtualization, and it achieves good stealth with only modest cost. 
cover:          /assets/images/covers/2020/compile.jpg
authors:
  - Yujie Zhao
  - Zhanyong Tang
  - Guixin Ye
  - Dongxu Peng
  - Dingyi Fang
  - <strong>Xiaojiang Chen</strong>
  - Zheng Wang
links:
  Weblink: https://www.sciencedirect.com/science/article/pii/S0167404820300936
  Paper: https://raw.githubusercontent.com/xjchen-nwu/xiaojiangchen.github.io/main/paper/2020/Compile-time.pdf
---
