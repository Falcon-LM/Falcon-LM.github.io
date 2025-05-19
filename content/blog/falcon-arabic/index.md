---
title: "Falcon-Arabic: A Breakthrough in Arabic Language Models"
date: 2025-05-17T12:00:00Z
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
    image: "cover_1.png"
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
        - name: Basma El Amel Boussaha
          image: img/contributors/basma.jpg
        - name: Mohammed Alyafeai
          image: img/contributors/alyafeai.jpg
        - name: Ahmed Alzubaidi
          image: img/contributors/ahmed.jpg
        - name: Leen AlQadi
          image: img/contributors/leen.png
        - name: Hakim Hacid
          image: img/contributors/hakim_hacid.png
---


We are excited to introduce **Falcon-Arabic**, a 7B parameter language model that sets a new benchmark for Arabic NLP. Built on the Falcon 3 architecture, Falcon-Arabic is a multilingual model that supports Arabic, English, and several other languages. It excels in general knowledge, Arabic grammar, mathematical reasoning, complex problem solving, and understanding the rich diversity of Arabic dialects.

Falcon-Arabic redefines the boundaries of what is possible for Arabic language models. It significantly outperforms other Arabic LLMs in its size category—and even models up to four times larger—across both Arabic-native models and those adapted from other languages. This makes Falcon-Arabic not only a state-of-the-art model in terms of performance, but also a uniquely efficient and accessible solution for developers and researchers working with the Arabic language.

<!-- Whether you are generating high-quality Arabic content, exploring the nuances of dialects, or solving complex tasks that require deep reasoning and arithmetic, Falcon-Arabic is the model that will change the way we interact with the Arabic language in AI. -->


# Introducing Falcon-Arabic: Advancing LLMs for the Arabic-Speaking World

In recent years, Large Language Models (LLMs) have transformed artificial intelligence, powering tools for translation, content creation, virtual assistance, and more. Yet much of this progress has focused on high-resource languages like English, leaving languages such as Arabic underrepresented. Arabic presents unique challenges it's morphologically rich, diglossic (spanning both Modern Standard Arabic (MSA) and diverse regional dialects), and used across a vast and culturally varied population. Developing robust Arabic LLMs is essential to ensure Arabic-speaking communities are fully included in the AI revolution.

