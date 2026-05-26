# Makefile
build:
	podman build -t yourbot .

run:
	podman run yourbot
