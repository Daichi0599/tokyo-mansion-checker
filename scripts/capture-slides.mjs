import puppeteer from 'puppeteer-core';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const SLIDE_URL = 'http://localhost:3000/slides/slide.html';
const OUT_DIR = path.join(__dirname, '..', 'public', 'slides', 'screenshots');
const TOTAL_SLIDES = 5;
const WIDTH = 844;
const HEIGHT = 844;

const browser = await puppeteer.launch({
  executablePath: CHROME_PATH,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
  defaultViewport: { width: WIDTH, height: HEIGHT },
});

const page = await browser.newPage();
await page.setViewport({ width: WIDTH, height: HEIGHT });
await page.goto(SLIDE_URL, { waitUntil: 'networkidle0' });

// Hide nav buttons
await page.evaluate(() => {
  const nav = document.querySelector('.nav');
  if (nav) nav.style.display = 'none';
});

import { mkdirSync } from 'fs';
mkdirSync(OUT_DIR, { recursive: true });

for (let i = 0; i < TOTAL_SLIDES; i++) {
  await page.evaluate((idx) => show(idx), i);
  await new Promise(r => setTimeout(r, 300));
  const outPath = path.join(OUT_DIR, `slide-x-${i + 1}.png`);
  await page.screenshot({ path: outPath, type: 'png' });
  console.log(`Saved: ${outPath}`);
}

await browser.close();
console.log('Done!');
