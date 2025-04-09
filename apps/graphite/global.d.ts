import type { DtrumApi } from '@dynatrace/dtrum-api-types';

declare global {
    interface Window {
        dtrum?: DtrumApi;
    }
}