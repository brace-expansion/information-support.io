document.addEventListener("DOMContentLoaded", () => {
  const nav = `
	<nav class="navbar navbar-dark navbar-expand-lg" uk-sticky="top:100; animation: uk-animation-slide-top; bottom: #sticky-on-scroll-up">
		<div class="container">
			<a href="index.html" class="navbar-brand">
				<i class="fas fa-book mr-2" aria-hidden="true"></i>
				<div class="ml-2 p-0 d-inline webT">Информационная поддержка</div>
			</a>
			<button class="navbar-toggler navbar-toggler-right" data-toggle="collapse" data-target="#navBar">
				<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navBar">
				<ul class="navbar-nav ml-auto">
					<li class="nav-item"><a class="nav-link" href="index.html">Главная</a></li>
					<li class="nav-item"><a class="nav-link" href="basics.html">Основы</a></li>
					<li class="nav-item"><a class="nav-link" href="processes.html">Процессы</a></li>
					<li class="nav-item"><a class="nav-link" href="tools.html">Инструменты</a></li>
					<li class="nav-item"><a class="nav-link" href="quality.html">Качество</a></li>
				</ul>
			</div>
		</div>
	</nav>`;

  const footer = `
	<footer id="footer" class="text-center py-5 text-light">
		<div class="container">
			<div class="row">
				<div class="col">
					<h3 class="display-5 mb-0 text-light">Информационная поддержка процессов жизненного цикла программных систем</h3>
				</div>
			</div>
			<div class="row color-secondary"><div class="col">2026 | ИТ-451м | Щебетовский А. А.</div></div>
		</div>
	</footer>`;

  document.querySelector("#site-nav").innerHTML = nav;
  document.querySelector("#site-footer").innerHTML = footer;

  const currentPage = location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll("#site-nav .nav-link").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.closest(".nav-item").classList.add("active");
    }
  });
});
