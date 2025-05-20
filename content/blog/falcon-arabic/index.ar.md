---
title: "Falcon-Arabic: قفزة نوعية في نماذج اللغة العربية"
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
          image: img/contributors/ahmed_alzubaidi.jpg
        - name: Leen AlQadi
          image: img/contributors/leen.png
        - name: Younes Belkada
          image: img/contributors/younes_belkada.jpg
        - name: Mikhail Lubinets
          image: img/contributors/mikhail_lubinets.jpg
        - name: Hakim Hacid
          image: img/contributors/hakim.png
---

<div dir="rtl">

نحن متحمسون للإعلان عن Falcon-Arabic، وهي نموذج لغوي كبير متعدد اللغات يحتوي على 7 مليار معامل ويتمتع بأداء قياسي في مجال معالجة اللغة الطبيعية للغة العربية. مبني على هندسة Falcon 3 المتعددة اللغات، يدعم Falcon-Arabic اللغة العربية واللغة الإنجليزية وعدد من اللغات الأخرى. يتفوق في المعرفة العامة والقواعد النحوية العربية والاستدلال الرياضي وحل المشاكل المعقدة وفهم تنوع اللهجات العربية الغني. يدعم Falcon-Arabic طول السياق بمقدار 32 ألف رمز، مما يمكنه من التعامل مع الوثائق الطويلة وتمكين تطبيقات متقدمة مثل توليد المحتوى المدعوم بالاسترجاع (RAG)، وإنشاء محتوى عميق، والمهام المكثفة بالمعرفة.

يقوم Falcon-Arabic بإعادة تعريف الحدود لما يمكن تحقيقه بالنسبة للنماذج اللغوية العربية. فهو يفوق بكثير النماذج الأخرى ذات الحجم المماثل وحتى تلك الأكبر بأربعة أضعاف عبر نماذج اللغة العربية الأصلية وتلك المحولة من لغات أخرى. وهذا يجعل Falcon-Arabic ليس فقط نموذجاً رائداً من حيث الأداء، بل أيضاً حلاً فريداً وفعالاً ومتاحاً للباحثين والمطورين الذين يعملون مع اللغة العربية.

## 🚀 نقدم Falcon-Arabic: تقدم LLM للعالم الناطق بالعربية

في السنوات الأخيرة، قامت النماذج اللغوية الكبيرة بتحويل الذكاء الاصطناعي، وتمكنت من تشغيل الأدوات للترجمة وإنشاء المحتوى والمساعدة الافتراضية وغيرها الكثير. ولكن معظم هذا التقدم ركز على اللغات الممثلة بشدة مثل الإنجليزية، تاركاً اللغات مثل العربية دون تمثيل كافٍ. تشكل اللغة العربية تحديات فريدة فهي غنية بالنحو، ثنائية اللهجة (تشمل كلاً من اللغة العربية القياسية الحديثة (MSA) واللهجات الإقليمية المتنوعة)، وتستخدم من قبل سكان ثقافيين متنوعين للغاية. وتطوير نماذج اللغة العربية القوية ضروري لضمان تضمين المجتمعات الناطقة بالعربية بالكامل في ثورة الذكاء الاصطناعي.

بناءً على هذه الرؤية، نعلن عن Falcon-Arabic، وهو تكيف متخصص لعائلة نماذج Falcon 3 المطورة من قبل معهد الابتكار التكنولوجي (TII) في دولة الإمارات العربية المتحدة. اكتسبت عائلة Falcon العالمية شهرة عالمية بفضل قوتها متعددة اللغات ونهج المصادر المفتوحة الخاص بها. يبني Falcon-Arabic على هذا الإرث، ويجلب فهم وإنتاج اللغة المتقدم للعربية. ومن خلال تدريب النموذج للتعامل مع اللغة العربية القياسية الحديثة وبعض اللهجات الأساسية، يملأ Falcon-Arabic فجوة حرجة في تكنولوجيا اللغة، مما يمكّن ذكاءً عربيًا أكثر طبيعية وذكيًا وشاملًا عبر الخليج والشرق الأوسط وشمال أفريقيا.


<a id="pull-figures"></a>
<div style="display: flex; justify-content: center; flex-wrap: wrap; gap: 20px;">
  <img src="./radar.png" alt="Pretrained models performance" style="width: 100%; max-width: 800px; height: auto;">
</div>



## 🧪 لقد هبط Falcon-Arabic - هنا وصفة التدريب

