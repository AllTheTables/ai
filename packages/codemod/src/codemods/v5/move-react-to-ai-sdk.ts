import { createTransformer } from '../lib/create-transformer';

/**
 * Migrates from ai/react to @ai-sdk/react:
 * - import { useChat } from 'ai/react' → import { useChat } from '@zenning/react'
 */
export default createTransformer((fileInfo, api, options, context) => {
  const { j, root } = context;

  // Transform imports from 'ai/react' to '@zenning/react'
  root
    .find(j.ImportDeclaration, {
      source: {
        value: 'ai/react',
      },
    })
    .forEach((path: any) => {
      path.node.source.value = '@zenning/react';
      context.hasChanges = true;
    });
});
