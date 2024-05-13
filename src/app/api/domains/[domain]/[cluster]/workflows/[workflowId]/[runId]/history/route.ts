import decodeUrlParams from '@/utils/decode-url-params';
import * as grpcClient from '@/utils/grpc/grpc-client';

type RouteParams = {
  domain: string;
  cluster: string;
  workflowId: string;
  runId: string;
};
export async function GET(request: Request, { params }: { params: RouteParams }) {
  const decodedParams = decodeUrlParams(params);
  const res = await grpcClient.clusterMethods[params.cluster].getHistory(
    {
      domain: decodedParams.domain,
      workflowExecution: {
        workflowId: decodedParams.workflowId,
        runId: decodedParams.runId,
      },
    }
  )

  return Response.json(res)
}