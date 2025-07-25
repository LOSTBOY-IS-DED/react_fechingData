If you ever fell into the same issue where you have already pushed the node modules to the remote server and then you are not able to remove it ...

step 1 : delete the node modules from local

step 2 : delete the pakcage-lock.json file

step 3 : create a .gitignore file and add the node_modules folder to it

step 4 : run this command 
```
git rm -r --cached node_modules
```

step 5 : git add . 

step 6 : git commit -m "removed node modules"

step 7 : git push -u origin main 


// end of steps 