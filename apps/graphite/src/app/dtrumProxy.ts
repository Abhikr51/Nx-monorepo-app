import type { DtrumApi } from '@dynatrace/dtrum-api-types';

declare global {
  interface Window {
    dtrum?: DtrumApi;
  }
}

const dtrumProxy = {
  getDtrum: (): DtrumApi | undefined => window.dtrum,
};

export default dtrumProxy;