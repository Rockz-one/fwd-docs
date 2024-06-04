# FWD wesbite
Hompage and docs for fwd

## How to use it
- The docs content are in [docs](docs) written in upgraded markdown, [sidebar.js](sidebar.js) must have the same id's
- The main page is in a psudo-react [docusaurus.config.js](docusaurus.config.js)
<<<<<<< HEAD

## build & deploy process
```bash
git fetch origin
npm install
npm run build
git add . && commit -m "updates" && git push 
git checkout origin/build
git restore --source main build
git add . && commit -m "updates"
git push origin HEAD:build
git checkout main
```
=======
>>>>>>> 99bdbc0f62a59301a161402b112de7dccf62b983
