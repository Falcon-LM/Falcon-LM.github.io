---
title: "Falcon-H1: A Family of Hybrid-Head Language Models Redefining Efficiency and Performance"
date: 2025-05-21T12:00:00Z # todo update
weight: 1
math: true
# search_hidden: false # to hide from search page
show_reading_time: true
show_bread_crumbs: true
show_post_nav_links: false # the prev/next after the content
show_code_copy_buttons: true
show_word_count: true
cover:
    image: "falcon-h1-logo.png"
    # can also paste direct link from external site
    # ex. https://i.ibb.co/K0HVPBd/paper-mod-profilemode.png
    alt: "<alt falcon-h1>"
    caption: ""
    relative: true # To use relative path for cover image, used in hugo Page-bundles
    responsive_images: true
header:
#   background: "" # background css value
    background_image: "falcon-h1-logo.png"
    gradient: true
    blur: true
contributors:
    core:
        - name: Falcon LLM team
---

<style>
  html, body {
    background: #f0f2f9; 
  }
</style>

{{< button href="https://chat.falconllm.tii.ae" label="Falcon CHAT" external=true >}}
{{< button href="https://huggingface.co/collections/tiiuae/falcon-h1-6819f2795bc406da60fab8df" label="Hugging Face" external=true >}}
{{< button href="https://github.com/tiiuae/falcon-h1" label="Github" external=true >}}
{{< button href="https://huggingface.co/spaces/tiiuae/Falcon-H1-Playground" label="DEMO" external=true >}}
{{< button href="https://discord.gg/vfw6k2G3" label="DISCORD" external=true >}}

<div style="display: flex; justify-content: center;">
  <div style="position: relative; width: 100%; max-width: 700px; aspect-ratio: 700 /600;">
    <iframe 
      src="/plots_h1/falcon_h1_performance_scatter_2.html" 
      style="border: none; position: absolute; width: 100%; height: 100%; left: 0; top: 0;"
      allowfullscreen
    ></iframe>
  </div>
</div>

# Introduction

Today, we are proud to introduce the Falcon-H1 series, a collection of six open-source models ranging from 0.5B to 34B parameters, each available in both base and instruction-tuned variants. At the core of these models lies a hybrid architecture that combines the strengths of the classical Transformer-based attention mechanism with the State Space Model (SSM), known for its superior long-context memory and computational efficiency. This architectural innovation is further enhanced by fundamental advancements in training dynamics and data utilization, enabling Falcon-H1 models to deliver uncompromised performance that rivals the top Transformer-based models across all covered size tiers.

In this release, we feature six open-weight models: 0.5B, 1.5B, 1.5B-Deep, 3B, 7B, and 34B, along with their instruct versions. All our open-source models are with a permissive license based on Apache 2.0. 

<div style="font-size: 90%;justify-content: center;">
<table style="width:100%; border-collapse: collapse;">
  <thead>
    <tr>
      <th style="text-align: center; padding: 8px;">Model Size</th>
      <th style="text-align: center; padding: 8px;">Base Model</th>
      <th style="text-align: center; padding: 8px;">Instruct Model</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><strong>0.5B</strong></td>
      <td><a href="https://huggingface.co/tiiuae/falcon-h1-0.5b-base" target="_blank">🤗 Falcon-H1-0.5B-Base</a></td>
      <td><a href="https://huggingface.co/tiiuae/falcon-h1-0.5b-instruct" target="_blank">🤗 Falcon-H1-0.5B-Instruct</a></td>
    </tr>
    <tr>
      <td><strong>1.5B</strong></td>
      <td><a href="https://huggingface.co/tiiuae/falcon-h1-1.5b-base" target="_blank">🤗 Falcon-H1-1.5B-Base</a></td>
      <td><a href="https://huggingface.co/tiiuae/falcon-h1-1.5b-instruct" target="_blank">🤗 Falcon-H1-1.5B-Instruct</a></td>
    </tr>
    <tr>
      <td><strong>1.5B-Deep</strong></td>
      <td><a href="https://huggingface.co/tiiuae/falcon-h1-1.5b-deep-base" target="_blank">🤗 Falcon-H1-1.5B-Deep-Base</a></td>
      <td><a href="https://huggingface.co/tiiuae/falcon-h1-1.5b-deep-instruct" target="_blank">🤗 Falcon-H1-1.5B-Deep-Instruct</a></td>
    </tr>
    <tr>
      <td><strong>3B</strong></td>
      <td><a href="https://huggingface.co/tiiuae/falcon-h1-3b-base" target="_blank">🤗 Falcon-H1-3B-Base</a></td>
      <td><a href="https://huggingface.co/tiiuae/falcon-h1-3b-instruct" target="_blank">🤗 Falcon-H1-3B-Instruct</a></td>
    </tr>
    <tr>
      <td><strong>7B</strong></td>
      <td><a href="https://huggingface.co/tiiuae/falcon-h1-7b-base" target="_blank">🤗 Falcon-H1-7B-Base</a></td>
      <td><a href="https://huggingface.co/tiiuae/falcon-h1-7b-instruct" target="_blank">🤗 Falcon-H1-7B-Instruct</a></td>
    </tr>
    <tr>
      <td><strong>34B</strong></td>
      <td><a href="https://huggingface.co/tiiuae/falcon-h1-34b-base" target="_blank">🤗 Falcon-H1-34B-Base</a></td>
      <td><a href="https://huggingface.co/tiiuae/falcon-h1-34b-instruct" target="_blank">🤗 Falcon-H1-34B-Instruct</a></td>
    </tr>
  </tbody>
