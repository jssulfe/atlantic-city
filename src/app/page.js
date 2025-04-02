import Image from "next/image";
import "./style.css";
import "./headerAndFooter.css";

export default function Home() {
  return (
    <body>
      <header>
        <div class="left-header">
          <a href="index.html">
            <h2>Atlantic City</h2>
          </a>

          <a href="">Explorar</a>
        </div>
        <div class="right-header">
          <div>
            <a href="#">Apuestas en vivo</a>
            <a href="#">Apuestas deportivas</a>
            <a href="#">Casino</a>
            <a href="#">Juegos Virtuales</a>
            <a href="#">Promociones</a>
          </div>
          <div class="login">
            <div class="login-button">
              <a href="">Iniciar Sesión</a>
            </div>
            <div class="register-button">
              <a href="">Regístrate</a>
            </div>
          </div>
        </div>
      </header>

      <section>
        <div class="tittle">
          <h1>
            "La emocion nunca se detiene, la suerte te espera en cada giro"
          </h1>
        </div>
      </section>
      <section class="gallery" id="gallery">
        <div id="carouselExampleDark" class="carousel carousel-dark slide">
          <div class="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              class="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div class="carousel-inner">
            <div class="carousel-item active" data-bs-interval="10000">
              <p>APUESTAS EN VIVO</p>
              <img
                src="/apuestas_virtual3.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <p>APUESTAS DEPORTIVAS</p>
              <img src="/deportivas.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <p>CASINO</p>
              <img
                src="/casino-juegos-economia.jpg"
                class="d-block w-100"
                alt="..."
              />
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div class="foot">
          <div>
            <h4>Atlantic City</h4>
            <a href="">
              <p>Home</p>
            </a>
            <a href="">
              <p>Nosotros</p>
            </a>
            <a href="">
              <p>Mi cuenta</p>
            </a>
          </div>
          <div>
            <h4>Juegos</h4>
            <a href="">
              <p>Apuestas en vivo</p>
            </a>
            <a href="">
              {" "}
              <p>Apuestas deportivas</p>
            </a>
            <a href="">
              <p>Casino</p>
            </a>
          </div>
          <div>
            <h4>Contacto</h4>
            <a href="">
              <p>ayuda@atlanticcity.com</p>
            </a>
            <a href="">
              <p>01 510 2586</p>
            </a>
          </div>
          <div>
            <h4>Síguenos en</h4>
            <a href="">
              <img src="" alt="" width="50px" />
            </a>
            <a href="">
              {" "}
              <img src="" alt="" width="50px" />
            </a>
            <a href="">
              <img src="" alt="" width="50px" />
            </a>
            <a href="">
              <img src="" alt="" width="50px" />
            </a>
          </div>
        </div>
      </footer>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz"
        crossorigin="anonymous"
      ></script>
    </body>
  );
}
