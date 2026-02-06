---
# TODO title + date
title: "Falcon H1R 7B FP8"
date: 2026-02-04T08:00:00Z
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
    # TODO ?
    image: "cover.png"
    # can also paste direct link from external site
    # ex. https://i.ibb.co/K0HVPBd/paper-mod-profilemode.png
    alt: "<alt falcon-h1r-7b-fp8>"
    caption: ""
    relative: true # To use relative path for cover image, used in hugo Page-bundles
    responsive_images: true
header:
#   background: "" # background css value
    background_image: "cover.png"
    gradient: true
    blur: true
contributors:
  - title: "Contributors - TII"
    people:
      - name: Puneesh Khanna
        image: img/contributors/puneesh_khanna.jpg
      - name: Slim Frikha
        image: img/contributors/slim_frikha.jpg
      - name: Iheb Chaabane
        image: img/contributors/iheb_chaabane.jpg
      - name: Mohamed El Amine Seddik
        image: img/contributors/mohamed_seddik.png
      - name: Saarah Abdulla
      - name: Hakim Hacid
        image: img/contributors/hakim_hacid.png
  - title: "Contributors - NVIDIA"
    people:
      - name: Mireille Fares
      - name: Sergio Perez
      - name: Amit Kushwaha
      - name: Liana Mikaelyan
---

{{< button href="https://chat.falconllm.tii.ae" label="Falcon CHAT" external=true >}}
{{< button href="https://huggingface.co/collections/tiiuae/falcon-h1r" label="Hugging Face" external=true >}}
{{< button href="https://discord.gg/Cbek57PrZE" label="DISCORD" external=true >}}

Introducing <span class="bold">[Falcon H1R 7B FP8](https://huggingface.co/tiiuae/Falcon-H1R-7B-FP8)</span> .......

## Inference performance

### Throughput

{{< dynamic_line id="inference" highlight="FP8" category_label="I/O size"
name_label="Models" x_label="Batch size" y_label="Tokens / s / GPU" >}}
[
    { "category": "Input=512, Output=8k", "name": "BF16", "x": 2, "y": 238, "tooltip": "tp=1, dp=1"},
    { "category": "Input=512, Output=8k", "name": "FP8", "x": 2, "y": 289, "tooltip": "tp=1, dp=1"},
    { "category": "Input=512, Output=8k", "name": "BF16", "x": 8, "y": 820, "tooltip": "tp=1, dp=1"},
    { "category": "Input=512, Output=8k", "name": "FP8", "x": 8, "y": 1003, "tooltip": "tp=1, dp=1"},
    { "category": "Input=512, Output=8k", "name": "BF16", "x": 16, "y": 1414, "tooltip": "tp=1, dp=1"},
    { "category": "Input=512, Output=8k", "name": "FP8", "x": 16, "y": 1729, "tooltip": "tp=1, dp=1"},
    { "category": "Input=512, Output=8k", "name": "BF16", "x": 32, "y": 2230, "tooltip": "tp=1, dp=1"},
    { "category": "Input=512, Output=8k", "name": "FP8", "x": 32, "y": 2682, "tooltip": "tp=1, dp=1"},

    { "category": "Input=8k, Output=8k", "name": "BF16", "x": 2, "y": 228, "tooltip": "tp=1, dp=1"},
    { "category": "Input=8k, Output=8k", "name": "FP8", "x": 2, "y": 282, "tooltip": "tp=1, dp=1"},
    { "category": "Input=8k, Output=8k", "name": "BF16", "x": 8, "y": 732, "tooltip": "tp=1, dp=1"},
    { "category": "Input=8k, Output=8k", "name": "FP8", "x": 8, "y": 933, "tooltip": "tp=1, dp=1"},
    { "category": "Input=8k, Output=8k", "name": "BF16", "x": 16, "y": 1168, "tooltip": "tp=1, dp=1"},
    { "category": "Input=8k, Output=8k", "name": "FP8", "x": 16, "y": 1505, "tooltip": "tp=1, dp=1"},
    { "category": "Input=8k, Output=8k", "name": "BF16", "x": 32, "y": 1695, "tooltip": "tp=1, dp=1"},
    { "category": "Input=8k, Output=8k", "name": "FP8", "x": 32, "y": 2220, "tooltip": "tp=1, dp=1"}

]
{{< /dynamic_line >}}

### Memory

{{< barplot_vertical id="memory" highlight="FP8" ymin="0" ymax="16" ylabel="Weights memory (Gb)" yaxis_percentage="false">}}
[
    { "category": "", "model": "BF16", "value": 14.2 },
    { "category": "", "model": "FP8", "value": 7.9 }
]
{{< /barplot_vertical >}}

## Evaluations

{{< barplot_vertical id="benchs" highlight="FP8" ymin="0.5" ymax="0.9" ylabel="Performance %" xaxis_percentage="true">}}
[
    { "category": "AIME25", "model": "BF16", "value": 0.831 },
    { "category": "AIME25", "model": "FP8", "value": 0.823 },

    { "category": "LCB v6", "model": "BF16", "value": 0.686 },
    { "category": "LCB v6", "model": "FP8", "value": 0.676 },

    { "category": "GPQA-D", "model": "BF16", "value": 0.613 },
    { "category": "GPQA-D", "model": "FP8", "value": 0.612 }
]
{{< /barplot_vertical >}}

Explain TTS settings  (5 runs, n=128)

{{< barplot_vertical id="tts" highlight="FP8" ymin="0.4" ymax="0.9" ylabel="Performance %" xaxis_percentage="true">}}
[
    { "category": "AIME25", "model": "BF16", "value": 0.913 },
    { "category": "AIME25", "model": "FP8", "value": 0.893 },

    { "category": "AIME24", "model": "BF16", "value": 0.953 },
    { "category": "AIME24", "model": "FP8", "value": 0.94 }
]
{{< /barplot_vertical >}}


## Quantization

NVIDIA section here
ModelOpt + nvidia fixes

## Citation

```latex
@article{falcon-h1r-fp8,
  title={Falcon H1R 7B FP8},
  author={TII and NVIDIA},
  url={https://falcon-lm.github.io/blog/falcon-h1r-7b-fp8},
  year={2026}
}
```
