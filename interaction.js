const d = document,
order = {}

export function createCounter($div, category, menu) {
    const $parent = $div.parentNode,
    $less = $div.firstChild,
    $more = $div.lastChild,
    $counter = $less.nextSibling,
    index = menu.options.indexOf(category),
    option_name = menu.options_names[index]

    let product = $parent.firstChild.textContent,
    productKey = product.toLowerCase()
    productKey = productKey.replace(/[^a-z0-9 ]/g, '')
    productKey = productKey.replace(/\s/g, '_')

    $more.addEventListener("click", e => {
        let counterVal = parseInt($counter.textContent)
        $counter.textContent = counterVal + 1
        if(Object.prototype.hasOwnProperty.call(order, option_name)) {
            if(Object.prototype.hasOwnProperty.call(order[option_name], productKey)) order[option_name][productKey] += 1
            else order[option_name][productKey] = 1
        }
        else{
            order[option_name] = {}
            order[option_name][productKey] = 1
        }
    })
    $less.addEventListener("click", e => {
        let counterVal = parseInt($counter.textContent)
        if (counterVal > 0) $counter.textContent = counterVal - 1
        if(Object.prototype.hasOwnProperty.call(order, option_name)) {
            if(Object.prototype.hasOwnProperty.call(order[option_name], productKey)){
                if(order[option_name][productKey] > 1)order[option_name][productKey] -= 1
                else {
                    delete order[option_name][productKey]
                    if(Object.values(order[option_name]).length == 0) delete order[option_name]
                }
            }
        }
    })

}

export function updateCounter($div, category, menu) {
    const $parent = $div.parentNode,
    $counter = $div.firstChild.nextSibling,
    index = menu.options.indexOf(category),
    option_name = menu.options_names[index]

    let product = $parent.firstChild.textContent,
    productKey = product.toLowerCase()
    productKey = productKey.replace(/[^a-z0-9 ]/g, '')
    productKey = productKey.replace(/\s/g, '_')

    category = category.toLowerCase()
    category = category.replace(/[^a-z0-9 ]/g, '')
    category = category.replace(/\s/g, '_')

    if(Object.prototype.hasOwnProperty.call(order, category) && Object.prototype.hasOwnProperty.call(order[category], productKey)) $counter.textContent = order[category][productKey]
}

export function continueOrder(e) {
    const $menuSec = d.querySelector(".menu"),
    $orderSec = d.querySelector(".order-div")

    let orderText = ""
    if(e.target.classList.contains("active")) {
        $menuSec.classList.add("hidden")
        setTimeout(() => {
                $menuSec.classList.add("none")
                $orderSec.classList.remove("none")
            }, 400);
            setTimeout(() => {
                $orderSec.classList.remove("hidden")
            }, 500);

            Object.keys(order).forEach(key => {
                Object.keys(order[key]).forEach(product => {
                    orderText += ` ---- ${product}: ${order[key][product]}`  
                });
            });

            new QRious({
            element: document.querySelector("#order-code"),
            value: JSON.stringify(orderText),
            size: 200,
            backgroundAlpha: 0,
            foreground: "#320F00",
            level: "H",
        })
    }
    else alert("Primero debes seleccionar uno o más productos")
}

export function getOrder() {return order}