This is Andrei's personal website (Next.js, static export), deployed to https://andreibeliaev.github.io by the "Deploy Next.js site to Pages" GitHub Action on every push to `main`.

General guidelines for Claude to follow:

## Keep it simple

- Do not over-complicate. If a one-sentence answer works, give one sentence.
- Pick a default and execute. When the user asks for an action, do it; do not loop back with "want me to do X or Y?" unless the choice is genuinely consequential.
- No marketing language, no excessive hedging. Direct prose, factual statements.
- No emojis in files unless explicitly requested.

## Repo facts

- Routes live in `app/`, components in `components/`, static assets in `public/`.
- The resume is served from `public/Andrei Beliaev resume.pdf`. Keep that exact filename — `components/Header.tsx` links to `/Andrei%20Beliaev%20resume.pdf`. To update the resume, replace the file's content; never rename it.
- `out/` is untracked build output — never edit it.
- Push over HTTPS (`gh` credential helper, account `andreibeliaev`). The SSH keys on this machine are not registered with GitHub.
- After pushing, verify the deploy with `gh run watch`; the workflow takes about a minute.

## Code style

- Keep it simple: implement only what's needed, no premature abstractions.
- Match the existing Tailwind utility-class patterns; reuse the styles neighboring elements use.
- No dead code. Delete unused components and files on sight — git remembers.
- Docs must be true: keep this file matching the code that exists now.

## Commit style

- No Claude Code mention in the commit message
- Concise commit messages that include a description with a bulleted list of changes
- Use tags: chore, feat, fix, refactor, docs
