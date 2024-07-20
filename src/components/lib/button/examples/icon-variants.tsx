import { Calculator } from 'lucide-react';
import Button from '../Button';

export function VariantIconButtons() {
  return (
    <div className="flex items-center gap-6">
      <Button icon>
        <Calculator />
      </Button>
      <Button icon variant="outlined">
        <Calculator />
      </Button>
      <Button icon variant="text">
        <Calculator />
      </Button>
    </div>
  );
}
