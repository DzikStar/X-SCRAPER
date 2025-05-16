"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SettingsProfessionalProfile-e019dbda"],
    {
        625661: (e, t, o) => {
            o.d(t, { ZP: () => u });
            var n = o(202784),
                r = o(614983),
                a = o.n(r),
                i = o(325686),
                s = o(370006),
                l = o(786998),
                c = o(929028),
                d = o(386802);
            function p(e, t, o) {
                return e || (!t && o ? "fixed" : void 0);
            }
            class u extends n.Component {
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: r, hideBackButton: a, isFullWidth: i, isLarge: c, leftControl: d, middleControl: u, position: m, rightControl: f, secondaryBar: b, style: h, subtitle: y, title: g, titleDomId: k, titleIconCell: C, titleIconCellSize: _, withBackground: B, withWideContainer: Z } = this.props,
                        { isModal: w } = this.context,
                        E = a ? d : n.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        L = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!B, w, !!b);
                    return n.createElement(n.Fragment, null, n.createElement(l.Z, { centerTitle: t, centeredLogo: o, isFullWidth: i, isLarge: c, leftControl: E, middleControl: u, position: p(m, w, r), rightControl: f, style: h, subtitle: y, title: g, titleDomId: k, titleIconCell: C, titleIconCellSize: _, withBackground: L, withWideContainer: Z }), b || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = c.Z.getBackgroundStyles();
                    return t ? n.createElement(i.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (u.contextType = d.Z), (u.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => b, w: () => m });
            var n = o(202784),
                r = o(325686),
                a = o(108362),
                i = o(386802),
                s = o(392237),
                l = o(652904),
                c = o(555079),
                d = o(625661),
                p = o(449067),
                u = o(715601);
            class m extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: a, centerTitle: i, hideBackButton: s, history: l, isFullWidth: p, isLarge: u, middleControl: m, onBackClick: b, rightControl: h, secondaryBar: y, subtitle: g, title: k } = this.props,
                                { isModal: C } = this.context;
                            return n.createElement(r.Z, { style: C ? [f.childViewAppBarRoot, f.appBarZindex] : f.appBarZindex }, n.createElement(d.ZP, { backButtonType: o || (C ? "close" : "back"), backLocation: a, centerTitle: i, fixed: !C, hideBackButton: s, history: l, isFullWidth: p, isLarge: u, middleControl: m, onBackClick: b, ref: e, rightControl: h, secondaryBar: y, style: [C && f.appBarModal, t], subtitle: g, title: k, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: i, documentTitle: s, isFullWidth: c, isLarge: d, renderHeader: m, title: b, withoutBottomBarMobile: h } = this.props,
                        { isModal: y } = this.context,
                        g = m ? m(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return n.createElement(l.Z, null, n.createElement(p.Z.Configure, { documentTitle: s, headerless: !0, title: b }), n.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [f.root, y && f.rootModal] }, !y && g, n.createElement(a.Z, { isFullWidth: c, isLarge: d, style: [f.container, y && f.containerModal, i] }, y ? n.createElement(u.Z, { style: f.viewport }, g, o) : o), t ? n.createElement(r.Z, { style: [f.bottomBarModal, !y && !h && f.bottomBarMobile] }, n.createElement(a.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (m.defaultProps = { isFullWidth: !1, isLarge: !1 }), (m.contextType = i.Z);
            const f = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: s.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                b = m;
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
        206727: (e, t, o) => {
            o.d(t, { Z: () => r });
            const n = "/i/professionals",
                r = { root: n, home: "/home", promotions: `${n}/promotions`, advancedTools: `${n}/advanced-tools` };
        },
        262316: (e, t, o) => {
            o.d(t, { _: () => l });
            var n = o(202784),
                r = o(443781),
                a = o(736063),
                i = o(615027);
            function s(e) {
                const { WrappedComponent: t, errorConfig: o, suspenseFallback: s } = e,
                    { viewerUserId: l } = n.useContext(r.rC);
                return l ? n.createElement(a.H, { errorConfig: o, suspenseFallback: s }, n.createElement(t, { viewerUserId: l })) : n.createElement(i.Z, { to: "/login" });
            }
            function l(e, t, o) {
                return () => n.createElement(s, { WrappedComponent: e, errorConfig: t, suspenseFallback: o });
            }
        },
        3405: (e, t, o) => {
            o.r(t), o.d(t, { default: () => be, professionalProfileQuery: () => fe });
            var n = o(100863),
                r = o(202784),
                a = (o(585488), o(535338)),
                i = o(615027),
                s = o(262316),
                l = o(911976),
                c = o(186437),
                d = o(614983),
                p = o.n(d),
                u = o(325686),
                m = o(277660),
                f = o.n(m),
                b = o(107267),
                h = o(682830),
                y = o(779610),
                g = o(954110),
                k = o(242454),
                C = o(392237),
                _ = o(332920),
                B = o.n(_),
                Z = o(980407),
                w = o(443781),
                E = o(725516),
                L = o(206727),
                x = o(953110),
                v = o(351743),
                P = o.n(v),
                T = o(71620),
                I = o(125363),
                S = o(601576),
                F = o(919022);
            function M(e, t) {
                if (!t) return F.ZP.patchUser(e, { professional: void 0 });
                p()(t?.category && t?.professional_type, "professional must be defined");
                const o = t?.category?.[0];
                p()(o?.id && o?.name, "category must be defined");
                const n = { rest_id: e, professional_type: t.professional_type, category: [{ id: o.id, name: o.name, display: !!o.display, icon_name: o.icon_name }] };
                return F.ZP.patchUser(e, { professional: n });
            }
            const R = B().db483090,
                A = x.Z;
            var W = o(635792),
                z = o(468811),
                D = o.n(z);
            const U = W.Z;
            var N = o(881102);
            const V = { Personal: B().db483090, Business: B().c701200c, Creator: B().acd8da0a },
                G = N.Z;
            function O(e) {
                return { section: "switch_account_type", component: e, action: "click" };
            }
            function H(e) {
                return { section: "switch_account_type", component: e, element: "confirmation", action: "click" };
            }
            var j = o(138099),
                K = o(731708),
                Q = o(154003),
                $ = o(708852);
            const q = B().cfd2f35e,
                J = { menuItemLabel: B().cb55ecce, cancelLabel: B().cfd2f35e, confirmationActionLabel: B().h4aeb984, confirmationTitleLabel: B().ada6073a, confirmationDescriptionLabel: B().eb723d4c },
                Y = { menuItemLabel: B().hbb1af08, cancelLabel: B().a9b5e3aa, confirmationActionLabel: B().ia49207a, confirmationTitleLabel: B().g3f74902, confirmationDescriptionLabel: B().f3bcfac0 },
                X = { menuItemLabel: B().d0c3f02e, cancelLabel: B().a9b5e3aa, confirmationActionLabel: B().ia49207a, confirmationTitleLabel: B().a01e84e0, confirmationDescriptionLabel: B().e8af8ef4 },
                ee = ({ onClose: e, onSwitchToBusinessAccountConfirm: t, onSwitchToCreatorAccountConfirm: o, onSwitchToNonProfessionalConfirm: n, professionalType: a }) => {
                    const i = (0, E.z)(),
                        [s, l] = r.useState(!1),
                        [c, d] = r.useState(!1),
                        [p, m] = r.useState(!1),
                        f = (t, o, n, a) => r.createElement(j.Z, { enableMaskForDismiss: !0, onMaskClick: e, style: n && te.roundedBorders, type: "bottom", withMask: !0 }, r.createElement(u.Z, { style: b(n) }, r.createElement(u.Z, { style: te.centeredContent }, r.createElement(u.Z, { style: te.innerContent }, r.createElement(u.Z, { style: te.body }, r.createElement(K.ZP, { align: "left", size: "title3", style: te.headline, weight: "heavy" }, t.confirmationTitleLabel), r.createElement(K.ZP, { align: "left", color: "gray700", weight: "normal" }, t.confirmationDescriptionLabel)), r.createElement(Q.ZP, { onPress: o, size: "xLarge", style: te.button, type: a ? "destructiveFilled" : "primaryFilled" }, t.confirmationActionLabel), r.createElement(Q.ZP, { onPress: e, size: "xLarge", style: te.button, type: "primaryOutlined" }, t.cancelLabel))))),
                        b = (e) => [te.root, e && te.centeredContent],
                        h = (0, $.D2)();
                    return r.createElement(
                        j.Z,
                        { enableMaskForDismiss: !0, onMaskClick: e, style: h && te.roundedBorders, type: h ? "center" : "bottom", withMask: !0 },
                        r.createElement(
                            u.Z,
                            { "aria-modal": !0, role: "dialog", style: b(h) },
                            r.createElement(
                                u.Z,
                                { style: te.content },
                                r.createElement(
                                    Q.ZP,
                                    {
                                        onPress: () => {
                                            i.scribe(O("personal")), l(!0);
                                        },
                                        size: "xLarge",
                                        style: te.button,
                                        type: "primaryFilled",
                                    },
                                    J.menuItemLabel,
                                ),
                                "Business" === a
                                    ? r.createElement(
                                          Q.ZP,
                                          {
                                              onPress: () => {
                                                  i.scribe(O("creator")), m(!0);
                                              },
                                              size: "xLarge",
                                              style: te.button,
                                              type: "primaryFilled",
                                          },
                                          X.menuItemLabel,
                                      )
                                    : r.createElement(
                                          Q.ZP,
                                          {
                                              onPress: () => {
                                                  i.scribe(O("business")), d(!0);
                                              },
                                              size: "xLarge",
                                              style: te.button,
                                              type: "primaryFilled",
                                          },
                                          Y.menuItemLabel,
                                      ),
                                r.createElement(Q.ZP, { onPress: e, size: "xLarge", style: te.button, type: "primaryOutlined" }, q),
                            ),
                        ),
                        s ? f(J, n, h, !0) : null,
                        c ? f(Y, t, h) : null,
                        p ? f(X, o, h) : null,
                    );
                },
                te = C.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, paddingVertical: e.spaces.space12 }, centeredContent: { width: "100%", flexGrow: 1, alignItems: "center", justifyContent: "center" }, content: { margin: e.spaces.space16 }, button: { marginTop: e.spaces.space16, marginHorizontal: e.spaces.space16 }, roundedBorders: { borderRadius: e.borderRadii.xLarge }, innerContent: { maxWidth: "400px", margin: e.spaces.space32 }, headline: { marginBottom: e.spaces.space8 }, body: { marginBottom: e.spaces.space32, justifyContent: "center" }, fullWidth: { width: "100%" } })),
                oe = B().e1f76978,
                ne = B().i0864918,
                re = B().cd9102d4,
                ae = B().eb551aea,
                ie = B().f386777a,
                se = B().d4b6a6e0,
                le = { AboutModule: B().jaaa8984, ShopModule: B().c8b4bca0, CommunitiesModule: B().h02a6fe6 },
                ce = B().jb38600c,
                de = c.Z,
                pe = l.Z;
            function ue(e) {
                const { viewerUserId: t } = e,
                    { featureSwitches: o } = r.useContext(w.rC),
                    n = f()(de, e.professionalRef),
                    a = f()(pe, e.spotlightsRef),
                    [i, s] = r.useState(!1),
                    l = (0, E.z)(),
                    c = (0, b.useHistory)(),
                    d = (function (e, t) {
                        const [o] = P()(G),
                            n = (0, T.po)(),
                            a = (0, I.I0)();
                        return r.useCallback(
                            (r) => {
                                o({
                                    variables: { userId: e, professionalType: r },
                                    onCompleted: () => {
                                        a((0, S.fz)({ text: V[r] })), a(M(e, { ...t, professional_type: r }));
                                    },
                                    optimisticResponse: { user_change_professional_account_type_v2: { user_results: { result: { __typename: "User", id: e, professional: { id: D().v4(), professional_type: r } } } } },
                                    onError: (e) => {
                                        n(e);
                                    },
                                });
                            },
                            [a, n, e, t, o],
                        );
                    })(t, n),
                    m = (function (e, t) {
                        const [o] = P()(U),
                            n = (0, T.po)(),
                            a = (0, I.I0)();
                        return r.useCallback(
                            (r) => {
                                const i = t?.category?.[0];
                                p()(i?.id && i?.name, "category must be defined");
                                const s = { ...i, display: r };
                                o({
                                    variables: { userId: e, displayCategory: r },
                                    optimisticResponse: { user_update_professional_category_display: { user_results: { result: { __typename: "User", id: e, professional: { id: D().v4(), category: [s] } } } } },
                                    onCompleted: () => {
                                        a(M(e, { ...t, category: [s] }));
                                    },
                                    onError: (e) => {
                                        n(e);
                                    },
                                });
                            },
                            [a, n, e, t, o],
                        );
                    })(t, n),
                    h = (function (e) {
                        const [t] = P()(A),
                            o = (0, T.po)(),
                            n = (0, I.I0)();
                        return r.useCallback(() => {
                            t({
                                variables: { userId: e },
                                onCompleted: () => {
                                    n((0, S.fz)({ text: R })), n(M(e, void 0));
                                },
                                onError: (e) => {
                                    o(e);
                                },
                            });
                        }, [n, o, e, t]);
                    })(t),
                    C = r.useCallback(() => {
                        c.goBack({ backLocation: "/settings/profile" });
                    }, [c]);
                r.useEffect(() => {
                    l.scribe({ section: "category_label_switch", action: "impression" });
                }, [l]);
                const _ = n?.category?.[0],
                    B = _?.display ?? !0,
                    x = (e) => {
                        e.preventDefault(), l.scribe({ section: "switch_account_type", action: "click" }), s(!0);
                    },
                    v = () => {
                        l.scribe({ section: "category", action: "click" });
                    },
                    F = () => {
                        l.scribe({ section: "category_label_switch", action: "click" }), m(!B);
                    },
                    W = () => {
                        s(!1);
                    },
                    z = () => {
                        l.scribe(H("personal")), h(), c.location.state?.previousPath !== L.Z.root && (s(!1), C());
                    },
                    N = (e) => () => {
                        const t = "Creator" === e ? "creator" : "business";
                        l.scribe(H(t)), d(e), s(!1);
                    },
                    O = o.isTrue("responsive_web_profile_spotlight_v0_config");
                return r.createElement(
                    Z.Z,
                    { "aria-hidden": i, backButtonType: "back", history: c, onBackClick: C, title: oe },
                    r.createElement(
                        u.Z,
                        { style: me.container },
                        r.createElement(y.Z, { description: _?.name ?? re, label: ne, link: "/i/flow/update_professional_category", onPress: v }),
                        r.createElement(g.Z, { checked: B, label: ae, name: "display_map", onChange: F, type: "switch" }),
                        O &&
                            (() => {
                                const e = a?.v1?.[0]?.profile_module.__typename,
                                    t = e ? le[e] : ce;
                                return r.createElement(y.Z, { description: t, label: se, link: "/settings/professional_profile/profile_spotlight" });
                            })(),
                        r.createElement(k.Z, { align: "left", color: "primary", label: ie, onPress: x }),
                        (() => {
                            p()(!!n?.professional_type, "professional.professional_type must be defined");
                            const e = n.professional_type;
                            return i ? r.createElement(ee, { onClose: W, onSwitchToBusinessAccountConfirm: N("Business"), onSwitchToCreatorAccountConfirm: N("Creator"), onSwitchToNonProfessionalConfirm: z, professionalType: e }) : null;
                        })(),
                    ),
                );
            }
            ue.Fallback = () => r.createElement(Z.Z, { backButtonType: "back", title: oe }, r.createElement(u.Z, { style: me.container }, r.createElement(h.J, null)));
            const me = C.default.create((e) => ({ container: { paddingBottom: e.spaces.space64 } })),
                fe = n.Z;
            const be = (0, s._)(
                function (e) {
                    const { viewerUserId: t } = e,
                        { user: o } = (0, a.p)(fe, { rest_id: t }, { fetchPolicy: "network-only" });
                    return o.result?.professional && o.result?.profilemodules ? r.createElement(ue, { professionalRef: o.result.professional, spotlightsRef: o.result.profilemodules, viewerUserId: t }) : r.createElement(i.Z, { to: "/settings/profile" });
                },
                { context: "SETTINGS_PROFESSIONAL_PROFILE_SCREEN" },
                r.createElement(ue.Fallback, null),
            );
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SettingsProfessionalProfile-e019dbda.248574fa.js.map
