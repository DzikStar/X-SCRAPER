"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Report-6107ac1a"],
    {
        625661: (e, t, o) => {
            o.d(t, { ZP: () => u });
            var r = o(202784),
                a = o(614983),
                n = o.n(a),
                i = o(325686),
                s = o(370006),
                l = o(786998),
                c = o(929028),
                d = o(386802);
            function p(e, t, o) {
                return e || (!t && o ? "fixed" : void 0);
            }
            class u extends r.Component {
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: a, hideBackButton: n, isFullWidth: i, isLarge: c, leftControl: d, middleControl: u, position: h, rightControl: m, secondaryBar: f, style: g, subtitle: w, title: b, titleDomId: y, titleIconCell: B, titleIconCellSize: v, withBackground: k, withWideContainer: _ } = this.props,
                        { isModal: x } = this.context,
                        C = n ? d : r.createElement(s.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        Z = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!k, x, !!f);
                    return r.createElement(r.Fragment, null, r.createElement(l.Z, { centerTitle: t, centeredLogo: o, isFullWidth: i, isLarge: c, leftControl: C, middleControl: u, position: p(h, x, a), rightControl: m, style: g, subtitle: w, title: b, titleDomId: y, titleIconCell: B, titleIconCellSize: v, withBackground: Z, withWideContainer: _ }), f || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = c.Z.getBackgroundStyles();
                    return t ? r.createElement(i.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (u.contextType = d.Z), (u.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        290402: (e, t, o) => {
            o.d(t, { Z: () => m });
            var r = o(807896),
                a = o(202784),
                n = o(182056),
                i = o(879113),
                s = o(392237),
                l = o(111677),
                c = o.n(l),
                d = o(968478);
            const p = c().aa6e3300,
                u = ({ retryMessage: e, ...t }, o) => {
                    const s = n.Z.isOnline();
                    return a.createElement(i.Z, (0, r.Z)({}, t, { icon: s ? void 0 : a.createElement(d.default, { style: h.icon }), retryMessage: s ? e : p }));
                },
                h = s.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                m = a.forwardRef(u);
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => f, w: () => h });
            var r = o(202784),
                a = o(325686),
                n = o(108362),
                i = o(386802),
                s = o(392237),
                l = o(652904),
                c = o(555079),
                d = o(625661),
                p = o(449067),
                u = o(715601);
            class h extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: n, centerTitle: i, hideBackButton: s, history: l, isFullWidth: p, isLarge: u, middleControl: h, onBackClick: f, rightControl: g, secondaryBar: w, subtitle: b, title: y } = this.props,
                                { isModal: B } = this.context;
                            return r.createElement(a.Z, { style: B ? [m.childViewAppBarRoot, m.appBarZindex] : m.appBarZindex }, r.createElement(d.ZP, { backButtonType: o || (B ? "close" : "back"), backLocation: n, centerTitle: i, fixed: !B, hideBackButton: s, history: l, isFullWidth: p, isLarge: u, middleControl: h, onBackClick: f, ref: e, rightControl: g, secondaryBar: w, style: [B && m.appBarModal, t], subtitle: b, title: y, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: i, documentTitle: s, isFullWidth: c, isLarge: d, renderHeader: h, title: f, withoutBottomBarMobile: g } = this.props,
                        { isModal: w } = this.context,
                        b = h ? h(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return r.createElement(l.Z, null, r.createElement(p.Z.Configure, { documentTitle: s, headerless: !0, title: f }), r.createElement(a.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [m.root, w && m.rootModal] }, !w && b, r.createElement(n.Z, { isFullWidth: c, isLarge: d, style: [m.container, w && m.containerModal, i] }, w ? r.createElement(u.Z, { style: m.viewport }, b, o) : o), t ? r.createElement(a.Z, { style: [m.bottomBarModal, !w && !g && m.bottomBarMobile] }, r.createElement(n.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (h.defaultProps = { isFullWidth: !1, isLarge: !1 }), (h.contextType = i.Z);
            const m = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: s.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                f = h;
        },
        705079: (e, t, o) => {
            o.d(t, { s: () => a });
            var r = o(99107);
            const a = (e) => e === r.p_;
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => d });
            var r = o(202784),
                a = o(500002),
                n = o(668214),
                i = o(997174),
                s = o(118823);
            const l = (0, n.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: i.NH }))
                .withAnalytics();
            class c extends r.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: o, search: r },
                            locationKey: a,
                        } = this.props,
                        {
                            location: { pathname: n, search: i },
                            locationKey: s,
                        } = e;
                    let l = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (l = !0));
                    const c = a || s;
                    ((c && a !== s) || (!c && o !== n) || r !== i || l) && this._performPageUpdates(this.props);
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
            const d = (0, a.ZP)(l(c));
        },
        545334: (e, t, o) => {
            o.d(t, { d: () => a });
            var r = o(111677);
            const a = o.n(r)().gf5e9ea6;
        },
        847607: (e, t, o) => {
            o.d(t, { Aq: () => p, FK: () => b, GS: () => s, N1: () => h, PY: () => u, X6: () => y, cm: () => l });
            o(202784);
            var r = o(111677),
                a = o.n(r),
                n = o(391366),
                i = o(40904);
            const s = a().hb568af4,
                l = a().bb1cbeb6,
                c = (a().h2f62206, a().e67b2d65),
                d = a().f05597b3,
                p = (e) => c({ screenName: e }),
                u = (e) => d({ screenName: e }),
                h = (e, t, o) => {
                    const { muting: r, screen_name: a } = e;
                    return { text: r ? u(a) : p(a), onClick: r ? o : t, Icon: r ? n.default : i.default };
                },
                m = a().h59f52ee,
                f = a().eea0cbee,
                g = a().i29533b3,
                w = a().h129c3c3,
                b = (e) => (e ? ((e) => g({ screenName: e }))(e) : m),
                y = (e) => (e ? ((e) => w({ screenName: e }))(e) : f);
        },
        712816: (e, t, o) => {
            o.d(t, { d: () => a });
            var r = o(111677);
            const a = { defaultToast: { text: o.n(r)().b6878b0a }, showToast: !0 };
        },
        879596: (e, t, o) => {
            o.d(t, { D: () => a });
            var r = o(111677);
            const a = { defaultToast: { text: o.n(r)().ca96fe6e }, showToast: !0 };
        },
        234296: (e, t, o) => {
            o.d(t, { Z: () => i, l: () => n });
            var r = o(147143),
                a = o(856674);
            const n = (e, t) => {
                    const o = e.data?.labels?.find((e) => e.label_type === r.w1.PINNED)?.timestamp,
                        a = t.data?.labels?.find((e) => e.label_type === r.w1.PINNED)?.timestamp;
                    return o ? (a ? o - a : -1) : 1;
                },
                i = ({ sort_event_id: e }, { sort_event_id: t }) => (e ? (t ? (0, a.ZP)(t, e) : 1) : -1);
        },
        198506: (e, t, o) => {
            o.d(t, { Z: () => c, R: () => d });
            var r = o(662678),
                a = o(275365),
                n = o(856674);
            const i = (e = 0) => new Date(Number(e)),
                s = (e, t) => i(e.join_time) - i(t.join_time),
                l = ({ user: e }, { user: t }) => (0, n.ZP)(e.id_str, t.id_str),
                c = (e, t) => {
                    const { created_by_user_id: o, participants: n, type: i } = e,
                        [c, d] = (0, r.Z)(n, ({ user: e }) => e.id_str === t);
                    return d.length
                        ? i === a.eD.GROUP && 1 === d.length
                            ? [...c, ...d]
                            : o
                              ? d.sort(
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
                              : d
                        : c;
                },
                d = (e, t) => (e.includes("-") ? e.replace(t, "").replace(/[e-]/g, "") : null);
        },
        730996: (e, t, o) => {
            o.d(t, { W: () => a, g: () => r });
            o(571372);
            const r = Object.freeze({ AppealTweetWarning: "appealtweet", LimitedDiscoveryAppealTweet: "limiteddiscoveryappealtweet", ProfileOnlyDiscoveryAppealTweet: "profileonlydiscoveryappealtweet", DMConversation: "reportdmconversation", DMMessage: "reportdmconversation", HideCommunityTweet: "hidetweet", Moment: "reportmoment", RemoveCommunityMember: "removecommunitymember", Tweet: "reporttweet", List: "reportlist", User: "reportprofile", Space: "reportspace", AppealSuspension: "appealsuspension", Notification: "notification" });
            function a(e) {
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
        879113: (e, t, o) => {
            o.d(t, { Z: () => h });
            var r = o(202784),
                a = o(476984),
                n = o.n(a),
                i = o(143778),
                s = o(750410),
                l = o(682830);
            const c = "failed",
                d = "loaded",
                p = "loading",
                u = "none";
            class h extends r.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        o = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !o) || !n()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: o, fetchStatus: a, icon: n, loadingMessage: i, onRequestRetry: d, render: h, renderFailure: m, retryMessage: f, retryable: g } = this.props;
                    switch (a) {
                        case c:
                            return g ? r.createElement(s.Z, { icon: n, onRequestRetry: d, retryMessage: f }) : o ? r.createElement(l.m, { failureMessage: o }) : m();
                        case p:
                            return r.createElement(l.J, { "aria-label": e, color: t, loadingMessage: i });
                        case u:
                            return null;
                        default:
                            return h();
                    }
                }
            }
            h.defaultProps = { renderFailure: i.Z, retryable: !0 };
        },
        362075: (e, t, o) => {
            o.d(t, { Z: () => u });
            var r = o(807896),
                a = o(202784),
                n = o(325686),
                i = o(688715),
                s = o(950822),
                l = o(386802),
                c = o(392237);
            class d extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._ref = a.createRef()),
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
                    const { allowClipboardWrite: e, allowForms: t, allowTopNavigation: o, dangerouslyDisableSandbox: r, src: l, style: c, title: d } = this.props,
                        { isModal: u } = this.context,
                        h = ["autoplay", "fullscreen", "web-share", ...(e ? ["clipboard-write"] : [])],
                        m = (0, s.Z)("iframe", { allow: `${h.join("; ")}`, allowFullScreen: !0, onLoad: this.props.onLoad, ref: this._handleRef, src: (0, i.ju)(l), style: p.iframe, title: d, ...(r ? null : { sandbox: `allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts${t ? " allow-forms" : ""}${o ? " allow-top-navigation" : ""}` }) });
                    return a.createElement(n.Z, { style: u ? [p.root, p.modalPadding, c] : [p.root, c] }, m);
                }
            }
            d.contextType = l.t;
            const p = c.default.create((e) => ({ root: { overflow: "auto", WebkitOverflowScrolling: "touch" }, modalPadding: { paddingTop: e.componentDimensions.appBarHeight }, iframe: { borderWidth: 0, flexGrow: 1 } })),
                u = a.forwardRef((e, t) => a.createElement(d, (0, r.Z)({ forwardedRef: t }, e)));
        },
        364837: (e, t, o) => {
            o.d(t, { R: () => c });
            var r = o(19697),
                a = o(549755),
                n = o(205074);
            const i = 1,
                s = 2,
                l = 3,
                c = (e) => {
                    if ((0, n.DS)(e)) {
                        if (e.isGif) {
                            const { height: t, img: o, orientation: n, width: i } = e;
                            return (0, r.$i)(o, i, t, n).then(
                                (e) => (0, r.q8)(e),
                                (e) => {
                                    throw new a.Z("Gif preview could not be generated", l);
                                },
                            );
                        }
                        {
                            const e = new a.Z("The provided image must be a gif", s);
                            return Promise.reject(e);
                        }
                    }
                    {
                        const e = new a.Z("The provided file is not a valid image", i);
                        return Promise.reject(e);
                    }
                };
        },
        662678: (e, t, o) => {
            o.d(t, { G: () => a, Z: () => r });
            o(136728);
            const r = function (e, t) {
                return a(e, t);
            };
            function a(e, t) {
                return e.reduce(
                    (o, r, a) => {
                        const n = t ? t(r, a, e) : !!r;
                        return n && o[0].push(r), !n && o[1].push(r), o;
                    },
                    [[], []],
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Report-6107ac1a.1c6ca04a.js.map
