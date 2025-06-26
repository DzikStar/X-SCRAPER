"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.SettingsExtendedProfile~bundle.UserJobs~bundle.ExtendedUserProfile", "icons/IconBoldCompact-js", "icons/IconQuoteStroke-js", "icons/IconStrikethrough-js"],
    {
        949626: (e, t, n) => {
            n.d(t, { Z: () => r });
            n(202784);
            var o = n(950822);
            const r = (e) => (0, o.Z)("div", e);
        },
        478414: (e, t, n) => {
            n.d(t, { Hx: () => d, K: () => l, bb: () => a, gv: () => i, kg: () => f, yW: () => s });
            var o = n(779802),
                r = n(392237);
            const l = { h1FontSize: "headline1", h2FontSize: "headline2", paragraphFontSize: "subtext1" },
                i = { h1FontSize: "title4", h2FontSize: "headline1", paragraphFontSize: "headline2" },
                a = ({ h1FontSize: e, h2FontSize: t, paragraphFontSize: n }) => [
                    { blockType: o.P7.header1, label: o.et, component: (0, o.LI)({ size: e, children: o.et, extendedWidth: !0 }) },
                    { blockType: o.P7.header2, label: o.PW, component: (0, o.LI)({ size: t, weight: "bold", children: o.PW }) },
                    { blockType: o.P7.paragraph, label: o.$u, component: (0, o.LI)({ size: n, children: o.$u }) },
                ],
                d = "extended-profile",
                f = "extended-profile-mobile-webview",
                s = (e, { h1FontSize: t, h2FontSize: n, paragraphFontSize: o }) =>
                    `\n    .${e} .longform-header-one {\n        font-family: ${r.default.theme.fontFamilies.chirpExtended};\n        font-size: ${r.default.theme.fontSizes[t]};\n        line-height: ${r.default.theme.spaces.space28};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-one-narrow {\n        font-family: ${r.default.theme.fontFamilies.chirpExtended};\n        font-size: ${r.default.theme.fontSizes[t]};\n        line-height: ${r.default.theme.spaces.space28};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-two {\n        font-size: ${r.default.theme.fontSizes[n]};\n        font-weight: ${r.default.theme.fontWeights.bold};\n        line-height: ${r.default.theme.spaces.space24};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-two-narrow {\n        font-size: calc(${r.default.theme.fontSizes[n]} + 1px);\n        font-weight: ${r.default.theme.fontWeights.bold};\n        line-height: ${r.default.theme.spaces.space24};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unstyled, \n    .${e} .longform-blockquote {\n        font-size: ${r.default.theme.fontSizes[o]};\n        line-height: ${r.default.theme.lineHeights.headline1};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unstyled-narrow, \n    .${e} .longform-blockquote-narrow {\n        font-size: ${r.default.theme.fontSizes[o]};\n        line-height: ${r.default.theme.lineHeights.headline1};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unordered-list-item, \n    .${e} .longform-ordered-list-item {\n        display: block;\n        font-size: ${r.default.theme.fontSizes[o]};\n        line-height: ${r.default.theme.lineHeights.headline1};\n        margin-bottom: ${r.default.theme.spaces.space2};\n        margin-left: calc(${r.default.theme.spaces.space20} + ${r.default.theme.spaces.space2});\n        margin-top: 0;\n    }\n\n    .${e} .longform-unordered-list-item-narrow, \n    .${e} .longform-ordered-list-item-narrow {\n        display: block;\n        font-size: ${r.default.theme.fontSizes[o]};\n        line-height: ${r.default.theme.lineHeights.headline1};\n        margin-bottom: ${r.default.theme.spaces.space2};\n        margin-left: ${r.default.theme.spaces.space36};\n        margin-top: 0;\n    }\n\n    .${e} .longform-blockquote, \n    .${e} .longform-blockquote-narrow {\n        margin-bottom: 0;\n        margin-left: 0;\n        margin-top: calc(-${r.default.theme.spaces.space2});\n        padding-left: calc(${r.default.theme.spaces.space20} + 2px);\n        position: relative;\n    }\n\n    .${e} .longform-blockquote:before, \n    .${e} .longform-blockquote-narrow:before {\n        background: ${r.default.theme.colors.gray900};\n        border-radius: ${r.default.theme.borderRadii.infinite};\n        bottom: 0;\n        content: "";\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 3px;\n    }\n\n    .${e} .longform-header-one .public-DraftStyleDefault-block,\n    .${e} .longform-header-two .public-DraftStyleDefault-block,\n    .${e} .longform-unstyled .public-DraftStyleDefault-block,\n    .${e} .longform-unordered-list-item .public-DraftStyleDefault-block,\n    .${e} .longform-ordered-list-item .public-DraftStyleDefault-block,\n    .${e} .longform-header-one-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-header-two-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-unstyled-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-unordered-list-item-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-ordered-list-item-narrow .public-DraftStyleDefault-block {\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n\n    .${e} .public-DraftStyleDefault-ul, \n    .${e} .public-DraftStyleDefault-ol {\n        counter-reset: item;\n        margin-bottom: 0;\n        margin-top: 0;\n        padding-left: 0;\n    }\n\n    .${e} .longform-unordered-list-item:before, \n    .${e} .longform-ordered-list-item:before,\n    .${e} .longform-unordered-list-item-narrow:before, \n    .${e} .longform-ordered-list-item-narrow:before {\n        position: absolute;\n        margin-left: calc(-1 * (${r.default.theme.spaces.space20} + ${r.default.theme.spaces.space2}));\n    }\n\n    .${e} .longform-unordered-list-item:before {\n        content: counter(item, disc);\n        font-size: ${r.default.theme.fontSizes[o]}\n    }\n\n    .${e} .longform-unordered-list-item-narrow:before {\n        content: counter(item, disc);\n        font-size: ${r.default.theme.fontSizes[o]}\n    }\n\n    .${e} .longform-ordered-list-item:before, \n    .${e} .longform-ordered-list-item-narrow:before {\n        content: counter(item) ". ";\n        counter-increment: item;\n    }\n\n    .${e} .longform-ordered-list-item::marker, \n    .${e} .longform-ordered-list-item-narrow::marker {\n        font-variant-numeric: normal;\n    }\n`;
        },
        135904: (e, t, n) => {
            n.d(t, { c: () => l, n: () => r });
            var o = n(392237);
            const r = "longform-styles",
                l = `\n    .longform-header-one {\n        font-size: ${o.default.theme.fontSizes.title2};\n        font-weight: ${o.default.theme.fontWeights.heavy};\n        line-height: ${o.default.theme.lineHeights.title1};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-one-narrow {\n        font-size: calc(${o.default.theme.fontSizes.headline1} + 1px);\n        font-weight: ${o.default.theme.fontWeights.heavy};\n        line-height: ${o.default.theme.lineHeights.title4};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two {\n        font-size: ${o.default.theme.fontSizes.title3};\n        font-weight: ${o.default.theme.fontWeights.heavy};\n        line-height: ${o.default.theme.lineHeights.title2};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two-narrow {\n        font-size: calc(${o.default.theme.fontSizes.headline2} + 1px);\n        font-weight: ${o.default.theme.fontWeights.heavy};\n        line-height: ${o.default.theme.lineHeights.headline1};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled, .longform-blockquote {\n        font-size: ${o.default.theme.fontSizes.headline2};\n        line-height: ${o.default.theme.lineHeights.title4};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled-narrow, .longform-blockquote-narrow {\n        font-size: ${o.default.theme.fontSizes.headline2};\n        line-height: ${o.default.theme.lineHeights.title4};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item, .longform-ordered-list-item {\n        display: block;\n        font-size: ${o.default.theme.fontSizes.headline2};\n        line-height: ${o.default.theme.lineHeights.title4};   \n        margin-bottom: ${o.default.theme.spaces.space12};\n        margin-left: calc(${o.default.theme.spaces.space28} + ${o.default.theme.spaces.space2});\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item-narrow, .longform-ordered-list-item-narrow {\n        display: block;\n        font-size: ${o.default.theme.fontSizes.headline2};\n        line-height: ${o.default.theme.lineHeights.title4};   \n        margin-bottom: calc(${o.default.theme.spaces.space12} / 2);\n        margin-left: ${o.default.theme.spaces.space36};\n        margin-top: 0;\n    }\n\n    .longform-blockquote, .longform-blockquote-narrow {\n        margin-bottom: calc(${o.default.theme.spaces.space24} + ${o.default.theme.spaces.space2});\n        margin-left: 0;\n        margin-top: calc(-${o.default.theme.spaces.space2});\n        padding-left: calc(${o.default.theme.spaces.space24} + 3px);\n        position: relative;\n    }\n\n    .longform-blockquote:before, .longform-blockquote-narrow:before {\n        background: ${o.default.theme.colors.gray900};\n        border-radius: ${o.default.theme.borderRadii.infinite};\n        bottom: 0;\n        content: "";\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 3px;\n    }\n\n    .longform-header-one .public-DraftStyleDefault-block,\n    .longform-header-two .public-DraftStyleDefault-block,\n    .longform-unstyled .public-DraftStyleDefault-block,\n    .longform-unordered-list-item .public-DraftStyleDefault-block,\n    .longform-ordered-list-item .public-DraftStyleDefault-block,\n    .longform-header-one-narrow .public-DraftStyleDefault-block,\n    .longform-header-two-narrow .public-DraftStyleDefault-block,\n    .longform-unstyled-narrow .public-DraftStyleDefault-block,\n    .longform-unordered-list-item-narrow .public-DraftStyleDefault-block,\n    .longform-ordered-list-item-narrow .public-DraftStyleDefault-block {\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n\n    .public-DraftStyleDefault-ul, .public-DraftStyleDefault-ol {\n        counter-reset: item;\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n        padding-left: 0;\n    }\n\n    .longform-unordered-list-item:before, .longform-ordered-list-item:before,\n    .longform-unordered-list-item-narrow:before, .longform-ordered-list-item-narrow:before {\n        position: absolute;\n        margin-left: calc(-1 * (${o.default.theme.spaces.space28} + ${o.default.theme.spaces.space2}));\n    }\n\n    .longform-unordered-list-item:before {\n        content: counter(item, disc);\n        font-size: ${o.default.theme.fontSizes.title4}\n    }\n\n    .longform-unordered-list-item-narrow:before {\n        content: counter(item, disc);\n        font-size: ${o.default.theme.fontSizes.headline1}\n    }\n\n    .longform-ordered-list-item:before, .longform-ordered-list-item-narrow:before {\n        content: counter(item) ". ";\n        counter-increment: item;\n    }\n\n    .longform-ordered-list-item::marker, .longform-ordered-list-item-narrow::marker {\n        font-variant-numeric: normal;\n    }\n`;
        },
        779802: (e, t, n) => {
            n.d(t, { $u: () => S, Ak: () => I, KJ: () => y, LI: () => v, P7: () => b, PW: () => z, QF: () => p, Qm: () => w, Tr: () => x, b$: () => g, db: () => T, et: () => k, fR: () => h, iH: () => E, lD: () => $, su: () => D, u4: () => H, wX: () => P });
            var o = n(202784),
                r = n(111677),
                l = n.n(r),
                i = n(394123),
                a = n(856661),
                d = n(69893),
                f = n(474761),
                s = n(428259),
                c = n(89085),
                m = n(630715),
                u = n(731708);
            const h = { bold: "BOLD", italic: "ITALIC", strikethrough: "STRIKETHROUGH" },
                g = (e) => [
                    { buttonTestId: "btn-bold", Icon: i.default, key: h.bold, onPress: e(h.bold) },
                    { buttonTestId: "btn-italic", Icon: a.default, key: h.italic, onPress: e(h.italic) },
                    { buttonTestId: "btn-strikethrough", Icon: d.default, key: h.strikethrough, onPress: e(h.strikethrough) },
                ],
                b = { atomic: "atomic", blockquote: "blockquote", bulleted: "unordered-list-item", header1: "header-one", header2: "header-two", numbered: "ordered-list-item", paragraph: "unstyled" },
                p = (e) => [{ buttonTestId: "btn-blockquote", Icon: f.default, key: b.blockquote, onPress: e(b.blockquote) }],
                $ = (e) => [
                    { buttonTestId: "btn-ul", Icon: s.default, key: b.bulleted, onPress: e(b.bulleted) },
                    { buttonTestId: "btn-ol", Icon: c.default, key: b.numbered, onPress: e(b.numbered) },
                ],
                w = "LINK",
                y = (e) => [{ buttonTestId: "btn-link", Icon: m.default, key: w, onPress: e }],
                D = (e, t) => (n) => {
                    const o = (t) => (e ? `${t}-narrow` : t);
                    switch (n.getType()) {
                        case b.bulleted:
                            return o("longform-unordered-list-item");
                        case b.blockquote:
                            return o("longform-blockquote");
                        case b.header1:
                            return o("longform-header-one");
                        case b.header2:
                            return o("longform-header-two");
                        case b.numbered:
                            return o("longform-ordered-list-item");
                        case b.paragraph:
                            return o("longform-unstyled");
                        default:
                            return t?.(n) || "";
                    }
                },
                k = l().d5a48014,
                z = l().b92b6156,
                S = l().ec5ed598,
                v = ({ children: e, extendedWidth: t, size: n, weight: r }) => o.createElement(u.ZP, { extendedWidth: t, size: n, weight: r }, e),
                x = { blockType: b.paragraph, label: S, component: v({ size: "body", children: S }) },
                E = [{ blockType: b.header1, label: k, component: v({ size: "title1", extendedWidth: !0, children: k }) }, { blockType: b.header2, label: z, component: v({ size: "title3", weight: "heavy", children: z }) }, x],
                P = ["backspace", "backspace-word", "backspace-to-start-of-line"],
                I = ["delete", "delete-word", "delete-to-start-of-line"],
                H = "increase-text-size",
                T = "decrease-text-size";
        },
        989272: (e, t, n) => {
            n.d(t, { _i: () => r, fH: () => i, w3: () => l });
            n(136728);
            var o = n(392237);
            const r = Object.freeze({ single_line: "singleline", format_inline: "format-inline" });
            function l(e) {
                i(
                    (function () {
                        const e = o.default.theme.spaces.space2;
                        return `\n     .DraftEditor-editorContainer, .DraftEditor-root, .public-DraftEditor-content {\n        height: inherit;\n        max-height: inherit;\n        min-height: inherit;\n        text-align: initial;\n    }\n\n    .public-DraftEditor-content[contenteditable=true] {\n        -moz-user-modify: read-write-plaintext-only;\n        -webkit-user-modify: read-write-plaintext-only;\n    }\n\n    .${r.format_inline} .public-DraftEditor-content[contenteditable=true] {\n      -moz-user-modify: read-write;\n      -webkit-user-modify: read-write;\n    }\n\n    .DraftEditor-root {\n        width: 100%;\n        position: relative;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditor-editorContainer {\n        background-color: rgba(255, 255, 255, 0);\n        border-left: .1px solid transparent;\n        position: relative;\n        z-index: 1;\n    }\n\n    .public-DraftEditor-block {\n        position: relative;\n    }\n\n    .DraftEditor-alignLeft .public-DraftStyleDefault-block {\n        text-align: left;\n    }\n\n    .DraftEditor-alignLeft .public-DraftEditorPlaceholder-root {\n        left: 0;\n        text-align: left;\n    }\n\n    .DraftEditor-alignCenter .public-DraftStyleDefault-block {\n        text-align: center\n    }\n\n    .DraftEditor-alignCenter .public-DraftEditorPlaceholder-root {\n        margin: 0 auto;\n        text-align: center;\n        width: 100%\n    }\n\n    .DraftEditor-alignRight .public-DraftStyleDefault-block {\n        text-align: right;\n    }\n\n    .DraftEditor-alignRight .public-DraftEditorPlaceholder-root {\n        right: 0;\n        text-align: right;\n    }\n\n    .public-DraftEditorPlaceholder-root {\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: absolute;\n        z-index: 1;\n    }\n\n    .public-DraftEditorPlaceholder-inner {\n        user-select: none;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditorPlaceholder-hidden {\n        display: none;\n    }\n\n    .public-DraftStyleDefault-block {\n        overflow:hidden;\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: relative;\n        white-space: pre-wrap;\n    }\n\n    /* Only a handful of CSS rules work on br tags and user-select isn't one */\n    div:only-child > .public-DraftStyleDefault-block > span > br::selection {\n        background: transparent;\n    }\n\n    /*\n       Safari doesn't let you change ::selection on br elements,\n       but Chrome needs it here\n    */\n    div:only-child > .public-DraftStyleDefault-block > span:has(br)::selection {\n        background: transparent;\n    }\n\n    .public-DraftStyleDefault-ltr {\n        direction: ltr;\n        text-align: left;\n    }\n\n    .public-DraftStyleDefault-rtl {\n        direction: rtl;\n        text-align: right;\n    }\n\n    .DraftEditor-editorContainer a {\n        font-family: inherit;\n        font-size: inherit;\n        line-height: inherit;\n        margin-bottom: inherit;\n        margin-top: inherit;\n    }\n\n    .${r.single_line} .public-DraftStyleDefault-block {\n        overflow-x: auto;\n        scrollbar-width: none;\n        white-space: nowrap;\n        -ms-overflow-style: none;\n    }\n\n    .${r.single_line} .public-DraftStyleDefault-block::-webkit-scrollbar {\n        display: none;\n    }\n  `;
                    })(),
                    a,
                );
                const t = d(e);
                return (
                    i(
                        (function (e) {
                            const t = d(e);
                            let n = e.placeholderTextColor;
                            const r = e.contentHorizontalPadding;
                            n || (n = o.default.theme.colors.gray700);
                            return `\n    .${t} .public-DraftEditorPlaceholder-root {\n      color: ${n};\n    }\n\n    .${t} .public-DraftEditorPlaceholder-hasFocus {\n      color: ${n};\n    }\n\n    ${r ? `\n        .${t} .public-DraftEditor-content,\n        .${t} .public-DraftEditorPlaceholder-root {\n          padding-left: ${r};\n          padding-right: ${r};\n        }\n      ` : ""}\n  `;
                        })(e),
                        t,
                    ),
                    t
                );
            }
            function i(e, t) {
                if (
                    !(function (e) {
                        return !!document.getElementById(e);
                    })(t)
                ) {
                    const n = document.createElement("style");
                    n.setAttribute("id", t), (n.innerHTML = e);
                    const o = document.head;
                    o && o.insertBefore(n, o.firstChild);
                }
            }
            const a = "draftjs-styles";
            function d(e) {
                const t = (function (e) {
                    for (let t = 0; t < f.length; t++) {
                        if (f[t] === e) return String(t);
                    }
                    return f.push(e), String(f.length - 1);
                })(JSON.stringify(e));
                return `${a}_${t}`;
            }
            const f = [];
        },
        394123: (e, t, n) => {
            n.r(t), n.d(t, { default: () => d });
            var o = n(202784),
                r = n(890601),
                l = n(783427),
                i = n(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M15.636 11.671c2.079-.583 3.093-2.18 3.093-3.929 0-2.307-1.471-4.741-5.983-4.741H5.623V21h7.579c4.411 0 6.008-2.484 6.008-4.994 0-2.383-1.343-3.955-3.574-4.335zm-3.295-6.287c2.535 0 3.27 1.319 3.27 2.662 0 1.242-.583 2.611-3.27 2.611H8.69V5.384h3.651zM8.69 18.617v-5.628h4.208c2.231 0 3.194 1.166 3.194 2.738 0 1.547-.887 2.89-3.397 2.89H8.69z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const d = a;
        },
        474761: (e, t, n) => {
            n.r(t), n.d(t, { default: () => d });
            var o = n(202784),
                r = n(890601),
                l = n(783427),
                i = n(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M10.883 4H2v8.5h2.255c-.643 1.14-1.66 1.83-2.735 2.51l3.224 5.06c3.139-2 5.335-4.63 6.084-8.37.444-2.21.405-4.55.154-6.81L10.883 4zM4 10.5V6h5.081c.151 1.84.121 3.64-.213 5.31-.466 2.32-1.519 4.39-3.537 5.96l-1.083-1.7c1.43-1.18 2.662-3.14 2.662-5.07H4zM21.876 4h-8.882v8.5h2.255c-.644 1.14-1.66 1.83-2.735 2.51l3.224 5.06c3.138-2 5.334-4.63 6.083-8.37.444-2.21.406-4.55.154-6.81L21.876 4zm-6.883 6.5V6h5.082c.151 1.84.121 3.64-.214 5.31-.466 2.32-1.519 4.39-3.537 5.96l-1.083-1.7c1.43-1.18 2.663-3.14 2.663-5.07h-2.911z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const d = a;
        },
        69893: (e, t, n) => {
            n.r(t), n.d(t, { default: () => d });
            var o = n(202784),
                r = n(890601),
                l = n(783427),
                i = n(347101);
            const a = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M17.879 15c.079.323.121.658.121 1 0 2.757-2.691 5-6 5s-6-2.243-6-5h2c0 1.654 1.794 3 4 3s4-1.346 4-3c0-.352-.096-.686-.246-1h2.125zM12 11c-2.206 0-4-1.346-4-3s1.794-3 4-3 4 1.346 4 3h2c0-2.757-2.691-5-6-5S6 5.243 6 8c0 1.126.455 2.163 1.211 3H3v2h18v-2h-9z" })) }, { writingDirection: t });
            };
            a.metadata = { width: 24, height: 24 };
            const d = a;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.SettingsExtendedProfile~bundle.UserJobs~bundle.ExtendedUserProfile.00f9311a.js.map
