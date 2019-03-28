export class Subscript {
  id: number;
  name: string;
  description: string;
  pricePerDay: number;
  period: number;
  imagePath: string;


static cloneSubscript(subscript: Subscript): Subscript {
  const clonedSubscript: Subscript = new Subscript();
  clonedSubscript.id = subscript.id;
  clonedSubscript.name = subscript.name;
  clonedSubscript.description = subscript.description;
  clonedSubscript.pricePerDay = subscript.pricePerDay;
  clonedSubscript.period = subscript.period;
  clonedSubscript.imagePath = subscript.imagePath;
  return clonedSubscript;
}

}
