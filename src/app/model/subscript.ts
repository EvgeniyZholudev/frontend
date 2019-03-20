export class Subscript {
  id: number;
  name: string;
  description: string;
  pricePerDay: number;


static cloneSubscript(subscript: Subscript): Subscript {
  const clonedSubscript: Subscript = new Subscript();
  clonedSubscript.id = subscript.id;
  clonedSubscript.name = subscript.name;
  clonedSubscript.description = subscript.description;
  clonedSubscript.pricePerDay = subscript.pricePerDay;
  return clonedSubscript;
}

}
