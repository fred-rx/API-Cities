# API Cities

L'API Cities permet d'accéder aux informations sur les villes de la France et offre des fonctionnalités de gestion des utilisateurs avec différents rôles (Admin, Staff, Invité). Cette API est conçue pour être accessible sans clé API, mais nécessite une inscription gratuite pour accéder à ses fonctionnalités. De plus, une documentation complète est fournie et un serveur Discord est disponible pour toute question.

## Fonctionnalités Principales

**Liste des villes de France**
  - Récupère et renvoie des informations détaillées sur les villes de France.
  - Permet de récupérer des informations spécifiques sur une ville donnée.

**Gestion des Utilisateurs**
  - **Inscription et Authentification**: Les utilisateurs peuvent s'inscrire et s'authentifier pour accéder à l'API.
  - **Rôles d'utilisateurs**:
    - **Admin**: Accès complet à toutes les fonctionnalités de l'API, y compris la gestion des utilisateurs et des données.
    - **Staff**: Accès limité aux fonctionnalités administratives, mais peut gérer certaines données.
    - **Invité**: Accès en lecture seule aux données géographiques.
  - **Authentification par Tokens**: Utilisation de JWT (JSON Web Tokens) pour sécuriser les endpoints.
  - **Contrôle des Accès**: Différents niveaux d'accès en fonction du rôle de l'utilisateur.

## Endpoints de l'API

### Endpoints Authentifiés

**Gestion des Utilisateurs**
  - `POST /users/register`: Inscription d'un nouvel utilisateur.
  - `POST /users/login`: Authentification d'un utilisateur et obtention d'un token JWT.
  - `GET /users/profile`: Récupère les informations du profil de l'utilisateur connecté.
  - `PUT /users/profile`: Met à jour les informations du profil de l'utilisateur connecté.
  - `DELETE /users/profile`: Supprime le profil de l'utilisateur connecté.
  - `GET /users/logout`: Déconnexion de l'utilisateur.

**Données Géographiques**
  - `GET /countries`: Liste tous les pays enregistrés.
  - `GET /countries/{id}`: Détails d'un pays spécifique par son identifiant.
  - `GET /regions`: Liste toutes les régions.
  - `GET /countries/{id}/regions`: Liste toutes les régions d'un pays spécifique par son identifiant.
  - `GET /regions/{id}`: Détails d'une région spécifique par son identifiant.
  - `GET /departments`: Liste tous les départements.
  - `GET /regions/{id}/departments`: Liste tous les départements d'une région spécifique par son identifiant.
  - `GET /departments/{id}`: Détails d'un département spécifique par son identifiant.
  - `GET /municipalities`: Liste toutes les villes enregistrées.
  - `GET /departments/{id}/municipalities`: Liste toutes les villes d'un département spécifique par son identifiant.
  - `GET /municipalities/{id}`: Détails d'une ville spécifique par son identifiant.

### Endpoints Staff

**Gestion des Pays**
  - `POST /countries`: Ajoute un nouveau pays.
  - `PUT /countries/{id}`: Met à jour un pays spécifique par son identifiant.
  - `DELETE /countries/{id}`: Supprime un pays spécifique par son identifiant.

**Gestion des Régions**
  - `POST /regions`: Ajoute une nouvelle région.
  - `PUT /regions/{id}`: Met à jour une région spécifique par son identifiant.
  - `DELETE /regions/{id}`: Supprime une région spécifique par son identifiant.

**Gestion des Départements**
  - `POST /departments`: Ajoute un nouveau département.
  - `PUT /departments/{id}`: Met à jour un département spécifique par son identifiant.
  - `DELETE /departments/{id}`: Supprime un département spécifique par son identifiant.

**Gestion des Villes**
  - `POST /municipalities`: Ajoute une nouvelle ville.
  - `PUT /municipalities/{id}`: Met à jour une ville spécifique par son identifiant.
  - `DELETE /municipalities/{id}`: Supprime une ville spécifique par son identifiant.

### Endpoints Admin

**Gestion des Utilisateurs**
  - `GET /users`: Liste tous les utilisateurs sans les données sensibles.
  - `PUT /users/{id}`: Met à jour les informations d'un utilisateur à l'exception des données sensibles.
  - `DELETE /users/{id}`: Supprime un utilisateur.

## Gestion des Rôles et Permissions

**Admin**
  - Accès complet à tous les endpoints.
  - Peut gérer les utilisateurs (créer, lire, mettre à jour, supprimer).
  - Ne peut pas accéder aux données sensibles d'un utilisateur qui n'est pas lui.
  - Peut gérer les données géographiques.

**Staff**
  - Accès en lecture et en écriture aux données géographiques.
  - Ne peut pas gérer les utilisateurs.

**Invité**
  - Accès en lecture seule aux données géographiques.
  - Ne peut ni écrire ni gérer les utilisateurs.

## Flux d'Inscription et d'Authentification

**Inscription**
  - L'utilisateur envoie une requête `POST /users/register` avec les informations nécessaires (nom, email, mot de passe).
  - L'utilisateur est créé avec le rôle par défaut d'Invité.

**Authentification**
  - L'utilisateur envoie une requête `POST /users/login` avec ses identifiants.
  - En cas de succès, un token JWT est retourné et doit être utilisé pour les requêtes suivantes nécessitant une authentification.

## Accès aux Données

Les requêtes aux endpoints sécurisés doivent inclure le token JWT dans les en-têtes d'autorisation `Authorization: Bearer <token>`.

## Documentation et Support

Une documentation exhaustive est disponible, couvrant tous les aspects de l'API, y compris les endpoints, les méthodes, les paramètres, les exemples de requêtes et de réponses.

La documentation de l'API Cities inclut :
- Une description de chaque endpoint avec les méthodes HTTP supportées.
- Les paramètres requis et optionnels pour chaque endpoint.
- Des exemples de requêtes et de réponses.
- Les codes d'état HTTP possibles et leur signification.
- Des guides pour l'authentification et l'utilisation des tokens JWT.
- Des informations sur la gestion des rôles et des permissions.

Un serveur Discord est disponible pour :
- Poser des questions techniques.
- Obtenir de l'aide en cas de problèmes.
- Discuter des fonctionnalités et des améliorations possibles.
- Recevoir des annonces et des mises à jour sur l'API.

## Cas d'Utilisation

- Un utilisateur inscrit en tant qu'Invité peut accéder à des informations détaillées sur les villes.
- Un utilisateur inscrit en tant que Staff peut accéder et mettre à jour des informations spécifiques sur les villes.
- Un utilisateur inscrit en tant qu'Admin peut gérer à la fois les données géographiques et les utilisateurs de l'API.

## Conclusion

L'API Cities est conçue pour fournir un accès facile et sécurisé aux informations géographiques des villes françaises, tout en offrant une gestion des utilisateurs basée sur des rôles pour garantir un contrôle d'accès approprié. La documentation complète et le serveur Discord assurent que les utilisateurs disposent des ressources nécessaires pour utiliser efficacement l'API et obtenir de l'aide en cas de besoin.
