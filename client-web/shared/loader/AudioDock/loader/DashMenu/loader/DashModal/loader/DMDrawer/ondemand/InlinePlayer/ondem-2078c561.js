"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"],
    {
        65724: (e, t, r) => {
            r.d(t, { KM: () => o });
            r(136728);
            const o = (e, t) => {
                const r = [];
                return (
                    e.forEach((e, o) => {
                        const a = t(e, o);
                        a && r.push(a);
                    }),
                    r
                );
            };
        },
        766661: (e, t, r) => {
            r.d(t, { Z: () => Z });
            var o = r(202784),
                a = r(325686),
                n = r(161335),
                l = r(267352),
                i = r(806143),
                c = r(373595),
                s = r(239352),
                d = r(456677),
                h = r(17412),
                u = r(286406),
                p = r(568320),
                f = r(731708),
                b = r(154003),
                m = r(235902),
                g = r(952428),
                C = r(537392),
                y = r(308158),
                w = r(336373),
                k = r(721266),
                E = r(392237);
            const x = { element: "birdwatch_pivot" },
                I = (e, t, r) => ({ items: [{ id: r, birdwatch_pivot_details: { note_id: t, destination_url: e } }] }),
                v = (e, t) => (e ? (t ? D.footerIcon : D.birdwatchIconNoteTentative) : void 0),
                T = (e, t, r) => {
                    switch (e) {
                        case "BirdwatchEyeOff":
                            return o.createElement(n.default, { style: [D.birdwatchIcon, v(!!t, !!r)], testID: "icon-birdwatch-eye-off" });
                        case "BirdwatchFlagFill":
                            return o.createElement(l.default, { style: [D.birdwatchIcon, v(!!t, !!r)], testID: "icon-birdwatch-flag" });
                        case "BirdwatchFlagStroke":
                            return o.createElement(i.default, { style: [D.birdwatchIcon, v(!!t, !!r)], testID: "icon-birdwatch-flag-stroke" });
                        case "BirdwatchFlask":
                            return o.createElement(c.default, { style: [D.birdwatchIcon, v(!!t, !!r)], testID: "icon-birdwatch-flask" });
                        case "BirdwatchFlaskStroke":
                            return o.createElement(s.default, { style: [D.birdwatchIcon, v(!!t, !!r)], testID: "icon-birdwatch-flask-stroke" });
                        case "BirdwatchIconWriting":
                            return o.createElement(d.default, { style: [D.birdwatchWritingIcon, v(!!t, !!r)], testID: "icon-birdwatch-writing" });
                        case "BirdwatchStarRising":
                            return o.createElement(h.default, { style: [D.birdwatchStarRisingIcon, v(!!t, !!r)], testID: "icon-birdwatch-star-rising" });
                        default:
                            return r ? o.createElement(n.default, { style: [D.birdwatchIcon, v(!!t, !!r)], testID: "icon-birdwatch-eye-off" }) : o.createElement(u.default, { style: [D.birdwatchIcon, v(!!t, !!r)], testID: "icon-birdwatch-fill" });
                    }
                };
            function Z({ callToAction: e, destinationUrl: t, footer: r, footerIconType: n, iconType: l, isForQuoteTweet: i, noteId: c, onEntityClick: s, onPivotClick: d, shorttitle: h, subtitle: u, title: v, titleDetail: Z, tweetId: S, visualStyle: _ }) {
                const R = w.Z.useAnalytics(),
                    B = (0, C.Zx)(({ containerWidth: e }) => e <= E.default.theme.breakpoints.medium),
                    P = "#" === t ? void 0 : { pathname: t, anchorless: !0, state: { tweetId: S } },
                    W = o.useCallback(
                        (e) => {
                            S && R.scribe({ ...x, action: "click", data: I(t, c, S) }), d && d(e);
                        },
                        [R, t, c, S, d],
                    ),
                    z = P ? W : void 0,
                    A = "Tentative" === _,
                    F = (B || i) && h ? { primary: h, detail: null } : { primary: v, detail: Z },
                    j = e?.destinationUrl || "#",
                    O = "#" === j ? void 0 : { pathname: j, state: { tweetId: S }, anchorless: !0 },
                    V = m.ZP.useProps();
                return (
                    o.useEffect(() => {
                        V.birdwatchPivotsEnabled() && S && R.scribe({ ...x, action: "impression", data: I(t, c, S) });
                    }, []),
                    V.birdwatchPivotsEnabled() ? o.createElement(o.Fragment, null, o.createElement(g.Z, { link: P, onPress: z, style: [D.pivotContainer, A && D.noteTentativeDashedBorder, i && D.pivotQuoteTweetContainer], testID: "birdwatch-pivot", withInteractiveStyling: !!P }, o.createElement(a.Z, { style: [D.headerContainer, A && D.headerContainerTentative, A && u && D.headerContainerTentativeBorder, i && D.headerQuoteTweetContainer] }, o.createElement(a.Z, { style: D.headerAndIconContainer }, T(l, A, !1), o.createElement(f.ZP, { size: "subtext1", style: D.headerAppText, weight: "bold" }, F.primary, F.detail ? o.createElement(f.ZP, { color: "gray700" }, F.detail) : null), e ? null : o.createElement(p.default, { style: [D.arrowIcon, A && D.noteTentativeTextColor], testID: "icon-arrow-right" })), A && r ? o.createElement(o.Fragment, null, o.createElement(k.Z, { size: "space4" }), o.createElement(a.Z, { style: D.headerAndIconContainer }, T(n, A, !0), o.createElement(f.ZP, { color: "gray700", size: "subtext1", style: D.headerAppText, weight: "bold" }, r.text))) : null), u ? o.createElement(o.Fragment, null, (A || !i) && o.createElement(k.Z, { size: "space12" }), o.createElement(y.Z, { entities: u.entities, onEntityClick: s, size: "body", style: [D.subtitle, A && D.noteTentativeTextColor], text: u.text }), !i && o.createElement(k.Z, { size: "space12" })) : null, e ? o.createElement(a.Z, { style: [D.callToActionContainer, i && D.callToActionContainerForQuoteTweet, A && D.noteTentativeDashedBorder] }, o.createElement(f.ZP, { size: "subtext1" }, e.prompt), o.createElement(b.ZP, { link: O, onPress: W, size: "small", type: "primaryOutlined" }, e.title)) : i && u && o.createElement(k.Z, { size: "space12" })), !r || i || A ? null : o.createElement(y.Z, { color: "gray700", entities: r.entities, onEntityClick: s, size: "subtext2", style: D.footer, text: r.text })) : null
                );
            }
            const D = E.default.create((e) => ({
                footer: { paddingVertical: e.spaces.space12 },
                pivotContainer: { borderColor: e.colors.nestedBorderColor, overflow: "hidden", borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.xLarge, marginTop: e.spaces.space12 },
                callToActionContainerForQuoteTweet: { border: "none" },
                noteTentativeDashedBorder: { borderStyle: "dashed" },
                pivotQuoteTweetContainer: { marginTop: 0, borderWidth: "none", backgroundColor: e.colors.gray0, borderRadius: "none", borderTopWidth: e.borderWidths.small },
                headerContainer: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space12, alignItems: "start", display: "flex", flexDirection: "row", backgroundColor: "darker" === e.paletteName ? e.colors.gray0 : e.colors.hoverBlack },
                headerAndIconContainer: { flexDirection: "row", width: "100%" },
                headerAppText: { width: "100%", paddingVertical: e.spaces.space2, alignItems: "center" },
                headerQuoteTweetContainer: { backgroundColor: e.colors.transparent, borderColor: e.colors.nestedBorderColor },
                headerContainerTentative: { flexDirection: "column" },
                headerContainerTentativeBorder: { borderStyle: "dashed", borderBottomWidth: e.borderWidths.small, borderColor: e.colors.nestedBorderColor },
                noteTentativeTextColor: { color: e.colors.gray700 },
                callToActionContainer: { borderTopWidth: e.borderWidths.small, borderColor: e.colors.gray200, paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space12, justifyContent: "space-between", alignItems: "center", flexDirection: "row", flexGrow: 1 },
                arrowIcon: { color: e.colors.text, paddingStart: e.spaces.space8, flexShrink: 0 },
                footerIcon: { color: e.colors.gray700, flexShrink: 0 },
                birdwatchIcon: { marginEnd: e.spacesPx.space8, color: e.colors.primary, flexShrink: 0 },
                birdwatchWritingIcon: { marginEnd: e.spacesPx.space8, color: e.colors.green500, flexShrink: 0 },
                birdwatchStarRisingIcon: { marginEnd: e.spacesPx.space8, color: e.colors.green500, flexShrink: 0 },
                birdwatchIconNoteTentative: { color: e.colors.gray700 },
                subtitle: { paddingHorizontal: e.spaces.space12 },
            }));
        },
        174326: (e, t, r) => {
            r.d(t, { Z: () => s });
            var o = r(807896),
                a = r(202784),
                n = r(194504),
                l = r(803224),
                i = r(421158);
            function c({ children: e, onVisibleRangeChange: t }) {
                const [r, o] = a.useState(!1);
                return (
                    a.useEffect(
                        () => (
                            t((e) => {
                                o(1 === e);
                            }),
                            () => {
                                t(null);
                            }
                        ),
                        [t],
                    ),
                    a.createElement(i.Z.Provider, { value: { playbackPriority: r ? l.W.NORMAL : l.W.INELIGIBLE } }, e)
                );
            }
            const s = a.forwardRef(function (e, t) {
                const { children: r = [], onVisibleRangeChange: l, ...i } = e,
                    s = a.useRef(new Map()),
                    d = a.useCallback(
                        ({ index: e, intersectionRatio: t }) => {
                            l?.({ index: e, intersectionRatio: t });
                            const r = s.current.get(e);
                            r && r(t);
                        },
                        [l],
                    );
                return a.createElement(
                    n.Z,
                    (0, o.Z)({}, i, { onVisibleRangeChange: d, ref: t }),
                    r.map((e, t) =>
                        a.createElement(
                            c,
                            {
                                key: t,
                                onVisibleRangeChange: (e) => {
                                    s.current.set(t, e);
                                },
                            },
                            e,
                        ),
                    ),
                );
            });
        },
        96083: (e, t, r) => {
            r.d(t, { Z: () => g });
            var o = r(807896),
                a = r(202784),
                n = r(386308),
                l = r(325686),
                i = r(913973),
                c = r(731708),
                s = r(950822),
                d = r(466792),
                h = r(58881),
                u = r(530732),
                p = r(392237);
            let f = 1;
            class b extends a.Component {
                blur() {
                    this._checkboxElement && n.Z.blur(this._checkboxElement);
                }
                focus() {
                    this._checkboxElement && n.Z.focus(this._checkboxElement);
                }
                constructor() {
                    super(),
                        (this._handleChange = (e) => {
                            const { onChange: t } = this.props;
                            t && t(e.nativeEvent.target.checked);
                        }),
                        (this._setCheckboxRef = (e) => {
                            this._checkboxElement = e;
                        }),
                        (this._labelId = `CHECKBOX_${f}_LABEL`),
                        (f += 1);
                }
                render() {
                    const { checked: e, disabled: t, helpText: r, label: n, onChange: f, style: b, ...g } = this.props,
                        C = h.Z.generate({ backgroundColor: p.default.theme.colors.transparent, color: p.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        y = h.Z.generate({ backgroundColor: p.default.theme.colors.transparent, color: p.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        w = e ? C : y,
                        k = (0, s.Z)("input", { "aria-describedby": this._labelId, checked: e, disabled: t, onChange: this._handleChange, ref: this._setCheckboxRef, style: [m.nativeControl, m.cursorInherit], type: "checkbox" }),
                        E = a.createElement(d.Z, { disabled: t }, (r) => a.createElement(l.Z, (0, o.Z)({ role: "label" }, g, { style: [b, !t && m.interactive] }), a.createElement(l.Z, { style: m.topContainer }, n ? a.createElement(c.ZP, null, n) : null, a.createElement(l.Z, { style: m.checkboxContainer }, ((r) => a.createElement(u.Z, { interactiveStyles: w, interactivityState: r, style: m.fakeControlInteractiveStyles }, a.createElement(l.Z, { style: [m.fakeControl, e && m.fakeControlChecked, t && m.fakeControlDisabled, e && t && m.fakeControlCheckedAndDisabled] }, e ? a.createElement(i.default, { style: m.icon }) : null)))(r), k))));
                    return r ? a.createElement(l.Z, null, E, a.createElement(c.ZP, { color: "gray700", id: this._labelId, size: "subtext2", style: m.helpText }, r)) : E;
                }
            }
            b.defaultProps = { checked: !1, disabled: !1 };
            const m = p.default.create((e) => ({ interactive: { cursor: "pointer" }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1, gap: e.spaces.space8 }, cursorInherit: { cursor: "inherit" }, checkboxContainer: { userSelect: "none" }, helpText: { paddingTop: e.spaces.space4 }, fakeControlInteractiveStyles: { padding: e.spaces.space8, margin: `-${e.spaces.space8}`, borderRadius: e.borderRadii.infinite }, fakeControl: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderRadius: e.borderRadii.small, borderStyle: "solid", borderWidth: e.borderWidths.medium, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, fakeControlChecked: { backgroundColor: e.colors.primary, borderColor: e.colors.primary }, fakeControlDisabled: { borderColor: e.colors.gray200 }, fakeControlCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, nativeControl: { ...p.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, icon: { ...p.default.absoluteFillObject, color: e.colors.whiteOnColor, height: e.spaces.space20, margin: "auto" } })),
                g = b;
        },
        757483: (e, t, r) => {
            r.d(t, { Z: () => a });
            var o = r(295559);
            const a = { hexToCss: o.a7, hexToRgba: o.FP, rgbaToCss: o.rb, rgbToHex: o.vq };
        },
        378587: (e, t, r) => {
            r.d(t, { Z: () => d });
            var o = r(202784),
                a = r(325686),
                n = r(295559),
                l = r(392237);
            const i = {
                Default: [
                    {
                        angle: 225,
                        stops: [
                            { color: l.default.theme.colors.plum600, alpha: 0, offset: 0 },
                            { color: l.default.theme.colors.plum600, alpha: 0.6, offset: 1 },
                        ],
                    },
                    {
                        angle: 225,
                        stops: [
                            { color: l.default.theme.colors.plum400, alpha: 0.4, offset: 0 },
                            { color: l.default.theme.colors.plum400, alpha: 0, offset: 1 },
                        ],
                    },
                    {
                        angle: 135,
                        stops: [
                            { color: l.default.theme.colors.magenta500, alpha: 1, offset: 0 },
                            { color: l.default.theme.colors.magenta500, alpha: 0, offset: 1 },
                        ],
                    },
                    {
                        angle: 135,
                        stops: [
                            { color: l.default.theme.colors.red400, alpha: 0, offset: 0 },
                            { color: l.default.theme.colors.red400, alpha: 1, offset: 1 },
                        ],
                    },
                    {
                        angle: 0,
                        stops: [
                            { color: l.default.theme.colors.orange500, alpha: 1, offset: 0 },
                            { color: l.default.theme.colors.orange500, alpha: 1, offset: 1 },
                        ],
                    },
                ],
                HighContrast: [
                    {
                        angle: 0,
                        stops: [
                            { color: l.default.theme.colors.plum600, alpha: 1, offset: 0 },
                            { color: l.default.theme.colors.plum600, alpha: 1, offset: 1 },
                        ],
                    },
                ],
            };
            function c() {
                return (l.default.theme.highContrastEnabled ? i.HighContrast : i.Default).map(({ angle: e, stops: t }) => `linear-gradient(${e}deg, ${t.map(({ alpha: e, color: t, offset: r }) => `${(0, n.a7)(t, e)} ${100 * r}%`).join(", ")})`).join(", ");
            }
            const s = {
                    Default: function (e) {
                        return o.createElement(a.Z, { style: [{ backgroundImage: c() }, e.style] }, e.children);
                    },
                    getBackgroundImage: c,
                },
                d = Object.freeze(s);
        },
        642153: (e, t, r) => {
            r.d(t, { Z: () => i });
            var o = r(202784),
                a = r(325686),
                n = r(392237),
                l = r(823161);
            const i = (e) => {
                    const { borderColor: t = "cellBackground", borderWidth: r = "small", style: i, userAvatarSize: s = "medium", userAvatarUrls: d, withIncreasedSpacing: h } = e,
                        u = d.length,
                        p = "transparent" === t;
                    return o.createElement(
                        a.Z,
                        { style: [c.root, i, { height: l.default.getSizeStyle(s)?.height }] },
                        d.map((e, a) => o.createElement(l.default, { backgroundColor: t, borderColor: t, borderWidth: p ? "none" : r, key: a, size: s, style: [0 !== a && { marginStart: -1 * n.default.theme.spacesPx[h ? "space4" : "space12"] }, { zIndex: u - a }], uri: e })),
                    );
                },
                c = n.default.create((e) => ({ root: { flexDirection: "row", flexShrink: 0, overflow: "hidden", flexWrap: "wrap", justifyContent: "center" } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561.e0dc928a.js.map
