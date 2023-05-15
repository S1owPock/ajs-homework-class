export default class Character {
  constructor(name, type) {
    if (typeof name !== 'string') {
      throw new Error('Ошибка, имя должно быть строкой, а не числом или чем-то иным');
    } else if (name.length < 2 || name.length > 10) {
      throw new Error('Ошибка, длина имени должна быть от 2 до 10 символов');
    } else {
      this.name = name;
    }
    if (typeof type !== 'string') {
      throw new Error('Ошибка, тип должнен быть строкой, а не числом или чем-то иным');
    } else if (Bowman, Swordsman, Magician, Daemon, Undead, Zombie) {
      throw new Error('Нет такого героя')
    } else {
      this.type = type;
    }
    this.health = 100;
    this.level = 1;
  }
}
