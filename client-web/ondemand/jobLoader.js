"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.jobLoader"],
    {
        470275: (e, t, n) => {
            n.r(t), n.d(t, { default: () => v });
            var r = n(351322),
                o = n(202784),
                l = n(325686),
                a = n(688715),
                i = n(952428),
                c = n(65042),
                s = n(392237),
                d = n(668214),
                f = n(502909),
                u = n(600823);
            const m = (0, f.ZP)({ namespace: "jobs" }),
                p = u.Z.register(m);
            var h = n(386619);
            const g = (e, t) => t.entry.itemMetadata?.clientEventInfo?.component,
                b = (e, t) => p.select(e, t.entry.content.rest_id),
                y = (e, t) => {
                    const n = b(e, t),
                        r = n?.recruitingOrganization;
                    return r ? h.Z.select(e, r) : void 0;
                },
                w = (0, d.Z)().propsFromState(() => ({ component: g, job: b, recruitingOrganization: y })),
                D = ({ component: e, job: t, recruitingOrganization: n }) => {
                    const r = t?.rest_id,
                        s = t?.core?.job_page_url;
                    let d;
                    switch (e) {
                        case "job_search":
                        default:
                            d = s ? (0, a.ju)(s) : void 0;
                            break;
                        case "recommended_jobs":
                            d = r ? (0, a.ju)(`https://x.com/jobs/recommended/${r}`) : void 0;
                    }
                    return o.createElement(l.Z, { style: E.root }, o.createElement(i.Z, { link: d, style: E.listItem }, o.createElement(c.Z, { displayType: "carousel", employmentType: t?.core?.employment_type, formattedSalary: t?.core?.formatted_salary, location: t?.core?.location, recruitingOrganization: k(n), salaryInterval: t?.core?.salary_interval, salaryMax: t?.core?.salary_max, salaryMin: t?.core?.salary_min, shortDescription: t?.core?.short_description, title: t?.core?.title, titleSize: "body" })));
                },
                k = (e) => {
                    if (!e || !e.profile) return null;
                    const { is_blue_verified: t, name: n, profile_image_url_https: r, screen_name: o, verified: l, verified_type: a } = e.profile;
                    return { name: n, screen_name: o, verified: l, verified_type: a, is_blue_verified: t, profile_image_url_https: r };
                },
                E = s.default.create((e) => ({ root: { paddingStart: e.spaces.space12 }, listItem: { padding: e.spaces.space12, width: "20em", overflow: "hidden", borderRadius: e.borderRadii.xLarge, borderColor: e.colors.gray100, borderWidth: e.borderWidths.small } })),
                S = w(o.memo(D)),
                v = r.iH({ component: S }).getHandler();
        },
        386619: (e, t, n) => {
            n.d(t, { Z: () => a });
            var r = n(502909),
                o = n(600823);
            const l = (0, r.ZP)({ namespace: "recruitingOrganizations" }),
                a = o.Z.register(l);
        },
        65042: (e, t, n) => {
            n.d(t, { Z: () => $ });
            var r = n(202784),
                o = n(325686),
                l = n(264171),
                a = n(190636),
                i = n(536698),
                c = n(731708),
                s = n(872405),
                d = n(154003),
                f = n(524496),
                u = n(392237),
                m = n(823161),
                p = n(366635),
                h = n(89217),
                g = n(457458);
            const b = ({ displayType: e }) => {
                    switch (e) {
                        case "carousel":
                            return v.carouselMeta;
                        case "compact":
                            return v.compactMeta;
                        default:
                            return v.fullMeta;
                    }
                },
                y = ({ displayType: e }) => "carousel" !== e,
                w = ({ displayType: e }) => "carousel" !== e,
                D = (e) => {
                    const { displayType: t, recruitingOrganization: n } = e;
                    if (!n) return null;
                    const { is_blue_verified: o, name: l, profile_image_url_https: a, screen_name: i, verified: c, verified_type: d } = n,
                        f = "carousel" === t ? "medium" : void 0,
                        u = !!i,
                        h = r.createElement(p.Z, { isBlueVerified: o, isVerified: c, name: l, screenName: i || "<none>", verifiedType: d, weight: f, withScreenName: u });
                    return (({ displayType: e }) => "carousel" === e)(e) && a ? r.createElement(s.Z, { avatarCell: r.createElement(m.default, { shape: "square", size: "small", uri: a }), avatarCellStyle: v.avatarCell, avatarSize: "small", style: v.avatarRow }, h) : h;
                },
                k = (e) => {
                    const { location: t } = e;
                    return t ? r.createElement(o.Z, { style: v.locationWithIcon }, y(e) ? r.createElement(c.ZP, { color: "gray700", size: "body", style: v.dontShrinkMeBro }, r.createElement(l.default, null)) : null, r.createElement(c.ZP, { color: "gray700", style: v.elidedText }, t)) : null;
                },
                E = (e) => {
                    const { employmentType: t, formattedSalary: n, salaryInterval: l } = e;
                    return n || t ? r.createElement(o.Z, { style: v.metaRow }, n ? r.createElement(o.Z, { style: v.withIcon }, y(e) ? r.createElement(c.ZP, { color: "gray700", size: "body" }, r.createElement(a.default, null)) : null, r.createElement(c.ZP, { color: "gray700" }, (0, g.M)(n, l))) : null, t ? r.createElement(o.Z, { style: v.withIcon }, y(e) ? r.createElement(c.ZP, { color: "gray700", size: "body" }, r.createElement(i.default, null)) : null, r.createElement(c.ZP, { color: "gray700" }, h.eo[t])) : null) : null;
                },
                S = ({ shortDescription: e }) => {
                    const t = (0, g.G)(e);
                    return t ? r.createElement(o.Z, { style: v.richTextWrapper }, r.createElement(f.Z, { contentState: t })) : null;
                },
                v = u.default.create((e) => ({ job: { display: "flex", flexDirection: "column", gap: e.spaces.space8 }, carouselJob: { display: "flex", flexDirection: "column", gap: e.spaces.space8 }, fullMeta: { gap: "inherit" }, carouselMeta: { gap: "inherit" }, compactMeta: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space12 }, withIcon: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4 }, locationWithIcon: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4, flex: 1 }, elidedText: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }, dontShrinkMeBro: { display: "flex", flexShrink: 0 }, metaRow: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space12 }, richTextWrapper: { color: e.colors.gray900, fontSize: e.fontSizes.body, fontFamily: e.fontFamilies.normal, fontWeight: e.fontWeights.regular, marginTop: e.spaces.space12 }, avatarRow: { alignItems: "center" }, avatarCell: { flexBasis: e.spaces.space12 } })),
                $ = (e) => {
                    const { displayType: t, title: n, titleSize: l } = e,
                        a = "carousel" === t,
                        i = "full" === t,
                        s = "full" !== t;
                    return r.createElement(o.Z, { style: a ? v.carouselJob : v.job }, r.createElement(c.ZP, { size: l, style: s ? v.elidedText : void 0, weight: "bold" }, n), r.createElement(D, e), r.createElement(o.Z, { style: b(e) }, r.createElement(k, e), w(e) ? r.createElement(E, e) : null), i ? r.createElement(r.Fragment, null, r.createElement(S, e), r.createElement(d.ZP, { "aria-label": "Apply", size: "small", type: "primaryFilled" }, "View job")) : null);
                };
        },
        89217: (e, t, n) => {
            n.d(t, { Ju: () => u, Qw: () => m, eo: () => s });
            var r = n(111677),
                o = n.n(r);
            const l = o().c69eb656,
                a = o().g46ae43c,
                i = o().jf7d4cc6,
                c = o().b2214572,
                s = Object.freeze({ full_time: l, full_time_contract: a, part_time: i, contract_to_hire: c }),
                d = o().f8337bd6,
                f = o().i935bf88,
                u = Object.freeze({ 1: d, 2: f }),
                m = Object.freeze({ annually: { label: d, value: 1 }, hourly: { label: f, value: 2 } });
        },
        457458: (e, t, n) => {
            n.d(t, { G: () => s, M: () => c });
            n(571372);
            var r = n(301503),
                o = n(111677),
                l = n.n(o),
                a = n(89217);
            const i = l().b75b8ffd,
                c = (e, t = 1) => {
                    const n = t ?? 1;
                    return a.Ju[n.toString()] ? i({ salary: e, interval: a.Ju[n.toString()] }) : e;
                },
                s = (e) => {
                    if (e)
                        try {
                            const t = JSON.parse(e);
                            if (!t.entityMap || !t.blocks) throw new Error("Malformed RawDraftContentState");
                            if (!(0, r.convertFromRaw)(t).hasText()) return;
                            return t;
                        } catch (e) {}
                };
        },
        135904: (e, t, n) => {
            n.d(t, { c: () => l, n: () => o });
            var r = n(392237);
            const o = "longform-styles",
                l = `\n    .longform-header-one {\n        font-size: ${r.default.theme.fontSizes.title2};\n        font-weight: ${r.default.theme.fontWeights.heavy};\n        line-height: ${r.default.theme.lineHeights.title1};\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-one-narrow {\n        font-size: calc(${r.default.theme.fontSizes.headline1} + 1px);\n        font-weight: ${r.default.theme.fontWeights.heavy};\n        line-height: ${r.default.theme.lineHeights.title4};\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two {\n        font-size: ${r.default.theme.fontSizes.title3};\n        font-weight: ${r.default.theme.fontWeights.heavy};\n        line-height: ${r.default.theme.lineHeights.title2};\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-header-two-narrow {\n        font-size: calc(${r.default.theme.fontSizes.headline2} + 1px);\n        font-weight: ${r.default.theme.fontWeights.heavy};\n        line-height: ${r.default.theme.lineHeights.headline1};\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled, .longform-blockquote {\n        font-size: ${r.default.theme.fontSizes.headline2};\n        line-height: ${r.default.theme.lineHeights.title4};\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unstyled-narrow, .longform-blockquote-narrow {\n        font-size: ${r.default.theme.fontSizes.headline2};\n        line-height: ${r.default.theme.lineHeights.title4};\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item, .longform-ordered-list-item {\n        display: block;\n        font-size: ${r.default.theme.fontSizes.headline2};\n        line-height: ${r.default.theme.lineHeights.title4};   \n        margin-bottom: ${r.default.theme.spaces.space12};\n        margin-left: calc(${r.default.theme.spaces.space28} + ${r.default.theme.spaces.space2});\n        margin-top: 0;\n    }\n\n    .longform-unordered-list-item-narrow, .longform-ordered-list-item-narrow {\n        display: block;\n        font-size: ${r.default.theme.fontSizes.headline2};\n        line-height: ${r.default.theme.lineHeights.title4};   \n        margin-bottom: calc(${r.default.theme.spaces.space12} / 2);\n        margin-left: ${r.default.theme.spaces.space36};\n        margin-top: 0;\n    }\n\n    .longform-blockquote, .longform-blockquote-narrow {\n        margin-bottom: calc(${r.default.theme.spaces.space24} + ${r.default.theme.spaces.space2});\n        margin-left: 0;\n        margin-top: calc(-${r.default.theme.spaces.space2});\n        padding-left: calc(${r.default.theme.spaces.space24} + 3px);\n        position: relative;\n    }\n\n    .longform-blockquote:before, .longform-blockquote-narrow:before {\n        background: ${r.default.theme.colors.gray900};\n        border-radius: ${r.default.theme.borderRadii.infinite};\n        bottom: 0;\n        content: "";\n        left: 0;\n        position: absolute;\n        top: 0;\n        width: 3px;\n    }\n\n    .longform-header-one .public-DraftStyleDefault-block,\n    .longform-header-two .public-DraftStyleDefault-block,\n    .longform-unstyled .public-DraftStyleDefault-block,\n    .longform-unordered-list-item .public-DraftStyleDefault-block,\n    .longform-ordered-list-item .public-DraftStyleDefault-block,\n    .longform-header-one-narrow .public-DraftStyleDefault-block,\n    .longform-header-two-narrow .public-DraftStyleDefault-block,\n    .longform-unstyled-narrow .public-DraftStyleDefault-block,\n    .longform-unordered-list-item-narrow .public-DraftStyleDefault-block,\n    .longform-ordered-list-item-narrow .public-DraftStyleDefault-block {\n        padding-bottom: 0;\n        padding-top: 0;\n    }\n\n    .public-DraftStyleDefault-ul, .public-DraftStyleDefault-ol {\n        counter-reset: item;\n        margin-bottom: ${r.default.theme.spaces.space28};\n        margin-top: 0;\n        padding-left: 0;\n    }\n\n    .longform-unordered-list-item:before, .longform-ordered-list-item:before,\n    .longform-unordered-list-item-narrow:before, .longform-ordered-list-item-narrow:before {\n        position: absolute;\n        margin-left: calc(-1 * (${r.default.theme.spaces.space28} + ${r.default.theme.spaces.space2}));\n    }\n\n    .longform-unordered-list-item:before {\n        content: counter(item, disc);\n        font-size: ${r.default.theme.fontSizes.title4}\n    }\n\n    .longform-unordered-list-item-narrow:before {\n        content: counter(item, disc);\n        font-size: ${r.default.theme.fontSizes.headline1}\n    }\n\n    .longform-ordered-list-item:before, .longform-ordered-list-item-narrow:before {\n        content: counter(item) ". ";\n        counter-increment: item;\n    }\n\n    .longform-ordered-list-item::marker, .longform-ordered-list-item-narrow::marker {\n        font-variant-numeric: normal;\n    }\n`;
        },
        524496: (e, t, n) => {
            n.d(t, { Z: () => D });
            n(136728);
            var r = n(202784),
                o = n(301503),
                l = n(325686),
                a = n(595088),
                i = n(516951),
                c = n(731708),
                s = n(779802),
                d = n(537392),
                f = n(989272),
                u = n(925873),
                m = n(202253),
                p = n(786475),
                h = n(392237),
                g = n(135904);
            const b = { [s.P7.atomic]: { element: "section" }, [s.P7.header1]: { element: "h1", wrapper: r.createElement(c.ZP, null) }, [s.P7.header2]: { element: "h2", wrapper: r.createElement(c.ZP, null) } },
                y = (0, a.Z)(b).reduce((e, [t, n]) => e.set(t, n), o.DefaultDraftBlockRenderMap);
            let w = !1;
            const D = r.memo(function (e) {
                    const { componentByType: t, contentState: n, onScribeEvent: a, paragraphFontSizeOverride: c } = e;
                    r.useEffect(() => {
                        w || (f.fH(g.c, g.n), (w = !0));
                    }, []);
                    const h = [(0, m.ez)(a, c), m.aF, m.RU];
                    e.disable_entityLinkDecorator || h.push((0, m.NA)(a, c));
                    const b = u.Z.initEditorState(n, { decorators: h });
                    let D = i.Z;
                    return (
                        t &&
                            (D = (e) => {
                                const n = e.getType();
                                return t[n] || null;
                            }),
                        r.createElement(d.ZP, null, ({ containerWidth: e }) => r.createElement(l.Z, { style: k.fontFamily }, r.createElement(o.Editor, { blockRenderMap: y, blockRendererFn: D, blockStyleFn: (0, s.su)(p.Z.isNarrowScreenWidth(e)), editorState: b, onChange: i.Z, readOnly: !0, webDriverTestID: "longformRichTextComponent" })))
                    );
                }),
                k = h.default.create((e) => ({ fontFamily: { fontFamily: e.fontFamilies.normal } }));
        },
        779802: (e, t, n) => {
            n.d(t, { $u: () => v, Ak: () => Z, KJ: () => D, LI: () => $, P7: () => g, PW: () => S, QF: () => b, Qm: () => w, Tr: () => z, b$: () => h, db: () => I, et: () => E, fR: () => p, iH: () => x, lD: () => y, su: () => k, u4: () => T, wX: () => _ });
            var r = n(202784),
                o = n(111677),
                l = n.n(o),
                a = n(394123),
                i = n(856661),
                c = n(69893),
                s = n(474761),
                d = n(428259),
                f = n(89085),
                u = n(630715),
                m = n(731708);
            const p = { bold: "BOLD", italic: "ITALIC", strikethrough: "STRIKETHROUGH" },
                h = (e) => [
                    { buttonTestId: "btn-bold", Icon: a.default, key: p.bold, onPress: e(p.bold) },
                    { buttonTestId: "btn-italic", Icon: i.default, key: p.italic, onPress: e(p.italic) },
                    { buttonTestId: "btn-strikethrough", Icon: c.default, key: p.strikethrough, onPress: e(p.strikethrough) },
                ],
                g = { atomic: "atomic", blockquote: "blockquote", bulleted: "unordered-list-item", header1: "header-one", header2: "header-two", numbered: "ordered-list-item", paragraph: "unstyled" },
                b = (e) => [{ buttonTestId: "btn-blockquote", Icon: s.default, key: g.blockquote, onPress: e(g.blockquote) }],
                y = (e) => [
                    { buttonTestId: "btn-ul", Icon: d.default, key: g.bulleted, onPress: e(g.bulleted) },
                    { buttonTestId: "btn-ol", Icon: f.default, key: g.numbered, onPress: e(g.numbered) },
                ],
                w = "LINK",
                D = (e) => [{ buttonTestId: "btn-link", Icon: u.default, key: w, onPress: e }],
                k = (e, t) => (n) => {
                    const r = (t) => (e ? `${t}-narrow` : t);
                    switch (n.getType()) {
                        case g.bulleted:
                            return r("longform-unordered-list-item");
                        case g.blockquote:
                            return r("longform-blockquote");
                        case g.header1:
                            return r("longform-header-one");
                        case g.header2:
                            return r("longform-header-two");
                        case g.numbered:
                            return r("longform-ordered-list-item");
                        case g.paragraph:
                            return r("longform-unstyled");
                        default:
                            return t?.(n) || "";
                    }
                },
                E = l().d5a48014,
                S = l().b92b6156,
                v = l().ec5ed598,
                $ = ({ children: e, extendedWidth: t, size: n, weight: o }) => r.createElement(m.ZP, { extendedWidth: t, size: n, weight: o }, e),
                z = { blockType: g.paragraph, label: v, component: $({ size: "body", children: v }) },
                x = [{ blockType: g.header1, label: E, component: $({ size: "title1", extendedWidth: !0, children: E }) }, { blockType: g.header2, label: S, component: $({ size: "title3", weight: "heavy", children: S }) }, z],
                _ = ["backspace", "backspace-word", "backspace-to-start-of-line"],
                Z = ["delete", "delete-word", "delete-to-start-of-line"],
                T = "increase-text-size",
                I = "decrease-text-size";
        },
        989272: (e, t, n) => {
            n.d(t, { _i: () => o, fH: () => a, w3: () => l });
            n(136728);
            var r = n(392237);
            const o = Object.freeze({ single_line: "singleline", format_inline: "format-inline" });
            function l(e) {
                a(
                    (function () {
                        const e = r.default.theme.spaces.space2;
                        return `\n     .DraftEditor-editorContainer, .DraftEditor-root, .public-DraftEditor-content {\n        height: inherit;\n        max-height: inherit;\n        min-height: inherit;\n        text-align: initial;\n    }\n\n    .public-DraftEditor-content[contenteditable=true] {\n        -moz-user-modify: read-write-plaintext-only;\n        -webkit-user-modify: read-write-plaintext-only;\n    }\n\n    .${o.format_inline} .public-DraftEditor-content[contenteditable=true] {\n      -moz-user-modify: read-write;\n      -webkit-user-modify: read-write;\n    }\n\n    .DraftEditor-root {\n        width: 100%;\n        position: relative;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditor-editorContainer {\n        background-color: rgba(255, 255, 255, 0);\n        border-left: .1px solid transparent;\n        position: relative;\n        z-index: 1;\n    }\n\n    .public-DraftEditor-block {\n        position: relative;\n    }\n\n    .DraftEditor-alignLeft .public-DraftStyleDefault-block {\n        text-align: left;\n    }\n\n    .DraftEditor-alignLeft .public-DraftEditorPlaceholder-root {\n        left: 0;\n        text-align: left;\n    }\n\n    .DraftEditor-alignCenter .public-DraftStyleDefault-block {\n        text-align: center\n    }\n\n    .DraftEditor-alignCenter .public-DraftEditorPlaceholder-root {\n        margin: 0 auto;\n        text-align: center;\n        width: 100%\n    }\n\n    .DraftEditor-alignRight .public-DraftStyleDefault-block {\n        text-align: right;\n    }\n\n    .DraftEditor-alignRight .public-DraftEditorPlaceholder-root {\n        right: 0;\n        text-align: right;\n    }\n\n    .public-DraftEditorPlaceholder-root {\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: absolute;\n        z-index: 1;\n    }\n\n    .public-DraftEditorPlaceholder-inner {\n        user-select: none;\n        -webkit-user-select: none;\n    }\n\n    .DraftEditorPlaceholder-hidden {\n        display: none;\n    }\n\n    .public-DraftStyleDefault-block {\n        overflow:hidden;\n        padding-bottom: ${e};\n        padding-top: ${e};\n        position: relative;\n        white-space: pre-wrap;\n    }\n\n    /* Only a handful of CSS rules work on br tags and user-select isn't one */\n    div:only-child > .public-DraftStyleDefault-block > span > br::selection {\n        background: transparent;\n    }\n\n    /*\n       Safari doesn't let you change ::selection on br elements,\n       but Chrome needs it here\n    */\n    div:only-child > .public-DraftStyleDefault-block > span:has(br)::selection {\n        background: transparent;\n    }\n\n    .public-DraftStyleDefault-ltr {\n        direction: ltr;\n        text-align: left;\n    }\n\n    .public-DraftStyleDefault-rtl {\n        direction: rtl;\n        text-align: right;\n    }\n\n    .DraftEditor-editorContainer a {\n        font-family: inherit;\n        font-size: inherit;\n        line-height: inherit;\n        margin-bottom: inherit;\n        margin-top: inherit;\n    }\n\n    .${o.single_line} .public-DraftStyleDefault-block {\n        overflow-x: auto;\n        scrollbar-width: none;\n        white-space: nowrap;\n        -ms-overflow-style: none;\n    }\n\n    .${o.single_line} .public-DraftStyleDefault-block::-webkit-scrollbar {\n        display: none;\n    }\n  `;
                    })(),
                    i,
                );
                const t = c(e);
                return (
                    a(
                        (function (e) {
                            const t = c(e);
                            let n = e.placeholderTextColor;
                            const o = e.contentHorizontalPadding;
                            n || (n = r.default.theme.colors.gray700);
                            return `\n    .${t} .public-DraftEditorPlaceholder-root {\n      color: ${n};\n    }\n\n    .${t} .public-DraftEditorPlaceholder-hasFocus {\n      color: ${n};\n    }\n\n    ${o ? `\n        .${t} .public-DraftEditor-content,\n        .${t} .public-DraftEditorPlaceholder-root {\n          padding-left: ${o};\n          padding-right: ${o};\n        }\n      ` : ""}\n  `;
                        })(e),
                        t,
                    ),
                    t
                );
            }
            function a(e, t) {
                if (
                    !(function (e) {
                        return !!document.getElementById(e);
                    })(t)
                ) {
                    const n = document.createElement("style");
                    n.setAttribute("id", t), (n.innerHTML = e);
                    const r = document.head;
                    r && r.insertBefore(n, r.firstChild);
                }
            }
            const i = "draftjs-styles";
            function c(e) {
                const t = (function (e) {
                    for (let t = 0; t < s.length; t++) {
                        if (s[t] === e) return String(t);
                    }
                    return s.push(e), String(s.length - 1);
                })(JSON.stringify(e));
                return `${i}_${t}`;
            }
            const s = [];
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.jobLoader.37da29ea.js.map
