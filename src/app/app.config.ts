import { InjectionToken } from '@angular/core';
import {AppConfig} from './appConfig'

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');