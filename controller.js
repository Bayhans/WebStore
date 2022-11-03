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
    let thing1 = webStore.categories.data[index];
    webStore.shoppingCart.push(thing1);
    show();
  }
  
  function addthing2(index) {
    let thing2 = webStore.categories.drink[index];
    webStore.shoppingCart.push(thing2);
    show();
  }
  
  function goBack() {
    let firstPageName = webStore.history[0];
    let lastHistoryName = webStore.history.slice(navCounter)[0];
  
    if (page != firstPageName) {
      page = lastHistoryName;
      navCounter--;
    }
    show();
  }
  function goForward() {
    let length = webStore.history.length;
    let lastPageName = webStore.history[length - 1];
    let nextPage = webStore.history.slice(navCounter + 2)[0];
    if (page != lastPageName) {
      page = nextPage;
      navCounter++;
    }
    show();
  }