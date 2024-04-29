'use client';
import useStyletronClasses from '@/hooks/use-styletron-classes';
import { Props } from './pretty-json.types';

export default function PrettyJson({ json }: Props) {
  return (
    <div>
      <pre>{JSON.stringify(json, null, '\n')}</pre>
    </div>
  );
}
