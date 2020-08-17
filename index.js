import { lambda } from '@node-lambdas/core';
import { randomBytes } from 'crypto';

const configutation = {
  version: 1,
};

lambda(configutation, (input, output) => {
  const inputSize = input.url === '/' ? 1 : Number(input.url.slice(1)) | 0;
  const size = inputSize ? Math.min(inputSize, 4096) : 1;
  const buffer = randomBytes(size);

  output.send(buffer);
});
