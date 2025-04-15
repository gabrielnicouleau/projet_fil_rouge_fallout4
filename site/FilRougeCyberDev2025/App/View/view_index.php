<?php 
session_start();
class ViewIndex{
    public function render(): string{

        ob_start();
?>
    <main>
        <nav id="navigation" aria-label="Barre de navigation">
            <a href="#" aria-label="Voir les catégories">catégories</a>
            <a href="#" aria-label="Voir vos favoris">favoris</a>
            <a href="#" aria-label="Nous contacter">contact</a>
        </nav>
        <section aria-labelledby="presentation-titre">
            <article id="presentation">
                <h1 id="presentation-titre">Bienvenue sur le site Fallout4 - trouve mon item</h1>
                <p>Ce site a pour vocation de vous aider tout au long de votre aventure dans les terres désolées 
                en vous permettant de localiser les armes et équipements uniques disponibles sur le jeu. 
                Connectez vous au site afin d’enregistrer vos objets préférés dans votre liste de favoris afin de 
                conserver votre to-do list à vos cotés lors de votre prochaine session de jeu.</p>
            </article>
            <article id="searching">
                <form role="search" aria-label="Rechercher un item">
                    <input class="form-control me-1" type="search" placeholder="Votre recherche" aria-label="Rechercher un item" required>
                    <button class="btn" type="submit" aria-label="Lancer la recherche">Rechercher</button>
                </form>
                <div id="filter-label">
                    <p>Filtres:</p>
                </div>
                <div id="filters" aria-labelledby="filter-label">
                    <div id="armes-menu" role="menu">
                        <button aria-expanded="false" aria-controls="armes-menu">Armes</button>
                        <div id="armes-menu" role="menu">
                            <a href="#" role="menuitem">armes de tir</a>
                            <a href="#" role="menuitem">armes de mêlée</a>
                        </div>
                    </div>
                    <div>
                        <button aria-expanded="false" aria-controls="equipements-menu">Equipements</button>
                        <div id="equipements-menu" role="menu">
                            <a href="#" role="menuitem">tenues</a>
                            <a href="#" role="menuitem">pièces d'armure</a>
                        </div>
                    </div>
                </div>
            </article>
        </section>
    </main>

    <footer>
        <nav aria-label="Liens utiles">
            <a href="#" aria-label="Mentions légales">Mentions légales</a>
            <a href="#" aria-label="Informations copyright">copyrights</a>
            <a href="#" aria-label="Autres liens utiles">liens utiles</a>
        </nav>
    </footer>
    
    <div id="app">
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <script type="module" src="./App/src/script/script.js"></script>
    </div>
</body>

</html>
<?php
        return ob_get_clean();
    }
}
?>