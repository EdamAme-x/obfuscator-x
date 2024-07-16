import { useState } from 'react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { obfuscate, inject } from '../lib/obfuscate';

export function Flow() {
  const [pure, setPure] = useState(`console.log("Hello world");`);
  const [parsed, setParsed] = useState(`// Please press obfuscate button.`);

  const parse = async () => {
    setParsed(await obfuscate(pure));
  };

  const injecter = () => {
    setParsed(inject(parsed));
  };

  return (
    <div className="px-2">
      <h2 className="font-mono">Pure Code</h2>
      <Textarea
        className="h-[30vh]"
        onInput={(e) => setPure((e.currentTarget as HTMLTextAreaElement).value)}
        defaultValue={pure}
      />
      <Button variant="outline" className="my-2 mr-1" onClick={parse}>
        Obfuscate
      </Button>
      <Button variant="outline" className="my-2" onClick={injecter}>
        Inject Anti Debugger
      </Button>
      <h2 className="font-mono">Obfuscated Code</h2>
      <Textarea className="h-[30vh]" value={parsed} readOnly />
    </div>
  );
}
