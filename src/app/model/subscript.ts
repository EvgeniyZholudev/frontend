export class Subscript {
  id: number;
  name: string;
  description: string;
  price: number;
  time: number;

static cloneSubscript(subscript: Subscript): Subscript {
  const clonedSubscript: Subscript = new Subscript();
  clonedSubscript.id = subscript.id;
  clonedSubscript.name = subscript.name;
  clonedSubscript.description = subscript.description;
  clonedSubscript.price = subscript.price;
  clonedSubscript.time = subscript.time;
  return clonedSubscript;
}

}
