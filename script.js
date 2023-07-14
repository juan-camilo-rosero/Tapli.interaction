import { createOptions, returnMenu, returnOrder, showDishes } from "./menu.js"

const d = document,
menu = {
    options: ["Pasabocas", "Almuerzos", "Bebidas", "Postres"],
    options_names: ["pasabocas", "almuerzos", "bebidas", "postres"],
    pasabocas: {
        options: ["Pastel de pollo", "Pastel de jamón y queso", "Pastel de espinacas", "Pastel de salchicha"],
        descriptions: ["relleno de pollo desmenuzado", "con delicioso jamón y queso derretido", "con espinacas frescas", "con jugosa salchicha"],
        prices: ["$7.000", "$8.000", "$7.000", "$6.000"]
    },
    almuerzos: {
        options: ["Pollo a la plancha", "Pasta con salsa marinara", "Ensalada César", "Sandwich de pollo"],
        descriptions: ["jugoso pollo a la plancha con vegetales", "pasta al dente con salsa de tomate casera", "fresca y crujiente con aderezo César", "tierno pollo en un pan recién horneado"],
        prices: ["$14.000", "$12.000", "$10.000", "$9.000"]
    },
    bebidas: {
        options: ["Refresco de limón", "Jugo de naranja", "Agua mineral", "Cerveza artesanal"],
        descriptions: ["natural y refrescante", "recién exprimido", "con gas", "elaborada localmente"],
        prices: ["$3.000", "$4.000", "$2.000", "$6.000"]
    },
    postres: {
        options: ["Tarta de manzana", "Helado de vainilla", "Flan de caramelo", "Brownie con helado"],
        descriptions: ["con crujiente masa", "cremoso y suave", "hecho en casa", "caliente y frío a la vez"],
        prices: ["$5.000", "$6.000", "$4.000", "$7.000"]
    }        
}

createOptions(menu)
showDishes(menu)
returnMenu(".return", ".continue-order")
returnOrder(".order-return")