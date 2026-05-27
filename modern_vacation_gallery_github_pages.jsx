<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Travel Gallery</title>

  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Arial, sans-serif;
    }

    body {
      background: #0f0f0f;
      color: white;
    }

    header {
      padding: 30px;
      text-align: center;
      border-bottom: 1px solid #222;
      background: rgba(15, 15, 15, 0.95);
      position: sticky;
      top: 0;
      backdrop-filter: blur(10px);
    }

    header h1 {
      font-size: 40px;
      margin-bottom: 10px;
    }

    header p {
      color: #999;
    }

    .gallery {
      max-width: 1400px;
      margin: auto;
      padding: 40px 20px;
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 20px;
    }

    .card {
      overflow: hidden;
      border-radius: 25px;
      background: #1a1a1a;
      transition: 0.3s;
      border: 1px solid #222;
    }

    .card:hover {
      transform: translateY(-5px);
      border-color: #444;
    }

    .card img {
      width: 100%;
      height: 350px;
      object-fit: cover;
      display: block;
      transition: 0.5s;
    }

    .card:hover img {
      transform: scale(1.05);
    }

    .info {
      padding: 20px;
    }

    .info h2 {
      margin-bottom: 8px;
      font-size: 22px;
    }

    .info p {
      color: #aaa;
    }

    footer {
      text-align: center;
      padding: 30px;
      color: #777;
      border-top: 1px solid #222;
    }
  </style>
</head>
<body>

  <header>
    <h1>Travel Gallery</h1>
    <p>Meine Urlaubsfotos</p>
  </header>

  <section class="gallery">

    <div class="card">
      <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop" alt="Sonnenuntergang">
      <div class="info">
        <h2>Sonnenuntergang</h2>
        <p>Italien</p>
      </div>
    </div>

    <div class="card">
      <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop" alt="Berge">
      <div class="info">
        <h2>Berge</h2>
        <p>Österreich</p>
      </div>
    </div>

    <div class="card">
      <img src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1200&auto=format&fit=crop" alt="Tokyo">
      <div class="info">
        <h2>Stadtlichter</h2>
        <p>Tokyo</p>
      </div>
    </div>

    <div class="card">
      <img src="https://images.unsplash.com/photo-1493558103817-58b2924bce98?q=80&w=1200&auto=format&fit=crop" alt="Meer">
      <div class="info">
        <h2>Meerblick</h2>
        <p>Kroatien</p>
      </div>
    </div>

  </section>

  <footer>
    © 2026 Travel Gallery
  </footer>

</body>
</html>
