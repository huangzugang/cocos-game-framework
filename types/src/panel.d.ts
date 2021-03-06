/**
 * 界面模块
 * - 需要在运行时初始化，传入父节点
 */
import { SimpleFSM } from "./tool-fsm";
/**
 * 界面类型
 * - new 新创建一个页面
 * - old 寻找旧页面，将node.active置为 true
 */
declare type PanelType = "new" | "old";
/**
 * 节点状态
 * - open 打开状态
 * - close 关闭状态
 * - 注意：为当前状态描述，无视打开关闭动画
 */
declare type PanelState = "open" | "close";
declare type PanelContext = {
    /** prefab 的路径 */
    path: string;
    /** zindex 的基础值 */
    z_index_base: number;
    /** prefab */
    prefab: cc.Prefab;
    /** 示例 */
    ins: PanelBase;
    /** 类别 */
    type: PanelType;
    /** 当前状态 */
    state: SimpleFSM<PanelState>;
};
/** 界面脚本的实现基类 */
export declare abstract class PanelBase extends cc.Component {
    /** 界面的上下文信息 */
    static context: PanelContext;
    /** 界面首次打开执行函数，处理只执行1次的逻辑，比如创建 */
    abstract on_create(): Promise<void>;
    /** 界面打开函数，处理动画和逻辑，会在onLoad之后，start之前执行 */
    abstract on_open(...params: any[]): Promise<void>;
    /** 界面关闭函数，处理动画和逻辑，会在onDestroy之前执行 */
    abstract on_close(...params: any[]): Promise<void>;
}
/**
 * 设置panel类上下文的装饰器
 * @param config
 */
export declare function DeSetPanelContext(path: string, type?: string, z_index_base?: number): (constructor: typeof PanelBase) => void;
/** panel的子类 */
declare type PanelClass = typeof PanelBase;
/** panel子类的on_open方法参数 */
declare type ParamPanelOpen<T extends PanelClass> = Parameters<T["prototype"]["on_open"]>;
/** panel子类的on_close方法参数 */
declare type ParamPanelClose<T extends PanelClass> = Parameters<T["prototype"]["on_close"]>;
/**
 * 初始化系统，传入父节点
 * @param node
 */
export declare function _init_panel(node?: cc.Node): void;
/**
 * 预载入界面 prefab
 * @param panel
 */
export declare function pre_panel(panel: PanelClass): Promise<void>;
/**
 * 打开页面
 * @param panel
 * @param params
 */
export declare function open_panel<T extends PanelClass>(panel: T, ...params: ParamPanelOpen<T>): Promise<void>;
/**
 * 关闭页面
 * @param panel
 * @param params
 */
export declare function close_panel<T extends PanelClass>(panel: T, ...params: ParamPanelClose<T>): Promise<void>;
export {};
