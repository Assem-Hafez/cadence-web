import type { WorkflowPageTabsContentsMap } from '../workflow-page-tab-content/workflow-page-tab-content.types';
import WorkflowPageTabContentSummary from '@/views/workflow-summary-tab/workflow-summary-tab';

export const worflowPageTabsContentsMapConfig = {
  summary: WorkflowPageTabContentSummary,
} as const satisfies WorkflowPageTabsContentsMap;
