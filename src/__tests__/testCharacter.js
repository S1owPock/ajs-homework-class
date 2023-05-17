import Character from '../js/character';
import Bowman from '../js/Bowman';
import Swordsman from '../js/Swordsman';
import Magician from '../js/Magician';
import Undead from '../js/Undead';
import Zombie from '../js/Zombie';
import Daemon from '../js/Daemon';

test('testing Character', () => {
  expect(() => new Character('Oleg')).toThrowError('Нет такого героя');
});

test('testing Character errors', () => {
  expect(() => {
    const player = new Character(1);
    player.name = 1;
  }).toThrowError('Ошибка, имя должно быть строкой, а не числом или чем-то иным');
  expect(() => {
    const player = new Character('R');
    player.name = 'R';
  }).toThrowError('Ошибка, длина имени должна быть от 2 до 10 символов');
  expect(() => {
    const player = new Character('RobinRobinRobin');
    player.name = 'RobinRobinRobin';
  }).toThrowError('Ошибка, длина имени должна быть от 2 до 10 символов');
});

test('testing Bowman', () => {
  expect(() => new Bowman('Robin')).toThrowError('Нет такого героя');
});

test('testing Swordsman', () => {
  expect(() => new Swordsman('Robin')).toThrowError('Нет такого героя');
});

test('testing Magician', () => {
  expect(() => new Magician('Robin')).toThrowError('Нет такого героя');
});

test('testing Undead', () => {
  expect(() => new Undead('Robin')).toThrowError('Нет такого героя');
});

test('testing Zombie', () => {
  expect(() => new Zombie('Robin')).toThrowError('Нет такого героя');
});

test('testing Daemon', () => {
  expect(() => new Daemon('Robin')).toThrowError('Нет такого героя');
});
