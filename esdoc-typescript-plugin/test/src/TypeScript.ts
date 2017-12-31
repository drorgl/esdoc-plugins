/**
 * this is TestTypeScriptClass.
 */
export class TestTypeScriptClass {
  member1: number = null;

  get getter1(): string { return 'Hello'; }

  set setter1(v: number) { }

  /**
   * setter 2
   * @param {number} v - this is v.
   */
  set setter2(v: number) { }

  method1(n: number, x: Foo): string {
    return 'Hello'.repeat(n);
  }

  /**
   * this is method2.
   */
  method2(n: number, x: Foo): string {
    return 'Hello'.repeat(n);
  }

  /**
  * this is method3.
  * @param n - this is n
  * @param x - this is x
  * @return this is return
  */
  method3(n: number, x: Foo): string {
    return 'Hello'.repeat(n);
  }

  /**
   * this is method4.
   * @param {number} n - this is n
   * @param {(Foo|Bar)} x - this is x
   * @param {Bar} y - this is y.
   * @return {string} this is return
   */
  method4(n: number, x: Foo | Bar, y: Bar): string | Bar {
    return 'Hello'.repeat(n);
  }

  //method4 comment
  method5(nx: number | Bar): number | string | Bar {
    return 'Hello'.repeat(nx as number);
  }

  /**
 * methodName - some description here
 * @param {ITestObject} param1 - description of param1
 * @param {EnumY} y - enum y value description
 * @return {object} description 
 * @example example code here
 */
  method6(param1: ITestObject, y: EnumY): object {
    return {};
  }
}

/**
 * EnumY - enum type
 */
export enum EnumY{
  A,
  /**
   * B - B Value
   */
  B,
  C
}

/**
 * Test Object Interface
 * @interface
 */
export interface ITestObject{
  n : number;
  x : Foo;
  y(p1 : number) : string;
  z : ()=>void;
}

export function testTypeScriptFunction(n: number, x: Foo): string { return 'Hello'; }

/**
 * Foo Class Description
 */
export class Foo { }

/**
 * Bar Class Description
 */
export class Bar { }