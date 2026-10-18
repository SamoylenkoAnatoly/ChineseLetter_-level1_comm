(function () {
  "use strict";

  var KEYS = [
    {
      ch: "水", py: "shuǐ", t: 3, mean: "вода", strokes: 4, kx: 85, audio: "audio/shui3.mp3",
      form: "氵", formName: "три капли", pos: "слева",
      hint: "Три капли — и хвост: сначала точка слева, потом две капли и длинная черта.",
      ex: [
        { ch: "河", py: "hé", t: 2, tr: "река", audio: "audio/he2.mp3", stack: false,
          parts: [{ t: "氵", rad: true }, { t: "可", sub: "kě «возможно»" }],
          noteR: "<b class=\"rad\">氵 — ключ «вода».</b> Три капли слева: река — вода в движении, ключ мгновенно подсказывает категорию «жидкость».",
          noteS: "<b class=\"pho\">可 kě «возможно» — фонетик.</b> Смысла реки в нём нет, его работа — звук: kě похоже на hé.", role: { cat: "sense", text: "вода в движении" } },
        { ch: "海", py: "hǎi", t: 3, tr: "море", audio: "audio/hai3.mp3", stack: false,
          parts: [{ t: "氵", rad: true }, { t: "每", sub: "měi «каждый»" }],
          noteR: "<b class=\"rad\">氵 — ключ «вода».</b> Море — это очень много воды. Увидел три капли — ищи жидкость!",
          noteS: "<b class=\"pho\">每 měi «каждый» — фонетик.</b> Звук уплыл дальше (měi → hǎi), но родня всё ещё слышна.", role: { cat: "sense", text: "очень много воды" } },
        { ch: "汉", py: "hàn", t: 4, tr: "китайский", audio: "audio/han4.mp3", stack: false,
          parts: [{ t: "氵", rad: true }, { t: "又", sub: "yòu «снова»" }],
          noteR: "<b class=\"rad\">氵 — ключ «вода».</b> 汉 — река Хань: от неё пошло название народа хань и китайской письменности 汉字.",
          noteS: "<b class=\"pho\">又 yòu «снова» — фонетик.</b> Старинное чтение этой части дало слог hàn.", role: { cat: "shift", text: "река Хань → народ хань" } }
      ]
    },
    {
      ch: "艹", py: "cǎo", t: 3, mean: "трава", strokes: 3, kx: 140, audio: "audio/cao3.mp3",
      form: "艹", formName: "травяная шапка", pos: "сверху",
      hint: "Две травинки-антенны: сначала левая с крючочком, потом правая.",
      ex: [
        { ch: "花", py: "huā", t: 1, tr: "цветок", audio: "audio/hua1.mp3", stack: true,
          parts: [{ t: "艹", rad: true }, { t: "化", sub: "huà «превращаться»" }],
          noteR: "<b class=\"rad\">艹 — ключ «трава» сверху.</b> Цветок растёт из земли, как трава: зелёная шапка из травинок.",
          noteS: "<b class=\"pho\">化 huà «превращаться» — фонетик.</b> huà и huā различаются только тоном.", role: { cat: "sense", text: "растение-цветок" } },
        { ch: "茶", py: "chá", t: 2, tr: "чай", audio: "audio/cha2.mp3", stack: true,
          parts: [{ t: "艹", rad: true }, { t: "人", sub: "человек" }, { t: "木", sub: "дерево" }],
          noteR: "<b class=\"rad\">艹 — ключ «трава».</b> Чай — это листья, то есть трава. Шапка из двух травинок намекает на растение.",
          noteS: "<b class=\"pho\">人 «человек» + 木 «дерево» — смысловая картинка.</b> Человек собирает листья с дерева: обе части работают на смысл, а не на звук.", role: { cat: "sense", text: "чай — лист-трава" } },
        { ch: "草", py: "cǎo", t: 3, tr: "трава", audio: "audio/cao3.mp3", stack: true,
          parts: [{ t: "艹", rad: true }, { t: "早", sub: "zǎo «рано»" }],
          noteR: "<b class=\"rad\">艹 — ключ «трава».</b> А здесь знак буквально значит то же, что ключ: 草 — «трава».",
          noteS: "<b class=\"pho\">早 zǎo «рано» — фонетик.</b> zǎo → cǎo. Роса на траве бывает рано утром — запоминается само.", role: { cat: "sense", text: "тот же смысл: трава" } }
      ]
    },
    {
      ch: "木", py: "mù", t: 4, mean: "дерево", strokes: 4, kx: 75, audio: "audio/mu4.mp3",
      form: "木", formName: "дерево", pos: "слева или снизу",
      hint: "Горизонталь, вертикаль, затем левая и правая ветки — дерево готово.",
      ex: [
        { ch: "树", py: "shù", t: 4, tr: "дерево", audio: "audio/shu4.mp3", stack: false,
          parts: [{ t: "木", rad: true }, { t: "对", sub: "duì «правильный»" }],
          noteR: "<b class=\"rad\">木 — ключ «дерево» слева.</b> Знак про растения и деревянные вещи: вот и 树 «дерево».",
          noteS: "<b class=\"pho\">对 duì «правильный» — фонетик.</b> Звуки разошлись, но ключ узнаётся мгновенно — так бывает.", role: { cat: "sense", text: "растение-дерево" } },
        { ch: "林", py: "lín", t: 2, tr: "лес", audio: "audio/lin2.mp3", stack: false,
          parts: [{ t: "木", rad: true }, { t: "木", sub: "второе дерево" }],
          noteR: "<b class=\"rad\">木 — ключ «дерево».</b> Одно дерево хорошо, а два — уже лес: иероглиф рисует смысл прямо.",
          noteS: "<b class=\"pho\">Вторая 木 — не фонетик, а просто второе дерево.</b> Иногда части дублируют картинку: 林 = дерево + дерево.", role: { cat: "sense", text: "дерево + дерево" } },
        { ch: "桥", py: "qiáo", t: 2, tr: "мост", audio: "audio/qiao2.mp3", stack: false,
          parts: [{ t: "木", rad: true }, { t: "乔", sub: "qiáo «высокий»" }],
          noteR: "<b class=\"rad\">木 — ключ «дерево».</b> Первые мосты строили из брёвен: без ключа-дерева никуда.",
          noteS: "<b class=\"pho\">乔 qiáo «высокий» — фонетик.</b> Звучит точно как весь знак: qiáo.", role: { cat: "shift", text: "мост из брёвен" } }
      ]
    },
    {
      ch: "口", py: "kǒu", t: 3, mean: "рот", strokes: 3, kx: 30, audio: "audio/kou3.mp3",
      form: "口", formName: "рот", pos: "слева или сверху",
      hint: "Рисуем квадратик: левая стенка, низ, правая стенка и крышка.",
      ex: [
        { ch: "吃", py: "chī", t: 1, tr: "есть", audio: "audio/chi1.mp3", stack: false,
          parts: [{ t: "口", rad: true }, { t: "乞", sub: "qǐ «просить»" }],
          noteR: "<b class=\"rad\">口 — ключ «рот» слева.</b> Есть и пить — дела рта: ключ сразу относит знак к еде.",
          noteS: "<b class=\"pho\">乞 qǐ «просить» — фонетик.</b> Старое чтение похоже на chī: просящий еду делает это ртом.", role: { cat: "sense", text: "рот — про еду" } },
        { ch: "喝", py: "hē", t: 1, tr: "пить", audio: "audio/he1.mp3", stack: false,
          parts: [{ t: "口", rad: true }, { t: "曷", sub: "hé" }],
          noteR: "<b class=\"rad\">口 — ключ «рот».</b> Без рта не напьёшься! Пара 吃–喝 — классические «ротовые» знаки.",
          noteS: "<b class=\"pho\">曷 hé — фонетик.</b> Звучит почти как весь знак hē.", role: { cat: "sense", text: "рот — про питьё" } },
        { ch: "叫", py: "jiào", t: 4, tr: "звать", audio: "audio/jiao4.mp3", stack: false,
          parts: [{ t: "口", rad: true }, { t: "丩", sub: "jiū" }],
          noteR: "<b class=\"rad\">口 — ключ «рот».</b> Звать — значит кричать. Кричать чем? Правильно, ртом!",
          noteS: "<b class=\"pho\">丩 jiū — фонетик.</b> Из старого чтения вырос jiào: форма уплыла, работа осталась.", role: { cat: "sense", text: "крик ртом" } }
      ]
    },
    {
      ch: "手", py: "shǒu", t: 3, mean: "рука", strokes: 4, kx: 64, audio: "audio/shou3.mp3",
      form: "扌", formName: "рука-коготь", pos: "слева",
      hint: "Откидная влево, две горизонтали — и вертикаль с крючком.",
      ex: [
        { ch: "打", py: "dǎ", t: 3, tr: "бить, играть", audio: "audio/da3.mp3", stack: false,
          parts: [{ t: "扌", rad: true }, { t: "丁", sub: "dīng «гвоздь»" }],
          noteR: "<b class=\"rad\">扌 — ключ «рука».</b> Стук, удар, игра (打球 играть в мяч) — всё делают рукой.",
          noteS: "<b class=\"pho\">丁 dīng «гвоздь» — фонетик.</b> dīng → dǎ: слог-родственник.", role: { cat: "sense", text: "удар рукой" } },
        { ch: "找", py: "zhǎo", t: 3, tr: "искать", audio: "audio/zhao3.mp3", stack: false,
          parts: [{ t: "扌", rad: true }, { t: "戈", sub: "gē «копьё»" }],
          noteR: "<b class=\"rad\">扌 — ключ «рука».</b> Искать — копаться руками: ключ подсказывает действие.",
          noteS: "<b class=\"pho\">戈 gē «копьё» — смысловая часть.</b> Древняя картинка: искать — осматривать местность с оружием. Звук она не даёт.", role: { cat: "sense", text: "поиск руками" } },
        { ch: "拿", py: "ná", t: 2, tr: "брать", audio: "audio/na2.mp3", stack: true,
          parts: [{ t: "合", sub: "hé «соединять»" }, { t: "手", rad: true }],
          noteR: "<b class=\"rad\">手 — ключ «рука», здесь в полном виде и понизу!</b> Брать — действие руки.",
          noteS: "<b class=\"pho\">合 hé «соединять» — смысловая часть.</b> Чтобы взять, соединяешь пальцы вокруг предмета. Весь знак читается ná.", role: { cat: "sense", text: "рука в полном виде" } }
      ]
    },
    {
      ch: "心", py: "xīn", t: 1, mean: "сердце", strokes: 4, kx: 61, audio: "audio/xin1.mp3",
      form: "忄", formName: "стоячее сердце", pos: "忄 слева или 心 снизу",
      hint: "Точка, широкий крючок-сердце — и ещё две точки поверх.",
      ex: [
        { ch: "想", py: "xiǎng", t: 3, tr: "думать, хотеть", audio: "audio/xiang3.mp3", stack: true,
          parts: [{ t: "相", sub: "xiāng «взаимно»" }, { t: "心", rad: true }],
          noteR: "<b class=\"rad\">心 — ключ «сердце» снизу.</b> Думать и хотеть — дела сердечные!",
          noteS: "<b class=\"pho\">相 xiāng «взаимно» — фонетик.</b> xiāng и xiǎng различаются только тоном: верх читается, низ — чувствует.", role: { cat: "sense", text: "дела сердечные" } },
        { ch: "快", py: "kuài", t: 4, tr: "быстрый", audio: "audio/kuai4.mp3", stack: false,
          parts: [{ t: "忄", rad: true }, { t: "夬", sub: "guài" }],
          noteR: "<b class=\"rad\">忄 — ключ «сердце» в стоячем виде.</b> Скорость — ощущение, а ощущения живут в сердце.",
          noteS: "<b class=\"pho\">夬 guài — фонетик.</b> Старое чтение дало слог kuài.", role: { cat: "shift", text: "ощущение → скорость" } },
        { ch: "忙", py: "máng", t: 2, tr: "занятой", audio: "audio/mang2.mp3", stack: false,
          parts: [{ t: "忄", rad: true }, { t: "亡", sub: "wáng «терять»" }],
          noteR: "<b class=\"rad\">忄 — ключ «сердце».</b> Занятость — состояние души: сердце в напряжении.",
          noteS: "<b class=\"pho\">亡 wáng «терять» — смысловая часть.</b> Когда занят, время словно теряется. Звуки wáng и máng — дальняя родня.", role: { cat: "shift", text: "состояние души" } }
      ]
    },
    {
      ch: "金", py: "jīn", t: 1, mean: "золото, металл", strokes: 8, kx: 167, audio: "audio/jin1.mp3",
      form: "钅", formName: "золотая игла", pos: "слева",
      hint: "Крышечка, «человечки», поперечина — и столбик с точками. Самый длинный ключ урока!",
      ex: [
        { ch: "钱", py: "qián", t: 2, tr: "деньги", audio: "audio/qian2.mp3", stack: false,
          parts: [{ t: "钅", rad: true }, { t: "戋", sub: "jiān «узкий»" }],
          noteR: "<b class=\"rad\">钅 — ключ «металл».</b> Деньги в Китае чеканили из металла — монеты с дырочкой.",
          noteS: "<b class=\"pho\">戋 jiān «узкий» — фонетик.</b> jiān похоже на qián: слог-родственник.", role: { cat: "sense", text: "монеты из металла" } },
        { ch: "错", py: "cuò", t: 4, tr: "ошибка", audio: "audio/cuo4.mp3", stack: false,
          parts: [{ t: "钅", rad: true }, { t: "昔", sub: "xī «прошлое»" }],
          noteR: "<b class=\"rad\">钅 — ключ «металл».</b> Изначально 错 — зазубрины на металлическом ноже: «ошибка» в металле.",
          noteS: "<b class=\"pho\">昔 xī «прошлое» — фонетик.</b> Из xī вырос cuò: звук уплыл, но слог дала именно эта часть.", role: { cat: "shift", text: "зазубрины → ошибка" } },
        { ch: "银", py: "yín", t: 2, tr: "серебро", audio: "audio/yin2.mp3", stack: false,
          parts: [{ t: "钅", rad: true }, { t: "艮", sub: "gèn" }],
          noteR: "<b class=\"rad\">钅 — ключ «металл».</b> Серебро — металл, всё честно. Смотри-ка: 错 и 银 — братья по ключу!",
          noteS: "<b class=\"pho\">艮 gèn — фонетик.</b> Старое чтение дало слог yín.", role: { cat: "sense", text: "металл — серебро" } }
      ]
    },
    {
      ch: "人", py: "rén", t: 2, mean: "человек", strokes: 2, kx: 9, audio: "audio/ren2.mp3",
      form: "亻", formName: "стоячий человек", pos: "слева",
      hint: "Откидная влево, затем откидная вправо — и человек шагает.",
      ex: [
        { ch: "从", py: "cóng", t: 2, tr: "следовать; из, от", audio: "audio/cong2.mp3", stack: false,
          parts: [{ t: "人", rad: true }, { t: "人", sub: "второй человек" }],
          role: { cat: "sense", text: "человек + человек — полный облик" },
          noteR: "<b class=\"rad\">人 — ключ «человек» в полном виде, дважды!</b> Один человек идёт следом за другим: сначала «следовать», а от него — служебное 从 «из, от».",
          noteS: "<b class=\"pho\">Здесь фонетика нет.</b> Второй 人 — просто второй человек: знак-картинка, где обе части работают на смысл." },
        { ch: "休", py: "xiū", t: 1, tr: "отдыхать", audio: "audio/xiu1.mp3", stack: false,
          parts: [{ t: "亻", rad: true }, { t: "木", sub: "mù «дерево»" }],
          role: { cat: "sense", text: "человек у дерева — отдых" },
          noteR: "<b class=\"rad\">亻 — ключ «человек».</b> Человек прислонился к дереву и отдыхает: картинка рисует смысл прямо. Заметь: 木 — ключ из нашего урока!",
          noteS: "<b class=\"pho\">木 mù «дерево» — смысловая часть.</b> Звука она не даёт: xiū запоминается самой картинкой." },
        { ch: "体", py: "tǐ", t: 3, tr: "тело", audio: "audio/ti3.mp3", stack: false,
          parts: [{ t: "亻", rad: true }, { t: "本", sub: "běn «основа»" }],
          role: { cat: "shift", text: "основа → тело" },
          noteR: "<b class=\"rad\">亻 — ключ «человек».</b> Тело — «основа» человека: ключ задаёт, о ком речь, а 本 добавляет смысл основы.",
          noteS: "<b class=\"pho\">本 běn «основа» — смысловая часть.</b> Звук от неё дальний: tǐ запоминаем вместе с картинкой «человек + основа»." }
      ]
    },
    {
      ch: "虫", py: "chóng", t: 2, mean: "насекомое", strokes: 6, kx: 142, audio: "audio/chong2.mp3",
      form: "虫", formName: "жучок", pos: "слева или снизу",
      hint: "Квадратик-головка, вертикаль с крючком, точка — и последняя откидная.",
      ex: [
        { ch: "蚊", py: "wén", t: 2, tr: "комар", audio: "audio/wen2.mp3", stack: false,
          parts: [{ t: "虫", rad: true }, { t: "文", sub: "wén «узор»" }],
          noteR: "<b class=\"rad\">虫 — ключ «насекомое».</b> Комар — знаменитое насекомое, тут без вариантов.",
          noteS: "<b class=\"pho\">文 wén «узор» — фонетик.</b> Звучит ровно как весь знак: wén.", role: { cat: "sense", text: "насекомое-комар" } },
        { ch: "虾", py: "xiā", t: 1, tr: "креветка", audio: "audio/xia1.mp3", stack: false,
          parts: [{ t: "虫", rad: true }, { t: "下", sub: "xià «низ»" }],
          noteR: "<b class=\"rad\">虫 — ключ «насекомое».</b> Для китайской грамматики креветка — тоже «жучок»!",
          noteS: "<b class=\"pho\">下 xià «низ» — фонетик.</b> xià → xiā: тон изменился, слог тот же.", role: { cat: "shift", text: "креветка — тоже «жучок»" } },
        { ch: "虽", py: "suī", t: 1, tr: "хотя", audio: "audio/sui1.mp3", stack: true,
          parts: [{ t: "口", sub: "рот" }, { t: "虫", rad: true }],
          noteR: "<b class=\"rad\">虫 — ключ «насекомое», здесь понизу.</b> В древней форме слова «хотя» (虽然) прячется жучок-змейка.",
          noteS: "<b class=\"pho\">口 «рот» сверху — старинная смысловая часть.</b> Звук suī части напрямую не дают: знак из серии «запомни как есть».", role: { cat: "form", text: "осталась древняя форма" } }
      ]
    },
    {
      ch: "言", py: "yán", t: 2, mean: "речь, слово", strokes: 7, kx: 149, audio: "audio/yan2.mp3",
      form: "讠", formName: "слово", pos: "слева",
      hint: "Точка, три горизонтальные черты и квадратик-ротик: слово начинается со звука!",
      ex: [
        { ch: "说", py: "shuō", t: 1, tr: "говорить", audio: "audio/shuo1.mp3", stack: false,
          parts: [{ t: "讠", rad: true }, { t: "兑", sub: "duì «менять»" }],
          noteR: "<b class=\"rad\">讠 — ключ «речь» слева.</b> Говорить, сказать, поговорить — всё про слова.",
          noteS: "<b class=\"pho\">兑 duì «менять» — фонетик.</b> Звук далеко ушёл (duì → shuō), но слог дала именно эта часть.", role: { cat: "sense", text: "дело речи — говорить" } },
        { ch: "话", py: "huà", t: 4, tr: "слово, речь", audio: "audio/hua4.mp3", stack: false,
          parts: [{ t: "讠", rad: true }, { t: "舌", sub: "shé «язык»" }],
          noteR: "<b class=\"rad\">讠 — ключ «речь».</b> 话 — сказанное слово, целая фраза: 电话 «телефон» = «электрическая речь»!",
          noteS: "<b class=\"pho\">舌 shé «язык» — смысловая часть.</b> Без языка не скажешь слова. Звуки shé и huà — дальняя родня.", role: { cat: "sense", text: "сказанное слово" } },
        { ch: "谢", py: "xiè", t: 4, tr: "спасибо", audio: "audio/xie4.mp3", stack: false,
          parts: [{ t: "讠", rad: true }, { t: "射", sub: "shè «стрелять»" }],
          noteR: "<b class=\"rad\">讠 — ключ «речь».</b> Благодарят словами: вежливый ключ для вежливого знака.",
          noteS: "<b class=\"pho\">射 shè «стрелять» — фонетик.</b> shè и xiè похожи: благодарность — стрела добрых слов.", role: { cat: "sense", text: "слова благодарности" } }
      ]
    }
  ];

  var TONE_NAMES = { 1: "1-й тон · красный", 2: "2-й тон · оранжевый", 3: "3-й тон · голубой", 4: "4-й тон · фиолетовый", 0: "нейтральный тон · серый" };
  var PRAISE = [
    "Мур-р! Идеальные черты!",
    "Кисть дрожит от восторга!",
    "Вот это каллиграфия!",
    "Синнабон жмёт лапу!",
    "Прекрасно! Ключ тебе покорился!",
    "Мастер бы гордился! Мяу!"
  ];
  var KOCO_LINES = [
    "Хе-хе! Смотри, как просто, когда знаешь секрет…",
    "Не смотри на посох — смотри на ключ!",
    "Магия? Пфф. Просто ключ умеет переодеваться.",
    "Не моргай — сейчас ключ сменит облик!",
    "Звёзды шепчут: этот ключ — твой любимый.",
    "Хитро придумано людьми, ничего не скажешь…"
  ];
  var NOTE_DEFAULT = "Собрано! Нажми на кубик — расскажу его роль";
  var FLOORS = ["hall", "inside", "practice", "tower", "final"];

  document.addEventListener("DOMContentLoaded", function () {
    var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    function sparkle(host, count) {
      if (!reducedMotion && window.HanziSite) {
        window.HanziSite.sparkBurst(host, { count: count || 40, colors: ["#29b6f6", "#cbb1fb", "#80e5dc", "#f4cc85"] });
      }
    }

    function toneClass(t) { return "tone-" + t; }

    function strokesLabel(n) {
      var d10 = n % 10;
      var d100 = n % 100;
      if (d10 === 1 && d100 !== 11) return n + " черта";
      if (d10 >= 2 && d10 <= 4 && (d100 < 10 || d100 >= 20)) return n + " черты";
      return n + " черт";
    }

    function play(el, audio, text) {
      if (window.HanziSite) {
        if (audio) window.HanziSite.playAudio(audio, 1, text);
        else window.HanziSite.speak(text, 0.85);
      }
      if (el) {
        el.classList.add("speaking");
        setTimeout(function () { el.classList.remove("speaking"); }, 900);
      }
    }

    function el(tag, cls, text) {
      var node = document.createElement(tag);
      if (cls) node.className = cls;
      if (text != null) node.textContent = text;
      return node;
    }

    var speakerSvg = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" aria-hidden="true"><path d="M11 5 6 9H3v6h3l5 4V5Z" stroke-linejoin="round"/><path d="M15 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14" stroke-linecap="round"/></svg>';

    function soundButton(audio, text, label) {
      var btn = el("button", "sound-button");
      btn.type = "button";
      btn.innerHTML = speakerSvg;
      btn.appendChild(el("span", null, label || "Послушать"));
      btn.addEventListener("click", function () { play(btn, audio, text); });
      return btn;
    }

    function probeInto(box, ch, py, mean) {
      if (!box) return;
      var token = (box._picToken = (box._picToken || 0) + 1);
      var sources = ["img/" + ch + ".jpg", "img/" + ch + "1.jpg", "img/" + ch + ".png", "img/" + ch + "1.png"];
      function attempt(i) {
        if (token !== box._picToken) return;
        var probe = new Image();
        probe.onload = function () {
          if (token !== box._picToken) return;
          var img = box.querySelector("img");
          if (!img) {
            img = document.createElement("img");
            box.appendChild(img);
          }
          img.alt = "Картинка: " + ch + " " + (py || "") + (mean ? " («" + mean + "»)" : "");
          img.src = sources[i];
        };
        probe.onerror = function () {
          if (token !== box._picToken) return;
          if (i + 1 < sources.length) attempt(i + 1);
          else {
            var img = box.querySelector("img");
            if (img) img.remove();
          }
        };
        probe.src = sources[i];
      }
      attempt(0);
    }

    function keyTile(key, index, compact) {
      var tile = el("button", "key-tile");
      tile.type = "button";
      tile.setAttribute("role", "listitem");
      tile.setAttribute("aria-label", "Ключ " + key.ch + " " + key.py + " («" + key.mean + "», " + strokesLabel(key.strokes) + "). Послушать произношение");
      tile.appendChild(el("span", "key-num", "№" + key.kx));
      tile.appendChild(el("span", "key-strokes", strokesLabel(key.strokes)));
      var hanzi = el("span", "key-hanzi", key.ch);
      hanzi.setAttribute("lang", "zh-CN");
      tile.appendChild(hanzi);
      tile.appendChild(el("span", "key-pinyin tone-text " + toneClass(key.t), key.py));
      tile.appendChild(el("span", "key-meaning", key.mean));
      tile.dataset.index = String(index);
      tile.addEventListener("click", function () {
        play(tile, key.audio, key.ch);
      });
      return tile;
    }

    var inited = {};

    var showFloor = (function () {
      var visited = {};
      var buttons = Array.prototype.slice.call(document.querySelectorAll(".floor-track button"));

      function setCurrent(id) {
        var idx = FLOORS.indexOf(id);
        buttons.forEach(function (btn, i) {
          btn.classList.toggle("current", i === idx);
          btn.classList.toggle("done", i < idx || (visited[i] && i !== idx));
          if (i === idx) btn.setAttribute("aria-current", "true");
          else btn.removeAttribute("aria-current");
        });
      }

      return function (id, noScroll) {
        FLOORS.forEach(function (fid) {
          var section = document.getElementById(fid);
          if (section) section.hidden = fid !== id;
        });
        visited[FLOORS.indexOf(id)] = true;
        setCurrent(id);
        var section = document.getElementById(id);
        if (section && !noScroll) section.scrollIntoView({ behavior: reducedMotion ? "auto" : "smooth", block: "start" });
        if (id === "inside" && !inited.inside) { inited.inside = true; initInside(); }
        if (id === "practice" && !inited.practice) { inited.practice = true; initPractice(); }
        else if (id === "practice") checkWriterSize();
        if (id === "tower" && !inited.tower) { inited.tower = true; initTower(); }
        if (id === "final" && !inited.final) { inited.final = true; initFinal(); }
        if (id === "final") saluteFinal();
      };
    })();

    Array.prototype.forEach.call(document.querySelectorAll(".floor-track button"), function (btn) {
      btn.addEventListener("click", function () { showFloor(btn.getAttribute("data-floor")); });
    });
    Array.prototype.forEach.call(document.querySelectorAll("[data-goto]"), function (btn) {
      btn.addEventListener("click", function () { showFloor(btn.getAttribute("data-goto")); });
    });

    var resetHall = function () {};
    var resetTower = function () {};

    (function initHall() {
      var strip = document.getElementById("hall-strip");
      var count = document.getElementById("hall-count");
      var bubble = document.getElementById("cinnabon-bubble");
      if (!strip) return;
      var bubbleOriginal = bubble ? bubble.innerHTML : "";
      var lit = {};
      var litCount = 0;
      var currentKey = 0;
      var picturesBox = document.getElementById("gd-pictures");

      function applyDetail(key, index) {
        currentKey = index;
        var glyph = document.getElementById("gd-glyph");
        if (!glyph) return;
        glyph.textContent = key.ch;
        var py = document.getElementById("gd-py");
        py.textContent = key.py;
        py.className = "reading tone-text " + toneClass(key.t);
        document.getElementById("gd-tone").textContent = TONE_NAMES[key.t];
        document.getElementById("gd-mean").textContent = key.mean;
        document.getElementById("gd-strokes").textContent = String(key.strokes);
        document.getElementById("gd-kx").textContent = "№" + key.kx + " из 214";
        document.getElementById("gd-form").textContent = key.form + " " + key.pos;
        document.getElementById("gd-num").textContent = "— ключ " + (index + 1) + " из 10 —";
        document.getElementById("gd-sound-label").textContent = "Послушать " + key.py;
        probeInto(picturesBox, key.ch, key.py, key.mean);
        Array.prototype.forEach.call(strip.children, function (tile, i) {
          tile.classList.toggle("active", i === index);
        });
      }

      var soundBtn = document.getElementById("gd-sound");
      if (soundBtn) {
        soundBtn.addEventListener("click", function () {
          play(soundBtn, KEYS[currentKey].audio, KEYS[currentKey].ch);
        });
      }

      var tiles = KEYS.map(function (key, i) {
        var tile = keyTile(key, i, true);
        tile.addEventListener("click", function () {
          if (!lit[i]) {
            lit[i] = true;
            litCount++;
            tile.classList.add("lit");
            sparkle(tile, 18);
            if (count) count.textContent = "Зажжено " + litCount + " из " + KEYS.length;
            if (litCount === KEYS.length) hallComplete();
          }
          applyDetail(key, i);
          play(tile, key.audio, key.ch);
        });
        strip.appendChild(tile);
        return tile;
      });
      function hallComplete() {
        var sign = document.querySelector(".workshop-sign");
        if (sign) sign.classList.add("sign-lit");
        if (bubble) bubble.innerHTML = "<p>Мур-р-р! Все десять ключей <b>зажжены</b> — вывеска сияет золотом! Мастерская открыта: поднимайся на <b>этаж 2</b> — там ключи идут в дело внутри настоящих иероглифов.</p>";
        var cta = document.querySelector("#hall .finale-actions .action-button");
        if (cta) cta.classList.add("pulse");
        var rack = document.getElementById("hall-rack");
        if (rack) sparkle(rack, 70);
      }
      resetHall = function () {
        lit = {};
        litCount = 0;
        tiles.forEach(function (tile) { tile.classList.remove("lit"); });
        if (count) count.textContent = "Зажжено 0 из " + KEYS.length;
        var sign = document.querySelector(".workshop-sign");
        if (sign) sign.classList.remove("sign-lit");
        if (bubble) bubble.innerHTML = bubbleOriginal;
        var cta = document.querySelector("#hall .finale-actions .action-button");
        if (cta) cta.classList.remove("pulse");
        applyDetail(KEYS[0], 0);
      };
      applyDetail(KEYS[0], 0);
    })();

    var selectInsideKey = null;

    function initInside() {
      var shelf = document.getElementById("inside-shelf");
      var panel = document.getElementById("inside-panel");
      if (!shelf || !panel) return;

      function makeExample(ex) {
        var card = el("div", "ip-ex");

        var build = el("div", "ip-build");

        var plate = el("div", "ip-plate");
        var qMark = el("span", "q", "?");
        var plateChar = el("span", "ch", ex.ch);
        plateChar.setAttribute("lang", "zh-CN");
        plateChar.hidden = true;
        plate.appendChild(qMark);
        plate.appendChild(plateChar);
        build.appendChild(plate);

        var partsBox = el("div", "ip-parts" + (ex.stack ? " stack" : ""));
        partsBox.setAttribute("lang", "zh-CN");
        partsBox.setAttribute("role", "group");
        partsBox.setAttribute("aria-label", "Собери иероглиф слова «" + ex.tr + "» из кубиков");
        var note = el("div", "ip-note", "Собери иероглиф слова «" + ex.tr + "»: нажимай кубики — в любом порядке!");
        note.setAttribute("role", "status");

        var info = el("div", "ip-ex-info veiled");
        var top = el("div", "ip-ex-top");
        top.appendChild(el("span", "ip-ex-py tone-text " + toneClass(ex.t), ex.py));
        top.appendChild(el("span", "ip-ex-tr", "«" + ex.tr + "»"));
        info.appendChild(top);
        info.appendChild(soundButton(ex.audio, ex.ch, "Послушать " + ex.py));

        var assembled = false;
        var left = ex.parts.length;

        function complete() {
          assembled = true;
          qMark.hidden = true;
          plateChar.hidden = false;
          plate.classList.add("assembled");
          info.classList.remove("veiled");
          info.classList.add("revealed");
          revealPicture();
          var seal = el("span", "stamp-seal", ex.ch);
          seal.setAttribute("lang", "zh-CN");
          seal.setAttribute("aria-hidden", "true");
          card.appendChild(seal);
          note.textContent = NOTE_DEFAULT;
          sparkle(plate, 30);
          play(null, ex.audio, ex.ch);
        }

        ex.parts.forEach(function (part, pi) {
          var radCls = part.rad ? "r-part" : "";
          if (part.rad && ex.role && ex.role.cat && ex.role.cat !== "sense") radCls += " rc-" + ex.role.cat;
          var span = el("span", radCls, part.t);
          if (ex.stack) span.classList.add("s-" + (pi + 1));
          span.setAttribute("tabindex", "0");
          span.setAttribute("role", "button");
          span.setAttribute("aria-label", (part.rad ? "Ключ" : "Часть") + " " + part.t);
          function onPart() {
            if (assembled) {
              Array.prototype.forEach.call(partsBox.children, function (s) { s.classList.remove("active"); });
              span.classList.add("active");
              note.innerHTML = part.rad ? ex.noteR : ex.noteS;
              sparkle(partsBox, 8);
              return;
            }
            if (span.classList.contains("done")) return;
            span.classList.add("done");
            left--;
            sparkle(span, 10);
            if (left <= 0) complete();
            else note.textContent = "Отлично! Осталось кубиков: " + left;
          }
          span.addEventListener("click", onPart);
          span.addEventListener("keydown", function (e) {
            if (e.key === "Enter" || e.key === " ") { e.preventDefault(); onPart(); }
          });
          partsBox.appendChild(span);
        });
        build.appendChild(partsBox);
        if (ex.role && ex.role.text) {
          var radPart = null;
          ex.parts.forEach(function (p) { if (p.rad && !radPart) radPart = p; });
          if (radPart) {
            var roles = el("div", "ip-roles");
            var chip = el("span", "ip-role cat-" + (ex.role.cat || "sense"));
            var chipKey = el("i", null, radPart.t);
            chipKey.setAttribute("lang", "zh-CN");
            chip.appendChild(chipKey);
            chip.appendChild(document.createTextNode(ex.role.text));
            roles.appendChild(chip);
            build.appendChild(roles);
          }
        }
        build.appendChild(info);
        build.appendChild(note);
        card.appendChild(build);

        var picBox = el("div", "ip-pictures veiled");
        card.appendChild(picBox);
        probeInto(picBox, ex.ch, ex.py, ex.tr);

        function revealPicture() {
          picBox.classList.remove("veiled");
          picBox.classList.add("revealed");
        }

        return card;
      }

      selectInsideKey = function (index) {
        var key = KEYS[index];
        panel.replaceChildren();
        var head = el("div", "ip-head");
        var full = el("span", "ip-full", key.ch);
        full.setAttribute("lang", "zh-CN");
        head.appendChild(full);
        head.appendChild(el("span", "ip-head-arrow", "→"));
        var form = el("span", "ip-form", key.form);
        form.setAttribute("lang", "zh-CN");
        head.appendChild(form);
        var meta = el("div", "ip-meta");
        meta.appendChild(el("span", "ip-form-name", "«" + key.formName + "» — облик в иероглифе"));
        meta.appendChild(el("span", "ip-pos", key.pos));
        head.appendChild(meta);
        head.appendChild(soundButton(key.audio, key.ch, key.py));
        panel.appendChild(head);

        var wordsBox = el("div", "ip-words");
        wordsBox.setAttribute("role", "list");
        wordsBox.setAttribute("aria-label", "Выбери слово и собери его иероглиф");
        var exBox = el("div");
        key.ex.forEach(function (ex, i) {
          var wordBtn = el("button", "ip-word");
          wordBtn.type = "button";
          wordBtn.setAttribute("role", "listitem");
          wordBtn.appendChild(el("span", "w-py tone-text " + toneClass(ex.t), ex.py));
          wordBtn.appendChild(el("span", "w-tr", ex.tr));
          wordBtn.addEventListener("click", function () {
            Array.prototype.forEach.call(wordsBox.children, function (b, bi) {
              b.classList.toggle("active", bi === i);
            });
            exBox.replaceChildren(makeExample(key.ex[i]));
            play(wordBtn, ex.audio, ex.ch);
          });
          wordsBox.appendChild(wordBtn);
        });
        panel.appendChild(wordsBox);
        panel.appendChild(exBox);
        wordsBox.children[0].classList.add("active");
        exBox.appendChild(makeExample(key.ex[0]));

        Array.prototype.forEach.call(shelf.children, function (tile, i) {
          tile.classList.toggle("active", i === index);
        });
      };

      KEYS.forEach(function (key, i) {
        var tile = el("button", "ip-tile");
        tile.type = "button";
        tile.setAttribute("role", "listitem");
        tile.setAttribute("aria-label", "Показать ключ " + key.ch + " " + key.py + " («" + key.mean + "»)");
        var hanzi = el("span", "t-hanzi", key.ch);
        hanzi.setAttribute("lang", "zh-CN");
        tile.appendChild(hanzi);
        var text = el("span", "t-text");
        text.appendChild(el("span", "t-py tone-text " + toneClass(key.t), key.py));
        text.appendChild(el("span", "t-mean", key.mean));
        tile.appendChild(text);
        tile.addEventListener("click", function () {
          selectInsideKey(i);
          play(tile, key.audio, key.ch);
        });
        shelf.appendChild(tile);
      });

      selectInsideKey(0);
    }

    var selectPracticeKey = null;
    var checkWriterSize = function () {};

    function initPractice() {
      var select = document.getElementById("writer-select");
      var target = document.getElementById("writer-target");
      var status = document.getElementById("w-status");
      var progress = document.getElementById("w-progress");
      var dotsBox = document.getElementById("w-dots");
      var success = document.getElementById("w-success");
      if (!select || !target) return;

      var writer = null;
      var writerChar = "";
      var writerSize = 0;
      var loadFailed = false;
      var quizVersion = 0;
      var completeTimer = null;
      var resizeTimer = null;
      var dots = [];

      function setDotsCount(n) {
        dotsBox.replaceChildren();
        dots = [];
        for (var i = 0; i < n; i++) {
          var s = el("span");
          dotsBox.appendChild(s);
          dots.push(s);
        }
      }

      function setProgress(count, total) {
        progress.textContent = "Черта " + count + " из " + total;
        dots.forEach(function (dot, index) { dot.classList.toggle("done", index < count); });
      }

      function startQuiz() {
        if (!writer || loadFailed) { createWriter(); return; }
        var total = KEYS[currentKey].strokes;
        var version = ++quizVersion;
        clearTimeout(completeTimer);
        writer.cancelQuiz();
        writer.resumeAnimation();
        success.hidden = true;
        setProgress(0, total);
        status.textContent = "Обведи ключ пальцем или мышкой";
        writer.quiz({
          onCorrectStroke: function (data) {
            if (version !== quizVersion) return;
            setProgress(data.strokeNum + 1, total);
            status.textContent = "Отлично! Продолжай";
            sparkle(target, 12);
          },
          onMistake: function (data) {
            if (version !== quizVersion) return;
            status.textContent = "Попробуй черту №" + (data.strokeNum + 1) + " ещё раз. Кнопка «Показать черты» поможет";
          },
          onComplete: function () {
            if (version !== quizVersion) return;
            setProgress(total, total);
            var praise = PRAISE[Math.floor(Math.random() * PRAISE.length)];
            status.textContent = "Ключ " + KEYS[currentKey].ch + " написан верно!";
            success.textContent = praise + " " + KEYS[currentKey].ch + " «" + KEYS[currentKey].mean + "» (" + KEYS[currentKey].py + ") написан безупречно!";
            success.hidden = false;
            sparkle(target, 60);
            completeTimer = setTimeout(function () { if (version === quizVersion) sparkle(target, 25); }, 300);
          }
        });
      }

      function createWriter() {
        quizVersion++;
        clearTimeout(completeTimer);
        if (!window.HanziWriter) {
          status.textContent = "Тренажёр не загрузился. Проверь интернет и обнови страницу";
          return;
        }
        var key = KEYS[currentKey];
        if (writer) { writer.cancelQuiz(); writer.pauseAnimation(); }
        target.replaceChildren();
        loadFailed = false;
        var size = target.clientWidth || 200;
        writerSize = size;
        writerChar = key.ch;
        writer = HanziWriter.create(target, key.ch, {
          width: size,
          height: size,
          padding: 10,
          showOutline: true,
          strokeColor: "#29b6f6",
          outlineColor: "#dacbb4",
          drawingColor: "#0288d1",
          highlightColor: "#b3e5fc",
          highlightCompleteColor: "#29b6f6",
          onLoadCharDataError: function () {
            loadFailed = true;
            status.textContent = "Не удалось загрузить черты. Проверь интернет и выбери ключ заново";
          }
        });
        startQuiz();
      }

      var currentKey = 0;

      selectPracticeKey = function (index) {
        currentKey = index;
        var key = KEYS[index];
        document.getElementById("w-char").textContent = key.ch;
        document.getElementById("w-badge").textContent = strokesLabel(key.strokes);
        document.getElementById("w-hint").textContent = key.hint;
        Array.prototype.forEach.call(select.children, function (tile, i) {
          tile.classList.toggle("active", i === index);
        });
        setDotsCount(key.strokes);
        setProgress(0, key.strokes);
        success.hidden = true;
        createWriter();
      };

      KEYS.forEach(function (key, i) {
        var tile = el("button", "sel-tile");
        tile.type = "button";
        tile.setAttribute("role", "listitem");
        tile.setAttribute("aria-label", "Выбрать ключ " + key.ch + " " + key.py);
        var hanzi = el("span", "s-hanzi", key.ch);
        hanzi.setAttribute("lang", "zh-CN");
        tile.appendChild(hanzi);
        tile.appendChild(el("span", "s-py tone-text " + toneClass(key.t), key.py));
        tile.addEventListener("click", function () {
          selectPracticeKey(i);
          play(tile, key.audio, key.ch);
        });
        select.appendChild(tile);
      });

      document.getElementById("w-retry").addEventListener("click", startQuiz);
      document.getElementById("w-animate").addEventListener("click", function () {
        if (!writer || loadFailed) { createWriter(); return; }
        var version = ++quizVersion;
        clearTimeout(completeTimer);
        writer.cancelQuiz();
        writer.resumeAnimation();
        success.hidden = true;
        setProgress(0, KEYS[currentKey].strokes);
        status.textContent = "Смотри порядок черт";
        writer.animateCharacter({
          onComplete: function () {
            if (version !== quizVersion) return;
            status.textContent = "Теперь твоя очередь — нажми «Попробовать заново»";
          }
        });
      });

      window.addEventListener("resize", function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(function () {
          if (writer && target.clientWidth > 0 && Math.abs(target.clientWidth - writerSize) > 1) createWriter();
        }, 150);
      });
      checkWriterSize = function () {
        if (writer && target.clientWidth > 0 && Math.abs(target.clientWidth - writerSize) > 1) createWriter();
      };
      document.addEventListener("visibilitychange", function () {
        if (!writer) return;
        if (document.hidden) writer.pauseAnimation();
        else writer.resumeAnimation();
      });

      selectPracticeKey(0);
    }

    var salutedFinal = false;

    function initTower() {
      var shelf = document.getElementById("tower-runes");
      var scroll = document.getElementById("tower-scroll");
      if (!shelf || !scroll) return;
      var count = document.getElementById("tower-count");
      var line = document.getElementById("tower-line");
      var gate = document.getElementById("tower-gate");
      var cast = {};
      var castCount = 0;
      var START_LINE = "Выбери руну — и я приоткрою её тайну. Хе-хе!";

      function say(text) { if (line) line.textContent = text; }

      function buildScroll(key) {
        var box = el("div", null);

        var head = el("div", "ts-head");
        var glyph = el("span", "ts-glyph", key.ch);
        glyph.setAttribute("lang", "zh-CN");
        var meta = el("div", "ts-meta");
        meta.appendChild(el("span", "ts-py tone-text " + toneClass(key.t), key.py));
        meta.appendChild(el("span", "ts-mean", key.mean));
        head.appendChild(glyph);
        head.appendChild(meta);
        head.appendChild(soundButton(key.audio, key.ch, "Послушать " + key.py));
        box.appendChild(head);

        var morph = el("div", "ts-morph");
        var full = el("i", null, key.ch);
        full.setAttribute("lang", "zh-CN");
        morph.appendChild(full);
        if (key.form !== key.ch) {
          morph.appendChild(el("span", "ts-arrow", "→"));
          var form = el("i", null, key.form);
          form.setAttribute("lang", "zh-CN");
          morph.appendChild(form);
        }
        box.appendChild(morph);

        var note = el("p", "ts-form-note");
        if (key.form !== key.ch) {
          note.innerHTML = "<b>Фокус превращения:</b> ключ «" + key.mean + "» надевает облик <b>" + key.form + "</b> («" + key.formName + "») и встаёт " + key.pos + ".";
        } else {
          note.innerHTML = "<b>Фокус превращения:</b> этот ключ не переодевается — «" + key.mean + "» остаётся собой («" + key.formName + "», " + key.pos + ").";
        }
        box.appendChild(note);

        var dl = el("dl", "ts-details");
        var rows = [["Черт", strokesLabel(key.strokes)], ["В словаре", "№" + key.kx + " из 214"], ["Слов на этаже 2", String(key.ex.length)]];
        rows.forEach(function (row) {
          var d = el("div", "detail");
          d.appendChild(el("dt", null, row[0]));
          d.appendChild(el("dd", null, row[1]));
          dl.appendChild(d);
        });
        box.appendChild(dl);

        var ex = key.ex[0];
        var word = el("div", "ts-word");
        var wch = el("span", "w-ch", ex.ch);
        wch.setAttribute("lang", "zh-CN");
        var wmeta = el("div", "w-meta");
        wmeta.appendChild(el("span", "w-py tone-text " + toneClass(ex.t), ex.py));
        wmeta.appendChild(el("span", "w-tr", ex.tr));
        word.appendChild(wch);
        word.appendChild(wmeta);
        word.appendChild(soundButton(ex.audio, ex.ch, "Слово"));
        box.appendChild(word);

        var pic = el("div", "ts-pic");
        probeInto(pic, ex.ch, ex.py, ex.tr);
        box.appendChild(pic);

        return box;
      }

      function castRune(key, tile) {
        scroll.replaceChildren(buildScroll(key));
        play(tile, key.audio, key.ch);
        if (cast[key.ch]) {
          sparkle(tile, 16);
          say(cast[key.ch]);
          return;
        }
        cast[key.ch] = KOCO_LINES[Math.floor(Math.random() * KOCO_LINES.length)];
        castCount++;
        tile.classList.add("done");
        count.textContent = "Заклинаний освоено " + castCount + " из " + KEYS.length;
        sparkle(tile, 34);
        say(cast[key.ch]);
        if (castCount === KEYS.length) {
          [0, 380, 760].forEach(function (delay) {
            setTimeout(function () { sparkle(scroll, 50); }, delay);
          });
          say("Хе-хе-хе! Все десять заклинаний твои. Ступай на финальный этаж — Синнабон ждёт с грамотой!");
          gate.disabled = false;
          gate.classList.remove("gate-locked");
          gate.classList.add("pulse");
        }
      }

      KEYS.forEach(function (key) {
        var tile = el("button", "tower-rune");
        tile.type = "button";
        tile.setAttribute("role", "listitem");
        tile.setAttribute("aria-label", "Заклинание ключа " + key.ch + " " + key.py + " («" + key.mean + "»)");
        var hanzi = el("span", "r-hanzi", key.ch);
        hanzi.setAttribute("lang", "zh-CN");
        tile.appendChild(hanzi);
        tile.appendChild(el("span", "r-py", key.py));
        tile.addEventListener("click", function () { castRune(key, tile); });
        shelf.appendChild(tile);
      });

      say(START_LINE);

      resetTower = function () {
        cast = {};
        castCount = 0;
        Array.prototype.forEach.call(shelf.querySelectorAll(".tower-rune"), function (tile) {
          tile.classList.remove("done");
        });
        count.textContent = "Заклинаний освоено 0 из " + KEYS.length;
        scroll.replaceChildren(el("p", "ts-empty", "Свиток пока пуст… Выбери руну слева!"));
        gate.disabled = true;
        gate.classList.add("gate-locked");
        gate.classList.remove("pulse");
        say(START_LINE);
      };
    }

    function saluteFinal() {
      if (salutedFinal) return;
      salutedFinal = true;
      var box = document.getElementById("diploma");
      if (!box) return;
      [0, 380, 760].forEach(function (delay) {
        setTimeout(function () { sparkle(box, 50); }, delay);
      });
    }

    function initFinal() {
      var box = document.getElementById("diploma");
      if (!box || box.childElementCount) return;

      box.appendChild(el("h3", "dip-title", "Грамота подмастерья"));
      box.appendChild(el("p", "dip-sub", "Мастерская ключей · Урок 1 завершён"));

      var grid = el("div", "dip-grid");
      KEYS.forEach(function (key) {
        var tile = el("button", "dip-key");
        tile.type = "button";
        tile.setAttribute("aria-label", "Ключ " + key.ch + " " + key.py + " («" + key.mean + "»). Послушать");
        var h = el("span", "d-hanzi", key.ch);
        h.setAttribute("lang", "zh-CN");
        tile.appendChild(h);
        tile.appendChild(el("span", "d-py tone-text " + toneClass(key.t), key.py));
        tile.appendChild(el("span", "d-mean", key.mean));
        tile.addEventListener("click", function () { play(tile, key.audio, key.ch); });
        grid.appendChild(tile);
      });
      box.appendChild(grid);

      var foot = el("div", "dip-foot");
      foot.appendChild(el("span", "dip-date", new Date().toLocaleDateString("ru-RU")));
      var seal = el("span", "dip-seal");
      var sealImg = document.createElement("img");
      sealImg.src = "assets/cinnabon.svg";
      sealImg.alt = "Печать мастера Синнабона";
      seal.appendChild(sealImg);
      foot.appendChild(seal);
      foot.appendChild(el("span", "dip-sign", "猫 мяу"));
      box.appendChild(foot);

      var restart = document.getElementById("restart-btn");
      restart.addEventListener("click", function () {
        resetHall();
        if (selectPracticeKey) selectPracticeKey(0);
        if (selectInsideKey) selectInsideKey(0);
        resetTower();
        salutedFinal = false;
        showFloor("hall");
      });
    }

    showFloor("hall", true);
  });
})();
