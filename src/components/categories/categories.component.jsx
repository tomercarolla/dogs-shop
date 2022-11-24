import CategoryItem from "../category-item/category-item.component";
import {CategoriesContainerStyles} from "./categories.styles";

const categories = [
    {
        id: 1,
        title: 'Toys',
        imageUrl: 'https://images.dog.ceo/breeds/pembroke/n02113023_1571.jpg',
        route: 'shop/toys'
    },
    {
        id: 2,
        title: 'Food',
        imageUrl: 'https://images.dog.ceo/breeds/entlebucher/n02108000_811.jpg',
        route: 'shop/food'
    },
    {
        id: 3,
        title: 'Snacks',
        imageUrl: 'https://images.dog.ceo/breeds/malinois/n02105162_6501.jpg',
        route: 'shop/snacks'
    },
    {
        id: 4,
        title: 'Clothes',
        imageUrl: 'https://images.dog.ceo/breeds/clumber/n02101556_823.jpg',
        route: 'shop/clothes'
    },
    {
        id: 5,
        title: 'Accessories',
        imageUrl: 'https://images.dog.ceo/breeds/appenzeller/n02107908_2151.jpg',
        route: 'shop/accessories'
    },
];


const Categories = () => {
    return (
        <CategoriesContainerStyles>
            {
                categories.map((category) => {
                    return (
                        <CategoryItem key={category.id} category={category}/>
                    )
                })
            }
        </CategoriesContainerStyles>
    );
}

export default Categories;
