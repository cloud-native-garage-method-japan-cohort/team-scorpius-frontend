git-add-demo:
	git add .

# ターゲット: git-commit
# コミットメッセージを引数として渡す
git-commit-demo:
	git commit -m "demo"

# ターゲット: git-push
# リモートリポジトリにプッシュ
git-push-demo:
	git push origin main

# ターゲット: deploy
# add, commit, push をまとめて実行
demo: git-add-demo git-commit-demo git-push-demo

.PHONY: git-add-demo git-commit-demo git-push-demo demo