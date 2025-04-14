---
title: "Falcon3.1-74B: Contributing to the Open LLM Ecosystem at 70B scale"
date: 2025-03-12T12:00:00Z
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
    alt: "<alt falcon 3>"
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
        - name: Puneesh Khanna
          image: img/contributors/puneesh_khanna.jpg
        - name: Iheb Chaabane
          image: img/contributors/iheb_chaabane.jpg
        - name: Kacper Piskorski
          image: img/contributors/kasper_piskorski.jpg
        - name: Mohamed El Amine Seddik
          image: img/contributors/mohamed_seddik.png
        - name: Slim Frikha
          image: img/contributors/slim_frikha.jpg
        - name: Yasser Djilali
          #image: img/contributors/yasser_djilali.webp
        - name: Ruxandra Cojocaru
          image: img/contributors/roxandra_cojocaru.png
        - name: William De Vazelhes
          image: img/contributors/william_de_vazelhes.jpg
        - name: Giulia Campesan
          #image: img/contributors/giulia_campesan.webp
        - name: Shi Hu
          image: img/contributors/shi_hu.jpg
        - name: Mugariya Farooq
          image: img/contributors/mughaira_farooq.jpg
        - name: Mikhail Lubinets
          image: img/contributors/mikhail_lubinets.jpg
        - name: Hakim Hacid
          image: img/contributors/hakim_hacid.png
    additional:
        - name: Younes Belkada
          image: img/contributors/younes_belkada.png
        - name: Abdalgader Abubaker
          image: img/contributors/abdalgader_abubaker.png
        - name: Dhia Garbaya
        - name: Andy Ngoc Huynh
          image: img/contributors/andy_ngoc_huynh.png
        - name: Phuc Le Khac
          image: img/contributors/phuc_lekhac.png
        - name: Basma Boussaha
        - name: Leen Al Qadi
        - name: Alice Pagnoux
          image: img/contributors/alice_pagnoux.png
        - name: Hamza Alobeidi
        - name: Mohammed Alyafeai
        - name: Mohamed Chami
        - name: Hamza Yous
          image: img/contributors/hamza_yous.png
        - name: Brahim Farhat
          image: img/contributors/brahim_farhat.png
        - name: Ibrahim Khadraoui
          image: img/contributors/ibrahim_khadraoui.png
        - name: Reda Alami
          image: img/contributors/reda_alami.png
        - name: Ali Almansoori
          image: img/contributors/ali_almansoori.png
        - name: Ahmed Adel Alzubaidi
          image: img/contributors/ahmed_adel_alzubaidi.png
        - name: Soufiane Hayou
        - name: Jingwei Zuo
          image: img/contributors/jingwei_zuo.png
        - name: Maksim Velikanov
          image: img/contributors/maksim_velikanov.png
        - name: Dhia Eddine Rhaiem
          image: img/contributors/dhia_eddine_rhaiem.png
        - name: Ilyas Chahed
          image: img/contributors/ilyas_chahed.png
        - name: Billel Mokeddem
          image: img/contributors/billel_mokeddem.png
---

{{< button href="https://chat.falconllm.tii.ae" label="Falcon CHAT" external=true >}}
{{< button href="https://huggingface.co/collections/tiiuae/falcon31-6784de2fc5549029e0c52f61" label="Hugging Face" external=true >}}
{{< button href="https://huggingface.co/spaces/tiiuae/Falcon3.1-74B-Playground" label="DEMO" external=true >}}
{{< button href="https://discord.gg/vfw6k2G3" label="DISCORD" external=true >}}


# Introducing Falcon3.1-74B

