"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.GraduatedAccess", "icons/IconComposeDm-js"],
    {
        25704: (e, t, n) => {
            n.d(t, { Z: () => u });
            var a = n(202784),
                o = n(529356),
                r = n(111677),
                s = n.n(r),
                l = n(621416),
                c = n(443781);
            const i = s().j24c37b2,
                d = ({ Content: e, contentStyle: t, actionLabel: n = i, flag: r, graphic: s, graphicDisplayMode: d, headline: u, isFullHeightOnMobile: p, enableMaskForDismiss: m, onAction: h, onClose: g, onSecondaryAction: b, secondaryActionLabel: C, supportUrl: y, subtext: k, withCloseButton: E, shouldShowForLoggedOut: w = !1, shouldAddEducationFlagOnClose: f = !0, shouldAddEducationFlagOnSecondary: v = !0, shouldAddEducationFlagOnPrimary: M = !0 }) => {
                    const { loggedInUserId: S } = a.useContext(c.rC),
                        [A, F] = (0, l.m)(r),
                        L = a.useCallback(
                            (e) => {
                                M && F(), h && h(e);
                            },
                            [F, h, M],
                        ),
                        Z = a.useCallback(() => {
                            f && F(), g && g();
                        }, [F, f, g]),
                        D = a.useCallback(
                            (e) => {
                                v && F(), b && b(e);
                            },
                            [F, b, v],
                        );
                    if (!A || (!S && !w)) return null;
                    return a.createElement(o.Z, { actionLabel: n, contentStyle: t, enableMaskForDismiss: m, graphic: s, graphicDisplayMode: d || "none", headline: u, isFullHeightOnMobile: p, onAction: L, onClose: Z, onSecondaryAction: D, secondaryActionLabel: C, subtext: k, supportUrl: y, withCloseButton: E }, e ? a.createElement(e, null) : null);
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
            n.r(t), n.d(t, { GraduatedAccessScreen: () => G, default: () => q });
            var a = n(202784),
                o = n(107267),
                r = n(325686),
                s = n(392237),
                l = n(593866),
                c = n(731708),
                i = n(111677),
                d = n.n(i),
                u = n(25704),
                p = n(175856),
                m = n(688715),
                h = n(297938),
                g = n(324922);
            const b = s.default.create((e) => ({ decorationContainer: { color: e.colors.primary, height: e.spaces.space24, width: e.spaces.space24, marginEnd: e.spaces.space20 } })),
                C = (0, m.ju)("https://help.x.com/safety-and-security/control-your-twitter-experience"),
                y = d().a97bc07e,
                k = d().i6671128,
                E = d().a72188d6,
                w = d().d5e4d0a6,
                f = a.createElement(h.default, { style: b.decorationContainer }),
                v = a.createElement(g.default, { style: b.decorationContainer }),
                M = [
                    { decoration: f, label: d().a4ee9572, description: d().e5f4eac0 },
                    { decoration: v, label: d().c7832a72, description: d().i1ccd17a },
                ],
                S = { learnMoreTitle: d().i859a9d4, learnMoreUrl: C, ctaTitle: d().j24c37b2 },
                A = { title: y, description: E, promptItems: M },
                F = { title: k, description: w, promptItems: M },
                L = s.default.create((e) => ({ contentContainer: { marginBottom: e.spaces.space16 }, itemsContainer: { marginBottom: e.spaces.space24 }, itemContainer: { paddingStart: 0, paddingEnd: 0 }, supportLink: { marginTop: e.spaces.space64 } })),
                Z = d().i6671128,
                D = d().d5e4d0a6,
                U = () => a.createElement(r.Z, { style: L.itemsContainer }, a.createElement(l.Z, { items: F.promptItems }), a.createElement(c.ZP, { link: S.learnMoreUrl, style: L.supportLink }, S.learnMoreTitle)),
                B = () => {
                    const e = (0, o.useHistory)(),
                        t = a.useCallback(() => {
                            e.replace(e.getLastNonModalLocationPathname() || "/");
                        }, [e]);
                    return a.createElement(u.Z, { Content: U, actionLabel: S.ctaTitle, contentStyle: L.contentContainer, enableMaskForDismiss: !0, flag: p.d7, graphicDisplayMode: "icon", headline: Z, isFullHeightOnMobile: !0, onAction: t, onClose: t, subtext: D, withCloseButton: !0 });
                };
            var H = n(725516);
            const _ = s.default.create((e) => ({ contentContainer: { marginBottom: e.spaces.space16 }, itemsContainer: { marginBottom: e.spaces.space24 }, itemContainer: { paddingStart: 0, paddingEnd: 0 }, supportLink: { marginTop: e.spaces.space64 } })),
                O = d().a97bc07e,
                P = d().a72188d6,
                x = (e) => ({ page: "string" == typeof e.location.query.graduatedAccessScribeSrc ? e.location.query.graduatedAccessScribeSrc : "unknown", section: "graduated_access", component: "prompt" }),
                T = () => {
                    const e = (0, H.z)(),
                        t = (0, o.useHistory)(),
                        n = a.useCallback(() => {
                            e.scribe({ ...x(t), element: "learn_more", action: "click" });
                        }, [e, t]);
                    return a.createElement(r.Z, { style: _.itemsContainer }, a.createElement(l.Z, { items: A.promptItems }), a.createElement(c.ZP, { link: S.learnMoreUrl, onClick: n, style: _.supportLink }, S.learnMoreTitle));
                },
                I = () => {
                    const e = (0, o.useHistory)(),
                        t = (0, H.z)();
                    a.useEffect(() => {
                        t.scribe({ ...x(e), action: "impression" });
                    }, [e, t]);
                    const n = a.useCallback(() => {
                            e.replace(e.getLastNonModalLocationPathname() || "/");
                        }, [e]),
                        r = a.useCallback(() => {
                            t.scribe({ ...x(e), element: "got_it_button", action: "click" }), n();
                        }, [t, n, e]),
                        s = a.useCallback(() => {
                            t.scribe({ ...x(e), element: "close", action: "click" }), n();
                        }, [t, n, e]);
                    return a.createElement(u.Z, { Content: T, actionLabel: S.ctaTitle, contentStyle: _.contentContainer, enableMaskForDismiss: !0, flag: p.Uq, graphicDisplayMode: "icon", headline: O, isFullHeightOnMobile: !0, onAction: r, onClose: s, shouldAddEducationFlagOnClose: !1, subtext: P, withCloseButton: !0 });
                };
            var z = n(668214),
                N = n(723819);
            const j = (0, z.Z)().propsFromState(() => ({ shouldShowNewUserPrompt: N.ED, shouldShowGradUserPrompt: N.gN })),
                G = ({ shouldShowGradUserPrompt: e, shouldShowNewUserPrompt: t }) => {
                    const n = (0, o.useHistory)();
                    return (
                        a.useEffect(() => {
                            t || e || n.goBack();
                        }, [n]),
                        t ? a.createElement(I, null) : e ? a.createElement(B, null) : null
                    );
                },
                q = j(a.memo(G));
        },
        324922: (e, t, n) => {
            n.r(t), n.d(t, { default: () => c });
            var a = n(202784),
                o = n(890601),
                r = n(783427),
                s = n(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M1.998 5.5c0-1.381 1.119-2.5 2.5-2.5h15c1.381 0 2.5 1.119 2.5 2.5V12h-2v-1.537l-8 3.635-8-3.635V18.5c0 .276.224.5.5.5H13v2H4.498c-1.381 0-2.5-1.119-2.5-2.5v-13zm2 2.766l8 3.635 8-3.635V5.5c0-.276-.224-.5-.5-.5h-15c-.276 0-.5.224-.5.5v2.766zM19 18v-3h2v3h3v2h-3v3h-2v-3h-3v-2h3z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.GraduatedAccess.891af0ea.js.map
