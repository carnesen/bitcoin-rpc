type RpcPositionalParams = any[];

type RpcNamedParams = {
  [name: string]: any;
};

type RpcParams = RpcPositionalParams | RpcNamedParams;

type RpcId = null | number | string;

export type RpcRequest = {
  method: string;
  params?: RpcParams;
  id?: RpcId;
  jsonrpc?: '2.0';
};

export type RpcError = {
  code: number;
  message: string;
  data?: any;
};

export type RpcResponse = {
  result: any;
  error: null | RpcError;
  id?: RpcId;
};
