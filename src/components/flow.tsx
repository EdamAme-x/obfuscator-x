import { useState } from 'react';
import { Button } from './ui/button';
import { Textarea } from './ui/textarea';
import { obfuscate } from '../lib/obfuscate';

export function Flow() {
  const [pure, setPure] = useState(`console.log("Hello world");`);
  const [parsed, setParsed] = useState(`Please press obfuscate button.`);

  const parse = () => {
    setParsed(obfuscate(pure));
  };

  return (
    <div className="px-2">
      <h2 className="font-mono">Pure Code</h2>
      <Textarea
        className="h-[30vh]"
        onInput={(e) => setPure((e.currentTarget as HTMLTextAreaElement).value)}
        defaultValue={pure}
      />
      <Button variant="outline" className="my-2" onClick={parse}>
        Obfuscate
      </Button>
      <h2 className="font-mono">Obfuscated Code</h2>
      <Textarea className="h-[30vh]" value={parsed} />
    </div>
  );
}
