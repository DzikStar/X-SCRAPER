"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"],
    {
        65724: (e, t, o) => {
            o.d(t, { KM: () => r });
            o(136728);
            const r = (e, t) => {
                const o = [];
                return (
                    e.forEach((e, r) => {
                        const n = t(e, r);
                        n && o.push(n);
                    }),
                    o
                );
            };
        },
        766661: (e, t, o) => {
            o.d(t, { Z: () => I });
            var r = o(202784),
                n = o(325686),
                a = o(161335),
                i = o(267352),
                l = o(806143),
                s = o(373595),
                c = o(239352),
                d = o(456677),
                h = o(17412),
                p = o(286406),
                u = o(568320),
                m = o(731708),
                f = o(154003),
                b = o(235902),
                g = o(952428),
                y = o(537392),
                C = o(316046),
                w = o(336373),
                v = o(721266),
                E = o(392237);
            const k = { element: "birdwatch_pivot" },
                x = (e, t, o) => ({ items: [{ id: o, birdwatch_pivot_details: { note_id: t, destination_url: e } }] }),
                _ = (e, t) => (e ? (t ? R.footerIcon : R.birdwatchIconNoteTentative) : void 0),
                Z = (e, t, o) => {
                    switch (e) {
                        case "BirdwatchEyeOff":
                            return r.createElement(a.default, { style: [R.birdwatchIcon, _(!!t, !!o)], testID: "icon-birdwatch-eye-off" });
                        case "BirdwatchFlagFill":
                            return r.createElement(i.default, { style: [R.birdwatchIcon, _(!!t, !!o)], testID: "icon-birdwatch-flag" });
                        case "BirdwatchFlagStroke":
                            return r.createElement(l.default, { style: [R.birdwatchIcon, _(!!t, !!o)], testID: "icon-birdwatch-flag-stroke" });
                        case "BirdwatchFlask":
                            return r.createElement(s.default, { style: [R.birdwatchIcon, _(!!t, !!o)], testID: "icon-birdwatch-flask" });
                        case "BirdwatchFlaskStroke":
                            return r.createElement(c.default, { style: [R.birdwatchIcon, _(!!t, !!o)], testID: "icon-birdwatch-flask-stroke" });
                        case "BirdwatchIconWriting":
                            return r.createElement(d.default, { style: [R.birdwatchWritingIcon, _(!!t, !!o)], testID: "icon-birdwatch-writing" });
                        case "BirdwatchStarRising":
                            return r.createElement(h.default, { style: [R.birdwatchStarRisingIcon, _(!!t, !!o)], testID: "icon-birdwatch-star-rising" });
                        default:
                            return o ? r.createElement(a.default, { style: [R.birdwatchIcon, _(!!t, !!o)], testID: "icon-birdwatch-eye-off" }) : r.createElement(p.default, { style: [R.birdwatchIcon, _(!!t, !!o)], testID: "icon-birdwatch-fill" });
                    }
                };
            function I({ callToAction: e, destinationUrl: t, footer: o, footerIconType: a, iconType: i, isForQuoteTweet: l, noteId: s, onEntityClick: c, onPivotClick: d, shorttitle: h, subtitle: p, title: _, titleDetail: I, tweetId: T, visualStyle: D }) {
                const O = w.Z.useAnalytics(),
                    S = (0, y.Zx)(({ containerWidth: e }) => e <= E.default.theme.breakpoints.medium),
                    P = "#" === t ? void 0 : { pathname: t, anchorless: !0, state: { tweetId: T } },
                    z = r.useCallback(
                        (e) => {
                            T && O.scribe({ ...k, action: "click", data: x(t, s, T) }), d && d(e);
                        },
                        [O, t, s, T, d],
                    ),
                    F = P ? z : void 0,
                    B = "Tentative" === D,
                    W = (S || l) && h ? { primary: h, detail: null } : { primary: _, detail: I },
                    A = e?.destinationUrl || "#",
                    N = "#" === A ? void 0 : { pathname: A, state: { tweetId: T }, anchorless: !0 },
                    H = b.ZP.useProps();
                return (
                    r.useEffect(() => {
                        H.birdwatchPivotsEnabled() && T && O.scribe({ ...k, action: "impression", data: x(t, s, T) });
                    }, []),
                    H.birdwatchPivotsEnabled() ? r.createElement(r.Fragment, null, r.createElement(g.Z, { link: P, onPress: F, style: [R.pivotContainer, B && R.noteTentativeDashedBorder, l && R.pivotQuoteTweetContainer], testID: "birdwatch-pivot", withInteractiveStyling: !!P }, r.createElement(n.Z, { style: [R.headerContainer, B && R.headerContainerTentative, B && p && R.headerContainerTentativeBorder, l && R.headerQuoteTweetContainer] }, r.createElement(n.Z, { style: R.headerAndIconContainer }, Z(i, B, !1), r.createElement(m.ZP, { size: "subtext1", style: R.headerAppText, weight: "bold" }, W.primary, W.detail ? r.createElement(m.ZP, { color: "gray700" }, W.detail) : null), e ? null : r.createElement(u.default, { style: [R.arrowIcon, B && R.noteTentativeTextColor], testID: "icon-arrow-right" })), B && o ? r.createElement(r.Fragment, null, r.createElement(v.Z, { size: "space4" }), r.createElement(n.Z, { style: R.headerAndIconContainer }, Z(a, B, !0), r.createElement(m.ZP, { color: "gray700", size: "subtext1", style: R.headerAppText, weight: "bold" }, o.text))) : null), p ? r.createElement(r.Fragment, null, (B || !l) && r.createElement(v.Z, { size: "space12" }), r.createElement(C.Z, { entities: p.entities, onEntityClick: c, size: "body", style: [R.subtitle, B && R.noteTentativeTextColor], text: p.text }), !l && r.createElement(v.Z, { size: "space12" })) : null, e ? r.createElement(n.Z, { style: [R.callToActionContainer, l && R.callToActionContainerForQuoteTweet, B && R.noteTentativeDashedBorder] }, r.createElement(m.ZP, { size: "subtext1" }, e.prompt), r.createElement(f.ZP, { link: N, onPress: z, size: "small", type: "primaryOutlined" }, e.title)) : l && p && r.createElement(v.Z, { size: "space12" })), !o || l || B ? null : r.createElement(C.Z, { color: "gray700", entities: o.entities, onEntityClick: c, size: "subtext2", style: R.footer, text: o.text })) : null
                );
            }
            const R = E.default.create((e) => ({
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
        174326: (e, t, o) => {
            o.d(t, { Z: () => c });
            var r = o(807896),
                n = o(202784),
                a = o(194504),
                i = o(803224),
                l = o(421158);
            function s({ children: e, onVisibleRangeChange: t }) {
                const [o, r] = n.useState(!1);
                return (
                    n.useEffect(
                        () => (
                            t((e) => {
                                r(1 === e);
                            }),
                            () => {
                                t(null);
                            }
                        ),
                        [t],
                    ),
                    n.createElement(l.Z.Provider, { value: { playbackPriority: o ? i.W.NORMAL : i.W.INELIGIBLE } }, e)
                );
            }
            const c = n.forwardRef(function (e, t) {
                const { children: o = [], onVisibleRangeChange: i, ...l } = e,
                    c = n.useRef(new Map()),
                    d = n.useCallback(
                        ({ index: e, intersectionRatio: t }) => {
                            i?.({ index: e, intersectionRatio: t });
                            const o = c.current.get(e);
                            o && o(t);
                        },
                        [i],
                    );
                return n.createElement(
                    a.Z,
                    (0, r.Z)({}, l, { onVisibleRangeChange: d, ref: t }),
                    o.map((e, t) =>
                        n.createElement(
                            s,
                            {
                                key: t,
                                onVisibleRangeChange: (e) => {
                                    c.current.set(t, e);
                                },
                            },
                            e,
                        ),
                    ),
                );
            });
        },
        96083: (e, t, o) => {
            o.d(t, { Z: () => g });
            var r = o(807896),
                n = o(202784),
                a = o(386308),
                i = o(325686),
                l = o(913973),
                s = o(731708),
                c = o(950822),
                d = o(466792),
                h = o(58881),
                p = o(530732),
                u = o(392237);
            let m = 1;
            class f extends n.Component {
                blur() {
                    this._checkboxElement && a.Z.blur(this._checkboxElement);
                }
                focus() {
                    this._checkboxElement && a.Z.focus(this._checkboxElement);
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
                        (this._labelId = `CHECKBOX_${m}_LABEL`),
                        (m += 1);
                }
                render() {
                    const { checked: e, disabled: t, helpText: o, label: a, onChange: m, style: f, ...g } = this.props,
                        y = h.Z.generate({ backgroundColor: u.default.theme.colors.transparent, color: u.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        C = h.Z.generate({ backgroundColor: u.default.theme.colors.transparent, color: u.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        w = e ? y : C,
                        v = (0, c.Z)("input", { "aria-describedby": this._labelId, checked: e, disabled: t, onChange: this._handleChange, ref: this._setCheckboxRef, style: [b.nativeControl, b.cursorInherit], type: "checkbox" }),
                        E = n.createElement(d.Z, { disabled: t }, (o) => n.createElement(i.Z, (0, r.Z)({ role: "label" }, g, { style: [f, !t && b.interactive] }), n.createElement(i.Z, { style: b.topContainer }, a ? n.createElement(s.ZP, null, a) : null, n.createElement(i.Z, { style: b.checkboxContainer }, ((o) => n.createElement(p.Z, { interactiveStyles: w, interactivityState: o, style: b.fakeControlInteractiveStyles }, n.createElement(i.Z, { style: [b.fakeControl, e && b.fakeControlChecked, t && b.fakeControlDisabled, e && t && b.fakeControlCheckedAndDisabled] }, e ? n.createElement(l.default, { style: b.icon }) : null)))(o), v))));
                    return o ? n.createElement(i.Z, null, E, n.createElement(s.ZP, { color: "gray700", id: this._labelId, size: "subtext2", style: b.helpText }, o)) : E;
                }
            }
            f.defaultProps = { checked: !1, disabled: !1 };
            const b = u.default.create((e) => ({ interactive: { cursor: "pointer" }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1, gap: e.spaces.space8 }, cursorInherit: { cursor: "inherit" }, checkboxContainer: { userSelect: "none" }, helpText: { paddingTop: e.spaces.space4 }, fakeControlInteractiveStyles: { padding: e.spaces.space8, margin: `-${e.spaces.space8}`, borderRadius: e.borderRadii.infinite }, fakeControl: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderRadius: e.borderRadii.small, borderStyle: "solid", borderWidth: e.borderWidths.medium, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, fakeControlChecked: { backgroundColor: e.colors.primary, borderColor: e.colors.primary }, fakeControlDisabled: { borderColor: e.colors.gray200 }, fakeControlCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, nativeControl: { ...u.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, icon: { ...u.default.absoluteFillObject, color: e.colors.whiteOnColor, height: e.spaces.space20, margin: "auto" } })),
                g = f;
        },
        757483: (e, t, o) => {
            o.d(t, { Z: () => n });
            var r = o(295559);
            const n = { hexToCss: r.a7, hexToRgba: r.FP, rgbaToCss: r.rb, rgbToHex: r.vq };
        },
        797553: (e, t, o) => {
            o.r(t), o.d(t, { default: () => E });
            var r = o(807896),
                n = o(202784),
                a = o(878052),
                i = o(325686),
                l = o(666536),
                s = o(815858),
                c = o(67877),
                d = o(743618),
                h = o(745153),
                p = o(666305),
                u = o(667115),
                m = o(175993),
                f = o(365023),
                b = o(292627),
                g = o(224162),
                y = o(386802),
                C = o(537392),
                w = o(392237);
            const v = w.default.create((e) => ({ rootNarrow: { maxWidth: "75%" }, rootWide: { maxWidth: `calc(${e.spaces.space64} * 6)` }, anchor: w.default.absoluteFillObject, mask: { ...w.default.absoluteFillObject, position: "fixed" }, bodyRectHelper: { ...w.default.absoluteFillObject, bottom: void 0 }, content: { borderRadius: e.borderRadii.large, position: "absolute", overflow: "hidden", backgroundColor: e.colors.navigationBackground, boxShadow: e.boxShadows.medium }, contentInitialRender: { position: "fixed", opacity: 0 }, contentFixed: { position: "fixed", overflowY: "auto", overscrollBehavior: "contain" } }));
            class E extends n.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._handleAnimateComplete = () => {
                            const { onAnimateComplete: e } = this.props;
                            e && e();
                        }),
                        (this._handleEsc = (e) => {
                            const { onDismiss: t } = this.props,
                                { altKey: o, ctrlKey: r, key: n, metaKey: a } = e;
                            !(o || r || a) && "Escape" === n && t();
                        }),
                        (this._receiveBodyRectHelperRef = (e) => {
                            e && this._bodyRectHelperNode !== e && ((this._bodyRectHelperNode = e), this._scheduleUpdate());
                        }),
                        (this._receiveAnchorRef = (e) => {
                            e && this._anchorNode !== e && ((this._anchorNode = e), this._scheduleUpdate());
                        }),
                        (this._receiveContentRef = (e) => {
                            e && this._contentNode !== e && ((this._contentNode = e), this._scheduleUpdate(), this._observe(e));
                        }),
                        (this._observe = (e) => {
                            const t = () => {
                                this._scheduleUpdate();
                            };
                            p.Z.observe(e, t),
                                this._disposeResizeObserver?.(),
                                (this._disposeResizeObserver = () => {
                                    p.Z.unobserve(e, t), (this._disposeResizeObserver = void 0);
                                });
                        }),
                        (this._updatePosition = () => {
                            if (!(this._mounted && (this._anchorNode || this.props.position) && this._contentNode && this._contentNode instanceof window.HTMLElement && this._bodyRectHelperNode && this._bodyRectHelperNode instanceof window.HTMLElement)) return;
                            const e = "rtl" === this._languageDirection,
                                t = this._contentNode.scrollHeight,
                                o = this._contentNode.scrollWidth,
                                { left: r, top: n, width: a } = this._bodyRectHelperNode.getBoundingClientRect(),
                                { height: i, width: l } = (0, C.iv)();
                            let s = { left: 0, top: 0, height: 0, width: 0 };
                            this.props.position ? (s = { ...s, ...this.props.position }) : this._anchorNode && this._anchorNode instanceof window.HTMLElement && (s = this._anchorNode.getBoundingClientRect());
                            const { height: c, left: d, top: h, width: p } = s,
                                u = l - a,
                                m = d - r,
                                f = h - n,
                                b = d + p >= o,
                                g = h + c >= t,
                                y = l - d >= o,
                                w = i - h >= t,
                                v = l >= d + p / 2 + o / 2 && d >= o / 2 - p / 2,
                                E = this.props.preferredVerticalOrientation,
                                k = ((e, t) => (e && "center" !== t ? ("left" === t ? "right" : "left") : t))(e, this.props.preferredHorizontalOrientation),
                                x = this.state.verticalOrientation || (({ canOrientDown: e, canOrientUp: t, verticalPreference: o }) => ((t && e) || (!t && !e) ? o : t ? "up" : "down"))({ verticalPreference: E, canOrientUp: g, canOrientDown: w }),
                                _ = this.state.horizontalOrientation || (({ canOrientCenter: e, canOrientLeft: t, canOrientRight: o, horizontalPreference: r }) => ("center" === r && e ? "center" : !t || ("left" !== r && o) ? "right" : "left"))({ horizontalPreference: k, canOrientLeft: b, canOrientRight: y, canOrientCenter: v }),
                                Z = this.props.isFixed ? d : m,
                                I = this.props.isFixed ? h : f,
                                R = "up" === x ? I + c - t : I;
                            let T = l - Z - p - u;
                            "center" === _ && (T = l - Z - p / 2 - o / 2 - u), "right" === _ && (T = l - Z - o - u), this.setState({ top: Math.max(R, 0), right: T, verticalOrientation: x, horizontalOrientation: _ });
                        }),
                        (this.state = Object.freeze({})),
                        (this._scheduleUpdate = (0, c.Z)(this._updatePosition, window.requestAnimationFrame)),
                        (this._scheduleDebouncedUpdate = (0, l.Z)(this._scheduleUpdate, 250));
                }
                componentDidMount() {
                    (this._mounted = !0), a.Z.addEventListener("change", this._scheduleDebouncedUpdate);
                }
                componentWillUnmount() {
                    (this._mounted = !1), this._disposeResizeObserver?.(), a.Z.removeEventListener("change", this._scheduleDebouncedUpdate);
                }
                render() {
                    const { animateInDuration: e, animateType: t, children: o, contentStyle: a, disableMask: l, isFixed: c, onDismiss: p, preventFocusShift: E, withKeyboardNavigation: k } = this.props,
                        { right: x, top: _, verticalOrientation: Z } = this.state,
                        I = void 0 === _,
                        R = k ? d.Z : n.Fragment,
                        T = `calc(100vh - ${_ || 0}px)`,
                        D = (d) => {
                            const h = "rtl" === d,
                                u = [v.content, I && v.contentInitialRender, c && [v.contentFixed, { maxHeight: T }], { top: _, end: h ? void 0 : x, start: h ? x : void 0 }, a];
                            return n.createElement(
                                n.Fragment,
                                null,
                                l ? null : n.createElement(i.Z, { onClick: p, style: v.mask }),
                                n.createElement(i.Z, { ref: this._receiveBodyRectHelperRef, style: v.bodyRectHelper }),
                                n.createElement(C.ZP, null, ({ windowWidth: a }) => n.createElement(i.Z, { onKeyUp: this._handleEsc, ref: this._receiveContentRef, role: "menu", style: [a < w.default.theme.breakpoints.medium ? v.rootNarrow : v.rootWide, u] }, I && "slide" === t ? o : n.createElement(s.Z, { animateMount: "up" !== Z, duration: e, onAnimateComplete: this._handleAnimateComplete, show: !0, type: t }, ({ isAnimating: e }) => n.createElement(f.Z, { id: "Dropdown", minimizeReporting: e }, (e, t) => n.createElement(i.Z, (0, r.Z)({ ref: e() }, t({})), o))))),
                            );
                        };
                    return n.createElement(
                        g.ZP.Consumer,
                        null,
                        ({ direction: e }) => (
                            (this._languageDirection = e),
                            n.createElement(
                                i.Z,
                                { ref: this._receiveAnchorRef, style: v.anchor },
                                n.createElement(
                                    b.Z.Dropdown,
                                    null,
                                    n.createElement(m.Z.Consumer, null, (t) => n.createElement(y.Z.Consumer, null, ({ isModal: o }) => n.createElement(u.Z, { history: t, isModal: o, onDismiss: p }, E ? D(e) : n.createElement(h.Z, null, n.createElement(R, null, D(e)))))),
                                ),
                            )
                        ),
                    );
                }
            }
            E.defaultProps = { preferredHorizontalOrientation: "left", preferredVerticalOrientation: "down", animateType: "slide", animateInDuration: "normal", withKeyboardNavigation: !0 };
        },
        378587: (e, t, o) => {
            o.d(t, { Z: () => d });
            var r = o(202784),
                n = o(325686),
                a = o(295559),
                i = o(392237);
            const l = {
                Default: [
                    {
                        angle: 225,
                        stops: [
                            { color: i.default.theme.colors.plum600, alpha: 0, offset: 0 },
                            { color: i.default.theme.colors.plum600, alpha: 0.6, offset: 1 },
                        ],
                    },
                    {
                        angle: 225,
                        stops: [
                            { color: i.default.theme.colors.plum400, alpha: 0.4, offset: 0 },
                            { color: i.default.theme.colors.plum400, alpha: 0, offset: 1 },
                        ],
                    },
                    {
                        angle: 135,
                        stops: [
                            { color: i.default.theme.colors.magenta500, alpha: 1, offset: 0 },
                            { color: i.default.theme.colors.magenta500, alpha: 0, offset: 1 },
                        ],
                    },
                    {
                        angle: 135,
                        stops: [
                            { color: i.default.theme.colors.red400, alpha: 0, offset: 0 },
                            { color: i.default.theme.colors.red400, alpha: 1, offset: 1 },
                        ],
                    },
                    {
                        angle: 0,
                        stops: [
                            { color: i.default.theme.colors.orange500, alpha: 1, offset: 0 },
                            { color: i.default.theme.colors.orange500, alpha: 1, offset: 1 },
                        ],
                    },
                ],
                HighContrast: [
                    {
                        angle: 0,
                        stops: [
                            { color: i.default.theme.colors.plum600, alpha: 1, offset: 0 },
                            { color: i.default.theme.colors.plum600, alpha: 1, offset: 1 },
                        ],
                    },
                ],
            };
            function s() {
                return (i.default.theme.highContrastEnabled ? l.HighContrast : l.Default).map(({ angle: e, stops: t }) => `linear-gradient(${e}deg, ${t.map(({ alpha: e, color: t, offset: o }) => `${(0, a.a7)(t, e)} ${100 * o}%`).join(", ")})`).join(", ");
            }
            const c = {
                    Default: function (e) {
                        return r.createElement(n.Z, { style: [{ backgroundImage: s() }, e.style] }, e.children);
                    },
                    getBackgroundImage: s,
                },
                d = Object.freeze(c);
        },
        642153: (e, t, o) => {
            o.d(t, { Z: () => l });
            var r = o(202784),
                n = o(325686),
                a = o(392237),
                i = o(823161);
            const l = (e) => {
                    const { borderColor: t = "cellBackground", borderWidth: o = "small", style: l, userAvatarSize: c = "medium", userAvatarUrls: d, withIncreasedSpacing: h } = e,
                        p = d.length,
                        u = "transparent" === t;
                    return r.createElement(
                        n.Z,
                        { style: [s.root, l, { height: i.default.getSizeStyle(c)?.height }] },
                        d.map((e, n) => r.createElement(i.default, { backgroundColor: t, borderColor: t, borderWidth: u ? "none" : o, key: n, size: c, style: [0 !== n && { marginStart: -1 * a.default.theme.spacesPx[h ? "space4" : "space12"] }, { zIndex: p - n }], uri: e })),
                    );
                },
                s = a.default.create((e) => ({ root: { flexDirection: "row", flexShrink: 0, overflow: "hidden", flexWrap: "wrap", justifyContent: "center" } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561.c7cf9daa.js.map
