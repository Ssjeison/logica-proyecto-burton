const carousel = document.querySelector('.carousel-inner');
        const prevBtn = document.querySelector('.carousel-control.prev');
        const nextBtn = document.querySelector('.carousel-control.next');
        const modal = document.getElementById('movieModal');
        const closeBtn = document.querySelector('.close');
        const movieTitle = document.getElementById('movieTitle');
        const movieYear = document.getElementById('movieYear');
        const movieDescription = document.getElementById('movieDescription');

        let currentIndex = 0;

        nextBtn.addEventListener('click', (e) => {
            e.preventDefault();
            currentIndex = (currentIndex + 1) % 10;
            updateCarousel();
        });

        prevBtn.addEventListener('click', (e) => {
            e.preventDefault();
            currentIndex = (currentIndex - 1 + 10) % 10;
            updateCarousel();
        });

        function updateCarousel() {
            carousel.style.transform = `translateX(-${currentIndex * 20}%)`;
        }

        const movieData = [
            { id: 1, title: "Beetlejuice 2", year: "Año: " + 2024, description: "Los fantasmas regresan con más caos en una secuela sobrenatural llena de humor y excentricidad." },
            { id: 2, title: "Frankenweenie", year: "Año: " + 2012, description: "Un niño revive a su perro muerto en una conmovedora historia en blanco y negro sobre amistad y ciencia." },
            { id: 3, title: "Sombras Tenebrosas", year: "Año: " + 2012, description: "Un vampiro despierta tras siglos dormido, enfrentando a su excéntrica familia y nuevos enemigos." },
            { id: 4, title: "Miss Peregrine y los niños peculiares", year: "Año: " + 2016, description: "Un joven descubre un orfanato con niños con habilidades extraordinarias atrapados en un bucle temporal." },
            { id: 5, title: "Alicia en el Pais de las Maravillas", year: "Año: " + 2010, description: "Alicia regresa a un mundo surrealista para enfrentar a la malvada Reina Roja y restaurar el equilibrio." },
            { id: 6, title: "El cadaver de la Novia", year: "Año: " + 2005, description: "Un joven accidentalmente promete matrimonio a una novia cadáver, lo que lo lleva a un viaje al inframundo." },
            { id: 7, title: "El joven manos de Tijeras", year: "Año: " + 1990, description: "Un hombre con tijeras en lugar de manos lucha por integrarse en una comunidad suburbana." },
            { id: 8, title: "El barbero demoniaco de la calle Feet", year: "Año: " + 2007, description: "Un barbero vengativo une fuerzas con una panadera para asesinar y usar a sus víctimas en pasteles." },
            { id: 9, title: "El extraño mundo de Jack", year: "Año: " + 1993, description: "Jack Skellington intenta apoderarse de la Navidad, provocando caos entre los mundos de Halloween y Navidad." },
            { id: 10, title: "Abraham Lincoln: Cazador de Vampiros", year: "Año: " + 2012, description: "El presidente Lincoln descubre una conspiración de vampiros y jura erradicarlos mientras lucha por su nación." },
        ];

        carousel.addEventListener('click', (e) => {
            if (e.target.tagName === 'IMG') {
                const movieId = parseInt(e.target.dataset.id);
                const movie = movieData.find(m => m.id === movieId);
                if (movie) {
                    movieTitle.textContent = movie.title;
                    movieYear.textContent = movie.year;
                    movieDescription.textContent = movie.description;
                    modal.style.display = 'block';
                }
            }
        });

        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });

        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });