#!/usr/bin/env bash
MYSQL_PASSWORD=""
MYSQL_USER="root"

DBNAME="bonobos"

source $PWD/api/.env

cat $PWD/scripts/sql/createDatabase.sql \
    $PWD/scripts/sql/createProductTable.sql \
    $PWD/scripts/sql/createInventoryTable.sql \
    | \
    if [ "$MYSQL_PASSWORD" != "" ];
    then
      mysql -u$MYSQL_USER -p$MYSQL_PASSWORD;
    else
      mysql -u$MYSQL_USER;
    fi

# To remove spaces after commas separating FIELDS
# Original file contained spaces which LOAD DATA didn't like
# RFC 4180
sed -i '' 's/", "/","/g' $PWD/scripts/data/products.csv
sed -i '' 's/, /,/g' $PWD/scripts/data/inventory.csv

if [ "$MYSQL_PASSWORD" != "" ]
then
  mysql --local-infile --show-warnings -u$MYSQL_USER -p$MYSQL_PASSWORD bonobos < $PWD/scripts/sql/loadProducts.sql
  mysql --local-infile -u$MYSQL_USER -p$MYSQL_PASSWORD bonobos < $PWD/scripts/sql/loadInventory.sql
else
  mysql --local-infile --show-warnings -u$MYSQL_USER bonobos < $PWD/scripts/sql/loadProducts.sql
  mysql --local-infile --show-warnings -u$MYSQL_USER bonobos < $PWD/scripts/sql/loadInventory.sql
fi
