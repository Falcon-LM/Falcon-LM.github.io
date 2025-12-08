---
title: "Falcon-H1R: Pushing the Reasoning Frontiers with a Hybrid Model for Efficient Test-Time Scaling"
date: 2025-12-07T12:00:00Z
weight: 1
# aliases: ["/first"]
# tags: ["Research"]
# draft: true
# comments: false
# description: "Desc Text."
# disable_share: false
# hide_meta: false
# hide_summary: false # to hide summary in list
# hide_footer: false
math: true
# search_hidden: false # to hide from search page
show_reading_time: true
show_bread_crumbs: true
show_post_nav_links: false # the prev/next after the content
show_code_copy_buttons: true
show_word_count: true
#use_hugo_toc: true
#show_toc: true
# toc_open: true # default expand all
cover:
    image: "cover.png"
    # can also paste direct link from external site
    # ex. https://i.ibb.co/K0HVPBd/paper-mod-profilemode.png
    alt: "<alt falcon-h1r-7b>"
    caption: ""
    relative: true # To use relative path for cover image, used in hugo Page-bundles
    responsive_images: true
header:
#   background: "" # background css value
    background_image: "cover.png"
    gradient: true
    blur: true
contributors:
    core:
        - name: Iheb Chaabane
          image: img/contributors/iheb_chaabane.jpg
        - name: Puneesh Khanna
          image: img/contributors/puneesh_khanna.jpg
        - name: Suhail Mohmad
          image: img/contributors/suhail_mohmad.jpg
        - name: Slim Frikha
          image: img/contributors/slim_frikha.jpg
        - name: Shi Hu
          image: img/contributors/shi_hu.jpg
        - name: Abdalgader Abubaker
          image: img/contributors/abdalgader_abubaker.jpg
        - name: Reda Alami
          image: img/contributors/reda_alami.png
        - name: Mikhail Lubinets
          image: img/contributors/mikhail_lubinets.jpg
        - name: Mohamed El Amine Seddik
          image: img/contributors/mohamed_seddik.png
        - name: Hakim Hacid
          image: img/contributors/hakim_hacid.png
---

{{< button href="https://chat.falconllm.tii.ae" label="Falcon CHAT" external=true >}}
{{< button href="https://huggingface.co/collections/tiiuae/falcon-h1r" label="Hugging Face" external=true >}}
{{< button href="https://huggingface.co/spaces/tiiuae/Falcon-H1R-playground" label="DEMO" external=true >}}
{{< button href="https://discord.gg/Cbek57PrZE" label="DISCORD" external=true >}}

# Introducing Falcon H1R 7B

