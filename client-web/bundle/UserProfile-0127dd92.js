"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.UserProfile-0127dd92"],
    {
        614185: (e, t, n) => {
            n.d(t, { Z: () => o });
            n(202784);
            const o = (0, n(523561).Z)({ loader: () => Promise.all([n.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-4dc04b0b"), n.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-f75f2a40"), n.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-9b450461"), n.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-abff603b"), n.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-cdbf42c1"), n.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-c94903fb"), n.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-7cff528b"), n.e("shared~loader.AudioDock~loader.Dock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.Inline-fc31ced1"), n.e("ondemand.Balloons")]).then(n.bind(n, 103609)) });
        },
        392049: (e, t, n) => {
            n.d(t, { Z: () => g });
            var o = n(202784),
                r = n(325686),
                a = n(157130),
                s = n(731708),
                l = n(154003),
                i = n(392237),
                c = n(111677),
                d = n.n(c),
                u = n(144251),
                m = n(187669),
                p = n(725405);
            const b = d().dd3d10f6,
                h = d().i06d4712,
                f = d().j354c438,
                g = () => {
                    const e = (0, p.Z)();
                    (0, m.q)(() => {
                        e.scribe({ action: "impression", component: "checkmark_in_review_button" });
                    });
                    return o.createElement(
                        a.Z,
                        {
                            contentStyle: _.popover,
                            onOpen: () => {
                                e.scribe({ action: "click", component: "checkmark_in_review_button" });
                            },
                            renderContent: () => o.createElement(r.Z, null, o.createElement(s.ZP, { style: _.popoverTitle }, h), o.createElement(s.ZP, null, f)),
                            withArrow: !0,
                        },
                        o.createElement(r.Z, null, o.createElement(l.ZP, { icon: o.createElement(u.default, { style: _.icon, type: "primaryOutlined" }), size: "xSmall" }, b)),
                    );
                },
                _ = i.default.create((e) => ({ icon: { color: e.colors.blue500 }, popover: { padding: e.spaces.space16 }, popoverTitle: { marginBottom: e.spaces.space8 } }));
        },
        789831: (e, t, n) => {
            n.d(t, { Z: () => c });
            var o = n(807896),
                r = n(202784),
                a = n(325686),
                s = n(392237),
                l = n(655352);
            const i = s.default.create((e) => ({ root: { paddingBottom: `calc(${e.spaces.space64} + ${e.spaces.space20} * 2)` } })),
                c = ({ children: e, component: t, fab: n, shouldRenderFab: s = !0, style: c, withoutBottomPadding: d, ...u }) => {
                    const m = t || a.Z,
                        p = s && !(0, l.ZP)();
                    return r.createElement(m, (0, o.Z)({}, u, { style: [p && !d && i.root, c] }), e, p ? n : null);
                };
        },
        797448: (e, t, n) => {
            n.d(t, { Z: () => s });
            var o = n(202784),
                r = n(325686),
                a = n(727828);
            const s = () => o.createElement(r.Z, null, o.createElement(a.Z, { variant: "GetVerifiedButton" }));
        },
        799432: (e, t, n) => {
            n.d(t, { Z: () => l });
            var o = n(202784),
                r = n(325686),
                a = n(443781),
                s = n(727828);
            const l = () => {
                const { featureSwitches: e, userClaims: t } = (0, a.QZ)();
                return e.isTrue("vo_upsell_profile_button_enabled") ? (t.isAnyPremiumSubscriber() ? o.createElement(r.Z, null, o.createElement(s.Z, { variant: "GetVerifiedOrgUpsellButtonWithDismiss" })) : o.createElement(r.Z, null, o.createElement(s.Z, { variant: "GetVerifiedOrgUpsellButton" }))) : null;
            };
        },
        998118: (e, t, n) => {
            function o({ featureSwitch: e, featureSwitches: t, isOwnProfile: n, user: o, userClaims: r, verifiedType: a }) {
                return n && "Government" !== a && "Business" !== a && t.isTrue("subscriptions_sign_up_enabled") && !o?.is_blue_verified && t.isTrue(e) && (!r.isAnyPremiumSubscriber() || (r.hasSubscription("premium_basic") && !r.isAnyVerifiedOrgOrAffiliate() && t.isTrue("subscriptions_upsells_get_verified_profile_rotation_basic_upgrade_enabled")));
            }
            n.d(t, { Z: () => o });
        },
        480056: (e, t, n) => {
            n.d(t, { Z: () => p });
            var o = n(300785),
                r = n(202784),
                a = n(10622),
                s = n.n(a),
                l = (n(585488), n(437429)),
                i = n.n(l),
                c = n(443781),
                d = n(125363),
                u = n(919022);
            const m = o.Z,
                p = (e, t, n) => {
                    const [o, a] = r.useState(!1),
                        l = i()(),
                        p = (0, d.v9)(u.ZP.selectViewerUser),
                        { featureSwitches: b, userClaims: h } = (0, c.QZ)(),
                        f = h.isAnyVerifiedOrgOrAffiliate(),
                        g = "Business" === p?.verified_type || "Government" === p?.verified_type;
                    return (
                        r.useEffect(() => {
                            e && b.isTrue("vo_upsell_new_business_query_enabled") && !f && !g
                                ? s()(l, m, { screenName: t, promptPurpose: n })
                                      .toPromise()
                                      .then((e) => {
                                          a(e?.user_result_by_screen_name?.result?.is_active_vo_upsell_candidate ?? !1);
                                      })
                                      .catch(() => {
                                          a(!1);
                                      })
                                : a(!1);
                        }, [l, b, e, t, n, f, g]),
                        o
                    );
                };
        },
        898948: (e, t, n) => {
            n.d(t, { Z: () => s });
            var o = n(202784),
                r = n(443781),
                a = n(163301);
            const s = (e) => {
                const { children: t, collectionName: n } = e,
                    s = o.useContext(r.rC);
                return (0, a.Kx)(s), t;
            };
        },
        709840: (e, t, n) => {
            n.d(t, { E: () => i });
            var o = n(202784),
                r = n(272175),
                a = (n(136728), n(351686)),
                s = n(537392);
            const l = (e) => {
                    const t = e.profile_image_url_https;
                    let n = "";
                    if (t) {
                        const e = a.Z.selectBestUrl((0, s.iv)(), t);
                        e && (n = e);
                    }
                    const o = ((e) => {
                        const t = [];
                        return e.verified && t.push("verified"), e.highlightedLabel?.description && t.push(e.highlightedLabel?.description), t.length ? (t.length > 1 ? t : t[0]) : null;
                    })(e);
                    return {
                        "@type": "Person",
                        additionalName: e.screen_name,
                        description: e.description,
                        ...(o && { disambiguatingDescription: o }),
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
                i = ({ user: e }) => {
                    const t = e.entities?.url?.urls?.[0],
                        n = { "@context": "http://schema.org", "@type": "ProfilePage", dateCreated: e.created_at, mainEntity: l(e), contentRating: e.possibly_sensitive ? "Possibly Adult" : "" };
                    return t && (n.relatedLink = [t.url, t.expanded_url]), o.createElement(r.ql, { meta: e.possibly_sensitive ? [{ name: "rating", content: "adult" }] : [], script: [{ type: "application/ld+json", innerHTML: JSON.stringify(n), "data-testid": "UserProfileSchema-test" }] });
                };
        },
        617041: (e, t, n) => {
            n.d(t, { Z: () => A });
            n(136728);
            var o = n(202784),
                r = n(111677),
                a = n.n(r),
                s = n(187669),
                l = n(443781),
                i = n(725516),
                c = n(272590),
                d = n(943957),
                u = n(811176);
            const m = a().b44c0205,
                p = a().de1123f5,
                b = Object.freeze({ alwayOpen: a().e2a5bd50, closed: a().e41a0dc2, closes: a().e0d7da6c, open: a().fd00a76a, opens: a().i7059f56, noHours: a().a7391348, updatedHours: a().c9eba532 }),
                h = () => ({ elements: [{ text: b.updatedHours, color: "gray1100" }] }),
                f = () => ({ elements: [{ text: b.alwayOpen, color: "green500" }] }),
                g = (e) => {
                    const t = e?.is_open;
                    if (null == t) return null;
                    const n = t ? e?.closes : e?.opens;
                    return null == n ? null : { elements: [{ text: t ? b.open : b.closed, color: t ? "green500" : "red500" }, { text: " · " }, { text: `${t ? b.closes : b.opens} ${v(n.day, n.time.hour, n.time.minute)}` }] };
                },
                _ = () => ({ elements: [{ text: b.noHours }] }),
                y = (e) => (e ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(e)}` : void 0),
                k = (e) => w(e) || C(e) || D(e) || E(e),
                w = (e) => !!e.config.enable_dm,
                C = (e) => !(!e.config.enable_email || !e.data.contact?.email?.email_address),
                D = (e) => !!(e.config.enable_call && e.data.contact?.phone?.country_code && e.data.contact?.phone?.number),
                E = (e) => !!(e.config.enable_sms && e.data.contact?.phone?.country_code && e.data.contact?.phone?.number),
                v = (e, t, n) => {
                    const o = ((e, t) => {
                        const n = new Date();
                        return n.setHours(e), n.setMinutes(t), (0, a().d725a289)(n);
                    })(t, n);
                    return ((e) => new Date().toLocaleString("en-US", { weekday: "long" }) === e)(e) ? p({ time: o }) : m({ day: e, time: o });
                },
                Z = Object.freeze({ directMessage: a().h845f282, email: a().a3841918, callFormatter: a().ha9b8035, textFormatter: a().g2244521 });
            function M(e) {
                const { location: t, onClose: n, user: r } = e,
                    a = (0, i.z)(),
                    l = o.useMemo(() => {
                        const { contact: e } = t.data,
                            n = e?.email?.email_address,
                            o = e?.phone?.country_code,
                            s = e?.phone?.number,
                            l = [],
                            i = (e, t) => () => {
                                a.scribe((0, c.dm)(e, t));
                            };
                        return w(t) && l.push({ text: Z.directMessage, link: `/messages/compose?recipient_id=${encodeURIComponent(r.rest_id)}`, onClick: i("click", "dm") }), C(t) && n && l.push({ text: Z.email, link: `mailto:${n}`, onClick: i("click", "email") }), D(t) && o && s && l.push({ text: Z.callFormatter({ phoneCode: o, phoneNumber: s }), link: `tel:${o}${s}`, onClick: i("click", "phone_call") }), E(t) && o && s && l.push({ text: Z.textFormatter({ phoneCode: o, phoneNumber: s }), link: `sms:${o}${s}`, onClick: i("click", "text_message") }), l;
                    }, [a, t, r.rest_id]);
                return (
                    (0, s.q)(() => {
                        a.scribe((0, c.dm)("click", "contact")), w(t) && a.scribe((0, c.dm)("impression", "dm")), C(t) && a.scribe((0, c.dm)("impression", "email")), D(t) && a.scribe((0, c.dm)("impression", "phone_call")), E(t) && a.scribe((0, c.dm)("impression", "text_message"));
                    }),
                    o.createElement(u.Z, { items: l, onCloseRequested: n })
                );
            }
            var x = n(444178),
                P = n(392237),
                S = n(264171);
            const I = P.default.create((e) => ({ root: { alignItems: "center", backgroundColor: e.colors.gray200, backgroundRepeat: "no-repeat", backgroundSize: "contain", cursor: "pointer", display: "flex", height: "100%", justifyContent: "center" }, iconLocation: { color: e.colors.alwaysBaseGray1100, height: e.spaces.space32 } })),
                $ = ({ imageUrl: e, link: t, onClick: n }) => {
                    const r = e ? { backgroundImage: `url(${e})` } : null;
                    return o.createElement(x.Z, { link: t, onClick: n, role: "img", style: [I.root, r] }, e ? null : o.createElement(S.default, { style: I.iconLocation, testID: "iconLocation" }));
                },
                R = a().dc12a126,
                B = a().e2acb642;
            function A(e) {
                const { label: t, location: n, showUpdatedHours: r, user: a } = e,
                    { featureSwitches: u } = o.useContext(l.rC),
                    m = (0, i.z)(),
                    p = y(n.data.address?.formatted_address);
                (0, s.q)(() => {
                    m.scribe((0, c.dm)("impression")), p && m.scribe((0, c.dm)("impression", "directions")), k(n) && m.scribe((0, c.dm)("impression", "contact"));
                });
                return o.createElement(d.$, {
                    actions: (() => {
                        const e = [];
                        return (
                            p &&
                                e.push({
                                    label: R,
                                    link: p,
                                    onClick: (e) => {
                                        e?.preventDefault(), m.scribe((0, c.dm)("click", "directions"));
                                    },
                                }),
                            k(n) && e.push({ label: B, renderMenu: (e) => o.createElement(M, { location: n, onClose: e, user: a }) }),
                            e
                        );
                    })(),
                    bodyElements: [
                        (() => {
                            const e = n.data.website,
                                t = e?.url,
                                o = e?.display;
                            return t && o
                                ? {
                                      elements: [
                                          {
                                              text: o,
                                              link: { pathname: t, external: !0 },
                                              onPress: (e) => {
                                                  m.scribe((0, c.dm)("click", "website"));
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
                            return r ? h() : "AlwaysOpen" === t ? f() : "RegularHours" === t ? g(e) : _();
                        })(),
                    ],
                    label: t,
                    media: o.createElement($, {
                        imageUrl: u.isTrue("responsive_web_location_spotlight_display_map") ? n.data.google_verification_data?.static_map_image_url : null,
                        link: p,
                        onClick: (e) => {
                            m.scribe((0, c.dm)("click", "map"));
                        },
                    }),
                });
            }
        },
        943957: (e, t, n) => {
            n.d(t, { $: () => _, Z: () => _ });
            var o = n(202784),
                r = n(325686),
                a = n(67369),
                s = n(530732),
                l = n(392237),
                i = n(58881),
                c = n(731708);
            const d = ({ label: e, link: t, onClick: n, renderMenu: r }) => {
                    const a = l.default.isDarkMode() ? l.default.theme.colors.gray50 : l.default.theme.colors.gray0,
                        d = i.Z.generate({ backgroundColor: l.default.theme.colors.transparent, color: l.default.theme.colors.primary, customFocusBackgroundColor: a, customHoverBackgroundColor: a, customPressedBackgroundColor: a });
                    return o.createElement(s.Z, { interactiveStyles: d, link: t, onClick: n, renderMenu: r, style: u.button }, o.createElement(c.ZP, { align: "center", size: "body", style: u.buttonText, weight: "bold", withInteractiveStyling: !1 }, e));
                },
                u = l.default.create((e) => ({ actionBar: { borderColor: e.colors.gray50, borderTopWidth: e.borderWidths.small, display: "flex", flexDirection: "row", height: `calc(${e.spaces.space40} + ${e.spaces.space4})`, width: "100%" }, buttonText: { margin: "auto" }, button: { cursor: "pointer", flexGrow: 1, height: "auto" }, separator: { borderColor: e.colors.gray50, borderEndWidth: e.borderWidths.small } })),
                m = ({ actions: e }) =>
                    e && e.length > 0
                        ? o.createElement(
                              r.Z,
                              { style: u.actionBar },
                              e.map((e, t) => o.createElement(o.Fragment, { key: t }, 0 !== t ? o.createElement(r.Z, { style: u.separator }) : null, o.createElement(d, e))),
                          )
                        : null;
            function p(e) {
                const { children: t, headline: n, isMobileLayout: a, lines: s } = e;
                return o.createElement(
                    r.Z,
                    { style: b.body },
                    n && o.createElement(c.ZP, { size: "body", weight: "bold" }, n),
                    s.map((e, t) =>
                        o.createElement(
                            r.Z,
                            { key: t, style: b.bodyLine },
                            e?.elements.map((e, t) => o.createElement(c.ZP, { color: e.color ?? (e.link ? void 0 : "gray700"), key: t, link: e.link, numberOfLines: e.numberOfLines, onPress: e.onPress, size: a ? "subtext1" : "body" }, e.text)),
                        ),
                    ),
                    t,
                );
            }
            const b = l.default.create((e) => ({ body: { justifyContent: "center", flex: 1, padding: e.spaces.space12, textAlign: "start" }, bodyLine: { display: "flex", flexDirection: "row", flexWrap: "wrap", marginVertical: e.spaces.space2 } })),
                h = ({ isMobileLayout: e, label: t }) => o.createElement(c.ZP, { size: e ? "subtext1" : "body", weight: "bold" }, t),
                f = l.default.create((e) => ({ container: { borderRadius: e.borderRadii.medium, height: `calc(${e.spaces.space48} * 2)`, marginStart: e.spaces.space4, marginVertical: e.spaces.space4, overflow: "hidden", width: `calc(${e.spaces.space48} * 2)` }, mobileContainer: { height: `calc((${e.spaces.space40} + ${e.spaces.space4}) * 2)`, width: `calc((${e.spaces.space40} + ${e.spaces.space4}) * 2)` } })),
                g = ({ children: e, isMobileLayout: t }) => o.createElement(r.Z, { style: [f.container, t ? f.mobileContainer : void 0] }, e);
            function _(e) {
                const { actions: t, bodyElements: n, children: i, headline: c, label: d, link: u, media: b } = e,
                    f = (0, a.yu)();
                return o.createElement(s.Z, { link: u, style: y.spotlight }, d && o.createElement(h, { isMobileLayout: f, label: d }), o.createElement(r.Z, { style: [y.spotlightCard, l.default.isDarkMode() ? y.darkModeContentBackground : y.contentBackground] }, o.createElement(r.Z, { style: y.spotlightContent }, o.createElement(g, { children: b, isMobileLayout: f }), o.createElement(p, { headline: c, isMobileLayout: f, lines: n }, i)), t && o.createElement(m, { actions: t })));
            }
            const y = l.default.create((e) => ({ contentBackground: { backgroundColor: e.colors.cellBackground }, darkModeContentBackground: { backgroundColor: e.colors.gray0 }, spotlight: { marginVertical: e.spaces.space16 }, spotlightCard: { borderRadius: e.borderRadii.large, boxShadow: "0 2px 13px 0 rgba(0, 0, 0, 0.1)", marginTop: `calc(${e.spaces.space4} + ${e.spaces.space2})`, overflow: "hidden" }, spotlightContent: { flexDirection: "row" } }));
        },
        634090: (e, t, n) => {
            n.d(t, { Z: () => C });
            var o = n(346489),
                r = n(202784),
                a = (n(585488), n(883229)),
                s = n(943914),
                l = n(535338),
                i = n(833772),
                c = n(325686),
                d = n(277660),
                u = n.n(d),
                m = n(392237),
                p = n(187669),
                b = n(725516),
                h = n(257466),
                f = n(272590);
            const g = i.Z,
                _ = m.default.create((e) => ({ container: { paddingHorizontal: e.componentDimensions.gutterHorizontal } })),
                y = ({ setIsRenderingProfileSpotlight: e, userRef: t }) => {
                    const n = (0, b.z)(),
                        o = u()(g, t),
                        a = o.profilemodules?.v1?.[0]?.profile_module;
                    return (
                        e && !a && e(!1),
                        (0, p.q)(() => {
                            n.scribe((0, f.nw)());
                        }),
                        a ? r.createElement(c.Z, { style: _.container }, r.createElement(h.Z, { profileSpotlightRef: a, setIsRenderingProfileSpotlight: e, userRef: o })) : null
                    );
                },
                k = o.Z,
                w = ({ setIsRenderingProfileSpotlight: e, userScreenName: t }) => {
                    const n = (0, l.p)(k, { screen_name: t }),
                        o = n?.user_result_by_screen_name?.result;
                    return o ? r.createElement(y, { setIsRenderingProfileSpotlight: e, userRef: o }) : null;
                },
                C = ({ setIsRenderingProfileSpotlight: e, userScreenName: t }) => {
                    const n = r.useMemo(() => ({ type: "CustomRetry", content: () => null }), []);
                    return r.createElement(a.N, { errorConfig: { context: "PROFILE_SPOTLIGHTS" }, fallback: n }, r.createElement(s.B, null, r.createElement(w, { setIsRenderingProfileSpotlight: e, userScreenName: t })));
                };
        },
        272590: (e, t, n) => {
            function o() {
                return { section: "profile_modules", action: "impression" };
            }
            function r(e, t) {
                return { section: "profile_modules", component: "about_module", element: t, action: e };
            }
            function a(e, t, n) {
                return { section: "profile_modules", component: e, element: n, action: t };
            }
            n.d(t, { RV: () => i, UJ: () => a, dm: () => r, nw: () => o, yt: () => s });
            const s = (e, t, n) => ({ section: "profile_modules", component: e, element: n, action: t }),
                l = (e, t, n) => ({ id: e, position: t, is_viewer_follows_user: n }),
                i = (e, t, n, o) => ({ profile_id: o, items: [l(e, t, n)] });
        },
        160664: (e, t, n) => {
            n.d(t, { Z: () => p });
            var o = n(202784),
                r = n(111677),
                a = n.n(r);
            const s = (e, t, n) => new Date(e, t, n),
                l = a().a46f80ab,
                i = a().c7905f89,
                c = a().ba2e82a1,
                d = a().da44942d,
                u = a().d7d71245;
            function m({ birthdate: e, withBornPrefixText: t }) {
                const { day: n, month: o, year: r } = e,
                    a = !!r,
                    m = !!o,
                    p = !!n,
                    b = !a && m && p,
                    h = a && (!m || !p),
                    f =
                        a && m && p
                            ? (function (e, t, n, o) {
                                  const r = s(e, t - 1, n);
                                  return o ? l({ birthdate: c(r) }) : c(r);
                              })(Number(r), Number(o), Number(n), t)
                            : b
                              ? (function (e, t, n) {
                                    const o = s(0, e - 1, t);
                                    return n ? l({ birthdate: d(o) }) : d(o);
                                })(Number(o), Number(n), t)
                              : h
                                ? (function (e, t) {
                                      const n = s(e, 0, 1);
                                      return t ? i({ year: u(n) }) : u(n);
                                  })(Number(r), t)
                                : null;
                return f;
            }
            const p = o.memo(m);
        },
        344612: (e, t, n) => {
            n.d(t, { ZP: () => i });
            var o = n(202784),
                r = n(111677),
                a = n.n(r);
            const s = a().d58baa7f,
                l = a().ia24dc8d;
            function i(e) {
                const { truncateMaxCount: t = 1e4, type: n } = e,
                    r = e.count ?? 0,
                    i = r >= t ? s(r) : l(r),
                    c = o.useMemo(() => ({ count: r, formattedCount: i }), [r, i]);
                return null == e.count ? null : "likes" === n ? o.createElement(a().I18NFormatMessage, { $i18n: "eea0a14f", formattedCount: c.formattedCount, count: c.count }) : "media" === n ? o.createElement(a().I18NFormatMessage, { $i18n: "cca42d0b", formattedCount: c.formattedCount, count: c.count }) : o.createElement(a().I18NFormatMessage, { $i18n: "a0a3adf7", formattedCount: c.formattedCount, count: c.count });
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.UserProfile-0127dd92.0867f40a.js.map