With this goal in mind, we’re introducing **Falcon-Arabic** a specialized adaptation of the [**Falcon 3** model family](https://huggingface.co/collections/tiiuae/falcon3-67605ae03578be86e4e87026), developed by the [**Technology Innovation Institute (TII)**](https://www.tii.ae/) in the UAE. The Falcon models have earned global recognition for their multilingual strength and open-access approach. Falcon-Arabic builds on this legacy, bringing advanced language understanding and generation to Arabic. By training the model to handle both Modern Standard Arabic and key dialects, Falcon-Arabic fills a critical gap in language technology—enabling more natural, intelligent, and inclusive Arabic AI across the Gulf, Middle East, and North Africa.

<a id="pull-figures"></a>
<div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 20px;">
  <img src="./radar.png" alt="Pretrained models performance" style="width: 100%; max-width: 800px; height: auto;">
</div>


## 🧪 Falcon-Arabic Has Landed — Here’s the Training Recipe

Building Falcon-Arabic started with a strategic decision: rather than training a model from scratch, we chose to adapt a strong multilingual foundation. In the Arabic LLM landscape, three main approaches exist: training from scratch (e.g., Jais-native), adapting multilingual models (like Allam or Fanar), or using models that natively support Arabic alongside other languages (such as Qwen or LLaMA). Observing the [Open Arabic LLM Leaderboard](https://huggingface.co/spaces/OALL/Open-Arabic-LLM-Leaderboard), it became clear that adapted and multilingual models consistently outperformed others in both efficiency and capability. To build on that momentum, we selected **Falcon 3-7B**, a model that strikes a practical balance between performance and resource efficiency within the Falcon 3 family developed by the **Technology Innovation Institute (TII)**.

The core challenge was adapting [Falcon 3-7B](https://huggingface.co/tiiuae/Falcon3-7B-Base), which originally lacked Arabic support at the tokenizer and embedding level. We addressed this by extending the tokenizer’s vocabulary with **32,000 Arabic-specific tokens**, and applying a **novel embedding initialization strategy** based on **textual similarity**. This technique mapped new Arabic tokens to semantically related embeddings from the existing vocabulary, allowing the model to inherit prior knowledge and accelerate learning—particularly around sentiment, abstract concepts, and reasoning patterns. This gave Falcon-Arabic a head start in understanding and generating high-quality Arabic text.

With the tokenizer and embeddings in place, we began **continuous pretraining** on high-quality, **100% native Arabic datasets**, avoiding the use of machine-translated content to minimize cultural bias and preserve linguistic authenticity. Training followed a **multi-stage curriculum**: early stages focused on **general knowledge and dialect-rich Arabic content** to stabilize the model and reinforce logical capabilities, while later phases emphasized **math, code, and reasoning**. The result is a model that not only speaks Arabic fluently across dialects, but also retains Falcon’s multilingual and reasoning strengths—pushing the boundaries for Arabic-first AI.


### Falcon-Arabic-7B-Base Avg
{{< barplot_vertical id="general-plt" highlight="Falcon-Arabic-7B-Base" ymin="0.40" ymax="0.7" ylabel="Score %" >}}
[
    {"category": "avg", "model": "jais-adapted-70b", "value": 0.5194},
    {"category": "avg", "model": "jais-family-30b-8k", "value": 0.5363},
    {"category": "avg", "model": "Qwen2.5-14B", "value": 0.5426},
    {"category": "avg", "model": "AceGPT-13B", "value": 0.4721},
    {"category": "avg", "model": "jais-adapted-13b", "value": 0.4253},
    {"category": "avg", "model": "Llama-3.1-8B", "value": 0.5164},
    {"category": "avg", "model": "Qwen2.5-7B", "value": 0.41969999999999996},
    {"category": "avg", "model": "Falcon-Arabic-7B-Base", "value": 0.6257}
]
{{< /barplot_vertical >}}

## 📊 Falcon-Arabic: Raising the Bar in Arabic LLMs

We evaluated Falcon-Arabic on **[OALL v2](https://huggingface.co/spaces/OALL/Open-Arabic-LLM-Leaderboard)**, the leading benchmark for Arabic language models. It includes six multiple-choice tasks—such as Arabic MMLU (native and translated), Arabic Exams, Alghafa, MadinahQA, Aratrust and one generative benchmark, Alrage. **Falcon-Arabic outperforms all existing Arabic LLMs in its size range and even surpasses models up to 4× larger**. It leads in key benchmarks like Arabic MMLU, Exams, MadinahQA, and Aratrust, setting a new standard for Arabic-first language models. Despite having just 7 billion parameters, Falcon-Arabic outperforms not only models in its size category, but also those up to four times larger—making it one of the most efficient Arabic language models available today.

### Falcon-Arabic-7B-Base Details

{{< barplot_vertical id="general-plt" highlight="Falcon-Arabic-7B-Base" ymin="0" ymax="0.95" ylabel="Score %" >}}
[
    {"category": "ALGhafa", "model": "jais-adapted-70b", "value": 0.5482},
    {"category": "ALGhafa", "model": "jais-family-30b-8k", "value": 0.5434},
    {"category": "ALGhafa", "model": "Qwen2.5-14B", "value": 0.6931999999999999},
    {"category": "ALGhafa", "model": "AceGPT-13B", "value": 0.48229999999999995},
    {"category": "ALGhafa", "model": "jais-adapted-13b", "value": 0.40619999999999995},
    {"category": "ALGhafa", "model": "Llama-3.1-8B", "value": 0.6434000000000001},
    {"category": "ALGhafa", "model": "Qwen2.5-7B", "value": 0.3172},
    {"category": "ALGhafa", "model": "Falcon-Arabic-7B-Base", "value": 0.67},
    {"category": "ArabicMMLU", "model": "jais-adapted-70b", "value": 0.5196999999999999},
    {"category": "ArabicMMLU", "model": "jais-family-30b-8k", "value": 0.5153},
    {"category": "ArabicMMLU", "model": "Qwen2.5-14B", "value": 0.4637},
    {"category": "ArabicMMLU", "model": "AceGPT-13B", "value": 0.4138},
    {"category": "ArabicMMLU", "model": "jais-adapted-13b", "value": 0.3697},
    {"category": "ArabicMMLU", "model": "Llama-3.1-8B", "value": 0.5228},
    {"category": "ArabicMMLU", "model": "Qwen2.5-7B", "value": 0.3736},
    {"category": "ArabicMMLU", "model": "Falcon-Arabic-7B-Base", "value": 0.65},
    {"category": "Exams", "model": "jais-adapted-70b", "value": 0.43579999999999997},
    {"category": "Exams", "model": "jais-family-30b-8k", "value": 0.4581},
    {"category": "Exams", "model": "Qwen2.5-14B", "value": 0.3743},
    {"category": "Exams", "model": "AceGPT-13B", "value": 0.36869999999999997},
    {"category": "Exams", "model": "jais-adapted-13b", "value": 0.34259999999999996},
    {"category": "Exams", "model": "Llama-3.1-8B", "value": 0.4004},
    {"category": "Exams", "model": "Qwen2.5-7B", "value": 0.3799},
    {"category": "Exams", "model": "Falcon-Arabic-7B-Base", "value": 0.53},
    {"category": "MadinahQA", "model": "jais-adapted-70b", "value": 0.3496},
    {"category": "MadinahQA", "model": "jais-family-30b-8k", "value": 0.2982},
    {"category": "MadinahQA", "model": "Qwen2.5-14B", "value": 0.3038},
    {"category": "MadinahQA", "model": "AceGPT-13B", "value": 0.35369999999999996},
    {"category": "MadinahQA", "model": "jais-adapted-13b", "value": 0.2904},
    {"category": "MadinahQA", "model": "Llama-3.1-8B", "value": 0.43079999999999996},
    {"category": "MadinahQA", "model": "Qwen2.5-7B", "value": 0.2711},
    {"category": "MadinahQA", "model": "Falcon-Arabic-7B-Base", "value": 0.49},
    {"category": "AraTrust", "model": "jais-adapted-70b", "value": 0.7497},
    {"category": "AraTrust", "model": "jais-family-30b-8k", "value": 0.7066},
    {"category": "AraTrust", "model": "Qwen2.5-14B", "value": 0.7045999999999999},
    {"category": "AraTrust", "model": "AceGPT-13B", "value": 0.5650999999999999},
    {"category": "AraTrust", "model": "jais-adapted-13b", "value": 0.6118},
    {"category": "AraTrust", "model": "Llama-3.1-8B", "value": 0.7198},
    {"category": "AraTrust", "model": "Qwen2.5-7B", "value": 0.5366},
    {"category": "AraTrust", "model": "Falcon-Arabic-7B-Base", "value": 0.85},
    {"category": "ALRAGE", "model": "jais-adapted-70b", "value": 0.5528},
    {"category": "ALRAGE", "model": "jais-family-30b-8k", "value": 0.8047},
    {"category": "ALRAGE", "model": "Qwen2.5-14B", "value": 0.7403},
    {"category": "ALRAGE", "model": "AceGPT-13B", "value": 0.7996},
    {"category": "ALRAGE", "model": "jais-adapted-13b", "value": 0.6253},
    {"category": "ALRAGE", "model": "Llama-3.1-8B", "value": 0.4708},
    {"category": "ALRAGE", "model": "Qwen2.5-7B", "value": 0.6268},
    {"category": "ALRAGE", "model": "Falcon-Arabic-7B-Base", "value": 0.64},
    {"category": "ArbMMLU-HT", "model": "jais-adapted-70b", "value": 0.48},
    {"category": "ArbMMLU-HT", "model": "jais-family-30b-8k", "value": 0.428},
    {"category": "ArbMMLU-HT", "model": "Qwen2.5-14B", "value": 0.5184000000000001},
    {"category": "ArbMMLU-HT", "model": "AceGPT-13B", "value": 0.3212},
    {"category": "ArbMMLU-HT", "model": "jais-adapted-13b", "value": 0.3312},
    {"category": "ArbMMLU-HT", "model": "Llama-3.1-8B", "value": 0.4267},
    {"category": "ArbMMLU-HT", "model": "Qwen2.5-7B", "value": 0.433},
    {"category": "ArbMMLU-HT", "model": "Falcon-Arabic-7B-Base", "value": 0.55}
]
{{< /barplot_vertical >}}

<!-- <details>
<summary class="bold"> Detailed results: </summary> -->

| Model   | ALGhafa | ArabicMMLU | Exams | MadinahQA | AraTrust | ALRAGE | ArbMMLU-HT | Avg    |
|---------|---------|------------|-------|-----------|----------|--------|------------|--------|
| jais-adapted-70b | 0.5482  | 0.5197     | 0.4358| 0.3496    | 0.7497   | 0.5528 | 0.4800     | 0.5194 |
| jais-family-30b-8k | 0.5434  | 0.5153     | 0.4581| 0.2982    | 0.7066   | 0.8047 | 0.4280     | 0.5363 |
| Qwen2.5-14B | 0.6932  | 0.4637     | 0.3743| 0.3038    | 0.7046   | 0.7403 | 0.5184     | 0.5426 |
| AceGPT-13B | 0.4823  | 0.4138     | 0.3687| 0.3537    | 0.5651   | 0.7996 | 0.3212     | 0.4721 |
| jais-adapted-13b | 0.4062  | 0.3697     | 0.3426| 0.2904    | 0.6118   | 0.6253 | 0.3312     | 0.4253 |
| Llama-3.1-8B | 0.6434  | 0.5228     | 0.4004| 0.4308    | 0.7198   | 0.4708 | 0.4267     | 0.5164 |
| Qwen2.5-7B | 0.3172  | 0.3736     | 0.3799| 0.2711    | 0.5366   | 0.6268 | 0.4330     | 0.4197 |
| Falcon-Arabic-7B-Base | 0.6700  | 0.6500     | 0.5300| 0.4900    | 0.8500   | 0.6400 | 0.5500     | 0.6257 |


<!-- </details> -->

## 🗣️ From Pretraining to Chat: Aligning Falcon-Arabic for Conversations

After finalizing the base model training, we performed a **post-training alignment** phase to fine-tune Falcon-Arabic’s responses according to human preferences. This phase began with **supervised fine-tuning (SFT)** using a combination of high-quality public datasets and internally collected **native Arabic instruction data**, covering a range of tasks and conversational scenarios.

To further enhance alignment, we applied **Direct Preference Optimization (DPO)**—a reinforcement learning-based method that tunes the model to prefer outputs that humans rate as more helpful, safe, and relevant. This two-step process ensures that Falcon-Arabic Chat not only understands Arabic well but responds in a way that aligns with real user expectations.

As shown in the results plots, **Falcon-Arabic Chat leads the pack**, outperforming all other SFT-aligned Arabic LLMs in its size class—and even models significantly larger—across multiple benchmarks. The model demonstrates strong performance in both instruction following and open-ended dialogue, setting a new standard for Arabic conversational AI.


### Falcon-Arabic-7B-Chat Avg

{{< barplot_vertical id="general-plt" highlight="Falcon-Arabic-7B-Chat" ymin="0.56" ymax="0.7" ylabel="Score %" >}}
[
    {"category": "avg", "model": "aya-expanse-32b", "value": 0.6717},
    {"category": "avg", "model": "c4ai-command-r7b-arabic-02-2025", "value": 0.6707},
    {"category": "avg", "model": "jais-family-30b-16k-chat", "value": 0.6543000000000001},
    {"category": "avg", "model": "jais-adapted-13b-chat", "value": 0.5808},
    {"category": "avg", "model": "ALLaM-7B-Instruct-preview", "value": 0.6525},
    {"category": "avg", "model": "Yehia-7B-preview", "value": 0.6568},
    {"category": "avg", "model": "Qwen2-7B-Instruct", "value": 0.6361},
    {"category": "avg", "model": "Falcon-Arabic-7B-Chat", "value": 0.683}
]
{{< /barplot_vertical >}}


### Falcon-Arabic-7B-Chat Details

{{< barplot_vertical id="general-plt" highlight="Falcon-Arabic-7B-Chat" ymin="0" ymax="0.95" ylabel="Score %" >}}
[
    {"category": "ALGhafa", "model": "aya-expanse-32b", "value": 0.7761},
    {"category": "ALGhafa", "model": "c4ai-command-r7b-arabic-02-2025", "value": 0.7484000000000001},
    {"category": "ALGhafa", "model": "jais-family-30b-16k-chat", "value": 0.7121999999999999},
    {"category": "ALGhafa", "model": "jais-adapted-13b-chat", "value": 0.6728000000000001},
    {"category": "ALGhafa", "model": "ALLaM-7B-Instruct-preview", "value": 0.6949},
    {"category": "ALGhafa", "model": "Yehia-7B-preview", "value": 0.7081000000000001},
    {"category": "ALGhafa", "model": "Qwen2-7B-Instruct", "value": 0.7323999999999999},
    {"category": "ALGhafa", "model": "Falcon-Arabic-7B-Chat", "value": 0.7237},
    {"category": "ArabicMMLU", "model": "aya-expanse-32b", "value": 0.6063000000000001},
    {"category": "ArabicMMLU", "model": "c4ai-command-r7b-arabic-02-2025", "value": 0.5934},
    {"category": "ArabicMMLU", "model": "jais-family-30b-16k-chat", "value": 0.6122},
    {"category": "ArabicMMLU", "model": "jais-adapted-13b-chat", "value": 0.5423},
    {"category": "ArabicMMLU", "model": "ALLaM-7B-Instruct-preview", "value": 0.649},
    {"category": "ArabicMMLU", "model": "Yehia-7B-preview", "value": 0.649},
    {"category": "ArabicMMLU", "model": "Qwen2-7B-Instruct", "value": 0.6001},
    {"category": "ArabicMMLU", "model": "Falcon-Arabic-7B-Chat", "value": 0.6827},
    {"category": "Exams", "model": "aya-expanse-32b", "value": 0.5102},
    {"category": "Exams", "model": "c4ai-command-r7b-arabic-02-2025", "value": 0.6498999999999999},
    {"category": "Exams", "model": "jais-family-30b-16k-chat", "value": 0.5009},
    {"category": "Exams", "model": "jais-adapted-13b-chat", "value": 0.473},
    {"category": "Exams", "model": "ALLaM-7B-Instruct-preview", "value": 0.5158},
    {"category": "Exams", "model": "Yehia-7B-preview", "value": 0.5214},
    {"category": "Exams", "model": "Qwen2-7B-Instruct", "value": 0.473},
    {"category": "Exams", "model": "Falcon-Arabic-7B-Chat", "value": 0.5345},
    {"category": "MadinahQA", "model": "aya-expanse-32b", "value": 0.5345},
    {"category": "MadinahQA", "model": "c4ai-command-r7b-arabic-02-2025", "value": 0.6384000000000001},
    {"category": "MadinahQA", "model": "jais-family-30b-16k-chat", "value": 0.6626000000000001},
    {"category": "MadinahQA", "model": "jais-adapted-13b-chat", "value": 0.442},
    {"category": "MadinahQA", "model": "ALLaM-7B-Instruct-preview", "value": 0.5424},
    {"category": "MadinahQA", "model": "Yehia-7B-preview", "value": 0.5437},
    {"category": "MadinahQA", "model": "Qwen2-7B-Instruct", "value": 0.595},
    {"category": "MadinahQA", "model": "Falcon-Arabic-7B-Chat", "value": 0.7363},
    {"category": "AraTrust", "model": "aya-expanse-32b", "value": 0.89},
    {"category": "AraTrust", "model": "c4ai-command-r7b-arabic-02-2025", "value": 0.8047},
    {"category": "AraTrust", "model": "jais-family-30b-16k-chat", "value": 0.8157},
    {"category": "AraTrust", "model": "jais-adapted-13b-chat", "value": 0.7968000000000001},
    {"category": "AraTrust", "model": "ALLaM-7B-Instruct-preview", "value": 0.8693000000000001},
    {"category": "AraTrust", "model": "Yehia-7B-preview", "value": 0.8748999999999999},
    {"category": "AraTrust", "model": "Qwen2-7B-Instruct", "value": 0.8277},
    {"category": "AraTrust", "model": "Falcon-Arabic-7B-Chat", "value": 0.8262},
    {"category": "ALRAGE", "model": "aya-expanse-32b", "value": 0.7964},
    {"category": "ALRAGE", "model": "c4ai-command-r7b-arabic-02-2025", "value": 0.759},
    {"category": "ALRAGE", "model": "jais-family-30b-16k-chat", "value": 0.7495},
    {"category": "ALRAGE", "model": "jais-adapted-13b-chat", "value": 0.6840999999999999},
    {"category": "ALRAGE", "model": "ALLaM-7B-Instruct-preview", "value": 0.7681},
    {"category": "ALRAGE", "model": "Yehia-7B-preview", "value": 0.7664},
    {"category": "ALRAGE", "model": "Qwen2-7B-Instruct", "value": 0.7112999999999999},
    {"category": "ALRAGE", "model": "Falcon-Arabic-7B-Chat", "value": 0.7226},
    {"category": "ArbMMLU-HT", "model": "aya-expanse-32b", "value": 0.5886},
    {"category": "ArbMMLU-HT", "model": "c4ai-command-r7b-arabic-02-2025", "value": 0.5014},
    {"category": "ArbMMLU-HT", "model": "jais-family-30b-16k-chat", "value": 0.5273},
    {"category": "ArbMMLU-HT", "model": "jais-adapted-13b-chat", "value": 0.4545},
    {"category": "ArbMMLU-HT", "model": "ALLaM-7B-Instruct-preview", "value": 0.5281},
    {"category": "ArbMMLU-HT", "model": "Yehia-7B-preview", "value": 0.534},
    {"category": "ArbMMLU-HT", "model": "Qwen2-7B-Instruct", "value": 0.513},
    {"category": "ArbMMLU-HT", "model": "Falcon-Arabic-7B-Chat", "value": 0.5547}
]
{{< /barplot_vertical >}}

<!-- <details>
<summary class="bold"> Detailed results: </summary> -->

| Model                           |   ALGhafa |   ALRAGE |   AraTrust |   ArabicMMLU |   ArbMMLU-HT |   Exams |   MadinahQA |    avg |
|:--------------------------------|----------:|---------:|-----------:|-------------:|-------------:|--------:|------------:|-------:|
| aya-expanse-32b                 |    0.7761 |   0.7964 |     0.8900 |       0.6063 |       0.5886 |  0.5102 |      0.5345 | 0.6717 |
| c4ai-command-r7b-arabic-02-2025 |    0.7484 |   0.7590 |     0.8047 |       0.5934 |       0.5014 |  0.6499 |      0.6384 | 0.6707 |
| jais-family-30b-16k-chat        |    0.7122 |   0.7495 |     0.8157 |       0.6122 |       0.5273 |  0.5009 |      0.6626 | 0.6543 |
| jais-adapted-13b-chat           |    0.6728 |   0.6841 |     0.7968 |       0.5423 |       0.4545 |  0.4730 |      0.4420 | 0.5808 |
| ALLaM-7B-Instruct-preview       |    0.6949 |   0.7681 |     0.8693 |       0.6490 |       0.5281 |  0.5158 |      0.5424 | 0.6525 |
| Yehia-7B-preview                |    0.7081 |   0.7664 |     0.8749 |       0.6490 |       0.5340 |  0.5214 |      0.5437 | 0.6568 |
| Qwen2-7B-Instruct               |    0.7324 |   0.7113 |     0.8277 |       0.6001 |       0.5130 |  0.4730 |      0.5950 | 0.6361 |
| Falcon-Arabic-7B-Chat           |    0.7237 |   0.7226 |     0.8262 |       0.6827 |       0.5547 |  0.5345 |      0.7363 | 0.6830 |

<!-- </details> -->

## 🔓 Unlocking the Potential of Arabic AI

Falcon-Arabic sets a new benchmark for Arabic language models. With only 7B parameters, it delivers state-of-the-art performance outperforming models of similar size and even those several times larger—across key benchmarks like Arabic MMLU, MadinahQA, and Aratrust. It combines fluency in Modern Standard Arabic, strong understanding of regional dialects, and robust reasoning and multilingual capabilities, making it ideal for a wide range of applications: from Arabic-first chatbots and educational tools to content generation, code assistance, and document understanding. If you’d like to try it out, Falcon-Arabic is available for testing on link.

## ⚠️ Limitations

Like all large language models, Falcon-Arabic inherits some common limitations. These include occasional **hallucinations** (producing plausible but incorrect outputs), **sensitivity to how prompts are phrased**, and varying performance across very long contexts. While Falcon-Arabic is designed to reduce these issues—especially for Arabic tasks—users should still apply critical thinking when interpreting results, particularly in high-stakes or fact-sensitive use cases.

## Citation

If you find this work helpful for your research or projects, please consider citing it.

```latex
@misc{falcon-arabic,
    title = {Falcon-Arabic: A Breakthrough in Arabic Language Models},
    author = {Falcon-LLM Team},
    month = {May},
    url = {https://falcon-lm.github.io/blog/falcon-arabic},
    year = {2025}
}
```