We introduce <span class="bold">Falcon3.1-74B</span>, a decoder-only large language model, developed by
[Technology Innovation Institute (TII)](https://www.tii.ae/ai-and-digital-science) in Abu Dhabi. By pushing the
boundaries of performance at the 70B scale of LLMs, this release continues to reflect our ongoing commitment to advancing open
and accessible large foundation models.

This iteration includes:
- [Falcon3.1-74B-Base](https://huggingface.co/tiiuae/Falcon3.1-74B-Base)
- [Falcon3.1-74B-Instruct](https://huggingface.co/tiiuae/Falcon3.1-74B-Instruct)
- [Their quantized version](https://huggingface.co/collections/tiiuae/falcon31-6784de2fc5549029e0c52f61)

<br>

<span class="bold">Falcon3.1-74B</span>, a leading model in the 70B generalist LLM category, sets a new standard for state-of-the-art performance across a wide range of tasks, including basic reasoning, language understanding, instruction following, coding, mathematics, and long-context processing, thereby reinforcing its superior capabilities at 70B scale.

The model delivers <span class="bold">outstanding zero-shot and few-shot performance</span> on key benchmarks such as MMLU, GPQA, MUSR, BBH, MATH Level 5, EvalPlus, MBPP and other prominent LLM tasks—demonstrating its versatility and cutting-edge capabilities across domains.  

It also delivers <span class="bold">enhanced multilingual capabilities</span>, supporting 16 widely spoken languages beyond English (en): Czech (cs), German (de), Spanish (es), French (fr), Hindi (hi), Italian (it), Japanese (ja), Korean (ko), Dutch (nl), Polish (pl), Portuguese (pt), Romanian (ro), Russian (ru), Swedish (sv), Urdu (ur), and Chinese (zh). <span class="bold">Over 100 languages</span> are supported by the tokenizer, ensuring strong support for future adaptations to additional languages.

Falcon3.1-74B offers an <span class="bold">extended context length</span> of up to 256K tokens with state of art performance on HELMET benchmark. This allows for better retention of information over long exchanges, a particular trait for agentic applications, resulting in more contextually aware and accurate responses.

## Model's architecture  

- <span class="bold">Architecture</span>: decoder-only transformer compatible with [Meta-Llama3 architectures](https://arxiv.org/pdf/2407.21783) offering fast and seamless integration for the open-source AI community
- <span class="bold">Decoder Layers</span>: 80
- <span class="bold">Grouped Query Attention (GQA)</span>: 32 query heads and 4 key-value heads. <span class="bold">Head Dimension</span>: 256 — optimized for [<span class="bold">FlashAttention-3</span>](https://arxiv.org/pdf/2407.08608) - Both enable faster inference thanks to high throughput performance
- <span class="bold">Vocabulary Size</span>: 262,120 - for improved adaptability during fine-tuning, leading to superior performance across a wide range of languages
- <span class="bold">Context Length</span>: Up to 256K tokens

## Training recipe

In developing these models, we used several key innovations to enhance performance through efficient training:

- <span class="bold">Falcon3.1-74B</span> was pre-trained on 16.5 trillion tokens sourced from the web, code, STEM content, textbooks, and high-quality synthetic and multilingual data, using 4,864 H100 GPU chips 
- We employed <span class="bold">multi-stage training</span> with context lengths of 4K, 8K, 16K, and 32K, combined with <span class="bold">curriculum learning</span> and <span class="bold">progressive long-context extension</span> at 64K, 128K, and 256K stages (with higher RoPE values) to improve training efficiency
- Pre-training was made efficient and stable through several key techniques, including <span class="bold">z-loss</span>, <span class="bold">output scaling</span> (for both attention and MLP blocks), and <span class="bold">decoupled learning rates</span> for MLP blocks, all while maintaining high FLOPs utilization
- <span class="bold">Falcon3.1-74B</span> was post trained for conversational ability, math, code and tasks such as RAG and tool calling. This was achieved through supervised fine-tuning (SFT) on a carefully curated dataset of 2 million instructions, followed by direct preference optimization (DPO) on 300,000 preference pairs


## Instruct Model Capabilities
Our evaluations highlight the areas where Falcon3.1-74B models excel, emphasizing their strengths in scientific domains, basic reasoning, and general knowledge:

- <span class="bold">Math Capabilities</span>: Falcon3.1-74B-Instruct scores <span class="bold">52.0</span> on MATH-Lvl5 and <span class="bold">86.3</span> on GSM8K, demonstrating strong performance in complex, math-focused reasoning tasks.  
- <span class="bold">Coding Capabilities</span>: Falcon3.1-74B-Instruct achieves <span class="bold">63.0</span> on Multipl-E and <span class="bold">81.2</span> on EvalPlus, reflecting its ability to generalize across diverse programming-related tasks.  
- <span class="bold">Extended Context Length</span>: Falcon3.1 supports context lengths up to <span class="bold">256K tokens</span>, achieving <span class="bold">state-of-the-art results</span>—including an average score of <span class="bold">53.0</span> on Helmet tasks at 128K context length.
- <span class="bold">Tool use</span>: Falcon3.1-74B-Instruct scores <span class="bold">84.8</span> on BFCL, highlighting strong functional capabilities.  
- <span class="bold">Improved Reasoning</span>: Falcon3.1-74B-Instruct scores <span class="bold">71.9</span> on BBH and <span class="bold">52.8</span> on MUSR, showcasing enhanced reasoning across diverse benchmarks.  
- <span class="bold">Scientific Knowledge Expansion</span>: Strong performance on MMLU benchmarks highlights the model's domain expertise, with Falcon3.1-74B-Instruct scoring <span class="bold">81.7 / 56.6</span> (MMLU / MMLU-PRO) and Falcon3.1-74B-Base achieving <span class="bold">83.0 / 56.3</span> respectively.

<br>

The graph below depicts on-par performance of <span class="bold">Falcon3.1-74B-Instruct</span> with current 70B state-of-the-art models across <span class="bold">seven categories</span> with notable strengths in <span class="bold">basic reasoning</span> and <span class="bold">commonsense understanding</span>. Each category aggregates widely used LLM benchmarks relevant to that domain (scroll for more details).


{{< barplot_vertical id="general-inst" highlight="Falcon3.1-74B-Instruct" ymin="0" ymax="0.94" ylabel="Performance %" >}}
[
    { "category": "General", "model": "Falcon3.1-74B-Instruct", "value": 0.7045 },
    { "category": "General", "model": "Qwen2.5-72B-Instruct", "value": 0.7145 },
    { "category": "General", "model": "Llama-3.3-70B-Instruct", "value": 0.68825 },

    { "category": "Math", "model": "Falcon3.1-74B-Instruct", "value": 0.749 },
    { "category": "Math", "model": "Qwen2.5-72B-Instruct", "value": 0.748 },
    { "category": "Math", "model": "Llama-3.3-70B-Instruct", "value": 0.76575 },

    { "category": "Reasoning", "model": "Falcon3.1-74B-Instruct", "value": 0.62725 },
    { "category": "Reasoning", "model": "Qwen2.5-72B-Instruct", "value": 0.5162 },
    { "category": "Reasoning", "model": "Llama-3.3-70B-Instruct", "value": 0.564 },

    { "category": "Commonsense Understanding", "model": "Falcon3.1-74B-Instruct", "value": 0.6972 },
    { "category": "Commonsense Understanding", "model": "Qwen2.5-72B-Instruct", "value": 0.5836 },
    { "category": "Commonsense Understanding", "model": "Llama-3.3-70B-Instruct", "value": 0.6568 },

    { "category": "Code", "model": "Falcon3.1-74B-Instruct", "value": 0.721 },
    { "category": "Code", "model": "Qwen2.5-72B-Instruct", "value": 0.631 },
    { "category": "Code", "model": "Llama-3.3-70B-Instruct", "value": 0.7065 },

    { "category": "Instructions following", "model": "Falcon3.1-74B-Instruct", "value": 0.6855 },
    { "category": "Instructions following", "model": "Qwen2.5-72B-Instruct", "value": 0.71 },
    { "category": "Instructions following", "model": "Llama-3.3-70B-Instruct", "value": 0.6415 },

    { "category": "Tool use", "model": "Falcon3.1-74B-Instruct", "value": 0.855 },
    { "category": "Tool use", "model": "Qwen2.5-72B-Instruct", "value": 0.907 },
    { "category": "Tool use", "model": "Llama-3.3-70B-Instruct", "value": 0.85 }
]
{{< /barplot_vertical >}}

<details>
<summary class="bold"> More Details </summary>
{{< table 
    headers="Category, Benchmark, Qwen2.5-72B-Instruct, Llama-3.3-70B-Instruct, Falcon3.1-74B-Instruct" 
    bench_list="Category, Benchmark" 
    bench_values="Qwen2.5-72B-Instruct, Llama-3.3-70B-Instruct, Falcon3.1-74B-Instruct" 
    highlight_col="4" 
    hide_bench_list_headers="true"
    bold_values="true"
    compact="true"
>}}
----
rowspan=4:General | MMLU (5-shot) | 84.4 | 82.0 | 81.7
SKIP | MMLU-PRO (5-shot) | 56.1 | 53.3 | 56.6
SKIP | IFEval | 86.4 | 90.0 | 83.3
SKIP | AGIeval | 58.9 | 50.0 | 60.2
----
rowspan=4:Math | GSM8K (5-shot, flexible-extract) | 80.7 | 93.4 | 86.3
SKIP | GSM8K (8-shot, COT, flexible-extract) | 78.7 | 94.0 | 82.9
SKIP | MATH Lvl-5 (4-shot) | 59.8 | 48.3 | 52.0
SKIP | MATH500 | 80.0 | 70.6 | 78.4
----
rowspan=5:Reasoning | Arc Challenge (25-shot) | 71.2 | 74.5 | 72.0
SKIP | GPQA (0-shot) | 36.8 | 32.0 | 39.7
SKIP | MUSR (0-shot) | 42.2 | 44.5 | 52.8
SKIP | BBH (3-shot) | 72.6 | 69.2 | 71.9
SKIP | BBH (3-shot, COT) | 35.3 | 61.8 | 86.5
----
rowspan=5:Commonsense Understanding | PIQA (0-shot) | 75.6 | 80.1 | 83.2
SKIP | SciQ (0-shot) | 64.0 | 91.4 | 93.1
SKIP | Hellaswag (0-shot) | 68.8 | 70.2 | 81.1
SKIP | LogiQA (0-shot) | 39.2 | 39.9 | 40.6
SKIP | OpenbookQA (0-shot) | 44.2 | 46.8 | 50.6
----
rowspan=2:Code | EvalPlus (0-shot) | 83.9 | 81.3 | 81.2
SKIP | Multipl-E (0-shot) | 42.3 | 60.0 | 63.0
----
rowspan=2:Instructions following | MT-Bench | 9.1 | 9.0 | 8.8
SKIP | Alpaca (WC) | 51.0 | 38.3 | 49.1
----
Tool use | BFCL AST | 90.7 | 85.0 | 85.5
{{< /table >}}
</details>

### GPQA Benchmarks
We highlight in the below graph the performance of <span class="bold">Falcon3.1-74B-Instruct</span> on the <span class="bold">GPQA benchmark</span>, where it demonstrates <span class="bold">leading results among 70B-class models</span>—especially on <span class="bold">GPQA Diamond</span>, indicating strong improvements in complex reasoning capabilities.
{{< barplot_vertical id="gpqa-inst" highlight="Falcon3.1-74B-Instruct" ymin="0.2" ymax="0.45" ylabel="Performance %">}}
[
    { "category": "GPQA", "model": "Falcon3.1-74B-Instruct", "value": 0.396812080536913 },
    { "category": "GPQA", "model": "Qwen2.5-72B-Instruct", "value": 0.368474697 },
    { "category": "GPQA", "model": "Llama-3.3-70B-Instruct", "value": 0.319960711 },
    
    { "category": "GPQA Diamond", "model": "Falcon3.1-74B-Instruct", "value": 0.434343434 },
    { "category": "GPQA Diamond", "model": "Qwen2.5-72B-Instruct", "value": 0.353535354 },
    { "category": "GPQA Diamond", "model": "Llama-3.3-70B-Instruct", "value": 0.292929293 },
    
    { "category": "GPQA Extended", "model": "Falcon3.1-74B-Instruct", "value": 0.391941392 },
    { "category": "GPQA Extended", "model": "Qwen2.5-72B-Instruct", "value": 0.379120879 },
    { "category": "GPQA Extended", "model": "Llama-3.3-70B-Instruct", "value": 0.338827839 },


    { "category": "GPQA Main", "model": "Falcon3.1-74B-Instruct", "value": 0.386160714 },
    { "category": "GPQA Main", "model": "Qwen2.5-72B-Instruct", "value": 0.372767857 },
    { "category": "GPQA Main", "model": "Llama-3.3-70B-Instruct", "value": 0.328125 }
]
{{< /barplot_vertical >}}

### AGIEval Benchmarks
[AGIEval](https://arxiv.org/pdf/2304.06364) is a human-centric benchmark specifically designed to evaluate the general abilities of foundation models in tasks pertinent to human cognition and problem-solving. Below graph depicts superior results of Falcon3.1-74B as compared to current 70B state-of-the-art models. Click on more details to find taskwise results of AGIEval subtasks.

{{< barplot_vertical id="agieval-inst" highlight="Falcon3.1-74B-Instruct" ymin="0.4" ymax="0.65" ylabel="Performance %">}}
[
    { "category": "AGIEval", "model": "Falcon3.1-74B-Instruct", "value": 0.6023 },
    { "category": "AGIEval", "model": "Qwen2.5-72B-Instruct", "value": 0.5892 },
    { "category": "AGIEval", "model": "Llama-3.3-70B-Instruct", "value": 0.5001 }
]
{{< /barplot_vertical >}}

<details>
<summary class="bold"> More Details </summary>
{{< table 
    headers="Sub category, Qwen2.5-72B-Instruct, Llama-3.3-70B-Instruct, Falcon3.1-74B-Instruct" 
    bench_list="Benchmark" 
    bench_values="Qwen2.5-72B-Instruct, Llama-3.3-70B-Instruct, Falcon3.1-74B-Instruct" 
    highlight_col="3" 
    hide_bench_list_headers="false"
    bold_values="true"
    compact="true"
>}}
----
aqua_rat | 41.73 | 29.92 | 59.44
gaokao_biology | 86.66 | 74.76 | 83.33
gaokao_chemistry | 72.46 | 39.61 | 59.90
gaokao_chinese | 80.48 | 57.72 | 66.26
gaokao_english | 74.50 | 54.57 | 78.75
gaokao_geography | 81.90 | 78.89 | 77.38
gaokao_history | 85.95 | 75.74 | 79.14
gaokao_mathqa | 41.31 | 29.62 | 45.86
gaokao_physics | 70.5 | 46.5 | 72
jec_qa_ca | 79.37 | 64.76 | 66.46
jec_qa_kd | 87 | 69 | 72.9
logiqa_en | 41.62 | 33.02 | 59.44
logiqa_zh | 58.98 | 63.13 | 67.12
lsat_ar | 27.82 | 29.13 | 30
lsat_lr | 60.19 | 67.25| 83.52
lsat_rc | 71.74 | 84.01 | 86.24
math | 3.7 | 3.1 | 5.6
sat_en | 83.98 | 84.95 | 93.68
sat_en_without_passage | 53.39 | 49.02 | 59.70
sat_math | 69.54 | 26.81 | 75
{{< /table >}}
</details>

### Multilingual Benchmarks
The following graph presents benchmarking results across popular multilingual benchmarks, showcasing the strong performance of <span class="bold">Falcon 3.1-74B-Instruct</span> in several languages including Spanish, French, Portuguese, Italian, Swedish, Romanian and Hindi. It also demonstrates on-par performance in the other supported languages.
{{< barplot_horizental id="multilingual-inst" highlight="Falcon3.1-74B-Instruct" ymin="0.5" ymax="0.8" ylabel="Performance %" height="800">}}
[    
    { "category": "Spanish", "model": "Falcon3.1-74B-Instruct", "value": 0.7860 },
    { "category": "Spanish", "model": "Qwen2.5-72B-Instruct", "value": 0.7374 },
    { "category": "Spanish", "model": "Llama-3.3-70B-Instruct", "value": 0.7703 },
    
    { "category": "French", "model": "Falcon3.1-74B-Instruct", "value": 0.7583 },
    { "category": "French", "model": "Qwen2.5-72B-Instruct", "value": 0.6862 },
    { "category": "French", "model": "Llama-3.3-70B-Instruct", "value": 0.7460 },
    
    { "category": "Portuguese", "model": "Falcon3.1-74B-Instruct", "value": 0.7405 },
    { "category": "Portuguese", "model": "Qwen2.5-72B-Instruct", "value": 0.719609738 },
    { "category": "Portuguese", "model": "Llama-3.3-70B-Instruct", "value": 0.725370625 },

    { "category": "German", "model": "Falcon3.1-74B-Instruct", "value": 0.7375 },
    { "category": "German", "model": "Qwen2.5-72B-Instruct", "value": 0.6866 },
    { "category": "German", "model": "Llama-3.3-70B-Instruct", "value": 0.7404 },

    { "category": "Italian", "model": "Falcon3.1-74B-Instruct", "value": 0.7259 },
    { "category": "Italian", "model": "Qwen2.5-72B-Instruct", "value": 0.71156585 },
    { "category": "Italian", "model": "Llama-3.3-70B-Instruct", "value": 0.714113129 },

    { "category": "Swedish", "model": "Falcon3.1-74B-Instruct", "value": 0.712066667 },
    { "category": "Swedish", "model": "Qwen2.5-72B-Instruct", "value": 0.666347314 },
    { "category": "Swedish", "model": "Llama-3.3-70B-Instruct", "value": 0.696495478 },

    { "category": "Dutch", "model": "Falcon3.1-74B-Instruct", "value": 0.711333333 },
    { "category": "Dutch", "model": "Qwen2.5-72B-Instruct", "value": 0.683930923 },
    { "category": "Dutch", "model": "Llama-3.3-70B-Instruct", "value": 0.710151728 },

    { "category": "Romanian", "model": "Falcon3.1-74B-Instruct", "value": 0.708733333 },
    { "category": "Romanian", "model": "Qwen2.5-72B-Instruct", "value": 0.657285591 },
    { "category": "Romanian", "model": "Llama-3.3-70B-Instruct", "value": 0.687024979 },

    { "category": "Chinese", "model": "Falcon3.1-74B-Instruct", "value": 0.720566667 },
    { "category": "Chinese", "model": "Qwen2.5-72B-Instruct", "value": 0.762693112 },
    { "category": "Chinese", "model": "Llama-3.3-70B-Instruct", "value": 0.761756903 },
    
    { "category": "Russian", "model": "Falcon3.1-74B-Instruct", "value": 0.7136 },
    { "category": "Russian", "model": "Qwen2.5-72B-Instruct", "value": 0.6522 },
    { "category": "Russian", "model": "Llama-3.3-70B-Instruct", "value": 0.7322 },
    
    { "category": "Hindi", "model": "Falcon3.1-74B-Instruct", "value": 0.5572 },
    { "category": "Hindi", "model": "Qwen2.5-72B-Instruct", "value": 0.548344409 },
    { "category": "Hindi", "model": "Llama-3.3-70B-Instruct", "value": 0.551432242 }
]
{{< /barplot_horizental >}}

### Long Context Benchmarks
One of the key features of <span class="bold">Falcon 3.1-74B</span> is its ability to handle long contexts, with native support for context lengths of up to 256K tokens. As shown in the graph below, <span class="bold">Falcon 3.1-74B-Instruct</span> demonstrates superior performance at 128K context length on the Helmet benchmark, while maintaining on-par performance at shorter context lengths.
<br>
*N.B: Note that results for the 256K context window are not reported, as the Helmet benchmark [does not support](https://github.com/princeton-nlp/HELMET/tree/4526dfbdc512bd9ff721da336bff4e3e75ecfd27?tab=readme-ov-file#release-progress:~:text=Support%20%3E128k%20input%20length) >128K context length at the time of release.*
{{< barplot_vertical id="helmet-inst" highlight="Falcon3.1-74B-Instruct" ymin="0.3" ymax="0.6" ylabel="Performance %">}}
[
    { "category": "32K", "model": "Falcon3.1-74B-Instruct", "value": 0.611 },
    { "category": "32K", "model": "Qwen2.5-72B-Instruct", "value": 0.623 },
    { "category": "32K", "model": "Llama-3.3-70B-Instruct", "value": 0.623 },
    
    { "category": "64K", "model": "Falcon3.1-74B-Instruct", "value": 0.572 },
    { "category": "64K", "model": "Qwen2.5-72B-Instruct", "value": 0.528 },
    { "category": "64K", "model": "Llama-3.3-70B-Instruct", "value": 0.605 },
    
    { "category": "128K", "model": "Falcon3.1-74B-Instruct", "value": 0.53 },
    { "category": "128K", "model": "Qwen2.5-72B-Instruct", "value": 0.387 },
    { "category": "128K", "model": "Llama-3.3-70B-Instruct", "value": 0.495 }
]
{{< /barplot_vertical >}}

JSON KV retrieval evaluation measures an LLM's ability to precisely navigate data structures. This capability determines how effectively models can integrate with external systems and perform tasks requiring exact information extraction. In the heatmap below, we can see that overall <span class="bold">Falcon 3.1-74B</span> outperforms 70B-class-models making it a more reliable candidate for function calling and agentic applications.

{{< heatmap 
   x_label="Context Length" 
   y_label="Depth" 
   value_label="Match" 
   data_path="heatmap.json" 
>}}

### Safety Benchmarks
We developed <span class="bold">Falcon 3.1-74B</span> with careful attention to ethical considerations, aiming to incorpo-
rate fairness, safety, and transparency throughout the process. Our overall approach to responsible AI consisted of safe supervised fine tuning during the SFT stage.

As shown in the plot below, <span class="bold">Falcon 3.1-74B-Instruct</span> demonstrates high safety scores.


{{< barplot_horizental id="safety-inst" highlight="Falcon3.1-74B-Instruct" ymin="0" ymax="1" ylabel="Performance %" height="300">}}
[    
    { "category": "ALERT", "model": "Falcon3.1-74B-Instruct", "value": 0.9861 },
    { "category": "Salad Bench", "model": "Falcon3.1-74B-Instruct", "value": 0.9595 },
    { "category": "WalledEval", "model": "Falcon3.1-74B-Instruct", "value": 0.9792 },
    { "category": "WildGuardMix", "model": "Falcon3.1-74B-Instruct", "value": 0.9867 },
    { "category": "JailbreakBench", "model": "Falcon3.1-74B-Instruct", "value": 0.98 }
]
{{< /barplot_horizental >}}

<details>
<summary class="bold"> More Details </summary>
{{< table 
    headers="Benchmark, Sub benchmark, Falcon3.1-74B-Instruct" 
    bench_list="Benchmark, Sub benchmark" 
    bench_values="Falcon3.1-74B-Instruct" 
    hide_bench_list_headers="false"
    bold_values="false"
    compact="true"
>}}
----
rowspan=2:ALERT | Benign | 99.26
SKIP | Adversarial | 97.97
----
rowspan=3:Salad Bench | Base | 99.70
SKIP | Attack | 88.16
SKIP | Defense | 100
----
rowspan=9:WalledEval | AdvBench | 99.62
SKIP | HarmBench (Contextual) | 92.00
SKIP | AyaRedTeaming | 99.29
SKIP | BeaverTailsEval | 99.43
SKIP | CatHarmfulQA | 99.09
SKIP | XSTest | 100
SKIP | WildJailbrak | 97.56
SKIP | Stereotype | 94.42
SKIP | Advanced AI Risk  | 99.87
----
rowspan=2:WildGuardMix | Benign | 98.83
SKIP | Adversarial | 98.51
----
JailbreakBench  |  | 98.00
{{< /table >}}
</details>

## Base Model Capabilities
The graph below presents on-par performance of <span class="bold">Falcon3.1-74B-Base</span> with current 70B state-of-the-art models across <span class="bold">seven categories</span> with slight edge in <span class="bold">code</span>. Each category aggregates widely used LLM benchmarks relevant to that domain (scroll for more details).
{{< barplot_vertical id="general-base" highlight="Falcon3.1-74B-Base" ymin="0" ymax="0.8" ylabel="Performance %">}}
[
    { "category": "General", "model": "Falcon3.1-74B-Base", "value": 0.593 },
    { "category": "General", "model": "Qwen2.5-72B", "value": 0.624 },
    { "category": "General", "model": "Llama-3.1-70B", "value": 0.4736 },

    { "category": "Math", "model": "Falcon3.1-74B-Base", "value": 0.5985 },
    { "category": "Math", "model": "Qwen2.5-72B", "value": 0.6415 },
    { "category": "Math", "model": "Llama-3.1-70B", "value": 0.4925 },

    { "category": "Reasoning", "model": "Falcon3.1-74B-Base", "value": 0.57225 },
    { "category": "Reasoning", "model": "Qwen2.5-72B", "value": 0.5735 },
    { "category": "Reasoning", "model": "Llama-3.1-70B", "value": 0.54275 },

    { "category": "Commonsense Understanding", "model": "Falcon3.1-74B-Base", "value": 0.75375 },
    { "category": "Commonsense Understanding", "model": "Qwen2.5-72B", "value": 0.75225 },
    { "category": "Commonsense Understanding", "model": "Llama-3.1-70B", "value": 0.7385 },

    { "category": "Code", "model": "Falcon3.1-74B-Base", "value": 0.601 },
    { "category": "Code", "model": "Qwen2.5-72B", "value": 0.563 },
    { "category": "Code", "model": "Llama-3.1-70B", "value": 0.5155 }
]
{{< /barplot_vertical >}}

<details>
<summary class="bold"> More Details </summary>
{{< table 
    headers="Category, Benchmark, Qwen2.5 72B Base, Llama-3.3 70B Base, Falcon3.1 74B Base" 
    bench_list="Category, Benchmark" 
    bench_values="Qwen2.5 72B Base, Llama-3.3 70B Base, Falcon3.1 74B Base" 
    highlight_col="4" 
    hide_bench_list_headers="true"
    bold_values="false"
    compact="true"
>}}
----
rowspan=3:General | MMLU (5-shot) | 86.0 | 78.7 | 83.0
SKIP | MMLU-PRO (5-shot) | 59.8 | 46.6 | 56.3
SKIP | IFEval | 41.4 | 16.8 | 38.6
----
rowspan=2:Math | GSM8K (5-shot, flexible-extract) | 89.6 | 80.1 | 86.3
SKIP | MATH Lvl-5 (4-shot) | 38.7 | 18.4 | 33.4
----
rowspan=4:Reasoning | Arc Challenge (25-shot) | 72.4 | 70.0 | 72.0
SKIP | GPQA (0-shot) | 41.0 | 38.8 | 40.0
SKIP | MUSR (0-shot) | 48.0 | 45.6 | 49.0
SKIP | BBH (3-shot) | 68.0 | 62.7 | 67.9
----
rowspan=4:Commonsense Understanding | PIQA (0-shot) | 83.7 | 84.3 | 84.5
SKIP | SciQ (0-shot) | 95.1 | 94.8 | 94.5
SKIP | Winogrande (0-shot) | 77.4 | 79.1 | 78.6
SKIP | LogiQA (0-shot) | 44.7 | 37.2 | 43.9
----
rowspan=2:Code | EvalPlus (0-shot) | 65.7 | 63.7 | 64.8
SKIP | Multipl-E (0-shot) | 46.9 | 39.4 | 55.4
{{< /table >}}
</details>

## Prompt Examples
{{< prompt_gallery "content/blog/falcon-3.1-70b/llm_examples.json" >}}

## Open Source Commitment
In line with our mission to foster AI accessibility and collaboration, <span class="bold">Falcon3.1-74B</span> is released under the [<span class="bold">Falcon LLM license</span>](https://falconllm.tii.ae/falcon-terms-and-conditions.html). We hope the AI community finds these models valuable for research, application development, and further experimentation. <span class="bold">Falcon3.1-74B</span> is a continuation of our efforts to create more capable and efficient foundation models. We welcome feedback and collaboration from the community as we continue to refine and advance the capabilities of these models.

## Useful Links

- Access to our models (including GPTQ, AWQ, GGUF and MLX) through [the Falcon3.1 HuggingFace collection](https://huggingface.co/collections/tiiuae/falcon31-6784de2fc5549029e0c52f61).
- Feel free to join [our discord server](https://discord.gg/bHx5QEaQ) if you have any questions or to interact with our researchers and developers.
- Check out the [Falcon-LLM License link](https://falconllm.tii.ae/falcon-terms-and-conditions.html) for more details about the license.


## Citation

```latex
@misc{Falcon3.1-74B,
    title = {Falcon3.1-74B: Contributing to the Open LLM Ecosystem at 70B scale},
    url = {https://falcon-lm.github.io//blog/falcon-3.1-70b},
    author = {Falcon-LLM Team},
    month = {April},
    year = {2025}
}
```