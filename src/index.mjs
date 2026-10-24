import assert from 'node:assert/strict';
import { parseXml, buildXml, getPath, ensureArray } from '@x12i/xml-api-helper';

const document = parseXml('<response><item><name>Ada</name></item></response>');
assert.equal(getPath(document, 'response.item.name'), 'Ada');
const items = ensureArray(getPath(document, 'response.item'));
assert.equal(items.length, 1);
console.log({ name: items[0].name, xml: buildXml(document) });
