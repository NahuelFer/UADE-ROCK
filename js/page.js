function nomAp(event) {
    event.preventDefault(); // Previene el envío del formulario

    var nombre = document.getElementById("nombre").value.trim();
    var apellido = document.getElementById("apellido").value.trim();
    var email = document.getElementById("email").value.trim();
    var motivo = document.getElementById("motivo").value.trim();
    var terminos = document.getElementById("terminos").checked;

    if (nombre === "" || apellido === "" || email === "" || motivo === "" || !terminos) {
        alert("Por favor, completa todos los campos obligatorios y acepta los términos.");
        return false; 
    }

    alert("Gracias, " + nombre + " " + apellido + ", tu consulta fue enviada con éxito.");
    window.location.href = '../index.html'; 
}

document.getElementById('searchButton').addEventListener('click', function() {
    var searchQuery = document.getElementById('inputBuscar').value.trim();
    if (searchQuery) {
        window.location.href = 'products.html?search=' + encodeURIComponent(searchQuery);
    }
});

document.getElementById('inputBuscar').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        e.preventDefault(); 
        var searchQuery = document.getElementById('inputBuscar').value.trim();
        if (searchQuery) {
            window.location.href = 'products.html?search=' + encodeURIComponent(searchQuery);
        }
    }
});


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
        $('#inputBuscar').on('keypress', function(event) {
            if (event.which === 13) {
                event.preventDefault();
                var searchQuery = $(this).val().trim();
                if (searchQuery) {
                    window.location.href = 'products.html?search=' + encodeURIComponent(searchQuery);
                }
            }
        });
    
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

$(document).ready(function() {
    $('.card').show();

    $('.category-filter').on('change', function() {
        const selectedCategories = $('.category-filter:checked')
            .map(function() {
                return this.value;
            })
            .get();

        if (selectedCategories.length === 0) {
            $('.card').show();
        } else {
            $('.card').each(function() {
                const category = $(this).attr('class').split(' ')[1];
                if (selectedCategories.includes(category)) {
                    $(this).show();
                } else {
                    $(this).hide();
                }
            });
        }
    });

    $('#inputBuscar').on('keypress', function(event) {
        if (event.which === 13) { 
            event.preventDefault();
            var searchQuery = $(this).val().trim().toLowerCase();
            if (searchQuery) {
                window.location.href = 'products.html?search=' + encodeURIComponent(searchQuery);
            }
        }
    });

    $('#searchButton').on('click', function() { 
        var searchQuery = $('#inputBuscar').val().trim().toLowerCase();
        if (searchQuery) {
            window.location.href = 'products.html?search=' + encodeURIComponent(searchQuery);
        }
    });

    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('search');
    if (searchQuery) {
        $('.card').each(function() {
            const altText = $(this).find('img').attr('alt').toLowerCase().trim();
            if (altText.includes(searchQuery.toLowerCase())) {
                $(this).show();
            } else {
                $(this).hide();
            }
        });
    }

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
