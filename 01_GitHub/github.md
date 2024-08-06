At google git is not used, piper is used!

-Mercurial is another vcs.

-Github vcs software/tool and gives gui experience.

->git config --list

lets work with the github

-> git init : Powers your folder to be managed by the git,and initializes a new empty repository. It also creates a .git folder that has all relevant logic to manage version of project.

-> git status : it is used to track the files of the folder.

-> `Working Area` : There an be a bunch of files that are not currently handled by git. It means that changes done or to be done in those files are not managed by git yet. A file which is in working area is considered to be not in starting area. When we do `git status` and we see a bunch of `untracked files` then these are actually called to be  it the working area.

-> `Staging Area` : what all files  are going to be the part of the next version that we create. This staging area is the place where git know what changes will be done from the last version to the next version.

-> `Repository Area` : This area actually contains the details of all your prev registered version. And the files in this area, git already manages them and know their version history.

-> `git add <filename>` : To move the file from the working area to the staging area.

-> `git rm --cached <filename>` : To remove the file from the staging area to the working area.

-> `commit` : it is a particular version of the project. It captures a snapshot of the project's staged changes creates a version out of it.

-> `git log` : list down all the commits done in the repository

-> `git restore <file>` : it will delete all file changes which is in working area to be committed.

->`git restore -- staged <file>`:  it removes file from changes from staging area to the working area. this only works if changes are in the staging area.

 

1. Diff between git rm and git restore:
ans: if you want to move the whole file back to the untracked state then we do `git rm`, if you just want the changes to be move in working area or staging area then we use `git restore`.


-> `git diff commit1 commit2` : it gives the difference of all file  

->`git remote ` : list down all the remote connection names

-> Remote connection : It helps you to link two git repo for uploading and down loading changes from each otherwise.

->`git remote add <name of remote>` : this command help remote repo and give a name to it

-> `git remote rm <name of remote>` : this command deletes a remote connection 

->`git remote rename <oldname> <newname> ` : this command renames the remote

Note: The name of the remote connection is always used to establish communication.

-> `git add <file1> <file2> <file3>` : it will add only specific files.

-> `git add .` : this command will add all files from working area to staged area

-> `git pull <remote name> <branch name>` : downloads latest changes from the branch of the mentioned remote in your local repo.

###Recommended Practice to do 

    - make changes
    - git add <file>
    - git commit
    - git pull
    - git push


merge conflicts can occur if multiple people try to make changes to the same file and then collaborate 