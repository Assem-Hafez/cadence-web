'use client';
import useStyletronClasses from '@/hooks/use-styletron-classes';
import type { Props } from './pretty-json.types';
import { JsonView, allExpanded } from 'react-json-view-lite'; import { cssStyles } from './pretty-json.styles';
;

export default function PrettyJson({ json }: Props) {
  const { cls } = useStyletronClasses(cssStyles)

  return (
    <JsonView data={json} shouldExpandNode={allExpanded} clickToExpandNode style={{ ...cls, noQuotesForStringValues: false }} />
  );
}
