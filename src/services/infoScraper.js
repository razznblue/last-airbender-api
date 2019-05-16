const request = require('superagent');
const { parse } = require('node-html-parser');
const fetchCharacterName = require('./nameScraper');

//eslint-disable-next-line
module.exports = async() => {
  let characters = await fetchCharacterName();
  const charB = await fetchCharacterName('Jingbo');
  const charC = await fetchCharacterName('Shiro+Shinobi');
  characters.push(...charB);
  characters.push(...charC);
  return await Promise.all(characters.map(character => {
    return request.get(`https://avatar.fandom.com/wiki/${character}`)
      .then(res => res.text)
      .then(parse)
      .then(html => {
        const labels = html.querySelectorAll('.pi-data-label').map(l => l.childNodes[0].rawText);
        const values = html.querySelectorAll('.pi-data-value').map(v => v.childNodes[0].rawText);
        const photoInfo = html.querySelectorAll('.pi-image-thumbnail')[0];
        return [labels, values, character, photoInfo];
      })
      .then(organizeInfo);
  }));
};

const organizeInfo = async([labels, values, character, photoInfo = '']) => {
  let obj = {};
  if(photoInfo) {
    const photo = photoInfo.parentNode.rawAttrs.split('"')[1];    
    obj.photoUrl = photo;
  }
  if(obj.enemies) {
    obj.enemies = obj.enemies.split(', ');
  }
  obj.name = character;
  labels.map((l, i) => {
    return obj[l.split(' ')[0].toLowerCase()] = values[i];
  });
  return obj;
};