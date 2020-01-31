import BN from 'bn.js';

export const ZERO = new BN(0);

export function bnToStr(bn?: BN, dflt: string = ''): string {
  return bn ? bn.toString() : dflt;
}

// String, Numbers, Object
// --------------------------------------

export const isDefined = (x: any): boolean =>
  !notDefined(x);

export const isDef = isDefined;

export const notDefined = (x: any): boolean =>
  x === null || typeof x === 'undefined';

export const notDef = notDefined;

export const isObj = (x: any): boolean =>
  x !== null && typeof x === 'object';

export const isStr = (x: any): boolean =>
  typeof x === 'string';

export const isNum = (x: any): boolean =>
  typeof x === 'number';

export const isEmptyStr = (x: any): boolean =>
  notDefined(x) || isStr(x) && x.trim().length === 0;

export const nonEmptyStr = (x?: any) =>
  isStr(x) && x.trim().length > 0;

export const parseNumStr = (num: string): number | undefined => {
  try {
    return parseInt(num, undefined);
  } catch (err) {
    return undefined;
  }
};

export const nonEmptyArr = (x: any): boolean =>
  Array.isArray(x) && x.length > 0;

export const isEmptyArr = (x: any): boolean =>
  !nonEmptyArr(x);

import keyring from '@polkadot/ui-keyring';

export function findNameByAddress(address: string): string | undefined {
  let keyring_address;
  try {
    keyring_address = keyring.getAccount(address);
  } catch (error) {
    try {
      keyring_address = keyring.getAddress(address);
    } catch (error) {
    }
  }
  return keyring_address ? keyring_address.meta.name : undefined;
}

export function isKnownAddress(address: string): boolean {
  return isDefined(findNameByAddress(address));
}

// Joystream Stake utils
// --------------------------------------

import { Stake, Backer } from '@joystream/types/';

export function calcTotalStake(stakes: Stake | Stake[] | undefined): BN {
  if (typeof stakes === 'undefined') {
    return ZERO;
  }
  const total = (stake: Stake) => stake.new.add(stake.transferred);
  try {
    if (Array.isArray(stakes)) {
      return stakes.reduce((accum, stake) => {
        return accum.add(total(stake));
      }, ZERO);
    } else {
      return total(stakes);
    }
  } catch (err) {
    console.log('Failed to calculate a total stake', stakes, err);
    return ZERO;
  }
}

export function calcBackersStake(backers: Backer[]): BN {
  return backers.map(b => b.stake).reduce((accum, stake) => {
    return accum.add(stake);
  }, ZERO);
}

// Substrate/Polkadot API utils
// --------------------------------------

import { Options as QueryOptions } from '@polkadot/react-api/with/types';

/** Example of apiQuery: 'query.councilElection.round' */
export function queryToProp(
  apiQuery: string,
  paramNameOrOpts?: string | QueryOptions
): [string, QueryOptions] {

  let paramName: string | undefined;
  let propName: string | undefined;

  if (typeof paramNameOrOpts === 'string') {
    paramName = paramNameOrOpts;
  } else if (paramNameOrOpts) {
    paramName = paramNameOrOpts.paramName;
    propName = paramNameOrOpts.propName;
  }

  // If prop name is still undefined, derive it from the name of storage item:
  if (!propName) {
    propName = apiQuery.split('.').slice(-1)[0];
  }

  return [apiQuery, { paramName, propName }];
}

// Parse URLs
// --------------------------------------

import queryString from 'query-string';

export function getUrlParam(location: Location, paramName: string, deflt: string | null = null): string | null {
  const params = queryString.parse(location.search);
  return params[paramName] ? params[paramName] as string : deflt;
}

// Business logic middleware
// --------------------------------------
import { LinkedMapEntry } from './LinkedMapEntry'
export { LinkedMapEntry }

// Business logic middleware
// --------------------------------------

import { Controller } from './Controller';
import { Loadable } from './Loadable';
import { Observable } from './Observable'
import { Observer, Subscribable, Subscription } from './Subscribable'
import { Transport } from './Transport';
import { View, ViewComponent, Params } from './View';

export {
  Controller,
  Loadable,
  Observer, Observable,
  Subscribable, Subscription,
  Transport,
  View, ViewComponent, Params,
};

// Memoization
// --------------------------------------

import { memoize } from "./memoize"
export { memoize }