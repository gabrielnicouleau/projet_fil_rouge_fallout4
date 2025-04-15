<?php
class ViewHeader{
    private ?string $nav;
    public function __construct(?string $nav){
        $this->nav = $nav;
    }
    public function getNav(): ?string{
        return $this->nav;
    }
    public function setNav(?string $nav): ViewHeader{ 
        $this->nav = $nav; 
        return $this;
    }
    public function render(): string{
        ob_start();
?>
<!doctype html>
<html lang="fr">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta name="description" content="Bienvenue sur le site Fallout4 trouve mon item. Votre compagnon de jeu afin de trouver les armes uniques des terres désolées." />
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="./App/src/style/style.css">
    <title>Fallout4 trouve mon item</title>
</head>

<body>

    <header>
    <div>
        <img src="./App/src/images/dark.webp" width="77px" height="40px" alt="Icône mode sombre">
        <img src="./App/src/images/logo.webp" id="logo" alt="Logo Fallout4 trouve mon item">
        <div class='nav-link' role="navigation" aria-label="Navigation utilisateur"><?php echo $this->getNav() ?></div>
    </div>
    <nav aria-label="fil d'Ariane">
        <a href="./index.php">Accueil ></a>
    </nav>
    </header>

<?php
        return ob_get_clean();
    }
}
?>