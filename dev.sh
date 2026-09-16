#!/usr/bin/env bash
# Lance Strapi avec Node 22 (requis : Strapi n'accepte pas Node >22).
# Node 22 est installé en keg-only par Homebrew, donc absent du PATH par défaut.
# Usage : ./dev.sh [commande]   (défaut : develop)
set -euo pipefail

NODE22="/opt/homebrew/opt/node@22/bin"
if [ ! -x "$NODE22/node" ]; then
  echo "Node 22 introuvable. Installe-le avec : brew install node@22" >&2
  exit 1
fi

export PATH="$NODE22:$PATH"
echo "→ node $(node -v)"
npm run "${1:-develop}"
