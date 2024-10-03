import Team from '../src/Team';
import Character from '../src/Character';

test('add should add a character to the team', () => {
  const team = new Team();
  const character = new Character('Лучник', 'Bowman');
  team.add(character);
  expect(team.toArray()).toEqual([character]);
});

test('add should throw an error if character already added', () => {
  const team = new Team();
  const character = new Character('Маг', 'Magician');
  team.add(character);
  expect(() => team.add(character)).toThrow('Персонаж уже добавлен в команду');
});

test('addAll should add multiple characters without duplication', () => {
  const team = new Team();
  const character1 = new Character('Мечник', 'Swordsman');
  const character2 = new Character('Лучник', 'Bowman');
  team.addAll(character1, character2, character1);
  expect(team.toArray()).toEqual([character1, character2]);
});