</table>
</div>

# Key Features of Falcon-H1

* **Hybrid Architecture (Attention + SSM):**
  We combine attention and Mamba-2 heads in parallel within our hybrid mixer block. Importantly, the amount of attention and mamba heads can be adjusted independently, allowing for an optimal attention/SSM ratio. This hybrid design enables **faster inference**, **lower memory usage**, and **strong generalization** across tasks.

* **Wide Range of Model Sizes:**
  Available in **six scales**—0.5B, 1.5B, 1.5B-deep, 3B, 7B, and 34B—with both **base** and **instruction-tuned** variants, suitable for everything from edge devices to large-scale deployments.

* **Multilingual by Design:**
  Supports **18 languages** natively, including Arabic (ar), Czech (cs), German (de), English (en), Spanish (es), French (fr), Hindi (hi), Italian (it), Japanese (ja), Korean (ko), Dutch (nl), Polish (pl), Portuguese (pt), Romanian (ro), Russian (ru), Swedish (sv), Urdu (ur), and Chinese (zh) — with scalability to  **100+ languages**, thanks to our multilingual tokenizer trained on diverse language datasets.

* **Compact Models, Big Performance:**
  **Falcon-H1-0.5B** delivers performance on par with typical **7B models from 2024**, while **Falcon-H1-1.5B-Deep** rivals many of the current leading **7B–10B models**. Each Falcon-H1 model is designed to **match or exceed the performance of models at least twice its size**, making them ideal for **low-resource and edge deployments** without compromising on capability.

* **256K Context Support:**
  Falcon-H1 models support up to **256K context length**, enabling applications in long-document processing, multi-turn dialogue, and long-range reasoning.

* **Exceptional STEM capabilities:**
  Falcon-H1 models deliver strong performance in math and science domains thanks to the focus on high-quality STEM data during training.

* **Robust Training Strategy:**
  Uses a **high-efficiency data strategy** and customized **Maximal Update Parametrization (μP)** to ensure smooth and scalable training across model sizes.

<p align="center">
  <img src="/plots_h1/h1_architecture.png" alt="Falcon-H1 model architectures"/>
</p>

# Main Principles behind building Falcon-H1

When embarking on the Falcon-H1 series development, we chose to fundamentally rethink the training approach. While the field of LLM development has converged on many established practices that reliably produce strong models, these conventions were primarily validated on classical transformer architectures. The shift from pure attention mechanisms to a hybrid attention-SSM design represents a significant architectural change, making it uncertain whether these standard practices would remain optimal.

Given this uncertainty, we conducted an extensive experimentation phase, systematically revisiting nearly every aspect of model design and training methodology before launching our final training runs. While we will provide comprehensive details in our upcoming technical report, we'd like to share the key insights that shaped the Falcon-H1 models.

## Architecture
<!-- <iframe src="/plots_h1/architecture.html" width="1900" height="1050" style="border: none;"></iframe> -->
<p align="center">
  <img src="/plots_h1/h1_hybrid_design.png" alt="Falcon-H1 hybrid model desig"/>
</p>

The hybrid attention-SSM models have a larger configuration space of all the parameters that define the model architecture. Our goal was to probe each of these configuration parameters to check its impact on model performance and efficiency. As a result, we reveal regions of model configuration space with an increased performance at a mild efficiency cost. We can roughly divide the hybrid model configuration space in the following 4 blocks:

- **SSM specific parameters**. Our SSM layer is based on mamba-2 architecture that organized into groups of heads, similar to attention in modern transformer models. We have found that deviation of the number of groups or heads from the values typically used in the literature doesn't improve performance but could degrade efficiency. In contrast, using a larger memory size, an SSM-specific variable that does not have an attention analog, gives a boost in performance with only a mild efficiency cost.   
- **Attention specific parameters**. We employ a standard full attention layer. However, we have found that using an extremely large-scale parameter in rotary positional embeddings (RoPE) significantly improves the model performance. Our hypothesis is that, compared to pure transformers, in hybrid models such large values become possible since some positional information is natively processed by the SSM part of the model. 
- **Combining mamba and attention**. There are many ways to combine attention and SSM in one model, with a sequential or parallel approach being the main design choice. We have converged on the parallel approach demonstrated in the diagram above. The key feature of our parallel hybrid design is the possibility of adjusting the ratio of attention and SSM heads, where we have found that a relatively small fraction of attention is sufficient for good performance.     
- **General parameters**. In our experiments we observed the increased model depth to have the largest impact on the performance, though at efficiency cost. This makes choosing the model's depth a tough tradeoff that depends on specific use cases. Our Falcon-H1-1.5B-deep is motivated by this tradeoff and targets usage scenarios requiring maximal performance at a small parameter count.     

## Data strategy

Capabilities of language models are known to come mainly from the training data, and that stays true for Falcon-H1 series. Besides the raw data prepared for the model, it is crucial how and when this data is shown during training. One such data strategy is commonly called *curriculum learning*, where simpler data is shown at the beginning of the training while the samples requiring more advanced reasoning are left for the end. Surprisingly, a completely opposite strategy worked best for us. Giving even the most complicated data, an advanced math problem or a long context sample, from the beginning of the training seems to give the model more time to learn features essential for handling the respective complex tasks.     

Another key aspect is the scarcity of high-quality data. A common concern when training large models is brute force memorization of the data as opposed to its real understanding. To minimize the risk of such memorization, a common practice is not reusing data samples during training, or doing it at most a few times for the highest quality samples. A by-product of this strategy is data mixture being dominated by web samples that have disproportionally large volume compared to high-quality sources. We have found that the memorization effect might be a bit overestimated, and carefully estimating model's *memorization window* allows to reuse high-quality samples more often without any harm to model's generalization ability.     

## Customized maximal update parametrization (μP) 

Classical μP is a technique heavily rooted in theory of neural networks but with a clear practical application: if one finds optimal training hyperparameters at a single base model size, it can be effortlessly transferred to other, typically bigger, model sizes using Mup scaling rules. We employed Mup hyperparameter transfer for the whole Falcon-H1 series, greatly reducing experimentation time and making it possible to train 6 models in parallel. 

On top of that, we made the next step into inner workings behind μP to further boost the model performance. In a nutshell, each component of the model “wants” to train at its own intensity, and that intensity depends on the size of the component. μP scaling rules take into account this dependence through so-called ``μP multipliers'' to enable optimal hyperparameter transfer. However, classical μP uses trivial multipliers of 1 at the base model size, which corresponds to a nasusmption that intensity of all components are already optimal at the base size. We discard this assumption and tune the multipliers at the base model size. Specifically, we have divided model parameters into 35 fine-grained groups and performed a joint optimization of the respective 35 multipliers. 

## Training dynamics

One of our first steps in working on Falcon-H1 series was treating and removing spikes that are known to be a serious issue for SSM-based models. The solution that has worked the best for us is placing dampening μP multipliers at a certain location of the SSM block. In addition to the smooth final model training, the removal of spikes is essential to get clean signals in the subsequent experiments.

We have observed that many aspects of the training dynamics are linked together under a common theme of noise interpretation and control. This includes learning rate and batch size schedules, scaling of the learning rate with batch size, and the behavior of parameter norms. In particular, we have found the parameter norms to be mostly determined by the training hyperparameters rather than the model fitting the data. To take this into account, we have included weight decay, a hyperparameter that primarily controls parameter norms, into both the training schedule and μP multipliers.  

# Performance

