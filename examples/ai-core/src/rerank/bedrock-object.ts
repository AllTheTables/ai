import { bedrock } from '@zenning/amazon-bedrock';
import { rerank } from '@zenning/ai';
import { run } from '../lib/run';
import { print } from '../lib/print';
import { documents } from './documents';

run(async () => {
  const result = await rerank({
    model: bedrock.reranking('cohere.rerank-v3-5:0'),
    documents,
    query: 'Which pricing did we get from Oracle?',
    topN: 2,
  });

  print('Reranking:', result.ranking);
});
