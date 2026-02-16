---
title: "Falcon‑H1R-FP8: Accelerating Inference with Quantized Precision"
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
        image: img/contributors/saarah_abdulla.png
      - name: Hakim Hacid
        image: img/contributors/hakim_hacid.png
  - title: "Contributors - NVIDIA"
    people:
      - name: Sergio Perez
      - name: Mireille Fares
      - name: Liana Mikaelyan
      - name: Amit Kushwaha
---

{{< button href="https://chat.falconllm.tii.ae" label="Falcon CHAT" external=true >}}
{{< button href="https://huggingface.co/collections/tiiuae/falcon-h1r" label="Hugging Face" external=true >}}
{{< button href="https://discord.gg/Cbek57PrZE" label="DISCORD" external=true >}}

Introducing <span class="bold">[Falcon H1R 7B FP8](https://huggingface.co/tiiuae/Falcon-H1R-7B-FP8)</span>, a fully quantized version of the [Falcon H1R 7B](https://huggingface.co/tiiuae/Falcon-H1R-7B) model that packs both weights and activations into FP8 format. Using [NVIDIA Model Optimizer](https://github.com/NVIDIA/Model-Optimizer) and post-training quantization (PTQ) workflow, the FP8 quantized model preserves the original BF16 quality performance while delivering a 1.2×–1.5× throughput boost and halving GPU memory footprint.

# Evaluations

The FP8 variant retains essentially the same accuracy as BF16 across all three major reasoning tasks: AIME25 drops only 0.8 % (from 83.1 % to 82.3 %), LCB‑v6 falls by 1 % (68.6 % → 67.6 %), and GPQA‑D shows a negligible 0.1 % difference (61.3 % → 61.2 %). These results confirm that the FP8 PTQ preserves benchmark performance while delivering substantial memory and throughput gains.

{{< barplot_vertical id="benchs" highlight="FP8" ymin="0" ymax="0.9" ylabel="Performance %" xaxis_percentage="true">}}
[
    { "category": "AIME25", "model": "BF16", "value": 0.831 },
    { "category": "AIME25", "model": "FP8", "value": 0.823 },

    { "category": "LCB v6", "model": "BF16", "value": 0.686 },
    { "category": "LCB v6", "model": "FP8", "value": 0.676 },

    { "category": "GPQA-D", "model": "BF16", "value": 0.613 },
    { "category": "GPQA-D", "model": "FP8", "value": 0.612 }
]
{{< /barplot_vertical >}}

</br>

Under the [DeepConf](https://github.com/facebookresearch/deepconf) test‑time filtering regime (5 repetitions, 128 rollouts per prompt), Falcon H1R 7B FP8 attains 89.3 % accuracy on AIME 2025 and 94.0 % on AIME 2024, compared to 91.3 % and 95.3 % for the BF16 baseline. The modest 1–2 % drop confirms that FP8 quantization preserves the model’s reasoning performance while still benefiting from DeepConf’s efficient trace pruning.

{{< barplot_vertical id="tts" highlight="FP8" ymin="0" ymax="0.9" ylabel="Performance %" xaxis_percentage="true">}}
[
    { "category": "AIME25", "model": "BF16", "value": 0.913 },
    { "category": "AIME25", "model": "FP8", "value": 0.893 },

    { "category": "AIME24", "model": "BF16", "value": 0.953 },
    { "category": "AIME24", "model": "FP8", "value": 0.94 }
]
{{< /barplot_vertical >}}

# Inference profiling

## Memory

Falcon H1R 7B FP8 cuts the weight memory footprint from 14.2 GB to just 7.9 GB, a reduction of roughly 44 % that enables deployment on GPUs with lower VRAM while preserving the model’s performance.

{{< barplot_vertical id="memory" highlight="FP8" ymin="0" ymax="16" ylabel="Weights memory (Gb)" yaxis_percentage="false">}}
[
    { "category": "", "model": "BF16", "value": 14.2 },
    { "category": "", "model": "FP8", "value": 7.9 }
]
{{< /barplot_vertical >}}

## Offline inference benchmarking

Inference was benchmarked using offline [vLLM](https://github.com/vllm-project/vllm) on a single NVIDIA H100 GPU.

### Throughput

The plot below shows that Falcon H1R 7B FP8 consistently outperforms its BF16 counterpart across all batch sizes.

* For the Input = 512 / Output = 8k workload, FP8 yields a 20–22 % speed‑up (≈1.2×) over BF16, reaching 2682 tokens/s/GPU at a batch size of 32.
* For the Input = 8k / Output = 8k workload, the improvement grows to 24–31 % (≈1.3×), achieving 2220 tokens/s/GPU at a batch size of 32.
</br></br>

{{< dynamic_line id="inference" highlight="FP8" category_label="I/O size"
name_label="Model precision" x_label="Batch size" y_label="Tokens / s / GPU" >}}
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

## Online inference benchmarking

To conduct the online serving performance analysis, we utilized [NVIDIA AIPerf](https://github.com/ai-dynamo/aiperf). AIPerf is a client-side generative AI benchmarking tool that supports any inference service conforming to the OpenAI API specification. It is designed to capture critical performance metrics including Time to First Token (TTFT), Inter-Token Latency (ITL), and overall throughput.

Models were served using online [vLLM](https://github.com/vllm-project/vllm) with 1k input tokens and 1k output tokens across various concurrency levels. All performance numbers are measured on a single NVIDIA H200 GPU.

### GPU Efficiency vs User Experience

This chart illustrates the trade-off between total output throughput (tokens/sec) and per-user throughput (tokens/sec/user) across different concurrency levels. As concurrency increases, total throughput grows but per-user experience degrades. FP8 maintains higher throughput on both axes, demonstrating superior efficiency.

**Key Performance Improvements:**
- **Output Throughput**: FP8 achieves up to 12.7% higher output token throughput at concurrency 64 (4543.5 vs 4030.9 tokens/sec)
- **Per-User Throughput**: FP8 delivers 20% better tokens/sec per user at low concurrency (188.7 vs 156.7 at concurrency 1)
</br></br>

{{< dynamic_line id="gpu_efficiency" highlight="FP8" category_label="Metric"
name_label="Model precision" x_label="Tokens/sec per User" y_label="Output Token Throughput (tokens/sec)" >}}
[
    { "category": "GPU Efficiency vs User Experience", "name": "BF16", "x": 156.79, "y": 154.61, "tooltip": "concurrency=1"},
    { "category": "GPU Efficiency vs User Experience", "name": "BF16", "x": 153.03, "y": 298.37, "tooltip": "concurrency=2"},
    { "category": "GPU Efficiency vs User Experience", "name": "BF16", "x": 146.89, "y": 544.11, "tooltip": "concurrency=4"},
    { "category": "GPU Efficiency vs User Experience", "name": "BF16", "x": 133.42, "y": 1004.91, "tooltip": "concurrency=8"},
    { "category": "GPU Efficiency vs User Experience", "name": "BF16", "x": 117.66, "y": 1775.0, "tooltip": "concurrency=16"},
    { "category": "GPU Efficiency vs User Experience", "name": "BF16", "x": 94.07, "y": 2768.55, "tooltip": "concurrency=32"},
    { "category": "GPU Efficiency vs User Experience", "name": "BF16", "x": 68.01, "y": 4030.91, "tooltip": "concurrency=64"},

    { "category": "GPU Efficiency vs User Experience", "name": "FP8", "x": 188.74, "y": 185.45, "tooltip": "concurrency=1"},
    { "category": "GPU Efficiency vs User Experience", "name": "FP8", "x": 185.19, "y": 359.87, "tooltip": "concurrency=2"},
    { "category": "GPU Efficiency vs User Experience", "name": "FP8", "x": 176.38, "y": 687.63, "tooltip": "concurrency=4"},
    { "category": "GPU Efficiency vs User Experience", "name": "FP8", "x": 162.1, "y": 1253.06, "tooltip": "concurrency=8"},
    { "category": "GPU Efficiency vs User Experience", "name": "FP8", "x": 137.84, "y": 1990.35, "tooltip": "concurrency=16"},
    { "category": "GPU Efficiency vs User Experience", "name": "FP8", "x": 105.82, "y": 3155.06, "tooltip": "concurrency=32"},
    { "category": "GPU Efficiency vs User Experience", "name": "FP8", "x": 76.63, "y": 4543.5, "tooltip": "concurrency=64"}
]
{{< /dynamic_line >}}

### P50 Inter-Token Latency

This chart shows the median (P50) time between consecutive tokens at different concurrency levels. Lower latency means faster token generation. FP8 maintains consistently lower P50 latency across all concurrency levels, with ~11% improvement at concurrency 64 (13ms vs 14.6ms)

{{< dynamic_line id="p50_latency" highlight="FP8" category_label="Metric"
name_label="Model precision" x_label="Concurrency Level" y_label="P50 Inter-Token Latency (ms)" xaxis_log="true" >}}
[
    { "category": "P50 Latency", "name": "BF16", "x": 1, "y": 6.38 },
    { "category": "P50 Latency", "name": "BF16", "x": 2, "y": 6.54 },
    { "category": "P50 Latency", "name": "BF16", "x": 4, "y": 6.8 },
    { "category": "P50 Latency", "name": "BF16", "x": 8, "y": 7.48 },
    { "category": "P50 Latency", "name": "BF16", "x": 16, "y": 8.51 },
    { "category": "P50 Latency", "name": "BF16", "x": 32, "y": 10.55 },
    { "category": "P50 Latency", "name": "BF16", "x": 64, "y": 14.62 },

    { "category": "P50 Latency", "name": "FP8", "x": 1, "y": 5.3 },
    { "category": "P50 Latency", "name": "FP8", "x": 2, "y": 5.4 },
    { "category": "P50 Latency", "name": "FP8", "x": 4, "y": 5.66 },
    { "category": "P50 Latency", "name": "FP8", "x": 8, "y": 6.16 },
    { "category": "P50 Latency", "name": "FP8", "x": 16, "y": 7.2 },
    { "category": "P50 Latency", "name": "FP8", "x": 32, "y": 9.41 },
    { "category": "P50 Latency", "name": "FP8", "x": 64, "y": 13.02 }
]
{{< /dynamic_line >}}

### Time to First Token (TTFT)

This chart measures the average time until the first token is generated after receiving a request. Lower TTFT is critical for perceived responsiveness. FP8 reduces TTFT by up to 28% at high concurrency (686.2ms vs 954.3ms at concurrency 64), significantly improving user experience.

{{< dynamic_line id="ttft" highlight="FP8" category_label="Metric"
name_label="Model precision" x_label="Concurrency Level" y_label="Avg Time to First Token (ms)" xaxis_log="true" >}}
[
    { "category": "TTFT", "name": "BF16", "x": 1, "y": 88.78 },
    { "category": "TTFT", "name": "BF16", "x": 2, "y": 168.49 },
    { "category": "TTFT", "name": "BF16", "x": 4, "y": 169.49 },
    { "category": "TTFT", "name": "BF16", "x": 8, "y": 260.83 },
    { "category": "TTFT", "name": "BF16", "x": 16, "y": 452.54 },
    { "category": "TTFT", "name": "BF16", "x": 32, "y": 703.05 },
    { "category": "TTFT", "name": "BF16", "x": 64, "y": 954.33 },

    { "category": "TTFT", "name": "FP8", "x": 1, "y": 81.87 },
    { "category": "TTFT", "name": "FP8", "x": 2, "y": 148.94 },
    { "category": "TTFT", "name": "FP8", "x": 4, "y": 145.58 },
    { "category": "TTFT", "name": "FP8", "x": 8, "y": 211.61 },
    { "category": "TTFT", "name": "FP8", "x": 16, "y": 415.61 },
    { "category": "TTFT", "name": "FP8", "x": 32, "y": 494.89 },
    { "category": "TTFT", "name": "FP8", "x": 64, "y": 686.2 }
]
{{< /dynamic_line >}}

# FP8 Post-Training Quantization Process with NVIDIA Model Optimizer

This section details the optimization of Falcon-H1R-7B’s inference performance through FP8 Post-Training Quantization (PTQ). To achieve this, we utilized [NVIDIA Model Optimizer](https://github.com/NVIDIA/Model-Optimizer) (ModelOpt), an open-sourced unified library designed to accelerate AI inference by compressing models using state-of-the-art optimization techniques. ModelOpt is an essential toolkit for efficient downstream deployment on NVIDIA hardware compatible with frameworks such as vLLM, TensorRT-LLM, SGLang and Dynamo.

While ModelOpt supports various optimization strategies such as structured pruning and knowledge distillation, we focused specifically on PTQ, which offers the fastest path to model optimization by compressing weights from higher precisions (like FP16 or BF16) down to FP8 using a small calibration dataset. This conversion significantly reduces the model’s size and computational requirement, enabling higher inference throughput and reduced latency.

## Per‑Tensor FP8 Post‑Training Quantization

ModelOpt supports FP8 recipes with different granularities balancing inference performance and model accuracy preservation. For this specific implementation, we employed Per-Tensor FP8 quantization, a technique where a single scaling factor is calculated for an entire tensor to map high-precision values into the 8-bit format. To generate these scales, ModelOpt executes a calibration step using either a public dataset or a custom dataset. To quantize Falcon-H1R-7B, the team used the default calibration dataset comprising of cnn_dailymail and [nemotron-post-training-dataset-v2](https://huggingface.co/datasets/nvidia/Nemotron-Post-Training-Dataset-v2). During this process, ModelOpt analyzes the dynamic range of activations and weights to determine the optimal static scaling factors that minimize accuracy degradation. The final output is a quantized checkpoint containing the FP8 weights and the scaling factors for weights and activations, ready to be built into an inference engine for efficient deployment.

## Quantization Steps

We started from our pre-trained checkpoint and applied per-tensor FP8 quantization using ModelOpt’s LLM quantization pipeline steps. In addition, we also quantize the KV cache to FP8 in order to save more memory footprint.

### Environment Setup

```bash
# Start from a vLLM-enabled Docker image
docker run --gpus all -it vllm/vllm-openai:latest

# Clone NVIDIA Model Optimizer
git clone https://github.com/NVIDIA/Model-Optimizer.git
cd Model-Optimizer

# Checkout to the most recent stable branch
git checkout 0.39.0

# Install Model Optimizer with development dependencies
pip install -e .[dev]

# Navigate to the LLM PTQ example directory
cd examples/llm_ptq
```

### Applying FP8 Post-Training Quantization

We can directly apply FP8 quantization on Falcon-H1R-7B model using:

```bash
python3 hf_ptq.py \
  --pyt_ckpt_path=/path/to/your/hf/checkpoint/ \
  --export_path=/path/to/save/fp8_quantized_model/ \
  --qformat=fp8 \
  --kv_cache_qformat=fp8 \
  --calib_size=512 \
  --batch_size=0 \
  --inference_tensor_parallel=1 \
  --inference_pipeline_parallel=1 \
  --export_fmt=hf \
  --trust_remote_code
```

Key flags of the FP8 quantization process:

* `--qformat=fp8`: applies per-tensor FP8 quantization to all model weights
* `--kv_cache_qformat=fp8`: quantizes the KV cache to FP8
* `--calib_size=512`: selects the samples to pass for the scales calibration, usually 512 are enough
* `--batch_size=0`: automatically find the maximum batch size
* `--inference_tensor_parallel & --inference_pipeline_parallel`: can be tuned if your model doesn’t fit in 1 GPU for the calibration process

# Conclusion

<span class="bold">Falcon H1R 7B FP8</span> preserves BF16 accuracy while cutting weight memory to 7.9 GB (≈44 %) and boosting throughput by ~20–30 % on H100/H200 GPUs.
It therefore enables high‑scale, low‑VRAM inference without sacrificing performance.

# Citation

```latex
@article{falcon-h1r-fp8,
  title={Falcon H1R 7B FP8},
  author={TII and NVIDIA},
  url={https://falcon-lm.github.io/blog/falcon-h1r-7b-fp8},
  year={2026}
}
```
