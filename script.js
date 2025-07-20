<!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <title>Admin - Salihate Boutique</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="admin-login">
        <h2>Connexion Admin</h2>
        <input type="password" placeholder="Mot de passe" id="admin-password">
        <button onclick="login()">Se connecter</button>
    </div>

    <script>
        function login() {
            if (document.getElementById("admin-password").value === "salihate123") {
                alert("Connecté !");
                // Rediriger vers l'interface admin complète
            } else {
                alert("Mot de passe incorrect !");
            }
        }
    </script>
</body>
</html>