"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Payments-a2dee9c7", "loader.FeedbackSheet"],
    {
        800697: (e, t, n) => {
            n.d(t, { Z: () => l });
            var a,
                r,
                o,
                i = {
                    fragment: {
                        argumentDefinitions: (a = [{ defaultValue: null, kind: "LocalArgument", name: "challengeId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useStartTwoFactorAuthQuery",
                        selections: (o = [
                            {
                                alias: null,
                                args: [{ kind: "Literal", name: "s", value: "8cce" }],
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: [{ kind: "Variable", name: "challenge_id", variableName: "challengeId" }],
                                        concreteType: "XPaymentsStartTwoFactorLogin",
                                        kind: "LinkedField",
                                        name: "xp_start_two_factor_auth_challenge",
                                        plural: !1,
                                        selections: [
                                            { alias: null, args: null, concreteType: "XPaymentsTwoFactorLoginVerificationRequest", kind: "LinkedField", name: "login_request", plural: !1, selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }), { alias: null, args: null, kind: "ScalarField", name: "challenge", storageKey: null }, { alias: null, args: null, concreteType: "XPaymentsTwoFactorAuthMethod", kind: "LinkedField", name: "two_factor_auth_method", plural: !1, selections: [r, { alias: null, args: null, kind: "ScalarField", name: "two_factor_type", storageKey: null }], storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null }], storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "error", storageKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"8cce")',
                            },
                        ]),
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: a, kind: "Operation", name: "useStartTwoFactorAuthQuery", selections: o },
                    params: { id: "mmKuTztykqv5M7qri5pU1A", metadata: {}, name: "useStartTwoFactorAuthQuery", operationKind: "query", text: null },
                };
            i.hash = "621c0a9b6870bcd7697f74f77643806d";
            const l = i;
        },
        746523: (e, t, n) => {
            n.d(t, { Z: () => s });
            var a,
                r,
                o,
                i,
                l = {
                    fragment: {
                        argumentDefinitions: (a = [{ defaultValue: null, kind: "LocalArgument", name: "preferences" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "useUpdatePaymentsPreferencesMutation",
                        selections: [
                            {
                                alias: null,
                                args: (r = [
                                    { kind: "Variable", name: "preferences", variableName: "preferences" },
                                    { kind: "Literal", name: "s", value: "4721" },
                                ]),
                                concreteType: null,
                                kind: "LinkedField",
                                name: "update_customer_preferences",
                                plural: !1,
                                selections: [(o = { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "XPaymentsUpdateCustomerPreferencesError", kind: "LinkedField", name: "errors", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null }], storageKey: null }], type: "XPaymentsUpdateCustomerPreferencesFailure", abstractKey: null }), (i = { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "challenge_id", storageKey: null }], type: "XPaymentsUpdateCustomerPreferencesSuccess", abstractKey: null })],
                                storageKey: null,
                            },
                        ],
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: a, kind: "Operation", name: "useUpdatePaymentsPreferencesMutation", selections: [{ alias: null, args: r, concreteType: null, kind: "LinkedField", name: "update_customer_preferences", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }, { kind: "TypeDiscriminator", abstractKey: "__isXPaymentsUpdateCustomerPreferencesResult" }, o, i], storageKey: null }] },
                    params: { id: "FPIMG7UNLnx0q4pSYMg-6Q", metadata: {}, name: "useUpdatePaymentsPreferencesMutation", operationKind: "mutation", text: null },
                };
            l.hash = "9032a3b7dbe58e60ac00947544d3283e";
            const s = l;
        },
        229333: (e, t, n) => {
            n.d(t, { Z: () => u });
            var a = n(202784),
                r = n(466999),
                o = n(325686),
                i = n(392237),
                l = n(674132);
            const s = n.n(l)().e5b0063d;
            let c = 0;
            class d extends a.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${c}`), (c += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        n = s({ title: t });
                    return a.createElement(o.Z, { "aria-labelledby": this._listDomId, role: "region" }, a.createElement(r.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: i.default.visuallyHidden }, t), a.createElement(o.Z, { "aria-label": n }, e));
                }
            }
            const u = d;
        },
        625661: (e, t, n) => {
            n.d(t, { ZP: () => m });
            var a = n(202784),
                r = n(614983),
                o = n.n(r),
                i = n(325686),
                l = n(370006),
                s = n(786998),
                c = n(929028),
                d = n(386802);
            function u(e, t, n) {
                return e || (!t && n ? "fixed" : void 0);
            }
            class m extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            o()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: n, fixed: r, hideBackButton: o, isFullWidth: i, isLarge: c, leftControl: d, middleControl: m, position: p, rightControl: h, secondaryBar: y, style: f, subtitle: g, title: k, titleDomId: b, titleIconCell: C, titleIconCellSize: B, withBackground: _, withWideContainer: x } = this.props,
                        { isModal: w } = this.context,
                        Z = o ? d : a.createElement(l.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        v = (function (e, t, n) {
                            return e && !(t && n);
                        })(!!_, w, !!y);
                    return a.createElement(a.Fragment, null, a.createElement(s.Z, { centerTitle: t, centeredLogo: n, isFullWidth: i, isLarge: c, leftControl: Z, middleControl: m, position: u(p, w, r), rightControl: h, style: f, subtitle: g, title: k, titleDomId: b, titleIconCell: C, titleIconCellSize: B, withBackground: v, withWideContainer: x }), y || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        n = c.Z.getBackgroundStyles();
                    return t ? a.createElement(i.Z, { style: !!e && n }, this._renderContent()) : this._renderContent();
                }
            }
            (m.contextType = d.Z), (m.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        774426: (e, t, n) => {
            n.r(t), n.d(t, { default: () => u });
            n(136728);
            var a = n(202784),
                r = n(811176),
                o = n(190286),
                i = n(674132),
                l = n.n(i),
                s = n(912021);
            const c = l().cfd2f35e;
            class d extends a.Component {
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
                        (this._getMemoizedProcessedActionItems = (0, s.Z)((e, t, n, a) =>
                            e.reduce((e, { Icon: r, confirmation: o, disabled: i, excludeFromActionMenu: l, isEmphasized: s, link: c, onClick: d, subText: u, testID: m, text: p, withCancelButton: h }, y) => {
                                if (!l) {
                                    const l = d
                                        ? () => {
                                              o ? (o.render ? a({ cancelCallback: o.onCancel, confirmCallback: d, render: o.render }) : a({ cancelCallback: o.onCancel, confirmCallback: d, text: o.text, headline: o.headline, label: o.label, confirmButtonType: o.confirmButtonType, withCancelButton: o.withCancelButton })) : (d(), n());
                                          }
                                        : n;
                                    e.push({ disabled: i, Icon: r, isEmphasized: s, testID: m, subText: u, text: p, onClick: l, link: c, withBottomBorder: t && t.includes(y) });
                                }
                                return e;
                            }, []),
                        ));
                }
                render() {
                    const { onClose: e } = this.props,
                        { activeConfirmation: t } = this.state;
                    return t ? this._renderConfirmation(t) : a.createElement(r.Z, { cancelButtonLabel: c, items: this._getProcessedActionItems(), onCloseRequested: e });
                }
                _renderConfirmation(e) {
                    if (e && e.render) return e.render(this._handleConfirmed, this._handleCancelConfirm);
                    {
                        const { confirmButtonType: t, headline: n, label: r, text: i, withCancelButton: l } = e || {};
                        return a.createElement(o.Z, { confirmButtonLabel: r, confirmButtonType: t, headline: n, onCancel: this._handleCancelConfirm, onConfirm: this._handleConfirmed, text: i, withCancelButton: l });
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
            var a = n(202784),
                r = n(325686),
                o = n(392237);
            class i extends a.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return a.createElement(r.Z, { style: l.root });
                }
            }
            const l = o.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                s = i;
        },
        980407: (e, t, n) => {
            n.d(t, { Z: () => y, w: () => p });
            var a = n(202784),
                r = n(325686),
                o = n(108362),
                i = n(386802),
                l = n(392237),
                s = n(652904),
                c = n(555079),
                d = n(625661),
                u = n(449067),
                m = n(715601);
            class p extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: n, backLocation: o, centerTitle: i, hideBackButton: l, history: s, isFullWidth: u, isLarge: m, middleControl: p, onBackClick: y, rightControl: f, secondaryBar: g, subtitle: k, title: b } = this.props,
                                { isModal: C } = this.context;
                            return a.createElement(r.Z, { style: C ? [h.childViewAppBarRoot, h.appBarZindex] : h.appBarZindex }, a.createElement(d.ZP, { backButtonType: n || (C ? "close" : "back"), backLocation: o, centerTitle: i, fixed: !C, hideBackButton: l, history: s, isFullWidth: u, isLarge: m, middleControl: p, onBackClick: y, ref: e, rightControl: f, secondaryBar: g, style: [C && h.appBarModal, t], subtitle: k, title: b, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: n } = this.context;
                            t && (n ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: n, containerStyle: i, documentTitle: l, isFullWidth: c, isLarge: d, renderHeader: p, title: y, withoutBottomBarMobile: f } = this.props,
                        { isModal: g } = this.context,
                        k = p ? p(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return a.createElement(s.Z, null, a.createElement(u.Z.Configure, { documentTitle: l, headerless: !0, title: y }), a.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [h.root, g && h.rootModal] }, !g && k, a.createElement(o.Z, { isFullWidth: c, isLarge: d, style: [h.container, g && h.containerModal, i] }, g ? a.createElement(m.Z, { style: h.viewport }, k, n) : n), t ? a.createElement(r.Z, { style: [h.bottomBarModal, !g && !f && h.bottomBarMobile] }, a.createElement(o.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (p.defaultProps = { isFullWidth: !1, isLarge: !1 }), (p.contextType = i.Z);
            const h = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: l.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                y = p;
        },
        965245: (e, t, n) => {
            n.d(t, { Z: () => s });
            var a = n(807896),
                r = n(202784),
                o = n(229333),
                i = n(414939),
                l = n(334346);
            const s = ({ accessibilityTitle: e, footer: t = r.createElement(i.Z, null), ...n }) => {
                const s = r.createElement(l.C, (0, a.Z)({}, n, { footer: t }));
                return e ? r.createElement(o.Z, { title: e }, s) : s;
            };
        },
        507651: (e, t, n) => {
            n.d(t, { Z: () => c });
            var a = n(807896),
                r = n(202784),
                o = n(107267),
                i = n(403556),
                l = n(791632);
            const s = (e) => {
                    const t = (0, o.useHistory)();
                    return r.createElement(i.Z, (0, a.Z)({}, e, { isCompact: (0, l.HD)(t) }));
                },
                c = r.memo(s);
        },
        652904: (e, t, n) => {
            n.d(t, { Z: () => d });
            var a = n(202784),
                r = n(500002),
                o = n(668214),
                i = n(997174),
                l = n(118823);
            const s = (0, o.Z)()
                .propsFromActions(() => ({ updateLocation: l.YF, updateTweetDetailNav: i.NH }))
                .withAnalytics();
            class c extends a.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: n, search: a },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: o, search: i },
                            locationKey: l,
                        } = e;
                    let s = !1;
                    t.pathname !== n ? (this._isInBackground = !0) : this._isInBackground && t.pathname === n && ((this._isInBackground = !1), (s = !0));
                    const c = r || l;
                    ((c && r !== l) || (!c && n !== o) || a !== i || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: n, updateTweetDetailNav: a } = e;
                    t.scribePageImpression(), n(t.contextualScribeNamespace, t.contextualScribeData), a(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, r.ZP)(s(c));
        },
        547195: (e, t, n) => {
            n.r(t), n.d(t, { default: () => B });
            n(136728);
            var a = n(202784),
                r = n(107267),
                o = n(154003),
                i = n(80361),
                l = n(952793),
                s = n(445664),
                c = n(983304),
                d = n(698478),
                u = n(725516),
                m = n(883229);
            const p = "Send or Request",
                h = { label: p },
                y = a.createElement(i.default, null),
                f = { context: "PaymentsProfileButton" },
                g = { type: "CustomRetry", content: () => null },
                k = ({ buttonStyle: e, userId: t }) => {
                    const n = (0, u.z)(),
                        i = (0, r.useHistory)(),
                        { permissions: l } = (0, s.Z)({ fetchKey: "UserProfile" }),
                        c = (0, d.nK)(l),
                        m = a.useCallback(() => {
                            t && (n.scribe({ section: "x-payments-profile", element: "payments", action: "click" }), i.push("/i/money/transfer", { userId: t, step: "reviewPane" }));
                        }, [n, i, t]);
                    return c ? a.createElement(o.ZP, { accessibilityLabel: p, hoverLabel: h, icon: y, onPress: m, style: e, testID: "paymentsFromProfile", type: "primaryOutlined" }) : null;
                },
                b = (e) => {
                    const [t] = (0, c.Z)({ allowLockedSession: !0 });
                    return a.createElement(m.N, { errorConfig: f, fallback: g }, t ? a.createElement(k, e) : null);
                },
                C = (e) => ((0, l.hC)("payments_enabled") ? a.createElement(m.N, { errorConfig: f, fallback: g }, a.createElement(b, e)) : null),
                B = a.memo(C);
        },
        198433: (e, t, n) => {
            e.exports = n.p + "illustration-traffic-light.1da0d6da.png";
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Payments-a2dee9c7.7cec8e0a.js.map
