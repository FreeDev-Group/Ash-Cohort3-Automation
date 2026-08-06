# Automation Project Feedback Report

## Reviewer Information

- Reviewer Name: Dieudonné
- Date: 6/30/2026
- Repository Reviewed: Ash-Cohort3-Automation
- Folder Reviewed:feedbacks
- Tested URL:https://student.michaelkentburns.com/
- Operating System: Windows
- Browser: Chrome

---

## 1. General Understanding

### What is the purpose of this repository?

**Answer:**

The project aims to provide a student survey and feedback management platform where users can register, log in, manage surveys, submit responses, and access their profile through a dashboard interface.

### What automation tool is used in this project?

**Answer:**

Cypress is used as the automation testing tool. It allows testers to automate end-to-end user interactions such as login, registration, survey management, and form validation.


### What did you learn from this project?

**Answer:**

I learned how to analyze a web application, identify critical user workflows, execute manual tests, and prepare automation test scenarios using Cypress.

## 2. Installation and Execution

### Were you able to install and run the project?


- [ ] Partially


---

### Commands Used
git clone https://github.com/FreeDev-Group/Ash-Cohort3-Automation.git


---

### Issues Encountered

Describe any error or difficulty you faced.

**Answer:**

The repository contains feedback templates and project instructions, but it does not include Cypress test files or a complete automation project for execution.

---

### How did you resolve the issues?

**Answer:**

I proceeded with manual testing of the provided website and documented the observed functionality, validation behavior, strengths, weaknesses, and recommendations.

---

## 3. Test Structure Review

### Are the tests well organized?

**Answer:**

---

### Which use cases are covered?

**Answer:**

- User Login
- User Registration
- Password Recovery
- Dashboard Access
- Survey Management
- Survey Responses
- Profile Management
- User Logout

### Which use cases are missing or weakly covered?

**Answer:**

---

## 4. Test Quality Review

Rate each item from 1 to 5.

| Criteria | Score /5 | Comments |
|---|---:|---|
| Test names are clear | | |
| Test steps are easy to understand | | |
| Assertions are meaningful | | |
| Selectors are reliable | | |
| Test data is well managed | | |
| Tests can run without confusion | | |

---

## 5. Cypress Best Practices

### Are Cypress commands used correctly?

Examples:

- `cy.visit()`
- `cy.get()`
- `cy.contains()`
- `cy.click()`
- `cy.type()`
- `should()`

**Answer:**
No Cypress test files were available in the repository for review. Therefore, Cypress command usage could not be evaluated.
---

### Are there repeated steps that could be improved?

For example, login steps could be moved into reusable commands.

**Answer:**
No automation scripts were available for analysis. Therefore, repeated steps and reusable commands could not be assessed.
---

## 6. Strengths

List at least three strengths.

1.Login functionality works correctly.
2.Registration form validates required fields.
3.Error messages are displayed clearly to users.
4.Users can successfully create, edit, update, and manage surveys and questions through the dashboard.
5.Survey, Survey Responses, Questions, and Comments features function properly without major issues.

---

## 7. Weaknesses

List at least three weaknesses.

1.Posts can be published directly by any user without an approval or moderation process.

2.After updating the profile picture, the user cannot return directly to the dashboard, which affects navigation and user experience.

3.The Tools menu is empty and currently provides no functionality.

---

## 8. Recommendations

Give at least three practical recommendations.

1.Add more negative test scenarios.
2.Improve automation test coverage.
3.Add detailed test documentation.
4.Either add useful functionality to the Tools section or remove the menu item until it is implemented.
5.Fix the profile update workflow to allow users to return directly to the dashboard after updating their profile picture.
6.Implement a post approval workflow so that published content can be reviewed before becoming visible.

---

## 9. Final Decision

As a reviewer, what is your decision?
- [ ] Approved
- [x] Approved with recommendations
- [ ] Request changes

### Justification

Explain your decision professionally.

**Answer:**
The website functions correctly for the main user workflows, including login, registration, surveys, and profile management. However, several improvements can be made regarding content moderation, profile navigation, and the Tools section. Additionally, no Cypress automation scripts were available for review, limiting the automation assessment.

---

## 10. GitHub Issue

Each reviewer must create or describe at least one issue.

### Issue Title

**Answer:**

Unable to Return to Dashboard After Updating Profile Picture

### Issue Description

**Answer:**

After updating a profile picture, the user cannot navigate directly back to the dashboard. This creates an interruption in the normal user workflow.

### Current Behavior

**Answer:**

The profile picture is updated successfully, but the user is not redirected or provided with a clear path back to the dashboard.

### Expected Behavior

**Answer:**

After a successful profile update, the user should be redirected to the dashboard or presented with a clear navigation option.

### Suggested Improvement

**Answer:**

Add an automatic redirect to the dashboard after a successful profile update or provide a visible dashboard navigation button.

### GitHub Issue Link

```text

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