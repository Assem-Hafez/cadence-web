import React from 'react';
import * as grpcClient from '@/utils/grpc/grpc-client';
import SegmentedControlRounded from '@/components/segmented-control-rounded/segmented-control-rounded';
import PrettyJson from '@/components/pretty-json/pretty-json';
import formatPayload from '../helpers/format-payload';
import { WorkflowPageTabContentProps } from '../workflow-page-tab-content/workflow-page-tab-content.types';

export default async function WorkflowPageTabContentSummary({
  params,
}: WorkflowPageTabContentProps) {
  const workflowHistory = await grpcClient.clusterMethods[
    params.cluster
  ].getHistory({
    domain: params.domain,
    workflowExecution: {
      workflowId: params.workflowId,
      runId: params.runId,
    },
  });

  console.log(workflowHistory.history.events[0]);

  return (
    <>
      <div></div>
      <div>
        <SegmentedControlRounded
          activeKey={'input'}
          options={[
            {
              key: 'input',
              label: 'Input',
            },
            {
              key: 'result',
              label: 'Result',
            },
          ]}
        />
        <PrettyJson
          json={formatPayload(
            workflowHistory.history.events[0]
              ?.workflowExecutionStartedEventAttributes?.input
          )}
        />
      </div>
    </>
  );
}
