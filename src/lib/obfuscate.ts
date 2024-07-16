import JO from 'javascript-obfuscator';

export function obfuscate(code: string) {
  console.log('Obfuscate.1.start');
  code = JO.obfuscate(code, {
    compact: true,
    numbersToExpressions: true,
    simplify: false,
    stringArrayShuffle: true,
    splitStrings: true,
    stringArrayThreshold: 1,
  }).getObfuscatedCode();
  console.log('Obfuscate.1.end');
  return code;
}
