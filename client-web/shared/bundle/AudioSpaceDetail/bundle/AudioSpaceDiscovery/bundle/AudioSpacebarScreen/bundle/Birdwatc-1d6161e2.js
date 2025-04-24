"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1d6161e2"],
    {
        959658: (e, t, r) => {
            r.d(t, { b: () => _ });
            var n = r(807896),
                a = r(202784),
                s = r(325686),
                i = r(292627),
                o = r(365023),
                l = r(664064),
                c = r(392237);
            const d = a.createContext({ query: null });
            var u = r(687103),
                m = r(461756),
                p = r(925885),
                f = r(952793);
            function h() {
                const e = (0, f.hC)("hashfetti_enabled"),
                    t = (0, f.hC)("hashfetti_all_hashflags"),
                    r = (0, f.D2)("hashfetti_duration_ms").getNumberValue(4e3),
                    n = (0, f.D2)("hashfetti_particle_count").getNumberValue(30),
                    { query: s } = a.useContext(d),
                    i = (0, u.C)();
                if (!e || !s || m.Z.reducedMotionEnabled) return null;
                const o = (0, p.Z)(s);
                let l;
                for (const e of o) {
                    const t = i.getBrandedHashtag(e.hashtag);
                    if (t) {
                        l = t;
                        break;
                    }
                }
                const c = l?.url;
                return c && (l?.hashfetti || t) ? { url: c, duration_ms: r, count: n } : null;
            }
            function g() {
                const e = h();
                if (!e) return null;
                const t = b.container;
                return a.createElement(
                    i.Z.Hashfetti,
                    null,
                    a.createElement(o.Z, { id: "Hashfetti" }, (r, i) => a.createElement(s.Z, (0, n.Z)({ ref: r() }, i({ style: t })), a.createElement(l.Z, { autoplay: !0, count: e.count, duration: e.duration_ms, image_url: e.url, max_rotation: 0.125 * Math.PI, type: "image" }))),
                );
            }
            g.Provider = function (e) {
                const { query: t } = e;
                return a.createElement(d.Provider, { value: { query: t } }, e.children);
            };
            const _ = g,
                b = c.default.create((e) => ({ container: { pointerEvents: "none", position: "fixed", width: "100%", height: "100%", top: 0, start: 0 } }));
        },
        721754: (e, t, r) => {
            r.d(t, { Z: () => l });
            var n = r(202784),
                a = r(325686),
                s = r(392237),
                i = r(674132);
            const o = r.n(i)().h63a5c3c,
                l = ({ "aria-label": e = o, children: t, onClick: r, renderMenu: s, shouldMountMenu: i, style: l, testID: d }) => {
                    const [u, m] = n.useState(!1),
                        p = i || u,
                        f = !u;
                    return n.createElement(
                        a.Z,
                        {
                            "aria-expanded": !!u,
                            "aria-haspopup": "menu",
                            "aria-label": e,
                            onClick: function (e) {
                                r && r(e), m(!0);
                            },
                            role: "button",
                            style: [c.cursor, l],
                            testID: d,
                        },
                        t,
                        p
                            ? s(function () {
                                  m(!1);
                              }, f)
                            : null,
                    );
                },
                c = s.default.create(() => ({ cursor: { cursor: "pointer" } }));
        },
        293605: (e, t, r) => {
            r.d(t, { Z: () => w });
            var n = r(202784),
                a = r(325686),
                s = r(731708),
                i = r(154003),
                o = r(392237),
                l = r(674132),
                c = r.n(l),
                d = r(211971),
                u = r(443781),
                m = r(736063),
                p = r(177210),
                f = r(782826),
                h = r(725405),
                g = r(199232);
            const _ = c().fbf83158,
                b = c().jadeb4da,
                y = c().bce3726a,
                E = ({ entryPoint: e, originProduct: t }) => {
                    const r = (0, h.Z)(),
                        { origin: o } = f.ZP.get(),
                        l = (0, p.Z)({ returnUrl: `${o}/i/profile`, originProduct: t }),
                        c = `payment_failure_alert_card_${e}_sidebar`;
                    n.useEffect(() => {
                        r.scribe({ component: c, action: "impression" });
                    }, [r, c]);
                    const u = n.useCallback(() => {
                        r.scribe({ component: c, action: "click", element: `payment_failure_${e}_sidebar` }), l?.();
                    }, [l, r, c, e]);
                    return n.createElement(a.Z, { style: x.cardBlock, testID: "paymentCardBlock" }, n.createElement(a.Z, { style: x.inner }, n.createElement(s.ZP, { size: "headline1", style: x.heading, weight: "heavy" }, n.createElement(d.default, { style: x.icon, testID: "errorIcon" }), _), n.createElement(s.ZP, { size: "body", style: x.subheading }, b), n.createElement(i.ZP, { onClick: u, style: x.button, type: "primaryFilled" }, y)));
                },
                Z = ({ entryPoint: e }) => {
                    const { featureSwitches: t } = (0, u.QZ)(),
                        { hasPremiumPaymentFailure: r, hasVerifiedOrgPaymentFailure: s } = (0, g.Z)(["VerifiedOrganization", "Premium"]);
                    return (s && t.isTrue("subscriptions_management_failed_payment_profile_card_enabled")) || (r && t.isTrue("subscriptions_management_failed_payment_message_premium_enabled")) ? n.createElement(a.Z, { style: x.paddedContainer, testID: "paymentCardView" }, n.createElement(E, { entryPoint: e, originProduct: s ? "VerifiedOrganizations" : "TwitterBlue" })) : null;
                },
                C = ({ entryPoint: e }) => n.createElement(m.H, { errorConfig: { context: "payment_alert_card" } }, n.createElement(Z, { entryPoint: e })),
                x = o.default.create((e) => ({ cardBlock: { backgroundColor: e.colors.red0, borderColor: e.colors.red100, borderWidth: "1px", borderRadius: e.borderRadii.medium, overflow: "hidden" }, inner: { padding: e.spaces.space16, maxWidth: "100%", gap: e.spaces.space8 }, button: { alignSelf: "flex-start", paddingHorizontal: 0, marginTop: e.spaces.space8 }, heading: { marginBottom: e.spaces.space8 }, subheading: { marginBottom: e.spaces.space8 }, icon: { color: o.default.theme.colors.red500, marginEnd: e.spaces.space4 }, paddedContainer: { paddingBottom: e.spaces.space16 } })),
                w = n.memo(C);
        },
        680961: (e, t, r) => {
            r.d(t, { Z: () => o });
            var n = r(202784),
                a = r(325686),
                s = r(143778);
            class i extends n.Component {
                scrollToNewest(e) {}
                isAtNewest() {
                    return !0;
                }
                adjustFocusBy(e) {}
                componentDidMount() {
                    const { onPositionRestored: e } = this.props;
                    e && e();
                }
                componentDidUpdate(e) {
                    const { cacheKey: t, onPositionRestored: r } = this.props;
                    t !== e.cacheKey && r && r();
                }
                _getItemRenderer(e) {
                    const { renderer: t } = this.props;
                    return n.createElement(n.Fragment, null, t(e));
                }
                render() {
                    const { footer: e, header: t, identityFunction: r, items: s, noItemsRenderer: i } = this.props;
                    return n.createElement(a.Z, null, t, s?.length ? s.map((e) => n.cloneElement(this._getItemRenderer(e), { key: r(e) })) : i(), e);
                }
            }
            (i.defaultProps = { noItemsRenderer: s.Z, footer: null, header: null }), (i.displayName = "SimpleScroller");
            const o = i;
        },
        334346: (e, t, r) => {
            r.d(t, { C: () => l, Z: () => o });
            var n = r(807896),
                a = r(202784),
                s = r(524084),
                i = r(768572);
            const o = "stable_sort_index",
                l = a.forwardRef((e, t) => {
                    const r = e.cacheKey;
                    return a.createElement(i.ZP, { identifier: r }, a.createElement(s.Z, (0, n.Z)({ ref: t }, e)));
                });
        },
        674530: (e, t, r) => {
            r.d(t, { m: () => n });
            r(202784);
            const n = Object.freeze({ Carousel: "Carousel", CompactCarousel: "CompactCarousel", GridCarousel: "GridCarousel", PagedCarousel: "PagedCarousel", Vertical: "Vertical" });
        },
        252021: (e, t, r) => {
            r.d(t, { Z: () => i });
            var n = r(202784),
                a = r(107267),
                s = r(115553);
            const i = (e) => {
                (0, a.useHistory)();
                return n.createElement(s.A, e);
            };
        },
        703572: (e, t, r) => {
            r.d(t, { O: () => R });
            var n = r(202784),
                a = r(858440),
                s = r(325686),
                i = r(844685),
                o = r(392237),
                l = r(674132),
                c = r.n(l),
                d = r(952793),
                u = r(880647),
                m = r(125363),
                p = r(936572),
                f = r(250901),
                h = r(682461),
                g = r(290402),
                _ = (r(136728), r(107267)),
                b = r(530732),
                y = r(992942),
                E = r(823161),
                Z = r(366635),
                C = r(451051),
                x = r(379990);
            const w = c().ic1e826e,
                v = ({ isFocused: e, isHovered: t, isPressed: r, onPress: a, style: i }) => n.createElement(s.Z, { "aria-label": w, onPress: a }, n.createElement(x.Z, { isFocused: e, isHovered: t, isPressed: r, style: i })),
                P = ({ tweet: e }) => {
                    const t = n.useRef(),
                        r = (0, _.useHistory)(),
                        a = n.useCallback(() => {
                            e?.id_str && e?.user?.screen_name && r.push(`/${e?.user?.screen_name}/status/${e.id_str}`);
                        }, [r, e?.id_str, e?.user?.screen_name]);
                    if (!e) return null;
                    const i = e.extended_entities?.media?.find((e) => "video" === e.type);
                    return i
                        ? n.createElement(
                              s.Z,
                              { style: k.container },
                              n.createElement(b.Z, { "aria-label": i.ext_alt_text, onClick: a, ref: t, role: "link", style: k.videoContainer, testID: `suggested-video-card-${e?.id_str}` }, ({ isFocused: e, isHovered: t, isPressed: r }) => n.createElement(n.Fragment, null, n.createElement(y.Z, { "aria-label": i?.ext_alt_text, role: "img", source: i?.media_url_https, style: k.backgroundImage }), n.createElement(s.Z, { style: k.innerContentContainer }, n.createElement(v, { isFocused: e, isHovered: t, isPressed: r, onPress: a, style: k.button })))),
                              n.createElement(s.Z, { style: k.userRow }, n.createElement(E.default, { "aria-label": e?.user?.name, screenName: e?.user?.screen_name, size: "medium", style: k.userAvatar, uri: e?.user?.profile_image_url_https, withLink: !0 }), n.createElement(Z.Z, { affiliateBadgeInfo: e.user.highlightedLabel, badgeContext: "content", isBlueVerified: e.user.is_blue_verified, isProtected: e.user.protected, isVerified: e.user.verified, name: e.user.name, nameSize: "subtext2", screenName: e.user.screen_name, verifiedType: e.user.verified_type, withLink: !0, withScreenName: !1 })),
                              n.createElement(s.Z, null, n.createElement(C.Z, { color: "gray700", displayTextRange: e?.display_text_range, isCondensed: !0, numberOfLines: 2, size: "subtext2", text: e?.text })),
                          )
                        : null;
                },
                k = o.default.create((e) => ({ container: {}, videoContainer: { aspectRatio: 0.8, color: e.colors.whiteOnColor, borderRadius: e.borderRadii.medium }, innerContentContainer: { padding: e.spaces.space12, display: "flex", height: "100%", justifyContent: "center", alignItems: "center" }, backgroundImage: { position: "absolute", width: "100%", height: "100%", borderRadius: e.spaces.space12 }, button: { width: e.spaces.space32, height: e.spaces.space32 }, userRow: { display: "flex", flexDirection: "row", alignItems: "center", paddingTop: e.spaces.space4, paddingBottom: e.spaces.space4 }, userAvatar: { marginEnd: e.spaces.space4 } })),
                I = c().fce9ecce,
                R = () => {
                    const e = (0, m.I0)(),
                        t = (0, m.v9)(f.jK),
                        r = (0, m.v9)(f.UD),
                        o = (0, m.v9)(p.op),
                        l = (0, d.hC)("rweb_sourcemap_migration_side_expand_by_default"),
                        c = (0, a.Z)(),
                        _ = u.Z.isTwoColumnWiderLayoutRedesign(c.width, o ?? l),
                        b = _ ? 4 : 2,
                        y = n.useMemo(
                            () =>
                                t?.content
                                    ?.filter((e) => e.id.startsWith("for-you-multiple-row"))
                                    .reduce((e, t) => [...e, ...t.content], [])
                                    .slice(0, b) || [],
                            [b, t?.content],
                        ),
                        E = n.useCallback(
                            () =>
                                n.createElement(
                                    s.Z,
                                    null,
                                    n.createElement(i.Z, { text: I }),
                                    n.createElement(
                                        s.Z,
                                        { style: [T.row, _ && T.rowExpanded] },
                                        y.map((e) => n.createElement(P, { key: e.id_str, tweet: e })),
                                    ),
                                ),
                            [y, _],
                        );
                    return (
                        n.useEffect(() => {
                            e((0, h.L8)());
                        }, [e]),
                        n.createElement(g.Z, {
                            fetchStatus: r,
                            onRequestRetry: function () {
                                e((0, h.L8)());
                            },
                            render: E,
                        })
                    );
                },
                T = o.default.create((e) => ({ row: { display: "grid", gridGap: e.spaces.space8, gridTemplateColumns: "1fr 1fr", maxWidth: "100%", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, width: "100%" }, rowExpanded: { gridTemplateColumns: "1fr 1fr 1fr 1fr" } }));
        },
        985118: (e, t, r) => {
            r.d(t, { B: () => l });
            var n = r(202784),
                a = r(107267),
                s = r(523561),
                i = r(337394),
                o = r(443781);
            function l() {
                const e = (0, a.useLocation)(),
                    { featureSwitches: t, loggedInUserId: r, userClaims: s } = (0, o.QZ)(),
                    l = t.isTrue("subscriptions_sign_up_enabled"),
                    d = i.cX.some((e) => s.hasSubscription(e)),
                    u = "/home" === e.pathname,
                    m = e.pathname.startsWith("/i/lists");
                return l && r && !d && (u || m) ? n.createElement(c, null) : null;
            }
            const c = (0, s.Z)({ loader: () => r.e("loader.GetVerifiedSidebar").then(r.bind(r, 86029)) });
        },
        638537: (e, t, r) => {
            r.d(t, { Z: () => h });
            var n = r(674132),
                a = r.n(n),
                s = r(833458),
                i = r(530813);
            const o = a().e40252de,
                l = a().ae225c26,
                c = a().a96d2628,
                d = a().d00abae0,
                u = a().e566dd06,
                m = a().j3cc1526,
                p = a().h435716e,
                f = a().e8ba412e,
                h = (e) => {
                    const { hideSubtext: t = !1, list: r } = e,
                        n = r.muting,
                        a = { text: n ? l : o, Icon: n ? s.default : i.default, onClick: () => g(e), subText: n ? p : d };
                    return t && ((a.text = n ? m : c), (a.subText = void 0)), a;
                },
                g = (e) => {
                    const { addToast: t, list: r, scribe: n, toggleMute: a } = e;
                    if (!r || !r.id_str) return;
                    const { id_str: s, muting: i } = r,
                        o = i ? f : u,
                        l = i ? "unmute_list" : "mute_list";
                    a(s, { mute: !i }).then(() => {
                        t && t({ text: o });
                    }),
                        n({ action: "click", element: l });
                };
        },
        231035: (e, t, r) => {
            r.d(t, { Z: () => g });
            var n = r(202784),
                a = r(420740),
                s = r(108362),
                i = r(731708),
                o = r(154003),
                l = r(392237),
                c = r(674132),
                d = r.n(c),
                u = r(272175);
            const m = (0, r(500002).ZP)(({ staticContext: e, status: t = 404 }) => (e && (e.statusCode = t), n.createElement(u.ql, null, n.createElement("meta", { content: "noindex, nofollow", name: "robots" })))),
                p = "error-detail",
                f = d().e49537c2,
                h = d().a9ae1e78;
            class g extends n.PureComponent {
                render() {
                    return n.createElement(a.Z, { testID: p }, n.createElement(m, null), n.createElement(s.Z, { style: _.root }, n.createElement(i.ZP, { align: "center", color: "gray700", style: _.retryText }, f), n.createElement(o.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, h)));
                }
            }
            const _ = l.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1d6161e2.2e17ee8a.js.map
