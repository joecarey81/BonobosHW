#!/usr/bin/env bash

./scripts/setupDatabase.sh
npm install --prefix ./api
npm install --prefix ./react-app
npm start --prefix ./api &
npm start --prefix ./react-app &
