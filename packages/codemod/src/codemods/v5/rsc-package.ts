import { createTransformer } from '../lib/create-transformer';

/*
The `ai/rsc` export has been extracted to a separate package `@zenning/rsc`

Before:

```jsx
import { createStreamableValue } from 'ai/rsc';
```

After:

```bash
pnpm add @zenning/rsc
```

```jsx
import { createStreamableValue } from '@zenning/rsc';
```

Commit: https://github.com/vercel/ai/pull/5542
*/

export default createTransformer((fileInfo, api, options, context) => {
  const { j, root } = context;

  root
    .find(j.ImportDeclaration)
    .filter(path => path.node.source.value === 'ai/rsc')
    .forEach(path => {
      path.node.source.value = '@zenning/rsc';
      context.hasChanges = true;
    });
});
