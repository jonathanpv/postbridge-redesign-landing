import { readFileSync, writeFileSync } from 'fs';

/**
 * Script to fix SVG ID conflicts by generating unique IDs using React's useId() hook
 * This prevents iOS Safari rendering issues when multiple SVG components are on the same page
 */

function fixSVGIds(filePath, componentName) {
  console.log(`Processing ${filePath}...`);

  const content = readFileSync(filePath, 'utf-8');

  // Extract all unique IDs from the SVG
  const idMatches = content.matchAll(/id="([^"]+)"/g);
  const uniqueIds = new Set();
  for (const match of idMatches) {
    uniqueIds.add(match[1]);
  }

  console.log(`Found ${uniqueIds.size} unique IDs:`, Array.from(uniqueIds).sort());

  // Convert arrow function to regular function to use hooks
  let newContent = content.replace(
    /export const (\w+) = \(props: SVGProps<SVGSVGElement>\) => \(/,
    'export const $1 = (props: SVGProps<SVGSVGElement>) => {\n  const baseId = React.useId();\n  const uid = (id: string) => `${baseId}-${id}`;\n  return ('
  );

  // Add closing brace before the final closing parenthesis
  newContent = newContent.replace(/\)\s*$/, '  );\n}');

  // Replace all id="..." and url(#...) references with dynamic versions
  for (const id of uniqueIds) {
    // Replace id definitions
    newContent = newContent.replace(
      new RegExp(`id="${id}"`, 'g'),
      `id={uid("${id}")}`
    );

    // Replace url(#...) references
    newContent = newContent.replace(
      new RegExp(`url\\(#${id}\\)`, 'g'),
      `url(#\${uid("${id}")})`
    );
  }

  // Wrap string attributes containing template literals with {}
  newContent = newContent.replace(
    /(clipPath|fill|stroke|filter)="([^"]*\$\{[^}]+\}[^"]*)"/g,
    '$1={`$2`}'
  );

  writeFileSync(filePath, newContent, 'utf-8');
  console.log(`✓ Fixed ${filePath}`);
}

// Process both files
const files = [
  ['components/Illustration.tsx', 'SchedulingSectionVisual'],
  ['components/ContentManagementSectionVisual.tsx', 'ContentManagementSectionVisual']
];

for (const [file, componentName] of files) {
  fixSVGIds(file, componentName);
}

console.log('\n✓ All files processed successfully!');
