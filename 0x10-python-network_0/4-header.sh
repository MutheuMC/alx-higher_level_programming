#!/bin/bash
# Takes a URL, sends a GET request to it and displays the body of the response
curl -s -X GET -H X-HolbertonSchool-User-Id:98 "$1"
