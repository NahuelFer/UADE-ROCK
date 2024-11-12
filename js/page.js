

function nomAp(){
    var nombre, apellido;
    nombre = document.getElementById("nombre").value;
    apellido = document.getElementById("apellido").value;

    alert("Gracias, " + nombre +" " + apellido + " , tu consulta fue enviada con exito.");
}

$(document).ready(function() {
    var urlParams = new URLSearchParams(window.location.search);
    var searchQuery = urlParams.get('search');

    if (searchQuery) {
        searchQuery = searchQuery.toLowerCase().trim();
        $('.card').each(function() {
            var altText = $(this).find('img').attr('alt').toLowerCase().trim();

            if (altText.includes(searchQuery)) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }

  
    $(document).ready(function() {
        // Evento para presionar "Enter" en el campo de búsqueda
        $('#inputBuscar').on('keypress', function(event) {
            if (event.which === 13) {
                event.preventDefault();
                var searchQuery = $(this).val().trim();
                if (searchQuery) {
                    window.location.href = 'products.html?search=' + encodeURIComponent(searchQuery);
                }
            }
        });
    
        // Evento para hacer clic en el botón de búsqueda (lupa)
        $('#searchButton').on('click', function() {
            var searchQuery = $('#inputBuscar').val().trim();
            if (searchQuery) {
                window.location.href = 'products.html?search=' + encodeURIComponent(searchQuery);
            }
        });
    });
    

    $(".producto img").hover(
        function() {
            $(this).css("transform", "scale(1.2)");
            $(this).css("transition", "transform 0.3s ease-in-out");
        },
        function() {
            $(this).css("transform", "scale(1)");
        }
    );
});

document.querySelectorAll('.category-filter').forEach(checkbox => {
checkbox.addEventListener('change', () => {
const selectedCategories = Array.from(
    document.querySelectorAll('.category-filter:checked')
).map(cb => cb.value);

document.querySelectorAll('.card').forEach(card => {
    if (selectedCategories.includes(card.classList[1])) {
        card.style.display = 'block';
    } else {
        card.style.display = 'none';
    }
        });
    });
});




document.getElementById('searchButton').addEventListener('click', function() {
    var searchQuery = document.getElementById('inputBuscar').value.trim();
    if (searchQuery) {
        var input = $(this).val().toLowerCase().trim();
        window.location.href = 'products.html?search=' + encodeURIComponent(input); 

           }
});

document.getElementById('inputBuscar').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault(); 
        var searchQuery = document.getElementById('inputBuscar').value.trim();
        if (searchQuery) {
            var input = $(this).val().toLowerCase().trim();
            window.location.href = 'products.html?search=' + encodeURIComponent(input); 
            }
    }
});
