import { Button } from '../Button';

export default function DangerButtons() {
  return (
    <div className="flex items-center gap-6">
      <Button intent="danger">Filled</Button>
      <Button variant="outlined" intent="danger">
        Outlined
      </Button>
      <Button variant="text" intent="danger">
        Text
      </Button>
    </div>
  );
}
