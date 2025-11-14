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
    id: "set-background-color",
    label: "背景純色",
    value: `SetBackgroundColor(#808080);`,
    notes: "快速套用純色背景，可作為暫時遮罩。",
  },
  {
    id: "reset-background-color",
    label: "恢復原背景",
    value: `SetBackgroundColor(#FFFFFF);`,
    notes: "重置為預設白色背景。",
  },
  {
    id: "switch-scene",
    label: "切換場景",
    value: `SwitchScene(TrafficScene);`,
    notes: "轉場至指定的遊戲場景。",
  },
  {
    id: "update-status",
    label: "更新狀態值",
    value: `UpdateStatus(Heart, 5);`,
    notes: "調整角色或系統狀態，例如好感度、能量值。",
  },
  {
    id: "fmod-play",
    label: "播放 FMOD 事件",
    value: `FMODPlay(StartButton);`,
    notes: "呼叫 FMOD 事件，例如按鈕音效。",
  },
  {
    id: "camera-shake",
    label: "鏡頭震動",
    value: `CameraShake(0.3, 0.25);`,
    notes: "產生短暫的鏡頭震動效果。",
  },
];
