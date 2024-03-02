/// <reference path='./types.d.ts'/>
export function stringList<T extends string>(...strings: T[]): Readonly<isl.ISL<Record<T, T>[T]>>;