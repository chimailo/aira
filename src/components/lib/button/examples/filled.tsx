import Button from '../Button';

export function FilledButtons() {
  return (
    <div className="flex items-center gap-6">
      <Button variant="filled">Primary</Button>
      {/* <Button variant="filled" intent="secondary">
        Secondary
      </Button>
      <Button variant="filled" intent="danger">
        Danger
      </Button> */}
      <Button variant="filled" isDisabled>
        Disabled
      </Button>
    </div>
  );
}
