Estrutura do projeto
portfolio/
│
├── index.html
├── css/
│   └── style.css
├── img/
│   ├── profile.png
│   ├── projeto1.jpg
│   ├── projeto2.jpg
│   └── projeto3.jpg





<!DOCTYPE html>
<html lang="pt-br">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Portfólio | Desenvolvedor & Designer</title>

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css" rel="stylesheet">

    <link rel="stylesheet" href="css/style.css">

    <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css">
</head>

<body>

    <!-- NAVBAR -->

    <nav class="navbar navbar-expand-lg navbar-dark fixed-top">
        <div class="container">

            <a class="navbar-brand fw-bold logo" href="#">
                AB
            </a>

            <button class="navbar-toggler"
                data-bs-toggle="collapse"
                data-bs-target="#menu">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="menu">

                <ul class="navbar-nav mx-auto">

                    <li class="nav-item">
                        <a class="nav-link active" href="#">Início</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">Sobre</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">Projetos</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">Serviços</a>
                    </li>

                    <li class="nav-item">
                        <a class="nav-link" href="#">Contato</a>
                    </li>

                </ul>

                <a href="#" class="btn btn-cv">
                    Baixar CV
                </a>

            </div>
        </div>
    </nav>

    <!-- HERO -->

    <section class="hero">

        <div class="container">

            <div class="row align-items-center min-vh-100">

                <div class="col-lg-6">

                    <span class="subtitle">
                        Olá, eu sou
                    </span>

                    <h1>
                        Alberto Barros
                    </h1>

                    <h2>
                        Desenvolvedor &
                        <span>Designer</span>
                    </h2>

                    <p>
                        Crio soluções digitais completas com foco
                        em experiência, performance e design.
                    </p>

                    <div class="hero-buttons">

                        <a href="#" class="btn btn-primary-custom">
                            Ver Projetos
                        </a>

                        <a href="#" class="btn btn-outline-custom">
                            Entre em Contato
                        </a>

                    </div>

                    <div class="social-icons">

                        <a href="#"><i class="fab fa-github"></i></a>

                        <a href="#"><i class="fab fa-linkedin"></i></a>

                        <a href="#"><i class="fab fa-behance"></i></a>

                        <a href="#"><i class="fab fa-instagram"></i></a>

                    </div>

                </div>

                <div class="col-lg-6 text-center">

                    <div class="profile-wrapper">

                        <img src="img/profile.png"
                            class="img-fluid profile-img"
                            alt="Perfil">

                    </div>

                </div>

            </div>
        </div>

    </section>

    <!-- SOBRE -->

    <section class="section-padding">

        <div class="container">

            <div class="row g-4">

                <div class="col-lg-6">

                    <h2>
                        Apaixonado por resolver problemas e criar
                        experiências incríveis.
                    </h2>

                    <p>
                        Sou desenvolvedor full stack e designer digital
                        com foco em aplicações modernas, responsivas e
                        escaláveis.
                    </p>

                </div>

                <div class="col-lg-6">

                    <div class="row g-4">

                        <div class="col-md-6">
                            <div class="card-custom">
                                <i class="fas fa-code"></i>
                                <h4>Desenvolvimento</h4>
                                <p>Sites e sistemas modernos.</p>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="card-custom">
                                <i class="fas fa-palette"></i>
                                <h4>UI/UX</h4>
                                <p>Interfaces modernas.</p>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="card-custom">
                                <i class="fas fa-rocket"></i>
                                <h4>Performance</h4>
                                <p>Aplicações rápidas.</p>
                            </div>
                        </div>

                        <div class="col-md-6">
                            <div class="card-custom">
                                <i class="fas fa-lightbulb"></i>
                                <h4>Experiência</h4>
                                <p>Soluções focadas no usuário.</p>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>

    </section>

    <!-- PROJETOS -->

    <section class="section-padding">

        <div class="container">

            <div class="section-title">

                <h2>Projetos Recentes</h2>

            </div>

            <div class="row g-4">

                <div class="col-lg-4">

                    <div class="project-card">

                        <img src="img/projeto1.jpg"
                            class="img-fluid">

                        <div class="project-content">

                            <h4>TaskFlow</h4>

                            <p>
                                Plataforma de gestão de tarefas.
                            </p>

                        </div>

                    </div>

                </div>

                <div class="col-lg-4">

                    <div class="project-card">

                        <img src="img/projeto2.jpg"
                            class="img-fluid">

                        <div class="project-content">

                            <h4>Urban Store</h4>

                            <p>
                                Loja virtual moderna.
                            </p>

                        </div>

                    </div>

                </div>

                <div class="col-lg-4">

                    <div class="project-card">

                        <img src="img/projeto3.jpg"
                            class="img-fluid">

                        <div class="project-content">

                            <h4>Agência Craft</h4>

                            <p>
                                Landing page institucional.
                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </section>

    <!-- CONTATO -->

    <footer>

        <div class="container text-center">

            <h2>Vamos trabalhar juntos?</h2>

            <p>
                Estou disponível para novos projetos.
            </p>

            <a href="#" class="btn btn-primary-custom">
                Entrar em Contato
            </a>

        </div>

    </footer>

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js"></script>

