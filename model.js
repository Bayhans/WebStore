let webStore = {
    categories:{
        data: [
            {id: 1, item:"RTX", details:"3090", price: 00000, classes: "portfolio-item medium"},
            {id: 2, item:"Neo", details:"G9", price: 00000, classes: "portfolio-item large two"},
            {id: 3, item:"Conquer", details:"2", price: 00000, classes: "portfolio-item medium"},
            {id: 4, item:"Processor", details:"i9", price: 00000, classes: "portfolio-item small"},
        ],
        drink: [
            {id: 5, item: "red bull", volume: "0.473ml", price: 32.50, classes: "portfolio-item tall"},
            {id: 6, item: "cola", volume: "1.5l", price: 24.50, classes: "portfolio-item fitt"},
            {id: 7, item: "solo", volume: "1.5l", price: 32.50, classes: "portfolio-item medium"},
        ]
    },
    
    navItems: ["home", "products", "about us"],
    
    shoppingCart: [],

    history: [],
};

let page = ["home"];
let navCounter = 1;
let navCounterBack = -2; 
let navCounterForward = 2;
 