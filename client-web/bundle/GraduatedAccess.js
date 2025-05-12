"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.GraduatedAccess"],
    {
        25704: (e, t, n) => {
            n.d(t, { Z: () => u });
            var a = n(202784),
                o = n(529356),
                s = n(674132),
                r = n.n(s),
                l = n(621416),
                c = n(443781);
            const i = r().j24c37b2,
                d = ({ Content: e, contentStyle: t, actionLabel: n = i, flag: s, graphic: r, graphicDisplayMode: d, headline: u, isFullHeightOnMobile: p, enableMaskForDismiss: m, onAction: g, onClose: b, onSecondaryAction: h, secondaryActionLabel: C, supportUrl: y, subtext: k, withCloseButton: E, shouldShowForLoggedOut: f = !1, shouldAddEducationFlagOnClose: S = !0, shouldAddEducationFlagOnSecondary: w = !0, shouldAddEducationFlagOnPrimary: M = !0 }) => {
                    const { loggedInUserId: A } = a.useContext(c.rC),
                        [F, L] = (0, l.m)(s),
                        Z = a.useCallback(
                            (e) => {
                                M && L(), g && g(e);
                            },
                            [L, g, M],
                        ),
                        U = a.useCallback(() => {
                            S && L(), b && b();
                        }, [L, S, b]),
                        v = a.useCallback(
                            (e) => {
                                w && L(), h && h(e);
                            },
                            [L, h, w],
                        );
                    if (!F || (!A && !f)) return null;
                    return a.createElement(o.Z, { actionLabel: n, contentStyle: t, enableMaskForDismiss: m, graphic: r, graphicDisplayMode: d || "none", headline: u, isFullHeightOnMobile: p, onAction: Z, onClose: U, onSecondaryAction: v, secondaryActionLabel: C, subtext: k, supportUrl: y, withCloseButton: E }, e ? a.createElement(e, null) : null);
                },
                u = a.memo(d);
        },
        621416: (e, t, n) => {
            n.d(t, { Z: () => r, m: () => s });
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
            const r = s;
        },
        534999: (e, t, n) => {
            n.r(t), n.d(t, { GraduatedAccessScreen: () => q, default: () => z });
            var a = n(202784),
                o = n(107267),
                s = n(325686),
                r = n(392237),
                l = n(593866),
                c = n(731708),
                i = n(674132),
                d = n.n(i),
                u = n(25704),
                p = n(175856),
                m = n(688715),
                g = n(297938),
                b = n(324922);
            const h = r.default.create((e) => ({ decorationContainer: { color: e.colors.primary, height: e.spaces.space24, width: e.spaces.space24, marginEnd: e.spaces.space20 } })),
                C = (0, m.ju)("https://help.x.com/safety-and-security/control-your-twitter-experience"),
                y = d().a97bc07e,
                k = d().i6671128,
                E = d().a72188d6,
                f = d().d5e4d0a6,
                S = a.createElement(g.default, { style: h.decorationContainer }),
                w = a.createElement(b.default, { style: h.decorationContainer }),
                M = [
                    { decoration: S, label: d().a4ee9572, description: d().e5f4eac0 },
                    { decoration: w, label: d().c7832a72, description: d().i1ccd17a },
                ],
                A = { learnMoreTitle: d().i859a9d4, learnMoreUrl: C, ctaTitle: d().j24c37b2 },
                F = { title: y, description: E, promptItems: M },
                L = { title: k, description: f, promptItems: M },
                Z = r.default.create((e) => ({ contentContainer: { marginBottom: e.spaces.space16 }, itemsContainer: { marginBottom: e.spaces.space24 }, itemContainer: { paddingStart: 0, paddingEnd: 0 }, supportLink: { marginTop: e.spaces.space64 } })),
                U = d().i6671128,
                v = d().d5e4d0a6,
                _ = () => a.createElement(s.Z, { style: Z.itemsContainer }, a.createElement(l.Z, { items: L.promptItems }), a.createElement(c.ZP, { link: A.learnMoreUrl, style: Z.supportLink }, A.learnMoreTitle)),
                B = () => {
                    const e = (0, o.useHistory)(),
                        t = a.useCallback(() => {
                            e.replace(e.getLastNonModalLocationPathname() || "/");
                        }, [e]);
                    return a.createElement(u.Z, { Content: _, actionLabel: A.ctaTitle, contentStyle: Z.contentContainer, enableMaskForDismiss: !0, flag: p.d7, graphicDisplayMode: "icon", headline: U, isFullHeightOnMobile: !0, onAction: t, onClose: t, subtext: v, withCloseButton: !0 });
                };
            var D = n(725516);
            const O = r.default.create((e) => ({ contentContainer: { marginBottom: e.spaces.space16 }, itemsContainer: { marginBottom: e.spaces.space24 }, itemContainer: { paddingStart: 0, paddingEnd: 0 }, supportLink: { marginTop: e.spaces.space64 } })),
                P = d().a97bc07e,
                x = d().a72188d6,
                H = (e) => ({ page: "string" == typeof e.location.query.graduatedAccessScribeSrc ? e.location.query.graduatedAccessScribeSrc : "unknown", section: "graduated_access", component: "prompt" }),
                T = () => {
                    const e = (0, D.z)(),
                        t = (0, o.useHistory)(),
                        n = a.useCallback(() => {
                            e.scribe({ ...H(t), element: "learn_more", action: "click" });
                        }, [e, t]);
                    return a.createElement(s.Z, { style: O.itemsContainer }, a.createElement(l.Z, { items: F.promptItems }), a.createElement(c.ZP, { link: A.learnMoreUrl, onClick: n, style: O.supportLink }, A.learnMoreTitle));
                },
                I = () => {
                    const e = (0, o.useHistory)(),
                        t = (0, D.z)();
                    a.useEffect(() => {
                        t.scribe({ ...H(e), action: "impression" });
                    }, [e, t]);
                    const n = a.useCallback(() => {
                            e.replace(e.getLastNonModalLocationPathname() || "/");
                        }, [e]),
                        s = a.useCallback(() => {
                            t.scribe({ ...H(e), element: "got_it_button", action: "click" }), n();
                        }, [t, n, e]),
                        r = a.useCallback(() => {
                            t.scribe({ ...H(e), element: "close", action: "click" }), n();
                        }, [t, n, e]);
                    return a.createElement(u.Z, { Content: T, actionLabel: A.ctaTitle, contentStyle: O.contentContainer, enableMaskForDismiss: !0, flag: p.Uq, graphicDisplayMode: "icon", headline: P, isFullHeightOnMobile: !0, onAction: s, onClose: r, shouldAddEducationFlagOnClose: !1, subtext: x, withCloseButton: !0 });
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
                        t ? a.createElement(I, null) : e ? a.createElement(B, null) : null
                    );
                },
                z = j(a.memo(q));
        },
        730895: (e, t, n) => {
            var a = n(821176);
            e.exports = function () {
                var e = a(this),
                    t = "";
                return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.GraduatedAccess.9d05687a.js.map
