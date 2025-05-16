"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1d6161e2"],
    {
        959658: (e, a, d) => {
            d.d(a, { b: () => M });
            var r = d(807896),
                n = d(202784),
                o = d(325686),
                t = d(292627),
                l = d(365023),
                s = d(664064),
                i = d(392237);
            const u = n.createContext({ query: null });
            var c = d(687103),
                m = d(461756),
                h = d(925885),
                b = d(952793);
            function D() {
                const e = (0, b.hC)("hashfetti_enabled"),
                    a = (0, b.hC)("hashfetti_all_hashflags"),
                    d = (0, b.D2)("hashfetti_duration_ms").getNumberValue(4e3),
                    r = (0, b.D2)("hashfetti_particle_count").getNumberValue(30),
                    { query: o } = n.useContext(u),
                    t = (0, c.Ck)();
                if (!e || !o || m.Z.reducedMotionEnabled) return null;
                const l = (0, h.Z)(o);
                let s;
                for (const e of l) {
                    const a = t.getBrandedHashtag(e.hashtag);
                    if (a) {
                        s = a;
                        break;
                    }
                }
                const i = s?.url;
                return i && (s?.hashfetti || a) ? { url: i, duration_ms: d, count: r } : null;
            }
            function p() {
                const e = D();
                if (!e) return null;
                const a = f.container;
                return n.createElement(
                    t.Z.Hashfetti,
                    null,
                    n.createElement(l.Z, { id: "Hashfetti" }, (d, t) => n.createElement(o.Z, (0, r.Z)({ ref: d() }, t({ style: a })), n.createElement(s.Z, { autoplay: !0, count: e.count, duration: e.duration_ms, image_url: e.url, max_rotation: 0.125 * Math.PI, type: "image" }))),
                );
            }
            p.Provider = function (e) {
                const { query: a } = e;
                return n.createElement(u.Provider, { value: { query: a } }, e.children);
            };
            const M = p,
                f = i.default.create((e) => ({ container: { pointerEvents: "none", position: "fixed", width: "100%", height: "100%", top: 0, start: 0 } }));
        },
        721754: (e, a, d) => {
            d.d(a, { Z: () => s });
            var r = d(202784),
                n = d(325686),
                o = d(392237),
                t = d(674132);
            const l = d.n(t)().h63a5c3c,
                s = ({ "aria-label": e = l, children: a, onClick: d, renderMenu: o, shouldMountMenu: t, style: s, testID: u }) => {
                    const [c, m] = r.useState(!1),
                        h = t || c,
                        b = !c;
                    return r.createElement(
                        n.Z,
                        {
                            "aria-expanded": !!c,
                            "aria-haspopup": "menu",
                            "aria-label": e,
                            onClick: function (e) {
                                d && d(e), m(!0);
                            },
                            role: "button",
                            style: [i.cursor, s],
                            testID: u,
                        },
                        a,
                        h
                            ? o(function () {
                                  m(!1);
                              }, b)
                            : null,
                    );
                },
                i = o.default.create(() => ({ cursor: { cursor: "pointer" } }));
        },
        293605: (e, a, d) => {
            d.d(a, { Z: () => P });
            var r = d(202784),
                n = d(325686),
                o = d(731708),
                t = d(154003),
                l = d(392237),
                s = d(674132),
                i = d.n(s),
                u = d(211971),
                c = d(443781),
                m = d(736063),
                h = d(177210),
                b = d(782826),
                D = d(725405),
                p = d(199232);
            const M = i().fbf83158,
                f = i().jadeb4da,
                w = i().bce3726a,
                g = ({ entryPoint: e, originProduct: a }) => {
                    const d = (0, D.Z)(),
                        { origin: l } = b.ZP.get(),
                        s = (0, h.Z)({ returnUrl: `${l}/i/profile`, originProduct: a }),
                        i = `payment_failure_alert_card_${e}_sidebar`;
                    r.useEffect(() => {
                        d.scribe({ component: i, action: "impression" });
                    }, [d, i]);
                    const c = r.useCallback(() => {
                        d.scribe({ component: i, action: "click", element: `payment_failure_${e}_sidebar` }), s?.();
                    }, [s, d, i, e]);
                    return r.createElement(n.Z, { style: C.cardBlock, testID: "paymentCardBlock" }, r.createElement(n.Z, { style: C.inner }, r.createElement(o.ZP, { size: "headline1", style: C.heading, weight: "heavy" }, r.createElement(u.default, { style: C.icon, testID: "errorIcon" }), M), r.createElement(o.ZP, { size: "body", style: C.subheading }, f), r.createElement(t.ZP, { onClick: c, style: C.button, type: "primaryFilled" }, w)));
                },
                y = ({ entryPoint: e }) => {
                    const { featureSwitches: a } = (0, c.QZ)(),
                        { hasPremiumPaymentFailure: d, hasVerifiedOrgPaymentFailure: o } = (0, p.Z)(["VerifiedOrganization", "Premium"]);
                    return (o && a.isTrue("subscriptions_management_failed_payment_profile_card_enabled")) || (d && a.isTrue("subscriptions_management_failed_payment_message_premium_enabled")) ? r.createElement(n.Z, { style: C.paddedContainer, testID: "paymentCardView" }, r.createElement(g, { entryPoint: e, originProduct: o ? "VerifiedOrganizations" : "TwitterBlue" })) : null;
                },
                _ = ({ entryPoint: e }) => r.createElement(m.H, { errorConfig: { context: "payment_alert_card" } }, r.createElement(y, { entryPoint: e })),
                C = l.default.create((e) => ({ cardBlock: { backgroundColor: e.colors.red0, borderColor: e.colors.red100, borderWidth: "1px", borderRadius: e.borderRadii.medium, overflow: "hidden" }, inner: { padding: e.spaces.space16, maxWidth: "100%", gap: e.spaces.space8 }, button: { alignSelf: "flex-start", paddingHorizontal: 0, marginTop: e.spaces.space8 }, heading: { marginBottom: e.spaces.space8 }, subheading: { marginBottom: e.spaces.space8 }, icon: { color: l.default.theme.colors.red500, marginEnd: e.spaces.space4 }, paddedContainer: { paddingBottom: e.spaces.space16 } })),
                P = r.memo(_);
        },
        680961: (e, a, d) => {
            d.d(a, { Z: () => l });
            var r = d(202784),
                n = d(325686),
                o = d(143778);
            class t extends r.Component {
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
                    const { cacheKey: a, onPositionRestored: d } = this.props;
                    a !== e.cacheKey && d && d();
                }
                _getItemRenderer(e) {
                    const { renderer: a } = this.props;
                    return r.createElement(r.Fragment, null, a(e));
                }
                render() {
                    const { footer: e, header: a, identityFunction: d, items: o, noItemsRenderer: t } = this.props;
                    return r.createElement(n.Z, null, a, o?.length ? o.map((e) => r.cloneElement(this._getItemRenderer(e), { key: d(e) })) : t(), e);
                }
            }
            (t.defaultProps = { noItemsRenderer: o.Z, footer: null, header: null }), (t.displayName = "SimpleScroller");
            const l = t;
        },
        334346: (e, a, d) => {
            d.d(a, { C: () => s, Z: () => l });
            var r = d(807896),
                n = d(202784),
                o = d(524084),
                t = d(768572);
            const l = "stable_sort_index",
                s = n.forwardRef((e, a) => {
                    const d = e.cacheKey;
                    return n.createElement(t.ZP, { identifier: d }, n.createElement(o.Z, (0, r.Z)({ ref: a }, e)));
                });
        },
        674530: (e, a, d) => {
            d.d(a, { m: () => r });
            d(202784);
            const r = Object.freeze({ Carousel: "Carousel", CompactCarousel: "CompactCarousel", GridCarousel: "GridCarousel", PagedCarousel: "PagedCarousel", Vertical: "Vertical" });
        },
        252021: (e, a, d) => {
            d.d(a, { Z: () => t });
            var r = d(202784),
                n = d(107267),
                o = d(115553);
            const t = (e) => {
                (0, n.useHistory)();
                return r.createElement(o.A, e);
            };
        },
        703572: (e, a, d) => {
            d.d(a, { O: () => v });
            var r = d(202784),
                n = d(858440),
                o = d(325686),
                t = d(844685),
                l = d(392237),
                s = d(674132),
                i = d.n(s),
                u = d(952793),
                c = d(880647),
                m = d(125363),
                h = d(936572),
                b = d(250901),
                D = d(682461),
                p = d(290402),
                M = (d(136728), d(107267)),
                f = d(530732),
                w = d(992942),
                g = d(823161),
                y = d(366635),
                _ = d(451051),
                C = d(379990);
            const P = i().ic1e826e,
                A = ({ isFocused: e, isHovered: a, isPressed: d, onPress: n, style: t }) => r.createElement(o.Z, { "aria-label": P, onPress: n }, r.createElement(C.Z, { isFocused: e, isHovered: a, isPressed: d, style: t })),
                k = ({ tweet: e }) => {
                    const a = r.useRef(),
                        d = (0, M.useHistory)(),
                        n = r.useCallback(() => {
                            e?.id_str && e?.user?.screen_name && d.push(`/${e?.user?.screen_name}/status/${e.id_str}`);
                        }, [d, e?.id_str, e?.user?.screen_name]);
                    if (!e) return null;
                    const t = e.extended_entities?.media?.find((e) => "video" === e.type);
                    return t
                        ? r.createElement(
                              o.Z,
                              { style: E.container },
                              r.createElement(f.Z, { "aria-label": t.ext_alt_text, onClick: n, ref: a, role: "link", style: E.videoContainer, testID: `suggested-video-card-${e?.id_str}` }, ({ isFocused: e, isHovered: a, isPressed: d }) => r.createElement(r.Fragment, null, r.createElement(w.Z, { "aria-label": t?.ext_alt_text, role: "img", source: t?.media_url_https, style: E.backgroundImage }), r.createElement(o.Z, { style: E.innerContentContainer }, r.createElement(A, { isFocused: e, isHovered: a, isPressed: d, onPress: n, style: E.button })))),
                              r.createElement(o.Z, { style: E.userRow }, r.createElement(g.default, { "aria-label": e?.user?.name, screenName: e?.user?.screen_name, size: "medium", style: E.userAvatar, uri: e?.user?.profile_image_url_https, withLink: !0 }), r.createElement(y.Z, { affiliateBadgeInfo: e.user.highlightedLabel, badgeContext: "content", isBlueVerified: e.user.is_blue_verified, isProtected: e.user.protected, isVerified: e.user.verified, name: e.user.name, nameSize: "subtext2", screenName: e.user.screen_name, verifiedType: e.user.verified_type, withLink: !0, withScreenName: !1 })),
                              r.createElement(o.Z, null, r.createElement(_.Z, { color: "gray700", displayTextRange: e?.display_text_range, isCondensed: !0, numberOfLines: 2, size: "subtext2", text: e?.text })),
                          )
                        : null;
                },
                E = l.default.create((e) => ({ container: {}, videoContainer: { aspectRatio: 0.8, color: e.colors.whiteOnColor, borderRadius: e.borderRadii.medium }, innerContentContainer: { padding: e.spaces.space12, display: "flex", height: "100%", justifyContent: "center", alignItems: "center" }, backgroundImage: { position: "absolute", width: "100%", height: "100%", borderRadius: e.spaces.space12 }, button: { width: e.spaces.space32, height: e.spaces.space32 }, userRow: { display: "flex", flexDirection: "row", alignItems: "center", paddingTop: e.spaces.space4, paddingBottom: e.spaces.space4 }, userAvatar: { marginEnd: e.spaces.space4 } })),
                Z = i().fce9ecce,
                v = () => {
                    const e = (0, m.I0)(),
                        a = (0, m.v9)(b.jK),
                        d = (0, m.v9)(b.UD),
                        l = (0, m.v9)(h.op),
                        s = (0, u.hC)("rweb_sourcemap_migration_side_expand_by_default"),
                        i = (0, n.Z)(),
                        M = c.Z.isTwoColumnWiderLayoutRedesign(i.width, l ?? s),
                        f = M ? 4 : 2,
                        w = r.useMemo(
                            () =>
                                a?.content
                                    ?.filter((e) => e.id.startsWith("for-you-multiple-row"))
                                    .reduce((e, a) => [...e, ...a.content], [])
                                    .slice(0, f) || [],
                            [f, a?.content],
                        ),
                        g = r.useCallback(
                            () =>
                                r.createElement(
                                    o.Z,
                                    null,
                                    r.createElement(t.Z, { text: Z }),
                                    r.createElement(
                                        o.Z,
                                        { style: [I.row, M && I.rowExpanded] },
                                        w.map((e) => r.createElement(k, { key: e.id_str, tweet: e })),
                                    ),
                                ),
                            [w, M],
                        );
                    return (
                        r.useEffect(() => {
                            e((0, D.L8)());
                        }, [e]),
                        r.createElement(p.Z, {
                            fetchStatus: d,
                            onRequestRetry: function () {
                                e((0, D.L8)());
                            },
                            render: g,
                        })
                    );
                },
                I = l.default.create((e) => ({ row: { display: "grid", gridGap: e.spaces.space8, gridTemplateColumns: "1fr 1fr", maxWidth: "100%", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, width: "100%" }, rowExpanded: { gridTemplateColumns: "1fr 1fr 1fr 1fr" } }));
        },
        61261: (e, a, d) => {
            d.d(a, { Z: () => r });
            d(202784);
            const r = (0, d(523561).Z)({
                loader: () =>
                    Promise.all([
                        d.e("icons.16"),
                        d.e("modules.common-e907d115"),
                        d.e("modules.common-e019dbda"),
                        d.e("modules.audio-6107ac1a"),
                        d.e("modules.audio-b953418a"),
                        d.e("modules.audio-7c51e6a7"),
                        d.e("modules.audio-04db59e9"),
                        d.e("modules.audio-76583d6c"),
                        d.e("modules.audio-b7a8a5fb"),
                        d.e("modules.audio-51f6e793"),
                        d.e("modules.audio-e019dbda"),
                        d.e("modules.audio-262c94d4"),
                        d.e("modules.audio-c6fe4ea4"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        d.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        d.e("shared~loader.Typeahead~loader.AppModules~loader.DMDrawer~ondemand.HoverCard~ondemand.NotFound~bundle.AboutTh"),
                        d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-b2e830dd"),
                        d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-01ad0730"),
                        d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-bf625406"),
                        d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ab949d70"),
                        d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-6cce8a9f"),
                        d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-ff0fc217"),
                        d.e("shared~loader.DashMenu~loader.SideNav~loader.SideNavRedesign~loader.AppModules~loader.DMDrawer~bundl-93606ba8"),
                        d.e("shared~loader.DMDrawer~bundle.ReaderMode~bundle.Articles~bundle.AudioSpacePeek~bundle.Birdwatch~bundle.Brande"),
                        d.e("shared~loader.Typeahead~loader.DMDrawer~ondemand.HoverCard~bundle.ReaderMode~bundle.AudioSpacePeek~bundle.Bir"),
                        d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-c9d567be"),
                        d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-7a04a44b"),
                        d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-db6b2e3a"),
                        d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-4974a044"),
                        d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-2a74f407"),
                        d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-757f3ab2"),
                        d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-f3039e62"),
                        d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e75d887d"),
                        d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-b93f71f2"),
                        d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-743779ef"),
                        d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-e851f17f"),
                        d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-29ff9b73"),
                        d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d622e6ad"),
                        d.e("shared~bundle.ReaderMode~bundle.Birdwatch~bundle.TwitterArticles~bundle.Compose~bundle.Settings~bund-d425713a"),
                        d.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-8d7085c2"),
                        d.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-53f39e22"),
                        d.e("shared~loader.DMDrawer~bundle.Birdwatch~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompos-167a4ae5"),
                        d.e("shared~bundle.Birdwatch~bundle.News~bundle.Grok~ondemand.News~loader.inlineTombstoneHandler~loader.tweetHandl"),
                        d.e("loader.TryNewsSidebar"),
                    ]).then(d.bind(d, 960334)),
            });
        },
        985118: (e, a, d) => {
            d.d(a, { B: () => s });
            var r = d(202784),
                n = d(107267),
                o = d(523561),
                t = d(337394),
                l = d(443781);
            function s() {
                const e = (0, n.useLocation)(),
                    { featureSwitches: a, loggedInUserId: d, userClaims: o } = (0, l.QZ)(),
                    s = a.isTrue("subscriptions_sign_up_enabled"),
                    u = t.cX.some((e) => o.hasSubscription(e)),
                    c = "/home" === e.pathname,
                    m = e.pathname.startsWith("/i/lists");
                return s && d && !u && (c || m) ? r.createElement(i, null) : null;
            }
            const i = (0, o.Z)({ loader: () => d.e("loader.GetVerifiedSidebar").then(d.bind(d, 86029)) });
        },
        638537: (e, a, d) => {
            d.d(a, { Z: () => D });
            var r = d(674132),
                n = d.n(r),
                o = d(833458),
                t = d(530813);
            const l = n().e40252de,
                s = n().ae225c26,
                i = n().a96d2628,
                u = n().d00abae0,
                c = n().e566dd06,
                m = n().j3cc1526,
                h = n().h435716e,
                b = n().e8ba412e,
                D = (e) => {
                    const { hideSubtext: a = !1, list: d } = e,
                        r = d.muting,
                        n = { text: r ? s : l, Icon: r ? o.default : t.default, onClick: () => p(e), subText: r ? h : u };
                    return a && ((n.text = r ? m : i), (n.subText = void 0)), n;
                },
                p = (e) => {
                    const { addToast: a, list: d, scribe: r, toggleMute: n } = e;
                    if (!d || !d.id_str) return;
                    const { id_str: o, muting: t } = d,
                        l = t ? b : c,
                        s = t ? "unmute_list" : "mute_list";
                    n(o, { mute: !t }).then(() => {
                        a && a({ text: l });
                    }),
                        r({ action: "click", element: s });
                };
        },
        231035: (e, a, d) => {
            d.d(a, { Z: () => p });
            var r = d(202784),
                n = d(420740),
                o = d(108362),
                t = d(731708),
                l = d(154003),
                s = d(392237),
                i = d(674132),
                u = d.n(i),
                c = d(272175);
            const m = (0, d(500002).ZP)(({ staticContext: e, status: a = 404 }) => (e && (e.statusCode = a), r.createElement(c.ql, null, r.createElement("meta", { content: "noindex, nofollow", name: "robots" })))),
                h = "error-detail",
                b = u().e49537c2,
                D = u().a9ae1e78;
            class p extends r.PureComponent {
                render() {
                    return r.createElement(n.Z, { testID: h }, r.createElement(m, null), r.createElement(o.Z, { style: M.root }, r.createElement(t.ZP, { align: "center", color: "gray700", style: M.retryText }, b), r.createElement(l.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, D)));
                }
            }
            const M = s.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.AudioSpaceDetail~bundle.AudioSpaceDiscovery~bundle.AudioSpacebarScreen~bundle.Birdwatc-1d6161e2.248c4a2a.js.map
