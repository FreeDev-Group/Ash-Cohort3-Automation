# Automation Project Feedback Report

## Reviewer Information

- Reviewer Name: Evelyne
- Date: 28th June 2026
- Repository Reviewed:https://github.com/FreeDev-Group/Philemon-Cohort3-Automation.git
- Folder Reviewed:UC-CreateAccount
- Tested URL:http://student.michaelkentburns.com
- Operating System:MacOs
- Browser:Chrome

---

## 1. General Understanding

### What is the purpose of this repository?

Explain in your own words what this project is trying to achieve.

**Answer:**

This project aims to evaluate us, the mentees, on our ability to analyze and report on e2e  automated tests.

### What automation tool is used in this project?

Explain the role of the automation tool used.

**Answer:**

Cypress is the tool used to automate testing of the application. It performs the same actions as a real user, such as opening pages, clicking buttons, and filling in forms. It then checks if the application works as expected. Using Cypress makes testing faster, easier, and more reliable than doing the same tests manually.

### What did you learn from this project?

**Answer:**

From this project, I learned how to understand and analyze  cypress tests. I learned how to run the test, check the test results, identify failures, and report my findings. This project also helped me better understand how e2e automated tests work and how cypress is used in testing.

## 2. Installation and Execution

### Were you able to install and run the project?

- [✅] Yes
- [ ] Partially
- [ ] No

---

### Commands Used

Write the exact commands you used.

```bash
git clone https://github.com/FreeDev-Group/Philemon-Cohort3-Automation.git
cd Isaya-cypress-e2e-tests
npm install
npx cypress open
```

---

### Issues Encountered

Describe any error or difficulty you faced.

**Answer:**

Cloning the repository, installation, and test execution all went smoothly, with no issues encountered.

### How did you resolve the issues?

**Answer:**

N/A

## 3. Test Structure Review

### Are the tests well organized?

**Answer:**

The organization of the tests is not very clear, with some repetition and mixed scenarios that should be separated.

### Which use cases are covered?

Examples:

- Login
- Create Account
- Provide Feedback
- Manage Surveys
- Review Feedback
- Other relevant use cases

**Answer:**

The use case covered is Create Account . 

### Which use cases are missing or weakly covered?

**Answer:**

All the other use cases are not tested, meaning UC- Login, UC- Manage Surveys, UC- Provide Feedback, and UC- Review Feedback.

## 4. Test Quality Review

| Criteria | Score /5 | Comments |
|---|---:|---|
| Test names are clear |4 | Test name is understandable but could be more specific |
| Test steps are easy to understand |4 | Steps are mostly clear and readable |
| Assertions are meaningful |3 | Basic assertions are used but could be improved |
| Selectors are reliable |3 | Some selectors are okay, but could be more stable |
| Test data is well managed |4 | Fixture is used for test data |
| Tests can run without confusion |3 | Some repetition may create confusion |

---

## 5. Cypress Best Practices

### Are Cypress commands used correctly?

**Answer:**

Yes, Cypress commands are generally used correctly, and the test follows a basic structure.

### Are there repeated steps that could be improved?

**Answer:**

Yes, there are repeated steps such as visiting pages and using the fixture multiple times, which could be improved.

## 6. Strengths

1.Clear test structure
2.Uses fixture for data
3.Covers registration flow

---

## 7. Weaknesses

1.Some repeated steps
2.Mixed scenarios in one test
3.Limited coverage

---

## 8. Recommendations

1.Split test cases by scenario
2.Use beforeEach() to reduce repetition
3.Add more validations and edge cases

---

## 9. Final Decision

- [ ] Approved
- [✅] Approved with recommendations
- [ ] Request changes

### Justification

**Answer:**

The test is functional and understandable, but needs better structure and improved organization for maintainability.

## 10. GitHub Issue

### Issue Title

**Answer:**

Improve structure of Cypress registration tests

### Issue Description

**Answer:**

The current Cypress test works correctly, but the structure can be improved for better readability and maintenance.

### Current Behavior

**Answer:**

The test includes repeated steps and mixes different scenarios (successful registration and duplicate registration) in the same test case.

### Expected Behavior

**Answer:**

Each scenario should be separated into its own test, and repeated steps should be reduced using beforeEach().

### Suggested Improvement

**Answer:**

- Split test cases by scenario
- Reduce repetition using beforeEach()
- Improve readability and structure of the test

### GitHub Issue Link

```text
https://github.com/FreeDev-Group/Philemon-Cohort3-Automation/issues/2#issue-4763227396
```

---

## Final Score

| Category | Points |
|---|---:|
| Understanding of the repository | /1.5 |
| Installation and execution | /1.5 |
| Test structure review | /1.5 |
| Test quality review | /1.5 |
| Cypress best practices analysis | /1 |
| Strengths and weaknesses | /1 |
| Recommendations | /1 |
| GitHub Issue quality | /1 |
| **Total** | **/10** |
