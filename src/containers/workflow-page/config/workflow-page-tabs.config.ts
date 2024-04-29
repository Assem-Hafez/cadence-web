import { PageTab } from '@/components/page-tabs/page-tabs.types';
import { MdListAlt } from 'react-icons/md';
export const worflowPageTabsConfig = [
  {
    key: 'summary',
    title: 'Summary',
    artwork: MdListAlt,
  },
] as const satisfies Array<PageTab>;
