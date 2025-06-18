"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.BadgeViolationsNotification", "icons/IconErrorCircleFillWhite-js"],
    {
        625661: (e, t, o) => {
            o.d(t, { ZP: () => p });
            var r = o(202784),
                i = o(614983),
                a = o.n(i),
                n = o(325686),
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
                            a()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: i, hideBackButton: a, isFullWidth: n, isLarge: c, leftControl: d, middleControl: p, position: u, rightControl: m, secondaryBar: g, style: b, subtitle: f, title: B, titleDomId: y, titleIconCell: w, titleIconCellSize: C, withBackground: k, withWideContainer: E } = this.props,
                        { isModal: x } = this.context,
                        _ = a ? d : r.createElement(l.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        Z = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!k, x, !!g);
                    return r.createElement(r.Fragment, null, r.createElement(s.Z, { centerTitle: t, centeredLogo: o, isFullWidth: n, isLarge: c, leftControl: _, middleControl: p, position: h(u, x, i), rightControl: m, style: b, subtitle: f, title: B, titleDomId: y, titleIconCell: w, titleIconCellSize: C, withBackground: Z, withWideContainer: E }), g || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = c.Z.getBackgroundStyles();
                    return t ? r.createElement(n.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (p.contextType = d.Z), (p.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => g, w: () => u });
            var r = o(202784),
                i = o(325686),
                a = o(108362),
                n = o(386802),
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
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: a, centerTitle: n, hideBackButton: l, history: s, isFullWidth: h, isLarge: p, middleControl: u, onBackClick: g, rightControl: b, secondaryBar: f, subtitle: B, title: y } = this.props,
                                { isModal: w } = this.context;
                            return r.createElement(i.Z, { style: w ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, r.createElement(d.ZP, { backButtonType: o || (w ? "close" : "back"), backLocation: a, centerTitle: n, fixed: !w, hideBackButton: l, history: s, isFullWidth: h, isLarge: p, middleControl: u, onBackClick: g, ref: e, rightControl: b, secondaryBar: f, style: [w && m.appBarModal, t], subtitle: B, title: y, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: n, documentTitle: l, isFullWidth: c, isLarge: d, renderHeader: u, title: g, withoutBottomBarMobile: b } = this.props,
                        { isModal: f } = this.context,
                        B = u ? u(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return r.createElement(s.Z, null, r.createElement(h.Z.Configure, { documentTitle: l, headerless: !0, title: g }), r.createElement(i.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, f && m.rootModal] }, !f && B, r.createElement(a.Z, { isFullWidth: c, isLarge: d, style: [m.container, f && m.containerModal, n] }, f ? r.createElement(p.Z, { style: m.viewport }, B, o) : o), t ? r.createElement(i.Z, { style: [m.bottomBarModal, !f && !b && m.bottomBarMobile] }, r.createElement(a.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (u.defaultProps = { isFullWidth: !1, isLarge: !1 }), (u.contextType = n.Z);
            const m = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: l.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                g = u;
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => d });
            var r = o(202784),
                i = o(500002),
                a = o(668214),
                n = o(997174),
                l = o(118823);
            const s = (0, a.Z)()
                .propsFromActions(() => ({ updateLocation: l.YF, updateTweetDetailNav: n.NH }))
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
                            location: { pathname: a, search: n },
                            locationKey: l,
                        } = e;
                    let s = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (s = !0));
                    const c = i || l;
                    ((c && i !== l) || (!c && o !== a) || r !== n || s) && this._performPageUpdates(this.props);
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
            o.r(t), o.d(t, { BadgeViolations: () => x, default: () => Z });
            var r = o(202784),
                i = o(325686),
                a = o(731708),
                n = o(946847),
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
                f = o(71620),
                B = o(668214),
                y = o(946194);
            const w = (0, B.Z)()
                    .propsFromState(() => ({ badgeViolations: y.XC, fetchStatus: y.Sb }))
                    .adjustStateProps(({ badgeViolations: e, fetchStatus: t }) => ({ badgeViolations: e, fetchStatus: t === b.ZP.NONE ? b.ZP.LOADING : t }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, f.zr)("ACCOUNT_VERIFICATION_NOTIFICATION_SCREEN"), fetchBadgeViolations: y.pD }))
                    .withAnalytics(),
                C = "/notifications",
                k = d().fc2a5c92,
                E = (e) => null;
            class x extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderViolation = (e, t) => {
                            const {
                                    violation_category: o,
                                    violation_desc: { entities: n, text: l },
                                    violation_status: s,
                                    violation_title: c,
                                } = e,
                                d = s === g.Tq.IN_COMPLIANCE ? r.createElement(h.default, { style: [_.icon, _.green] }) : r.createElement(p.default, { style: [_.icon, _.red] });
                            return r.createElement(i.Z, { key: o, style: [_.listItem, t && _.withBottomBorder] }, d, r.createElement(i.Z, { style: _.itemContent }, r.createElement(a.ZP, { style: _.itemTitle }, c), r.createElement(m.Z, { color: "gray700", entities: n, size: "subtext2", text: l })));
                        }),
                        (this._render = () => {
                            const { badgeViolations: e, history: t } = this.props,
                                {
                                    button_text: o,
                                    violation_modal_desc: { entities: i, text: a },
                                    violation_modal_title: l,
                                    violations: s,
                                } = e,
                                c = () => t.goBack({ backLocation: C }),
                                d = r.createElement(m.Z, { entities: i, text: a }),
                                h =
                                    s && s.length
                                        ? r.createElement(
                                              r.Fragment,
                                              null,
                                              s.map((e, t, o) => this._renderViolation(e, t !== o.length - 1)),
                                          )
                                        : null;
                            return r.createElement(n.Z, { actionLabel: o, children: h, contentStyle: _.contentContainer, headline: l, onAction: c, onClose: c, subtext: d });
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
                    return r.createElement(u.Z, { backLocation: C, containerStyle: !o && _.loading, history: t, renderHeader: o ? E : void 0 }, r.createElement(l.Z, { fetchStatus: e, onRequestRetry: this._handleRequestRetry, render: this._render, retryMessage: k, retryable: !0 }));
                }
            }
            const _ = s.default.create((e) => ({ contentContainer: { marginVertical: e.spaces.space16, justifyContent: "center" }, listItem: { flexDirection: "row", paddingVertical: e.spaces.space20, width: "100%" }, withBottomBorder: { borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderBottomStyle: "solid" }, icon: { flexShrink: 0, fontSize: e.fontSizes.headline1, marginEnd: e.spaces.space12 }, itemContent: { flexShrink: 1, flexGrow: 1 }, itemTitle: { marginBottom: e.spaces.space2 }, loading: { paddingBottom: e.spaces.space48 }, green: { color: e.colors.green500 }, red: { color: e.colors.magenta500 } })),
                Z = w(x);
        },
        350506: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                i = o(890601),
                a = o(783427),
                n = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M12 1.75C6.339 1.75 1.75 6.339 1.75 12S6.339 22.25 12 22.25 22.25 17.661 22.25 12 17.661 1.751 12 1.75z" }), r.createElement("path", { d: "M13.25 7L13 12.7c-.32-.121-.658-.189-1-.2-.342.011-.68.079-1 .2L10.75 7h2.5zM12 17c-.828 0-1.5-.672-1.5-1.5S11.172 14 12 14s1.5.672 1.5 1.5S12.828 17 12 17z", fill: "#fff" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
        276259: (e, t, o) => {
            o.d(t, { Lw: () => i, Re: () => h, VJ: () => l, ZF: () => p, hv: () => s, ku: () => r, qp: () => a, uv: () => n, v5: () => d });
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
                                    a = i.length,
                                    n = Array(a);
                                for (let e = 0; e < a; e++) n[e] = i.charCodeAt(e);
                                t(new Blob([new Uint8Array(n)], { type: e }));
                            } else o(Error("The Uint8Array type is not available"));
                        else o(Error("The atob API is not available"));
                    else o(Error("The Blob API is not available"));
                });
            }
            const a = (e, t) =>
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
                n = (e, t) => {
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
                        const a = new Image();
                        (a.onload = () => {
                            const e = document.createElement("canvas"),
                                i = e.getContext("2d"),
                                n = a.width * t,
                                l = a.height * t;
                            (e.width = n),
                                (e.height = l),
                                i.drawImage(a, 0, 0, n, l),
                                e.toBlob(
                                    (e) => {
                                        r(new File([e], "image.jpeg", { type: "image/jpeg" }));
                                    },
                                    "image/jpeg",
                                    o,
                                );
                        }),
                            (a.onerror = () => i(new Error("Failed to load image while resizing"))),
                            (a.src = URL.createObjectURL(e));
                    }),
                d = ["image/jpeg", "image/png", "image/webp"],
                h = "image/gif",
                p = "Reading aborted";
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.BadgeViolationsNotification.b09d8aba.js.map
