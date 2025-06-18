"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Settings-6107ac1a"],
    {
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
            o.d(t, { Z: () => C });
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
                h = o(715601),
                m = o(392237);
            const f = m.default.create((e) => ({ fill: { flex: 1, alignSelf: "stretch" }, viewportView: { ...m.default.absoluteFillObject, overflowY: "auto" }, appBarContainer: { position: "sticky", top: 0, backfaceVisibility: "hidden", zIndex: e.componentZIndices.appBarZIndex } }));
            class b extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildren = () => {
                            const { children: e } = this.props;
                            return this.context.rootDetailPerColumnScroll ? n.createElement(r.Z, { style: f.fill }, n.createElement(h.Z, { style: f.viewportView }, this._renderInlineNav({ isTwoColumnLayout: !0 }), e)) : e;
                        });
                }
                render() {
                    return n.createElement(a.ZP, null, ({ containerWidth: e }) => (l.Z.isTwoColumnLayout(e) ? this._renderForTwoColumnLayout() : this._renderForOneColumnLayout()));
                }
                _renderForOneColumnLayout() {
                    const { appBarStyle: e, children: t, leftControl: o, screenType: r, showBackButtonOnRoot: a, showSubtitleOnRoot: l, showSubtitleOnWideDetail: s, showTitleOnRoot: c, withBottomBorder: d, withDetailOpen: p, ...h } = this.props;
                    return n.createElement(n.Fragment, null, (0, i.ZP)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : n.createElement(u.Z.Configure, h), t);
                }
                _renderForTwoColumnLayout() {
                    const e = this.context.rootDetailPerColumnScroll;
                    return n.createElement(n.Fragment, null, !e && this._renderInlineNav({ isTwoColumnLayout: !0 }), this._renderChildren());
                }
                _renderInlineNav({ isTwoColumnLayout: e }) {
                    const { SideNavButton: t, TabBar: o, appBarStyle: a, backLocation: l, documentTitle: i, headerless: c, history: p, leftControl: h, middleControl: m, onBackClick: b, rightControl: C, screenType: y, searchBoxOptions: g, secondaryBar: E, showBackButtonOnRoot: w, showSubtitleOnRoot: I, showSubtitleOnWideDetail: v, showTitleOnRoot: D, subtitle: k, title: S, titleIconCell: Z, titleIconCellSize: x, withDetailOpen: _, withSearchBox: R, withTweetButton: O, withWideContainer: B } = this.props,
                        N = "root" === y,
                        P = "secondaryRoot" === y,
                        L = "primaryDetail" === y,
                        T = (L && v) || (N && I),
                        A = (N && !w) || (L && e),
                        F = (N && !D) || (L && e && !D),
                        W = N ? s.ey : L ? s.vX : void 0,
                        z = n.createElement(r.Z, { style: f.appBarContainer }, n.createElement(d.ZP, { backLocation: l, fixed: !1, hideBackButton: A, history: p, leftControl: h, middleControl: m, onBackClick: b, rightControl: C, secondaryBar: E, style: a, subtitle: T ? k : void 0, title: F ? void 0 : S, titleDomId: W, titleIconCell: Z, titleIconCellSize: x, withWideContainer: B })),
                        H = N || (P && _) ? null : n.createElement(u.Z.Configure, { SideNavButton: t, TabBar: o, backLocation: l, documentTitle: i, headerless: c, middleControl: m, onBackClick: b, rightControl: C, searchBoxOptions: g, subtitle: k, title: S, withSearchBox: R, withTweetButton: O });
                    return n.createElement(n.Fragment, null, H, z);
                }
            }
            (b.contextType = p.Z), (b.defaultProps = { screenType: "secondaryDetail", showSubtitleOnWideDetail: !0, showBackButtonOnRoot: !1, showTitleOnRoot: !0 });
            const C = (0, c.ZP)(b);
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
            o.d(t, { Z: () => w });
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
                h = o(956272),
                m = o(530745),
                f = o(456910),
                b = o(649872),
                C = o(524110);
            const y = u().f065ba8c,
                g = u().b08821f4,
                E = c.default.create((e) => ({ root: { flex: 1, flexDirection: "column", position: "relative" }, typeaheadContainer: { flex: 1, position: "relative" }, keydownInputListener: { flexShrink: 1 }, dropdown: { backgroundColor: e.colors.cellBackground, start: 0, end: 0, overflowY: "auto", overscrollBehavior: "contain", position: "absolute", top: 0 }, modalDropdown: { backgroundColor: e.colors.cellBackground, flex: 1, minHeight: 300, position: "relative", overflowY: "auto", overscrollBehavior: "auto" }, wideModeDropdown: { borderRadius: e.borderRadii.medium, boxShadow: e.boxShadows.medium, minHeight: 100, maxHeight: `calc(80vh - ${e.componentDimensions.appBarHeight})` }, wrapper: { alignItems: "stretch", flex: 1 }, topBorder: { borderTopColor: e.colors.gray200, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small }, inputContainer: { flexDirection: "row", alignItems: "center" }, inputWrapper: { flex: 1 }, backButton: { marginEnd: e.spaces.space4 } })),
                w = ({ alwaysOpen: e, disableClearButton: t = !1, dropdownPosition: o = "overlap", inputStyle: c, isCompact: d, isModal: u, items: w, onBackClicked: I, onClick: v, onDismiss: D, onFocus: k, onItemClick: S, onQueryChange: Z, onSubmit: x, placeholder: _, renderEmptyState: R, renderInSearchField: O, rounded: B, shouldAutoFocus: N, shouldClearOnSelect: P, shouldFocusOnClear: L, shouldRenderEmptyState: T, source: A, style: F, testID: W }) => {
                    const z = n.useRef(null),
                        H = n.useRef(null),
                        G = n.useRef(null),
                        M = n.useRef(null),
                        [j, V] = n.useState(!1),
                        [$, U] = n.useState(null),
                        [Y, K] = n.useState((0, f.A1)()),
                        [q] = n.useState(() => (0, f.D5)()),
                        [Q, X] = n.useState(""),
                        J = (e) => {
                            const t = a.Z.getCount() > 0;
                            z?.current?.contains(e.target) || t || (j && oe());
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
                            if (!H?.current) return;
                            const { bottom: e } = H.current.getBoundingClientRect();
                            e !== $ && U(e);
                        },
                        te = (e) => {
                            X(e), Z?.(e);
                        },
                        oe = () => {
                            V(!1), D?.();
                        },
                        ne = () => {
                            oe(), G?.current?.blur();
                        },
                        re = (e, t) => {
                            const o = P ? "" : Q;
                            V(!1), G.current && (P && L ? G.current.focus() : (P && G.current?.clear(), G.current?.blur())), te(o), D?.(), S?.(e, t);
                        },
                        ae = () => {
                            K((0, f.A1)());
                        },
                        le = j || e;
                    return n.createElement(
                        r.Z,
                        { onLayout: ee, ref: z, style: [E.root, F] },
                        n.createElement(
                            l.Z,
                            {
                                onKeyDown: (e) => {
                                    const { key: t } = e;
                                    if ((0, f.kE)(e)) {
                                        if (t === m.WX) return M.current?.focusNext(), void e.preventDefault();
                                        if (t === m.kl) return M.current?.focusPrevious(), void e.preventDefault();
                                        if (t === m.nQ) return oe(), void e.preventDefault();
                                        if (t !== m.Dd) return t === m.NW && M.current?.hasFocusedItem() ? (M.current?.selectFocusedItem(), void e.preventDefault()) : void (j || V(!0));
                                        oe();
                                    }
                                },
                                style: E.keydownInputListener,
                            },
                            n.createElement(
                                b.Z,
                                {
                                    "aria-label": _,
                                    onSubmit: (e) => {
                                        e.preventDefault(), e.stopPropagation(), G?.current?.blur(), V(!1), D?.(), x?.();
                                    },
                                    role: "search",
                                    style: E.wrapper,
                                },
                                n.createElement(
                                    r.Z,
                                    { ref: H, style: [E.inputContainer, c] },
                                    le && I
                                        ? n.createElement(i.ZP, {
                                              "aria-label": g,
                                              icon: n.createElement(p.default, null),
                                              onClick: (e) => {
                                                  e?.stopPropagation(), oe(), I?.();
                                              },
                                              style: E.backButton,
                                              type: "primaryText",
                                          })
                                        : null,
                                    n.createElement(
                                        r.Z,
                                        { onClick: v, style: E.inputWrapper },
                                        n.createElement(s.Z, {
                                            Icon: h.default,
                                            ariaActiveDescendant: Y,
                                            ariaAutocomplete: "list",
                                            ariaExpanded: le,
                                            ariaLabel: y,
                                            ariaOwns: q,
                                            ariaRole: "combobox",
                                            autoComplete: "off",
                                            autoCorrect: !1,
                                            autoFocus: N,
                                            contentBelow: O?.(),
                                            focusOnClear: L,
                                            isCompact: d,
                                            onChange: (e) => {
                                                te(e.target.value), ee();
                                            },
                                            onClear: () => {
                                                te("");
                                            },
                                            onFocus: () => {
                                                V(!0), ee(), k?.();
                                            },
                                            onLayout: ee,
                                            placeholder: _,
                                            ref: G,
                                            returnKeyType: "search",
                                            spellCheck: "false",
                                            styleType: B ? "pill" : "selection",
                                            testID: W,
                                            value: Q,
                                            withClearButton: !t && j,
                                        }),
                                    ),
                                ),
                                n.createElement(
                                    r.Z,
                                    { style: [E.typeaheadContainer, !B && E.topBorder] },
                                    le
                                        ? (() => {
                                              let e;
                                              "cover" === o ? (e = [E.dropdown, $ ? (0, f.xX)($) : E.wideModeDropdown]) : "overlap" === o && (e = u ? E.modalDropdown : [E.dropdown, E.wideModeDropdown]);
                                              return R && T ? R({ ariaDescendantId: Y, domId: q, onDismiss: ne, onItemFocusChanged: ae, ref: M, style: e }) : n.createElement(C.Z, { ariaDescendantId: Y, domId: q, items: w, onItemClick: re, onItemFocusChanged: ae, ref: M, source: A, style: e });
                                          })()
                                        : null,
                                ),
                            ),
                        ),
                    );
                };
        },
        664918: (e, t, o) => {
            o.d(t, { D0: () => s, c$: () => d, fD: () => i, iB: () => h, jk: () => c });
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
            function h(e) {
                const t = (0, n.bL)(e);
                return !t || !u(t) || !p(t) || t.consent_version < a || t.text_version < l;
            }
        },
        670094: (e, t, o) => {
            o.d(t, { d: () => c });
            var n = o(111677),
                r = o.n(n),
                a = o(88656),
                l = o(601576),
                i = o(163889);
            const s = r().a5d4fda0,
                c = (e = s, t = !0) => ({
                    customErrorHandler: (o) => {
                        const { context: n } = o;
                        return (!o) instanceof a.Z && (o.message = `Strato error occurred in ${n.id}: ${n.action}`), (0, i.ZP)(o, { extra: { context: n, isStrato: !0 } }), t ? (0, l.mf)({ text: e }) : [];
                    },
                });
        },
        648651: (e, t, o) => {
            o.d(t, { Ns: () => p, n$: () => u, fm: () => y, _d: () => C, VL: () => g, NK: () => m, UD: () => f, c: () => b });
            const n = ({ apiClient: e, featureSwitches: t }) => ({ fetchDownloads: (t, o) => e.get("account/user_twitter_data", t, o, ""), createDataDownload: (t, o) => e.post("account/user_twitter_data", t, {}, { ...o, "content-type": "application/json" }, ""), markDataAsDownloaded: (t, o) => e.put("account/user_twitter_data", t, { ...o, "content-type": "application/json" }, "") });
            var r = o(499627),
                a = o(917799),
                l = o(312771);
            const i = "userData",
                s = `rweb/${i}`,
                c = (0, a.dg)(s, "FETCH_DOWNLOADS"),
                d = (0, a.dg)(s, "CREATE_DOWNLOAD"),
                u = Object.freeze({ NEW: "NEW", INPROGRESS: "INPROGRESS", INPROGRESS_ASYNC: "INPROGRESS_ASYNC", ZIPPING: "ZIPPING", PUBLISHING: "PUBLISHING", NOTIFYING: "NOTIFYING", COMPLETE: "COMPLETED", FAILED: "FAILED", NONE: "NONE" }),
                p = [u.NEW, u.INPROGRESS, u.INPROGRESS_ASYNC, u.ZIPPING, u.PUBLISHING, u.NOTIFYING],
                h = { fetchStatus: l.ZP.None, downloads: { all: [], nonFailed: [] } };
            r.Z.register({
                [i]: function (e = h, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case c.SUCCESS: {
                            const o = t.payload || [],
                                n = o.filter((e) => "FAILED" !== e.status);
                            return { ...e, fetchStatus: l.ZP.LOADED, downloads: { ...e.downloads, all: o, nonFailed: n } };
                        }
                        case c.REQUEST:
                            return { ...e, fetchStatus: l.ZP.LOADING };
                        case c.FAILURE:
                            return { ...e, error: t.payload, fetchStatus: l.ZP.FAILED };
                        case d.SUCCESS:
                            return { ...e, downloads: { ...e.downloads, nonFailed: [{ status: "INPROGRESS" }].concat(...e.downloads.nonFailed) } };
                        case d.FAILURE:
                            return { ...e, fetchStatus: l.ZP.NONE };
                        default:
                            return e;
                    }
                },
            });
            const m = (e) => e[i].downloads,
                f = (e) => e[i].fetchStatus,
                b = (e) => 503 === e[i].error?.status,
                C =
                    () =>
                    (e, t, { api: o }) =>
                        (0, a._O)(e, { request: o.withEndpoint(n).fetchDownloads })({ actionTypes: c, context: "FETCH_DOWNLOADS" }),
                y =
                    () =>
                    (e, t, { api: o }) =>
                        (0, a._O)(e, { request: o.withEndpoint(n).createDataDownload })({ actionTypes: d, context: "CREATE_DOWNLOAD" }),
                g =
                    (e) =>
                    (t, o, { api: r }) =>
                        (0, a.Vg)(t, { params: e, request: r.withEndpoint(n).markDataAsDownloaded })("MARK_DATA_AS_DOWNLOADED");
        },
        779610: (e, t, o) => {
            o.d(t, { Z: () => d });
            var n = o(202784),
                r = o(325686),
                a = o(191796),
                l = o(58399),
                i = o(731708),
                s = o(952428),
                c = o(392237);
            const d = (e) => {
                    const { decoration: t, description: o, disabled: d = !1, isActive: p = !1, label: h, link: m, onPress: f, paddingHorizontal: b, renderRightContent: C, role: y = "tab", styleOverride: g, testID: E = "pivot", thumbnail: w, thumbnailSize: I, withoutArrow: v = !1 } = e,
                        D = [u.thumbnailContainer, "medium" === I && u.thumbnailContainerMedium],
                        k = "string" == typeof h ? n.createElement(i.ZP, null, h) : h,
                        S = "object" == typeof m && m.external && !m.openInSameFrame,
                        Z = o ? ("string" == typeof o ? n.createElement(i.ZP, { color: "gray700", size: "subtext2", testID: `${E}-description` }, o) : o) : null,
                        x = n.useMemo(() => ("space0" === b ? { paddingHorizontal: 0 } : { paddingHorizontal: b ? c.default.theme.spaces[b] : c.default.theme.componentDimensions.gutterHorizontal }), [b]);
                    return n.createElement(s.Z, { "aria-selected": "tab" === y ? p : null, disabled: d, link: d ? void 0 : m, onPress: f, role: y, style: [u.root, x, d && u.disabled, g], testID: E, withInteractiveStyling: !!m || !!f }, n.createElement(r.Z, { style: u.contentContainer }, w ? n.createElement(r.Z, { style: D }, w) : null, n.createElement(r.Z, { style: u.content }, k, Z), C ? C() : null, (!m && !f) || d || v ? null : S ? n.createElement(a.default, { style: u.icon }) : n.createElement(l.default, { style: u.icon })), t);
                },
                u = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        449479: (e, t, o) => {
            o.d(t, { Z: () => y });
            var n = o(202784),
                r = o(325686),
                a = o(913973),
                l = o(731708),
                i = o(950822),
                s = o(466792),
                c = o(58881),
                d = o(530732),
                u = o(352924),
                p = o(392237);
            class h extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.labelId = (0, u.F)()),
                        (this.descriptionId = (0, u.F)()),
                        (this._handleChange = (e) => {
                            const { checked: t, onChange: o } = this.props;
                            o && !t && o(e.nativeEvent.target.checked);
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        });
                }
                render() {
                    const { "aria-posinset": e, "aria-setsize": t, checked: o, disabled: u, helpText: h, label: f, name: b, testID: C } = this.props,
                        y = c.Z.generate({ backgroundColor: p.default.theme.colors.transparent, color: p.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        g = c.Z.generate({ backgroundColor: p.default.theme.colors.transparent, color: p.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        E = o ? y : g;
                    return n.createElement(s.Z, { disabled: u }, (s) => n.createElement(r.Z, { role: "label", style: [m.root, !u && m.interactive], testID: C }, n.createElement(r.Z, { style: m.topContainer }, n.createElement(l.ZP, { id: this.labelId }, f), n.createElement(r.Z, { style: m.radioContainer }, n.createElement(d.Z, { interactiveStyles: E, interactivityState: s, style: m.radioBackground }, n.createElement(r.Z, { style: [m.circle, o && m.circleActive, u && m.circleDisabled, o && u && m.circleCheckedAndDisabled] }, o ? n.createElement(a.default, { style: m.checkMark }) : null)), (0, i.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: o, disabled: u, name: b, onChange: this._handleChange, ref: this._setRef, style: [m.nativeControl], type: "radio" }))), h ? n.createElement(l.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: m.helpText }, h) : null));
                }
                focus() {
                    this._ref && this._ref.focus();
                }
            }
            h.defaultProps = { disabled: !1, checked: !1 };
            const m = p.default.create((e) => ({ root: { paddingVertical: e.spaces.space4 }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, interactive: { cursor: "pointer" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space20 }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, nativeControl: { ...p.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, helpText: { paddingTop: e.spaces.space4 } })),
                f = h,
                b = "radioGroup";
            let C = 1;
            class y extends n.Component {
                constructor() {
                    super(),
                        (this._radioRefs = {}),
                        (this._handleItemChanged = (e) => () => {
                            const { name: t, onChange: o } = this.props;
                            o(t, e);
                        }),
                        (this._setRadioRef = (e, t) => (o) => {
                            (this._radioRefs[e] = o), t && (this._radioRefs.checked = e);
                        }),
                        (this.focus = () => {
                            const e = this._radioRefs.checked,
                                t = e ? this._radioRefs[e] : this._radioRefs[0];
                            t && t.focus();
                        }),
                        (this._labelId = `RADIO_GROUP_${C}_LABEL`),
                        (C += 1);
                }
                render() {
                    const { "aria-label": e, description: t, disabled: o, label: a, name: i, options: s, value: c } = this.props;
                    return n.createElement(
                        r.Z,
                        { "aria-label": e, "aria-labelledby": a && !e ? this._labelId : void 0, role: "radiogroup", style: o && g.disabled, testID: `${b}${i}` },
                        a ? n.createElement(r.Z, { id: this._labelId, role: "label", style: g.header }, n.createElement(l.ZP, { style: g.label, weight: "bold" }, a), t ? n.createElement(l.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        s.map((e, t) => n.createElement(f, { "aria-posinset": t + 1, "aria-setsize": s.length, checked: e.value === c, disabled: o, helpText: e.helpText, key: e.value, label: e.label, name: i, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === c), testID: e.testID })),
                    );
                }
            }
            y.defaultProps = { disabled: !1 };
            const g = p.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        943401: (e, t, o) => {
            o.d(t, { Z: () => s });
            var n = o(202784),
                r = o(731708),
                a = o(392237);
            class l extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderLearnMore = () => {
                            const { learnMoreLabel: e, learnMoreLink: t } = this.props;
                            return n.createElement(r.ZP, { link: t, size: "subtext2" }, e);
                        });
                }
                render() {
                    const { description: e, learnMoreLabel: t, learnMoreLink: o } = this.props,
                        a = i.root;
                    return t && o ? n.createElement(r.ZP, { color: "gray700", size: "subtext2", style: a }, e, " ", this._renderLearnMore()) : n.createElement(r.ZP, { color: "gray700", size: "subtext2", style: a }, e);
                }
            }
            const i = a.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                s = l;
        },
        101890: (e, t, o) => {
            o.d(t, { Z: () => i });
            var n = o(202784),
                r = o(325686),
                a = o(449479),
                l = o(392237);
            const i = (e) => n.createElement(r.Z, { style: s.root }, n.createElement(a.Z, e)),
                s = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Settings-6107ac1a.3c7f882a.js.map
