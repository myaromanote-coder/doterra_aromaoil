#!/bin/bash
# ──────────────────────────────────────────────
#  my.aroma.note — GitHub 자동 배포 스크립트
#  사용법: ./deploy.sh
#         ./deploy.sh "커밋 메시지"
# ──────────────────────────────────────────────

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

ENV_FILE="$SCRIPT_DIR/.env.local"

# ── 토큰 로드 ──────────────────────────────────
if [ ! -f "$ENV_FILE" ]; then
  echo ""
  echo "⚠️  .env.local 파일이 없습니다."
  echo ""
  echo "다음 명령어로 토큰을 설정하세요:"
  echo "  echo 'GITHUB_TOKEN=여기에_토큰_입력' > .env.local"
  echo ""
  exit 1
fi

source "$ENV_FILE"

if [ -z "$GITHUB_TOKEN" ]; then
  echo "⚠️  .env.local 에 GITHUB_TOKEN이 없습니다."
  exit 1
fi

REMOTE_URL="https://myaromanote-coder:${GITHUB_TOKEN}@github.com/myaromanote-coder/doterra_aromaoil.git"

# ── 변경사항 확인 ──────────────────────────────
git add -A
if git diff --cached --quiet; then
  echo ""
  echo "✓ 변경된 파일이 없습니다."
  echo ""
  exit 0
fi

# ── 커밋 메시지 ────────────────────────────────
TIMESTAMP=$(date '+%Y-%m-%d %H:%M')
if [ -n "$1" ]; then
  COMMIT_MSG="$1"
else
  CHANGED=$(git diff --cached --name-only | head -3 | tr '\n' ', ' | sed 's/,$//')
  COMMIT_MSG="Update: $TIMESTAMP ($CHANGED)"
fi

# ── 커밋 & 푸시 ────────────────────────────────
echo ""
echo "업로드 중..."
git commit -m "$COMMIT_MSG" --quiet

if git push "$REMOTE_URL" main --quiet 2>/dev/null; then
  echo ""
  echo "✅ 완료!"
  echo ""
  echo "사이트: https://myaromanote-coder.github.io/doterra_aromaoil/"
  echo "반영까지 약 1-2분 소요됩니다."
  echo ""
else
  echo ""
  echo "❌ 업로드 실패. 토큰이 만료됐을 수 있습니다."
  echo ".env.local 파일의 GITHUB_TOKEN을 새 토큰으로 교체하세요."
  echo ""
  exit 1
fi
