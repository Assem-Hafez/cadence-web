import type { WorkflowPageTabsContentsMap } from '../workflow-page-tab-content/workflow-page-tab-content.types';

export const worflowPageTabsContentsMapConfig = {
  // TODO: @assem.hafez add summary tab
  summary: (props: any) => null,
} as const satisfies WorkflowPageTabsContentsMap;
