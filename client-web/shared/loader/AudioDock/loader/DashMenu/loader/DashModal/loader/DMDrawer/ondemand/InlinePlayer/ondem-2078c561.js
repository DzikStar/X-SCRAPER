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
                i = r(267352),
                l = r(806143),
                c = r(373595),
                s = r(239352),
                d = r(456677),
                h = r(17412),
                u = r(286406),
                b = r(568320),
                p = r(731708),
                m = r(154003),
                g = r(235902),
                C = r(952428),
                f = r(537392),
                y = r(316046),
                w = r(336373),
                k = r(721266),
                E = r(392237);
            const I = { element: "birdwatch_pivot" },
                x = (e, t, r) => ({ items: [{ id: r, birdwatch_pivot_details: { note_id: t, destination_url: e } }] }),
                v = (e, t) => (e ? (t ? D.footerIcon : D.birdwatchIconNoteTentative) : void 0),
                T = (e, t, r) => {
                    switch (e) {
                        case "BirdwatchEyeOff":
                            return o.createElement(n.default, { style: [D.birdwatchIcon, v(!!t, !!r)], testID: "icon-birdwatch-eye-off" });
                        case "BirdwatchFlagFill":
                            return o.createElement(i.default, { style: [D.birdwatchIcon, v(!!t, !!r)], testID: "icon-birdwatch-flag" });
                        case "BirdwatchFlagStroke":
                            return o.createElement(l.default, { style: [D.birdwatchIcon, v(!!t, !!r)], testID: "icon-birdwatch-flag-stroke" });
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
            function Z({ callToAction: e, destinationUrl: t, footer: r, footerIconType: n, iconType: i, isForQuoteTweet: l, noteId: c, onEntityClick: s, onPivotClick: d, shorttitle: h, subtitle: u, title: v, titleDetail: Z, tweetId: _, visualStyle: R }) {
                const S = w.Z.useAnalytics(),
                    B = (0, f.Zx)(({ containerWidth: e }) => e <= E.default.theme.breakpoints.medium),
                    P = "#" === t ? void 0 : { pathname: t, anchorless: !0, state: { tweetId: _ } },
                    W = o.useCallback(
                        (e) => {
                            _ && S.scribe({ ...I, action: "click", data: x(t, c, _) }), d && d(e);
                        },
                        [S, t, c, _, d],
                    ),
                    A = P ? W : void 0,
                    F = "Tentative" === R,
                    z = (B || l) && h ? { primary: h, detail: null } : { primary: v, detail: Z },
                    V = e?.destinationUrl || "#",
                    O = "#" === V ? void 0 : { pathname: V, state: { tweetId: _ }, anchorless: !0 },
                    Q = g.ZP.useProps();
                return (
                    o.useEffect(() => {
                        Q.birdwatchPivotsEnabled() && _ && S.scribe({ ...I, action: "impression", data: x(t, c, _) });
                    }, []),
                    Q.birdwatchPivotsEnabled() ? o.createElement(o.Fragment, null, o.createElement(C.Z, { link: P, onPress: A, style: [D.pivotContainer, F && D.noteTentativeDashedBorder, l && D.pivotQuoteTweetContainer], testID: "birdwatch-pivot", withInteractiveStyling: !!P }, o.createElement(a.Z, { style: [D.headerContainer, F && D.headerContainerTentative, F && u && D.headerContainerTentativeBorder, l && D.headerQuoteTweetContainer] }, o.createElement(a.Z, { style: D.headerAndIconContainer }, T(i, F, !1), o.createElement(p.ZP, { size: "subtext1", style: D.headerAppText, weight: "bold" }, z.primary, z.detail ? o.createElement(p.ZP, { color: "gray700" }, z.detail) : null), e ? null : o.createElement(b.default, { style: [D.arrowIcon, F && D.noteTentativeTextColor], testID: "icon-arrow-right" })), F && r ? o.createElement(o.Fragment, null, o.createElement(k.Z, { size: "space4" }), o.createElement(a.Z, { style: D.headerAndIconContainer }, T(n, F, !0), o.createElement(p.ZP, { color: "gray700", size: "subtext1", style: D.headerAppText, weight: "bold" }, r.text))) : null), u ? o.createElement(o.Fragment, null, (F || !l) && o.createElement(k.Z, { size: "space12" }), o.createElement(y.Z, { entities: u.entities, onEntityClick: s, size: "body", style: [D.subtitle, F && D.noteTentativeTextColor], text: u.text }), !l && o.createElement(k.Z, { size: "space12" })) : null, e ? o.createElement(a.Z, { style: [D.callToActionContainer, l && D.callToActionContainerForQuoteTweet, F && D.noteTentativeDashedBorder] }, o.createElement(p.ZP, { size: "subtext1" }, e.prompt), o.createElement(m.ZP, { link: O, onPress: W, size: "small", type: "primaryOutlined" }, e.title)) : l && u && o.createElement(k.Z, { size: "space12" })), !r || l || F ? null : o.createElement(y.Z, { color: "gray700", entities: r.entities, onEntityClick: s, size: "subtext2", style: D.footer, text: r.text })) : null
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
                i = r(803224),
                l = r(421158);
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
                    a.createElement(l.Z.Provider, { value: { playbackPriority: r ? i.W.NORMAL : i.W.INELIGIBLE } }, e)
                );
            }
            const s = a.forwardRef(function (e, t) {
                const { children: r = [], onVisibleRangeChange: i, ...l } = e,
                    s = a.useRef(new Map()),
                    d = a.useCallback(
                        ({ index: e, intersectionRatio: t }) => {
                            i?.({ index: e, intersectionRatio: t });
                            const r = s.current.get(e);
                            r && r(t);
                        },
                        [i],
                    );
                return a.createElement(
                    n.Z,
                    (0, o.Z)({}, l, { onVisibleRangeChange: d, ref: t }),
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
            r.d(t, { Z: () => C });
            var o = r(807896),
                a = r(202784),
                n = r(386308),
                i = r(325686),
                l = r(913973),
                c = r(731708),
                s = r(950822),
                d = r(466792),
                h = r(58881),
                u = r(530732),
                b = r(392237);
            let p = 1;
            class m extends a.Component {
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
                        (this._labelId = `CHECKBOX_${p}_LABEL`),
                        (p += 1);
                }
                render() {
                    const { checked: e, disabled: t, helpText: r, label: n, onChange: p, style: m, ...C } = this.props,
                        f = h.Z.generate({ backgroundColor: b.default.theme.colors.transparent, color: b.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        y = h.Z.generate({ backgroundColor: b.default.theme.colors.transparent, color: b.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        w = e ? f : y,
                        k = (0, s.Z)("input", { "aria-describedby": this._labelId, checked: e, disabled: t, onChange: this._handleChange, ref: this._setCheckboxRef, style: [g.nativeControl, g.cursorInherit], type: "checkbox" }),
                        E = a.createElement(d.Z, { disabled: t }, (r) => a.createElement(i.Z, (0, o.Z)({ role: "label" }, C, { style: [m, !t && g.interactive] }), a.createElement(i.Z, { style: g.topContainer }, n ? a.createElement(c.ZP, null, n) : null, a.createElement(i.Z, { style: g.checkboxContainer }, ((r) => a.createElement(u.Z, { interactiveStyles: w, interactivityState: r, style: g.fakeControlInteractiveStyles }, a.createElement(i.Z, { style: [g.fakeControl, e && g.fakeControlChecked, t && g.fakeControlDisabled, e && t && g.fakeControlCheckedAndDisabled] }, e ? a.createElement(l.default, { style: g.icon }) : null)))(r), k))));
                    return r ? a.createElement(i.Z, null, E, a.createElement(c.ZP, { color: "gray700", id: this._labelId, size: "subtext2", style: g.helpText }, r)) : E;
                }
            }
            m.defaultProps = { checked: !1, disabled: !1 };
            const g = b.default.create((e) => ({ interactive: { cursor: "pointer" }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1, gap: e.spaces.space8 }, cursorInherit: { cursor: "inherit" }, checkboxContainer: { userSelect: "none" }, helpText: { paddingTop: e.spaces.space4 }, fakeControlInteractiveStyles: { padding: e.spaces.space8, margin: `-${e.spaces.space8}`, borderRadius: e.borderRadii.infinite }, fakeControl: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderRadius: e.borderRadii.small, borderStyle: "solid", borderWidth: e.borderWidths.medium, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, fakeControlChecked: { backgroundColor: e.colors.primary, borderColor: e.colors.primary }, fakeControlDisabled: { borderColor: e.colors.gray200 }, fakeControlCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, nativeControl: { ...b.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, icon: { ...b.default.absoluteFillObject, color: e.colors.whiteOnColor, height: e.spaces.space20, margin: "auto" } })),
                C = m;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561.b89a515a.js.map
