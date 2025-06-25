"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Conferences-6107ac1a", "loader.AudioDock", "loader.AudioContextVoiceMedia", "icons/IconExiting-js"],
    {
        403883: (e, n, l) => {
            l.d(n, { Z: () => o });
            var t,
                r,
                a,
                s,
                i = {
                    fragment: {
                        argumentDefinitions: (t = [{ defaultValue: null, kind: "LocalArgument", name: "userId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "RelayUserNameQuery",
                        selections: [
                            {
                                alias: "user",
                                args: (r = [
                                    { kind: "Variable", name: "rest_id", variableName: "userId" },
                                    { kind: "Literal", name: "s", value: "f3d8" },
                                ]),
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_rest_id",
                                plural: !1,
                                selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ args: null, kind: "FragmentSpread", name: "UserName_user" }], type: "User", abstractKey: null }], storageKey: null }, action: "THROW" }],
                                storageKey: null,
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: t,
                        kind: "Operation",
                        name: "RelayUserNameQuery",
                        selections: [
                            {
                                alias: "user",
                                args: r,
                                concreteType: "UserResults",
                                kind: "LinkedField",
                                name: "user_result_by_rest_id",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: null,
                                        kind: "LinkedField",
                                        name: "result",
                                        plural: !1,
                                        selections: [
                                            { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                            {
                                                kind: "InlineFragment",
                                                selections: [
                                                    { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "UserCore",
                                                        kind: "LinkedField",
                                                        name: "core",
                                                        plural: !1,
                                                        selections: [
                                                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    { alias: null, args: null, concreteType: "UserPrivacy", kind: "LinkedField", name: "privacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }], storageKey: null },
                                                    {
                                                        alias: "affiliates_highlighted_label",
                                                        args: null,
                                                        concreteType: "HighlightedUserLabelResponse",
                                                        kind: "LinkedField",
                                                        name: "identity_profile_labels_highlighted_label",
                                                        plural: !1,
                                                        selections: [
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "HighlightedUserLabel",
                                                                kind: "LinkedField",
                                                                name: "label",
                                                                plural: !1,
                                                                selections: [
                                                                    { alias: null, args: null, concreteType: "TimelineUrl", kind: "LinkedField", name: "url", plural: !1, selections: [(a = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }), { alias: "urlType", args: null, kind: "ScalarField", name: "url_type", storageKey: null }], storageKey: null },
                                                                    { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [a], storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                                                    { alias: "userLabelType", args: null, kind: "ScalarField", name: "user_label_type", storageKey: null },
                                                                    { alias: "userLabelDisplayType", args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "UserVerification",
                                                        kind: "LinkedField",
                                                        name: "verification",
                                                        plural: !1,
                                                        selections: [
                                                            { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                ],
                                                type: "User",
                                                abstractKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                    s,
                                ],
                                storageKey: null,
                            },
                        ],
                    },
                    params: { id: "lKr3ZmmyJY-csl0CsKo0Mw", metadata: {}, name: "RelayUserNameQuery", operationKind: "query", text: null },
                };
            i.hash = "a80538e0fb22a0432d8e5d59383cd848";
            const o = i;
        },
        395337: (e, n, l) => {
            l.d(n, { Z: () => o });
            var t,
                r,
                a,
                s,
                i = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ kind: "RequiredField", field: (a = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }), action: "THROW" }], storageKey: null }, action: "THROW" }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [t, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [r, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [a], storageKey: null }, (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, s], storageKey: null }], storageKey: null }] },
                    params: { id: "1Sjin33Vk96OVlNTUG6zSg", metadata: {}, name: "affiliatesQuery", operationKind: "query", text: null },
                };
            i.hash = "42f499bfb2697230967b662ad70f78f8";
            const o = i;
        },
        349035: (e, n, l) => {
            l.d(n, { Z: () => a });
            var t = l(202784),
                r = l(272175);
            const a = (0, l(500002).ZP)(({ staticContext: e, status: n = 404 }) => (e && (e.statusCode = n), t.createElement(r.ql, null, t.createElement("meta", { content: "noindex, nofollow", name: "robots" }))));
        },
        56851: (e, n, l) => {
            l.d(n, { Z: () => f });
            var t = l(202784),
                r = l(420740),
                a = l(108362),
                s = l(731708),
                i = l(154003),
                o = l(392237),
                u = l(111677),
                c = l.n(u),
                d = l(349035);
            const m = "error-detail",
                g = c().e49537c2,
                p = c().a9ae1e78;
            class f extends t.PureComponent {
                render() {
                    return t.createElement(r.Z, { testID: m }, t.createElement(d.Z, null), t.createElement(a.Z, { style: y.root }, t.createElement(s.ZP, { align: "center", color: "gray700", style: y.retryText }, g), t.createElement(i.ZP, { link: { pathname: "/search" }, type: "brandFilled" }, p)));
                }
            }
            const y = o.default.create((e) => ({ root: { alignItems: "center", flexGrow: 1, justifyContent: "center", paddingVertical: e.spaces.space20, paddingHorizontal: e.spaces.space12 }, retryText: { marginBottom: e.spaces.space28 } }));
        },
        562041: (e, n, l) => {
            l.d(n, { G: () => u });
            var t = l(202784),
                r = l(400752),
                a = l(565058),
                s = l(708852),
                i = l(403808),
                o = l(811322);
            function u(e) {
                const n = (0, i.r)(e),
                    l = (0, s.tj)(),
                    a = (0, r.b9)(c(n)),
                    o = (0, r.b9)(d);
                return t.useEffect(() => () => o(), [o]), { ref: l ? void 0 : a };
            }
            const c = (0, o.X)((e) =>
                    (0, a.cn)(null, (n, l, t) => {
                        const r = t?.parentElement;
                        if (r && r instanceof HTMLElement) {
                            l(d);
                            const n = l(g(e), r);
                            l(m, { fn: n });
                        }
                    }),
                ),
                d = (0, a.cn)(null, (e, n) => {
                    n(m, (e) => {
                        e && e.fn();
                    });
                }),
                m = (0, a.cn)(),
                g = (0, o.X)((e) =>
                    (0, a.cn)(null, (n, l, t) => {
                        let r = null,
                            a = null,
                            s = null,
                            i = null;
                        function o(e) {
                            const { touches: n } = e;
                            if (1 !== n.length) return;
                            if (!(e.target instanceof HTMLElement)) return;
                            if (0 !== t.scrollTop) return;
                            const [l] = n;
                            r = l.clientY;
                        }
                        function u(e) {
                            if (null === r) return;
                            const { touches: n } = e;
                            if (0 !== t.scrollTop) return void d();
                            const [l] = n;
                            null !== a && (i = l.clientY > a), (a = l.clientY);
                            const o = l.clientY - r;
                            e.preventDefault(), o > 0 ? ((s = o), (t.style.transform = `translateY(${o}px)`)) : ((s = 0), (t.style.transform = ""));
                        }
                        function c(n) {
                            if (i && s) {
                                if ("animate" in t) {
                                    t.animate([{ transform: `translateY(${s}px)` }, { transform: "translateY(100%)" }], { duration: 200 }).onfinish = e;
                                } else e?.();
                                t.style.transform = "translateY(100%)";
                            } else s && ("animate" in t && t.animate([{ transform: `translateY(${s}px)` }, { transform: "translateY(0)" }], { duration: 200 }), (t.style.transform = ""));
                            d();
                        }
                        function d() {
                            (r = null), (a = null), (i = null), (s = null);
                        }
                        return (
                            t.addEventListener("touchstart", o),
                            t.addEventListener("touchmove", u),
                            t.addEventListener("touchend", c),
                            () => {
                                t.removeEventListener("touchstart", o), t.removeEventListener("touchmove", u), t.removeEventListener("touchend", c);
                            }
                        );
                    }),
                );
        },
        801351: (e, n, l) => {
            l.d(n, { J: () => m, s: () => u });
            var t = l(565058),
                r = l(660812),
                a = l(108922),
                s = l(625555),
                i = l(4427),
                o = l(509599);
            const u = (0, t.cn)((e) => e(e(c)) ?? e(d)),
                c = (0, t.cn)((e) => (e(i.sB), (0, a.J)(9e4))),
                d = (0, t.cn)((e) => (e(o.jQ), e(o.jQ.resolved)?.is_recording_rn)),
                m = (0, r.R)((e, n) => {
                    const l = e(i.sB);
                    if (!l) return;
                    const t = !e(u),
                        r = e(c);
                    return e(s.F6)
                        .recordConference(l, t)
                        .then(() => {
                            n(r, t);
                        });
                });
        },
        703286: (e, n, l) => {
            l.d(n, { p: () => u });
            var t = l(42134),
                r = l(994775),
                a = l(526250),
                s = l(4427),
                i = l(688327),
                o = l(712612);
            const u = (0, a.v)((e, n) => {
                const l = { "shift+right": () => c(), "shift+left": () => c(-1) },
                    a = e(s.fJ)
                        ? {
                              ...l,
                              "shift+f8": () => n(o.Dy, (e) => !e),
                              "shift+f1": () => {
                                  const l = e(t.rm);
                                  l && n(i.R, l);
                              },
                          }
                        : l,
                    u = [...document.querySelectorAll("input")],
                    d = [(0, r.Z)(a), ...u.map((e) => (0, r.Z)(a, e))];
                return () => {
                    d.forEach((e) => e());
                };
            });
            function c(e = 1) {
                const n = [...document.querySelectorAll("input, button, textarea, a[href]")].filter((e) => -1 !== e.tabIndex),
                    l = n.indexOf(document.activeElement);
                if (-1 === l) return void n[0]?.focus();
                const t = n[l + e];
                t?.focus();
            }
        },
        741881: (e, n, l) => {
            l.d(n, { d: () => s });
            var t = l(565058),
                r = l(741810),
                a = l(163889);
            (0, t.cn)((e) =>
                r.E.getScheduledSpaces().then((e) => {
                    if (e?.broadcasts && 0 !== e.broadcasts?.length) return e.broadcasts.sort((e, n) => (new Date(e.broadcast.scheduled_start || 0) > new Date(n.broadcast.scheduled_start || 0) ? 1 : -1)), e.broadcasts;
                }),
            );
            const s = (0, t.cn)((e) =>
                r.E.myConferences().catch((e) => {
                    (0, a.ZP)(e);
                }),
            );
        },
        409953: (e, n, l) => {
            l.d(n, { A: () => a });
            var t = l(202784),
                r = l(403808);
            function a(e) {
                const n = (0, r.r)(e);
                return t.useCallback(
                    (e) => {
                        n();
                    },
                    [n],
                );
            }
        },
        660812: (e, n, l) => {
            l.d(n, { R: () => a });
            var t = l(565058),
                r = l(427266);
            const a = (e) => {
                const n = (0, t.cn)(),
                    l = (0, t.cn)(null, (l, t, ...r) => {
                        const a = l(n);
                        if (a) return a;
                        const s = e(l, t, ...r);
                        return (
                            s instanceof Promise &&
                                (t(n, s),
                                s.finally(() => {
                                    t(n, void 0);
                                })),
                            s
                        );
                    }),
                    a = (0, r.mZ)(l);
                return (a.isLoading = (0, t.cn)((e) => !!e(n))), a;
            };
        },
        965728: (e, n, l) => {
            l.d(n, { C_: () => h, I5: () => p, K2: () => y, L$: () => u, Rb: () => f, nk: () => g, sI: () => v, xr: () => k });
            var t = l(202784),
                r = l(483677),
                a = l(782578),
                s = l(401339),
                i = l(521514);
            const o = (e, n) => `rgba(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue}, ${n})`,
                u = (e) => {
                    const n = e && r.Z.getForGallery(e);
                    return n ? { rgb: k(n), rgba: o(n, 0.9) } : m;
                },
                c = i.Z.columnWidths.primary,
                d = (e, n) => Math.min(n, e),
                m = { rgb: "rgb(0, 0, 0)", rgba: "rgba(0, 0, 0, 0.9)" },
                g = { transitionProperty: "background-color", transitionDuration: ".5s" },
                p = (e, n) => {
                    const { containerHeight: l, containerWidth: t, mediaHeight: r, mediaWidth: s } = e,
                        i = s && r ? s / r : 1,
                        o = i > 1,
                        u = n ? 400 : c,
                        m = o && (!s || s <= u) ? d(t, u) : t,
                        g = o || (r && !(r <= u)) ? l : d(l, u);
                    return a.Z.getContainDimensions({ width: m, height: g }, i);
                },
                f = (e) => {
                    const n = e && e.ext_media_color && e.ext_media_color.palette;
                    return u(n);
                },
                y = (e) => {
                    const n = e && e.profile_image_extensions_media_color && e.profile_image_extensions_media_color.palette;
                    return u(n);
                },
                h = (e) => {
                    const n = e && e.profile_banner_extensions_media_color && e.profile_banner_extensions_media_color.palette;
                    return u(n);
                },
                k = (e) => `rgb(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue})`,
                b = (e, n) => {
                    switch (n.type) {
                        case "zoom":
                            return { ...e, isZoomed: n.payload.isZoomed, showControls: !n.payload.isZoomed };
                        case "tap":
                            return { ...e, showControls: !e.showControls };
                        default:
                            return e;
                    }
                },
                v = () => {
                    const [e, n] = t.useReducer(b, { isZoomed: !1, showControls: !0 });
                    return {
                        hideButtons: e.isZoomed || !e.showControls,
                        handleMediaDetailZoomed: function (e) {
                            n({ type: "zoom", payload: { isZoomed: e } });
                        },
                        handleMediaItemTapped: function () {
                            s.Z.isTouchSupported() && n({ type: "tap" });
                        },
                    };
                };
        },
        16222: (e, n, l) => {
            function t(e, n) {
                try {
                    return e();
                } catch (e) {
                    return n(e);
                }
            }
            l.d(n, { o: () => t });
        },
        772544: (e, n, l) => {
            function t() {
                if ("wakeLock" in navigator) return navigator.wakeLock;
            }
            l.d(n, { s: () => t });
        },
        420412: (e, n, l) => {
            l.d(n, { Z: () => o });
            var t = l(202784),
                r = l(325686),
                a = l(235902),
                s = l(885015),
                i = l(392237);
            function o({ borderColor: e = "borderColor", isSlim: n = !1, label: l }) {
                const { isWebRedesign: o } = a.ZP.useProps(),
                    c = "borderColor" === e || "nestedBorderColor" === e ? u[e] : { backgroundColor: i.default.theme.colors[e] ?? i.default.theme.colors.borderColor };
                return l ? t.createElement(s.Z, { style: !n && u.root, withGutter: !0 }, t.createElement(r.Z, { style: u.gapColumn }, t.createElement(r.Z, { style: [u.gap, c] })), t.createElement(r.Z, { style: u.gapText }, l), t.createElement(r.Z, { style: u.gapColumn }, t.createElement(r.Z, { style: [u.gap, c] }))) : t.createElement(r.Z, { style: [!n && u.root, o() && u.rootRedesign, u.gap, c] });
            }
            const u = i.default.create((e) => ({ borderColor: { backgroundColor: i.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: i.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, n, l) => {
            l.d(n, { Z: () => u });
            var t = l(807896),
                r = l(202784),
                a = l(325686),
                s = l(392237);
            class i extends r.Component {
                render() {
                    const { children: e, style: n, withGutter: l, ...s } = this.props,
                        i = r.Children.map(e, (e) => e && r.cloneElement(e, { style: [e.props.style, o.column, l && o.withGutterColumn] }));
                    return r.createElement(a.Z, (0, t.Z)({ style: [n, o.root, l && o.withGutter] }, s), i);
                }
            }
            i.defaultProps = { withGutter: !1 };
            const o = s.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                u = i;
        },
        182714: (e, n, l) => {
            l.d(n, { y: () => o });
            var t = l(202784),
                r = l(111677),
                a = l.n(r);
            function s({ listItem1: e, listItem2: n }) {
                return t.createElement(a().I18NFormatMessage, { $i18n: "he2cc06d" }, e, n);
            }
            function i({ listItem1: e, listItem2: n }) {
                return t.createElement(a().I18NFormatMessage, { $i18n: "hf3108d3" }, e, n);
            }
            function o({ items: e, skipFormatLast: n = !1 }) {
                const l = e.length,
                    [r, i] = e;
                switch (l) {
                    case 0:
                        return "";
                    case 1:
                        return r;
                    case 2:
                        return n
                            ? s({ listItem1: r, listItem2: i })
                            : (function ({ listItem1: e, listItem2: n }) {
                                  return t.createElement(a().I18NFormatMessage, { $i18n: "i74be1ef" }, e, n);
                              })({ listItem1: r, listItem2: i });
                    default:
                        return c(e, n);
                }
            }
            const u = (e) => (e ? s : i);
            function c(e, n) {
                if (2 === e.length) {
                    const [l, t] = e;
                    return u(n)({ listItem1: l, listItem2: t });
                }
                const [l, ...t] = e;
                return s({ listItem1: l, listItem2: c(t, n) });
            }
        },
        297896: (e, n, l) => {
            l.r(n), l.d(n, { default: () => o });
            var t = l(202784),
                r = l(890601),
                a = l(783427),
                s = l(347101);
            const i = (e = {}) => {
                const { direction: n } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: t.createElement("g", null, t.createElement("path", { d: "M4 4.5C4 3.12 5.12 2 6.5 2h11C18.88 2 20 3.12 20 4.5v15c0 1.38-1.12 2.5-2.5 2.5h-11C5.12 22 4 20.88 4 19.5V16h2v3.5c0 .28.22.5.5.5h11c.28 0 .5-.22.5-.5v-15c0-.28-.22-.5-.5-.5h-11c-.28 0-.5.22-.5.5V8H4V4.5zm6.95 3.04L15.42 12l-4.47 4.46-1.41-1.42L11.58 13H2v-2h9.58L9.54 8.96l1.41-1.42z" })) }, { writingDirection: n });
            };
            i.metadata = { width: 24, height: 24 };
            const o = i;
        },
        452693: (e, n, l) => {
            l.r(n), l.d(n, { default: () => o });
            var t = l(202784),
                r = l(890601),
                a = l(783427),
                s = l(347101);
            const i = (e = {}) => {
                const { direction: n } = (0, a.Z)();
                return (0, r.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: t.createElement("g", null, t.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: n });
            };
            i.metadata = { width: 24, height: 24 };
            const o = i;
        },
        662678: (e, n, l) => {
            l.d(n, { G: () => r, Z: () => t });
            l(136728);
            const t = function (e, n) {
                return r(e, n);
            };
            function r(e, n) {
                return e.reduce(
                    (l, t, r) => {
                        const a = n ? n(t, r, e) : !!t;
                        return a && l[0].push(t), !a && l[1].push(t), l;
                    },
                    [[], []],
                );
            }
        },
        34540: (e, n, l) => {
            var t = l(981428),
                r = function (e, n) {
                    return e - n;
                };
            e.exports = function (e, n, l) {
                return (
                    (l = l || r),
                    t(e, n, function (e, n) {
                        return l(n, e);
                    })
                );
            };
        },
        981428: (e) => {
            var n = function (e, n) {
                return e - n;
            };
            e.exports = function (e, l, t) {
                t = t || n;
                var r = void 0,
                    a = void 0,
                    s = !1,
                    i = !0,
                    o = !1,
                    u = void 0;
                try {
                    for (var c, d = e[Symbol.iterator](); !(i = (c = d.next()).done); i = !0) {
                        var m = c.value,
                            g = l(m);
                        (!s || t(g, a) < 0) && ((r = m), (a = g), (s = !0));
                    }
                } catch (e) {
                    (o = !0), (u = e);
                } finally {
                    try {
                        i || null == d.return || d.return();
                    } finally {
                        if (o) throw u;
                    }
                }
                return r;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Conferences-6107ac1a.dcb3cf2a.js.map
