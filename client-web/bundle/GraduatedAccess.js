"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.GraduatedAccess"],
    {
        25704: (e, t, n) => {
            n.d(t, { Z: () => u });
            var a = n(202784),
                o = n(529356),
                r = n(674132),
                l = n.n(r),
                s = n(621416),
                i = n(443781);
            const c = l().j24c37b2,
                d = ({ Content: e, contentStyle: t, actionLabel: n = c, flag: r, graphic: l, graphicDisplayMode: d, headline: u, isFullHeightOnMobile: p, enableMaskForDismiss: m, onAction: h, onClose: g, onSecondaryAction: b, secondaryActionLabel: C, supportUrl: y, subtext: k, withCloseButton: E, shouldShowForLoggedOut: v = !1, shouldAddEducationFlagOnClose: f = !0, shouldAddEducationFlagOnSecondary: w = !0, shouldAddEducationFlagOnPrimary: M = !0 }) => {
                    const { loggedInUserId: S } = a.useContext(i.rC),
                        [A, F] = (0, s.m)(r),
                        L = a.useCallback(
                            (e) => {
                                M && F(), h && h(e);
                            },
                            [F, h, M],
                        ),
                        Z = a.useCallback(() => {
                            f && F(), g && g();
                        }, [F, f, g]),
                        U = a.useCallback(
                            (e) => {
                                w && F(), b && b(e);
                            },
                            [F, b, w],
                        );
                    if (!A || (!S && !v)) return null;
                    return a.createElement(o.Z, { actionLabel: n, contentStyle: t, enableMaskForDismiss: m, graphic: l, graphicDisplayMode: d || "none", headline: u, isFullHeightOnMobile: p, onAction: L, onClose: Z, onSecondaryAction: U, secondaryActionLabel: C, subtext: k, supportUrl: y, withCloseButton: E }, e ? a.createElement(e, null) : null);
                },
                u = a.memo(d);
        },
        621416: (e, t, n) => {
            n.d(t, { m: () => r });
            n(890103);
            var a = n(202784),
                o = n(175698);
            function r(e) {
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
            n.r(t), n.d(t, { GraduatedAccessScreen: () => j, default: () => q });
            var a = n(202784),
                o = n(107267),
                r = n(325686),
                l = n(392237),
                s = n(593866),
                i = n(731708),
                c = n(674132),
                d = n.n(c),
                u = n(25704),
                p = n(175856),
                m = n(688715),
                h = n(297938),
                g = n(324922);
            const b = l.default.create((e) => ({ decorationContainer: { color: e.colors.primary, height: e.spaces.space24, width: e.spaces.space24, marginEnd: e.spaces.space20 } })),
                C = (0, m.ju)("https://help.x.com/safety-and-security/control-your-twitter-experience"),
                y = d().a97bc07e,
                k = d().i6671128,
                E = d().a72188d6,
                v = d().d5e4d0a6,
                f = a.createElement(h.default, { style: b.decorationContainer }),
                w = a.createElement(g.default, { style: b.decorationContainer }),
                M = [
                    { decoration: f, label: d().a4ee9572, description: d().e5f4eac0 },
                    { decoration: w, label: d().c7832a72, description: d().i1ccd17a },
                ],
                S = { learnMoreTitle: d().i859a9d4, learnMoreUrl: C, ctaTitle: d().j24c37b2 },
                A = { title: y, description: E, promptItems: M },
                F = { title: k, description: v, promptItems: M },
                L = l.default.create((e) => ({ contentContainer: { marginBottom: e.spaces.space16 }, itemsContainer: { marginBottom: e.spaces.space24 }, itemContainer: { paddingStart: 0, paddingEnd: 0 }, supportLink: { marginTop: e.spaces.space64 } })),
                Z = d().i6671128,
                U = d().d5e4d0a6,
                B = () => a.createElement(r.Z, { style: L.itemsContainer }, a.createElement(s.Z, { items: F.promptItems }), a.createElement(i.ZP, { link: S.learnMoreUrl, style: L.supportLink }, S.learnMoreTitle)),
                D = () => {
                    const e = (0, o.useHistory)(),
                        t = a.useCallback(() => {
                            e.replace(e.getLastNonModalLocationPathname() || "/");
                        }, [e]);
                    return a.createElement(u.Z, { Content: B, actionLabel: S.ctaTitle, contentStyle: L.contentContainer, enableMaskForDismiss: !0, flag: p.d7, graphicDisplayMode: "icon", headline: Z, isFullHeightOnMobile: !0, onAction: t, onClose: t, subtext: U, withCloseButton: !0 });
                };
            var H = n(725516);
            const _ = l.default.create((e) => ({ contentContainer: { marginBottom: e.spaces.space16 }, itemsContainer: { marginBottom: e.spaces.space24 }, itemContainer: { paddingStart: 0, paddingEnd: 0 }, supportLink: { marginTop: e.spaces.space64 } })),
                x = d().a97bc07e,
                O = d().a72188d6,
                P = (e) => ({ page: "string" == typeof e.location.query.graduatedAccessScribeSrc ? e.location.query.graduatedAccessScribeSrc : "unknown", section: "graduated_access", component: "prompt" }),
                T = () => {
                    const e = (0, H.z)(),
                        t = (0, o.useHistory)(),
                        n = a.useCallback(() => {
                            e.scribe({ ...P(t), element: "learn_more", action: "click" });
                        }, [e, t]);
                    return a.createElement(r.Z, { style: _.itemsContainer }, a.createElement(s.Z, { items: A.promptItems }), a.createElement(i.ZP, { link: S.learnMoreUrl, onClick: n, style: _.supportLink }, S.learnMoreTitle));
                },
                I = () => {
                    const e = (0, o.useHistory)(),
                        t = (0, H.z)();
                    a.useEffect(() => {
                        t.scribe({ ...P(e), action: "impression" });
                    }, [e, t]);
                    const n = a.useCallback(() => {
                            e.replace(e.getLastNonModalLocationPathname() || "/");
                        }, [e]),
                        r = a.useCallback(() => {
                            t.scribe({ ...P(e), element: "got_it_button", action: "click" }), n();
                        }, [t, n, e]),
                        l = a.useCallback(() => {
                            t.scribe({ ...P(e), element: "close", action: "click" }), n();
                        }, [t, n, e]);
                    return a.createElement(u.Z, { Content: T, actionLabel: S.ctaTitle, contentStyle: _.contentContainer, enableMaskForDismiss: !0, flag: p.Uq, graphicDisplayMode: "icon", headline: x, isFullHeightOnMobile: !0, onAction: r, onClose: l, shouldAddEducationFlagOnClose: !1, subtext: O, withCloseButton: !0 });
                };
            var z = n(668214),
                N = n(723819);
            const G = (0, z.Z)().propsFromState(() => ({ shouldShowNewUserPrompt: N.ED, shouldShowGradUserPrompt: N.gN })),
                j = ({ shouldShowGradUserPrompt: e, shouldShowNewUserPrompt: t }) => {
                    const n = (0, o.useHistory)();
                    return (
                        a.useEffect(() => {
                            t || e || n.goBack();
                        }, [n]),
                        t ? a.createElement(I, null) : e ? a.createElement(D, null) : null
                    );
                },
                q = G(a.memo(j));
        },
        324922: (e, t, n) => {
            n.r(t), n.d(t, { default: () => i });
            var a = n(202784),
                o = n(890601),
                r = n(783427),
                l = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [l.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5V12h-2v-1.537l-8 3.635-8-3.635V18.5c0 .276.224.5.5.5H13v2H4.498c-1.381 0-2.5-1.119-2.5-2.5v-13zm2 2.766l8 3.635 8-3.635V5.5c0-.276-.224-.5-.5-.5h-15c-.276 0-.5.224-.5.5v2.766zM19 18v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const i = s;
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.GraduatedAccess.f783cf0a.js.map
