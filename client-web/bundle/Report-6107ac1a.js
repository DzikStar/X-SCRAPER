"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Report-6107ac1a"],
    {
        625661: (e, t, o) => {
            o.d(t, { ZP: () => h });
            var r = o(202784),
                i = o(614983),
                a = o.n(i),
                n = o(325686),
                s = o(370006),
                l = o(786998),
                d = o(929028),
                c = o(386802);
            function p(e, t, o) {
                return e || (!t && o ? "fixed" : void 0);
            }
            class h extends r.Component {
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: i, hideBackButton: a, isFullWidth: n, isLarge: d, leftControl: c, middleControl: h, position: u, rightControl: m, secondaryBar: f, style: w, subtitle: g, title: b, titleDomId: y, titleIconCell: v, titleIconCellSize: B, withBackground: k, withWideContainer: _ } = this.props,
                        { isModal: x } = this.context,
                        C = a ? c : r.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        Z = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!k, x, !!f);
                    return r.createElement(r.Fragment, null, r.createElement(l.Z, { centerTitle: t, centeredLogo: o, isFullWidth: n, isLarge: d, leftControl: C, middleControl: h, position: p(u, x, i), rightControl: m, style: w, subtitle: g, title: b, titleDomId: y, titleIconCell: v, titleIconCellSize: B, withBackground: Z, withWideContainer: _ }), f || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = d.Z.getBackgroundStyles();
                    return t ? r.createElement(n.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = c.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => f, w: () => u });
            var r = o(202784),
                i = o(325686),
                a = o(108362),
                n = o(386802),
                s = o(392237),
                l = o(652904),
                d = o(555079),
                c = o(625661),
                p = o(449067),
                h = o(715601);
            class u extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: a, centerTitle: n, hideBackButton: s, history: l, isFullWidth: p, isLarge: h, middleControl: u, onBackClick: f, rightControl: w, secondaryBar: g, subtitle: b, title: y } = this.props,
                                { isModal: v } = this.context;
                            return r.createElement(i.Z, { style: v ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, r.createElement(c.ZP, { backButtonType: o || (v ? "close" : "back"), backLocation: a, centerTitle: n, fixed: !v, hideBackButton: s, history: l, isFullWidth: p, isLarge: h, middleControl: u, onBackClick: f, ref: e, rightControl: w, secondaryBar: g, style: [v && m.appBarModal, t], subtitle: b, title: y, titleDomId: d.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: n, documentTitle: s, isFullWidth: d, isLarge: c, renderHeader: u, title: f, withoutBottomBarMobile: w } = this.props,
                        { isModal: g } = this.context,
                        b = u ? u(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return r.createElement(l.Z, null, r.createElement(p.Z.Configure, { documentTitle: s, headerless: !0, title: f }), r.createElement(i.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, g && m.rootModal] }, !g && b, r.createElement(a.Z, { isFullWidth: d, isLarge: c, style: [m.container, g && m.containerModal, n] }, g ? r.createElement(h.Z, { style: m.viewport }, b, o) : o), t ? r.createElement(i.Z, { style: [m.bottomBarModal, !g && !w && m.bottomBarMobile] }, r.createElement(a.Z, { isFullWidth: d, isLarge: c }, t)) : null));
                }
            }
            (u.defaultProps = { isFullWidth: !1, isLarge: !1 }), (u.contextType = n.Z);
            const m = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: s.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                f = u;
        },
        705079: (e, t, o) => {
            o.d(t, { s: () => i });
            var r = o(99107);
            const i = (e) => e === r.p_;
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => c });
            var r = o(202784),
                i = o(500002),
                a = o(668214),
                n = o(997174),
                s = o(118823);
            const l = (0, a.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: n.NH }))
                .withAnalytics();
            class d extends r.Component {
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
                            locationKey: s,
                        } = e;
                    let l = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (l = !0));
                    const d = i || s;
                    ((d && i !== s) || (!d && o !== a) || r !== n || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: r } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), r(t.contextualScribeNamespace);
                }
            }
            d.defaultProps = { children: null };
            const c = (0, i.ZP)(l(d));
        },
        545334: (e, t, o) => {
            o.d(t, { d: () => i });
            var r = o(111677);
            const i = o.n(r)().gf5e9ea6;
        },
        847607: (e, t, o) => {
            o.d(t, { Aq: () => p, FK: () => b, GS: () => s, N1: () => u, PY: () => h, X6: () => y, cm: () => l });
            o(202784);
            var r = o(111677),
                i = o.n(r),
                a = o(391366),
                n = o(40904);
            const s = i().hb568af4,
                l = i().bb1cbeb6,
                d = (i().h2f62206, i().e67b2d65),
                c = i().f05597b3,
                p = (e) => d({ screenName: e }),
                h = (e) => c({ screenName: e }),
                u = (e, t, o) => {
                    const { muting: r, screen_name: i } = e;
                    return { text: r ? h(i) : p(i), onClick: r ? o : t, Icon: r ? a.default : n.default };
                },
                m = i().h59f52ee,
                f = i().eea0cbee,
                w = i().i29533b3,
                g = i().h129c3c3,
                b = (e) => (e ? ((e) => w({ screenName: e }))(e) : m),
                y = (e) => (e ? ((e) => g({ screenName: e }))(e) : f);
        },
        234296: (e, t, o) => {
            o.d(t, { Z: () => n, l: () => a });
            var r = o(147143),
                i = o(856674);
            const a = (e, t) => {
                    const o = e.data?.labels?.find((e) => e.label_type === r.w1.PINNED)?.timestamp,
                        i = t.data?.labels?.find((e) => e.label_type === r.w1.PINNED)?.timestamp;
                    return o ? (i ? o - i : -1) : 1;
                },
                n = ({ sort_event_id: e }, { sort_event_id: t }) => (e ? (t ? (0, i.ZP)(t, e) : 1) : -1);
        },
        198506: (e, t, o) => {
            o.d(t, { Z: () => d, R: () => c });
            var r = o(662678),
                i = o(275365),
                a = o(856674);
            const n = (e = 0) => new Date(Number(e)),
                s = (e, t) => n(e.join_time) - n(t.join_time),
                l = ({ user: e }, { user: t }) => (0, a.ZP)(e.id_str, t.id_str),
                d = (e, t) => {
                    const { created_by_user_id: o, participants: a, type: n } = e,
                        [d, c] = (0, r.Z)(a, ({ user: e }) => e.id_str === t);
                    return c.length
                        ? n === i.eD.GROUP && 1 === c.length
                            ? [...d, ...c]
                            : o
                              ? c.sort(
                                    (
                                        (...e) =>
                                        (t, o) =>
                                            e.map((e) => e(t, o)).filter((e) => !!e)[0] || 0
                                    )(
                                        (
                                            (e) =>
                                            ({ user: t }, { user: o }) => {
                                                switch (e) {
                                                    case t.id_str:
                                                        return -1;
                                                    case o.id_str:
                                                        return 1;
                                                    default:
                                                        return 0;
                                                }
                                            }
                                        )(o),
                                        s,
                                        l,
                                    ),
                                )
                              : c
                        : d;
                },
                c = (e, t) => (e.includes("-") ? e.replace(t, "").replace(/[e-]/g, "") : null);
        },
        730996: (e, t, o) => {
            o.d(t, { W: () => i, g: () => r });
            o(571372);
            const r = Object.freeze({ AppealTweetWarning: "appealtweet", LimitedDiscoveryAppealTweet: "limiteddiscoveryappealtweet", ProfileOnlyDiscoveryAppealTweet: "profileonlydiscoveryappealtweet", DMConversation: "reportdmconversation", DMMessage: "reportdmconversation", HideCommunityTweet: "hidetweet", Moment: "reportmoment", RemoveCommunityMember: "removecommunitymember", Tweet: "reporttweet", List: "reportlist", User: "reportprofile", Space: "reportspace", AppealSuspension: "appealsuspension", Notification: "notification" });
            function i(e) {
                switch (e) {
                    case "appealtweet":
                    case "limiteddiscoveryappealtweet":
                    case "profileonlydiscoveryappealtweet":
                    case "reportdmconversation":
                    case "hidetweet":
                    case "reportmoment":
                    case "removecommunitymember":
                    case "reporttweet":
                    case "reportlist":
                    case "reportprofile":
                    case "reportspace":
                    case "appealsuspension":
                    case "notification":
                        return e;
                    default:
                        throw new Error(`unexpected source ${e}`);
                }
            }
        },
        362075: (e, t, o) => {
            o.d(t, { Z: () => h });
            var r = o(807896),
                i = o(202784),
                a = o(325686),
                n = o(688715),
                s = o(950822),
                l = o(386802),
                d = o(392237);
            class c extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._ref = i.createRef()),
                        (this._handleRef = (e) => {
                            (this._ref.current = e), this.props.forwardedRef && ("function" == typeof this.props.forwardedRef ? this.props.forwardedRef(e) : (this.props.forwardedRef.current = e));
                        }),
                        (this._handleMessage = (e) => {
                            const { onMessage: t, reportError: o } = this.props;
                            if (!t || ("string" == typeof e.data && 0 === e.data.indexOf("setImmediate$"))) return;
                            if (e.origin !== `${window.location.protocol}//${window.location.host}`) return o ? o(`Invalid cross-origin postMessage from ${e.origin}`) : null;
                            if (this._ref?.current?.contentWindow !== e.source) return;
                            let r;
                            if ((e.stopImmediatePropagation(), "string" == typeof e.data && "undefined" !== e.data)) {
                                try {
                                    r = JSON.parse(e.data);
                                } catch (t) {
                                    return void (o && o(`Invalid postMessage data from ${e.origin}: ${e.data}`));
                                }
                                t(r);
                            }
                        });
                }
                componentDidMount() {
                    var e;
                    this.props.onMessage && ((e = this._handleMessage), window.addEventListener("message", e, !1));
                }
                componentWillUnmount() {
                    var e;
                    this.props.onMessage && ((e = this._handleMessage), window.removeEventListener("message", e, !1));
                }
                render() {
                    const { allowClipboardWrite: e, allowForms: t, allowTopNavigation: o, dangerouslyDisableSandbox: r, src: l, style: d, title: c } = this.props,
                        { isModal: h } = this.context,
                        u = ["autoplay", "fullscreen", "web-share", ...(e ? ["clipboard-write"] : [])],
                        m = (0, s.Z)("iframe", { allow: `${u.join("; ")}`, allowFullScreen: !0, onLoad: this.props.onLoad, ref: this._handleRef, src: (0, n.ju)(l), style: p.iframe, title: c, ...(r ? null : { sandbox: `allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts${t ? " allow-forms" : ""}${o ? " allow-top-navigation" : ""}` }) });
                    return i.createElement(a.Z, { style: h ? [p.root, p.modalPadding, d] : [p.root, d] }, m);
                }
            }
            c.contextType = l.t;
            const p = d.default.create((e) => ({ root: { overflow: "auto", WebkitOverflowScrolling: "touch" }, modalPadding: { paddingTop: e.componentDimensions.appBarHeight }, iframe: { borderWidth: 0, flexGrow: 1 } })),
                h = i.forwardRef((e, t) => i.createElement(c, (0, r.Z)({ forwardedRef: t }, e)));
        },
        748138: (e, t, o) => {
            o.r(t), o.d(t, { default: () => l });
            var r = o(202784),
                i = o(890601),
                a = o(783427),
                n = o(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        364837: (e, t, o) => {
            o.d(t, { R: () => d });
            var r = o(19697),
                i = o(549755),
                a = o(205074);
            const n = 1,
                s = 2,
                l = 3,
                d = (e) => {
                    if ((0, a.DS)(e)) {
                        if (e.isGif) {
                            const { height: t, img: o, orientation: a, width: n } = e;
                            return (0, r.$i)(o, n, t, a).then(
                                (e) => (0, r.q8)(e),
                                (e) => {
                                    throw new i.Z("Gif preview could not be generated", l);
                                },
                            );
                        }
                        {
                            const e = new i.Z("The provided image must be a gif", s);
                            return Promise.reject(e);
                        }
                    }
                    {
                        const e = new i.Z("The provided file is not a valid image", n);
                        return Promise.reject(e);
                    }
                };
        },
        662678: (e, t, o) => {
            o.d(t, { G: () => i, Z: () => r });
            o(136728);
            const r = function (e, t) {
                return i(e, t);
            };
            function i(e, t) {
                return e.reduce(
                    (o, r, i) => {
                        const a = t ? t(r, i, e) : !!r;
                        return a && o[0].push(r), !a && o[1].push(r), o;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Report-6107ac1a.410aab1a.js.map
