import WorkflowSummaryTab from '@/views/workflow-summary-tab/workflow-summary-tab';
import type { WorkflowPageTabsContentsMap } from '../workflow-page-tab-content/workflow-page-tab-content.types';

export const worflowPageTabsContentsMapConfig = {
  // TODO: @assem.hafez add summary tab
  summary: WorkflowSummaryTab,
} as const satisfies WorkflowPageTabsContentsMap;
