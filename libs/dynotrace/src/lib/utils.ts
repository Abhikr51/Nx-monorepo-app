import type { DtrumApi } from '@dynatrace/dtrum-api-types';

export const testFunc = (value: any) => {
  console.log('testFunc', value);
}


export const useDtrum = (dtrum :DtrumApi) => {
  if (!dtrum) {
    console.error('Dynatrace is not defined');
    return null;
  }
  return dtrum;
}