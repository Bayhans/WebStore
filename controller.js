function changePage(pageName) {
    page = pageName;
    addPageToHistory(pageName);
    show();
  }
  
  function addPageToHistory(page) {
    webStore.history.push(page);
    show();
  }
  
  function addthing1(index) {
    let dataProducts = webStore.categories.data[index];
    webStore.shoppingCart.push(dataProducts);
    show();
  }
  
  function addthing2(index) {
    let drinkProducts = webStore.categories.drink[index];
    webStore.shoppingCart.push(drinkProducts);
    show();
  }
  
