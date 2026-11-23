---
title: "بناء مساعد عربي لفحص مراكز البيانات باستخدام نماذج Falcon"
date: 2026-11-23T00:00:00+04:00
weight: 1
math: false
show_reading_time: true
show_bread_crumbs: true
show_post_nav_links: false
show_code_copy_buttons: true
show_word_count: true

cover:
    image: "/tutorials/data-center-assistant/images/inspection-action-list-banner.jpg"
    alt: "قائمة فحص وتقرير صيانة يقودان إلى ثلاث بطاقات إجراءات"
    caption: ""
    relative: false
    responsive_images: true
header:
    background_image: "/tutorials/data-center-assistant/images/inspection-action-list-banner.jpg"
    gradient: true
    blur: true
contributors:
  - title: "المساهمون"
    people:
      - name: Falcon LLM team
        image: img/contributors/FalconLLM.webp
---

<style>
.screenshot {
  display: block;
  box-sizing: border-box;
  width: 100%;
  max-width: 100%;
  height: auto;
  object-fit: contain;
  margin: 1.5em auto;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
.caption {
  text-align: center;
  font-size: 0.85em;
  opacity: 0.75;
  margin: -0.8em auto 1.5em;
  max-width: 100%;
}
.post-content table:not(.highlighttable, .highlight table, .gist .highlight) {
  display: table;
  width: 100% !important;
  border-collapse: separate;
  border-spacing: 0;
  border: 1px solid rgba(0, 0, 0, 0.18);
  border-radius: 8px;
  overflow: hidden;
  font-size: 0.9em;
}
.post-content table:not(.highlighttable, .highlight table, .gist .highlight) th {
  font-size: 1em;
  font-weight: 600;
  text-align: right;
  background: var(--code-bg);
}
.post-content table:not(.highlighttable, .highlight table, .gist .highlight) th,
.post-content table:not(.highlighttable, .highlight table, .gist .highlight) td {
  padding: 10px 14px;
  text-align: right;
  vertical-align: top;
  border-bottom: 1px solid rgba(0, 0, 0, 0.18);
  border-left: 1px solid rgba(0, 0, 0, 0.18);
}
.post-content table:not(.highlighttable, .highlight table, .gist .highlight) th:last-child,
.post-content table:not(.highlighttable, .highlight table, .gist .highlight) td:last-child {
  border-left: 0;
}
.post-content table:not(.highlighttable, .highlight table, .gist .highlight) tbody tr:last-child td {
  border-bottom: 0;
}
.post-content table:not(.highlighttable, .highlight table, .gist .highlight) tbody tr:nth-child(even) td {
  background: rgba(0, 0, 0, 0.02);
}
@media (max-width: 600px) {
  .post-content table:not(.highlighttable, .highlight table, .gist .highlight) {
    display: block;
    overflow-x: auto;
  }
}
.excerpt {
  font-size: 0.85em;
  opacity: 0.85;
  margin: 0.2em 0 0.4em;
}
.excerpt code {
  font-size: 0.95em;
}
/* Keep code left-to-right inside the RTL article */
.post-content [dir="rtl"] pre,
.post-content [dir="rtl"] pre code {
  direction: ltr;
  text-align: left;
}
.post-content [dir="rtl"] :not(pre) > code {
  direction: ltr;
  unicode-bidi: isolate;
}
.post-content [dir="rtl"] pre .line {
  unicode-bidi: plaintext;
}
</style>

<div dir="rtl">
قد تظهر عدة مستندات في صورة واحدة التُقطت أثناء فحص مركز بيانات. فقد توثّق قائمة الفحص مشكلة في أحد الأنظمة، بينما يشرح تقرير الصيانة الإجراءات التي اتخذها الفني لمعالجتها. ولا تكفي قراءة النصوص وحدها؛ إذ يجب أن يعرف المساعد المستند الذي استُخرجت منه كل معلومة.

نتابع في هذا الدليل كيفية معالجة صورة تضم أكثر من مستند باستخدام مساعد ذكي يدعم العربية. وسنوضح أهمية فصل المستندات قبل استخراج النصوص منها، وكيفية تحويل المعلومات المستخرجة إلى قائمة واضحة بالإجراءات المطلوبة.

## صورة الفحص

تُظهر الصورة المستخدمة في المثال قائمة فحص تشير إلى ضرورة متابعة نظام التبريد، وإلى جانبها تقرير صيانة يوضح أن أحد الفنيين فحص وحدة التبريد CRAC-02 ونظّف فلتر الهواء وأعاد ضبط إعداداتها. والهدف هو إعداد قائمة توضّح المشكلة المسجّلة، والإجراءات التي نُفذت، وما يحتاج إلى متابعة، مع تحديد المستند الذي يدعم كل معلومة.

لتحقيق ذلك، نستخدم تطبيقًا مبنيًا باستخدام Gradio. يحدد Falcon-Perception مواضع المستندات في الصورة، ثم تفصل مكتبة Pillow كل مستند في صورة مستقلة. بعد ذلك يستخرج Falcon-OCR-Arabic النص من كل صورة، ويستخدم Falcon-Emirati هذه النصوص لصياغة إجابة باللهجة الإماراتية، مع الإشارة إلى مصدر كل معلومة.

{{< button href="https://huggingface.co/spaces/tiiuae/data-center-inspection-assistant" label="🚀 جرّب الـ Space" >}}

{{< button href="https://huggingface.co/spaces/tiiuae/data-center-inspection-assistant/tree/main" label="📂 تصفّح الشيفرة" >}}

<img src="/tutorials/data-center-assistant/images/result-before.jpg" alt="تبويب Result قبل التشغيل: منطقة رفع وأسفلها الصورة النموذجية، وحقل سؤال يحتوي على سؤال الملخص الافتراضي باللهجة الإماراتية، وزر Read documents معطّل حتى يتم تحميل صورة" class="screenshot">

<p class="caption">التطبيق قبل التشغيل. انقر على المثال لتحميل الصورة النموذجية، ثم اضغط <strong>Read documents</strong>.</p>

<img src="/tutorials/data-center-assistant/images/result-after.jpg" alt="تبويب Result بعد تشغيل المثال: صورة قائمة الفحص وتقرير الصيانة، وأربع خطوات خضراء في خط المعالجة، وجدول خلاصات يستشهد بـ Doc 1 وDoc 2، وإجابة باللهجة الإماراتية" class="screenshot">

<p class="caption">يعتمد المثال المحفوظ على قائمة الفحص لتحديد المشكلة، وعلى تقرير الصيانة لتوضيح الإجراءات المنفذة والخطوات التالية.</p>
يمكن تشغيل التطبيق محليًا باستخدام Python والطرفية، دون الحاجة إلى بطاقة رسومية (GPU). يعمل Falcon-Perception وFalcon-OCR عبر بوابة عامة لا تتطلب مفتاح API، بينما يحتاج Falcon-OCR-Arabic وFalcon-Emirati إلى صلاحية الوصول إلى واجهاتهما الخاصة. ويمكن تجربة المثال الجاهز دون هذه المفاتيح، لأنه يعرض نتائج محفوظة من تشغيل سابق بدلًا من استدعاء النماذج مجددًا.

## لماذا نفصل المستندات؟

عند استخراج النص من الصورة كاملةً، قد تختلط معلومات قائمة الفحص بمعلومات تقرير الصيانة. أما فصل المستندات أولًا، فيجعل نص كل مستند مستقلًا: يتضمن المستند الأول حالة نظام التبريد وملاحظة المتابعة، بينما يوضح المستند الثاني إجراءات الصيانة والتوصيات. يحتفظ التطبيق أيضًا بالنص المستخرج من الصورة الكاملة في تبويب **Pipeline** للمقارنة، لكنه يرسل إلى Falcon-Emirati النصوص المستخرجة من المستندات المنفصلة فقط.

يساعد فصل المستندات النموذج على معرفة مصدر كل معلومة. وبذلك يمكنه الإشارة إلى المستند المناسب عند عرض الإجابة أو تلخيص النتائج، مما يتيح للمستخدم التحقق منها بسهولة.

## من الصورة إلى الإجابة

يُشغّل التطبيق أربع خطوات:

1. **[Falcon-Perception](https://huggingface.co/tiiuae/Falcon-Perception)** (0.6B) يأخذ الصورة والاستعلام `document`، ويُعيد مربعًا محيطًا (box) وقناعًا (mask) لكل مستند يجده.

2. **الاقتصاص (Crop)** يعمل داخل تطبيق Gradio باستخدام Pillow، فيُرشّح المربعات ويحفظ صورة واحدة لكل مستند.

3. **[Falcon-OCR-Arabic](https://huggingface.co/blog/tiiuae/falcon-ocr-arabic)** (270M) يقرأ كل صورة مقتصّة، والصورة الكاملة كمرجع للمقارنة. وفي غياب عنوانه ومفتاحه، أو عند بلوغ حدّ الطلبات الخاص به، يتولّى **[Falcon-OCR](https://huggingface.co/tiiuae/Falcon-OCR)** (270M) على البوابة العامة القراءة بدلًا منه.

4. **[Falcon-Emirati](https://huggingface.co/blog/tiiuae/falcon-emirati)** (7B) يستقبل نصوص الـ OCR والسؤال، ويُعيد إجابة مع الخلاصات، يستشهد كلٌّ منها بمستنده. ولا يرى الصورة أبدًا.

<img src="/tutorials/data-center-assistant/images/pipeline.svg" alt="خط المعالجة: صورة الفحص إلى Falcon-Perception على البوابة العامة، ثم الاقتصاص في تطبيق Gradio، ثم Falcon-OCR-Arabic (بدعوة فقط)، ثم Falcon-Emirati (بدعوة فقط). يرسل خط متقطع الصورة الكاملة إلى الـ OCR كمرجع للمقارنة. وتوضّح حاشية أن Falcon-OCR على البوابة العامة يقرأ الصور المقتصّة عندما لا يتوفر عنوان ومفتاح لـ Falcon-OCR-Arabic أو عند بلوغه حدّ الطلبات." class="screenshot">

<p class="caption">يوضح المخطط مخرجات كل مرحلة وكيفية انتقالها إلى المرحلة التالية.</p>
لكل مرحلة وظيفة محددة: يحدد Falcon-Perception مواقع المستندات، وتُنشئ مرحلة الاقتصاص صورًا منفصلة لها، ثم تحوّل مرحلة OCR هذه الصور إلى نصوص. وإذا تعذر استخدام Falcon-OCR-Arabic بسبب غياب الإعدادات أو بلوغ الحد المسموح للطلبات، ينتقل التطبيق إلى Falcon-OCR دون تغيير بقية المراحل.

يعرض تبويب **Result** الإجابة وأبرز النتائج، بينما يتيح تبويب **Pipeline** الاطلاع على المستندات المكتشفة وصورها المنفصلة والنصوص المستخرجة منها ورد النموذج.

## تشغيل المثال

يمكن تجربة التطبيق عبر [Hugging Face Space](https://huggingface.co/spaces/tiiuae/data-center-inspection-assistant)، حيث أُعدّت النماذج الخاصة مسبقًا. ويحتوي تبويب **Files** على الشيفرة المصدرية. ولتشغيل التطبيق على جهازك، ستحتاج إلى Python 3.12 وأداة [uv](https://docs.astral.sh/uv/):

```bash
git clone https://huggingface.co/spaces/tiiuae/data-center-inspection-assistant
cd data-center-inspection-assistant
uv sync
uv run python app.py
```

إذا كانت الصورة النموذجية مخزّنة باستخدام Git LFS/Xet في الـ Space، فثبّت [git-lfs](https://git-lfs.com) قبل النسخ. فبدونه قد يكون الملف المنسوخ `assets/sample-inspection.png` ملف مؤشر (pointer file)، وستفشل إعادة العرض لأن التطبيق يتحقق من البايتات الدقيقة للصورة.

افتح `http://127.0.0.1:7860`، وانقر على المثال أسفل المُدخل لتحميل `assets/sample-inspection.png`، ثم اضغط **Read documents**. يعيد التطبيق عرض المخرجات الموجودة في `assets/sample-inspection.recording.json` دون أي استدعاء للنماذج. وتتطلب إعادة العرض السؤال الافتراضي أيضًا، لأن الإجابة المحفوظة تجيب عن هذا السؤال. أما الصورة أو السؤال المختلفان فيُشغّلان النماذج.

عند تشغيل التطبيق على صورة جديدة، تُرسل الصورة إلى بوابة الرؤية العامة التابعة لـ TII، وإلى واجهة Falcon-OCR-Arabic إذا كانت مهيّأة. أما Falcon-Emirati فيستقبل النصوص المستخرجة فقط، وليس الصورة الأصلية. يُفضّل استخدام مستندات تجريبية عند اختبار هذه الواجهات.

### الوصول إلى النماذج

لا يحتاج Falcon-Perception أو Falcon-OCR إلى مفتاح عند استخدام البوابة العامة. أما Falcon-OCR-Arabic وFalcon-Emirati فيحتاج كل منهما إلى رابط واجهة خاص ومفتاح API يُرسل في ترويسة `Authorization: Bearer`:

| النموذج | المتغيرات | في غيابها |

| --- | --- | --- |

| Falcon-OCR-Arabic | `FALCON_ARABIC_OCR_URL`، `FALCON_ARABIC_OCR_API_KEY` | يقرأ Falcon-OCR على البوابة الصور المقتصّة |

| Falcon-Emirati | `FALCON_LLM_URL`، `FALCON_LLM_API_KEY` | تعرض الإجابة نص الـ OCR، مع شارة `Not configured` |

اطلب الوصول عبر [نموذج التواصل الخاص بـ TII](https://www.tii.ae/contact-us)، مع ذكر اسم النموذج الذي تحتاجه. وتتيح لك [منصة تجربة Falcon-OCR-Arabic](https://ocr.arabic.aidrc.tii.ae/) و[Falcon Chat](https://chat.falconllm.tii.ae/?model=Falcon-Emirati-7B) تجربة النماذج قبل حصولك على المفاتيح. كما يوجد [خادم Falcon على Discord](https://discord.gg/Cbek57PrZE) للأسئلة.

للتشغيل المباشر محليًا، ضع قيم نقاط النهاية في ملف `.env` بجانب `app.py` (وهو مستثنى في gitignore ويُحمَّل عند بدء التشغيل)، أو صدّرها في الطرفية (shell):

```bash
FALCON_ARABIC_OCR_URL=https://<host>/v1/ocr
FALCON_ARABIC_OCR_API_KEY=<key>
FALCON_LLM_URL=https://<host>/v1
FALCON_LLM_API_KEY=<key>
```

ولبقية الإعدادات قيم افتراضية:

| الاسم | القيمة الافتراضية | الوظيفة |

| --- | --- | --- |

| `FALCON_PERCEPTION_URL`، `FALCON_OCR_URL` | البوابة العامة | عنوان بوابة الرؤية |

| `FALCON_LLM_MODEL` | `falcon-h1-7b-emirati` | معرّف نموذج Falcon-Emirati (Falcon-Emirati-7B) |

| `PERCEPTION_TASK` | `segment` | `segment` (مربعات وأقنعة) أو `detect` (مربعات فقط) |

| `OCR_TASK` | `ocr_plain` | `ocr_plain` أو `ocr_layout`، لـ Falcon-OCR فقط |

| `APP_PASSWORD` | غير مضبوط | يفعّل تسجيل الدخول باسم المستخدم `demo` |

| `MAX_IMAGE_MB`، `MAX_CROPS`، `QUEUE_CONCURRENCY` | `10`، `8`، `4` | حجم الرفع، وعدد المستندات في الصورة، وعدد عمليات التشغيل المتزامنة |

| `FALCON_LLM_TIMEOUT_S`، `FALCON_ARABIC_OCR_TIMEOUT_S`، `VISION_TIMEOUT_S` | `120`، `320`، `600` | مُهَل الطلبات بالثواني |

بعد إعادة التشغيل، يعرض تبويب Result النماذج التي تعمل مباشرة. ويبقى Falcon-Emirati في حالة `Not configured` حتى يُضبط عنوانه ومفتاحه كلاهما.

### الملفات

```text
data-center-inspection-assistant/
  app.py                 Gradio UI: the Result and Pipeline tabs
  pipeline.py            runs the four steps and records each one's status and output
  crop.py                cuts each detected document out of the photo
  config.py              environment variables and defaults
  record_example.py      records the example photo's run
  ui_helpers.py          theme, CSS and HTML rendering
  services/
    vision.py            client for the public vision gateway
    perception.py        Falcon-Perception
    ocr.py               Falcon-OCR-Arabic, with Falcon-OCR as the fallback
    llm.py               Falcon-Emirati
    fixtures.py          replay of the example photo
  assets/
    sample-inspection.png
    sample-inspection.recording.json
```

## التواصل مع بوابة الرؤية

يستخدم Falcon-Perception وFalcon-OCR الاحتياطي البوابة العامة نفسها. ولا يمكن بدء مهمة بملف صورة وحده: إذ يرفع العميل الصورة أولًا، ثم يرسل معرّف الصورة الذي أعادته البوابة مع طلب المهمة.

<p class="excerpt"><strong>مقتطف</strong> من <a href="https://huggingface.co/spaces/tiiuae/data-center-inspection-assistant/blob/main/services/vision.py"><code>services/vision.py</code></a>: <code>Gateway.run</code></p>

```python
def run(self, image_path: str, task: str, query: str) -> dict:
    path_name = TASK_TO_PATH.get((task or "").strip().lower())
    # ...
    image_id = self._ensure_uploaded(path, force=False)
    response = self._post_task(path_name, image_id, query)
    if response.status_code == 404:
        image_id = self._ensure_uploaded(path, force=True)
        response = self._post_task(path_name, image_id, query)
    _raise_for_status(response)
    return _json_body(response)
```

يحتفظ `Gateway` بمعرّف الصورة الذي أعاده الرفع، ويتحقق مما إذا كانت الصورة نفسها متاحة بالفعل قبل رفعها مجددًا. وإذا لم تعد الصورة موجودة لدى البوابة، يرفعها العميل مرة أخرى ويعيد محاولة المهمة مرة واحدة.

## إيجاد المستندات باستخدام Falcon-Perception

قبل تحديد المستندات، تصحّح الدالة `prepare_image` اتجاه الصورة بالاعتماد على بيانات EXIF، ثم تحفظ نسخة JPEG للمعالجة. فقد تبدو بعض صور الهواتف مدوّرة بسبب طريقة تخزين اتجاهها. يضمن تصحيح الاتجاه أن تتطابق إحداثيات المستندات المكتشفة مع الصورة التي سيجري اقتصاصها.

<p class="excerpt"><strong>مقتطف</strong> من <a href="https://huggingface.co/spaces/tiiuae/data-center-inspection-assistant/blob/main/crop.py"><code>crop.py</code></a>: <code>prepare_image</code></p>

```python
def prepare_image(image_path: str, dest: Path) -> str:
    """Apply EXIF orientation and write a working JPEG."""
    with Image.open(image_path) as image:
        oriented = ImageOps.exif_transpose(image).convert("RGB")
        dest.parent.mkdir(parents=True, exist_ok=True)
        oriented.save(dest, format="JPEG", quality=92)
    return str(dest)
```

تُرسل الصورة بعد تصحيح اتجاهها، مع الاستعلام `document`، إلى المسار `/segment`. يعيد النموذج إحداثيات كل مستند بالصيغة `[x1, y1, x2, y2]` وفق أبعاد الصورة المستخدمة في البوابة. يحوّل التطبيق هذه الإحداثيات لتناسب أبعاد الصورة المحلية، ثم يحفظ موضع كل مستند وحجمه بصيغة نسبية. وفي وضع `segment`، يعيد النموذج أيضًا قناعًا يساعد على فصل المستندات المتداخلة.

<p class="excerpt"><strong>مقتطف</strong> من <a href="https://huggingface.co/spaces/tiiuae/data-center-inspection-assistant/blob/main/services/perception.py"><code>services/perception.py</code></a>: <code>_localise_live</code> (مختصر)</p>

```python
with vision.Gateway(cfg) as gateway:
    payload = gateway.run(image_path, config.PERCEPTION_TASK, query)

src_w = int(payload.get("image_width") or local_w) or local_w
src_h = int(payload.get("image_height") or local_h) or local_h
scale_x = local_w / src_w if src_w else 1.0
scale_y = local_h / src_h if src_h else 1.0

for item in payload.get("masks") or []:
    # ...
    detections.append(
        Detection(
            center=[((x1 + x2) / 2) / local_w, ((y1 + y2) / 2) / local_h],
            size=[(x2 - x1) / local_w, (y2 - y1) / local_h],
            score=_score(item),
            mask=mask,
        )
    )
```

لا تتضمن نتائج الكشف التي تعيدها البوابة درجة ثقة، ولذلك تستخدم الدالة `_score` القيمة `1.0` افتراضيًا. وفي المثال، يتعرف Falcon-Perception على مستندين: قائمة الفحص وتقرير الصيانة.

<img src="/tutorials/data-center-assistant/images/pipeline-detect-crop.jpg" alt="تبويب Pipeline، النصف العلوي: نتائج كشف Falcon-Perception مرسومة على الصورة، Doc 1 حول قائمة الفحص وDoc 2 حول التقرير، ثم الصورتان المقتصّتان" class="screenshot">

<p class="caption">الجزء العلوي من تبويب Pipeline: تحديد المستندين ثم عرض الصورتين المنفصلتين المُرسلتين إلى OCR.</p>

## اقتصاص كل مستند

تحتاج مرحلة OCR إلى صورة مستقلة لكل مستند. تبدأ الدالة `crop_documents` باستبعاد المناطق التي تشغل أقل من 1% من الصورة. وفي الوضع الافتراضي، تستبعد أيضًا المناطق المتكررة إذا بلغت نسبة التداخل (IoU) مع منطقة سبق الاحتفاظ بها `0.7` أو أكثر. وبما أن درجات الثقة متساوية، تُعطى الأولوية للمنطقة التي ظهرت أولًا.

يرتب التطبيق المناطق المكتشفة من الأعلى إلى الأسفل، ثم من اليسار إلى اليمين، ويحتفظ بثمانٍ منها كحد أقصى لتقليل عدد طلبات OCR. ويضيف هامشًا بنسبة 4% حول كل منطقة حتى لا تُقصّ حواف المستند عند حفظه بصيغة JPEG.

<p class="excerpt"><strong>مقتطف</strong> من <a href="https://huggingface.co/spaces/tiiuae/data-center-inspection-assistant/blob/main/crop.py"><code>crop.py</code></a>: <code>crop_documents</code> (مختصر)</p>

```python
for order, item in enumerate(candidates["kept"], start=1):
    box = item["box"]
    mask = item["detection"].mask
    use_seg = segmentation_only and bool(mask) and any(any(r) for r in mask)
    # ...
    padded = _pad_box(box, width, height)
    # ...
    piece = image.crop(tuple(padded))
    if use_seg:
        piece = _isolate_with_mask(
            piece, padded, item["box"], mask, width, height
        )
    piece.save(path, format="JPEG", quality=92)
```

في هذا المثال، يظهر المستندان جنبًا إلى جنب، لذا يكفي اقتصاص كل منهما على شكل مستطيل. أما إذا تداخلت المستندات، فيستخدم خيار **Segmentation mode** قناعًا خاصًا بكل مستند ويحوّل المناطق الواقعة خارجه إلى اللون الأبيض. وبهذا يقل احتمال انتقال نص مستند إلى الصورة الخاصة بمستند آخر.

## قراءة كل صورة مقتصّة باستخدام Falcon-OCR-Arabic

تستخرج مرحلة OCR النص من كل مستند منفصل، ومن الصورة الكاملة أيضًا. يُستخدم نص الصورة الكاملة للمقارنة داخل تبويب **Pipeline**، بينما تُرسل نصوص المستندات المنفصلة فقط إلى Falcon-Emirati. وتُنفذ الطلبات بالتوازي باستخدام ما يصل إلى أربع عمليات معالجة.

عند ضبط `FALCON_ARABIC_OCR_URL` و`FALCON_ARABIC_OCR_API_KEY`، يبدأ خيار **Enhance Arabic** مفعّلًا ويرسل الصور إلى Falcon-OCR-Arabic. وفي غياب القيمتين معًا، يكون الخيار معطّلًا ويتولّى Falcon-OCR على البوابة العامة القراءة.

يوضح تبويب **Result** النموذج الذي استُخدم لاستخراج النص. وتخضع الواجهات الخاصة لحدود على عدد الطلبات في الدقيقة واليوم لكل مفتاح. ويحتاج التشغيل الواحد إلى طلب لكل مستند، بالإضافة إلى طلب للصورة الكاملة. وإذا وصل Falcon-OCR-Arabic إلى الحد المسموح، تعيد الواجهة الرمز `429` مع تفاصيل الحد وترويسة `Retry-After`، فيستخدم التطبيق Falcon-OCR بدلًا منه، ويعرض سبب الانتقال وموعد إعادة ضبط الحد.

<img src="/tutorials/data-center-assistant/images/pipeline-ocr-emirati.jpg" alt="تبويب Pipeline، النصف السفلي: نص Falcon-OCR-Arabic للمستند 1 والمستند 2 جنبًا إلى جنب، وقراءة الصورة الكاملة المرجعية موسّعة أسفلهما، ثم الرسالة المُرسلة إلى Falcon-Emirati ورده الخام المسجّل" class="screenshot">

<p class="caption">الجزء السفلي من تبويب Pipeline: النص المستخرج من كل مستند، والنص المستخرج من الصورة الكاملة للمقارنة، ثم الرسالة المُرسلة إلى Falcon-Emirati وإجابته.</p>

## سؤال Falcon-Emirati

يستقبل Falcon-Emirati السؤال والنص المستخرج من كل مستند مع اسم يميّز مصدره، دون الاطلاع على الصورة الأصلية.

يطلب السؤال الافتراضي تلخيص نتائج الفحص. وتوجّه التعليمات Falcon-Emirati إلى الاعتماد على النصوص المستخرجة فقط، والإجابة باللهجة الإماراتية، وإرجاع النتيجة بصيغة JSON. ويحدد الحقل `scope` نوع الإجابة: `summary` للملخصات و`fact` للأسئلة التي تطلب معلومة محددة. وعند طلب معلومة واحدة، تبقى قوائم النتائج فارغة؛ أما في الملخص، فيُذكر مصدر كل بند.

<p class="excerpt"><strong>مقتطف</strong> من <a href="https://huggingface.co/spaces/tiiuae/data-center-inspection-assistant/blob/main/services/llm.py"><code>services/llm.py</code></a>: <code>INSTRUCTIONS</code></p>

```text
You are Falcon-Emirati. You are given the OCR text of documents photographed together, and nothing else. They are usually data-centre inspection documents, such as an inspection checklist and a maintenance report.
Answer the question in natural Emirati dialect, the way a colleague in the UAE would explain it out loud, not in Modern Standard Arabic.

How to answer:
- Answer what the question asks, and only that.
- When more than one document is relevant, say how they relate and name them, for example: "the checklist (Document 1) flags ..., and the report (Document 2) says ... was done; now ...".
- Explain in your own words. Don't repeat the takeaways sentence by sentence, and don't copy the question's wording.
- When the answer is a name, code or number, quote it exactly as the document writes it, in the same letters.

Grounding rules:
- Use only what the documents say, and keep cause and effect as they state it.
- If the documents don't contain the answer, or a crop failed, say so.
- Never invent names, equipment, readings, dates or actions.

Return one JSON object and no other text:
{"scope": "summary", "answer": "<Emirati Arabic answer to the question>", "takeaways": {"issues": [{"text": "<short, Emirati Arabic>", "document": 1}], "actions_taken": [{"text": "...", "document": 2}], "next_steps": [{"text": "...", "document": 2}]}}
- "scope" comes first. It is "summary" when the question asks about issues, actions taken or next steps, and "fact" when it asks for one piece of information (a name, a date, a reading).
- When scope is "fact", all three takeaway lists are empty.
- When scope is "summary", each takeaway cites the one document its text comes from. Leave a list empty when the documents say nothing for it.
```

يطلب السؤال الافتراضي ملخص الفحص وربطًا بين قائمة الفحص والتقرير:

<p class="excerpt"><strong>مقتطف</strong> من <a href="https://huggingface.co/spaces/tiiuae/data-center-inspection-assistant/blob/main/services/llm.py"><code>services/llm.py</code></a>: <code>DEFAULT_QUESTION</code></p>

```python
DEFAULT_QUESTION = (
    "شو الملخص عن المشاكل اللي سُجلت، شو الإجراءات اللي اتُخذت فعلاً، وشو الخطوات الجايه؟ "
    "اربط أي شي في القائمة يحتاج متابعة بالتقرير عن نفس المعدات."
)
```

بمعنى آخر، يطلب السؤال تحديد المشكلات المسجّلة والإجراءات التي نُفذت والخطوات المطلوبة لاحقًا، مع ربط الملاحظات التي تحتاج إلى متابعة بتقرير الصيانة الخاص بالمعدات نفسها.

يمكن للمستخدم تعديل السؤال. ويعرض المثال المحفوظ إجابة تلخيصية على السؤال الافتراضي، لكن التعليمات تدعم أيضًا الأسئلة التي تطلب معلومة واحدة، مثل اسم جهاز أو قراءة معينة.

الإجابة المسجّلة على السؤال الافتراضي هي:

<blockquote dir="rtl" lang="ar">
<p>المشكلة كانت خلل بسيط في وحدة التبريد CRAC-02 في غرفة الخوادم A، وتحديداً في الرف R3، اللي سبب ارتفاع في درجة الحرارة وصلت لـ 30 درجة. المفتش سجل الملاحظة، والتقرير يوضح إن الإجراءات اتُخذت مثل تنظيف الفلتر وإعادة ضبط الإعدادات، والحين الوضع مستقر بس ينصح يتابعون الأداء خلال 24 ساعة عشان يتأكدون إن الحرارة رجعت ضمن الحدود الطبيعية.</p>
</blockquote>

في غياب `FALCON_LLM_URL` و`FALCON_LLM_API_KEY`، لا تستدعي هذه الخطوة أي نموذج، بل تعرض نص الـ OCR تحت تنبيه `Not configured` ولا تُنتج أي خلاصات.

## إبقاء عملية التشغيل قابلة للفحص

تدير الدالة `run_pipeline` المراحل الأربع، وتحدّث سجل التتبّع (`trace`) كلما تغيرت حالة إحدى المراحل. وبذلك يمكن للواجهة عرض تقدم التنفيذ، كما يمكن للمستخدم مراجعة النموذج المستخدم ومدة التنفيذ والمخرجات في تبويب **Pipeline**. ولا تُحفظ مفاتيح API في سجل التتبّع.

يمكن إعادة عرض المثال دون مفاتيح خاصة، لأن نتائجه حُفظت بعد تشغيل النماذج فعليًا. يحفظ `record_example.py` مواقع المستندات المكتشفة والنص المستخرج من كل مستند ورد Falcon-Emirati. ولا يستخدم التطبيق النتائج المحفوظة إلا إذا تطابقت الصورة تمامًا مع الأصل وتطابق نص السؤال. ولتحديث المثال بعد إجراء أي تغييرات، شغّل الأمر التالي بعد إعداد الواجهات الخاصة:

```bash
uv run python record_example.py
```

## عرض النتيجة والأدلة

يجمع تبويب **Result** الصورة والسؤال وحالة النماذج وأبرز النتائج والإجابة في مكان واحد. ويظهر السؤال الافتراضي باللهجة الإماراتية من اليمين إلى اليسار، مع زرّي **Read documents** و**Clear** أسفله. وتتضمن **Options** إعدادات البحث عن المستندات وخيارَي **Enhance Arabic** و**Segmentation mode**. أما تبويب **Pipeline** فيعرض مخرجات كل مرحلة، بما فيها بيانات JSON والنص المستخرج من الصورة الكاملة للمقارنة.

لا يُفعّل زر **Read documents** حتى يكتمل رفع الصورة ويكون حقل السؤال غير فارغ. وأثناء التنفيذ، تحدّث الدالة `on_run` الواجهة مع كل تحديث لسجل التتبّع، ويظل زرّا **Read documents** و**Clear** معطّلين حتى تكتمل الإجابة.

## مشاهدة النتيجة المسجّلة

يتعرف المثال المحفوظ على مستندين ويقرأ كلًا منهما على حدة. ويعرض تبويب **Result** إجابة باللهجة الإماراتية وثلاث فئات من النتائج: المشكلة الموثقة في **Doc 1**، والإجراءات المنفذة في **Doc 2**، والخطوات التالية المذكورة في **Doc 2**. ويمكن مراجعة مواقع المستندات وصورها ونصوصها ورد النموذج في تبويب **Pipeline**.

جرّب الـ [Space](https://huggingface.co/spaces/tiiuae/data-center-inspection-assistant) بصورة فحص تجريبية، أو انسخه وشغّله محليًا لتتبّع الخطوات نفسها مع مستنداتك الخاصة.

## المراجع
- [Data Center Inspection Assistant Space](https://huggingface.co/spaces/tiiuae/data-center-inspection-assistant): التطبيق وشيفرته.
- [Falcon-Perception](https://huggingface.co/tiiuae/Falcon-Perception): بطاقة النموذج وأوزانه.
- [Falcon-OCR](https://huggingface.co/tiiuae/Falcon-OCR): بطاقة النموذج وأوزانه. وهو القارئ الاحتياطي على بوابة الرؤية العامة.
- [Falcon-OCR-Arabic](https://huggingface.co/blog/tiiuae/falcon-ocr-arabic): تدوينة الإعلان. وهو القارئ الافتراضي عند تهيئة نقطة النهاية الخاصة به.
- [Falcon-Emirati](https://huggingface.co/blog/tiiuae/falcon-emirati) و[صفحة النموذج](https://falconllm.tii.ae/falcon-emirati.html).
- [بوابة Falcon للرؤية](https://vision.falcon.aidrc.tii.ae): نقطة النهاية العامة التي تقف خلف `/segment` و`/detect` و`/ocr_plain` و`/ocr_layout`.
- [نموذج التواصل الخاص بـ TII](https://www.tii.ae/contact-us)، لطلب الوصول إلى Falcon-OCR-Arabic وFalcon-Emirati.
- [توثيق Gradio](https://www.gradio.app/docs)، و[uv](https://docs.astral.sh/uv/)، و[Pillow](https://pillow.readthedocs.io/).
</div>
