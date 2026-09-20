import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import test from 'node:test';

const catalogue = JSON.parse(
  await readFile(new URL('../data/projects.json', import.meta.url), 'utf8'),
);

test('catalogue metadata is explicit', () => {
  assert.equal(catalogue.schemaVersion, 2);
  assert.match(catalogue.capturedAt, /^\d{4}-\d{2}-\d{2}$/);
  assert.ok(catalogue.projects.length >= 12);
});

test('every project keeps repository and fixed-commit evidence links', () => {
  const ids = new Set();
  for (const project of catalogue.projects) {
    assert.ok(!ids.has(project.id), `duplicate id: ${project.id}`);
    ids.add(project.id);
    assert.match(project.repoUrl, /^https:\/\/github\.com\/[^/]+\/[^/]+\/?$/);
    assert.match(project.evidenceUrl, /^https:\/\/github\.com\/[^/]+\/[^/]+\/(blob|tree)\/[a-f0-9]{40}\//);
    assert.match(project.xUrl, /^https:\/\/x\.com\/[^/]+\/status\/\d+$/);
    assert.ok(project.views >= 10_000);
    assert.ok(project.summary.en && project.summary.zh);
    assert.ok(project.decision.en && project.decision.zh);
    assert.equal(project.verification, 'source-reviewed');
    assert.equal(project.runtimeVerified, false);
  }
});

test('catalogue covers multiple practical patterns', () => {
  assert.ok(new Set(catalogue.projects.map((project) => project.category)).size >= 6);
});
