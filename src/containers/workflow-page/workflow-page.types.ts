import React from 'react';
import { worflowPageTabsConfig } from './config/workflow-page-tabs.config';

export type Props = {
  params: {
    domain: string;
    cluster: string;
    workflowId: string;
    runId: string;
    workflowTab: (typeof worflowPageTabsConfig)[number]['key'];
  };
  children: React.ReactNode;
};
