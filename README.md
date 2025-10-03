# CI/CD Pipeline Example

[![CI/CD](https://github.com/your-username/ci-cd-pipeline/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/your-username/ci-cd-pipeline/actions/workflows/ci-cd.yml)

Ce projet illustre l'intégration d'ESLint, Jest et un pipeline CI/CD avec GitHub Actions.

## Scripts disponibles

- `npm run lint` : exécute ESLint.
- `npm run lint:fix` : corrige automatiquement les problèmes ESLint.
- `npm test` : lance les tests unitaires avec Jest.

## Structure

- `index.js` : contient la fonction `add`.
- `index.test.js` : test unitaire pour la fonction `add`.
- `.eslintrc.json` : configuration ESLint.
- `.github/workflows/ci-cd.yml` : pipeline CI/CD GitHub Actions.

## Utilisation

1. Installe les dépendances : `npm install`
2. Lance l'analyse statique : `npm run lint`
3. Exécute les tests : `npm test`
