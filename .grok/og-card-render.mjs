#!/usr/bin/env node
import { readFileSync, writeFileSync } from "node:fs";
import { chromium } from "playwright";

const bgPath = "/workspace/.grok/og-bg.jpg";
const outPng = "/workspace/.grok/og-card-raw.png";
const bgB64 = readFileSync(bgPath).toString("base64");
const fontB64 = readFileSync(
  "/usr/share/fonts/truetype/liberation/LiberationSansNarrow-Bold.ttf",
).toString("base64");

const html = `<!DOCTYPE html>
<html lang="hu">
<head>
<meta charset="utf-8">
<style>
  @font-face {
    font-family: "Lockup";
    src: url("data:font/ttf;base64,${fontB64}") format("truetype");
    font-weight: 700;
    font-style: normal;
  }
  html, body {
    margin: 0;
    padding: 0;
    width: 1200px;
    height: 630px;
    overflow: hidden;
    background: #090a0c;
  }
  .card {
    position: relative;
    width: 1200px;
    height: 630px;
  }
  .bg {
    position: absolute;
    inset: 0;
    background: #090a0c url("data:image/jpeg;base64,${bgB64}") center 46% / cover no-repeat;
  }
  .veil {
    position: absolute;
    inset: 0;
    background:
      radial-gradient(ellipse 62% 58% at 50% 48%, rgba(9,10,12,0.28) 0%, rgba(9,10,12,0.62) 100%),
      linear-gradient(180deg, rgba(9,10,12,0.22) 0%, rgba(9,10,12,0.12) 38%, rgba(9,10,12,0.5) 100%);
  }
  .lockup {
    position: absolute;
    inset: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #ece8e1;
    font-family: "Lockup", "Liberation Sans Narrow", "DejaVu Sans", sans-serif;
    font-weight: 700;
  }
  .mark {
    width: 56px;
    height: 56px;
    margin-bottom: 22px;
    filter: drop-shadow(0 2px 10px rgba(0,0,0,0.65));
  }
  h1 {
    margin: 0;
    padding: 0 180px;
    font-size: 76px;
    font-weight: 700;
    line-height: 1.02;
    letter-spacing: 0.045em;
    text-shadow:
      0 2px 18px rgba(0,0,0,0.9),
      0 0 36px rgba(196,90,42,0.22);
  }
  h1 .line {
    display: block;
  }
  h1 .line2 {
    margin-top: 6px;
    font-size: 70px;
    letter-spacing: 0.07em;
  }
  .rule {
    width: 112px;
    height: 3px;
    margin-top: 24px;
    background: #c45a2a;
    box-shadow: 0 0 14px rgba(196,90,42,0.85);
  }
</style>
</head>
<body>
  <div class="card">
    <div class="bg"></div>
    <div class="veil"></div>
    <div class="lockup">
      <svg class="mark" viewBox="0 0 32 32" aria-hidden="true">
        <rect width="32" height="32" rx="7" fill="#161a20"/>
        <rect x="4" y="6" width="24" height="8" rx="4" fill="#9aa3ad"/>
        <rect x="2" y="15" width="28" height="2.2" rx="1" fill="#c45a2a"/>
        <rect x="4" y="18" width="24" height="8" rx="4" fill="#9aa3ad"/>
      </svg>
      <h1>
        <span class="line">Lemez- és</span>
        <span class="line line2">csőhengerlés</span>
      </h1>
      <div class="rule"></div>
    </div>
  </div>
</body>
</html>`;

writeFileSync("/workspace/.grok/og-card.html", html);

const browser = await chromium.launch({
  headless: true,
  args: ["--no-sandbox", "--disable-dev-shm-usage"],
});
try {
  const page = await browser.newPage({
    viewport: { width: 1200, height: 630 },
    deviceScaleFactor: 2,
  });
  await page.setContent(html, { waitUntil: "load" });
  await page.evaluate(() => document.fonts.ready);
  await page.waitForTimeout(200);
  await page.screenshot({ path: outPng, type: "png", omitBackground: false });
  console.log("wrote", outPng);
} finally {
  await browser.close();
}
