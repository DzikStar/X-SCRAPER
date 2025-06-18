"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.HoverCard-6107ac1a"],
    {
        326439: (e, t, i) => {
            i.d(t, { Z: () => d });
            var s,
                n,
                a,
                r,
                l,
                o = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "SensitiveMediaSettingsQuery", selections: [{ alias: "viewer", args: (s = [{ kind: "Literal", name: "s", value: "cd25" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(n = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [(a = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: "UserSensitiveMediaSettingsInfo", kind: "LinkedField", name: "sensitive_media_settings", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "SensitiveMediaOptions_userSensitiveMediaSettingsInfo" }, (r = { alias: null, args: null, kind: "ScalarField", name: "can_user_allow_sensitive_content", storageKey: null })], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"cd25")' }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "SensitiveMediaSettingsQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: s,
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "UserResults",
                                        kind: "LinkedField",
                                        name: "user_results",
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
                                                    n,
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            a,
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "UserSensitiveMediaSettingsInfo",
                                                                kind: "LinkedField",
                                                                name: "sensitive_media_settings",
                                                                plural: !1,
                                                                selections: [
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "SensitiveMediaSettings",
                                                                        kind: "LinkedField",
                                                                        name: "sensitive_media_settings",
                                                                        plural: !1,
                                                                        selections: [
                                                                            { alias: null, args: null, kind: "ScalarField", name: "view_adult_content", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "view_violent_content", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "view_other_content", storageKey: null },
                                                                            { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    r,
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            (l = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                        ],
                                                        type: "User",
                                                        abstractKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                            l,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"cd25")',
                            },
                        ],
                    },
                    params: { id: "ft92vAsha0RhDxwgq_ojWQ", metadata: {}, name: "SensitiveMediaSettingsQuery", operationKind: "query", text: null },
                };
            o.hash = "47444c8ec7640b723fc59a35b0544d70";
            const d = o;
        },
        498510: (e, t, i) => {
            i.d(t, { Z: () => d });
            var s,
                n,
                a,
                r,
                l,
                o = {
                    fragment: {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "fetchDownloadSettingAllowedQuery",
                        selections: [
                            { kind: "RequiredField", field: (s = { alias: null, args: null, concreteType: "UserPreferences", kind: "LinkedField", name: "user_preferences", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "allow_video_downloads", storageKey: null }], storageKey: null }), action: "THROW" },
                            {
                                alias: "viewer",
                                args: (n = [{ kind: "Literal", name: "s", value: "4721" }]),
                                concreteType: "Viewer",
                                kind: "LinkedField",
                                name: "viewer_v2",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "UserResults",
                                        kind: "LinkedField",
                                        name: "user_results",
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
                                                    (a = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            (r = {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "LegacyExtendedUserProfile",
                                                                kind: "LinkedField",
                                                                name: "legacy_extended_profile",
                                                                plural: !1,
                                                                selections: [
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: "LegacyExtendedBirthDate",
                                                                        kind: "LinkedField",
                                                                        name: "birthdate",
                                                                        plural: !1,
                                                                        selections: [
                                                                            { alias: null, args: null, kind: "ScalarField", name: "month", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "day", storageKey: null },
                                                                            { alias: null, args: null, kind: "ScalarField", name: "year", storageKey: null },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                ],
                                                                storageKey: null,
                                                            }),
                                                        ],
                                                        type: "User",
                                                        abstractKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: [], kind: "Operation", name: "fetchDownloadSettingAllowedQuery", selections: [s, { alias: "viewer", args: n, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [a, { kind: "InlineFragment", selections: [r, (l = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, l], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }] },
                    params: { id: "P4Y9VY-Vn1cJuBnjOVZ4xA", metadata: {}, name: "fetchDownloadSettingAllowedQuery", operationKind: "query", text: null },
                };
            o.hash = "8a9c6728758bc2d477246d6d2dbf9e46";
            const d = o;
        },
        882127: (e, t, i) => {
            i.d(t, { Z: () => n });
            var s = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "fetchDownloadSettingAllowed_viewer",
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "UserResults",
                        kind: "LinkedField",
                        name: "user_results",
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
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "LegacyExtendedUserProfile",
                                                kind: "LinkedField",
                                                name: "legacy_extended_profile",
                                                plural: !1,
                                                selections: [
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "LegacyExtendedBirthDate",
                                                        kind: "LinkedField",
                                                        name: "birthdate",
                                                        plural: !1,
                                                        selections: [
                                                            { alias: null, args: null, kind: "ScalarField", name: "month", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "day", storageKey: null },
                                                            { alias: null, args: null, kind: "ScalarField", name: "year", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                        ],
                                        type: "User",
                                        abstractKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ],
                        storageKey: null,
                    },
                ],
                type: "Viewer",
                abstractKey: null,
                hash: "7c8218ed97677fa6b6cff281b5c2fef5",
            };
            const n = s;
        },
        646496: (e, t, i) => {
            i.d(t, { Z: () => p });
            var s = i(202784),
                n = i(325686),
                a = i(111677),
                r = i.n(a),
                l = i(731708),
                o = i(642153),
                d = i(992942),
                u = i(530732),
                c = i(537392),
                h = i(786475),
                m = i(392237);
            const g = m.default.create((e) => ({ buttonBottomMargin: { marginBottom: e.spaces.space16 }, buttonLeftMargin: { marginStart: e.spaces.space20 }, buttonTopMargin: { marginTop: e.spaces.space20 }, buttonWrap: { flexWrap: "wrap-reverse" }, condensedContext: { marginTop: e.spaces.space16, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, condensedContextV2: { marginTop: e.spaces.space16 }, iconCustom: { alignSelf: "flex-start", borderRadius: e.borderRadii.infinite, height: e.spaces.space32, width: e.spaces.space32, marginTop: e.spaces.space8, marginBottom: e.spaces.space8 }, facepile: { marginBottom: e.spaces.space16, alignSelf: "flex-start" }, facepileV2: { marginEnd: e.spaces.space8, marginTop: e.spaces.space16 }, interactiveStyle: { flexShrink: 1 }, interactiveStyleV2: { flexDirection: "row", alignItems: "center" }, knownFollowersContainer: { marginTop: e.spaces.space16, marginBottom: e.spaces.space16, flexDirection: "row", justifyContent: "space-between", flexGrow: 1, flexShrink: 1 }, underline: { textDecorationLine: "underline" } })),
                p = ({ children: e, context: t, imageSrc: i, knownFollowers: a, onFacepilesClick: p, onFacepilesImpression: f, subtitle: y, title: _, withAdditionalControls: S = !1 }) => {
                    const { firstUsername: w, knownFollowersAvatarUrls: E, trendingFollowersUrl: T, usersCount: I } = a || {},
                        O = a && a.knownFollowersAvatarUrls.length > 3;
                    s.useEffect(() => {
                        O && f && f();
                    }, [O, f]);
                    const v = i ? s.createElement(d.Z, { source: i, style: g.iconCustom }) : null,
                        F = t ? s.createElement(n.Z, { style: S ? g.condensedContextV2 : g.condensedContext }, s.createElement(l.ZP, { align: "left", color: "gray700", numberOfLines: 3, size: "subtext2" }, t), s.createElement(n.Z, { style: S ? g.buttonTopMargin : [g.buttonBottomMargin, g.buttonLeftMargin] }, e)) : null,
                        k = s.createElement(c.ZP, null, ({ containerWidth: i }) => {
                            const a = h.Z.isNarrowScreenWidth(i) ? "xLarge" : "xxLarge",
                                d = i < m.default.theme.breakpoints.xSmall ? g.buttonWrap : void 0,
                                c = S ? g.facepileV2 : null;
                            return s.createElement(
                                n.Z,
                                { style: S ? null : [g.knownFollowersContainer, d] },
                                s.createElement(u.Z, { interactiveStyles: null, link: T, onPress: p, style: S ? g.interactiveStyleV2 : g.interactiveStyle }, ({ isHovered: e }) => s.createElement(s.Fragment, null, s.createElement(o.Z, { style: [g.facepile, c], userAvatarSize: a, userAvatarUrls: E }), s.createElement(l.ZP, { color: "gray700", dir: "ltr", numberOfLines: 2, size: "subtext2", style: e && g.underline }, t || ((e, t) => s.createElement(r().I18NFormatMessage, { $i18n: "bb2cd6d3" }, e, t))(w, I)))),
                                ((t) => {
                                    const i = t < m.default.theme.breakpoints.xSmall ? g.buttonBottomMargin : [g.buttonBottomMargin, g.buttonLeftMargin];
                                    return S ? [e] : s.createElement(n.Z, { style: i }, e);
                                })(i),
                            );
                        }),
                        M = a && O ? k : F;
                    return s.createElement(s.Fragment, null, v, s.createElement(l.ZP, { size: "title2", weight: "heavy" }, _), y ? s.createElement(l.ZP, { color: "gray700", size: "subtext2", weight: "bold" }, y) : null, M);
                };
        },
        98440: (e, t, i) => {
            i.r(t), i.d(t, { default: () => o });
            var s = i(202784),
                n = i(890601),
                a = i(783427),
                r = i(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: s.createElement("g", null, s.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const o = l;
        },
        452693: (e, t, i) => {
            i.r(t), i.d(t, { default: () => o });
            var s = i(202784),
                n = i(890601),
                a = i(783427),
                r = i(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: s.createElement("g", null, s.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const o = l;
        },
        19697: (e, t, i) => {
            i.d(t, { q8: () => d, $i: () => a });
            i(571372);
            var s = i(790187);
            const n = (e, t) => {
                const i = document.createElement("canvas");
                (i.width = e), (i.height = t);
                const s = i.getContext("2d");
                return (s.fillStyle = "#FFFFFF"), s.fillRect(0, 0, e, t), i;
            };
            function a(e, t, i, n, a) {
                return o(t, i).then(
                    (t) => (
                        (function (e, t, i, n, a, r) {
                            const l = r || { top: 0, left: 0, width: t.width, height: t.height };
                            let o = l.left,
                                d = l.top,
                                u = l.width,
                                c = l.height,
                                h = 0,
                                m = 0,
                                g = i,
                                p = n;
                            switch ((e.save(), a)) {
                                case s.Z.TOP_RIGHT:
                                    e.scale(-1, 1), (o = t.width - l.width - l.left), (h = -i);
                                    break;
                                case s.Z.BOTTOM_RIGHT:
                                    e.rotate(Math.PI), (o = t.width - l.width - l.left), (d = t.height - l.height - l.top), (h = -i), (m = -n);
                                    break;
                                case s.Z.BOTTOM_LEFT:
                                    e.scale(1, -1), (d = t.height - l.height - l.top), (m = -n);
                                    break;
                                case s.Z.LEFT_TOP:
                                    e.translate(i / 2, n / 2), e.rotate(-Math.PI / 2), e.scale(-1, 1), (o = l.top), (d = l.left), (u = l.height), (c = l.width), (h = -n / 2), (m = -i / 2), (g = n), (p = i);
                                    break;
                                case s.Z.LEFT_BOTTOM:
                                    e.translate(i / 2, n / 2), e.rotate(Math.PI / 2), (o = l.top), (d = t.height - l.width - l.left), (u = l.height), (c = l.width), (h = -n / 2), (m = -i / 2), (g = n), (p = i);
                                    break;
                                case s.Z.RIGHT_BOTTOM:
                                    e.translate(i / 2, n / 2), e.rotate(Math.PI / 2), e.scale(-1, 1), (o = t.width - l.height - l.top), (d = t.height - l.width - l.left), (u = l.height), (c = l.width), (h = -n / 2), (m = -i / 2), (g = n), (p = i);
                                    break;
                                case s.Z.RIGHT_TOP:
                                    e.translate(i / 2, n / 2), e.rotate(-Math.PI / 2), (o = t.width - l.height - l.top), (d = l.left), (u = l.height), (c = l.width), (h = -n / 2), (m = -i / 2), (g = n), (p = i);
                            }
                            e.drawImage(t, o, d, u, c, h, m, g, p), e.restore();
                        })(t.getContext("2d"), e, t.width, t.height, n, a),
                        t
                    ),
                );
            }
            const r = 3145728,
                l = 5242880;
            function o(e, t) {
                if (window.CanvasRenderingContext2D) {
                    const i = n(e, t);
                    return d(i)
                        .then(() => i)
                        .catch(() => {
                            const i = e * t;
                            if (i > l) {
                                const i = u(l, e, t);
                                return o(i.width, i.height);
                            }
                            if (i > r) {
                                const i = u(r, e, t);
                                return o(i.width, i.height);
                            }
                            throw Error("Could not create valid canvas for resizing");
                        });
                }
                return Promise.reject(Error("Canvas is not supported in this browser"));
            }
            function d(e) {
                return new Promise((t, i) => {
                    const s = e.toDataURL("image/jpeg");
                    s && "data:," !== s ? t(s) : i(new Error("Malformed canvas"));
                });
            }
            function u(e, t, i) {
                const s = Math.sqrt((e * i) / t),
                    n = (t * s) / i;
                return { height: Math.floor(s), width: Math.floor(n) };
            }
        },
        790187: (e, t, i) => {
            i.d(t, { C: () => a, Z: () => s });
            i(694898), i(38857), i(540171), i(157093), i(265688), i(270315), i(592529), i(86943), i(691157);
            const s = Object.freeze({ UNKNOWN: 0, TOP_LEFT: 1, TOP_RIGHT: 2, BOTTOM_RIGHT: 3, BOTTOM_LEFT: 4, LEFT_TOP: 5, LEFT_BOTTOM: 6, RIGHT_BOTTOM: 7, RIGHT_TOP: 8 }),
                n = (e, t, i = 65536) => {
                    let s = new Uint8Array([]),
                        n = 0;
                    function a(a, r, l) {
                        const o = a - n,
                            d = o + r;
                        if (o >= 0 && d <= s.length) l(s.subarray(o, d), a);
                        else {
                            const o = new FileReader();
                            (o.onload = function () {
                                (s = new Uint8Array(this.result)), (n = a), l(s.subarray(0, r), a);
                            }),
                                (o.onerror = t.bind(null, 0)),
                                null !== e && o.readAsArrayBuffer(e.slice(a, a + Math.max(i, r)));
                        }
                    }
                    function r(e) {
                        const i = { "MM\0*": !0, "II*\0": !1 }[String.fromCharCode.apply(null, e.subarray(0, 4))];
                        if (void 0 === i) return void t(0);
                        function s(t, s) {
                            let n = 0;
                            for (let a = 0; a < s; a++) n = (n << 8) + e[t + (i ? a : s - 1 - a)];
                            return n;
                        }
                        const n = e.length > 8 && s(4, 4);
                        if (!n || n + 2 > e.length) return void t(0);
                        let a = s(n, 2);
                        if (n + 12 * a + 6 > e.length) return void t(0);
                        let r = n + 2;
                        for (; a > 0; ) {
                            if (((a -= 1), 274 === s(r, 2) && 3 === s(r + 2, 2) && 1 === s(r + 4, 4))) return void t(s(r + 8, 2));
                            r += 12;
                        }
                        t(0);
                    }
                    e instanceof Blob
                        ? a(0, 10, function e(i, s) {
                              const n = i[1];
                              if (i.length < 4 || 255 !== i[0] || 217 === n) return void t(0);
                              const l = n < 208 || n > 217 ? (i[2] << 8) + i[3] : 0;
                              225 === n && l > 8 && "Exif\0\0" === String.fromCharCode.apply(null, i.subarray(4, 10)) ? a(s + 10, l - 8, r) : a(s + 2 + l, 10, e);
                          })
                        : t(0);
                },
                a = (e, t) => {
                    const i = document.documentElement && "from-image" === getComputedStyle(document.documentElement).imageOrientation;
                    return new Promise((a) => {
                        i
                            ? a(s.TOP_LEFT)
                            : n(
                                  e,
                                  (e) => {
                                      a(e);
                                  },
                                  t,
                              );
                    });
                };
        },
        549755: (e, t, i) => {
            i.d(t, { Z: () => s });
            i(571372);
            class s extends Error {
                constructor(e, t, i) {
                    super(e), (this.code = t), (this.type = i || null);
                }
            }
        },
        205074: (e, t, i) => {
            i.d(t, { DS: () => l, ZP: () => o });
            i(543673), i(240753), i(128399);
            var s = i(790187),
                n = i(276259),
                a = i(122123);
            function r(e, t) {
                const i = (function (e) {
                        return [s.Z.LEFT_BOTTOM, s.Z.LEFT_TOP, s.Z.RIGHT_BOTTOM, s.Z.RIGHT_TOP].indexOf(e) >= 0;
                    })(t),
                    [n, a] = i ? [e.height, e.width] : [e.width, e.height];
                return { width: n, height: a };
            }
            const l = (e) => {
                const t = e instanceof o,
                    i = e.isImage || e.isGif,
                    s = e.orientation,
                    n = e.width && e.height,
                    a = e.img;
                return !!(t && i && s && n && a);
            };
            class o {
                constructor(e) {
                    (this.fileHandle = e), e instanceof File && (this.name = e.name), (this.size = e.size), (this.type = e.type), (this.url = window.URL.createObjectURL(this.fileHandle)), (this.isGif = this.type === n.Re), (this.isImage = n.v5.some((e) => e === this.type)), (this.isVideo = !1), (this.isSubtitles = !1);
                }
                withDimensionsAndOrientation() {
                    return this.isGif || this.isImage
                        ? (0, a.po)(this.url).then((e) => {
                              const t = (t) => {
                                  const { height: i, width: s } = r(e, t);
                                  return (this.img = e), (this.width = s), (this.height = i), (this.orientation = t), this;
                              };
                              return (0, s.C)(this.fileHandle)
                                  .then((e) => t(e === s.Z.UNKNOWN ? s.Z.TOP_LEFT : e))
                                  .catch(() => t(s.Z.TOP_LEFT));
                          })
                        : Promise.resolve(this);
                }
                dispose() {
                    this.url && window.URL.revokeObjectURL(this.url);
                }
            }
        },
        122123: (e, t, i) => {
            i.d(t, { gK: () => n, o2: () => r, po: () => a });
            var s = i(549755);
            const n = { type: "image-load", NO_DIMENSIONS: 1, LOAD_FAILED: 2 };
            function a(e) {
                return new Promise((t, i) => {
                    const a = (e, t) => {
                            const a = new s.Z(e, t, n.type);
                            i(a);
                        },
                        r = new Image();
                    (r.onload = () => {
                        r.width && r.height ? t(r) : a("Image lacks height or width", n.NO_DIMENSIONS);
                    }),
                        (r.onerror = () => {
                            a("Error loading image", n.LOAD_FAILED);
                        }),
                        (r.src = e);
                });
            }
            function r(e) {
                return new Promise((t, i) => {
                    const a = (e, t) => {
                            const a = new s.Z(e, t, n.type);
                            i(a);
                        },
                        r = new Image();
                    r.setAttribute("crossorigin", "anonymous"),
                        (r.onload = () => {
                            if (r.width && r.height) {
                                const e = document.createElement("canvas"),
                                    i = e.getContext("2d");
                                (e.width = r.width),
                                    (e.height = r.height),
                                    i.drawImage(r, 0, 0),
                                    e.toBlob((e) => {
                                        if (e) {
                                            const i = new File([e], "file.jpg", { type: "image/jpeg" });
                                            t(i);
                                        } else a("Failed to convert image to blob", n.LOAD_FAILED);
                                    }, "image/jpeg");
                            } else a("Image lacks height or width", n.NO_DIMENSIONS);
                        }),
                        (r.onerror = () => {
                            a("Error loading image", n.LOAD_FAILED);
                        }),
                        (r.src = e);
                });
            }
        },
        514354: (e, t, i) => {
            i.d(t, { Q: () => o, S: () => l });
            var s = i(332775),
                n = i.n(s),
                a = i(276259),
                r = i(549755);
            const l = { ERROR_READING_IMAGE_FILE: 0, HASHING_ABORTED: 1, INVALID_HASH: 2 },
                o = (e, t) =>
                    (0, a.qp)(e, t)
                        .catch((e) => {
                            throw new r.Z(`An error occurred while reading the image file: ${e}`, e.message === a.ZF ? l.HASHING_ABORTED : l.ERROR_READING_IMAGE_FILE);
                        })
                        .then((e) => {
                            const t = n()(e);
                            if (t && "string" == typeof t) return t;
                            throw new r.Z("Hash is not a non-empty string", l.INVALID_HASH);
                        });
        },
        653843: (e, t, i) => {
            i.d(t, { Y7: () => m, ZP: () => E, m2: () => _ });
            var s = i(19697),
                n = i(790187),
                a = i(549755),
                r = i(205074),
                l = i(276259);
            function o(e, { maxDimension: t, maxFileSize: i, targetQuality: s }) {
                return (function (e, t, i, s) {
                    function n(a, r) {
                        return d(e, e.width, e.height, a, r).then((e) => {
                            const o = e.width > i || e.height > i,
                                d = e.toDataURL("image/jpeg", s),
                                u = d.split(";base64,")[1],
                                c = (0, l.ku)(u);
                            if (o || c > t) {
                                let e = 0.8;
                                return o && (e = a > r ? i / a : i / r), n(a * e, r * e);
                            }
                            return d;
                        });
                    }
                    return n(e.width, e.height);
                })(e, i, t, s).then(l.Lw);
            }
            function d(e, t, i, n, a) {
                const r = t / 2,
                    l = i / 2;
                return e instanceof HTMLCanvasElement && t <= n && i <= a ? Promise.resolve(e) : r <= n && l <= a ? (0, s.$i)(e, n, a) : (0, s.$i)(e, r, l).then((e) => d(e, e.width, e.height, n, a));
            }
            const u = 5242880,
                c = 4096,
                h = 0.85,
                m = { GIF_IS_TOO_LARGE: 1, CANNOT_BE_PROCESSED: 2, FILE_IS_NOT_AN_IMAGE: 3 },
                g = (e) => e.orientation !== n.Z.TOP_LEFT && e.orientation !== n.Z.UNKNOWN,
                p = (e, t = u, i = c) => {
                    const { height: s, size: n, width: a } = e;
                    return a > i || s > i || n > t;
                },
                f = (e, t) => t || { top: 0, left: 0, width: e.width, height: e.height },
                y = (e, t) => {
                    const { height: i, left: s, top: n, width: a } = f(e, t);
                    return !(0 === n && 0 === s && a === e.width && i === e.height);
                };
            function _(e, t) {
                const { maxFileSize: i = u, maxDimension: s = c, cropData: n, jpgPixelsPerByteForResize: a } = t || {},
                    r = "image/jpeg" === e.type,
                    l = (e.width * e.height) / e.size;
                return g(e) || p(e, i, s) || y(e, n) || (r && !!a && l < a);
            }
            const S = (e, t) => {
                    const { height: i, width: s } = e;
                    return s <= t && i <= t ? { width: s, height: i } : s > i ? { width: t, height: Math.round(i / (s / t)) } : { width: Math.round(s / (i / t)), height: t };
                },
                w = (e) => ("function" == typeof e.decode ? e.decode() : Promise.resolve());
            function E(e, t) {
                const { maxFileSize: i = u, maxDimension: n = c, targetQuality: l = h, cropData: d } = t || {},
                    g = f(e, d);
                if (!_(e, t)) return Promise.resolve(e.fileHandle);
                if (!(0, r.DS)(e)) {
                    const e = new a.Z("The provided file is not a valid image", m.FILE_IS_NOT_AN_IMAGE);
                    return Promise.reject(e);
                }
                if (e.isGif) {
                    const e = new a.Z("Gifs cannot be processed.", m.GIF_IS_TOO_LARGE);
                    return Promise.reject(e);
                }
                const p = (e) => o(e, { maxFileSize: i, maxDimension: n, targetQuality: l });
                return e
                    .withDimensionsAndOrientation()
                    .then(({ img: e, orientation: t }) => {
                        const i = ({ height: i, width: n }) => (0, s.$i)(e, n, i, t, g);
                        return w(e)
                            .then(() => ((e) => e(S(g, n)))(i))
                            .then(p);
                    })
                    .catch(() => {
                        const e = new a.Z("Image cannot be processed", m.CANNOT_BE_PROCESSED);
                        return Promise.reject(e);
                    });
            }
        },
        417144: (e, t, i) => {
            function s(e, t = 1) {
                let i = t;
                const s = new Map();
                let n = 0,
                    a = 0,
                    r = 0,
                    l = null;
                function o() {
                    s.clear(), (n = 0), (a = 0), (r = 0);
                }
                return {
                    uploadStart: function (e, t) {
                        s.set(e, { time: Date.now(), bytes: t }), a || (a = Date.now());
                    },
                    uploadFinish: function (d, u) {
                        const c = s.get(d);
                        c &&
                            ((n += u - c.bytes),
                            s.delete(d),
                            ++r === i &&
                                (function () {
                                    if (!a) return;
                                    const s = Date.now() - a;
                                    if (s <= 0) return;
                                    if (1 !== t) return;
                                    const r = n / s;
                                    if (r < 5e3 && 1 === i) return;
                                    !l || l.byterate < r ? ((i += 1), e(), (l = { byterate: r, poolSize: i })) : ((i -= 2), (i = Math.max(i, 1)), (l = null));
                                    o();
                                })());
                    },
                    reset: o,
                    getPoolSize: () => i,
                    start: function () {
                        for (let t = 0; t < i; ++t) e();
                    },
                };
            }
            i.d(t, { Z: () => u, d: () => _ });
            i(543673), i(240753), i(128399);
            function n(e) {
                const t = new URLSearchParams();
                for (const i of Object.keys(e)) {
                    const s = e[i];
                    s && t.set(i, s);
                }
                return `&${String(t)}`;
            }
            function a(e, t = l, i = r) {
                const s = Math.max(e, t);
                return Math.min(s, i);
            }
            const r = 5242880,
                l = 65536,
                o = 2e3,
                d = 1e4;
            class u {
                constructor(e, t = E) {
                    var i;
                    (this.timeoutIdMap = {}), (this.mediaId = ""), (this.mediaKey = ""), (this.fileHandle = e), (this.inflightSegments = new Map()), (this.totalBytes = e ? e.size : 0), (this.mediaType = e ? e.type : void 0), (this.initStartTime = new Date()), (this.sruHeaders = t.sruHeaders || {}), (this.uploadUrl = t.uploadUrl || g), (this.retainMediaForever = !!t.retainMediaForever), (this.sruParameterOverrides = t.sruParameterOverrides), (this.minSegmentBytes = this.sruParameterOverrides?.minSegmentBytes || ((i = this.totalBytes), a(Math.ceil(i / d)))), this._clearState();
                }
                upload(e) {
                    ((this.hasAttemptedFinalize && (this.uploadOptions.trimRanges !== e.trimRanges || this.uploadOptions.extraFinalizeParams !== e.extraFinalizeParams)) || this.uploadOptions.extraInitParams !== e.extraInitParams) && this._clearState(),
                        (this.uploadOptions = e),
                        this.state !== w.SUCCEEDED && this.state !== w.PENDING && ((this.state = w.PENDING), this.hasAttemptedFinalize ? this._postFinalize() : this.mediaId ? this._startNextAppendSegment() : this._postInit()),
                        (this._bitrateMonitor = e.withMultiRequests
                            ? s(() => {
                                  this._startNextAppendSegment();
                              }, e.withMultiRequestsDefaultPoolSize)
                            : void 0),
                        this._notifyResult(),
                        this._notifyProgress(this._uploadProgress());
                }
                cancel() {
                    "function" == typeof this.uploadOptions.error && this.uploadOptions.error({ code: _.CANCELED }), this._clearState();
                }
                pollStatusOfExistingMediaId(e, t) {
                    (this.mediaId = e), (this.uploadOptions = t || E), (this.state = w.PENDING), this._getStatus();
                }
                _clearState() {
                    for (const e of Object.keys(this.timeoutIdMap)) clearTimeout(this.timeoutIdMap[e]), delete this.timeoutIdMap[e];
                    (this.state = w.RESET),
                        (this.mediaId = ""),
                        (this.mediaKey = ""),
                        (this.uploadOptions = E),
                        (this.nextSegmentBytes =
                            this.sruParameterOverrides?.minSegmentBytes ||
                            (function () {
                                const e = window.navigator.connection;
                                if (e) {
                                    const t = e.type || e.effectiveType;
                                    if (e.downlink) return a(((1e3 * e.downlink) / 8 / 2) * o);
                                    if ("wifi" === t) return a(5 * l);
                                }
                                return a(2 * l);
                            })()),
                        (this.segmentIndex = 0),
                        (this.totalUploadDuration = 0),
                        (this.uploadedBytes = 0),
                        (this.hasAttemptedFinalize = !1),
                        this.inflightSegments.forEach(({ request: e }) => e.abort()),
                        (this.inflightSegments = new Map()),
                        this._bitrateMonitor?.reset();
                }
                uploadExternalMedia(e, t, i, s = E) {
                    (this.uploadOptions = s), (this.state = w.PENDING), (this.progressMode = "uploading");
                    let a = n({ source_url: e, media_type: t, media_category: i });
                    (a += this.uploadOptions.extraInitParams || ""), (a += this.uploadOptions.extraFinalizeParams || "");
                    this._sendXhr(
                        "POST",
                        "INIT",
                        a,
                        (e) => {
                            (this.mediaId = e.media_id_string), this._getStatus();
                        },
                        (...e) => this._uploadError(...e),
                        h,
                    );
                }
                _postInit() {
                    if (this.totalBytes) {
                        this.progressMode = "uploading";
                        const e = { total_bytes: String(this.totalBytes), media_type: this.mediaType || "" };
                        this.uploadOptions.enable_1080p_variant && (e.enable_1080p_variant = String(!0));
                        const { mediaItem: t } = this.uploadOptions;
                        if (t?.mediaFile?.duration) {
                            const i = 1e3 * t.mediaFile.duration;
                            e.video_duration_ms = String(i);
                        }
                        let i = n(e);
                        this.uploadOptions.extraInitParams && (i += this.uploadOptions.extraInitParams),
                            this._sendXhr(
                                "POST",
                                "INIT",
                                i,
                                (...e) => this._initSuccess(...e),
                                (...e) => this._uploadError(...e),
                                h,
                            );
                    } else this._uploadError({ code: _.ZERO_FILE_LENGTH });
                }
                _initSuccess(e) {
                    this.state === w.PENDING && ((this.mediaId = e.media_id_string), (this.mediaKey = e.media_key), this._setSessionTimeout(e.expires_after_secs), this._bitrateMonitor ? this._bitrateMonitor.start() : this._startNextAppendSegment());
                }
                _setSessionTimeout(e) {
                    if ((this.timeoutIdMap.session && (clearTimeout(this.timeoutIdMap.session), delete this.timeoutIdMap.session), e)) {
                        const t = Math.min(c, 1e3 * e);
                        this.timeoutIdMap.session = setTimeout(() => {
                            this._uploadError({ code: _.TIMEOUT }), this._stats("NONE", "timeout"), this._clearState();
                        }, t);
                    }
                }
                _startNextAppendSegment() {
                    if (this.hasAttemptedFinalize || this.inflightSegments.size >= (this._bitrateMonitor?.getPoolSize() ?? p)) return;
                    if (this.uploadedBytes === this.totalBytes) return this._postFinalize();
                    if (!this.fileHandle) return;
                    let e = 0;
                    this.inflightSegments.forEach(({ bytes: t }) => (e += t));
                    const t = e + this.uploadedBytes,
                        i = Math.min(this.nextSegmentBytes, this.totalBytes - t);
                    if (i <= 0) return;
                    const s = new FormData();
                    if (this.fileHandle) {
                        const e = this.fileHandle.slice(t, t + i);
                        s.append("media", e);
                    }
                    const a = this.segmentIndex;
                    this.segmentIndex += 1;
                    const r = n({ media_id: this.mediaId, segment_index: String(a) }),
                        l = this._sendXhr(
                            "POST",
                            "APPEND",
                            r,
                            () => {
                                if (this.state === w.PENDING) {
                                    const e = this.inflightSegments.get(a);
                                    e && (this.inflightSegments.delete(a), (this.uploadedBytes += e.bytes)), this._notifyProgress(this._uploadProgress(), this.mediaId), 0 === this.inflightSegments.size && this._startNextAppendSegment();
                                }
                            },
                            (...e) => this._uploadError(...e),
                            5,
                            s,
                            () => this._startNextAppendSegment(),
                            i,
                        );
                    this.inflightSegments.set(a, { bytes: i, request: l });
                }
                _postFinalize() {
                    if (this.uploadOptions.pauseBeforeFinalize) (this.state = w.PAUSED), this.uploadOptions.pause && this.uploadOptions.pause();
                    else {
                        this.hasAttemptedFinalize = !0;
                        const e = { media_id: this.mediaId };
                        this.uploadOptions.trimRanges && (e.trim_ranges = this.uploadOptions.trimRanges), this.mediaType && /^video\//.test(this.mediaType) && (e.allow_async = String(!0)), this.retainMediaForever && (e.ttl = "infinite");
                        let t = n(e);
                        (t += this.uploadOptions.extraFinalizeParams || ""),
                            this._sendXhr(
                                "POST",
                                "FINALIZE",
                                t,
                                (...e) => this._finalizeOrStatusSuccess(...e),
                                (...e) => this._uploadError(...e),
                                h,
                            );
                    }
                }
                _finalizeOrStatusSuccess(e) {
                    this._setSessionTimeout(e.expires_after_secs);
                    const t = e.processing_info;
                    if (!t) return void this._finalizeSuccess(e);
                    let i = 0;
                    switch (t.state) {
                        case "pending":
                            this.progressMode = "waiting";
                            break;
                        case "in_progress":
                            (this.progressMode = "processing"), "number" == typeof t.progress_percent && (i = t.progress_percent), i >= 100 && (i = 99);
                            break;
                        case "succeeded":
                            return void this._finalizeSuccess(e);
                        case "failed": {
                            const e = t.error;
                            let i;
                            return (i = e?.code ? S[String(e.code)] : _.INTERNAL_ERROR), void this._uploadError({ ...e, code: i });
                        }
                        default:
                            return void this._uploadError();
                    }
                    this._notifyProgress(i, this.mediaId, this.mediaKey);
                    const s = t.check_after_secs || 10;
                    setTimeout((...e) => this._getStatus(...e), 1e3 * s);
                }
                _getStatus() {
                    if (this.state === w.PENDING) {
                        const e = n({ media_id: this.mediaId });
                        this._sendXhr(
                            "GET",
                            "STATUS",
                            e,
                            (...e) => this._finalizeOrStatusSuccess(...e),
                            (...e) => this._uploadError(...e),
                            h,
                        );
                    }
                }
                _finalizeSuccess(e) {
                    this.state === w.PENDING && ((this.state = w.SUCCEEDED), this._notifyResult());
                }
                _uploadError(e) {
                    if (this.state !== w.PENDING) return;
                    const t = e.error?.match(/{ "message": "maxFileSizeExceeded", "maxFileSizeBytes": \d+ }/);
                    if (t) {
                        const e = JSON.parse(t[0]);
                        this.error = { code: _.FILE_TOO_LARGE, message: e.message, maxSizeBytes: e.maxFileSizeBytes };
                    } else e && e.code ? (this.error = e) : (this.error = { code: _.INTERNAL_ERROR, message: e?.error });
                    (this.state = w.FAILED), this._notifyResult();
                }
                _uploadProgress() {
                    if (this.totalBytes) {
                        return 100 * (this.uploadedBytes / this.totalBytes);
                    }
                    return 0;
                }
                _notifyProgress(e, t, i) {
                    this.state !== w.FAILED && this.uploadOptions.progress && this.uploadOptions.progress(e, this.progressMode, t, i);
                }
                _notifyResult() {
                    this.state === w.SUCCEEDED && this.uploadOptions.success && this.uploadOptions.success(this.mediaId, this.mediaKey), this.state === w.FAILED && this.uploadOptions.error && this.uploadOptions.error(this.error);
                }
                _stats(e, t, i = {}) {
                    const s = i.requestStartTime || this.initStartTime,
                        n = new Date().getTime() - s.getTime();
                    if (((this.totalUploadDuration += n), this.uploadOptions.stats)) {
                        const s = { mediaType: this.mediaType || "", command: e, status: t, duration: n, totalByteSize: this.totalBytes, totalDuration: this.totalUploadDuration };
                        i.segmentBytes && (s.appendByteSize = i.segmentBytes), this.uploadOptions.stats(s);
                    }
                }
                _sendXhr(e, t, i, s, n, r, l, d, u = 0) {
                    const c = `${this.uploadUrl}?command=${t}${i}`;
                    let h = !1;
                    const g = new Date(),
                        p = (a) => {
                            if (r) {
                                const a = [c, r].join("-");
                                this.timeoutIdMap[a] = setTimeout(() => {
                                    this._sendXhr(e, t, i, s, n, r - 1, l, d, u);
                                }, y);
                            } else S(a);
                        },
                        S = (e) => {
                            this._stats(t, e || "unknown-error", { requestStartTime: g, segmentBytes: u }), "function" == typeof n && n(T(w) || { code: _.INVALID_RES_STATUS, mediaId: this.mediaId });
                        },
                        w = new XMLHttpRequest();
                    w.open(e, c, !0),
                        (w.withCredentials = !0),
                        (w.timeout = this.sruParameterOverrides?.clientsideSruUploadTimeoutMs || m),
                        (w.onload = () => {
                            if (w.status >= 200 && w.status < 400) {
                                const e = T(w);
                                204 === w.status || e ? (this._stats(t, "success", { requestStartTime: g, segmentBytes: u }), s(e || {}), !h && d && d()) : p("parsererror");
                            } else w.status && 503 !== w.status ? S("invalid-response") : p("503");
                        }),
                        (w.onerror = () => p("error")),
                        (w.ontimeout = () => {
                            (this.nextSegmentBytes = this.minSegmentBytes), p("timeout");
                        });
                    let E = !1;
                    w.upload.onprogress = (e) => {
                        E ? e.loaded === e.total && this._bitrateMonitor?.uploadFinish(c, e.total) : ((E = !0), this._bitrateMonitor?.uploadStart(c, e.loaded));
                        const t = e.loaded,
                            i = ((this.uploadedBytes + t) / this.totalBytes) * 100;
                        if ((this._notifyProgress(i, this.mediaId), t / e.total > f && !h && ((h = !0), l))) {
                            const e = Math.max(1, new Date().getTime() - g.getTime()),
                                i = this.minSegmentBytes,
                                s = this.sruParameterOverrides?.maxSegmentBytes;
                            (this.nextSegmentBytes = (function (e) {
                                const t = e.idealUploadTimeMs || o,
                                    i = e.sentBytes / e.uploadTimeMs;
                                return a(Math.round(t * i), e.minSegmentBytes, e.maxSegmentBytes);
                            })({ minSegmentBytes: i, sentBytes: t, uploadTimeMs: e, maxSegmentBytes: s, idealUploadTimeMs: this.sruParameterOverrides?.idealUploadTimeMs })),
                                "function" == typeof d && d();
                        }
                    };
                    for (const e in this.sruHeaders) w.setRequestHeader(e, this.sruHeaders[e]);
                    return l ? w.send(l) : w.send(), w;
                }
            }
            const c = 2147483647,
                h = 1,
                m = 45e3,
                g = (window.location.host.includes("twitter.com") ? "https://upload.twitter.com" : "https://upload.x.com") + "/i/media/upload.json",
                p = 2,
                f = 0.95,
                y = 1e3,
                _ = Object.freeze({ FILE_TOO_LARGE: 2, INTERNAL_ERROR: 131, INVALID_MEDIA: 1, RATE_LIMIT: 88, TIMEOUT: 67, UNSUPPORTED_MEDIA: 3, ZERO_FILE_LENGTH: 4, CANCELED: 999, INVALID_RES_STATUS: -1 }),
                S = Object.freeze({ 0: _.INTERNAL_ERROR, 1: _.INVALID_MEDIA, 2: _.FILE_TOO_LARGE, 3: _.UNSUPPORTED_MEDIA, 4: _.TIMEOUT }),
                w = Object.freeze({ RESET: 0, PENDING: 1, PAUSED: 2, SUCCEEDED: 3, FAILED: 4 }),
                E = {};
            function T(e) {
                try {
                    return JSON.parse(e.responseText);
                } catch (e) {
                    return null;
                }
            }
        },
        730895: (e, t, i) => {
            var s = i(821176);
            e.exports = function () {
                var e = s(this),
                    t = "";
                return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t;
            };
        },
        890103: (e, t, i) => {
            var s = i(609859),
                n = i(807400),
                a = i(396616),
                r = i(730895),
                l = i(824229),
                o = s.RegExp,
                d = o.prototype;
            n &&
                l(function () {
                    var e = !0;
                    try {
                        o(".", "d");
                    } catch (t) {
                        e = !1;
                    }
                    var t = {},
                        i = "",
                        s = e ? "dgimsy" : "gimsy",
                        n = function (e, s) {
                            Object.defineProperty(t, e, {
                                get: function () {
                                    return (i += s), !0;
                                },
                            });
                        },
                        a = { dotAll: "s", global: "g", ignoreCase: "i", multiline: "m", sticky: "y" };
                    for (var r in (e && (a.hasIndices = "d"), a)) n(r, a[r]);
                    return Object.getOwnPropertyDescriptor(d, "flags").get.call(t) !== s || i !== s;
                }) &&
                a(d, "flags", { configurable: !0, get: r });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.HoverCard-6107ac1a.fb75c22a.js.map
