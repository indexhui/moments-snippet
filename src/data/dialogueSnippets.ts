export type DialogueSnippet = {
  id: string;
  label: string;
  value: string;
  image?: string | null;
  notes?: string;
};

export type DialogueCharacter = {
  id: string;
  name: string;
  code: string;
  portraits: DialogueSnippet[];
};

export const dialogueCharacters: DialogueCharacter[] = [
  {
    id: "mai",
    name: "小麥 Mai",
    code: "Mai",
    portraits: [
      {
        id: "mai-normal",
        label: "一般 Normal",
        value: "MaiNormal",
        image: "/characters/mai/Mai_Normal.png",
      },
      {
        id: "mai-normal-talk",
        label: "說話 NormalTalk",
        value: "MaiNormalTalk",
        image: "/characters/mai/Mai_NormalTalk.png",
      },
      {
        id: "mai-happy",
        label: "開心 Happy",
        value: "MaiHappy",
        image: "/characters/mai/Mai_Happy.png",
      },
      {
        id: "mai-awkward",
        label: "尷尬 Awkward",
        value: "MaiAwkward",
        image: "/characters/mai/Mai_Awkward.png",
      },
      {
        id: "mai-embarrassed",
        label: "害羞 Embarrassed",
        value: "MaiEmbarrassed",
        image: "/characters/mai/Mai_Embarrassed.png",
      },
      {
        id: "mai-uncomfortable",
        label: "困擾 Uncomfortable",
        value: "MaiUncomfortable",
        image: "/characters/mai/Mai_Uncomfortable.png",
      },
      {
        id: "mai-angry",
        label: "生氣 Angry",
        value: "MaiAngry",
        image: "/characters/mai/Mai_Angry.png",
      },
      {
        id: "mai-blank",
        label: "發呆 Blank",
        value: "MaiBlank",
        image: "/characters/mai/Mai_Blank.png",
      },
      {
        id: "mai-none",
        label: "無頭像 None",
        value: "MaiNone",
        image: null,
        notes: "不顯示頭像。",
      },
    ],
  },
  {
    id: "Bai",
    name: "小白 Bai",
    code: "Bai",
    portraits: [
      { id: "jun-neutral", label: "冷靜 Neutral", value: "JunNeutral" },
      { id: "jun-laugh", label: "大笑 Laugh", value: "JunLaugh" },
      { id: "jun-question", label: "疑惑 Question", value: "JunQuestion" },
      {
        id: "jun-embarrassed",
        label: "害羞 Embarrassed",
        value: "JunEmbarrassed",
      },
    ],
  },
];

export const generatePortraitCommand = (
  characterCode: string,
  portraitValue: string
) => {
  return `SetPortrait(${characterCode}, pic=${portraitValue});`;
};

export const generalDialogueSnippets: DialogueSnippet[] = [
  {
    id: "set-name",
    label: "設定名稱",
    value: `SetName("Mai");`,
    notes: "更新對話框顯示的角色名稱。",
  },
  {
    id: "set-voice",
    label: "設定語音",
    value: `SetVoice("Mai_VO_Intro");`,
    notes: "切換角色語音檔，通常在下一句對話前呼叫。",
  },
  {
    id: "play-sfx",
    label: "播放音效",
    value: `PlaySfx("UI_Click");`,
    notes: "觸發音效，用於選項、互動提示等情境。",
  },
  {
    id: "set-background",
    label: "切換背景",
    value: `SetBackground("Cafe_Sunset");`,
    notes: "將對話背景切換到指定場景。",
  },
  {
    id: "fade-in",
    label: "畫面淡入",
    value: `FadeScreen(duration: 0.5f, toAlpha: 0f);`,
    notes: "讓畫面從黑色淡入，常用於場景銜接。",
  },
  {
    id: "show-choice",
    label: "顯示選項",
    value: `ShowChoice(["好的，出發吧！", "再等一下～"]);`,
    notes: "建立兩個選項的對話選單。",
  },
];
