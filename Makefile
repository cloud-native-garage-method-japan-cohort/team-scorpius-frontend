git-add-demo:
	git add .

git-commit-demo:
	git commit -m "demo"

git-push-demo:
	git push origin main

demo: git-add-demo git-commit-demo git-push-demo

.PHONY: git-add-demo git-commit-demo git-push-demo demo