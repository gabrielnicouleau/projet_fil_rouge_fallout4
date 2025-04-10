<?php
class ModelUser{
    private ?int $id;
    private ?string $pseudo;
    private ?string $email;
    private ?string $password;
    private ?int $id_roles;
    private ?PDO $bdd;

    //Constructeur
    public function __construct(){
        $this->bdd = connect();
        $this->id_roles = 2; //Utilisateur par défaut
    }
    //Getter et Setter
    public function getId(): ?int {
        return $this->id;
    }
    public function setId(?int $id): self {
        $this->id = $id;
        return $this;
    }
    public function getPseudo(): ?string {
        return $this->pseudo;
    }
    public function setPseudo(?string $pseudo): self {
        $this->pseudo = $pseudo;
        return $this;
    }
    public function getEmail(): ?string {
        return $this->email;
    }
    public function setEmail(?string $email): self {
        $this->email = $email;
        return $this;
    }
    public function getPassword(): ?string {
        return $this->password;
    }
    public function setPassword(?string $password): self {
        $this->password = $password;
        return $this;
    }
    public function getIdRoles(): ?int {
        return $this->id_roles;
    }
    
    public function setIdRoles(?int $id_roles): self {
        $this->id_roles = $id_roles;
        return $this;
    }
    public function getBdd(): ?PDO {
        return $this->bdd;
    }
    public function setBdd(?PDO $bdd): self {
        $this->bdd = $bdd;
        return $this;
    }
}
?>