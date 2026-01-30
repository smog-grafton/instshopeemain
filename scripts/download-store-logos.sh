#!/usr/bin/env bash
# Download category mall store logos to public/images/stores/logos.
# Compatible with macOS default bash (3.x). Run from project root: bash scripts/download-store-logos.sh

set -e
DIR="public/images/stores/logos"
mkdir -p "$DIR"

# id and URL pairs (one per line: id|url)
while IFS='|' read -r id url; do
  [ -z "$url" ] && continue
  out="$DIR/$id.png"
  echo "Downloading $id -> $out"
  curl -sL -o "$out" "$url" || true
done << 'URLS'
sony-store|https://down-my.img.susercontent.com/file/d2030e3c727e8c498badab2c9e01de33
apple|https://down-my.img.susercontent.com/file/my-11134258-7r98v-lxpm2zisii5s56
machines|https://down-my.img.susercontent.com/file/f8a7f8de849cc4f7f79ac89a47875d9a
senq|https://down-my.img.susercontent.com/file/9db52e3ebd5ff20aa60ecfc8ff80e6cd
cliptec|https://down-my.img.susercontent.com/file/my-11134258-7rasb-ma0ymvpj0w1gd4
vivo|https://down-my.img.susercontent.com/file/3e68e0160a3fdb84c1c214a8361145ad
iqoo|https://down-my.img.susercontent.com/file/b4bd583abd236d15093fc931b27955b7
nillkin|https://down-my.img.susercontent.com/file/f8b9b678a879978f8eee2a4f47b2ee92
kieslect|https://down-my.img.susercontent.com/file/my-50009109-c9859999422a0afc22fe967d574996f0
huawei|https://down-my.img.susercontent.com/file/b283d6df2b56bc5a297d410255d6aa79
honor|https://down-my.img.susercontent.com/file/f85797da606ffdb63d5b07a5a79b024f
ugreen|https://down-my.img.susercontent.com/file/90c4d078677c50316d6155c631de77ec
switch|https://down-my.img.susercontent.com/file/f3c28d3248ca3995ef4cafb518c09760
garmin|https://down-my.img.susercontent.com/file/5dded50ec6d7eaaeb6ab5074be729b29
jbl|https://down-my.img.susercontent.com/file/4fc2123a6595a482f2b10848b94a1a76
pico|https://down-my.img.susercontent.com/file/840ed582dd9c136bd2811ca131953394
sony|https://down-my.img.susercontent.com/file/d991a93fd8b1e88824d8acd473e11e1f
baseus|https://down-my.img.susercontent.com/file/my-50009109-81ccb620dbdf8c07f574098280db21fb
edifier|https://down-my.img.susercontent.com/file/a7ef69fadee62e36fb68fb45546853dc
maimo|https://down-my.img.susercontent.com/file/9e96ba217677f556717ecb1f63f433da
realme|https://down-my.img.susercontent.com/file/7b633b67941857292addd2c7e61a34f0
amazfit|https://down-my.img.susercontent.com/file/my-11134258-7ras8-m8lfc4ur3mt035
aukey|https://down-my.img.susercontent.com/file/my-50009109-873a9f8a66678be05acc73ccdadc9f59
URLS

echo "Done. Logos saved to $DIR"
