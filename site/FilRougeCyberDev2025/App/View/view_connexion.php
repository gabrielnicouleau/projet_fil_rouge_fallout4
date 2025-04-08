<?php

ini_set('display_errors', 0);
ini_set('log_errors', 1);
ini_set('error_log', 'C:\chemin\vers\ton\fichier\de\log\php_error.log');
session_start();

class ViewConnexion{
    private ?string $message;

    public function __construct(){
        $this->message = "";
    }

    public function getMessage(): string|null{
        return $this->message;
    }
    public function setMessage(?string $newmessage): ViewConnexion{
        $this->message = $newmessage;
        return $this;
    }

    public function render(): string{

        ob_start();
?>
                <main>
                    <form action="" id="connexion" method="post" aria-labelledby="connexion-titre">
                        <h3 id="connexion-titre">Connexion</h3><br>
                        <input type="text" name="email" required placeholder="email" aria-label="Votre adresse email"><br>
                        <input type="password" name="password" required placeholder="mot de passe" aria-label="Votre mot de passe"><br>
                        <button type="submit" name ="submitConnexion" class="interaction" aria-label="Se connecter">Connexion</button>
                    </form>
                    <p id="message" role="alert" aria-live="assertive"><?php echo $this->getMessage() ?></p>
                    <form action="" id="formulaire" method="post" aria-labelledby="inscription-titre">
                        <h3 id="inscription-titre">Inscription</h3><br>
                        <input type="text" name="pseudoInscription" placeholder="pseudo" aria-label="Choisissez un pseudo"><br>
                        <input type="email" name="emailInscription" placeholder="email" aria-label="Votre adresse email"><br>
                        <input type="password" name="passwordInscription" placeholder="mot de passe" aria-label="Choisissez un mot de passe"><br>
                        <input type="password" name="passwordVerify" placeholder="mot de passe" aria-label="Confirmez votre mot de passe"><br>
                        <button type="submit" name ="submitInscription" class="interaction" aria-label="Créer votre compte">Créer un compte</button>
                    </form>
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