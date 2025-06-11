document.addEventListener("DOMContentLoaded", function () {
    const inputs = document.querySelectorAll(".number");

    function calculation() {
        const inputHeadCount = document.getElementById("a");
        const inputBookingPrice = document.getElementById("b");
        const spanResultado = document.getElementById("r");

        const a = parseFloat(inputHeadCount.value);
        const b = parseFloat(inputBookingPrice.value);

    if (isNaN(a) || isNaN(b)) {
            spanResultado.textContent = "Ingresa números válidos.";
            return;
        }

        const resultCal = (b * 0.08) * a;
        spanResultado.textContent = resultCal.toFixed(2);
    }

    inputs.forEach(function(input) {
        input.addEventListener("input", function () {
            let sanitizedValue = this.value.replace(/[^0-9.]/g, "");

            const parts = sanitizedValue.split('.');
            if (parts.length > 2) {
                sanitizedValue = parts[0] + '.' + parts.slice(1).join('');
            }
            this.value = sanitizedValue;

            calculation(); 
        });

        input.addEventListener("paste", function(event) {
            const pasteData = event.clipboardData.getData('text');
            event.preventDefault();
            let sanitizedPasteData = pasteData.replace(/[^0-9.]/g, "");
            const parts = sanitizedPasteData.split('.');
            if (parts.length > 2) {
                sanitizedPasteData = parts[0] + '.' + parts.slice(1).join('');
            }
            this.value = sanitizedPasteData;

            calculation();
        });
    });

    calculation();
});