/**
 * 原生模块
 * - js与java间的互相调用，参考：http://docs.cocos.com/creator/manual/zh/advanced-topics/java-reflection.html?h=java
 * - js与OC间的互相调用，参考：http://docs.cocos.com/creator/manual/zh/advanced-topics/oc-reflection.html
 */
/** 判断为android平台 */
export declare function is_android(): boolean;
/** 判断为ios平台 */
export declare function is_ios(): boolean;
/** 判断为原生平台 */
export declare function is_native(): boolean;
/**
 * 调用原生
 * @param method 方法名
 * @param params 入参；如果是json字符串，请在外部手动传入
 */
export declare function call(method: string, params?: {}): string;
/**
 * 异步调用
 * - TODO：添加wait_time的作用
 * @param method 方法名
 * @param params 入参
 * @param wait_time 最大等待时间，默认为100s
 */
export declare function call_async(method: string, params?: {}, wait_time?: number): Promise<string>;
