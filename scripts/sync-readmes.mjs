import { readFile, writeFile } from 'node:fs/promises';

const catalogue = JSON.parse(await readFile(new URL('../data/projects.json', import.meta.url), 'utf8'));
const projects = [...catalogue.projects].sort((a, b) => b.starsAtCapture - a.starsAtCapture || a.name.localeCompare(b.name));
const over1k = projects.filter((project) => project.starsAtCapture >= 1_000).length;
const categoryCounts = new Map();
for (const project of projects) categoryCounts.set(project.category, (categoryCounts.get(project.category) ?? 0) + 1);

const categories = [
  ['browser-computer-use', ['Browser & computer use', '浏览器与电脑操作', 'ブラウザ・PC 操作']],
  ['sdk-integrations', ['SDK integrations', 'SDK 与框架集成', 'SDK・フレームワーク']],
  ['routing-optimization', ['Routing & optimization', '路由与优化', 'ルーティング']],
  ['open-models', ['Open models', '开放模型', 'オープンモデル']],
  ['search-data', ['Search & data', '搜索与数据', '検索・データ']],
  ['safety-review', ['Safety & review', '安全与审查', '安全性・レビュー']],
  ['agent-workflows', ['Agent workflows', 'Agent 工作流', 'Agent ワークフロー']],
  ['interfaces', ['Interfaces & automation', '界面与自动化', 'UI・自動化']],
  ['developer-tools', ['Developer tools', '开发者工具', '開発者ツール']],
  ['domain-tools', ['Domain tools', '垂直工具', '業務特化ツール']],
];

const configs = [
  {
    file: 'README.md', index: 0, allHeading: `All ${projects.length} projects`, starWord: 'stars', lang: 'en', evidence: 'Source', back: '↑ Back to categories',
    strong: 'A source-reviewed gallery of JEV-related projects with 50+ GitHub stars — integrations, tools, open models, experiments, and ecosystem resources.',
    policy: 'We list source-reviewed JEV-related repositories at or above 50 stars. See where JEV chooses, scores, routes, or filters—while application code keeps control of execution.',
  },
  {
    file: 'README.zh-CN.md', index: 1, allHeading: `全部 ${projects.length} 个项目`, starWord: 'Star', lang: 'zh', evidence: '源码证据', back: '↑ 返回分类',
    strong: '只整理 50+ Star、经过源码核对的 JEV 相关项目、集成、工具、开放模型、实验与生态资源。',
    policy: '收录门槛为 GitHub 50 Star 及以上。看看 JEV 如何完成选择、评分、路由与过滤，同时由应用代码掌控执行。',
  },
  {
    file: 'README.ja.md', index: 2, allHeading: `全 ${projects.length} プロジェクト`, starWord: 'Star', lang: 'ja', evidence: '根拠', back: '↑ カテゴリへ戻る',
    strong: 'GitHub 50★以上・ソース確認済みの JEV 関連プロジェクト、連携、ツール、オープンモデル、実験、エコシステム資料をまとめています。',
    policy: '掲載基準は 50 stars 以上です。JEV が選択・採点・ルーティング・フィルタを担い、実行制御はアプリ側に残る事例を紹介します。',
  },
];

for (const config of configs) {
  const url = new URL(`../${config.file}`, import.meta.url);
  let text = await readFile(url, 'utf8');
  text = text.replace(/<a href="#(?:all|全部|全)[^"]+">[^<]+<\/a>/, `<a href="#all-projects">${config.allHeading}</a>`);
  text = text.replace(/<p align="center"><strong>[^<]+<\/strong><\/p>/, `<p align="center"><strong>${config.strong}</strong></p>`);
  text = text.replace(/<p align="center">(?:We only list|We list|收录门槛|掲載基準|掲載の中心)[^<]+<\/p>/, `<p align="center">${config.policy}</p>`);
  text = text.replace(/(<tbody>\s*<tr>\s*<td align="center"><strong>)\d+(<\/strong><\/td>\s*<td align="center"><strong>)\d+(<\/strong><\/td>\s*<td align="center"><strong>)\d+(<\/strong><\/td>\s*<td align="center"><strong>)\d{4}-\d{2}-\d{2}/, `$1${projects.length}$2${over1k}$3${categoryCounts.size}$4${catalogue.capturedAt}`);

  const categoryMarkup = `<p align="center">\n${categories.map(([key, labels], i) => `  <a href="#${key}"><strong>${labels[config.index]} · ${categoryCounts.get(key) ?? 0}</strong></a>${i === categories.length - 1 ? '' : i === 4 ? '<br>' : ' ·'}`).join('\n')}\n</p>`;
  text = text.replace(/(?:<a id="categories"><\/a>\s*)?<h2 align="center">(?:Browse by category|按分类浏览|カテゴリから探す)<\/h2>\s*<p align="center">[\s\S]*?<\/p>/, (block) => `<a id="categories"></a>\n${block.match(/<h2[^\n]+/)[0]}\n\n${categoryMarkup}`);

  const compact = (n) => (n >= 1_000 ? `${(n / 1_000).toFixed(1)}K` : String(n));
  const entry = (project) => `- **[${project.name}](${project.repoUrl})** · ${compact(project.starsAtCapture)} ${config.starWord} — ${project.summary[config.lang]} [${config.evidence}](${project.evidenceUrl})`;
  const sections = categories.map(([key, labels]) => {
    const group = projects.filter((project) => project.category === key);
    return `<a id="${key}"></a>\n### ${labels[config.index]} (${group.length})\n\n${group.map(entry).join('\n')}\n\n<sub><a href="#categories">${config.back}</a></sub>`;
  }).join('\n\n');
  const replacement = `<a id="all-projects"></a>\n## ${config.allHeading}\n\n${sections}\n\n## BeatAPI`;
  text = text.replace(/(?:<a id="all-projects"><\/a>\s*)?## (?:All \d+ projects|全部 \d+ 个项目|全 \d+ プロジェクト)[\s\S]*?\n## BeatAPI/, replacement);
  text = text.replace(/\n<!-- catalogue links -->[\s\S]*$/, '');
  await writeFile(url, text);
}

console.log(`Synced ${projects.length} projects across ${configs.length} READMEs.`);
