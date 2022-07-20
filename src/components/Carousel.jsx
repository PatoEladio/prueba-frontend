const Carousel = () => {
  return (
    <div>
      <div
        id="carouselExampleCaptions"
        class="carousel slide"
        data-bs-ride="false"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            class="active bg-dark"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            class="bg-dark"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            class="bg-dark"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div style={{ position: "absolute", top: 80 + "px", left: 800 + "px", visibility: "visible", zIndex: 1 }} >
            <img src="public/static/images/LogoEmpresa.png" />
            <h1 className="display-1">Tienda</h1>
            <h3 className="lead">Hacemos tu vida mas facil.</h3>
          </div>
          <div class="carousel-item active">
            <img
              id="imagenBlur"
              src="/public/static/images/imagenCarrusel1.png"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              src="/public/static/images/imagenCarrusel2.jpg"
              id="imagenBlur"
              class="d-block w-100"
              alt="..."
            />
          </div>
          <div class="carousel-item">
            <img
              id="imagenBlur"
              src="/public/static/images/imagenCarrusel3.jpg"
              class="d-block w-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div >
  );
};

export default Carousel;