## Instruct Models
The current Falcon-H1 models were trained without reasoning-specific fine-tuning, yet they already demonstrate strong general instruction-following capabilities. To highlight their performance, we present a detailed comparison of Falcon-H1-34B-Instruct against other top-performing Transformer models of similar or larger scales, including: Qwen3-32B (non-thinking mode), Qwen2.5-72B, Qwen2.5-32B, Gemma3-27B, Llama-4-Scout-17B-16E (109B) and LLaMA3.3-70B. For full evaluation settings and methodology, please refer to the [Falcon-H1 GitHub page](https://github.com/tiiuae/falcon-H1).

<p align="center">
  <img src="/plots_h1/h1_34B_comparison.png" alt="Falcon-H1-34B model comparison"/>
</p>

One of the standout features of the Falcon-H1 series is the strong performance of its compact models. Below, we compare 1.5B-scale instruct models. Falcon-H1-1.5B-Deep-Instruct clearly outperforms leading models in its class, such as Qwen3-1.7B-Instruct. Even more notably, it performs on par with—or better than many 7B models, including Falcon3-7B-Instruct and Qwen2.5-7B-Instruct. 
> 🔎 **Note:** Falcon-H1-1.5B-Deep and Falcon-H1-1.5B were trained using identical settings; the only difference lies in their architectural depth and width. 

<p align="center">
  <img src="/plots_h1/h1_1B_comparison.png" alt="Falcon-H1-1B model comparison"/>
</p>

### Multilingual Benchmarks
To give a picture of Falcon-H1 performance across languages, we provide average between Hellaswag and MMLU scores for 30B scale models and for a set of selected languages, including Arabic, German, Spanish, French, Hindi, Italian, Dutch, Portuguese, Romanian, Russian, and Swedish. It also demonstrates on-par performance in the other supported languages.

{{< barplot_horizontal_fh1 id="multilingual-eval" highlight="Falcon-H1-34B" ymin="0.45" ymax="0.85" ylabel="Performance %" xaxis_percentage="true" height="800">}}
[ 

  {"category": "Arabic", "model": "Falcon-H1-34B", "value": 0.6821},
  {"category": "Arabic", "model": "Qwen3-32B", "value": 0.5905},
  {"category": "Arabic", "model": "Qwen2.5-72B", "value": 0.6843},
  {"category": "Arabic", "model": "Llama4-scout", "value": 0.6205},
  {"category": "Arabic", "model": "Gemma3-27B", "value": 0.6435},

  {"category": "German", "model": "Falcon-H1-34B", "value": 0.7797},
  {"category": "German", "model": "Qwen3-32B", "value": 0.654},
  {"category": "German", "model": "Qwen2.5-72B", "value": 0.7475},
  {"category": "German", "model": "Llama4-scout", "value": 0.6909},
  {"category": "German", "model": "Gemma3-27B", "value": 0.7124},

  {"category": "Spanish", "model": "Falcon-H1-34B", "value": 0.8032},
  {"category": "Spanish", "model": "Qwen3-32B", "value": 0.6845},
  {"category": "Spanish", "model": "Qwen2.5-72B", "value": 0.7853},
  {"category": "Spanish", "model": "Llama4-scout", "value": 0.7298},
  {"category": "Spanish", "model": "Gemma3-27B", "value": 0.7429},

  {"category": "French", "model": "Falcon-H1-34B", "value": 0.8047},
  {"category": "French", "model": "Qwen3-32B", "value": 0.6747},
  {"category": "French", "model": "Qwen2.5-72B", "value": 0.7812},
  {"category": "French", "model": "Llama4-scout", "value": 0.7232},
  {"category": "French", "model": "Gemma3-27B", "value": 0.7391},

  {"category": "Hindi", "model": "Falcon-H1-34B", "value": 0.6267},
  {"category": "Hindi", "model": "Qwen3-32B", "value": 0.5301},
  {"category": "Hindi", "model": "Qwen2.5-72B", "value": 0.6123},
  {"category": "Hindi", "model": "Llama4-scout", "value": 0.5631},
  {"category": "Hindi", "model": "Gemma3-27B", "value": 0.5966},

  {"category": "Italian", "model": "Falcon-H1-34B", "value": 0.7952},
  {"category": "Italian", "model": "Qwen3-32B", "value": 0.6805},
  {"category": "Italian", "model": "Qwen2.5-72B", "value": 0.7732},
  {"category": "Italian", "model": "Llama4-scout", "value": 0.7088},
  {"category": "Italian", "model": "Gemma3-27B", "value": 0.7367},

  {"category": "Dutch", "model": "Falcon-H1-34B", "value": 0.7832},
  {"category": "Dutch", "model": "Qwen3-32B", "value": 0.6345},
  {"category": "Dutch", "model": "Qwen2.5-72B", "value": 0.7529},
  {"category": "Dutch", "model": "Llama4-scout", "value": 0.7076},
  {"category": "Dutch", "model": "Gemma3-27B", "value": 0.7163},

  {"category": "Portuguese", "model": "Falcon-H1-34B", "value": 0.8037},
  {"category": "Portuguese", "model": "Qwen3-32B", "value": 0.468},
  {"category": "Portuguese", "model": "Qwen2.5-72B", "value": 0.7848},
  {"category": "Portuguese", "model": "Llama4-scout", "value": 0.7247},
  {"category": "Portuguese", "model": "Gemma3-27B", "value": 0.7444},

  {"category": "Romanian", "model": "Falcon-H1-34B", "value": 0.7655},
  {"category": "Romanian", "model": "Qwen3-32B", "value": 0.6497},
  {"category": "Romanian", "model": "Qwen2.5-72B", "value": 0.7241},
  {"category": "Romanian", "model": "Llama4-scout", "value": 0.6917},
  {"category": "Romanian", "model": "Gemma3-27B", "value": 0.715},

  {"category": "Russian", "model": "Falcon-H1-34B", "value": 0.7562},
  {"category": "Russian", "model": "Qwen3-32B", "value": 0.6482},
  {"category": "Russian", "model": "Qwen2.5-72B", "value": 0.7387},
  {"category": "Russian", "model": "Llama4-scout", "value": 0.6712},
  {"category": "Russian", "model": "Gemma3-27B", "value": 0.6992},

  {"category": "Swedish", "model": "Falcon-H1-34B", "value": 0.7766},
  {"category": "Swedish", "model": "Qwen3-32B", "value": 0.6379},
  {"category": "Swedish", "model": "Qwen2.5-72B", "value": 0.7417},
  {"category": "Swedish", "model": "Llama4-scout", "value": 0.697},
  {"category": "Swedish", "model": "Gemma3-27B", "value": 0.7221}

]
{{< /barplot_horizontal_fh1 >}}

### Long Context Benchmarks
One of the standout features of **Falcon-H1** is its ability to handle **long-context inputs**, an area where **State Space Models (SSMs)** offer significant advantages in terms of **memory efficiency and computational cost**.

To demonstrate these capabilities, we evaluate **Falcon-H1-34B-Instruct** against **Qwen2.5-72B-Instruct** across a set of long-context benchmarks. We focus on three core task categories drawn from the Helmet benchmark suite - Retrieval-Augmented Generation (RAG): *Natural Questions*, *TriviaQA*, *PopQA*, *HotpotQA*; Recall tasks: *JSON KV*, *RULER MK Needle*, *RULER MK UUID*, *RULER MV*; Long Document QA tasks: *∞BENCH QA*, *∞BENCH MC*. These evaluations highlight Falcon-H1’s strength in scaling to longer sequences while maintaining high performance and efficiency.

<iframe src="/plots_h1/barplot_vertical_fh1.html" width="1500" height="450" style="border: none;"></iframe>


In addition, we conducted a comprehensive evaluation of the Falcon-H1 series alongside leading Transformer-based models across 23 benchmarks, covering multiple domains and model scales. You can explore the interactive results below—simply select the benchmarks most relevant to your use case to view the corresponding aggregated performance scores.
<iframe src="/plots_h1/test_perf_instruct.html" width="1500" height="850" style="border: none;"></iframe>



## Base Models

We provide a detailed comparison of Falcon-H1-34B-Base with other leading base models at the same or larger scale, including Qwen2.5-72B, Qwen2.5-32B, Llama-4-Scout-17B-16E (109B) and Gemma3-27B. 
> 🔎 **Note:** Qwen3-32B does not currently offer a base model checkpoint.

{{< barplot_horizental id="base-eval-34b" highlight="Falcon-H1-34B-Base" ymin="0.25" ymax="0.95" ylabel="Performance %" xaxis_percentage="true" height="700">}}
[    
    { "category": "MMLU", "model": "Falcon-H1-34B-Base", "value": 0.8346 },
    { "category": "MMLU", "model": "Qwen2.5-72B", "value": 0.8596 },
    { "category": "MMLU", "model": "Qwen2.5-32B", "value": 0.8318 },
    { "category": "MMLU", "model": "Llama-4-Scout-17B-16E", "value": 0.7798 },
    { "category": "MMLU", "model": "gemma-3-27b-pt", "value": 0.7832 },
    
    { "category": "MMLU-stem",     "model": "Falcon-H1-34B-Base",    "value": 0.8382 },
    { "category": "MMLU-stem",     "model": "Qwen2.5-72B",           "value": 0.8481 },
    { "category": "MMLU-stem",     "model": "Qwen2.5-32B",           "value": 0.8281 },
    { "category": "MMLU-stem",     "model": "Llama-4-Scout-17B-16E", "value": 0.7257 },
    { "category": "MMLU-stem",     "model": "gemma-3-27b-pt",        "value": 0.7659 },

    
    { "category": "MMLU-Pro",      "model": "Falcon-H1-34B-Base",    "value": 0.5718 },
    { "category": "MMLU-Pro",      "model": "Qwen2.5-72B",           "value": 0.6022 },
    { "category": "MMLU-Pro",      "model": "Qwen2.5-32B",           "value": 0.5805 },
    { "category": "MMLU-Pro",      "model": "Llama-4-Scout-17B-16E", "value": 0.5016 },
    { "category": "MMLU-Pro",      "model": "gemma-3-27b-pt",        "value": 0.4964 },


    { "category": "GPQA",          "model": "Falcon-H1-34B-Base",    "value": 0.427  },
    { "category": "GPQA",          "model": "Qwen2.5-72B",           "value": 0.4228 },
    { "category": "GPQA",          "model": "Qwen2.5-32B",           "value": 0.3968 },
    { "category": "GPQA",          "model": "Llama-4-Scout-17B-16E", "value": 0.3599 },
    { "category": "GPQA",          "model": "gemma-3-27b-pt",        "value": 0.3582 },

    { "category": "BBH",           "model": "Falcon-H1-34B-Base",    "value": 0.6936 },
    { "category": "BBH",           "model": "Qwen2.5-72B",           "value": 0.6777 },
    { "category": "BBH",           "model": "Qwen2.5-32B",           "value": 0.6745 },
    { "category": "BBH",           "model": "Llama-4-Scout-17B-16E", "value": 0.6171 },
    { "category": "BBH",           "model": "gemma-3-27b-pt",        "value": 0.6160 },

    { "category": "ARC-Challenge", "model": "Falcon-H1-34B-Base",    "value": 0.7125 },
    { "category": "ARC-Challenge", "model": "Qwen2.5-72B",           "value": 0.7244 },
    { "category": "ARC-Challenge", "model": "Qwen2.5-32B",           "value": 0.7048 },
    { "category": "ARC-Challenge", "model": "Llama-4-Scout-17B-16E", "value": 0.6297 },
    { "category": "ARC-Challenge", "model": "gemma-3-27b-pt",        "value": 0.7031 },

    { "category": "Winogrande",    "model": "Falcon-H1-34B-Base",    "value": 0.8272 },
    { "category": "Winogrande",    "model": "Qwen2.5-72B",           "value": 0.8374 },
    { "category": "Winogrande",    "model": "Qwen2.5-32B",           "value": 0.8232 },
    { "category": "Winogrande",    "model": "Llama-4-Scout-17B-16E", "value": 0.7893 },
    { "category": "Winogrande",    "model": "gemma-3-27b-pt",        "value": 0.8240 },

    { "category": "HellaSwag",     "model": "Falcon-H1-34B-Base",    "value": 0.8568 },
    { "category": "HellaSwag",     "model": "Qwen2.5-72B",           "value": 0.8757 },
    { "category": "HellaSwag",     "model": "Qwen2.5-32B",           "value": 0.8513 },
    { "category": "HellaSwag",     "model": "Llama-4-Scout-17B-16E", "value": 0.8401 },
    { "category": "HellaSwag",     "model": "gemma-3-27b-pt",        "value": 0.8619 },

    { "category": "GSM8K",         "model": "Falcon-H1-34B-Base",    "value": 0.7650 },
    { "category": "GSM8K",         "model": "Qwen2.5-72B",           "value": 0.8976 },
    { "category": "GSM8K",         "model": "Qwen2.5-32B",           "value": 0.9014 },
    { "category": "GSM8K",         "model": "Llama-4-Scout-17B-16E", "value": 0.8324 },
    { "category": "GSM8K",         "model": "gemma-3-27b-pt",        "value": 0.8135 },

    { "category": "MATH_lv5",      "model": "Falcon-H1-34B-Base",    "value": 0.4071 },
    { "category": "MATH_lv5",      "model": "Qwen2.5-72B",           "value": 0.3814 },
    { "category": "MATH_lv5",      "model": "Qwen2.5-32B",           "value": 0.3640 },
    { "category": "MATH_lv5",      "model": "Llama-4-Scout-17B-16E", "value": 0.2719 },
    { "category": "MATH_lv5",      "model": "gemma-3-27b-pt",        "value": 0.2538 },

    { "category": "HumanEval",     "model": "Falcon-H1-34B-Base",    "value": 0.7012 },
    { "category": "HumanEval",     "model": "Qwen2.5-72B",           "value": 0.5915 },
    { "category": "HumanEval",     "model": "Qwen2.5-32B",           "value": 0.5976 },
    { "category": "HumanEval",     "model": "Llama-4-Scout-17B-16E", "value": 0.5732 },
    { "category": "HumanEval",     "model": "gemma-3-27b-pt",        "value": 0.4878 },

    { "category": "HumanEval-plus",    "model": "Falcon-H1-34B-Base",    "value": 0.6463 },
    { "category": "HumanEval-plus",    "model": "Qwen2.5-72B",           "value": 0.5122 },
    { "category": "HumanEval-plus",    "model": "Qwen2.5-32B",           "value": 0.5183 },
    { "category": "HumanEval-plus",    "model": "Llama-4-Scout-17B-16E", "value": 0.4878 },
    { "category": "HumanEval-plus",    "model": "gemma-3-27b-pt",        "value": 0.4085 },

    { "category": "MBPP",          "model": "Falcon-H1-34B-Base",    "value": 0.8333 },
    { "category": "MBPP",          "model": "Qwen2.5-72B",           "value": 0.8704 },
    { "category": "MBPP",          "model": "Qwen2.5-32B",           "value": 0.8307 },
    { "category": "MBPP",          "model": "Llama-4-Scout-17B-16E", "value": 0.7778 },
    { "category": "MBPP",          "model": "gemma-3-27b-pt",        "value": 0.7619 },

    { "category": "MBPP-plus",         "model": "Falcon-H1-34B-Base",    "value": 0.7037 },
    { "category": "MBPP-plus",         "model": "Qwen2.5-72B",           "value": 0.7063 },
    { "category": "MBPP-plus",         "model": "Qwen2.5-32B",           "value": 0.6878 },
    { "category": "MBPP-plus",         "model": "Llama-4-Scout-17B-16E", "value": 0.6429 },
    { "category": "MBPP-plus",         "model": "gemma-3-27b-pt",        "value": 0.6164 },

    { "category": "Average",       "model": "Falcon-H1-34B-Base",    "value": 0.7013 },
    { "category": "Average",       "model": "Qwen2.5-72B",           "value": 0.7005 },
    { "category": "Average",       "model": "Qwen2.5-32B",           "value": 0.6851 },
    { "category": "Average",       "model": "Llama-4-Scout-17B-16E", "value": 0.6307 },
    { "category": "Average",       "model": "gemma-3-27b-pt",        "value": 0.6250 }
]
{{< /barplot_horizental >}}

Below, we compare 1.5B-scale base models. Falcon-H1-1.5B-Deep-Base clearly outperforms leading models in its class, such as Qwen3-1.7B-Base. Notably, it performs on par with Falcon3-7B, and even exceeds it on math and reasoning tasks, making it an excellent foundation for building small-scale reasoning-focused models.


{{< barplot_horizontal_fh1 id="base-eval-1b" highlight="Falcon-H1-1.5B-Deep-Base" highlight2="Falcon-H1-1.5B-Base" ymin="0" ymax="0.8" ylabel="Performance %" xaxis_percentage="true" height="700">}}
[    
    { "category": "MMLU", "model": "Falcon3-7B-Base", "value": 0.6998 },
    { "category": "MMLU", "model": "Falcon-H1-1.5B-Deep-Base", "value": 0.6629 },
    { "category": "MMLU", "model": "Falcon-H1-1.5B-Base", "value": 0.6181 },
    { "category": "MMLU", "model": "Qwen3-1.7B-Base", "value": 0.6246 },
    { "category": "MMLU", "model": "gemma-3-1b-pt", "value": 0.2633 },
    
    { "category": "MMLU-stem",     "model": "Falcon3-7B-Base",           "value": 0.6771 },
    { "category": "MMLU-stem",     "model": "Falcon-H1-1.5B-Deep-Base",    "value": 0.6743 },
    { "category": "MMLU-stem",     "model": "Falcon-H1-1.5B-Base",           "value": 0.6337 },
    { "category": "MMLU-stem",     "model": "Qwen3-1.7B-Base", "value": 0.6153 },
    { "category": "MMLU-stem",     "model": "gemma-3-1b-pt",        "value": 0.2759 },

    { "category": "MMLU-Pro",      "model": "Falcon3-7B-Base",           "value": 0.3923 },
    { "category": "MMLU-Pro",      "model": "Falcon-H1-1.5B-Deep-Base",    "value": 0.4107 },
    { "category": "MMLU-Pro",      "model": "Falcon-H1-1.5B-Base",           "value": 0.3553 },
    { "category": "MMLU-Pro",      "model": "Qwen3-1.7B-Base", "value": 0.3381 },
    { "category": "MMLU-Pro",      "model": "gemma-3-1b-pt",        "value": 0.1131 },

    { "category": "GPQA",          "model": "Falcon3-7B-Base",           "value": 0.3507 },
    { "category": "GPQA",          "model": "Falcon-H1-1.5B-Deep-Base",    "value": 0.328  },
    { "category": "GPQA",          "model": "Falcon-H1-1.5B-Base",           "value": 0.2911 },
    { "category": "GPQA",          "model": "Qwen3-1.7B-Base", "value": 0.2945 },
    { "category": "GPQA",          "model": "gemma-3-1b-pt",        "value": 0.2466 },

    { "category": "BBH",           "model": "Falcon3-7B-Base",           "value": 0.5088 },
    { "category": "BBH",           "model": "Falcon-H1-1.5B-Deep-Base",    "value": 0.5237 },
    { "category": "BBH",           "model": "Falcon-H1-1.5B-Base",           "value": 0.4657 },
    { "category": "BBH",           "model": "Qwen3-1.7B-Base", "value": 0.4305 },
    { "category": "BBH",           "model": "gemma-3-1b-pt",        "value": 0.3026 },

    { "category": "ARC-Challenge", "model": "Falcon-H1-1.5B-Deep-Base",    "value": 0.5589 },
    { "category": "ARC-Challenge", "model": "Falcon-H1-1.5B-Base",           "value": 0.5324 },
    { "category": "ARC-Challenge", "model": "Falcon3-7B-Base",           "value": 0.6271 },
    { "category": "ARC-Challenge", "model": "Qwen3-1.7B-Base", "value": 0.5572 },
    { "category": "ARC-Challenge", "model": "gemma-3-1b-pt",        "value": 0.3933 },

    { "category": "Winogrande",    "model": "Falcon-H1-1.5B-Deep-Base",    "value": 0.6709 },
    { "category": "Winogrande",    "model": "Falcon-H1-1.5B-Base",           "value": 0.6559 },
    { "category": "Winogrande",    "model": "Falcon3-7B-Base",           "value": 0.7364 },
    { "category": "Winogrande",    "model": "Qwen3-1.7B-Base", "value": 0.663 },
    { "category": "Winogrande",    "model": "gemma-3-1b-pt",        "value": 0.6259 },

    { "category": "HellaSwag",     "model": "Falcon-H1-1.5B-Deep-Base",    "value": 0.6972 },
    { "category": "HellaSwag",     "model": "Falcon-H1-1.5B-Base",           "value": 0.6676 },
    { "category": "HellaSwag",     "model": "Falcon3-7B-Base",           "value": 0.7669 },
    { "category": "HellaSwag",     "model": "Qwen3-1.7B-Base", "value": 0.6709 },
    { "category": "HellaSwag",     "model": "gemma-3-1b-pt",        "value": 0.6294 },

    { "category": "GSM8K",         "model": "Falcon3-7B-Base",           "value": 0.7695 },
    { "category": "GSM8K",         "model": "Falcon-H1-1.5B-Deep-Base",    "value": 0.6869 },
    { "category": "GSM8K",         "model": "Falcon-H1-1.5B-Base",           "value": 0.5201 },
    { "category": "GSM8K",         "model": "Qwen3-1.7B-Base", "value": 0.7074 },
    { "category": "GSM8K",         "model": "gemma-3-1b-pt",        "value": 0.022 },

    { "category": "MATH_lv5",      "model": "Falcon3-7B-Base",           "value": 0.2009 },
    { "category": "MATH_lv5",      "model": "Falcon-H1-1.5B-Deep-Base",    "value": 0.2477 },
    { "category": "MATH_lv5",      "model": "Falcon-H1-1.5B-Base",           "value": 0.2039 },
    { "category": "MATH_lv5",      "model": "Qwen3-1.7B-Base", "value": 0.1639 },
    { "category": "MATH_lv5",      "model": "gemma-3-1b-pt",        "value": 0.012 },

    { "category": "HumanEval",     "model": "Falcon3-7B-Base",           "value": 0.50 },
    { "category": "HumanEval",     "model": "Falcon-H1-1.5B-Deep-Base",    "value": 0.5244 },
    { "category": "HumanEval",     "model": "Falcon-H1-1.5B-Base",           "value": 0.50 },
    { "category": "HumanEval",     "model": "Qwen3-1.7B-Base", "value": 0.6768 },
    { "category": "HumanEval",     "model": "gemma-3-1b-pt",        "value": 0.067 },

    { "category": "HumanEval-plus",    "model": "Falcon3-7B-Base",           "value": 0.4329 },
    { "category": "HumanEval-plus",    "model": "Falcon-H1-1.5B-Deep-Base",    "value": 0.4634 },
    { "category": "HumanEval-plus",    "model": "Falcon-H1-1.5B-Base",           "value": 0.4268 },
    { "category": "HumanEval-plus",    "model": "Qwen3-1.7B-Base", "value": 0.6098 },
    { "category": "HumanEval-plus",    "model": "gemma-3-1b-pt",        "value": 0.0549 },

    { "category": "MBPP",          "model": "Falcon3-7B-Base",           "value": 0.6799 },
    { "category": "MBPP",          "model": "Falcon-H1-1.5B-Deep-Base",    "value": 0.709 },
    { "category": "MBPP",          "model": "Falcon-H1-1.5B-Base",           "value": 0.6508 },
    { "category": "MBPP",          "model": "Qwen3-1.7B-Base", "value": 0.6772 },
    { "category": "MBPP",          "model": "gemma-3-1b-pt",        "value": 0.127 },

    { "category": "MBPP-plus",         "model": "Falcon3-7B-Base",           "value": 0.5714 },
    { "category": "MBPP-plus",         "model": "Falcon-H1-1.5B-Deep-Base",    "value": 0.6032 },
    { "category": "MBPP-plus",         "model": "Falcon-H1-1.5B-Base",           "value": 0.5503 },
    { "category": "MBPP-plus",         "model": "Qwen3-1.7B-Base", "value": 0.5899 },
    { "category": "MBPP-plus",         "model": "gemma-3-1b-pt",        "value": 0.0952 },

    { "category": "Average",       "model": "Falcon3-7B-Base",           "value": 0.5653 },
    { "category": "Average",       "model": "Falcon-H1-1.5B-Deep-Base",    "value": 0.5544 },
    { "category": "Average",       "model": "Falcon-H1-1.5B-Base",           "value": 0.5051 },
    { "category": "Average",       "model": "Qwen3-1.7B-Base", "value": 0.5442 },
    { "category": "Average",       "model": "gemma-3-1b-pt",        "value": 0.2306 }
]
{{< /barplot_horizontal_fh1 >}}

For the base models, we also provide an interactive plot showcasing their performance across 14 benchmarks, spanning multiple domains and various model scales.

<iframe src="/plots_h1/test_perf_base.html" width="1500" height="850" style="border: none;"></iframe>


## Model Efficiency

We compare input (prefill) and output (generation) throughput between Falcon-H1 and Qwen2.5-32B in the plots below. While Transformers are slightly faster at shorter context lengths, our hybrid model becomes significantly more efficient as the context grows—achieving up to **4× speedup in input throughput** and **8× in output throughput** at longer sequence lengths. Benchmarks were run using our **Falcon-H1 vLLM implementation** and the official vLLM implementation of Qwen2.5-32B.

This performance gain highlights the **scalability** of the Falcon-H1 architecture. We attribute the throughput gap at small context lengths to the more mature optimizations of attention mechanisms, compared to current State Space Models (SSMs) implementations, in current inference pipelines.

> ⚙️ *We invite the community to contribute to further optimizing SSM implementations* — a promising direction for advancing the next generation of efficient LLMs.

<iframe src="/plots_h1/throughput_combined.html" width="1500" height="1350" style="border: none;"></iframe>

## Prompt Examples
Below are a few example outputs generated by Falcon-H1-34B-Instruct.
{{< prompt_gallery "content/blog/falcon-H1/llm_examples.json" >}}

## Open Source Commitment
In line with our mission to foster AI accessibility and collaboration, <span class="bold">Falcon-H1</span> is released under the [<span class="bold">Falcon LLM license</span>](https://falconllm.tii.ae/falcon-terms-and-conditions.html). We hope the AI community finds these models valuable for research, application development, and further experimentation. <span class="bold">Falcon-H1</span> is a continuation of our efforts to create more capable and efficient foundation models. We welcome feedback and collaboration from the community as we continue to refine and advance the capabilities of these models.

## Useful Links

- Access to our models (including GPTQ and GGUF) through [the Falcon-H1 HuggingFace collection](https://huggingface.co/collections/tiiuae/falcon-h1-6819f2795bc406da60fab8df).
- Check out our [Github page](https://github.com/tiiuae/falcon-h1) for the latest technical updates on Falcon-H1 models.
- Feel free to join [our discord server](https://discord.gg/bHx5QEaQ) if you have any questions or to interact with our researchers and developers.
- Check out the [Falcon-LLM License link](https://falconllm.tii.ae/falcon-terms-and-conditions.html) for more details about the license.


## Citation

```
@misc{tiifalconh1,
    title = {Falcon-H1: A Family of Hybrid-Head Language Models Redefining Efficiency and Performance},
    url = {https://falcon-lm.github.io/blog/falcon-h1},
    author = {Falcon-LLM Team},
    month = {May},
    year = {2025}
}
```
