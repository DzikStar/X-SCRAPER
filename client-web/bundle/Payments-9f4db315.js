"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-9f4db315", "loader.FeedbackSheet"],
    {
        229333: (e, t, n) => {
            n.d(t, { Z: () => u });
            var o = n(202784),
                r = n(466999),
                i = n(325686),
                a = n(392237),
                s = n(111677);
            const l = n.n(s)().e5b0063d;
            let c = 0;
            class d extends o.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${c}`), (c += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        n = l({ title: t });
                    return o.createElement(i.Z, { "aria-labelledby": this._listDomId, role: "region" }, o.createElement(r.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: a.default.visuallyHidden }, t), o.createElement(i.Z, { "aria-label": n }, e));
                }
            }
            const u = d;
        },
        625661: (e, t, n) => {
            n.d(t, { ZP: () => h });
            var o = n(202784),
                r = n(614983),
                i = n.n(r),
                a = n(325686),
                s = n(370006),
                l = n(786998),
                c = n(929028),
                d = n(386802);
            function u(e, t, n) {
                return e || (!t && n ? "fixed" : void 0);
            }
            class h extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            i()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: n, fixed: r, hideBackButton: i, isFullWidth: a, isLarge: c, leftControl: d, middleControl: h, position: p, rightControl: m, secondaryBar: f, style: b, subtitle: C, title: y, titleDomId: g, titleIconCell: _, titleIconCellSize: w, withBackground: B, withWideContainer: k } = this.props,
                        { isModal: v } = this.context,
                        x = i ? d : o.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        Z = (function (e, t, n) {
                            return e && !(t && n);
                        })(!!B, v, !!f);
                    return o.createElement(o.Fragment, null, o.createElement(l.Z, { centerTitle: t, centeredLogo: n, isFullWidth: a, isLarge: c, leftControl: x, middleControl: h, position: u(p, v, r), rightControl: m, style: b, subtitle: C, title: y, titleDomId: g, titleIconCell: _, titleIconCellSize: w, withBackground: Z, withWideContainer: k }), f || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        n = c.Z.getBackgroundStyles();
                    return t ? o.createElement(a.Z, { style: !!e && n }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = d.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        774426: (e, t, n) => {
            n.r(t), n.d(t, { default: () => u });
            n(136728);
            var o = n(202784),
                r = n(811176),
                i = n(190286),
                a = n(111677),
                s = n.n(a),
                l = n(912021);
            const c = s().cfd2f35e;
            class d extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { activeConfirmation: null }),
                        (this._handleConfirm = (e) => {
                            this.setState({ activeConfirmation: e });
                        }),
                        (this._handleConfirmed = () => {
                            this.state.activeConfirmation && this.state.activeConfirmation.confirmCallback(), this.setState({ activeConfirmation: null }), this.props.onClose();
                        }),
                        (this._handleCancelConfirm = () => {
                            this.state.activeConfirmation && this.state.activeConfirmation.cancelCallback?.(), this.setState({ activeConfirmation: null });
                        }),
                        (this._getMemoizedProcessedActionItems = (0, l.Z)((e, t, n, o) =>
                            e.reduce((e, { Icon: r, confirmation: i, disabled: a, excludeFromActionMenu: s, isEmphasized: l, link: c, onClick: d, subText: u, testID: h, text: p, withCancelButton: m }, f) => {
                                if (!s) {
                                    const s = d
                                        ? () => {
                                              i ? (i.render ? o({ cancelCallback: i.onCancel, confirmCallback: d, render: i.render }) : o({ cancelCallback: i.onCancel, confirmCallback: d, text: i.text, headline: i.headline, label: i.label, confirmButtonType: i.confirmButtonType, withCancelButton: i.withCancelButton })) : (d(), n());
                                          }
                                        : n;
                                    e.push({ disabled: a, Icon: r, isEmphasized: l, testID: h, subText: u, text: p, onClick: s, link: c, withBottomBorder: t && t.includes(f) });
                                }
                                return e;
                            }, []),
                        ));
                }
                render() {
                    const { onClose: e } = this.props,
                        { activeConfirmation: t } = this.state;
                    return t ? this._renderConfirmation(t) : o.createElement(r.Z, { cancelButtonLabel: c, items: this._getProcessedActionItems(), onCloseRequested: e });
                }
                _renderConfirmation(e) {
                    if (e && e.render) return e.render(this._handleConfirmed, this._handleCancelConfirm);
                    {
                        const { confirmButtonType: t, headline: n, label: r, text: a, withCancelButton: s } = e || {};
                        return o.createElement(i.Z, { confirmButtonLabel: r, confirmButtonType: t, headline: n, onCancel: this._handleCancelConfirm, onConfirm: this._handleConfirmed, text: a, withCancelButton: s });
                    }
                }
                _getProcessedActionItems() {
                    const { actionItems: e, dividerIndices: t, onClose: n } = this.props;
                    return this._getMemoizedProcessedActionItems(e, t, n, this._handleConfirm);
                }
            }
            const u = d;
        },
        414939: (e, t, n) => {
            n.d(t, { Z: () => l });
            var o = n(202784),
                r = n(325686),
                i = n(392237);
            class a extends o.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return o.createElement(r.Z, { style: s.root });
                }
            }
            const s = i.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                l = a;
        },
        980407: (e, t, n) => {
            n.d(t, { Z: () => f, w: () => p });
            var o = n(202784),
                r = n(325686),
                i = n(108362),
                a = n(386802),
                s = n(392237),
                l = n(652904),
                c = n(555079),
                d = n(625661),
                u = n(449067),
                h = n(715601);
            class p extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: n, backLocation: i, centerTitle: a, hideBackButton: s, history: l, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: f, rightControl: b, secondaryBar: C, subtitle: y, title: g } = this.props,
                                { isModal: _ } = this.context;
                            return o.createElement(r.Z, { style: _ ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, o.createElement(d.ZP, { backButtonType: n || (_ ? "close" : "back"), backLocation: i, centerTitle: a, fixed: !_, hideBackButton: s, history: l, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: f, ref: e, rightControl: b, secondaryBar: C, style: [_ && m.appBarModal, t], subtitle: y, title: g, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: n } = this.context;
                            t && (n ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: n, containerStyle: a, documentTitle: s, isFullWidth: c, isLarge: d, renderHeader: p, title: f, withoutBottomBarMobile: b } = this.props,
                        { isModal: C } = this.context,
                        y = p ? p(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return o.createElement(l.Z, null, o.createElement(u.Z.Configure, { documentTitle: s, headerless: !0, title: f }), o.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, C && m.rootModal] }, !C && y, o.createElement(i.Z, { isFullWidth: c, isLarge: d, style: [m.container, C && m.containerModal, a] }, C ? o.createElement(h.Z, { style: m.viewport }, y, n) : n), t ? o.createElement(r.Z, { style: [m.bottomBarModal, !C && !b && m.bottomBarMobile] }, o.createElement(i.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (p.defaultProps = { isFullWidth: !1, isLarge: !1 }), (p.contextType = a.Z);
            const m = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: s.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                f = p;
        },
        965245: (e, t, n) => {
            n.d(t, { Z: () => l });
            var o = n(807896),
                r = n(202784),
                i = n(229333),
                a = n(414939),
                s = n(334346);
            const l = ({ accessibilityTitle: e, footer: t = r.createElement(a.Z, null), ...n }) => {
                const l = r.createElement(s.C, (0, o.Z)({}, n, { footer: t }));
                return e ? r.createElement(i.Z, { title: e }, l) : l;
            };
        },
        222718: (e, t, n) => {
            n.d(t, { Z: () => C });
            var o = n(202784),
                r = n(325686),
                i = n(537392),
                a = n(10656),
                s = n(655352),
                l = n(555079),
                c = n(500002),
                d = n(625661),
                u = n(449067),
                h = n(655543),
                p = n(715601),
                m = n(392237);
            const f = m.default.create((e) => ({ fill: { flex: 1, alignSelf: "stretch" }, viewportView: { ...m.default.absoluteFillObject, overflowY: "auto" }, appBarContainer: { position: "sticky", top: 0, backfaceVisibility: "hidden", zIndex: e.componentZIndices.appBarZIndex } }));
            class b extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildren = () => {
                            const { children: e } = this.props;
                            return this.context.rootDetailPerColumnScroll ? o.createElement(r.Z, { style: f.fill }, o.createElement(p.Z, { style: f.viewportView }, this._renderInlineNav({ isTwoColumnLayout: !0 }), e)) : e;
                        });
                }
                render() {
                    return o.createElement(i.ZP, null, ({ containerWidth: e }) => (a.Z.isTwoColumnLayout(e) ? this._renderForTwoColumnLayout() : this._renderForOneColumnLayout()));
                }
                _renderForOneColumnLayout() {
                    const { appBarStyle: e, children: t, leftControl: n, screenType: r, showBackButtonOnRoot: i, showSubtitleOnRoot: a, showSubtitleOnWideDetail: l, showTitleOnRoot: c, withBottomBorder: d, withDetailOpen: h, ...p } = this.props;
                    return o.createElement(o.Fragment, null, (0, s.ZP)() ? this._renderInlineNav({ isTwoColumnLayout: !1 }) : o.createElement(u.Z.Configure, p), t);
                }
                _renderForTwoColumnLayout() {
                    const e = this.context.rootDetailPerColumnScroll;
                    return o.createElement(o.Fragment, null, !e && this._renderInlineNav({ isTwoColumnLayout: !0 }), this._renderChildren());
                }
                _renderInlineNav({ isTwoColumnLayout: e }) {
                    const { SideNavButton: t, TabBar: n, appBarStyle: i, backLocation: a, documentTitle: s, headerless: c, history: h, leftControl: p, middleControl: m, onBackClick: b, rightControl: C, screenType: y, searchBoxOptions: g, secondaryBar: _, showBackButtonOnRoot: w, showSubtitleOnRoot: B, showSubtitleOnWideDetail: k, showTitleOnRoot: v, subtitle: x, title: Z, titleIconCell: S, titleIconCellSize: E, withDetailOpen: P, withSearchBox: I, withTweetButton: D, withWideContainer: T } = this.props,
                        L = "root" === y,
                        R = "secondaryRoot" === y,
                        N = "primaryDetail" === y,
                        A = (N && k) || (L && B),
                        O = (L && !w) || (N && e),
                        M = (L && !v) || (N && e && !v),
                        F = L ? l.ey : N ? l.vX : void 0,
                        K = o.createElement(r.Z, { style: f.appBarContainer }, o.createElement(d.ZP, { backLocation: a, fixed: !1, hideBackButton: O, history: h, leftControl: p, middleControl: m, onBackClick: b, rightControl: C, secondaryBar: _, style: i, subtitle: A ? x : void 0, title: M ? void 0 : Z, titleDomId: F, titleIconCell: S, titleIconCellSize: E, withWideContainer: T })),
                        U = L || (R && P) ? null : o.createElement(u.Z.Configure, { SideNavButton: t, TabBar: n, backLocation: a, documentTitle: s, headerless: c, middleControl: m, onBackClick: b, rightControl: C, searchBoxOptions: g, subtitle: x, title: Z, withSearchBox: I, withTweetButton: D });
                    return o.createElement(o.Fragment, null, U, K);
                }
            }
            (b.contextType = h.Z), (b.defaultProps = { screenType: "secondaryDetail", showSubtitleOnWideDetail: !0, showBackButtonOnRoot: !1, showTitleOnRoot: !0 });
            const C = (0, c.ZP)(b);
        },
        334346: (e, t, n) => {
            n.d(t, { C: () => l, Z: () => s });
            var o = n(807896),
                r = n(202784),
                i = n(524084),
                a = n(768572);
            const s = "stable_sort_index",
                l = r.forwardRef((e, t) => {
                    const n = e.cacheKey;
                    return r.createElement(a.ZP, { identifier: n }, r.createElement(i.Z, (0, o.Z)({ ref: t }, e)));
                });
        },
        507651: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(807896),
                r = n(202784),
                i = n(107267),
                a = n(403556),
                s = n(791632);
            const l = (e) => {
                    const t = (0, i.useHistory)(),
                        { isCompact: n, ...l } = e;
                    return r.createElement(a.Z, (0, o.Z)({}, l, { isCompact: n || (0, s.HD)(t) }));
                },
                c = r.memo(l);
        },
        652904: (e, t, n) => {
            n.d(t, { Z: () => d });
            var o = n(202784),
                r = n(500002),
                i = n(668214),
                a = n(997174),
                s = n(118823);
            const l = (0, i.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: a.NH }))
                .withAnalytics();
            class c extends o.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: n, search: o },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: i, search: a },
                            locationKey: s,
                        } = e;
                    let l = !1;
                    t.pathname !== n ? (this._isInBackground = !0) : this._isInBackground && t.pathname === n && ((this._isInBackground = !1), (l = !0));
                    const c = r || s;
                    ((c && r !== s) || (!c && n !== i) || o !== a || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: n, updateTweetDetailNav: o } = e;
                    t.scribePageImpression(), n(t.contextualScribeNamespace, t.contextualScribeData), o(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, r.ZP)(l(c));
        },
        547195: (e, t, n) => {
            n.r(t), n.d(t, { default: () => w });
            n(136728);
            var o = n(202784),
                r = n(107267),
                i = n(154003),
                a = n(80361),
                s = n(952793),
                l = n(445664),
                c = n(983304),
                d = n(698478),
                u = n(725516),
                h = n(883229);
            const p = "Send or Request",
                m = { label: p },
                f = o.createElement(a.default, null),
                b = { context: "PaymentsProfileButton" },
                C = { type: "CustomRetry", content: () => null },
                y = ({ buttonStyle: e, disabled: t, userId: n }) => {
                    const a = (0, u.z)(),
                        s = (0, r.useHistory)(),
                        { permissions: c } = (0, l.Z)({ fetchKey: "UserProfile" }),
                        h = (0, d.nK)(c),
                        b = o.useCallback(() => {
                            n && (a.scribe({ section: "x-payments-profile", element: "payments", action: "click" }), s.push("/i/money/transfer", { userId: n, step: "reviewPane" }));
                        }, [a, s, n]);
                    return h ? o.createElement(i.ZP, { accessibilityLabel: p, disabled: t, hoverLabel: m, icon: f, onPress: b, style: e, testID: "paymentsFromProfile", type: "primaryOutlined" }) : null;
                },
                g = (e) => {
                    const [t] = (0, c.Z)({ allowLockedSession: !0 });
                    return o.createElement(h.N, { errorConfig: b, fallback: C }, t ? o.createElement(y, e) : null);
                },
                _ = (e) => ((0, s.hC)("payments_enabled") ? o.createElement(h.N, { errorConfig: b, fallback: C }, o.createElement(g, e)) : null),
                w = o.memo(_);
        },
        524084: (e, t, n) => {
            n.d(t, { Z: () => a });
            var o = n(202784),
                r = n(523561),
                i = n(195560);
            const a = (0, r.Z)({ loader: () => n.e("loader.AbsolutePower").then(n.bind(n, 590136)), renderPlaceholder: (e, t) => o.createElement(i.Z, { hasError: e, onRetry: t }) });
        },
        97882: (e, t, n) => {
            n.d(t, { T: () => i, x: () => a });
            var o = n(111677),
                r = n.n(o);
            const i = { AED: r().d857e44d, ALL: r().cb87e3db, ARS: r().a9d5ffd1, AUD: r().a0e8371d, BAM: r().gcc50dc9, BDT: r().a6a43585, BGN: r().a0cc8f2d, BHD: r().i31c32c5, BRL: r().i7dc69e9, BYR: r().c14a6c03, CAD: r().jaa3d537, CHF: r().a824080b, CLP: r().d9c0bedb, CNY: r().bf8c0613, COP: r().i8163625, CZK: r().adb53ba1, DKK: r().iabf697d, DZD: r().a1a0555b, EGP: r().f266f3d9, EUR: r().a9a8652b, GBP: r().dbf40761, GHS: r().b0d993d9, GTQ: r().ac1308e1, HKD: r().a7889ab3, HRK: r().c614f5cd, HUF: r().i55d57e3, IDR: r().e4b6002b, ILS: r().d28e983b, INR: r().e8c9232d, IQD: r().c8994ae1, ISK: r().f821c2a5, JPY: r().j348b9c9, KES: r().i6f93b9b, KRW: r().c6150bd5, KWD: r().i8921e09, KZT: r().ef239279, LBP: r().hecdb149, MAD: r().fdd039b7, MKD: r().f30c2c37, MXN: r().d9ea7bff, MYR: r().ea3df4b7, NGN: r().jaac21bb, NOK: r().hb435ced, NZD: r().ce699d81, PEN: r().bc56d3d7, PHP: r().f8561913, PKR: r().g6485d53, PLN: r().ff561cc1, QAR: r().b42011d3, RON: r().a6660bcd, RSD: r().f9b80449, RUB: r().gdee4d5d, SAR: r().h36f2103, SEK: r().a19ad037, SGD: r().g713f699, THB: r().ff2e39af, TND: r().be34316d, TRY: r().aef81b75, TWD: r().fcce70a5, TZS: r().jc9d352f, UAH: r().be1cb8c5, UGX: r().j9371501, USD: r().j7d4397d, VEF: r().d61441dd, VND: r().e2a99e97, ZAR: r().f7ce19ab, ZMW: r().b2a0213f },
                a = ({ amount: e, currencyCode: t = "USD", formatter: n = 1e6, removeTrailingZeros: o = !1, strictAmount: r = !1 }) => {
                    const a = r ? e : parseInt(e, 10) / n,
                        l = i[t]?.(a);
                    return o ? s(l) : l;
                },
                s = (e) => {
                    const t = e?.split(".");
                    return 2 === t?.length && "00" === t?.[1] ? t[0] : e;
                };
        },
        158272: (e, t, n) => {
            n.d(t, { Kh: () => s, OQ: () => d, iW: () => c, xG: () => u, z_: () => l });
            n(875640), n(694898), n(38857), n(540171), n(157093), n(265688), n(270315), n(592529), n(86943), n(691157), n(571372);
            var o = n(111677),
                r = n.n(o);
            function i(e) {
                const t = e.replace(/-/g, "+").replace(/_/g, "/"),
                    n = atob(t),
                    o = n.length,
                    r = new ArrayBuffer(o),
                    i = new Uint8Array(r);
                for (let e = 0; e < o; e++) i[e] = n.charCodeAt(e);
                return r;
            }
            function a(e) {
                const t = new Uint8Array(e),
                    n = String.fromCharCode(...t);
                return btoa(n).replace(/\+/g, "-").replace(/(\/)/g, "_").replace(/=/g, "");
            }
            const s = r().e4f6bd9e,
                l = r().ac966f94;
            function c() {
                return "undefined" != typeof window && !!window.PublicKeyCredential;
            }
            function d(e) {
                const t = JSON.parse(e);
                return (
                    (t.challenge = i(t.challenge)),
                    (t.user.id = i(t.user.id)),
                    t.excludeCredentials.forEach((e) => {
                        e.id = i(e.id);
                    }),
                    "undefined" != typeof window && navigator.credentials
                        ? navigator.credentials.create({ publicKey: t }).then((e) => {
                              if (!e) throw new Error("NotAllowedError");
                              return JSON.stringify({ clientExtensionResults: {}, id: e.id, response: { attestationObject: a(e.response.attestationObject), clientDataJSON: a(e.response.clientDataJSON) }, type: e.type });
                          })
                        : Promise.reject(new Error("NotAllowedError"))
                );
            }
            function u(e) {
                const t = JSON.parse(e).publicKeyCredentialRequestOptions;
                return (
                    (t.challenge = i(t.challenge)),
                    "undefined" != typeof window && navigator.credentials
                        ? navigator.credentials.get({ publicKey: t }).then((e) => {
                              if (!e) throw new Error("NotAllowedError");
                              return JSON.stringify({ clientExtensionResults: { appid: !0 }, id: e.id, response: { authenticatorData: a(e.response.authenticatorData), clientDataJSON: a(e.response.clientDataJSON), signature: a(e.response.signature), userHandle: a(e.response.userHandle) }, type: e.type });
                          })
                        : Promise.reject(new Error("NotAllowedError"))
                );
            }
        },
        445664: (e, t, n) => {
            n.d(t, { Z: () => p, v: () => h });
            var o = n(217995),
                r = n(202784),
                i = n(10622),
                a = n.n(i),
                s = (n(585488), n(353391)),
                l = n.n(s),
                c = n(482924),
                d = n(698478);
            const u = o.Z,
                h = ({ environment: e }) =>
                    a()(e, u, {}, { fetchPolicy: "network-only" })
                        .toPromise()
                        .then((e) => {
                            const { permissions: t, roles: n } = e?.get_customer || {};
                            return { permissions: t, roles: n };
                        })
                        .catch(() => null),
                p = (e) => {
                    const t = e?.fetchKey,
                        [n, o] = r.useState(1),
                        { data: i, refetch: a, refetchStatus: s } = (0, c.A)(u, {}, { fetchKey: t }),
                        h = i?.get_customer ?? {},
                        { __id: p = "get_customer", id: m, permissions: f, roles: b } = h;
                    return (
                        l()([p], () => {
                            a(), o((e) => e + 1);
                        }),
                        { ...(0, d.S9)({ roles: b, permissions: f }), id: m, permissions: f, roles: b, fetchCount: n, refetchStatus: s }
                    );
                };
        },
        412450: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(990312),
                r = (n(585488), n(712696)),
                i = n.n(r),
                a = n(514639);
            const s = o.Z,
                l = { "payments-dev.x.com": a.Re.development, "money-dev.x.com": a.Re.development, "payments-staging.x.com": a.Re.staging, "money-staging.x.com": a.Re.staging, "money.x.com": a.Re.production, "payments-prod.x.com": a.Re.production },
                c = () => {
                    const e = i()(s, {}),
                        t = e?.get_payments_client_config,
                        n = t?.payments_web_host,
                        o = t?.sardine_api_subdomain,
                        r = "https://";
                    return { environment: (n ? l[n] : null) ?? a.Re.production, paymentsOrigin: n ? `${r}${n}` : null, sardineClientID: t?.sardine_client_id, sardineSdkUrl: o ? `https://${o}/assets/loader.min.js` : null, sardineEnvironment: t?.sardine_environment, sardinePixelSubdomain: t?.sardine_pixel_subdomain, sardineApiSubdomain: o, reportUrl: t?.payments_report_url ?? "https://payments.x.com/support/forms/report", supportUrl: t?.payments_help_url ?? "https://payments.x.com/support/forms/help", socurePublicKey: t?.socure_public_key, forwardWithSdkUrl: n ? `${r}${n}/${a.dP}/wasm/xxp-forward-with-sdk.js` : null, stripePKey: t?.stripe_issuing_publishable_key, supportUserId: t?.support_user_results?.rest_id };
                };
        },
        715246: (e, t, n) => {
            n.d(t, { Z: () => d });
            var o = n(735006),
                r = (n(585488), n(712696)),
                i = n.n(r),
                a = n(68290),
                s = n(848739),
                l = n(514639);
            const c = o.Z,
                d = () => {
                    const e = i()(c, {}),
                        t = new Map(),
                        n = new Map(),
                        o = e?.get_transfer_methods_config?.transfer_methods_config;
                    return (
                        o?.forEach(({ fees: e, processing_time: o, transfer_method_type: r }) => {
                            const i = o?.processing_time_type === s.l.RealTime,
                                c = o?.max_duration_in_business_days ?? l.UJ,
                                d = { settleTimeMessage: i ? "Instant" : (({ count: e }) => `Up to ${e} business days`)({ count: c }), Icon: i ? a.default : void 0, processingTime: o, fees: e },
                                u = r?.pull_transfer_method_type,
                                h = r?.push_transfer_method_type;
                            u && n.set(u, d), h && t.set(h, d);
                        }),
                        { methodConfigs: { debitMethodConfigs: t, creditMethodConfigs: n } }
                    );
                };
        },
        983304: (e, t, n) => {
            n.d(t, { Z: () => y });
            n(136728);
            var o = n(708419),
                r = n(202784),
                i = n(400752),
                a = (n(585488), n(351743)),
                s = n.n(a),
                l = n(107267),
                c = n(187669),
                d = n(420182),
                u = n(952793),
                h = n(514639),
                p = n(441484),
                m = n(412450),
                f = n(443781);
            const b = () => {
                    const { featureSwitches: e, history: t } = r.useContext(f.rC),
                        n = e.isTrue("payments_enabled");
                    r.useEffect(() => {
                        if (!n) return;
                        const { remove: e } = t.addInterceptor(
                            (function ({ history: e }) {
                                return {
                                    shouldProceed: (e, t) => (
                                        (function ({ location: e }) {
                                            return e.pathname.startsWith(h.sM);
                                        })({ location: e }) || p.Z.unbind(),
                                        !0
                                    ),
                                };
                            })({ history: t }),
                        );
                        return () => {
                            e();
                        };
                    }, [t, n]);
                },
                C = o.Z,
                y = ({ allowLockedSession: e }) => {
                    const { environment: t, forwardWithSdkUrl: n, sardineApiSubdomain: o, sardineClientID: a, sardineEnvironment: f, sardinePixelSubdomain: y, sardineSdkUrl: g, socurePublicKey: _ } = (0, m.Z)(),
                        w = (0, l.useLocation)(),
                        B = (0, l.useHistory)(),
                        k = w.pathname,
                        v = (0, i.Dv)(d.lZ),
                        x = (0, u.hC)("payments_forward_with_enabled"),
                        [Z, S] = r.useState(!1),
                        [E] = s()(C),
                        P = r.useCallback(
                            ({ challengeId: e }) => {
                                const t = { challengeId: e, closePath: "/", challengeInitiator: h.kW.auth },
                                    n = B?.location?.pathname;
                                n === k && (n !== h.CM ? B.push(h.CM, t) : B.replace(h.CM, t));
                            },
                            [k, B],
                        ),
                        I = r.useCallback(() => {
                            B.replace(h.D$);
                        }, [B]),
                        D = r.useCallback(
                            (e) =>
                                new Promise((t, n) => {
                                    E({
                                        variables: { provider_tokens: { sardine_session_key: e, socure_session_token: e } },
                                        onCompleted: (e, o) => {
                                            const r = e?.create_x_payments_auth_session_v2,
                                                i = r?.session_id,
                                                a = r?.customer_id,
                                                s = r?.challenge_id,
                                                l = r?.expiry_time_millis,
                                                c = r?.status;
                                            i && l ? t({ sessionId: i, expiresAtMsec: l, paymentsUserId: a, status: c, challengeId: s }) : n(r?.errors ?? o);
                                        },
                                        onError: n,
                                    });
                                }),
                            [E],
                        );
                    return (
                        b(),
                        (0, c.q)(() => {
                            p.Z.initialize({ environment: t, sardineApiSubdomain: o, sardineClientID: a, sardineEnvironment: f, sardinePixelSubdomain: y, sardineSdkUrl: g, forwardWithSdkUrl: x ? n : null, socurePublicKey: _, flow: k, fetchAuthSession: D, userPersistence: v, redirectToChallenge: P, errorHandler: I, allowLockedSession: e })
                                .then((e) => {
                                    e?.challengeRedirect || S(!0);
                                })
                                .catch(() => {
                                    S(!0);
                                });
                        }),
                        r.useEffect(() => {
                            p.Z.bind(), p.Z.updateFlow(k);
                        }, [k]),
                        [Z]
                    );
                };
        },
        482924: (e, t, n) => {
            n.d(t, { A: () => p });
            var o = n(202784),
                r = n(437429),
                i = n.n(r),
                a = n(57074),
                s = n.n(a),
                l = n(10622),
                c = n.n(l),
                d = n(71620),
                u = n(312771),
                h = n(535338);
            function p(e, t, n) {
                const r = s()(t),
                    a = s()(n),
                    l = i()(),
                    p = (0, d.po)(),
                    [m, f] = o.useState(null),
                    [b, C] = o.useState(!1),
                    y = o.useCallback(() => {
                        b ||
                            (C(!0),
                            c()(l, e, r, { networkCacheConfig: a?.networkCacheConfig, fetchPolicy: "network-only" }).subscribe({
                                complete: () => {
                                    C(!1);
                                },
                                error: (e) => {
                                    p(e), C(!1), f(e);
                                },
                            }));
                    }, [l, p, e, b, r, a]),
                    g = (0, h.p)(e, t, n);
                return o.useMemo(() => (m ? { data: g, refetch: y, refetchStatus: u.ZP.FAILED, refetchError: m } : { data: g, refetch: y, refetchStatus: b ? u.ZP.LOADING : u.ZP.NONE, refetchError: void 0 }), [g, m, b, y]);
            }
        },
        930196: (e, t, n) => {
            n.d(t, { d: () => p });
            var o = n(202784),
                r = n(437429),
                i = n.n(r),
                a = n(57074),
                s = n.n(a),
                l = n(10622),
                c = n.n(l),
                d = n(71620),
                u = n(312771),
                h = n(535338);
            function p(e, t, n) {
                const r = s()(t),
                    a = s()(n),
                    l = i()(),
                    p = (0, d.po)(),
                    [m, f] = o.useState(null),
                    [b, C] = o.useState(!1),
                    y = (0, h.p)(e, t, n),
                    g = o.useCallback(() => {
                        if (!b)
                            return (
                                C(!0),
                                c()(l, e, r, { networkCacheConfig: a?.networkCacheConfig, fetchPolicy: "network-only" })
                                    .toPromise()
                                    .then((e) => (C(!1), e))
                                    .catch((e) => {
                                        p(e), C(!1), f(e);
                                    })
                            );
                    }, [l, p, e, b, r, a]);
                return o.useMemo(() => (m ? { data: y, refetch: g, refetchStatus: u.ZP.FAILED, refetchError: m } : { data: y, refetch: g, refetchStatus: b ? u.ZP.LOADING : u.ZP.NONE, refetchError: void 0 }), [y, m, b, g]);
            }
        },
        127218: (e, t, n) => {
            n.d(t, { C: () => C });
            var o = n(202784),
                r = n(614983),
                i = n.n(r),
                a = n(437429),
                s = n.n(a),
                l = n(57074),
                c = n.n(l),
                d = n(10622),
                u = n.n(d),
                h = n(585488),
                p = n(71620),
                m = n(163889),
                f = n(312771),
                b = n(535338);
            function C(e, t, n) {
                const [r, a] = o.useState(!1),
                    [l, d] = o.useState(null),
                    C = s()(),
                    y = c()(t),
                    g = (0, p.po)(),
                    _ = (0, b.p)(e, y, n);
                return o.useMemo(() => {
                    const t = (0, h.getRequest)(e).params?.metadata?.sliceInfoPath;
                    i()(!!t, "The provided query does not have an associated sliceInfoPath. Make sure you are using the `@slice` directive with your query.");
                    const { next_cursor: n, previous_cursor: o } =
                            (function (e, t) {
                                try {
                                    i()("slice_info" === t[t.length - 1], "Invalid sliceInfoPath!");
                                    let n = e;
                                    for (const e of t) i()(!!n, "The provided path is invalid."), i()("string" == typeof e, "Unexpected value for path!"), (n = n?.[e]);
                                    return n;
                                } catch (e) {
                                    return void (0, m.ZP)(e.message);
                                }
                            })(_, t) || {},
                        s = (t) => {
                            r ||
                                (a(!0),
                                u()(C, e, { ...y, cursor: t }).subscribe({
                                    complete: () => {
                                        a(!1);
                                    },
                                    error: (e) => {
                                        a(!1), d(e), g(e);
                                    },
                                }));
                        },
                        c = () => {
                            n && s(n);
                        },
                        p = () => {
                            o && s(o);
                        },
                        b = () => {
                            s(void 0);
                        };
                    return l ? { subsequentFetchStatus: f.ZP.FAILED, error: l, fetchNext: c, fetchPrevious: p, refetch: b, data: _, hasNext: Boolean(n), hasPrevious: Boolean(o) } : { subsequentFetchStatus: r ? f.ZP.LOADING : f.ZP.NONE, error: void 0, fetchNext: c, fetchPrevious: p, refetch: b, data: _, hasNext: Boolean(n), hasPrevious: Boolean(o) };
                }, [e, _, r, l, C, y, g]);
            }
        },
        656805: (e, t, n) => {
            e.exports = n.p + "icon-bill-pay.27eae13a.svg";
        },
        287688: (e, t, n) => {
            e.exports = n.p + "icon-direct-deposit.590287aa.svg";
        },
        994600: (e, t, n) => {
            e.exports = n.p + "icon-id-verification.fe010f7a.svg";
        },
        988600: (e, t, n) => {
            e.exports = n.p + "icon-link-account.0f8c318a.svg";
        },
        530159: (e, t, n) => {
            e.exports = n.p + "icon-link-card.9eae817a.svg";
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-9f4db315.d228570a.js.map
