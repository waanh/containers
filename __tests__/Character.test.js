import Character from '../src/Character';

describe('Character', () => {
  test('should create a character with valid name and type', () => {
    const character = new Character('Леша', 'Bowman');
    expect(character.name).toBe('Леша');
    expect(character.type).toBe('Bowman');
  });

  test('should throw an error for invalid character type', () => {
    expect(() => new Character('Леша', 'Gosling')).toThrow('Некорректный тип персонажа');
  });

  test('should create characters with valid types', () => {
    const character1 = new Character('Леша', 'Bowman');
    expect(character1.type).toBe('Bowman');

    const character2 = new Character('Аня', 'Swordsman');
    expect(character2.type).toBe('Swordsman');

    const character3 = new Character('Рома', 'Magician');
    expect(character3.type).toBe('Magician');
  });
});

