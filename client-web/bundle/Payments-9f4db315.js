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
                s = n(674132);
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: n, fixed: r, hideBackButton: i, isFullWidth: a, isLarge: c, leftControl: d, middleControl: h, position: p, rightControl: m, secondaryBar: f, style: C, subtitle: b, title: y, titleDomId: g, titleIconCell: k, titleIconCellSize: B, withBackground: w, withWideContainer: _ } = this.props,
                        { isModal: x } = this.context,
                        Z = i ? d : o.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        v = (function (e, t, n) {
                            return e && !(t && n);
                        })(!!w, x, !!f);
                    return o.createElement(o.Fragment, null, o.createElement(l.Z, { centerTitle: t, centeredLogo: n, isFullWidth: a, isLarge: c, leftControl: Z, middleControl: h, position: u(p, x, r), rightControl: m, style: C, subtitle: b, title: y, titleDomId: g, titleIconCell: k, titleIconCellSize: B, withBackground: v, withWideContainer: _ }), f || null);
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
                a = n(674132),
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
                            const { appBarRef: e, appBarStyle: t, backButtonType: n, backLocation: i, centerTitle: a, hideBackButton: s, history: l, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: f, rightControl: C, secondaryBar: b, subtitle: y, title: g } = this.props,
                                { isModal: k } = this.context;
                            return o.createElement(r.Z, { style: k ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, o.createElement(d.ZP, { backButtonType: n || (k ? "close" : "back"), backLocation: i, centerTitle: a, fixed: !k, hideBackButton: s, history: l, isFullWidth: u, isLarge: h, middleControl: p, onBackClick: f, ref: e, rightControl: C, secondaryBar: b, style: [k && m.appBarModal, t], subtitle: y, title: g, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: n } = this.context;
                            t && (n ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: n, containerStyle: a, documentTitle: s, isFullWidth: c, isLarge: d, renderHeader: p, title: f, withoutBottomBarMobile: C } = this.props,
                        { isModal: b } = this.context,
                        y = p ? p(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return o.createElement(l.Z, null, o.createElement(u.Z.Configure, { documentTitle: s, headerless: !0, title: f }), o.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, b && m.rootModal] }, !b && y, o.createElement(i.Z, { isFullWidth: c, isLarge: d, style: [m.container, b && m.containerModal, a] }, b ? o.createElement(h.Z, { style: m.viewport }, y, n) : n), t ? o.createElement(r.Z, { style: [m.bottomBarModal, !b && !C && m.bottomBarMobile] }, o.createElement(i.Z, { isFullWidth: c, isLarge: d }, t)) : null));
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
        507651: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(807896),
                r = n(202784),
                i = n(107267),
                a = n(403556),
                s = n(791632);
            const l = (e) => {
                    const t = (0, i.useHistory)();
                    return r.createElement(a.Z, (0, o.Z)({}, e, { isCompact: (0, s.HD)(t) }));
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
            n.r(t), n.d(t, { default: () => B });
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
                C = { context: "PaymentsProfileButton" },
                b = { type: "CustomRetry", content: () => null },
                y = ({ buttonStyle: e, userId: t }) => {
                    const n = (0, u.z)(),
                        a = (0, r.useHistory)(),
                        { permissions: s } = (0, l.Z)({ fetchKey: "UserProfile" }),
                        c = (0, d.nK)(s),
                        h = o.useCallback(() => {
                            t && (n.scribe({ section: "x-payments-profile", element: "payments", action: "click" }), a.push("/i/money/transfer", { userId: t, step: "reviewPane" }));
                        }, [n, a, t]);
                    return c ? o.createElement(i.ZP, { accessibilityLabel: p, hoverLabel: m, icon: f, onPress: h, style: e, testID: "paymentsFromProfile", type: "primaryOutlined" }) : null;
                },
                g = (e) => {
                    const [t] = (0, c.Z)({ allowLockedSession: !0 });
                    return o.createElement(h.N, { errorConfig: C, fallback: b }, t ? o.createElement(y, e) : null);
                },
                k = (e) => ((0, s.hC)("payments_enabled") ? o.createElement(h.N, { errorConfig: C, fallback: b }, o.createElement(g, e)) : null),
                B = o.memo(k);
        },
        158272: (e, t, n) => {
            n.d(t, { Kh: () => s, OQ: () => d, iW: () => c, xG: () => u, z_: () => l });
            n(875640), n(694898), n(38857), n(540171), n(157093), n(265688), n(270315), n(592529), n(86943), n(691157), n(571372);
            var o = n(674132),
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
                        { __id: p = "get_customer", id: m, permissions: f, roles: C } = h;
                    return (
                        l()([p], () => {
                            a(), o((e) => e + 1);
                        }),
                        { ...(0, d.S9)({ roles: C, permissions: f }), id: m, permissions: f, roles: C, fetchCount: n, refetchStatus: s }
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
            const C = () => {
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
                b = o.Z,
                y = ({ allowLockedSession: e }) => {
                    const { environment: t, forwardWithSdkUrl: n, sardineApiSubdomain: o, sardineClientID: a, sardineEnvironment: f, sardinePixelSubdomain: y, sardineSdkUrl: g, socurePublicKey: k } = (0, m.Z)(),
                        B = (0, l.useLocation)(),
                        w = (0, l.useHistory)(),
                        _ = B.pathname,
                        x = (0, i.Dv)(d.lZ),
                        Z = (0, u.hC)("payments_forward_with_enabled"),
                        [v, E] = r.useState(!1),
                        [S] = s()(b),
                        I = r.useCallback(
                            ({ challengeId: e }) => {
                                const t = { challengeId: e, closePath: "/", challengeInitiator: h.kW.auth };
                                w?.location?.pathname !== h.CM ? w.push(h.CM, t) : w.replace(h.CM, t);
                            },
                            [w],
                        ),
                        P = r.useCallback(() => {
                            w.replace(h.D$);
                        }, [w]),
                        L = r.useCallback(
                            (e) =>
                                new Promise((t, n) => {
                                    S({
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
                            [S],
                        );
                    return (
                        C(),
                        (0, c.q)(() => {
                            p.Z.initialize({ environment: t, sardineApiSubdomain: o, sardineClientID: a, sardineEnvironment: f, sardinePixelSubdomain: y, sardineSdkUrl: g, forwardWithSdkUrl: Z ? n : null, socurePublicKey: k, flow: _, fetchAuthSession: L, userPersistence: x, redirectToChallenge: I, errorHandler: P, allowLockedSession: e })
                                .then((e) => {
                                    e?.challengeRedirect || E(!0);
                                })
                                .catch(() => {
                                    E(!0);
                                });
                        }),
                        r.useEffect(() => {
                            p.Z.bind(), p.Z.updateFlow(_);
                        }, [_]),
                        [v]
                    );
                };
        },
        198433: (e, t, n) => {
            e.exports = n.p + "illustration-traffic-light.1da0d6da.png";
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-9f4db315.2755971a.js.map
