export class Subscript {
  id: number;
  name: string;
  discription: string;
  price: number;
  time: number;

static cloneBase(subscript: Subscript): Subscript {
  const clonedSubscript: Subscript = new Subscript();
  clonedSubscript.id = subscript.id;
  clonedSubscript.name = subscript.name;
  clonedSubscript.discription = subscript.discription;
  clonedSubscript.price = subscript.price;
  clonedSubscript.time = subscript.time;
  return clonedSubscript;
}

}
