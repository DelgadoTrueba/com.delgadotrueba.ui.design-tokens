import StyleDictionary from 'style-dictionary';

const { OUTPUT_BASE_FILENAME } = process.env;

StyleDictionary.registerAction({
    name: 'bundle_css',
    do: async function (_, config) {
        const { buildPath } = config;
        const light = JSON.parse(
            fs.readFileSync(buildPath + OUTPUT_BASE_FILENAME + '.light.json')
        );
        const darkOnly = JSON.parse(
            fs.readFileSync(buildPath + OUTPUT_BASE_FILENAME + '.dark.json')
        );
        const lightOnly = pick(light, Object.keys(darkOnly));
        const data = `:root {
  ${printVariables(light)}
  }
  
  [data-mode="dark"] {
  ${printVariables(darkOnly)}
  }
  
  @media (prefers-color-scheme: dark) {
    :root {
  ${printVariables(darkOnly, '    ')}
    }
  
    [data-mode="light"] {
  ${printVariables(lightOnly, '    ')}
    }
  }`;
        await fs.writeFile(buildPath + OUTPUT_BASE_FILENAME + '.all.css', data);
    },
    undo: async function () {
        //
    },
});

function printVariables(json, indentation = '  ') {
    return Object.keys(json)
        .map((key) => {
            const value = json[key];
            return `${indentation}--${key}: ${value};`;
        })
        .join('\n');
}

