export class Receipt {
    id: number;
    name: string;
    description: string;
    image: string;
    ingredients? : Ingredient[] = [];
}
export class Ingredient {
    name: string;
    amount: number;
}