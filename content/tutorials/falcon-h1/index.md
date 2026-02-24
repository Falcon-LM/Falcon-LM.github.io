---
title: "Falcon-H1 Local Deployment Guide: MLX, llama.cpp, and OpenWebUI"
date: 2025-02-24T12:00:00Z
weight: 1
math: true
show_reading_time: true
show_bread_crumbs: true
show_post_nav_links: false
show_code_copy_buttons: true
show_word_count: true

cover:
    image: "./images/falcon-h1-logo.png"
    alt: "<alt falcon h1>"
    caption: ""
    relative: true
    responsive_images: true
header:
    background_image: "./images/falcon-h1-logo.png"
    gradient: true
    blur: true
contributors:
  - title: "Contributors"
    people:
      - name: Falcon LLM team
        image: img/contributors/FalconLLM.webp
---

<style>
table {
  border-collapse: collapse;
  width: 100%;
  background-color: transparent; /* nền theo system/theme */
  border-radius: 8px;
  overflow: hidden;
  color: inherit; /* chữ theo theme */
}
th, td {
  padding: 12px 16px;
  border: 1px solid; /* rõ ràng */
  border-color: rgba(0,0,0,0.3); /* mặc định cho light */
}
@media (prefers-color-scheme: dark) {
  th, td {
    border-color: rgba(255,255,255,0.2); /* rõ hơn trong dark */
  }
  tr:nth-child(even) td {
    background-color: rgba(255,255,255,0.05); /* xen kẽ màu dark */
  }
  tr:hover td {
    background-color: rgba(255,255,255,0.1); /* hover rõ dark */
  }
}
@media (prefers-color-scheme: light) {
  tr:nth-child(even) td {
    background-color: rgba(0,0,0,0.05); /* xen kẽ màu light */
  }
  tr:hover td {
    background-color: rgba(0,0,0,0.1); /* hover rõ light */
  }
}
th {
  font-weight: bold;
}

blockquote {
  border-left: 4px solid rgba(128,128,128,0.4);
  margin: 1em 0;
  padding: 0.5em 1em;
  background-color: transparent;
  color: inherit;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 0.9em;
  font-style: italic;
}
blockquote p {
  margin: 0;
}
blockquote p strong {
  font-weight: bold;
  font-style: italic;
}
blockquote p::before {
  content: "“";
}
blockquote p::after {
  content: "”";
}

ul + p strong:first-child,
ul + p:has(strong:first-child) {
  display: block;
  margin-top: 1.5em;
  margin-bottom: 0.5em;
}
p strong:only-child {
  display: inline-block;
  margin-top: 1em;
  margin-bottom: 0.5em;
}
</style>

## Overview
Sometimes your projects are about more than quick answers. You might need to read through hundreds of pages, keep a long conversation going, or work in multiple languages. Falcon H1 was designed for exactly that. By combining Transformer-based attention with State Space Models (SSM), it understands complex information while still running efficiently on everyday hardware.

**What makes Falcon H1 stand out**
- Hybrid architecture mixing Transformer and SSM.
- Can handle up to 256K context tokens, perfect for huge reports or long meetings.
- Multilingual capability: Supports many languages for diverse applications, including Arabic (ar), Czech (cs), German (de), English (en), Spanish (es), French (fr), Hindi (hi), Italian (it), Japanese (ja), Korean (ko), Dutch (nl), Polish (pl), Portuguese (pt), Romanian (ro), Russian (ru), Swedish (sv), Urdu (ur), and Chinese (zh).
- Runs smoothly on consumer grade GPUs, CPUs, and Apple Silicon devices.

**How to get started**
Falcon H1 can be deployed using MLX for Apple Silicon or llama.cpp in gguf format for other laptops. When paired with OpenWebUI, it provides a clean conversational workspace that functions like a multilingual AI colleague. This guide will walk you through the detailed steps for implementation.

