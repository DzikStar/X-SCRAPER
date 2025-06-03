"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.SettingsExtendedProfile~bundle.WorkHistory~bundle.ExtendedUserProfile", "icons/IconBulletedList-js"],
    {
        949626: (e, n, t) => {
            t.d(n, { Z: () => l });
            t(202784);
            var o = t(950822);
            const l = (e) => (0, o.Z)("div", e);
        },
        128586: (e, n, t) => {
            t.d(n, { Z: () => y });
            var o,
                l,
                r = t(202784),
                i = t(190286),
                a = t(111677),
                d = t.n(a),
                s = t(782642),
                f = t(72130),
                c = t(725516),
                m = {
                    fragment: {
                        argumentDefinitions: (o = [
                            { defaultValue: null, kind: "LocalArgument", name: "blockId" },
                            { defaultValue: null, kind: "LocalArgument", name: "userId" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useDeleteProfileBlockMutation",
                        selections: (l = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "block_id", variableName: "blockId" },
                                    { kind: "Literal", name: "s", value: "f3d8" },
                                    { kind: "Variable", name: "user_id", variableName: "userId" },
                                ],
                                concreteType: "ProfileBlockOperationSuccess",
                                kind: "LinkedField",
                                name: "delete_profile_block",
                                plural: !1,
                                selections: [{ alias: null, args: null, kind: "ScalarField", name: "success", storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: o, kind: "Operation", name: "useDeleteProfileBlockMutation", selections: l },
                    params: { id: "EvvA9IQR0sKW0tGqXwSzKA", metadata: {}, name: "useDeleteProfileBlockMutation", operationKind: "mutation", text: null },
                };
            m.hash = "5d2c7077ac04854de170e0b8fd37dc6f";
            const u = m;
            t(585488);
            var h = t(351743),
                g = t.n(h);
            const b = u,
                p = () => {
                    const [e, n] = g()(b);
                    return [
                        r.useCallback(
                            (n) => {
                                e(n);
                            },
                            [e],
                        ),
                        n,
                    ];
                },
                $ = d().g9677c6e,
                k = d().a2b8c54c,
                y = ({ blockId: e, headline: n, onClose: t, onCompleted: o, queryId: l, subtext: a, userId: d }) => {
                    const m = (0, s.p)(),
                        u = (0, c.z)(),
                        [h, g] = p(),
                        b = r.useCallback(() => {
                            t();
                        }, [t]),
                        y = r.useCallback(() => {
                            u.scribe({ ...(0, f.MA)("delete_block_btn", "click") }),
                                h({
                                    variables: { blockId: e, userId: d },
                                    updater: (e, n) => {
                                        l && e.delete(l);
                                    },
                                    onCompleted: (e) => {
                                        e?.delete_profile_block?.success && (m({ text: k }), t(), o && o());
                                    },
                                });
                        }, [m, u, e, h, t, o, l, d]);
                    return r.createElement(i.Z, { confirmButtonDisabled: g, confirmButtonLabel: $, confirmButtonType: "destructiveFilled", enableMaskForDismiss: !0, headline: n, onCancel: b, onConfirm: y, text: a });
                };
        },
        785813: (e, n, t) => {
            t.d(n, { Z: () => r });
            var o = t(202784),
                l = t(366635);
            const r = (e) => (e ? o.createElement(l.Z, { affiliateBadgeInfo: e?.highlightedLabel, isBlueVerified: e?.is_blue_verified, isProtected: e?.protected, isVerified: e?.verified, name: e?.name, verifiedType: e?.verified_type }) : null);
        },
        825495: (e, n, t) => {
            t.d(n, { Z: () => r });
            var o = t(202784),
                l = t(823161);
            const r = (e) => {
                if (!e) return null;
                const n = "Square" === e?.profile_image_shape ? "square" : "circle";
                return o.createElement(l.default, { shape: n, size: "xLarge", uri: e?.profile_image_url_https });
            };
        },
        478414: (e, n, t) => {
            t.d(n, { Hx: () => d, K: () => r, bb: () => a, gv: () => i, kg: () => s, yW: () => f });
            var o = t(779802),
                l = t(392237);
            const r = { h1FontSize: "headline1", h2FontSize: "headline2", paragraphFontSize: "subtext1" },
                i = { h1FontSize: "title4", h2FontSize: "headline1", paragraphFontSize: "headline2" },
                a = ({ h1FontSize: e, h2FontSize: n, paragraphFontSize: t }) => [
                    { blockType: o.P7.header1, label: o.et, component: (0, o.LI)({ size: e, children: o.et, extendedWidth: !0 }) },
                    { blockType: o.P7.header2, label: o.PW, component: (0, o.LI)({ size: n, weight: "bold", children: o.PW }) },
                    { blockType: o.P7.paragraph, label: o.$u, component: (0, o.LI)({ size: t, children: o.$u }) },
                ],
                d = "extended-profile",
                s = "extended-profile-mobile-webview",
                f = (e, { h1FontSize: n, h2FontSize: t, paragraphFontSize: o }) =>
                    `\n    .${e} .longform-header-one {\n        font-family: ${l.default.theme.fontFamilies.chirpExtended};\n        font-size: ${l.default.theme.fontSizes[n]};\n        line-height: ${l.default.theme.spaces.space28};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-one-narrow {\n        font-family: ${l.default.theme.fontFamilies.chirpExtended};\n        font-size: ${l.default.theme.fontSizes[n]};\n        line-height: ${l.default.theme.spaces.space28};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-two {\n        font-size: ${l.default.theme.fontSizes[t]};\n        font-weight: ${l.default.theme.fontWeights.bold};\n        line-height: ${l.default.theme.spaces.space24};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-header-two-narrow {\n        font-size: calc(${l.default.theme.fontSizes[t]} + 1px);\n        font-weight: ${l.default.theme.fontWeights.bold};\n        line-height: ${l.default.theme.spaces.space24};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unstyled, \n    .${e} .longform-blockquote {\n        font-size: ${l.default.theme.fontSizes[o]};\n        line-height: ${l.default.theme.lineHeights.headline1};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unstyled-narrow, \n    .${e} .longform-blockquote-narrow {\n        font-size: ${l.default.theme.fontSizes[o]};\n        line-height: ${l.default.theme.lineHeights.headline1};\n        margin-bottom: 0;\n        margin-top: 0;\n    }\n\n    .${e} .longform-unordered-list-item, \n    .${e} .longform-ordered-list-item {\n        display: block;\n        font-size: ${l.default.theme.fontSizes[o]};\n        line-height: ${l.default.theme.lineHeights.headline1};\n        margin-bottom: ${l.default.theme.spaces.space2};\n        margin-left: calc(${l.default.theme.spaces.space20} + ${l.default.theme.spaces.space2});\n        margin-top: 0;\n    }\n\n    .${e} .longform-unordered-list-item-narrow, \n    .${e} .longform-ordered-list-item-narrow {\n        display: block;\n        font-size: ${l.default.theme.fontSizes[o]};\n        line-height: ${l.default.theme.lineHeights.headline1};\n        margin-bottom: ${l.default.theme.spaces.space2};\n        margin-left: ${l.default.theme.spaces.space36};\n        margin-top: 0;\n    }\n\n    .${e} .longform-blockquote, \n    .${e} .longform-blockquote-narrow {\n        margin-bottom: 0;\n        margin-left: 0;\n        margin-top: calc(-${l.default.theme.spaces.space2});\n        padding-left: calc(${l.default.theme.spaces.space20} + 2px);\n        position: relative;\n    }\n\n    .${e} .longform-blockquote:before, \n    .${e} .longform-blockquote-narrow:before {\n        background: ${l.default.theme.colors.gray900};\n        border-radius: ${l.default.theme.borderRadii.infinite};\n        bottom: 0;\n        content: "";\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 3px;\n    }\n\n    .${e} .longform-header-one .public-DraftStyleDefault-block,\n    .${e} .longform-header-two .public-DraftStyleDefault-block,\n    .${e} .longform-unstyled .public-DraftStyleDefault-block,\n    .${e} .longform-unordered-list-item .public-DraftStyleDefault-block,\n    .${e} .longform-ordered-list-item .public-DraftStyleDefault-block,\n    .${e} .longform-header-one-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-header-two-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-unstyled-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-unordered-list-item-narrow .public-DraftStyleDefault-block,\n    .${e} .longform-ordered-list-item-narrow .public-DraftStyleDefault-block {\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n\n    .${e} .public-DraftStyleDefault-ul, \n    .${e} .public-DraftStyleDefault-ol {\n        counter-reset: item;\n        margin-bottom: 0;\n        margin-top: 0;\n        padding-left: 0;\n    }\n\n    .${e} .longform-unordered-list-item:before, \n    .${e} .longform-ordered-list-item:before,\n    .${e} .longform-unordered-list-item-narrow:before, \n    .${e} .longform-ordered-list-item-narrow:before {\n        position: absolute;\n        margin-left: calc(-1 * (${l.default.theme.spaces.space20} + ${l.default.theme.spaces.space2}));\n    }\n\n    .${e} .longform-unordered-list-item:before {\n        content: counter(item, disc);\n        font-size: ${l.default.theme.fontSizes[o]}\n    }\n\n    .${e} .longform-unordered-list-item-narrow:before {\n        content: counter(item, disc);\n        font-size: ${l.default.theme.fontSizes[o]}\n    }\n\n    .${e} .longform-ordered-list-item:before, \n    .${e} .longform-ordered-list-item-narrow:before {\n        content: counter(item) ". ";\n        counter-increment: item;\n    }\n\n    .${e} .longform-ordered-list-item::marker, \n    .${e} .longform-ordered-list-item-narrow::marker {\n        font-variant-numeric: normal;\n    }\n`;
        },
        72130: (e, n, t) => {
            t.d(n, { Ak: () => a, MA: () => i, Rz: () => o, Zi: () => r, he: () => l });
            const o = () => ({ component: "extended_profile_settings", action: "click" }),
                l = (e) => ({ component: "extended_profile", element: "extended_profile_edit_btn", action: "click", data: e }),
                r = (e, n) => ({ component: "extended_profile", action: "impression", data: { profile_id: e, ...n } }),
                i = (e, n, t) => ({ component: "rich_text_editor", element: e, action: n, data: t }),
                a = (e, n, t) => ({ component: "work_history_editor", element: e, action: n, data: { version: 2, ...t } });
        },
        520385: (e, n, t) => {
            t.d(n, { Mp: () => l, NB: () => r, P2: () => i, j3: () => o, pR: () => a });
            const o = 5e4,
                l = { RICHTEXT: "Richtext", WORK_HISTORY: "WorkExperience" },
                r = (l.RICHTEXT, l.WORK_HISTORY, { ABOUT: "About", WORK_EXPERIENCE: "WorkExperience" }),
                i = { about: r.ABOUT, work_experience: r.WORK_EXPERIENCE },
                a = { PUBLIC: "Public", PRIVATE: "Private" };
        },
        135904: (e, n, t) => {
            t.d(n, { c: () => r, n: () => l });
            var o = t(392237);
            const l = "longform-styles",
                r = `\n    .longform-header-one {\n        font-size: ${o.default.theme.fontSizes.title2};\n        font-weight: ${o.default.theme.fontWeights.heavy};\n        line-height: ${o.default.theme.lineHeights.title1};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-one-narrow {\n        font-size: calc(${o.default.theme.fontSizes.headline1} + 1px);\n        font-weight: ${o.default.theme.fontWeights.heavy};\n        line-height: ${o.default.theme.lineHeights.title4};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two {\n        font-size: ${o.default.theme.fontSizes.title3};\n        font-weight: ${o.default.theme.fontWeights.heavy};\n        line-height: ${o.default.theme.lineHeights.title2};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two-narrow {\n        font-size: calc(${o.default.theme.fontSizes.headline2} + 1px);\n        font-weight: ${o.default.theme.fontWeights.heavy};\n        line-height: ${o.default.theme.lineHeights.headline1};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled, .longform-blockquote {\n        font-size: ${o.default.theme.fontSizes.headline2};\n        line-height: ${o.default.theme.lineHeights.title4};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled-narrow, .longform-blockquote-narrow {\n        font-size: ${o.default.theme.fontSizes.headline2};\n        line-height: ${o.default.theme.lineHeights.title4};\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item, .longform-ordered-list-item {\n        display: block;\n        font-size: ${o.default.theme.fontSizes.headline2};\n        line-height: ${o.default.theme.lineHeights.title4};   \n        margin-bottom: ${o.default.theme.spaces.space12};\n        margin-left: calc(${o.default.theme.spaces.space28} + ${o.default.theme.spaces.space2});\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item-narrow, .longform-ordered-list-item-narrow {\n        display: block;\n        font-size: ${o.default.theme.fontSizes.headline2};\n        line-height: ${o.default.theme.lineHeights.title4};   \n        margin-bottom: calc(${o.default.theme.spaces.space12} / 2);\n        margin-left: ${o.default.theme.spaces.space36};\n        margin-top: 0;\n    }\n\n    .longform-blockquote, .longform-blockquote-narrow {\n        margin-bottom: calc(${o.default.theme.spaces.space24} + ${o.default.theme.spaces.space2});\n        margin-left: 0;\n        margin-top: calc(-${o.default.theme.spaces.space2});\n        padding-left: calc(${o.default.theme.spaces.space24} + 3px);\n        position: relative;\n    }\n\n    .longform-blockquote:before, .longform-blockquote-narrow:before {\n        background: ${o.default.theme.colors.gray900};\n        border-radius: ${o.default.theme.borderRadii.infinite};\n        bottom: 0;\n        content: "";\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 3px;\n    }\n\n    .longform-header-one .public-DraftStyleDefault-block,\n    .longform-header-two .public-DraftStyleDefault-block,\n    .longform-unstyled .public-DraftStyleDefault-block,\n    .longform-unordered-list-item .public-DraftStyleDefault-block,\n    .longform-ordered-list-item .public-DraftStyleDefault-block,\n    .longform-header-one-narrow .public-DraftStyleDefault-block,\n    .longform-header-two-narrow .public-DraftStyleDefault-block,\n    .longform-unstyled-narrow .public-DraftStyleDefault-block,\n    .longform-unordered-list-item-narrow .public-DraftStyleDefault-block,\n    .longform-ordered-list-item-narrow .public-DraftStyleDefault-block {\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n\n    .public-DraftStyleDefault-ul, .public-DraftStyleDefault-ol {\n        counter-reset: item;\n        margin-bottom: ${o.default.theme.spaces.space28};\n        margin-top: 0;\n        padding-left: 0;\n    }\n\n    .longform-unordered-list-item:before, .longform-ordered-list-item:before,\n    .longform-unordered-list-item-narrow:before, .longform-ordered-list-item-narrow:before {\n        position: absolute;\n        margin-left: calc(-1 * (${o.default.theme.spaces.space28} + ${o.default.theme.spaces.space2}));\n    }\n\n    .longform-unordered-list-item:before {\n        content: counter(item, disc);\n        font-size: ${o.default.theme.fontSizes.title4}\n    }\n\n    .longform-unordered-list-item-narrow:before {\n        content: counter(item, disc);\n        font-size: ${o.default.theme.fontSizes.headline1}\n    }\n\n    .longform-ordered-list-item:before, .longform-ordered-list-item-narrow:before {\n        content: counter(item) ". ";\n        counter-increment: item;\n    }\n\n    .longform-ordered-list-item::marker, .longform-ordered-list-item-narrow::marker {\n        font-variant-numeric: normal;\n    }\n`;
        },
        779802: (e, n, t) => {
            t.d(n, { $u: () => z, Ak: () => I, KJ: () => y, LI: () => v, P7: () => b, PW: () => S, QF: () => p, Qm: () => k, Tr: () => x, b$: () => g, db: () => T, et: () => w, fR: () => h, iH: () => E, lD: () => $, su: () => D, u4: () => P, wX: () => _ });
            var o = t(202784),
                l = t(111677),
                r = t.n(l),
                i = t(394123),
                a = t(856661),
                d = t(69893),
                s = t(474761),
                f = t(428259),
                c = t(89085),
                m = t(630715),
                u = t(731708);
            const h = { bold: "BOLD", italic: "ITALIC", strikethrough: "STRIKETHROUGH" },
                g = (e) => [
                    { buttonTestId: "btn-bold", Icon: i.default, key: h.bold, onPress: e(h.bold) },
                    { buttonTestId: "btn-italic", Icon: a.default, key: h.italic, onPress: e(h.italic) },
                    { buttonTestId: "btn-strikethrough", Icon: d.default, key: h.strikethrough, onPress: e(h.strikethrough) },
                ],
                b = { atomic: "atomic", blockquote: "blockquote", bulleted: "unordered-list-item", header1: "header-one", header2: "header-two", numbered: "ordered-list-item", paragraph: "unstyled" },
                p = (e) => [{ buttonTestId: "btn-blockquote", Icon: s.default, key: b.blockquote, onPress: e(b.blockquote) }],
                $ = (e) => [
                    { buttonTestId: "btn-ul", Icon: f.default, key: b.bulleted, onPress: e(b.bulleted) },
                    { buttonTestId: "btn-ol", Icon: c.default, key: b.numbered, onPress: e(b.numbered) },
                ],
                k = "LINK",
                y = (e) => [{ buttonTestId: "btn-link", Icon: m.default, key: k, onPress: e }],
                D = (e, n) => (t) => {
                    const o = (n) => (e ? `${n}-narrow` : n);
                    switch (t.getType()) {
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
                            return n?.(t) || "";
                    }
                },
                w = r().d5a48014,
                S = r().b92b6156,
                z = r().ec5ed598,
                v = ({ children: e, extendedWidth: n, size: t, weight: l }) => o.createElement(u.ZP, { extendedWidth: n, size: t, weight: l }, e),
                x = { blockType: b.paragraph, label: z, component: v({ size: "body", children: z }) },
                E = [{ blockType: b.header1, label: w, component: v({ size: "title1", extendedWidth: !0, children: w }) }, { blockType: b.header2, label: S, component: v({ size: "title3", weight: "heavy", children: S }) }, x],
                _ = ["backspace", "backspace-word", "backspace-to-start-of-line"],
                I = ["delete", "delete-word", "delete-to-start-of-line"],
                P = "increase-text-size",
                T = "decrease-text-size";
        },
        989272: (e, n, t) => {
            t.d(n, { _i: () => l, fH: () => i, w3: () => r });
            t(136728);
            var o = t(392237);
            const l = Object.freeze({ single_line: "singleline", format_inline: "format-inline" });
            function r(e) {
                i(
                    (function () {
                        const e = o.default.theme.spaces.space2;
                        return `\n     .DraftEditor-editorContainer, .DraftEditor-root, .public-DraftEditor-content {\n        height: inherit;\n        max-height: inherit;\n        min-height: inherit;\n        text-align: initial;\n    }\n\n    .public-DraftEditor-content[contenteditable=true] {\n        -moz-user-modify: read-write-plaintext-only;\n        -webkit-user-modify: read-write-plaintext-only;\n    }\n\n    .${l.format_inline} .public-DraftEditor-content[contenteditable=true] {\n      -moz-user-modify: read-write;\n      -webkit-user-modify: read-write;\n    }\n\n    .DraftEditor-root {\n        width: 100%;\n        position: relative;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditor-editorContainer {\n        background-color: rgba(255, 255, 255, 0);\n        border-left: .1px solid transparent;\n        position: relative;\n        z-index: 1;\n    }\n\n    .public-DraftEditor-block {\n        position: relative;\n    }\n\n    .DraftEditor-alignLeft .public-DraftStyleDefault-block {\n        text-align: left;\n    }\n\n    .DraftEditor-alignLeft .public-DraftEditorPlaceholder-root {\n        left: 0;\n        text-align: left;\n    }\n\n    .DraftEditor-alignCenter .public-DraftStyleDefault-block {\n        text-align: center\n    }\n\n    .DraftEditor-alignCenter .public-DraftEditorPlaceholder-root {\n        margin: 0 auto;\n        text-align: center;\n        width: 100%\n    }\n\n    .DraftEditor-alignRight .public-DraftStyleDefault-block {\n        text-align: right;\n    }\n\n    .DraftEditor-alignRight .public-DraftEditorPlaceholder-root {\n        right: 0;\n        text-align: right;\n    }\n\n    .public-DraftEditorPlaceholder-root {\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: absolute;\n        z-index: 1;\n    }\n\n    .public-DraftEditorPlaceholder-inner {\n        user-select: none;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditorPlaceholder-hidden {\n        display: none;\n    }\n\n    .public-DraftStyleDefault-block {\n        overflow:hidden;\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: relative;\n        white-space: pre-wrap;\n    }\n\n    /* Only a handful of CSS rules work on br tags and user-select isn't one */\n    div:only-child > .public-DraftStyleDefault-block > span > br::selection {\n        background: transparent;\n    }\n\n    /*\n       Safari doesn't let you change ::selection on br elements,\n       but Chrome needs it here\n    */\n    div:only-child > .public-DraftStyleDefault-block > span:has(br)::selection {\n        background: transparent;\n    }\n\n    .public-DraftStyleDefault-ltr {\n        direction: ltr;\n        text-align: left;\n    }\n\n    .public-DraftStyleDefault-rtl {\n        direction: rtl;\n        text-align: right;\n    }\n\n    .DraftEditor-editorContainer a {\n        font-family: inherit;\n        font-size: inherit;\n        line-height: inherit;\n        margin-bottom: inherit;\n        margin-top: inherit;\n    }\n\n    .${l.single_line} .public-DraftStyleDefault-block {\n        overflow-x: auto;\n        scrollbar-width: none;\n        white-space: nowrap;\n        -ms-overflow-style: none;\n    }\n\n    .${l.single_line} .public-DraftStyleDefault-block::-webkit-scrollbar {\n        display: none;\n    }\n  `;
                    })(),
                    a,
                );
                const n = d(e);
                return (
                    i(
                        (function (e) {
                            const n = d(e);
                            let t = e.placeholderTextColor;
                            const l = e.contentHorizontalPadding;
                            t || (t = o.default.theme.colors.gray700);
                            return `\n    .${n} .public-DraftEditorPlaceholder-root {\n      color: ${t};\n    }\n\n    .${n} .public-DraftEditorPlaceholder-hasFocus {\n      color: ${t};\n    }\n\n    ${l ? `\n        .${n} .public-DraftEditor-content,\n        .${n} .public-DraftEditorPlaceholder-root {\n          padding-left: ${l};\n          padding-right: ${l};\n        }\n      ` : ""}\n  `;
                        })(e),
                        n,
                    ),
                    n
                );
            }
            function i(e, n) {
                if (
                    !(function (e) {
                        return !!document.getElementById(e);
                    })(n)
                ) {
                    const t = document.createElement("style");
                    t.setAttribute("id", n), (t.innerHTML = e);
                    const o = document.head;
                    o && o.insertBefore(t, o.firstChild);
                }
            }
            const a = "draftjs-styles";
            function d(e) {
                const n = (function (e) {
                    for (let n = 0; n < s.length; n++) {
                        if (s[n] === e) return String(n);
                    }
                    return s.push(e), String(s.length - 1);
                })(JSON.stringify(e));
                return `${a}_${n}`;
            }
            const s = [];
        },
        428259: (e, n, t) => {
            t.r(n), t.d(n, { default: () => d });
            var o = t(202784),
                l = t(890601),
                r = t(783427),
                i = t(347101);
            const a = (e = {}) => {
                const { direction: n } = (0, r.Z)();
                return (0, l.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: o.createElement("g", null, o.createElement("path", { d: "M6 13.5c-1.934 0-3.5 1.567-3.5 3.5s1.566 3.5 3.5 3.5 3.5-1.567 3.5-3.5-1.566-3.5-3.5-3.5zm0 5.25c-.962 0-1.75-.783-1.75-1.75s.788-1.75 1.75-1.75 1.75.783 1.75 1.75-.788 1.75-1.75 1.75zM22 8H12V6h10v2zM6 3.5C4.066 3.5 2.5 5.067 2.5 7s1.566 3.5 3.5 3.5S9.5 8.933 9.5 7 7.934 3.5 6 3.5zm0 5.25c-.962 0-1.75-.783-1.75-1.75S5.038 5.25 6 5.25 7.75 6.033 7.75 7 6.962 8.75 6 8.75zM22 18H12v-2h10v2z" })) }, { writingDirection: n });
            };
            a.metadata = { width: 24, height: 24 };
            const d = a;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.SettingsExtendedProfile~bundle.WorkHistory~bundle.ExtendedUserProfile.eb5ea73a.js.map
