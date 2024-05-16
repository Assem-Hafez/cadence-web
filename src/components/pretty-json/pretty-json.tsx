'use client';
import type { Props } from './pretty-json.types';

export default function PrettyJson({ json }: Props) {
  return (
    <div>
      <pre>{JSON.stringify(json, null, '\n')}</pre>
    </div>
  );
}
