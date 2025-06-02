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
                l = n(111677);
            const s = n.n(l)().e5b0063d;
            let c = 0;
            class d extends o.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${c}`), (c += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        n = s({ title: t });
                    return o.createElement(i.Z, { "aria-labelledby": this._listDomId, role: "region" }, o.createElement(r.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: a.default.visuallyHidden }, t), o.createElement(i.Z, { "aria-label": n }, e));
                }
            }
            const u = d;
        },
        625661: (e, t, n) => {
            n.d(t, { ZP: () => p });
            var o = n(202784),
                r = n(614983),
                i = n.n(r),
                a = n(325686),
                l = n(370006),
                s = n(786998),
                c = n(929028),
                d = n(386802);
            function u(e, t, n) {
                return e || (!t && n ? "fixed" : void 0);
            }
            class p extends o.Component {
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: n, fixed: r, hideBackButton: i, isFullWidth: a, isLarge: c, leftControl: d, middleControl: p, position: h, rightControl: m, secondaryBar: f, style: b, subtitle: C, title: y, titleDomId: g, titleIconCell: B, titleIconCellSize: k, withBackground: w, withWideContainer: x } = this.props,
                        { isModal: Z } = this.context,
                        E = i ? d : o.createElement(l.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        v = (function (e, t, n) {
                            return e && !(t && n);
                        })(!!w, Z, !!f);
                    return o.createElement(o.Fragment, null, o.createElement(s.Z, { centerTitle: t, centeredLogo: n, isFullWidth: a, isLarge: c, leftControl: E, middleControl: p, position: u(h, Z, r), rightControl: m, style: b, subtitle: C, title: y, titleDomId: g, titleIconCell: B, titleIconCellSize: k, withBackground: v, withWideContainer: x }), f || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        n = c.Z.getBackgroundStyles();
                    return t ? o.createElement(a.Z, { style: !!e && n }, this._renderContent()) : this._renderContent();
                }
            }
            (p.contextType = d.Z), (p.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        774426: (e, t, n) => {
            n.r(t), n.d(t, { default: () => u });
            n(136728);
            var o = n(202784),
                r = n(811176),
                i = n(190286),
                a = n(111677),
                l = n.n(a),
                s = n(912021);
            const c = l().cfd2f35e;
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
                        (this._getMemoizedProcessedActionItems = (0, s.Z)((e, t, n, o) =>
                            e.reduce((e, { Icon: r, confirmation: i, disabled: a, excludeFromActionMenu: l, isEmphasized: s, link: c, onClick: d, subText: u, testID: p, text: h, withCancelButton: m }, f) => {
                                if (!l) {
                                    const l = d
                                        ? () => {
                                              i ? (i.render ? o({ cancelCallback: i.onCancel, confirmCallback: d, render: i.render }) : o({ cancelCallback: i.onCancel, confirmCallback: d, text: i.text, headline: i.headline, label: i.label, confirmButtonType: i.confirmButtonType, withCancelButton: i.withCancelButton })) : (d(), n());
                                          }
                                        : n;
                                    e.push({ disabled: a, Icon: r, isEmphasized: s, testID: p, subText: u, text: h, onClick: l, link: c, withBottomBorder: t && t.includes(f) });
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
                        const { confirmButtonType: t, headline: n, label: r, text: a, withCancelButton: l } = e || {};
                        return o.createElement(i.Z, { confirmButtonLabel: r, confirmButtonType: t, headline: n, onCancel: this._handleCancelConfirm, onConfirm: this._handleConfirmed, text: a, withCancelButton: l });
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
            n.d(t, { Z: () => s });
            var o = n(202784),
                r = n(325686),
                i = n(392237);
            class a extends o.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return o.createElement(r.Z, { style: l.root });
                }
            }
            const l = i.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                s = a;
        },
        980407: (e, t, n) => {
            n.d(t, { Z: () => f, w: () => h });
            var o = n(202784),
                r = n(325686),
                i = n(108362),
                a = n(386802),
                l = n(392237),
                s = n(652904),
                c = n(555079),
                d = n(625661),
                u = n(449067),
                p = n(715601);
            class h extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: n, backLocation: i, centerTitle: a, hideBackButton: l, history: s, isFullWidth: u, isLarge: p, middleControl: h, onBackClick: f, rightControl: b, secondaryBar: C, subtitle: y, title: g } = this.props,
                                { isModal: B } = this.context;
                            return o.createElement(r.Z, { style: B ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, o.createElement(d.ZP, { backButtonType: n || (B ? "close" : "back"), backLocation: i, centerTitle: a, fixed: !B, hideBackButton: l, history: s, isFullWidth: u, isLarge: p, middleControl: h, onBackClick: f, ref: e, rightControl: b, secondaryBar: C, style: [B && m.appBarModal, t], subtitle: y, title: g, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: n } = this.context;
                            t && (n ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: n, containerStyle: a, documentTitle: l, isFullWidth: c, isLarge: d, renderHeader: h, title: f, withoutBottomBarMobile: b } = this.props,
                        { isModal: C } = this.context,
                        y = h ? h(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return o.createElement(s.Z, null, o.createElement(u.Z.Configure, { documentTitle: l, headerless: !0, title: f }), o.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, C && m.rootModal] }, !C && y, o.createElement(i.Z, { isFullWidth: c, isLarge: d, style: [m.container, C && m.containerModal, a] }, C ? o.createElement(p.Z, { style: m.viewport }, y, n) : n), t ? o.createElement(r.Z, { style: [m.bottomBarModal, !C && !b && m.bottomBarMobile] }, o.createElement(i.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (h.defaultProps = { isFullWidth: !1, isLarge: !1 }), (h.contextType = a.Z);
            const m = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: l.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                f = h;
        },
        965245: (e, t, n) => {
            n.d(t, { Z: () => s });
            var o = n(807896),
                r = n(202784),
                i = n(229333),
                a = n(414939),
                l = n(334346);
            const s = ({ accessibilityTitle: e, footer: t = r.createElement(a.Z, null), ...n }) => {
                const s = r.createElement(l.C, (0, o.Z)({}, n, { footer: t }));
                return e ? r.createElement(i.Z, { title: e }, s) : s;
            };
        },
        334346: (e, t, n) => {
            n.d(t, { C: () => s, Z: () => l });
            var o = n(807896),
                r = n(202784),
                i = n(524084),
                a = n(768572);
            const l = "stable_sort_index",
                s = r.forwardRef((e, t) => {
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
                l = n(791632);
            const s = (e) => {
                    const t = (0, i.useHistory)(),
                        { isCompact: n, ...s } = e;
                    return r.createElement(a.Z, (0, o.Z)({}, s, { isCompact: n || (0, l.HD)(t) }));
                },
                c = r.memo(s);
        },
        652904: (e, t, n) => {
            n.d(t, { Z: () => d });
            var o = n(202784),
                r = n(500002),
                i = n(668214),
                a = n(997174),
                l = n(118823);
            const s = (0, i.Z)()
                .propsFromActions(() => ({ updateLocation: l.YF, updateTweetDetailNav: a.NH }))
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
                            locationKey: l,
                        } = e;
                    let s = !1;
                    t.pathname !== n ? (this._isInBackground = !0) : this._isInBackground && t.pathname === n && ((this._isInBackground = !1), (s = !0));
                    const c = r || l;
                    ((c && r !== l) || (!c && n !== i) || o !== a || s) && this._performPageUpdates(this.props);
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
            const d = (0, r.ZP)(s(c));
        },
        547195: (e, t, n) => {
            n.r(t), n.d(t, { default: () => k });
            n(136728);
            var o = n(202784),
                r = n(107267),
                i = n(154003),
                a = n(80361),
                l = n(952793),
                s = n(445664),
                c = n(189914),
                d = n(698478),
                u = n(725516),
                p = n(883229);
            const h = "Send or Request",
                m = { label: h },
                f = o.createElement(a.default, null),
                b = { context: "PaymentsProfileButton" },
                C = { type: "CustomRetry", content: () => null },
                y = ({ buttonStyle: e, userId: t }) => {
                    const n = (0, u.z)(),
                        a = (0, r.useHistory)(),
                        { permissions: l } = (0, s.Z)({ fetchKey: "UserProfile" }),
                        c = (0, d.nK)(l),
                        p = o.useCallback(() => {
                            t && (n.scribe({ section: "x-payments-profile", element: "payments", action: "click" }), a.push("/i/money/transfer", { userId: t, step: "reviewPane" }));
                        }, [n, a, t]);
                    return c ? o.createElement(i.ZP, { accessibilityLabel: h, hoverLabel: m, icon: f, onPress: p, style: e, testID: "paymentsFromProfile", type: "primaryOutlined" }) : null;
                },
                g = (e) => {
                    const [t] = (0, c.Z)({ allowLockedSession: !0 });
                    return o.createElement(p.N, { errorConfig: b, fallback: C }, t ? o.createElement(y, e) : null);
                },
                B = (e) => ((0, l.hC)("payments_enabled") ? o.createElement(p.N, { errorConfig: b, fallback: C }, o.createElement(g, e)) : null),
                k = o.memo(B);
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
                        s = i[t]?.(a);
                    return o ? l(s) : s;
                },
                l = (e) => {
                    const t = e?.split(".");
                    return 2 === t?.length && "00" === t?.[1] ? t[0] : e;
                };
        },
        158272: (e, t, n) => {
            n.d(t, { Kh: () => l, OQ: () => d, iW: () => c, xG: () => u, z_: () => s });
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
            const l = r().e4f6bd9e,
                s = r().ac966f94;
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-9f4db315.8e8f9b2a.js.map
