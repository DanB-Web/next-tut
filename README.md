# Azure CLI Commanbds

## Azure login (open new browser)

`az login`

## ACR Login

`az acr login --name nexttestregistry`

You can find a temp username and password unser Settings/Access keys

## Build image with Azure architecture

`docker buildx build . --file ./docker/app/Dockerfile --tag nexttestregistry.azurecr.io/nextapp --platform=linux/amd64 --no-cache`

## Push to ACR

`docker push nexttestregistry.azurecr.io/nextapp:latest `
