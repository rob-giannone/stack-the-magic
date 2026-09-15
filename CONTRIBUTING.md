# Contributing

Two of us are working on this independently. `main` is protected — you can't push
to it directly (even as an admin), so every change goes through a branch + PR.

## Workflow

1. Pull the latest `main` before starting anything new:
   ```bash
   git checkout main
   git pull
   ```
2. Create a branch:
   ```bash
   git checkout -b yourname/short-description
   ```
3. Commit and push:
   ```bash
   git push -u origin yourname/short-description
   ```
4. Open a PR into `main` (via GitHub's web UI, or `gh pr create`). Vercel will
   automatically post a preview URL as a comment on the PR — click it to see
   your changes live before merging.
5. Merge the PR once it looks good. Vercel deploys `main` to production
   automatically on merge.
6. Delete the branch after merging to keep things tidy.

## Local setup

```bash
git clone https://github.com/rob-giannone/stack-the-magic.git
cd stack-the-magic
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Avoiding conflicts

Since we're both moving fast, try to keep branches short-lived and pull `main`
often. If you're both touching the same area, a quick heads-up in chat beats
untangling a merge conflict later.
