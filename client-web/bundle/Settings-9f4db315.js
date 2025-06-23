"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Settings-9f4db315"],
    {
        415725: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(202784),
                r = o(325686),
                a = o(392237),
                i = o(822228);
            const s = "activeRoute",
                l = a.default.create((e) => ({ activeRoot: { backgroundColor: e.colors.gray0 }, overlay: { ...a.default.absoluteFillObject, borderEndStyle: "solid", borderEndWidth: e.borderWidths.medium, borderEndColor: e.colors.primary, zIndex: 1 } })),
                c = ({ children: e, ...t }) => n.createElement(i.Z, t, (t) => n.createElement(r.Z, { style: t && l.activeRoot, testID: s }, "function" == typeof e ? e(t) : e, t ? n.createElement(r.Z, { pointerEvents: "none", style: l.overlay }) : null));
        },
        625661: (e, t, o) => {
            o.d(t, { ZP: () => p });
            var n = o(202784),
                r = o(614983),
                a = o.n(r),
                i = o(325686),
                s = o(370006),
                l = o(786998),
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: r, hideBackButton: a, isFullWidth: i, isLarge: c, leftControl: d, middleControl: p, position: m, rightControl: h, secondaryBar: f, style: g, subtitle: b, title: k, titleDomId: y, titleIconCell: C, titleIconCellSize: w, withBackground: v, withWideContainer: E } = this.props,
                        { isModal: S } = this.context,
                        I = a ? d : n.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        T = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!v, S, !!f);
                    return n.createElement(n.Fragment, null, n.createElement(l.Z, { centerTitle: t, centeredLogo: o, isFullWidth: i, isLarge: c, leftControl: I, middleControl: p, position: u(m, S, r), rightControl: h, style: g, subtitle: b, title: k, titleDomId: y, titleIconCell: C, titleIconCellSize: w, withBackground: T, withWideContainer: E }), f || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = c.Z.getBackgroundStyles();
                    return t ? n.createElement(i.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (p.contextType = d.Z), (p.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        290402: (e, t, o) => {
            o.d(t, { Z: () => h });
            var n = o(807896),
                r = o(202784),
                a = o(182056),
                i = o(879113),
                s = o(392237),
                l = o(111677),
                c = o.n(l),
                d = o(968478);
            const u = c().aa6e3300,
                p = ({ retryMessage: e, ...t }, o) => {
                    const s = a.Z.isOnline();
                    return r.createElement(i.Z, (0, n.Z)({}, t, { icon: s ? void 0 : r.createElement(d.default, { style: m.icon }), retryMessage: s ? e : u }));
                },
                m = s.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                h = r.forwardRef(p);
        },
        741049: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(807896),
                r = o(202784),
                a = o(879891),
                i = o(779610),
                s = o(731708),
                l = o(415725);
            const c = (e) => {
                const { direction: t } = (0, a.Z)();
                return r.createElement(l.Z, { exact: !0, path: e.link }, (o) => {
                    const a = t;
                    return r.createElement(i.Z, (0, n.Z)({ isActive: o }, e, { label: r.createElement(s.ZP, { dir: a, testID: "rtl" === a ? "test-RTLtext" : "test-LTRtext" }, e.label) }));
                });
            };
        },
        222718: (e, t, o) => {
            o.d(t, { Z: () => b });
            var n = o(202784),
                r = o(325686),
                a = o(537392),
                i = o(10656),
                s = o(655352),
                l = o(555079),
                c = o(500002),
                d = o(625661),
                u = o(449067),
                p = o(655543),
                m = o(715601),
                h = o(392237);
            const f = h.default.create((e) => ({ fill: { flex: 1, alignSelf: "stretch" }, viewportView: { ...h.default.absoluteFillObject, overflowY: "auto" }, appBarContainer: { position: "sticky", top: 0, backfaceVisibility: "hidden", zIndex: e.componentZIndices.appBarZIndex } }));
            class g extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildren = () => {
                            const { children: e } = this.props;
                            return this.context.rootDetailPerColumnScroll ? n.createElement(r.Z, { style: f.fill }, n.createElement(m.Z, { style: f.viewportView }, this._renderInlineNav({ isTwoColumnLayout: !0 }), e)) : e;
                        });
                }
                render() {
                    return n.createElement(a.ZP, null, ({ containerWidth: e }) => (i.Z.isTwoColumnLayout(e) ? this._renderForTwoColumnLayout() : this._renderForOneColumnLayout()));
                }
                _renderForOneColumnLayout() {
                    const { appBarStyle: e, children: t, leftControl: o, screenType: r, showBackButtonOnRoot: a, showSubtitleOnRoot: i, showSubtitleOnWideDetail: l, showTitleOnRoot: c, withBottomBorder: d, withDetailOpen: p, ...m } = this.props;
                    return n.createElement(n.Fragment, null, (0, s.ZP)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : n.createElement(u.Z.Configure, m), t);
                }
                _renderForTwoColumnLayout() {
                    const e = this.context.rootDetailPerColumnScroll;
                    return n.createElement(n.Fragment, null, !e && this._renderInlineNav({ isTwoColumnLayout: !0 }), this._renderChildren());
                }
                _renderInlineNav({ isTwoColumnLayout: e }) {
                    const { SideNavButton: t, TabBar: o, appBarStyle: a, backLocation: i, documentTitle: s, headerless: c, history: p, leftControl: m, middleControl: h, onBackClick: g, rightControl: b, screenType: k, searchBoxOptions: y, secondaryBar: C, showBackButtonOnRoot: w, showSubtitleOnRoot: v, showSubtitleOnWideDetail: E, showTitleOnRoot: S, subtitle: I, title: T, titleIconCell: Z, titleIconCellSize: D, withDetailOpen: _, withSearchBox: x, withTweetButton: N, withWideContainer: O } = this.props,
                        P = "root" === k,
                        B = "secondaryRoot" === k,
                        L = "primaryDetail" === k,
                        A = (L && E) || (P && v),
                        F = (P && !w) || (L && e),
                        R = (P && !S) || (L && e && !S),
                        W = P ? l.ey : L ? l.vX : void 0,
                        M = n.createElement(r.Z, { style: f.appBarContainer }, n.createElement(d.ZP, { backLocation: i, fixed: !1, hideBackButton: F, history: p, leftControl: m, middleControl: h, onBackClick: g, rightControl: b, secondaryBar: C, style: a, subtitle: A ? I : void 0, title: R ? void 0 : T, titleDomId: W, titleIconCell: Z, titleIconCellSize: D, withWideContainer: O })),
                        U = P || (B && _) ? null : n.createElement(u.Z.Configure, { SideNavButton: t, TabBar: o, backLocation: i, documentTitle: s, headerless: c, middleControl: h, onBackClick: g, rightControl: b, searchBoxOptions: y, subtitle: I, title: T, withSearchBox: x, withTweetButton: N });
                    return n.createElement(n.Fragment, null, U, M);
                }
            }
            (g.contextType = p.Z), (g.defaultProps = { screenType: "secondaryDetail", showSubtitleOnWideDetail: !0, showBackButtonOnRoot: !1, showTitleOnRoot: !0 });
            const b = (0, c.ZP)(g);
        },
        496364: (e, t, o) => {
            o.d(t, { Z: () => s });
            var n = o(202784),
                r = o(107267),
                a = o(791632),
                i = o(222718);
            const s = (e) => {
                const t = (0, r.useHistory)();
                return (0, a.HD)(t) ? e.children || null : n.createElement(i.Z, e);
            };
        },
        534763: (e, t, o) => {
            o.d(t, { H: () => c, b: () => d });
            var n = o(807896),
                r = o(202784),
                a = o(392237),
                i = o(779610);
            const s = (e) => {
                    const { Icon: t, iconColor: o, testID: n } = e;
                    return r.createElement(t, { style: o ? { color: a.default.theme.colors[o] } : l.thumbnail, testID: n });
                },
                l = a.default.create((e) => ({ thumbnail: { color: e.colors.gray700 } }));
            function c(e) {
                const { Icon: t, iconColor: o, testID: a, ...l } = e;
                return r.createElement(i.Z, (0, n.Z)({}, l, { thumbnail: r.createElement(s, { Icon: t, iconColor: o, testID: a }), thumbnailSize: "large" }));
            }
            function d(e) {
                const { link: t, ...o } = e;
                return r.createElement(i.Z, (0, n.Z)({}, o, { link: { external: !0, pathname: e.link } }));
            }
        },
        934862: (e, t, o) => {
            o.d(t, { Z: () => w });
            var n = o(202784),
                r = o(325686),
                a = o(567447),
                i = o(424028),
                s = o(154003),
                l = o(371344),
                c = o(392237),
                d = o(111677),
                u = o.n(d),
                p = o(894966),
                m = o(956272),
                h = o(530745),
                f = o(456910),
                g = o(649872),
                b = o(524110);
            const k = u().f065ba8c,
                y = u().b08821f4,
                C = c.default.create((e) => ({ root: { flex: 1, flexDirection: "column", position: "relative" }, typeaheadContainer: { flex: 1, position: "relative" }, keydownInputListener: { flexShrink: 1 }, dropdown: { backgroundColor: e.colors.cellBackground, start: 0, end: 0, overflowY: "auto", overscrollBehavior: "contain", position: "absolute", top: 0 }, modalDropdown: { backgroundColor: e.colors.cellBackground, flex: 1, minHeight: 300, position: "relative", overflowY: "auto", overscrollBehavior: "auto" }, wideModeDropdown: { borderRadius: e.borderRadii.medium, boxShadow: e.boxShadows.medium, minHeight: 100, maxHeight: `calc(80vh - ${e.componentDimensions.appBarHeight})` }, wrapper: { alignItems: "stretch", flex: 1 }, topBorder: { borderTopColor: e.colors.gray200, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small }, inputContainer: { flexDirection: "row", alignItems: "center" }, inputWrapper: { flex: 1 }, backButton: { marginEnd: e.spaces.space4 } })),
                w = ({ alwaysOpen: e, disableClearButton: t = !1, dropdownPosition: o = "overlap", inputStyle: c, isCompact: d, isModal: u, items: w, onBackClicked: v, onClick: E, onDismiss: S, onFocus: I, onItemClick: T, onQueryChange: Z, onSubmit: D, placeholder: _, renderEmptyState: x, renderInSearchField: N, rounded: O, shouldAutoFocus: P, shouldClearOnSelect: B, shouldFocusOnClear: L, shouldRenderEmptyState: A, source: F, style: R, testID: W }) => {
                    const M = n.useRef(null),
                        U = n.useRef(null),
                        H = n.useRef(null),
                        z = n.useRef(null),
                        [G, j] = n.useState(!1),
                        [K, V] = n.useState(null),
                        [X, Y] = n.useState((0, f.A1)()),
                        [$] = n.useState(() => (0, f.D5)()),
                        [Q, q] = n.useState(""),
                        J = (e) => {
                            const t = a.Z.getCount() > 0;
                            M?.current?.contains(e.target) || t || (G && oe());
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
                            if (!U?.current) return;
                            const { bottom: e } = U.current.getBoundingClientRect();
                            e !== K && V(e);
                        },
                        te = (e) => {
                            q(e), Z?.(e);
                        },
                        oe = () => {
                            j(!1), S?.();
                        },
                        ne = () => {
                            oe(), H?.current?.blur();
                        },
                        re = (e, t) => {
                            const o = B ? "" : Q;
                            j(!1), H.current && (B && L ? H.current.focus() : (B && H.current?.clear(), H.current?.blur())), te(o), S?.(), T?.(e, t);
                        },
                        ae = () => {
                            Y((0, f.A1)());
                        },
                        ie = G || e;
                    return n.createElement(
                        r.Z,
                        { onLayout: ee, ref: M, style: [C.root, R] },
                        n.createElement(
                            i.Z,
                            {
                                onKeyDown: (e) => {
                                    const { key: t } = e;
                                    if ((0, f.kE)(e)) {
                                        if (t === h.WX) return z.current?.focusNext(), void e.preventDefault();
                                        if (t === h.kl) return z.current?.focusPrevious(), void e.preventDefault();
                                        if (t === h.nQ) return oe(), void e.preventDefault();
                                        if (t !== h.Dd) return t === h.NW && z.current?.hasFocusedItem() ? (z.current?.selectFocusedItem(), void e.preventDefault()) : void (G || j(!0));
                                        oe();
                                    }
                                },
                                style: C.keydownInputListener,
                            },
                            n.createElement(
                                g.Z,
                                {
                                    "aria-label": _,
                                    onSubmit: (e) => {
                                        e.preventDefault(), e.stopPropagation(), H?.current?.blur(), j(!1), S?.(), D?.();
                                    },
                                    role: "search",
                                    style: C.wrapper,
                                },
                                n.createElement(
                                    r.Z,
                                    { ref: U, style: [C.inputContainer, c] },
                                    ie && v
                                        ? n.createElement(s.ZP, {
                                              "aria-label": y,
                                              icon: n.createElement(p.default, null),
                                              onClick: (e) => {
                                                  e?.stopPropagation(), oe(), v?.();
                                              },
                                              style: C.backButton,
                                              type: "primaryText",
                                          })
                                        : null,
                                    n.createElement(
                                        r.Z,
                                        { onClick: E, style: C.inputWrapper },
                                        n.createElement(l.Z, {
                                            Icon: m.default,
                                            ariaActiveDescendant: X,
                                            ariaAutocomplete: "list",
                                            ariaExpanded: ie,
                                            ariaLabel: k,
                                            ariaOwns: $,
                                            ariaRole: "combobox",
                                            autoComplete: "off",
                                            autoCorrect: !1,
                                            autoFocus: P,
                                            contentBelow: N?.(),
                                            focusOnClear: L,
                                            isCompact: d,
                                            onChange: (e) => {
                                                te(e.target.value), ee();
                                            },
                                            onClear: () => {
                                                te("");
                                            },
                                            onFocus: () => {
                                                j(!0), ee(), I?.();
                                            },
                                            onLayout: ee,
                                            placeholder: _,
                                            ref: H,
                                            returnKeyType: "search",
                                            spellCheck: "false",
                                            styleType: O ? "pill" : "selection",
                                            testID: W,
                                            value: Q,
                                            withClearButton: !t && G,
                                        }),
                                    ),
                                ),
                                n.createElement(
                                    r.Z,
                                    { style: [C.typeaheadContainer, !O && C.topBorder] },
                                    ie
                                        ? (() => {
                                              let e;
                                              "cover" === o ? (e = [C.dropdown, K ? (0, f.xX)(K) : C.wideModeDropdown]) : "overlap" === o && (e = u ? C.modalDropdown : [C.dropdown, C.wideModeDropdown]);
                                              return x && A ? x({ ariaDescendantId: X, domId: $, onDismiss: ne, onItemFocusChanged: ae, ref: z, style: e }) : n.createElement(b.Z, { ariaDescendantId: X, domId: $, items: w, onItemClick: re, onItemFocusChanged: ae, ref: z, source: F, style: e });
                                          })()
                                        : null,
                                ),
                            ),
                        ),
                    );
                };
        },
        664918: (e, t, o) => {
            o.d(t, { D0: () => l, c$: () => d, fD: () => s, iB: () => m, jk: () => c });
            var n = o(366097),
                r = o(163889);
            const a = 2,
                i = 1e3,
                s = Object.freeze({ AcceptAllCookies: "acceptAllCookies", RefuseNonEssentialCookies: "refuseNonEssentialCookies", Invalid: "invalid", NotSet: "notSet" });
            function l(e) {
                const t = (0, n.bL)(e);
                return t ? (u(t) ? (p(t) ? (t[1] ? s.AcceptAllCookies : t[2] ? s.RefuseNonEssentialCookies : ((0, r.ZP)("Invalid consent signal state"), s.Invalid)) : s.NotSet) : s.Invalid) : s.NotSet;
            }
            function c(e) {
                (0, n.kA)({ consent_version: a, text_version: i, 1: !0 }, e);
            }
            function d(e) {
                (0, n.kA)({ consent_version: a, text_version: i, 2: !0 }, e);
            }
            function u(e) {
                return !(e[1] && e[2]);
            }
            function p(e) {
                return e[1] || e[2];
            }
            function m(e) {
                const t = (0, n.bL)(e);
                return !t || !u(t) || !p(t) || t.consent_version < a || t.text_version < i;
            }
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => d });
            var n = o(202784),
                r = o(500002),
                a = o(668214),
                i = o(997174),
                s = o(118823);
            const l = (0, a.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: i.NH }))
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
                            location: { pathname: a, search: i },
                            locationKey: s,
                        } = e;
                    let l = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (l = !0));
                    const c = r || s;
                    ((c && r !== s) || (!c && o !== a) || n !== i || l) && this._performPageUpdates(this.props);
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
            const d = (0, r.ZP)(l(c));
        },
        388185: (e, t, o) => {
            o.d(t, { Z: () => D });
            var n = o(202784),
                r = o(325686),
                a = o(157396),
                i = o(392237),
                s = o(731708),
                l = o(173739),
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
                { ThemeScaleNames: g } = a.default,
                b = Object.keys(g),
                k = b.length - 1,
                y = d().d8680056,
                C = d().eed02406,
                w = d().j59f0b94,
                v = d().b81aaad8,
                E = d().c7044880,
                S = { [g.xSmall]: y, [g.small]: C, [g.normal]: w, [g.large]: v, [g.xLarge]: E },
                I = [y, C, w, v, E],
                T = d().e46dffa0,
                Z = i.default.create((e) => ({ sliderContainer: { alignItems: "center", flexDirection: "row", padding: e.spaces.space16 }, slider: { flexGrow: 1, marginHorizontal: e.spaces.space20 } })),
                D = f((e) => {
                    const { analytics: t, onSliderChanged: o, updateSettings: a } = e,
                        c = n.useCallback(
                            (e) => {
                                const n = b[e];
                                t.scribe({ component: "text_size_picker", element: "scale", action: n }), a({ scale: n }), i.default.setScale(g[n]), o && o(n);
                            },
                            [t, o, a],
                        );
                    return n.createElement(u.Z, { themeItem: "textSize" }, (e) => n.createElement(r.Z, { style: Z.sliderContainer }, n.createElement(s.ZP, { size: "subtext2" }, "Aa"), n.createElement(r.Z, { style: Z.slider }, n.createElement(l.Z, { accessibilityLabelValueText: S[i.default.theme.scale], "aria-label": T, autoFocus: e, hoverLabels: I, max: k, min: 0, onChange: c, value: b.indexOf(i.default.theme.scale), withMarkers: !0 })), n.createElement(s.ZP, { size: "headline1" }, "Aa")));
                });
        },
        564297: (e, t, o) => {
            o.d(t, { Z: () => C });
            var n = o(202784),
                r = o(157396),
                a = o(392237),
                i = o(537392),
                s = o(16790),
                l = o(111677),
                c = o.n(l),
                d = o(10656),
                u = o(458616),
                p = o(443781),
                m = o(299398),
                h = o(668214),
                f = o(38562);
            const g = (0, h.Z)()
                    .propsFromActions(() => ({ updateSettings: f.VP }))
                    .withAnalytics(),
                { ThemePaletteNames: b } = r.default,
                k = c().ce8a8116,
                y = [
                    { label: c().j59f0b94, "aria-label": c().d3d48f3a, backgroundName: b.light },
                    { label: c().i76f67ee, backgroundName: b.dark },
                    { label: c().c8f85960, backgroundName: b.darker },
                ];
            const C = g(function ({ analytics: e, updateSettings: t }) {
                const { featureSwitches: o } = (0, p.QZ)();
                function r(n) {
                    e.scribe({ component: "background_picker", element: "option", action: n });
                    const r = b[n];
                    a.default.setPalette(r), t({ themeBackground: r }), u.t8(n, o);
                }
                return n.createElement(i.ZP, null, ({ containerWidth: e }) => n.createElement(m.Z, { themeItem: "background" }, (t) => n.createElement(s.Z, { "aria-label": k, autoFocus: t, layout: d.Z.shouldRenderAsModal(e) ? "row" : "column", onChange: r, options: y, value: a.default.theme.paletteName })));
            });
        },
        177605: (e, t, o) => {
            o.d(t, { Z: () => y });
            var n = o(202784),
                r = o(157396),
                a = o(392237),
                i = o(537392),
                s = o(226244),
                l = o(111677),
                c = o.n(l),
                d = o(10656),
                u = o(299398),
                p = o(668214),
                m = o(38562);
            const h = (0, p.Z)()
                    .propsFromActions(() => ({ updateSettings: m.VP }))
                    .withAnalytics(),
                { ThemePrimaryColorNames: f } = r.default,
                g = c().aefc5b20,
                b = [
                    { "aria-label": c().a52d0fde, colorName: f.blue500 },
                    { "aria-label": c().d818cdd6, colorName: f.yellow500 },
                    { "aria-label": c().fee1cd64, colorName: f.magenta500 },
                    { "aria-label": c().cbed7fb2, colorName: f.purple500 },
                    { "aria-label": c().g697ec02, colorName: f.orange500 },
                    { "aria-label": c().a7c2204a, colorName: f.green500 },
                ];
            class k extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleColorChange = (e) => {
                            const { analytics: t, updateSettings: o } = this.props;
                            t.scribe({ component: "color_picker", element: "option", action: e }), o({ themeColor: f[e] }), a.default.setPrimaryColor(f[e]);
                        });
                }
                render() {
                    return n.createElement(i.ZP, null, ({ containerWidth: e }) => n.createElement(u.Z, { themeItem: "color" }, (t) => n.createElement(s.Z, { "aria-label": g, autoFocus: t, layout: d.Z.shouldRenderAsModal(e) ? "one-row" : "two-rows", onChange: this._handleColorChange, options: b, value: a.default.theme.primaryColorName })));
                }
            }
            const y = h(k);
        },
        299398: (e, t, o) => {
            o.d(t, { Z: () => l });
            var n = o(202784),
                r = o(325686),
                a = o(530745),
                i = o(668214),
                s = o(5849);
            const l = (0, i.Z)()
                .propsFromState(() => ({ themeFocus: s.zM }))
                .propsFromActions(() => ({ setThemeFocus: s.rz }))((e) => {
                const { children: t, setThemeFocus: o, themeFocus: i, themeItem: s } = e,
                    l = s === i,
                    c = n.useCallback(
                        (e) => {
                            const t = e.key === a.nQ || e.key === a.Ur;
                            o(t ? "" : s);
                        },
                        [o, s],
                    ),
                    d = n.useCallback(() => {
                        o("");
                    }, [o]);
                return n.createElement(r.Z, { onKeyDown: c, onMouseDown: d }, t(l));
            });
        },
        53140: (e, t, o) => {
            o.d(t, { Z: () => b });
            var n = o(202784),
                r = o(325686),
                a = o(392237),
                i = o(111677),
                s = o.n(i),
                l = o(516951),
                c = o(808692),
                d = o(668214),
                u = o(390387);
            const p = (0, d.Z)().propsFromState(() => ({ language: u.VT })),
                m = s().gde8fdd7({ mention: "X" }),
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
                    return n.createElement(r.Z, { "aria-hidden": !0, style: [g.width, e && g.tweetBorder] }, n.createElement(c.ZP, { enableKeyboardShortcuts: !1, onAnalyticsClick: l.Z, onAvatarClick: this._handleTweetAction, onEngagementsClick: l.Z, onEntityClick: this._handleTweetAction, onMediaClick: this._handleTweetAction, onReplyContextClick: this._handleTweetAction, tweet: this._tweet, withActions: !1, withAvatarLink: !1, withTimestampLink: !1, withUserHoverCard: !1 }), n.createElement(r.Z, { style: a.default.absoluteFill }));
                }
            }
            f.defaultProps = { tweet: h, withTweetBorder: !1 };
            const g = a.default.create((e) => ({ tweetBorder: { borderStyle: "solid", borderWidth: e.borderWidths.small, borderColor: e.colors.borderColor, borderRadius: e.borderRadii.xLarge, outlineStyle: "none" }, width: { width: "100%" } })),
                b = p(f);
        },
        376293: (e, t, o) => {
            o.d(t, { $f: () => v, KV: () => g, LI: () => Z, SC: () => w, Vt: () => y, ed: () => D, op: () => E });
            var n = o(202784),
                r = o(190286),
                a = o(111677),
                i = o.n(a),
                s = o(616894),
                l = o(314948),
                c = o(516951),
                d = o(163390);
            const u = i().cfd2f35e,
                p = i().f9e45cfb,
                m = i().fcd4d489,
                h = i().a6450e84,
                f = i().ad00a739,
                g = i().a9fd20be,
                b = i().j546fb79,
                k = i().c9623eeb,
                y = i().e133be4e,
                C = i().f5f01af6,
                w = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                v = (e) => ({ confirmButtonType: "destructiveFilled", headline: p({ screenName: e }), label: h, text: f({ screenName: e }) }),
                E = ({ blockAction: e, blockSubtext: t, source: o, testID: n, unblockAction: r, unblockSubtext: a, user: i }) => {
                    let s,
                        l = c.Z;
                    const u = Z(i);
                    switch (o) {
                        case w.PROFILE:
                        case w.LIST_DETAIL:
                        case w.FOLLOWERS_LIST:
                            l = () => {
                                i.blocking ? r(u) : e(u);
                            };
                            break;
                        case w.TWEET:
                        case w.TWEET_CARET:
                        case w.RICH_FEEDBACK:
                            (s = d.uq.block),
                                (l = () => {
                                    i.blocking ? r(u) : e(u);
                                });
                    }
                    return { confirmation: u, onClick: l, testID: n, shortcutKey: s, Icon: S(i.blocking), text: T(i), subText: I({ user: i, blockSubtext: t, unblockSubtext: a }) };
                },
                S = (e) => (e ? l.default : s.default),
                I = ({ blockSubtext: e, unblockSubtext: t, user: o }) => (!o.blocking && e ? e(o.screen_name) : o.blocking ? t : void 0),
                T = (e) => (e.blocking ? k({ screenName: e.screen_name }) : m({ screenName: e.screen_name })),
                Z = (e) => {
                    return e.blocking ? ((t = e.screen_name), { confirmButtonType: "primary", headline: b({ screenName: t }), label: y, text: C }) : v(e.screen_name);
                    var t;
                },
                D = ({ confirmation: e, handleConfirm: t, onClose: o }) => {
                    const { confirmButtonType: a, headline: i, label: s, text: l } = e;
                    return n.createElement(r.Z, { cancelButtonLabel: u, confirmButtonLabel: s, confirmButtonType: a, headline: i, onCancel: o, onConfirm: t, text: l });
                };
        },
        712816: (e, t, o) => {
            o.d(t, { d: () => r });
            var n = o(111677);
            const r = { defaultToast: { text: o.n(n)().b6878b0a }, showToast: !0 };
        },
        670094: (e, t, o) => {
            o.d(t, { d: () => c });
            var n = o(111677),
                r = o.n(n),
                a = o(88656),
                i = o(601576),
                s = o(163889);
            const l = r().a5d4fda0,
                c = (e = l, t = !0) => ({
                    customErrorHandler: (o) => {
                        const { context: n } = o;
                        return (!o) instanceof a.Z && (o.message = `Strato error occurred in ${n.id}: ${n.action}`), (0, s.ZP)(o, { extra: { context: n, isStrato: !0 } }), t ? (0, i.mf)({ text: e }) : [];
                    },
                });
        },
        879596: (e, t, o) => {
            o.d(t, { D: () => r });
            var n = o(111677);
            const r = { defaultToast: { text: o.n(n)().ca96fe6e }, showToast: !0 };
        },
        163390: (e, t, o) => {
            o.d(t, { OX: () => p, Od: () => d, PN: () => m, uq: () => c, wR: () => f });
            var n = o(251067),
                r = o(522171),
                a = o(111677),
                i = o.n(a),
                s = o(912021),
                l = o(323265);
            const c = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                d = (0, s.Z)((e) => {
                    const t = e ? [{ description: i().b7fa0cfe, keys: c.goTopArticles, universal: !1 }] : [];
                    return [...((0, n.fH)(n.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: i().d5696fcc, keys: c.openKeyboardShortcuts, universal: !0 }, { description: i().a83d4280, keys: c.nextItem, universal: !0 }, { description: i().g0048656, keys: c.previousItem, universal: !0 }, { description: i().a690c4d0, keys: "Space", universal: !0 }, { description: i().e893811a, keys: c.refresh, universal: !1 }, { description: i().ha8209bc, keys: c.goHome, universal: !1 }, { description: i().fcf3e54c, keys: c.goExplore, universal: !1 }, { description: i().eb75875e, keys: c.goNotifications, universal: !1 }, { description: i().cdb53d7a, keys: c.goMentions, universal: !1 }, { description: i().fa98627a, keys: c.goProfile, universal: !1 }, { description: i().d4ebc798, keys: c.goToDrafts, universal: !1 }, { description: i().fd6a3f30, keys: c.goToScheduled, universal: !1 }, { description: i().d7b8ebaa, keys: c.goLikes, universal: !1 }, { description: i().b0041756, keys: c.goLists, universal: !1 }, { description: i().d4986f86, keys: c.goMessages, universal: !1 }, { description: i().h5860a68, keys: c.goGrok, universal: !1 }, { description: i().bb081ea2, keys: c.goSettings, universal: !1 }, { description: i().i3145aa0, keys: c.goBookmarks, universal: !1 }, ...t, { description: i().eee2ed92, keys: c.goToUser, universal: !1 }, { description: i().ee5ccf3e, keys: c.goDisplay, universal: !1 }];
                }),
                u = l.ZP.isMac() ? "⌘" : "CTRL",
                p = () => [
                    { description: i().ab3d53f8, keys: c.newTweet, universal: !1 },
                    { description: i().de94bda6, keys: `${u} Enter`, universal: !1 },
                    { description: i().e736990a, keys: c.newMessage, universal: !1 },
                    { description: i().a9ae1e78, keys: c.search, universal: !1 },
                    { description: i().fe731016, keys: r.Z.shortcuts.like, universal: !1 },
                    { description: i().d17df548, keys: r.Z.shortcuts.reply, universal: !1 },
                    { description: i().g062295e, keys: r.Z.shortcuts.retweet, universal: !1 },
                    { description: i().h01621a4, keys: r.Z.shortcuts.share, universal: !0 },
                    { description: i().gb303814, keys: c.bookmark, universal: !1 },
                    { description: i().c03b1126, keys: c.mute, universal: !1 },
                    { description: i().ebd2abb2, keys: c.block, universal: !1 },
                    { description: i().hc6c5510, keys: "Enter", universal: !0 },
                    { description: i().eebdef38, keys: r.Z.shortcuts.openMediaModal, universal: !0 },
                    { description: i().b488758c, keys: c.toggleDMDrawer, universal: !1 },
                ],
                m = () => [
                    { description: i().c82314e0, keys: c.video.play1, universal: !0 },
                    { description: i().c82314e0, keys: c.video.play2, universal: !0 },
                    { description: i().b881560e, keys: c.video.mute, universal: !0 },
                    { description: i().a94f7302, keys: c.audio.dock, universal: !1 },
                    { description: i().a7e604c6, keys: c.audio.play, universal: !1 },
                    { description: i().f978c4fc, keys: c.audio.mute, universal: !1 },
                ],
                h = (0, s.Z)((e) => {
                    const t = d(e),
                        o = p(),
                        n = m(),
                        r = {};
                    return (
                        [...o, ...n, ...t].forEach(({ description: e, keys: t }) => {
                            Array.isArray(t)
                                ? t.forEach((t) => {
                                      r[t] = e;
                                  })
                                : (r[t] = e);
                        }),
                        JSON.stringify(r)
                    );
                }),
                f = (e, t) => {
                    if (t) return { dataSet: { "at-shortcutkeys": h(e) } };
                };
        },
        409438: (e, t, o) => {
            o.d(t, { Z: () => n });
            const n = Object.freeze({ User: "User", ProfileCard: "ProfileCard", UserCompact: "UserCompact", UserConcise: "UserConcise", UserDetailed: "UserDetailed", PendingFollowUser: "PendingFollowUser", SubscribableUser: "SubscribableUser" });
        },
        466380: (e, t, o) => {
            o.d(t, { Z: () => p });
            var n = o(807469),
                r = o(502909),
                a = o(600823);
            const i = (0, r.ZP)({ namespace: "topics" }),
                s = (0, r.tb)(i, { context: "FETCH_TOPIC", endpoint: (e) => e.withEndpoint(n.ZP).fetchOneTopic, params: ([e], t) => ({ topicId: e }) }),
                l = {
                    addTopic: function (e) {
                        return u.add({ [e.id]: e });
                    },
                    updateFollowingStatus: (e, t) => (o, n) => (o(i.updateOne(e, { following: t })), Promise.resolve()),
                },
                c = (e, t, o) => {
                    const { entityId: n } = t.meta,
                        r = e.entities[n];
                    return r ? ((e, t, o, n) => (/_REQUEST$/.test(t.type) ? { ...e, entities: { ...e.entities, [o.id]: { ...o, ...n() } } } : e))(e, t, r, o) : e;
                },
                d = { follow: (0, r.Tx)(i, "follow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(n.ZP).follow, reducer: (e, t) => c(e, t, () => ({ following: !0, not_interested: !1 })), context: "FOLLOW_TOPIC" }), unfollow: (0, r.Tx)(i, "unfollow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(n.ZP).unfollow, reducer: (e, t) => c(e, t, () => ({ following: !1 })), context: "UNFOLLOW_TOPIC" }), notInterested: (0, r.Tx)(i, "notInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(n.ZP).notInterested, reducer: (e, t) => c(e, t, () => ({ following: !1, not_interested: !0 })), context: "NOT_INTERESTED_TOPIC" }), undoNotInterested: (0, r.Tx)(i, "undoNotInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(n.ZP).undoNotInterested, reducer: (e, t) => c(e, t, () => ({ not_interested: !1 })), context: "UNDO_NOT_INTERESTED_TOPIC" }) },
                u = { ...i, ...s, ...l, ...d, customActionTypes: (0, r.X7)(d) },
                p = a.Z.register(u);
        },
        648651: (e, t, o) => {
            o.d(t, { Ns: () => p, n$: () => u, fm: () => k, _d: () => b, VL: () => y, NK: () => h, UD: () => f, c: () => g });
            const n = ({ apiClient: e, featureSwitches: t }) => ({ fetchDownloads: (t, o) => e.get("account/user_twitter_data", t, o, ""), createDataDownload: (t, o) => e.post("account/user_twitter_data", t, {}, { ...o, "content-type": "application/json" }, ""), markDataAsDownloaded: (t, o) => e.put("account/user_twitter_data", t, { ...o, "content-type": "application/json" }, "") });
            var r = o(499627),
                a = o(917799),
                i = o(312771);
            const s = "userData",
                l = `rweb/${s}`,
                c = (0, a.dg)(l, "FETCH_DOWNLOADS"),
                d = (0, a.dg)(l, "CREATE_DOWNLOAD"),
                u = Object.freeze({ NEW: "NEW", INPROGRESS: "INPROGRESS", INPROGRESS_ASYNC: "INPROGRESS_ASYNC", ZIPPING: "ZIPPING", PUBLISHING: "PUBLISHING", NOTIFYING: "NOTIFYING", COMPLETE: "COMPLETED", FAILED: "FAILED", NONE: "NONE" }),
                p = [u.NEW, u.INPROGRESS, u.INPROGRESS_ASYNC, u.ZIPPING, u.PUBLISHING, u.NOTIFYING],
                m = { fetchStatus: i.ZP.None, downloads: { all: [], nonFailed: [] } };
            r.Z.register({
                [s]: function (e = m, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case c.SUCCESS: {
                            const o = t.payload || [],
                                n = o.filter((e) => "FAILED" !== e.status);
                            return { ...e, fetchStatus: i.ZP.LOADED, downloads: { ...e.downloads, all: o, nonFailed: n } };
                        }
                        case c.REQUEST:
                            return { ...e, fetchStatus: i.ZP.LOADING };
                        case c.FAILURE:
                            return { ...e, error: t.payload, fetchStatus: i.ZP.FAILED };
                        case d.SUCCESS:
                            return { ...e, downloads: { ...e.downloads, nonFailed: [{ status: "INPROGRESS" }].concat(...e.downloads.nonFailed) } };
                        case d.FAILURE:
                            return { ...e, fetchStatus: i.ZP.NONE };
                        default:
                            return e;
                    }
                },
            });
            const h = (e) => e[s].downloads,
                f = (e) => e[s].fetchStatus,
                g = (e) => 503 === e[s].error?.status,
                b =
                    () =>
                    (e, t, { api: o }) =>
                        (0, a._O)(e, { request: o.withEndpoint(n).fetchDownloads })({ actionTypes: c, context: "FETCH_DOWNLOADS" }),
                k =
                    () =>
                    (e, t, { api: o }) =>
                        (0, a._O)(e, { request: o.withEndpoint(n).createDataDownload })({ actionTypes: d, context: "CREATE_DOWNLOAD" }),
                y =
                    (e) =>
                    (t, o, { api: r }) =>
                        (0, a.Vg)(t, { params: e, request: r.withEndpoint(n).markDataAsDownloaded })("MARK_DATA_AS_DOWNLOADED");
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Settings-9f4db315.c27e855a.js.map
