"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-9f4db315", "loader.FeedbackSheet"],
    {
        229333: (e, t, n) => {
            n.d(t, { Z: () => u });
            var r = n(202784),
                o = n(466999),
                i = n(325686),
                a = n(392237),
                s = n(674132);
            const l = n.n(s)().e5b0063d;
            let c = 0;
            class d extends r.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${c}`), (c += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        n = l({ title: t });
                    return r.createElement(i.Z, { "aria-labelledby": this._listDomId, role: "region" }, r.createElement(o.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: a.default.visuallyHidden }, t), r.createElement(i.Z, { "aria-label": n }, e));
                }
            }
            const u = d;
        },
        625661: (e, t, n) => {
            n.d(t, { ZP: () => h });
            var r = n(202784),
                o = n(614983),
                i = n.n(o),
                a = n(325686),
                s = n(370006),
                l = n(786998),
                c = n(929028),
                d = n(386802);
            function u(e, t, n) {
                return e || (!t && n ? "fixed" : void 0);
            }
            class h extends r.Component {
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: n, fixed: o, hideBackButton: i, isFullWidth: a, isLarge: c, leftControl: d, middleControl: h, position: p, rightControl: m, secondaryBar: f, style: b, subtitle: C, title: y, titleDomId: g, titleIconCell: _, titleIconCellSize: k, withBackground: B, withWideContainer: v } = this.props,
                        { isModal: w } = this.context,
                        x = i ? d : r.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        S = (function (e, t, n) {
                            return e && !(t && n);
                        })(!!B, w, !!f);
                    return r.createElement(r.Fragment, null, r.createElement(l.Z, { centerTitle: t, centeredLogo: n, isFullWidth: a, isLarge: c, leftControl: x, middleControl: h, position: u(p, w, o), rightControl: m, style: b, subtitle: C, title: y, titleDomId: g, titleIconCell: _, titleIconCellSize: k, withBackground: S, withWideContainer: v }), f || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        n = c.Z.getBackgroundStyles();
                    return t ? r.createElement(a.Z, { style: !!e && n }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = d.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        774426: (e, t, n) => {
            n.r(t), n.d(t, { default: () => u });
            n(136728);
            var r = n(202784),
                o = n(811176),
                i = n(190286),
                a = n(674132),
                s = n.n(a),
                l = n(912021);
            const c = s().cfd2f35e;
            class d extends r.Component {
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
                        (this._getMemoizedProcessedActionItems = (0, l.Z)((e, t, n, r) =>
                            e.reduce((e, { Icon: o, confirmation: i, disabled: a, excludeFromActionMenu: s, isEmphasized: l, link: c, onClick: d, subText: u, testID: h, text: p, withCancelButton: m }, f) => {
                                if (!s) {
                                    const s = d
                                        ? () => {
                                              i ? (i.render ? r({ cancelCallback: i.onCancel, confirmCallback: d, render: i.render }) : r({ cancelCallback: i.onCancel, confirmCallback: d, text: i.text, headline: i.headline, label: i.label, confirmButtonType: i.confirmButtonType, withCancelButton: i.withCancelButton })) : (d(), n());
                                          }
                                        : n;
                                    e.push({ disabled: a, Icon: o, isEmphasized: l, testID: h, subText: u, text: p, onClick: s, link: c, withBottomBorder: t && t.includes(f) });
                                }
                                return e;
                            }, []),
                        ));
                }
                render() {
                    const { onClose: e } = this.props,
                        { activeConfirmation: t } = this.state;
                    return t ? this._renderConfirmation(t) : r.createElement(o.Z, { cancelButtonLabel: c, items: this._getProcessedActionItems(), onCloseRequested: e });
                }
                _renderConfirmation(e) {
                    if (e && e.render) return e.render(this._handleConfirmed, this._handleCancelConfirm);
                    {
                        const { confirmButtonType: t, headline: n, label: o, text: a, withCancelButton: s } = e || {};
                        return r.createElement(i.Z, { confirmButtonLabel: o, confirmButtonType: t, headline: n, onCancel: this._handleCancelConfirm, onConfirm: this._handleConfirmed, text: a, withCancelButton: s });
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
            var r = n(202784),
                o = n(325686),
                i = n(392237);
            class a extends r.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return r.createElement(o.Z, { style: s.root });
                }
            }
            const s = i.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                l = a;
        },
        980407: (e, t, n) => {
            n.d(t, { Z: () => f, w: () => p });
            var r = n(202784),
                o = n(325686),
                i = n(108362),
                a = n(386802),
                s = n(392237),
                l = n(652904),
                c = n(555079),
                d = n(625661),
                u = n(449067),
                h = n(715601);
            class p extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: n, backLocation: i, centerTitle: a, hideBackButton: s, history: l, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: f, rightControl: b, secondaryBar: C, subtitle: y, title: g } = this.props,
                                { isModal: _ } = this.context;
                            return r.createElement(o.Z, { style: _ ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, r.createElement(d.ZP, { backButtonType: n || (_ ? "close" : "back"), backLocation: i, centerTitle: a, fixed: !_, hideBackButton: s, history: l, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: f, ref: e, rightControl: b, secondaryBar: C, style: [_ && m.appBarModal, t], subtitle: y, title: g, titleDomId: c.Q_ }));
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
                    return r.createElement(l.Z, null, r.createElement(u.Z.Configure, { documentTitle: s, headerless: !0, title: f }), r.createElement(o.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, C && m.rootModal] }, !C && y, r.createElement(i.Z, { isFullWidth: c, isLarge: d, style: [m.container, C && m.containerModal, a] }, C ? r.createElement(h.Z, { style: m.viewport }, y, n) : n), t ? r.createElement(o.Z, { style: [m.bottomBarModal, !C && !b && m.bottomBarMobile] }, r.createElement(i.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (p.defaultProps = { isFullWidth: !1, isLarge: !1 }), (p.contextType = a.Z);
            const m = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: s.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                f = p;
        },
        965245: (e, t, n) => {
            n.d(t, { Z: () => l });
            var r = n(807896),
                o = n(202784),
                i = n(229333),
                a = n(414939),
                s = n(334346);
            const l = ({ accessibilityTitle: e, footer: t = o.createElement(a.Z, null), ...n }) => {
                const l = o.createElement(s.C, (0, r.Z)({}, n, { footer: t }));
                return e ? o.createElement(i.Z, { title: e }, l) : l;
            };
        },
        507651: (e, t, n) => {
            n.d(t, { Z: () => c });
            var r = n(807896),
                o = n(202784),
                i = n(107267),
                a = n(403556),
                s = n(791632);
            const l = (e) => {
                    const t = (0, i.useHistory)();
                    return o.createElement(a.Z, (0, r.Z)({}, e, { isCompact: (0, s.HD)(t) }));
                },
                c = o.memo(l);
        },
        652904: (e, t, n) => {
            n.d(t, { Z: () => d });
            var r = n(202784),
                o = n(500002),
                i = n(668214),
                a = n(997174),
                s = n(118823);
            const l = (0, i.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: a.NH }))
                .withAnalytics();
            class c extends r.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: n, search: r },
                            locationKey: o,
                        } = this.props,
                        {
                            location: { pathname: i, search: a },
                            locationKey: s,
                        } = e;
                    let l = !1;
                    t.pathname !== n ? (this._isInBackground = !0) : this._isInBackground && t.pathname === n && ((this._isInBackground = !1), (l = !0));
                    const c = o || s;
                    ((c && o !== s) || (!c && n !== i) || r !== a || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: n, updateTweetDetailNav: r } = e;
                    t.scribePageImpression(), n(t.contextualScribeNamespace, t.contextualScribeData), r(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, o.ZP)(l(c));
        },
        547195: (e, t, n) => {
            n.r(t), n.d(t, { default: () => k });
            n(136728);
            var r = n(202784),
                o = n(107267),
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
                f = r.createElement(a.default, null),
                b = { context: "PaymentsProfileButton" },
                C = { type: "CustomRetry", content: () => null },
                y = ({ buttonStyle: e, userId: t }) => {
                    const n = (0, u.z)(),
                        a = (0, o.useHistory)(),
                        { permissions: s } = (0, l.Z)({ fetchKey: "UserProfile" }),
                        c = (0, d.nK)(s),
                        h = r.useCallback(() => {
                            t && (n.scribe({ section: "x-payments-profile", element: "payments", action: "click" }), a.push("/i/money/transfer", { userId: t, step: "reviewPane" }));
                        }, [n, a, t]);
                    return c ? r.createElement(i.ZP, { accessibilityLabel: p, hoverLabel: m, icon: f, onPress: h, style: e, testID: "paymentsFromProfile", type: "primaryOutlined" }) : null;
                },
                g = (e) => {
                    const [t] = (0, c.Z)({ allowLockedSession: !0 });
                    return r.createElement(h.N, { errorConfig: b, fallback: C }, t ? r.createElement(y, e) : null);
                },
                _ = (e) => ((0, s.hC)("payments_enabled") ? r.createElement(h.N, { errorConfig: b, fallback: C }, r.createElement(g, e)) : null),
                k = r.memo(_);
        },
        97882: (e, t, n) => {
            n.d(t, { T: () => i, x: () => a });
            var r = n(674132),
                o = n.n(r);
            const i = { AED: o().d857e44d, ALL: o().cb87e3db, ARS: o().a9d5ffd1, AUD: o().a0e8371d, BAM: o().gcc50dc9, BDT: o().a6a43585, BGN: o().a0cc8f2d, BHD: o().i31c32c5, BRL: o().i7dc69e9, BYR: o().c14a6c03, CAD: o().jaa3d537, CHF: o().a824080b, CLP: o().d9c0bedb, CNY: o().bf8c0613, COP: o().i8163625, CZK: o().adb53ba1, DKK: o().iabf697d, DZD: o().a1a0555b, EGP: o().f266f3d9, EUR: o().a9a8652b, GBP: o().dbf40761, GHS: o().b0d993d9, GTQ: o().ac1308e1, HKD: o().a7889ab3, HRK: o().c614f5cd, HUF: o().i55d57e3, IDR: o().e4b6002b, ILS: o().d28e983b, INR: o().e8c9232d, IQD: o().c8994ae1, ISK: o().f821c2a5, JPY: o().j348b9c9, KES: o().i6f93b9b, KRW: o().c6150bd5, KWD: o().i8921e09, KZT: o().ef239279, LBP: o().hecdb149, MAD: o().fdd039b7, MKD: o().f30c2c37, MXN: o().d9ea7bff, MYR: o().ea3df4b7, NGN: o().jaac21bb, NOK: o().hb435ced, NZD: o().ce699d81, PEN: o().bc56d3d7, PHP: o().f8561913, PKR: o().g6485d53, PLN: o().ff561cc1, QAR: o().b42011d3, RON: o().a6660bcd, RSD: o().f9b80449, RUB: o().gdee4d5d, SAR: o().h36f2103, SEK: o().a19ad037, SGD: o().g713f699, THB: o().ff2e39af, TND: o().be34316d, TRY: o().aef81b75, TWD: o().fcce70a5, TZS: o().jc9d352f, UAH: o().be1cb8c5, UGX: o().j9371501, USD: o().j7d4397d, VEF: o().d61441dd, VND: o().e2a99e97, ZAR: o().f7ce19ab, ZMW: o().b2a0213f },
                a = ({ amount: e, currencyCode: t = "USD", formatter: n = 1e6, removeTrailingZeros: r = !1, strictAmount: o = !1 }) => {
                    const a = o ? e : parseInt(e, 10) / n,
                        l = i[t]?.(a);
                    return r ? s(l) : l;
                },
                s = (e) => {
                    const t = e?.split(".");
                    return 2 === t?.length && "00" === t?.[1] ? t[0] : e;
                };
        },
        158272: (e, t, n) => {
            n.d(t, { Kh: () => s, OQ: () => d, iW: () => c, xG: () => u, z_: () => l });
            n(875640), n(694898), n(38857), n(540171), n(157093), n(265688), n(270315), n(592529), n(86943), n(691157), n(571372);
            var r = n(674132),
                o = n.n(r);
            function i(e) {
                const t = e.replace(/-/g, "+").replace(/_/g, "/"),
                    n = atob(t),
                    r = n.length,
                    o = new ArrayBuffer(r),
                    i = new Uint8Array(o);
                for (let e = 0; e < r; e++) i[e] = n.charCodeAt(e);
                return o;
            }
            function a(e) {
                const t = new Uint8Array(e),
                    n = String.fromCharCode(...t);
                return btoa(n).replace(/\+/g, "-").replace(/(\/)/g, "_").replace(/=/g, "");
            }
            const s = o().e4f6bd9e,
                l = o().ac966f94;
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
            var r = n(217995),
                o = n(202784),
                i = n(10622),
                a = n.n(i),
                s = (n(585488), n(353391)),
                l = n.n(s),
                c = n(482924),
                d = n(698478);
            const u = r.Z,
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
                        [n, r] = o.useState(1),
                        { data: i, refetch: a, refetchStatus: s } = (0, c.A)(u, {}, { fetchKey: t }),
                        h = i?.get_customer ?? {},
                        { __id: p = "get_customer", id: m, permissions: f, roles: b } = h;
                    return (
                        l()([p], () => {
                            a(), r((e) => e + 1);
                        }),
                        { ...(0, d.S9)({ roles: b, permissions: f }), id: m, permissions: f, roles: b, fetchCount: n, refetchStatus: s }
                    );
                };
        },
        412450: (e, t, n) => {
            n.d(t, { Z: () => c });
            var r = n(990312),
                o = (n(585488), n(712696)),
                i = n.n(o),
                a = n(514639);
            const s = r.Z,
                l = { "payments-dev.x.com": a.Re.development, "money-dev.x.com": a.Re.development, "payments-staging.x.com": a.Re.staging, "money-staging.x.com": a.Re.staging, "money.x.com": a.Re.production, "payments-prod.x.com": a.Re.production },
                c = () => {
                    const e = i()(s, {}),
                        t = e?.get_payments_client_config,
                        n = t?.payments_web_host,
                        r = t?.sardine_api_subdomain,
                        o = "https://";
                    return { environment: (n ? l[n] : null) ?? a.Re.production, paymentsOrigin: n ? `${o}${n}` : null, sardineClientID: t?.sardine_client_id, sardineSdkUrl: r ? `https://${r}/assets/loader.min.js` : null, sardineEnvironment: t?.sardine_environment, sardinePixelSubdomain: t?.sardine_pixel_subdomain, sardineApiSubdomain: r, reportUrl: t?.payments_report_url ?? "https://payments.x.com/support/forms/report", supportUrl: t?.payments_help_url ?? "https://payments.x.com/support/forms/help", socurePublicKey: t?.socure_public_key, forwardWithSdkUrl: n ? `${o}${n}/${a.dP}/wasm/xxp-forward-with-sdk.js` : null, stripePKey: t?.stripe_issuing_publishable_key };
                };
        },
        983304: (e, t, n) => {
            n.d(t, { Z: () => y });
            n(136728);
            var r = n(708419),
                o = n(202784),
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
                    const { featureSwitches: e, history: t } = o.useContext(f.rC),
                        n = e.isTrue("payments_enabled");
                    o.useEffect(() => {
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
                C = r.Z,
                y = ({ allowLockedSession: e }) => {
                    const { environment: t, forwardWithSdkUrl: n, sardineApiSubdomain: r, sardineClientID: a, sardineEnvironment: f, sardinePixelSubdomain: y, sardineSdkUrl: g, socurePublicKey: _ } = (0, m.Z)(),
                        k = (0, l.useLocation)(),
                        B = (0, l.useHistory)(),
                        v = k.pathname,
                        w = (0, i.Dv)(d.lZ),
                        x = (0, u.hC)("payments_forward_with_enabled"),
                        [S, Z] = o.useState(!1),
                        [P] = s()(C),
                        E = o.useCallback(
                            ({ challengeId: e }) => {
                                const t = { challengeId: e, closePath: "/", challengeInitiator: h.kW.auth };
                                B?.location?.pathname !== h.CM ? B.push(h.CM, t) : B.replace(h.CM, t);
                            },
                            [B],
                        ),
                        I = o.useCallback(() => {
                            B.replace(h.D$);
                        }, [B]),
                        D = o.useCallback(
                            (e) =>
                                new Promise((t, n) => {
                                    P({
                                        variables: { provider_tokens: { sardine_session_key: e, socure_session_token: e } },
                                        onCompleted: (e, r) => {
                                            const o = e?.create_x_payments_auth_session_v2,
                                                i = o?.session_id,
                                                a = o?.customer_id,
                                                s = o?.challenge_id,
                                                l = o?.expiry_time_millis,
                                                c = o?.status;
                                            i && l ? t({ sessionId: i, expiresAtMsec: l, paymentsUserId: a, status: c, challengeId: s }) : n(o?.errors ?? r);
                                        },
                                        onError: n,
                                    });
                                }),
                            [P],
                        );
                    return (
                        b(),
                        (0, c.q)(() => {
                            p.Z.initialize({ environment: t, sardineApiSubdomain: r, sardineClientID: a, sardineEnvironment: f, sardinePixelSubdomain: y, sardineSdkUrl: g, forwardWithSdkUrl: x ? n : null, socurePublicKey: _, flow: v, fetchAuthSession: D, userPersistence: w, redirectToChallenge: E, errorHandler: I, allowLockedSession: e })
                                .then((e) => {
                                    e?.challengeRedirect || Z(!0);
                                })
                                .catch(() => {
                                    Z(!0);
                                });
                        }),
                        o.useEffect(() => {
                            p.Z.bind(), p.Z.updateFlow(v);
                        }, [v]),
                        [S]
                    );
                };
        },
        482924: (e, t, n) => {
            n.d(t, { A: () => p });
            var r = n(202784),
                o = n(437429),
                i = n.n(o),
                a = n(57074),
                s = n.n(a),
                l = n(10622),
                c = n.n(l),
                d = n(71620),
                u = n(312771),
                h = n(535338);
            function p(e, t, n) {
                const o = s()(t),
                    a = s()(n),
                    l = i()(),
                    p = (0, d.po)(),
                    [m, f] = r.useState(null),
                    [b, C] = r.useState(!1),
                    y = r.useCallback(() => {
                        b ||
                            (C(!0),
                            c()(l, e, o, { networkCacheConfig: a?.networkCacheConfig, fetchPolicy: "network-only" }).subscribe({
                                complete: () => {
                                    C(!1);
                                },
                                error: (e) => {
                                    p(e), C(!1), f(e);
                                },
                            }));
                    }, [l, p, e, b, o, a]),
                    g = (0, h.p)(e, t, n);
                return r.useMemo(() => (m ? { data: g, refetch: y, refetchStatus: u.ZP.FAILED, refetchError: m } : { data: g, refetch: y, refetchStatus: b ? u.ZP.LOADING : u.ZP.NONE, refetchError: void 0 }), [g, m, b, y]);
            }
        },
        127218: (e, t, n) => {
            n.d(t, { C: () => C });
            var r = n(202784),
                o = n(614983),
                i = n.n(o),
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
                const [o, a] = r.useState(!1),
                    [l, d] = r.useState(null),
                    C = s()(),
                    y = c()(t),
                    g = (0, p.po)(),
                    _ = (0, b.p)(e, y, n);
                return r.useMemo(() => {
                    const t = (0, h.getRequest)(e).params?.metadata?.sliceInfoPath;
                    i()(!!t, "The provided query does not have an associated sliceInfoPath. Make sure you are using the `@slice` directive with your query.");
                    const { next_cursor: n, previous_cursor: r } =
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
                            o ||
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
                            r && s(r);
                        },
                        b = () => {
                            s(void 0);
                        };
                    return l ? { subsequentFetchStatus: f.ZP.FAILED, error: l, fetchNext: c, fetchPrevious: p, refetch: b, data: _, hasNext: Boolean(n), hasPrevious: Boolean(r) } : { subsequentFetchStatus: o ? f.ZP.LOADING : f.ZP.NONE, error: void 0, fetchNext: c, fetchPrevious: p, refetch: b, data: _, hasNext: Boolean(n), hasPrevious: Boolean(r) };
                }, [e, _, o, l, C, y, g]);
            }
        },
        198433: (e, t, n) => {
            e.exports = n.p + "illustration-traffic-light.1da0d6da.png";
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-9f4db315.2d9b428a.js.map
