/**
 * Central registry of all JSON tools shown on the homepage.
 * Add new tools here once their pages exist under src/pages/tools/.
 */

export interface Tool {
  slug: string;
  title: string;
  description: string;
  href: string;
  icon: string; // raw SVG markup
  available: boolean;
}

const iconClass = 'h-5 w-5';

const icons = {
  format: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${iconClass}"><path d="M4 6h16M4 12h10M4 18h16"/></svg>`,
  minify: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${iconClass}"><path d="M21 8L3 8M21 12H3M21 16H3"/><path d="M9 4l3 3 3-3M9 20l3-3 3 3"/></svg>`,
  check: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${iconClass}"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>`,
  yaml: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${iconClass}"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="9" y1="13" x2="15" y2="13"/><line x1="9" y1="17" x2="13" y2="17"/></svg>`,
  csv: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${iconClass}"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/></svg>`,
  query: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${iconClass}"><circle cx="11" cy="11" r="7"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>`,
  diff: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="${iconClass}"><path d="M6 3v12"/><circle cx="6" cy="18" r="3"/><path d="M18 9a9 9 0 0 1-9 9"/><circle cx="18" cy="6" r="3"/></svg>`,
};

export const tools: Tool[] = [
  {
    slug: 'json-formatter',
    title: 'JSON Formatter',
    description: 'Pretty-print JSON with configurable indentation. Spot syntax errors instantly.',
    href: '/tools/json-formatter',
    icon: icons.format,
    available: true,
  },
  {
    slug: 'json-minifier',
    title: 'JSON Minifier',
    description: 'Strip whitespace and comments to produce the smallest valid JSON payload.',
    href: '/tools/json-minifier',
    icon: icons.minify,
    available: true,
  },
  {
    slug: 'json-validator',
    title: 'JSON Validator',
    description: 'Validate JSON against the spec, with line/column error reporting.',
    href: '/tools/json-validator',
    icon: icons.check,
    available: true,
  },
  {
    slug: 'json-to-yaml',
    title: 'JSON to YAML',
    description: 'Convert JSON documents to YAML — and back — with proper escaping.',
    href: '/tools/json-to-yaml',
    icon: icons.yaml,
    available: true,
  },
  {
    slug: 'json-to-csv',
    title: 'JSON to CSV',
    description: 'Flatten arrays of objects into CSV with auto-detected headers.',
    href: '/tools/json-to-csv',
    icon: icons.csv,
    available: true,
  },
  {
    slug: 'json-path-query',
    title: 'JSON Path Query',
    description: 'Extract values from JSON with JSONPath expressions, live preview.',
    href: '/tools/json-path-query',
    icon: icons.query,
    available: true,
  },
  {
    slug: 'json-diff',
    title: 'JSON Diff',
    description: 'Compare two JSON documents structurally and highlight every change.',
    href: '/tools/json-diff',
    icon: icons.diff,
    available: true,
  },
];
