# Sky Travel

[![backend-commit-stage](https://github.com/valentinajemuovic/test-app-255a5205-d768fe28e72ea658-backend/actions/workflows/backend-commit-stage.yml/badge.svg?event=push)](https://github.com/valentinajemuovic/test-app-255a5205-d768fe28e72ea658-backend/actions/workflows/backend-commit-stage.yml)
[![frontend-commit-stage](https://github.com/valentinajemuovic/test-app-255a5205-d768fe28e72ea658-frontend/actions/workflows/frontend-commit-stage.yml/badge.svg?event=push)](https://github.com/valentinajemuovic/test-app-255a5205-d768fe28e72ea658-frontend/actions/workflows/frontend-commit-stage.yml)
[![acceptance-stage-docker-compose](https://github.com/valentinajemuovic/test-app-255a5205-d768fe28e72ea658/actions/workflows/acceptance-stage-docker-compose.yml/badge.svg?event=schedule)](https://github.com/valentinajemuovic/test-app-255a5205-d768fe28e72ea658/actions/workflows/acceptance-stage-docker-compose.yml)
[![acceptance-stage-docker-compose-legacy](https://github.com/valentinajemuovic/test-app-255a5205-d768fe28e72ea658/actions/workflows/acceptance-stage-docker-compose-legacy.yml/badge.svg?event=schedule)](https://github.com/valentinajemuovic/test-app-255a5205-d768fe28e72ea658/actions/workflows/acceptance-stage-docker-compose-legacy.yml)

## Repositories

- [test-app-255a5205-d768fe28e72ea658-backend](https://github.com/valentinajemuovic/test-app-255a5205-d768fe28e72ea658-backend) — Backend (java)
- [test-app-255a5205-d768fe28e72ea658-frontend](https://github.com/valentinajemuovic/test-app-255a5205-d768fe28e72ea658-frontend) — Frontend (typescript)
## Project Info

- **Owner:** valentinajemuovic
- **System:** Sky Travel
- **Architecture:** multitier
- **Repo strategy:** multirepo
- **Backend language:** java
- **Frontend language:** typescript
- **Test language:** typescript

## Pipeline

- **Works out of the box:** the commit stage and the Docker Compose acceptance gates (`acceptance-stage-docker-compose.yml` and `acceptance-stage-docker-compose-legacy.yml`). The gates run hourly on the GitHub runner, against the commit-stage images.
- **Needs GCP set up first:** the cloud acceptance stage (`acceptance-stage.yml`, run manually; it creates the release candidate), QA (`qa-stage.yml`) and production (`prod-stage.yml`), which deploy to Google Cloud Run. See [Cloud setup](#cloud-setup). QA and production can deploy with Docker Compose instead: uncomment the Docker Compose block in `.github/workflows/_qa-stage.yml` and `_prod-stage.yml`.

### Cloud setup

Follow the [cloud setup guide](https://github.com/optivem/gh-optivem/blob/main/docs/cloud-setup.md) to take this repo to a green cloud acceptance run, QA and production on your own Google Cloud project and Neon account, using `./setup-gcp.sh` (and `./teardown-gcp.sh` to remove it all again). Until then, the cloud stages fail at their first GCP step.

## Documentation

- [Architecture](docs/architecture.md)
- [Use Cases](docs/use-cases.md)
- [Use Case Narrative](docs/use-case-narrative.md)
- [Project Registration](docs/project-registration.md)


## License

MIT License

## Contributors

- [valentinajemuovic](https://github.com/valentinajemuovic)
