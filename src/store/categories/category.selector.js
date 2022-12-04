import {createSelector} from "reselect";

const selectCategoryReducer = (state) => state.categories;

const selectCategories = createSelector(
    [selectCategoryReducer],
    (categorySlice) => categorySlice.categories
)

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => categories.reduce(
        (acc, action) => {
            const {title, items} = action;
            acc[title.toLowerCase()] = items;
            return acc;
        }, {})
)
