import { readFile, writeFile } from 'node:fs/promises';
import { resolve } from 'node:path';

const output = process.argv[2];
if (!output) throw new Error('Usage: node scripts/export-website-data.mjs <output-file>');

const catalogue = JSON.parse(
  await readFile(new URL('../data/projects.json', import.meta.url), 'utf8'),
);

const source = `// Generated from BeatAPI/awesome-jev data/projects.json. Do not edit project rows by hand.

export type JevProjectCategory =
  | 'agent-workflows'
  | 'developer-tools'
  | 'search-data'
  | 'open-models'
  | 'interfaces'
  | 'safety-review'
  | 'browser-computer-use'
  | 'sdk-integrations'
  | 'routing-optimization'
  | 'domain-tools';

export type JevProject = {
  id: string;
  name: string;
  owner: string;
  repoUrl: string;
  evidenceUrl: string;
  modelUrl?: string;
  source: { type: 'x' | 'github' | 'huggingface'; label: string; url: string; author?: string; views?: number };
  category: JevProjectCategory;
  language: string;
  license: string;
  starsAtCapture: number;
  summary: { en: string; zh: string };
  decision: { en: string; zh: string };
  verification: 'source-reviewed';
  runtimeVerified: false;
};

export const JEV_PROJECTS_CAPTURED_AT = '${catalogue.capturedAt}';
export const JEV_PROJECTS_REPOSITORY = 'https://github.com/BeatAPI/awesome-jev';

export const jevProjects = ${JSON.stringify(catalogue.projects, null, 2)} as const satisfies readonly JevProject[];
`;

await writeFile(resolve(output), source);
console.log(`Exported ${catalogue.projects.length} projects to ${resolve(output)}`);
