import { InjectionToken } from '@angular/core';
import { PermissionMap } from './types';

export const ACCESS_MODULE = new InjectionToken<string>('Access Module');
export const PERMISSION_MAP = new InjectionToken<PermissionMap>('Permission Map');