const heroes = ['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string') {
      throw new Error('Ошибка, имя должно быть строкой, а не числом или чем-то иным');
    } else if (name.length < 2 || name.length > 10) {
      throw new Error('Ошибка, длина имени должна быть от 2 до 10 символов');
    } else {
      this.name = name;
    }
    if (heroes.includes(type)) {
      this.type = type;
    } else {
      throw new Error('Нет такого героя');
    }
  }
}
