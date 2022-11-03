let htmlAppDiv = document.getElementById("app");
show();
function show() {
  let tempPage = "";
  tempPage += handlekurv();
  tempPage += /*html*/ `
    <header><div class="logo">A Web <span>Store</span>
    <div class="sidebar">${navigator()}</div>
    <div class='shoppingCart' onclick='toggleShoppingCart()'>🛒</div>
    </header>
    <menu></menu>
    <main>`;
  if (page === "home") {
    tempPage += home();
    } else if (page === "categories") {
    tempPage += category();
    } else if (page === "products") {
    tempPage += products();
    } else if (page === "about us") {
    tempPage += infoPage();
    }
  tempPage += /*html*/ `</main>
    <footer></footer>`;
  htmlAppDiv.innerHTML = tempPage;
}

function navigator() {
  let tempHtml = "";
  for (let i = 0; i < webStore.pages.length; i++) {
    let storePages = webStore.pages[i];
    tempHtml += /*html*/ `
        <div class="nav-item">
        <button onclick="changePage('${storePages}')">${storePages}</button>
        </div>`;
  }
  return tempHtml;
}

function home() {
    let tempHtml = /*html*/ `the Home page`;
    return tempHtml;
  }
function category() {
    let tempHtml = /*html*/ `the category page`;
    return tempHtml;
  }

function products() {
  let tempHtml = /*html*/ `<div class="main-content">
  <div class="portfolio">${items()}</div></div>`;
  return tempHtml;
}

function infoPage() {
  let tempHtml = /*html*/ `the info page`;
  return tempHtml;
}

function items() {
  let tempHtml = ``;
  if (page == "products") {
    for (let i = 0; i < webStore.categories.data.length; i++) {
      let dataProducts = webStore.categories.data[i];
      tempHtml +=
        /*html*/
        `<div class='${dataProducts.classes}'>
      <button onclick='addthing1(${i})'>${dataProducts.item}${dataProducts.details}</button>
      </div>`;
    }

    for (let i = 0; i < webStore.categories.drink.length; i++) {
      let drinkProducts = webStore.categories.drink[i];
      tempHtml +=
        /*html*/
        `<div class='${drinkProducts.classes}'>
      <button onclick='addthing2(${i})'>${drinkProducts.item}${drinkProducts.price}</button>
      </div>`;
    }

    return tempHtml;
  } else {
    return tempHtml;
  }
}

function handlekurv() {
  let shoppingCart = webStore.shoppingCart;
  let tempHTML = "";
  tempHTML += /*html*/ `<div class="shoppingcart-wrapper"><div class="shoppingcart">`;

  for (let i = 0; i < shoppingCart.length; i++) {
    tempHTML += shoppingCart[i].item + "<br>";
    tempHTML += shoppingCart[i].price + "<br>";
  }

  tempHTML += `</div></div>`;
  return tempHTML;
}

document.addEventListener("click", function (e) {
  let divClass = e.target.classList[0];

  if (divClass === "shoppingcart-wrapper") {
    toggleShoppingCart();
  }
});

function toggleShoppingCart() {
  let shoppingcartDiv = document.querySelector(".shoppingcart-wrapper");
  if (shoppingcartDiv.style.display === "grid") {
    shoppingcartDiv.style.display = "none";
  } else {
    shoppingcartDiv.style.display = "grid";
  }
}
