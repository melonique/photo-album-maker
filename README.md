# photo-album-maker



link to the [demo](https://photo-album-maker.vercel.app/)


Ce projet vise à développer une application de documentation d'albums photos. L'utilisateur scanne une photo, enregistre un message vocal la décrivant et l'application génère des métadonnées comme la date, les personnes présentes, le lieu et un résumé. Ces informations sont sauvegardées dans une base de données avec la photo et l'audio. Un papier collant avec un QR code, la date, le lieu, les personnes et le résumé est alors généré pour être collé à côté de la photo dans l'album. Lorsque le QR code est scanné, l'application affiche la photo scannée avec les informations détaillées et permet de jouer l'audio associé.

## todo
- [ ] Interface Graphique
  - [ ] CRUD albums et photos
- [ ] Scan de Photo - Numérisation d'images physiques.
  - [ ] Input File upload
  - [ ] ... something better
- [ ] Enregistrement Audio - Fonction pour enregistrer des messages vocaux.
  - [ ] Record audio
  - [ ] Audio to text
- [ ] Génération de Métadonnées - Création automatique de date, personnes, lieu, description, et résumé.
  - [ ] Get data from openAI
  - [ ] Fill form to be validated or modified
 - [ ] Base de Données - Stockage des photos, audios et métadonnées.
- [ ] Génération de QR Code vers la page de la photo.
- [ ] Impression de Papier Collant - Impression d'étiquettes avec QR code et résumé.
- [ ] Affichage de l'Information - Visualisation des photos avec métadonnées et lecture de l'audio.

