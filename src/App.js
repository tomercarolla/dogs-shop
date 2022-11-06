const App = () => {

    const categories = [
        {
            id: 1,
            title: 'Toys',
            image: '',
        },
        {
            id: 2,
            title: 'Food',
            image: '',
        },
        {
            id: 3,
            title: 'Snacks',
            image: '',
        },
        {
            id: 4,
            title: 'Clothes',
            image: '',
        },
        {
            id: 5,
            title: 'Accessories',
            image: '',
        },
    ];

    return (
        <div className="categories-container">
            {
                categories.map((category) => {
                    return (
                        <div key={category.id} className="category-container">
                            <div className="background-container"></div>
                            <div className="category-title">
                                <h2>{category.title}</h2>
                                <p>Shop now</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    );
}

export default App;
