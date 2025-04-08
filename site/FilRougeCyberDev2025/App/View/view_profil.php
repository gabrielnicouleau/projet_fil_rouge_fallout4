<?php 

ini_set('display_errors', 0);
ini_set('log_errors', 1);
ini_set('error_log', 'C:\chemin\vers\ton\fichier\de\log\php_error.log');
session_start();

session_start();
class ViewProfil{
    private ?string $pseudo;
    private ?string $email;
    private ?string $mdp;

    public function __construct(){
        $this->pseudo = $_SESSION['pseudo'];
        $this->email = $_SESSION['email'];
    }
    public function getPseudo(): ?string{
        return $this->pseudo;
    }
    public function getEmail(): ?string{
        return $this->email;
    }
    public function getMdp(): ?string{
        return $this->mdp;
    }
    public function setPseudo(?string $pseudo): ViewProfil{
        $this->pseudo = $pseudo;
        return $this;
    }
    public function setEmail(?string $email): ViewProfil{
        $this->email = $email;
        return $this;
    }
    public function setMdp(?string $mdp): ViewProfil{
        $this->mdp = $mdp;
        return $this;
    }

    public function render(){
        ob_start();
?>
        <main>
            <section id="profil" aria-labelledby="profil-title">
                <h3 id="profil-title">Profil:</h3>
            <div>
                <h4 id="pseudoProfil">Pseudo: <?php echo $this->getPseudo()?></h4>
            </div>
            <div>
                <h4 id="emailProfil">Email: <?php echo $this->getEmail()?></h4>
            </div>
            </section>
        </main>
        <footer>
            <nav aria-label="Liens utiles">
                <a href="#" aria-label="Mentions légales">Mentions légales</a>
                <a href="#" aria-label="Informations copyright">copyrights</a>
                <a href="#" aria-label="Autres liens utiles">liens utiles</a>
            </nav>
        </footer>

        <div id="app"></div>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
            <script type="module" src="./App/src/script/script.js"></script>
    </body>

</html>
<?php
        return ob_get_clean();
    }
}
?>

