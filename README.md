# sales-taxes-problem

The code consists in a series of unit tests that verify the correct output of each case. The input are the same provided by the test.

## How to run tests

These are the commands to run them on your local environment:

```sh
npm i
npm test
```

or if you prefer Docker:

```sh
docker-compose up -d
docker-compose exec app sh -c "npm i"
docker-compose exec app sh -c "npm test"
```
