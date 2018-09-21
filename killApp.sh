#!/usr/bin/env bash
lsof -n -i4TCP:3000 | grep LISTEN | awk '{ print $2 }' | xargs kill
lsof -n -i4TCP:10010 | grep LISTEN | awk '{ print $2 }' | xargs kill
