const verbsGeneral = [
  'go home',
  'go work',
  'go to the gym',
  'get a haircut',
  'get money out',
  'get up',
  'go to bed',
  'get to sleep',
];

const verbsPlay = [
  'see a movie',
  'get a video',
  'go drinking',
  'go shopping',
  'go skiing',
  'eat out',
  'go to the beach',
];

const verbsWork = [
  'get prompted',
  'get transferred',
  'get fired',
  'meet the deadline',
  'meet the quota',
  'do overtime',
  'get paid',
  'get in trouble',
];

const verbsHousework = [
  'clean the house',
  'make dinner',
  'do the dishes',
  'do the laundly',
];

const verbsLove= [
  'ask out',
  'go out',
  'break up',
  'get back together',
];

const defaultVerbs = verbsGeneral
  .concat(verbsPlay)
  .concat(verbsPlay)
  .concat(verbsWork)
  .concat(verbsHousework)
  .concat(verbsLove);

const verbTenses = {
  go: {
    thirdPerson: 'goes',
    progress: 'going',
    past: 'went',
  },
  get: {
    thirdPerson: 'gets',
    progress: 'getting',
    past: 'got',
  },
  see: {
    thirdPerson: 'sees',
    progress: 'seeing',
    past: 'saw',
  },
  eat: {
    thirdPerson: 'eats',
    progress: 'eating',
    past: 'ate',
  },
  meet: {
    thirdPerson: 'meets',
    progress: 'meeting',
    past: 'met',
  },
  do: {
    thirdPerson: 'does',
    progress: 'doing',
    past: 'did',
  },
  clean: {
    thirdPerson: 'cleans',
    progress: 'cleaning',
    past: 'cleaned',
  },
  make: {
    thirdPerson: 'makes',
    progress: 'making',
    past: 'made',
  },
  ask: {
    thirdPerson: 'asks',
    progress: 'asking',
    past: 'asked',
  },
  break: {
    thirdPerson: 'breaks',
    progress: 'breaking',
    past: 'broke',
  },
};

const regExp = new RegExp(`^${Object.keys(verbTenses).join('|^')}`)

const thirdPersonVerbs = defaultVerbs.map(
  v => v.replace(regExp, m =>verbTenses[m].thirdPerson));

const progressVerbs = defaultVerbs.map(
  v => v.replace(regExp, m =>verbTenses[m].progress));

const pastVerbs = defaultVerbs.map(
  v => v.replace(regExp, m =>verbTenses[m].past));

const BasicVerbs = {
  defaultVerbs,
  thirdPersonVerbs,
  progressVerbs,
  pastVerbs
};

export default BasicVerbs;
