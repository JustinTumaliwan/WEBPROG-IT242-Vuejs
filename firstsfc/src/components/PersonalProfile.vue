<template>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Justin Tumaliwan | Portfolio</title>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;700;900&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
</head>
<body>

    <nav>
        <div class="logo">JusTum</div>
        <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#skills">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#hobbies">Hobbies</a></li>
            <li><a href="#contact">Contact</a></li>
        </ul>

    </nav>

    <section id="home" class="hero">
        <div class="bg-text-overlay"></div>
        <div class="hero-content">
            <span class="hello">HELLO!</span>
            <h1>I'm <span>Justin</span><br>Tumaliwan</h1>
            <h2>Asia Pacific College IT Student</h2>
            <a href="#about" class="btn-primary">LEARN MORE</a>
        </div>
        <div class="hero-image">
            <img src=".components/images/juspfp.png" alt="Justin Tumaliwan">
        </div>
    </section>

    <section id="about" class="content-section dark-bg">
        <div class="container">
            <div class="about-grid">
                <div class="img-box">
                    <img src=".components/images/juswatch2.png" alt="About">
                </div>
                <div class="text-box">
                    <h2 class="section-title">About <span>Me</span></h2>
                    <p class="desc">I am an IT student at Asia Pacific College, passionate about technology and tries to solve problems through code. </p>
                    <ul class="info-list">
                        <li><strong>Name:</strong> Justin Tumaliwan</li>
                        <li><strong>Email:</strong> tumaliwan.jus0724@gmail.com</li>
                        <li><strong>Phone:</strong> 09774950031</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section id="skills" class="content-section light-bg">
        <div class="container">
            <h2 class="section-title">My <span>Skills</span></h2>
            <div class="card-grid">
                <div class="card">
                    <h3>Development</h3>
                    <p>Proficient in Python, Java, and Web Technologies (HTML/CSS/JS) to build robust applications.</p>
                </div>
                <div class="card">
                    <h3>UI/UX Design</h3>
                    <p>Designing intuitive interfaces using Figma and Adobe tools with a focus on user journey.</p>
                </div>
                <div class="card">
                    <h3>Data Analysis</h3>
                    <p>Experience in managing databases and using SQL to extract meaningful insights.</p>
                </div>
                <div class="card">
                    <h3>Mobile Development</h3>
                    <p>Building cross-platform and native mobile applications using Flutter and Android Studio for seamless user experiences.</p>
                </div>
                <div class="card">
                    <h3>Low-Code Solutions</h3>
                    <p>Accelerating digital transformation through rapid application development using OutSystems and Microsoft Power Apps.</p>
                </div>
                <div class="card">
                    <h3>Cloud Computing</h3>
                    <p>Exploring and implementing scalable solutions using cloud services (AWS/Azure) to host and manage modern applications.</p>
                </div>
            </div>
        </div>
    </section>

    <section id="projects" class="content-section dark-bg">
        <div class="container">
            <h2 class="section-title">My <span>Projects</span></h2>
            <div class="card-grid">
                <a href="https://github.com/APC-SoCIT/APC_2023_2024_3rd_Term_SHS_Bootcamp_BuraIto" target="_blank" class="project-card-link">
                    <div class="card">
                        <div class="icon">🚀</div>
                        <h3>RamBus</h3>
                        <p>A shuttle service platform that allows students and staff to reserve seats in advance and monitor the shuttle’s location in real-time</p>
                    </div>
                </a>

                <a href="https://edulab05.outsystemsenterprise.com/PreviewInDevices/?IsMobilePreview=True&DeviceName=Smartphone&URL=/SimpleOCR_Sample_Mobile/HomeScreen?_ts=639035308457416017" target="_blank" class="project-card-link">
                    <div class="card">
                        <div class="icon">📱</div>
                        <h3>VisiTrack</h3>
                        <p>A mobile-based system developed in OutSystems to streamline the recording, monitoring, and reporting of visitor activities within Asia Pacific College.</p>
                    </div>
                </a>
            </div>
        </div>
    </section>

    <section id="hobbies" class="content-section light-bg">
        <div class="container">
            <h2 class="section-title">My <span>Hobbies</span></h2>
            
            <div class="carousel-container">
                <div class="carousel-track" id="carouselTrack">
                    <div class="card hobby-card" onclick="openModal('.components/images/Gaming.jpg')">
                        <div class="icon">🎮</div>
                        <h3>Gaming</h3>
                        <p>I mostly play a lot of variety of online games with my friends but I enjoy the casual single player games.</p>
                    </div>
                    <div class="card hobby-card" onclick="openModal('.components/images/SimRacing.jpg')">
                        <div class="icon">🏁</div>
                        <h3>Sim-Racing</h3>
                        <p>As an F1 fan, I enjoy the challenge of high-speed competition and experiencing it in a virtual environment.</p>
                    </div>
                    <div class="card hobby-card" onclick="openModal('.components/images/Photography.jpg')">
                        <div class="icon">📸</div>
                        <h3>Photography</h3>
                        <p>Capturing urban landscapes and street life around me.</p>
                    </div>
                    <div class="card hobby-card" onclick="openModal('.components/images/Sports.jpg')">
                        <div class="icon">🎾</div>
                        <h3>Sports</h3>
                        <p>Staying active and practicing teamwork through different sports but recently Pickleball.</p>
                    </div>
                    <div class="card hobby-card" onclick="openModal('.components/images/Gym.jpg')">
                        <div class="icon">💪</div>
                        <h3>Gym</h3>
                        <p>I spend my time at the gym focusing on weightlifting and running to stay sharp and energized.</p>
                    </div>
                    <div class="card hobby-card" onclick="openModal('.components/images/Exploring Food.jpg')">
                        <div class="icon">🍔</div>
                        <h3>Exploring Food</h3>
                        <p>I love exploring diverse cuisines, discovering hidden local gems, and experiencing different cultures through their flavors.</p>
                    </div>
                    <div class="card hobby-card" onclick="openModal('.components/images/travelling.jpg')">
                        <div class="icon">📍</div>
                        <h3>Travelling</h3>
                        <p>I have a passion for exploring new destinations, seeking out unique landscapes and cultural experiences.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div id="imageModal" class="modal" onclick="closeModal()">
        <span class="close">&times;</span>
        <img class="modal-content" id="modalImg">
    </div>

    <section id="contact" class="content-section dark-bg">
        <div class="container text-center">
            <h2 class="section-title">Get In <span>Touch</span></h2>
            <p>Have a project in mind or just want to say hi?</p>
            <div class="card-grid">
                <a href="https://www.linkedin.com/in/justin-tumaliwan/" target="_blank" class="project-card-link">
                    <div class="card">
                        <div class="icon"><i class="fa-brands fa-linkedin"></i></div>
                        <h3>LinkedIn</h3>
                        <p>Let's Connect through LinkedIn!</p>
                    </div>
                </a>

                <a href="https://www.facebook.com/tumsjus0724/" target="_blank" class="project-card-link">
                    <div class="card">
                        <div class="icon"><i class="fa-brands fa-facebook"></i></div>
                        <h3>Facebook</h3>
                        <p>Let's Connect through Facebook!</p>
                    </div>
                </a>
            </div>
            <div class="contact-details">
                <p>📍 Parañaque, Philippines</p>
                <p>📧 tumaliwan.jus0724@gmail.com</p>
            </div>
        </div>
    </section>

</body>
</template>

    <script src=".components/js/script.js"></script>

<style src="./components/css/style.css"> </style>