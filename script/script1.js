document.addEventListener('DOMContentLoaded', () => {
  let navbar = document.getElementById('navbar');
  let footer = document.getElementById('footer');

  // Хедър
  navbar.innerHTML = `
    <div class="navbar-container">
      <a href="index.html" class="logo-link">
        <img src="images/logo.jpg" alt="RM-Chip Tunning лого" class="logo">
        <span class="brand-name">RM-Chip Tunning</span>
      </a>
      <ul class="nav-menu">
        <li><a href="index.html">Начало</a></li>
        <li><a href="za-nas.html">За нас</a></li>
        <li><a href="uslugi.html">Услуги</a></li>
        <li><a href="novini.html">Новини</a></li>
        <li><a href="galeria.html">Галерия</a></li>
        <li><a href="kontakti.html">Контакти</a></li>
      </ul>
    </div>
  `;

  // Футър
  footer.innerHTML = `
    <div class="footer-section">
      <h4>Навигация</h4>
      <ul>
        <li><a href="index.html">Начало</a></li>
        <li><a href="za-nas.html">За нас</a></li>
        <li><a href="uslugi.html">Услуги</a></li>
        <li><a href="novini.html">Новини</a></li>
        <li><a href="galeria.html">Галерия</a></li>
        <li><a href="kontakti.html">Контакти</a></li>
      </ul>
    </div>
    <div class="footer-section">
      <h4>Социални мрежи</h4>
      <ul>
        <li><a href="https://facebook.com" target="_blank"><i class="fab fa-facebook"></i> Facebook</a></li>
        <li><a href="https://instagram.com" target="_blank"><i class="fab fa-instagram"></i> Instagram</a></li>
      </ul>
    </div>
    <div class="footer-section">
      <h4>Партньори</h4>
      <ul>
        <li><a href="http://www.kosser.net/bg/catalog/autoparts" target="_blank">Косер Авточасти</a></li>
        <li><a href="https://bardahl.bg/" target="_blank">Bardahl</a></li>
        <li><a href="https://www.tech-co.bg/" target="_blank">ТЕХ - КО</a></li>
        <li><a href="https://www.alientech-tools.com/" target="_blank">ALIENTECH</a></li>
      </ul>
    </div>
    <p class="footer-copy">&copy; RM-Chip Tunning, 2025</p>
    <p class="footer-copy"><strong>Сайтът е създаден с учебна цел, няма нищо общо с реалната дейност на фирмата!</strong></p>
  `;
});
