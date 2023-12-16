docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kursa-java/postgre-sql ../../SQL

docker build --no-cache -f Dockerfile -t kursa-java/app ../../..
