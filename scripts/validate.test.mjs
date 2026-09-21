import assert from 'node:assert/strict';
import { access, readFile } from 'node:fs/promises';
import test from 'node:test';

const catalogue = JSON.parse(
  await readFile(new URL('../data/projects.json', import.meta.url), 'utf8'),
);

test('catalogue metadata is explicit', () => {
  assert.equal(catalogue.schemaVersion, 3);
  assert.match(catalogue.capturedAt, /^\d{4}-\d{2}-\d{2}$/);
  assert.equal(catalogue.projects.length, 125);
});

test('every project keeps repository and fixed-commit evidence links', () => {
  const ids = new Set();
  for (const project of catalogue.projects) {
    assert.ok(!ids.has(project.id), `duplicate id: ${project.id}`);
    ids.add(project.id);
    assert.match(project.repoUrl, /^https:\/\/github\.com\/[^/]+\/[^/]+\/?$/);
    assert.match(project.evidenceUrl, /^https:\/\/github\.com\/[^/]+\/[^/]+\/(blob|tree)\/[a-f0-9]{40}\//);
    assert.ok(['x', 'github', 'huggingface'].includes(project.source.type));
    assert.match(project.source.url, /^https:\/\//);
    assert.ok(project.source.label);
    if (project.source.type === 'x') {
      assert.match(project.source.url, /^https:\/\/x\.com\/[^/]+\/status\/\d+$/);
      assert.ok(project.source.views >= 10_000);
    }
    assert.ok(project.summary.en && project.summary.zh && project.summary.ja);
    assert.ok(project.decision.en && project.decision.zh && project.decision.ja);
    assert.doesNotMatch(
      `${project.summary.ja}\n${project.decision.ja}`,
      /__[A-Z_]+__|入力された(?:回答|質問|結果| JEV 質問|値)|推論の労力|エフォート| 型付きの/,
    );
    assert.equal(project.verification, 'source-reviewed');
    assert.equal(project.runtimeVerified, false);
  }
});

test('catalogue covers multiple practical patterns', () => {
  assert.ok(new Set(catalogue.projects.map((project) => project.category)).size >= 9);
  assert.equal(catalogue.projects.filter((project) => project.starsAtCapture >= 1_000).length, 34);
  for (const required of ['jev-ultrafast', 'laya', 'jegrep']) {
    assert.ok(catalogue.projects.some((project) => project.id === required), `missing ${required}`);
  }
});

test('README identity and project-owned cover stay present', async () => {
  const readme = await readFile(new URL('../README.md', import.meta.url), 'utf8');
  const chineseReadme = await readFile(new URL('../README.zh-CN.md', import.meta.url), 'utf8');
  const japaneseReadme = await readFile(new URL('../README.ja.md', import.meta.url), 'utf8');
  assert.match(readme, /Awesome JEV<\/h1>/);
  assert.match(readme, /assets\/readme\/cover\.webp/);
  assert.match(readme, /Powered by BeatAPI|BeatAPI/);
  assert.match(readme, /https:\/\/beatapi\.io\/awesome-jev/);
  assert.match(chineseReadme, /https:\/\/beatapi\.io\/zh\/awesome-jev/);
  assert.match(japaneseReadme, /https:\/\/beatapi\.io\/ja\/awesome-jev/);
  assert.match(readme, /<h2 align="center">At a glance<\/h2>/);
  assert.match(chineseReadme, /<h2 align="center">当前规模<\/h2>/);
  assert.match(japaneseReadme, /<h2 align="center">概要<\/h2>/);
  for (const localizedReadme of [readme, chineseReadme, japaneseReadme]) {
    assert.match(localizedReadme, /<div align="center">\s*<table>/);
    assert.match(localizedReadme, /<td align="center"><strong>125<\/strong><\/td>/);
    assert.match(localizedReadme, /\/v1\/systemone/);
    assert.match(localizedReadme, /jev-1\.13/);
  }
  for (const localizedReadme of [readme, chineseReadme, japaneseReadme]) {
    assert.equal(
      [...localizedReadme.matchAll(/opengraph\.githubassets\.com\/awesome-jev-20260920\//g)].length,
      10,
    );
  }
  for (const project of catalogue.projects) {
    assert.ok(readme.includes(project.repoUrl), `README missing ${project.id}`);
    assert.ok(chineseReadme.includes(project.repoUrl), `Chinese README missing ${project.id}`);
    assert.ok(japaneseReadme.includes(project.repoUrl), `Japanese README missing ${project.id}`);
  }
  await access(new URL('../assets/readme/cover.webp', import.meta.url));
  await access(new URL('../assets/readme/cover.png', import.meta.url));
});
