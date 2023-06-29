#!/bin/bash
# Takes a URL, sends a GET request and display the body if status code is 200
curl -sL "$1"
