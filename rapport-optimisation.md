# Rapport d'optimisation du projet ScrollyTelling
[Page Speed Insights - Rapport du 9 mai 2024, 14:42:03](https://pagespeed.web.dev/analysis/https-maik-tim-momo-com/u6y8nxvekq?form_factor=desktop)



## probleme 1
### Différez le chargement des images hors écran
Le probleme consiste au fait que les images ne sont pas masqué hors de l'écran, ce qui crée un délai avant l'intéractivité.

### Action concrete pour resoudre le probleme
Ajouter " loading="lazy" " à chaque balise d'images avant le "src".

### Résultat
J'ai ajouté lazy loading à chaque balise img dans le html pour qu'ils aparaissent seulement lorsque qu'ils aparaissent à l'écran. La performance a auguementé de 98 à 99.



## probleme 2
### Le document ne contient pas une description meta
Le probleme consiste au fait qu'il n'y a pas de description dans le head.

### Action concrete pour resoudre le probleme
Ajouter une description meta dans la balise "head".

### Résultat
J'ai ajouté une description dans le head du document html avant la balise meta du viewport, ce qui a aguementé le seo de 91 à 100 et la performance total de 99 à 100.



## probleme 3
### Éliminez les ressources qui bloquent le rendu
Le probleme consiste au fait qu'il a des feuiles css/js et des liens en trop, ce qui ralenti le chargement des feuilles de style, qui est éxécuté avant l'affichage du site à l'utilisateur.

### Action concrete pour resoudre le probleme
Seulement garder les feuilles css/js essentiel pour améliorer la performance.

### Résultat
J'ai enlevé les balise style des svg, puisqu'ils ont déja des classes dans le css, dans le html, ce qui a amélioré la performance.
