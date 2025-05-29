"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.UserLists~ondemand.HoverCard"],
    {
        989816: (e, t, n) => {
            n.d(t, { Z: () => w });
            var r = n(202784),
                s = n(970187),
                i = n(392237),
                o = n(379327),
                l = n(913973),
                a = n(320588),
                c = n(233391),
                d = n(288955),
                u = n(71620),
                m = n(668214),
                p = n(576469);
            const f = (0, m.Z)()
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, u.zr)("FOLLOW_LIST_BUTTON"), follow: p.Z.subscribe, unfollow: p.Z.unsubscribe }))
                    .withAnalytics(),
                h = { followIcon: r.createElement(o.default, null), followingIcon: r.createElement(l.default, null) },
                b = (e) => {
                    const { analytics: t, createLocalApiErrorHandler: n, disabled: i, follow: o, isFollowing: l, isMinimal: u, listId: m, listName: p, unfollow: f, user: b } = e,
                        w = r.useCallback(() => {
                            t.scribeAction("follow"), o(m).catch(n(a.lg));
                        }, [t, n, o, m]),
                        E = r.useCallback(() => {
                            t.scribeAction("unfollow"), f(m).catch(n(a.Sm));
                        }, [t, n, m, f]);
                    return r.createElement(d.Z, { customText: p, displayMode: c.BH.subscribe, userFullName: b?.name }, (e) => r.createElement(s.Z, { buttonIcons: u ? h : void 0, disabled: i, displayMode: u ? "only-icon" : void 0, isFollowing: l, onFollow: e(w), onUnfollow: e(E), showRelationshipChangeConfirmation: !1, size: "small", style: g.followButton, type: "list" }));
                },
                g = i.default.create((e) => ({ followButton: { marginStart: e.spaces.space12 } })),
                w = f(r.memo(b));
        },
        527409: (e, t, n) => {
            n.r(t), n.d(t, { ListDetail: () => N, default: () => L, formatNumber: () => I });
            var r = n(202784),
                s = n(272175),
                i = n(325686),
                o = n(98538),
                l = n(530525),
                a = n(439592),
                c = n(392237),
                d = n(682474),
                u = n(731708),
                m = n(366635),
                p = n(154003),
                f = n(111677),
                h = n.n(f),
                b = n(121791),
                g = n(401388),
                w = n(443781),
                E = n(989816),
                _ = n(668214),
                Z = n(576469),
                y = n(390387),
                v = n(919022),
                x = n(510588);
            const P = (e, t) => {
                    const { listId: n } = t;
                    return n ? Z.Z.select(e, n) : void 0;
                },
                T = (e, t) => {
                    const n = P(e, t),
                        r = n?.user;
                    return r ? v.ZP.select(e, r) : void 0;
                },
                C = (e, t) => x.tt(e, t.listId),
                k = (0, _.Z)()
                    .propsFromState(() => ({ list: P, user: T, viewerUserId: y._h, media: C }))
                    .withAnalytics(),
                I = h().d58baa7f,
                S = h().ca5d0a82,
                B = h().j681933e;
            class N extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderImage = () => {
                            const { media: e } = this.props,
                                { image: t } = e;
                            if (t && !(0, g.Z)(t)) {
                                const { url: e } = t;
                                return r.createElement(r.Fragment, null, r.createElement(s.ql, { prioritizeSeoTags: !0 }, r.createElement("meta", { content: e, property: "og:image" })), r.createElement(l.Z, { "aria-label": "", aspectMode: a.Z.exact(3), backgroundColor: c.default.theme.colors.gray300, image: t }));
                            }
                            return r.createElement(d.Z, { ratio: 3 }, r.createElement(i.Z, { style: A.placeholderImageContainer }));
                        }),
                        (this._renderListDescription = () => {
                            const { list: e, user: t } = this.props;
                            if (e) {
                                const { description: n, member_count: o, mode: l, name: a, subscriber_count: c } = e,
                                    d = c || 0,
                                    p = o || 0,
                                    f = "private" === l;
                                return r.createElement(i.Z, { style: A.description }, r.createElement(i.Z, { style: [A.name, A.text] }, r.createElement(u.ZP, { align: "center", size: "headline1", weight: "bold" }, a.trim()), f ? r.createElement(b.default, { "aria-label": B, style: A.iconLock }) : null), n ? r.createElement(r.Fragment, null, r.createElement(s.ql, { prioritizeSeoTags: !0 }, r.createElement("meta", { content: n.trim(), property: "og:description" })), r.createElement(u.ZP, { align: "center", style: A.text }, n.trim())) : null, t ? r.createElement(m.Z, { affiliateBadgeInfo: t.highlightedLabel, isBlueVerified: t.is_blue_verified, isProtected: t.protected, isVerified: t.verified, name: t.name, onLinkClick: this._handleUserNamePress, profileImageUrl: t.profile_image_url_https, screenName: t.screen_name, style: A.text, verifiedType: t.verified_type, withLink: !0 }) : null, this._renderCount(d, p), this._renderActionButton());
                            }
                        }),
                        (this._renderCount = (e, t) => {
                            const { basePath: n } = this.props,
                                s = I(e),
                                i = I(t);
                            return r.createElement(o.Z.Group, null, r.createElement(o.Z, { count: t, link: `${n}/members`, onPress: this._handleMembersCountPress }, r.createElement(h().I18NFormatMessage, { $i18n: "b38e130b" }, r.createElement(o.Z.Value, null, h().ibd0106e({ formattedCount: i })), r.createElement(o.Z.Label, null, h().cface2d1({ count: t })))), r.createElement(o.Z, { count: e, link: `${n}/followers`, onPress: this._handleSubscribersCountPress }, ((l = e), (a = s), r.createElement(h().I18NFormatMessage, { $i18n: "d2924acb" }, r.createElement(o.Z.Value, null, h().ec08efe4({ formattedCount: a })), r.createElement(o.Z.Label, null, h().h9f711f0({ count: l }))))));
                            var l, a;
                        }),
                        (this._handleEditPress = () => {
                            this._scribe({ element: "edit", action: "click" });
                        }),
                        (this._handleUserNamePress = () => {
                            this._scribe({ element: "user", action: "click" });
                        }),
                        (this._handleMembersCountPress = () => {
                            this._scribe({ element: "list_member", action: "click" });
                        }),
                        (this._handleSubscribersCountPress = () => {
                            this._scribe({ element: "list_subscribed", action: "click" });
                        }),
                        (this._renderActionButton = () => {
                            const { basePath: e, list: t, user: n, viewerUserId: s, withEditButton: o } = this.props;
                            if (t && t.user) {
                                const l = n?.blocking;
                                return t.user === s && o ? r.createElement(p.ZP, { link: `${e}/info`, onPress: this._handleEditPress, style: A.button, type: "primaryOutlined" }, S) : t.user !== s ? r.createElement(i.Z, { style: A.button }, r.createElement(E.Z, { disabled: l, isFollowing: !!t.following, listId: t.id_str, listName: t.name, user: n })) : null;
                            }
                        }),
                        (this._scribe = (e) => {
                            const { analytics: t } = this.props;
                            t.scribe(e);
                        });
                }
                componentDidMount() {
                    this._scribe({ action: "impression" });
                }
                render() {
                    const { list: e, withRoundedCorners: t } = this.props;
                    return e ? r.createElement(i.Z, { style: [A.container, t && A.hoverCard] }, this._renderImage(), this._renderListDescription()) : null;
                }
            }
            (N.contextType = w.rC), (N.defaultProps = { withEditButton: !0 });
            const A = c.default.create((e) => ({ container: { borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor, borderStyle: "solid" }, hoverCard: { borderRadius: e.borderRadii.xLarge, overflow: "hidden" }, button: { marginTop: e.spaces.space20, marginBottom: e.spaces.space12 }, description: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space12, alignItems: "center" }, name: { flexDirection: "row", justifyContent: "center", alignItems: "center" }, iconLock: { color: e.colors.text, marginStart: e.spaces.space2 }, text: { width: "100%", marginBottom: e.spaces.space12 }, placeholderImageContainer: { backgroundColor: e.colors.gray300, height: "100%" } })),
                L = k(N);
        },
        320588: (e, t, n) => {
            n.d(t, { Mt: () => p, Sm: () => m, lg: () => u });
            var r = n(111677),
                s = n.n(r),
                i = n(615656),
                o = n(601576);
            const l = s().add55942,
                a = s().ib8f5f3c,
                c = s().e20fc756,
                d = s().hae1c934,
                u = { customErrorHandler: () => (0, o.mf)({ text: l }), showToast: !0 },
                m = { customErrorHandler: () => (0, o.mf)({ text: a }), showToast: !0 },
                p = {
                    customErrorHandler: ({ errors: e }) => {
                        if (e) {
                            if (e.filter((e) => e?.code === i.ZP.ListAdminRightsError).length) return (0, o.mf)({ text: c });
                        }
                        return (0, o.mf)({ text: d });
                    },
                    showToast: !0,
                };
        },
        42508: (e, t, n) => {
            n.d(t, { Z: () => r });
            const r = Object.freeze({ FakeAccount: "fake_account", OffensiveProfileContent: "offensive_profile_content", SensitiveMedia: "sensitive_media", Timeout: "timeout" });
        },
        835546: (e, t, n) => {
            n.d(t, { ZP: () => s, n5: () => o });
            var r = n(42508);
            const s = ({ displaySensitiveMedia: e, isNotFound: t, isSuspended: n, isWithheld: r, user: s, userProfileInterstitialType: o, viewerUserId: l }) => {
                    const a = !!l && l === s.id_str,
                        c = s.blocked_by,
                        d = s.blocking,
                        u = i({ displaySensitiveMedia: e, isOwnProfile: a, user: s, userProfileInterstitialType: o }),
                        m = (a || !r) && !n;
                    return { avatar: a || (!u && !t && !n && !r), badges: a || !r, description: a || (!d && !c && !u && !n && !r), followButton: !(a || c || u || t || n || r), followersYouKnow: !a && !c && !d && !u && !t && !n && !r && (s.following || !s.protected), followIndicator: !r, fullName: m, label: m, stats: a || (!c && !u && !n && !r), subscriptionsCount: a || !s.has_hidden_subscriptions_on_profile };
                },
                i = ({ displaySensitiveMedia: e, isOwnProfile: t, user: n, userProfileInterstitialType: s }) => (s === r.Z.SensitiveMedia || s === r.Z.OffensiveProfileContent) && !(t || n.following || e),
                o = ({ isOwnProfile: e, isSoftBlockEnabled: t = !1, user: n }) => {
                    const r = n.blocked_by,
                        s = n.protected && !n.following;
                    return t ? e || !s : e || (!s && !r);
                };
        },
        286e3: (e, t, n) => {
            n.d(t, { Rc: () => m, nx: () => c });
            var r = n(499627),
                s = n(576469),
                i = n(390387);
            const o = "rweb.channelsTimelineBehavior",
                l = "channelsTimelineBehavior",
                a = Object.freeze({});
            const c = (e) => e[l],
                d = "rweb/channelsTimelineBehavior/UPDATE_LIST_RANKINGS",
                u = (e) => ({ payload: e, type: d }),
                m =
                    ({ listId: e, useRanked: t }) =>
                    (n, r, { userPersistence: i }) => {
                        const l = r(),
                            a = { ...c(l), [e]: { useRanked: t } };
                        n(u(a));
                        const d = s.Z.select(l, e);
                        return d && d.following ? i.get(o).then((n) => i.set(o, { ...n, [e]: { useRanked: t } })) : Promise.resolve();
                    };
            r.Z.register(
                {
                    [l]: function (e = a, t) {
                        return t && t.type === d ? { ...t.payload } : e;
                    },
                },
                () =>
                    (e, t, { userPersistence: n }) =>
                        (0, i.Qb)(t())
                            ? n.get(o).then((t) => {
                                  t && e(u(t));
                              })
                            : Promise.resolve(),
            );
        },
        510588: (e, t, n) => {
            n.d(t, { $5: () => u, By: () => g, DV: () => Z, Fz: () => h, Ge: () => E, Ns: () => P, Wy: () => f, _g: () => v, ax: () => w, cx: () => b, l1: () => y, tt: () => x, xh: () => p });
            var r = n(614983),
                s = n.n(r),
                i = n(842799),
                o = n(286e3),
                l = n(576469),
                a = n(919022),
                c = n(312771);
            const d = { url: "https://pbs.twimg.com/media/EXZ2rMvVAAAAfrN.png", width: 1125, height: 375 },
                u = (e, t) => {
                    const n = f(e, t),
                        r = w(e, t),
                        s = E(e, t);
                    return n ? `/i/lists/${n}` : r && s ? `/${r}/lists/${s}` : "";
                },
                m = (e, t) => t.match.params.listId || void 0,
                p = (e, t) => {
                    const n = t.match.params.listId;
                    return s()(n, "listId should always be specified"), n;
                },
                f = (e, t) =>
                    m(0, t) ||
                    ((e, t) => {
                        const n = h(e, t);
                        return n && n.id_str;
                    })(e, t),
                h = (e, t) => {
                    const n = m(0, t);
                    return n ? l.Z.select(e, n) : l.Z.selectByKey(e, _(e, t));
                },
                b = (e, t) => {
                    const n = h(e, t);
                    return n && n.following;
                },
                g = (e, t) => {
                    const n = h(e, t);
                    return n && n.name;
                },
                w = (e, t) => {
                    const n = m(0, t);
                    return t.match.params.screenName || void 0 || (n && l.Z.selectListAuthorScreenName(e, n));
                },
                E = (e, t) => {
                    const n = h(e, t);
                    return t.match.params.slug || (n && n.slug);
                },
                _ = (e, t) => {
                    const n = t.match.params.slug,
                        r = t.match.params.screenName;
                    return n && r ? (0, i.Z)(r, n) : "";
                },
                Z = (e, t) => {
                    const n =
                        f(e, t) ||
                        ((e, t) => {
                            const n = E(e, t),
                                r = w(e, t);
                            return n && r ? (0, i.Z)(r, n) : "";
                        })(e, t);
                    return l.Z.selectFetchStatus(e, n) || c.ZP.NONE;
                },
                y = (e, t) => {
                    const n = w(e, t);
                    return n ? a.ZP.selectByScreenName(e, n) : void 0;
                },
                v = (e, t) => {
                    const n = f(e, t),
                        r = (0, o.nx)(e);
                    return (n && r[n] && r[n].useRanked) || !1;
                },
                x = (e, t) => {
                    const n = l.Z.select(e, t);
                    if (n) {
                        const e = n.customBanner;
                        return e || n.defaultBanner;
                    }
                    return { crop: [], image: d };
                },
                P = (e, t) => {
                    const n = h(e, t);
                    return n?.mode;
                };
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => h });
            var r = n(202784),
                s = n(325686),
                i = n(827515),
                o = n(461756),
                l = n(731708),
                a = n(392237);
            const c = "up",
                d = "down",
                u = (e, t, n) => {
                    n((n) => {
                        const r = (0, i.Z)(e) ? (e > (n.count || 0) ? c : d) : c;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: r };
                    });
                },
                m = {};
            [c, d].forEach((e) => {
                const t = "0.3s";
                m[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === c ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === c ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const p = { position: "absolute" },
                f = a.default.create({ root: { overflow: "hidden" } }),
                h = (e) => {
                    const { children: t, containerStyle: n, count: a, ...d } = e,
                        [h, b] = r.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
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
                                if (o.Z.reducedMotionEnabled) b((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== h.pendingText) {
                                    t === h.text || ((0, i.Z)(e.count) && h.count === e.count) ? b((e) => ({ ...e, pendingCount: null, pendingText: null })) : (b((n) => ({ ...n, pendingCount: e.count, pendingText: t })), h.animating || u(e.count, t, b));
                                }
                        }, [t]),
                        r.useEffect(() => {
                            g.current &&
                                !1 === h.animating &&
                                (h.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              g.current && b((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : h.pendingText && u(h.pendingCount, h.pendingText, b));
                        }, [h.animating, h.oldText]),
                        r.useMemo(() => {
                            const e = m[h.transitionDirection],
                                t = h.oldText && !o.Z.reducedMotionEnabled,
                                i = !h.animating && h.oldText && !o.Z.reducedMotionEnabled,
                                a = { ...p, ...(h.animating ? e.post : e.active) },
                                c = { ...(i ? e.pre : e.active) };
                            return r.createElement(
                                s.Z,
                                { style: [f.root, n] },
                                t ? r.createElement("span", { style: a }, r.createElement(l.ZP, d, h.oldText)) : null,
                                r.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(g.current, b),
                                        style: c,
                                    },
                                    r.createElement(l.ZP, d, h.text),
                                ),
                            );
                        }, [n, d, h, g, b])
                    );
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.UserLists~ondemand.HoverCard.68786eda.js.map
