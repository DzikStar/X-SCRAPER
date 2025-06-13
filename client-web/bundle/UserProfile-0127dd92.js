"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserProfile-0127dd92"],
    {
        614185: (e, t, n) => {
            n.d(t, { Z: () => r });
            n(202784);
            const r = (0, n(523561).Z)({ loader: () => Promise.all([n.e("icons.12"), n.e("ondemand.Balloons")]).then(n.bind(n, 103609)) });
        },
        392049: (e, t, n) => {
            n.d(t, { Z: () => h });
            var r = n(202784),
                o = n(325686),
                a = n(157130),
                s = n(731708),
                i = n(154003),
                c = n(392237),
                l = n(111677),
                u = n.n(l),
                d = n(144251),
                m = n(187669),
                p = n(725405);
            const b = u().dd3d10f6,
                f = u().i06d4712,
                g = u().j354c438,
                h = () => {
                    const e = (0, p.Z)();
                    (0, m.q)(() => {
                        e.scribe({ action: "impression", component: "checkmark_in_review_button" });
                    });
                    return r.createElement(
                        a.Z,
                        {
                            contentStyle: _.popover,
                            onOpen: () => {
                                e.scribe({ action: "click", component: "checkmark_in_review_button" });
                            },
                            renderContent: () => r.createElement(o.Z, null, r.createElement(s.ZP, { style: _.popoverTitle }, f), r.createElement(s.ZP, null, g)),
                            withArrow: !0,
                        },
                        r.createElement(o.Z, null, r.createElement(i.ZP, { icon: r.createElement(d.default, { style: _.icon, type: "primaryOutlined" }), size: "xSmall" }, b)),
                    );
                },
                _ = c.default.create((e) => ({ icon: { color: e.colors.blue500 }, popover: { padding: e.spaces.space16 }, popoverTitle: { marginBottom: e.spaces.space8 } }));
        },
        789831: (e, t, n) => {
            n.d(t, { Z: () => l });
            var r = n(807896),
                o = n(202784),
                a = n(325686),
                s = n(392237),
                i = n(655352);
            const c = s.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                l = ({ children: e, component: t, fab: n, shouldRenderFab: s = !0, style: l, withoutBottomPadding: u, ...d }) => {
                    const m = t || a.Z,
                        p = s && !(0, i.ZP)();
                    return o.createElement(m, (0, r.Z)({}, d, { style: [p && !u && c.root, l] }), e, p ? n : null);
                };
        },
        797448: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(202784),
                o = n(325686),
                a = n(727828);
            const s = () => r.createElement(o.Z, null, r.createElement(a.Z, { variant: "GetVerifiedButton" }));
        },
        799432: (e, t, n) => {
            n.d(t, { Z: () => i });
            var r = n(202784),
                o = n(325686),
                a = n(443781),
                s = n(727828);
            const i = () => {
                const { featureSwitches: e, userClaims: t } = (0, a.QZ)();
                return e.isTrue("vo_upsell_profile_button_enabled") ? (t.isAnyPremiumSubscriber() ? r.createElement(o.Z, null, r.createElement(s.Z, { variant: "GetVerifiedOrgUpsellButtonWithDismiss" })) : r.createElement(o.Z, null, r.createElement(s.Z, { variant: "GetVerifiedOrgUpsellButton" }))) : null;
            };
        },
        998118: (e, t, n) => {
            function r({ featureSwitch: e, featureSwitches: t, isOwnProfile: n, user: r, userClaims: o, verifiedType: a }) {
                return n && "Government" !== a && "Business" !== a && t.isTrue("subscriptions_sign_up_enabled") && !r?.is_blue_verified && t.isTrue(e) && (!o.isAnyPremiumSubscriber() || (o.hasSubscription("premium_basic") && !o.isAnyVerifiedOrgOrAffiliate() && t.isTrue("subscriptions_upsells_get_verified_profile_rotation_basic_upgrade_enabled")));
            }
            n.d(t, { Z: () => r });
        },
        480056: (e, t, n) => {
            n.d(t, { Z: () => p });
            var r = n(300785),
                o = n(202784),
                a = n(10622),
                s = n.n(a),
                i = (n(585488), n(437429)),
                c = n.n(i),
                l = n(443781),
                u = n(125363),
                d = n(919022);
            const m = r.Z,
                p = (e, t, n) => {
                    const [r, a] = o.useState(!1),
                        i = c()(),
                        p = (0, u.v9)(d.ZP.selectViewerUser),
                        { featureSwitches: b, userClaims: f } = (0, l.QZ)(),
                        g = f.isAnyVerifiedOrgOrAffiliate(),
                        h = "Business" === p?.verified_type || "Government" === p?.verified_type;
                    return (
                        o.useEffect(() => {
                            e && b.isTrue("vo_upsell_new_business_query_enabled") && !g && !h
                                ? s()(i, m, { screenName: t, promptPurpose: n })
                                      .toPromise()
                                      .then((e) => {
                                          a(e?.user_result_by_screen_name?.result?.is_active_vo_upsell_candidate ?? !1);
                                      })
                                      .catch(() => {
                                          a(!1);
                                      })
                                : a(!1);
                        }, [i, b, e, t, n, g, h]),
                        r
                    );
                };
        },
        898948: (e, t, n) => {
            n.d(t, { Z: () => s });
            var r = n(202784),
                o = n(443781),
                a = n(163301);
            const s = (e) => {
                const { children: t, collectionName: n } = e,
                    s = r.useContext(o.rC);
                return (0, a.Kx)(s), t;
            };
        },
        709840: (e, t, n) => {
            n.d(t, { E: () => c });
            var r = n(202784),
                o = n(272175),
                a = (n(136728), n(351686)),
                s = n(537392);
            const i = (e) => {
                    const t = e.profile_image_url_https;
                    let n = "";
                    if (t) {
                        const e = a.Z.selectBestUrl((0, s.iv)(), t);
                        e && (n = e);
                    }
                    const r = ((e) => {
                        const t = [];
                        return e.verified && t.push("verified"), e.highlightedLabel?.description && t.push(e.highlightedLabel?.description), t.length ? (t.length > 1 ? t : t[0]) : null;
                    })(e);
                    return {
                        "@type": "Person",
                        additionalName: e.screen_name,
                        description: e.description,
                        ...(r && { disambiguatingDescription: r }),
                        givenName: e.name,
                        homeLocation: { "@type": "Place", name: e.location },
                        identifier: e.id_str,
                        image: { "@type": "ImageObject", contentUrl: n, thumbnailUrl: t },
                        interactionStatistic: [
                            { "@type": "InteractionCounter", interactionType: "https://schema.org/FollowAction", name: "Follows", userInteractionCount: e.followers_count },
                            { "@type": "InteractionCounter", interactionType: "https://schema.org/SubscribeAction", name: "Friends", userInteractionCount: e.friends_count },
                            { "@type": "InteractionCounter", interactionType: "https://schema.org/WriteAction", name: "Tweets", userInteractionCount: e.statuses_count },
                        ],
                        url: `https://x.com/${e.screen_name}`,
                    };
                },
                c = ({ user: e }) => {
                    const t = e.entities?.url?.urls?.[0],
                        n = { "@context": "http://schema.org", "@type": "ProfilePage", dateCreated: e.created_at, mainEntity: i(e), contentRating: e.possibly_sensitive ? "Possibly Adult" : "" };
                    return t && (n.relatedLink = [t.url, t.expanded_url]), r.createElement(o.ql, { meta: e.possibly_sensitive ? [{ name: "rating", content: "adult" }] : [], script: [{ type: "application/ld+json", innerHTML: JSON.stringify(n), "data-testid": "UserProfileSchema-test" }] });
                };
        },
        617041: (e, t, n) => {
            n.d(t, { Z: () => T });
            n(136728);
            var r = n(202784),
                o = n(111677),
                a = n.n(o),
                s = n(187669),
                i = n(443781),
                c = n(725516),
                l = n(272590),
                u = n(943957),
                d = n(811176);
            const m = a().b44c0205,
                p = a().de1123f5,
                b = Object.freeze({ alwayOpen: a().e2a5bd50, closed: a().e41a0dc2, closes: a().e0d7da6c, open: a().fd00a76a, opens: a().i7059f56, noHours: a().a7391348, updatedHours: a().c9eba532 }),
                f = () => ({ elements: [{ text: b.updatedHours, color: "gray1100" }] }),
                g = () => ({ elements: [{ text: b.alwayOpen, color: "green500" }] }),
                h = (e) => {
                    const t = e?.is_open;
                    if (null == t) return null;
                    const n = t ? e?.closes : e?.opens;
                    return null == n ? null : { elements: [{ text: t ? b.open : b.closed, color: t ? "green500" : "red500" }, { text: " · " }, { text: `${t ? b.closes : b.opens} ${Z(n.day, n.time.hour, n.time.minute)}` }] };
                },
                _ = () => ({ elements: [{ text: b.noHours }] }),
                y = (e) => (e ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(e)}` : void 0),
                k = (e) => C(e) || w(e) || E(e) || v(e),
                C = (e) => !!e.config.enable_dm,
                w = (e) => !(!e.config.enable_email || !e.data.contact?.email?.email_address),
                E = (e) => !!(e.config.enable_call && e.data.contact?.phone?.country_code && e.data.contact?.phone?.number),
                v = (e) => !!(e.config.enable_sms && e.data.contact?.phone?.country_code && e.data.contact?.phone?.number),
                Z = (e, t, n) => {
                    const r = ((e, t) => {
                        const n = new Date();
                        return n.setHours(e), n.setMinutes(t), (0, a().d725a289)(n);
                    })(t, n);
                    return ((e) => new Date().toLocaleString("en-US", { weekday: "long" }) === e)(e) ? p({ time: r }) : m({ day: e, time: r });
                },
                x = Object.freeze({ directMessage: a().h845f282, email: a().a3841918, callFormatter: a().ha9b8035, textFormatter: a().g2244521 });
            function P(e) {
                const { location: t, onClose: n, user: o } = e,
                    a = (0, c.z)(),
                    i = r.useMemo(() => {
                        const { contact: e } = t.data,
                            n = e?.email?.email_address,
                            r = e?.phone?.country_code,
                            s = e?.phone?.number,
                            i = [],
                            c = (e, t) => () => {
                                a.scribe((0, l.dm)(e, t));
                            };
                        return C(t) && i.push({ text: x.directMessage, link: `/messages/compose?recipient_id=${encodeURIComponent(o.rest_id)}`, onClick: c("click", "dm") }), w(t) && n && i.push({ text: x.email, link: `mailto:${n}`, onClick: c("click", "email") }), E(t) && r && s && i.push({ text: x.callFormatter({ phoneCode: r, phoneNumber: s }), link: `tel:${r}${s}`, onClick: c("click", "phone_call") }), v(t) && r && s && i.push({ text: x.textFormatter({ phoneCode: r, phoneNumber: s }), link: `sms:${r}${s}`, onClick: c("click", "text_message") }), i;
                    }, [a, t, o.rest_id]);
                return (
                    (0, s.q)(() => {
                        a.scribe((0, l.dm)("click", "contact")), C(t) && a.scribe((0, l.dm)("impression", "dm")), w(t) && a.scribe((0, l.dm)("impression", "email")), E(t) && a.scribe((0, l.dm)("impression", "phone_call")), v(t) && a.scribe((0, l.dm)("impression", "text_message"));
                    }),
                    r.createElement(d.Z, { items: i, onCloseRequested: n })
                );
            }
            var S = n(444178),
                $ = n(392237),
                I = n(264171);
            const M = $.default.create((e) => ({ root: { alignItems: "center", backgroundColor: e.colors.gray200, backgroundRepeat: "no-repeat", backgroundSize: "contain", cursor: "pointer", display: "flex", height: "100%", justifyContent: "center" }, iconLocation: { color: e.colors.alwaysBaseGray1100, height: e.spaces.space32 } })),
                R = ({ imageUrl: e, link: t, onClick: n }) => {
                    const o = e ? { backgroundImage: `url(${e})` } : null;
                    return r.createElement(S.Z, { link: t, onClick: n, role: "img", style: [M.root, o] }, e ? null : r.createElement(I.default, { style: M.iconLocation, testID: "iconLocation" }));
                },
                B = a().dc12a126,
                L = a().e2acb642;
            function T(e) {
                const { label: t, location: n, showUpdatedHours: o, user: a } = e,
                    { featureSwitches: d } = r.useContext(i.rC),
                    m = (0, c.z)(),
                    p = y(n.data.address?.formatted_address);
                (0, s.q)(() => {
                    m.scribe((0, l.dm)("impression")), p && m.scribe((0, l.dm)("impression", "directions")), k(n) && m.scribe((0, l.dm)("impression", "contact"));
                });
                return r.createElement(u.$, {
                    actions: (() => {
                        const e = [];
                        return (
                            p &&
                                e.push({
                                    label: B,
                                    link: p,
                                    onClick: (e) => {
                                        e?.preventDefault(), m.scribe((0, l.dm)("click", "directions"));
                                    },
                                }),
                            k(n) && e.push({ label: L, renderMenu: (e) => r.createElement(P, { location: n, onClose: e, user: a }) }),
                            e
                        );
                    })(),
                    bodyElements: [
                        (() => {
                            const e = n.data.website,
                                t = e?.url,
                                r = e?.display;
                            return t && r
                                ? {
                                      elements: [
                                          {
                                              text: r,
                                              link: { pathname: t, external: !0 },
                                              onPress: (e) => {
                                                  m.scribe((0, l.dm)("click", "website"));
                                              },
                                          },
                                      ],
                                  }
                                : null;
                        })(),
                        (() => {
                            const e = n.data.address?.formatted_address;
                            return e ? { elements: [{ text: e }] } : null;
                        })(),
                        (() => {
                            const e = n.data.open_times,
                                t = e?.open_times_type;
                            return o ? f() : "AlwaysOpen" === t ? g() : "RegularHours" === t ? h(e) : _();
                        })(),
                    ],
                    label: t,
                    media: r.createElement(R, {
                        imageUrl: d.isTrue("responsive_web_location_spotlight_display_map") ? n.data.google_verification_data?.static_map_image_url : null,
                        link: p,
                        onClick: (e) => {
                            m.scribe((0, l.dm)("click", "map"));
                        },
                    }),
                });
            }
        },
        943957: (e, t, n) => {
            n.d(t, { $: () => _, Z: () => _ });
            var r = n(202784),
                o = n(325686),
                a = n(67369),
                s = n(530732),
                i = n(392237),
                c = n(58881),
                l = n(731708);
            const u = ({ label: e, link: t, onClick: n, renderMenu: o }) => {
                    const a = i.default.isDarkMode() ? i.default.theme.colors.gray50 : i.default.theme.colors.gray0,
                        u = c.Z.generate({ backgroundColor: i.default.theme.colors.transparent, color: i.default.theme.colors.primary, customFocusBackgroundColor: a, customHoverBackgroundColor: a, customPressedBackgroundColor: a });
                    return r.createElement(s.Z, { interactiveStyles: u, link: t, onClick: n, renderMenu: o, style: d.button }, r.createElement(l.ZP, { align: "center", size: "body", style: d.buttonText, weight: "bold", withInteractiveStyling: !1 }, e));
                },
                d = i.default.create((e) => ({ actionBar: { borderColor: e.colors.gray50, borderTopWidth: e.borderWidths.small, display: "flex", flexDirection: "row", height: `calc(${e.spaces.space40} + ${e.spaces.space4})`, width: "100%" }, buttonText: { margin: "auto" }, button: { cursor: "pointer", flexGrow: 1, height: "auto" }, separator: { borderColor: e.colors.gray50, borderEndWidth: e.borderWidths.small } })),
                m = ({ actions: e }) =>
                    e && e.length > 0
                        ? r.createElement(
                              o.Z,
                              { style: d.actionBar },
                              e.map((e, t) => r.createElement(r.Fragment, { key: t }, 0 !== t ? r.createElement(o.Z, { style: d.separator }) : null, r.createElement(u, e))),
                          )
                        : null;
            function p(e) {
                const { children: t, headline: n, isMobileLayout: a, lines: s } = e;
                return r.createElement(
                    o.Z,
                    { style: b.body },
                    n && r.createElement(l.ZP, { size: "body", weight: "bold" }, n),
                    s.map((e, t) =>
                        r.createElement(
                            o.Z,
                            { key: t, style: b.bodyLine },
                            e?.elements.map((e, t) => r.createElement(l.ZP, { color: e.color ?? (e.link ? void 0 : "gray700"), key: t, link: e.link, numberOfLines: e.numberOfLines, onPress: e.onPress, size: a ? "subtext1" : "body" }, e.text)),
                        ),
                    ),
                    t,
                );
            }
            const b = i.default.create((e) => ({ body: { justifyContent: "center", flex: 1, padding: e.spaces.space12, textAlign: "start" }, bodyLine: { display: "flex", flexDirection: "row", flexWrap: "wrap", marginVertical: e.spaces.space2 } })),
                f = ({ isMobileLayout: e, label: t }) => r.createElement(l.ZP, { size: e ? "subtext1" : "body", weight: "bold" }, t),
                g = i.default.create((e) => ({ container: { borderRadius: e.borderRadii.medium, height: `calc(${e.spaces.space48} * 2)`, marginStart: e.spaces.space4, marginVertical: e.spaces.space4, overflow: "hidden", width: `calc(${e.spaces.space48} * 2)` }, mobileContainer: { height: `calc((${e.spaces.space40} + ${e.spaces.space4}) * 2)`, width: `calc((${e.spaces.space40} + ${e.spaces.space4}) * 2)` } })),
                h = ({ children: e, isMobileLayout: t }) => r.createElement(o.Z, { style: [g.container, t ? g.mobileContainer : void 0] }, e);
            function _(e) {
                const { actions: t, bodyElements: n, children: c, headline: l, label: u, link: d, media: b } = e,
                    g = (0, a.yu)();
                return r.createElement(s.Z, { link: d, style: y.spotlight }, u && r.createElement(f, { isMobileLayout: g, label: u }), r.createElement(o.Z, { style: [y.spotlightCard, i.default.isDarkMode() ? y.darkModeContentBackground : y.contentBackground] }, r.createElement(o.Z, { style: y.spotlightContent }, r.createElement(h, { children: b, isMobileLayout: g }), r.createElement(p, { headline: l, isMobileLayout: g, lines: n }, c)), t && r.createElement(m, { actions: t })));
            }
            const y = i.default.create((e) => ({ contentBackground: { backgroundColor: e.colors.cellBackground }, darkModeContentBackground: { backgroundColor: e.colors.gray0 }, spotlight: { marginVertical: e.spaces.space16 }, spotlightCard: { borderRadius: e.borderRadii.large, boxShadow: "0 2px 13px 0 rgba(0, 0, 0, 0.1)", marginTop: `calc(${e.spaces.space4} + ${e.spaces.space2})`, overflow: "hidden" }, spotlightContent: { flexDirection: "row" } }));
        },
        634090: (e, t, n) => {
            n.d(t, { Z: () => w });
            var r = n(346489),
                o = n(202784),
                a = (n(585488), n(883229)),
                s = n(943914),
                i = n(535338),
                c = n(833772),
                l = n(325686),
                u = n(277660),
                d = n.n(u),
                m = n(392237),
                p = n(187669),
                b = n(725516),
                f = n(257466),
                g = n(272590);
            const h = c.Z,
                _ = m.default.create((e) => ({ container: { paddingHorizontal: e.componentDimensions.gutterHorizontal } })),
                y = ({ setIsRenderingProfileSpotlight: e, userRef: t }) => {
                    const n = (0, b.z)(),
                        r = d()(h, t),
                        a = r.profilemodules?.v1?.[0]?.profile_module;
                    return (
                        e && !a && e(!1),
                        (0, p.q)(() => {
                            n.scribe((0, g.nw)());
                        }),
                        a ? o.createElement(l.Z, { style: _.container }, o.createElement(f.Z, { profileSpotlightRef: a, setIsRenderingProfileSpotlight: e, userRef: r })) : null
                    );
                },
                k = r.Z,
                C = ({ setIsRenderingProfileSpotlight: e, userScreenName: t }) => {
                    const n = (0, i.p)(k, { screen_name: t }),
                        r = n?.user_result_by_screen_name?.result;
                    return r ? o.createElement(y, { setIsRenderingProfileSpotlight: e, userRef: r }) : null;
                },
                w = ({ setIsRenderingProfileSpotlight: e, userScreenName: t }) => {
                    const n = o.useMemo(() => ({ type: "CustomRetry", content: () => null }), []);
                    return o.createElement(a.N, { errorConfig: { context: "PROFILE_SPOTLIGHTS" }, fallback: n }, o.createElement(s.B, null, o.createElement(C, { setIsRenderingProfileSpotlight: e, userScreenName: t })));
                };
        },
        272590: (e, t, n) => {
            function r() {
                return { section: "profile_modules", action: "impression" };
            }
            function o(e, t) {
                return { section: "profile_modules", component: "about_module", element: t, action: e };
            }
            function a(e, t, n) {
                return { section: "profile_modules", component: e, element: n, action: t };
            }
            n.d(t, { RV: () => c, UJ: () => a, dm: () => o, nw: () => r, yt: () => s });
            const s = (e, t, n) => ({ section: "profile_modules", component: e, element: n, action: t }),
                i = (e, t, n) => ({ id: e, position: t, is_viewer_follows_user: n }),
                c = (e, t, n, r) => ({ profile_id: r, items: [i(e, t, n)] });
        },
        160664: (e, t, n) => {
            n.d(t, { Z: () => p });
            var r = n(202784),
                o = n(111677),
                a = n.n(o);
            const s = (e, t, n) => new Date(e, t, n),
                i = a().a46f80ab,
                c = a().c7905f89,
                l = a().ba2e82a1,
                u = a().da44942d,
                d = a().d7d71245;
            function m({ birthdate: e, withBornPrefixText: t }) {
                const { day: n, month: r, year: o } = e,
                    a = !!o,
                    m = !!r,
                    p = !!n,
                    b = !a && m && p,
                    f = a && (!m || !p),
                    g =
                        a && m && p
                            ? (function (e, t, n, r) {
                                  const o = s(e, t - 1, n);
                                  return r ? i({ birthdate: l(o) }) : l(o);
                              })(Number(o), Number(r), Number(n), t)
                            : b
                              ? (function (e, t, n) {
                                    const r = s(0, e - 1, t);
                                    return n ? i({ birthdate: u(r) }) : u(r);
                                })(Number(r), Number(n), t)
                              : f
                                ? (function (e, t) {
                                      const n = s(e, 0, 1);
                                      return t ? c({ year: d(n) }) : d(n);
                                  })(Number(o), t)
                                : null;
                return g;
            }
            const p = r.memo(m);
        },
        344612: (e, t, n) => {
            n.d(t, { ZP: () => c });
            var r = n(202784),
                o = n(111677),
                a = n.n(o);
            const s = a().d58baa7f,
                i = a().ia24dc8d;
            function c(e) {
                const { truncateMaxCount: t = 1e4, type: n } = e,
                    o = e.count ?? 0,
                    c = o >= t ? s(o) : i(o),
                    l = r.useMemo(() => ({ count: o, formattedCount: c }), [o, c]);
                return null == e.count ? null : "likes" === n ? r.createElement(a().I18NFormatMessage, { $i18n: "eea0a14f", formattedCount: l.formattedCount, count: l.count }) : "media" === n ? r.createElement(a().I18NFormatMessage, { $i18n: "cca42d0b", formattedCount: l.formattedCount, count: l.count }) : r.createElement(a().I18NFormatMessage, { $i18n: "a0a3adf7", formattedCount: l.formattedCount, count: l.count });
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserProfile-0127dd92.e2ee886a.js.map
