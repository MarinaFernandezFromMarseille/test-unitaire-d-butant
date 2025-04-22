# Test Unitaire Débutant

Ce projet est une introduction aux tests unitaires en JavaScript utilisant Jest.

## Structure du Projet

```
![Structure](./test-unitaire-débutant/images/structure.png)

```

## Installation

1. Clonez le repository :
```bash
git clone https://github.com/MarinaFernandezFromMarseille/test-unitaire-d-butant.git
```

2. Installez les dépendances :
```bash
npm install
```

## Configuration

Le projet utilise Jest comme framework de test. La configuration est dans le `package.json` :

```json
{
  "scripts": {
    "test": "jest"
  },
  "devDependencies": {
    "jest": "^29.7.0"
  }
}
```

## Fonctionnalités

### Fonction Mathématique (`src/math.js`)

![Structure](./test-unitaire-débutant/images/Fonction.png)


### Tests Unitaires (`tests/math.test.js`)

![Structure](./test-unitaire-débutant/images/test1.png)


### Méthode locale

Pour lancer les tests localement :
```bash
npm test
```

Résultat:

![Structure](./test-unitaire-débutant/images/result-test1.png)



## Apprentissage

Ce projet sert d'introduction aux concepts de base des tests unitaires :
- Structure d'un projet avec tests
- Utilisation de Jest
- Écriture de tests simples
- Organisation du code en modules
- Utilisation de `describe` et `test`
- Assertions avec `expect`

## Auteur

MarinaFernandezFromMarseille

## Licence

ISC