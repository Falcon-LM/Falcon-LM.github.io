# Falcon LM Blog
This repository is a **private** fork of https://github.com/falcon-lm/falcon-lm.github.io

It is used to write blogposts about AIRC (model releases for example).

## Blog publishing chronology
**NEVER write a blog PR directly on the public repo** https://github.com/falcon-lm/falcon-lm.github.io

### Setup
You need to do this only the very first  time
```bash
git remote add public  git@github.com:falcon-lm/falcon-lm.github.io.git
```

### Writing a new blogpost
```bash
git checkout main
# in case origin and public main not synced
git pull public main
gut push origin main
# create new blog
git checkout -b my-new-blog
# create your blog, example: content/blog/falcon-3/index.md
# to render the website locally, run this cmd: hugo server -D
git push origin my-new-blog
# create a PR in origin for review
# once reviewed and blogpost ready to go public
git push public my-new-blog
# PR and merge in public repo
```
