export function groupByPrefix(data) {
    const output = {};
    Object.keys(data).forEach(key => {
        // Extraemos la parte del prefijo principal hasta el primer guion
        const [prefix, ...rest] = key.split("-");
        // Unimos de nuevo las partes que pueden haber sido divididas en exceso
        const suffix = rest.join("-");

        if (!output[prefix]) {
            output[prefix] = {};
        }

        // Dividimos las claves siguientes para crear subniveles si es necesario
        let currentLevel = output[prefix];
        const parts = suffix.split("-");
        const lastPartIndex = parts.length - 1;

        parts.forEach((part, index) => {
            if (index === lastPartIndex) {
                // Si es la última parte, asignamos el valor
                currentLevel[part] = data[key];
            } else {
                // Si no es la última parte y ya existe como un string, lo convertimos en un objeto
                if (typeof currentLevel[part] === 'string') {
                    const temp = currentLevel[part];
                    currentLevel[part] = {};
                    currentLevel[part]['standard'] = temp; // Asumimos 'standard' como la clave preexistente
                }

                // Creamos un subobjeto si aún no existe
                if (!currentLevel[part]) {
                    currentLevel[part] = {};
                }
                currentLevel = currentLevel[part];
            }
        });
    });
    return output;
}
import { Meta, ColorPalette, ColorItem } from '@storybook/addon-docs';

export function flattenJSON(data, prefix = '') {
    const result = [];
    Object.keys(data).forEach(key => {
        const value = data[key];
        const newKey = prefix ? `${prefix}-${key}` : key;
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            // Si el valor es un objeto y no es un array, continúa la recursión
            if (Object.keys(value).length === 0) {
                // Si es un objeto vacío, se agrega así
                result.push({ key: newKey, value: '{}' });
            } else {
                result.push(...flattenJSON(value, newKey));
            }
        } else {
            // Agrega el par clave-valor al resultado cuando llega a un valor final
            result.push({ key: newKey, value });
        }
    });
    return result;
}


export function createGroupedJSON(data, prefix = '') {
    let result = {};
    Object.keys(data).forEach(key => {
        const value = data[key];
        const groupKey = prefix ? `${prefix}-${key}` : key;
        if (typeof value === 'object' && value !== null && !Array.isArray(value)) {
            // Si el valor es un objeto, realiza una llamada recursiva y agrega el resultado
            result[groupKey] = createGroupedJSON(value, groupKey);
        } else {
            // Si es un valor final, agrega el valor al objeto resultado
            result[groupKey] = value;
        }
    });
    return result;
}

export const renderContent = (obj, keyPrefix = '') => {
    console.log(obj)
    return Object.entries(obj).map(([key, value]) => {
        const fullKey = keyPrefix ? `${keyPrefix}-${key}` : key;
        if (typeof value === 'object' && value !== null && !Array.isArray(value) && Object.keys(value).length > 0) {
            // Objeto con más objetos dentro
            return (
                <div key={fullKey}>
                    <h3>{fullKey}</h3>
                    {renderContent(value, fullKey)}
                </div>
            );
        } else {
            // Valor final, utiliza ColorItem para renderizar
            return (
                <ColorItem
                    key={fullKey}
                    title={fullKey}
                    subtitle="Coral" // Subtítulo estático, cambiar según necesidad
                    colors={{ value: value }}
                />
            );
        }
    });
};

export const groupColorsByPrefix = (colors) => {
    const grouped = {};
    Object.entries(colors).forEach(([key, value]) => {
      const prefix = key.split('-').slice(0, -1).join('-');
      if (!grouped[prefix]) {
        grouped[prefix] = {};
      }
      grouped[prefix][key] = value;
    });
    return grouped;
  };