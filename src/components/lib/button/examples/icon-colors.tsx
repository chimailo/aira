import { Grid } from 'lucide-react';
import Button from '../Button';

export function ColoredIconButtons() {
  return (
    <div className="flex items-center gap-6">
      <Button icon>
        <Grid />
      </Button>
      <Button icon intent="secondary">
        <Grid />
      </Button>
      <Button icon intent="danger">
        <Grid />
      </Button>
    </div>
  );
}
