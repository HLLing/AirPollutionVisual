#!/bin/bash
echo "Type mysql database username, followed by [ENTER]:"
read username
echo "Type mysql database password, followed by [ENTER]:"
read password
mysql -u $username -p$password -e "CREATE DATABASE IF NOT EXISTS airpollution;USE airpollution;SOURCE mapdata.sql;"
