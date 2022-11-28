#!/bin/bash
for FILE in ./config/*; do
        if [ "$FILE" != "./config/config.$ANGULAR_ENVIRONMENT.json" ]; then
                rm $FILE;
        else
                mv $FILE ./config/config.json
        fi
done