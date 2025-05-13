"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.ComposeScheduling-e019dbda"],
    {
        625661: (e, t, i) => {
            i.d(t, { ZP: () => h });
            var n = i(202784),
                s = i(614983),
                r = i.n(s),
                a = i(325686),
                o = i(370006),
                l = i(786998),
                d = i(929028),
                c = i(386802);
            function u(e, t, i) {
                return e || (!t && i ? "fixed" : void 0);
            }
            class h extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            r()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: i, fixed: s, hideBackButton: r, isFullWidth: a, isLarge: d, leftControl: c, middleControl: h, position: m, rightControl: p, secondaryBar: _, style: g, subtitle: f, title: w, titleDomId: y, titleIconCell: T, titleIconCellSize: E, withBackground: b, withWideContainer: x } = this.props,
                        { isModal: C } = this.context,
                        D = r ? c : n.createElement(o.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        S = (function (e, t, i) {
                            return e && !(t && i);
                        })(!!b, C, !!_);
                    return n.createElement(n.Fragment, null, n.createElement(l.Z, { centerTitle: t, centeredLogo: i, isFullWidth: a, isLarge: d, leftControl: D, middleControl: h, position: u(m, C, s), rightControl: p, style: g, subtitle: f, title: w, titleDomId: y, titleIconCell: T, titleIconCellSize: E, withBackground: S, withWideContainer: x }), _ || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        i = d.Z.getBackgroundStyles();
                    return t ? n.createElement(a.Z, { style: !!e && i }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = c.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        290402: (e, t, i) => {
            i.d(t, { Z: () => p });
            var n = i(807896),
                s = i(202784),
                r = i(182056),
                a = i(879113),
                o = i(392237),
                l = i(674132),
                d = i.n(l),
                c = i(968478);
            const u = d().aa6e3300,
                h = ({ retryMessage: e, ...t }, i) => {
                    const o = r.Z.isOnline();
                    return s.createElement(a.Z, (0, n.Z)({}, t, { icon: o ? void 0 : s.createElement(c.default, { style: m.icon }), retryMessage: o ? e : u }));
                },
                m = o.default.create((e) => ({ icon: { color: e.colors.gray700, fontSize: e.spaces.space32 } })),
                p = s.forwardRef(h);
        },
        980407: (e, t, i) => {
            i.d(t, { Z: () => _, w: () => m });
            var n = i(202784),
                s = i(325686),
                r = i(108362),
                a = i(386802),
                o = i(392237),
                l = i(652904),
                d = i(555079),
                c = i(625661),
                u = i(449067),
                h = i(715601);
            class m extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: i, backLocation: r, centerTitle: a, hideBackButton: o, history: l, isFullWidth: u, isLarge: h, middleControl: m, onBackClick: _, rightControl: g, secondaryBar: f, subtitle: w, title: y } = this.props,
                                { isModal: T } = this.context;
                            return n.createElement(s.Z, { style: T ? [p.childViewAppBarRoot, p.appBarZindex] : p.appBarZindex }, n.createElement(c.ZP, { backButtonType: i || (T ? "close" : "back"), backLocation: r, centerTitle: a, fixed: !T, hideBackButton: o, history: l, isFullWidth: u, isLarge: h, middleControl: m, onBackClick: _, ref: e, rightControl: g, secondaryBar: f, style: [T && p.appBarModal, t], subtitle: w, title: y, titleDomId: d.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: i } = this.context;
                            t && (i ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: i, containerStyle: a, documentTitle: o, isFullWidth: d, isLarge: c, renderHeader: m, title: _, withoutBottomBarMobile: g } = this.props,
                        { isModal: f } = this.context,
                        w = m ? m(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return n.createElement(l.Z, null, n.createElement(u.Z.Configure, { documentTitle: o, headerless: !0, title: _ }), n.createElement(s.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [p.root, f && p.rootModal] }, !f && w, n.createElement(r.Z, { isFullWidth: d, isLarge: c, style: [p.container, f && p.containerModal, a] }, f ? n.createElement(h.Z, { style: p.viewport }, w, i) : i), t ? n.createElement(s.Z, { style: [p.bottomBarModal, !f && !g && p.bottomBarMobile] }, n.createElement(r.Z, { isFullWidth: d, isLarge: c }, t)) : null));
                }
            }
            (m.defaultProps = { isFullWidth: !1, isLarge: !1 }), (m.contextType = a.Z);
            const p = o.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: o.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                _ = m;
        },
        745475: (e, t, i) => {
            i.d(t, { Z: () => m });
            var n = i(202784),
                s = i(731708),
                r = i(392237),
                a = i(674132),
                o = i.n(a),
                l = i(674306),
                d = i(566220),
                c = i(349745);
            const u = o().bfb895b1,
                h = r.default.create((e) => ({ icon: { fontSize: e.fontSizes.body, paddingEnd: e.spaces.space12, verticalAlign: "middle" } })),
                m = ({ onPress: e, scheduledFor: t, testID: i }) => {
                    const r = (0, d.R)()(),
                        a = (0, c.o3)(t),
                        o = !!a && (0, c.TO)(t) && !(0, c.Ul)(a, r) && !(0, c.bJ)(a, r),
                        m = Boolean(e);
                    return a && o ? n.createElement(s.ZP, { color: "gray700", onPress: e, size: "subtext2", testID: i, withInteractiveStyling: m }, n.createElement(l.default, { style: h.icon }), u({ date: (0, c.vh)(a), time: (0, c.g6)(a) })) : null;
                };
        },
        507651: (e, t, i) => {
            i.d(t, { Z: () => d });
            var n = i(807896),
                s = i(202784),
                r = i(107267),
                a = i(403556),
                o = i(791632);
            const l = (e) => {
                    const t = (0, r.useHistory)();
                    return s.createElement(a.Z, (0, n.Z)({}, e, { isCompact: (0, o.HD)(t) }));
                },
                d = s.memo(l);
        },
        959587: (e, t, i) => {
            i.d(t, { AM: () => l, ZP: () => h, pX: () => d });
            var n = i(202784),
                s = i(731708),
                r = i(659651),
                a = i(392237),
                o = i(548721);
            const l = "animated_gif",
                d = "video",
                c = (e) => {
                    const { durationInMilliseconds: t, type: i } = e;
                    let a;
                    if (i === l) a = n.createElement(s.ZP, { weight: "bold" }, "GIF");
                    else if ("vine" === i) a = n.createElement(o.default, { "aria-label": "Vine", style: u.icon });
                    else if (i === d && t) {
                        const e = Math.trunc(t / 6e4).toString(),
                            i = Math.trunc((t % 6e4) / 1e3)
                                .toString()
                                .padStart(2, "0");
                        a = n.createElement(s.ZP, { color: "white" }, `${e}:${i}`);
                    }
                    return a ? n.createElement(r.Z, { align: "left" }, a) : null;
                },
                u = a.default.create((e) => ({ icon: { color: e.colors.white } })),
                h = n.memo(c);
        },
        652904: (e, t, i) => {
            i.d(t, { Z: () => c });
            var n = i(202784),
                s = i(500002),
                r = i(668214),
                a = i(997174),
                o = i(118823);
            const l = (0, r.Z)()
                .propsFromActions(() => ({ updateLocation: o.YF, updateTweetDetailNav: a.NH }))
                .withAnalytics();
            class d extends n.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: i, search: n },
                            locationKey: s,
                        } = this.props,
                        {
                            location: { pathname: r, search: a },
                            locationKey: o,
                        } = e;
                    let l = !1;
                    t.pathname !== i ? (this._isInBackground = !0) : this._isInBackground && t.pathname === i && ((this._isInBackground = !1), (l = !0));
                    const d = s || o;
                    ((d && s !== o) || (!d && i !== r) || n !== a || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: i, updateTweetDetailNav: n } = e;
                    t.scribePageImpression(), i(t.contextualScribeNamespace, t.contextualScribeData), n(t.contextualScribeNamespace);
                }
            }
            d.defaultProps = { children: null };
            const c = (0, s.ZP)(l(d));
        },
        566220: (e, t, i) => {
            i.d(t, { R: () => a });
            var n = i(202784);
            const s = () => new Date(),
                r = n.createContext(s),
                a = () => n.useContext(r);
        },
        128225: (e, t, i) => {
            i.d(t, { f: () => n });
            i(543673), i(240753), i(128399), i(571372);
            const n = (e, t = !1, i = !1) =>
                new Promise((n, s) => {
                    const r = new URL(e);
                    i && !e.startsWith("blob:") && r.searchParams.set("grok_timestamp", Date.now().toString());
                    const a = new window.XMLHttpRequest();
                    (a.responseType = "blob"),
                        (a.onreadystatechange = () => {
                            a.readyState === window.XMLHttpRequest.DONE && (200 === a.status ? n(a.response) : s(new Error("Unexpected status code")));
                        }),
                        (a.withCredentials = t),
                        (a.onerror = (e) => s(e)),
                        (a.ontimeout = (e) => s(e)),
                        a.open("GET", r.toString(), !0),
                        a.send();
                });
        },
        943245: (e, t, i) => {
            i.d(t, { It: () => c, mD: () => d, sE: () => o });
            var n = i(899492),
                s = i(733357);
            const r = ["da", "de", "en", "en-gb", "es", "et", "eu", "fi", "fil", "fr", "ga", "gl", "ht", "hu", "id", "it", "lt", "lv", "nl", "no", "ms", "pl", "pt", "sk", "sl", "sv", "tr", "vi"],
                a = { "en-gb": "en", "en-ss": "en", fil: "tl", he: "iw", id: "in", msa: "ms", "xx-lc": "en" },
                o = (e) => {
                    const t = e.toLowerCase();
                    return a[t] || t;
                },
                l = (e, t) => {
                    const i = o(e);
                    return !(r.indexOf(i) > -1 && t < 20) && !("und" === e);
                },
                d = ({ displayTextRange: e, entities: t, language: i, text: r }) => {
                    if (!e || !l(i, e[1] - e[0])) return !1;
                    const a = ((e, t) => {
                            let i = n.Z.getTwemojiEntities(e).map((e) => e.indices);
                            for (const e in t) i = i.concat(t[e].map((e) => e.indices));
                            return i.sort((e, t) => e[0] - t[0]), i;
                        })(r, t),
                        o = ((e, t, i) => {
                            const { accText: n, lastIndex: s } = i.reduce(({ accText: i, lastIndex: n }, s) => (s[1] <= n || t[1] <= s[0] ? { lastIndex: n, accText: i } : { accText: i + e.slice(n, s[0]), lastIndex: s[1] }), { accText: "", lastIndex: t[0] });
                            return n + e.slice(s, t[1]);
                        })(r, e, a);
                    return !(0, s.Z)(o) && l(i, o.length);
                },
                c = (e) => {
                    if (e.includes("-")) return e;
                    if (navigator.language && navigator.language.startsWith(e)) return navigator.language;
                    if (window.Intl && window.Intl.Locale) {
                        const { region: t } = new window.Intl.Locale(e).maximize();
                        return `${e}-${t}`;
                    }
                    return "ar" === e ? "ar-EG" : e;
                };
        },
        964917: (e, t, i) => {
            i.d(t, { FP: () => g, Hf: () => d, Q$: () => f, UD: () => _, V2: () => u, yD: () => p });
            var n = i(439058),
                s = i(499627),
                r = i(917799),
                a = i(312771);
            const o = "scheduledTweets",
                l = { fetchStatus: a.ZP.NONE, scheduledTweets: [] },
                d = "FETCH_SCHEDULED_TWEETS",
                c = Object.freeze({ REQUEST: "rweb/scheduledTweets/FETCH_SCHEDULED_TWEETS_REQUEST", SUCCESS: "rweb/scheduledTweets/FETCH_SCHEDULED_TWEETS_SUCCESS", FAILURE: "rweb/scheduledTweets/FETCH_SCHEDULED_TWEETS_FAILURE" }),
                u = "DELETE_SCHEDULED_TWEET",
                h = Object.freeze({ REQUEST: "rweb/scheduledTweets/DELETE_SCHEDULED_TWEET_REQUEST", SUCCESS: "rweb/scheduledTweets/DELETE_SCHEDULED_TWEET_SUCCESS", FAILURE: "rweb/scheduledTweets/DELETE_SCHEDULED_TWEET_FAILURE" });
            function m(e = l, t) {
                if (!t) return e;
                switch (t.type) {
                    case c.SUCCESS:
                        if (t.payload) return { ...e, fetchStatus: a.ZP.LOADED, scheduledTweets: t.payload };
                        break;
                    case c.FAILURE:
                        return { ...e, fetchStatus: a.ZP.FAILED };
                    case c.REQUEST:
                        return { ...e, fetchStatus: a.ZP.LOADING };
                    case h.SUCCESS: {
                        const { meta: s } = t;
                        return s && s.deleteScheduledTweetId ? { ...e, scheduledTweets: ((i = s.deleteScheduledTweetId), (n = e.scheduledTweets), n.filter((e) => e.rest_id !== i)) } : e;
                    }
                    default:
                        return e;
                }
                var i, n;
                return e;
            }
            s.Z.register({ [o]: m });
            const p = (e) => e[o].scheduledTweets,
                _ = (e) => e[o].fetchStatus,
                g =
                    () =>
                    (e, t, { api: i }) =>
                        (0, r._O)(e, { request: i.withEndpoint(n.Z).fetchScheduledTweets, params: {} })({ actionTypes: c, context: d }).then(() => {}),
                f =
                    (e) =>
                    (t, i, { api: s }) =>
                        (0, r._O)(t, { request: s.withEndpoint(n.Z).deleteScheduledTweet, params: { scheduled_tweet_id: e } })({ actionTypes: h, context: u, meta: { deleteScheduledTweetId: e } });
        },
        214151: (e, t, i) => {
            i.r(t), i.d(t, { FIVE_DAYS_IN_MS: () => M, Schedule: () => H, default: () => W });
            i(136728);
            var n = i(202784),
                s = i(325686),
                r = i(154003),
                a = i(731708),
                o = i(260706),
                l = i(564619),
                d = i(392237),
                c = i(674132),
                u = i.n(c),
                h = i(184605),
                m = i(980407),
                p = i(745475),
                _ = i(566220),
                g = i(943245),
                f = i(349745),
                w = i(668214),
                y = i(964917),
                T = i(390387),
                E = i(601576),
                b = i(632960);
            const x = (e) => {
                    const t = b.E_(e);
                    return b.tS(e)[t].scheduledTweetId;
                },
                C = (0, w.Z)()
                    .propsFromState(() => ({ scheduledFor: b.R5, scheduledTweetId: x, language: T.VT }))
                    .propsFromActions(() => ({ addToast: E.fz, deleteScheduledTweet: y.Q$, updateAllComposers: b.mi }))
                    .withAnalytics({ page: "schedule" }),
                D = { scheduledConfirmationPrimaryAction: "scheduledConfirmationPrimaryAction" },
                S = u().cca7fa72,
                Z = u().fd6a3f30,
                v = u().h735a98e,
                B = u().dbd5d400,
                k = u().g9677c6e,
                I = u().h3701ffe,
                P = u().c5dd0190,
                F = u().edeff232,
                R = u().fddf24b4,
                L = u().d39dc06e,
                A = u().d024efe2,
                M = 432e6,
                U = { year: !0, month: !0, day: !0 },
                z = {};
            function H({ addToast: e, analytics: t, deleteScheduledTweet: i, history: d, language: c, scheduledFor: u, scheduledTweetId: w, updateAllComposers: y }) {
                const T = (0, f.o3)(u),
                    E = !!u,
                    b = n.useRef(),
                    x = (0, _.R)(),
                    [C, H] = n.useState({ dateError: !1, timeError: !1, tooFarInFuture: !1, invalidDateTime: !1 }),
                    W = T || new Date(x().getTime() + M),
                    [O, V] = n.useState({ date: { year: W.getFullYear(), month: W.getMonth() + 1, day: W.getDate() }, time: { hour: W.getHours(), minute: W.getMinutes() } }),
                    N = () => b?.current?.goBack(),
                    j = n.useCallback(() => {
                        w
                            ? i(w)
                                  .then(() => {
                                      y({ updates: { scheduledFor: void 0, scheduledTweetId: void 0 } }), N();
                                  })
                                  .catch(() => {
                                      e({ text: S });
                                  })
                            : (y({ updates: { scheduledFor: void 0 } }), N()),
                            t.scribeAction("clear");
                    }, [e, t, i, w, y]),
                    G = n.useCallback(() => {
                        const e = !!u,
                            i = (0, f.o3)(O),
                            n = x();
                        !i || (0, f.bJ)(i, n) || (0, f.Ul)(i, n) || (y({ updates: { scheduledFor: O } }), N(), t.scribeAction(e ? "update" : "add"));
                    }, [t, x, u, O, y]),
                    Q = n.useCallback(
                        ({ date: e, time: t }) => {
                            const i = (0, f.o3)({ date: e, time: t }),
                                n = x();
                            let s = !1,
                                r = !1,
                                a = !1,
                                o = !1;
                            i && i <= n ? (n.getFullYear() === e.year && n.getMonth() + 1 === e.month && n.getDate() === e.day ? (r = !0) : (s = !0)) : i && (0, f.Ul)(i, n) && ((s = !0), (a = !0)), ((0, h.Z)(e.year) && (0, h.Z)(e.month) && (0, h.Z)(e.day) && (0, h.Z)(t.hour) && (0, h.Z)(t.minute)) || (o = !0), H({ timeError: r, tooFarInFuture: a, dateError: s, invalidDateTime: o });
                        },
                        [x],
                    ),
                    $ = n.useCallback(
                        (e) => {
                            const t = { ...O, time: e };
                            V(t), Q(t);
                        },
                        [O, Q],
                    ),
                    Y = n.useCallback(
                        (e) => {
                            const t = { ...O, date: e };
                            V(t), Q(t);
                        },
                        [O, Q],
                    ),
                    K = n.useCallback(() => d.push("/compose/post/unsent/scheduled"), [d]),
                    X = n.useMemo(() => n.createElement(s.Z, { style: q.bottomBar }, n.createElement(r.ZP, { onPress: K, size: "xSmall", type: "brandText" }, Z)), [K]),
                    J = n.useMemo(() => {
                        const { dateError: e, invalidDateTime: t, timeError: i } = C;
                        return n.createElement(s.Z, { style: q.actionButtonContainer }, T ? n.createElement(r.ZP, { onPress: j, size: "small", style: q.actionButton, type: "primaryText" }, B) : null, n.createElement(r.ZP, { disabled: e || i || t, onPress: G, size: "small", style: q.actionButton, testID: D.scheduledConfirmationPrimaryAction, type: "primaryFilled" }, E ? I : k));
                    }, [C, G, j, E, T]),
                    { date: ee, time: te } = O,
                    { hour: ie, minute: ne } = te,
                    { day: se, month: re, year: ae } = ee,
                    oe = x().getFullYear(),
                    le = oe + 2,
                    de = ((e) => {
                        try {
                            const t = (0, f.o3)(O) || new Date(),
                                i = (0, g.It)(e || "en"),
                                n = t.toLocaleDateString(i),
                                s = t.toLocaleDateString(i, { timeZoneName: "long" }),
                                r = s.indexOf(n);
                            if (r >= 0) {
                                return (s.substring(0, r) + s.substring(r + n.length)).replace(/^[\s,.\-:;]+|[\s,.\-:;]+$/g, "");
                            }
                            return s;
                        } catch (e) {
                            return null;
                        }
                    })(c),
                    { dateError: ce, timeError: ue, tooFarInFuture: he } = C,
                    me = he ? A : L;
                return n.createElement(m.Z, { appBarRef: b, backButtonType: "close", bottomBar: X, documentTitle: v, history: d, rightControl: J, title: v }, n.createElement(s.Z, { style: q.form }, n.createElement(s.Z, { style: q.formItem }, n.createElement(p.Z, { scheduledFor: O })), n.createElement(s.Z, { style: q.formItem }, n.createElement(a.ZP, { color: "gray700" }, F), n.createElement(o.Z, { day: se, errorMessage: ce ? me : "", errors: ce ? U : z, label: F, maxSelectableYear: le, minSelectableYear: oe, month: re, onChange: Y, style: q.date, withCalendar: !0, year: ae })), n.createElement(s.Z, { style: q.formItem }, n.createElement(l.Z, { errorText: ue ? L : "", hour: ie, invalid: ue, label: P, minute: ne, onChange: $ })), de && n.createElement(s.Z, { style: q.formItem }, n.createElement(a.ZP, { color: "gray700" }, R), n.createElement(a.ZP, { size: "headline1" }, de))));
            }
            const q = d.default.create((e) => ({ actionButtonContainer: { flexDirection: "row" }, actionButton: { marginStart: e.spaces.space12 }, bottomBar: { display: "flex", justifyContent: "flex-start", flexDirection: "row", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, form: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, formItem: { marginBottom: e.spaces.space20 }, date: { marginVertical: 0, marginTop: e.spaces.space2 } })),
                W = C(H);
        },
        867751: (e, t, i) => {
            i.r(t), i.d(t, { Unsent: () => ze, default: () => qe });
            i(571372), i(136728);
            var n = i(202784),
                s = i(325686),
                r = i(457311),
                a = i(822399),
                o = i(154003),
                l = i(190286),
                d = i(96083),
                c = i(952428),
                u = i(392237),
                h = i(674132),
                m = i.n(h),
                p = i(401388),
                _ = i(803810),
                g = i(323265),
                f = i(290402),
                w = i(980407),
                y = i(507651),
                T = i(807896),
                E = i(731708),
                b = i(650028),
                x = i(126962),
                C = i(591978),
                D = i(451051),
                S = i(47086),
                Z = i(718480),
                v = i(443781),
                B = i(196160),
                k = i(632658);
            const I = "tweetPhoto",
                P = m().f93bb3ee,
                F = m().b321d0cc;
            class R extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderContent = ({ resourceSelectionHandler: e, useMinimumData: t }) => {
                            const { hideAcceptOverlay: i, withLink: s, ...r } = this.props;
                            return n.createElement(B.Z, (0, T.Z)({}, r, { onVariantSelection: e, previewMode: t, testID: I, withLink: s }));
                        });
                }
                render() {
                    const { hideAcceptOverlay: e, images: t } = this.props;
                    return n.createElement(k.Z, { acceptLabel: 1 === t.length ? P : F, hideAcceptOverlay: e, renderContent: this._renderContent, resourceId: t.map((e) => e.url).join(";") });
                }
            }
            R.defaultProps = { hideAcceptOverlay: !1, withCenterCrop: !1 };
            const L = R;
            var A = i(349745),
                M = i(745475),
                U = i(615656),
                z = i(51525);
            const H = m().e43a5528,
                q = { [U.ZP.InternalError]: { toast: (0, z.j)(H) }, showToast: !0 };
            var W = i(71620),
                O = i(668214),
                V = i(669002),
                N = i(964917);
            const j = (0, O.Z)().propsFromActions(({ isDraft: e }) => ({ createLocalApiErrorHandler: e ? (0, W.zr)(V.I4) : (0, W.zr)(N.V2), deleteUnsentTweet: (t) => (e ? (0, V.bR)(t) : (0, N.Q$)(t)) })),
                G = m().d96cf7ce,
                Q = m().cfd2f35e,
                $ = m().d4ab68e2,
                Y = m().abd649ce,
                K = m().c7d42978;
            class X extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { showDiscardConfirmation: !1 }),
                        (this._maybeRenderConfirmationDialog = () => {
                            if (this.state.showDiscardConfirmation) return n.createElement(l.Z, { cancelButtonLabel: Q, confirmButtonLabel: $, confirmButtonType: "destructiveFilled", headline: Y, onCancel: this._handleDiscardCancel, onConfirm: this._handleDiscard, onMaskClick: this._handleDiscardCancel, text: K });
                        }),
                        (this._handleDiscardCancel = () => {
                            this.setState({ showDiscardConfirmation: !1 });
                        }),
                        (this._handleDiscard = () => {
                            const { createLocalApiErrorHandler: e, deleteUnsentTweet: t, unsentTweetId: i } = this.props;
                            this.setState({ showDiscardConfirmation: !1 }), t(i).catch(e(q));
                        }),
                        (this._handleDelete = () => {
                            this.setState({ showDiscardConfirmation: !0 });
                        });
                }
                render() {
                    return n.createElement(n.Fragment, null, n.createElement(o.ZP, { onPress: this._handleDelete, size: "xSmall", style: J.deleteButton, type: "destructiveFilled" }, G), this._maybeRenderConfirmationDialog());
                }
            }
            const J = u.default.create((e) => ({ deleteButton: { marginTop: e.spaces.space12 } })),
                ee = j(X);
            var te = i(959587),
                ie = i(450681);
            const ne = ({ mediaEntities: e, replyUserInfo: t, restID: i, tweetCreateRequest: n, userMentions: s }) => {
                    const { displayRangeEnd: r, displayRangeStart: a } = (0, Z.Z)(n?.status || ""),
                        o =
                            e &&
                            ((e) => {
                                const t = e.map((e) =>
                                    ((e) => {
                                        const t = e?.media_info,
                                            i = t.__typename,
                                            n = e.media_key,
                                            s = e.sensitive_media_warning;
                                        switch (i) {
                                            case "ApiImage":
                                                return { expanded_url: t.original_img_url, original_info: t ? { width: t.original_img_width, height: t.original_img_height } : void 0, media_key: n, media_url_https: t.original_img_url ?? "", id_str: e.media_origin?.id ?? "", ext_alt_text: t.alt_text, sensitive_media_warning: s, type: "photo" };
                                            case "ApiVideo":
                                                return { expanded_url: t.preview_image?.original_img_url ?? "", original_info: t.preview_image ? { width: t.preview_image.original_img_width, height: t.preview_image.original_img_height } : void 0, media_key: n, media_url_https: t.preview_image?.original_img_url ?? "", id_str: e?.media_origin?.id ?? "", ext_alt_text: void 0, type: "video", sensitive_media_warning: s, video_info: { aspect_ratio: t.aspect_ratio ? [t.aspect_ratio.numerator, t.aspect_ratio.denominator] : [1, 1], duration_millis: t.duration_millis, variants: t.variants.map((e) => ({ content_type: e.content_type, bitrate: e.bit_rate, url: e.url })) } };
                                            case "ApiGif":
                                                return { expanded_url: t.preview_image?.original_img_url ?? "", original_info: t.preview_image ? { width: t.preview_image.original_img_width, height: t.preview_image.original_img_height } : void 0, media_key: n, media_url_https: t.preview_image?.original_img_url ?? "", id_str: e.media_origin?.id ?? "", ext_alt_text: t.alt_text, type: "animated_gif", sensitive_media_warning: s, video_info: { aspect_ratio: [1, 1], variants: t.variants.map((e) => ({ content_type: e.content_type, bitrate: e.bit_rate, url: e.url })) } };
                                        }
                                    })(e),
                                );
                                return (0, ie.Z)(t);
                            })(e),
                        l = ((e, t) => {
                            const i = e
                                .map((e) => {
                                    const { id_str: t, indices: i, name: n, screen_name: s } = e;
                                    if (t && i && s && n) return { id_str: t, indices: i, screen_name: s, name: n };
                                })
                                .filter((e) => {
                                    if (e) {
                                        const i = Object.keys(e).length > 0,
                                            n = -1 === t.indexOf(e.id_str);
                                        return i && n;
                                    }
                                    return !1;
                                });
                            return (0, ie.Z)(i);
                        })(s, n?.exclude_reply_user_ids || []);
                    return { created_at: "2000-01-01T00:00:00.000Z", display_text_range: [a, r], entities: { media: o || void 0, user_mentions: l }, extended_entities: { media: o || void 0, user_mentions: l }, favorite_count: 0, favorited: !1, id: 0, id_str: i, in_reply_to_status_id_str: n?.in_reply_to_status_id || void 0, in_reply_to_name: t?.screen_name, in_reply_to_screen_name: t?.screen_name, in_reply_to_user_id_str: t?.id_str, lang: "en", permalink: "/_/status/0", quote_count: 0, is_quote_status: !!n?.attachment_url || void 0, quoted_status_permalink: n?.attachment_url ? { display: n?.attachment_url, expanded: n?.attachment_url, url: n?.attachment_url } : void 0, reply_count: 0, retweet_count: 0, retweeted: !1, source: "", text: n?.status || "", unmentioned_user_ids: n?.exclude_reply_user_ids || void 0, user: { created_at: "", default_profile: !1, default_profile_image: !1, fast_followers_count: 0, favourites_count: 0, follow_request_sent: !1, has_custom_timelines: !1, id: 0, listed_count: 0, location: "", media_count: 0, normal_followers_count: 0, notifications: !1, profile_banner_url: "", show_all_inline_media: !1, statuses_count: 0, time_zone: "", url: "", utc_offset: 0, withheld_in_countries: [], description: "", entities: {}, followed_by: !1, followers_count: 0, following: !1, friends_count: 0, id_str: "0", is_translator: !1, name: "", profile_image_url_https: "", protected: !1, screen_name: "", translator_type: "none", verified: !1, withheld_scope: "" } };
                },
                se = "unsentTweet",
                re = m().f9f69d32,
                ae = m().j74e5dd4,
                oe = m().c5ceafc8,
                le = m().f501ba43;
            class de extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderReplyContext = () => {
                            const { replied_tweet_results: e, tweet_create_request: t } = this.props.unsentTweet,
                                i = e?.result,
                                s = "Tweet" === i?.__typename ? i : void 0;
                            if (!s || (0, p.Z)(s)) return n.createElement(E.ZP, { color: "gray700", size: "subtext2" }, oe);
                            const r = (t && t.exclude_reply_user_ids) || [];
                            let a;
                            s.core && s.core.user_results?.result && "User" === s.core.user_results.result.__typename && (a = s.core.user_results.result);
                            const o = a?.legacy,
                                l = o && o.id_str,
                                d = o && o.screen_name,
                                c = s.legacy && s.legacy.entities,
                                u = (c && c.user_mentions) || [],
                                h = this._getFilteredMentions(u, r),
                                m = n.createElement(b.ZP, { displayTextRange: [280, 280], inReplyToScreenName: d, inReplyToUserIdStr: l, linkType: "none", size: "subtext2", tweetPermalink: "", userMentionsEntities: h });
                            return n.createElement(x.Z, { contextType: "Reply", iconSize: "large", style: ce.socialContext, text: m, weight: "bold", withLeftPadding: !1 });
                        }),
                        (this._handleImageClick = (e) => {
                            e && e.preventDefault();
                        });
                }
                render() {
                    const { unsentTweet: e } = this.props,
                        { media_entities: t, replied_tweet_results: i, tweet_create_request: r } = e,
                        a = e.scheduling_info ? e.scheduling_info.execute_at : void 0,
                        o = e.scheduling_info ? e.scheduling_info.state : void 0,
                        l = i?.result,
                        d = "Tweet" === l?.__typename ? l : void 0,
                        c = this.context.featureSwitches.isTrue("responsive_web_list_tweet_integration_enabled"),
                        u = c
                            ? e.scheduling_info
                                ? ((e) => {
                                      const t = e.tweet_create_request,
                                          i = e.replied_tweet_results?.result,
                                          n = "Tweet" === i?.__typename ? i : void 0,
                                          s = e.replied_tweet_results?.result?.core?.user_results.result.legacy,
                                          r = e.media_entities,
                                          a = n?.legacy?.entities?.user_mentions || [],
                                          o = e.rest_id;
                                      return ne({ mediaEntities: r, replyUserInfo: s, restID: o, tweetCreateRequest: t, userMentions: a });
                                  })(e)
                                : ((e) => {
                                      const t = "PostTweetRequest" === e.tweet_create_request?.type ? e.tweet_create_request : void 0,
                                          i = e.replied_tweet_results?.result,
                                          n = "Tweet" === i?.__typename && "User" === i?.core?.user_results.result?.__typename ? i?.core?.user_results.result?.legacy : void 0,
                                          s = e.media_entities,
                                          r = "Tweet" === i?.__typename ? i?.legacy : void 0,
                                          a = r?.entities?.user_mentions || [],
                                          o = e.rest_id;
                                      return ne({ mediaEntities: s, replyUserInfo: n, restID: o, tweetCreateRequest: t, userMentions: a });
                                  })(e)
                            : void 0;
                    if (!r || "PostTweetRequest" !== r.type) return null;
                    const h = r.attachment_url,
                        m = a ? (0, A.BR)(a) : void 0,
                        _ = r.status || "",
                        g = "Failed" === o,
                        f = r.in_reply_to_status_id,
                        w = Boolean(f && (0, p.Z)(d)),
                        { displayRangeEnd: y, displayRangeStart: b, validRangeEnd: S, validRangeStart: v } = (0, Z.Z)(_),
                        B = S - v < y - b ? `${_.substring(v, S + 1)}...` : _,
                        k = this._getImages(t),
                        I = this._getLabelInfo(t),
                        P = r?.thread_tweets?.length ?? 0;
                    return n.createElement(s.Z, { style: [ce.listItem, g && ce.scheduleFail], testID: se }, c && u ? n.createElement(C.Z, { renderMedia: (e) => n.createElement(C.Z.Media, (0, T.Z)({}, e, { videoOptions: { ...e.videoOptions, hidePreviewPlayButton: !0 } })), renderReplyContext: (e) => (!d || (0, p.Z)(d) ? n.createElement(E.ZP, { color: "gray700", size: "subtext2" }, oe) : n.createElement(C.Z.ReplyContext, (0, T.Z)({}, e, { displayTextRange: [280, 280], linkType: "none", tweetPermalink: "" }))), renderText: (t) => n.createElement(n.Fragment, null, n.createElement(C.Z.Text, (0, T.Z)({}, t, { entities: void 0 })), g || w ? n.createElement(s.Z, { style: ce.leftColumn }, n.createElement(ee, { isDraft: !m, unsentTweetId: e.rest_id })) : null), renderTimestamp: (e) => this._renderLegend(o, m, w, e.id), renderUserAvatar: () => null, renderUserName: () => null, role: "button", tweet: u }) : n.createElement(s.Z, { style: ce.unsentTweet }, n.createElement(s.Z, { style: ce.content }, this._renderLegend(o, m, w)), n.createElement(s.Z, { style: ce.tweetContent }, f && this._renderReplyContext(), h && n.createElement(x.Z, { contextType: "Retweet", iconSize: "large", style: ce.socialContext, text: h, weight: "bold", withLeftPadding: !1 }), n.createElement(s.Z, { style: ce.content }, n.createElement(s.Z, { style: ce.leftColumn }, n.createElement(D.Z, { displayTextRange: [v, S], style: ce.tweetText, text: B }), P > 0 && n.createElement(E.ZP, { color: "gray500", size: "subtext1" }, le({ count: P })), (g || w) && n.createElement(ee, { isDraft: !m, unsentTweetId: e.rest_id })), k.length > 0 && n.createElement(s.Z, { style: [ce.imageContainer, ce.rightColumn] }, n.createElement(L, { cacheLocationKey: "unsentTweets", hideAcceptOverlay: !0, images: k, onClick: this._handleImageClick, singleImageMaxAspectRatio: 1, singleImageMinAspectRatio: 1 }), I && n.createElement(E.ZP, { size: "subtext3" }, n.createElement(te.ZP, { durationInMilliseconds: I.duration, type: I.type })))))));
                }
                _getFilteredMentions(e, t) {
                    return e
                        .map((e) => {
                            const { id_str: t, indices: i, name: n, screen_name: s } = e;
                            return t && i && s && n ? { id_str: t, indices: i, screen_name: s, name: n } : {};
                        })
                        .filter((e) => !!Object.keys(e).length && (!t || t.indexOf(e.id_str) < 0));
                }
                _renderLegend(e, t, i, r) {
                    const a = "Failed" === e;
                    return a || i ? n.createElement(s.Z, { id: r, style: ce.failedView }, n.createElement(S.default, { style: [ce.failed, ce.failedIcon] }), n.createElement(E.ZP, { color: "magenta500" }, a ? re : ae)) : t ? n.createElement(s.Z, { id: r }, n.createElement(M.Z, { scheduledFor: t })) : null;
                }
                _getLabelInfo(e) {
                    if (!e || e.length > 1) return;
                    const { media_info: t } = e[0];
                    if (t) {
                        const e = t.__typename,
                            i = "ApiVideo" === e && t.duration_millis ? t.duration_millis : null;
                        if (i) return { type: te.pX, duration: i };
                        if ("ApiGif" === e) return { type: te.AM };
                    }
                }
                _getImages(e) {
                    return e
                        ? e
                              .map((e) => {
                                  const { media_info: t } = e;
                                  if (!t) return null;
                                  {
                                      const e = t.preview_image ? t.preview_image : t,
                                          i = t.alt_text || "";
                                      if (e.original_img_url && e.original_img_width && e.original_img_height) return { url: e.original_img_url, expandedUrl: e.original_img_url, width: e.original_img_width, height: e.original_img_height, "aria-label": i, backgroundColor: { red: 0, green: 0, blue: 0 }, shouldShowAltLabel: !1, cropCandidates: [] };
                                  }
                              })
                              .filter(Boolean)
                        : [];
                }
            }
            de.contextType = v.rC;
            const ce = u.default.create((e) => ({ content: { flexDirection: "row", flexGrow: 1 }, tweetContent: { flexDirection: "column", flexGrow: 1 }, listItem: { flexGrow: 1, flexDirection: "column", flexShrink: 1 }, imageContainer: { alignSelf: "center", borderRadius: e.borderRadii.small, maxHeight: "75px", overflow: "hidden", width: "75px" }, leftColumn: { alignItems: "flex-start", flex: 1, flexShrink: 1 }, rightColumn: { marginStart: e.spaces.space12 }, socialContext: { marginBottom: e.spaces.space2 }, tweetText: { marginTop: e.spaces.space4, width: "100%" }, failedView: { flexDirection: "row" }, failed: { color: e.colors.magenta500 }, failedIcon: { marginEnd: e.spaces.space4 }, scheduleFail: { opacity: 0.6 }, unsentTweet: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } }));
            var ue = i(128225),
                he = i(716233),
                me = i(122868),
                pe = i(189244),
                _e = i(497294),
                ge = i(601576),
                fe = i(632960);
            const we = (0, O.Z)()
                    .propsFromState(() => ({ draftTweets: V.Fq, draftsFetchStatus: V.UD, scheduledTweets: N.yD, scheduledFetchStatus: N.UD }))
                    .propsFromActions(() => ({ addMedia: _e.rA, setMediaMetadata: _e._B, addToast: ge.fz, createDraftTweetApiErrorHandler: (0, W.zr)(V.CA), createScheduledTweetApiErrorHandler: (0, W.zr)(N.Hf), deleteDraftTweet: V.bR, deleteScheduledTweet: N.Q$, fetchDraftTweets: V.Le, fetchScheduledTweets: N.FP, updateComposerFromUnsentDraft: fe.JF, updateComposerFromUnsentScheduled: fe.qO }))
                    .withAnalytics({ page: "unsent_tweets" }),
                ye = m().d15af6da,
                Te = m().a1e1b748,
                Ee = m().ce80fba0,
                be = m().i63bfbf0,
                xe = m().i5d56b62,
                Ce = m().aef6257e,
                De = m().d4ebc798,
                Se = m().dce0bc34,
                Ze = m().f8464692,
                ve = m().d96cf7ce,
                Be = m().b772cd66,
                ke = m().abd845fe,
                Ie = m().e8bd47f2,
                Pe = m().j2b145d4,
                Fe = m().cfd2f35e,
                Re = m().d96cf7ce,
                Le = m().h6c79ac2,
                Ae = m().d0a4a03c,
                Me = "/compose/post/unsent/drafts";
            class Ue extends Error {
                constructor(e) {
                    super(), (this.failedIds = e);
                }
            }
            class ze extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { isEditingDrafts: !1, isEditingScheduled: !1, selectedDrafts: [], selectedScheduledTweets: [], showDiscardConfirmation: !1, isDeleting: !1, deleteProgress: 0 }),
                        (this._fetchScheduledTweets = () => {
                            const { createScheduledTweetApiErrorHandler: e, fetchScheduledTweets: t } = this.props;
                            t().catch(e());
                        }),
                        (this._fetchDraftTweets = () => {
                            const { createDraftTweetApiErrorHandler: e, fetchDraftTweets: t } = this.props;
                            t().catch(e());
                        }),
                        (this._handleFetchUnsentTweets = () => {
                            this.isDraftsTab && this._fetchDraftTweets(), this.isDraftsTab || this._fetchScheduledTweets();
                        }),
                        (this._scribeAction = (e) => {
                            const { analytics: t } = this.props,
                                i = this.isDraftsTab ? "draft_tweet" : "scheduled_tweet";
                            t.scribe({ component: i, action: e });
                        }),
                        (this._renderContent = () => {
                            const { draftTweets: e, scheduledTweets: t } = this.props;
                            return this.isDraftsTab && e.length ? this._renderUnsentTweets(e) : !this.isDraftsTab && t.length ? this._renderUnsentTweets(t) : n.createElement(r.Z, { header: be, message: xe });
                        }),
                        (this._renderSegmentedControl = () => {
                            const e = [
                                { to: Me, key: Se, label: Se },
                                { to: "/compose/post/unsent/scheduled", key: Ze, label: Ze },
                            ];
                            return n.createElement(y.Z, { "aria-label": De, links: e });
                        }),
                        (this._renderBottomBar = () => {
                            const { deleteProgress: e, isDeleting: t } = this.state,
                                { draftTweets: i, scheduledTweets: r } = this.props;
                            if (r.length || i.length) return n.createElement(s.Z, null, t && n.createElement(a.Z, { ariaValueText: Ce, progress: t ? Math.max(e, 0.02) : 0 }), n.createElement(s.Z, { style: He.bottomBar }, n.createElement(o.ZP, { onPress: this._handleSelectionToggle, style: He.deselectButton, type: "brandText" }, this.selectedTweets.length > 0 ? Pe : Ie), n.createElement(o.ZP, { disabled: !this.selectedTweets.length, onPress: this._handleDelete, type: "destructiveText" }, ve)));
                        }),
                        (this._renderConfirmationDialog = () => {
                            if (this.state.showDiscardConfirmation) return n.createElement(l.Z, { cancelButtonLabel: Fe, confirmButtonLabel: Re, confirmButtonType: "destructiveFilled", headline: Le, onCancel: this._handleDiscardCancel, onConfirm: this._handleDiscard, onMaskClick: this._handleDiscardCancel, text: Ae });
                        }),
                        (this._renderCheckbox = (e) => {
                            const t = this.selectedTweets.includes(e);
                            return n.createElement(d.Z, { checked: t, key: e, onChange: this._handleCheckboxChange(e), style: He.checkbox });
                        }),
                        (this._renderUnsentTweets = (e) =>
                            n.createElement(
                                n.Fragment,
                                null,
                                e.map((e) => {
                                    const { replied_tweet_results: t, rest_id: i, tweet_create_request: s } = e,
                                        r = t?.result,
                                        a = "Tweet" === r?.__typename ? r : void 0,
                                        o = s && "PostTweetRequest" === s.type ? s.in_reply_to_status_id : void 0,
                                        l = Boolean(o && (0, p.Z)(a)),
                                        d = e.scheduling_info ? e.scheduling_info.state : void 0,
                                        u = !this.isEditing && d !== A.X5.FAILED && !l,
                                        h = u ? this._handleClick(e) : void 0,
                                        m = u ? void 0 : "label";
                                    return n.createElement(c.Z, { key: i, onClick: h, role: m, style: He.checkboxContainer }, this.isEditing ? this._renderCheckbox(i) : null, n.createElement(de, { unsentTweet: e }));
                                }),
                                this._renderConfirmationDialog(),
                            )),
                        (this._handleCheckboxChange = (e) => () => {
                            let t;
                            (t = this.selectedTweets && this.selectedTweets.includes(e) ? this.selectedTweets.filter((t) => t !== e) : this.selectedTweets.concat([e])), this._handleUpdateSelectedTweets(t);
                        }),
                        (this._handleSelectionToggle = () => (this.selectedTweets.length ? this._deselectAllTweets() : this._selectAllTweets())),
                        (this._handleDelete = () => {
                            this.setState({ showDiscardConfirmation: !0 }), this._scribeAction("delete_prompt");
                        }),
                        (this._handleDiscardCancel = () => {
                            this.setState({ showDiscardConfirmation: !1 }), this._scribeAction("cancel");
                        }),
                        (this._handleDeletionProgress = (e) => {
                            const { deleteDraftTweet: t, deleteScheduledTweet: i } = this.props,
                                n = this.isDraftsTab ? t : i;
                            let s = 0;
                            return Promise.all(
                                e.map((t) =>
                                    n(t)
                                        .then(() => {
                                            (s += 1), this.setState({ deleteProgress: s / e.length }), this._scribeAction("delete");
                                        })
                                        .catch(() => t),
                                ),
                            ).then((e) => {
                                const t = e.filter(Boolean);
                                if (t.length) throw new Ue(t);
                            });
                        }),
                        (this._handleDiscard = () => {
                            const { addToast: e } = this.props;
                            if (this.selectedTweets.length) {
                                this.setState({ deleteProgress: 0, isDeleting: !0, showDiscardConfirmation: !1 });
                                const t = this.isDraftsTab;
                                this._handleDeletionProgress(this.selectedTweets)
                                    .then(
                                        () => ({ selectedTweets: [], text: Te }),
                                        (e) => ({ selectedTweets: e.failedIds || this.selectedTweets, text: ye }),
                                    )
                                    .then(({ selectedTweets: i, text: n }) => {
                                        this.setState({ deleteProgress: 0, isDeleting: !1 }), this._handleUpdateSelectedTweets(i, t), e({ text: n });
                                    });
                            }
                        }),
                        (this._handleEditing = () => {
                            let e;
                            this.isDraftsTab ? ((e = this.state.isEditingDrafts ? "disable_deletion" : "enable_deletion"), this.setState((e) => ({ isEditingDrafts: !e.isEditingDrafts, selectedDrafts: [] }))) : ((e = this.state.isEditingScheduled ? "disable_deletion" : "enable_deletion"), this.setState((e) => ({ isEditingScheduled: !e.isEditingScheduled, selectedScheduledTweets: [] }))), this._scribeAction(e);
                        }),
                        (this._handleClick = (e) => () => {
                            const t = e.scheduling_info && e.scheduling_info.execute_at;
                            if (!this.isDraftsTab && !t) return;
                            const { rest_id: i, tweet_create_request: n } = e,
                                s = "PostTweetRequest" === n?.type ? n.status : "",
                                r = "PostTweetRequest" === n?.type ? n.richtext_options : void 0,
                                a = "PostTweetRequest" === n?.type ? n.media_options : void 0,
                                o = "PostTweetRequest" === n?.type ? n.in_reply_to_status_id : void 0,
                                l = "PostTweetRequest" === n?.type ? n.attachment_url : void 0,
                                d = l && l.split("/status/")[1].match(pe.Wq.id),
                                c = d ? d[0] : void 0,
                                u = e.media_entities ? (0, A.Dp)(e.media_entities) : {},
                                h = (e.media_entities || []).reduce((e, t) => e || (t.media_origin ? { found_media_origin: t.media_origin } : void 0), void 0),
                                m = n?.thread_tweets ?? [],
                                p = "PostTweetRequest" === n?.type ? n.media_ids : void 0;
                            let g = Promise.resolve([]);
                            const f = u.externalMedia?.map((e) => e.uploadId).filter(Boolean) ?? [];
                            if (u.externalMedia) {
                                const { externalMedia: e } = u;
                                g = Promise.all(e.map(({ url: e }) => (0, ue.f)(e)))
                                    .then((t) => this.props.addMedia(t, { uploadIds: f, location: he.vC.Tweet, isAmplify: e[0].isAmplify }))
                                    .then((t) =>
                                        t.map((t, i) => {
                                            const { altText: n, sensitiveMediaWarning: s } = e[i];
                                            return (n || s) && this.props.setMediaMetadata(t.id, { ...(0, _.Z)(n ? { altText: n } : null), ...(0, _.Z)(s ? { sensitiveMediaWarning: s } : null) }), t.id;
                                        }),
                                    );
                            }
                            g.then((e) => {
                                const n = me.x.modal,
                                    l = e.reduce((e, t, i) => ((e[f[i]] = t), e), {}),
                                    d = p?.map((e) => l[e]);
                                if (this.isDraftsTab) {
                                    const e = { tweetId: i, gifMetadata: h, mediaIds: d, text: s, richtext_options: r, media_options: a, thread_tweets: m.map((e) => ({ text: e.status, media_options: e.media_options, richtext_options: e.richtext_options, mediaIds: e.media_ids?.map((e) => l[e]) ?? [] })) };
                                    this.props.updateComposerFromUnsentDraft({ data: e, parentKey: n });
                                } else {
                                    const e = t ? (0, A.BR)(t) : void 0,
                                        o = { tweetId: i, gifMetadata: h, mediaIds: d, text: s, richtext_options: r, media_options: a, scheduledFor: e, thread_tweets: m.map((e) => ({ text: e.status, media_options: e.media_options, richtext_options: e.richtext_options, mediaIds: e.media_ids?.map((e) => l[e]) ?? [] })) };
                                    this.props.updateComposerFromUnsentScheduled({ data: o, parentKey: n });
                                }
                                this._scribeAction("edit_intent"), this.props.history.push({ pathname: "/compose/post", state: { inReplyToStatusId: o, quotedStatusId: c } });
                            });
                        });
                }
                componentDidMount() {
                    this._handleFetchUnsentTweets();
                }
                render() {
                    const { draftsFetchStatus: e, history: t, scheduledFetchStatus: i } = this.props,
                        r = g.ZP.isMobileOS();
                    return n.createElement(w.Z, { backButtonType: "back", bottomBar: this.isEditing ? this._renderBottomBar() : null, documentTitle: De, history: t, rightControl: this.isEditing ? this._renderDoneButton() : this._renderEditButton(), secondaryBar: this._renderSegmentedControl(), title: De }, n.createElement(s.Z, { style: He.root }, n.createElement(f.Z, { "aria-label": Ee, fetchStatus: this.isDraftsTab ? e : i, onRequestRetry: this._handleFetchUnsentTweets, render: this._renderContent }), this.isEditing && r ? n.createElement(s.Z, { style: He.bottomBarSpacer }) : null));
                }
                _renderDoneButton() {
                    return n.createElement(o.ZP, { onPress: this._handleEditing, size: "small", type: "primaryFilled" }, Be);
                }
                _renderEditButton() {
                    const { draftTweets: e, scheduledTweets: t } = this.props,
                        i = (!this.isDraftsTab && t.length) || (this.isDraftsTab && e.length);
                    if (!this.isEditing && i) return n.createElement(s.Z, null, n.createElement(o.ZP, { onPress: this._handleEditing, size: "small", type: "primaryFilled" }, ke));
                }
                _deselectAllTweets() {
                    this._handleUpdateSelectedTweets([]);
                }
                _selectAllTweets() {
                    const { draftTweets: e, scheduledTweets: t } = this.props,
                        i = (this.isDraftsTab ? e : t).map((e) => e.rest_id);
                    this._handleUpdateSelectedTweets(i);
                }
                _handleUpdateSelectedTweets(e, t = this.isDraftsTab) {
                    t ? this.setState({ selectedDrafts: e }) : this.setState({ selectedScheduledTweets: e });
                }
                get isDraftsTab() {
                    const { location: e } = this.props;
                    return e.pathname === Me;
                }
                get isEditing() {
                    const { isEditingDrafts: e, isEditingScheduled: t } = this.state;
                    return this.isDraftsTab ? e : t;
                }
                get selectedTweets() {
                    const { selectedDrafts: e, selectedScheduledTweets: t } = this.state;
                    return this.isDraftsTab ? e : t;
                }
            }
            const He = u.default.create((e) => ({ deselectButton: { marginEnd: "auto" }, checkboxContainer: { display: "flex", flexDirection: "row", width: "100%", boxSizing: "border-box", borderBottomColor: e.colors.borderColor, borderBottomWidth: e.borderWidths.small }, checkbox: { justifyContent: "center", paddingStart: e.componentDimensions.gutterHorizontal }, root: { height: "600px" }, bottomBar: { display: "flex", justifyContent: "center", flexDirection: "row", padding: e.spaces.space4 }, bottomBarSpacer: { height: e.spaces.space48 } })),
                qe = we(ze);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.ComposeScheduling-e019dbda.20bfe53a.js.map
