# auto-typer-ts

## Description:

auto-typer-ts is a React/TypeScript npm package that allows you to create a typing effect on your website.

## Installation:

```bash
npm install auto-typer-ts
```

## Usage for React:

```react
import AutoTyper from 'auto-typer-ts';

const titles = ['Javascript', 'React', 'TypeScript', 'Next', 'Angular'];

const App = () => {
  return (
    <div>
      <AutoTyper
        titles={titles}           
      />
    </div>
  );
};
```

## Usage for Next.js:

```react
import dynamic from 'next/dynamic';
const AutoTyper = dynamic(() => import('auto-typer-ts'), {
    ssr: false,
});

const titles = ['Javascript', 'React', 'TypeScript', 'Next', 'Angular'];

const App = () => {
  return (
    <div>
      <AutoTyper
        titles={titles}           
      />
    </div>
  );
};
```

## Props:

| props          | type     | description                                | default value                      |
|----------------|----------|--------------------------------------------|------------------------------------|
| styling        | string   | CSS styling for the text                   | "typer"                            |
| titles         | string[] | An array of strings that will be typed out | ["test text", "for auto-typer-ts"] |
| typingSpeedMax | number   | The maximum typing speed                   | 110 in ms                          |
| typingSpeedMin | number   | The minimum typing speed                   | 50  in ms                          |
| deletingSpeed  | number   | The speed at which the text is deleted     | 70  in ms                          |
| blinkingSpeed  | number   | The speed at which the cursor blinks       | 600 in ms                          |
| pauseDelay     | number   | The delay between typing and deleting      | 1500 in ms                         |

**Note:** `ms` time is in milliseconds

## Examples:

```react

import AutoTyper from 'auto-typer-ts';

const titles = ['Javascript', 'React', 'TypeScript', 'Next', 'Angular'];

const App = () => {
  return (
    <div>
      <AutoTyper
        titles={titles}         
        styling="your-className"
        typingSpeedMax={100}
        typingSpeedMin={50}
        deletingSpeed={50}
        blinkingSpeed={500}
        pauseDelay={1000}
      />
    </div>
  );
};
```

## styling prop:

able to use as a css / tailwind css style

### CSS Example:

```react
import AutoTyper from 'auto-typer-ts';

const titles = ['Javascript', 'React', 'TypeScript', 'Next', 'Angular'];

const App = () => {
  return (
    <div>
      <AutoTyper
        titles={titles}         
        styling="color: red; font-size: 20px;"
      />
    </div>
  );
};
```

### Tailwind CSS Example:

```react
import AutoTyper from 'auto-typer-ts';

const titles = ['Javascript', 'React', 'TypeScript', 'Next', 'Angular'];

const App = () => {
  return (
    <div>
      <AutoTyper
        titles={titles}         
        styling="text-red-500 text-2xl"
      />
    </div>
  );
};
```
