"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.GraduatedAccess"],
    {
        25704: (e, t, n) => {
            n.d(t, { Z: () => u });
            var a = n(202784),
                o = n(529356),
                s = n(111677),
                r = n.n(s),
                l = n(621416),
                c = n(443781);
            const i = r().j24c37b2,
                d = ({ Content: e, contentStyle: t, actionLabel: n = i, flag: s, graphic: r, graphicDisplayMode: d, headline: u, isFullHeightOnMobile: p, enableMaskForDismiss: m, onAction: b, onClose: g, onSecondaryAction: h, secondaryActionLabel: C, supportUrl: y, subtext: k, withCloseButton: E, shouldShowForLoggedOut: f = !1, shouldAddEducationFlagOnClose: w = !0, shouldAddEducationFlagOnSecondary: M = !0, shouldAddEducationFlagOnPrimary: S = !0 }) => {
                    const { loggedInUserId: A } = a.useContext(c.rC),
                        [F, L] = (0, l.m)(s),
                        U = a.useCallback(
                            (e) => {
                                S && L(), b && b(e);
                            },
                            [L, b, S],
                        ),
                        Z = a.useCallback(() => {
                            w && L(), g && g();
                        }, [L, w, g]),
                        _ = a.useCallback(
                            (e) => {
                                M && L(), h && h(e);
                            },
                            [L, h, M],
                        );
                    if (!F || (!A && !f)) return null;
                    return a.createElement(o.Z, { actionLabel: n, contentStyle: t, enableMaskForDismiss: m, graphic: r, graphicDisplayMode: d || "none", headline: u, isFullHeightOnMobile: p, onAction: U, onClose: Z, onSecondaryAction: _, secondaryActionLabel: C, subtext: k, supportUrl: y, withCloseButton: E }, e ? a.createElement(e, null) : null);
                },
                u = a.memo(d);
        },
        621416: (e, t, n) => {
            n.d(t, { m: () => s });
            n(890103);
            var a = n(202784),
                o = n(175698);
            function s(e) {
                const t = (0, o.A)();
                return [
                    !!t && !t.flags[e],
                    a.useCallback(() => {
                        t?.addFlag(e);
                    }, [t, e]),
                ];
            }
        },
        534999: (e, t, n) => {
            n.r(t), n.d(t, { GraduatedAccessScreen: () => q, default: () => z });
            var a = n(202784),
                o = n(107267),
                s = n(325686),
                r = n(392237),
                l = n(593866),
                c = n(731708),
                i = n(111677),
                d = n.n(i),
                u = n(25704),
                p = n(175856),
                m = n(688715),
                b = n(297938),
                g = n(324922);
            const h = r.default.create((e) => ({ decorationContainer: { color: e.colors.primary, height: e.spaces.space24, width: e.spaces.space24, marginEnd: e.spaces.space20 } })),
                C = (0, m.ju)("https://help.x.com/safety-and-security/control-your-twitter-experience"),
                y = d().a97bc07e,
                k = d().i6671128,
                E = d().a72188d6,
                f = d().d5e4d0a6,
                w = a.createElement(b.default, { style: h.decorationContainer }),
                M = a.createElement(g.default, { style: h.decorationContainer }),
                S = [
                    { decoration: w, label: d().a4ee9572, description: d().e5f4eac0 },
                    { decoration: M, label: d().c7832a72, description: d().i1ccd17a },
                ],
                A = { learnMoreTitle: d().i859a9d4, learnMoreUrl: C, ctaTitle: d().j24c37b2 },
                F = { title: y, description: E, promptItems: S },
                L = { title: k, description: f, promptItems: S },
                U = r.default.create((e) => ({ contentContainer: { marginBottom: e.spaces.space16 }, itemsContainer: { marginBottom: e.spaces.space24 }, itemContainer: { paddingStart: 0, paddingEnd: 0 }, supportLink: { marginTop: e.spaces.space64 } })),
                Z = d().i6671128,
                _ = d().d5e4d0a6,
                B = () => a.createElement(s.Z, { style: U.itemsContainer }, a.createElement(l.Z, { items: L.promptItems }), a.createElement(c.ZP, { link: A.learnMoreUrl, style: U.supportLink }, A.learnMoreTitle)),
                D = () => {
                    const e = (0, o.useHistory)(),
                        t = a.useCallback(() => {
                            e.replace(e.getLastNonModalLocationPathname() || "/");
                        }, [e]);
                    return a.createElement(u.Z, { Content: B, actionLabel: A.ctaTitle, contentStyle: U.contentContainer, enableMaskForDismiss: !0, flag: p.d7, graphicDisplayMode: "icon", headline: Z, isFullHeightOnMobile: !0, onAction: t, onClose: t, subtext: _, withCloseButton: !0 });
                };
            var O = n(725516);
            const P = r.default.create((e) => ({ contentContainer: { marginBottom: e.spaces.space16 }, itemsContainer: { marginBottom: e.spaces.space24 }, itemContainer: { paddingStart: 0, paddingEnd: 0 }, supportLink: { marginTop: e.spaces.space64 } })),
                H = d().a97bc07e,
                T = d().a72188d6,
                v = (e) => ({ page: "string" == typeof e.location.query.graduatedAccessScribeSrc ? e.location.query.graduatedAccessScribeSrc : "unknown", section: "graduated_access", component: "prompt" }),
                x = () => {
                    const e = (0, O.z)(),
                        t = (0, o.useHistory)(),
                        n = a.useCallback(() => {
                            e.scribe({ ...v(t), element: "learn_more", action: "click" });
                        }, [e, t]);
                    return a.createElement(s.Z, { style: P.itemsContainer }, a.createElement(l.Z, { items: F.promptItems }), a.createElement(c.ZP, { link: A.learnMoreUrl, onClick: n, style: P.supportLink }, A.learnMoreTitle));
                },
                I = () => {
                    const e = (0, o.useHistory)(),
                        t = (0, O.z)();
                    a.useEffect(() => {
                        t.scribe({ ...v(e), action: "impression" });
                    }, [e, t]);
                    const n = a.useCallback(() => {
                            e.replace(e.getLastNonModalLocationPathname() || "/");
                        }, [e]),
                        s = a.useCallback(() => {
                            t.scribe({ ...v(e), element: "got_it_button", action: "click" }), n();
                        }, [t, n, e]),
                        r = a.useCallback(() => {
                            t.scribe({ ...v(e), element: "close", action: "click" }), n();
                        }, [t, n, e]);
                    return a.createElement(u.Z, { Content: x, actionLabel: A.ctaTitle, contentStyle: P.contentContainer, enableMaskForDismiss: !0, flag: p.Uq, graphicDisplayMode: "icon", headline: H, isFullHeightOnMobile: !0, onAction: s, onClose: r, shouldAddEducationFlagOnClose: !1, subtext: T, withCloseButton: !0 });
                };
            var N = n(668214),
                G = n(723819);
            const j = (0, N.Z)().propsFromState(() => ({ shouldShowNewUserPrompt: G.ED, shouldShowGradUserPrompt: G.gN })),
                q = ({ shouldShowGradUserPrompt: e, shouldShowNewUserPrompt: t }) => {
                    const n = (0, o.useHistory)();
                    return (
                        a.useEffect(() => {
                            t || e || n.goBack();
                        }, [n]),
                        t ? a.createElement(I, null) : e ? a.createElement(D, null) : null
                    );
                },
                z = j(a.memo(q));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.GraduatedAccess.54fd99da.js.map
