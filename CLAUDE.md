# team-payments — definition of done

This checklist is the review rubric for humans and for the Engineering Ops Copilot.

- Every PR that changes source code must include at least one test covering the new behavior.
- No direct commits to `main`. All changes go through a pull request.
- Every open PR needs a reviewer or assignee. Unwatched PRs are a process failure.
- Flag any issue labeled `in-progress` with no linked commits or comments for more than 3 days.
- Issues labeled `blocked` must name the external dependency in a comment.
- Do not merge if CI (`lint` + `test`) is red.
- Keep demo code small; do not treat this repo as a production payments system.
