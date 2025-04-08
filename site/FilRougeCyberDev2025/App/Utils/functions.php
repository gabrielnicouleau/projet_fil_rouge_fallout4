<?php
//Fonctions utiles

//Fonction de nettoyage des données
function sanitize($data){
    return htmlentities(strip_tags(stripcslashes(trim($data))));
};


//fonction de création de l'instance de connexion à la BDD
function connect(){
    try {
        // Inclure le fichier de configuration
        require_once __DIR__ . '/../../env.local.php';

        $dsn = "mysql:host=" . DB_HOST . ";dbname=" . DB_NAME;
        $options = array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION);
        
        $bdd = new PDO($dsn, DB_USER, DB_PASSWORD, $options);
        return $bdd;
    } catch (PDOException $e) {
        // Log l'erreur mais ne l'expose pas à l'utilisateur
        error_log("Erreur de connexion à la base de données: " . $e->getMessage());
        throw new Exception("Impossible de se connecter à la base de données");
    }
};

// // Fonction améliorée de validation d'email
// function validateEmail($email) {
//     return filter_var($email, FILTER_VALIDATE_EMAIL) !== false;
// }

// // Fonction pour vérifier la sécurité d'un mot de passe
// function isPasswordSecure($password) {
//     // Minimum 8 caractères, au moins une lettre et un chiffre
//     $length = strlen($password) >= 8;
//     $hasLetter = preg_match('/[a-zA-Z]/', $password);
//     $hasNumber = preg_match('/\d/', $password);
    
//     return $length && $hasLetter && $hasNumber;
// }

?>