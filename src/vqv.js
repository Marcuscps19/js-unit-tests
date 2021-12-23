const vqv = (nome, idade) => {
  if (nome !== undefined && idade !== undefined) {
    const workInfo = 'trabalho na Trybe e mando muito em programação!';
    return `Oi, meu nome é ${nome}!\nTenho ${idade} anos,\n${workInfo}\n#VQV!`;
  }
  return undefined;
};

module.exports = vqv;
