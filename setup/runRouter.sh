#!/bin/bash

function func1() {
    sudo strfry router /etc/strfry-router.config
}

func1 &

wait
