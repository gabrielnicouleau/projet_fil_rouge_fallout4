<?php

class ManagerUser extends ModelUser{
    public function readUsers():array | string{
        try{
            $req = $this->getBdd()->prepare('SELECT u.id, u.pseudo, u.email, u.mdp, r.nom_role 
                                           FROM users u 
                                           JOIN roles r ON u.id_roles = r.id_roles');
            $req->execute();
            $data = $req->fetchAll(PDO::FETCH_ASSOC);
            return $data;
        } catch(EXCEPTION $error){
            return $error->getMessage();
        }
    }

    function readUserByMail():array |string{
        try{
            $req = $this->getBdd()->prepare('SELECT u.id, u.pseudo, u.mdp, u.email, u.id_roles, r.nom_role 
                                           FROM users u 
                                           JOIN roles r ON u.id_roles = r.id_roles
                                           WHERE u.email = ? LIMIT 1');
            $email = $this->getEmail();
            $req->bindParam(1,$email,PDO::PARAM_STR);
            $req->execute();
            $data = $req->fetchAll();
            return $data;
        }catch(EXCEPTION $error){
            return $error->getMessage();
        }
    }

    function createUser():string{
        try{
            $req = $this->getBdd()->prepare('INSERT INTO users (pseudo, email, mdp, id_roles) VALUES (?,?,?,?)');
            $pseudo = $this->getPseudo();
            $email = $this->getEmail();
            $password = $this->getPassword();
            $id_roles = $this->getIdRoles();
            $req->bindParam(1,$pseudo,PDO::PARAM_STR);
            $req->bindParam(2,$email,PDO::PARAM_STR);
            $req->bindParam(3,$password,PDO::PARAM_STR);
            $req->bindParam(4,$id_roles,PDO::PARAM_INT);
            $req->execute();

            return "L'utilisateur $pseudo a été enregistré avec succès !";
        }catch(EXCEPTION $error){
            return $error->getMessage();
        }
    }
}

