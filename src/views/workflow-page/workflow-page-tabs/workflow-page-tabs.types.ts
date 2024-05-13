import { PageTab } from '@/components/page-tabs/page-tabs.types';
import { worflowPageTabsConfig } from '../config/workflow-page-tabs.config';


export type WorkflowPageTabs = Array<PageTab>;

export type WorkflowPageTabsParams = {
  domain: string;
  cluster: string;
  workflowId: string;
  runId: string;
  workflowTab: (typeof worflowPageTabsConfig)[number]['key'];
}

export type Props = {
  params: WorkflowPageTabsParams;
};
