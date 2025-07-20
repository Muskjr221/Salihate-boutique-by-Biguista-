index.html

<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Salihate Boutique by Biguista</title>
    <link rel="stylesheet" href="style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <header>
        <div class="logo">
            <img src="images/logo.png" alt="Salihate Boutique">
            <div class="logo-text">
                <h1>Salihate</h1>
                <p>Boutique by Biguista</p>
            </div>
        </div>
        <div class="cart-icon">
            <a href="cart.html"><i class="fas fa-shopping-cart"></i> <span id="cart-count">0</span></a>
        </div>
    </header>

    <nav>
        <a href="index.html">Accueil</a>
        <a href="admin.html">Admin</a>
    </nav>

    <main>
        <div id="products-list" class="products-grid">
            <!-- Produits chargés en JS -->
        </div>
    </main>

    <footer>
        <p>© 2024 Salihate Boutique by Biguista</p>
        <div class="maronetech-logo">
            <img src="images/maronetech.png" alt="Maronetech">
        </div>
    </footer>

    <script src="script.js"></script>
</body>
</html>