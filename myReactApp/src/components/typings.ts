export interface NavRoute {
  id: string;
  label: string;
  path: string;
  url?: string;
  component: any;
  exact?: boolean;
}
