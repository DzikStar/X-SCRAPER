"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.SettingsProfessionalProfileProfileSpotlight~bundle.SettingsProfessionalProfileLocationSpotlight"],
    {
        625661: (e, t, o) => {
            o.d(t, { ZP: () => u });
            var n = o(202784),
                r = o(614983),
                a = o.n(r),
                i = o(325686),
                l = o(370006),
                s = o(786998),
                c = o(929028),
                d = o(386802);
            function p(e, t, o) {
                return e || (!t && o ? "fixed" : void 0);
            }
            class u extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            a()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: r, hideBackButton: a, isFullWidth: i, isLarge: c, leftControl: d, middleControl: u, position: m, rightControl: h, secondaryBar: b, style: g, subtitle: f, title: k, titleDomId: y, titleIconCell: C, titleIconCellSize: x, withBackground: B, withWideContainer: _ } = this.props,
                        { isModal: w } = this.context,
                        E = a ? d : n.createElement(l.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        Z = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!B, w, !!b);
                    return n.createElement(n.Fragment, null, n.createElement(s.Z, { centerTitle: t, centeredLogo: o, isFullWidth: i, isLarge: c, leftControl: E, middleControl: u, position: p(m, w, r), rightControl: h, style: g, subtitle: f, title: k, titleDomId: y, titleIconCell: C, titleIconCellSize: x, withBackground: Z, withWideContainer: _ }), b || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = c.Z.getBackgroundStyles();
                    return t ? n.createElement(i.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (u.contextType = d.Z), (u.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        980407: (e, t, o) => {
            o.d(t, { Z: () => b, w: () => m });
            var n = o(202784),
                r = o(325686),
                a = o(108362),
                i = o(386802),
                l = o(392237),
                s = o(652904),
                c = o(555079),
                d = o(625661),
                p = o(449067),
                u = o(715601);
            class m extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: t, backButtonType: o, backLocation: a, centerTitle: i, hideBackButton: l, history: s, isFullWidth: p, isLarge: u, middleControl: m, onBackClick: b, rightControl: g, secondaryBar: f, subtitle: k, title: y } = this.props,
                                { isModal: C } = this.context;
                            return n.createElement(r.Z, { style: C ? [h.childViewAppBarRoot, h.appBarZindex] : h.appBarZindex }, n.createElement(d.ZP, { backButtonType: o || (C ? "close" : "back"), backLocation: a, centerTitle: i, fixed: !C, hideBackButton: l, history: s, isFullWidth: p, isLarge: u, middleControl: m, onBackClick: b, ref: e, rightControl: g, secondaryBar: f, style: [C && h.appBarModal, t], subtitle: k, title: y, titleDomId: c.Q_ }));
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
                        k = m ? m(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return n.createElement(s.Z, null, n.createElement(p.Z.Configure, { documentTitle: l, headerless: !0, title: b }), n.createElement(r.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [h.root, f && h.rootModal] }, !f && k, n.createElement(a.Z, { isFullWidth: c, isLarge: d, style: [h.container, f && h.containerModal, i] }, f ? n.createElement(u.Z, { style: h.viewport }, k, o) : o), t ? n.createElement(r.Z, { style: [h.bottomBarModal, !f && !g && h.bottomBarMobile] }, n.createElement(a.Z, { isFullWidth: c, isLarge: d }, t)) : null));
                }
            }
            (m.defaultProps = { isFullWidth: !1, isLarge: !1 }), (m.contextType = i.Z);
            const h = l.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: l.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                b = m;
        },
        585356: (e, t, o) => {
            o.d(t, { Z: () => a });
            var n = o(202784),
                r = o(325686);
            function a({ children: e }) {
                const t = n.useRef(null);
                return (
                    n.useLayoutEffect(() => {
                        if (t.current) {
                            t.current.querySelectorAll('a[href], input, button, [role="button"]').forEach((e) => {
                                e.setAttribute("tabindex", "-1"), e.setAttribute("role", "presentation");
                            });
                        }
                    }, []),
                    n.createElement(r.Z, { ariaHidden: !0, ref: t, style: i.root }, n.createElement(r.Z, { style: i.overlay }), e)
                );
            }
            const i = o(392237).default.create((e) => ({ root: { position: "relative", pointerEvents: "none", userSelect: "none" }, overlay: { height: "100%", pointerEvents: "none", position: "absolute", userSelect: "none", width: "100%", zIndex: 1 } }));
        },
        617041: (e, t, o) => {
            o.d(t, { Z: () => I });
            o(136728);
            var n = o(202784),
                r = o(332920),
                a = o.n(r),
                i = o(187669),
                l = o(443781),
                s = o(725516),
                c = o(272590),
                d = o(943957),
                p = o(811176);
            const u = a().b44c0205,
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
                k = () => ({ elements: [{ text: h.noHours }] }),
                y = (e) => (e ? `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(e)}` : void 0),
                C = (e) => x(e) || B(e) || _(e) || w(e),
                x = (e) => !!e.config.enable_dm,
                B = (e) => !(!e.config.enable_email || !e.data.contact?.email?.email_address),
                _ = (e) => !!(e.config.enable_call && e.data.contact?.phone?.country_code && e.data.contact?.phone?.number),
                w = (e) => !!(e.config.enable_sms && e.data.contact?.phone?.country_code && e.data.contact?.phone?.number),
                E = (e, t, o) => {
                    const n = ((e, t) => {
                        const o = new Date();
                        return o.setHours(e), o.setMinutes(t), (0, a().d725a289)(o);
                    })(t, o);
                    return ((e) => new Date().toLocaleString("en-US", { weekday: "long" }) === e)(e) ? m({ time: n }) : u({ day: e, time: n });
                },
                Z = Object.freeze({ directMessage: a().h845f282, email: a().a3841918, callFormatter: a().ha9b8035, textFormatter: a().g2244521 });
            function L(e) {
                const { location: t, onClose: o, user: r } = e,
                    a = (0, s.z)(),
                    l = n.useMemo(() => {
                        const { contact: e } = t.data,
                            o = e?.email?.email_address,
                            n = e?.phone?.country_code,
                            i = e?.phone?.number,
                            l = [],
                            s = (e, t) => () => {
                                a.scribe((0, c.dm)(e, t));
                            };
                        return x(t) && l.push({ text: Z.directMessage, link: `/messages/compose?recipient_id=${encodeURIComponent(r.rest_id)}`, onClick: s("click", "dm") }), B(t) && o && l.push({ text: Z.email, link: `mailto:${o}`, onClick: s("click", "email") }), _(t) && n && i && l.push({ text: Z.callFormatter({ phoneCode: n, phoneNumber: i }), link: `tel:${n}${i}`, onClick: s("click", "phone_call") }), w(t) && n && i && l.push({ text: Z.textFormatter({ phoneCode: n, phoneNumber: i }), link: `sms:${n}${i}`, onClick: s("click", "text_message") }), l;
                    }, [a, t, r.rest_id]);
                return (
                    (0, i.q)(() => {
                        a.scribe((0, c.dm)("click", "contact")), x(t) && a.scribe((0, c.dm)("impression", "dm")), B(t) && a.scribe((0, c.dm)("impression", "email")), _(t) && a.scribe((0, c.dm)("impression", "phone_call")), w(t) && a.scribe((0, c.dm)("impression", "text_message"));
                    }),
                    n.createElement(p.Z, { items: l, onCloseRequested: o })
                );
            }
            var v = o(444178),
                S = o(392237),
                M = o(264171);
            const R = S.default.create((e) => ({ root: { alignItems: "center", backgroundColor: e.colors.gray200, backgroundRepeat: "no-repeat", backgroundSize: "contain", cursor: "pointer", display: "flex", height: "100%", justifyContent: "center" }, iconLocation: { color: e.colors.alwaysBaseGray1100, height: e.spaces.space32 } })),
                P = ({ imageUrl: e, link: t, onClick: o }) => {
                    const r = e ? { backgroundImage: `url(${e})` } : null;
                    return n.createElement(v.Z, { link: t, onClick: o, role: "img", style: [R.root, r] }, e ? null : n.createElement(M.default, { style: R.iconLocation, testID: "iconLocation" }));
                },
                T = a().dc12a126,
                A = a().e2acb642;
            function I(e) {
                const { label: t, location: o, showUpdatedHours: r, user: a } = e,
                    { featureSwitches: p } = n.useContext(l.rC),
                    u = (0, s.z)(),
                    m = y(o.data.address?.formatted_address);
                (0, i.q)(() => {
                    u.scribe((0, c.dm)("impression")), m && u.scribe((0, c.dm)("impression", "directions")), C(o) && u.scribe((0, c.dm)("impression", "contact"));
                });
                return n.createElement(d.$, {
                    actions: (() => {
                        const e = [];
                        return (
                            m &&
                                e.push({
                                    label: T,
                                    link: m,
                                    onClick: (e) => {
                                        e?.preventDefault(), u.scribe((0, c.dm)("click", "directions"));
                                    },
                                }),
                            C(o) && e.push({ label: A, renderMenu: (e) => n.createElement(L, { location: o, onClose: e, user: a }) }),
                            e
                        );
                    })(),
                    bodyElements: [
                        (() => {
                            const e = o.data.website,
                                t = e?.url,
                                n = e?.display;
                            return t && n
                                ? {
                                      elements: [
                                          {
                                              text: n,
                                              link: { pathname: t, external: !0 },
                                              onPress: (e) => {
                                                  u.scribe((0, c.dm)("click", "website"));
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
                            return r ? b() : "AlwaysOpen" === t ? g() : "RegularHours" === t ? f(e) : k();
                        })(),
                    ],
                    label: t,
                    media: n.createElement(P, {
                        imageUrl: p.isTrue("responsive_web_location_spotlight_display_map") ? o.data.google_verification_data?.static_map_image_url : null,
                        link: m,
                        onClick: (e) => {
                            u.scribe((0, c.dm)("click", "map"));
                        },
                    }),
                });
            }
        },
        943957: (e, t, o) => {
            o.d(t, { $: () => k, Z: () => k });
            var n = o(202784),
                r = o(325686),
                a = o(67369),
                i = o(530732),
                l = o(392237),
                s = o(58881),
                c = o(731708);
            const d = ({ label: e, link: t, onClick: o, renderMenu: r }) => {
                    const a = l.default.isDarkMode() ? l.default.theme.colors.gray50 : l.default.theme.colors.gray0,
                        d = s.Z.generate({ backgroundColor: l.default.theme.colors.transparent, color: l.default.theme.colors.primary, customFocusBackgroundColor: a, customHoverBackgroundColor: a, customPressedBackgroundColor: a });
                    return n.createElement(i.Z, { interactiveStyles: d, link: t, onClick: o, renderMenu: r, style: p.button }, n.createElement(c.ZP, { align: "center", size: "body", style: p.buttonText, weight: "bold", withInteractiveStyling: !1 }, e));
                },
                p = l.default.create((e) => ({ actionBar: { borderColor: e.colors.gray50, borderTopWidth: e.borderWidths.small, display: "flex", flexDirection: "row", height: `calc(${e.spaces.space40} + ${e.spaces.space4})`, width: "100%" }, buttonText: { margin: "auto" }, button: { cursor: "pointer", flexGrow: 1, height: "auto" }, separator: { borderColor: e.colors.gray50, borderEndWidth: e.borderWidths.small } })),
                u = ({ actions: e }) =>
                    e && e.length > 0
                        ? n.createElement(
                              r.Z,
                              { style: p.actionBar },
                              e.map((e, t) => n.createElement(n.Fragment, { key: t }, 0 !== t ? n.createElement(r.Z, { style: p.separator }) : null, n.createElement(d, e))),
                          )
                        : null;
            function m(e) {
                const { children: t, headline: o, isMobileLayout: a, lines: i } = e;
                return n.createElement(
                    r.Z,
                    { style: h.body },
                    o && n.createElement(c.ZP, { size: "body", weight: "bold" }, o),
                    i.map((e, t) =>
                        n.createElement(
                            r.Z,
                            { key: t, style: h.bodyLine },
                            e?.elements.map((e, t) => n.createElement(c.ZP, { color: e.color ?? (e.link ? void 0 : "gray700"), key: t, link: e.link, numberOfLines: e.numberOfLines, onPress: e.onPress, size: a ? "subtext1" : "body" }, e.text)),
                        ),
                    ),
                    t,
                );
            }
            const h = l.default.create((e) => ({ body: { justifyContent: "center", flex: 1, padding: e.spaces.space12, textAlign: "start" }, bodyLine: { display: "flex", flexDirection: "row", flexWrap: "wrap", marginVertical: e.spaces.space2 } })),
                b = ({ isMobileLayout: e, label: t }) => n.createElement(c.ZP, { size: e ? "subtext1" : "body", weight: "bold" }, t),
                g = l.default.create((e) => ({ container: { borderRadius: e.borderRadii.medium, height: `calc(${e.spaces.space48} * 2)`, marginStart: e.spaces.space4, marginVertical: e.spaces.space4, overflow: "hidden", width: `calc(${e.spaces.space48} * 2)` }, mobileContainer: { height: `calc((${e.spaces.space40} + ${e.spaces.space4}) * 2)`, width: `calc((${e.spaces.space40} + ${e.spaces.space4}) * 2)` } })),
                f = ({ children: e, isMobileLayout: t }) => n.createElement(r.Z, { style: [g.container, t ? g.mobileContainer : void 0] }, e);
            function k(e) {
                const { actions: t, bodyElements: o, children: s, headline: c, label: d, link: p, media: h } = e,
                    g = (0, a.yu)();
                return n.createElement(i.Z, { link: p, style: y.spotlight }, d && n.createElement(b, { isMobileLayout: g, label: d }), n.createElement(r.Z, { style: [y.spotlightCard, l.default.isDarkMode() ? y.darkModeContentBackground : y.contentBackground] }, n.createElement(r.Z, { style: y.spotlightContent }, n.createElement(f, { children: h, isMobileLayout: g }), n.createElement(m, { headline: c, isMobileLayout: g, lines: o }, s)), t && n.createElement(u, { actions: t })));
            }
            const y = l.default.create((e) => ({ contentBackground: { backgroundColor: e.colors.cellBackground }, darkModeContentBackground: { backgroundColor: e.colors.gray0 }, spotlight: { marginVertical: e.spaces.space16 }, spotlightCard: { borderRadius: e.borderRadii.large, boxShadow: "0 2px 13px 0 rgba(0, 0, 0, 0.1)", marginTop: `calc(${e.spaces.space4} + ${e.spaces.space2})`, overflow: "hidden" }, spotlightContent: { flexDirection: "row" } }));
        },
        272590: (e, t, o) => {
            function n() {
                return { section: "profile_modules", action: "impression" };
            }
            function r(e, t) {
                return { section: "profile_modules", component: "about_module", element: t, action: e };
            }
            function a(e, t, o) {
                return { section: "profile_modules", component: e, element: o, action: t };
            }
            o.d(t, { RV: () => s, UJ: () => a, dm: () => r, nw: () => n, yt: () => i });
            const i = (e, t, o) => ({ section: "profile_modules", component: e, element: o, action: t }),
                l = (e, t, o) => ({ id: e, position: t, is_viewer_follows_user: o }),
                s = (e, t, o, n) => ({ profile_id: n, items: [l(e, t, o)] });
        },
        652904: (e, t, o) => {
            o.d(t, { Z: () => d });
            var n = o(202784),
                r = o(500002),
                a = o(668214),
                i = o(997174),
                l = o(118823);
            const s = (0, a.Z)()
                .propsFromActions(() => ({ updateLocation: l.YF, updateTweetDetailNav: i.NH }))
                .withAnalytics();
            class c extends n.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: o, search: n },
                            locationKey: r,
                        } = this.props,
                        {
                            location: { pathname: a, search: i },
                            locationKey: l,
                        } = e;
                    let s = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (s = !0));
                    const c = r || l;
                    ((c && r !== l) || (!c && o !== a) || n !== i || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: n } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), n(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, r.ZP)(s(c));
        },
        478282: (e, t, o) => {
            o.d(t, { Z: () => l });
            var n = o(202784),
                r = o(325686),
                a = o(392237),
                i = o(980407);
            function l(e) {
                const { children: t, onBackClick: o, rightControl: a, title: l } = e;
                return n.createElement(i.Z, { "aria-hidden": !1, backButtonType: "back", onBackClick: o, rightControl: a, title: l }, n.createElement(r.Z, { style: s.container }, t));
            }
            const s = a.default.create((e) => ({ container: { paddingBottom: e.spaces.space24, maxHeight: "80vh", minHeight: "480px" } }));
        },
        800536: (e, t, o) => {
            o.d(t, { Pl: () => c, V5: () => i, bL: () => l, openTimesTypes: () => s });
            var n = o(332920),
                r = o.n(n),
                a = o(709402);
            const i = "/settings/professional_profile/profile_spotlight",
                l = Object.freeze({ [a.Y.Location]: "/settings/professional_profile/profile_spotlight/location", [a.Y.App]: "/settings/professional_profile/profile_spotlight/app", [a.Y.Communities]: "/settings/professional_profile/profile_spotlight/communities" }),
                s = Object.freeze({ NO_HOURS: "NoHours", ALWAYS_OPEN: "AlwaysOpen", REGULAR_HOURS: "RegularHours" }),
                c = { cancelButtonLabel: r().g419ecf4, confirmButtonLabel: r().d3a097a2, headline: r().j1e1cd30, text: r().if69307c };
        },
        709402: (e, t, o) => {
            o.d(t, { Y: () => n });
            const n = Object.freeze({ All: "All", Shop: "Shop", Newsletter: "Newsletter", Location: "About", App: "App", Link: "Link", Communities: "Communities", Jobs: "Jobs" });
        },
        242454: (e, t, o) => {
            o.d(t, { Z: () => p });
            var n = o(807896),
                r = o(202784),
                a = o(325686),
                i = o(731708),
                l = o(58881),
                s = o(530732),
                c = o(392237);
            const d = c.default.create((e) => ({ container: { backgroundColor: e.colors.cellBackground }, root: { justifyContent: "center", minHeight: e.spaces.space48, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 } })),
                p = ({ align: e = "center", color: t, label: o, ...p }) => {
                    const u = l.Z.generate({ backgroundColor: c.default.theme.colors.transparent, color: c.default.theme.colors[t], insetFocusRing: !0 });
                    return r.createElement(a.Z, { style: d.container }, r.createElement(s.Z, (0, n.Z)({}, p, { interactiveStyles: u, style: d.root }), r.createElement(i.ZP, { align: e, color: t }, o)));
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.SettingsProfessionalProfileProfileSpotlight~bundle.SettingsProfessionalProfileLocationSpotlight.9a8f564a.js.map
