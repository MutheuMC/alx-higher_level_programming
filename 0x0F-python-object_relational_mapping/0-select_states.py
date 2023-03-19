#!/usr/bin/python3

"""MySQLdb client to select all states"""
import MySQLdb
import sys

if __name__ = "main":
    connect_options = {
            "user": sys.argv[1],
            "password": sys.argv[2],
            "database": sys.argv[3],
            "host" : "localhost",
            "port" : 3306


            }
conn = MySQLdb.connect(**connect_options)
cur = conn.cursor()
cur.execute("SELECT * FROM states ORDER BY id ASC"
results = cur.fetchall()

for row in results:
    print(row)

cur.close()
conn.close()

