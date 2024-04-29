import React, { Suspense } from 'react';
import { Props } from './workflow-page-tab-content.types';
import { worflowPageTabsContentsMapConfig } from '../config/workflow-page-tabs-contents-map.config';

export default async function WorkflowPageTabContent({ params }: Props) {
  const selectedWorkflowTabName = params.workflowTab;

  const TabContent = worflowPageTabsContentsMapConfig[selectedWorkflowTabName];
  if (TabContent) return <TabContent params={params} />;
  return null;
}
