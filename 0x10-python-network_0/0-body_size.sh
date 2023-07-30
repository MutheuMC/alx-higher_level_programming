#!/bin/bash
# Takes in a URL, sends request and displays the size of the response body
curl -s $1 -w %{size_download}"\n" -o /dev/null
