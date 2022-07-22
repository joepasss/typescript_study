import initalizeAnimal, { Cat, Dog } from './interface-class';

const cat = initalizeAnimal(Cat, 'Felix');
const dog = initalizeAnimal(Dog, 'Ava');

dog.bark();
