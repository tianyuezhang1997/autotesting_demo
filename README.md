# Autotesting Demo (Under Construction)

## Links :
- Our published site (**pending** branch) : **https://tianyuezhang1997.github.io/autotesting_demo/index.html**    
- E2E Web Testing with TestCafe : **https://testautomationu.applitools.com/testcafe-tutorial/**  
- Sections covered :
  1. [Git Repo Branch Setting Demo](#git-repo-branch-setting-demo) 
  2. [Developing Workflow Demo](#developing-workflow-demo)  
  3. [Testing Workflow Demo](#testing-workflow-demo)
  4. [Managing Workflow Demo](#managing-workflow-demo)

## Git Repo Branch Setting Demo
- Note : our branches are divided into two types : **protected** and **NOT protected** 

### 1. **protedted** branches : **main** and **pending**
  - (1) **pending** branch contains the latest **[under testing product]** + **[under construction regression testing suite]**  
  - (2) **main** branch contains the latest **[fully tested product]** + **[reliable regression testing suite]**  
  - Note 
    - In other words,  after the **pending** branch fully tested by the testing team, they will make a **pending -> main** pull request
    - since the product under testing must be **online**, we want to keep the **pending** branch published as **Git Page** during our developing period
    - and we will publish the **main** branch instead after all the developing period
  - EX. we can set our Git Repo as below : 
  ![demo_branch_protection.png](/src/demo_branch_protection.png)
  ![demo_branch_protection_setting.png](/src/demo_branch_protection_setting.png)
  ![demo_github_pages.png](/src/demo_github_pages.png)
  
### 2. **NOT protected** branches : any newly added branches other than **main** and **pending**
- Everyone can casually create and push to any newly created branch
- ## **_Important_** : 
  - Each person is responsible for **backing up** their newly created branch
  - Each person should **only** make pull request to the **pending** branch, and do **NOT** make pull request to the **main** branch
  - The manager will **only** approve the pull request from the **pending** branch made by **testers**, 
  - but the manager will **never** approve your direct pull request to **main** from other branches  

## Developing Workflow Demo
### 1. Manager creates a list of **issues** assigned to specific assignees  
![demo_issues.png](/src/demo_issues.png)

### 2. Each subgroup creates a new **branch** for each assigned sprint task    
  - EX. to solve the **#3** issue **sprint task : Expose - Party Horn**  
  the assignees should create a new branch named **party_horn**  
  ![demo_branch.png](/src/demo_branch.png)
 
  - ## **_Important_** :
    **_Everytime you start working on your local version of the branch_**  
    **_Make sure your local version is NOT BEHIND your Remote Github Branch_**

    Otherwise, you make encounter the issue below : 
    - when you excute **[git push origin]**, you many encounter error message as below :
    > error: failed to push some refs to ...  
    > hint: Updates were rejected because the remote contains work that you do  
    > hint: not have locally. This is usually caused by another repository pushing  
    > hint: to the same ref. You may want to first integrate the remote changes  
    > hint: (e.g., 'git pull ...') before pushing again.  
    > hint: See the 'Note about fast-forwards' in 'git push --help' for details.  
    - this is because you had been working on an **old version of your branch**
    - which is out of date comparing to your **Remote Github Branch**
    - you can resolve it by excute **[git pull origin]**
    - However, make sure you have **staged** all the local changes EX. using **[git add .]** 
    - Otherwise, **[git pull origin]** will **discard** all **unstaged changes**
    - which means any work you have not applied **[git add]** on it will **COMPLETELY GONE !!!**
    -  
### 4. Whenever you are condifent your feature is implemented correctly, create a pull request to the  **pending** branch
  - EX. when you are condifent the Party Horn is working  
      - make a pull request **party_horn -> pending**,  
      - and prefixing you pull request name with keywords **Resolves #3** can (temporarily) close the **#3** issue  
  ![demo_pull_request_to_pending.png](/src/demo_pull_request_to_pending.png)  
  ![demo_prefix_resolves.png](/src/demo_prefix_resolves.png)
  ![demo_closed_issues.png](/src/demo_closed_issues.png)  

### 5. Wait for approval from the manager
  - When you see the green check mark on **Regression Test**, 
    - everything in the **pending** branch is fully tested and ready to merge and test new features
  - Otherwise, that means the testers are still working on the **pending** branch
  - **In either case**, you are good to go, as soon as testers finih their work and see your pull request, they will accept it. 
  ![demo_wait_for_approval.png](/src/demo_wait_for_approval.png)

### 6. Keep fixing bugs on the **same branch** as long as the **issue** is marked as **open**         
  - EX. Once the new branch **party_horn** introduces a bug
    - the **#3** issue will be **reopen** 
    - you need to fix the bug 
    - then make another pull request **party_horn -> pending**  

## Testing Workflow Demo
- ### TO DO : 
  - learn syntax how to verify data by using the javasript code supported by TestCafe
  - since the **TestCafe Studio** auto generated JS code are **ONLY** able to mimic user actions but are **NOT** able to **verify data**       
- ### 0. Keep an eye on pull request from other branches to the **pending** branch
- ### 1. Accept **ONLY ONE** pull request at a time
- ### 2. After accepting a pull request, go to the **Actions** section 
  - waiting the running **Regression Test** (with yellow spinning mark) to finish, 
  - check the testing result : 
    - If passed (green check mark), go to next step
      - EX. when you approved a pull request from the **party_horn** branch
        if the new code pass the **Regression Test**, you will see somthing as below
        ![demo_regression_testing.png](/src/demo_regression_testing.png) 
    - Otherwise (red cross mark), 
      - first make sure the error was not caused by our test suite
      - if lt was the test suite issue, **update*** the test suite code to accommodate tiny changes (such as renamed tages in the html)
      - Otherwise, we are sure the newly added code caused the priblem 
        - find the error and provide error analysis to the pull request maker, and notify the pull request maker
        - remark  the corresponding issue as **open** (if it has been marked as closed)
        - skip all the following steps and go back to step 0
- ### 3. add **NEW** test cases to fully test all the new features
  - use **TestCafe Studio** to record our action, and the user actions will be auto translated to javascript code
    - ## **_Important_** : 
      - Make sure old test cases always included to guarantee **Regression Test** 
      
  - if any bug found in this step
    - find the error and provide error analysis to the pull request maker, and notify the pull request maker
    - remark  the corresponding issue as **open** (if it has been marked as closed)
    - skip all the following steps and go back to step 0
  - keep working until all the new feature are **Fully** tested
- ### 4. edit the auto generated JS code (if needed), then copy&paste it to **autotesting_demo.js**
- ### 5. push the updated **autotesting_demo.js** to the **pending** branch
- ### 6. After pushing, go to the **Actions** section 
  - wait the running **Regression Test** (with yellow spinning mark) to finish, 
  - check the testing result : 
  - If passed (green check mark), go to next step
  - otherwise, **autotesting_demo.js** not work as we expected
      - go back to step 4 to edite the JS code, if necessary start over from step 3
- ### 7. make a pull request from **pending** branch to the **main** branch     
  - ## **_Important_** : 
    - The **pending -> main** pull request should only be made when both coditions are safisfied :   
      - the newly added code passed the test
      - the testing suite has been fully updated by the testers 
- ### 8. wait for approval from the meanager
## Managing Workflow Demo
- ## **_Important_** : 
  - 0. Archive the **main** branch frequently  
  - 1. **Never accept** any pull request from branches other than the **pending** branch
  - 2. **Conduct** the testing team the **pending->main** to solve **merging conflicts**
  - 3. **Always confirm** the testing team the **pending->main** pull request was not made accidently before accepting
    - "face to face" confirmation is more secure
    - so that testers could not destroy the **main** branch accidently
    - also, frequently archiving the **main** branch locally can conquer such risk

