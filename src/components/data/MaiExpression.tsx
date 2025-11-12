export const MaiExpression = {
  MaiNormal: {
    value: "MaiNormal",
    image: "/characters/mai/Mai_Normal.png",
  },
  MaiNormalTalk: {
    value: "MaiNormalTalk",
    image: "/characters/mai/Mai_NormalTalk.png",
  },
  MaiHappy: {
    value: "MaiHappy",
    image: "/characters/mai/Mai_Happy.png",
  },
  MaiAwkward: {
    value: "MaiAwkward",
    image: "/characters/mai/Mai_Awkward.png",
  },
  MaiEmbarrassed: {
    value: "MaiEmbarrassed",
    image: "/characters/mai/Mai_Embarrassed.png",
  },
  MaiUncomfortable: {
    value: "MaiUncomfortable",
    image: "/characters/mai/Mai_Uncomfortable.png",
  },
  MaiAngry: {
    value: "MaiAngry",
    image: "/characters/mai/Mai_Angry.png",
  },
  MaiBlank: {
    value: "MaiBlank",
    image: "/characters/mai/Mai_Blank.png",
  },
  MaiNone: {
    value: "MaiNone",
    image: null,
    notes: "不顯示頭像。",
  },
} as const;

export type MaiExpressionKey = keyof typeof MaiExpression;
