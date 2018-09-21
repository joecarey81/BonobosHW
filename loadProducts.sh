#!/usr/bin/env bash
if [ "$MYSQL_PASSWORD" != "" ]
then
  mysql -u$MYSQL_USER -p$MYSQL_PASSWORD < ./loadProducts.sql
else
  mysql -u$MYSQL_USER < ./loadProducts.sql
fi
