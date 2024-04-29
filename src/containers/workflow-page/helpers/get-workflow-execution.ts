import * as grpcClient from '@/utils/grpc/grpc-client';
import { unstable_cache } from 'next/cache';
import CLUSTERS_CONFIGS from '@/config/clusters/clusters.config';
import { cache } from 'react';

export const getWorkflowExecution = async (clusterName: any, args: any) => {
  const result =
    await grpcClient.clusterMethods[clusterName].describeWorkflow(args);

  return result;
};

export const getCachedWorkflowExecution = cache(getWorkflowExecution);
