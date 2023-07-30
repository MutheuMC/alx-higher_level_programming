#!/bin/bash
# Takes a URL and sends a DELETE request to it and displays the body
curl -s -X DELETE "$1"
