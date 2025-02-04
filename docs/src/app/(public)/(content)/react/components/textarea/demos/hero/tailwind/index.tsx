import * as React from 'react';
import { Textarea } from '@base-ui-components/react/textarea';

export default function ExampleInput() {
  return (
    <Textarea
      placeholder="Name"
      className="h-10 w-full max-w-64 rounded-md border border-gray-200 pl-3.5 text-base text-gray-900 focus:outline focus:outline-2 focus:-outline-offset-1 focus:outline-blue-800"
    />
  );
}
