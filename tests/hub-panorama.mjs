import assert from 'node:assert/strict';
import { readFile, stat } from 'node:fs/promises';
const [scene,views,styles,index,sw,pkg]=await Promise.all([
  readFile(new URL('../public/js/hub-scene.js',import.meta.url),'utf8'),
  readFile(new URL('../public/js/views.js',import.meta.url),'utf8'),
  readFile(new URL('../public/styles.css',import.meta.url),'utf8'),
  readFile(new URL('../public/index.html',import.meta.url),'utf8'),
  readFile(new URL('../public/sw.js',import.meta.url),'utf8'),
  readFile(new URL('../package.json',import.meta.url),'utf8'),
]);
const asset=await stat(new URL('../public/assets/hub/hub-main-360.png',import.meta.url));
assert.ok(asset.size>100000,'Hub panorama is missing or empty');
assert.match(scene,/hub-main-360\.png/);
assert.match(scene,/portalSpecs/);
assert.match(scene,/slug:'sod'/);
assert.match(scene,/slug:'library'/);
assert.match(scene,/slug:'seeds'/);
assert.match(scene,/slug:'observatory'/);
assert.doesNotMatch(scene,/drawOrb\(/,'The source image already contains the central core and must not be duplicated');
assert.match(views,/Hub panorámico SØD/);
assert.match(views,/hub-main-360\.png/);
assert.match(styles,/SØD HUB PANORAMA v3\.0\.2/);
assert.match(index,/startup-fallback/);
assert.match(sw,/sod-shell-v3\.0\.2/);
assert.match(pkg,/"version": "3\.0\.2"/);
console.log(`Hub panorama tests passed: ${(asset.size/1024/1024).toFixed(1)} MB local source, four aligned portals, startup recovery shell`);
