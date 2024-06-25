Ceci est la meilleure application de foot du monde mais j'ai accès que à la ligue écossaise et danoise.

# Installation

Il faut faire 
```npm install```
Ensuite il faut copier coller le fichier .env.example et le nommer .env
Ensuite remplacer la partie à remplacer par la clé d'api Sportmonks, prenez la votre ou sinon je vous donne la mienne.
Faire ensuite 
```npx react-native start```
Appuyer ensuite sur a pour lancer l'application sur android

# Fonctionnalités
Ballistic est une appli permettant de consulter les futurs matchs et résultats ainsi que des informations sur les équipes et joueurs des ligues de football écossaises et danoises.
La première page de l'application
L'application dispose d'une page d'accueil affichant les différents matchs se déroulant ce jour (elle est actuellement sur une date précise afin de donner un exemple car aucun match ne se déroule actuellement), et dispose de 2 surface clicables permettant d'accéder aux détails de chaque ligue.
Une fois que l'on clique afin d'accèder aux détails d'une ligue, on peut voir les standings correspondants. Toutes les équipes jouants dans cette ligue sont donc classées par leur nombre de points. On peut également cliquer dessus pour voir plus de détails.
Après avoir cliqué, l'utilisateur peut voir l'historique des matchs de l'équipe, ainsi que les différents joueurs et leurs postes respectifs.
Les matchs et joueurs sont clicables, permettant d'accéder à une page affichant les détails du match ou les détails d'un joueur comme son age, sa nationalité etc...

# Structure du projet
Tout le code se trouve dans le dossier src/
Voici les différentes utilités des sous dossiers :
assets : contient toutes les ressources statiques de l'application, ici seulement des images
components : contient tous les composants réutilisables de l'application, qui seront alors utilisés dans les écrans
models : contient toutes les classes et interfaces spécifiques à l'application
screens : contient tous les écrans de l'application
services : contient les services utilisables dans l'application, ici uniquement un service pour accéder à l'api
states : contient tous les states de l'application, stoquant les données à afficher, ils font généralement appel au service accédant à l'api.