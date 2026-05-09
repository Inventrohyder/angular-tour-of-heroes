// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/testing';
import { getTestBed } from '@angular/core/testing';
import {
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting
} from '@angular/platform-browser-dynamic/testing';

// First, initialize the Angular testing environment.
getTestBed().initTestEnvironment(
  BrowserDynamicTestingModule,
  platformBrowserDynamicTesting()
);

import './app/app.component.spec';
import './app/dashboard/dashboard.component.spec';
import './app/hero-detail/hero-detail.component.spec';
import './app/hero-search/hero-search.component.spec';
import './app/hero.service.spec';
import './app/heroes/heroes.component.spec';
import './app/in-memory-data.service.spec';
import './app/message.service.spec';
import './app/messages/messages.component.spec';
