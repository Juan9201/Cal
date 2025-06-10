  const inputs = document.querySelectorAll(".number");

  inputs.forEach(function(input) {
    input.addEventListener("input", function () {
      let sanitizedValue = this.value.replace(/[^0-9.]/g, "");
      
const parts = sanitizedValue.split('.');
    if (parts.length > 2) {
        sanitizedValue = parts[0] + '.' + parts.slice(1).join('');
    }
    this.value = sanitizedValue;
    });
  });
