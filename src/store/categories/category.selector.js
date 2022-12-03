export const selectCategoriesMap = (state) => state.categories.categories.reduce(
    (acc, action) => {
        const {title, items} = action;
        acc[title.toLowerCase()] = items;
        return acc;
    },
    {}
);