Learn more:
- [Falcon H1 Release Blog Post](https://huggingface.co/blog/tiiuae/falcon-h1)
- [Falcon H1 Paper](https://arxiv.org/abs/2507.22448)
- [Mamba Paper](https://arxiv.org/abs/2405.21060)
- [Mamba2 Paper](https://arxiv.org/abs/2312.00752)
- [MLX Framework Overview](https://mlx-framework.org/#features)
- [llama.cpp Github Repository](https://github.com/ggml-org/llama.cpp)
- [Open-Web UI](https://openwebui.com)

## Model Variants
The Falcon H1 series comprises open-source large language models engineered for adaptability across a wide spectrum of hardware environments. This suite is available in six distinct model sizes, such as 0.5B, 1.5B, 1.5B Deep, 3B, 7B, and 34B, each offered in both base and instruct configurations. All variants are distributed under the permissive Falcon-LLM license.

The smaller-scale configurations, namely 0.5B, 1.5B, and 1.5B Deep, are particularly well-suited for on-device deployment on personal computers, laptops, and other compact hardware platforms. These models provide optimized resource consumption, low inference latency, and strong compatibility with consumer-grade GPUs, CPUs, and Apple Silicon architectures, while retaining Falcon H1 features like extended context processing and multilingual functionality. Conversely, the larger configurations, such as 3B, 7B, and 34B, deliver superior computational performance, albeit necessitating higher-performance infrastructure. The complete range of available versions can be explored on [Hugging Face](https://huggingface.co/collections/tiiuae/falcon-h1).

The collection also includes GGUF formats, for further information on the gguf quantization formats, please refer to [Hugging Face GGUF Quantization Types](https://huggingface.co/docs/hub/gguf#quantization-types)

## Prerequisites
Before configuring Falcon H1 on your system, it is essential to verify that the local environment satisfies the minimum specifications necessary for efficient model execution.

### Operating Systems
- Linux: Recommended for llama.cpp with full CPU/GPU support.
- macOS: Supported via MLX and llama.cpp, with GPU acceleration through Metal, optimized for Apple Silicon.
- Windows: Supports llama.cpp with CPU execution; GPU acceleration is available through CUDA for compatible NVIDIA graphics cards.

### Python
- Utilize a virtual environment such as conda to manage dependencies.  
- While llama.cpp operates natively without Python, optional Python bindings are available through the <a href="https://github.com/abetlen/llama-cpp-python">llama-cpp-python</a> package.

### Hugging Face Account
- Active account required: [Hugging Face](https://huggingface.co/)
- A free account meets most needs.

## Installation
The installation section is identical as the one from <a href="http://localhost:1313/tutorials/falcon-3/">Falcon3 tutorial</a> - in case you went through already on the previous tutorial, you can directly move to the download section

## Download Model Weights from Hugging Face
With the environment set up and all necessary tools and dependencies installed, the next step is to download a compact LLM to your laptop. You can get the Falcon H1 0.5B and 1.5B models from the official [Hugging Face](https://huggingface.co/collections/tiiuae/falcon-h1) repository maintained by TII. This guide focuses on the **Falcon 1.5B Instruct** model.

The Hugging Face collection offers complete model weights in multiple formats, including `.safetensors` and `.gguf`. The default format for storing model weights is `.safetensors`. Keep in mind that **llama.cpp** can serve models only in the `.gguf` format, while the **MLX** framework supports both `.gguf` and `.safetensors`.  

> **Note:**  Currently, TII provides ready-to-use .gguf and quantized model versions on their official Hugging Face repository. This means you can directly download the model weights to your local machine for use. When working with the llama.cpp framework, you’ll need a .gguf model as mentioned above. Make sure to choose a version that matches your hardware’s minimum requirements. In this example, we’ll experiment with the Falcon 1.5B Instruct .gguf model. If you’re using the mlx framework, you’ll be working with quantized versions. For the same 1.5B model size, you can select quantized versions in 4, 6, or 8-bit formats based on your hardware capabilities. Here, we’ll try the 1.5B 4-bit version.

To download the model weights, we’ll use the **hf** CLI tool. Ensure that you have it installed on your laptop and that you’re logged in with your Hugging Face account. To verify your installation and authentication, run:
```bash
hf auth whoami
```  
If the installation or authentication hasn’t been completed, follow the instructions provided in [huggingface link](https://huggingface.co/docs/huggingface_hub/guides/cli).

Now, let’s download the .gguf model version by running the following command:  
```bash
hf download tiiuae/Falcon-H1-1.5B-Instruct-GGUF Falcon-H1-1.5B-Instruct-Q4_K_M.gguf --local-dir Falcon-H1-1.5B-Instruct-GGUF 
```
> **Note**: Multiple quantized versions are available, so choose one that matches your hardware capabilities.

Next, we’ll download the 4-bit quantized model version with this command:  
```bash
hf download mlx-community/Falcon-H1-1.5B-Instruct-4bit --local-dir Falcon-H1-1.5B-Instruct-4bit
```
> **Note:**  This script will download the entire Hugging Face repository to your local machine.

By default, downloaded models are saved to Hugging Face’s `~/.cache/huggingface/hub` folder. However, if you prefer to specify a custom storage location, you can use the `--local-dir` tag and provide the exact folder path where you want the model saved. Once the downloads are complete, navigate to the folder where you saved the model weights to verify them. You should see output similar to the example shown below:
- `.gguf` model

<img src="./images/model-gguf.png" alt="Falcon-H1-1.5B-Instruct-GGUF" style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); display: block; margin: 1.5em 0;">

- `.safetensors` quantized model

<img src="./images/model-4bit.png" alt="Falcon-H1-1.5B-Instruct-4bit" style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); display: block; margin: 1.5em 0;">

## Serving Falcon-H1
The environment and all requirements for running the model are now fully set up. Next, we’ll walk through the steps for using each framework to serve LLMs directly on your system.
We will start with deploying the LLM using the **llama.cpp** framework.

### Running the llama.cpp Server  
First, make sure the server starts successfully and that it is running as expected.  
To confirm the binary works, run:  
```shell
llama-server --help
```  
This will display a list of available options. Some will be explained here, while others you can explore on your own. For now, the key options to note are:  
- `-m, --model FNAME`: Path to the model (default: `models/$filename` taken from `--hf-file` or `--model-url` if set, otherwise `models/7B/ggml-model-f16.gguf`). Environment variable: `LLAMA_ARG_MODEL`.  
- `--host HOST`: IP address for the server to listen on (default: `127.0.0.1`). Environment variable: `LLAMA_ARG_HOST`.  
- `--port PORT`: Port for the server to listen on (default: `8080`). Environment variable: `LLAMA_ARG_PORT`.  

To run the server with a quantized Falcon-H1 GGUF model, execute:  
```shell
llama-server -m ./Falcon-H1-1.5B-Instruct-GGUF/Falcon-H1-1.5B-Instruct-Q4_K_M.gguf
```
You should see similar output after running this command:

<img src="./images/llama-server.png" alt="llama-server-output" style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); display: block; margin: 1.5em 0;">

If nothing else is running on `127.0.0.1:8080`, the default host and port can be kept. You can also use environment variables instead of command-line arguments for convenience.  
When the server starts, it will expose a local OpenAI-compatible API at:  
```
http://127.0.0.1:8080
```  

### Server Settings in llama.cpp  
The `llama-server` includes a Web UI accessible via the API above. It shows a small set of configuration options focused on LLM sampling. For the full list, run:  
```shell
llama-server --help
```
These options can affect both how your model behaves and the speed of text generation. Many of them can be set via environment variables, which are consistent across other llama.cpp executables.

<details>
<summary><strong>Click to view key general parameters</strong></summary>

- `--threads/--threads-batch (LLAMA_ARG_THREADS)`: Number of CPU threads to use. Default `-1` automatically detects available cores.  
- `--ctx-size (LLAMA_ARG_CTX_SIZE)`: The model’s context size (how many tokens it can remember). Larger sizes require more memory.  
- `--predict (LLAMA_ARG_N_PREDICT)`: Maximum tokens to generate. Default `-1` means continuous generation.  
- `--batch-size/--ubatch-size (LLAMA_ARG_BATCH/LLAMA_ARG_UBATCH)`: Number of tokens processed per step.  
- `--flash-attn (LLAMA_ARG_FLASH_ATTN)`: Enables flash attention optimization for supported models.  
- `--mlock (LLAMA_ARG_MLOCK)`: Keeps the model in memory to avoid swapping.  
- `--no-mmap (LLAMA_ARG_NO_MMAP)`: Disables memory mapping.  
- `--gpu-layers (LLAMA_ARG_N_GPU_LAYERS)`: Number of layers to offload to the GPU (requires GPU-enabled build).  

</details>

<details>
<summary><strong>Click to view server-specific parameters</strong></summary>

- `--no-context-shift (LLAMA_ARG_NO_CONTEXT_SHIFT)`: Stops generation when the context is full instead of discarding old tokens.  
- `--cont-batching (LLAMA_ARG_CONT_BATCHING)`: Allows prompts to be processed in parallel with generation.  
- `--alias (LLAMA_ARG_ALIAS)`: Sets a model name alias for the REST API.  
- `--slots (LLAMA_ARG_ENDPOINT_SLOTS)`: Enables the `/slots` endpoint.  
- `--props (LLAMA_ARG_ENDPOINT_PROPS)`: Enables the `/props` endpoint.  

</details>

### Deployment with the MLX Framework on macOS  
You now know how to serve the model on your laptop using llama.cpp. Next, I’ll show you how to use the MLX framework in case you have a MacBook. Another option for serving LLMs is the **MLX** framework, which is built specifically for macOS and optimized for Apple hardware.

### Running the MLX Server  
Start the server with:  
```shell
mlx_lm.server --model ./Falcon-H1-1.5B-Instruct-4bit
```  
You should see similar output after running this command:

<img src="./images/mlx-server.png" alt="mlx-lm-server-output" style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); display: block; margin: 1.5em 0;">

This starts a text generation service on `localhost:8080` using the Falcon H1 1.5B Instruct model. If the model is not already in your local cache, it will be downloaded from the specified Hugging Face repository. However, I recommend downloading the model to your local system first, as described earlier.

To see all available options, run:  
```shell
mlx_lm.server --help
```  
To make a request to the model:  
```shell
curl localhost:8080/v1/chat/completions \
  -H "Content-Type: application/json" \
  -d '{
     "messages": [{"role": "user", "content": "Hello"}],
     "temperature": 0.7
   }'
```  

### Request Fields
<details>
<summary><strong>Click to view all request fields</strong></summary>

- `messages`: List of message objects with role and content.  
- `role_mapping`: Optional dictionary to customize role prefixes.  
- `stop`: Optional stop sequences.  
- `max_tokens`: Maximum tokens to generate (default: 512).  
- `stream`: Boolean to stream responses (default: `false`).  
- `temperature`: Controls randomness (default: 0.0).  
- `top_p`: Nucleus sampling parameter (default: 1.0).  
- `top_k`: Top-K sampling parameter (default: 0).  
- `min_p`: Minimum probability sampling parameter (default: 0.0).  
- `repetition_penalty`: Penalty for repeated tokens (default: 1.0).  
- `repetition_context_size`: Context size for applying repetition penalty (default: 20).  
- `logit_bias`: Mapping of token IDs to bias values.  
- `logprobs`: Number of top token probabilities to return (1–10).  
- `model`: Path or Hugging Face repo for the model.  
- `adapters`: Path to low-rank adapters.  
- `draft_model`: Smaller model for speculative decoding.  
- `num_draft_tokens`: Draft tokens predicted at once (default: 3).  

</details>

### Response Fields
<details>
<summary><strong>Click to view all response fields</strong></summary>

- `id`: Unique chat ID.  
- `system_fingerprint`: System identifier.  
- `object`: Response type (`chat.completion`, `chat.completion.chunk`, or `text.completion`).  
- `model`: Model path or repo name.  
- `created`: Timestamp of request.  
- `choices`: Output list with index, optional log probabilities, finish reason, and message text.  
- `usage`: Token statistics: prompt, completion, and total tokens.

</details>

If nothing else is running on `127.0.0.1:8080`, you can keep the default host and port. For convenience, environment variables can be used instead of command-line arguments.  
Once the server starts, it will expose a local OpenAI-compatible API at:  
```
http://127.0.0.1:8080
```  
Congratulations! If you’ve chosen the Falcon H1R model, you have now successfully served it on your laptop and it’s ready to use. Next, let’s look at integrating the model into OpenWebUI for chatting.

## Integrating with OpenwebUI
Once your selected serving framework is running, the next step is to connect Falcon-H1 to Open WebUI, giving you a simple chat-based interface for interacting with the model.

### Starting Open WebUI
First, let's proceed with installing open-webui cli. Use the command below to install:
```bash
pip install open-webui
```
> **Note:**  You should install open-webui cli within your existing conda virtual environment. If you are using MLX to serve local llm and already have a conda environment set up, install open-webui cli in that same one. Then activate your environment to proceed.

After successful installation, let's launch the server. 
```bash
open-webui serve
```
- Default access: [http://localhost:8080](http://localhost:8080)
- Custom port:

```bash
open-webui serve --port 3000 --host 0.0.0.0
```
### Connecting llama.cpp to Open WebUI  
1. Open **Open WebUI** in your browser.  
2. Navigate to **Admin Settings → Connections → OpenAI**.  
3. Click **Add Connection**.  
4. Under **Standard / Compatible** (if tabs are visible), configure the following:  
   - **URL:** `http://127.0.0.1:8080/v1`.  
   - **API Key:** Leave blank or enter a specific key if configured.

Once the connection is saved, Open WebUI will use your local **llama.cpp** server or **mlx** server as its backend.  

Alright, let’s head back to the main screen and try out a few questions to test the model’s intelligence.

<img src="./images/instruct-demo.png" alt="falcon-h1-instruct" style="width: 100%; height: auto; border-radius: 8px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); display: block; margin: 1.5em 0;">

Congratulations — you now have your very own chatbot powered by the Falcon models running right on your laptop.

## Conclusion
This guide has outlined the process of deploying Falcon-H1 locally using either the MLX framework for macOS-optimized workflows or the llama.cpp framework for GGUF model formats, along with integrating the chosen backend into Open WebUI to provide an interactive chat interface. The topics covered include minimum system requirements, environment setup, downloading model weights, server configuration, integration steps, and key considerations before deployment.  

Following these steps allows Falcon-H1 to be deployed in a way that matches your hardware capabilities and performance goals, ensuring both efficiency and ease of use. The MLX framework delivers smooth integration with Apple’s hardware ecosystem, while llama.cpp offers portability and compatibility with GGUF models, giving you flexible options for various AI applications.  

For additional experimentation, you can explore other Falcon-H1 variants available on Hugging Face, apply performance optimizations, or incorporate the model into custom workflows and interfaces. With the right setup, Falcon-H1 can be a powerful and versatile asset in your local AI development environment.