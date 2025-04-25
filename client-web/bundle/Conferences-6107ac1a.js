"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.Conferences-6107ac1a"],
    {
        403883: (e, l, n) => {
            n.d(l, { Z: () => o });
            var a,
                t,
                r,
                s,
                i = {
                    fragment: {
                        argumentDefinitions: (a = [{ defaultValue: null, kind: "LocalArgument", name: "userId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "RelayUserNameQuery",
                        selections: [
                            {
                                alias: "user",
                                args: (t = [
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
                        argumentDefinitions: a,
                        kind: "Operation",
                        name: "RelayUserNameQuery",
                        selections: [
                            {
                                alias: "user",
                                args: t,
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
                                                        concreteType: "ApiUser",
                                                        kind: "LinkedField",
                                                        name: "legacy",
                                                        plural: !1,
                                                        selections: [
                                                            { alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "verified_type", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                    { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" },
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
                                                                    { alias: null, args: null, concreteType: "TimelineUrl", kind: "LinkedField", name: "url", plural: !1, selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }), { alias: "urlType", args: null, kind: "ScalarField", name: "url_type", storageKey: null }], storageKey: null },
                                                                    { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [r], storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                                                    { alias: "userLabelType", args: null, kind: "ScalarField", name: "user_label_type", storageKey: null },
                                                                    { alias: "userLabelDisplayType", args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null },
                                                                ],
                                                                storageKey: null,
                                                            },
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
                    params: { id: "hu1pHaOxY_02h4QKZ01xWQ", metadata: {}, name: "RelayUserNameQuery", operationKind: "query", text: null },
                };
            i.hash = "a80538e0fb22a0432d8e5d59383cd848";
            const o = i;
        },
        395337: (e, l, n) => {
            n.d(l, { Z: () => o });
            var a,
                t,
                r,
                s,
                i = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [(a = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(t = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ kind: "RequiredField", field: (r = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }), action: "THROW" }], storageKey: null }, action: "THROW" }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "affiliatesQuery", selections: [{ alias: null, args: null, concreteType: "Affiliations", kind: "LinkedField", name: "affiliations", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "affiliated_account_ids_results", plural: !0, selections: [a, { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [t, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [r], storageKey: null }, { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" }, (s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, s], storageKey: null }], storageKey: null }] },
                    params: { id: "lre2gA0kvs0gf4XRNei6Qw", metadata: {}, name: "affiliatesQuery", operationKind: "query", text: null },
                };
            i.hash = "10c9183ce406af8e8ffa48a4cfd593b4";
            const o = i;
        },
        562041: (e, l, n) => {
            n.d(l, { G: () => u });
            var a = n(202784),
                t = n(400752),
                r = n(565058),
                s = n(708852),
                i = n(403808),
                o = n(811322);
            function u(e) {
                const l = (0, i.r)(e),
                    n = (0, s.tj)(),
                    r = (0, t.b9)(d(l)),
                    o = (0, t.b9)(c);
                return a.useEffect(() => () => o(), [o]), { ref: n ? void 0 : r };
            }
            const d = (0, o.X)((e) =>
                    (0, r.cn)(null, (l, n, a) => {
                        const t = a?.parentElement;
                        if (t && t instanceof HTMLElement) {
                            n(c);
                            const l = n(g(e), t);
                            n(m, { fn: l });
                        }
                    }),
                ),
                c = (0, r.cn)(null, (e, l) => {
                    l(m, (e) => {
                        e && e.fn();
                    });
                }),
                m = (0, r.cn)(),
                g = (0, o.X)((e) =>
                    (0, r.cn)(null, (l, n, a) => {
                        let t = null,
                            r = null,
                            s = null,
                            i = null;
                        function o(e) {
                            const { touches: l } = e;
                            if (1 !== l.length) return;
                            if (!(e.target instanceof HTMLElement)) return;
                            if (0 !== a.scrollTop) return;
                            const [n] = l;
                            t = n.clientY;
                        }
                        function u(e) {
                            if (null === t) return;
                            const { touches: l } = e;
                            if (0 !== a.scrollTop) return void c();
                            const [n] = l;
                            null !== r && (i = n.clientY > r), (r = n.clientY);
                            const o = n.clientY - t;
                            e.preventDefault(), o > 0 ? ((s = o), (a.style.transform = `translateY(${o}px)`)) : ((s = 0), (a.style.transform = ""));
                        }
                        function d(l) {
                            if (i && s) {
                                if ("animate" in a) {
                                    a.animate([{ transform: `translateY(${s}px)` }, { transform: "translateY(100%)" }], { duration: 200 }).onfinish = e;
                                } else e?.();
                                a.style.transform = "translateY(100%)";
                            } else s && ("animate" in a && a.animate([{ transform: `translateY(${s}px)` }, { transform: "translateY(0)" }], { duration: 200 }), (a.style.transform = ""));
                            c();
                        }
                        function c() {
                            (t = null), (r = null), (i = null), (s = null);
                        }
                        return (
                            a.addEventListener("touchstart", o),
                            a.addEventListener("touchmove", u),
                            a.addEventListener("touchend", d),
                            () => {
                                a.removeEventListener("touchstart", o), a.removeEventListener("touchmove", u), a.removeEventListener("touchend", d);
                            }
                        );
                    }),
                );
        },
        801351: (e, l, n) => {
            n.d(l, { J: () => m, s: () => u });
            var a = n(565058),
                t = n(660812),
                r = n(108922),
                s = n(625555),
                i = n(4427),
                o = n(509599);
            const u = (0, a.cn)((e) => e(e(d)) ?? e(c)),
                d = (0, a.cn)((e) => (e(i.sB), (0, r.J)(9e4))),
                c = (0, a.cn)((e) => (e(o.jQ), e(o.jQ.resolved)?.is_recording_rn)),
                m = (0, t.R)((e, l) => {
                    const n = e(i.sB);
                    if (!n) return;
                    const a = !e(u),
                        t = e(d);
                    return e(s.F6)
                        .recordConference(n, a)
                        .then(() => {
                            l(t, a);
                        });
                });
        },
        703286: (e, l, n) => {
            n.d(l, { p: () => u });
            var a = n(42134),
                t = n(994775),
                r = n(526250),
                s = n(4427),
                i = n(688327),
                o = n(712612);
            const u = (0, r.v)((e, l) => {
                const n = { "shift+right": () => d(), "shift+left": () => d(-1) },
                    r = e(s.fJ)
                        ? {
                              ...n,
                              "shift+f8": () => l(o.Dy, (e) => !e),
                              "shift+f1": () => {
                                  const n = e(a.rm);
                                  n && l(i.R, n);
                              },
                          }
                        : n,
                    u = [...document.querySelectorAll("input")],
                    c = [(0, t.Z)(r), ...u.map((e) => (0, t.Z)(r, e))];
                return () => {
                    c.forEach((e) => e());
                };
            });
            function d(e = 1) {
                const l = [...document.querySelectorAll("input, button, textarea, a[href]")].filter((e) => -1 !== e.tabIndex),
                    n = l.indexOf(document.activeElement);
                if (-1 === n) return void l[0]?.focus();
                const a = l[n + e];
                a?.focus();
            }
        },
        741881: (e, l, n) => {
            n.d(l, { d: () => s });
            var a = n(565058),
                t = n(741810),
                r = n(163889);
            (0, a.cn)((e) =>
                t.E.getScheduledSpaces().then((e) => {
                    if (e?.broadcasts && 0 !== e.broadcasts?.length) return e.broadcasts.sort((e, l) => (new Date(e.broadcast.scheduled_start || 0) > new Date(l.broadcast.scheduled_start || 0) ? 1 : -1)), e.broadcasts;
                }),
            );
            const s = (0, a.cn)((e) =>
                t.E.myConferences().catch((e) => {
                    (0, r.ZP)(e);
                }),
            );
        },
        409953: (e, l, n) => {
            n.d(l, { A: () => r });
            var a = n(202784),
                t = n(403808);
            function r(e) {
                const l = (0, t.r)(e);
                return a.useCallback(
                    (e) => {
                        l();
                    },
                    [l],
                );
            }
        },
        660812: (e, l, n) => {
            n.d(l, { R: () => r });
            var a = n(565058),
                t = n(427266);
            const r = (e) => {
                const l = (0, a.cn)(),
                    n = (0, a.cn)(null, (n, a, ...t) => {
                        const r = n(l);
                        if (r) return r;
                        const s = e(n, a, ...t);
                        return (
                            s instanceof Promise &&
                                (a(l, s),
                                s.finally(() => {
                                    a(l, void 0);
                                })),
                            s
                        );
                    }),
                    r = (0, t.mZ)(n);
                return (r.isLoading = (0, a.cn)((e) => !!e(l))), r;
            };
        },
        965728: (e, l, n) => {
            n.d(l, { C_: () => k, I5: () => f, K2: () => y, L$: () => u, Rb: () => p, nk: () => g, sI: () => _, xr: () => h });
            var a = n(202784),
                t = n(483677),
                r = n(782578),
                s = n(393058),
                i = n(521514);
            const o = (e, l) => `rgba(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue}, ${l})`,
                u = (e) => {
                    const l = e && t.Z.getForGallery(e);
                    return l ? { rgb: h(l), rgba: o(l, 0.9) } : m;
                },
                d = i.Z.columnWidths.primary,
                c = (e, l) => Math.min(l, e),
                m = { rgb: "rgb(0, 0, 0)", rgba: "rgba(0, 0, 0, 0.9)" },
                g = { transitionProperty: "background-color", transitionDuration: ".5s" },
                f = (e, l) => {
                    const { containerHeight: n, containerWidth: a, mediaHeight: t, mediaWidth: s } = e,
                        i = s && t ? s / t : 1,
                        o = i > 1,
                        u = l ? 400 : d,
                        m = o && s <= u ? c(a, u) : a,
                        g = !o && t <= u ? c(n, u) : n;
                    return r.Z.getContainDimensions({ width: m, height: g }, i);
                },
                p = (e) => {
                    const l = e && e.ext_media_color && e.ext_media_color.palette;
                    return u(l);
                },
                y = (e) => {
                    const l = e && e.profile_image_extensions_media_color && e.profile_image_extensions_media_color.palette;
                    return u(l);
                },
                k = (e) => {
                    const l = e && e.profile_banner_extensions_media_color && e.profile_banner_extensions_media_color.palette;
                    return u(l);
                },
                h = (e) => `rgb(${e.rgb.red}, ${e.rgb.green}, ${e.rgb.blue})`,
                b = (e, l) => {
                    switch (l.type) {
                        case "zoom":
                            return { ...e, isZoomed: l.payload?.isZoomed, showControls: !l.payload?.isZoomed };
                        case "tap":
                            return { ...e, showControls: !e.showControls };
                        default:
                            return e;
                    }
                },
                _ = () => {
                    const [e, l] = a.useReducer(b, { isZoomed: !1, showControls: !0 });
                    return {
                        hideButtons: e.isZoomed || !e.showControls,
                        handleMediaDetailZoomed: function (e) {
                            l({ type: "zoom", payload: { isZoomed: e } });
                        },
                        handleMediaItemTapped: function () {
                            s.Z.isTouchSupported() && l({ type: "tap" });
                        },
                    };
                };
        },
        16222: (e, l, n) => {
            function a(e, l) {
                try {
                    return e();
                } catch (e) {
                    return l(e);
                }
            }
            n.d(l, { o: () => a });
        },
        772544: (e, l, n) => {
            function a() {
                if ("wakeLock" in navigator) return navigator.wakeLock;
            }
            n.d(l, { s: () => a });
        },
        420412: (e, l, n) => {
            n.d(l, { Z: () => o });
            var a = n(202784),
                t = n(325686),
                r = n(235902),
                s = n(885015),
                i = n(392237);
            function o({ borderColor: e = "borderColor", isSlim: l = !1, label: n }) {
                const { isWebRedesign: o } = r.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? u[e] : { backgroundColor: i.default.theme.colors[e] ?? i.default.theme.colors.borderColor };
                return n ? a.createElement(s.Z, { style: !l && u.root, withGutter: !0 }, a.createElement(t.Z, { style: u.gapColumn }, a.createElement(t.Z, { style: [u.gap, d] })), a.createElement(t.Z, { style: u.gapText }, n), a.createElement(t.Z, { style: u.gapColumn }, a.createElement(t.Z, { style: [u.gap, d] }))) : a.createElement(t.Z, { style: [!l && u.root, o() && u.rootRedesign, u.gap, d] });
            }
            const u = i.default.create((e) => ({ borderColor: { backgroundColor: i.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: i.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, l, n) => {
            n.d(l, { Z: () => u });
            var a = n(807896),
                t = n(202784),
                r = n(325686),
                s = n(392237);
            class i extends t.Component {
                render() {
                    const { children: e, style: l, withGutter: n, ...s } = this.props,
                        i = t.Children.map(e, (e) => e && t.cloneElement(e, { style: [e.props.style, o.column, n && o.withGutterColumn] }));
                    return t.createElement(r.Z, (0, a.Z)({ style: [l, o.root, n && o.withGutter] }, s), i);
                }
            }
            i.defaultProps = { withGutter: !1 };
            const o = s.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                u = i;
        },
        34540: (e, l, n) => {
            var a = n(981428),
                t = function (e, l) {
                    return e - l;
                };
            e.exports = function (e, l, n) {
                return (
                    (n = n || t),
                    a(e, l, function (e, l) {
                        return n(l, e);
                    })
                );
            };
        },
        981428: (e) => {
            var l = function (e, l) {
                return e - l;
            };
            e.exports = function (e, n, a) {
                a = a || l;
                var t = void 0,
                    r = void 0,
                    s = !1,
                    i = !0,
                    o = !1,
                    u = void 0;
                try {
                    for (var d, c = e[Symbol.iterator](); !(i = (d = c.next()).done); i = !0) {
                        var m = d.value,
                            g = n(m);
                        (!s || a(g, r) < 0) && ((t = m), (r = g), (s = !0));
                    }
                } catch (e) {
                    (o = !0), (u = e);
                } finally {
                    try {
                        i || null == c.return || c.return();
                    } finally {
                        if (o) throw u;
                    }
                }
                return t;
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.Conferences-6107ac1a.91e0e09a.js.map