We’re excited to unveil <span class="bold">Falcon H1R 7B</span>, a decoder-only large language model, developed by the [Technology Innovation Institute (TII)](https://www.tii.ae/ai-and-digital-science) in Abu Dhabi. Building upon the robust foundation of Falcon-H1 Base model, <span class="bold">Falcon H1R 7B</span> takes a major leap forward in reasoning capabilities.

Despite its modest 7 billion‑parameter size, <span class="bold">Falcon H1R 7B</span> matches or outperforms state‑of‑the‑art reasoning models that are 2–7× larger, proving its exceptional parameter efficiency and does so consistently across a wide range of reasoning‑intensive benchmarks.

Its performance stems from a carefully curated training set and a two‑stage pipeline of efficient supervised fine‑tuning followed by RL scaling.

<span class="bold">Falcon H1R 7B</span>’s design rests on three key axes of reasoning efficiency: speed, token‑efficiency, and accuracy that together set the “3‑D limits” of performance. By integrating [Deep Think with confidence (DeepConf)](https://github.com/facebookresearch/deepconf) during test‑time scaling, the model achieves state‑of‑the‑art efficiency, delivering substantial accuracy gains while generating fewer tokens than competing models.

This iteration includes:


- **Full checkpoint** – [🤗 Falcon H1R 7B](https://huggingface.co/tiiuae/Falcon-H1R-7B)
- **Quantized GGUF** – [🤗 Falcon H1R 7B GGUF](https://huggingface.co/tiiuae/Falcon-H1R-7B-GGUF)

</br>

## Training recipe

<span class="bold">Falcon H1R 7B</span>’s training regimen is a two‑stage, data‑driven pipeline designed to maximize reasoning quality.

- **Cold‑start supervised fine‑tuning (SFT)**: Starting from the Falcon‑H1‑7B backbone, we train on curated datasets that contain **step‑by‑step long‑form reasoning traces** across three domains: mathematics, coding, and science. We additionally include non-reasoning domains: chat, tool‑calling, safety, etc. **Difficulty‑aware filtering** is applied during SFT to prioritize challenging examples. Training targets **extremely long response lengths (up to 48 k tokens)**.

- **Reinforcement learning with GRPO**: The SFT checkpoint is further refined using the **GRPO** algorithm. Rewards are given for correct reasoning chains, encouraging the model to generate high‑quality, diverse outputs while still staying within the tokens budget-limit. The RL stage **balances exploration and exploitation** to improve output quality while respecting token constraints.

## Model's Capabilities
Below, the bar plot compares <span class="bold">Falcon H1R 7B</span>’s performance across math, code & agentic, and general benchmarks against the leading 7B to 47B models.

- **Math**: <span class="bold">Falcon H1R 7B</span> leads (*73.96 %*) by a wide margin, beating the next best (Apriel 1.5 15B at 69.32 %) and outpacing all larger baselines such as Qwen3‑32B (63.66 %) and Nemotron H 47B (49.72 %).

- **Code & Agentic**: <span class="bold">Falcon H1R 7B</span> has the highest score in this group (*33.95 %*), ahead of Qwen3‑32B (33.40 %) and Apriel 1.5 (31.60 %).

- **General**: <span class="bold">Falcon H1R 7B</span> remains highly competitive (*49.48 %*), sitting just below Apriel 1.5 (53.10 %) and Phi 4 Reasoning Plus 14B (51.18 %).

</br>

{{< dynamic_barplot_horizental id="agg" highlight="Falcon H1R 7B" ylabel="Performance %" xaxis_percentage="true" groupby="Categories" y_axis_labels="Models" height="500" width="800" >}}
[

    { "category": "Math", "model": "Qwen3 8B", "value": 0.5924 },
    { "category": "Math", "model": "DeepSeek R1 0528 Qwen3 8B", "value": 0.667 },
    { "category": "Math", "model": "Phi 4 Reasoning Plus 14B", "value": 0.613 },
    { "category": "Math", "model": "Apriel 1.5 15B Thinker", "value": 0.6932 },
    { "category": "Math", "model": "Qwen3 32B", "value": 0.6366 },
    { "category": "Math", "model": "Nemotron H 47B Reasoning", "value": 0.4972 },
    { "category": "Math", "model": "Falcon H1R 7B", "value": 0.7396 },

    { "category": "Code & Agentic", "model": "Qwen3 8B", "value": 0.2780 },
    { "category": "Code & Agentic", "model": "DeepSeek R1 0528 Qwen3 8B", "value": 0.2693 },
    { "category": "Code & Agentic", "model": "Phi 4 Reasoning Plus 14B", "value": 0.2833 },
    { "category": "Code & Agentic", "model": "Apriel 1.5 15B Thinker", "value": 0.316 },
    { "category": "Code & Agentic", "model": "Qwen3 32B", "value": 0.3340 },
    { "category": "Code & Agentic", "model": "Nemotron H 47B Reasoning", "value": 0.2497 },
    { "category": "Code & Agentic", "model": "Falcon H1R 7B", "value": 0.3395 },

    { "category": "General", "model": "Qwen3 8B", "value": 0.4105 },
    { "category": "General", "model": "DeepSeek R1 0528 Qwen3 8B", "value": 0.4133 },
    { "category": "General", "model": "Phi 4 Reasoning Plus 14B", "value": 0.5118 },
    { "category": "General", "model": "Apriel 1.5 15B Thinker", "value": 0.531 },
    { "category": "General", "model": "Qwen3 32B", "value": 0.4622 },
    { "category": "General", "model": "Nemotron H 47B Reasoning", "value": 0.4352 },
    { "category": "General", "model": "Falcon H1R 7B", "value": 0.4948 }
]
{{< /dynamic_barplot_horizental >}}

### Math Benchmarks

<span class="bold">Falcon H1R 7B</span> delivers top‑tier math results across a spectrum of difficulty levels, all while staying at only 7B parameters.

| Benchmark | Falcon H1R 7B | Next best |
|-----------|---------------|-----------|
| **AIME‑24** | 88.1 % | Apriel 1.5 15B – 86.2 % |
| **AIME‑25** | 83.1 % | Apriel 1.5 15B – 80.0 % |
| **HMMT‑25** | 64.9 % | Apriel 1.5 15B – 61.0 % |
| **AMO-Bench** | 36.3 % | DeepSeek R1‑0528 Qwen3‑8B – 23.3 % |

{{< dynamic_barplot_horizental id="math" highlight="Falcon H1R 7B" ylabel="Performance %" yaxis_percentage="true" groupby="Benchmarks" y_axis_labels="Models" >}}
[
    { "category": "AIME24", "model": "Qwen3 8B", "value": 0.7790 },
    { "category": "AIME24", "model": "DeepSeek R1 0528 Qwen3 8B", "value": 0.8330 },
    { "category": "AIME24", "model": "Phi 4 Reasoning Plus 14B", "value": 0.7720 },
    { "category": "AIME24", "model": "Apriel 1.5 15B Thinker", "value": 0.8620 },
    { "category": "AIME24", "model": "Qwen3 32B", "value": 0.7940 },
    { "category": "AIME24", "model": "Nemotron H 47B Reasoning", "value": 0.6460 },
    { "category": "AIME24", "model": "Falcon H1R 7B", "value": 0.8810 },

    { "category": "AIME25", "model": "Qwen3 8B", "value": 0.6580 },
    { "category": "AIME25", "model": "DeepSeek R1 0528 Qwen3 8B", "value": 0.7580 },
    { "category": "AIME25", "model": "Phi 4 Reasoning Plus 14B", "value": 0.7120 },
    { "category": "AIME25", "model": "Apriel 1.5 15B Thinker", "value": 0.8 },
    { "category": "AIME25", "model": "Qwen3 32B", "value": 0.7100 },
    { "category": "AIME25", "model": "Nemotron H 47B Reasoning", "value": 0.514 },
    { "category": "AIME25", "model": "Falcon H1R 7B", "value": 0.8310 },

    { "category": "HMMT25", "model": "Qwen3 8B", "value": 0.4100 },
    { "category": "HMMT25", "model": "DeepSeek R1 0528 Qwen3 8B", "value": 0.5430 },
    { "category": "HMMT25", "model": "Phi 4 Reasoning Plus 14B", "value": 0.4770 },
    { "category": "HMMT25", "model": "Apriel 1.5 15B Thinker", "value": 0.61 },
    { "category": "HMMT25", "model": "Qwen3 32B", "value": 0.4980 },
    { "category": "HMMT25", "model": "Nemotron H 47B Reasoning", "value": 0.342 },
    { "category": "HMMT25", "model": "Falcon H1R 7B", "value": 0.6490 },

    { "category": "AMO-Bench", "model": "Qwen3 8B", "value": 0.1410 },
    { "category": "AMO-Bench", "model": "DeepSeek R1 0528 Qwen3 8B", "value": 0.2330 },
    { "category": "AMO-Bench", "model": "Phi 4 Reasoning Plus 14B", "value": 0.1500 },
    { "category": "AMO-Bench", "model": "Apriel 1.5 15B Thinker", "value": 0.222 },
    { "category": "AMO-Bench", "model": "Qwen3 32B", "value": 0.2130 },
    { "category": "AMO-Bench", "model": "Nemotron H 47B Reasoning", "value": 0.07 },
    { "category": "AMO-Bench", "model": "Falcon H1R 7B", "value": 0.3630 },

    { "category": "MATH500", "model": "Qwen3 8B", "value": 0.9740 },
    { "category": "MATH500", "model": "DeepSeek R1 0528 Qwen3 8B", "value": 0.9680 },
    { "category": "MATH500", "model": "Phi 4 Reasoning Plus 14B", "value": 0.9540 },
    { "category": "MATH500", "model": "Apriel 1.5 15B Thinker", "value": 0.9720 },
    { "category": "MATH500", "model": "Qwen3 32B", "value": 0.9680 },
    { "category": "MATH500", "model": "Nemotron H 47B Reasoning", "value": 0.9140 },
    { "category": "MATH500", "model": "Falcon H1R 7B", "value": 0.9740 }

]
{{< /dynamic_barplot_horizental >}}

### Code & agentic Benchmarks

<span class="bold">Falcon H1R 7B</span> delivers solid reasoning across a spectrum of code and agentic challenges.

| Benchmark | Falcon H1R 7B | Relative standing |
|-----------|---------------|-------------------|
| **LCB v6** | 68.6 % | Highest of all models – outperforms even the 32B Qwen3 by ~7 pp |
| **SciCode (sub-problem)** | 28.3 % | Best for <8B models|
| **TB Hard** | 4.96 % | Second best (Apriel 1.5 15B at 9.9 %) and beats the 8B/32B Qwen3 models |


{{< dynamic_barplot_horizental id="code" highlight="Falcon H1R 7B" ylabel="Performance %" yaxis_percentage="true" groupby="Benchmarks" y_axis_labels="Models" default_groupby="LCB v6;SciCode (sub-problem);TB Hard">}}
[
    { "category": "LCB v6", "model": "Qwen3 8B", "value": 0.5300 },
    { "category": "LCB v6", "model": "DeepSeek R1 0528 Qwen3 8B", "value": 0.5720 },
    { "category": "LCB v6", "model": "Phi 4 Reasoning Plus 14B", "value": 0.5310 },
    { "category": "LCB v6", "model": "Apriel 1.5 15B Thinker", "value": 0.53 },
    { "category": "LCB v6", "model": "Qwen3 32B", "value": 0.6100 },
    { "category": "LCB v6", "model": "Nemotron H 47B Reasoning", "value": 0.474 },
    { "category": "LCB v6", "model": "Falcon H1R 7B", "value": 0.686 },

    { "category": "SciCode (sub-problem)", "model": "Qwen3 8B", "value": 0.2830 },
    { "category": "SciCode (sub-problem)", "model": "DeepSeek R1 0528 Qwen3 8B", "value": 0.2220 },
    { "category": "SciCode (sub-problem)", "model": "Phi 4 Reasoning Plus 14B", "value": 0.2980 },
    { "category": "SciCode (sub-problem)", "model": "Apriel 1.5 15B Thinker", "value": 0.3190 },
    { "category": "SciCode (sub-problem)", "model": "Qwen3 32B", "value": 0.3640 },
    { "category": "SciCode (sub-problem)", "model": "Nemotron H 47B Reasoning", "value": 0.2610 },
    { "category": "SciCode (sub-problem)", "model": "Falcon H1R 7B", "value": 0.283 },

    { "category": "SciCode main", "model": "Qwen3 8B", "value": 0.067 },
    { "category": "SciCode main", "model": "DeepSeek R1 0528 Qwen3 8B", "value": 0.026 },
    { "category": "SciCode main", "model": "Phi 4 Reasoning Plus 14B", "value": 0.072 },
    { "category": "SciCode main", "model": "Apriel 1.5 15B Thinker", "value": 0.082 },
    { "category": "SciCode main", "model": "Qwen3 32B", "value": 0.092 },
    { "category": "SciCode main", "model": "Nemotron H 47B Reasoning", "value": 0.046 },
    { "category": "SciCode main", "model": "Falcon H1R 7B", "value": 0.039 },

    { "category": "τ²-Telecom", "model": "Qwen3 8B", "value": 0.2780 },
    { "category": "τ²-Telecom", "model": "DeepSeek R1 0528 Qwen3 8B", "value": 0.0 },
    { "category": "τ²-Telecom", "model": "Phi 4 Reasoning Plus 14B", "value": 0.0 },
    { "category": "τ²-Telecom", "model": "Apriel 1.5 15B Thinker", "value": 0.6840 },
    { "category": "τ²-Telecom", "model": "Qwen3 32B", "value": 0.2980 },
    { "category": "τ²-Telecom", "model": "Nemotron H 47B Reasoning", "value": 0.1140 },
    { "category": "τ²-Telecom", "model": "Falcon H1R 7B", "value": 0.254 },

    { "category": "TB Hard", "model": "Qwen3 8B", "value": 0.0210 },
    { "category": "TB Hard", "model": "DeepSeek R1 0528 Qwen3 8B", "value": 0.0140 },
    { "category": "TB Hard", "model": "Phi 4 Reasoning Plus 14B", "value": 0.0210 },
    { "category": "TB Hard", "model": "Apriel 1.5 15B Thinker", "value": 0.0990 },
    { "category": "TB Hard", "model": "Qwen3 32B", "value": 0.0280 },
    { "category": "TB Hard", "model": "Nemotron H 47B Reasoning", "value": 0.0142 },
    { "category": "TB Hard", "model": "Falcon H1R 7B", "value": 0.0496 }

]
{{< /dynamic_barplot_horizental >}}

### General Benchmarks
<span class="bold">Falcon H1R 7B</span> proves its versatility across a broad set of general‑purpose tasks, consistently matching or surpassing larger competitors while staying at only 7B parameters.

| Benchmark | Falcon H1R 7B | Relative standing |
|-----------|---------------|-------------------|
| **GPQA‑D** | 61.3 % | On-par with other 8B models (Qwen3‑8B 61.2 %, DeepSeek 61.4 %)|
| **MMLU‑Pro** | 72.1 % | Outperforms all 8B rivals and close to the 14/32B cohort. |
| **HLE** | 11.1 % | Slightly behind Apriel 1.5 15B and beats every other 8B/32B variant|
| **IFBench** | 53.4 % | Second best after Apriel (55.8 %) and outpaces all 8B models; demonstrates robust instruction‑following at a compact scale. |

{{< dynamic_barplot_horizental id="gen" highlight="Falcon H1R 7B" ylabel="Performance %" yaxis_percentage="true" groupby="Benchmarks" y_axis_labels="Models">}}
[
    { "category": "GPQA-D", "model": "Qwen3 8B", "value": 0.6120 },
    { "category": "GPQA-D", "model": "DeepSeek R1 0528 Qwen3 8B", "value": 0.6140 },
    { "category": "GPQA-D", "model": "Phi 4 Reasoning Plus 14B", "value": 0.6790 },
    { "category": "GPQA-D", "model": "Apriel 1.5 15B Thinker", "value": 0.682 },
    { "category": "GPQA-D", "model": "Qwen3 32B", "value": 0.673 },
    { "category": "GPQA-D", "model": "Nemotron H 47B Reasoning", "value": 0.568 },
    { "category": "GPQA-D", "model": "Falcon H1R 7B", "value": 0.613 },

    { "category": "MMLU-Pro", "model": "Qwen3 8B", "value": 0.6350 },
    { "category": "MMLU-Pro", "model": "DeepSeek R1 0528 Qwen3 8B", "value": 0.6910 },
    { "category": "MMLU-Pro", "model": "Phi 4 Reasoning Plus 14B", "value": 0.7920 },
    { "category": "MMLU-Pro", "model": "Apriel 1.5 15B Thinker", "value": 0.765 },
    { "category": "MMLU-Pro", "model": "Qwen3 32B", "value": 0.7390 },
    { "category": "MMLU-Pro", "model": "Nemotron H 47B Reasoning", "value": 0.786 },
    { "category": "MMLU-Pro", "model": "Falcon H1R 7B", "value": 0.721 },

    { "category": "HLE", "model": "Qwen3 8B", "value": 0.0420 },
    { "category": "HLE", "model": "DeepSeek R1 0528 Qwen3 8B", "value": 0.0560 },
    { "category": "HLE", "model": "Phi 4 Reasoning Plus 14B", "value": 0.0590 },
    { "category": "HLE", "model": "Apriel 1.5 15B Thinker", "value": 0.1200 },
    { "category": "HLE", "model": "Qwen3 32B", "value": 0.0830 },
    { "category": "HLE", "model": "Nemotron H 47B Reasoning", "value": 0.044 },
    { "category": "HLE", "model": "Falcon H1R 7B", "value": 0.1113 },

    { "category": "IFBench", "model": "Qwen3 8B", "value": 0.3530 },
    { "category": "IFBench", "model": "DeepSeek R1 0528 Qwen3 8B", "value": 0.2920 },
    { "category": "IFBench", "model": "Phi 4 Reasoning Plus 14B", "value": 0.5170 },
    { "category": "IFBench", "model": "Apriel 1.5 15B Thinker", "value": 0.558 },
    { "category": "IFBench", "model": "Qwen3 32B", "value": 0.3540 },
    { "category": "IFBench", "model": "Nemotron H 47B Reasoning", "value": 0.343 },
    { "category": "IFBench", "model": "Falcon H1R 7B", "value": 0.534 }

]
{{< /dynamic_barplot_horizental >}}


## Inference
Here we benchmark <span class="bold">Falcon H1R 7B</span>’s token throughput per GPU against Qwen3 8B under realistic test‑time scaling workloads.

<span class="bold">Falcon H1R 7B</span> outperforms Qwen3 8B across the board, especially as batch size grows.  In the typical test‑time scaling case (512 → 32k), Falcon reaches roughly **1,000 tokens/s/GPU at batch 32** and **≈ 1,500 at batch 64**, nearly double Qwen3’s rates.  The advantage widens further for longer inputs (8k → 16k), where Falcon again delivers ≈ 1,800 tokens/s/GPU while Qwen3 stays below 900. The hybrid Transformer–Mamba backbone is the key to this superior scaling and memory efficiency.

{{< dynamic_line id="inference" highlight="Falcon H1R 7B" category_label="I/O size"
name_label="Models" x_label="Batch size" y_label="Tokens / s / GPU" default_categories="Input=512, Output=32k">}}
[
    { "category": "Input=512, Output=32k", "name": "Falcon H1R 7B", "x": 2, "y": 192, "tooltip": "tp=1, dp=1"},
    { "category": "Input=512, Output=32k", "name": "Falcon H1R 7B", "x": 8, "y": 467.5, "tooltip": "tp=2, dp=1"},
    { "category": "Input=512, Output=32k", "name": "Falcon H1R 7B", "x": 16, "y": 697, "tooltip": "tp=2, dp=1"},
    { "category": "Input=512, Output=32k", "name": "Falcon H1R 7B", "x": 32, "y": 1025.5, "tooltip": "tp=2, dp=2"},
    { "category": "Input=512, Output=32k", "name": "Falcon H1R 7B", "x": 64, "y": 1520, "tooltip": "tp=2, dp=2"},
    { "category": "Input=512, Output=32k", "name": "Falcon H1R 7B", "x": 128, "y": 1393.5, "tooltip": "tp=2, dp=2"},

    { "category": "Input=512, Output=32k", "name": "Qwen3 8B", "x": 2, "y": 214, "tooltip": "tp=1, dp=1"},
    { "category": "Input=512, Output=32k", "name": "Qwen3 8B", "x": 8, "y": 467, "tooltip": "tp=2, dp=1"},
    { "category": "Input=512, Output=32k", "name": "Qwen3 8B", "x": 16, "y": 668, "tooltip": "tp=2, dp=1"},
    { "category": "Input=512, Output=32k", "name": "Qwen3 8B", "x": 32, "y": 720.5, "tooltip": "tp=4, dp=1"},
    { "category": "Input=512, Output=32k", "name": "Qwen3 8B", "x": 64, "y": 681.5, "tooltip": "tp=4, dp=1"},
    { "category": "Input=512, Output=32k", "name": "Qwen3 8B", "x": 128, "y": 622.75, "tooltip": "tp=4, dp=1"},

    { "category": "Input=8k, Output=16k", "name": "Falcon H1R 7B", "x": 2, "y": 193, "tooltip": "tp=1, dp=1"},
    { "category": "Input=8k, Output=16k", "name": "Falcon H1R 7B", "x": 8, "y": 469, "tooltip": "tp=2, dp=1"},
    { "category": "Input=8k, Output=16k", "name": "Falcon H1R 7B", "x": 16, "y": 689.5, "tooltip": "tp=2, dp=1"},
    { "category": "Input=8k, Output=16k", "name": "Falcon H1R 7B", "x": 32, "y": 1045.5, "tooltip": "tp=2, dp=1"},
    { "category": "Input=8k, Output=16k", "name": "Falcon H1R 7B", "x": 64, "y": 1523, "tooltip": "tp=2, dp=2"},
    { "category": "Input=8k, Output=16k", "name": "Falcon H1R 7B", "x": 128, "y": 1760.5, "tooltip": "tp=2, dp=2"},

    { "category": "Input=8k, Output=16k", "name": "Qwen3 8B", "x": 2, "y": 215, "tooltip": "tp=1, dp=1"},
    { "category": "Input=8k, Output=16k", "name": "Qwen3 8B", "x": 8, "y": 469, "tooltip": "tp=2, dp=1"},
    { "category": "Input=8k, Output=16k", "name": "Qwen3 8B", "x": 16, "y": 671, "tooltip": "tp=2, dp=1"},
    { "category": "Input=8k, Output=16k", "name": "Qwen3 8B", "x": 32, "y": 812.5, "tooltip": "tp=2, dp=1"},
    { "category": "Input=8k, Output=16k", "name": "Qwen3 8B", "x": 64, "y": 876.75, "tooltip": "tp=4, dp=1"},
    { "category": "Input=8k, Output=16k", "name": "Qwen3 8B", "x": 128, "y": 715.75, "tooltip": "tp=4, dp=1"}

]
{{< /dynamic_line >}}

## Test time scaling

Test‑time scaling (TTS) boosts a model’s reasoning by running many parallel solution chains and aggregating the best answer, unlocking latent capability without extra training.
In <span class="bold">Falcon H1R 7B</span> we employ **Deep Think with Confidence (DeepConf)**, a lightweight, confidence‑aware filtering method that dynamically discards low‑quality reasoning traces during or after generation. DeepConf leverages the model’s own next‑token confidence scores to identify and prune noisy traces, **requiring no additional training or hyper‑parameter tuning**.

<span class="bold">Falcon H1R 7B</span> thrives at high batch sizes and is token‑efficient, generating fewer tokens per inference for a given accuracy level, making TTS especially effective and positioning the model on a new Pareto frontier of performance vs. inference compute.

The grid below shows how many tokens were generated for a given accuracy. <span class="bold">Falcon H1R 7B</span> sits on the Pareto frontier of **low cost, high performance**:

- **AIME 24 / 25** – 96.7 % accuracy with <100 M tokens, beating every other 8B model and matching the best 14/32B systems.
- **AMO-Bench** – 35.9 % accuracy with just 217 M tokens, surpassing every other model.


</br>

{{< dynamic_grid id="tts" highlight="Falcon H1R 7B" yaxis_percentage="true" category_label="Benchmarks"
name_label="Model" x_label="Generated Tokens (M)" y_label="Accuracy (%)" size_label="Model size" x_higher_better="false"
y_higher_better="true" pareto_text="Low cost, High performance">}}
[
    { "category": "AIME24", "name": "Falcon H1R 7B", "x": 89.8, "y": 96.7, "size": 7},
    { "category": "AIME25", "name": "Falcon H1R 7B", "x": 95.1, "y": 96.7, "size": 7},
    { "category": "GPQA-D", "name": "Falcon H1R 7B", "x": 452.3, "y": 70.2, "size": 7},
    { "category": "AMO-Bench", "name": "Falcon H1R 7B", "x": 216.8, "y": 35.9, "size": 7},


    { "category": "AIME24", "name": "DeepSeek R1 0528 Qwen3 8B", "x": 145.5, "y": 90, "size": 8},
    { "category": "AIME25", "name": "DeepSeek R1 0528 Qwen3 8B", "x": 174.5, "y": 82.8, "size": 8},
    { "category": "GPQA-D", "name": "DeepSeek R1 0528 Qwen3 8B", "x": 454.9, "y": 59.9, "size": 8},
    { "category": "AMO-Bench", "name": "DeepSeek R1 0528 Qwen3 8B", "x": 487.9, "y": 25.6, "size": 8},

    { "category": "AIME24", "name": "Qwen3 8B", "x": 138.3, "y": 80, "size": 8},
    { "category": "AIME25", "name": "Qwen3 8B", "x": 177.2, "y": 80, "size": 8},
    { "category": "GPQA-D", "name": "Qwen3 8B", "x": 451.3, "y": 60.9, "size": 8},
    { "category": "AMO-Bench", "name": "Qwen3 8B", "x": 320, "y": 15.4, "size": 8},

    { "category": "AIME24", "name": "Nemotron H 8B Reasoning", "x": 156, "y": 53.3, "size": 8},
    { "category": "AIME25", "name": "Nemotron H 8B Reasoning", "x": 166.8, "y": 43.3, "size": 8},
    { "category": "GPQA-D", "name": "Nemotron H 8B Reasoning", "x": 355, "y": 61.1, "size": 8},
    { "category": "AMO-Bench", "name": "Nemotron H 8B Reasoning", "x": 279.4, "y": 7.7, "size": 8},

    { "category": "AIME24", "name": "Phi 4 R Plus 14B", "x": 123.9, "y": 86.7, "size": 14},
    { "category": "AIME25", "name": "Phi 4 R Plus 14B", "x": 145.9, "y": 83.3, "size": 14},
    { "category": "GPQA-D", "name": "Phi 4 R Plus 14B", "x": 613, "y": 73.2, "size": 14},
    { "category": "AMO-Bench", "name": "Phi 4 R Plus 14B", "x": 276.9, "y": 20.5, "size": 14},

    { "category": "AIME24", "name": "Qwen3 32B", "x": 134.4, "y": 86.7, "size": 32},
    { "category": "AIME25", "name": "Qwen3 32B", "x": 174.8, "y": 86.7, "size": 32},
    { "category": "GPQA-D", "name": "Qwen3 32B", "x": 460, "y": 70.1, "size": 32},
    { "category": "AMO-Bench", "name": "Qwen3 32B", "x": 364.8, "y": 28.2, "size": 32}
]
{{< /dynamic_grid >}}

<span class="bold">Falcon H1R 7B</span> demonstrates that a 7 billion‑parameter model can rival larger peers in reasoning tasks while delivering efficient inference, making it an attractive choice for developers and researchers alike.

## Open Source Commitment
In line with our mission to foster AI accessibility and collaboration, <span class="bold">Falcon H1R 7B</span> is released under the [<span class="bold">Falcon LLM license</span>](https://falconllm.tii.ae/falcon-terms-and-conditions.html). We hope the AI community finds these models valuable for research, application development, and further experimentation. <span class="bold">Falcon H1R 7B</span> is a continuation of our efforts to create more capable and efficient foundation models. We welcome feedback and collaboration from the community as we continue to refine and advance the capabilities of these models.

## Useful Links

- Access to our models through [the Falcon H1R 7B HuggingFace collection](https://huggingface.co/collections/tiiuae/falcon-h1r).
- View [our technical report](https://github.com/tiiuae/falcon-h1r/blob/main/tech_report.pdf)
- Feel free to join [our discord server](https://discord.gg/Cbek57PrZE) if you have any questions or to interact with our researchers and developers.
- Check out the [Falcon-LLM License link](https://falconllm.tii.ae/falcon-terms-and-conditions.html) for more details about the license.


## Citation

```latex
@article{falconh1r,
    title = {Falcon-H1R: Pushing the Reasoning Frontiers with a Hybrid Model for Efficient Test-Time Scaling},
    url = {https://github.com/tiiuae/falcon-h1r/blob/main/tech_report.pdf},
    author = {Falcon Reasoning Team, Iheb Chaabane, Puneesh Khanna, Suhail Mohmad, Slim Frikha, Shi Hu, Abdalgader Abubaker, Reda Alami, Mikhail Lubinets, Mohamed El Amine Seddik, Hakim Hacid},
    month = {December},
    year = {2025}
}
```