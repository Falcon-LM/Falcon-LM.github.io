---
title: "Falcon3.1-74B LLM: Contributing to the Open LLM Ecosystem at 70B scale"
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
---

{{< button href="https://chat.falconllm.tii.ae" label="Falcon CHAT" external=true >}}
{{< button href="https://huggingface.co/collections/tiiuae/falcon31-6784de2fc5549029e0c52f61" label="Hugging Face" external=true >}}
{{< button href="https://huggingface.co/spaces/tiiuae/Falcon3.1-74B-Playground" label="DEMO" external=true >}}
{{< button href="https://discord.gg/vfw6k2G3" label="DISCORD" external=true >}}


<span style="color: red;"> TODO: enable bold mode for text below.

# Introducing Falcon3.1-74B

We introduce <span class="bold">Falcon3.1 74B</span>, a decoder-only large language model, developed by
[Technology Innovation Institute (TII)](https://www.tii.ae/ai-and-digital-science) in Abu Dhabi. By pushing the
boundaries of performance at the 70B scale of LLMs, this release continues to reflect our ongoing commitment to advancing open
and accessible large foundation models.

This iteration includes:
- [Falcon3.1-74B-Base](https://huggingface.co/tiiuae/Falcon3.1-74B-Base)
- [Falcon3.1-74B-Instruct](https://huggingface.co/tiiuae/Falcon3.1-74B-Instruct)

<br>

In developing these models, we introduced several key innovations to enhance performance through efficient pre-training:

- <span class="bold">Falcon3.1-74B</span> is a dense transformer model consisting of 80 decoder blocks. It was pre-trained on 16.5 trillion tokens sourced from the web, code, STEM content, textbooks, and high-quality synthetic and multilingual data, using 4,864 H100 GPU chips.  
- We employed <span class="bold">multi-stage training</span> with context lengths of 4K, 8K, 16K, and 32K, combined with curriculum learning and <span class="bold">progressive long-context extension</span> at 64K, 128K, and 256K stages to improve training efficiency.  
- Pre-training was made efficient and stable through several key techniques, including <span class="bold">z-loss</span>, <span class="bold">output scaling</span> (for both attention and MLP blocks), and <span class="bold">decoupled learning rates</span> for MLP blocks, all while maintaining high FLOPs utilization.  
- The model uses <span class="bold">Group Query Attention (GQA)</span> and a <span class="bold">wider head dimension</span> to enable faster inference.  
- An <span class="bold">expanded vocabulary</span> was incorporated to improve adaptability during fine-tuning, leading to superior performance across a wide range of languages.  
- <span class="bold">Long-context training</span> up to 256K tokens was conducted using specialized synthetic data. Benchmarking was performed using the <span class="bold">Helmet framework</span> and other long-context benchmarks, achieving state-of-the-art results.

## Key Highlights  
- <span class="bold">Falcon3.1-74B</span>, a leading model in the 70B generalist LLM category, sets a new standard for state-of-the-art performance across a wide range of tasks, including basic reasoning, language understanding, instruction following, coding, mathematics, and long-context processing.  
- With Falcon3.1-74B, users benefit from enhanced <span class="bold">multilingual capabilities</span>, supporting 16 widely spoken languages beyond English, along with an <span class="bold">extended context length</span> of up to 256K tokens.  
- The pretraining data includes content in <span class="bold">16 languages</span> in addition to English (en): Czech (cs), German (de), Spanish (es), French (fr), Hindi (hi), Italian (it), Japanese (ja), Korean (ko), Dutch (nl), Polish (pl), Portuguese (pt), Romanian (ro), Russian (ru), Swedish (sv), Urdu (ur), and Chinese (zh).  
- The tokenizer was trained on data from <span class="bold">over 100 languages</span>, ensuring strong support for future adaptations to additional languages.  
- Falcon3.1-74B achieved <span class="bold">competitive performance among 70B models</span> on the Hugging Face Open LLM Leaderboard and across multiple standard LLM benchmarks at the time of release, reinforcing its superior capabilities in the category.  
- The model delivers <span class="bold">outstanding zero-shot and few-shot performance</span> on key benchmarks such as MMLU, MUSR, BBH, MATH Level 5, IFEval, and other prominent open LLM tasks—demonstrating its versatility and cutting-edge capabilities across domains.  
- Falcon3.1-74B is <span class="bold">compatible with Meta-Llama3 architectures</span>, offering fast and seamless integration for the open-source AI community.  

## Model Specs  
Below is a summary of the detailed specifications for the Falcon3.1-74B model:
- <span class="bold">Decoder Layers</span>: 80
- <span class="bold">Architecture</span>: decoder-only transformer with Meta-Llama3 modeling
- <span class="bold">Grouped Query Attention (GQA)</span>: 32 query heads and 4 key-value heads, enabling faster inference  
- <span class="bold">Vocabulary Size</span>: 262,120  
- <span class="bold">Head Dimension</span>: 256 — optimized for <span class="bold">FlashAttention-3</span>, providing high throughput performance  
- <span class="bold">Activation Function</span>: SwiGLU  
- <span class="bold">Context Length</span>: Up to 256K tokens  
- <span class="bold">Rotary Position Embedding (RoPE)</span>: Configured with a high value to support long-context understanding  

## Benchmark Highlights  
Our evaluations highlight the areas where Falcon3.1-74B models excel, emphasizing their strengths in scientific domains, basic reasoning, and general knowledge:

- <span class="bold">Math Capabilities</span>: Falcon3.1-74B-Instruct scores <span class="bold">52.0</span> on MATH-Lvl5 and <span class="bold">86.3</span> on GSM8K, demonstrating strong performance in complex, math-focused reasoning tasks.  
- <span class="bold">Coding Capabilities</span>: Falcon3.1-74B-Instruct achieves <span class="bold">63.0</span> on Multipl-E and <span class="bold">81.2</span> on EvalPlus, reflecting its ability to generalize across diverse programming-related tasks.  
- <span class="bold">Extended Context Length</span>: Falcon3.1 supports context lengths up to <span class="bold">256K tokens</span>, achieving <span class="bold">state-of-the-art results</span>—including an average score of <span class="bold">53.0</span> on Helmet tasks at 128K context length and <span class="bold">84.8</span> on BFCL—highlighting both long-context reasoning and functional capabilities.  
- <span class="bold">Improved Reasoning</span>: Falcon3.1-74B-Instruct scores <span class="bold">71.9</span> on BBH and <span class="bold">52.8</span> on MUSR, showcasing enhanced reasoning across diverse benchmarks.  
- <span class="bold">Scientific Knowledge Expansion</span>: Strong performance on MMLU benchmarks highlights the model's domain expertise, with Falcon3.1-74B-Instruct scoring <span class="bold">81.7 / 56.6</span> (MMLU / MMLU-PRO) and Falcon3.1-74B-Base achieving <span class="bold">83.0 / 56.3</span> respectively.

<br>

The graphs below illustrate Falcon3.1-74B’s performance compared to other similarly sized general-purpose LLMs across key benchmarks, demonstrating competitive results in math, reasoning, general knowledge, and common sense understanding.

For more detailed evaluation results—including MT-Bench, Alpaca, and others—please refer to the models’ cards through the links [Falcon3.1-74B-Base](https://huggingface.co/tiiuae/Falcon3.1-74B-Base) or [Falcon3.1-74B-Instruct](https://huggingface.co/tiiuae/Falcon3.1-74B-Instruct). 

## Performance Results
### Instruct Model Capabilities

The graph below compares the performance of <span class="bold">Falcon3.1-74B-Instruct</span> with current state-of-the-art (SOTA) models at the 70B scale across <span class="bold">seven categories</span>: General, Math, Reasoning, Commonsense Understanding, Code, Instruction Following, and Tool Use. Each category aggregates widely used LLM benchmarks relevant to that domain (click the button below the graph for more details).

Overall, Falcon3.1-74B-Instruct shows <span class="bold">competitive performance</span>, with notable strengths in <span class="bold">basic reasoning</span> and <span class="bold">commonsense understanding</span>, while performing <span class="bold">on par with other leading models</span> across the remaining categories.


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
<summary> More details </summary>
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

### GPQA Benchmark
We highlight in the graph below <span class="bold">Falcon3.1-74B-Instruct’s</span> performance on the <span class="bold">GPQA benchmark</span>, where it demonstrates <span class="bold">leading results among 70B-class models</span>—especially on <span class="bold">GPQA Diamond</span>, indicating strong improvements in complex reasoning capabilities.
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


### Instruct Model Multilingual Results
The following graph presents benchmarking results across popular multilingual benchmarks, showcasing the strong performance of Falcon 3.1-74B-Instruct in several languages, including Spanish, French, Portuguese, Hindi, Romanian, and Swedish. It also demonstrates competitive performance in the remaining supported languages. Click the button below the graph for detailed information about the benchmarks used for each language.
{{< barplot_horizental id="multilingual-inst" highlight="Falcon3.1-74B-Instruct" ymin="0.5" ymax="0.8" ylabel="Performance %" height="800">}}
[    
    { "category": "Spanish", "model": "Falcon3.1-74B-Instruct", "value": 0.7860 },
    { "category": "Spanish", "model": "Qwen2.5-72B-Instruct", "value": 0.7374 },
    { "category": "Spanish", "model": "Llama-3.3-70B-Instruct", "value": 0.7703 },
    
    { "category": "French", "model": "Falcon3.1-74B-Instruct", "value": 0.7583 },
    { "category": "French", "model": "Qwen2.5-72B-Instruct", "value": 0.6862 },
    { "category": "French", "model": "Llama-3.3-70B-Instruct", "value": 0.7460 },
        
    { "category": "Chinese", "model": "Falcon3.1-74B-Instruct", "value": 0.720566667 },
    { "category": "Chinese", "model": "Qwen2.5-72B-Instruct", "value": 0.762693112 },
    { "category": "Chinese", "model": "Llama-3.3-70B-Instruct", "value": 0.761756903 },
    
    { "category": "Russian", "model": "Falcon3.1-74B-Instruct", "value": 0.7136 },
    { "category": "Russian", "model": "Qwen2.5-72B-Instruct", "value": 0.6522 },
    { "category": "Russian", "model": "Llama-3.3-70B-Instruct", "value": 0.7322 },

    { "category": "German", "model": "Falcon3.1-74B-Instruct", "value": 0.7375 },
    { "category": "German", "model": "Qwen2.5-72B-Instruct", "value": 0.6866 },
    { "category": "German", "model": "Llama-3.3-70B-Instruct", "value": 0.7404 },
    
    { "category": "Portuguese", "model": "Falcon3.1-74B-Instruct", "value": 0.7405 },
    { "category": "Portuguese", "model": "Qwen2.5-72B-Instruct", "value": 0.719609738 },
    { "category": "Portuguese", "model": "Llama-3.3-70B-Instruct", "value": 0.725370625 },

    { "category": "Italian", "model": "Falcon3.1-74B-Instruct", "value": 0.7259 },
    { "category": "Italian", "model": "Qwen2.5-72B-Instruct", "value": 0.71156585 },
    { "category": "Italian", "model": "Llama-3.3-70B-Instruct", "value": 0.714113129 },

    { "category": "Dutch", "model": "Falcon3.1-74B-Instruct", "value": 0.711333333 },
    { "category": "Dutch", "model": "Qwen2.5-72B-Instruct", "value": 0.683930923 },
    { "category": "Dutch", "model": "Llama-3.3-70B-Instruct", "value": 0.710151728 },
    
    { "category": "Hindi", "model": "Falcon3.1-74B-Instruct", "value": 0.5572 },
    { "category": "Hindi", "model": "Qwen2.5-72B-Instruct", "value": 0.548344409 },
    { "category": "Hindi", "model": "Llama-3.3-70B-Instruct", "value": 0.551432242 },

    { "category": "Romanian", "model": "Falcon3.1-74B-Instruct", "value": 0.708733333 },
    { "category": "Romanian", "model": "Qwen2.5-72B-Instruct", "value": 0.657285591 },
    { "category": "Romanian", "model": "Llama-3.3-70B-Instruct", "value": 0.687024979 },
    
    { "category": "Swedish", "model": "Falcon3.1-74B-Instruct", "value": 0.712066667 },
    { "category": "Swedish", "model": "Qwen2.5-72B-Instruct", "value": 0.666347314 },
    { "category": "Swedish", "model": "Llama-3.3-70B-Instruct", "value": 0.696495478 }
]
{{< /barplot_horizental >}}

### Long Context Performance
One of the key features of Falcon 3.1-74B is its ability to handle long contexts, with native support for context lengths of up to 256k tokens. As shown in the graph below, Falcon 3.1-74B-Instruct demonstrates superior performance at a 128k context length on the Helmet benchmark, while maintaining competitive performance at shorter context lengths. Note that results for the 256k context window are not reported, as the Helmet benchmark does not support that length.
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

JSON KV retrieval evaluation measures an LLM's ability to precisely navigate data structures. This capability determines how effectively models can integrate with external systems and perform tasks requiring exact information extraction. In the heatmap below, we can see that overall Falcon 3.1-74B outperforms Qwen2.5-72B-Instruct and Llama-3.3-70B-Instruct making it a more reliable candidate for function calling and agentic projects.

<details>
<summary> Json KV retrieval </summary>
{{< heatmap 
   x_label="Context Length" 
   y_label="Depth" 
   value_label="Match" 
   data_path="heatmap.json" 
>}}
</details>

### Base Model Capabilities
Finally, the graph below presents benchmark results for Falcon 3.1-74B-Base compared to other state-of-the-art (SOTA) base models in the 70B class. Falcon 3.1-74B-Base demonstrates competitive overall performance, with a slight edge on code-related benchmarks. 
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
<summary> More details </summary>
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
In line with our mission to foster AI accessibility and collaboration, Falcon3.1-74B is released under the [<span class="bold">Falcon LLM license</span>](https://falconllm.tii.ae/falcon-terms-and-conditions.html). We hope the AI community finds these models valuable for research, application development, and further experimentation. Falcon3.1-74B is a continuation of our efforts to create more capable, efficient, specialized foundation models. We welcome feedback and collaboration from the community as we continue to refine and advance these models.

## Useful links

- Access to our models (including GGUF and 1.58bit models) through [the Falcon3.1 HuggingFace collection](https://huggingface.co/collections/tiiuae/falcon31-6784de2fc5549029e0c52f61).
- Feel free to join [our discord server](https://discord.gg/vfw6k2G3) if you have any questions or to interact with our researchers and developers.
- Check out the [Falcon-LLM License link](https://falconllm.tii.ae/falcon-terms-and-conditions.html) for more details about the license.
- Refer to the official [Open LLM Leaderboard](https://huggingface.co/spaces/open-llm-leaderboard/open_llm_leaderboard#/) for HF evaluations of our models.

## Acknowledgments

We warmly thank the following people for their smooth support and integration within the ecosystem.

- list ppl

## Citation
If Falcon3.1-74B were helpful to your work, feel free to give us a cite.

```
@misc{Falcon3.1-74B,
    title = {title goes here},
    url = {url goes here},
    author = {Falcon-LLM Team},
    month = {March},
    year = {2025}
}
```