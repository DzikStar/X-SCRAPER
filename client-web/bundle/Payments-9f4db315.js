"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-9f4db315", "loader.FeedbackSheet"],
    {
        229333: (e, t, o) => {
            o.d(t, { Z: () => u });
            var n = o(202784),
                r = o(466999),
                i = o(325686),
                a = o(392237),
                s = o(674132);
            const l = o.n(s)().e5b0063d;
            let c = 0;
            class d extends n.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${c}`), (c += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        o = l({ title: t });
                    return n.createElement(i.Z, { "aria-labelledby": this._listDomId, role: "region" }, n.createElement(r.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: a.default.visuallyHidden }, t), n.createElement(i.Z, { "aria-label": o }, e));
                }
            }
            const u = d;
        },
        625661: (e, t, o) => {
            o.d(t, { ZP: () => h });
            var n = o(202784),
                r = o(614983),
                i = o.n(r),
                a = o(325686),
                s = o(370006),
                l = o(786998),
                c = o(929028),
                d = o(386802);
            function u(e, t, o) {
                return e || (!t && o ? "fixed" : void 0);
            }
            class h extends n.Component {
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: r, hideBackButton: i, isFullWidth: a, isLarge: c, leftControl: d, middleControl: h, position: p, rightControl: f, secondaryBar: m, style: b, subtitle: C, title: y, titleDomId: B, titleIconCell: g, titleIconCellSize: k, withBackground: x, withWideContainer: w } = this.props,
                        { isModal: v } = this.context,
                        Z = i ? d : n.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        E = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!x, v, !!m);
                    return n.createElement(n.Fragment, null, n.createElement(l.Z, { centerTitle: t, centeredLogo: o, isFullWidth: a, isLarge: c, leftControl: Z, middleControl: h, position: u(p, v, r), rightControl: f, style: b, subtitle: C, title: y, titleDomId: B, titleIconCell: g, titleIconCellSize: k, withBackground: E, withWideContainer: w }), m || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = c.Z.getBackgroundStyles();
                    return t ? n.createElement(a.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = d.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        774426: (e, t, o) => {
            o.r(t), o.d(t, { default: () => u });
            o(136728);
            var n = o(202784),
                r = o(811176),
                i = o(190286),
                a = o(674132),
                s = o.n(a),
                l = o(912021);
            const c = s().cfd2f35e;
            class d extends n.Component {
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
                        (this._getMemoizedProcessedActionItems = (0, l.Z)((e, t, o, n) =>
                            e.reduce((e, { Icon: r, confirmation: i, disabled: a, excludeFromActionMenu: s, isEmphasized: l, link: c, onClick: d, subText: u, testID: h, text: p, withCancelButton: f }, m) => {
                                if (!s) {
                                    const s = d
                                        ? () => {
                                              i ? (i.render ? n({ cancelCallback: i.onCancel, confirmCallback: d, render: i.render }) : n({ cancelCallback: i.onCancel, confirmCallback: d, text: i.text, headline: i.headline, label: i.label, confirmButtonType: i.confirmButtonType, withCancelButton: i.withCancelButton })) : (d(), o());
                                          }
                                        : o;
                                    e.push({ disabled: a, Icon: r, isEmphasized: l, testID: h, subText: u, text: p, onClick: s, link: c, withBottomBorder: t && t.includes(m) });
                                }
                                return e;
                            }, []),
                        ));
                }
                render() {
                    const { onClose: e } = this.props,
                        { activeConfirmation: t } = this.state;
                    return t ? this._renderConfirmation(t) : n.createElement(r.Z, { cancelButtonLabel: c, items: this._getProcessedActionItems(), onCloseRequested: e });
                }
                _renderConfirmation(e) {
                    if (e && e.render) return e.render(this._handleConfirmed, this._handleCancelConfirm);
                    {
                        const { confirmButtonType: t, headline: o, label: r, text: a, withCancelButton: s } = e || {};
                        return n.createElement(i.Z, { confirmButtonLabel: r, confirmButtonType: t, headline: o, onCancel: this._handleCancelConfirm, onConfirm: this._handleConfirmed, text: a, withCancelButton: s });
                    }
                }
                _getProcessedActionItems() {
                    const { actionItems: e, dividerIndices: t, onClose: o } = this.props;
                    return this._getMemoizedProcessedActionItems(e, t, o, this._handleConfirm);
                }
            }
            const u = d;
        },
        414939: (e, t, o) => {
            o.d(t, { Z: () => l });
            var n = o(202784),
                r = o(325686),
                i = o(392237);
            class a extends n.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return n.createElement(r.Z, { style: s.root });
                }
            }
            const s = i.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                l = a;
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => m, w: () => p });
            var n = o(202784),
                r = o(325686),
                i = o(108362),
                a = o(386802),
                s = o(392237),
                l = o(652904),
                c = o(555079),
                d = o(625661),
                u = o(449067),
                h = o(715601);
            class p extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: i, centerTitle: a, hideBackButton: s, history: l, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: m, rightControl: b, secondaryBar: C, subtitle: y, title: B } = this.props,
                                { isModal: g } = this.context;
                            return n.createElement(r.Z, { style: g ? [f.childViewAppBarRoot, f.appBarZindex] : f.appBarZindex }, n.createElement(d.ZP, { backButtonType: o || (g ? "close" : "back"), backLocation: i, centerTitle: a, fixed: !g, hideBackButton: s, history: l, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: m, ref: e, rightControl: b, secondaryBar: C, style: [g && f.appBarModal, t], subtitle: y, title: B, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: a, documentTitle: s, isFullWidth: c, isLarge: d, renderHeader: p, title: m, withoutBottomBarMobile: b } = this.props,
                        { isModal: C } = this.context,
                        y = p ? p(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return n.createElement(l.Z, null, n.createElement(u.Z.Configure, { documentTitle: s, headerless: !0, title: m }), n.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [f.root, C && f.rootModal] }, !C && y, n.createElement(i.Z, { isFullWidth: c, isLarge: d, style: [f.container, C && f.containerModal, a] }, C ? n.createElement(h.Z, { style: f.viewport }, y, o) : o), t ? n.createElement(r.Z, { style: [f.bottomBarModal, !C && !b && f.bottomBarMobile] }, n.createElement(i.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (p.defaultProps = { isFullWidth: !1, isLarge: !1 }), (p.contextType = a.Z);
            const f = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: s.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                m = p;
        },
        965245: (e, t, o) => {
            o.d(t, { Z: () => l });
            var n = o(807896),
                r = o(202784),
                i = o(229333),
                a = o(414939),
                s = o(334346);
            const l = ({ accessibilityTitle: e, footer: t = r.createElement(a.Z, null), ...o }) => {
                const l = r.createElement(s.C, (0, n.Z)({}, o, { footer: t }));
                return e ? r.createElement(i.Z, { title: e }, l) : l;
            };
        },
        507651: (e, t, o) => {
            o.d(t, { Z: () => c });
            var n = o(807896),
                r = o(202784),
                i = o(107267),
                a = o(403556),
                s = o(791632);
            const l = (e) => {
                    const t = (0, i.useHistory)();
                    return r.createElement(a.Z, (0, n.Z)({}, e, { isCompact: (0, s.HD)(t) }));
                },
                c = r.memo(l);
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => d });
            var n = o(202784),
                r = o(500002),
                i = o(668214),
                a = o(997174),
                s = o(118823);
            const l = (0, i.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: a.NH }))
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
                            location: { pathname: i, search: a },
                            locationKey: s,
                        } = e;
                    let l = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (l = !0));
                    const c = r || s;
                    ((c && r !== s) || (!c && o !== i) || n !== a || l) && this._performPageUpdates(this.props);
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
        547195: (e, t, o) => {
            o.r(t), o.d(t, { default: () => k });
            o(136728);
            var n = o(202784),
                r = o(107267),
                i = o(154003),
                a = o(80361),
                s = o(952793),
                l = o(445664),
                c = o(189914),
                d = o(698478),
                u = o(725516),
                h = o(883229);
            const p = "Send or Request",
                f = { label: p },
                m = n.createElement(a.default, null),
                b = { context: "PaymentsProfileButton" },
                C = { type: "CustomRetry", content: () => null },
                y = ({ buttonStyle: e, userId: t }) => {
                    const o = (0, u.z)(),
                        a = (0, r.useHistory)(),
                        { permissions: s } = (0, l.Z)({ fetchKey: "UserProfile" }),
                        c = (0, d.nK)(s),
                        h = n.useCallback(() => {
                            t && (o.scribe({ section: "x-payments-profile", element: "payments", action: "click" }), a.push("/i/money/transfer", { userId: t, step: "reviewPane" }));
                        }, [o, a, t]);
                    return c ? n.createElement(i.ZP, { accessibilityLabel: p, hoverLabel: f, icon: m, onPress: h, style: e, testID: "paymentsFromProfile", type: "primaryOutlined" }) : null;
                },
                B = (e) => {
                    const [t] = (0, c.Z)({ allowLockedSession: !0 });
                    return n.createElement(h.N, { errorConfig: b, fallback: C }, t ? n.createElement(y, e) : null);
                },
                g = (e) => ((0, s.hC)("payments_enabled") ? n.createElement(h.N, { errorConfig: b, fallback: C }, n.createElement(B, e)) : null),
                k = n.memo(g);
        },
        97882: (e, t, o) => {
            o.d(t, { T: () => i, x: () => a });
            var n = o(674132),
                r = o.n(n);
            const i = { AED: r().d857e44d, ALL: r().cb87e3db, ARS: r().a9d5ffd1, AUD: r().a0e8371d, BAM: r().gcc50dc9, BDT: r().a6a43585, BGN: r().a0cc8f2d, BHD: r().i31c32c5, BRL: r().i7dc69e9, BYR: r().c14a6c03, CAD: r().jaa3d537, CHF: r().a824080b, CLP: r().d9c0bedb, CNY: r().bf8c0613, COP: r().i8163625, CZK: r().adb53ba1, DKK: r().iabf697d, DZD: r().a1a0555b, EGP: r().f266f3d9, EUR: r().a9a8652b, GBP: r().dbf40761, GHS: r().b0d993d9, GTQ: r().ac1308e1, HKD: r().a7889ab3, HRK: r().c614f5cd, HUF: r().i55d57e3, IDR: r().e4b6002b, ILS: r().d28e983b, INR: r().e8c9232d, IQD: r().c8994ae1, ISK: r().f821c2a5, JPY: r().j348b9c9, KES: r().i6f93b9b, KRW: r().c6150bd5, KWD: r().i8921e09, KZT: r().ef239279, LBP: r().hecdb149, MAD: r().fdd039b7, MKD: r().f30c2c37, MXN: r().d9ea7bff, MYR: r().ea3df4b7, NGN: r().jaac21bb, NOK: r().hb435ced, NZD: r().ce699d81, PEN: r().bc56d3d7, PHP: r().f8561913, PKR: r().g6485d53, PLN: r().ff561cc1, QAR: r().b42011d3, RON: r().a6660bcd, RSD: r().f9b80449, RUB: r().gdee4d5d, SAR: r().h36f2103, SEK: r().a19ad037, SGD: r().g713f699, THB: r().ff2e39af, TND: r().be34316d, TRY: r().aef81b75, TWD: r().fcce70a5, TZS: r().jc9d352f, UAH: r().be1cb8c5, UGX: r().j9371501, USD: r().j7d4397d, VEF: r().d61441dd, VND: r().e2a99e97, ZAR: r().f7ce19ab, ZMW: r().b2a0213f },
                a = ({ amount: e, currencyCode: t = "USD", formatter: o = 1e6, removeTrailingZeros: n = !1, strictAmount: r = !1 }) => {
                    const a = r ? e : parseInt(e, 10) / o,
                        l = i[t]?.(a);
                    return n ? s(l) : l;
                },
                s = (e) => {
                    const t = e?.split(".");
                    return 2 === t?.length && "00" === t?.[1] ? t[0] : e;
                };
        },
        158272: (e, t, o) => {
            o.d(t, { Kh: () => s, OQ: () => d, iW: () => c, xG: () => u, z_: () => l });
            o(875640), o(694898), o(38857), o(540171), o(157093), o(265688), o(270315), o(592529), o(86943), o(691157), o(571372);
            var n = o(674132),
                r = o.n(n);
            function i(e) {
                const t = e.replace(/-/g, "+").replace(/_/g, "/"),
                    o = atob(t),
                    n = o.length,
                    r = new ArrayBuffer(n),
                    i = new Uint8Array(r);
                for (let e = 0; e < n; e++) i[e] = o.charCodeAt(e);
                return r;
            }
            function a(e) {
                const t = new Uint8Array(e),
                    o = String.fromCharCode(...t);
                return btoa(o).replace(/\+/g, "-").replace(/(\/)/g, "_").replace(/=/g, "");
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
        127218: (e, t, o) => {
            o.d(t, { C: () => C });
            var n = o(202784),
                r = o(614983),
                i = o.n(r),
                a = o(437429),
                s = o.n(a),
                l = o(57074),
                c = o.n(l),
                d = o(10622),
                u = o.n(d),
                h = o(585488),
                p = o(71620),
                f = o(163889),
                m = o(312771),
                b = o(535338);
            function C(e, t, o) {
                const [r, a] = n.useState(!1),
                    [l, d] = n.useState(null),
                    C = s()(),
                    y = c()(t),
                    B = (0, p.po)(),
                    g = (0, b.p)(e, y, o);
                return n.useMemo(() => {
                    const t = (0, h.getRequest)(e).params?.metadata?.sliceInfoPath;
                    i()(!!t, "The provided query does not have an associated sliceInfoPath. Make sure you are using the `@slice` directive with your query.");
                    const { next_cursor: o, previous_cursor: n } =
                            (function (e, t) {
                                try {
                                    i()("slice_info" === t[t.length - 1], "Invalid sliceInfoPath!");
                                    let o = e;
                                    for (const e of t) i()(!!o, "The provided path is invalid."), i()("string" == typeof e, "Unexpected value for path!"), (o = o?.[e]);
                                    return o;
                                } catch (e) {
                                    return void (0, f.ZP)(e.message);
                                }
                            })(g, t) || {},
                        s = (t) => {
                            r ||
                                (a(!0),
                                u()(C, e, { ...y, cursor: t }).subscribe({
                                    complete: () => {
                                        a(!1);
                                    },
                                    error: (e) => {
                                        a(!1), d(e), B(e);
                                    },
                                }));
                        },
                        c = () => {
                            o && s(o);
                        },
                        p = () => {
                            n && s(n);
                        },
                        b = () => {
                            s(void 0);
                        };
                    return l ? { subsequentFetchStatus: m.ZP.FAILED, error: l, fetchNext: c, fetchPrevious: p, refetch: b, data: g, hasNext: Boolean(o), hasPrevious: Boolean(n) } : { subsequentFetchStatus: r ? m.ZP.LOADING : m.ZP.NONE, error: void 0, fetchNext: c, fetchPrevious: p, refetch: b, data: g, hasNext: Boolean(o), hasPrevious: Boolean(n) };
                }, [e, g, r, l, C, y, B]);
            }
        },
        198433: (e, t, o) => {
            e.exports = o.p + "illustration-traffic-light.1da0d6da.png";
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-9f4db315.9590d9fa.js.map
