const text = 'aaa bbb, ccc. Xxx - eee bbb, kkk!';

const words = text
  .replace(/[^\w\s]|_/g, '')
  .split(/\s+/);

console.log(words);