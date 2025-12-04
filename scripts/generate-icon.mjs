
import fs from 'fs/promises';
import path from 'path';

function toPascalCase(str) {
  return (' ' + str).toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (match, chr) => {
    return chr.toUpperCase();
  });
}

function figmaRGBtoCSS(color) {
    if (!color) return 'none';
    const { r, g, b, a } = color;
    if (a === 1) {
        return `rgb(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)})`;
    }
    return `rgba(${Math.round(r * 255)}, ${Math.round(g * 255)}, ${Math.round(b * 255)}, ${a})`;
}


async function generateComponent(figmaObjectPath, componentName) {
  try {
    const data = await fs.readFile(figmaObjectPath, 'utf8');
    const figmaObject = JSON.parse(data);

    const svgWidth = Math.round(figmaObject.absoluteBoundingBox.width);
    const svgHeight = Math.round(figmaObject.absoluteBoundingBox.height);

    let allDefsContent = '';
    let allPathElements = '';

    const processVector = (vectorObject) => {
        const { name, fillGeometry, fills } = vectorObject;
        if (!fillGeometry || fillGeometry.length === 0) return;

        const pathData = fillGeometry[0].data;
        const fill = fills && fills.length > 0 ? fills[0] : null;

        let fillContent = 'fill="none"';
        let defsForThisVector = '';

        if (fill) {
            if (fill.type === 'SOLID') {
                fillContent = `fill="${figmaRGBtoCSS(fill.color)}"`;
            } else if (fill.type === 'GRADIENT_LINEAR') {
                const gradientId = `${name.replace(/\s+/g, '-')}-gradient-${vectorObject.id.replace(':', '-')}`;
                const stops = fill.gradientStops.map(stop => 
                    `<stop offset="${stop.position}" stop-color="${figmaRGBtoCSS(stop.color)}" />`
                ).join('\n              ');
                
                let matrix = '';
                if (fill.gradientTransform) {
                    const transform = fill.gradientTransform;
                    matrix = `gradientTransform="matrix(${transform[0][0]}, ${transform[1][0]}, ${transform[0][1]}, ${transform[1][1]}, ${transform[0][2]}, ${transform[1][2]})"`;
                }

                defsForThisVector = `
            <linearGradient id="${gradientId}" ${matrix}>
                ${stops}
            </linearGradient>
                `;
                fillContent = `fill="url(#${gradientId})"`;
            }
        }
        allDefsContent += defsForThisVector;
        allPathElements += `
      <path
        d="${pathData}"
        ${fillContent}
      />
        `;
    };

    if (figmaObject.type === 'VECTOR') {
      processVector(figmaObject);
    } else if (figmaObject.type === 'FRAME' && figmaObject.children) {
      figmaObject.children.forEach(child => {
        if (child.type === 'VECTOR') {
          processVector(child);
        }
      });
    }


    const componentString = `
import React from 'react';

interface IconProps extends React.SVGProps<SVGSVGElement> {
  // You can add any custom props here if needed
}

const ${componentName}: React.FC<IconProps> = (props) => {
  return (
    <svg
      width="${svgWidth}"
      height="${svgHeight}"
      viewBox="0 0 ${svgWidth} ${svgHeight}"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      ${allDefsContent ? `<defs>${allDefsContent}</defs>` : ''}
      ${allPathElements}
    </svg>
  );
};

export default ${componentName};
`;

    const outputDir = path.resolve(process.cwd(), 'components', 'icons');
    await fs.mkdir(outputDir, { recursive: true });
    const outputPath = path.resolve(outputDir, `${componentName}.tsx`);
    await fs.writeFile(outputPath, componentString.trim());
    console.log(`Component ${componentName} created at ${outputPath}`);
    return componentName;

  } catch (error) {
    console.error('Error generating component:', error);
  }
}


async function main() {
    const args = process.argv.slice(2); // Get arguments passed after 'node script.mjs'
    const figmaObjectFile = args[0];
    const componentName = args[1];

    if (!figmaObjectFile || !componentName) {
        console.error('Usage: node generate-icon.mjs <figmaObjectFile> <componentName>');
        process.exit(1);
    }
    
    await generateComponent(figmaObjectFile, componentName);
}

main();
