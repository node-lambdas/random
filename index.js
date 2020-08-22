import { lambda } from '@node-lambdas/core';
import { randomBytes } from 'crypto';

const configutation = {
  version: 2,
  actions: {
    default: {
      handler: (input, output) => {
        const inputSize = input.options.size | 0;
        const size = (inputSize && Math.min(inputSize, 4096)) || 1;
        const buffer = randomBytes(size);

        output.send(buffer);
      },
    },
  },
};

lambda(configutation);
