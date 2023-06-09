# How to hand in homework

In this module you'll submit your homework only using GIT and GitHub.

1. [GitHub](https://github.com/Pixel-To-Code-Studio/JavaScript)

## 1. GitHub homework guide

<a href="#" target="_blank"><img src="https://via.placeholder.com/400x250?text=Video+Coming+Soon" width="400" height="250" alt="PTCS Video" /></a>

Watch the video (by clicking the image) or go through the following walk-through to learn how to submit your homework:

ONE TIME ONLY (START OF EVERY MODULE)

1. Create a [fork](https://help.github.com/en/articles/fork-a-repo) of the homework module repository. For JavaScript (as well as the next 2 modules), the homework module repository is `https://github.com/Pixel-To-Code-Studio/Homework-cohortXX` where XX is your cohort number. You do this by using the `fork` option on the top right.
2. Navigate to the URL of the cloned repository (it should be in your personal GitHub account, under "repositories").
3. Clone the repository, using SSH¹, to your local machine. You can do this by typing in `git clone <git url>` in the command line.
4. On your local machine, navigate to the folder using the command line.
5. Make sure you've cloned it correctly by running `git status` from the command line.
6. This homework repository is a little special, have a look through the README how it all works!

EVERY WEEK

1. Do a `git pull` on your main branch to get the latest version.
2. Create a new branch for each week you have homework. For example, for the week 3 homework² for JavaScript create a branch called `YOUR_NAME-w3-JavaScript`. Don't forget to checkout this branch after creating it. You should not modify the `main` branch.
3. Make your homework!
4. Once you're finished, add your homework to a commit. There will be some test and config files added by the test runner, this is expected and should be added!
5. Create the commit (`git commit`). Make the commit message meaningful, for example `Finished project for homework week 3`.
6. Push the branch to your forked repository.
7. On the GitHub page of your forked repository, click on the `create pull request` button. Make sure the `base repository` is the `Homework-cohortXX` repository, on branch `main`.
8. Give the pull request a title in the following format:

```markdown
Homework week 3 <Your name>
```

9. Submit the pull request from your forked repository branch into the `main` branch.

If you have any questions or if something is not entirely clear ¯\\\_(ツ)\_/¯, please ask/comment on Slack!

Notes:

1. This first week for which you need to submit homework is week 3 of the JavaScript module.

# Homework Review Process

## Before you start
1. You get assigned a mentor at the start of the module in the slack group chat. (S)He is responsible for reviewing your work for the duration of the module.
3. Please don't hesitate to contact Luke or the cohort mentor if you are facing any issues. We are here to help you out!  

## Review process
Together with the mentor and other students in your group you have the freedom to decide on the way of communication. You can do video calls or get feedback via comments to the PR.

The mentor will start a group message on Slack and agree together on the way of communication. There, the mentor can keep the whole group informed of his/her availability and updates.


### Video calls
If your group chooses to do video calls, there're 2 options. Individual calls or a group call. 

Please write down some questions before the start of the call. During the call it is important to make notes of the feedback from the mentor, so you know what has to be adjusted afterwards. 

### Comments to the PR
The mentor will place comments on your pull request. You have to adjust your work accordingly and reply on the feedback.

### Timeline feedback
| Days                                   | Activities                                                                     |
| -------------------------------------- | -------------------------------------------------------------------------------|
| Tuesday (week 1)                       | Deadline for you to hand in your first version                                 |
| Wednesday (week 1) - Tuesday (week 2)  | Mentor provides feedback                                                       |
| Wednesday (week 2) - Tuesday (week 3)  | you improve homework based on the feedback and mentor evaluates improvements   |
| Wednesday (week 3) | Core-team member Homework Approval Check. At this point every PR needs to be approved.             |

It can happen that your mentor doesn't reply on your questions or your updated homework. Please send a reminder via slack. If that doesn't work and you're afraid you can't make the deadline, contact your class-mentor. 

### Labels 
It is important for the you and the core-team to have up to date info about the status of the homework. This is why the mentors use two labels on your PR.

| Label        | Description                                    |
| ------------ | -----------------------------------------------|
| no label     | not reviewed yet                               |
| Needs work   | reviewed, but you need to implement feedback   |
| Approved     | reviewed, and your homework has been approved  |

Here is an example of this in action.

![labels](./_media/labels.png)
