import { Button, type ButtonProps } from '@/components/lib/button';

const sizes: ButtonProps['size'][] = ['xs', 'sm', 'md', 'lg', 'xl'];
const intents: ButtonProps['intent'][] = ['primary', 'secondary', 'danger'];
const variants: ButtonProps['variant'][] = ['filled', 'outlined', 'ghost'];

function ButtonIntent({
  variant,
}: {
  variant: 'filled' | 'outlined' | 'ghost';
}) {
  return (
    <section className="space-y-4">
      <h1 className="text-xl font-bold capitalize">{variant}</h1>
      <div className="flex items-center gap-6">
        {intents.map((item) => (
          <Button key={item} variant={variant} intent={item}>
            {item} {variant}
          </Button>
        ))}
      </div>
    </section>
  );
}

function ButtonVariants({
  type,
}: {
  type: 'primary' | 'secondary' | 'danger';
}) {
  return (
    <section className="space-y-4">
      <h1 className="text-xl font-bold capitalize">{type}</h1>
      <div className="flex items-center gap-6">
        {variants.map((variant) => (
          <Button key={variant} variant={variant} intent={type}>
            {type} {variant}
          </Button>
        ))}
      </div>
    </section>
  );
}

function App() {
  return (
    <>
      <div className="space-y-6">
        {intents.map((item, i) => (
          <ButtonVariants key={i} type={item}></ButtonVariants>
        ))}
      </div>
      <div className="space-y-6">
        {variants.map((item, i) => (
          <ButtonIntent key={i} variant={item}></ButtonIntent>
        ))}
      </div>
      <section className="space-y-4">
        <h1 className="text-xl font-bold capitalize">Sizes</h1>
        <div className="flex items-center gap-6">
          {sizes.map((size) => (
            <Button key={size} variant="filled" intent="primary" size={size}>
              Say Hello
            </Button>
          ))}
        </div>
      </section>
      <h1 className="text-xl font-bold capitalize my-6">Icons</h1>
      <section className="space-y-4 my-6">
        <h1 className="font-bold capitalize">Sizes</h1>
        <div className="flex items-center gap-6">
          {sizes.map((size) => (
            <Button key={size} is="icon" size={size}>
              &gt;
            </Button>
          ))}
        </div>
      </section>
      <section className="space-y-4 my-6">
        <h1 className="font-bold capitalize">Intent</h1>
        <div className="flex items-center gap-6">
          {variants.map((item) => (
            <Button key={item} is="icon" variant={item}>
              &gt;
            </Button>
          ))}
        </div>
      </section>
      <section className="space-y-4 my-6">
        <h1 className="font-bold capitalize">Variants</h1>
        <div className="flex items-center gap-6">
          {intents.map((item) => (
            <Button key={item} is="icon" intent={item}>
              &gt;
            </Button>
          ))}
        </div>
      </section>
    </>
  );
}

export default App;
