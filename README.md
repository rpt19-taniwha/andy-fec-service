# Etsy Mock: "You may also like" Service

> Renders "You may also like" section of the Etsy.com site

## Related Projects

- https://github.com/rpt19-taniwha/andy-fec-proxy
- https://github.com/rpt19-taniwha/Dustins-FEC-Service
- https://github.com/rpt19-taniwha/mervin-fec-service
- https://github.com/rpt19-taniwha/iris-fec-service
- https://github.com/rpt19-taniwha/andy-fec-service

## Table of Contents

1. [Usage](#Usage)
2. [Installation/Setup](#Installation/Setup)
3. [Start](#Start)
4. [Test](#Test)

## Usage

> Service URL is "http://{HOSTNAME}:8081/listing/{productId}". This will render service components.
>
> API URL is "http://{HOSTNAME}:8081/products/{productId}". This will send JSON data for service components.

## Installation/Setup

> Create mongoDB Atlas account with "read" and "read/write" db urls.
> Add read/write URL to "/server/database-mongo/config/database.config.js"
> Add read URL to "/server/server.js"

## Start

- npm install
- npm run seed
- npm run start

## Test

-npm run test
