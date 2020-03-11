#! /bin/bash

CONTENT="{\"state\": \"success\", \"description\": \"description\", \"context\": \"context\"}"

curl -X POST -H '${{ parameters.GITHUB_AUTH }}' -d $CONTENT  "https://api.github.com/repos/victor-gallet/pipelines-java/statuses/${{ parameters.GIT_COMMIT }}"