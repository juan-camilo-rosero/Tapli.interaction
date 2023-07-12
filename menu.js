import { continueOrder, createCounter, getOrder, updateCounter } from "./interaction.js";

const d = document,
$menuDiv = d.querySelector(".menu"),
$productsDiv = d.querySelector(".products-div"),
$productsDivOptions = d.querySelector(".product-options"),
$orderDiv = d.querySelector(".order-div")

export function createOptions(menu) {
    const options = menu.options,
    $btn = d.querySelector(".continue-order")
    options.forEach(option => {
        // Create the option element
        const $optionDiv = d.createElement("div"),
        $optionText = d.createElement("h2")

        $optionDiv.classList.add("option")
        $optionText.textContent = option
        $optionDiv.appendChild($optionText)

        // Show option in the main
        $menuDiv.appendChild($optionDiv)
    });
    /*const $btn = d.createElement("button")
    $btn.textContent = "Ordenar"
    $menuDiv.appendChild($btn)
    $btn.classList.add("continue-order")*/

    $btn.addEventListener("click", e => continueOrder(e))
}

export function showDishes(menu) {
    const $options = d.querySelectorAll(".option")
    $options.forEach((option, i) => {
        option.addEventListener("click", e => {
            let key = menu.options_names[i],
            options = menu[key].options,
            descriptions = menu[key].descriptions,
            prices = menu[key].prices

            // Hide options

            $menuDiv.classList.add("hidden")
            setTimeout(() => {
                $menuDiv.classList.add("none")
            }, 400);

            // Create products

            const $title = d.createElement("h2")
            $title.classList.add("product-title")
            $title.textContent = option.textContent

            $productsDivOptions.appendChild($title)

            options.forEach((opt, index) => {
                const $product = d.createElement("div"),
                $name = d.createElement("p"),
                $description = d.createElement("p"),
                $price = d.createElement("p"),
                $counterDiv = d.createElement("div"),
                $less = d.createElement("p"),
                $more = d.createElement("p"),
                $counter = d.createElement("p")

                
                $less.classList.add("less")
                $more.classList.add("more")
                $counter.classList.add("counter")
                $counterDiv.classList.add("counter-div")
                $product.classList.add("product")
                $name.classList.add("product-name")
                $description.classList.add("product-description")
                $price.classList.add("product-price")
                
                $name.textContent = opt
                $description.textContent = descriptions[index]
                $price.textContent = prices[index]
                $less.textContent = "-"
                $more.textContent = "+"
                $counter.textContent = "0"

                $counterDiv.appendChild($less)
                $counterDiv.appendChild($counter)
                $counterDiv.appendChild($more)
                
                $product.appendChild($name)
                $product.appendChild($description)
                $product.appendChild($price)
                $product.appendChild($counterDiv)
    
                // Show products in the main
    
                $productsDivOptions.appendChild($product)
                createCounter($counterDiv, $title.textContent, menu)
                updateCounter($counterDiv, $title.textContent, menu)
            });
            $productsDiv.classList.remove("none")
            setTimeout(() => {
                $productsDiv.classList.remove("hidden")
            }, 400);
        })
    });
}

export function returnMenu(btn, continueBtn) {
    const $btn = d.querySelector(btn),
    $continueBtn = d.querySelector(continueBtn)

    $btn.addEventListener("click", e => {
        $productsDiv.classList.add("hidden")
        setTimeout(() => {
                $productsDiv.classList.add("none")
                $productsDivOptions.innerHTML = ""
                $menuDiv.classList.remove("none")
            }, 400);
            setTimeout(() => {
                $menuDiv.classList.remove("hidden")
            }, 500);
            (Object.entries(getOrder()).length)
            ? $continueBtn.classList.add("active")
            : $continueBtn.classList.remove("active")
    })
}

export function returnOrder(btn) {
    const $btn = d.querySelector(btn)
    $btn.addEventListener("click", e => {
        $orderDiv.classList.add("hidden")
        setTimeout(() => {
                $orderDiv.classList.add("none")
                $menuDiv.classList.remove("none")
            }, 400);
            setTimeout(() => {
                $menuDiv.classList.remove("hidden")
            }, 500);
    })
}