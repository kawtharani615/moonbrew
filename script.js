  function filterProducts(category) {

            let products = document.querySelectorAll(".product");

            products.forEach(function(product) {

                if (category === "all" ||
                    product.dataset.category === category) {

                    product.style.display = "block";

                } else {

                    product.style.display = "none";

                }

            });

        }

        document.getElementById("searchInput")
            .addEventListener("keyup", function() {

                let search = this.value.toLowerCase();

                let products =
                    document.querySelectorAll(".product");

                products.forEach(function(product) {

                    let name =
                        product.dataset.name.toLowerCase();

                    if (name.includes(search)) {

                        product.style.display = "block";

                    } else {

                        product.style.display = "none";

                    }

                });

            });

        function orderProduct(productName) {

            alert(
                productName +
                " has been added to your order!"
            );

        }

        document.getElementById("contactForm")
            .addEventListener("submit", function(event) {

                event.preventDefault();

                let name =
                    document.getElementById("name").value;

                alert(
                    "Thank you, " +
                    name +
                    "! Your message has been sent."
                );

                this.reset();

            });
