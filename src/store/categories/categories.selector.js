export const selectorCategoriesMap = (state) =>
    state?.categories?.categories.reduce((acc, category) => {
        const { title, items } = category;
        acc[title.toLowerCase()] = items;
        return acc;
    }, {});

// const cacheObj = {};
// ---------------------------------------------------------- Waiting for review
// export const selectorCategoriesMap = (state) => {
//     const checkCache = (category) => {
//         const cacheKey = category;

//         if (cacheKey && category in cacheObj) {
//             return cacheObj[category];
//         }

//         return true;
//     };

//     return (
//         checkCache &&
//         state?.categories?.categories.reduce((acc, category) => {
//             const { title, items } = category;
//             acc[title.toLowerCase()] = items;
//             return acc;
//         }, {})
//     );
// };
