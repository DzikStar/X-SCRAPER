"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserProfile-0127dd92"],
    {
        614185: (e, o, a) => {
            a.d(o, { Z: () => n });
            a(202784);
            const n = (0, a(523561).Z)({
                loader: () =>
                    Promise.all([
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2078c561"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-ae204d10"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-f0be4555"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-a8f633cf"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3357bcf2"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-64ffe41f"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-4514ff28"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-6a872481"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-58d4ab8e"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-84815b2f"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-b600c04d"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-760bf32a"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c85e798b"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-63e1b11c"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7ec4485e"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-0157ee89"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7796c48c"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-647e57f3"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-885c42d5"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-7082ec04"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-c977f3f0"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-bde9e8ed"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78eb13f6"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-83ae13c2"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-db3d5daf"),
                        a.e("shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-2d219c28"),
                        a.e("ondemand.Balloons"),
                    ]).then(a.bind(a, 103609)),
            });
        },
        392049: (e, o, a) => {
            a.d(o, { Z: () => f });
            var n = a(202784),
                r = a(325686),
                t = a(157130),
                l = a(731708),
                s = a(154003),
                d = a(392237),
                i = a(111677),
                c = a.n(i),
                u = a(144251),
                m = a(187669),
                p = a(725405);
            const h = c().dd3d10f6,
                b = c().i06d4712,
                D = c().j354c438,
                f = () => {
                    const e = (0, p.Z)();
                    (0, m.q)(() => {
                        e.scribe({ action: "impression", component: "checkmark_in_review_button" });
                    });
                    return n.createElement(
                        t.Z,
                        {
                            contentStyle: y.popover,
                            onOpen: () => {
                                e.scribe({ action: "click", component: "checkmark_in_review_button" });
                            },
                            renderContent: () => n.createElement(r.Z, null, n.createElement(l.ZP, { style: y.popoverTitle }, b), n.createElement(l.ZP, null, D)),
                            withArrow: !0,
                        },
                        n.createElement(r.Z, null, n.createElement(s.ZP, { icon: n.createElement(u.default, { style: y.icon, type: "primaryOutlined" }), size: "xSmall" }, h)),
                    );
                },
                y = d.default.create((e) => ({ icon: { color: e.colors.blue500 }, popover: { padding: e.spaces.space16 }, popoverTitle: { marginBottom: e.spaces.space8 } }));
        },
        789831: (e, o, a) => {
            a.d(o, { Z: () => i });
            var n = a(807896),
                r = a(202784),
                t = a(325686),
                l = a(392237),
                s = a(655352);
            const d = l.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                i = ({ children: e, component: o, fab: a, shouldRenderFab: l = !0, style: i, withoutBottomPadding: c, ...u }) => {
                    const m = o || t.Z,
                        p = l && !(0, s.ZP)();
                    return r.createElement(m, (0, n.Z)({}, u, { style: [p && !c && d.root, i] }), e, p ? a : null);
                };
        },
        797448: (e, o, a) => {
            a.d(o, { Z: () => l });
            var n = a(202784),
                r = a(325686),
                t = a(727828);
            const l = () => n.createElement(r.Z, null, n.createElement(t.Z, { variant: "GetVerifiedButton" }));
        },
        799432: (e, o, a) => {
            a.d(o, { Z: () => s });
            var n = a(202784),
                r = a(325686),
                t = a(443781),
                l = a(727828);
            const s = () => {
                const { featureSwitches: e, userClaims: o } = (0, t.QZ)();
                return e.isTrue("vo_upsell_profile_button_enabled") ? (o.isAnyPremiumSubscriber() ? n.createElement(r.Z, null, n.createElement(l.Z, { variant: "GetVerifiedOrgUpsellButtonWithDismiss" })) : n.createElement(r.Z, null, n.createElement(l.Z, { variant: "GetVerifiedOrgUpsellButton" }))) : null;
            };
        },
        998118: (e, o, a) => {
            function n({ featureSwitch: e, featureSwitches: o, isOwnProfile: a, user: n, userClaims: r, verifiedType: t }) {
                return a && "Government" !== t && "Business" !== t && o.isTrue("subscriptions_sign_up_enabled") && !n?.is_blue_verified && o.isTrue(e) && (!r.isAnyPremiumSubscriber() || (r.hasSubscription("premium_basic") && !r.isAnyVerifiedOrgOrAffiliate() && o.isTrue("subscriptions_upsells_get_verified_profile_rotation_basic_upgrade_enabled")));
            }
            a.d(o, { Z: () => n });
        },
        480056: (e, o, a) => {
            a.d(o, { Z: () => p });
            var n = a(300785),
                r = a(202784),
                t = a(10622),
                l = a.n(t),
                s = (a(585488), a(437429)),
                d = a.n(s),
                i = a(443781),
                c = a(125363),
                u = a(919022);
            const m = n.Z,
                p = (e, o, a) => {
                    const [n, t] = r.useState(!1),
                        s = d()(),
                        p = (0, c.v9)(u.ZP.selectViewerUser),
                        { featureSwitches: h, userClaims: b } = (0, i.QZ)(),
                        D = b.isAnyVerifiedOrgOrAffiliate(),
                        f = "Business" === p?.verified_type || "Government" === p?.verified_type;
                    return (
                        r.useEffect(() => {
                            e && h.isTrue("vo_upsell_new_business_query_enabled") && !D && !f
                                ? l()(s, m, { screenName: o, promptPurpose: a })
                                      .toPromise()
                                      .then((e) => {
                                          t(e?.user_result_by_screen_name?.result?.is_active_vo_upsell_candidate ?? !1);
                                      })
                                      .catch(() => {
                                          t(!1);
                                      })
                                : t(!1);
                        }, [s, h, e, o, a, D, f]),
                        n
                    );
                };
        },
        898948: (e, o, a) => {
            a.d(o, { Z: () => l });
            var n = a(202784),
                r = a(443781),
                t = a(163301);
            const l = (e) => {
                const { children: o, collectionName: a } = e,
                    l = n.useContext(r.rC);
                return (0, t.Kx)(l), o;
            };
        },
        709840: (e, o, a) => {
            a.d(o, { E: () => d });
            var n = a(202784),
                r = a(272175),
                t = (a(136728), a(351686)),
                l = a(537392);
            const s = (e) => {
                    const o = e.profile_image_url_https;
                    let a = "";
                    if (o) {
                        const e = t.Z.selectBestUrl((0, l.iv)(), o);
                        e && (a = e);
                    }
                    const n = ((e) => {
                        const o = [];
                        return e.verified && o.push("verified"), e.highlightedLabel?.description && o.push(e.highlightedLabel?.description), o.length ? (o.length > 1 ? o : o[0]) : null;
                    })(e);
                    return {
                        "@type": "Person",
                        additionalName: e.screen_name,
                        description: e.description,
                        ...(n && { disambiguatingDescription: n }),
                        givenName: e.name,
                        homeLocation: { "@type": "Place", name: e.location },
                        identifier: e.id_str,
                        image: { "@type": "ImageObject", contentUrl: a, thumbnailUrl: o },
                        interactionStatistic: [
                            { "@type": "InteractionCounter", interactionType: "https://schema.org/FollowAction", name: "Follows", userInteractionCount: e.followers_count },
                            { "@type": "InteractionCounter", interactionType: "https://schema.org/SubscribeAction", name: "Friends", userInteractionCount: e.friends_count },
                            { "@type": "InteractionCounter", interactionType: "https://schema.org/WriteAction", name: "Tweets", userInteractionCount: e.statuses_count },
                        ],
                        url: `https://x.com/${e.screen_name}`,
                    };
                },
                d = ({ user: e }) => {
                    const o = e.entities?.url?.urls?.[0],
                        a = { "@context": "http://schema.org", "@type": "ProfilePage", dateCreated: e.created_at, mainEntity: s(e), contentRating: e.possibly_sensitive ? "Possibly Adult" : "" };
                    return o && (a.relatedLink = [o.url, o.expanded_url]), n.createElement(r.ql, { meta: e.possibly_sensitive ? [{ name: "rating", content: "adult" }] : [], script: [{ type: "application/ld+json", innerHTML: JSON.stringify(a), "data-testid": "UserProfileSchema-test" }] });
                };
        },
        617041: (e, o, a) => {
            a.d(o, { Z: () => B });
            a(136728);
            var n = a(202784),
                r = a(111677),
                t = a.n(r),
                l = a(187669),
                s = a(443781),
                d = a(725516),
                i = a(272590),
                c = a(943957),
                u = a(811176);
            const m = t().b44c0205,
                p = t().de1123f5,
                h = Object.freeze({ alwayOpen: t().e2a5bd50, closed: t().e41a0dc2, closes: t().e0d7da6c, open: t().fd00a76a, opens: t().i7059f56, noHours: t().a7391348, updatedHours: t().c9eba532 }),
                b = () => ({ elements: [{ text: h.updatedHours, color: "gray1100" }] }),
                D = () => ({ elements: [{ text: h.alwayOpen, color: "green500" }] }),
                f = (e) => {
                    const o = e?.is_open;
                    if (null == o) return null;
                    const a = o ? e?.closes : e?.opens;
                    return null == a ? null : { elements: [{ text: o ? h.open : h.closed, color: o ? "green500" : "red500" }, { text: " · " }, { text: `${o ? h.closes : h.opens} ${C(a.day, a.time.hour, a.time.minute)}` }] };
                },
                y = () => ({ elements: [{ text: h.noHours }] }),
                g = (e) => (e ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(e)}` : void 0),
                M = (e) => _(e) || k(e) || w(e) || P(e),
                _ = (e) => !!e.config.enable_dm,
                k = (e) => !(!e.config.enable_email || !e.data.contact?.email?.email_address),
                w = (e) => !!(e.config.enable_call && e.data.contact?.phone?.country_code && e.data.contact?.phone?.number),
                P = (e) => !!(e.config.enable_sms && e.data.contact?.phone?.country_code && e.data.contact?.phone?.number),
                C = (e, o, a) => {
                    const n = ((e, o) => {
                        const a = new Date();
                        return a.setHours(e), a.setMinutes(o), (0, t().d725a289)(a);
                    })(o, a);
                    return ((e) => new Date().toLocaleString("en-US", { weekday: "long" }) === e)(e) ? p({ time: n }) : m({ day: e, time: n });
                },
                E = Object.freeze({ directMessage: t().h845f282, email: t().a3841918, callFormatter: t().ha9b8035, textFormatter: t().g2244521 });
            function v(e) {
                const { location: o, onClose: a, user: r } = e,
                    t = (0, d.z)(),
                    s = n.useMemo(() => {
                        const { contact: e } = o.data,
                            a = e?.email?.email_address,
                            n = e?.phone?.country_code,
                            l = e?.phone?.number,
                            s = [],
                            d = (e, o) => () => {
                                t.scribe((0, i.dm)(e, o));
                            };
                        return _(o) && s.push({ text: E.directMessage, link: `/messages/compose?recipient_id=${encodeURIComponent(r.rest_id)}`, onClick: d("click", "dm") }), k(o) && a && s.push({ text: E.email, link: `mailto:${a}`, onClick: d("click", "email") }), w(o) && n && l && s.push({ text: E.callFormatter({ phoneCode: n, phoneNumber: l }), link: `tel:${n}${l}`, onClick: d("click", "phone_call") }), P(o) && n && l && s.push({ text: E.textFormatter({ phoneCode: n, phoneNumber: l }), link: `sms:${n}${l}`, onClick: d("click", "text_message") }), s;
                    }, [t, o, r.rest_id]);
                return (
                    (0, l.q)(() => {
                        t.scribe((0, i.dm)("click", "contact")), _(o) && t.scribe((0, i.dm)("impression", "dm")), k(o) && t.scribe((0, i.dm)("impression", "email")), w(o) && t.scribe((0, i.dm)("impression", "phone_call")), P(o) && t.scribe((0, i.dm)("impression", "text_message"));
                    }),
                    n.createElement(u.Z, { items: s, onCloseRequested: a })
                );
            }
            var Z = a(444178),
                I = a(392237),
                x = a(264171);
            const A = I.default.create((e) => ({ root: { alignItems: "center", backgroundColor: e.colors.gray200, backgroundRepeat: "no-repeat", backgroundSize: "contain", cursor: "pointer", display: "flex", height: "100%", justifyContent: "center" }, iconLocation: { color: e.colors.alwaysBaseGray1100, height: e.spaces.space32 } })),
                S = ({ imageUrl: e, link: o, onClick: a }) => {
                    const r = e ? { backgroundImage: `url(${e})` } : null;
                    return n.createElement(Z.Z, { link: o, onClick: a, role: "img", style: [A.root, r] }, e ? null : n.createElement(x.default, { style: A.iconLocation, testID: "iconLocation" }));
                },
                $ = t().dc12a126,
                R = t().e2acb642;
            function B(e) {
                const { label: o, location: a, showUpdatedHours: r, user: t } = e,
                    { featureSwitches: u } = n.useContext(s.rC),
                    m = (0, d.z)(),
                    p = g(a.data.address?.formatted_address);
                (0, l.q)(() => {
                    m.scribe((0, i.dm)("impression")), p && m.scribe((0, i.dm)("impression", "directions")), M(a) && m.scribe((0, i.dm)("impression", "contact"));
                });
                return n.createElement(c.$, {
                    actions: (() => {
                        const e = [];
                        return (
                            p &&
                                e.push({
                                    label: $,
                                    link: p,
                                    onClick: (e) => {
                                        e?.preventDefault(), m.scribe((0, i.dm)("click", "directions"));
                                    },
                                }),
                            M(a) && e.push({ label: R, renderMenu: (e) => n.createElement(v, { location: a, onClose: e, user: t }) }),
                            e
                        );
                    })(),
                    bodyElements: [
                        (() => {
                            const e = a.data.website,
                                o = e?.url,
                                n = e?.display;
                            return o && n
                                ? {
                                      elements: [
                                          {
                                              text: n,
                                              link: { pathname: o, external: !0 },
                                              onPress: (e) => {
                                                  m.scribe((0, i.dm)("click", "website"));
                                              },
                                          },
                                      ],
                                  }
                                : null;
                        })(),
                        (() => {
                            const e = a.data.address?.formatted_address;
                            return e ? { elements: [{ text: e }] } : null;
                        })(),
                        (() => {
                            const e = a.data.open_times,
                                o = e?.open_times_type;
                            return r ? b() : "AlwaysOpen" === o ? D() : "RegularHours" === o ? f(e) : y();
                        })(),
                    ],
                    label: o,
                    media: n.createElement(S, {
                        imageUrl: u.isTrue("responsive_web_location_spotlight_display_map") ? a.data.google_verification_data?.static_map_image_url : null,
                        link: p,
                        onClick: (e) => {
                            m.scribe((0, i.dm)("click", "map"));
                        },
                    }),
                });
            }
        },
        943957: (e, o, a) => {
            a.d(o, { $: () => y, Z: () => y });
            var n = a(202784),
                r = a(325686),
                t = a(67369),
                l = a(530732),
                s = a(392237),
                d = a(58881),
                i = a(731708);
            const c = ({ label: e, link: o, onClick: a, renderMenu: r }) => {
                    const t = s.default.isDarkMode() ? s.default.theme.colors.gray50 : s.default.theme.colors.gray0,
                        c = d.Z.generate({ backgroundColor: s.default.theme.colors.transparent, color: s.default.theme.colors.primary, customFocusBackgroundColor: t, customHoverBackgroundColor: t, customPressedBackgroundColor: t });
                    return n.createElement(l.Z, { interactiveStyles: c, link: o, onClick: a, renderMenu: r, style: u.button }, n.createElement(i.ZP, { align: "center", size: "body", style: u.buttonText, weight: "bold", withInteractiveStyling: !1 }, e));
                },
                u = s.default.create((e) => ({ actionBar: { borderColor: e.colors.gray50, borderTopWidth: e.borderWidths.small, display: "flex", flexDirection: "row", height: `calc(${e.spaces.space40} + ${e.spaces.space4})`, width: "100%" }, buttonText: { margin: "auto" }, button: { cursor: "pointer", flexGrow: 1, height: "auto" }, separator: { borderColor: e.colors.gray50, borderEndWidth: e.borderWidths.small } })),
                m = ({ actions: e }) =>
                    e && e.length > 0
                        ? n.createElement(
                              r.Z,
                              { style: u.actionBar },
                              e.map((e, o) => n.createElement(n.Fragment, { key: o }, 0 !== o ? n.createElement(r.Z, { style: u.separator }) : null, n.createElement(c, e))),
                          )
                        : null;
            function p(e) {
                const { children: o, headline: a, isMobileLayout: t, lines: l } = e;
                return n.createElement(
                    r.Z,
                    { style: h.body },
                    a && n.createElement(i.ZP, { size: "body", weight: "bold" }, a),
                    l.map((e, o) =>
                        n.createElement(
                            r.Z,
                            { key: o, style: h.bodyLine },
                            e?.elements.map((e, o) => n.createElement(i.ZP, { color: e.color ?? (e.link ? void 0 : "gray700"), key: o, link: e.link, numberOfLines: e.numberOfLines, onPress: e.onPress, size: t ? "subtext1" : "body" }, e.text)),
                        ),
                    ),
                    o,
                );
            }
            const h = s.default.create((e) => ({ body: { justifyContent: "center", flex: 1, padding: e.spaces.space12, textAlign: "start" }, bodyLine: { display: "flex", flexDirection: "row", flexWrap: "wrap", marginVertical: e.spaces.space2 } })),
                b = ({ isMobileLayout: e, label: o }) => n.createElement(i.ZP, { size: e ? "subtext1" : "body", weight: "bold" }, o),
                D = s.default.create((e) => ({ container: { borderRadius: e.borderRadii.medium, height: `calc(${e.spaces.space48} * 2)`, marginStart: e.spaces.space4, marginVertical: e.spaces.space4, overflow: "hidden", width: `calc(${e.spaces.space48} * 2)` }, mobileContainer: { height: `calc((${e.spaces.space40} + ${e.spaces.space4}) * 2)`, width: `calc((${e.spaces.space40} + ${e.spaces.space4}) * 2)` } })),
                f = ({ children: e, isMobileLayout: o }) => n.createElement(r.Z, { style: [D.container, o ? D.mobileContainer : void 0] }, e);
            function y(e) {
                const { actions: o, bodyElements: a, children: d, headline: i, label: c, link: u, media: h } = e,
                    D = (0, t.yu)();
                return n.createElement(l.Z, { link: u, style: g.spotlight }, c && n.createElement(b, { isMobileLayout: D, label: c }), n.createElement(r.Z, { style: [g.spotlightCard, s.default.isDarkMode() ? g.darkModeContentBackground : g.contentBackground] }, n.createElement(r.Z, { style: g.spotlightContent }, n.createElement(f, { children: h, isMobileLayout: D }), n.createElement(p, { headline: i, isMobileLayout: D, lines: a }, d)), o && n.createElement(m, { actions: o })));
            }
            const g = s.default.create((e) => ({ contentBackground: { backgroundColor: e.colors.cellBackground }, darkModeContentBackground: { backgroundColor: e.colors.gray0 }, spotlight: { marginVertical: e.spaces.space16 }, spotlightCard: { borderRadius: e.borderRadii.large, boxShadow: "0 2px 13px 0 rgba(0, 0, 0, 0.1)", marginTop: `calc(${e.spaces.space4} + ${e.spaces.space2})`, overflow: "hidden" }, spotlightContent: { flexDirection: "row" } }));
        },
        634090: (e, o, a) => {
            a.d(o, { Z: () => k });
            var n = a(346489),
                r = a(202784),
                t = (a(585488), a(883229)),
                l = a(943914),
                s = a(535338),
                d = a(833772),
                i = a(325686),
                c = a(277660),
                u = a.n(c),
                m = a(392237),
                p = a(187669),
                h = a(725516),
                b = a(257466),
                D = a(272590);
            const f = d.Z,
                y = m.default.create((e) => ({ container: { paddingHorizontal: e.componentDimensions.gutterHorizontal } })),
                g = ({ setIsRenderingProfileSpotlight: e, userRef: o }) => {
                    const a = (0, h.z)(),
                        n = u()(f, o),
                        t = n.profilemodules?.v1?.[0]?.profile_module;
                    return (
                        e && !t && e(!1),
                        (0, p.q)(() => {
                            a.scribe((0, D.nw)());
                        }),
                        t ? r.createElement(i.Z, { style: y.container }, r.createElement(b.Z, { profileSpotlightRef: t, setIsRenderingProfileSpotlight: e, userRef: n })) : null
                    );
                },
                M = n.Z,
                _ = ({ setIsRenderingProfileSpotlight: e, userScreenName: o }) => {
                    const a = (0, s.p)(M, { screen_name: o }),
                        n = a?.user_result_by_screen_name?.result;
                    return n ? r.createElement(g, { setIsRenderingProfileSpotlight: e, userRef: n }) : null;
                },
                k = ({ setIsRenderingProfileSpotlight: e, userScreenName: o }) => {
                    const a = r.useMemo(() => ({ type: "CustomRetry", content: () => null }), []);
                    return r.createElement(t.N, { errorConfig: { context: "PROFILE_SPOTLIGHTS" }, fallback: a }, r.createElement(l.B, null, r.createElement(_, { setIsRenderingProfileSpotlight: e, userScreenName: o })));
                };
        },
        272590: (e, o, a) => {
            function n() {
                return { section: "profile_modules", action: "impression" };
            }
            function r(e, o) {
                return { section: "profile_modules", component: "about_module", element: o, action: e };
            }
            function t(e, o, a) {
                return { section: "profile_modules", component: e, element: a, action: o };
            }
            a.d(o, { RV: () => d, UJ: () => t, dm: () => r, nw: () => n, yt: () => l });
            const l = (e, o, a) => ({ section: "profile_modules", component: e, element: a, action: o }),
                s = (e, o, a) => ({ id: e, position: o, is_viewer_follows_user: a }),
                d = (e, o, a, n) => ({ profile_id: n, items: [s(e, o, a)] });
        },
        160664: (e, o, a) => {
            a.d(o, { Z: () => p });
            var n = a(202784),
                r = a(111677),
                t = a.n(r);
            const l = (e, o, a) => new Date(e, o, a),
                s = t().a46f80ab,
                d = t().c7905f89,
                i = t().ba2e82a1,
                c = t().da44942d,
                u = t().d7d71245;
            function m({ birthdate: e, withBornPrefixText: o }) {
                const { day: a, month: n, year: r } = e,
                    t = !!r,
                    m = !!n,
                    p = !!a,
                    h = !t && m && p,
                    b = t && (!m || !p),
                    D =
                        t && m && p
                            ? (function (e, o, a, n) {
                                  const r = l(e, o - 1, a);
                                  return n ? s({ birthdate: i(r) }) : i(r);
                              })(Number(r), Number(n), Number(a), o)
                            : h
                              ? (function (e, o, a) {
                                    const n = l(0, e - 1, o);
                                    return a ? s({ birthdate: c(n) }) : c(n);
                                })(Number(n), Number(a), o)
                              : b
                                ? (function (e, o) {
                                      const a = l(e, 0, 1);
                                      return o ? d({ year: u(a) }) : u(a);
                                  })(Number(r), o)
                                : null;
                return D;
            }
            const p = n.memo(m);
        },
        344612: (e, o, a) => {
            a.d(o, { ZP: () => d });
            var n = a(202784),
                r = a(111677),
                t = a.n(r);
            const l = t().d58baa7f,
                s = t().ia24dc8d;
            function d(e) {
                const { truncateMaxCount: o = 1e4, type: a } = e,
                    r = e.count ?? 0,
                    d = r >= o ? l(r) : s(r),
                    i = n.useMemo(() => ({ count: r, formattedCount: d }), [r, d]);
                return null == e.count ? null : "likes" === a ? n.createElement(t().I18NFormatMessage, { $i18n: "eea0a14f", formattedCount: i.formattedCount, count: i.count }) : "media" === a ? n.createElement(t().I18NFormatMessage, { $i18n: "cca42d0b", formattedCount: i.formattedCount, count: i.count }) : n.createElement(t().I18NFormatMessage, { $i18n: "a0a3adf7", formattedCount: i.formattedCount, count: i.count });
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserProfile-0127dd92.48197e5a.js.map
