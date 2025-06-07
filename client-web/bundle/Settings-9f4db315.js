"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Settings-9f4db315"],
    {
        129270: (e, t, o) => {
            o.d(t, { Z: () => n });
            const n = ({ apiClient: e, featureSwitches: t }) => ({ fetchDownloads: (t, o) => e.get("account/user_twitter_data", t, o, ""), createDataDownload: (t, o) => e.post("account/user_twitter_data", t, {}, { ...o, "content-type": "application/json" }, ""), markDataAsDownloaded: (t, o) => e.put("account/user_twitter_data", t, { ...o, "content-type": "application/json" }, "") });
        },
        415725: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(202784),
                r = o(325686),
                a = o(392237),
                l = o(822228);
            const i = "activeRoute",
                s = a.default.create((e) => ({ activeRoot: { backgroundColor: e.colors.gray0 }, overlay: { ...a.default.absoluteFillObject, borderEndStyle: "solid", borderEndWidth: e.borderWidths.medium, borderEndColor: e.colors.primary, zIndex: 1 } })),
                c = ({ children: e, ...t }) => n.createElement(l.Z, t, (t) => n.createElement(r.Z, { style: t && s.activeRoot, testID: i }, "function" == typeof e ? e(t) : e, t ? n.createElement(r.Z, { pointerEvents: "none", style: s.overlay }) : null));
        },
        625661: (e, t, o) => {
            o.d(t, { ZP: () => p });
            var n = o(202784),
                r = o(614983),
                a = o.n(r),
                l = o(325686),
                i = o(370006),
                s = o(786998),
                c = o(929028),
                d = o(386802);
            function u(e, t, o) {
                return e || (!t && o ? "fixed" : void 0);
            }
            class p extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            a()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: r, hideBackButton: a, isFullWidth: l, isLarge: c, leftControl: d, middleControl: p, position: m, rightControl: h, secondaryBar: f, style: C, subtitle: b, title: w, titleDomId: y, titleIconCell: g, titleIconCellSize: k, withBackground: v, withWideContainer: Z } = this.props,
                        { isModal: B } = this.context,
                        E = a ? d : n.createElement(i.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        x = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!v, B, !!f);
                    return n.createElement(n.Fragment, null, n.createElement(s.Z, { centerTitle: t, centeredLogo: o, isFullWidth: l, isLarge: c, leftControl: E, middleControl: p, position: u(m, B, r), rightControl: h, style: C, subtitle: b, title: w, titleDomId: y, titleIconCell: g, titleIconCellSize: k, withBackground: x, withWideContainer: Z }), f || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = c.Z.getBackgroundStyles();
                    return t ? n.createElement(l.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (p.contextType = d.Z), (p.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        741049: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(807896),
                r = o(202784),
                a = o(879891),
                l = o(779610),
                i = o(731708),
                s = o(415725);
            const c = (e) => {
                const { direction: t } = (0, a.Z)();
                return r.createElement(s.Z, { exact: !0, path: e.link }, (o) => {
                    const a = t;
                    return r.createElement(l.Z, (0, n.Z)({ isActive: o }, e, { label: r.createElement(i.ZP, { dir: a, testID: "rtl" === a ? "test-RTLtext" : "test-LTRtext" }, e.label) }));
                });
            };
        },
        222718: (e, t, o) => {
            o.d(t, { Z: () => b });
            var n = o(202784),
                r = o(325686),
                a = o(537392),
                l = o(10656),
                i = o(655352),
                s = o(555079),
                c = o(500002),
                d = o(625661),
                u = o(449067),
                p = o(655543),
                m = o(715601),
                h = o(392237);
            const f = h.default.create((e) => ({ fill: { flex: 1, alignSelf: "stretch" }, viewportView: { ...h.default.absoluteFillObject, overflowY: "auto" }, appBarContainer: { position: "sticky", top: 0, backfaceVisibility: "hidden", zIndex: e.componentZIndices.appBarZIndex } }));
            class C extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildren = () => {
                            const { children: e } = this.props;
                            return this.context.rootDetailPerColumnScroll ? n.createElement(r.Z, { style: f.fill }, n.createElement(m.Z, { style: f.viewportView }, this._renderInlineNav({ isTwoColumnLayout: !0 }), e)) : e;
                        });
                }
                render() {
                    return n.createElement(a.ZP, null, ({ containerWidth: e }) => (l.Z.isTwoColumnLayout(e) ? this._renderForTwoColumnLayout() : this._renderForOneColumnLayout()));
                }
                _renderForOneColumnLayout() {
                    const { appBarStyle: e, children: t, leftControl: o, screenType: r, showBackButtonOnRoot: a, showSubtitleOnRoot: l, showSubtitleOnWideDetail: s, showTitleOnRoot: c, withBottomBorder: d, withDetailOpen: p, ...m } = this.props;
                    return n.createElement(n.Fragment, null, (0, i.ZP)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : n.createElement(u.Z.Configure, m), t);
                }
                _renderForTwoColumnLayout() {
                    const e = this.context.rootDetailPerColumnScroll;
                    return n.createElement(n.Fragment, null, !e && this._renderInlineNav({ isTwoColumnLayout: !0 }), this._renderChildren());
                }
                _renderInlineNav({ isTwoColumnLayout: e }) {
                    const { SideNavButton: t, TabBar: o, appBarStyle: a, backLocation: l, documentTitle: i, headerless: c, history: p, leftControl: m, middleControl: h, onBackClick: C, rightControl: b, screenType: w, searchBoxOptions: y, secondaryBar: g, showBackButtonOnRoot: k, showSubtitleOnRoot: v, showSubtitleOnWideDetail: Z, showTitleOnRoot: B, subtitle: E, title: x, titleIconCell: _, titleIconCellSize: S, withDetailOpen: D, withSearchBox: I, withTweetButton: T, withWideContainer: F } = this.props,
                        L = "root" === w,
                        A = "secondaryRoot" === w,
                        P = "primaryDetail" === w,
                        N = (P && Z) || (L && v),
                        R = (L && !k) || (P && e),
                        O = (L && !B) || (P && e && !B),
                        W = L ? s.ey : P ? s.vX : void 0,
                        z = n.createElement(r.Z, { style: f.appBarContainer }, n.createElement(d.ZP, { backLocation: l, fixed: !1, hideBackButton: R, history: p, leftControl: m, middleControl: h, onBackClick: C, rightControl: b, secondaryBar: g, style: a, subtitle: N ? E : void 0, title: O ? void 0 : x, titleDomId: W, titleIconCell: _, titleIconCellSize: S, withWideContainer: F })),
                        M = L || (A && D) ? null : n.createElement(u.Z.Configure, { SideNavButton: t, TabBar: o, backLocation: l, documentTitle: i, headerless: c, middleControl: h, onBackClick: C, rightControl: b, searchBoxOptions: y, subtitle: E, title: x, withSearchBox: I, withTweetButton: T });
                    return n.createElement(n.Fragment, null, M, z);
                }
            }
            (C.contextType = p.Z), (C.defaultProps = { screenType: "secondaryDetail", showSubtitleOnWideDetail: !0, showBackButtonOnRoot: !1, showTitleOnRoot: !0 });
            const b = (0, c.ZP)(C);
        },
        496364: (e, t, o) => {
            o.d(t, { Z: () => i });
            var n = o(202784),
                r = o(107267),
                a = o(791632),
                l = o(222718);
            const i = (e) => {
                const t = (0, r.useHistory)();
                return (0, a.HD)(t) ? e.children || null : n.createElement(l.Z, e);
            };
        },
        534763: (e, t, o) => {
            o.d(t, { H: () => c, b: () => d });
            var n = o(807896),
                r = o(202784),
                a = o(392237),
                l = o(779610);
            const i = (e) => {
                    const { Icon: t, iconColor: o, testID: n } = e;
                    return r.createElement(t, { style: o ? { color: a.default.theme.colors[o] } : s.thumbnail, testID: n });
                },
                s = a.default.create((e) => ({ thumbnail: { color: e.colors.gray700 } }));
            function c(e) {
                const { Icon: t, iconColor: o, testID: a, ...s } = e;
                return r.createElement(l.Z, (0, n.Z)({}, s, { thumbnail: r.createElement(i, { Icon: t, iconColor: o, testID: a }), thumbnailSize: "large" }));
            }
            function d(e) {
                const { link: t, ...o } = e;
                return r.createElement(l.Z, (0, n.Z)({}, o, { link: { external: !0, pathname: e.link } }));
            }
        },
        934862: (e, t, o) => {
            o.d(t, { Z: () => k });
            var n = o(202784),
                r = o(325686),
                a = o(567447),
                l = o(424028),
                i = o(154003),
                s = o(371344),
                c = o(392237),
                d = o(111677),
                u = o.n(d),
                p = o(894966),
                m = o(956272),
                h = o(530745),
                f = o(456910),
                C = o(649872),
                b = o(524110);
            const w = u().f065ba8c,
                y = u().b08821f4,
                g = c.default.create((e) => ({ root: { flex: 1, flexDirection: "column", position: "relative" }, typeaheadContainer: { flex: 1, position: "relative" }, keydownInputListener: { flexShrink: 1 }, dropdown: { backgroundColor: e.colors.cellBackground, start: 0, end: 0, overflowY: "auto", overscrollBehavior: "contain", position: "absolute", top: 0 }, modalDropdown: { backgroundColor: e.colors.cellBackground, flex: 1, minHeight: 300, position: "relative", overflowY: "auto", overscrollBehavior: "auto" }, wideModeDropdown: { borderRadius: e.borderRadii.medium, boxShadow: e.boxShadows.medium, minHeight: 100, maxHeight: `calc(80vh - ${e.componentDimensions.appBarHeight})` }, wrapper: { alignItems: "stretch", flex: 1 }, topBorder: { borderTopColor: e.colors.gray200, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small }, inputContainer: { flexDirection: "row", alignItems: "center" }, inputWrapper: { flex: 1 }, backButton: { marginEnd: e.spaces.space4 } })),
                k = ({ alwaysOpen: e, disableClearButton: t = !1, dropdownPosition: o = "overlap", inputStyle: c, isCompact: d, isModal: u, items: k, onBackClicked: v, onClick: Z, onDismiss: B, onFocus: E, onItemClick: x, onQueryChange: _, onSubmit: S, placeholder: D, renderEmptyState: I, renderInSearchField: T, rounded: F, shouldAutoFocus: L, shouldClearOnSelect: A, shouldFocusOnClear: P, shouldRenderEmptyState: N, source: R, style: O, testID: W }) => {
                    const z = n.useRef(null),
                        M = n.useRef(null),
                        H = n.useRef(null),
                        j = n.useRef(null),
                        [V, X] = n.useState(!1),
                        [K, U] = n.useState(null),
                        [Y, Q] = n.useState((0, f.A1)()),
                        [$] = n.useState(() => (0, f.D5)()),
                        [G, q] = n.useState(""),
                        J = (e) => {
                            const t = a.Z.getCount() > 0;
                            z?.current?.contains(e.target) || t || (V && oe());
                        };
                    n.useEffect(
                        () => (
                            window.document.addEventListener("click", J, !0),
                            () => {
                                window.document.removeEventListener("click", J, !0);
                            }
                        ),
                    );
                    const ee = () => {
                            if (!M?.current) return;
                            const { bottom: e } = M.current.getBoundingClientRect();
                            e !== K && U(e);
                        },
                        te = (e) => {
                            q(e), _?.(e);
                        },
                        oe = () => {
                            X(!1), B?.();
                        },
                        ne = () => {
                            oe(), H?.current?.blur();
                        },
                        re = (e, t) => {
                            const o = A ? "" : G;
                            X(!1), H.current && (A && P ? H.current.focus() : (A && H.current?.clear(), H.current?.blur())), te(o), B?.(), x?.(e, t);
                        },
                        ae = () => {
                            Q((0, f.A1)());
                        },
                        le = V || e;
                    return n.createElement(
                        r.Z,
                        { onLayout: ee, ref: z, style: [g.root, O] },
                        n.createElement(
                            l.Z,
                            {
                                onKeyDown: (e) => {
                                    const { key: t } = e;
                                    if ((0, f.kE)(e)) {
                                        if (t === h.WX) return j.current?.focusNext(), void e.preventDefault();
                                        if (t === h.kl) return j.current?.focusPrevious(), void e.preventDefault();
                                        if (t === h.nQ) return oe(), void e.preventDefault();
                                        if (t !== h.Dd) return t === h.NW && j.current?.hasFocusedItem() ? (j.current?.selectFocusedItem(), void e.preventDefault()) : void (V || X(!0));
                                        oe();
                                    }
                                },
                                style: g.keydownInputListener,
                            },
                            n.createElement(
                                C.Z,
                                {
                                    "aria-label": D,
                                    onSubmit: (e) => {
                                        e.preventDefault(), e.stopPropagation(), H?.current?.blur(), X(!1), B?.(), S?.();
                                    },
                                    role: "search",
                                    style: g.wrapper,
                                },
                                n.createElement(
                                    r.Z,
                                    { ref: M, style: [g.inputContainer, c] },
                                    le && v
                                        ? n.createElement(i.ZP, {
                                              "aria-label": y,
                                              icon: n.createElement(p.default, null),
                                              onClick: (e) => {
                                                  e?.stopPropagation(), oe(), v?.();
                                              },
                                              style: g.backButton,
                                              type: "primaryText",
                                          })
                                        : null,
                                    n.createElement(
                                        r.Z,
                                        { onClick: Z, style: g.inputWrapper },
                                        n.createElement(s.Z, {
                                            Icon: m.default,
                                            ariaActiveDescendant: Y,
                                            ariaAutocomplete: "list",
                                            ariaExpanded: le,
                                            ariaLabel: w,
                                            ariaOwns: $,
                                            ariaRole: "combobox",
                                            autoComplete: "off",
                                            autoCorrect: !1,
                                            autoFocus: L,
                                            contentBelow: T?.(),
                                            focusOnClear: P,
                                            isCompact: d,
                                            onChange: (e) => {
                                                te(e.target.value), ee();
                                            },
                                            onClear: () => {
                                                te("");
                                            },
                                            onFocus: () => {
                                                X(!0), ee(), E?.();
                                            },
                                            onLayout: ee,
                                            placeholder: D,
                                            ref: H,
                                            returnKeyType: "search",
                                            spellCheck: "false",
                                            styleType: F ? "pill" : "selection",
                                            testID: W,
                                            value: G,
                                            withClearButton: !t && V,
                                        }),
                                    ),
                                ),
                                n.createElement(
                                    r.Z,
                                    { style: [g.typeaheadContainer, !F && g.topBorder] },
                                    le
                                        ? (() => {
                                              let e;
                                              "cover" === o ? (e = [g.dropdown, K ? (0, f.xX)(K) : g.wideModeDropdown]) : "overlap" === o && (e = u ? g.modalDropdown : [g.dropdown, g.wideModeDropdown]);
                                              return I && N ? I({ ariaDescendantId: Y, domId: $, onDismiss: ne, onItemFocusChanged: ae, ref: j, style: e }) : n.createElement(b.Z, { ariaDescendantId: Y, domId: $, items: k, onItemClick: re, onItemFocusChanged: ae, ref: j, source: R, style: e });
                                          })()
                                        : null,
                                ),
                            ),
                        ),
                    );
                };
        },
        664918: (e, t, o) => {
            o.d(t, { D0: () => s, c$: () => d, fD: () => i, iB: () => m, jk: () => c });
            var n = o(366097),
                r = o(163889);
            const a = 2,
                l = 1e3,
                i = Object.freeze({ AcceptAllCookies: "acceptAllCookies", RefuseNonEssentialCookies: "refuseNonEssentialCookies", Invalid: "invalid", NotSet: "notSet" });
            function s(e) {
                const t = (0, n.bL)(e);
                return t ? (u(t) ? (p(t) ? (t[1] ? i.AcceptAllCookies : t[2] ? i.RefuseNonEssentialCookies : ((0, r.ZP)("Invalid consent signal state"), i.Invalid)) : i.NotSet) : i.Invalid) : i.NotSet;
            }
            function c(e) {
                (0, n.kA)({ consent_version: a, text_version: l, 1: !0 }, e);
            }
            function d(e) {
                (0, n.kA)({ consent_version: a, text_version: l, 2: !0 }, e);
            }
            function u(e) {
                return !(e[1] && e[2]);
            }
            function p(e) {
                return e[1] || e[2];
            }
            function m(e) {
                const t = (0, n.bL)(e);
                return !t || !u(t) || !p(t) || t.consent_version < a || t.text_version < l;
            }
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => d });
            var n = o(202784),
                r = o(500002),
                a = o(668214),
                l = o(997174),
                i = o(118823);
            const s = (0, a.Z)()
                .propsFromActions(() => ({ updateLocation: i.YF, updateTweetDetailNav: l.NH }))
                .withAnalytics();
            class c extends n.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: o, search: n },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: a, search: l },
                            locationKey: i,
                        } = e;
                    let s = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (s = !0));
                    const c = r || i;
                    ((c && r !== i) || (!c && o !== a) || n !== l || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: n } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), n(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, r.ZP)(s(c));
        },
        388185: (e, t, o) => {
            o.d(t, { Z: () => S });
            var n = o(202784),
                r = o(325686),
                a = o(157396),
                l = o(392237),
                i = o(731708),
                s = o(173739),
                c = o(111677),
                d = o.n(c),
                u = o(299398),
                p = o(668214),
                m = o(390387),
                h = o(38562);
            const f = (0, p.Z)()
                    .propsFromState(() => ({ language: m.VT, scale: h.Z0 }))
                    .propsFromActions(() => ({ updateSettings: h.VP }))
                    .withAnalytics(),
                { ThemeScaleNames: C } = a.default,
                b = Object.keys(C),
                w = b.length - 1,
                y = d().d8680056,
                g = d().eed02406,
                k = d().j59f0b94,
                v = d().b81aaad8,
                Z = d().c7044880,
                B = { [C.xSmall]: y, [C.small]: g, [C.normal]: k, [C.large]: v, [C.xLarge]: Z },
                E = [y, g, k, v, Z],
                x = d().e46dffa0,
                _ = l.default.create((e) => ({ sliderContainer: { alignItems: "center", flexDirection: "row", padding: e.spaces.space16 }, slider: { flexGrow: 1, marginHorizontal: e.spaces.space20 } })),
                S = f((e) => {
                    const { analytics: t, onSliderChanged: o, updateSettings: a } = e,
                        c = n.useCallback(
                            (e) => {
                                const n = b[e];
                                t.scribe({ component: "text_size_picker", element: "scale", action: n }), a({ scale: n }), l.default.setScale(C[n]), o && o(n);
                            },
                            [t, o, a],
                        );
                    return n.createElement(u.Z, { themeItem: "textSize" }, (e) => n.createElement(r.Z, { style: _.sliderContainer }, n.createElement(i.ZP, { size: "subtext2" }, "Aa"), n.createElement(r.Z, { style: _.slider }, n.createElement(s.Z, { accessibilityLabelValueText: B[l.default.theme.scale], "aria-label": x, autoFocus: e, hoverLabels: E, max: w, min: 0, onChange: c, value: b.indexOf(l.default.theme.scale), withMarkers: !0 })), n.createElement(i.ZP, { size: "headline1" }, "Aa")));
                });
        },
        564297: (e, t, o) => {
            o.d(t, { Z: () => g });
            var n = o(202784),
                r = o(157396),
                a = o(392237),
                l = o(537392),
                i = o(16790),
                s = o(111677),
                c = o.n(s),
                d = o(10656),
                u = o(458616),
                p = o(443781),
                m = o(299398),
                h = o(668214),
                f = o(38562);
            const C = (0, h.Z)()
                    .propsFromActions(() => ({ updateSettings: f.VP }))
                    .withAnalytics(),
                { ThemePaletteNames: b } = r.default,
                w = c().ce8a8116,
                y = [
                    { label: c().j59f0b94, "aria-label": c().d3d48f3a, backgroundName: b.light },
                    { label: c().i76f67ee, backgroundName: b.dark },
                    { label: c().c8f85960, backgroundName: b.darker },
                ];
            const g = C(function ({ analytics: e, updateSettings: t }) {
                const { featureSwitches: o } = (0, p.QZ)();
                function r(n) {
                    e.scribe({ component: "background_picker", element: "option", action: n });
                    const r = b[n];
                    a.default.setPalette(r), t({ themeBackground: r }), u.t8(n, o);
                }
                return n.createElement(l.ZP, null, ({ containerWidth: e }) => n.createElement(m.Z, { themeItem: "background" }, (t) => n.createElement(i.Z, { "aria-label": w, autoFocus: t, layout: d.Z.shouldRenderAsModal(e) ? "row" : "column", onChange: r, options: y, value: a.default.theme.paletteName })));
            });
        },
        177605: (e, t, o) => {
            o.d(t, { Z: () => y });
            var n = o(202784),
                r = o(157396),
                a = o(392237),
                l = o(537392),
                i = o(226244),
                s = o(111677),
                c = o.n(s),
                d = o(10656),
                u = o(299398),
                p = o(668214),
                m = o(38562);
            const h = (0, p.Z)()
                    .propsFromActions(() => ({ updateSettings: m.VP }))
                    .withAnalytics(),
                { ThemePrimaryColorNames: f } = r.default,
                C = c().aefc5b20,
                b = [
                    { "aria-label": c().a52d0fde, colorName: f.blue500 },
                    { "aria-label": c().d818cdd6, colorName: f.yellow500 },
                    { "aria-label": c().fee1cd64, colorName: f.magenta500 },
                    { "aria-label": c().cbed7fb2, colorName: f.purple500 },
                    { "aria-label": c().g697ec02, colorName: f.orange500 },
                    { "aria-label": c().a7c2204a, colorName: f.green500 },
                ];
            class w extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleColorChange = (e) => {
                            const { analytics: t, updateSettings: o } = this.props;
                            t.scribe({ component: "color_picker", element: "option", action: e }), o({ themeColor: f[e] }), a.default.setPrimaryColor(f[e]);
                        });
                }
                render() {
                    return n.createElement(l.ZP, null, ({ containerWidth: e }) => n.createElement(u.Z, { themeItem: "color" }, (t) => n.createElement(i.Z, { "aria-label": C, autoFocus: t, layout: d.Z.shouldRenderAsModal(e) ? "one-row" : "two-rows", onChange: this._handleColorChange, options: b, value: a.default.theme.primaryColorName })));
                }
            }
            const y = h(w);
        },
        299398: (e, t, o) => {
            o.d(t, { Z: () => s });
            var n = o(202784),
                r = o(325686),
                a = o(530745),
                l = o(668214),
                i = o(5849);
            const s = (0, l.Z)()
                .propsFromState(() => ({ themeFocus: i.zM }))
                .propsFromActions(() => ({ setThemeFocus: i.rz }))((e) => {
                const { children: t, setThemeFocus: o, themeFocus: l, themeItem: i } = e,
                    s = i === l,
                    c = n.useCallback(
                        (e) => {
                            const t = e.key === a.nQ || e.key === a.Ur;
                            o(t ? "" : i);
                        },
                        [o, i],
                    ),
                    d = n.useCallback(() => {
                        o("");
                    }, [o]);
                return n.createElement(r.Z, { onKeyDown: c, onMouseDown: d }, t(s));
            });
        },
        53140: (e, t, o) => {
            o.d(t, { Z: () => b });
            var n = o(202784),
                r = o(325686),
                a = o(392237),
                l = o(111677),
                i = o.n(l),
                s = o(516951),
                c = o(808692),
                d = o(668214),
                u = o(390387);
            const p = (0, d.Z)().propsFromState(() => ({ language: u.VT })),
                m = i().gde8fdd7({ mention: "X" }),
                h = { text: m, created_at: new Date(Date.now() - 6e5).toString(), id: 20, id_str: "20", display_text_range: [0, m.length - 1], entities: { user_mentions: [{ id_str: "783214", name: "X", screen_name: "X", text: "X", indices: [m.indexOf("@"), m.indexOf("@") + 1 + 1] }] }, user: { id: 783214, id_str: "783214", name: "X", screen_name: "X", profile_image_url_https: "https://pbs.twimg.com/profile_images/1683899100922511378/5lY42eHs_normal.jpg", verified: !0 } };
            class f extends n.Component {
                constructor(e) {
                    super(e),
                        (this._handleTweetAction = (e) => {
                            e && e.preventDefault && e.preventDefault();
                        });
                    const { language: t, tweet: o } = this.props;
                    this._tweet = { ...h, ...o, lang: t || "en" };
                }
                render() {
                    const { withTweetBorder: e } = this.props;
                    return n.createElement(r.Z, { "aria-hidden": !0, style: [C.width, e && C.tweetBorder] }, n.createElement(c.ZP, { enableKeyboardShortcuts: !1, onAnalyticsClick: s.Z, onAvatarClick: this._handleTweetAction, onEngagementsClick: s.Z, onEntityClick: this._handleTweetAction, onMediaClick: this._handleTweetAction, onReplyContextClick: this._handleTweetAction, tweet: this._tweet, withActions: !1, withAvatarLink: !1, withTimestampLink: !1, withUserHoverCard: !1 }), n.createElement(r.Z, { style: a.default.absoluteFill }));
                }
            }
            f.defaultProps = { tweet: h, withTweetBorder: !1 };
            const C = a.default.create((e) => ({ tweetBorder: { borderStyle: "solid", borderWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderRadius: e.borderRadii.xLarge, outlineStyle: "none" }, width: { width: "100%" } })),
                b = p(f);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Settings-9f4db315.77e55fda.js.map
