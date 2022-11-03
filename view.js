let htmlAppDiv = document.getElementById("app");
show();
function show() {
  let tempPage = "";
  tempPage += handlekurv();
  tempPage += /*html*/ `
    <header><div class="logo">some<span>thing</span>
    <div class="sidebar">${navigator()}</div>
    <div class='shoppingCart' onclick='toggleShoppingCart()'>🛒</div>
    </header>
    <menu>${navButton()}</menu>
    <main>`;
  if (page === "home") {
    tempPage += home();
  } else if (page === "products") {
    tempPage += products();
  } else if (page === "about us") {
    tempPage += infoPage();
  }
  tempPage += /*html*/ `<div class="main-content">
    <div class="portfolio">${items()}</div></main>
    <footer></footer>`;
  htmlAppDiv.innerHTML = tempPage;
}

function navigator() {
  let tempHtml = "";
  for (let i = 0; i < webStore.navItems.length; i++) {
    let menuItem = webStore.navItems[i];
    tempHtml += /*html*/ `<div class="nav-item">
        <button onclick="changePage('${menuItem}')">${menuItem}</button>
        </div>`;
  }
  return tempHtml;
}

function navButton() {
  let tempHTML = /*html*/ `<div class="nav-item" ><button onclick='goBack()'>&#8249&#8249&#8249;</button></div> `;
  tempHTML += /*html*/ `<div class='nav-item'><button onclick='goForward()'>&#8250&#8250&#8250;</button></div>`;
  return tempHTML;
}

function home() {
  let tempHtml = /*html*/ `the Home page`;
  return tempHtml;
}

function products() {
  let tempHtml = `the products page`;
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
      let thing1 = webStore.categories.data[i];
      tempHtml += /*html*/
        `<div class='${thing1.classes}'>
      <button onclick='addthing1(${i})'>${thing1.item}${thing1.details}</button>
      </div>`;
    }

    for (let i = 0; i < webStore.categories.drink.length; i++) {
      let thing2 = webStore.categories.drink[i];
      tempHtml += /*html*/
        `<div class='${thing2.classes}'>
      <button onclick='addthing2(${i})'>${thing2.item}${thing2.price}</button>
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
  tempHTML += /*html*/`<div class="shoppingcart-wrapper"><div class="shoppingcart">`;

  for (let i = 0; i < shoppingCart.length; i++) {
    tempHTML += shoppingCart[i].item + '<br>';
    tempHTML += shoppingCart[i].price + '<br>';
  };

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
  let shoppingcartDiv = document.querySelector('.shoppingcart-wrapper');
  if (shoppingcartDiv.style.display === "grid") {
    shoppingcartDiv.style.display = "none";
  } else {
    shoppingcartDiv.style.display = "grid";
  }
}