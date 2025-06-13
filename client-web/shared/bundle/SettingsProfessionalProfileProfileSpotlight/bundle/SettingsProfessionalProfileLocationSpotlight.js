"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.SettingsProfessionalProfileProfileSpotlight~bundle.SettingsProfessionalProfileLocationSpotlight"],
    {
        980407: (e, t, o) => {
            o.d(t, { Z: () => b, w: () => m });
            var r = o(202784),
                n = o(325686),
                a = o(108362),
                i = o(386802),
                l = o(392237),
                s = o(652904),
                c = o(555079),
                d = o(625661),
                u = o(449067),
                p = o(715601);
            class m extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: a, centerTitle: i, hideBackButton: l, history: s, isFullWidth: u, isLarge: p, middleControl: m, onBackClick: b, rightControl: g, secondaryBar: f, subtitle: y, title: k } = this.props,
                                { isModal: x } = this.context;
                            return r.createElement(n.Z, { style: x ? [h.childViewAppBarRoot, h.appBarZindex] : h.appBarZindex }, r.createElement(d.ZP, { backButtonType: o || (x ? "close" : "back"), backLocation: a, centerTitle: i, fixed: !x, hideBackButton: l, history: s, isFullWidth: u, isLarge: p, middleControl: m, onBackClick: b, ref: e, rightControl: g, secondaryBar: f, style: [x && h.appBarModal, t], subtitle: y, title: k, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: t } = this.props,
                                { isModal: o } = this.context;
                            t && (o ? window.requestAnimationFrame(() => t(e)) : t(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: t, children: o, containerStyle: i, documentTitle: l, isFullWidth: c, isLarge: d, renderHeader: m, title: b, withoutBottomBarMobile: g } = this.props,
                        { isModal: f } = this.context,
                        y = m ? m(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return r.createElement(s.Z, null, r.createElement(u.Z.Configure, { documentTitle: l, headerless: !0, title: b }), r.createElement(n.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [h.root, f && h.rootModal] }, !f && y, r.createElement(a.Z, { isFullWidth: c, isLarge: d, style: [h.container, f && h.containerModal, i] }, f ? r.createElement(p.Z, { style: h.viewport }, y, o) : o), t ? r.createElement(n.Z, { style: [h.bottomBarModal, !f && !g && h.bottomBarMobile] }, r.createElement(a.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (m.defaultProps = { isFullWidth: !1, isLarge: !1 }), (m.contextType = i.Z);
            const h = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: l.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                b = m;
        },
        585356: (e, t, o) => {
            o.d(t, { Z: () => a });
            var r = o(202784),
                n = o(325686);
            function a({ children: e }) {
                const t = r.useRef(null);
                return (
                    r.useLayoutEffect(() => {
                        if (t.current) {
                            t.current.querySelectorAll('a[href], input, button, [role="button"]').forEach((e) => {
                                e.setAttribute("tabindex", "-1"), e.setAttribute("role", "presentation");
                            });
                        }
                    }, []),
                    r.createElement(n.Z, { ariaHidden: !0, ref: t, style: i.root }, r.createElement(n.Z, { style: i.overlay }), e)
                );
            }
            const i = o(392237).default.create((e) => ({ root: { position: "relative", pointerEvents: "none", userSelect: "none" }, overlay: { height: "100%", pointerEvents: "none", position: "absolute", userSelect: "none", width: "100%", zIndex: 1 } }));
        },
        617041: (e, t, o) => {
            o.d(t, { Z: () => A });
            o(136728);
            var r = o(202784),
                n = o(111677),
                a = o.n(n),
                i = o(187669),
                l = o(443781),
                s = o(725516),
                c = o(272590),
                d = o(943957),
                u = o(811176);
            const p = a().b44c0205,
                m = a().de1123f5,
                h = Object.freeze({ alwayOpen: a().e2a5bd50, closed: a().e41a0dc2, closes: a().e0d7da6c, open: a().fd00a76a, opens: a().i7059f56, noHours: a().a7391348, updatedHours: a().c9eba532 }),
                b = () => ({ elements: [{ text: h.updatedHours, color: "gray1100" }] }),
                g = () => ({ elements: [{ text: h.alwayOpen, color: "green500" }] }),
                f = (e) => {
                    const t = e?.is_open;
                    if (null == t) return null;
                    const o = t ? e?.closes : e?.opens;
                    return null == o ? null : { elements: [{ text: t ? h.open : h.closed, color: t ? "green500" : "red500" }, { text: " · " }, { text: `${t ? h.closes : h.opens} ${E(o.day, o.time.hour, o.time.minute)}` }] };
                },
                y = () => ({ elements: [{ text: h.noHours }] }),
                k = (e) => (e ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(e)}` : void 0),
                x = (e) => C(e) || _(e) || w(e) || B(e),
                C = (e) => !!e.config.enable_dm,
                _ = (e) => !(!e.config.enable_email || !e.data.contact?.email?.email_address),
                w = (e) => !!(e.config.enable_call && e.data.contact?.phone?.country_code && e.data.contact?.phone?.number),
                B = (e) => !!(e.config.enable_sms && e.data.contact?.phone?.country_code && e.data.contact?.phone?.number),
                E = (e, t, o) => {
                    const r = ((e, t) => {
                        const o = new Date();
                        return o.setHours(e), o.setMinutes(t), (0, a().d725a289)(o);
                    })(t, o);
                    return ((e) => new Date().toLocaleString("en-US", { weekday: "long" }) === e)(e) ? m({ time: r }) : p({ day: e, time: r });
                },
                Z = Object.freeze({ directMessage: a().h845f282, email: a().a3841918, callFormatter: a().ha9b8035, textFormatter: a().g2244521 });
            function v(e) {
                const { location: t, onClose: o, user: n } = e,
                    a = (0, s.z)(),
                    l = r.useMemo(() => {
                        const { contact: e } = t.data,
                            o = e?.email?.email_address,
                            r = e?.phone?.country_code,
                            i = e?.phone?.number,
                            l = [],
                            s = (e, t) => () => {
                                a.scribe((0, c.dm)(e, t));
                            };
                        return C(t) && l.push({ text: Z.directMessage, link: `/messages/compose?recipient_id=${encodeURIComponent(n.rest_id)}`, onClick: s("click", "dm") }), _(t) && o && l.push({ text: Z.email, link: `mailto:${o}`, onClick: s("click", "email") }), w(t) && r && i && l.push({ text: Z.callFormatter({ phoneCode: r, phoneNumber: i }), link: `tel:${r}${i}`, onClick: s("click", "phone_call") }), B(t) && r && i && l.push({ text: Z.textFormatter({ phoneCode: r, phoneNumber: i }), link: `sms:${r}${i}`, onClick: s("click", "text_message") }), l;
                    }, [a, t, n.rest_id]);
                return (
                    (0, i.q)(() => {
                        a.scribe((0, c.dm)("click", "contact")), C(t) && a.scribe((0, c.dm)("impression", "dm")), _(t) && a.scribe((0, c.dm)("impression", "email")), w(t) && a.scribe((0, c.dm)("impression", "phone_call")), B(t) && a.scribe((0, c.dm)("impression", "text_message"));
                    }),
                    r.createElement(u.Z, { items: l, onCloseRequested: o })
                );
            }
            var L = o(444178),
                M = o(392237),
                R = o(264171);
            const S = M.default.create((e) => ({ root: { alignItems: "center", backgroundColor: e.colors.gray200, backgroundRepeat: "no-repeat", backgroundSize: "contain", cursor: "pointer", display: "flex", height: "100%", justifyContent: "center" }, iconLocation: { color: e.colors.alwaysBaseGray1100, height: e.spaces.space32 } })),
                z = ({ imageUrl: e, link: t, onClick: o }) => {
                    const n = e ? { backgroundImage: `url(${e})` } : null;
                    return r.createElement(L.Z, { link: t, onClick: o, role: "img", style: [S.root, n] }, e ? null : r.createElement(R.default, { style: S.iconLocation, testID: "iconLocation" }));
                },
                H = a().dc12a126,
                $ = a().e2acb642;
            function A(e) {
                const { label: t, location: o, showUpdatedHours: n, user: a } = e,
                    { featureSwitches: u } = r.useContext(l.rC),
                    p = (0, s.z)(),
                    m = k(o.data.address?.formatted_address);
                (0, i.q)(() => {
                    p.scribe((0, c.dm)("impression")), m && p.scribe((0, c.dm)("impression", "directions")), x(o) && p.scribe((0, c.dm)("impression", "contact"));
                });
                return r.createElement(d.$, {
                    actions: (() => {
                        const e = [];
                        return (
                            m &&
                                e.push({
                                    label: H,
                                    link: m,
                                    onClick: (e) => {
                                        e?.preventDefault(), p.scribe((0, c.dm)("click", "directions"));
                                    },
                                }),
                            x(o) && e.push({ label: $, renderMenu: (e) => r.createElement(v, { location: o, onClose: e, user: a }) }),
                            e
                        );
                    })(),
                    bodyElements: [
                        (() => {
                            const e = o.data.website,
                                t = e?.url,
                                r = e?.display;
                            return t && r
                                ? {
                                      elements: [
                                          {
                                              text: r,
                                              link: { pathname: t, external: !0 },
                                              onPress: (e) => {
                                                  p.scribe((0, c.dm)("click", "website"));
                                              },
                                          },
                                      ],
                                  }
                                : null;
                        })(),
                        (() => {
                            const e = o.data.address?.formatted_address;
                            return e ? { elements: [{ text: e }] } : null;
                        })(),
                        (() => {
                            const e = o.data.open_times,
                                t = e?.open_times_type;
                            return n ? b() : "AlwaysOpen" === t ? g() : "RegularHours" === t ? f(e) : y();
                        })(),
                    ],
                    label: t,
                    media: r.createElement(z, {
                        imageUrl: u.isTrue("responsive_web_location_spotlight_display_map") ? o.data.google_verification_data?.static_map_image_url : null,
                        link: m,
                        onClick: (e) => {
                            p.scribe((0, c.dm)("click", "map"));
                        },
                    }),
                });
            }
        },
        943957: (e, t, o) => {
            o.d(t, { $: () => y, Z: () => y });
            var r = o(202784),
                n = o(325686),
                a = o(67369),
                i = o(530732),
                l = o(392237),
                s = o(58881),
                c = o(731708);
            const d = ({ label: e, link: t, onClick: o, renderMenu: n }) => {
                    const a = l.default.isDarkMode() ? l.default.theme.colors.gray50 : l.default.theme.colors.gray0,
                        d = s.Z.generate({ backgroundColor: l.default.theme.colors.transparent, color: l.default.theme.colors.primary, customFocusBackgroundColor: a, customHoverBackgroundColor: a, customPressedBackgroundColor: a });
                    return r.createElement(i.Z, { interactiveStyles: d, link: t, onClick: o, renderMenu: n, style: u.button }, r.createElement(c.ZP, { align: "center", size: "body", style: u.buttonText, weight: "bold", withInteractiveStyling: !1 }, e));
                },
                u = l.default.create((e) => ({ actionBar: { borderColor: e.colors.gray50, borderTopWidth: e.borderWidths.small, display: "flex", flexDirection: "row", height: `calc(${e.spaces.space40} + ${e.spaces.space4})`, width: "100%" }, buttonText: { margin: "auto" }, button: { cursor: "pointer", flexGrow: 1, height: "auto" }, separator: { borderColor: e.colors.gray50, borderEndWidth: e.borderWidths.small } })),
                p = ({ actions: e }) =>
                    e && e.length > 0
                        ? r.createElement(
                              n.Z,
                              { style: u.actionBar },
                              e.map((e, t) => r.createElement(r.Fragment, { key: t }, 0 !== t ? r.createElement(n.Z, { style: u.separator }) : null, r.createElement(d, e))),
                          )
                        : null;
            function m(e) {
                const { children: t, headline: o, isMobileLayout: a, lines: i } = e;
                return r.createElement(
                    n.Z,
                    { style: h.body },
                    o && r.createElement(c.ZP, { size: "body", weight: "bold" }, o),
                    i.map((e, t) =>
                        r.createElement(
                            n.Z,
                            { key: t, style: h.bodyLine },
                            e?.elements.map((e, t) => r.createElement(c.ZP, { color: e.color ?? (e.link ? void 0 : "gray700"), key: t, link: e.link, numberOfLines: e.numberOfLines, onPress: e.onPress, size: a ? "subtext1" : "body" }, e.text)),
                        ),
                    ),
                    t,
                );
            }
            const h = l.default.create((e) => ({ body: { justifyContent: "center", flex: 1, padding: e.spaces.space12, textAlign: "start" }, bodyLine: { display: "flex", flexDirection: "row", flexWrap: "wrap", marginVertical: e.spaces.space2 } })),
                b = ({ isMobileLayout: e, label: t }) => r.createElement(c.ZP, { size: e ? "subtext1" : "body", weight: "bold" }, t),
                g = l.default.create((e) => ({ container: { borderRadius: e.borderRadii.medium, height: `calc(${e.spaces.space48} * 2)`, marginStart: e.spaces.space4, marginVertical: e.spaces.space4, overflow: "hidden", width: `calc(${e.spaces.space48} * 2)` }, mobileContainer: { height: `calc((${e.spaces.space40} + ${e.spaces.space4}) * 2)`, width: `calc((${e.spaces.space40} + ${e.spaces.space4}) * 2)` } })),
                f = ({ children: e, isMobileLayout: t }) => r.createElement(n.Z, { style: [g.container, t ? g.mobileContainer : void 0] }, e);
            function y(e) {
                const { actions: t, bodyElements: o, children: s, headline: c, label: d, link: u, media: h } = e,
                    g = (0, a.yu)();
                return r.createElement(i.Z, { link: u, style: k.spotlight }, d && r.createElement(b, { isMobileLayout: g, label: d }), r.createElement(n.Z, { style: [k.spotlightCard, l.default.isDarkMode() ? k.darkModeContentBackground : k.contentBackground] }, r.createElement(n.Z, { style: k.spotlightContent }, r.createElement(f, { children: h, isMobileLayout: g }), r.createElement(m, { headline: c, isMobileLayout: g, lines: o }, s)), t && r.createElement(p, { actions: t })));
            }
            const k = l.default.create((e) => ({ contentBackground: { backgroundColor: e.colors.cellBackground }, darkModeContentBackground: { backgroundColor: e.colors.gray0 }, spotlight: { marginVertical: e.spaces.space16 }, spotlightCard: { borderRadius: e.borderRadii.large, boxShadow: "0 2px 13px 0 rgba(0, 0, 0, 0.1)", marginTop: `calc(${e.spaces.space4} + ${e.spaces.space2})`, overflow: "hidden" }, spotlightContent: { flexDirection: "row" } }));
        },
        272590: (e, t, o) => {
            function r() {
                return { section: "profile_modules", action: "impression" };
            }
            function n(e, t) {
                return { section: "profile_modules", component: "about_module", element: t, action: e };
            }
            function a(e, t, o) {
                return { section: "profile_modules", component: e, element: o, action: t };
            }
            o.d(t, { RV: () => s, UJ: () => a, dm: () => n, nw: () => r, yt: () => i });
            const i = (e, t, o) => ({ section: "profile_modules", component: e, element: o, action: t }),
                l = (e, t, o) => ({ id: e, position: t, is_viewer_follows_user: o }),
                s = (e, t, o, r) => ({ profile_id: r, items: [l(e, t, o)] });
        },
        478282: (e, t, o) => {
            o.d(t, { Z: () => l });
            var r = o(202784),
                n = o(325686),
                a = o(392237),
                i = o(980407);
            function l(e) {
                const { children: t, onBackClick: o, rightControl: a, title: l } = e;
                return r.createElement(i.Z, { "aria-hidden": !1, backButtonType: "back", onBackClick: o, rightControl: a, title: l }, r.createElement(n.Z, { style: s.container }, t));
            }
            const s = a.default.create((e) => ({ container: { paddingBottom: e.spaces.space24, maxHeight: "80vh", minHeight: "480px" } }));
        },
        800536: (e, t, o) => {
            o.d(t, { Pl: () => c, V5: () => i, bL: () => l, openTimesTypes: () => s });
            var r = o(111677),
                n = o.n(r),
                a = o(709402);
            const i = "/settings/professional_profile/profile_spotlight",
                l = Object.freeze({ [a.Y.Location]: "/settings/professional_profile/profile_spotlight/location", [a.Y.App]: "/settings/professional_profile/profile_spotlight/app", [a.Y.Communities]: "/settings/professional_profile/profile_spotlight/communities" }),
                s = Object.freeze({ NO_HOURS: "NoHours", ALWAYS_OPEN: "AlwaysOpen", REGULAR_HOURS: "RegularHours" }),
                c = { cancelButtonLabel: n().g419ecf4, confirmButtonLabel: n().d3a097a2, headline: n().j1e1cd30, text: n().if69307c };
        },
        709402: (e, t, o) => {
            o.d(t, { Y: () => r });
            const r = Object.freeze({ All: "All", Shop: "Shop", Newsletter: "Newsletter", Location: "About", App: "App", Link: "Link", Communities: "Communities", Jobs: "Jobs" });
        },
        242454: (e, t, o) => {
            o.d(t, { Z: () => u });
            var r = o(807896),
                n = o(202784),
                a = o(325686),
                i = o(731708),
                l = o(58881),
                s = o(530732),
                c = o(392237);
            const d = c.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                u = ({ align: e = "center", color: t, label: o, ...u }) => {
                    const p = l.Z.generate({ backgroundColor: c.default.theme.colors.transparent, color: c.default.theme.colors[t], insetFocusRing: !0 });
                    return n.createElement(a.Z, { style: d.container }, n.createElement(s.Z, (0, r.Z)({}, u, { interactiveStyles: p, style: d.root }), n.createElement(i.ZP, { align: e, color: t }, o)));
                };
        },
        748138: (e, t, o) => {
            o.r(t), o.d(t, { default: () => s });
            var r = o(202784),
                n = o(890601),
                a = o(783427),
                i = o(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const s = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.SettingsProfessionalProfileProfileSpotlight~bundle.SettingsProfessionalProfileLocationSpotlight.8281e04a.js.map
