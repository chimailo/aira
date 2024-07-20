import { SendHorizontal } from 'lucide-react';
import Button from '../Button';

export function TextButtons() {
  return (
    <div className="flex items-center gap-6">
      <Button variant="text">Primary</Button>
      <Button variant="text" isDisabled>
        Disabled
      </Button>
      <Button variant="text" intent="primary">
        Send
        <SendHorizontal />
      </Button>
    </div>
  );
}
