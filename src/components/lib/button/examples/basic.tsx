import Button from '../Button';

export function BasicButtons() {
  return (
    <div className="flex items-center gap-6">
      <Button>Filled</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="text">Text</Button>
    </div>
  );
}
