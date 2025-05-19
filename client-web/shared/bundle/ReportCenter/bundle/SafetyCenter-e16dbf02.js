"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.ReportCenter~bundle.SafetyCenter-e16dbf02"],
    {
        495232: (e, t, n) => {
            n.d(t, { Z: () => r });
            n(202784);
            const r = {
                getEducationType: (e, t) => {
                    switch (e) {
                        case "followers":
                            return t ? "conversationControlsFollowersCanEngage" : "conversationControlsFollowersCannotEngage";
                        case "community":
                            return t ? "conversationControlsCommunityCanEngage" : "conversationControlsCommunityCannotEngage";
                        case "by_invitation":
                            return t ? "conversationControlsByInvitationCanEngage" : "conversationControlsByInvitationCannotEngage";
                        case "subscribers":
                            return t ? "conversationControlsSubscribersCanEngage" : "conversationControlsSubscribersCannotEngage";
                        case "community_hidden_tweet":
                            return "communityHiddenTweetEducation";
                        case "community_tweet_member_removed":
                            return "communityRemovedMemberEducation";
                        case "verified":
                            return t ? "conversationControlsVerifiedCanEngage" : "conversationControlsVerifiedCannotEngage";
                        default:
                            return;
                    }
                },
            };
        },
        529509: (e, t, n) => {
            n.d(t, { Z: () => f });
            var r = n(202784),
                o = n(325686),
                a = n(332920),
                i = n.n(a),
                s = n(815858),
                l = n(731708),
                c = n(642153),
                u = n(530732),
                d = n(392237);
            const m = i().a35a5b10,
                p = i().fc8cd112,
                h = (e) => r.createElement(l.ZP, null, e);
            class f extends r.Component {
                render() {
                    const { displayFacepileInline: e, knownFollowersAvatarUrls: t, knownFollowersCount: n, textStyle: a, userScreenName: i, withFacepile: d } = this.props,
                        p = this._renderMessage();
                    return r.createElement(s.Z, { duration: "long", show: void 0 !== n, type: "fade" }, n ? r.createElement(u.Z, { "aria-label": m, interactiveStyles: null, link: i ? ((h = i), `/${h}/followers_you_follow`) : void 0 }, ({ isHovered: n, isPressed: s }) => r.createElement(o.Z, { style: E.content }, !e && d ? r.createElement(c.Z, { userAvatarUrls: t }) : null, r.createElement(l.ZP, { color: "gray700", size: "subtext2", style: [!e && E.message, (n || s) && !!i && E.underline, a] }, e && d ? r.createElement(c.Z, { style: E.inlineFacepile, userAvatarUrls: t }) : null, p))) : r.createElement(o.Z, { style: E.content }, r.createElement(l.ZP, { color: "gray700", size: "subtext2" }, p)));
                    var h;
                }
                _renderMessage() {
                    const { knownFollowersCount: e = 0, knownFollowersNames: t } = this.props;
                    return e > 3 ? this._renderUsernamesWithOthers(t, e) : 3 === e ? this._renderThreeUsernames(t) : 2 === e ? this._renderTwoUsernames(t) : 1 === e ? this._renderOneUsername(t) : p;
                }
                _renderOneUsername(e) {
                    return r.createElement(i().I18NFormatMessage, { $i18n: "c9e6167d" }, h(e[0]));
                }
                _renderTwoUsernames(e) {
                    return r.createElement(i().I18NFormatMessage, { $i18n: "ha91d1eb" }, h(e[0]), h(e[1]));
                }
                _renderThreeUsernames(e) {
                    return r.createElement(i().I18NFormatMessage, { $i18n: "f1069f9b" }, h(e[0]), h(e[1]), h(e[2]));
                }
                _renderUsernamesWithOthers(e, t) {
                    const n = t - 2;
                    return r.createElement(i().I18NFormatMessage, { $i18n: "e8404c1f" }, h(e[0]), h(e[1]), n);
                }
            }
            f.defaultProps = { displayFacepileInline: !1, withFacepile: !0 };
            const E = d.default.create((e) => ({ content: { flexDirection: "row" }, message: { flexShrink: 1, marginStart: e.spaces.space12 }, underline: { textDecorationLine: "underline" }, inlineFacepile: { verticalAlign: "middle", marginEnd: e.spaces.space4 } }));
        },
        941978: (e, t, n) => {
            n.d(t, { C: () => r });
            class r {
                constructor() {
                    this._cache = {};
                }
                get(e) {
                    return this._cache[e];
                }
                check(e) {
                    const t = this._load(e);
                    return !(t instanceof Promise) && !!t;
                }
                reset() {
                    this._cache = {};
                }
                _loadCache(e, t) {
                    if (this._cache[e]) return this._cache[e];
                    const n = t().then((t) => {
                        this._cache[e] = t;
                    });
                    return this._cache[e] || (this._cache[e] = n), this._cache[e];
                }
                _load(e) {
                    return this._loadCache(
                        e,
                        () =>
                            new Promise((t) => {
                                window.fetch
                                    ? fetch(e)
                                          .then((e) => e.json())
                                          .then(t)
                                          .catch(() => t(!1))
                                    : t(!0);
                            }),
                    );
                }
            }
            new r();
        },
        491915: (e, t, n) => {
            n.d(t, { ZP: () => E });
            n(571372);
            var r = n(202784),
                o = n(325686),
                a = n(392237),
                i = n(332920),
                s = n.n(i),
                l = n(643442),
                c = n(466445),
                u = n(731708),
                d = n(154003),
                m = n(173739);
            const p = s().jcf3e7a2;
            function h({ animation: e, autoplay: t }) {
                const [n, a] = r.useState(t),
                    [i, s] = r.useState(0);
                return (
                    r.useEffect(() => {
                        e.addEventListener("enterFrame", (e) => {
                            e && s(Math.round(e.currentTime));
                        });
                    }, [e]),
                    r.createElement(
                        o.Z,
                        { style: f.container },
                        r.createElement(d.ZP, {
                            "aria-label": n ? "Pause" : "Play",
                            icon: n ? r.createElement(l.default, null) : r.createElement(c.default, null),
                            onClick: function () {
                                n ? (e.pause(), a(!1)) : (e.play(), a(!0));
                            },
                            type: "primaryText",
                        }),
                        r.createElement(u.ZP, { style: f.frames }, `${i}/${e.totalFrames}`),
                        r.createElement(
                            o.Z,
                            { style: f.slider },
                            r.createElement(m.Z, {
                                "aria-label": p,
                                max: e.totalFrames,
                                min: 0,
                                onChange: function (t) {
                                    e.goToAndStop(t, !0), a(!1);
                                },
                                value: i,
                            }),
                        ),
                    )
                );
            }
            const f = a.default.create((e) => ({ container: { width: "100%", flexDirection: "row", alignItems: "center" }, frames: { marginStart: e.spaces.space12 }, slider: { flex: 1, marginStart: e.spaces.space12 } }));
            function E(e) {
                const { autoplay: t = !0, loop: n = !1, onAnimationEnd: a, onAnimationStart: i, onError: s, withControls: l } = e,
                    c = r.useRef(void 0),
                    u = r.useRef({ animationLoaded: !1 }),
                    d = r.useRef(null),
                    [m, p] = r.useState(!1);
                return (
                    r.useEffect(() => {
                        function r(e, t) {
                            "function" == typeof a && a(t), e && e.destroy();
                        }
                        const { animationLoaded: o } = u.current;
                        o ||
                            ((u.current.animationLoaded = !0),
                            g.load().then((o) => {
                                if (o && d.current) {
                                    const a = { container: d.current, renderer: "svg", loop: n, autoplay: !1, ...("object" == typeof e.animation ? { animationData: e.animation } : { path: e.animation }) },
                                        l = o.loadAnimation(a);
                                    (c.current = l),
                                        (l.onError = (e) => {
                                            const t = new C(e);
                                            "function" == typeof s && s(t), r(l, t);
                                        }),
                                        l.addEventListener("DOMLoaded", () => {
                                            p(!0), t && (l.play(), i && i());
                                        }),
                                        l.addEventListener("complete", () => {
                                            r(l);
                                        });
                                }
                            }));
                    }, [e.animation, t, n, a, i, s, l]),
                    r.useEffect(
                        () =>
                            function () {
                                c.current && c.current.destroy();
                            },
                        [c],
                    ),
                    r.createElement(o.Z, null, r.createElement(o.Z, { style: [e.animationContainerStyle, y.centerAnimation] }, r.createElement("div", { ref: d, style: e.animationStyle }), l && c.current && m && r.createElement(h, { animation: c.current, autoplay: t })))
                );
            }
            E.Prepare = function () {
                return (
                    r.useEffect(() => {
                        g.load();
                    }, []),
                    null
                );
            };
            const g = { load: () => n.e("ondemand.LottieWeb").then(n.t.bind(n, 548888, 23)) };
            class C extends Error {
                constructor(e, ...t) {
                    super(...t), Error.captureStackTrace && Error.captureStackTrace(this, C), (this.name = "LottieAnimationError"), (this.lottieError = e);
                }
            }
            const y = a.default.create((e) => ({ centerAnimation: { alignItems: "center", justifyContent: "center" } }));
        },
        247056: (e, t, n) => {
            n.d(t, { Z: () => c });
            var r = n(202784),
                o = n(332920),
                a = n.n(o),
                i = n(149170),
                s = n(40644);
            const l = a().gaeb997e;
            const c = function ({ activeColor: e, label: t = l, Icon: n = i.default, iconSize: o = "normal", isDisabled: a, onClick: c, preventFocusShift: u, renderActionMenu: d, style: m, testID: p, withDarkBackground: h = !1 }) {
                const f = r.useCallback(
                        (e) => {
                            e && e.preventDefault(), c && c(e);
                        },
                        [c],
                    ),
                    E = r.useMemo(() => ({ label: t }), [t]);
                return r.createElement(s.ZP, { Icon: n, activeColor: e || (h ? "white" : void 0), "aria-label": t, backgroundColor: h ? "translucentBlack77" : "transparent", color: h ? "white" : "gray700", hoverLabel: E, iconSize: o, isDisabled: a, onPress: f, preventFocusShift: u, renderMenu: d, style: m, testID: p });
            };
        },
        32471: (e, t, n) => {
            n.d(t, { Z: () => C });
            var r = n(202784),
                o = n(325686),
                a = n(530732),
                i = n(332920),
                s = n.n(i),
                l = n(731708),
                c = n(966582),
                u = n(392237);
            const d = s().d7e50a66,
                m = "INDIRECT",
                p = "NO_SPONSORSHIP",
                h = "ISSUE";
            class f extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderDisclaimerDetails = () => {
                            const { onPoliticalSponsorWebsiteClick: e, promotedContent: t } = this.props,
                                { disclaimerType: n, sponsorshipCandidate: o, sponsorshipOrganization: a, sponsorshipOrganizationWebsite: i, sponsorshipType: c } = t.adMetadataContainer ?? {},
                                u = i && n !== h ? r.createElement(l.ZP, { link: i, onClick: e }) : r.createElement(l.ZP, { color: "gray700", size: "subtext2" });
                            if (!a) return null;
                            const d = r.createElement(s().I18NFormatMessage, { $i18n: "e1e348dd" }, r.cloneElement(u, null, s().hdd29d51({ sponsorshipOrganization: a }))),
                                f = r.createElement(s().I18NFormatMessage, { $i18n: "c7dea0d1" }, r.cloneElement(u, null, s().b97f7079({ sponsorshipOrganization: a }))),
                                E = o ? r.createElement(s().I18NFormatMessage, { $i18n: "b5c2371b", sponsorshipCandidate: o }, r.cloneElement(u, null, s().b02627a9({ sponsorshipOrganization: a }))) : null;
                            return r.createElement(l.ZP, { color: "gray700", size: "subtext2" }, n === h ? d : c === p ? f : c === m ? E : d);
                        }),
                        (this._renderLearnMoreLink = () => {
                            const { onPromotedDisclaimerLearnMoreClick: e, promotedContent: t } = this.props,
                                { disclaimerType: n } = t.adMetadataContainer ?? {},
                                o = n === h ? "issue_ad" : "political_ad";
                            return r.createElement(l.ZP, { link: "https://business.twitter.com/en/help/ads-policies/ads-content-policies/political-content/political-ads-disclosure.html", onClick: e?.(o), size: "subtext2", style: E.learnMore }, d);
                        });
                }
                render() {
                    const { promotedContent: e } = this.props;
                    if (!e.adMetadataContainer) return null;
                    const { disclaimerType: t } = e.adMetadataContainer,
                        n = c.Z.getDisclosureType(e);
                    return "POLITICAL" !== t && "ISSUE" !== t && "political" !== n && "issue" !== n ? null : r.createElement(r.Fragment, null, this._renderDisclaimerDetails(), this._renderLearnMoreLink());
                }
            }
            const E = u.default.create((e) => ({ learnMore: { alignSelf: "flex-start" } }));
            var g = n(378729);
            const C = function (e) {
                const { contentAuthorId: t, id: n, onPoliticalSponsorWebsiteClick: i, onPromotedDisclaimerLearnMoreClick: s, onPromotedIndicatorClick: l, promotedContent: u, promotedContentAdvertiser: d, screenName: m, style: p, testID: h, withoutDisclaimerDetails: E } = e;
                if (!c.Z.isPromoted(u)) return null;
                let C = null;
                return !E && u && (C = r.createElement(f, { contentAuthorId: t, onPoliticalSponsorWebsiteClick: i, onPromotedDisclaimerLearnMoreClick: s, promotedContent: u, screenName: m })), r.createElement(o.Z, { id: n, style: p, testID: h }, d && u ? r.createElement(a.Z, { interactiveStyles: null, link: { pathname: `https://twitter.com/${d.screen_name}`, state: { promotedTweetState: u } }, onPress: l }, r.createElement(g.Z, { contentAuthorId: t, promotedContent: u })) : !!u && r.createElement(g.Z, { contentAuthorId: t, promotedContent: u }), C);
            };
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => f });
            var r = n(202784),
                o = n(325686),
                a = n(827515),
                i = n(461756),
                s = n(731708),
                l = n(392237);
            const c = "up",
                u = "down",
                d = (e, t, n) => {
                    n((n) => {
                        const r = (0, a.Z)(e) ? (e > (n.count || 0) ? c : u) : c;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: r };
                    });
                },
                m = {};
            [c, u].forEach((e) => {
                const t = "0.3s";
                m[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === c ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === c ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const p = { position: "absolute" },
                h = l.default.create({ root: { overflow: "hidden" } }),
                f = (e) => {
                    const { children: t, containerStyle: n, count: l, ...u } = e,
                        [f, E] = r.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
                        g = r.useRef(!1);
                    return (
                        r.useEffect(
                            () => (
                                (g.current = !0),
                                function () {
                                    g.current = !1;
                                }
                            ),
                            [],
                        ),
                        r.useEffect(() => {
                            if (g.current)
                                if (i.Z.reducedMotionEnabled) E((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== f.pendingText) {
                                    t === f.text || ((0, a.Z)(e.count) && f.count === e.count) ? E((e) => ({ ...e, pendingCount: null, pendingText: null })) : (E((n) => ({ ...n, pendingCount: e.count, pendingText: t })), f.animating || d(e.count, t, E));
                                }
                        }, [t]),
                        r.useEffect(() => {
                            g.current &&
                                !1 === f.animating &&
                                (f.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              g.current && E((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : f.pendingText && d(f.pendingCount, f.pendingText, E));
                        }, [f.animating, f.oldText]),
                        r.useMemo(() => {
                            const e = m[f.transitionDirection],
                                t = f.oldText && !i.Z.reducedMotionEnabled,
                                a = !f.animating && f.oldText && !i.Z.reducedMotionEnabled,
                                l = { ...p, ...(f.animating ? e.post : e.active) },
                                c = { ...(a ? e.pre : e.active) };
                            return r.createElement(
                                o.Z,
                                { style: [h.root, n] },
                                t ? r.createElement("span", { style: l }, r.createElement(s.ZP, u, f.oldText)) : null,
                                r.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(g.current, E),
                                        style: c,
                                    },
                                    r.createElement(s.ZP, u, f.text),
                                ),
                            );
                        }, [n, u, f, g, E])
                    );
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.ReportCenter~bundle.SafetyCenter-e16dbf02.e19610ea.js.map
