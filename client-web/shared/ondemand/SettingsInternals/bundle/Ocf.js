(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~ondemand.SettingsInternals~bundle.Ocf"],
    {
        119146: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => u });
            r(136728);
            var o = r(506899),
                n = r(676145),
                s = r(588960),
                i = r.n(s),
                a = r(318752);
            const l = (e, t, r) => {
                    const o = (0, a.Z)(e, t, r);
                    if (e && "string" == typeof o.vcard) {
                        const e = i().parse(o.vcard),
                            t = (e && e[0]) || null;
                        return { ...o, vcard: t };
                    }
                    return o;
                },
                c = new o.fK.Entity("vcards", {}, { idAttribute: (e) => ((0, n.Z)(e.id) ? e.id : e.id_str), processStrategy: l }),
                d = { count: 100 },
                u = ({ apiClient: e, featureSwitches: t }) => ({
                    fetchAddressBook: (t, r = {}) => e.get("contacts/addressbook", { ...d, ...t }, r).then((e) => (0, o.Fv)(e, { contacts: [c] })),
                    uploadAddressBook(t, r) {
                        const { contacts: o, ...n } = t,
                            s = [];
                        for (let e = 0; e < o.length; e += 100) s.push(o.slice(e, e + 100));
                        return Promise.all(s.map((t) => e.post("contacts/upload_v2", { ...n, contacts: t }, {}, { ...r, "content-type": "application/json" })));
                    },
                });
        },
        229333: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => u });
            var o = r(202784),
                n = r(466999),
                s = r(325686),
                i = r(392237),
                a = r(111677);
            const l = r.n(a)().e5b0063d;
            let c = 0;
            class d extends o.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${c}`), (c += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        r = l({ title: t });
                    return o.createElement(s.Z, { "aria-labelledby": this._listDomId, role: "region" }, o.createElement(n.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: i.default.visuallyHidden }, t), o.createElement(s.Z, { "aria-label": r }, e));
                }
            }
            const u = d;
        },
        625661: (e, t, r) => {
            "use strict";
            r.d(t, { ZP: () => p });
            var o = r(202784),
                n = r(614983),
                s = r.n(n),
                i = r(325686),
                a = r(370006),
                l = r(786998),
                c = r(929028),
                d = r(386802);
            function u(e, t, r) {
                return e || (!t && r ? "fixed" : void 0);
            }
            class p extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            s()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: r, fixed: n, hideBackButton: s, isFullWidth: i, isLarge: c, leftControl: d, middleControl: p, position: h, rightControl: f, secondaryBar: g, style: m, subtitle: b, title: y, titleDomId: v, titleIconCell: k, titleIconCellSize: C, withBackground: E, withWideContainer: w } = this.props,
                        { isModal: x } = this.context,
                        S = s ? d : o.createElement(a.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        _ = (function (e, t, r) {
                            return e && !(t && r);
                        })(!!E, x, !!g);
                    return o.createElement(o.Fragment, null, o.createElement(l.Z, { centerTitle: t, centeredLogo: r, isFullWidth: i, isLarge: c, leftControl: S, middleControl: p, position: u(h, x, n), rightControl: f, style: m, subtitle: b, title: y, titleDomId: v, titleIconCell: k, titleIconCellSize: C, withBackground: _, withWideContainer: w }), g || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        r = c.Z.getBackgroundStyles();
                    return t ? o.createElement(i.Z, { style: !!e && r }, this._renderContent()) : this._renderContent();
                }
            }
            (p.contextType = d.Z), (p.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        414939: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => l });
            var o = r(202784),
                n = r(325686),
                s = r(392237);
            class i extends o.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return o.createElement(n.Z, { style: a.root });
                }
            }
            const a = s.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                l = i;
        },
        980407: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => g, w: () => h });
            var o = r(202784),
                n = r(325686),
                s = r(108362),
                i = r(386802),
                a = r(392237),
                l = r(652904),
                c = r(555079),
                d = r(625661),
                u = r(449067),
                p = r(715601);
            class h extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: r, backLocation: s, centerTitle: i, hideBackButton: a, history: l, isFullWidth: u, isLarge: p, middleControl: h, onBackClick: g, rightControl: m, secondaryBar: b, subtitle: y, title: v } = this.props,
                                { isModal: k } = this.context;
                            return o.createElement(n.Z, { style: k ? [f.childViewAppBarRoot, f.appBarZindex] : f.appBarZindex }, o.createElement(d.ZP, { backButtonType: r || (k ? "close" : "back"), backLocation: s, centerTitle: i, fixed: !k, hideBackButton: a, history: l, isFullWidth: u, isLarge: p, middleControl: h, onBackClick: g, ref: e, rightControl: m, secondaryBar: b, style: [k && f.appBarModal, t], subtitle: y, title: v, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: r } = this.context;
                            t && (r ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: r, containerStyle: i, documentTitle: a, isFullWidth: c, isLarge: d, renderHeader: h, title: g, withoutBottomBarMobile: m } = this.props,
                        { isModal: b } = this.context,
                        y = h ? h(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return o.createElement(l.Z, null, o.createElement(u.Z.Configure, { documentTitle: a, headerless: !0, title: g }), o.createElement(n.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [f.root, b && f.rootModal] }, !b && y, o.createElement(s.Z, { isFullWidth: c, isLarge: d, style: [f.container, b && f.containerModal, i] }, b ? o.createElement(p.Z, { style: f.viewport }, y, r) : r), t ? o.createElement(n.Z, { style: [f.bottomBarModal, !b && !m && f.bottomBarMobile] }, o.createElement(s.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (h.defaultProps = { isFullWidth: !1, isLarge: !1 }), (h.contextType = i.Z);
            const f = a.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: a.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                g = h;
        },
        965245: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => l });
            var o = r(807896),
                n = r(202784),
                s = r(229333),
                i = r(414939),
                a = r(334346);
            const l = ({ accessibilityTitle: e, footer: t = n.createElement(i.Z, null), ...r }) => {
                const l = n.createElement(a.C, (0, o.Z)({}, r, { footer: t }));
                return e ? n.createElement(s.Z, { title: e }, l) : l;
            };
        },
        349035: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => s });
            var o = r(202784),
                n = r(272175);
            const s = (0, r(500002).ZP)(({ staticContext: e, status: t = 404 }) => (e && (e.statusCode = t), o.createElement(n.ql, null, o.createElement("meta", { content: "noindex, nofollow", name: "robots" }))));
        },
        56851: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => g });
            var o = r(202784),
                n = r(420740),
                s = r(108362),
                i = r(731708),
                a = r(154003),
                l = r(392237),
                c = r(111677),
                d = r.n(c),
                u = r(349035);
            const p = "error-detail",
                h = d().e49537c2,
                f = d().a9ae1e78;
            class g extends o.PureComponent {
                render() {
                    return o.createElement(n.Z, { testID: p }, o.createElement(u.Z, null), o.createElement(s.Z, { style: m.root }, o.createElement(i.ZP, { align: "center", color: "gray700", style: m.retryText }, h), o.createElement(a.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, f)));
                }
            }
            const m = l.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        652904: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => d });
            var o = r(202784),
                n = r(500002),
                s = r(668214),
                i = r(997174),
                a = r(118823);
            const l = (0, s.Z)()
                .propsFromActions(() => ({ updateLocation: a.YF, updateTweetDetailNav: i.NH }))
                .withAnalytics();
            class c extends o.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: r, search: o },
                            locationKey: n,
                        } = this.props,
                        {
                            location: { pathname: s, search: i },
                            locationKey: a,
                        } = e;
                    let l = !1;
                    t.pathname !== r ? (this._isInBackground = !0) : this._isInBackground && t.pathname === r && ((this._isInBackground = !1), (l = !0));
                    const c = n || a;
                    ((c && n !== a) || (!c && r !== s) || o !== i || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: r, updateTweetDetailNav: o } = e;
                    t.scribePageImpression(), r(t.contextualScribeNamespace, t.contextualScribeData), o(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, n.ZP)(l(c));
        },
        376293: (e, t, r) => {
            "use strict";
            r.d(t, { $f: () => x, KV: () => b, LI: () => I, SC: () => w, Vt: () => k, ed: () => B, op: () => S });
            var o = r(202784),
                n = r(190286),
                s = r(111677),
                i = r.n(s),
                a = r(616894),
                l = r(314948),
                c = r(516951),
                d = r(163390);
            const u = i().cfd2f35e,
                p = i().f9e45cfb,
                h = i().fcd4d489,
                f = i().a6450e84,
                g = i().g353ad73,
                m = i().ad00a739,
                b = i().a9fd20be,
                y = i().j546fb79,
                v = i().c9623eeb,
                k = i().e133be4e,
                C = i().he43bca4,
                E = i().f5f01af6,
                w = Object.freeze({ TWEET_CARET: "tweet_caret", PROFILE: "user_profile", LIST_DETAIL: "list_detail", RICH_FEEDBACK: "rich_feedback", TWEET: "tweet", FOLLOWERS_LIST: "followers_list" }),
                x = (e, t) => ({ confirmButtonType: "destructiveFilled", headline: p({ screenName: e }), label: f, text: t ? m({ screenName: e }) : g({ screenName: e }) }),
                S = ({ blockAction: e, blockSubtext: t, isSoftBlockEnabled: r, source: o, testID: n, unblockAction: s, unblockSubtext: i, user: a }) => {
                    let l,
                        u = c.Z;
                    const p = I(a, r);
                    switch (o) {
                        case w.PROFILE:
                        case w.LIST_DETAIL:
                        case w.FOLLOWERS_LIST:
                            u = () => {
                                a.blocking ? s(p) : e(p);
                            };
                            break;
                        case w.TWEET:
                        case w.TWEET_CARET:
                        case w.RICH_FEEDBACK:
                            (l = d.uq.block),
                                (u = () => {
                                    a.blocking ? s(p) : e(p);
                                });
                    }
                    return { confirmation: p, onClick: u, testID: n, shortcutKey: l, Icon: _(a.blocking), text: T(a), subText: Z({ user: a, blockSubtext: t, unblockSubtext: i }) };
                },
                _ = (e) => (e ? l.default : a.default),
                Z = ({ blockSubtext: e, unblockSubtext: t, user: r }) => (!r.blocking && e ? e(r.screen_name) : r.blocking ? t : void 0),
                T = (e) => (e.blocking ? v({ screenName: e.screen_name }) : h({ screenName: e.screen_name })),
                I = (e, t) => (e.blocking ? ((e, t) => ({ confirmButtonType: "primary", headline: y({ screenName: e }), label: k, text: t ? E : C }))(e.screen_name, t) : x(e.screen_name, t)),
                B = ({ confirmation: e, handleConfirm: t, onClose: r }) => {
                    const { confirmButtonType: s, headline: i, label: a, text: l } = e;
                    return o.createElement(n.Z, { cancelButtonLabel: u, confirmButtonLabel: a, confirmButtonType: s, headline: i, onCancel: r, onConfirm: t, text: l });
                };
        },
        712816: (e, t, r) => {
            "use strict";
            r.d(t, { d: () => n });
            var o = r(111677);
            const n = { defaultToast: { text: r.n(o)().b6878b0a }, showToast: !0 };
        },
        879596: (e, t, r) => {
            "use strict";
            r.d(t, { D: () => n });
            var o = r(111677);
            const n = { defaultToast: { text: r.n(o)().ca96fe6e }, showToast: !0 };
        },
        163390: (e, t, r) => {
            "use strict";
            r.d(t, { OX: () => p, Od: () => d, PN: () => h, uq: () => c, wR: () => g });
            var o = r(251067),
                n = r(522171),
                s = r(111677),
                i = r.n(s),
                a = r(912021),
                l = r(323265);
            const c = Object.freeze({ toggleCommandCenter: "mod+k", openKeyboardShortcuts: "?", swipeLeft: "left", swipeRight: "right", nextItem: "j", previousItem: "k", refresh: ".", nightMode: "z", bookmark: "b", block: "x", mute: "u", newTweet: "n", newMessage: "m", toggleDMDrawer: "i", goHome: "g h", goExplore: "g e", goNotifications: "g n", goMentions: "g r", goProfile: "g p", goLikes: "g l", goLists: "g i", goMessages: "g m", goGrok: "g g", goToDrafts: "g f", goToScheduled: "g t", goSettings: "g s", goToUser: "g u", goBookmarks: "g b", goTopArticles: "g a", goDisplay: "g d", search: "/", audio: { dock: "a d", play: "a space", mute: "a m" }, video: { play1: "k", play2: "space", mute: "m" }, columns: { createNewColumn: "c n", duplicateColumn: "c d", focusOnReorderButton: "c r", lastColumn: "c 0", nextColumn: "]", nthColumn: "c 1..9", prevColumn: "[", removeColumn: "c backspace", toggleColumnOptions: "c o", undoRemoveColumn: "c u" }, decks: { createNewDeck: "d n", editActiveDeck: "d e", lastPinnedDeck: "d 0", manageAllDecks: "d m", nthPinnedDeck: "d 1..9" }, labs: { openCommandCenter: ">" } }),
                d = (0, a.Z)((e) => {
                    const t = e ? [{ description: i().b7fa0cfe, keys: c.goTopArticles, universal: !1 }] : [];
                    return [...((0, o.fH)(o.vw.prod) ? [] : [{ description: "Toggle Command Center", keys: `${u} k`, universal: !1 }]), { description: i().d5696fcc, keys: c.openKeyboardShortcuts, universal: !0 }, { description: i().a83d4280, keys: c.nextItem, universal: !0 }, { description: i().g0048656, keys: c.previousItem, universal: !0 }, { description: i().a690c4d0, keys: "Space", universal: !0 }, { description: i().e893811a, keys: c.refresh, universal: !1 }, { description: i().ha8209bc, keys: c.goHome, universal: !1 }, { description: i().fcf3e54c, keys: c.goExplore, universal: !1 }, { description: i().eb75875e, keys: c.goNotifications, universal: !1 }, { description: i().cdb53d7a, keys: c.goMentions, universal: !1 }, { description: i().fa98627a, keys: c.goProfile, universal: !1 }, { description: i().d4ebc798, keys: c.goToDrafts, universal: !1 }, { description: i().fd6a3f30, keys: c.goToScheduled, universal: !1 }, { description: i().d7b8ebaa, keys: c.goLikes, universal: !1 }, { description: i().b0041756, keys: c.goLists, universal: !1 }, { description: i().d4986f86, keys: c.goMessages, universal: !1 }, { description: i().h5860a68, keys: c.goGrok, universal: !1 }, { description: i().bb081ea2, keys: c.goSettings, universal: !1 }, { description: i().i3145aa0, keys: c.goBookmarks, universal: !1 }, ...t, { description: i().eee2ed92, keys: c.goToUser, universal: !1 }, { description: i().ee5ccf3e, keys: c.goDisplay, universal: !1 }];
                }),
                u = l.ZP.isMac() ? "⌘" : "CTRL",
                p = () => [
                    { description: i().ab3d53f8, keys: c.newTweet, universal: !1 },
                    { description: i().de94bda6, keys: `${u} Enter`, universal: !1 },
                    { description: i().e736990a, keys: c.newMessage, universal: !1 },
                    { description: i().a9ae1e78, keys: c.search, universal: !1 },
                    { description: i().fe731016, keys: n.Z.shortcuts.like, universal: !1 },
                    { description: i().d17df548, keys: n.Z.shortcuts.reply, universal: !1 },
                    { description: i().g062295e, keys: n.Z.shortcuts.retweet, universal: !1 },
                    { description: i().h01621a4, keys: n.Z.shortcuts.share, universal: !0 },
                    { description: i().gb303814, keys: c.bookmark, universal: !1 },
                    { description: i().c03b1126, keys: c.mute, universal: !1 },
                    { description: i().ebd2abb2, keys: c.block, universal: !1 },
                    { description: i().hc6c5510, keys: "Enter", universal: !0 },
                    { description: i().eebdef38, keys: n.Z.shortcuts.openMediaModal, universal: !0 },
                    { description: i().b488758c, keys: c.toggleDMDrawer, universal: !1 },
                ],
                h = () => [
                    { description: i().c82314e0, keys: c.video.play1, universal: !0 },
                    { description: i().c82314e0, keys: c.video.play2, universal: !0 },
                    { description: i().b881560e, keys: c.video.mute, universal: !0 },
                    { description: i().a94f7302, keys: c.audio.dock, universal: !1 },
                    { description: i().a7e604c6, keys: c.audio.play, universal: !1 },
                    { description: i().f978c4fc, keys: c.audio.mute, universal: !1 },
                ],
                f = (0, a.Z)((e) => {
                    const t = d(e),
                        r = p(),
                        o = h(),
                        n = {};
                    return (
                        [...r, ...o, ...t].forEach(({ description: e, keys: t }) => {
                            Array.isArray(t)
                                ? t.forEach((t) => {
                                      n[t] = e;
                                  })
                                : (n[t] = e);
                        }),
                        JSON.stringify(n)
                    );
                }),
                g = (e, t) => {
                    if (t) return { dataSet: { "at-shortcutkeys": f(e) } };
                };
        },
        409438: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => o });
            const o = Object.freeze({ User: "User", ProfileCard: "ProfileCard", UserCompact: "UserCompact", UserConcise: "UserConcise", UserDetailed: "UserDetailed", PendingFollowUser: "PendingFollowUser", SubscribableUser: "SubscribableUser" });
        },
        395042: (e, t, r) => {
            "use strict";
            r.d(t, { El: () => d, HR: () => u, Zc: () => p });
            var o = r(226395),
                n = r(499627),
                s = r(917799);
            const i = "settings/usernames",
                a = "rweb/settings/usernames/CLEAR_USERNAME_AVAILABILITY",
                l = Object.freeze({ REQUEST: "rweb/settings/usernames/FETCH_USERNAMES_REQUEST", SUCCESS: "rweb/settings/usernames/FETCH_USERNAMES_SUCCESS", FAILURE: "rweb/settings/usernames/FETCH_USERNAMES_FAILURE" }),
                c = { isLoaded: !1 };
            const d = (e) => e[i],
                u =
                    (e) =>
                    (t, r, { api: n }) =>
                        (0, s._O)(t, { params: e, request: n.withEndpoint(o.Z).usernameAvailable })({ actionTypes: l, context: "FETCH_SETTINGS_USERNAME_AVAILABLE", meta: { username: e.username } }),
                p = (e) => ({ type: a, meta: e });
            n.Z.register({
                [i]: function (e = c, t) {
                    if (!t) return e;
                    switch (t.type) {
                        case l.REQUEST:
                            return { ...e, isLoading: !0 };
                        case l.FAILURE:
                            return { ...e, isLoading: !1 };
                        case l.SUCCESS:
                            return { ...e, ...t.payload, username: t.meta.username, isLoading: !1 };
                        case a:
                            return { isLoading: !1, suggestions: t.meta?.persistSuggestions ? e.suggestions : void 0 };
                        default:
                            return e;
                    }
                },
            });
        },
        466380: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => p });
            var o = r(807469),
                n = r(502909),
                s = r(600823);
            const i = (0, n.ZP)({ namespace: "topics" }),
                a = (0, n.tb)(i, { context: "FETCH_TOPIC", endpoint: (e) => e.withEndpoint(o.ZP).fetchOneTopic, params: ([e], t) => ({ topicId: e }) }),
                l = {
                    addTopic: function (e) {
                        return u.add({ [e.id]: e });
                    },
                    updateFollowingStatus: (e, t) => (r, o) => (r(i.updateOne(e, { following: t })), Promise.resolve()),
                },
                c = (e, t, r) => {
                    const { entityId: o } = t.meta,
                        n = e.entities[o];
                    return n ? ((e, t, r, o) => (/_REQUEST$/.test(t.type) ? { ...e, entities: { ...e.entities, [r.id]: { ...r, ...o() } } } : e))(e, t, n, r) : e;
                },
                d = { follow: (0, n.Tx)(i, "follow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(o.ZP).follow, reducer: (e, t) => c(e, t, () => ({ following: !0, not_interested: !1 })), context: "FOLLOW_TOPIC" }), unfollow: (0, n.Tx)(i, "unfollow", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(o.ZP).unfollow, reducer: (e, t) => c(e, t, () => ({ following: !1 })), context: "UNFOLLOW_TOPIC" }), notInterested: (0, n.Tx)(i, "notInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(o.ZP).notInterested, reducer: (e, t) => c(e, t, () => ({ following: !1, not_interested: !0 })), context: "NOT_INTERESTED_TOPIC" }), undoNotInterested: (0, n.Tx)(i, "undoNotInterested", { getParams: (e) => ({ topicId: e }), getApiMethod: (e) => e.withEndpoint(o.ZP).undoNotInterested, reducer: (e, t) => c(e, t, () => ({ not_interested: !1 })), context: "UNDO_NOT_INTERESTED_TOPIC" }) },
                u = { ...i, ...a, ...l, ...d, customActionTypes: (0, n.X7)(d) },
                p = s.Z.register(u);
        },
        466441: (e, t, r) => {
            "use strict";
            r.r(t), r.d(t, { NotFoundScreen: () => v, default: () => C });
            r(571372);
            var o = r(202784),
                n = r(386802),
                s = r(108362),
                i = r(392237),
                a = r(111677),
                l = r.n(a),
                c = r(187669),
                d = r(449067),
                u = r(38293),
                p = r(56851),
                h = r(652904),
                f = r(952793),
                g = r(163889),
                m = r(725516);
            const b = l().ba929da8,
                y = l().d203e242;
            function v(e) {
                const { splat: t } = e.match.params,
                    { isModal: r } = o.useContext(n.Z),
                    i = (0, f.hC)("responsive_web_report_page_not_found");
                return (
                    (0, c.q)(() => {
                        i && t && (0, g.ZP)(new Error(`Page not found: ${t}`));
                    }),
                    o.createElement(h.Z, null, o.createElement(d.Z.Configure, { backLocation: "/", documentTitle: b, title: y }), o.createElement(s.Z, { style: r && k.modal }, o.createElement(p.Z, null)), o.createElement(u.Z, { title: b, withMeta: !1 }))
                );
            }
            const k = i.default.create((e) => ({ modal: { backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.xLarge } })),
                C = (0, m.Z)(v, { page: "not_found" });
        },
        242454: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => u });
            var o = r(807896),
                n = r(202784),
                s = r(325686),
                i = r(731708),
                a = r(58881),
                l = r(530732),
                c = r(392237);
            const d = c.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                u = ({ align: e = "center", color: t, label: r, ...u }) => {
                    const p = a.Z.generate({ backgroundColor: c.default.theme.colors.transparent, color: c.default.theme.colors[t], insetFocusRing: !0 });
                    return n.createElement(s.Z, { style: d.container }, n.createElement(l.Z, (0, o.Z)({}, u, { interactiveStyles: p, style: d.root }), n.createElement(i.ZP, { align: e, color: t }, r)));
                };
        },
        779610: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => d });
            var o = r(202784),
                n = r(325686),
                s = r(191796),
                i = r(58399),
                a = r(731708),
                l = r(952428),
                c = r(392237);
            const d = (e) => {
                    const { decoration: t, description: r, disabled: d = !1, isActive: p = !1, label: h, link: f, onPress: g, paddingHorizontal: m, renderRightContent: b, role: y = "tab", styleOverride: v, testID: k = "pivot", thumbnail: C, thumbnailSize: E, withoutArrow: w = !1 } = e,
                        x = [u.thumbnailContainer, "medium" === E && u.thumbnailContainerMedium],
                        S = "string" == typeof h ? o.createElement(a.ZP, null, h) : h,
                        _ = "object" == typeof f && f.external && !f.openInSameFrame,
                        Z = r ? ("string" == typeof r ? o.createElement(a.ZP, { color: "gray700", size: "subtext2", testID: `${k}-description` }, r) : r) : null,
                        T = o.useMemo(() => ("space0" === m ? { paddingHorizontal: 0 } : { paddingHorizontal: m ? c.default.theme.spaces[m] : c.default.theme.componentDimensions.gutterHorizontal }), [m]);
                    return o.createElement(l.Z, { "aria-selected": "tab" === y ? p : null, disabled: d, link: d ? void 0 : f, onPress: g, role: y, style: [u.root, T, d && u.disabled, v], testID: k, withInteractiveStyling: !!f || !!g }, o.createElement(n.Z, { style: u.contentContainer }, C ? o.createElement(n.Z, { style: x }, C) : null, o.createElement(n.Z, { style: u.content }, S, Z), b ? b() : null, (!f && !g) || d || w ? null : _ ? o.createElement(s.default, { style: u.icon }) : o.createElement(i.default, { style: u.icon })), t);
                },
                u = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        183806: (e, t, r) => {
            "use strict";
            r.d(t, { Z: () => o });
            const o = r(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
        662678: (e, t, r) => {
            "use strict";
            r.d(t, { G: () => n, Z: () => o });
            r(136728);
            const o = function (e, t) {
                return n(e, t);
            };
            function n(e, t) {
                return e.reduce(
                    (r, o, n) => {
                        const s = t ? t(o, n, e) : !!o;
                        return s && r[0].push(o), !s && r[1].push(o), r;
                    },
                    [[], []],
                );
            }
        },
        949874: (e) => {
            e.exports = function (e, t, r) {
                if (((e = e.replace(/\r?\n/g, "")), null != t && t < 5)) throw new Error("Maximum length must not be less than 5");
                if (((t = null != t ? t : 78), e.length <= t)) return e;
                t -= 4;
                var o = [],
                    n = e.length,
                    s = 0,
                    i = 0;
                if (!r) for (; ~(s = e.lastIndexOf(" ", t + i)) && !(s <= i); ) e.slice(i).length > t ? (o.push((i ? " " : "") + e.slice(i, s)), (i = s + 1)) : (o.push((i ? " " : "") + e.slice(i)), (i = n));
                for (t++; i < n; ) o.push(e.slice(i, (i += t)));
                return o.join("\r\n ");
            };
        },
        819858: (e, t, r) => {
            var o = r(691925),
                n = r(21681);
            function s(e, t, r) {
                Array.isArray(e[t]) ? e[t].push(r) : null != e[t] ? (e[t] = [e[t], r]) : (e[t] = r);
            }
            function i(e, t) {
                var r = t.split("="),
                    n = o(r[0]),
                    i = r[1];
                return (
                    (null != i && "" !== i) || ((i = r[0]), (n = "type")),
                    "type" === n
                        ? (i
                              .toLowerCase()
                              .split(",")
                              .forEach(function (t) {
                                  s(e, n, t);
                              }),
                          e)
                        : (s(e, n, i), e)
                );
            }
            e.exports = function (e) {
                for (var t = {}, r = null, a = /^([^;:]+)((?:;(?:[^;:]+))*)(?:\:(.+))?$/i, l = e.length - 1, c = 1; c < l; c++) {
                    r = e[c];
                    var d = a.exec(r);
                    if (d) {
                        var u = d[1].split("."),
                            p = u.pop(),
                            h = u.pop(),
                            f = d[3],
                            g = (d[2] ? d[2].replace(/^;|;$/g, "").split(";") : []).reduce(i, h ? { group: h } : {}),
                            m = o(p);
                        s(t, m, new n(m, f, g));
                    }
                }
                return t;
            };
        },
        21681: (e) => {
            function t(e, r, o) {
                if (!(this instanceof t)) return new t(r);
                null != o && Object.assign(this, o), (this._field = e), (this._data = r), Object.defineProperty(this, "_field", { enumerable: !1 }), Object.defineProperty(this, "_data", { enumerable: !1 });
            }
            function r(e) {
                return e.replace(/([A-Z])/g, "-$1").toUpperCase();
            }
            (t.fromJSON = function (e) {
                var r = e[0],
                    o = e[1];
                return /text/i.test(e[2]) || (o.value = e[2]), new t(r, Array.isArray(e[3]) ? e[3].join(";") : e[3], o);
            }),
                (t.prototype = {
                    constructor: t,
                    is: function (e) {
                        return (e = (e + "").toLowerCase()), Array.isArray(this.type) ? this.type.indexOf(e) : this.type === e;
                    },
                    isEmpty: function () {
                        return null == this._data && 0 === Object.keys(this).length;
                    },
                    clone: function () {
                        return new t(this._field, this._data, this);
                    },
                    toString: function (e) {
                        for (var t = (this.group ? this.group + "." : "") + r(this._field), o = Object.keys(this), n = [], s = 0; s < o.length; s++) "group" !== o[s] && n.push(r(o[s]) + "=" + this[o[s]]);
                        return t + (n.length ? ";" + n.join(";") : n) + ":" + (Array.isArray(this._data) ? this._data.join(";") : this._data);
                    },
                    valueOf: function () {
                        return this._data;
                    },
                    toJSON: function () {
                        var e = Object.assign({}, this);
                        "text" === e.value && ((e.value = void 0), delete e.value);
                        var t = [this._field, e, this.value || "text"];
                        switch (this._field) {
                            default:
                                t.push(this._data);
                                break;
                            case "adr":
                            case "n":
                                t.push(this._data.split(";"));
                        }
                        return t;
                    },
                }),
                (e.exports = t);
        },
        588960: (e, t, r) => {
            function o() {
                if (!(this instanceof o)) return new o();
                (this.version = o.versions[o.versions.length - 1]), (this.data = {});
            }
            (o.mimeType = "text/vcard"),
                (o.extension = ".vcf"),
                (o.versions = ["2.1", "3.0", "4.0"]),
                (o.foldLine = r(949874)),
                (o.normalize = function (e) {
                    return (e + "")
                        .replace(/^[\s\r\n]+|[\s\r\n]+$/g, "")
                        .replace(/(\r?\n)\s*(\r?\n)|$/g, "$1")
                        .replace(/\r?\n[\x20\x09]+/g, "");
                }),
                (o.isSupported = function (e) {
                    return /^\d\.\d$/.test(e) && -1 !== o.versions.indexOf(e);
                }),
                (o.parse = function (e) {
                    for (var t = (e + "").split(/(?=BEGIN\:VCARD)/gi), r = [], n = 0; n < t.length; n++) r.push(new o().parse(t[n]));
                    return r;
                }),
                (o.parseLines = r(819858)),
                (o.fromJSON = function (e) {
                    if (null == (e = "string" == typeof e ? JSON.parse(e) : e) || !Array.isArray(e)) return new o();
                    if (!/vcard/i.test(e[0])) throw new Error("Object not in jCard format");
                    var t = new o();
                    return (
                        e[1].forEach(function (e) {
                            t.addProperty(o.Property.fromJSON(e));
                        }),
                        t
                    );
                }),
                (o.format = function (e, t) {
                    if (((t = t || e.version || o.versions[o.versions.length - 1]), !o.isSupported(t))) throw new Error('Unsupported vCard version "' + t + '"');
                    var r = [];
                    r.push("BEGIN:VCARD"), r.push("VERSION:" + t);
                    for (var n = Object.keys(e.data), s = "", i = 0; i < n.length; i++)
                        if ("version" !== n[i])
                            if (((s = e.data[n[i]]), Array.isArray(s))) for (var a = 0; a < s.length; a++) s[a].isEmpty() || r.push(o.foldLine(s[a].toString(t), 75));
                            else s.isEmpty() || r.push(o.foldLine(s.toString(t), 75));
                    return r.push("END:VCARD"), r.join("\n");
                }),
                (o.Property = r(21681)),
                (o.prototype = {
                    constructor: o,
                    get: function (e) {
                        return null == this.data[e]
                            ? this.data[e]
                            : Array.isArray(this.data[e])
                              ? this.data[e].map(function (e) {
                                    return e.clone();
                                })
                              : this.data[e].clone();
                    },
                    set: function (e, t, r) {
                        return this.setProperty(new o.Property(e, t, r));
                    },
                    add: function (e, t, r) {
                        var n = new o.Property(e, t, r);
                        return this.addProperty(n), this;
                    },
                    setProperty: function (e) {
                        return (this.data[e._field] = e), this;
                    },
                    addProperty: function (e) {
                        var t = e._field;
                        return Array.isArray(this.data[t]) ? this.data[t].push(e) : null != this.data[t] ? (this.data[t] = [this.data[t], e]) : (this.data[t] = e), this;
                    },
                    parse: function (e) {
                        var t = o.normalize(e).split(/\r?\n/g),
                            r = t[0],
                            n = t[1],
                            s = t[t.length - 1];
                        if (!/BEGIN:VCARD/i.test(r)) throw new SyntaxError('Invalid vCard: Expected "BEGIN:VCARD" but found "' + r + '"');
                        if (!/END:VCARD/i.test(s)) throw new SyntaxError('Invalid vCard: Expected "END:VCARD" but found "' + s + '"');
                        if (!/VERSION:\d\.\d/i.test(n)) throw new SyntaxError('Invalid vCard: Expected "VERSION:\\d.\\d" but found "' + n + '"');
                        if (((this.version = n.substring(8, 11)), !o.isSupported(this.version))) throw new Error('Unsupported version "' + this.version + '"');
                        return (this.data = o.parseLines(t)), this;
                    },
                    toString: function (e, t) {
                        return (e = e || this.version), o.format(this, e);
                    },
                    toJCard: function (e) {
                        e = e || "4.0";
                        for (var t = Object.keys(this.data), r = [["version", {}, "text", e]], o = null, n = 0; n < t.length; n++)
                            if ("version" !== t[n])
                                if (((o = this.data[t[n]]), Array.isArray(o))) for (var s = 0; s < o.length; s++) r.push(o[s].toJSON());
                                else r.push(o.toJSON());
                        return ["vcard", r];
                    },
                    toJSON: function () {
                        return this.toJCard(this.version);
                    },
                }),
                (e.exports = o);
        },
        691925: (e) => {
            "use strict";
            e.exports = function () {
                var e = [].map
                    .call(arguments, function (e) {
                        return e.trim();
                    })
                    .filter(function (e) {
                        return e.length;
                    })
                    .join("-");
                return e.length
                    ? 1 === e.length
                        ? e.toLowerCase()
                        : /[_.\- ]+/.test(e)
                          ? (e = (function (e) {
                                for (var t = !1, r = 0; r < e.length; r++) {
                                    var o = e.charAt(r);
                                    t && /[a-zA-Z]/.test(o) && o.toUpperCase() === o ? ((e = e.substr(0, r) + "-" + e.substr(r)), (t = !1), r++) : (t = o.toLowerCase() === o);
                                }
                                return e;
                            })(e))
                                .replace(/^[_.\- ]+/, "")
                                .toLowerCase()
                                .replace(/[_.\- ]+(\w|$)/g, function (e, t) {
                                    return t.toUpperCase();
                                })
                          : e === e.toUpperCase()
                            ? e.toLowerCase()
                            : e[0] !== e[0].toLowerCase()
                              ? e[0].toLowerCase() + e.slice(1)
                              : e
                    : "";
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~ondemand.SettingsInternals~bundle.Ocf.8e45689a.js.map
