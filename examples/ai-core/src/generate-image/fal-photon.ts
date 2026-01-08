import { fal } from '@zenning/fal';
import { generateImage } from '@zenning/ai';
import { presentImages } from '../lib/present-image';
import 'dotenv/config';

async function main() {
  const { images } = await generateImage({
    model: fal.image('fal-ai/luma-photon'),
    prompt: 'A hyrax atop a stump in a forest among fireflies at dusk',
  });
  await presentImages(images);
}

main().catch(console.error);
