function updateSummary() {
    let allItems = document.querySelectorAll(".cart-item");
    let itemTotal = 0;

    allItems.forEach(item => {
        let priceEl = item.querySelector(".discounted-price");
        let price = parseInt(priceEl.textContent.replace("₹", ""));
        itemTotal += price;
    });

    document.querySelector(".summary-row.item span:last-child").textContent = "₹" + itemTotal;
    let discount = Math.round(itemTotal * 0.4);
    document.querySelector(".summary-row.discount span:last-child").textContent = "- ₹" + discount;
    let finalAmount = itemTotal - discount;
    document.querySelector(".summary-row.total span:last-child").textContent = "₹" + finalAmount;
}



let cartItems = document.querySelectorAll(".cart-item");
cartItems.forEach(item => {

    let minusBtn = item.querySelectorAll(".qty-btn")[0];
    let plusBtn = item.querySelectorAll(".qty-btn")[1];
    let qtyDisplay = item.querySelector(".qty-display");
    let priceElement = item.querySelector(".discounted-price");

    let unitPrice = parseInt(priceElement.textContent.replace("₹", "")) / parseInt(qtyDisplay.textContent);


    plusBtn.addEventListener("click", () => {
        let qty = parseInt(qtyDisplay.textContent);
        qty++;
        qtyDisplay.textContent = qty;
        priceElement.textContent = "₹" + (qty * unitPrice);
        updateSummary();
    });


    minusBtn.addEventListener("click", () => {
        let qty = parseInt(qtyDisplay.textContent);
        if (qty > 1) {
            qty--;
            qtyDisplay.textContent = qty;
            priceElement.textContent = "₹" + (qty * unitPrice);
        }
        updateSummary();
    });
});


updateSummary();
