import Button from '../Button';

export function ColorButtons() {
  return (
    <div className="flex items-center gap-6">
      <Button variant="outlined" intent="primary">
        Primary
      </Button>
      <Button variant="text" intent="danger">
        Error
      </Button>
      <Button variant="filled" intent="secondary">
        Secondary
      </Button>
    </div>
  );
}
