'use client';
import React from 'react';
import PageTabs from '@/components/page-tabs/page-tabs';
import { worflowPageTabsConfig } from '../config/workflow-page-tabs.config';
import type { Props, WorkflowPageTabsParams } from './workflow-page-tabs.types';
import decodeUrlParams from '@/utils/decode-url-params';

export default function WorkflowPageTabs({ params }: Props) {
  const decodedParams = decodeUrlParams(params) as WorkflowPageTabsParams;

  return (
    <PageTabs
      selectedTab={decodedParams.workflowTab}
      tabList={worflowPageTabsConfig}
      setSelectedTab={() => { }}
    />
  );
}
