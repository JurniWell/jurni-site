#!/bin/bash
# Run this once from Terminal inside the "Jurni Site" folder
# It sets up a proper git repo from the committed bundle Claude created.
#
# Usage:
#   cd "/Users/jamierenee/Desktop/AI Projects/Jurni Site"
#   bash git-setup.sh
#
# Then add your remote and push:
#   git remote add origin https://github.com/YOUR_USER/jurni-site.git
#   git push -u origin main

set -e

DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$DIR"

echo "🧹 Cleaning up partial .git..."
rm -rf .git

echo "📦 Restoring from bundle..."
git clone jurni.bundle . --local 2>/dev/null || {
  # If clone fails (non-empty dir), use bundle import
  git init
  git fetch jurni.bundle 'refs/heads/master:refs/heads/main'
  git checkout main
}

git branch -m main 2>/dev/null || true

echo ""
echo "✅ Git repo ready! All 15 files committed on branch 'main'."
echo ""
echo "Next: add your remote and push:"
echo "  git remote add origin https://github.com/YOUR_USER/jurni-site.git"
echo "  git push -u origin main"
echo ""
echo "🚂 Then deploy on Railway:"
echo "  railway login && railway init && railway up"