</body>

</html>

@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap');

:root {
    --bg: #050816;
    --card: #0f172a;
    --purple: #7c3aed;
    --pink: #ec4899;
    --text: #ffffff;
    --gray: #b5b5b5;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: var(--bg);
    color: var(--text);
    font-family: Poppins, sans-serif;
}

.navbar {
    backdrop-filter: blur(20px);
    background: rgba(5, 8, 22, .8);
}

.logo {
    color: var(--purple);
    font-size: 2rem;
}

.hero {
    background:
        radial-gradient(circle at top right,
            rgba(124, 58, 237, .35),
            transparent 30%),
        var(--bg);
}

.subtitle {
    color: var(--purple);
    font-size: 1.2rem;
}

.hero h1 {
    font-size: 4rem;
    font-weight: 700;
}

.hero h2 {
    font-size: 2.5rem;
}

.hero h2 span {
    color: var(--pink);
}

.hero p {
    color: var(--gray);
    margin: 30px 0;
}

.hero-buttons {
    display: flex;
    gap: 15px;
    flex-wrap: wrap;
}

.btn-primary-custom {
    background: linear-gradient(
        45deg,
        var(--purple),
        var(--pink)
    );
    border: none;
    color: white;
    padding: 14px 30px;
    border-radius: 50px;
}

.btn-outline-custom {
    border: 1px solid #ffffff33;
    color: white;
    padding: 14px 30px;
    border-radius: 50px;
}

.btn-cv {
    border: 1px solid var(--purple);
    color: white;
    border-radius: 50px;
}

.profile-wrapper {
    position: relative;
}

.profile-wrapper::before {
    content: "";
    width: 320px;
    height: 320px;
    position: absolute;
    background: linear-gradient(
        45deg,
        var(--purple),
        var(--pink)
    );
    filter: blur(100px);
    z-index: -1;
    left: 50%;
    transform: translateX(-50%);
}

.profile-img {
    max-width: 450px;
}

.social-icons {
    margin-top: 30px;
}

.social-icons a {
    color: white;
    font-size: 1.4rem;
    margin-right: 20px;
    transition: .3s;
}

.social-icons a:hover {
    color: var(--purple);
}

.section-padding {
    padding: 100px 0;
}

.card-custom {
    background: rgba(255,255,255,.03);
    border: 1px solid rgba(255,255,255,.06);
    padding: 30px;
    border-radius: 20px;
    height: 100%;
    transition: .3s;
}

.card-custom:hover {
    transform: translateY(-5px);
    border-color: var(--purple);
}

.card-custom i {
    color: var(--purple);
    font-size: 2rem;
    margin-bottom: 15px;
}

.project-card {
    overflow: hidden;
    border-radius: 20px;
    background: var(--card);
}

.project-card img {
    width: 100%;
    height: 250px;
    object-fit: cover;
}

.project-content {
    padding: 20px;
}

footer {
    padding: 100px 0;
    border-top: 1px solid rgba(255,255,255,.1);
}

@media (max-width: 992px) {

    .hero {
        text-align: center;
    }

    .hero h1 {
        font-size: 3rem;
    }

    .hero-buttons {
        justify-content: center;
    }

    .social-icons {
        text-align: center;
    }

    .profile-img {
        margin-top: 50px;
    }
}

@media (max-width: 576px) {

    .hero h1 {
        font-size: 2.3rem;
    }

    .hero h2 {
        font-size: 1.7rem;
    }

}