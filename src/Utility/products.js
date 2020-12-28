export var categorizeProducts = (productsArr) => {
    var categories = [];
    var categoryName;
    var isCategoryExist;
    var newCategory;
    //loop over products
    for (var product of productsArr) {
      categoryName = product.category;
      //loop over category array
      isCategoryExist = categories.some(
        (categoryObj) => categoryObj.category === categoryName
      );
      if (isCategoryExist) {
        //if category exist (yes)
        //push product in products field in categoryObj
        categories = categories.map((categoryObj) => {
          if (categoryObj.category === categoryName) {
            categoryObj.products.push(product);
            return categoryObj;
          } else {
            return categoryObj;
          }
        });
      } else {
        //if cateogry doesn't exist (no)
        newCategory = {
          category: product.category,
          products: [product],
        };
        categories.push(newCategory);
      }
    }
    return categories;
  };