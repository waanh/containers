export default class Character {
    constructor(name, type) {
      const types = ['Bowman', 'Swordsman', 'Magician'];
      if (!types.includes(type)) {
        throw new Error('Некорректный тип персонажа');
      }
      this.name = name;
      this.type = type;
    }
  }
  