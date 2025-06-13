"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.BrandedLikesPreview-e16dbf02", "shared~bundle.ReportCenter~bundle.SafetyCenter-e16dbf02"],
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
        449161: (e, t, n) => {
            n.d(t, { Z: () => h });
            var r = n(807896),
                o = n(202784),
                a = n(111677),
                i = n.n(a),
                s = n(154003),
                l = n(950822),
                c = n(392237);
            const d = i().i5450bec,
                u = i().f7432494;
            class m extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._handlePress = (e) => {
                            const { onPress: t } = this.props;
                            t && t(e), this._fileInput && this._fileInput.click();
                        }),
                        (this._handleChange = (e) => {
                            const { onChange: t } = this.props,
                                n = e.target,
                                r = n.files;
                            r.length && t && t(r), (n.value = "");
                        }),
                        (this._handleFileInputButtonRef = (e) => {
                            this._fileInput = e;
                        });
                }
                render() {
                    const { accept: e, disabled: t, multiple: n, onChange: a, testID: i, ...c } = this.props,
                        m = !(e?.includes("video") || e?.includes("gif"));
                    return o.createElement(o.Fragment, null, o.createElement(s.ZP, (0, r.Z)({ hoverLabel: e ? { label: m ? u : d } : void 0 }, c, { disabled: t, onPress: this._handlePress })), (0, l.Z)("input", { accept: e, disabled: t, multiple: n, onChange: this._handleChange, ref: this._handleFileInputButtonRef, style: p.input, tabIndex: -1, testID: i, type: "file" }));
                }
            }
            m.defaultProps = { disabled: !1, multiple: !1 };
            const p = c.default.create((e) => ({ input: { width: "0.1px", height: "0.1px", opacity: 0, overflow: "hidden", position: "absolute", zIndex: -1 } })),
                h = m;
        },
        529509: (e, t, n) => {
            n.d(t, { Z: () => f });
            var r = n(202784),
                o = n(325686),
                a = n(111677),
                i = n.n(a),
                s = n(815858),
                l = n(731708),
                c = n(642153),
                d = n(530732),
                u = n(392237);
            const m = i().a35a5b10,
                p = i().fc8cd112,
                h = (e) => r.createElement(l.ZP, null, e);
            class f extends r.Component {
                render() {
                    const { displayFacepileInline: e, knownFollowersAvatarUrls: t, knownFollowersCount: n, textStyle: a, userScreenName: i, withFacepile: u } = this.props,
                        p = this._renderMessage();
                    return r.createElement(s.Z, { duration: "long", show: void 0 !== n, type: "fade" }, n ? r.createElement(d.Z, { "aria-label": m, interactiveStyles: null, link: i ? ((h = i), `/${h}/followers_you_follow`) : void 0 }, ({ isHovered: n, isPressed: s }) => r.createElement(o.Z, { style: g.content }, !e && u ? r.createElement(c.Z, { userAvatarUrls: t }) : null, r.createElement(l.ZP, { color: "gray700", size: "subtext2", style: [!e && g.message, (n || s) && !!i && g.underline, a] }, e && u ? r.createElement(c.Z, { style: g.inlineFacepile, userAvatarUrls: t }) : null, p))) : r.createElement(o.Z, { style: g.content }, r.createElement(l.ZP, { color: "gray700", size: "subtext2" }, p)));
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
            const g = u.default.create((e) => ({ content: { flexDirection: "row" }, message: { flexShrink: 1, marginStart: e.spaces.space12 }, underline: { textDecorationLine: "underline" }, inlineFacepile: { verticalAlign: "middle", marginEnd: e.spaces.space4 } }));
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
            n.d(t, { ZP: () => g });
            n(571372);
            var r = n(202784),
                o = n(325686),
                a = n(392237),
                i = n(111677),
                s = n.n(i),
                l = n(643442),
                c = n(466445),
                d = n(731708),
                u = n(154003),
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
                        r.createElement(u.ZP, {
                            "aria-label": n ? "Pause" : "Play",
                            icon: n ? r.createElement(l.default, null) : r.createElement(c.default, null),
                            onClick: function () {
                                n ? (e.pause(), a(!1)) : (e.play(), a(!0));
                            },
                            type: "primaryText",
                        }),
                        r.createElement(d.ZP, { style: f.frames }, `${i}/${e.totalFrames}`),
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
            function g(e) {
                const { autoplay: t = !0, loop: n = !1, onAnimationEnd: a, onAnimationStart: i, onError: s, withControls: l } = e,
                    c = r.useRef(void 0),
                    d = r.useRef({ animationLoaded: !1 }),
                    u = r.useRef(null),
                    [m, p] = r.useState(!1);
                return (
                    r.useEffect(() => {
                        function r(e, t) {
                            "function" == typeof a && a(t), e && e.destroy();
                        }
                        const { animationLoaded: o } = d.current;
                        o ||
                            ((d.current.animationLoaded = !0),
                            E.load().then((o) => {
                                if (o && u.current) {
                                    const a = { container: u.current, renderer: "svg", loop: n, autoplay: !1, ...("object" == typeof e.animation ? { animationData: e.animation } : { path: e.animation }) },
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
                    r.createElement(o.Z, null, r.createElement(o.Z, { style: [e.animationContainerStyle, y.centerAnimation] }, r.createElement("div", { ref: u, style: e.animationStyle }), l && c.current && m && r.createElement(h, { animation: c.current, autoplay: t })))
                );
            }
            g.Prepare = function () {
                return (
                    r.useEffect(() => {
                        E.load();
                    }, []),
                    null
                );
            };
            const E = { load: () => n.e("ondemand.LottieWeb").then(n.t.bind(n, 548888, 23)) };
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
                o = n(111677),
                a = n.n(o),
                i = n(149170),
                s = n(40644);
            const l = a().gaeb997e;
            const c = function ({ activeColor: e, label: t = l, Icon: n = i.default, iconSize: o = "normal", isDisabled: a, onClick: c, preventFocusShift: d, renderActionMenu: u, style: m, testID: p, withDarkBackground: h = !1 }) {
                const f = r.useCallback(
                        (e) => {
                            e && e.preventDefault(), c && c(e);
                        },
                        [c],
                    ),
                    g = r.useMemo(() => ({ label: t }), [t]);
                return r.createElement(s.ZP, { Icon: n, activeColor: e || (h ? "white" : void 0), "aria-label": t, backgroundColor: h ? "translucentBlack77" : "transparent", color: h ? "white" : "gray700", hoverLabel: g, iconSize: o, isDisabled: a, onPress: f, preventFocusShift: d, renderMenu: u, style: m, testID: p });
            };
        },
        32471: (e, t, n) => {
            n.d(t, { Z: () => C });
            var r = n(202784),
                o = n(325686),
                a = n(530732),
                i = n(111677),
                s = n.n(i),
                l = n(731708),
                c = n(966582),
                d = n(392237);
            const u = s().d7e50a66,
                m = "INDIRECT",
                p = "NO_SPONSORSHIP",
                h = "ISSUE";
            class f extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderDisclaimerDetails = () => {
                            const { onPoliticalSponsorWebsiteClick: e, promotedContent: t } = this.props,
                                { disclaimerType: n, sponsorshipCandidate: o, sponsorshipOrganization: a, sponsorshipOrganizationWebsite: i, sponsorshipType: c } = t.adMetadataContainer ?? {},
                                d = i && n !== h ? r.createElement(l.ZP, { link: i, onClick: e }) : r.createElement(l.ZP, { color: "gray700", size: "subtext2" });
                            if (!a) return null;
                            const u = r.createElement(s().I18NFormatMessage, { $i18n: "e1e348dd" }, r.cloneElement(d, null, s().hdd29d51({ sponsorshipOrganization: a }))),
                                f = r.createElement(s().I18NFormatMessage, { $i18n: "c7dea0d1" }, r.cloneElement(d, null, s().b97f7079({ sponsorshipOrganization: a }))),
                                g = o ? r.createElement(s().I18NFormatMessage, { $i18n: "b5c2371b", sponsorshipCandidate: o }, r.cloneElement(d, null, s().b02627a9({ sponsorshipOrganization: a }))) : null;
                            return r.createElement(l.ZP, { color: "gray700", size: "subtext2" }, n === h ? u : c === p ? f : c === m ? g : u);
                        }),
                        (this._renderLearnMoreLink = () => {
                            const { onPromotedDisclaimerLearnMoreClick: e, promotedContent: t } = this.props,
                                { disclaimerType: n } = t.adMetadataContainer ?? {},
                                o = n === h ? "issue_ad" : "political_ad";
                            return r.createElement(l.ZP, { link: "https://business.twitter.com/en/help/ads-policies/ads-content-policies/political-content/political-ads-disclosure.html", onClick: e?.(o), size: "subtext2", style: g.learnMore }, u);
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
            const g = d.default.create((e) => ({ learnMore: { alignSelf: "flex-start" } }));
            var E = n(378729);
            const C = function (e) {
                const { contentAuthorId: t, id: n, onPoliticalSponsorWebsiteClick: i, onPromotedDisclaimerLearnMoreClick: s, onPromotedIndicatorClick: l, promotedContent: d, promotedContentAdvertiser: u, screenName: m, style: p, testID: h, withoutDisclaimerDetails: g } = e;
                if (!c.Z.isPromoted(d)) return null;
                let C = null;
                return !g && d && (C = r.createElement(f, { contentAuthorId: t, onPoliticalSponsorWebsiteClick: i, onPromotedDisclaimerLearnMoreClick: s, promotedContent: d, screenName: m })), r.createElement(o.Z, { id: n, style: p, testID: h }, u && d ? r.createElement(a.Z, { interactiveStyles: null, link: { pathname: `https://twitter.com/${u.screen_name}`, state: { promotedTweetState: d } }, onPress: l }, r.createElement(E.Z, { contentAuthorId: t, promotedContent: d })) : !!d && r.createElement(E.Z, { contentAuthorId: t, promotedContent: d }), C);
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
                d = "down",
                u = (e, t, n) => {
                    n((n) => {
                        const r = (0, a.Z)(e) ? (e > (n.count || 0) ? c : d) : c;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: r };
                    });
                },
                m = {};
            [c, d].forEach((e) => {
                const t = "0.3s";
                m[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === c ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === c ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const p = { position: "absolute" },
                h = l.default.create({ root: { overflow: "hidden" } }),
                f = (e) => {
                    const { children: t, containerStyle: n, count: l, ...d } = e,
                        [f, g] = r.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
                        E = r.useRef(!1);
                    return (
                        r.useEffect(
                            () => (
                                (E.current = !0),
                                function () {
                                    E.current = !1;
                                }
                            ),
                            [],
                        ),
                        r.useEffect(() => {
                            if (E.current)
                                if (i.Z.reducedMotionEnabled) g((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== f.pendingText) {
                                    t === f.text || ((0, a.Z)(e.count) && f.count === e.count) ? g((e) => ({ ...e, pendingCount: null, pendingText: null })) : (g((n) => ({ ...n, pendingCount: e.count, pendingText: t })), f.animating || u(e.count, t, g));
                                }
                        }, [t]),
                        r.useEffect(() => {
                            E.current &&
                                !1 === f.animating &&
                                (f.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              E.current && g((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : f.pendingText && u(f.pendingCount, f.pendingText, g));
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
                                t ? r.createElement("span", { style: l }, r.createElement(s.ZP, d, f.oldText)) : null,
                                r.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(E.current, g),
                                        style: c,
                                    },
                                    r.createElement(s.ZP, d, f.text),
                                ),
                            );
                        }, [n, d, f, E, g])
                    );
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.BrandedLikesPreview-e16dbf02.616c83da.js.map
