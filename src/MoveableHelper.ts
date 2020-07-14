import { Frame } from "scenejs";
import {
    OnDragStart, OnDrag, OnRender, OnResize, OnResizeStart,
    OnScaleStart, OnScale, OnRotate, OnRotateStart,
    OnDragGroupStart, OnDragGroup, OnResizeGroupStart,
    OnResizeGroup, OnScaleGroupStart, OnScaleGroup,
    OnRotateGroupStart, OnRotateGroup, OnWarp, OnWarpStart,
    OnClip, OnDragOriginStart, OnDragOrigin, OnRound
} from "react-moveable/declaration/types";
import { MoveableHelperOptions } from "./types";
import { isString } from "@daybrush/utils";


export default class MoveableHelper {
    public static create(options: Partial<MoveableHelperOptions> ) {
        return new MoveableHelper(options);
    }
    public options: Partial<MoveableHelperOptions>;
    constructor(options: Partial<MoveableHelperOptions> = {}) {
        this.options = {
            useRender: false,
            createAuto: true,
            ...options,
        };
    }
    public map = new Map<HTMLElement | SVGElement, Frame>();
    public render(target: HTMLElement | SVGElement, frame: Frame = this.getFrame(target)) {
        target.style.cssText += frame.toCSS();
    }
    public clear() {
        this.map.clear();
    }
    public getTargets() {
        return this.map.keys();
    }
    public getFrames() {
        return this.map.values();
    }
    public getFrame(el: HTMLElement | SVGElement) {
        return this.map.get(el);
    }
    public setFrame(el: HTMLElement | SVGElement, frame: Frame) {
        return this.map.set(el, frame);
    }
    public removeFrame(el: HTMLElement | SVGElement) {
        this.map.delete(el);
    }

