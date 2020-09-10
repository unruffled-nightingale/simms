build-image:
	docker build -t simms .

run-image:
	docker run -p 3002:80 -d simms

push-image:
	docker tag simms unrufflednightingale/simms:latest
	docker push unrufflednightingale/simms:latest

