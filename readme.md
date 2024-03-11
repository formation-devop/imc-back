# API IMC

- Générer le projet

  ```
   npm init -y   
  ```

- installer les dépendances

  ```
   npm install express   
   npm install mysql
  ```

- Créer une table

```
  DROP TABLE data;
  CREATE TABLE data (id INT AUTO_INCREMENT PRIMARY KEY, poids double, taille double)
```

- Dans src/server.js ecrire une API qui calcule l'IMC

- Dans src/server.js ecrire une API qui liste les IMC