    public createFrame(el: HTMLElement | SVGElement, properites = {}) {
        const frame = new Frame({
            transform: {
                translate: "0px, 0px",
                rotate: "0deg",
                scale: "1, 1",
            },
        })

        frame.set(properites);

        this.map.set(el, frame);
        return frame;
    }
    public setElements(selector: { [key: number]: HTMLElement | SVGElement, length: number } | string) {
        const elements = isString(selector) ? document.querySelectorAll<HTMLElement | SVGElement>(selector) : selector;
        const length = elements.length;
        const map = this.map;

        for (let i = 0; i < length; ++i) {
            const el = elements[i];
            if (map.has(el)) {
                continue;
            }
            this.createFrame(el);
        }
    }
    public onDragStart = (e: OnDragStart) => {
        const frame = this.testFrame(e);

        if (!frame) {
            return false;
        }
        e.set(this.getTranslate(frame));
    }
    public onDrag = (e: OnDrag) => {
        this.testDrag(e);
        this.testRender(e.target);
    }
    public onDragGroupStart = (e: OnDragGroupStart) => {
        e.events.forEach(ev => {
            this.onDragStart(ev);
        });
    }
    public onDragGroup = (e: OnDragGroup) => {
        e.events.forEach(ev => {
            this.onDrag(ev);
        });
    }
    public onResizeStart = (e: OnResizeStart) => {
        e.dragStart && this.onDragStart(e.dragStart);
        e.setOrigin(["%", "%"]);
    }
    public onResize = (e: OnResize) => {
        this.testResize(e);
        this.testRender(e.target);
    }
    public onResizeGroupStart = (e: OnResizeGroupStart) => {
        e.events.forEach(ev => {
            this.onResizeStart(ev);
        });
    }
    public onResizeGroup = (e: OnResizeGroup) => {
        console.log(e.offsetWidth / e.offsetHeight);
        e.events.forEach(ev => {
            this.onResize(ev);
        });
    }
    public onScaleStart = (e: OnScaleStart) => {
        const frame = this.testFrame(e);

        if (!frame) {
            return false;
        }
        const scale = frame.get("transform", "scale").split(",").map(value => parseFloat(value));

        e.set(scale);
        e.dragStart && this.onDragStart(e.dragStart);
    }
    public onScale = (e: OnScale) => {
        this.testScale(e);
        this.testRender(e.target);
    }
    public onScaleGroupStart = (e: OnScaleGroupStart) => {
        e.events.forEach(ev => {
            this.onScaleStart(ev);
        });
    }
    public onScaleGroup = (e: OnScaleGroup) => {
        e.events.forEach(ev => {
            this.onScale(ev);
        });
    }
    public onRotateStart = (e: OnRotateStart) => {
        const frame = this.testFrame(e);

        if (!frame) {
            return false;
        }
        const rotate = parseFloat(frame.get("transform", "rotate")) || 0;

        e.set(rotate);
        (e as any).dragStart && this.onDragStart((e as any).dragStart);
    }
    public onRotate = (e: OnRotate) => {
        this.testRotate(e);
        this.testRender(e.target);
    }
    public onRotateGroupStart = (e: OnRotateGroupStart) => {
        e.events.forEach(ev => {
            this.onRotateStart(ev);
        });
    }
    public onRotateGroup = (e: OnRotateGroup) => {
        e.events.forEach(ev => {
            this.onRotate(ev);
        });
    }
    public onClip = (e: OnClip) => {
        const frame = this.testFrame(e);
        if (e.clipType === "rect") {
            frame.set("clip", e.clipStyle);
        } else {
            frame.set("clip-path", e.clipStyle);
        }
        this.testRender(e.target);
    }
    public onDragOriginStart = (e: OnDragOriginStart) => {
        e.dragStart && this.onDragStart(e.dragStart);
    }
    public onDragOrigin = (e: OnDragOrigin) => {
        const frame = this.testFrame(e);

        frame.set("transform-origin", e.transformOrigin);
        this.testDrag(e.drag);
        this.testRender(e.target);
    }
    public onRound = (e: OnRound) => {
        const frame = this.testFrame(e);

        frame.set("border-radius", e.borderRadius);
        this.testRender(e.target);
    }
    public onWarpStart = (e: OnWarpStart) => {
        const frame = this.testFrame(e);

        if (!frame) {
            return false;
        }
        const matrix3d = frame.get("transform", "matrix3d");

        if (matrix3d) {
            e.set(matrix3d.split(",").map(v => parseFloat(v)))
        }
    }
    public onWarp = (e: OnWarp) => {
        const frame = this.testFrame(e);

        frame.set("transform", "matrix3d", e.matrix.join(", "));
        this.testRender(e.target);
    }
    public onRender = (e: OnRender) => {
        const target = e.target;
        const frame = this.getFrame(target);

        if (!target || !frame) {
            return;
        }
        this.render(target, frame);
    }
    private testFrame(e: any) {
        const target = e.target;
        const frame = this.getFrame(target);


        if (frame) {
            return frame;
        }
        if (!this.options.createAuto) {
            if (e.stop) {
                e.stop();
                return;
            }
        }
        return this.createFrame(target);
    }
    private getTranslate(frame: Frame) {
        return this.testTranslate(frame).map(value => parseFloat(value) || 0);
    }
    private testTranslate(frame: Frame) {
        const translate = frame.get("transform", "translate");

        if (translate) {
            return translate.split(",");
        }
        const translateX = frame.get("transform", "translateX");

        if (translateX) {
            const translateY = frame.get("transform", "translateY");

            return [translateX, translateY];
        }

        frame.set("transform", "translate", "0px,0px");
        return ["0px", "0px"];
    }
    private testDrag(e: OnDrag) {
        const target = e.target;
        const beforeTranslate = e.beforeTranslate;

        const frame = this.getFrame(target);
        const tx = `${beforeTranslate[0]}px`;
        const ty = `${beforeTranslate[1]}px`;

        if (frame.has("transform", "translate")) {
            frame.set("transform", "translate", `${tx},${ty}`);
        } else {
            frame.set("transform", "translateX", tx);
            frame.set("transform", "translateY", ty);
        }
    }
    private testResize(e: OnResize) {
        const target = e.target;
        const frame = this.getFrame(target);

        frame.set("width", `${e.width}px`);
        frame.set("height", `${e.height}px`);

        this.testDrag(e.drag);
    }
    private testScale(e: OnScale) {
        const frame = this.testFrame(e);
        const scale = e.scale;

        this.testDrag(e.drag);
        frame.set("transform", "scale", `${scale[0]},${scale[1]}`);
    }
    private testRotate(e: OnRotate) {
        const frame = this.testFrame(e);
        const rotate = e.beforeRotate;

        (e as any).drag && this.testDrag((e as any).drag);
        frame.set("transform", "rotate", `${rotate}deg`);
    }
    private testRender(target, frame = this.getFrame(target)) {
        if (!this.options.useRender) {
            this.render(target, frame);
        }
    }
}
