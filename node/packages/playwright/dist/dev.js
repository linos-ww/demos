var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { MindMemoryStore } from "@zhixi-mind/memory-store";
import { MindMap, registerMindTheme } from "@zhixi-mind/mind-map";
import { KeyboardInteraction, MinderInteractController, MouseInteraction, TextTypingInteraction, UserInteractState, WebSettings } from "@zhixi-mind/user-interaction";
import { fullFeat } from "./data";
import "./editor.css";
import "./style.css";
import { classical18 } from "./themes";
window.onload = () => __awaiter(void 0, void 0, void 0, function* () {
    registerMindTheme(classical18);
    yield MindMap.loadResources({
        katex: {
            type: "css",
            url: "https://static-cdn.zhixi.com/public/katex.min.css",
        },
        iconfont: {
            type: "script",
            url: "//at.alicdn.com/t/font_2125408_c44tic0py8.js",
        },
    });
    const store = new MindMemoryStore();
    let useData = fullFeat;
    useData.template = "right";
    useData.theme = "dark1";
    // useData.root.children = [];
    // useData.subTree = [];
    store.fromMindData(useData);
    const mindMap = new MindMap(store, true);
    const renderer = mindMap.getRenderer();
    const controller = new MinderInteractController({
        mind: mindMap,
        target: renderer.getContainer(),
        state: UserInteractState.normal,
        settings: Object.assign(Object.assign({}, WebSettings), { boxSelectionMouse: "left", dragFigMouse: "right" }),
    });
    controller.setPointerConfig('right', 'left');
    window.km = mindMap;
    window.kmc = controller;
    controller.addInteraction(new KeyboardInteraction([
        {
            key: "tab",
            cmd: "selectedNodeAppendChild",
        },
        {
            key: "enter",
            cmd: "selectedNodeAppendSibling",
        },
        {
            key: "enter",
            cmd: "AppendDoubleBubbleSimilar",
        },
        {
            key: "enter",
            cmd: "AppendBridgeNode",
        },
        {
            key: "mod+a",
            cmd: "SelectedAllNodes",
        },
        {
            key: "delete",
            cmd: "DeleteSelection",
        },
        {
            key: "backspace",
            cmd: "DeleteSelection",
        },
        {
            key: "mod+=",
            cmd: "ZoomFigUp",
        },
        {
            key: "mod+-",
            cmd: "ZoomFigDown",
        },
        {
            key: "mod+shift+=",
            cmd: "ScaleFontSizeUp",
        },
        {
            key: "mod+shift+-",
            cmd: "ScaleFontSizeDown",
        },
        {
            key: "mod+i",
            cmd: "TextItalic",
        },
        {
            key: "mod+b",
            cmd: "TextBold",
        },
        {
            key: "mod+u",
            cmd: "TextUnderline",
        },
        {
            key: "mod+[",
            cmd: "TextLineThrough",
        },
        {
            key: "shift+delete",
            cmd: "OnlyDeleteCurrentNode",
        },
        {
            key: "shift+backspace",
            cmd: "OnlyDeleteCurrentNode",
        },
        {
            key: "alt+down",
            cmd: "NavigateDown",
        },
        {
            key: "alt+up",
            cmd: "MoveNodeUp",
        },
    ]));
    controller.addInteraction(new TextTypingInteraction());
    controller.addInteraction(new MouseInteraction());
    renderer.renderTo(document.body);
    mindMap.renderMindStore();
    mindMap.moveNodeToViewCenter("bb6f2069-7b1e-49cd-9876-405a5720b386");
});
//# sourceMappingURL=dev.js.map