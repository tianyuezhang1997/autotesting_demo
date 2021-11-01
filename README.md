# Autotesting Demo (Pending)

## Link to published site 
- **https://tianyuezhang1997.github.io/autotesting_demo/index.html**    

## E2E Web Testing with TestCafe  
- **https://testautomationu.applitools.com/testcafe-tutorial/**  

## Git Repo Branch Setting Demo
- Note : our branches are divided into two types : **protected** and **NOT protected** 

### 1. **protedted** branches : **main** and **pending**
  - (1) **pending** branch contains the latest **[under testing product]** + **[under construction regression testing suite]**  
  - (2) **main** branch contains the latest **[fully tested product]** + **[reliable regression testing suite]**  
  - Note 
    - In other words, **main** branch stores the **latest finished version** of **pending** branch
    - since the product under testing must be **online**, we want to keep the **pending** branch published during our developing period
    - and we will publish the **main** branch instead after all the developing period
  - EX. we can set our Git Repo as below : 
  ![demo_branch_protection.png](/src/demo_branch_protection.png)
  ![demo_branch_protection_setting.png](/src/demo_branch_protection_setting.png)
  ![demo_github_pages.png](/src/demo_github_pages.png)
  
### 2. **NOT protected** branches : any newly added branches other than **main** and **pending**
- Everyone can casually create and push to that newly created branches
- ## **_Important_** : 
  - Each person is responsible for **backing up** their newly created branch
  - Each person should **only** make pull request to the **pending** branch, and do **NOT** make pull request to the **main** branch
  - and the manager will **only** approve the pull request from the **pending** branch, while the manager will **never** approve your direct pull request to **main** from other branches 
  - Also, the **pending -> main** pull request happens only if both coditions is safisfied :   
    - the newly added code passed the test
    - the testing code has been fully updated by the testers      


## Workflow Demo
### 1. Manager creates a list of **issues** assigned to specific assignees  
![demo_issues.png](/src/demo_issues.png)

### 2. Each subgroup creates a new **branch** for each assigned sprint task    
  - EX. to solve the **#3** issue **sprint task : Expose - Party Horn**  
  the assignees should create a new branch named **party_horn**  
  ![demo_branch.png](/src/demo_branch.png)

### 3. Each time you make a **push** to your **branch**, go to the **Actions** section to check the result of our **Global Regression Testing**  
  - Note:
      - The **Global Regression Testing** will tell you if you have **break** the original product
      - a **falled** test always prevents you from making any pull request   
  - EX. when you make a **push** to your **party_horn** branch
    if your code pass the test, you will see somthing as below
  ![demo_regression_testing.png](/src/demo_regression_testing.png)  

### 4. Whenever you are condifent, create a pull request to the  **pending** branch the testing team will handle the rest tasks for you  
  - EX. when you are condifent the Party Horn is working  
      - make a pull request **party_horn -> pending**,  
      - and prefixing you pull request name with keywords **Resolves #3** can (temporarily) close the **#3** issue  
  ![demo_pull_request_to_pending.png](/src/demo_pull_request_to_pending.png)  
  ![demo_prefix_resolves.png](/src/demo_prefix_resolves.png)
  ![demo_closed_issues.png](/src/demo_closed_issues.png)  

  ## 5. Wait for approval from the manager
  - Even though you had already passed the **Regression Test** 
  - the pull request will not be executed until it's approved by the manager
  ![demo_wait_for_approval.png](/src/demo_wait_for_approval.png)

  ### 6. Keep fixing bugs on the **same branch** as long as the **issue** is marked as **open**         
  - EX. Once the new branch **party_horn** introduces a bug
    - the **#3** issue will be **reopen** 
    - you need to fix the bug 
    - then make another pull request **party_horn -> pending**  

 