بدأ بناء Falcon-Arabic بقرار استراتيجي: بدلاً من تدريب نموذج من الصفر، اخترنا تكييف أساس متعدد اللغات قوي. وفي مشهد نماذج اللغة العربية، هناك ثلاث طرق رئيسية: التدريب من الصفر (على سبيل المثال، Jais-native)، تكييف النماذج متعددة اللغات (مثل Allam أو Fanar)، أو استخدام النماذج التي تدعم اللغة العربية بشكل أصلي بجانب لغات أخرى (مثل Qwen أو LLaMA). عند النظر إلى لوحة المتصدرين الخاصة بـ Open Arabic LLM (https://huggingface.co/spaces/OALL/Open-Arabic-LLM-Leaderboard)، أصبح من الواضح أن النماذج المتكيفة والمتعددة اللغات تفوقت باستمرار على غيرها من حيث الكفاءة والقدرة. للاستفادة من هذا الزخم، قمنا باختيار Falcon 3-7B، وهو نموذج يحقق توازن عملي بين الأداء وكفاءة الموارد ضمن عائلة Falcon 3 المطورة من قبل معهد الابتكار التكنولوجي (TII).

كان التحدي الأساسي هو تكييف Falcon 3-7B، الذي يفتقر أصلاً لدعم اللغة العربية على مستوى المحلل اللغوي والكوديبات. لقد عالجنا ذلك بإضافة "32,000 كلمة عربية محددة" إلى قاموس المحلل اللغوي، وتطبيق إستراتيجية تهيئة جديدة للكودات تعتمد على "تشابه النصوص". تعمل هذه التقنية على تعيين الكلمات العربية الجديدة إلى رموز دلالية متعلقة بالكودات الموجودة بالفعل، مما يسمح للنموذج باكتساب المعرفة السابقة وتسريع التعلم خاصة حول المشاعر والمفاهيم المجردة وأنماط الاستدلال. أعطى هذا Falcon-Arabic بداية جيدة لفهم وإنتاج نص عالي الجودة باللغة العربية.

مع وجود المحلل اللغوي والرموز الدلالية في مكانها الصحيح، بدأنا بتدريب مستمر باستخدام مجموعات بيانات عالية الجودة بنسبة 100٪ أصلية باللغة العربية، وتجنبنا استخدام المحتوى المترجم آلياً لتقليل الانحياز الثقافي وحفظ الأصالة اللغوية. اتبع التدريب منهجاً متعدد المراحل: ركزت المراحل المبكرة على "المعرفة العامة ومحتوى غني باللهجة العربية" لتثبيت النموذج وتعزيز القدرات المنطقية، بينما ركزت المراحل اللاحقة على "الرياضيات والبرمجة والاستدلال". كانت النتيجة نموذج يتحدث العربية بطلاقة عبر اللهجات ويحتفظ بقوة Falcon متعددة اللغات وقدرات الاستدلال، متخطياً حدود الذكاء الاصطناعي الأولى باللغة العربية.

{{< rawhtml >}}
<iframe
  src="https://falcon-arabic-falcon-arabic-translation-demo.hf.space/?__theme=light"
  frameborder="0"
  width="100%"
  height="300px"
  allow="accelerometer; camera; microphone; encrypted-media"
></iframe>
{{< /rawhtml >}}

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

## 📊 Falcon-Arabic: رفع معايير نماذج اللغة العربية

قمنا بتقييم Falcon-Arabic على OALL v2، وهو المعيار الرائد لنماذج اللغة العربية. يتضمن ست مهام متعددة الخيارات مثل MMLU العربي الأصلي والمترجم، والامتحانات العربية، وغافة، ومدينة QA، وأرتوث، وواحد لتوليد المعايير، أرج. تفوق Falcon-Arabic على جميع نماذج اللغة العربية الحالية في نطاق حجمها ويتجاوز حتى النماذج الأربعة مرات أكبر. يقود في المعايير الرئيسية مثل MMLU العربي، والامتحانات، ومدينة QA، وأرتوث، واضعة معيارًا جديدًا لنماذج اللغة العربية الأولية.


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

| Model   | Avg    | ALGhafa | ArabicMMLU | Exams | MadinahQA | AraTrust | ALRAGE | ArbMMLU-HT |
|---------|---------|------------|-------|-----------|----------|--------|------------|--------|
| jais-adapted-70b | 51.94 | 54.82  | 51.97     | 43.58| 34.96    | 74.97   | 55.28 | 48.00     |
| jais-family-30b-8k | 53.63 | 54.34  | 51.53     | 45.81| 29.82    | 70.66   | 80.47 | 42.80     |
| Qwen2.5-14B | 54.26 | 69.32  | 46.37     | 37.43| 30.38    | 70.46   | 74.03 | 51.84     |
| AceGPT-13B | 47.21 | 48.23  | 41.38     | 36.87| 35.37    | 56.51   | 79.96 | 32.12     |
| jais-adapted-13b | 42.53 | 40.62  | 36.97     | 34.26| 29.04    | 61.18   | 62.53 | 33.12     |
| Llama-3.1-8B | 51.64 | 64.34  | 52.28     | 40.04| 43.08    | 71.98   | 47.08 | 42.67     |
| Qwen2.5-7B | 41.97 | 31.72  | 37.36     | 37.99| 27.11    | 53.66   | 62.68 | 43.30     |
| **Falcon-Arabic-7B-Base** | 62.57 | 67.17  | 64.85     | 52.89| 48.79    | 85.36   | 63.71 | 55.25     |

<!-- </details> -->

## 🗣️ من التدريب الأولي إلى الدردشة: محاذاة Falcon-Arabic للتفاعلات

بعد الانتهاء من مرحلة تدريب النموذج الأساسي، أجرينا مرحلة "ما بعد التدريب للمحاذاة" لضبط ردود Falcon-Arabic وفقًا لتفضيلات الإنسان. بدأت هذه المرحلة بمرحلة "المحاذاة الخاضعة للإشراف" باستخدام مزيج من مجموعات بيانات عامة عالية الجودة وبيانات داخلية مجمعة "باللغة العربية الأصلية"، تغطي مجموعة من المهام وسيناريوهات المحادثة.

لتعزيز المحاذاة بشكل أكبر، طبقنا طريقة "تحسين التفضيل المباشر" (DPO)، وهي طريقة تعلم تعزيز تقوم بضبط النموذج ليفضل المخرجات التي يصنفها البشر بأنها أكثر فائدة وأمانًا وملاءمة. تضمن هذه العملية المكونة من خطوتين أن يكون Falcon-Arabic Chat يفهم اللغة العربية جيدًا ولكنه يرد بطريقة تتوافق مع توقعات المستخدم الحقيقية.

كما تظهر نتائج الرسوم البيانية، فإن Falcon-Arabic Chat يتصدر المجموعة، متفوقة على جميع نماذج اللغة العربية الأخرى في فئتها وحجمها وأكبر منها بشكل ملحوظ عبر عدة معايير. يُظهر النموذج أداءً قوياً في اتباع الإرشادات والحوار المفتوح، واضعًا معيارًا جديدًا للذكاء الاصطناعي الحواري باللغة العربية.


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

| Model                           |     avg |  ALGhafa |   ALRAGE |   AraTrust |   ArabicMMLU |   ArbMMLU-HT |   Exams |   MadinahQA |
|:--------------------------------|----------:|---------:|-----------:|-------------:|-------------:|--------:|------------:|-------:|
| aya-expanse-32b                 | 67.17 |    77.61 |   79.64 |     89.00 |       60.63 |       58.86 |  51.02 |      53.45 |
| c4ai-command-r7b-arabic-02-2025 | 67.07 |    74.84 |   75.90 |     80.47 |       59.34 |       50.14 |  64.99 |      63.84 |
| jais-family-30b-16k-chat        | 65.43 |    71.22 |   74.95 |     81.57 |       61.22 |       52.73 |  50.09 |      66.26 |
| jais-adapted-13b-chat           | 58.08 |    67.28 |   68.41 |     79.68 |       54.23 |       45.45 |  47.30 |      44.20 |
| ALLaM-7B-Instruct-preview       | 65.25 |    69.49 |   76.81 |     86.93 |       64.90 |       52.81 |  51.58 |      54.24 |
| Yehia-7B-preview                | 65.68 |    70.81 |   76.64 |     87.49 |       64.90 |       53.40 |  52.14 |      54.37 |
| Qwen2-7B-Instruct               | 63.61 |    73.24 |   71.13 |     82.77 |       60.01 |       51.30 |  47.30 |      59.50 |
| **Falcon-Arabic-7B-Chat**       | 68.30 |    72.37 |   72.26 |     82.62 |       68.27 |       55.47 |  53.45 |      73.63 |

<!-- </details> -->

## 🔓 فتح إمكانات الذكاء الاصطناعي باللغة العربية

يتحدى Falcon-Arabic المعايير فيما يتعلق بنماذج اللغة العربية. مع مجرد 7 مليار معامل، فإنه يقدم أداءً قياسياً يتفوق على النماذج المماثلة في الحجم وحتى تلك الأكبر بعدة مرات عبر مؤشرات أساسية مثل MMLU العربي، ومدينة QA، وأرثوث. يجمع بين الطلاقة في اللغة العربية القياسية الحديثة والفهم القوي للهجات الإقليمية والقدرات الاستنباطية والمتعددة اللغات، مما يجعله مثاليًا لمجموعة واسعة من التطبيقات: بدءًا من روبوتات الدردشة العربية أولاً وأدوات تعليمية لإنشاء المحتوى ومساعدة الكود وفهم المستندات. إذا كنت ترغب في تجربته، يتوفر Falcon-Arabic للاختبار على الرابط.


## ⚠️ القيود
مثل جميع النماذج اللغوية الضخمة، يرث Falcon-Arabic بعض القيود الشائعة. وتشمل هذه أحيانًا "الهلاوس" (إنتاج مخرجات معقولة ولكنها خاطئة)، وحساسية كيفية صياغة المطالبات، وأداء متغير عبر سياقات طويلة جداً. وعلى الرغم من تصميم Falcon-Arabic لتخفيف هذه القضايا خصوصًا للمهام المتعلقة باللغة العربية، يجب على المستخدمين تطبيق تفكير نقدي عند تفسير النتائج، وخاصة في الحالات الحساسة للأداء العالي أو الحساسة للحقائق.


## الاستشهاد
إذا وجدت هذا العمل مفيدًا لبحثك أو مشاريعك، يرجى مراعاة الاقتباس عنه.

```latex
@misc{falcon-arabic,
    title = {Falcon-Arabic: A Breakthrough in Arabic Language Models},
    author = {Falcon-LLM Team},
    month = {May},
    url = {https://falcon-lm.github.io/blog/falcon-arabic},
    year = {2025}
}
```

</div>