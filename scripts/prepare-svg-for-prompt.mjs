#!/usr/bin/env node

import fs from 'fs/promises';
import path from 'path';

/**
 * Extracts SVG path data and replaces it with placeholders.
 * @param {string} svgContent The raw SVG content.
 * @returns {{processedContent: string, replacements: Record<string, string>}}
 */
function processSvg(svgContent) {
    const replacements = {};
    let count = 0;
    const processedContent = svgContent.replace(/d="([^"]*)"/g, (match, pathData) => {
        if (pathData.trim() === '') {
            return match; // Keep empty d="" attributes as they are
        }
        const placeholder = `{{SVG_WORKLOAD_PATH_ID_${count++}}}`;
        replacements[placeholder] = pathData;
        return `d="${placeholder}"`;
    });
    return { processedContent, replacements };
}

/**
 * Restores original SVG path data from placeholders.
 * @param {string} contentWithPlaceholders The content (SVG or React component) with placeholders.
 * @param {Record<string, string>} replacements The map of placeholders to original path data.
 * @returns {string}
 */
function restoreSvg(contentWithPlaceholders, replacements) {
    let restoredContent = contentWithPlaceholders;
    for (const [placeholder, originalPath] of Object.entries(replacements)) {
        // For d="..." attributes
        const placeholderInQuotes = `"${placeholder}"`;
        // For d={{...}} style attributes in JSX-like strings
        const placeholderInBraces = `{${placeholder}}`;
        
        restoredContent = restoredContent.replace(placeholderInQuotes, `"${originalPath}"`);
        restoredContent = restoredContent.replace(placeholderInBraces, `"${originalPath}"`);
    }
    return restoredContent;
}


async function main() {
    const args = process.argv.slice(2);
    const command = args[0];

    if (command === 'process') {
        const [inputFile, outputSvgFile, outputMapFile] = args.slice(1);
        if (!inputFile || !outputSvgFile || !outputMapFile) {
            console.error('Usage: node prepare-svg-for-prompt.mjs process <input-file> <output-svg-file> <output-map-file>');
            process.exit(1);
        }

        try {
            const svgContent = await fs.readFile(inputFile, 'utf-8');
            const { processedContent, replacements } = processSvg(svgContent);

            await fs.writeFile(outputSvgFile, processedContent);
            await fs.writeFile(outputMapFile, JSON.stringify(replacements, null, 2));

            console.log(`Processed SVG: ${inputFile}`);
            console.log(`  -> Placeholder SVG created: ${outputSvgFile}`);
            console.log(`  -> Path map created: ${outputMapFile}`);
        } catch (error) {
            console.error(`Error processing ${inputFile}:`, error);
            process.exit(1);
        }
    } else if (command === 'restore') {
        const [inputFile, mapFile, outputFile] = args.slice(1);
        if (!inputFile || !mapFile || !outputFile) {
            console.error('Usage: node prepare-svg-for-prompt.mjs restore <input-file> <map-file> <output-file>');
            process.exit(1);
        }

        try {
            const contentWithPlaceholders = await fs.readFile(inputFile, 'utf-8');
            const replacements = JSON.parse(await fs.readFile(mapFile, 'utf-8'));
            const restoredContent = restoreSvg(contentWithPlaceholders, replacements);
            await fs.writeFile(outputFile, restoredContent);
            console.log(`Restored content from ${inputFile} to ${outputFile}`);
        } catch (error) {
            console.error(`Error restoring ${inputFile}:`, error);
            process.exit(1);
        }
    } else {
        console.error('Unknown command. Available commands: "process", "restore"');
        console.log('Usage for process: node prepare-svg-for-prompt.mjs process <input-file> <output-svg-file> <output-map-file>');
        console.log('Usage for restore: node prepare-svg-for-prompt.mjs restore <input-file> <map-file> <output-file>');
        process.exit(1);
    }
}

// Check if the script is being run directly via node
const currentFileUrl = import.meta.url;
const scriptPath = path.resolve(process.argv[1]);
const scriptUrl = `file://${scriptPath}`;

if (currentFileUrl === scriptUrl) {
    main();
}


export { processSvg, restoreSvg };
