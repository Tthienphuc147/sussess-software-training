import { environment } from 'src/environments/environment';

declare var window: any;
export const localStorageKey =
  window.localStorageKey || 'Competencies Evaluation' + environment.API_ENDPOINT;