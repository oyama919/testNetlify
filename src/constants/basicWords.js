import BasicVerbs from "./basicVerbs";

const usualWords = [];
const progressWords = [];
const pastWords = [];
const futureWords = [];
const basicWords = [];
const person = ["I", "You", "We", "They"];
const thirdPerson = ["He", "She", "It"];
const personWithBe = ["I'm", "He's", "She's", "It's", "You're", "We're", "They're"];
const personWithBeAsk = ["am I", "is He", "Is she", "Is it", "Are you", "Are we", "Are they"];

// 習慣テンプレート
const usualTmp= [
  "{person} {verb}",
  "{person} don't {verb}",
  "Do {person} {verb}?",
];
const usual3dPersonVerbChangeTmp = [
  "{person} {verb}",
];
const usual3dPersonTmp = [
  "{person} doesn't {verb}",
  "Does {person} {verb}?",
];
// 進行形テンプレート
const progressTmp = [
  "{person} {verb}",
  "{person} not {verb}?",
];
const progressAskTmp = [
  "{person} {verb}?",
];
// 過去テンプレート
const pastTmp = [
  "{person} {verb}",
  "{person} didn't {verb}",
  "Did {person} {verb}?",
];
// 未来テンプレート
const futureTmp = [
  "{person} gonna {verb}",
  "{person} not gonna {verb}",
];
const futureAskTmp = [
  "{person} gonna {verb}?",
];
// basicWordsテンプレート
const basicTmp = [
  "Can I {verb}?",
  "Can You {verb}?",
  "I wanna {verb}?",
  "I don't wanna {verb}?",
  "Do you wanna {verb}?",
  "Do you want me to {verb}?",
  "Why don't you {verb}?",
  "I have to {verb}?",
];
const basicProgressTmp = [
  "I've been {verb}",
  "I haven't been {verb}",
  "Have you been {verb}?",
  "I'm used to {verb}",
  "I'm sick of {verb}",
  "I don't mind {verb}",
  "I miss {verb}",
  "I can't imagene {verb}",
  "What happend to {verb}?",
];

function replaceWord(msg, target, rw) {
  return msg.replace(/{(.+?)}/g, function(m, c) {
    return c === target ? rw : m;
  });
};

// 習慣
person.map(p => usualTmp.map(t => BasicVerbs.defaultVerbs.map(v => {
  const tmp = replaceWord(t, 'person', p);
  return usualWords.push(replaceWord(tmp, 'verb', v));
})));

thirdPerson.map(p => usual3dPersonVerbChangeTmp.map(t => BasicVerbs.thirdPersonVerbs.map(v => {
  const tmp = replaceWord(t, 'person', p);
  return usualWords.push(replaceWord(tmp, 'verb', v));
})));

thirdPerson.map(p => usual3dPersonTmp.map(t => BasicVerbs.defaultVerbs.map(v => {
  const tmp = replaceWord(t, 'person', p);
  return usualWords.push(replaceWord(tmp, 'verb', v));
})));

// 進行
personWithBe.map(p => progressTmp.map(t => BasicVerbs.progressVerbs.map(v => {
  const tmp = replaceWord(t, 'person', p);
  return progressWords.push(replaceWord(tmp, 'verb', v));
})));

personWithBeAsk.map(p => progressAskTmp.map(t => BasicVerbs.progressVerbs.map(v => {
  const tmp = replaceWord(t, 'person', p);
  return progressWords.push(replaceWord(tmp, 'verb', v));
})));

// 過去
person.concat(thirdPerson).map(p => pastTmp.map(t => BasicVerbs.pastVerbs.map(v => {
  const tmp = replaceWord(t, 'person', p);
  return pastWords.push(replaceWord(tmp, 'verb', v));
})));

// 未来
personWithBe.map(p => futureTmp.map(t => BasicVerbs.defaultVerbs.map(v => {
  const tmp = replaceWord(t, 'person', p);
  return futureWords.push(replaceWord(tmp, 'verb', v));
})));

personWithBeAsk.map(p => futureAskTmp.map(t => BasicVerbs.defaultVerbs.map(v => {
  const tmp = replaceWord(t, 'person', p);
  return futureWords.push(replaceWord(tmp, 'verb', v));
})));

// basicWords
basicTmp.map(t => BasicVerbs.defaultVerbs.map(v => {
  return basicWords.push(replaceWord(t, 'verb', v));
}));
basicProgressTmp.map(t => BasicVerbs.progressVerbs.map(v => {
  return basicWords.push(replaceWord(t, 'verb', v));
}));

const BasicWords = {
  usualWords,
  progressWords,
  pastWords,
  futureWords,
  basicWords,
};
export default BasicWords;
