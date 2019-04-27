const Words = [
  {
    "key": 1,
    "word": "a",
    "meaning": "一つの",
    "definition_ja": "検討中のもの",
    "definition_en": "something that is being considered",
    "audio": "<audio autoplay controls src=\"data:audio/mpeg;base64,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h800kefHAiFrzWJL2d96+PqxyHDlhHL34ZG5UHBARBJPcoJZ4tUBv/////////////NExAoSWx60AcU4AP/////1R/7Vb2X6HIx46hqVQgvOGxCNhKEwYPNKDxMmeg6wqGWLDU0kLSQ2LDI6efLgsFhg+SH5YSBHKOcJA4oMjKP////////////zP/f/81Vc//NExBMSayKsADgWvFtrmFl6479prcumTio8G5a1E4XPNTVQxMFV1zaDUrIJcoHcP5qYFdrokkiATU949E8rJtliq8UNS7f//////5seeUv//+7///r+qm//0V+lXSlN//NExBwSaxasAFBOuSrnmHuZV88aHmGZpBCJdCJEcFxM4kOiScPkzB4UwWkgqOnjUeG8cNAuIgVKMKoDiyO3//////gBHI0VrN+X+iU7f//o93b6fp6p5S5crPNcnrHu//NExCURWxKsAChKufMcOuUc4vKcYKBABFMKjEA5Q6IhAcOEwgUPq09jCUc9VU9mOfiEN750N8OhrtnEFX2lAIFlFJvox6Ke+pN/qo3G7mGj9qn2V//cjhz/////9//+//NExDIRUqawAHnEuO2mn/+b+XoZ/oBHlB2g8gO5YOoVbz+VQUKRc0I1l6otfbAatF+u1VM6O924/lNl8cf6XdqWf4NKdaq6LWMbtF4TNXGi1TcW2WVzL4mmU3PphlHp//NExD8SaTKoAMYWcPpIqc//7vr///9afnnaQmjO6mxibyctggkBNpOHyUBEE3SkXIjlgdr1lfzCvVNr5d+I5OXk6G86g6Da7JDv1vYaR5BnjzX9NHuMJe/+h3////6q//NExEgSWTKoAMTWcAN1c+/t6kF626AEKjN+UBHwMUW0RdBx6J84LJaxHHlTND067R/mvk0fMD4IJeA+I294yiHvr1y2srUPKqes9fDMrFZP9cBf////8jSqVX0XcCNH//NExFESiSqoAMTWcKPwBtzbDvNaSYM9Yehi2e77UufhHcNZ0PP1Br3Nr/I/2m7VChqlyBGgXXDxvJwlZGXM9SDP7PUv//V/////okYxJrA9Tog4DbFeeqQ5BfRrtNMr//NExFkRcSqsAH4ScLrWsGQT3eQZa79Ja79Tf8sb+l/rEbee5/wGWRvjEDVrhIqI1bL+KQFYDRUKTt6t8k6rt/oqf2/SIdVW5YEo1u7nhTQKrErL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ADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKwAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKwAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKwAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVTEFNRTMu//NExKwAAANIAAAAADk5LjVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV//NExKwAAANIAAAAAFVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVVV\">\n  The “audio” tag is not supported by your browser.\n</audio>"
  },
  {
    "key": 2,
    "word": "able",
    "meaning": "できる",
    "definition_ja": "何かをする力、スキル、お金、または手段を持っている",
    "definition_en": "having the power, skill, money, or means to do something",
    "audio": ""
  },
  {
    "key": 3,
    "word": "about",
    "meaning": "だいたい",
    "definition_ja": "の主題について、または何かについて",
    "definition_en": "on the subject of, or concerning something",
    "audio": ""
  },
  {
    "key": 4,
    "word": "absolutely",
    "meaning": "絶対に",
    "definition_ja": "完全に",
    "definition_en": "completely",
    "audio": ""
  },
  {
    "key": 5,
    "word": "accept",
    "meaning": "受け入れる",
    "definition_ja": "提供されたものを受け取るか受け取る",
    "definition_en": "to receive or take something that is offered",
    "audio": ""
  },
  {
    "key": 6,
    "word": "account",
    "meaning": "アカウント",
    "definition_ja": "何かについての話やレポート",
    "definition_en": "a story or report about something",
    "audio": ""
  },
  {
    "key": 7,
    "word": "across",
    "meaning": "向かい",
    "definition_ja": "一方から他方へ",
    "definition_en": "from one side to the other of something",
    "audio": ""
  },
  {
    "key": 8,
    "word": "action",
    "meaning": "アクション",
    "definition_ja": "人がすること",
    "definition_en": "something that a person does",
    "audio": ""
  },
  {
    "key": 9,
    "word": "actually",
    "meaning": "実は",
    "definition_ja": "状況の真実を言っているときに使われる",
    "definition_en": "used when you are saying what is the truth of a situation",
    "audio": ""
  },
  {
    "key": 10,
    "word": "add",
    "meaning": "追加する",
    "definition_ja": "別のものと一緒に何かをまとめるため",
    "definition_en": "to put something together with another thing",
    "audio": ""
  },
  {
    "key": 11,
    "word": "address",
    "meaning": "住所",
    "definition_ja": "建物の場所を説明するために使用され、その場所に郵送できるように、手紙、封筒、およびパッケージに書かれている単語と数字",
    "definition_en": "the words and numbers that are used to describe the location of a building and that are written on letters, envelopes, and packages so that they can be mailed to that location",
    "audio": ""
  },
  {
    "key": 12,
    "word": "affect",
    "meaning": "影響する",
    "definition_ja": "誰かまたは何かに影響を与えるため",
    "definition_en": "to make an effect on someone or something",
    "audio": ""
  },
  {
    "key": 13,
    "word": "after",
    "meaning": "後に",
    "definition_ja": "時間を追って、後で",
    "definition_en": "following in time, at a later time",
    "audio": ""
  },
  {
    "key": 14,
    "word": "afternoon",
    "meaning": "午後",
    "definition_ja": "一日の真ん中：正午から夕方までの一日のうちの一部",
    "definition_en": "the middle part of the day : the part of the day between noon and evening",
    "audio": ""
  },
  {
    "key": 15,
    "word": "again",
    "meaning": "再び",
    "definition_ja": "もう一度、もう一度",
    "definition_en": "one more time, once more",
    "audio": ""
  },
  {
    "key": 16,
    "word": "against",
    "meaning": "に対して",
    "definition_ja": "反対に",
    "definition_en": "in opposition to",
    "audio": ""
  },
  {
    "key": 17,
    "word": "age",
    "meaning": "年齢",
    "definition_ja": "人が住んでいた時間の量",
    "definition_en": "the amount of time a person has lived",
    "audio": ""
  },
  {
    "key": 18,
    "word": "ago",
    "meaning": "前",
    "definition_ja": "過去には",
    "definition_en": "in the past",
    "audio": ""
  },
  {
    "key": 19,
    "word": "agree",
    "meaning": "同意する",
    "definition_ja": "何かについての同じ意見に",
    "definition_en": "to  the same opinion about something",
    "audio": ""
  },
  {
    "key": 20,
    "word": "ahead",
    "meaning": "先に",
    "definition_ja": "正面または正面に",
    "definition_en": "in or toward the front",
    "audio": ""
  },
  {
    "key": 21,
    "word": "air",
    "meaning": "空気",
    "definition_ja": "私達が吸うガスの見えない混合物",
    "definition_en": "the invisible mixture of gases that we breathe",
    "audio": ""
  },
  {
    "key": 22,
    "word": "all",
    "meaning": "すべて",
    "definition_ja": "全体、全体、または合計金額",
    "definition_en": "the whole, entire or total amount",
    "audio": ""
  },
  {
    "key": 23,
    "word": "allow",
    "meaning": "許可する",
    "definition_ja": "許可または許容できるものとして扱う",
    "definition_en": "to permit or treat as acceptable",
    "audio": ""
  },
  {
    "key": 24,
    "word": "almost",
    "meaning": "ほとんど",
    "definition_ja": "ほんの少し、ほんの少し、ほんの少し",
    "definition_en": "only a little less than, nearly, not quite",
    "audio": ""
  },
  {
    "key": 25,
    "word": "along",
    "meaning": "に沿って",
    "definition_ja": "ある点で",
    "definition_en": "at a point on something",
    "audio": ""
  },
  {
    "key": 26,
    "word": "already",
    "meaning": "既に",
    "definition_ja": "この時期の前に",
    "definition_en": "before this time",
    "audio": ""
  },
  {
    "key": 27,
    "word": "alright",
    "meaning": "大丈夫",
    "definition_ja": "それほど良くはありませんが、十分に良いです。安全かまあまあ",
    "definition_en": "good enough, although not very good; safe or well",
    "audio": ""
  },
  {
    "key": 28,
    "word": "also",
    "meaning": "また",
    "definition_ja": "また、同様に、",
    "definition_en": "in addition, too, in a similar way",
    "audio": ""
  },
  {
    "key": 29,
    "word": "although",
    "meaning": "だが",
    "definition_ja": "という事実にもかかわらず、",
    "definition_en": "despite the fact that, however,",
    "audio": ""
  },
  {
    "key": 30,
    "word": "always",
    "meaning": "常に",
    "definition_ja": "常に",
    "definition_en": "at all times",
    "audio": ""
  },
  {
    "key": 31,
    "word": "amount",
    "meaning": "量",
    "definition_ja": "何かの量",
    "definition_en": "a quantity of something",
    "audio": ""
  },
  {
    "key": 32,
    "word": "and",
    "meaning": "そして",
    "definition_ja": "単語または単語のグループを結合するために使用される",
    "definition_en": "used to join words or groups of words",
    "audio": ""
  },
  {
    "key": 33,
    "word": "another",
    "meaning": "別の",
    "definition_ja": "さらにもう一つ",
    "definition_en": "one more in addition",
    "audio": ""
  },
  {
    "key": 34,
    "word": "answer",
    "meaning": "回答",
    "definition_ja": "誰かが尋ねた質問に対する反応",
    "definition_en": "a reaction to a question someone asks",
    "audio": ""
  },
  {
    "key": 35,
    "word": "any",
    "meaning": "どれか",
    "definition_ja": "特定または特定ではない何かを指すために使用されていました",
    "definition_en": "used to refer to something not particular or specific",
    "audio": ""
  },
  {
    "key": 36,
    "word": "anybody",
    "meaning": "だれでも",
    "definition_ja": "誰でも：誰でも",
    "definition_en": "any person : anyone",
    "audio": ""
  },
  {
    "key": 37,
    "word": "anyone",
    "meaning": "誰でも",
    "definition_ja": "誰でも",
    "definition_en": "any person",
    "audio": ""
  },
  {
    "key": 38,
    "word": "anything",
    "meaning": "何でも",
    "definition_ja": "どんな種類のものでも、ものを指すのに使用され、",
    "definition_en": "a thing of any kind, used to refer to a thing, no matter what",
    "audio": ""
  },
  {
    "key": 39,
    "word": "anyway",
    "meaning": "とにかく",
    "definition_ja": "前に述べたことがあるにもかかわらず",
    "definition_en": "despite something that has been stated before",
    "audio": ""
  },
  {
    "key": 40,
    "word": "apply",
    "meaning": "適用する",
    "definition_ja": "仕事などの正式な依頼をする",
    "definition_en": "to ask formally for something such as a job",
    "audio": ""
  },
  {
    "key": 41,
    "word": "area",
    "meaning": "エリア",
    "definition_ja": "広い場所にある部分またはセクション",
    "definition_en": "a part or section in a large place",
    "audio": ""
  },
  {
    "key": 42,
    "word": "around",
    "meaning": "まわり",
    "definition_ja": "四方または何かに沿って位置する",
    "definition_en": "located on every side or along something",
    "audio": ""
  },
  {
    "key": 43,
    "word": "as",
    "meaning": "として",
    "definition_ja": "同じ程度または量を指すのに使用される",
    "definition_en": "used to refer to the same degree or amount",
    "audio": ""
  },
  {
    "key": 44,
    "word": "ask",
    "meaning": "尋ねる",
    "definition_ja": "要求する",
    "definition_en": "to request",
    "audio": ""
  },
  {
    "key": 45,
    "word": "at",
    "meaning": "で",
    "definition_ja": "場所、場所、または到着を示すために使用されます",
    "definition_en": "used to indicate place, location, or arrival",
    "audio": ""
  },
  {
    "key": 46,
    "word": "available",
    "meaning": "利用可能",
    "definition_ja": "何かがあるときは簡単に使えるように",
    "definition_en": "when something is there to be used easily",
    "audio": ""
  },
  {
    "key": 47,
    "word": "aware",
    "meaning": "承知して",
    "definition_ja": "何かが存在することを知っている、または感じている",
    "definition_en": "knowing or feeling that something exists",
    "audio": ""
  },
  {
    "key": 48,
    "word": "away",
    "meaning": "離れて",
    "definition_ja": "特定の人や場所から離れた場所に",
    "definition_en": "at a distance from a particular person or place",
    "audio": ""
  },
  {
    "key": 49,
    "word": "awful",
    "meaning": "ひどい",
    "definition_ja": "非常に悪い、低品質、または不快な",
    "definition_en": "very bad, of low quality, or unpleasant",
    "audio": ""
  },
  {
    "key": 50,
    "word": "baby",
    "meaning": "赤ちゃん",
    "definition_ja": "とても幼い子供",
    "definition_en": "a very young child",
    "audio": ""
  },
  {
    "key": 51,
    "word": "back",
    "meaning": "バック",
    "definition_ja": "何かの背面",
    "definition_en": "the rear surface of something",
    "audio": ""
  },
  {
    "key": 52,
    "word": "bad",
    "meaning": "悪い",
    "definition_ja": "品質が低いまたは悪い、正しくないまたは適切ではない",
    "definition_en": "low or poor in quality, not correct or proper",
    "audio": ""
  },
  {
    "key": 53,
    "word": "bag",
    "meaning": "バッグ",
    "definition_ja": "薄い材料（紙、プラスチック、布など）で作られた容器で、上部が開いており、物を持ったり運んだりするのに使用されます。",
    "definition_en": "a container made of thin material (such as paper, plastic, or cloth) that opens at the top and is used for holding or carrying things",
    "audio": ""
  },
  {
    "key": 54,
    "word": "base",
    "meaning": "ベース",
    "definition_ja": "何かの一番下または一番下の部分：何かが置かれているかサポートされている部分",
    "definition_en": "the bottom or lowest part of something : the part on which something rests or is supported",
    "audio": ""
  },
  {
    "key": 55,
    "word": "basically",
    "meaning": "基本的に",
    "definition_ja": "最も重要なまたは基本的な方法で",
    "definition_en": "in the most important or fundamental ways",
    "audio": ""
  },
  {
    "key": 56,
    "word": "be",
    "meaning": "ある",
    "definition_ja": "物のアイデンティティを示すために使用されます",
    "definition_en": "used to show the identity of a thing",
    "audio": ""
  },
  {
    "key": 57,
    "word": "bear",
    "meaning": "くま",
    "definition_ja": "困難を受け入れるか耐える",
    "definition_en": "to accept or endure difficulties",
    "audio": ""
  },
  {
    "key": 58,
    "word": "because",
    "meaning": "なぜなら",
    "definition_ja": "理由で",
    "definition_en": "for a reason",
    "audio": ""
  },
  {
    "key": 59,
    "word": "become",
    "meaning": "になる",
    "definition_ja": "になり始める、になる、に成長する",
    "definition_en": "to begin to be, grow to be, develop into",
    "audio": ""
  },
  {
    "key": 60,
    "word": "bed",
    "meaning": "ベッド",
    "definition_ja": "人々が眠る家具",
    "definition_en": "a piece of furniture that people sleep on",
    "audio": ""
  },
  {
    "key": 61,
    "word": "before",
    "meaning": "前",
    "definition_ja": "早い時期に",
    "definition_en": "at an earlier time, in front of",
    "audio": ""
  },
  {
    "key": 62,
    "word": "begin",
    "meaning": "ベギン",
    "definition_ja": "アクションの最初の部分を実行する、開始する",
    "definition_en": "to do the first part of an action, to start",
    "audio": ""
  },
  {
    "key": 63,
    "word": "behind",
    "meaning": "後ろに",
    "definition_ja": "後ろまたは後ろに",
    "definition_en": "in or toward the back",
    "audio": ""
  },
  {
    "key": 64,
    "word": "believe",
    "meaning": "信じる",
    "definition_ja": "何かが真実であることを受け入れるために",
    "definition_en": "to accept that something is true",
    "audio": ""
  },
  {
    "key": 65,
    "word": "benefit",
    "meaning": "恩恵",
    "definition_ja": "良い結果や効果、何か役に立つもの",
    "definition_en": "a good result or effect, something helpful",
    "audio": ""
  },
  {
    "key": 66,
    "word": "bet",
    "meaning": "ベット",
    "definition_ja": "ゲーム、競争などの結果として金銭を危険にさらすため",
    "definition_en": "to risk money on the result of a game, competition, etc.",
    "audio": ""
  },
  {
    "key": 67,
    "word": "between",
    "meaning": "の間に",
    "definition_ja": "物に分かれる空間に",
    "definition_en": "in the space that separates to objects",
    "audio": ""
  },
  {
    "key": 68,
    "word": "big",
    "meaning": "大きい",
    "definition_ja": "サイズまたは範囲が大きい",
    "definition_en": "large in size or extent",
    "audio": ""
  },
  {
    "key": 69,
    "word": "bill",
    "meaning": "ビル",
    "definition_ja": "あなたが購入または使用した何かのためにあなたがどれだけのお金を借りているかを述べている文書",
    "definition_en": "a document that says how much money you owe for something you have bought or used",
    "audio": ""
  },
  {
    "key": 70,
    "word": "bit",
    "meaning": "ビット",
    "definition_ja": "何かの小片",
    "definition_en": "a small piece of something",
    "audio": ""
  },
  {
    "key": 71,
    "word": "black",
    "meaning": "黒",
    "definition_ja": "非常に濃い色の石炭または夜空を持つ",
    "definition_en": "having the very dark color of coal or the night sky",
    "audio": ""
  },
  {
    "key": 72,
    "word": "bloody",
    "meaning": "血まみれの",
    "definition_ja": "血で覆われている。暴力的で大量の血とけがを伴う",
    "definition_en": "covered in blood; violent and involving a lot of blood and injuries",
    "audio": ""
  },
  {
    "key": 73,
    "word": "board",
    "meaning": "ボード",
    "definition_ja": "長くて薄くて平らな木片",
    "definition_en": "a long, thin, flat piece of wood",
    "audio": ""
  },
  {
    "key": 74,
    "word": "body",
    "meaning": "体",
    "definition_ja": "人の肉体的自己",
    "definition_en": "a person's physical self",
    "audio": ""
  },
  {
    "key": 75,
    "word": "book",
    "meaning": "本",
    "definition_ja": "一緒に綴じられており、表紙が付いている印刷または書かれた作品",
    "definition_en": "a printed or written work that is bound together and has a cover",
    "audio": ""
  },
  {
    "key": 76,
    "word": "both",
    "meaning": "両方",
    "definition_ja": "2つのことを同時に強調していた",
    "definition_en": "used to emphasis two things at the same time",
    "audio": ""
  },
  {
    "key": 77,
    "word": "bother",
    "meaning": "気にする",
    "definition_ja": "誰かを心配させたり動揺させたりする",
    "definition_en": "to make someone feel worried or upset",
    "audio": ""
  },
  {
    "key": 78,
    "word": "bottom",
    "meaning": "底",
    "definition_ja": "最も低い部分、ポイント、または何かのレベル",
    "definition_en": "the lowest part, point, or level of something",
    "audio": ""
  },
  {
    "key": 79,
    "word": "box",
    "meaning": "ボックス",
    "definition_ja": "硬い素材（木材、金属、段ボールなど）でできていて、通常4つのまっすぐな側面を持つ容器",
    "definition_en": "a container that is made of a hard material (such as wood, metal, or cardboard) and that usually has four straight sides",
    "audio": ""
  },
  {
    "key": 80,
    "word": "boy",
    "meaning": "男の子",
    "definition_ja": "男性の子供や若者、若い男",
    "definition_en": "a male child or youth, a young man",
    "audio": ""
  },
  {
    "key": 81,
    "word": "break",
    "meaning": "ブレーク",
    "definition_ja": "バラバラに",
    "definition_en": "to separate into pieces",
    "audio": ""
  },
  {
    "key": 82,
    "word": "breath",
    "meaning": "呼吸",
    "definition_ja": "呼吸したときに肺に取り込んで肺から送り出す空気",
    "definition_en": "the air that you take into your lungs and send out from your lungs when you breathe",
    "audio": ""
  },
  {
    "key": 83,
    "word": "brief",
    "meaning": "簡単な",
    "definition_ja": "持続し、短期間しかない",
    "definition_en": "lasting , having only a short period of time",
    "audio": ""
  },
  {
    "key": 84,
    "word": "bring",
    "meaning": "持参",
    "definition_ja": "場所に連れて行ったり、行ったりする",
    "definition_en": "to take or go with to a place,",
    "audio": ""
  },
  {
    "key": 85,
    "word": "brother",
    "meaning": "兄",
    "definition_ja": "あなたと同じ両親の一方または両方を持つ少年または男性",
    "definition_en": "a boy or man who has one or both of the same parents as you",
    "audio": ""
  },
  {
    "key": 86,
    "word": "budget",
    "meaning": "予算",
    "definition_ja": "あなたがあなたのお金をどのように使うかの計画。あなたが何かのために持っている金額",
    "definition_en": "a plan of how you will spend your money; the amount of money you have for something",
    "audio": ""
  },
  {
    "key": 87,
    "word": "build",
    "meaning": "造る",
    "definition_ja": "部品や材料を組み合わせて組み立てる",
    "definition_en": "to construct by putting parts or materials together",
    "audio": ""
  },
  {
    "key": 88,
    "word": "bus",
    "meaning": "バス",
    "definition_ja": "特に特定の時間に特定のルートに沿って乗客を運ぶために使用される大型車両",
    "definition_en": "a large vehicle that is used for carrying passengers especially along a particular route at particular times",
    "audio": ""
  },
  {
    "key": 89,
    "word": "business",
    "meaning": "ビジネス",
    "definition_ja": "商品の製造、購入、販売または提供の活動",
    "definition_en": "the activity of making, buying, selling or providing goods",
    "audio": ""
  },
  {
    "key": 90,
    "word": "but",
    "meaning": "しかし",
    "definition_ja": "aと前の文を比較するために使用されていました",
    "definition_en": "used to contrast a statement with a to previous one",
    "audio": ""
  },
  {
    "key": 91,
    "word": "buy",
    "meaning": "購入",
    "definition_ja": "お金を払って何かを手に入れる。購入",
    "definition_en": "to get something by paying money for it;  purchase",
    "audio": ""
  },
  {
    "key": 92,
    "word": "by",
    "meaning": "によって",
    "definition_ja": "場所のそばに",
    "definition_en": "close to or next to, up to and beyond, beside a place",
    "audio": ""
  },
  {
    "key": 93,
    "word": "call",
    "meaning": "コール",
    "definition_ja": "大声で話す、アナウンスする、または叫ぶ",
    "definition_en": "to speak, announce or shout in a loud voice",
    "audio": ""
  },
  {
    "key": 94,
    "word": "can",
    "meaning": "できる",
    "definition_ja": "できること",
    "definition_en": "to be able to do something",
    "audio": ""
  },
  {
    "key": 95,
    "word": "car",
    "meaning": "車",
    "definition_ja": "物を運ぶことができる四輪とエンジンを搭載した車両",
    "definition_en": "a vehicle with four wheels and engine that can carry things",
    "audio": ""
  },
  {
    "key": 96,
    "word": "card",
    "meaning": "カード",
    "definition_ja": "その価値を示すために記号や絵でマークされた硬い紙の小片で、セットになっていて、ゲームをするのに使用されます。",
    "definition_en": "a small piece of stiff paper that is marked with symbols or pictures to show its value, comes in a set, and is used for playing games",
    "audio": ""
  },
  {
    "key": 97,
    "word": "care",
    "meaning": "ケア",
    "definition_ja": "正しくあるいはうまくやるための努力",
    "definition_en": "effort made to do something correctly or well",
    "audio": ""
  },
  {
    "key": 98,
    "word": "carry",
    "meaning": "キャリー",
    "definition_ja": "ある場所から別の場所に何かを移動する",
    "definition_en": "to move something from one place to another",
    "audio": ""
  },
  {
    "key": 99,
    "word": "case",
    "meaning": "場合",
    "definition_ja": "何かの例またはインスタンス",
    "definition_en": "an example or instance of something",
    "audio": ""
  },
  {
    "key": 100,
    "word": "catch",
    "meaning": "キャッチ",
    "definition_ja": "手を使って止める",
    "definition_en": "to use your hands to stop and hold",
    "audio": ""
  },
  {
    "key": 101,
    "word": "cause",
    "meaning": "原因",
    "definition_ja": "効果を生み出すもの",
    "definition_en": "something that produces an effect",
    "audio": ""
  },
  {
    "key": 102,
    "word": "center",
    "meaning": "センター",
    "definition_ja": "中点または部分",
    "definition_en": "the middle point or part",
    "audio": ""
  },
  {
    "key": 103,
    "word": "certain",
    "meaning": "確かな",
    "definition_ja": "何かについて疑いを持たない",
    "definition_en": "not having any doubt about something",
    "audio": ""
  },
  {
    "key": 104,
    "word": "certainly",
    "meaning": "確かに",
    "definition_ja": "何かを強調し、それについて疑いがないことを示すために使用されていました。リクエストに同意するために使用",
    "definition_en": "used to emphasize something and show that there is no doubt about it; used to agree to a request",
    "audio": ""
  },
  {
    "key": 105,
    "word": "chance",
    "meaning": "チャンス",
    "definition_ja": "何かをする機会。何かができる時間や状況",
    "definition_en": "an opportunity to do something;  an amount of time or a situation in which something can be done",
    "audio": ""
  },
  {
    "key": 106,
    "word": "change",
    "meaning": "変化する",
    "definition_ja": "違うものにする",
    "definition_en": "to make or become different",
    "audio": ""
  },
  {
    "key": 107,
    "word": "charge",
    "meaning": "電荷",
    "definition_ja": "サービスや商品の代金としてお金を要求する",
    "definition_en": "to ask for money as a price for a service or goods",
    "audio": ""
  },
  {
    "key": 108,
    "word": "cheap",
    "meaning": "安いです",
    "definition_ja": "たくさんのお金がかからない",
    "definition_en": "not costing a lot of money",
    "audio": ""
  },
  {
    "key": 109,
    "word": "check",
    "meaning": "チェック",
    "definition_ja": "間違いや問題などを見つけるために（何か）注意深く見ます。",
    "definition_en": "to look at (something) carefully to find mistakes, problems, etc.",
    "audio": ""
  },
  {
    "key": 110,
    "word": "child",
    "meaning": "子",
    "definition_ja": "若い人",
    "definition_en": "a young person",
    "audio": ""
  },
  {
    "key": 111,
    "word": "choice",
    "meaning": "選択",
    "definition_ja": "選択する行為：2つ以上の可能性を選択または決定する行為",
    "definition_en": "the act of choosing : the act of picking or deciding between two or more possibilities",
    "audio": ""
  },
  {
    "key": 112,
    "word": "choose",
    "meaning": "選ぶ",
    "definition_ja": "特定の人や物があなたが望むものであると決めるため",
    "definition_en": "to decide that a particular person or thing is the one that you want",
    "audio": ""
  },
  {
    "key": 113,
    "word": "church",
    "meaning": "教会",
    "definition_ja": "キリスト教の宗教崇拝や奉仕のために使われる建物",
    "definition_en": "a building used for Christian religious worship or services",
    "audio": ""
  },
  {
    "key": 114,
    "word": "city",
    "meaning": "シティ",
    "definition_ja": "町よりも広い場所に住む多くの人",
    "definition_en": "many people living in a place larger than a town",
    "audio": ""
  },
  {
    "key": 115,
    "word": "class",
    "meaning": "クラス",
    "definition_ja": "よく会い、一緒に捕まる学生のグループ",
    "definition_en": "a group of students who often meet and are taught together",
    "audio": ""
  },
  {
    "key": 116,
    "word": "clean",
    "meaning": "クリーン",
    "definition_ja": "汚れ、しみなどがない：汚れていない",
    "definition_en": "free from dirt, marks, etc. : not dirty",
    "audio": ""
  },
  {
    "key": 117,
    "word": "clear",
    "meaning": "クリア",
    "definition_ja": "非常に明白な、または理解しやすい",
    "definition_en": "very obvious or easy to perceive",
    "audio": ""
  },
  {
    "key": 118,
    "word": "clock",
    "meaning": "クロック",
    "definition_ja": "それが何時であるかを示し、それは通常部屋に置かれるか、または壁に取り付けられる装置",
    "definition_en": "a device that shows what time it is and that is usually placed in a room or attached to a wall",
    "audio": ""
  },
  {
    "key": 119,
    "word": "close",
    "meaning": "閉じる",
    "definition_ja": "物事が通り抜けられないように動く",
    "definition_en": "to move so that things cannot path through",
    "audio": ""
  },
  {
    "key": 120,
    "word": "cold",
    "meaning": "コールド",
    "definition_ja": "非常に低い温度",
    "definition_en": "having a very low temperature",
    "audio": ""
  },
  {
    "key": 121,
    "word": "college",
    "meaning": "カレッジ",
    "definition_ja": "大人のための学校や教育機関",
    "definition_en": "an school or educational institution for adults",
    "audio": ""
  },
  {
    "key": 122,
    "word": "color",
    "meaning": "色",
    "definition_ja": "赤、青、緑などの品質",
    "definition_en": "a quality such as red, blue, green, etc.",
    "audio": ""
  },
  {
    "key": 123,
    "word": "come",
    "meaning": "きて",
    "definition_ja": "誰かに向かって動く、近づく",
    "definition_en": "to move toward someone, to approach",
    "audio": ""
  },
  {
    "key": 124,
    "word": "comment",
    "meaning": "コメント",
    "definition_ja": "何かについて議論したり意見を書いたりする",
    "definition_en": "to discuss or write an opinion on something",
    "audio": ""
  },
  {
    "key": 125,
    "word": "committee",
    "meaning": "委員会",
    "definition_ja": "何かについて決定を下すために選ばれた人々のグループ",
    "definition_en": "a group of people who are chosen to make decisions about something",
    "audio": ""
  },
  {
    "key": 126,
    "word": "community",
    "meaning": "コミュニティ",
    "definition_ja": "共通のアイデアや地域を共有する人々のグループ",
    "definition_en": "a group of people who share a common idea or area",
    "audio": ""
  },
  {
    "key": 127,
    "word": "company",
    "meaning": "会社",
    "definition_ja": "物を売ったりサービスを提供したりする事業",
    "definition_en": "a business that sells thing or provides services",
    "audio": ""
  },
  {
    "key": 128,
    "word": "completely",
    "meaning": "完全に",
    "definition_ja": "あらゆる方法で、または可能な限り",
    "definition_en": "in every way or as much as possible",
    "audio": ""
  },
  {
    "key": 129,
    "word": "computer",
    "meaning": "コンピューター",
    "definition_ja": "大量の情報を保存および処理できる電子機器",
    "definition_en": "an electronic machine that can store and process large amounts of information",
    "audio": ""
  },
  {
    "key": 130,
    "word": "concern",
    "meaning": "懸念",
    "definition_ja": "心配感や不安感",
    "definition_en": "a feeling of worry or anxiety",
    "audio": ""
  },
  {
    "key": 131,
    "word": "consider",
    "meaning": "考えて",
    "definition_ja": "慎重に考えるために",
    "definition_en": "to think about carefully",
    "audio": ""
  },
  {
    "key": 132,
    "word": "contact",
    "meaning": "接触",
    "definition_ja": "2つのことが触れている状態または状態",
    "definition_en": "the state or condition where two things are touching",
    "audio": ""
  },
  {
    "key": 133,
    "word": "continue",
    "meaning": "持続する",
    "definition_ja": "止めずに何かをする",
    "definition_en": "to do something without stopping",
    "audio": ""
  },
  {
    "key": 134,
    "word": "control",
    "meaning": "コントロール",
    "definition_ja": "何かまたは誰かの行動を指示したり、影響を与えるため",
    "definition_en": "to direct or influence the behavior of something or someone",
    "audio": ""
  },
  {
    "key": 135,
    "word": "conversation",
    "meaning": "会話",
    "definition_ja": "二人または少人数のグループによる非公式の会話",
    "definition_en": "an informal talk involving two people or a small group of people",
    "audio": ""
  },
  {
    "key": 136,
    "word": "cool",
    "meaning": "クール",
    "definition_ja": "やや寒い：暖かくも暑くもない",
    "definition_en": "somewhat cold : not warm or hot",
    "audio": ""
  },
  {
    "key": 137,
    "word": "copy",
    "meaning": "コピーする",
    "definition_ja": "他のものとまったく同じように見える、またはまったく同じように見えるもの",
    "definition_en": "something that is or looks exactly or almost exactly like something else",
    "audio": ""
  },
  {
    "key": 138,
    "word": "correct",
    "meaning": "正しい",
    "definition_ja": "真実か正確か事実に同意する",
    "definition_en": "true or accurate;  agreeing with facts",
    "audio": ""
  },
  {
    "key": 139,
    "word": "cost",
    "meaning": "コスト",
    "definition_ja": "何かの値段",
    "definition_en": "the price of something",
    "audio": ""
  },
  {
    "key": 140,
    "word": "cough",
    "meaning": "咳",
    "definition_ja": "あなたは病気であるため、短くて大きな騒音であなたの喉から空気を押し込む",
    "definition_en": "to force air through your throat with a short, loud noise often because you are sick",
    "audio": ""
  },
  {
    "key": 141,
    "word": "could",
    "meaning": "できた",
    "definition_ja": "可能性を示すために、缶の過去形として使われる",
    "definition_en": "used as the past tense of can, to indicate possibility",
    "audio": ""
  },
  {
    "key": 142,
    "word": "council",
    "meaning": "審議会",
    "definition_ja": "何かに関する規則、規則、または決定を下すために選ばれた人々のグループ",
    "definition_en": "a group of people who are chosen to make rules, laws, or decisions about something",
    "audio": ""
  },
  {
    "key": 143,
    "word": "country",
    "meaning": "国",
    "definition_ja": "政府によって支配されている地域、国家",
    "definition_en": "an area, nation that is controlled by government",
    "audio": ""
  },
  {
    "key": 144,
    "word": "couple",
    "meaning": "カップル",
    "definition_ja": "二人の人々や物事が一緒に",
    "definition_en": "two people or things being together",
    "audio": ""
  },
  {
    "key": 145,
    "word": "course",
    "meaning": "コース",
    "definition_ja": "何かが進む経路や方向",
    "definition_en": "the route or direction that something moves along",
    "audio": ""
  },
  {
    "key": 146,
    "word": "cover",
    "meaning": "カバー",
    "definition_ja": "何か他のものの上または上に何かを置く",
    "definition_en": "put something over or on top of something else",
    "audio": ""
  },
  {
    "key": 147,
    "word": "create",
    "meaning": "つくる",
    "definition_ja": "作る、引き起こす、または存在させる",
    "definition_en": "to make, cause, or bring into existence",
    "audio": ""
  },
  {
    "key": 148,
    "word": "cut",
    "meaning": "カット",
    "definition_ja": "鋭利な道具や物を使って何かを開いたり分割したりする",
    "definition_en": "to use a sharp tool or object to open or divide something",
    "audio": ""
  },
  {
    "key": 149,
    "word": "dad",
    "meaning": "パパ",
    "definition_ja": "お父さん",
    "definition_en": "father",
    "audio": ""
  },
  {
    "key": 150,
    "word": "date",
    "meaning": "日付",
    "definition_ja": "月または年の特定の日",
    "definition_en": "a particular day of a month or year",
    "audio": ""
  },
  {
    "key": 151,
    "word": "day",
    "meaning": "日",
    "definition_ja": "真夜中から始まる24時間のそれぞれ",
    "definition_en": "each of the 24 hours beginning at midnight",
    "audio": ""
  },
  {
    "key": 152,
    "word": "deal",
    "meaning": "対処",
    "definition_ja": "誰かと取引したりビジネスをするため",
    "definition_en": "to trade or do business with someone",
    "audio": ""
  },
  {
    "key": 153,
    "word": "dear",
    "meaning": "親愛な",
    "definition_ja": "とても愛されている",
    "definition_en": "loved or valued very much",
    "audio": ""
  },
  {
    "key": 154,
    "word": "decide",
    "meaning": "決めます",
    "definition_ja": "何かについての選択をするか、考えてから選ぶ",
    "definition_en": "to make a choice about something or choose after thinking",
    "audio": ""
  },
  {
    "key": 155,
    "word": "decision",
    "meaning": "決定",
    "definition_ja": "考えた後に何かを選択する",
    "definition_en": "a choice that you make about something after thinking about it",
    "audio": ""
  },
  {
    "key": 156,
    "word": "definitely",
    "meaning": "絶対に",
    "definition_ja": "間違いなく",
    "definition_en": "without any doubt",
    "audio": ""
  },
  {
    "key": 157,
    "word": "degree",
    "meaning": "度",
    "definition_ja": "温度または角度の大きさを測定するための単位",
    "definition_en": "a unit for measuring temperature or the size of an angle",
    "audio": ""
  },
  {
    "key": 158,
    "word": "depend",
    "meaning": "頼りに",
    "definition_ja": "サポート、援助などのために（誰かか何か）必要とする",
    "definition_en": "to need (someone or something) for support, help, etc.",
    "audio": ""
  },
  {
    "key": 159,
    "word": "detail",
    "meaning": "細部",
    "definition_ja": "何かのごく一部",
    "definition_en": "a small part of something",
    "audio": ""
  },
  {
    "key": 160,
    "word": "develop",
    "meaning": "発達する",
    "definition_ja": "成長させるか、大きくするか、より高度にする",
    "definition_en": "to cause to grow or bigger or more advanced",
    "audio": ""
  },
  {
    "key": 161,
    "word": "development",
    "meaning": "開発",
    "definition_ja": "誰かまたは何かが成長または変化し、より高度になったとき",
    "definition_en": "when someone or something grows or changes and becomes more advanced",
    "audio": ""
  },
  {
    "key": 162,
    "word": "die",
    "meaning": "死ぬ",
    "definition_ja": "生活を止めたり人生を終わらせるために",
    "definition_en": "to stop living or end life",
    "audio": ""
  },
  {
    "key": 163,
    "word": "difference",
    "meaning": "差",
    "definition_ja": "他とは違う品質",
    "definition_en": "a quality that is unlike something else",
    "audio": ""
  },
  {
    "key": 164,
    "word": "different",
    "meaning": "違う",
    "definition_ja": "本質的に違って、同じ種類ではない",
    "definition_en": "not of the same kind, unlike in nature",
    "audio": ""
  },
  {
    "key": 165,
    "word": "difficult",
    "meaning": "難しい",
    "definition_ja": "簡単ではありません：多くの仕事やスキルをやるか作るように頼む",
    "definition_en": "not easy : requiring much work or skill to do or make",
    "audio": ""
  },
  {
    "key": 166,
    "word": "dinner",
    "meaning": "ディナー",
    "definition_ja": "その日のメインの食事",
    "definition_en": "the main meal of the day",
    "audio": ""
  },
  {
    "key": 167,
    "word": "discuss",
    "meaning": "話し合います",
    "definition_ja": "他の人やグループと（何か）について話すために",
    "definition_en": "to talk about (something) with another person or group",
    "audio": ""
  },
  {
    "key": 168,
    "word": "discussion",
    "meaning": "討論",
    "definition_ja": "他の人や人々のグループと何かについて話すことの行為：何かについての会話",
    "definition_en": "the act of talking about something with another person or a group of people : a conversation about something",
    "audio": ""
  },
  {
    "key": 169,
    "word": "do",
    "meaning": "行う",
    "definition_ja": "行動または活動を実行するため。何かに取り組む",
    "definition_en": "to perform an action or activity; to work on something",
    "audio": ""
  },
  {
    "key": 170,
    "word": "doctor",
    "meaning": "医師",
    "definition_ja": "病気、病気、けがをした人々の治療のために訓練を受けた人",
    "definition_en": "a person who skilled to treat people who are ill, sick and injured",
    "audio": ""
  },
  {
    "key": 171,
    "word": "document",
    "meaning": "資料",
    "definition_ja": "情報を提供する公式の記録",
    "definition_en": "an official record that gives information",
    "audio": ""
  },
  {
    "key": 172,
    "word": "dog",
    "meaning": "犬",
    "definition_ja": "ペットとして倒れたり、建物を守ったり、狩猟をするなどして人々のために働くように訓練されたタイプの動物。",
    "definition_en": "a type of animal that is often kept as a pet or trained to work for people by guarding buildings, hunting, etc.",
    "audio": ""
  },
  {
    "key": 173,
    "word": "dollar",
    "meaning": "ドル",
    "definition_ja": "アメリカ、カナダ、オーストラリア、その他の国々での100セントの基本的な単位",
    "definition_en": "a basic unit of money in the U.S., Canada, Australia, and other countries that is equal to 100 cents",
    "audio": ""
  },
  {
    "key": 174,
    "word": "door",
    "meaning": "ドア",
    "definition_ja": "建物や部屋への移動可能な入り口",
    "definition_en": "a movable entrance to a building or room",
    "audio": ""
  },
  {
    "key": 175,
    "word": "down",
    "meaning": "ダウン",
    "definition_ja": "高い位置から低い位置へ",
    "definition_en": "going from a higher position to a lower position",
    "audio": ""
  },
  {
    "key": 176,
    "word": "draw",
    "meaning": "ドロー",
    "definition_ja": "紙に線を引くことによって作り出す",
    "definition_en": "to produce by making lines on a paper",
    "audio": ""
  },
  {
    "key": 177,
    "word": "drink",
    "meaning": "ドリンク",
    "definition_ja": "液体を口に入れて飲み込む",
    "definition_en": "to take a liquid into your mouth and swallow it",
    "audio": ""
  },
  {
    "key": 178,
    "word": "drive",
    "meaning": "ドライブ",
    "definition_ja": "車の動きを制御する",
    "definition_en": "to control the movement of a car",
    "audio": ""
  },
  {
    "key": 179,
    "word": "drop",
    "meaning": "ドロップ",
    "definition_ja": "何かを落とすために",
    "definition_en": "to let something fall",
    "audio": ""
  },
  {
    "key": 180,
    "word": "during",
    "meaning": "の間に",
    "definition_ja": "ずっとずっと",
    "definition_en": "throughout the entire time",
    "audio": ""
  },
  {
    "key": 181,
    "word": "each",
    "meaning": "各",
    "definition_ja": "あと2つのことすべて",
    "definition_en": "every one of two more things",
    "audio": ""
  },
  {
    "key": 182,
    "word": "early",
    "meaning": "早い",
    "definition_ja": "予想される時間より前に行われた",
    "definition_en": "at or near the beginning of time, done before the expected time",
    "audio": ""
  },
  {
    "key": 183,
    "word": "easy",
    "meaning": "簡単",
    "definition_ja": "難しいことではない、難しいことではない",
    "definition_en": "not hard to do, not difficult",
    "audio": ""
  },
  {
    "key": 184,
    "word": "eat",
    "meaning": "食べる",
    "definition_ja": "食べ物を口に入れて飲み込む",
    "definition_en": "to take food into your mouth and swallow it",
    "audio": ""
  },
  {
    "key": 185,
    "word": "education",
    "meaning": "教育",
    "definition_ja": "指示を出したり受けたりするプロセス",
    "definition_en": "the process of giving or receiving instruction",
    "audio": ""
  },
  {
    "key": 186,
    "word": "effect",
    "meaning": "効果",
    "definition_ja": "何かが変わった結果",
    "definition_en": "a change or results of something being done",
    "audio": ""
  },
  {
    "key": 187,
    "word": "effort",
    "meaning": "努力",
    "definition_ja": "心や体によって行われた仕事",
    "definition_en": "work done by the mind or body",
    "audio": ""
  },
  {
    "key": 188,
    "word": "eight",
    "meaning": 8,
    "definition_ja": "数8",
    "definition_en": "the number 8",
    "audio": ""
  },
  {
    "key": 189,
    "word": "eighty",
    "meaning": "80人",
    "definition_ja": "数80",
    "definition_en": "the number 80",
    "audio": ""
  },
  {
    "key": 190,
    "word": "either",
    "meaning": "どちらか",
    "definition_ja": "2つのうちのどちらか",
    "definition_en": "one or the other of two",
    "audio": ""
  },
  {
    "key": 191,
    "word": "eleven",
    "meaning": "十一",
    "definition_ja": "数11",
    "definition_en": "the number 11",
    "audio": ""
  },
  {
    "key": 192,
    "word": "else",
    "meaning": "それ以外の",
    "definition_ja": "異なるまたは追加の方法または場所で",
    "definition_en": "in a different or additional manner or place",
    "audio": ""
  },
  {
    "key": 193,
    "word": "end",
    "meaning": "終わり",
    "definition_ja": "何かの限界を示す点",
    "definition_en": "a point that marks the limit of something",
    "audio": ""
  },
  {
    "key": 194,
    "word": "enjoy",
    "meaning": "楽しい",
    "definition_ja": "（何か）を楽しむために",
    "definition_en": "to take pleasure in (something)",
    "audio": ""
  },
  {
    "key": 195,
    "word": "enough",
    "meaning": "十分な",
    "definition_ja": "必要に応じて、必要なものに等しい",
    "definition_en": "equal to what is needed, as much as required",
    "audio": ""
  },
  {
    "key": 196,
    "word": "especially",
    "meaning": "特に",
    "definition_ja": "通常以上のものとても、とても",
    "definition_en": "more than usually;  very, extremely",
    "audio": ""
  },
  {
    "key": 197,
    "word": "even",
    "meaning": "でも",
    "definition_ja": "平ら、平ら、または滑らか",
    "definition_en": "being flat, equal or smooth",
    "audio": ""
  },
  {
    "key": 198,
    "word": "evening",
    "meaning": "イブニング",
    "definition_ja": "一日の終わりと夜の早い部分",
    "definition_en": "the last part of the day and early part of the night",
    "audio": ""
  },
  {
    "key": 199,
    "word": "ever",
    "meaning": "今まで",
    "definition_ja": "いつでも、いつでも",
    "definition_en": "at any time, at all times",
    "audio": ""
  },
  {
    "key": 200,
    "word": "every",
    "meaning": "すべての",
    "definition_ja": "グループ内の各人またはものを含む",
    "definition_en": "including each person or thing in a group",
    "audio": ""
  },
  {
    "key": 201,
    "word": "everybody",
    "meaning": "みんな",
    "definition_ja": "全ての人たち みんな",
    "definition_en": "every person;  everyone",
    "audio": ""
  },
  {
    "key": 202,
    "word": "everyone",
    "meaning": "みんな",
    "definition_ja": "全ての人たち みんな",
    "definition_en": "every person;  everybody",
    "audio": ""
  },
  {
    "key": 203,
    "word": "everything",
    "meaning": "すべてのもの",
    "definition_ja": "存在するすべてのものまたは存在するすべてのもの",
    "definition_en": "every thing there is or all that exists",
    "audio": ""
  },
  {
    "key": 204,
    "word": "exactly",
    "meaning": "そのとおり",
    "definition_ja": "完全に正しい",
    "definition_en": "completely correct",
    "audio": ""
  },
  {
    "key": 205,
    "word": "example",
    "meaning": "例",
    "definition_ja": "モデルとして見られるもの",
    "definition_en": "a thing which is seen as a model",
    "audio": ""
  },
  {
    "key": 206,
    "word": "expect",
    "meaning": "期待する",
    "definition_ja": "起こりそうだと見なされる",
    "definition_en": "to be regarded as likely to happen",
    "audio": ""
  },
  {
    "key": 207,
    "word": "experience",
    "meaning": "経験",
    "definition_ja": "物事があなたに起こるという行為",
    "definition_en": "the act of having things happen to you",
    "audio": ""
  },
  {
    "key": 208,
    "word": "explain",
    "meaning": "説明する",
    "definition_ja": "説明することによって明確にするか理解しやすくする",
    "definition_en": "to make clear or easy to understand by describing",
    "audio": ""
  },
  {
    "key": 209,
    "word": "extra",
    "meaning": "追加の",
    "definition_ja": "通常以上に必要以上のもの：追加",
    "definition_en": "more than is usual or necessary : additional",
    "audio": ""
  },
  {
    "key": 210,
    "word": "eye",
    "meaning": "眼",
    "definition_ja": "あなたが見る体の一部",
    "definition_en": "the part of the body that you see with",
    "audio": ""
  },
  {
    "key": 211,
    "word": "face",
    "meaning": "面",
    "definition_ja": "人の頭の前部、物の表面",
    "definition_en": "the front part of a person's head, the surface of a thing",
    "audio": ""
  },
  {
    "key": 212,
    "word": "fact",
    "meaning": "事実",
    "definition_ja": "知られている、または真実であることが証明されている何か",
    "definition_en": "something that is known or proved to be true",
    "audio": ""
  },
  {
    "key": 213,
    "word": "fair",
    "meaning": "公正な",
    "definition_ja": "正しいまたは許容できると考えられるものに同意する",
    "definition_en": "agreeing with what is thought to be right or acceptable",
    "audio": ""
  },
  {
    "key": 214,
    "word": "fairly",
    "meaning": "かなり",
    "definition_ja": "平均以上、しかし非常に少ない。公正な方法で行われたこと",
    "definition_en": "more than average, but less than very; something done in a fair way",
    "audio": ""
  },
  {
    "key": 215,
    "word": "fall",
    "meaning": "秋",
    "definition_ja": "高いところから低いところへ行き来する",
    "definition_en": "to come or go down from a higher to a lower place",
    "audio": ""
  },
  {
    "key": 216,
    "word": "family",
    "meaning": "家族",
    "definition_ja": "互いに関係のある人々のグループ",
    "definition_en": "a group of people who are related to each other",
    "audio": ""
  },
  {
    "key": 217,
    "word": "far",
    "meaning": "遠くに",
    "definition_ja": "空間的にも時間的にも遠くへ",
    "definition_en": "to a great distance in space or time",
    "audio": ""
  },
  {
    "key": 218,
    "word": "father",
    "meaning": "お父さん",
    "definition_ja": "男性の親",
    "definition_en": "a male parent",
    "audio": ""
  },
  {
    "key": 219,
    "word": "feel",
    "meaning": "感じる",
    "definition_ja": "感情や感覚を認識したり経験したりする",
    "definition_en": "to be aware of or experience an emotion or sensation",
    "audio": ""
  },
  {
    "key": 220,
    "word": "few",
    "meaning": "少ない",
    "definition_ja": "少ない、少ない",
    "definition_en": "not many, a small number",
    "audio": ""
  },
  {
    "key": 221,
    "word": "fifteen",
    "meaning": 15,
    "definition_ja": "数字の15",
    "definition_en": "the number 15",
    "audio": ""
  },
  {
    "key": 222,
    "word": "fifty",
    "meaning": 50,
    "definition_ja": "数字の50",
    "definition_en": "the number 50",
    "audio": ""
  },
  {
    "key": 223,
    "word": "figure",
    "meaning": "図",
    "definition_ja": "数値で表される量",
    "definition_en": "a an amount that is expressed in numbers",
    "audio": ""
  },
  {
    "key": 224,
    "word": "fill",
    "meaning": "塗りつぶし",
    "definition_ja": "何かをいっぱいにする、または広める",
    "definition_en": "to make something full or to spread through",
    "audio": ""
  },
  {
    "key": 225,
    "word": "find",
    "meaning": "見つける",
    "definition_ja": "何かを発見する",
    "definition_en": "to discover something",
    "audio": ""
  },
  {
    "key": 226,
    "word": "fine",
    "meaning": "罰金",
    "definition_ja": "良い、許容できる、または満足できる",
    "definition_en": "good, acceptable, or satisfactory",
    "audio": ""
  },
  {
    "key": 227,
    "word": "finish",
    "meaning": "終える",
    "definition_ja": "（何か）の終わりに達するため：それが完了したので（何か）するのをやめるため",
    "definition_en": "to reach the end of (something) : to stop doing (something) because it is completed",
    "audio": ""
  },
  {
    "key": 228,
    "word": "fire",
    "meaning": "火災",
    "definition_ja": "何かを燃やすことによって作り出される光、熱そして炎",
    "definition_en": "the light, heat and the flame produced by burning something",
    "audio": ""
  },
  {
    "key": 229,
    "word": "first",
    "meaning": "最初",
    "definition_ja": "時間や場所で他のすべての人より先に来る",
    "definition_en": "coming before all others in time or place",
    "audio": ""
  },
  {
    "key": 230,
    "word": "fit",
    "meaning": "フィット",
    "definition_ja": "適切または許容できるもの：道徳的または社会的に正しい",
    "definition_en": "proper or acceptable : morally or socially correct",
    "audio": ""
  },
  {
    "key": 231,
    "word": "five",
    "meaning": "五",
    "definition_ja": "数5",
    "definition_en": "the number 5",
    "audio": ""
  },
  {
    "key": 232,
    "word": "floor",
    "meaning": "床",
    "definition_ja": "あなたが立っている部屋の一部",
    "definition_en": "the part of a room on which you stand",
    "audio": ""
  },
  {
    "key": 233,
    "word": "focus",
    "meaning": "フォーカス",
    "definition_ja": "主な目的または関心や活動の中心",
    "definition_en": "the main purpose or center of interest or activity",
    "audio": ""
  },
  {
    "key": 234,
    "word": "follow",
    "meaning": "フォローする",
    "definition_ja": "追いかける、後ろへ移動、後ろへ",
    "definition_en": "to come after, to move or travel behind",
    "audio": ""
  },
  {
    "key": 235,
    "word": "food",
    "meaning": "フード",
    "definition_ja": "人や動物が食べるもの",
    "definition_en": "the things that people and animals eat",
    "audio": ""
  },
  {
    "key": 236,
    "word": "foot",
    "meaning": "足",
    "definition_ja": "足首の下の足の部分",
    "definition_en": "the part of the leg below ankle",
    "audio": ""
  },
  {
    "key": 237,
    "word": "for",
    "meaning": "にとって",
    "definition_ja": "何かの目的や必要性を示す",
    "definition_en": "indicating the purpose or need of something",
    "audio": ""
  },
  {
    "key": 238,
    "word": "force",
    "meaning": "力",
    "definition_ja": "何かに使われている体力、パワー、エネルギーを使う",
    "definition_en": "to use physical strength, power, or energy used on something",
    "audio": ""
  },
  {
    "key": 239,
    "word": "forget",
    "meaning": "忘れる",
    "definition_ja": "考えたり覚えたりすることができないこと（何か）",
    "definition_en": "to be unable to think of or remember (something)",
    "audio": ""
  },
  {
    "key": 240,
    "word": "form",
    "meaning": "形",
    "definition_ja": "何かの種類や種類、見える形、スタイル",
    "definition_en": "a type or kind of something, the visible shape, style",
    "audio": ""
  },
  {
    "key": 241,
    "word": "forty",
    "meaning": 40,
    "definition_ja": "数40",
    "definition_en": "the number 40",
    "audio": ""
  },
  {
    "key": 242,
    "word": "forward",
    "meaning": "進む",
    "definition_ja": "前方に向かって：前方または前方に向かって",
    "definition_en": "toward the front : to or toward what is ahead or in front",
    "audio": ""
  },
  {
    "key": 243,
    "word": "four",
    "meaning": "四",
    "definition_ja": "数4",
    "definition_en": "the number 4",
    "audio": ""
  },
  {
    "key": 244,
    "word": "free",
    "meaning": "無料",
    "definition_ja": "他人による制御なし",
    "definition_en": "without control by others",
    "audio": ""
  },
  {
    "key": 245,
    "word": "friend",
    "meaning": "友達",
    "definition_ja": "あなたが好きで、一緒にいることを楽しむ人",
    "definition_en": "a person who you like and enjoy being with",
    "audio": ""
  },
  {
    "key": 246,
    "word": "from",
    "meaning": "から",
    "definition_ja": "動きや行動の起点を示す",
    "definition_en": "indicating the starting point of motion or action",
    "audio": ""
  },
  {
    "key": 247,
    "word": "front",
    "meaning": "前面",
    "definition_ja": "オブジェクトの前方部分",
    "definition_en": "the forward part of an object",
    "audio": ""
  },
  {
    "key": 248,
    "word": "full",
    "meaning": "いっぱい",
    "definition_ja": "できるだけ多く含む",
    "definition_en": "containing or holding as much as possible",
    "audio": ""
  },
  {
    "key": 249,
    "word": "fun",
    "meaning": "楽しい",
    "definition_ja": "誰か、または面白く楽しいもの",
    "definition_en": "someone or something that is amusing or enjoyable",
    "audio": ""
  },
  {
    "key": 250,
    "word": "fund",
    "meaning": "基金",
    "definition_ja": "特別な目的に使用される金額",
    "definition_en": "a sum of money that is used for a special purpose",
    "audio": ""
  },
  {
    "key": 251,
    "word": "funny",
    "meaning": "おもしろい",
    "definition_ja": "笑いを起こす",
    "definition_en": "causing laughter",
    "audio": ""
  },
  {
    "key": 252,
    "word": "further",
    "meaning": "さらに",
    "definition_ja": "ここよりも遠い場所で",
    "definition_en": "at a more distant place than here",
    "audio": ""
  },
  {
    "key": 253,
    "word": "future",
    "meaning": "未来",
    "definition_ja": "現在の後に来る期間",
    "definition_en": "the period of time coming after the present",
    "audio": ""
  },
  {
    "key": 254,
    "word": "game",
    "meaning": "ゲーム",
    "definition_ja": "より大きなコンテストの一部であるゲームの1つ",
    "definition_en": "one of the games that are part of a larger contest",
    "audio": ""
  },
  {
    "key": 255,
    "word": "general",
    "meaning": "一般的な",
    "definition_ja": "広範囲、通常または通常",
    "definition_en": "widespread, normal or usual",
    "audio": ""
  },
  {
    "key": 256,
    "word": "get",
    "meaning": "取得する",
    "definition_ja": "何かを得る、受け取る、または与えられる",
    "definition_en": "to obtain, receive or be given something",
    "audio": ""
  },
  {
    "key": 257,
    "word": "girl",
    "meaning": "女の子",
    "definition_ja": "女児、若い女性",
    "definition_en": "a female child,  a young woman",
    "audio": ""
  },
  {
    "key": 258,
    "word": "give",
    "meaning": "与える",
    "definition_ja": "他人に何かを引き渡したり提示したりするため",
    "definition_en": "to hand over or present something to another",
    "audio": ""
  },
  {
    "key": 259,
    "word": "go",
    "meaning": "行く",
    "definition_ja": "ある場所から別の場所へ移動または移動する",
    "definition_en": "to move or travel from one place to another",
    "audio": ""
  },
  {
    "key": 260,
    "word": "good",
    "meaning": "良い",
    "definition_ja": "高品質の",
    "definition_en": "of high quality",
    "audio": ""
  },
  {
    "key": 261,
    "word": "government",
    "meaning": "政府",
    "definition_ja": "公式に国を支配する人々のグループ",
    "definition_en": "the group of people who officially control a country",
    "audio": ""
  },
  {
    "key": 262,
    "word": "grade",
    "meaning": "グレード",
    "definition_ja": "学生によって完了される勉強のレベル",
    "definition_en": "a level of study that is completed by a student",
    "audio": ""
  },
  {
    "key": 263,
    "word": "great",
    "meaning": "すばらしいです",
    "definition_ja": "サイズ、範囲、または量が非常に大きい",
    "definition_en": "very large in size, extent or amount",
    "audio": ""
  },
  {
    "key": 264,
    "word": "group",
    "meaning": "グループ",
    "definition_ja": "たくさんの人や物が集まっている",
    "definition_en": "a number of people or things located or gathered together",
    "audio": ""
  },
  {
    "key": 265,
    "word": "grow",
    "meaning": "成長する",
    "definition_ja": "大きくなる",
    "definition_en": "to become larger",
    "audio": ""
  },
  {
    "key": 266,
    "word": "guess",
    "meaning": "推測",
    "definition_ja": "あなたがそれについてあまりまたは何も知らないときに意見を形成したり、何かについての答えを与えるために",
    "definition_en": "to form an opinion or give an answer about something when you do not know much or anything about it",
    "audio": ""
  },
  {
    "key": 267,
    "word": "guy",
    "meaning": "男",
    "definition_ja": "男",
    "definition_en": "a man",
    "audio": ""
  },
  {
    "key": 268,
    "word": "hair",
    "meaning": "ヘア",
    "definition_ja": "人や動物の皮膚からの細い糸状の成長",
    "definition_en": "a thin threadlike growth from the skin of a person or animal",
    "audio": ""
  },
  {
    "key": 269,
    "word": "half",
    "meaning": "ハーフ",
    "definition_ja": "何かに分けることができる2つの等しい部分のうちの1つ",
    "definition_en": "one of two equal parts something can be divided into",
    "audio": ""
  },
  {
    "key": 270,
    "word": "hand",
    "meaning": "ハンド",
    "definition_ja": "人の腕の先の体の部分",
    "definition_en": "the body parts at the end of a person's arm",
    "audio": ""
  },
  {
    "key": 271,
    "word": "hang",
    "meaning": "ハング",
    "definition_ja": "下からの支援なしに持ち上げられるように何かを取り付けるか配置する",
    "definition_en": "to attach or place something so that it is held up without support from below",
    "audio": ""
  },
  {
    "key": 272,
    "word": "happen",
    "meaning": "起こった",
    "definition_ja": "起こるか起こる",
    "definition_en": "to take place or occur",
    "audio": ""
  },
  {
    "key": 273,
    "word": "happy",
    "meaning": "ハッピー",
    "definition_ja": "あなたの人生のために楽しさと楽しさを感じます",
    "definition_en": "feeling pleasure and enjoyment because of your life",
    "audio": ""
  },
  {
    "key": 274,
    "word": "hard",
    "meaning": "ハード",
    "definition_ja": "しっかりしているか曲げるのが難しい何か",
    "definition_en": "something that is firm or difficult to bend",
    "audio": ""
  },
  {
    "key": 275,
    "word": "hate",
    "meaning": "嫌い",
    "definition_ja": "非常に強い嫌悪感",
    "definition_en": "a very strong feeling of dislike",
    "audio": ""
  },
  {
    "key": 276,
    "word": "have",
    "meaning": "持ってる",
    "definition_ja": "何かを所有、所有、または保持する",
    "definition_en": "to own, possess, or hold something",
    "audio": ""
  },
  {
    "key": 277,
    "word": "he",
    "meaning": "彼",
    "definition_ja": "主題である男性の人を指すのに使用される",
    "definition_en": "used to refer to a male person that is the subject",
    "audio": ""
  },
  {
    "key": 278,
    "word": "head",
    "meaning": "頭",
    "definition_ja": "体の上部",
    "definition_en": "the upper part of the body",
    "audio": ""
  },
  {
    "key": 279,
    "word": "health",
    "meaning": "健康",
    "definition_ja": "病気にかかっているか、いない状態",
    "definition_en": "the condition of being well or free from disease",
    "audio": ""
  },
  {
    "key": 280,
    "word": "hear",
    "meaning": "聞く",
    "definition_ja": "音を意識し、耳で知覚する",
    "definition_en": "to be aware of sound, to perceive with the ear",
    "audio": ""
  },
  {
    "key": 281,
    "word": "help",
    "meaning": "助けて",
    "definition_ja": "誰かが仕事をしやすくするために支援する",
    "definition_en": "to assist in order to make it easier for someone to do a job",
    "audio": ""
  },
  {
    "key": 282,
    "word": "here",
    "meaning": "ここに",
    "definition_ja": "この場所では、この場所または位置に",
    "definition_en": "in this place, at this location or position",
    "audio": ""
  },
  {
    "key": 283,
    "word": "high",
    "meaning": "高い",
    "definition_ja": "大きな距離を上向きに上昇",
    "definition_en": "rising upward a great distance",
    "audio": ""
  },
  {
    "key": 284,
    "word": "hit",
    "meaning": "ヒット",
    "definition_ja": "手やバットなどをすばやく動かして、強力な方法または激しい方法で他の人または何かに触れるようにする。",
    "definition_en": "to move your hand, a bat, etc., quickly so that it touches someone or something in a forceful or violent way",
    "audio": ""
  },
  {
    "key": 285,
    "word": "hold",
    "meaning": "ホールド",
    "definition_ja": "手に持ったり持ったりする",
    "definition_en": "to have or keep in your hand",
    "audio": ""
  },
  {
    "key": 286,
    "word": "holiday",
    "meaning": "休日",
    "definition_ja": "お祝いの特別な日",
    "definition_en": "a special day of celebration",
    "audio": ""
  },
  {
    "key": 287,
    "word": "home",
    "meaning": "家",
    "definition_ja": "人や家族が住んでいる場所",
    "definition_en": "the place where a person or a family lives",
    "audio": ""
  },
  {
    "key": 288,
    "word": "hope",
    "meaning": "希望",
    "definition_ja": "何かが起こることを望んでいるという期待感",
    "definition_en": "a feeling of expectation, to want something to happen",
    "audio": ""
  },
  {
    "key": 289,
    "word": "hospital",
    "meaning": "病院",
    "definition_ja": "病気やけがをした人々が世話をしたり治療を受けたり、子供がよく生まれた場所",
    "definition_en": "a place where sick or injured people are given care or treatment and where children are often born",
    "audio": ""
  },
  {
    "key": 290,
    "word": "hot",
    "meaning": "ホット",
    "definition_ja": "高温",
    "definition_en": "having a high temperature",
    "audio": ""
  },
  {
    "key": 291,
    "word": "hour",
    "meaning": "時",
    "definition_ja": "60分に相当する期間",
    "definition_en": "a period of time equal to 60 minutes",
    "audio": ""
  },
  {
    "key": 292,
    "word": "house",
    "meaning": "家",
    "definition_ja": "家族が住む建物",
    "definition_en": "a building in which a family lives",
    "audio": ""
  },
  {
    "key": 293,
    "word": "how",
    "meaning": "どうやって",
    "definition_ja": "どのような手段や方法で？",
    "definition_en": "by what means or manner?",
    "audio": ""
  },
  {
    "key": 294,
    "word": "hundred",
    "meaning": "百",
    "definition_ja": "数100",
    "definition_en": "the number 100",
    "audio": ""
  },
  {
    "key": 295,
    "word": "husband",
    "meaning": "夫",
    "definition_ja": "既婚男性：誰かが結婚している男性",
    "definition_en": "a married man : the man someone is married to",
    "audio": ""
  },
  {
    "key": 296,
    "word": "I",
    "meaning": "私",
    "definition_ja": "話しているか書いている人",
    "definition_en": "the person who is speaking or writing",
    "audio": ""
  },
  {
    "key": 297,
    "word": "idea",
    "meaning": "アイディア",
    "definition_ja": "考え、提案、意見、または計画",
    "definition_en": "a thought, suggestion, opinion or plan",
    "audio": ""
  },
  {
    "key": 298,
    "word": "if",
    "meaning": "もし",
    "definition_ja": "何かが起こるための条件を導入する",
    "definition_en": "introducing a condition for something to happen",
    "audio": ""
  },
  {
    "key": 299,
    "word": "imagine",
    "meaning": "想像する",
    "definition_ja": "本物ではない何かを考えたり、頭の中で何かを創造すること",
    "definition_en": "to think of or create something in one's mind that is not real",
    "audio": ""
  },
  {
    "key": 300,
    "word": "important",
    "meaning": "重要",
    "definition_ja": "大きな意味を持つ",
    "definition_en": "having great significance",
    "audio": ""
  },
  {
    "key": 301,
    "word": "in",
    "meaning": "に",
    "definition_ja": "他の何かの中にあるか、それに囲まれていることを示すために使う",
    "definition_en": "used to indicate being inside of or surrounded by something else",
    "audio": ""
  },
  {
    "key": 302,
    "word": "include",
    "meaning": "含める",
    "definition_ja": "グループの一員として",
    "definition_en": "to have as a part of a group",
    "audio": ""
  },
  {
    "key": 303,
    "word": "increase",
    "meaning": "増加する",
    "definition_ja": "サイズ、量、または程度が大きくなったり大きくなったりする",
    "definition_en": "to become larger or greater in size, amount, or degree",
    "audio": ""
  },
  {
    "key": 304,
    "word": "individual",
    "meaning": "個々",
    "definition_ja": "ただ一人のメンバーとして存在",
    "definition_en": "existing as just one member",
    "audio": ""
  },
  {
    "key": 305,
    "word": "information",
    "meaning": "情報",
    "definition_ja": "状況、人、イベントなどに関する事実またはデータ",
    "definition_en": "facts or data about a situation, person, event, etc.",
    "audio": ""
  },
  {
    "key": 306,
    "word": "instead",
    "meaning": "代わりに",
    "definition_ja": "あることが行われている、または別のものが選択されていないときに選択されていると言っていた",
    "definition_en": "used to say that one thing is done or is chosen when another is not chosen",
    "audio": ""
  },
  {
    "key": 307,
    "word": "interest",
    "meaning": "興味",
    "definition_ja": "何かを知りたい、または学びたいという気持ち",
    "definition_en": "a feeling of wanting to know or learn about something",
    "audio": ""
  },
  {
    "key": 308,
    "word": "into",
    "meaning": "に",
    "definition_ja": "何かの内側への動きを紹介する",
    "definition_en": "introduce movement toward the inside of something",
    "audio": ""
  },
  {
    "key": 309,
    "word": "involve",
    "meaning": "巻き込む",
    "definition_ja": "何かを持っている、またはその一部に含める",
    "definition_en": "to have or include in a part of something",
    "audio": ""
  },
  {
    "key": 310,
    "word": "issue",
    "meaning": "問題",
    "definition_ja": "人々が話している、または考えている問題",
    "definition_en": "problems that people are talking or thinking about",
    "audio": ""
  },
  {
    "key": 311,
    "word": "it",
    "meaning": "それ",
    "definition_ja": "前に述べたこと",
    "definition_en": "a thing that has been previously mentioned",
    "audio": ""
  },
  {
    "key": 312,
    "word": "item",
    "meaning": "項目",
    "definition_ja": "個々の記事、単位、または情報の一部",
    "definition_en": "an individual article, unit or piece of information",
    "audio": ""
  },
  {
    "key": 313,
    "word": "itself",
    "meaning": "自分自身",
    "definition_ja": "代名詞 'it'の反射形",
    "definition_en": "the reflexive form of the pronoun 'it'",
    "audio": ""
  },
  {
    "key": 314,
    "word": "job",
    "meaning": "ジョブ",
    "definition_ja": "お金を稼ぐの定期的な仕事",
    "definition_en": "the regular work of earning money",
    "audio": ""
  },
  {
    "key": 315,
    "word": "just",
    "meaning": "ただ",
    "definition_ja": "正確に、正確な程度または方法で",
    "definition_en": "exactly, to an exact degree or manner",
    "audio": ""
  },
  {
    "key": 316,
    "word": "keep",
    "meaning": "キープ",
    "definition_ja": "持ち続けたり持ち続ける",
    "definition_en": "to continue holding or retaining possession of",
    "audio": ""
  },
  {
    "key": 317,
    "word": "kid",
    "meaning": "キッド",
    "definition_ja": "子供や若い人",
    "definition_en": "a child or young person",
    "audio": ""
  },
  {
    "key": 318,
    "word": "kill",
    "meaning": "殺します",
    "definition_ja": "人、動物、植物の死を引き起こす",
    "definition_en": "to cause the death of a person, animal or plant",
    "audio": ""
  },
  {
    "key": 319,
    "word": "kind",
    "meaning": "種類",
    "definition_ja": "フレンドリーで優しい性質を持つ",
    "definition_en": "having a friendly, gentle nature",
    "audio": ""
  },
  {
    "key": 320,
    "word": "know",
    "meaning": "知っている",
    "definition_ja": "あなたの心に持っているために、何かに気をつけて",
    "definition_en": "to have in your mind, be aware of something",
    "audio": ""
  },
  {
    "key": 321,
    "word": "lady",
    "meaning": "レディ",
    "definition_ja": "礼儀正しく振る舞う女性",
    "definition_en": "a woman who behaves in a polite way",
    "audio": ""
  },
  {
    "key": 322,
    "word": "land",
    "meaning": "土地",
    "definition_ja": "地球の表面の固体部分",
    "definition_en": "the solid part of the surface of the Earth",
    "audio": ""
  },
  {
    "key": 323,
    "word": "language",
    "meaning": "言語",
    "definition_ja": "人々が思考や感情を互いに表現するために使用する言葉やサインのシステム",
    "definition_en": "the system of words or signs that people use to express thoughts and feelings to each other",
    "audio": ""
  },
  {
    "key": 324,
    "word": "large",
    "meaning": "大",
    "definition_ja": "サイズ、範囲、または容量が大きい",
    "definition_en": "great in size, extent, or capacity",
    "audio": ""
  },
  {
    "key": 325,
    "word": "last",
    "meaning": "最終",
    "definition_ja": "他人の後にやってくる、決勝",
    "definition_en": "coming after others, final",
    "audio": ""
  },
  {
    "key": 326,
    "word": "late",
    "meaning": "遅れて",
    "definition_ja": "与えられた時間の終わり近くに起こっている",
    "definition_en": "happening near the end of a given time",
    "audio": ""
  },
  {
    "key": 327,
    "word": "laugh",
    "meaning": "笑い",
    "definition_ja": "笑顔で喉から音を出すことによって、あなたが幸せであること、または何か面白いことだと思うことを示すため",
    "definition_en": "to show that you are happy or that you think something is funny by smiling and making a sound from your throat",
    "audio": ""
  },
  {
    "key": 328,
    "word": "laughter",
    "meaning": "笑い",
    "definition_ja": "笑いの行動や音",
    "definition_en": "the action or sound of laughing",
    "audio": ""
  },
  {
    "key": 329,
    "word": "law",
    "meaning": "法律",
    "definition_ja": "政府が制定した制度や規則",
    "definition_en": "the system or rules made by the government",
    "audio": ""
  },
  {
    "key": 330,
    "word": "lead",
    "meaning": "鉛",
    "definition_ja": "誰かを場所に導く、一緒に行く、担当する",
    "definition_en": "to guide someone to a place , to go with, be in charge",
    "audio": ""
  },
  {
    "key": 331,
    "word": "learn",
    "meaning": "学ぶ",
    "definition_ja": "勉強や経験によって知識を習得する",
    "definition_en": "to acquire knowledge by study or experience",
    "audio": ""
  },
  {
    "key": 332,
    "word": "least",
    "meaning": "少なくとも",
    "definition_ja": "量、程度または程度が最小",
    "definition_en": "smallest in amount, extent or degree",
    "audio": ""
  },
  {
    "key": 333,
    "word": "leave",
    "meaning": "去る",
    "definition_ja": "から出発する、出発する",
    "definition_en": "to go away from, depart from",
    "audio": ""
  },
  {
    "key": 334,
    "word": "less",
    "meaning": "もっと少なく",
    "definition_ja": "それほどではないが、",
    "definition_en": "not so much, a smaller amount of",
    "audio": ""
  },
  {
    "key": 335,
    "word": "let",
    "meaning": "させて",
    "definition_ja": "許可または許可する",
    "definition_en": "to allow or permit to do something",
    "audio": ""
  },
  {
    "key": 336,
    "word": "letter",
    "meaning": "文字",
    "definition_ja": "書かれた、タイプされた、または印刷されたメッセージ",
    "definition_en": "a written, typed or printed message",
    "audio": ""
  },
  {
    "key": 337,
    "word": "level",
    "meaning": "レベル",
    "definition_ja": "特定の高さまたは線",
    "definition_en": "a specific height or line",
    "audio": ""
  },
  {
    "key": 338,
    "word": "life",
    "meaning": "生活",
    "definition_ja": "人間や動物の存在",
    "definition_en": "the existence of a human being or animal",
    "audio": ""
  },
  {
    "key": 339,
    "word": "light",
    "meaning": "光",
    "definition_ja": "物を見えるようにするエネルギーの形",
    "definition_en": "the form of energy that makes things visible",
    "audio": ""
  },
  {
    "key": 340,
    "word": "like",
    "meaning": "好き",
    "definition_ja": "快適で楽しいものを見つけるため",
    "definition_en": "to find something agreeable or enjoyable",
    "audio": ""
  },
  {
    "key": 341,
    "word": "line",
    "meaning": "ライン",
    "definition_ja": "表面の細長いマークまたはバンド",
    "definition_en": "a long narrow mark or band on a surface",
    "audio": ""
  },
  {
    "key": 342,
    "word": "list",
    "meaning": "リスト",
    "definition_ja": "書かれた一連の名前、単語または数字",
    "definition_en": "a series of written names, words or numbers",
    "audio": ""
  },
  {
    "key": 343,
    "word": "listen",
    "meaning": "聴く",
    "definition_ja": "言われていること、歌われていること、演奏されたことなどを聞くために誰かまたは何かに注意を払うこと。",
    "definition_en": "to pay attention to someone or something in order to hear what is being said, sung, played, etc.",
    "audio": ""
  },
  {
    "key": 344,
    "word": "little",
    "meaning": "ちょっと",
    "definition_ja": "サイズ、量、程度が小さい",
    "definition_en": "small in size, amount, or degree",
    "audio": ""
  },
  {
    "key": 345,
    "word": "live",
    "meaning": "ライブ",
    "definition_ja": "生きている、生き続ける、生き続ける",
    "definition_en": "to be alive, to remain or continue to be alive",
    "audio": ""
  },
  {
    "key": 346,
    "word": "load",
    "meaning": "負荷",
    "definition_ja": "持ち上げられて運ばれるもの",
    "definition_en": "something that is lifted and carried",
    "audio": ""
  },
  {
    "key": 347,
    "word": "local",
    "meaning": "地元",
    "definition_ja": "特定の地域、都市、または町に関連または制限されている",
    "definition_en": "relating or restricted to a particular area, city, or town",
    "audio": ""
  },
  {
    "key": 348,
    "word": "long",
    "meaning": "長いです",
    "definition_ja": "大きな距離を伸ばす",
    "definition_en": "extending a great distance",
    "audio": ""
  },
  {
    "key": 349,
    "word": "look",
    "meaning": "見て",
    "definition_ja": "特定の方向に視線を向ける",
    "definition_en": "to direct one's gaze in a particular direction",
    "audio": ""
  },
  {
    "key": 350,
    "word": "lose",
    "meaning": "失う",
    "definition_ja": "あなたがかつて持っていた何かを見つけることができないこと",
    "definition_en": "to be unable to find something you once had",
    "audio": ""
  },
  {
    "key": 351,
    "word": "lot",
    "meaning": "ロット",
    "definition_ja": "何かを造るため、または他の目的のために使われているか、使われる可能性がある小さな土地",
    "definition_en": "a small piece of land that is or could be used for building something or for some other purpose",
    "audio": ""
  },
  {
    "key": 352,
    "word": "love",
    "meaning": "愛",
    "definition_ja": "に大きな愛情を感じる",
    "definition_en": "feel great affection for",
    "audio": ""
  },
  {
    "key": 353,
    "word": "lovely",
    "meaning": "素敵な",
    "definition_ja": "特に優雅な方法で魅力的または美しい",
    "definition_en": "attractive or beautiful especially in a graceful way",
    "audio": ""
  },
  {
    "key": 354,
    "word": "low",
    "meaning": "低い",
    "definition_ja": "上がったり上向きに伸びたりしていない",
    "definition_en": "not rising or extending upward",
    "audio": ""
  },
  {
    "key": 355,
    "word": "machine",
    "meaning": "機械",
    "definition_ja": "電気、ガソリンなどから電力を供給されたときに動作する可動部品を備えた機器。",
    "definition_en": "a piece of equipment with moving parts that does work when it is given power from electricity, gasoline, etc.",
    "audio": ""
  },
  {
    "key": 356,
    "word": "main",
    "meaning": "メイン",
    "definition_ja": "最も重要な",
    "definition_en": "most important",
    "audio": ""
  },
  {
    "key": 357,
    "word": "major",
    "meaning": "専攻",
    "definition_ja": "重要、深刻、または多数",
    "definition_en": "important, serious,  or large in number",
    "audio": ""
  },
  {
    "key": 358,
    "word": "make",
    "meaning": "作る",
    "definition_ja": "何かを構築、作成、または作成する",
    "definition_en": "to build, create, or produce something",
    "audio": ""
  },
  {
    "key": 359,
    "word": "man",
    "meaning": "おとこ",
    "definition_ja": "成人男性",
    "definition_en": "an adult male human being",
    "audio": ""
  },
  {
    "key": 360,
    "word": "many",
    "meaning": "たくさんの",
    "definition_ja": "多くのことを参照するために使用されます",
    "definition_en": "used to refer a large number of things",
    "audio": ""
  },
  {
    "key": 361,
    "word": "market",
    "meaning": "市場",
    "definition_ja": "商品が売買される場所",
    "definition_en": "a place that products are bought and sold",
    "audio": ""
  },
  {
    "key": 362,
    "word": "marry",
    "meaning": "結婚する",
    "definition_ja": "（誰かの）夫または妻になるために",
    "definition_en": "to become the husband or wife of (someone)",
    "audio": ""
  },
  {
    "key": 363,
    "word": "mathematics",
    "meaning": "数学",
    "definition_ja": "数や形の研究や科学",
    "definition_en": "the study or science of numbers and shapes",
    "audio": ""
  },
  {
    "key": 364,
    "word": "matter",
    "meaning": "問題",
    "definition_ja": "物質的な物からなるもの",
    "definition_en": "the physical substance things are made of",
    "audio": ""
  },
  {
    "key": 365,
    "word": "may",
    "meaning": "5月",
    "definition_ja": "可能性や確率を表現するために使われる",
    "definition_en": "used to express possibility or probability",
    "audio": ""
  },
  {
    "key": 366,
    "word": "maybe",
    "meaning": "多分",
    "definition_ja": "確かにではないがおそらく：おそらく",
    "definition_en": "possibly but not certainly : perhaps",
    "audio": ""
  },
  {
    "key": 367,
    "word": "mean",
    "meaning": "平均",
    "definition_ja": "あなたの目的や意図として心に留めておく",
    "definition_en": "to have in mind as your purpose or intention",
    "audio": ""
  },
  {
    "key": 368,
    "word": "meet",
    "meaning": "会う",
    "definition_ja": "初めて紹介される",
    "definition_en": "to be introduced for the first time",
    "audio": ""
  },
  {
    "key": 369,
    "word": "member",
    "meaning": "メンバー",
    "definition_ja": "グループまたはチームに所属する人または国",
    "definition_en": "a person or country belonging to a group or team",
    "audio": ""
  },
  {
    "key": 370,
    "word": "mention",
    "meaning": "言及する",
    "definition_ja": "特に短い方法で（何かまたは誰か）について話す、書く、または参照する",
    "definition_en": "to talk about, write about, or refer to (something or someone) especially in a brief way",
    "audio": ""
  },
  {
    "key": 371,
    "word": "middle",
    "meaning": "中間",
    "definition_ja": "端または側面から均等に離れている：2点間の中間",
    "definition_en": "equally distant from the ends or sides : halfway between two points",
    "audio": ""
  },
  {
    "key": 372,
    "word": "might",
    "meaning": "たぶん",
    "definition_ja": "何かが可能だと言う",
    "definition_en": "to say something is possible",
    "audio": ""
  },
  {
    "key": 373,
    "word": "mile",
    "meaning": "マイル",
    "definition_ja": "米国で使用されている測定単位（約1600メートル）",
    "definition_en": "a unit of measurement used in the US that is about 1600 meters",
    "audio": ""
  },
  {
    "key": 374,
    "word": "million",
    "meaning": "百万",
    "definition_ja": "数1000000",
    "definition_en": "the number 1000000",
    "audio": ""
  },
  {
    "key": 375,
    "word": "mind",
    "meaning": "マインド",
    "definition_ja": "私たちが考えること、感じること、そして推論することを可能にする人の部分",
    "definition_en": "the part of person that enables us to think, feel, and reason",
    "audio": ""
  },
  {
    "key": 376,
    "word": "mine",
    "meaning": "鉱山",
    "definition_ja": "私のもの：私のもの：私のもの",
    "definition_en": "that which belongs to me : my one : my ones",
    "audio": ""
  },
  {
    "key": 377,
    "word": "minute",
    "meaning": "分",
    "definition_ja": "60秒の期間",
    "definition_en": "a period of time equal to 60 seconds",
    "audio": ""
  },
  {
    "key": 378,
    "word": "miss",
    "meaning": "ミス",
    "definition_ja": "ヒット、キャッチ、リーチ、または取得に失敗する（何か）",
    "definition_en": "to fail to hit, catch, reach, or get (something)",
    "audio": ""
  },
  {
    "key": 379,
    "word": "moment",
    "meaning": "瞬間",
    "definition_ja": "非常に短いまたは短い期間",
    "definition_en": "a very short or brief period of time",
    "audio": ""
  },
  {
    "key": 380,
    "word": "money",
    "meaning": "お金",
    "definition_ja": "商品やサービスの支払いに使用されるもの",
    "definition_en": "something used to pay for goods and services",
    "audio": ""
  },
  {
    "key": 381,
    "word": "month",
    "meaning": "月",
    "definition_ja": "1年に12の期間のうちの1つが分割される",
    "definition_en": "one of the 12 periods of time a year is broken into",
    "audio": ""
  },
  {
    "key": 382,
    "word": "more",
    "meaning": "もっと",
    "definition_ja": "金額、数、またはサイズが大きい",
    "definition_en": "greater in amount, number, or size",
    "audio": ""
  },
  {
    "key": 383,
    "word": "morning",
    "meaning": "朝",
    "definition_ja": "その日の早い時期",
    "definition_en": "the early part of the day",
    "audio": ""
  },
  {
    "key": 384,
    "word": "most",
    "meaning": "最も",
    "definition_ja": "ほとんどすべてのもの",
    "definition_en": "almost all of something",
    "audio": ""
  },
  {
    "key": 385,
    "word": "mother",
    "meaning": "母",
    "definition_ja": "子供がいる女性",
    "definition_en": "a female who has a child or children",
    "audio": ""
  },
  {
    "key": 386,
    "word": "move",
    "meaning": "動く",
    "definition_ja": "指定された方向または方法で移動させる",
    "definition_en": "to cause to go in a specified direction or manner",
    "audio": ""
  },
  {
    "key": 387,
    "word": "movie",
    "meaning": "映画",
    "definition_ja": "映画やビデオ",
    "definition_en": "a film or video",
    "audio": ""
  },
  {
    "key": 388,
    "word": "much",
    "meaning": "ずっと",
    "definition_ja": "金額または範囲が大きい",
    "definition_en": "large in amount or extent",
    "audio": ""
  },
  {
    "key": 389,
    "word": "music",
    "meaning": "音楽",
    "definition_ja": "歌われたり演奏されたりする音作りの技術",
    "definition_en": "the art of making sounds that are sung or played",
    "audio": ""
  },
  {
    "key": 390,
    "word": "must",
    "meaning": "しなければならない",
    "definition_ja": "何かが必要または必要であると言っていた",
    "definition_en": "used to say that something is required or necessary",
    "audio": ""
  },
  {
    "key": 391,
    "word": "myself",
    "meaning": "私自身",
    "definition_ja": "代名詞 '私'または '私'の再帰形",
    "definition_en": "the reflexive form of the pronouns 'me' or 'I'",
    "audio": ""
  },
  {
    "key": 392,
    "word": "name",
    "meaning": "名",
    "definition_ja": "特定の人を対象とする言葉",
    "definition_en": "a word that addressed or refers to a specific person",
    "audio": ""
  },
  {
    "key": 393,
    "word": "national",
    "meaning": "全国の",
    "definition_ja": "国全体に関連する",
    "definition_en": "relating to the whole of a country",
    "audio": ""
  },
  {
    "key": 394,
    "word": "near",
    "meaning": "近く",
    "definition_ja": "何かに近い",
    "definition_en": "close to something",
    "audio": ""
  },
  {
    "key": 395,
    "word": "need",
    "meaning": "必要",
    "definition_ja": "必須または重要なので必須",
    "definition_en": "require because it is essential or important",
    "audio": ""
  },
  {
    "key": 396,
    "word": "never",
    "meaning": "決して",
    "definition_ja": "これまでにない、いつでもない",
    "definition_en": "not ever, not at any time",
    "audio": ""
  },
  {
    "key": 397,
    "word": "new",
    "meaning": "新しい",
    "definition_ja": "古くない、最近生まれた、建てられた、または作成された",
    "definition_en": "not old, recently born, built or created",
    "audio": ""
  },
  {
    "key": 398,
    "word": "news",
    "meaning": "ニュース",
    "definition_ja": "最近起こったことに関する新しい情報やレポート",
    "definition_en": "new information or a report about something that has happened recently",
    "audio": ""
  },
  {
    "key": 399,
    "word": "next",
    "meaning": "次",
    "definition_ja": "この時間の直後に来る",
    "definition_en": "coming immediately after this time",
    "audio": ""
  },
  {
    "key": 400,
    "word": "nice",
    "meaning": "いいね",
    "definition_ja": "喜びや喜びを与える：良くて楽しい",
    "definition_en": "giving pleasure or joy : good and enjoyable",
    "audio": ""
  },
  {
    "key": 401,
    "word": "night",
    "meaning": "夜",
    "definition_ja": "日の入りと日の出の間の暗闇の期間",
    "definition_en": "the period of time of darkness between sunset and sunrise",
    "audio": ""
  },
  {
    "key": 402,
    "word": "nine",
    "meaning": "九",
    "definition_ja": "数9",
    "definition_en": "the number 9",
    "audio": ""
  },
  {
    "key": 403,
    "word": "nineteen",
    "meaning": "十九",
    "definition_ja": "数19",
    "definition_en": "the number 19",
    "audio": ""
  },
  {
    "key": 404,
    "word": "ninety",
    "meaning": 90,
    "definition_ja": "数90",
    "definition_en": "the number 90",
    "audio": ""
  },
  {
    "key": 405,
    "word": "no",
    "meaning": "いいえ",
    "definition_ja": "否定的な反応を示すような形で、まったくありません",
    "definition_en": "not at all, in a way that shows a negative response",
    "audio": ""
  },
  {
    "key": 406,
    "word": "nobody",
    "meaning": "だれも",
    "definition_ja": "誰も、誰も",
    "definition_en": "no person, no one",
    "audio": ""
  },
  {
    "key": 407,
    "word": "noise",
    "meaning": "ノイズ",
    "definition_ja": "大きな音や不快な音",
    "definition_en": "a loud or unpleasant sound",
    "audio": ""
  },
  {
    "key": 408,
    "word": "normally",
    "meaning": "通常は",
    "definition_ja": "通常",
    "definition_en": "usually",
    "audio": ""
  },
  {
    "key": 409,
    "word": "not",
    "meaning": "ではない",
    "definition_ja": "式を負にするために使用されます",
    "definition_en": "used to make an expression negative",
    "audio": ""
  },
  {
    "key": 410,
    "word": "note",
    "meaning": "注意",
    "definition_ja": "何かの簡単な短い記録",
    "definition_en": "a brief, short record of something",
    "audio": ""
  },
  {
    "key": 411,
    "word": "nothing",
    "meaning": "何もない",
    "definition_ja": "何もない、ひとつもない",
    "definition_en": "not anything, no a single thing",
    "audio": ""
  },
  {
    "key": 412,
    "word": "notice",
    "meaning": "通知",
    "definition_ja": "見ること、聞くことなどによって（何かまたは誰かに）気づくようになる",
    "definition_en": "to become aware of (something or someone) by seeing, hearing, etc.",
    "audio": ""
  },
  {
    "key": 413,
    "word": "now",
    "meaning": "今",
    "definition_ja": "現時点または現時点で",
    "definition_en": "at the present time or moment",
    "audio": ""
  },
  {
    "key": 414,
    "word": "number",
    "meaning": "数",
    "definition_ja": "特定の量または量を表す単語または記号",
    "definition_en": "a word or symbol that stands for a specific amount or quantity",
    "audio": ""
  },
  {
    "key": 415,
    "word": "obviously",
    "meaning": "明らかに",
    "definition_ja": "わかりやすい方法で",
    "definition_en": "in a way that is easy to understand or see",
    "audio": ""
  },
  {
    "key": 416,
    "word": "of",
    "meaning": "の",
    "definition_ja": "何かに属している、またはつながっている",
    "definition_en": "belonging to or connected with something",
    "audio": ""
  },
  {
    "key": 417,
    "word": "off",
    "meaning": "オフ",
    "definition_ja": "場所から離れた場所または離れた場所",
    "definition_en": "away from a place or at a distance",
    "audio": ""
  },
  {
    "key": 418,
    "word": "offer",
    "meaning": "提供",
    "definition_ja": "誰かに何かを受け入れる機会を与えるため",
    "definition_en": "to give someone the opportunity to accept something",
    "audio": ""
  },
  {
    "key": 419,
    "word": "office",
    "meaning": "事務所",
    "definition_ja": "ビジネスや職業活動を行うために使用される部屋のセットの建物",
    "definition_en": "a building of set of rooms used to do business or professional activities",
    "audio": ""
  },
  {
    "key": 420,
    "word": "often",
    "meaning": "しばしば",
    "definition_ja": "何度も、頻繁に、多くの場合",
    "definition_en": "many times, frequently, on many occasions",
    "audio": ""
  },
  {
    "key": 421,
    "word": "okay",
    "meaning": "はい",
    "definition_ja": "何かをすることに同意するとき、または誰かが何かをすることを許可するときに使用されます。",
    "definition_en": "used when agreeing to do something or when allowing someone to do something",
    "audio": ""
  },
  {
    "key": 422,
    "word": "old",
    "meaning": "古い",
    "definition_ja": "長年住んでいた、もう若くない",
    "definition_en": "having lived for many years, no longer young",
    "audio": ""
  },
  {
    "key": 423,
    "word": "on",
    "meaning": "に",
    "definition_ja": "何かに触れたり、支えられたり、物理的に接触したりしている",
    "definition_en": "touching and being supported or physically in contact by something",
    "audio": ""
  },
  {
    "key": 424,
    "word": "once",
    "meaning": "一回",
    "definition_ja": "一回きり",
    "definition_en": "one time only",
    "audio": ""
  },
  {
    "key": 425,
    "word": "one",
    "meaning": 1,
    "definition_ja": "1番、一人の人間、またはもの",
    "definition_en": "the number 1, a single person or thing",
    "audio": ""
  },
  {
    "key": 426,
    "word": "only",
    "meaning": "のみ",
    "definition_ja": "クラスまたはカテゴリに単独で",
    "definition_en": "alone in a class or category",
    "audio": ""
  },
  {
    "key": 427,
    "word": "open",
    "meaning": "開いた",
    "definition_ja": "閉じていない",
    "definition_en": "not closed",
    "audio": ""
  },
  {
    "key": 428,
    "word": "opportunity",
    "meaning": "機会",
    "definition_ja": "何かができる時間や状況",
    "definition_en": "an amount of time or a situation in which something can be done",
    "audio": ""
  },
  {
    "key": 429,
    "word": "or",
    "meaning": "または",
    "definition_ja": "他の選択肢を紹介するために、選択肢をリンクするために使用される",
    "definition_en": "used to link alternatives, to introduce another choice",
    "audio": ""
  },
  {
    "key": 430,
    "word": "order",
    "meaning": "注文",
    "definition_ja": "従わなければならない指示や指示",
    "definition_en": "an instruction or direction that must be obeyed",
    "audio": ""
  },
  {
    "key": 431,
    "word": "other",
    "meaning": "その他の",
    "definition_ja": "人や物に言及するために使用されるものはすでに言及されているものとは異なる",
    "definition_en": "used to mention a person or thing is different from already mentioned",
    "audio": ""
  },
  {
    "key": 432,
    "word": "ought",
    "meaning": "すべき",
    "definition_ja": "何が期待されているのかを示すために使用されます",
    "definition_en": "used to indicate what is expected",
    "audio": ""
  },
  {
    "key": 433,
    "word": "out",
    "meaning": "でる",
    "definition_ja": "内側または中心から離れる方向または動き",
    "definition_en": "in a direction or movement away from the inside or center",
    "audio": ""
  },
  {
    "key": 434,
    "word": "outside",
    "meaning": "外側",
    "definition_ja": "建物のようなものの周囲または近くの領域",
    "definition_en": "an area around or near something such as a building",
    "audio": ""
  },
  {
    "key": 435,
    "word": "over",
    "meaning": "オーバー",
    "definition_ja": "何かを越えて上向きに",
    "definition_en": "in an upward direction across something",
    "audio": ""
  },
  {
    "key": 436,
    "word": "own",
    "meaning": "自分の",
    "definition_ja": "何かが誰かに属しているとき",
    "definition_en": "when something belongs to someone",
    "audio": ""
  },
  {
    "key": 437,
    "word": "page",
    "meaning": "ページ",
    "definition_ja": "特に本、雑誌などの紙の片面",
    "definition_en": "one side of a sheet of paper especially in a book, magazine, etc.",
    "audio": ""
  },
  {
    "key": 438,
    "word": "paper",
    "meaning": "紙",
    "definition_ja": "書き込み用の薄いシートの形で使用される材料",
    "definition_en": "the material that is used in the form of thin sheets for writing",
    "audio": ""
  },
  {
    "key": 439,
    "word": "parent",
    "meaning": "親",
    "definition_ja": "父親または母親である人",
    "definition_en": "a person who is a father or mother",
    "audio": ""
  },
  {
    "key": 440,
    "word": "park",
    "meaning": "パーク",
    "definition_ja": "街の中や近くにある公共の土地",
    "definition_en": "a piece of public land in or near a city that can be used for pleasure and exercise",
    "audio": ""
  },
  {
    "key": 441,
    "word": "part",
    "meaning": "部",
    "definition_ja": "全体のひとつ",
    "definition_en": "one of the pieces of a whole",
    "audio": ""
  },
  {
    "key": 442,
    "word": "particular",
    "meaning": "特別な",
    "definition_ja": "個々のメンバーを選び出すために使用されます",
    "definition_en": "used to single out an individual member",
    "audio": ""
  },
  {
    "key": 443,
    "word": "particularly",
    "meaning": "特別に",
    "definition_ja": "特に",
    "definition_en": "especially",
    "audio": ""
  },
  {
    "key": 444,
    "word": "party",
    "meaning": "パーティー",
    "definition_ja": "同じ政治的信念を持つ人々の集まり",
    "definition_en": "an organization of people who have the same political beliefs",
    "audio": ""
  },
  {
    "key": 445,
    "word": "pass",
    "meaning": "パス",
    "definition_ja": "何かを乗り越える",
    "definition_en": "to move past something",
    "audio": ""
  },
  {
    "key": 446,
    "word": "past",
    "meaning": "過去",
    "definition_ja": "現在より前の時間",
    "definition_en": "a time before the present",
    "audio": ""
  },
  {
    "key": 447,
    "word": "pause",
    "meaning": "一時停止",
    "definition_ja": "一時停止：何かが再び開始される前に停止される期間",
    "definition_en": "a temporary stop : a period of time in which something is stopped before it is started again",
    "audio": ""
  },
  {
    "key": 448,
    "word": "pay",
    "meaning": "支払う",
    "definition_ja": "商品や仕事のためにお金をあげる",
    "definition_en": "give money for goods or work done",
    "audio": ""
  },
  {
    "key": 449,
    "word": "people",
    "meaning": "人",
    "definition_ja": "人間全般、複数の人",
    "definition_en": "human beings in general, plural of person",
    "audio": ""
  },
  {
    "key": 450,
    "word": "per",
    "meaning": "あたり",
    "definition_ja": "によって指示された、またはに述べられているように、それぞれによって",
    "definition_en": "for each one, by means of, as directed by or stated in",
    "audio": ""
  },
  {
    "key": 451,
    "word": "percent",
    "meaning": "パーセント",
    "definition_ja": "全体の特定の部分",
    "definition_en": "a certain part of a whole",
    "audio": ""
  },
  {
    "key": 452,
    "word": "perhaps",
    "meaning": "おそらく",
    "definition_ja": "確かにではないが、おそらく",
    "definition_en": "possibly but not certainly, maybe",
    "audio": ""
  },
  {
    "key": 453,
    "word": "period",
    "meaning": "期間",
    "definition_ja": "一連のイベント中の時間の長さまたは一部",
    "definition_en": "a length or portion of time during a series of events",
    "audio": ""
  },
  {
    "key": 454,
    "word": "person",
    "meaning": "人",
    "definition_ja": "人間",
    "definition_en": "a human being",
    "audio": ""
  },
  {
    "key": 455,
    "word": "phone",
    "meaning": "電話",
    "definition_ja": "別の場所にいる人と話すために使用される通信システム",
    "definition_en": "a communication system that is used to talk to someone who is in another place",
    "audio": ""
  },
  {
    "key": 456,
    "word": "pick",
    "meaning": "ピック",
    "definition_ja": "グループから（誰かまたは何かを）選択または選択する",
    "definition_en": "to choose or select (someone or something) from a group",
    "audio": ""
  },
  {
    "key": 457,
    "word": "picture",
    "meaning": "画像",
    "definition_ja": "紙やスクリーンに描かれた絵、絵、写真",
    "definition_en": "a painting, drawing or photograph on paper or screen",
    "audio": ""
  },
  {
    "key": 458,
    "word": "piece",
    "meaning": "ピース",
    "definition_ja": "全体から切り取られた部分",
    "definition_en": "a part that is cut or separated from a whole",
    "audio": ""
  },
  {
    "key": 459,
    "word": "place",
    "meaning": "場所",
    "definition_ja": "特定の地域または地域",
    "definition_en": "a particular area or region",
    "audio": ""
  },
  {
    "key": 460,
    "word": "plan",
    "meaning": "計画",
    "definition_ja": "行う方法としての一連のアクション、実行するための詳細な提案",
    "definition_en": "a set of actions as a way to do, detailed proposal for doing",
    "audio": ""
  },
  {
    "key": 461,
    "word": "play",
    "meaning": "遊びます",
    "definition_ja": "楽しみや楽しみのために活動をすること",
    "definition_en": "to do activities for fun or enjoyment",
    "audio": ""
  },
  {
    "key": 462,
    "word": "please",
    "meaning": "お願いします",
    "definition_ja": "丁寧な方法で何かを求めていたもの",
    "definition_en": "used to ask for something in a polite way",
    "audio": ""
  },
  {
    "key": 463,
    "word": "plus",
    "meaning": "プラス",
    "definition_ja": "ゼロより上の値を持つ",
    "definition_en": "having a value that is above zero",
    "audio": ""
  },
  {
    "key": 464,
    "word": "point",
    "meaning": "ポイント",
    "definition_ja": "他の人に受け入れたり理解させたりしようとするという考え",
    "definition_en": "an idea that you try to make others accept or understand",
    "audio": ""
  },
  {
    "key": 465,
    "word": "police",
    "meaning": "警察",
    "definition_ja": "法を執行し、犯罪を捜査し、逮捕する人々または人々の部署",
    "definition_en": "the people or the department of people who enforce laws, investigate crimes, and make arrests",
    "audio": ""
  },
  {
    "key": 466,
    "word": "policy",
    "meaning": "方針",
    "definition_ja": "組織によって提案された一連の行動",
    "definition_en": "a course of action proposed by an organization",
    "audio": ""
  },
  {
    "key": 467,
    "word": "position",
    "meaning": "ポジション",
    "definition_ja": "何かがある場所",
    "definition_en": "the place something is located in",
    "audio": ""
  },
  {
    "key": 468,
    "word": "possible",
    "meaning": "可能",
    "definition_ja": "できること",
    "definition_en": "to be able to be done",
    "audio": ""
  },
  {
    "key": 469,
    "word": "pound",
    "meaning": "ポンド",
    "definition_ja": "16オンスまたは0.4536キログラムに等しい重量の単位",
    "definition_en": "a unit of weight that is equal to 16 ounces or 0.4536 kilograms",
    "audio": ""
  },
  {
    "key": 470,
    "word": "power",
    "meaning": "パワー",
    "definition_ja": "物事をコントロールする能力、能力、または権利",
    "definition_en": "the ability, capacity or right to control things",
    "audio": ""
  },
  {
    "key": 471,
    "word": "present",
    "meaning": "プレゼント",
    "definition_ja": "過去または未来ではなく、現在または現在起こっている",
    "definition_en": "existing or happening now, not in the past or future",
    "audio": ""
  },
  {
    "key": 472,
    "word": "press",
    "meaning": "押す",
    "definition_ja": "新聞、雑誌、テレビのニュースレポート",
    "definition_en": "newspapers, magazines, and TV news reports",
    "audio": ""
  },
  {
    "key": 473,
    "word": "pretty",
    "meaning": "可愛い",
    "definition_ja": "大きいまたは印象的",
    "definition_en": "large or impressive",
    "audio": ""
  },
  {
    "key": 474,
    "word": "price",
    "meaning": "価格",
    "definition_ja": "あなたが何かのために支払うお金の額、または何かがコストをかける",
    "definition_en": "the amount of money that you pay for something or that something costs",
    "audio": ""
  },
  {
    "key": 475,
    "word": "probably",
    "meaning": "恐らく",
    "definition_ja": "何かが非常にありそうであることを意味するために使用されます",
    "definition_en": "used to mean that something is very likely",
    "audio": ""
  },
  {
    "key": 476,
    "word": "problem",
    "meaning": "問題",
    "definition_ja": "対処が難しい、または克服する必要があるもの",
    "definition_en": "something that is difficult to deal with or needs to overcome",
    "audio": ""
  },
  {
    "key": 477,
    "word": "process",
    "meaning": "プロセス",
    "definition_ja": "成果を生み出す一連の行動",
    "definition_en": "a series of actions that produce achievement",
    "audio": ""
  },
  {
    "key": 478,
    "word": "produce",
    "meaning": "作物",
    "definition_ja": "機械を使って原料から何かを作る",
    "definition_en": "to use machines to make something from raw materials",
    "audio": ""
  },
  {
    "key": 479,
    "word": "product",
    "meaning": "製品",
    "definition_ja": "販売または使用されるように作られた、または成長したもの",
    "definition_en": "something that is made or grown to be sold or used",
    "audio": ""
  },
  {
    "key": 480,
    "word": "program",
    "meaning": "プログラム",
    "definition_ja": "結果を達成するために行われることの計画",
    "definition_en": "a plan of things that are done to achieve a result",
    "audio": ""
  },
  {
    "key": 481,
    "word": "project",
    "meaning": "プロジェクト",
    "definition_ja": "特定の目的のための計画された作業",
    "definition_en": "a planned piece of work for specific purpose",
    "audio": ""
  },
  {
    "key": 482,
    "word": "provide",
    "meaning": "提供する",
    "definition_ja": "利用可能にする、使用するために供給する",
    "definition_en": "to make available, to supply for use",
    "audio": ""
  },
  {
    "key": 483,
    "word": "public",
    "meaning": "パブリック",
    "definition_ja": "グループ内のすべての人またはほとんどの人に影響を与える、または影響を与える",
    "definition_en": "concerning or affecting all or most of the people in a group",
    "audio": ""
  },
  {
    "key": 484,
    "word": "pull",
    "meaning": "引く",
    "definition_ja": "特定の方向、特に自分に向かって握って動くこと",
    "definition_en": "to hold onto and move (someone or something) in a particular direction and especially toward yourself",
    "audio": ""
  },
  {
    "key": 485,
    "word": "purpose",
    "meaning": "目的",
    "definition_ja": "何かが行われる理由",
    "definition_en": "the reason for which something is done",
    "audio": ""
  },
  {
    "key": 486,
    "word": "push",
    "meaning": "押す",
    "definition_ja": "力を使って（誰かまたは何か）あなたの前または遠くに移動する",
    "definition_en": "to use force to move (someone or something) forward or away from you",
    "audio": ""
  },
  {
    "key": 487,
    "word": "put",
    "meaning": "プット",
    "definition_ja": "特定の位置に移動または配置する",
    "definition_en": "to move or place in a particular position",
    "audio": ""
  },
  {
    "key": 488,
    "word": "quality",
    "meaning": "品質",
    "definition_ja": "どれだけ良いか悪いか",
    "definition_en": "how good or bad something is",
    "audio": ""
  },
  {
    "key": 489,
    "word": "question",
    "meaning": "質問",
    "definition_ja": "情報を求める、または引き出す",
    "definition_en": "to ask for or elicit information",
    "audio": ""
  },
  {
    "key": 490,
    "word": "quick",
    "meaning": "速い",
    "definition_ja": "短時間で完了または発生",
    "definition_en": "done or happening in a short amount of time",
    "audio": ""
  },
  {
    "key": 491,
    "word": "quite",
    "meaning": "かなり",
    "definition_ja": "非常に大規模に、非常に",
    "definition_en": "to a very large degree, very",
    "audio": ""
  },
  {
    "key": 492,
    "word": "raise",
    "meaning": "上げる",
    "definition_ja": "何かを持ち上げる、またはより高い位置に移動する",
    "definition_en": "to lift or move something to a higher position",
    "audio": ""
  },
  {
    "key": 493,
    "word": "rate",
    "meaning": "レート",
    "definition_ja": "特定の期間における速度または周波数の尺度",
    "definition_en": "the measure of speed or frequency over a particular period of time",
    "audio": ""
  },
  {
    "key": 494,
    "word": "rather",
    "meaning": "むしろ",
    "definition_ja": "ある程度まで",
    "definition_en": "to a certain extent",
    "audio": ""
  },
  {
    "key": 495,
    "word": "read",
    "meaning": "読む",
    "definition_ja": "書かれたものの意味を見て理解するため",
    "definition_en": "to look at and comprehend the meaning of something written",
    "audio": ""
  },
  {
    "key": 496,
    "word": "ready",
    "meaning": "準備ができて",
    "definition_ja": "何かをする準備ができて",
    "definition_en": "prepared to do something",
    "audio": ""
  },
  {
    "key": 497,
    "word": "real",
    "meaning": "リアル",
    "definition_ja": "実際には存在しているか起こっている、想像も想定もされていない",
    "definition_en": "actually existing or happening, not imagined or supposed",
    "audio": ""
  },
  {
    "key": 498,
    "word": "realize",
    "meaning": "気づく",
    "definition_ja": "何かを理解したり、気づいたりするため",
    "definition_en": "to understand or become aware of something",
    "audio": ""
  },
  {
    "key": 499,
    "word": "really",
    "meaning": "本当に",
    "definition_ja": "非常にまたは非常に",
    "definition_en": "very or very much",
    "audio": ""
  },
  {
    "key": 500,
    "word": "reason",
    "meaning": "理由",
    "definition_ja": "アクションまたはイベントの原因",
    "definition_en": "a cause for an action or event",
    "audio": ""
  },
  {
    "key": 501,
    "word": "receive",
    "meaning": "受け取る",
    "definition_ja": "何かを手に入れる",
    "definition_en": "to get or be presented with something",
    "audio": ""
  },
  {
    "key": 502,
    "word": "record",
    "meaning": "記録",
    "definition_ja": "過去の出来事に関する公式の証拠または文書",
    "definition_en": "an official piece of evidence or document about past events",
    "audio": ""
  },
  {
    "key": 503,
    "word": "red",
    "meaning": "赤",
    "definition_ja": "血の色",
    "definition_en": "having the color of blood",
    "audio": ""
  },
  {
    "key": 504,
    "word": "relate",
    "meaning": "関係する",
    "definition_ja": "（2つ以上のことを）見せたり結びつけたりするため",
    "definition_en": "to show or make a connection between (two or more things)",
    "audio": ""
  },
  {
    "key": 505,
    "word": "relationship",
    "meaning": "関係",
    "definition_ja": "二人以上の人や物のつながり",
    "definition_en": "a connection between two or more people or things",
    "audio": ""
  },
  {
    "key": 506,
    "word": "remember",
    "meaning": "覚えている",
    "definition_ja": "前のイメージやアイデアを頭に浮かべるために",
    "definition_en": "to bring a previous image or idea to your mind",
    "audio": ""
  },
  {
    "key": 507,
    "word": "report",
    "meaning": "報告書",
    "definition_ja": "特定の事柄についての物語",
    "definition_en": "a story given about a particular matter",
    "audio": ""
  },
  {
    "key": 508,
    "word": "require",
    "meaning": "要求する",
    "definition_ja": "何かを必要とする、それを必要とする",
    "definition_en": "to need something, to make it necessary",
    "audio": ""
  },
  {
    "key": 509,
    "word": "research",
    "meaning": "研究",
    "definition_ja": "新しい知識を見つけて報告するための慎重な研究",
    "definition_en": "careful study to find and report new knowledge",
    "audio": ""
  },
  {
    "key": 510,
    "word": "response",
    "meaning": "応答",
    "definition_ja": "言われた、あるいは行われたことに対する答えまたは反応",
    "definition_en": "an answer or reaction to something that has been said or done",
    "audio": ""
  },
  {
    "key": 511,
    "word": "rest",
    "meaning": "残り",
    "definition_ja": "仕事ではなく、リラックスしたり、眠ったり、あるいは何もしない時間がある",
    "definition_en": "not at work, to have time to relax, sleep or do nothing",
    "audio": ""
  },
  {
    "key": 512,
    "word": "result",
    "meaning": "結果",
    "definition_ja": "他の何かが原因で起こったこと",
    "definition_en": "a thing that is caused by something else that happened",
    "audio": ""
  },
  {
    "key": 513,
    "word": "review",
    "meaning": "見直し",
    "definition_ja": "何かまたは誰かの品質や状態を注意深く見たり調べたりする行為",
    "definition_en": "an act of carefully looking at or examining the quality or condition of something or someone",
    "audio": ""
  },
  {
    "key": 514,
    "word": "right",
    "meaning": "右",
    "definition_ja": "真実であること、正しいこと、または容認できること",
    "definition_en": "to be true, correct or acceptable",
    "audio": ""
  },
  {
    "key": 515,
    "word": "ring",
    "meaning": "リング",
    "definition_ja": "通常指に装着されているジュエリー",
    "definition_en": "a piece of jewelry that is worn usually on a finger",
    "audio": ""
  },
  {
    "key": 516,
    "word": "road",
    "meaning": "道路",
    "definition_ja": "人や車用の硬い平らな面",
    "definition_en": "a hard flat surface for people or vehicles can use",
    "audio": ""
  },
  {
    "key": 517,
    "word": "room",
    "meaning": "ルーム",
    "definition_ja": "占有可能なスペースで、独自の床と天井があります。",
    "definition_en": "a space that can be occupied which has its own floor and ceiling",
    "audio": ""
  },
  {
    "key": 518,
    "word": "round",
    "meaning": "円形",
    "definition_ja": "円やボールのような形",
    "definition_en": "shaped like a circle or ball",
    "audio": ""
  },
  {
    "key": 519,
    "word": "rule",
    "meaning": "ルール",
    "definition_ja": "状況によっては許されないこと",
    "definition_en": "something that is not allowed in some situations",
    "audio": ""
  },
  {
    "key": 520,
    "word": "run",
    "meaning": "走る",
    "definition_ja": "歩くよりも速い速度で足を動かす",
    "definition_en": "to move with your legs at a speed that is faster than walking",
    "audio": ""
  },
  {
    "key": 521,
    "word": "sale",
    "meaning": "販売",
    "definition_ja": "何かを売ったりお金と交換する行為",
    "definition_en": "the act of selling something or exchanging for money",
    "audio": ""
  },
  {
    "key": 522,
    "word": "same",
    "meaning": "同じ",
    "definition_ja": "同一で、違いはない",
    "definition_en": "identical, not different",
    "audio": ""
  },
  {
    "key": 523,
    "word": "save",
    "meaning": "保存する",
    "definition_ja": "（誰かまたは何か）安全に保つため：（誰かまたは何か）死ぬこと、けがをすること、損害を受けること、または失われることを防ぐため",
    "definition_en": "to keep (someone or something) safe : to stop (someone or something) from dying or being hurt, damaged, or lost",
    "audio": ""
  },
  {
    "key": 524,
    "word": "say",
    "meaning": "いう",
    "definition_ja": "言葉で何かを表現するためにあなたの声を使う",
    "definition_en": "to use your voice to express something with words",
    "audio": ""
  },
  {
    "key": 525,
    "word": "school",
    "meaning": "学校",
    "definition_ja": "子供たちが学びに行く場所",
    "definition_en": "a place where children go to learn",
    "audio": ""
  },
  {
    "key": 526,
    "word": "score",
    "meaning": "スコア",
    "definition_ja": "誰かがゲームやテストで獲得したポイント数",
    "definition_en": "the number of points someone gets in a game or test",
    "audio": ""
  },
  {
    "key": 527,
    "word": "second",
    "meaning": "二番目",
    "definition_ja": "時間の単位、60分の1",
    "definition_en": "a unit of time, one sixtieth of a minute",
    "audio": ""
  },
  {
    "key": 528,
    "word": "see",
    "meaning": "見る",
    "definition_ja": "目で気づくか気づく",
    "definition_en": "to notice or become aware of with the eyes",
    "audio": ""
  },
  {
    "key": 529,
    "word": "seem",
    "meaning": "思われる",
    "definition_ja": "何かのように見える",
    "definition_en": "to appear to be something",
    "audio": ""
  },
  {
    "key": 530,
    "word": "sell",
    "meaning": "売る",
    "definition_ja": "お金で何かを交換する",
    "definition_en": "to exchange (something) for money",
    "audio": ""
  },
  {
    "key": 531,
    "word": "send",
    "meaning": "送る",
    "definition_ja": "別の目的地に行かせる",
    "definition_en": "to cause to go to another destination",
    "audio": ""
  },
  {
    "key": 532,
    "word": "sense",
    "meaning": "感覚",
    "definition_ja": "情報を受け取るための私達の自然な能力の1つ",
    "definition_en": "one of our natural abilities for receiving information",
    "audio": ""
  },
  {
    "key": 533,
    "word": "service",
    "meaning": "サービス",
    "definition_ja": "誰かのために手助けをしたり仕事をしたりする行為",
    "definition_en": "the action of helping or doing work for someone",
    "audio": ""
  },
  {
    "key": 534,
    "word": "set",
    "meaning": "セット",
    "definition_ja": "場所や位置に何かを置く、または立てる",
    "definition_en": "to put or stand something in a place or position",
    "audio": ""
  },
  {
    "key": 535,
    "word": "seven",
    "meaning": "セブン",
    "definition_ja": "数7",
    "definition_en": "the number 7",
    "audio": ""
  },
  {
    "key": 536,
    "word": "seventy",
    "meaning": 70,
    "definition_ja": "数70",
    "definition_en": "the number 70",
    "audio": ""
  },
  {
    "key": 537,
    "word": "several",
    "meaning": "いくつか",
    "definition_ja": "2つより多いが多くはない",
    "definition_en": "more than two but not many",
    "audio": ""
  },
  {
    "key": 538,
    "word": "shall",
    "meaning": "する",
    "definition_ja": "起こることを期待するために、将来の時制を表現する",
    "definition_en": "expressing the future tense, to expect to happen",
    "audio": ""
  },
  {
    "key": 539,
    "word": "share",
    "meaning": "シェア",
    "definition_ja": "他人と何かを持ったり使ったりする",
    "definition_en": "to have or use something with others",
    "audio": ""
  },
  {
    "key": 540,
    "word": "she",
    "meaning": "彼女",
    "definition_ja": "主題である女性を指すために使用されます",
    "definition_en": "used to refer to a female that is the subject",
    "audio": ""
  },
  {
    "key": 541,
    "word": "shop",
    "meaning": "ショップ",
    "definition_ja": "商品やサービスが販売されている建物または部屋",
    "definition_en": "a building or room where goods and services are sold",
    "audio": ""
  },
  {
    "key": 542,
    "word": "short",
    "meaning": "ショート",
    "definition_ja": "端から端までわずかな距離",
    "definition_en": "a small distance from one end to the other",
    "audio": ""
  },
  {
    "key": 543,
    "word": "should",
    "meaning": "すべき",
    "definition_ja": "何が適切か合理的かを示すために使用されます",
    "definition_en": "used to indicate what is proper or reasonable",
    "audio": ""
  },
  {
    "key": 544,
    "word": "show",
    "meaning": "見せる",
    "definition_ja": "見られるようにする",
    "definition_en": "to cause or allow to be seen",
    "audio": ""
  },
  {
    "key": 545,
    "word": "side",
    "meaning": "側",
    "definition_ja": "中心から離れた位置または方向",
    "definition_en": "a position or direction that is away from the center",
    "audio": ""
  },
  {
    "key": 546,
    "word": "sign",
    "meaning": "符号",
    "definition_ja": "何か他のものが存在すること、真実であること、または起こることを示す何か",
    "definition_en": "something which shows that something else exists, is true, or will happen",
    "audio": ""
  },
  {
    "key": 547,
    "word": "since",
    "meaning": "以来",
    "definition_ja": "という理由で",
    "definition_en": "because, for the reason that",
    "audio": ""
  },
  {
    "key": 548,
    "word": "sing",
    "meaning": "歌う",
    "definition_ja": "あなたの声を使って歌や曲の形の楽音を作る",
    "definition_en": "to use your voice to make musical sounds in the form of a song or tune",
    "audio": ""
  },
  {
    "key": 549,
    "word": "single",
    "meaning": "シングル",
    "definition_ja": "持っていないか、他の人を含めて、1人だけ",
    "definition_en": "not having or including another, only one",
    "audio": ""
  },
  {
    "key": 550,
    "word": "sister",
    "meaning": "シスター",
    "definition_ja": "あなたと同じ両親の一方または両方を持つ少女または女性",
    "definition_en": "a girl or woman who has one or both of the same parents as you",
    "audio": ""
  },
  {
    "key": 551,
    "word": "sit",
    "meaning": "座る",
    "definition_ja": "椅子やソファの上で安静にする",
    "definition_en": "to be in a resting position on a chair or couch",
    "audio": ""
  },
  {
    "key": 552,
    "word": "site",
    "meaning": "サイト",
    "definition_ja": "何かがあった場所、あった場所、または存在する場所",
    "definition_en": "the place where something is, was, or will be located",
    "audio": ""
  },
  {
    "key": 553,
    "word": "situation",
    "meaning": "状況",
    "definition_ja": "条件、場所、または位置",
    "definition_en": "a condition, location or position",
    "audio": ""
  },
  {
    "key": 554,
    "word": "six",
    "meaning": 6,
    "definition_ja": "数6",
    "definition_en": "the number 6",
    "audio": ""
  },
  {
    "key": 555,
    "word": "sixty",
    "meaning": 60,
    "definition_ja": "数60",
    "definition_en": "the number 60",
    "audio": ""
  },
  {
    "key": 556,
    "word": "size",
    "meaning": "サイズ",
    "definition_ja": "人や物が占める物理的な空間の総量",
    "definition_en": "the total amount of physical space that a person or thing occupies",
    "audio": ""
  },
  {
    "key": 557,
    "word": "sleep",
    "meaning": "睡眠",
    "definition_ja": "目を閉じて無意識になることによってあなたの心と体を休ませる",
    "definition_en": "to rest your mind and body by closing your eyes and becoming unconscious",
    "audio": ""
  },
  {
    "key": 558,
    "word": "small",
    "meaning": "小さい",
    "definition_ja": "大きさはほとんどないが、大きさはあまり良くない",
    "definition_en": "little in size, not great in amount",
    "audio": ""
  },
  {
    "key": 559,
    "word": "so",
    "meaning": "そう",
    "definition_ja": "示唆または述べられている程度まで",
    "definition_en": "to a  degree that is suggested or stated",
    "audio": ""
  },
  {
    "key": 560,
    "word": "some",
    "meaning": "一部",
    "definition_ja": "不特定の量または数を参照するために使用されます",
    "definition_en": "used to refer to an unspecified amount or number",
    "audio": ""
  },
  {
    "key": 561,
    "word": "somebody",
    "meaning": "誰か",
    "definition_ja": "知られていない、名前が付いていない、または指定されていない人",
    "definition_en": "person who is not known, named, or specified",
    "audio": ""
  },
  {
    "key": 562,
    "word": "someone",
    "meaning": "誰か",
    "definition_ja": "何人か誰か",
    "definition_en": "some person;  somebody",
    "audio": ""
  },
  {
    "key": 563,
    "word": "something",
    "meaning": "何か",
    "definition_ja": "まだ知られていない、指定された、または名前が付けられていないもの",
    "definition_en": "a thing that is not yet know, specified or named",
    "audio": ""
  },
  {
    "key": 564,
    "word": "sometimes",
    "meaning": "時々",
    "definition_ja": "たまに。特定の時期にのみ",
    "definition_en": "occasionally; only at certain times,",
    "audio": ""
  },
  {
    "key": 565,
    "word": "somewhere",
    "meaning": "どこかに",
    "definition_ja": "知られていない、名前が付けられていない、または指定されていない場所で、またはで",
    "definition_en": "in, at, or to a place not known, named, or specified",
    "audio": ""
  },
  {
    "key": 566,
    "word": "soon",
    "meaning": "まもなく",
    "definition_ja": "今から間もなく",
    "definition_en": "at a time not long from now",
    "audio": ""
  },
  {
    "key": 567,
    "word": "sorry",
    "meaning": "ごめんなさい",
    "definition_ja": "悲しみや後悔を感じる",
    "definition_en": "feeling sorrow or regret",
    "audio": ""
  },
  {
    "key": 568,
    "word": "sort",
    "meaning": "ソート",
    "definition_ja": "共有された品質を持つ人々のグループ",
    "definition_en": "a group of people or things that have some shared quality",
    "audio": ""
  },
  {
    "key": 569,
    "word": "sound",
    "meaning": "音",
    "definition_ja": "聞こえたこと",
    "definition_en": "something that is heard",
    "audio": ""
  },
  {
    "key": 570,
    "word": "speak",
    "meaning": "話す",
    "definition_ja": "言葉を使って情報を伝えたり、考えを表現したりする",
    "definition_en": "to use words to tell information or express thoughts",
    "audio": ""
  },
  {
    "key": 571,
    "word": "special",
    "meaning": "特殊",
    "definition_ja": "通常のものとは異なる、通常よりも優れている、または優れている",
    "definition_en": "different from what is usual, better or greater than normal",
    "audio": ""
  },
  {
    "key": 572,
    "word": "specific",
    "meaning": "特定",
    "definition_ja": "特別または特定の、明確に提示されたまたは述べられた",
    "definition_en": "special or particular, clearly presented or stated",
    "audio": ""
  },
  {
    "key": 573,
    "word": "spend",
    "meaning": "費やす",
    "definition_ja": "お金を使って何かを支払う",
    "definition_en": "to use money to pay for something",
    "audio": ""
  },
  {
    "key": 574,
    "word": "staff",
    "meaning": "スタッフ",
    "definition_ja": "組織や企業で働く人々のグループ",
    "definition_en": "a group of people who work for an organization or business",
    "audio": ""
  },
  {
    "key": 575,
    "word": "stage",
    "meaning": "ステージ",
    "definition_ja": "プロセス内の特定のポイント",
    "definition_en": "a particular point in a process",
    "audio": ""
  },
  {
    "key": 576,
    "word": "stand",
    "meaning": "スタンド",
    "definition_ja": "足で支えられた直立姿勢",
    "definition_en": "to be in an upright position supported by on your feet",
    "audio": ""
  },
  {
    "key": 577,
    "word": "standard",
    "meaning": "標準",
    "definition_ja": "許容できると考えられる品質または達成のレベル",
    "definition_en": "a level of quality or achievement that is considered acceptable",
    "audio": ""
  },
  {
    "key": 578,
    "word": "start",
    "meaning": "開始",
    "definition_ja": "何かを始める",
    "definition_en": "to begin doing something",
    "audio": ""
  },
  {
    "key": 579,
    "word": "state",
    "meaning": "状態",
    "definition_ja": "生き方または既存のやり方",
    "definition_en": "a way of living or existing",
    "audio": ""
  },
  {
    "key": 580,
    "word": "statement",
    "meaning": "ステートメント",
    "definition_ja": "誰かが正式に言ったり書いたりする何か",
    "definition_en": "something that someone says or writes officially",
    "audio": ""
  },
  {
    "key": 581,
    "word": "stay",
    "meaning": "滞在",
    "definition_ja": "同じ場所にい続けるため。残る",
    "definition_en": "to continue to be in the same place;  remain",
    "audio": ""
  },
  {
    "key": 582,
    "word": "step",
    "meaning": "ステップ",
    "definition_ja": "足を上げて別の場所に置くことで移動する",
    "definition_en": "moving by lifting  a foot and putting it down in a different place",
    "audio": ""
  },
  {
    "key": 583,
    "word": "stick",
    "meaning": "スティック",
    "definition_ja": "切り傷や折れた枝や小枝",
    "definition_en": "a cut or broken branch or twig",
    "audio": ""
  },
  {
    "key": 584,
    "word": "still",
    "meaning": "それでも",
    "definition_ja": "行動や状態が続くことを表現するために使用されます",
    "definition_en": "used to express that an action or condition continues",
    "audio": ""
  },
  {
    "key": 585,
    "word": "stop",
    "meaning": "やめる",
    "definition_ja": "動かない、あるいは終わらない",
    "definition_en": "to not move or come to an end",
    "audio": ""
  },
  {
    "key": 586,
    "word": "story",
    "meaning": "ストーリー",
    "definition_ja": "何かが起こった方法の説明",
    "definition_en": "a description of how something happened",
    "audio": ""
  },
  {
    "key": 587,
    "word": "straight",
    "meaning": "まっすぐ",
    "definition_ja": "曲線、曲がり、または角度がない",
    "definition_en": "not having curves, bends, or angles",
    "audio": ""
  },
  {
    "key": 588,
    "word": "street",
    "meaning": "通り",
    "definition_ja": "市や町の公道",
    "definition_en": "a public road in a city or town",
    "audio": ""
  },
  {
    "key": 589,
    "word": "strong",
    "meaning": "強い",
    "definition_ja": "肉体的な力や力を持っている",
    "definition_en": "having physical power or strength",
    "audio": ""
  },
  {
    "key": 590,
    "word": "student",
    "meaning": "学生",
    "definition_ja": "学校に通う人",
    "definition_en": "a person who attends a school",
    "audio": ""
  },
  {
    "key": 591,
    "word": "study",
    "meaning": "調査",
    "definition_ja": "何かについて学ぶために時間を費やす",
    "definition_en": "devoting time to learn about something",
    "audio": ""
  },
  {
    "key": 592,
    "word": "stuff",
    "meaning": "もの",
    "definition_ja": "材料、消耗品、または機器",
    "definition_en": "materials, supplies, or equipment",
    "audio": ""
  },
  {
    "key": 593,
    "word": "subject",
    "meaning": "件名",
    "definition_ja": "議論または説明されていること",
    "definition_en": "the thing being discussed or described",
    "audio": ""
  },
  {
    "key": 594,
    "word": "such",
    "meaning": "そのような",
    "definition_ja": "好きか類似",
    "definition_en": "like or similar",
    "audio": ""
  },
  {
    "key": 595,
    "word": "suggest",
    "meaning": "提案する",
    "definition_ja": "可能なこととして何かを言及するために",
    "definition_en": "to mention something as a possible thing to be done",
    "audio": ""
  },
  {
    "key": 596,
    "word": "summer",
    "meaning": "夏",
    "definition_ja": "春の終わりから秋の終わりまでの最も暖かい季節",
    "definition_en": "the warmest season of the year that is after spring and before autumn",
    "audio": ""
  },
  {
    "key": 597,
    "word": "support",
    "meaning": "サポート",
    "definition_ja": "援助する",
    "definition_en": "to give assistance to",
    "audio": ""
  },
  {
    "key": 598,
    "word": "suppose",
    "meaning": "と思う",
    "definition_ja": "何が起こるのかを想像するために、何かが起こっている、または真実であると考える",
    "definition_en": "to think of something as happening or being true in order to imagine what might happen",
    "audio": ""
  },
  {
    "key": 599,
    "word": "sure",
    "meaning": "きっと",
    "definition_ja": "完全に自信を持っていて、疑いもない",
    "definition_en": "completely confident of being right, not having any doubt",
    "audio": ""
  },
  {
    "key": 600,
    "word": "surprise",
    "meaning": "驚き",
    "definition_ja": "予期しない出来事、情報など",
    "definition_en": "an unexpected event, piece of information, etc.",
    "audio": ""
  },
  {
    "key": 601,
    "word": "system",
    "meaning": "システム",
    "definition_ja": "一緒に動くか一緒に働く一連の関連部分",
    "definition_en": "a set of related parts that move or work together",
    "audio": ""
  },
  {
    "key": 602,
    "word": "table",
    "meaning": "表",
    "definition_ja": "平らな上と足を持つ家具",
    "definition_en": "a piece of furniture with a flat top and legs",
    "audio": ""
  },
  {
    "key": 603,
    "word": "take",
    "meaning": "取る",
    "definition_ja": "手を携えて移動する、手を伸ばす",
    "definition_en": "to carry or move with one's hands, to reach for",
    "audio": ""
  },
  {
    "key": 604,
    "word": "talk",
    "meaning": "トーク",
    "definition_ja": "言葉を使って意見を述べたり情報を提供したりする",
    "definition_en": "using words to express opinions or give information",
    "audio": ""
  },
  {
    "key": 605,
    "word": "tape",
    "meaning": "テープ",
    "definition_ja": "物をくっつけるのに使われる長く細い材料",
    "definition_en": "a long, narrow piece of material used to stick things",
    "audio": ""
  },
  {
    "key": 606,
    "word": "tax",
    "meaning": "税金",
    "definition_ja": "政府が人々に支払うように要求するお金",
    "definition_en": "money that a government requires people to pay",
    "audio": ""
  },
  {
    "key": 607,
    "word": "tea",
    "meaning": "お茶",
    "definition_ja": "アジアの植物の乾燥葉をお湯に浸して作られる飲み物",
    "definition_en": "a drink that is made by soaking the dried leaves of an Asian plant in hot water",
    "audio": ""
  },
  {
    "key": 608,
    "word": "teach",
    "meaning": "教える",
    "definition_ja": "指導するか学ぶのを助ける",
    "definition_en": "to instruct or help to learn",
    "audio": ""
  },
  {
    "key": 609,
    "word": "teacher",
    "meaning": "先生",
    "definition_ja": "仕事が学校、大学などで教えることになっている人",
    "definition_en": "someone whose job is to teach in a school, college, etc.",
    "audio": ""
  },
  {
    "key": 610,
    "word": "team",
    "meaning": "チーム",
    "definition_ja": "スポーツ、ゲームで競争する人々のグループ",
    "definition_en": "a group of people who compete in a sport, game",
    "audio": ""
  },
  {
    "key": 611,
    "word": "tell",
    "meaning": "言う",
    "definition_ja": "誰かに情報を言ったり伝えたりするため",
    "definition_en": "to say or communicate information to someone",
    "audio": ""
  },
  {
    "key": 612,
    "word": "ten",
    "meaning": "十",
    "definition_ja": "数10",
    "definition_en": "the number 10",
    "audio": ""
  },
  {
    "key": 613,
    "word": "tend",
    "meaning": "傾向がある",
    "definition_ja": "よく起きること、誰かがよく行っていること、またはしそうなことを記述するために使用されます。",
    "definition_en": "used to describe what often happens or what someone often does or is likely to do",
    "audio": ""
  },
  {
    "key": 614,
    "word": "term",
    "meaning": "期間",
    "definition_ja": "何か他のものを説明する単語または句",
    "definition_en": "a word or phrase that describes something else",
    "audio": ""
  },
  {
    "key": 615,
    "word": "test",
    "meaning": "テスト",
    "definition_ja": "人の能力を測るために設計された一連の質問",
    "definition_en": "a set of questions designed to measure a person's ability",
    "audio": ""
  },
  {
    "key": 616,
    "word": "text",
    "meaning": "テキスト",
    "definition_ja": "本稿またはスピーチの原文",
    "definition_en": "the original words in main writing or speech",
    "audio": ""
  },
  {
    "key": 617,
    "word": "than",
    "meaning": "より",
    "definition_ja": "比較されている2番目の部分を紹介するために使用されます",
    "definition_en": "used to introduce a second part that is being compared",
    "audio": ""
  },
  {
    "key": 618,
    "word": "thank",
    "meaning": "感謝",
    "definition_ja": "あなたが彼または彼女がした、または与えた何かに感謝していることを（誰かに）伝えるため",
    "definition_en": "to tell (someone) that you are grateful for something that he or she has done or given",
    "audio": ""
  },
  {
    "key": 619,
    "word": "that",
    "meaning": "それ",
    "definition_ja": "特定の人、物、事実、アイデアを識別するために使用されます",
    "definition_en": "used to identify a specific person, thing, fact or idea",
    "audio": ""
  },
  {
    "key": 620,
    "word": "the",
    "meaning": "の",
    "definition_ja": "すでに言及したことを指していた",
    "definition_en": "used to point to something already mentioned",
    "audio": ""
  },
  {
    "key": 621,
    "word": "themselves",
    "meaning": "彼ら自身",
    "definition_ja": "代名詞 'they'の再帰形",
    "definition_en": "the reflexive form of the pronoun 'they'",
    "audio": ""
  },
  {
    "key": 622,
    "word": "then",
    "meaning": "それから",
    "definition_ja": "その時、言及した時、その後",
    "definition_en": "at that time, at the time mentioned, after that",
    "audio": ""
  },
  {
    "key": 623,
    "word": "there",
    "meaning": "そこ",
    "definition_ja": "その場所または位置で、その場所で",
    "definition_en": "in that place or position, at that location",
    "audio": ""
  },
  {
    "key": 624,
    "word": "therefore",
    "meaning": "あそこ",
    "definition_ja": "その理由のために、またはそれのために",
    "definition_en": "for that reason or because of that",
    "audio": ""
  },
  {
    "key": 625,
    "word": "they",
    "meaning": "彼ら",
    "definition_ja": "2人以上の人、動物、物を指すのに使用",
    "definition_en": "used to refer to two or more people, animals, or things",
    "audio": ""
  },
  {
    "key": 626,
    "word": "thing",
    "meaning": "こと",
    "definition_ja": "オブジェクト、動物、または品質には特定の名前がありません",
    "definition_en": "an object, animal, or quality doesn't have a specific name",
    "audio": ""
  },
  {
    "key": 627,
    "word": "think",
    "meaning": "と思う",
    "definition_ja": "信じたり、特定の考えを持ったりするために",
    "definition_en": "to believe or have a particular idea",
    "audio": ""
  },
  {
    "key": 628,
    "word": "thirty",
    "meaning": "三十",
    "definition_ja": "30番",
    "definition_en": "the number 30",
    "audio": ""
  },
  {
    "key": 629,
    "word": "this",
    "meaning": "この",
    "definition_ja": "近くにいる特定の人、物、またはアイデアを識別するために使用されます",
    "definition_en": "used to identify a specific person, thing, or idea that is close",
    "audio": ""
  },
  {
    "key": 630,
    "word": "though",
    "meaning": "だけど",
    "definition_ja": "という事実にもかかわらず、",
    "definition_en": "although, despite the fact that",
    "audio": ""
  },
  {
    "key": 631,
    "word": "thousand",
    "meaning": "千",
    "definition_ja": "1000番",
    "definition_en": "the number 1000",
    "audio": ""
  },
  {
    "key": 632,
    "word": "three",
    "meaning": "三",
    "definition_ja": "数3",
    "definition_en": "the number 3",
    "audio": ""
  },
  {
    "key": 633,
    "word": "through",
    "meaning": "スルー",
    "definition_ja": "一方の側に入り、もう一方の側に出る",
    "definition_en": "into one side and out of the other side",
    "audio": ""
  },
  {
    "key": 634,
    "word": "throw",
    "meaning": "スロー",
    "definition_ja": "すばやく腕を前方に動かすことによって、（何か）をあなたの手から外へと空中を移動させる",
    "definition_en": "to cause (something) to move out of your hand and through the air by quickly moving your arm forward",
    "audio": ""
  },
  {
    "key": 635,
    "word": "till",
    "meaning": "まで",
    "definition_ja": "まで",
    "definition_en": "until",
    "audio": ""
  },
  {
    "key": 636,
    "word": "time",
    "meaning": "時間",
    "definition_ja": "数分、数時間、数日などで測定されたもの",
    "definition_en": "something measured in minutes, hours, days, etc.",
    "audio": ""
  },
  {
    "key": 637,
    "word": "to",
    "meaning": "に",
    "definition_ja": "場所や方向を示すために使用されます",
    "definition_en": "used to indicate place or direction",
    "audio": ""
  },
  {
    "key": 638,
    "word": "today",
    "meaning": "今日",
    "definition_ja": "この日、この今日、現時点で",
    "definition_en": "this day, this present day, at the present time",
    "audio": ""
  },
  {
    "key": 639,
    "word": "together",
    "meaning": "一緒に",
    "definition_ja": "互いに、または1つのグループに属する",
    "definition_en": "to be with each other or in one group",
    "audio": ""
  },
  {
    "key": 640,
    "word": "tomorrow",
    "meaning": "明日",
    "definition_ja": "今日の翌日",
    "definition_en": "the day after today",
    "audio": ""
  },
  {
    "key": 641,
    "word": "tonight",
    "meaning": "今晩",
    "definition_ja": "今夜またはこの日の翌日",
    "definition_en": "this night or the night following this day",
    "audio": ""
  },
  {
    "key": 642,
    "word": "too",
    "meaning": "も",
    "definition_ja": "また、",
    "definition_en": "in addition, also",
    "audio": ""
  },
  {
    "key": 643,
    "word": "top",
    "meaning": "上",
    "definition_ja": "最も高い部分、ポイント、または何かのレベル",
    "definition_en": "the highest part, point, or level of something",
    "audio": ""
  },
  {
    "key": 644,
    "word": "totally",
    "meaning": "全く",
    "definition_ja": "完全に",
    "definition_en": "completely",
    "audio": ""
  },
  {
    "key": 645,
    "word": "toward",
    "meaning": "に向かって",
    "definition_ja": "の方向に",
    "definition_en": "in the direction of",
    "audio": ""
  },
  {
    "key": 646,
    "word": "town",
    "meaning": "タウン",
    "definition_ja": "人々が住んでいる場所、村（village）よりも大きく、都市（city）よりも小さい",
    "definition_en": "a place people live, larger than a village, smaller than a city",
    "audio": ""
  },
  {
    "key": 647,
    "word": "trade",
    "meaning": "トレード",
    "definition_ja": "購入、販売、または交換の活動",
    "definition_en": "the activity of buying, selling, or exchanging",
    "audio": ""
  },
  {
    "key": 648,
    "word": "train",
    "meaning": "列車",
    "definition_ja": "鉄道を走るコネクテッドカーのグループ",
    "definition_en": "a group of connected vehicles traveling on railways",
    "audio": ""
  },
  {
    "key": 649,
    "word": "travel",
    "meaning": "旅行",
    "definition_ja": "旅行や旅行に行く：場所、特に遠くにある場所に行く",
    "definition_en": "to go on a trip or journey : to go to a place and especially one that is far away",
    "audio": ""
  },
  {
    "key": 650,
    "word": "trouble",
    "meaning": "トラブル",
    "definition_ja": "問題や困難",
    "definition_en": "problems or difficulties",
    "audio": ""
  },
  {
    "key": 651,
    "word": "TRUE",
    "meaning": "TRUE",
    "definition_ja": "事実に同意すること、虚偽、実在または実際ではない",
    "definition_en": "agreeing with the facts, not false, real or actual",
    "audio": ""
  },
  {
    "key": 652,
    "word": "try",
    "meaning": "やってみる",
    "definition_ja": "努力をすること、何かをやろうとすること",
    "definition_en": "to make an effort, to attempt to do something",
    "audio": ""
  },
  {
    "key": 653,
    "word": "turn",
    "meaning": "順番",
    "definition_ja": "中心点を動き回る",
    "definition_en": "to move around a central point",
    "audio": ""
  },
  {
    "key": 654,
    "word": "twelve",
    "meaning": 12,
    "definition_ja": "数12",
    "definition_en": "the number 12",
    "audio": ""
  },
  {
    "key": 655,
    "word": "twenty",
    "meaning": 20,
    "definition_ja": "数20",
    "definition_en": "the number 20",
    "audio": ""
  },
  {
    "key": 656,
    "word": "two",
    "meaning": 2,
    "definition_ja": "数2",
    "definition_en": "the number 2",
    "audio": ""
  },
  {
    "key": 657,
    "word": "type",
    "meaning": "タイプ",
    "definition_ja": "共通の特性を持つ人または物の特定のカテゴリー",
    "definition_en": "a particular category of people or objects with a common characteristic",
    "audio": ""
  },
  {
    "key": 658,
    "word": "unclear",
    "meaning": "不明",
    "definition_ja": "わかりにくい",
    "definition_en": "not easy to understand",
    "audio": ""
  },
  {
    "key": 659,
    "word": "under",
    "meaning": "下",
    "definition_ja": "何か下にある",
    "definition_en": "to be below something",
    "audio": ""
  },
  {
    "key": 660,
    "word": "understand",
    "meaning": "わかる",
    "definition_ja": "知ること、何かを知覚すること、理解すること",
    "definition_en": "to know, to perceive or comprehend something",
    "audio": ""
  },
  {
    "key": 661,
    "word": "unless",
    "meaning": "ない限り",
    "definition_ja": "何が起こるか、行われるか、何か他のことが起こらない、行われない、または真実でない場合に真実になることを言うために使用されます。",
    "definition_en": "used to say what will happen, be done, or be true if something else does not happen, is not done, or is not true",
    "audio": ""
  },
  {
    "key": 662,
    "word": "until",
    "meaning": "まで",
    "definition_ja": "特定の状況が発生した時点を示す",
    "definition_en": "up to, to indicate the point in time when a particular situation",
    "audio": ""
  },
  {
    "key": 663,
    "word": "up",
    "meaning": "アップ",
    "definition_ja": "低い場所から高い場所へ移動する",
    "definition_en": "to move towards a high place from a lower one",
    "audio": ""
  },
  {
    "key": 664,
    "word": "use",
    "meaning": "つかいます",
    "definition_ja": "別のことで何かをするために",
    "definition_en": "to do something with another thing",
    "audio": ""
  },
  {
    "key": 665,
    "word": "usually",
    "meaning": "通常",
    "definition_ja": "最も頻繁に起こるように",
    "definition_en": "in the way that most often happens",
    "audio": ""
  },
  {
    "key": 666,
    "word": "value",
    "meaning": "値",
    "definition_ja": "何か価値がある金額",
    "definition_en": "the amount of money something is worth",
    "audio": ""
  },
  {
    "key": 667,
    "word": "various",
    "meaning": "いろんな",
    "definition_ja": "以前はいくつかの異なること、または多くの異なることを指していました。",
    "definition_en": "used to refer to several different or many different things",
    "audio": ""
  },
  {
    "key": 668,
    "word": "very",
    "meaning": "非常に",
    "definition_ja": "高度に",
    "definition_en": "to a high degree",
    "audio": ""
  },
  {
    "key": 669,
    "word": "view",
    "meaning": "見る",
    "definition_ja": "意見や考え方",
    "definition_en": "an opinion or way of thinking",
    "audio": ""
  },
  {
    "key": 670,
    "word": "visit",
    "meaning": "訪問",
    "definition_ja": "どこかへ行くために",
    "definition_en": "to go somewhere to spend time with",
    "audio": ""
  },
  {
    "key": 671,
    "word": "vote",
    "meaning": "投票",
    "definition_ja": "誰かまたは何かに対して、またはそれに対して公式な選択をするため",
    "definition_en": "to make an official choice for or against someone or something",
    "audio": ""
  },
  {
    "key": 672,
    "word": "wait",
    "meaning": "待つ",
    "definition_ja": "予期されるイベントが発生するまで滞在する",
    "definition_en": "to stay or remain until an expected event happens",
    "audio": ""
  },
  {
    "key": 673,
    "word": "walk",
    "meaning": "歩く",
    "definition_ja": "足で動く、歩く",
    "definition_en": "to move with your legs, to go on foot",
    "audio": ""
  },
  {
    "key": 674,
    "word": "want",
    "meaning": "欲しいです",
    "definition_ja": "欲しい、または欲しい",
    "definition_en": "to desire or wish for",
    "audio": ""
  },
  {
    "key": 675,
    "word": "war",
    "meaning": "戦争",
    "definition_ja": "各国間の争いや葛藤の期間",
    "definition_en": "a period of fighting or conflict between countries,",
    "audio": ""
  },
  {
    "key": 676,
    "word": "watch",
    "meaning": "時計",
    "definition_ja": "何が起こっているのかに注意を払うために",
    "definition_en": "to pay attention to what is happening",
    "audio": ""
  },
  {
    "key": 677,
    "word": "water",
    "meaning": "水",
    "definition_ja": "海、川、雨を形成する透明な液体",
    "definition_en": "the clear liquid which forms the seas, rivers and rain",
    "audio": ""
  },
  {
    "key": 678,
    "word": "way",
    "meaning": "方法",
    "definition_ja": "何かのマナーや特徴",
    "definition_en": "a manner or characteristic of something",
    "audio": ""
  },
  {
    "key": 679,
    "word": "we",
    "meaning": "我々",
    "definition_ja": "話者や他の人を主題として参照するために使用されます",
    "definition_en": "used to refer to the speaker and another person as the subject",
    "audio": ""
  },
  {
    "key": 680,
    "word": "wear",
    "meaning": "着る",
    "definition_ja": "体の一部に衣服として使用する",
    "definition_en": "to use or have as clothing over part of your body",
    "audio": ""
  },
  {
    "key": 681,
    "word": "week",
    "meaning": "週間",
    "definition_ja": "7日間で、日曜日に始まり土曜日に終わります",
    "definition_en": "a period of seven days,  starts on Sunday and end on Saturday",
    "audio": ""
  },
  {
    "key": 682,
    "word": "weekend",
    "meaning": "週末",
    "definition_ja": "土曜日と日曜日",
    "definition_en": "Saturday and Sunday",
    "audio": ""
  },
  {
    "key": 683,
    "word": "well",
    "meaning": "よく",
    "definition_ja": "成功した方法で、良い方法または満足のいく方法で",
    "definition_en": "in a successful way, in a good or satisfactory way",
    "audio": ""
  },
  {
    "key": 684,
    "word": "what",
    "meaning": "何",
    "definition_ja": "誰かまたは何かについての情報を求める",
    "definition_en": "asking for information about someone or something",
    "audio": ""
  },
  {
    "key": 685,
    "word": "whatever",
    "meaning": "なんでも",
    "definition_ja": "何でもあるいはすべてのこと",
    "definition_en": "anything or everything that or no matter what",
    "audio": ""
  },
  {
    "key": 686,
    "word": "when",
    "meaning": "いつ",
    "definition_ja": "何時、何時、何時、何時、どれくらい早く",
    "definition_en": "at what time, at, in, during which, how soon",
    "audio": ""
  },
  {
    "key": 687,
    "word": "where",
    "meaning": "どこで",
    "definition_ja": "何処にいるの？",
    "definition_en": "to be in at or in what place?",
    "audio": ""
  },
  {
    "key": 688,
    "word": "whether",
    "meaning": "気にする",
    "definition_ja": "選択肢間の疑問を表明する",
    "definition_en": "expressing a doubt between alternatives",
    "audio": ""
  },
  {
    "key": 689,
    "word": "which",
    "meaning": "どっち",
    "definition_ja": "グループの1つまたは複数、1つまたは複数の人またはモノ",
    "definition_en": "what one or ones of a group, one or more people or things",
    "audio": ""
  },
  {
    "key": 690,
    "word": "while",
    "meaning": "しながら",
    "definition_ja": "その間に、同時に",
    "definition_en": "during the time that, at the same time",
    "audio": ""
  },
  {
    "key": 691,
    "word": "white",
    "meaning": "白",
    "definition_ja": "雪の色をしている、淡いまたは淡い色",
    "definition_en": "having the color of snow, to be light or pale in color",
    "audio": ""
  },
  {
    "key": 692,
    "word": "who",
    "meaning": "誰",
    "definition_ja": "何を、何人か、何人かについて尋ねる",
    "definition_en": "what or which person or people, to ask about, talking about",
    "audio": ""
  },
  {
    "key": 693,
    "word": "whole",
    "meaning": "全体",
    "definition_ja": "全部または全部、何かすべて",
    "definition_en": "complete or full, all of something",
    "audio": ""
  },
  {
    "key": 694,
    "word": "why",
    "meaning": "なぜ",
    "definition_ja": "どんな理由や目的のために",
    "definition_en": "for what reason or purpose",
    "audio": ""
  },
  {
    "key": 695,
    "word": "wife",
    "meaning": "妻",
    "definition_ja": "既婚女性",
    "definition_en": "a married woman",
    "audio": ""
  },
  {
    "key": 696,
    "word": "will",
    "meaning": "意志",
    "definition_ja": "何かが起こると予想されると言うために、未来を表現する",
    "definition_en": "expressing the future, to say something is expected to happen",
    "audio": ""
  },
  {
    "key": 697,
    "word": "win",
    "meaning": "勝つ",
    "definition_ja": "戦いやゲームで勝利するために",
    "definition_en": "to achieve victory in a fight or game",
    "audio": ""
  },
  {
    "key": 698,
    "word": "window",
    "meaning": "窓",
    "definition_ja": "通常ガラスのシートを含む壁やドアの開口部",
    "definition_en": "an opening in a wall or door that usually contains a sheet of glass",
    "audio": ""
  },
  {
    "key": 699,
    "word": "wish",
    "meaning": "願い",
    "definition_ja": "何かを真実にしたい、または起こしたい",
    "definition_en": "to want something to be true or to happen",
    "audio": ""
  },
  {
    "key": 700,
    "word": "with",
    "meaning": "と",
    "definition_ja": "人や物が一緒であることを表現するために使用されます",
    "definition_en": "used to express that people or things are together",
    "audio": ""
  },
  {
    "key": 701,
    "word": "within",
    "meaning": "内に",
    "definition_ja": "何かの中",
    "definition_en": "inside something",
    "audio": ""
  },
  {
    "key": 702,
    "word": "without",
    "meaning": "なしで",
    "definition_ja": "存在しない、または含まない、存在しない場合",
    "definition_en": "not having or including something, in the absence of",
    "audio": ""
  },
  {
    "key": 703,
    "word": "woman",
    "meaning": "女性",
    "definition_ja": "大人の女性の人間",
    "definition_en": "an adult female human being",
    "audio": ""
  },
  {
    "key": 704,
    "word": "wonder",
    "meaning": "ワンダー",
    "definition_ja": "非常に驚くべきあるいは驚くべきこと",
    "definition_en": "something that is very surprising or amazing",
    "audio": ""
  },
  {
    "key": 705,
    "word": "wonderful",
    "meaning": "素晴らしい",
    "definition_ja": "とても良い",
    "definition_en": "very good",
    "audio": ""
  },
  {
    "key": 706,
    "word": "word",
    "meaning": "ワード",
    "definition_ja": "意味を持つ言語の単位",
    "definition_en": "a unit of language that has a meaning",
    "audio": ""
  },
  {
    "key": 707,
    "word": "work",
    "meaning": "作業",
    "definition_ja": "精神的または肉体的な努力を伴う仕事または活動をするため",
    "definition_en": "to have a job or activity involving mental or physical effort",
    "audio": ""
  },
  {
    "key": 708,
    "word": "world",
    "meaning": "世界",
    "definition_ja": "地球とその上のすべての人と物",
    "definition_en": "the earth and all people and things on it",
    "audio": ""
  },
  {
    "key": 709,
    "word": "worry",
    "meaning": "心配",
    "definition_ja": "問題や恐れについて考える",
    "definition_en": "to think about problems or fears",
    "audio": ""
  },
  {
    "key": 710,
    "word": "worth",
    "meaning": "価値",
    "definition_ja": "何かの価値を示すために使用されます",
    "definition_en": "used to indicate the value of something",
    "audio": ""
  },
  {
    "key": 711,
    "word": "would",
    "meaning": "だろう",
    "definition_ja": "何が起こるかについて考えている誰かを示す",
    "definition_en": "indicating someone thinking about what will happen",
    "audio": ""
  },
  {
    "key": 712,
    "word": "write",
    "meaning": "書きます",
    "definition_ja": "表面に文字や単語を作成する",
    "definition_en": "to compose letters and words on a surface",
    "audio": ""
  },
  {
    "key": 713,
    "word": "wrong",
    "meaning": "違う",
    "definition_ja": "事実や真実に同意しない：正しくない",
    "definition_en": "not agreeing with the facts or truth : incorrect",
    "audio": ""
  },
  {
    "key": 714,
    "word": "yeah",
    "meaning": "ええ",
    "definition_ja": "はい",
    "definition_en": "yes",
    "audio": ""
  },
  {
    "key": 715,
    "word": "year",
    "meaning": "年",
    "definition_ja": "12か月または365日に相当する時間の単位",
    "definition_en": "a unit of time equal to 12 months or 365 days",
    "audio": ""
  },
  {
    "key": 716,
    "word": "yes",
    "meaning": "はい",
    "definition_ja": "質問、要求、または申し出に対して肯定的な答えを提供するか、または返信するために使用されます。",
    "definition_en": "used to give a positive answer or reply to a question, request, or offer",
    "audio": ""
  },
  {
    "key": 717,
    "word": "yesterday",
    "meaning": "昨日",
    "definition_ja": "今日の前日",
    "definition_en": "the day before today",
    "audio": ""
  },
  {
    "key": 718,
    "word": "yet",
    "meaning": "まだ",
    "definition_ja": "今まで、現在まで",
    "definition_en": "until now, up until the present",
    "audio": ""
  },
  {
    "key": 719,
    "word": "you",
    "meaning": "君は",
    "definition_ja": "話者が演説している人を指すのに使用される",
    "definition_en": "used to refer to the person the speaker is addressing",
    "audio": ""
  },
  {
    "key": 720,
    "word": "young",
    "meaning": "若い",
    "definition_ja": "人生や成長の初期段階で",
    "definition_en": "in an early stage of life  or growth",
    "audio": ""
  },
  {
    "key": 721,
    "word": "yourself",
    "meaning": "あなた自身",
    "definition_ja": "代名詞 'you'の反射形",
    "definition_en": "the reflexive form of the pronoun 'you'",
    "audio": ""
  }
];
export default Words;