class Key {
  private signature: number;
  constructor() {
    this.signature = Math.random();
  }
  getSignature() {
    return this.signature;
  }
}
class Person {
  constructor(private key: Key) {
    this.key = key;
  }
  getKey() {
    return this.key;
  }
}
abstract class House {
  constructor() {}
  door: boolean;
  key: Key;
  tenants: Person[];

  comeIn(person: Person) {
    if (this.door === true) {
      this.tenants.push(person);
    }
  }
  abstract openDoor(key: Key);
}

class MyHouse extends House {
  constructor(key: Key) {
    super();
    this.key = key;
  }
  openDoor(key: Key) {
    if (key === this.key) {
      this.door === true;
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
