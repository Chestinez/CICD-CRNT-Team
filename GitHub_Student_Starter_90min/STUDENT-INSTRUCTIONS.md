# STUDENT HANDOUT — GitHub Team Collaboration (90 minutes)

**Challenge:** Build a better *Campus Events Board* together.  
**Teams:** 3–4 students  
**Tools:** GitHub account, browser; optional VS Code + Git.  
**Goal:** Practise teamwork through issues, branches, commits, pull requests, code reviews and merging.

> **Important:** The lesson is about **collaboration**, not writing lots of code. Keep changes small, communicate and review.

## Your 90-minute timetable

| Time | What to do | Checkpoint |
|---|---|---|
| 00–10 | Observe lecturer demo of the GitHub flow | You can describe branch → PR → review → merge |
| 10–20 | Set up team repo and add all collaborators | All members can view and edit repo |
| 20–25 | Agree roles; open and assign one issue per member | Issues show owners |
| 25–50 | Work on feature branches; commit and push/save changes | A commit on each student's branch |
| 50–70 | Open PRs; request peer reviews; merge after review | Changes combined into `main` |
| 70–82 | Deliberate merge conflict exercise | Conflicting PR resolved |
| 82–90 | Test, demonstrate and submit repository URL | Team checklist complete |

## Before the lesson

Make sure you can sign into GitHub. If editing locally, install Git and an editor such as VS Code. Browser-only editing on github.com works for this lesson.

## Step 1 — Team setup (10–20 min)

1. Choose a team leader to create **one private repo for the team** from the lecturer's starter repository using **Use this template → Create a new repository**. Suggested name: `campus-events-team-01`.
2. The leader opens the new repo's **Settings → Collaborators → Add people**, invites teammates by GitHub username, and teammates accept the invitations.
3. Open the repo and inspect `README.md`, `index.html` and the project files.
4. Agree who will coordinate merges. Nobody should edit `main` directly during the practical.

**If the lecturer gives you an existing team repository:** use it instead of creating a new one. **If there is no GitHub template:** your leader creates an empty repo and uploads the *uncompressed contents* of the starter-repository folder before inviting teammates.

## Step 2 — Allocate tasks and log Issues (20–25 min)

Create one GitHub Issue per person, assign it to the member, and use a clear title such as `Add two campus events`. Your task must be linked to your eventual PR.

| Member | File to edit | Acceptance criteria |
|---|---|---|
| **A — Content** | `data/events.js` | Add at least 2 unique events. Every event has `id`, `title`, `category`, `date`, `location`, `description`. Use `Tech`, `Career`, or `Community`. |
| **B — Search** | `js/search.js` | Search term matches title **or** location, ignoring case. Blank search shows all events. |
| **C — Filter** | `js/filter.js` | `All` shows everything; choosing a category shows only events in that category. |
| **D — Styling** | `styles.css` | Add hover effect, improve category badge, and stack controls + cards on narrow screens (≤650px). |

Three members? Member A also updates `styles.css` after adding events. Keep that work small.

## Step 3 — Create a branch and implement (25–50 min)

### Option A — Browser-only (recommended if you are new to Git)

1. Open the repository on github.com; use the branch selector (usually `main`) to type a new branch name, such as `feature/search-b-username`, and select **Create branch**.
2. Open the file assigned to you, select **Edit** (pencil), make changes, then **Commit changes** to your **feature branch**.
3. Open `index.html` locally if you have a clone, or arrange for the team member with a local copy to test it. Browser-only teams may test the final merged website after downloading the repo ZIP.
4. Repeat edits/commits if needed. Do not commit to `main`.

### Option B — Terminal / VS Code (if comfortable)

Replace placeholders with your team's actual values. Use your own unique feature branch.

```bash
git clone https://github.com/TEAM-LEADER/campus-events-team-01.git
cd campus-events-team-01
git switch -c feature/search-b-username
# Edit only your assigned file in VS Code.
git add js/search.js
git commit -m "Add case-insensitive event search"
git push -u origin feature/search-b-username
```

Use a corresponding file and descriptive commit message for your own role. If Git authentication fails, switch to browser editing; do not share access tokens.

## Step 4 — Pull requests and code review (50–70 min)

1. Open **Pull requests → New pull request** (or choose **Compare & pull request** after pushing).
2. Base branch = `main`; compare branch = **your feature branch**.
3. Title PR descriptively. Fill in the PR template, including `Closes #ISSUE_NUMBER` (replace the number) and how you tested it.
4. Ask a **different team member** to review your PR. Reviewer opens **Files changed**, leaves at least **one specific improvement or verification comment**, and submits a review.
5. Respond to feedback. After review, merge PR into `main` and delete the feature branch if appropriate. Team coordinator should merge PRs **one at a time**.
6. Check the main project after merging. If you work locally, pull the updated version before testing (`git switch main`, then `git pull`).

**Quality checks:** 5+ events; searching `lab` or `web` returns relevant results; searching a nonsense word shows empty-state text; category filtering works; both controls work together; narrow layout looks sensible.

## Step 5 — Controlled merge conflict (70–82 min)

**Do this only when the lecturer starts the challenge.**

1. Members A and B both start from the **same current `main`** and create **different** branches: `challenge/motto-a` and `challenge/motto-b`. Create these before either PR is merged.
2. Both edit the **same line** of `TEAM-MOTTO.md` to two **different** motto texts. Each commits and opens a PR.
3. Merge Member A's PR first. Member B's PR should now report a conflict.
4. On Member B's PR, select **Resolve conflicts** (for this simple conflict) and choose a final combined motto the team agrees on. Remove Git conflict markers (`<<<<<<<`, `=======`, `>>>>>>>`), mark resolved, commit the resolution and merge.
5. In the PR description or comments, explain **why the conflict happened** and what was chosen. Capture a screenshot if your lecturer requests one.

*If the challenge branches were not created from the same starting commit, or the same line was not changed differently, there may be no conflict. Check those two conditions.*

## Step 6 — Demo and submission (82–90 min)

- One person opens the final `index.html` and demonstrates **search + category filter** and the styled layout.
- Show GitHub: your **Issues**, **Pull requests**, **review comments**, **merged PRs**, and **conflict-resolution evidence**.
- Submit **one team repository URL**, plus the names and GitHub usernames of all members.
- Everyone answers briefly: *What did you change? What did you learn about reviewing or merging another person's code?*

## GitHub workflow at a glance

`Issue → New branch → Edit → Commit → Pull request → Peer review → Merge into main`

## If you are stuck

- **Invite not accepted:** check email/GitHub notifications; leader can resend invitation.
- **Wrong branch:** check the branch dropdown before committing.
- **No PR available:** ensure your branch has a commit that differs from `main`.
- **Merge button unavailable:** read the PR status; resolve conflicts and address required checks/reviews.
- **Out of time:** prioritise **one PR per member and one review per PR**, then the short conflict challenge; optional CSS polish can be simplified.

## Success checklist

- [ ] One shared GitHub repository with all group members invited
- [ ] Every member has an assigned GitHub Issue
- [ ] Every member has a feature branch, commit and PR
- [ ] Every feature PR receives a peer review comment
- [ ] All feature PRs merged into `main`
- [ ] New events, search and filtering work together
- [ ] Styling is improved and responsive
- [ ] Controlled merge conflict resolved and documented
- [ ] Repository URL submitted before 90 minutes ends
