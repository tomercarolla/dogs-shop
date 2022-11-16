import Categories from "../../components/categories/categories.component";

const Main = () => {
    const categories = [
        {
            id: 1,
            title: 'Toys',
            imageUrl: 'https://images.dog.ceo/breeds/pembroke/n02113023_1571.jpg',
        },
        {
            id: 2,
            title: 'Food',
            imageUrl: 'https://images.dog.ceo/breeds/entlebucher/n02108000_811.jpg',
        },
        {
            id: 3,
            title: 'Snacks',
            imageUrl: 'https://images.dog.ceo/breeds/malinois/n02105162_6501.jpg',
        },
        {
            id: 4,
            title: 'Clothes',
            imageUrl: 'https://images.dog.ceo/breeds/clumber/n02101556_823.jpg',
        },
        {
            id: 5,
            title: 'Accessories',
            imageUrl: 'https://images.dog.ceo/breeds/appenzeller/n02107908_2151.jpg',
        },
    ];

    return (
        <Categories categories={categories} />
    );
}

export default Main;
