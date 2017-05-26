import style from './style';

const s = Object.create(style);

s.root = {
  WebkitTextSizeAdjust: 'none',
  MozTextSizeAdjust: 'none',
  msTextSizeAdjust: 'none',
  textSizeAdjust: 'none'
};

s.title = {};

s.repoLink = {};

s.breadcrumbs = {};

s.creditLine = {};

export default s;
