---
title: "title goes here"
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


# Title goes here falcon 3.1 74b

We introduce Falcon3.1 74B, a decoder-only large language model, developed by
[Technology Innovation Institute (TII)](https://www.tii.ae/ai-and-digital-science) in Abu Dhabi. By pushing the
boundaries of performance and training efficiency, this release reflects our ongoing commitment to advancing open
and accessible large foundation models.

This iteration includes:
1. [Falcon3.1-74B-Base](https://huggingface.co/tiiuae/Falcon3.1-74B-Base)
1. [Falcon3.1-74B-Instruct](https://huggingface.co/tiiuae/Falcon3.1-74B-Instruct)

In developing these models, we incorporated several key innovations aimed at improving the models' performances while reducing training costs:
- one
- two
- three

## Key Highlights
etc

## Enhanced Capabilities
etc

## Models' Specs and Benchmark Results
etc

### Instruct models
etc


## all the graphs
### General Inst

{{< barplot_vertical id="general-inst" highlight="Falcon3.1-74B-Instruct" ymin="0" ymax="0.94" ylabel="Performance %" >}}
[
    { "category": "General", "model": "Falcon3.1-74B-Instruct", "value": 0.7045 },
    { "category": "General", "model": "Qwen2.5-72B-Instruct", "value": 0.7145 },
    { "category": "General", "model": "Llama-3.3-70B-Instruct", "value": 0.68825 },

    { "category": "Math", "model": "Falcon3.1-74B-Instruct", "value": 0.749 },
    { "category": "Math", "model": "Qwen2.5-72B-Instruct", "value": 0.748 },
    { "category": "Math", "model": "Llama-3.3-70B-Instruct", "value": 0.76575 },

    { "category": "Reasoning", "model": "Falcon3.1-74B-Instruct", "value": 1 },
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
<table border="1" style="width: 100%; text-align: center; border-collapse: collapse; font-size: 11px">
    <colgroup>
        <col style="width: 10%;">
        <col style="width: 10%;">
        <col style="width: 7%;">
        <col style="width: 7%;">
        <col style="background-color: rgba(176, 136, 255, 0.5); width: 7%;">
    </colgroup>
    <thead>
        <tr>
            <th>Category</th>
            <th>Benchmark</th>
            <th>Qwen2.5-72B-Instruct</th>
            <th>Llama-3.3-70B-Instruct</th>
            <th>Falcon3.1-74B-Instruct</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="4">General</td>
            <td>MMLU (5-shot)</td>
            <td><b>84.4</b></td>
            <td>82.0</td>
            <td>81.7</td>
        </tr>
        <tr>
            <td>MMLU-PRO (5-shot)</td>
            <td>56.1</td>
            <td>53.3</td>
            <td><b>56.6</b></td>
        </tr>
        <tr>
            <td>IFEval</td>
            <td>86.4</td>
            <td><b>90.0</b></td>
            <td>83.3</td>
        </tr>
        <tr>
            <td>AGIeval</td>
            <td>58.9</td>
            <td>50.0</td>
            <td><b>60.2</b></td>
        </tr>
        <tr>
            <td rowspan="4">Math</td>
            <td>GSM8K (5-shot, flexible-extract)</td>
            <td>80.7</td>
            <td><b>93.4</b></td>
            <td>86.3</td>
        </tr>
        <tr>
            <td>GSM8K (8-shot, COT, flexible-extract)</td>
            <td>78.7</td>
            <td><b>94.0</b></td>
            <td>82.9</td>
        </tr>
        <tr>
            <td>MATH Lvl-5 (4-shot)</td>
            <td><b>59.8</b></td>
            <td>48.3</td>
            <td>52.0</td>
        </tr>
        <tr>
            <td>MATH500</td>
            <td><b>80.0</b></td>
            <td>70.6</td>
            <td>78.4</td>
        </tr>
        <tr>
            <td rowspan="5">Reasoning</td>
            <td>Arc Challenge (25-shot)</td>
            <td>71.2</td>
            <td><b>74.5</b></td>
            <td>72.0</td>
        </tr>
        <tr>
            <td>GPQA (0-shot)</td>
            <td>36.8</td>
            <td>32.0</td>
            <td><b>39.7</b></td>
        </tr>
        <tr>
            <td>MUSR (0-shot)</td>
            <td>42.2</td>
            <td>44.5</td>
            <td><b>52.8</b></td>
        </tr>
        <tr>
            <td>BBH (3-shot)</td>
            <td><b>72.6</b></td>
            <td>69.2</td>
            <td>71.9</td>
        </tr>
        <tr>
            <td>BBH (3-shot, COT)</td>
            <td>35.3</td>
            <td>61.8</td>
            <td></td>
        </tr>
        <tr>
            <td rowspan="5">CommonSense Understanding</td>
            <td>PIQA (0-shot)</td>
            <td>75.6</td>
            <td>80.1</td>
            <td><b>83.2</b></td>
        </tr>
        <tr>
            <td>SciQ (0-shot)</td>
            <td>64.0</td>
            <td>91.4</td>
            <td><b>93.1</b></td>
        </tr>
        <tr>
            <td>Hellaswag (0-shot)</td>
            <td>68.8</td>
            <td>70.2</td>
            <td><b>81.1</b></td>
        </tr>
        <tr>
            <td>LogiQA (0-shot)</td>
            <td>39.2</td>
            <td>39.9</td>
            <td><b>40.6</b></td>
        </tr>
        <tr>
            <td>OpenbookQA (0-shot)</td>
            <td>44.2</td>
            <td>46.8</td>
            <td><b>50.6</b></td>
        </tr>
        <tr>
            <td rowspan="2">Code</td>
            <td>EvalPlus (0-shot)</td>
            <td><b>83.9</b></td>
            <td>81.3</td>
            <td>81.2</td>
        </tr>
        <tr>
            <td>Multipl-E (0-shot)</td>
            <td>42.3</td>
            <td>60.0</td>
            <td><b>63.0</b></td>
        </tr>      
        <tr>
            <td rowspan="2">Instructions following</td>
            <td>MT-Bench</td>
            <td><b>9.1</b></td>
            <td>9.0</td>
            <td>8.8</td>
        </tr>
        <tr>
            <td>Alpaca (WC)</td>
            <td><b>51.0</b></td>
            <td>38.3</td>
            <td>49.1</td>
        </tr>
        <tr>
            <td>Tool use</td>
            <td>BFCL AST</td>
            <td><b>90.7</b></td>
            <td>85.0</td>
            <td>85.5</td>
        </tr>
    </tbody>
</table>
</details>

### MMLU Pro Inst
{{< barplot_horizental id="mmlu-pro-inst" highlight="Falcon3.1-74B-Instruct" ymin="0" ymax="1" ylabel="Performance %" height="800">}}
[
    { "category": "Average", "model": "Falcon3.1-74B-Instruct", "value": 1 },
    { "category": "Average", "model": "Qwen2.5-72B-Instruct", "value": 1 },
    { "category": "Average", "model": "Llama-3.3-70B-Instruct", "value": 1 },

    { "category": "Biology", "model": "Falcon3.1-74B-Instruct", "value": 1 },
    { "category": "Biology", "model": "Qwen2.5-72B-Instruct", "value": 1 },
    { "category": "Biology", "model": "Llama-3.3-70B-Instruct", "value": 1 },
    
    { "category": "Business", "model": "Falcon3.1-74B-Instruct", "value": 1 },
    { "category": "Business", "model": "Qwen2.5-72B-Instruct", "value": 1 },
    { "category": "Business", "model": "Llama-3.3-70B-Instruct", "value": 1 },
    
    { "category": "Chemistry", "model": "Falcon3.1-74B-Instruct", "value": 1 },
    { "category": "Chemistry", "model": "Qwen2.5-72B-Instruct", "value": 1 },
    { "category": "Chemistry", "model": "Llama-3.3-70B-Instruct", "value": 1 },
    
    { "category": "Computer Science", "model": "Falcon3.1-74B-Instruct", "value": 1 },
    { "category": "Computer Science", "model": "Qwen2.5-72B-Instruct", "value": 1 },
    { "category": "Computer Science", "model": "Llama-3.3-70B-Instruct", "value": 1 },
    
    { "category": "Ecomonics", "model": "Falcon3.1-74B-Instruct", "value": 1 },
    { "category": "Ecomonics", "model": "Qwen2.5-72B-Instruct", "value": 1 },
    { "category": "Ecomonics", "model": "Llama-3.3-70B-Instruct", "value": 1 },
    
    { "category": "Engineering", "model": "Falcon3.1-74B-Instruct", "value": 1 },
    { "category": "Engineering", "model": "Qwen2.5-72B-Instruct", "value": 1 },
    { "category": "Engineering", "model": "Llama-3.3-70B-Instruct", "value": 1 },
    
    { "category": "Health", "model": "Falcon3.1-74B-Instruct", "value": 1 },
    { "category": "Health", "model": "Qwen2.5-72B-Instruct", "value": 1 },
    { "category": "Health", "model": "Llama-3.3-70B-Instruct", "value": 1 },
    
    { "category": "Histroy", "model": "Falcon3.1-74B-Instruct", "value": 1 },
    { "category": "Histroy", "model": "Qwen2.5-72B-Instruct", "value": 1 },
    { "category": "Histroy", "model": "Llama-3.3-70B-Instruct", "value": 1 },
    
    { "category": "Law", "model": "Falcon3.1-74B-Instruct", "value": 1 },
    { "category": "Law", "model": "Qwen2.5-72B-Instruct", "value": 1 },
    { "category": "Law", "model": "Llama-3.3-70B-Instruct", "value": 1 },
    
    { "category": "Math", "model": "Falcon3.1-74B-Instruct", "value": 1 },
    { "category": "Math", "model": "Qwen2.5-72B-Instruct", "value": 1 },
    { "category": "Math", "model": "Llama-3.3-70B-Instruct", "value": 1 },
    
    { "category": "Philosophy", "model": "Falcon3.1-74B-Instruct", "value": 1 },
    { "category": "Philosophy", "model": "Qwen2.5-72B-Instruct", "value": 1 },
    { "category": "Philosophy", "model": "Llama-3.3-70B-Instruct", "value": 1 },
    
    { "category": "Physiscs", "model": "Falcon3.1-74B-Instruct", "value": 1 },
    { "category": "Physiscs", "model": "Qwen2.5-72B-Instruct", "value": 1 },
    { "category": "Physiscs", "model": "Llama-3.3-70B-Instruct", "value": 1 },
    
    { "category": "Psychology", "model": "Falcon3.1-74B-Instruct", "value": 1 },
    { "category": "Psychology", "model": "Qwen2.5-72B-Instruct", "value": 1 },
    { "category": "Psychology", "model": "Llama-3.3-70B-Instruct", "value": 1 },
    
    { "category": "Other", "model": "Falcon3.1-74B-Instruct", "value": 1 },
    { "category": "Other", "model": "Qwen2.5-72B-Instruct", "value": 1 },
    { "category": "Other", "model": "Llama-3.3-70B-Instruct", "value": 1 }
]
{{< /barplot_horizental >}}

### GPQA Inst
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

### Multilingual inst

{{< barplot_horizental id="multilingual-inst" highlight="Falcon3.1-74B-Instruct" ymin="0.5" ymax="0.8" ylabel="Performance %" height="800">}}
[
    { "category": "French", "model": "Falcon3.1-74B-Instruct", "value": 0.7583 },
    { "category": "French", "model": "Qwen2.5-72B-Instruct", "value": 0.6862 },
    { "category": "French", "model": "Llama-3.3-70B-Instruct", "value": 0.7460 },

    { "category": "German", "model": "Falcon3.1-74B-Instruct", "value": 0.7375 },
    { "category": "German", "model": "Qwen2.5-72B-Instruct", "value": 0.6866 },
    { "category": "German", "model": "Llama-3.3-70B-Instruct", "value": 0.7404 },
    
    { "category": "Spanish", "model": "Falcon3.1-74B-Instruct", "value": 0.7860 },
    { "category": "Spanish", "model": "Qwen2.5-72B-Instruct", "value": 0.7374 },
    { "category": "Spanish", "model": "Llama-3.3-70B-Instruct", "value": 0.7703 },
    
    { "category": "Russian", "model": "Falcon3.1-74B-Instruct", "value": 0.7136 },
    { "category": "Russian", "model": "Qwen2.5-72B-Instruct", "value": 0.6522 },
    { "category": "Russian", "model": "Llama-3.3-70B-Instruct", "value": 0.7322 },

    { "category": "Dutch", "model": "Falcon3.1-74B-Instruct", "value": 0.711333333 },
    { "category": "Dutch", "model": "Qwen2.5-72B-Instruct", "value": 0.683930923 },
    { "category": "Dutch", "model": "Llama-3.3-70B-Instruct", "value": 0.710151728 },
    
    { "category": "Italian", "model": "Falcon3.1-74B-Instruct", "value": 0.7259 },
    { "category": "Italian", "model": "Qwen2.5-72B-Instruct", "value": 0.71156585 },
    { "category": "Italian", "model": "Llama-3.3-70B-Instruct", "value": 0.714113129 },

    { "category": "Portuguese", "model": "Falcon3.1-74B-Instruct", "value": 0.7405 },
    { "category": "Portuguese", "model": "Qwen2.5-72B-Instruct", "value": 0.719609738 },
    { "category": "Portuguese", "model": "Llama-3.3-70B-Instruct", "value": 0.725370625 },
    
    { "category": "Romanian", "model": "Falcon3.1-74B-Instruct", "value": 0.708733333 },
    { "category": "Romanian", "model": "Qwen2.5-72B-Instruct", "value": 0.657285591 },
    { "category": "Romanian", "model": "Llama-3.3-70B-Instruct", "value": 0.687024979 },
    
    { "category": "Swedish", "model": "Falcon3.1-74B-Instruct", "value": 0.712066667 },
    { "category": "Swedish", "model": "Qwen2.5-72B-Instruct", "value": 0.666347314 },
    { "category": "Swedish", "model": "Llama-3.3-70B-Instruct", "value": 0.696495478 },
        
    { "category": "Chinese", "model": "Falcon3.1-74B-Instruct", "value": 0.720566667 },
    { "category": "Chinese", "model": "Qwen2.5-72B-Instruct", "value": 0.762693112 },
    { "category": "Chinese", "model": "Llama-3.3-70B-Instruct", "value": 0.761756903 },
    
    { "category": "Hindi", "model": "Falcon3.1-74B-Instruct", "value": 0.5572 },
    { "category": "Hindi", "model": "Qwen2.5-72B-Instruct", "value": 0.548344409 },
    { "category": "Hindi", "model": "Llama-3.3-70B-Instruct", "value": 0.551432242 }
]
{{< /barplot_horizental >}}

<details>
<summary> Languages task scope </summary>
The languages included, by task, are the following:
<ul>
<li>M-MMLU: Chinese, Dutch, French, German, Hindi, Italian, Portuguese, Romanian, Russian, Spanish, Swedish.</li>
<li>MGSM: Chinese, French, German, Russian, Spanish.</li>
<li>M-HellaSwag: Dutch, French, German, Hindi, Italian, Portuguese, Romanian, Russian, Spanish, Swedish.</li>
<li>M-ArcChallenge: Chinese, Dutch, French, German, Hindi, Italian, Portuguese, Romanian, Russian, Spanish, Swedish.</li>
</ul>
</details>

### Long context helmet inst
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

### General Base
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
<table border="1" style="width: 100%; text-align: center; border-collapse: collapse; font-size: 11px">
    <colgroup>
        <col style="width: 10%;">
        <col style="width: 10%;">
        <col style="width: 7%;">
        <col style="width: 7%;">
        <col style="background-color: rgba(80, 15, 213, 0.5); width: 7%;">
    </colgroup>
    <thead>
        <tr>
            <th>Category</th>
            <th>Benchmark</th>
            <th>Qwen2.5-72B</th>
            <th>Llama-3.1-70B</th>
            <th>Falcon3.1-74B-Base</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="3">General</td>
            <td>MMLU (5-shot)</td>
            <td>86.0</td>
            <td>78.7</td>
            <td>83.0</td>
        </tr>
        <tr>
            <td>MMLU-PRO (5-shot)</td>
            <td>59.8</td>
            <td>46.6</td>
            <td>56.3</td>
        </tr>
        <tr>
            <td>IFEval</td>
            <td>41.4</td>
            <td>16.8</td>
            <td>38.6</td>
        </tr>
        <tr>
            <td rowspan="2">Math</td>
            <td>GSM8K (5-shot, flexible-extract)</td>
            <td>89.6</td>
            <td>80.1</td>
            <td>86.3</td>
        </tr>
        <tr>
            <td>MATH Lvl-5 (4-shot)</td>
            <td>38.7</td>
            <td>18.4</td>
            <td>33.4</td>
        </tr>
        <tr>
            <td rowspan="4">Reasoning</td>
            <td>Arc Challenge (25-shot)</td>
            <td>72.4</td>
            <td>70.0</td>
            <td>72.0</td>
        </tr>
        <tr>
            <td>GPQA (0-shot)</td>
            <td>41.0</td>
            <td>38.8</td>
            <td>40.0</td>
        </tr>
        <tr>
            <td>MUSR (0-shot)</td>
            <td>48.0</td>
            <td>45.6</td>
            <td>49.0</td>
        </tr>
        <tr>
            <td>BBH (3-shot)</td>
            <td>68.0</td>
            <td>62.7</td>
            <td>67.9</td>
        </tr>
        <tr>
            <td rowspan="4">CommonSense Understanding</td>
            <td>PIQA (0-shot)</td>
            <td>83.7</td>
            <td>84.3</td>
            <td>84.5</td>
        </tr>
        <tr>
            <td>SciQ (0-shot)</td>
            <td>95.1</td>
            <td>94.8</td>
            <td>94.5</td>
        </tr>
        <tr>
            <td>Winogrande (0-shot)</td>
            <td>77.4</td>
            <td>79.1</td>
            <td>78.6</td>
        </tr>
        <tr>
            <td>LogiQA (0-shot)</td>
            <td>44.7</td>
            <td>37.2</td>
            <td>43.9</td>
        </tr>
        <tr>
            <td rowspan="2">Code</td>
            <td>EvalPlus (0-shot)</td>
            <td>65.7</td>
            <td>63.7</td>
            <td>64.8</td>
        </tr>
        <tr>
            <td>Multipl-E (0-shot)</td>
            <td>46.9</td>
            <td>39.4</td>
            <td>55.4</td>
        </tr>
    </tbody>
</table>
</details>

## Open Source Commitment
In line with our mission to foster AI accessibility and collaboration, Falcon3.1-74B is released under the [**Falcon LLM license**](https://falconllm.tii.ae/falcon-terms-and-conditions.html). We hope the AI community finds these models valuable for research, application development, and further experimentation. Falcon3.1-74B is not a culmination but a continuation of our efforts to create more capable, efficient, specialized foundation models. We welcome feedback and collaboration from the community as we continue to refine and advance these technologies.

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