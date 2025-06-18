"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.BadgeViolationsNotification"],
    {
        625661: (e, t, o) => {
            o.d(t, { ZP: () => p });
            var r = o(202784),
                i = o(614983),
                n = o.n(i),
                a = o(325686),
                l = o(370006),
                s = o(786998),
                c = o(929028),
                d = o(386802);
            function h(e, t, o) {
                return e || (!t && o ? "fixed" : void 0);
            }
            class p extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            n()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: i, hideBackButton: n, isFullWidth: a, isLarge: c, leftControl: d, middleControl: p, position: u, rightControl: m, secondaryBar: g, style: b, subtitle: B, title: f, titleDomId: y, titleIconCell: w, titleIconCellSize: k, withBackground: C, withWideContainer: x } = this.props,
                        { isModal: E } = this.context,
                        _ = n ? d : r.createElement(l.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        Z = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!C, E, !!g);
                    return r.createElement(r.Fragment, null, r.createElement(s.Z, { centerTitle: t, centeredLogo: o, isFullWidth: a, isLarge: c, leftControl: _, middleControl: p, position: h(u, E, i), rightControl: m, style: b, subtitle: B, title: f, titleDomId: y, titleIconCell: w, titleIconCellSize: k, withBackground: Z, withWideContainer: x }), g || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = c.Z.getBackgroundStyles();
                    return t ? r.createElement(a.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (p.contextType = d.Z), (p.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => g, w: () => u });
            var r = o(202784),
                i = o(325686),
                n = o(108362),
                a = o(386802),
                l = o(392237),
                s = o(652904),
                c = o(555079),
                d = o(625661),
                h = o(449067),
                p = o(715601);
            class u extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: n, centerTitle: a, hideBackButton: l, history: s, isFullWidth: h, isLarge: p, middleControl: u, onBackClick: g, rightControl: b, secondaryBar: B, subtitle: f, title: y } = this.props,
                                { isModal: w } = this.context;
                            return r.createElement(i.Z, { style: w ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, r.createElement(d.ZP, { backButtonType: o || (w ? "close" : "back"), backLocation: n, centerTitle: a, fixed: !w, hideBackButton: l, history: s, isFullWidth: h, isLarge: p, middleControl: u, onBackClick: g, ref: e, rightControl: b, secondaryBar: B, style: [w && m.appBarModal, t], subtitle: f, title: y, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: a, documentTitle: l, isFullWidth: c, isLarge: d, renderHeader: u, title: g, withoutBottomBarMobile: b } = this.props,
                        { isModal: B } = this.context,
                        f = u ? u(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return r.createElement(s.Z, null, r.createElement(h.Z.Configure, { documentTitle: l, headerless: !0, title: g }), r.createElement(i.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, B && m.rootModal] }, !B && f, r.createElement(n.Z, { isFullWidth: c, isLarge: d, style: [m.container, B && m.containerModal, a] }, B ? r.createElement(p.Z, { style: m.viewport }, f, o) : o), t ? r.createElement(i.Z, { style: [m.bottomBarModal, !B && !b && m.bottomBarMobile] }, r.createElement(n.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (u.defaultProps = { isFullWidth: !1, isLarge: !1 }), (u.contextType = a.Z);
            const m = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: l.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                g = u;
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => d });
            var r = o(202784),
                i = o(500002),
                n = o(668214),
                a = o(997174),
                l = o(118823);
            const s = (0, n.Z)()
                .propsFromActions(() => ({ updateLocation: l.YF, updateTweetDetailNav: a.NH }))
                .withAnalytics();
            class c extends r.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: o, search: r },
                            locationKey: i,
                        } = this.props,
                        {
                            location: { pathname: n, search: a },
                            locationKey: l,
                        } = e;
                    let s = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (s = !0));
                    const c = i || l;
                    ((c && i !== l) || (!c && o !== n) || r !== a || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: r } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), r(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, i.ZP)(s(c));
        },
        244071: (e, t, o) => {
            o.r(t), o.d(t, { BadgeViolations: () => E, default: () => Z });
            var r = o(202784),
                i = o(325686),
                n = o(731708),
                a = o(946847),
                l = o(879113),
                s = o(392237),
                c = o(111677),
                d = o.n(c),
                h = o(849353),
                p = o(350506),
                u = o(980407),
                m = o(686689),
                g = o(316325),
                b = o(312771),
                B = o(71620),
                f = o(668214),
                y = o(946194);
            const w = (0, f.Z)()
                    .propsFromState(() => ({ badgeViolations: y.XC, fetchStatus: y.Sb }))
                    .adjustStateProps(({ badgeViolations: e, fetchStatus: t }) => ({ badgeViolations: e, fetchStatus: t === b.ZP.NONE ? b.ZP.LOADING : t }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, B.zr)("ACCOUNT_VERIFICATION_NOTIFICATION_SCREEN"), fetchBadgeViolations: y.pD }))
                    .withAnalytics(),
                k = "/notifications",
                C = d().fc2a5c92,
                x = (e) => null;
            class E extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderViolation = (e, t) => {
                            const {
                                    violation_category: o,
                                    violation_desc: { entities: a, text: l },
                                    violation_status: s,
                                    violation_title: c,
                                } = e,
                                d = s === g.Tq.IN_COMPLIANCE ? r.createElement(h.default, { style: [_.icon, _.green] }) : r.createElement(p.default, { style: [_.icon, _.red] });
                            return r.createElement(i.Z, { key: o, style: [_.listItem, t && _.withBottomBorder] }, d, r.createElement(i.Z, { style: _.itemContent }, r.createElement(n.ZP, { style: _.itemTitle }, c), r.createElement(m.Z, { color: "gray700", entities: a, size: "subtext2", text: l })));
                        }),
                        (this._render = () => {
                            const { badgeViolations: e, history: t } = this.props,
                                {
                                    button_text: o,
                                    violation_modal_desc: { entities: i, text: n },
                                    violation_modal_title: l,
                                    violations: s,
                                } = e,
                                c = () => t.goBack({ backLocation: k }),
                                d = r.createElement(m.Z, { entities: i, text: n }),
                                h =
                                    s && s.length
                                        ? r.createElement(
                                              r.Fragment,
                                              null,
                                              s.map((e, t, o) => this._renderViolation(e, t !== o.length - 1)),
                                          )
                                        : null;
                            return r.createElement(a.Z, { actionLabel: o, children: h, contentStyle: _.contentContainer, headline: l, onAction: c, onClose: c, subtext: d });
                        }),
                        (this._handleRequestRetry = () => {
                            const { createLocalApiErrorHandler: e, fetchBadgeViolations: t } = this.props;
                            t().catch(e());
                        });
                }
                componentDidMount() {
                    const { createLocalApiErrorHandler: e, fetchBadgeViolations: t } = this.props;
                    t().catch(e());
                }
                render() {
                    const { fetchStatus: e, history: t } = this.props,
                        o = e === b.ZP.LOADED;
                    return r.createElement(u.Z, { backLocation: k, containerStyle: !o && _.loading, history: t, renderHeader: o ? x : void 0 }, r.createElement(l.Z, { fetchStatus: e, onRequestRetry: this._handleRequestRetry, render: this._render, retryMessage: C, retryable: !0 }));
                }
            }
            const _ = s.default.create((e) => ({ contentContainer: { marginVertical: e.spaces.space16, justifyContent: "center" }, listItem: { flexDirection: "row", paddingVertical: e.spaces.space20, width: "100%" }, withBottomBorder: { borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid" }, icon: { flexShrink: 0, fontSize: e.fontSizes.headline1, marginEnd: e.spaces.space12 }, itemContent: { flexShrink: 1, flexGrow: 1 }, itemTitle: { marginBottom: e.spaces.space2 }, loading: { paddingBottom: e.spaces.space48 }, green: { color: e.colors.green500 }, red: { color: e.colors.magenta500 } })),
                Z = w(E);
        },
        276259: (e, t, o) => {
            o.d(t, { Lw: () => i, Re: () => h, VJ: () => l, ZF: () => p, hv: () => s, ku: () => r, qp: () => n, uv: () => a, v5: () => d });
            o(571372), o(875640), o(694898), o(38857), o(540171), o(157093), o(265688), o(270315), o(592529), o(86943), o(691157), o(543673), o(240753), o(128399);
            function r(e) {
                const t = e.match(/=*$/);
                return t ? Math.floor(0.75 * (e.length - t[0].length)) : 0.75 * e.length;
            }
            function i(e) {
                return new Promise((t, o) => {
                    const r = e.split(/data:|;base64,/);
                    if (Blob)
                        if (3 !== r.length) o(Error("Invalid dataUri"));
                        else if (atob)
                            if (Uint8Array) {
                                const [, e, o] = r,
                                    i = atob(o),
                                    n = i.length,
                                    a = Array(n);
                                for (let e = 0; e < n; e++) a[e] = i.charCodeAt(e);
                                t(new Blob([new Uint8Array(a)], { type: e }));
                            } else o(Error("The Uint8Array type is not available"));
                        else o(Error("The atob API is not available"));
                    else o(Error("The Blob API is not available"));
                });
            }
            const n = (e, t) =>
                    new Promise((o, r) => {
                        const i = new FileReader();
                        t &&
                            (t.signal.onabort = () => {
                                i.abort?.(), r(Error(p));
                            }),
                            (i.onload = (e) => {
                                e.target instanceof FileReader && e.target.result instanceof ArrayBuffer ? o(e.target.result) : r(Error("The FileReader result was not of type ArrayBuffer"));
                            }),
                            (i.onerror = (e) => {
                                r(e);
                            }),
                            i.readAsArrayBuffer(e);
                    }),
                a = (e, t) => {
                    const o = document.createElement("a");
                    (o.href = e), (o.download = t), (o.target = "_blank"), o.click(), o.remove();
                },
                l = (e) =>
                    ((e) =>
                        new Promise((t) => {
                            const o = new Image();
                            (o.onload = function () {
                                const e = document.createElement("canvas");
                                (e.width = o.width), (e.height = o.height), e.getContext("2d").drawImage(o, 0, 0), e.toBlob((e) => t(e), "image/png");
                            }),
                                (o.crossOrigin = "anonymous"),
                                (o.src = e);
                        }))(e).then((e) => navigator.clipboard.write([new ClipboardItem({ "image/png": e })])),
                s = async (e, t) => {
                    if (e.size <= t) return e;
                    let o = e,
                        r = 1;
                    for (; o && o.size > t; )
                        try {
                            r > 0.2 ? ((r *= 0.7), (o = await c(o, 1, r))) : (o = await c(o, 0.7, r));
                        } catch (e) {
                            o = void 0;
                        }
                    return o;
                },
                c = (e, t, o) =>
                    new Promise((r, i) => {
                        const n = new Image();
                        (n.onload = () => {
                            const e = document.createElement("canvas"),
                                i = e.getContext("2d"),
                                a = n.width * t,
                                l = n.height * t;
                            (e.width = a),
                                (e.height = l),
                                i.drawImage(n, 0, 0, a, l),
                                e.toBlob(
                                    (e) => {
                                        r(new File([e], "image.jpeg", { type: "image/jpeg" }));
                                    },
                                    "image/jpeg",
                                    o,
                                );
                        }),
                            (n.onerror = () => i(new Error("Failed to load image while resizing"))),
                            (n.src = URL.createObjectURL(e));
                    }),
                d = ["image/jpeg", "image/png", "image/webp"],
                h = "image/gif",
                p = "Reading aborted";
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.BadgeViolationsNotification.bc232e8a.js.map
