import { JSONSchema6 } from 'json-schema';
import type { ComponentType } from 'react';

export interface DataSourceType {
  type: string;
  name: string;
  schema: JSONSchema6;
  plugin?: ComponentType;
}
