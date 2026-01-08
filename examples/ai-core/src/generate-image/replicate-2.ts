import { replicate } from '@zenning/replicate';
import { generateImage } from '@zenning/ai';
import { presentImages } from '../lib/present-image';
import 'dotenv/config';

async function main() {
  const { image } = await generateImage({
    model: replicate.image('black-forest-labs/flux-schnell'),
    prompt: 'The Loch Ness Monster getting a manicure',
    aspectRatio: '16:9',
  });

  await presentImages([image]);
}

main().catch(console.error);
