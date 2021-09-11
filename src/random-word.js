const wordsData = [
  {
    question: 'Úc Kiều cực kiu của BlackPink là ai ?',
    word: 'Park Chae Young'
  },
  {
    question: 'Thành viên người Thái của BlackPink là ai ?',
    word: 'Lalisa Manoban'
  },
  {
    question: 'Chồng của BlackPink Rose là ai ?',
    word: 'cauphainghiencode'
  },
  {
    question: 'Vợ 2 của cauphainghiencode là ai?',
    word: 'Shin Yuna'
  },
  {
    question: 'Vũ thần soang choảnh của ITZY là ai?',
    word: 'Chaeryeong'
  },
  {
    question: 'Chúa hề 010101 của Aespa là ai ?',
    word: 'Winter'
  },
  {
    question: 'Tên thật của Aespa Karina là giề?',
    word: 'Yoo Ji Min'
  }
]

export default () => {
  const wordIndex = Math.floor(Math.random() * wordsData.length);
  const words = wordsData.map(wordObj => {
    wordObj.word = wordObj.word.replace(/ /g,'').toLowerCase();
    return wordObj;
  })

  return words[wordIndex];
}
