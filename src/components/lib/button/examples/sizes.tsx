import Button from '../Button';

export function SizesButtons() {
  return (
    <div className="grid grid-5 gap-6">
      <Button size="xs">Extra Small</Button>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
      <Button variant="outlined" size="xs">
        Extra Small
      </Button>
      <Button variant="outlined" size="sm">
        Small
      </Button>
      <Button variant="outlined" size="md">
        Medium
      </Button>
      <Button variant="outlined" size="lg">
        Large
      </Button>
      <Button variant="outlined" size="xl">
        Extra Large
      </Button>
      <Button variant="text" size="xs">
        Extra Small
      </Button>
      <Button variant="text" size="sm">
        Small
      </Button>
      <Button variant="text" size="md">
        Medium
      </Button>
      <Button variant="text" size="lg">
        Large
      </Button>
      <Button variant="text" size="xl">
        Extra Large
      </Button>
    </div>
  );
}
