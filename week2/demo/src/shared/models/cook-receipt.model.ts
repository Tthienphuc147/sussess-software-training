import { DictionaryItem } from "./dictionary-item.model";
import { Ingredient } from "./ingredient.model";

export class CookReceipt {
    id: number;
    name: string;
    image_url: string;
    image: string;
    category: DictionaryItem;
    collection: DictionaryItem;
    level: DictionaryItem;
    pre_time: number;
    serving: number;
    description: string;
    instruction: string;
    is_high_light: boolean;
    ingredient: Ingredient[] = [];

}