import Image from "./Image";
import Category from "./Category";

export default interface Post {
    id: number,
    title: string,
    cover_image: Image,
    categories: Category[]
}