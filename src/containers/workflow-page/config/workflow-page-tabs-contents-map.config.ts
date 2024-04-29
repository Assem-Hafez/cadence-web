import { PageTab } from '@/components/page-tabs/page-tabs.types';
import { MdListAlt } from 'react-icons/md';
import { WorkflowPageTabContentProps } from '../workflow-page-tab-content/workflow-page-tab-content.types';
import WorkflowPageTabContentSummary from '../workflow-page-tab-content-summary/workflow-page-tab-content-summary';
import { worflowPageTabsConfig } from './workflow-page-tabs.config';

export const worflowPageTabsContentsMapConfig = {
  summary: WorkflowPageTabContentSummary,
} as const satisfies {
    [k in (typeof worflowPageTabsConfig)[number]['key']]:
    | React.ComponentType<WorkflowPageTabContentProps>
    | ((props: WorkflowPageTabContentProps) => React.ReactNode);
  };
