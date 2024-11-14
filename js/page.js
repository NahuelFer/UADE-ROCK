document.addEventListener("DOMContentLoaded", () => {
    function realizarBusqueda() {
        const searchQuery = document.getElementById("inputBuscar").value.trim().toLowerCase();
        if (searchQuery) {
            window.location.href = 'products.html?search=' + encodeURIComponent(searchQuery);
        }
    }

    document.getElementById('searchButton').addEventListener('click', realizarBusqueda);
    document.getElementById('inputBuscar').addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            event.preventDefault();
            realizarBusqueda();
        }
    });

    $(document).ready(function() {
        const urlParams = new URLSearchParams(window.location.search);
        let searchQuery = urlParams.get('search');
        const noDisponibleCard = $('.no-disponible');

        noDisponibleCard.hide();

        function filtrarProductos() {
            let foundMatch = false;
            const searchQueryLower = searchQuery ? searchQuery.toLowerCase() : '';

            $('.card').each(function() {
                const altText = $(this).find('img').attr('alt') ? $(this).find('img').attr('alt').toLowerCase() : '';
                const category = $(this).attr('class').split(' ')[1];
                const selectedCategories = $('.category-filter:checked').map(function() {
                    return this.value;
                }).get();

                const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(category);
                const searchMatch = !searchQueryLower || altText.includes(searchQueryLower);

                if (categoryMatch && searchMatch) {
                    $(this).show();
                    foundMatch = true;
                } else {
                    $(this).hide();
                }
            });

            if (!foundMatch) {
                noDisponibleCard.show();
            } else {
                noDisponibleCard.hide();
            }
        }

        if (searchQuery) {
            filtrarProductos();
        } else {
            $('.card').show();
        }

        $('.category-filter').on('change', function() {
            searchQuery = document.getElementById("inputBuscar").value.trim().toLowerCase();
            filtrarProductos();
        });

        $(".card img").hover(
            function() {
                $(this).css("transform", "scale(1.2)");
                $(this).css("transition", "transform 0.3s ease-in-out");
            },
            function() {
                $(this).css("transform", "scale(1)");
            }
        );
    });
});

function nomAp(event) {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const apellido = document.getElementById("apellido").value.trim();
    const email = document.getElementById("email").value.trim();
    const motivo = document.getElementById("motivo").value.trim();
    const terminos = document.getElementById("terminos").checked;

    if (nombre === "" || apellido === "" || email === "" || motivo === "" || !terminos) {
        alert("Por favor, completa todos los campos obligatorios y acepta los términos.");
    } else {
        alert("Gracias, " + nombre + " " + apellido + ", tu consulta fue enviada con éxito.");
        window.location.href = '../index.html';
    }
}
