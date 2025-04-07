---
title:          "Enhance virtual-machine-based code obfuscation security through dynamic bytecode scheduling"
date:           2018-05-01 00:01:00 +0800
type:           software
selected:       false
pub:            "Computers & Security (CCF-B)"
pub_date:       "2018"
abstract: >-
    Code virtualization built upon virtual machine (VM) technologies is emerging as a viable method for implementing code obfuscation to protect programs against unauthorized analysis. State-of-the-art VM-based protection approaches use a fixed scheduling structure where the program always follows a single, deterministic execution path for the same input. Such approaches, however, are vulnerable in certain scenarios where the attacker can reuse knowledge extracted from previously seen software to crack applications protected with the same obfuscation scheme. This paper presents Dsvmp, a novel VM-based code obfuscation approach for software protection. Dsvmp brings together two techniques to provide stronger code protection than prior VM-based approaches. Firstly, it uses a dynamic instruction scheduler to randomly direct the program to execute different paths without violating the correctness across different runs. By randomly choosing the program execution path, the application exposes diverse behavior, making it much more difficult for an attacker to reuse the knowledge collected from previous runs or similar applications to launch an attack. Secondly, it employs multiple VMs to further obfuscate the mapping from VM opcode to native machine instructions, so that the same opcode could be mapped to different native instructions at runtime, making code analysis even harder. We have implemented Dsvmp in a prototype system and evaluated it using a set of widely used applications. Experimental results show that Dsvmp provides stronger protection with comparable runtime overhead and code size, when it is compared to two commercial VM-based code obfuscation tools.
cover:        /assets/images/covers/2018/vm.png
authors:
  - Kaiyuan Kuang
  - Zhanyong Tang
  - Xiaoqing Gong
  - Dingyi Fang
  - <strong>Xiaojiang Chen</strong>
  - Zheng Wang
links:
  Weblink: https://www.sciencedirect.com/science/article/pii/S0167404818300270#f0060
  Paper: https://www.sciencedirect.com/science/article/pii/S0167404818300270/pdfft?md5=764bf93252ea6531565d6215f93687d4&pid=1-s2.0-S0167404818300270-main.pdf
---
