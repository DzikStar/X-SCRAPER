"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["ondemand.HoverCard-6107ac1a", "loader.directMessagesData-6107ac1a", "bundle.Logout-6107ac1a"],
    {
        326439: (e, t, i) => {
            i.d(t, { Z: () => d });
            var n,
                s,
                a,
                r,
                l,
                o = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "SensitiveMediaSettingsQuery", selections: [{ alias: "viewer", args: (n = [{ kind: "Literal", name: "s", value: "cd25" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [(a = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: "UserSensitiveMediaSettingsInfo", kind: "LinkedField", name: "sensitive_media_settings", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "SensitiveMediaOptions_userSensitiveMediaSettingsInfo" }, (r = { alias: null, args: null, kind: "ScalarField", name: "can_user_allow_sensitive_content", storageKey: null })], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"cd25")' }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "SensitiveMediaSettingsQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: n,
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
                                                    s,
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
            var n,
                s,
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
                            { kind: "RequiredField", field: (n = { alias: null, args: null, concreteType: "UserPreferences", kind: "LinkedField", name: "user_preferences", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "allow_video_downloads", storageKey: null }], storageKey: null }), action: "THROW" },
                            {
                                alias: "viewer",
                                args: (s = [{ kind: "Literal", name: "s", value: "4721" }]),
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
                    operation: { argumentDefinitions: [], kind: "Operation", name: "fetchDownloadSettingAllowedQuery", selections: [n, { alias: "viewer", args: s, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [a, { kind: "InlineFragment", selections: [r, (l = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, l], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }] },
                    params: { id: "P4Y9VY-Vn1cJuBnjOVZ4xA", metadata: {}, name: "fetchDownloadSettingAllowedQuery", operationKind: "query", text: null },
                };
            o.hash = "8a9c6728758bc2d477246d6d2dbf9e46";
            const d = o;
        },
        882127: (e, t, i) => {
            i.d(t, { Z: () => s });
            var n = {
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
            const s = n;
        },
        879113: (e, t, i) => {
            i.d(t, { Z: () => g });
            var n = i(202784),
                s = i(476984),
                a = i.n(s),
                r = i(143778),
                l = i(750410),
                o = i(682830);
            const d = "failed",
                u = "loaded",
                c = "loading",
                h = "none";
            class g extends n.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === u,
                        i = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !i) || !a()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: i, fetchStatus: s, icon: a, loadingMessage: r, onRequestRetry: u, render: g, renderFailure: m, retryMessage: p, retryable: f } = this.props;
                    switch (s) {
                        case d:
                            return f ? n.createElement(l.Z, { icon: a, onRequestRetry: u, retryMessage: p }) : i ? n.createElement(o.m, { failureMessage: i }) : m();
                        case c:
                            return n.createElement(o.J, { "aria-label": e, color: t, loadingMessage: r });
                        case h:
                            return null;
                        default:
                            return g();
                    }
                }
            }
            g.defaultProps = { renderFailure: r.Z, retryable: !0 };
        },
        646496: (e, t, i) => {
            i.d(t, { Z: () => p });
            var n = i(202784),
                s = i(325686),
                a = i(111677),
                r = i.n(a),
                l = i(731708),
                o = i(642153),
                d = i(992942),
                u = i(530732),
                c = i(537392),
                h = i(786475),
                g = i(392237);
            const m = g.default.create((e) => ({ buttonBottomMargin: { marginBottom: e.spaces.space16 }, buttonLeftMargin: { marginStart: e.spaces.space20 }, buttonTopMargin: { marginTop: e.spaces.space20 }, buttonWrap: { flexWrap: "wrap-reverse" }, condensedContext: { marginTop: e.spaces.space16, flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, condensedContextV2: { marginTop: e.spaces.space16 }, iconCustom: { alignSelf: "flex-start", borderRadius: e.borderRadii.infinite, height: e.spaces.space32, width: e.spaces.space32, marginTop: e.spaces.space8, marginBottom: e.spaces.space8 }, facepile: { marginBottom: e.spaces.space16, alignSelf: "flex-start" }, facepileV2: { marginEnd: e.spaces.space8, marginTop: e.spaces.space16 }, interactiveStyle: { flexShrink: 1 }, interactiveStyleV2: { flexDirection: "row", alignItems: "center" }, knownFollowersContainer: { marginTop: e.spaces.space16, marginBottom: e.spaces.space16, flexDirection: "row", justifyContent: "space-between", flexGrow: 1, flexShrink: 1 }, underline: { textDecorationLine: "underline" } })),
                p = ({ children: e, context: t, imageSrc: i, knownFollowers: a, onFacepilesClick: p, onFacepilesImpression: f, subtitle: y, title: _, withAdditionalControls: w = !1 }) => {
                    const { firstUsername: S, knownFollowersAvatarUrls: E, trendingFollowersUrl: T, usersCount: I } = a || {},
                        O = a && a.knownFollowersAvatarUrls.length > 3;
                    n.useEffect(() => {
                        O && f && f();
                    }, [O, f]);
                    const v = i ? n.createElement(d.Z, { source: i, style: m.iconCustom }) : null,
                        F = t ? n.createElement(s.Z, { style: w ? m.condensedContextV2 : m.condensedContext }, n.createElement(l.ZP, { align: "left", color: "gray700", numberOfLines: 3, size: "subtext2" }, t), n.createElement(s.Z, { style: w ? m.buttonTopMargin : [m.buttonBottomMargin, m.buttonLeftMargin] }, e)) : null,
                        b = n.createElement(c.ZP, null, ({ containerWidth: i }) => {
                            const a = h.Z.isNarrowScreenWidth(i) ? "xLarge" : "xxLarge",
                                d = i < g.default.theme.breakpoints.xSmall ? m.buttonWrap : void 0,
                                c = w ? m.facepileV2 : null;
                            return n.createElement(
                                s.Z,
                                { style: w ? null : [m.knownFollowersContainer, d] },
                                n.createElement(u.Z, { interactiveStyles: null, link: T, onPress: p, style: w ? m.interactiveStyleV2 : m.interactiveStyle }, ({ isHovered: e }) => n.createElement(n.Fragment, null, n.createElement(o.Z, { style: [m.facepile, c], userAvatarSize: a, userAvatarUrls: E }), n.createElement(l.ZP, { color: "gray700", dir: "ltr", numberOfLines: 2, size: "subtext2", style: e && m.underline }, t || ((e, t) => n.createElement(r().I18NFormatMessage, { $i18n: "bb2cd6d3" }, e, t))(S, I)))),
                                ((t) => {
                                    const i = t < g.default.theme.breakpoints.xSmall ? m.buttonBottomMargin : [m.buttonBottomMargin, m.buttonLeftMargin];
                                    return w ? [e] : n.createElement(s.Z, { style: i }, e);
                                })(i),
                            );
                        }),
                        k = a && O ? b : F;
                    return n.createElement(n.Fragment, null, v, n.createElement(l.ZP, { size: "title2", weight: "heavy" }, _), y ? n.createElement(l.ZP, { color: "gray700", size: "subtext2", weight: "bold" }, y) : null, k);
                };
        },
        748138: (e, t, i) => {
            i.r(t), i.d(t, { default: () => o });
            var n = i(202784),
                s = i(890601),
                a = i(783427),
                r = i(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, a.Z)();
                return (0, s.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M23 3v14h-2V5H5V3h18zM10 17c1.1 0 2-1.34 2-3s-.9-3-2-3-2 1.34-2 3 .9 3 2 3zM1 7h18v14H1V7zm16 10c-1.1 0-2 .9-2 2h2v-2zm-2-8c0 1.1.9 2 2 2V9h-2zM3 11c1.1 0 2-.9 2-2H3v2zm0 4c2.21 0 4 1.79 4 4h6c0-2.21 1.79-4 4-4v-2c-2.21 0-4-1.79-4-4H7c0 2.21-1.79 4-4 4v2zm0 4h2c0-1.1-.9-2-2-2v2z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const o = l;
        },
        19697: (e, t, i) => {
            i.d(t, { q8: () => d, $i: () => a });
            i(571372);
            var n = i(790187);
            const s = (e, t) => {
                const i = document.createElement("canvas");
                (i.width = e), (i.height = t);
                const n = i.getContext("2d");
                return (n.fillStyle = "#FFFFFF"), n.fillRect(0, 0, e, t), i;
            };
            function a(e, t, i, s, a) {
                return o(t, i).then(
                    (t) => (
                        (function (e, t, i, s, a, r) {
                            const l = r || { top: 0, left: 0, width: t.width, height: t.height };
                            let o = l.left,
                                d = l.top,
                                u = l.width,
                                c = l.height,
                                h = 0,
                                g = 0,
                                m = i,
                                p = s;
                            switch ((e.save(), a)) {
                                case n.Z.TOP_RIGHT:
                                    e.scale(-1, 1), (o = t.width - l.width - l.left), (h = -i);
                                    break;
                                case n.Z.BOTTOM_RIGHT:
                                    e.rotate(Math.PI), (o = t.width - l.width - l.left), (d = t.height - l.height - l.top), (h = -i), (g = -s);
                                    break;
                                case n.Z.BOTTOM_LEFT:
                                    e.scale(1, -1), (d = t.height - l.height - l.top), (g = -s);
                                    break;
                                case n.Z.LEFT_TOP:
                                    e.translate(i / 2, s / 2), e.rotate(-Math.PI / 2), e.scale(-1, 1), (o = l.top), (d = l.left), (u = l.height), (c = l.width), (h = -s / 2), (g = -i / 2), (m = s), (p = i);
                                    break;
                                case n.Z.LEFT_BOTTOM:
                                    e.translate(i / 2, s / 2), e.rotate(Math.PI / 2), (o = l.top), (d = t.height - l.width - l.left), (u = l.height), (c = l.width), (h = -s / 2), (g = -i / 2), (m = s), (p = i);
                                    break;
                                case n.Z.RIGHT_BOTTOM:
                                    e.translate(i / 2, s / 2), e.rotate(Math.PI / 2), e.scale(-1, 1), (o = t.width - l.height - l.top), (d = t.height - l.width - l.left), (u = l.height), (c = l.width), (h = -s / 2), (g = -i / 2), (m = s), (p = i);
                                    break;
                                case n.Z.RIGHT_TOP:
                                    e.translate(i / 2, s / 2), e.rotate(-Math.PI / 2), (o = t.width - l.height - l.top), (d = l.left), (u = l.height), (c = l.width), (h = -s / 2), (g = -i / 2), (m = s), (p = i);
                            }
                            e.drawImage(t, o, d, u, c, h, g, m, p), e.restore();
                        })(t.getContext("2d"), e, t.width, t.height, s, a),
                        t
                    ),
                );
            }
            const r = 3145728,
                l = 5242880;
            function o(e, t) {
                if (window.CanvasRenderingContext2D) {
                    const i = s(e, t);
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
                    const n = e.toDataURL("image/jpeg");
                    n && "data:," !== n ? t(n) : i(new Error("Malformed canvas"));
                });
            }
            function u(e, t, i) {
                const n = Math.sqrt((e * i) / t),
                    s = (t * n) / i;
                return { height: Math.floor(n), width: Math.floor(s) };
            }
        },
        790187: (e, t, i) => {
            i.d(t, { C: () => a, Z: () => n });
            i(694898), i(38857), i(540171), i(157093), i(265688), i(270315), i(592529), i(86943), i(691157);
            const n = Object.freeze({ UNKNOWN: 0, TOP_LEFT: 1, TOP_RIGHT: 2, BOTTOM_RIGHT: 3, BOTTOM_LEFT: 4, LEFT_TOP: 5, LEFT_BOTTOM: 6, RIGHT_BOTTOM: 7, RIGHT_TOP: 8 }),
                s = (e, t, i = 65536) => {
                    let n = new Uint8Array([]),
                        s = 0;
                    function a(a, r, l) {
                        const o = a - s,
                            d = o + r;
                        if (o >= 0 && d <= n.length) l(n.subarray(o, d), a);
                        else {
                            const o = new FileReader();
                            (o.onload = function () {
                                (n = new Uint8Array(this.result)), (s = a), l(n.subarray(0, r), a);
                            }),
                                (o.onerror = t.bind(null, 0)),
                                null !== e && o.readAsArrayBuffer(e.slice(a, a + Math.max(i, r)));
                        }
                    }
                    function r(e) {
                        const i = { "MM\0*": !0, "II*\0": !1 }[String.fromCharCode.apply(null, e.subarray(0, 4))];
                        if (void 0 === i) return void t(0);
                        function n(t, n) {
                            let s = 0;
                            for (let a = 0; a < n; a++) s = (s << 8) + e[t + (i ? a : n - 1 - a)];
                            return s;
                        }
                        const s = e.length > 8 && n(4, 4);
                        if (!s || s + 2 > e.length) return void t(0);
                        let a = n(s, 2);
                        if (s + 12 * a + 6 > e.length) return void t(0);
                        let r = s + 2;
                        for (; a > 0; ) {
                            if (((a -= 1), 274 === n(r, 2) && 3 === n(r + 2, 2) && 1 === n(r + 4, 4))) return void t(n(r + 8, 2));
                            r += 12;
                        }
                        t(0);
                    }
                    e instanceof Blob
                        ? a(0, 10, function e(i, n) {
                              const s = i[1];
                              if (i.length < 4 || 255 !== i[0] || 217 === s) return void t(0);
                              const l = s < 208 || s > 217 ? (i[2] << 8) + i[3] : 0;
                              225 === s && l > 8 && "Exif\0\0" === String.fromCharCode.apply(null, i.subarray(4, 10)) ? a(n + 10, l - 8, r) : a(n + 2 + l, 10, e);
                          })
                        : t(0);
                },
                a = (e, t) => {
                    const i = document.documentElement && "from-image" === getComputedStyle(document.documentElement).imageOrientation;
                    return new Promise((a) => {
                        i
                            ? a(n.TOP_LEFT)
                            : s(
                                  e,
                                  (e) => {
                                      a(e);
                                  },
                                  t,
                              );
                    });
                };
        },
        276259: (e, t, i) => {
            i.d(t, { Lw: () => s, Re: () => c, VJ: () => l, ZF: () => h, hv: () => o, ku: () => n, qp: () => a, uv: () => r, v5: () => u });
            i(571372), i(875640), i(694898), i(38857), i(540171), i(157093), i(265688), i(270315), i(592529), i(86943), i(691157), i(543673), i(240753), i(128399);
            function n(e) {
                const t = e.match(/=*$/);
                return t ? Math.floor(0.75 * (e.length - t[0].length)) : 0.75 * e.length;
            }
            function s(e) {
                return new Promise((t, i) => {
                    const n = e.split(/data:|;base64,/);
                    if (Blob)
                        if (3 !== n.length) i(Error("Invalid dataUri"));
                        else if (atob)
                            if (Uint8Array) {
                                const [, e, i] = n,
                                    s = atob(i),
                                    a = s.length,
                                    r = Array(a);
                                for (let e = 0; e < a; e++) r[e] = s.charCodeAt(e);
                                t(new Blob([new Uint8Array(r)], { type: e }));
                            } else i(Error("The Uint8Array type is not available"));
                        else i(Error("The atob API is not available"));
                    else i(Error("The Blob API is not available"));
                });
            }
            const a = (e, t) =>
                    new Promise((i, n) => {
                        const s = new FileReader();
                        t &&
                            (t.signal.onabort = () => {
                                s.abort?.(), n(Error(h));
                            }),
                            (s.onload = (e) => {
                                e.target instanceof FileReader && e.target.result instanceof ArrayBuffer ? i(e.target.result) : n(Error("The FileReader result was not of type ArrayBuffer"));
                            }),
                            (s.onerror = (e) => {
                                n(e);
                            }),
                            s.readAsArrayBuffer(e);
                    }),
                r = (e, t) => {
                    const i = document.createElement("a");
                    (i.href = e), (i.download = t), (i.target = "_blank"), i.click(), i.remove();
                },
                l = (e) =>
                    ((e) =>
                        new Promise((t) => {
                            const i = new Image();
                            (i.onload = function () {
                                const e = document.createElement("canvas");
                                (e.width = i.width), (e.height = i.height), e.getContext("2d").drawImage(i, 0, 0), e.toBlob((e) => t(e), "image/png");
                            }),
                                (i.crossOrigin = "anonymous"),
                                (i.src = e);
                        }))(e).then((e) => navigator.clipboard.write([new ClipboardItem({ "image/png": e })])),
                o = async (e, t) => {
                    if (e.size <= t) return e;
                    let i = e,
                        n = 1;
                    for (; i && i.size > t; )
                        try {
                            n > 0.2 ? ((n *= 0.7), (i = await d(i, 1, n))) : (i = await d(i, 0.7, n));
                        } catch (e) {
                            i = void 0;
                        }
                    return i;
                },
                d = (e, t, i) =>
                    new Promise((n, s) => {
                        const a = new Image();
                        (a.onload = () => {
                            const e = document.createElement("canvas"),
                                s = e.getContext("2d"),
                                r = a.width * t,
                                l = a.height * t;
                            (e.width = r),
                                (e.height = l),
                                s.drawImage(a, 0, 0, r, l),
                                e.toBlob(
                                    (e) => {
                                        n(new File([e], "image.jpeg", { type: "image/jpeg" }));
                                    },
                                    "image/jpeg",
                                    i,
                                );
                        }),
                            (a.onerror = () => s(new Error("Failed to load image while resizing"))),
                            (a.src = URL.createObjectURL(e));
                    }),
                u = ["image/jpeg", "image/png", "image/webp"],
                c = "image/gif",
                h = "Reading aborted";
        },
        549755: (e, t, i) => {
            i.d(t, { Z: () => n });
            i(571372);
            class n extends Error {
                constructor(e, t, i) {
                    super(e), (this.code = t), (this.type = i || null);
                }
            }
        },
        205074: (e, t, i) => {
            i.d(t, { DS: () => l, ZP: () => o });
            i(543673), i(240753), i(128399);
            var n = i(790187),
                s = i(276259),
                a = i(122123);
            function r(e, t) {
                const i = (function (e) {
                        return [n.Z.LEFT_BOTTOM, n.Z.LEFT_TOP, n.Z.RIGHT_BOTTOM, n.Z.RIGHT_TOP].indexOf(e) >= 0;
                    })(t),
                    [s, a] = i ? [e.height, e.width] : [e.width, e.height];
                return { width: s, height: a };
            }
            const l = (e) => {
                const t = e instanceof o,
                    i = e.isImage || e.isGif,
                    n = e.orientation,
                    s = e.width && e.height,
                    a = e.img;
                return !!(t && i && n && s && a);
            };
            class o {
                constructor(e) {
                    (this.fileHandle = e), e instanceof File && (this.name = e.name), (this.size = e.size), (this.type = e.type), (this.url = window.URL.createObjectURL(this.fileHandle)), (this.isGif = this.type === s.Re), (this.isImage = s.v5.some((e) => e === this.type)), (this.isVideo = !1), (this.isSubtitles = !1);
                }
                withDimensionsAndOrientation() {
                    return this.isGif || this.isImage
                        ? (0, a.po)(this.url).then((e) => {
                              const t = (t) => {
                                  const { height: i, width: n } = r(e, t);
                                  return (this.img = e), (this.width = n), (this.height = i), (this.orientation = t), this;
                              };
                              return (0, n.C)(this.fileHandle)
                                  .then((e) => t(e === n.Z.UNKNOWN ? n.Z.TOP_LEFT : e))
                                  .catch(() => t(n.Z.TOP_LEFT));
                          })
                        : Promise.resolve(this);
                }
                dispose() {
                    this.url && window.URL.revokeObjectURL(this.url);
                }
            }
        },
        122123: (e, t, i) => {
            i.d(t, { gK: () => s, o2: () => r, po: () => a });
            var n = i(549755);
            const s = { type: "image-load", NO_DIMENSIONS: 1, LOAD_FAILED: 2 };
            function a(e) {
                return new Promise((t, i) => {
                    const a = (e, t) => {
                            const a = new n.Z(e, t, s.type);
                            i(a);
                        },
                        r = new Image();
                    (r.onload = () => {
                        r.width && r.height ? t(r) : a("Image lacks height or width", s.NO_DIMENSIONS);
                    }),
                        (r.onerror = () => {
                            a("Error loading image", s.LOAD_FAILED);
                        }),
                        (r.src = e);
                });
            }
            function r(e) {
                return new Promise((t, i) => {
                    const a = (e, t) => {
                            const a = new n.Z(e, t, s.type);
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
                                        } else a("Failed to convert image to blob", s.LOAD_FAILED);
                                    }, "image/jpeg");
                            } else a("Image lacks height or width", s.NO_DIMENSIONS);
                        }),
                        (r.onerror = () => {
                            a("Error loading image", s.LOAD_FAILED);
                        }),
                        (r.src = e);
                });
            }
        },
        514354: (e, t, i) => {
            i.d(t, { Q: () => o, S: () => l });
            var n = i(332775),
                s = i.n(n),
                a = i(276259),
                r = i(549755);
            const l = { ERROR_READING_IMAGE_FILE: 0, HASHING_ABORTED: 1, INVALID_HASH: 2 },
                o = (e, t) =>
                    (0, a.qp)(e, t)
                        .catch((e) => {
                            throw new r.Z(`An error occurred while reading the image file: ${e}`, e.message === a.ZF ? l.HASHING_ABORTED : l.ERROR_READING_IMAGE_FILE);
                        })
                        .then((e) => {
                            const t = s()(e);
                            if (t && "string" == typeof t) return t;
                            throw new r.Z("Hash is not a non-empty string", l.INVALID_HASH);
                        });
        },
        653843: (e, t, i) => {
            i.d(t, { Y7: () => g, ZP: () => E, m2: () => _ });
            var n = i(19697),
                s = i(790187),
                a = i(549755),
                r = i(205074),
                l = i(276259);
            function o(e, { maxDimension: t, maxFileSize: i, targetQuality: n }) {
                return (function (e, t, i, n) {
                    function s(a, r) {
                        return d(e, e.width, e.height, a, r).then((e) => {
                            const o = e.width > i || e.height > i,
                                d = e.toDataURL("image/jpeg", n),
                                u = d.split(";base64,")[1],
                                c = (0, l.ku)(u);
                            if (o || c > t) {
                                let e = 0.8;
                                return o && (e = a > r ? i / a : i / r), s(a * e, r * e);
                            }
                            return d;
                        });
                    }
                    return s(e.width, e.height);
                })(e, i, t, n).then(l.Lw);
            }
            function d(e, t, i, s, a) {
                const r = t / 2,
                    l = i / 2;
                return e instanceof HTMLCanvasElement && t <= s && i <= a ? Promise.resolve(e) : r <= s && l <= a ? (0, n.$i)(e, s, a) : (0, n.$i)(e, r, l).then((e) => d(e, e.width, e.height, s, a));
            }
            const u = 5242880,
                c = 4096,
                h = 0.85,
                g = { GIF_IS_TOO_LARGE: 1, CANNOT_BE_PROCESSED: 2, FILE_IS_NOT_AN_IMAGE: 3 },
                m = (e) => e.orientation !== s.Z.TOP_LEFT && e.orientation !== s.Z.UNKNOWN,
                p = (e, t = u, i = c) => {
                    const { height: n, size: s, width: a } = e;
                    return a > i || n > i || s > t;
                },
                f = (e, t) => t || { top: 0, left: 0, width: e.width, height: e.height },
                y = (e, t) => {
                    const { height: i, left: n, top: s, width: a } = f(e, t);
                    return !(0 === s && 0 === n && a === e.width && i === e.height);
                };
            function _(e, t) {
                const { maxFileSize: i = u, maxDimension: n = c, cropData: s, jpgPixelsPerByteForResize: a } = t || {},
                    r = "image/jpeg" === e.type,
                    l = (e.width * e.height) / e.size;
                return m(e) || p(e, i, n) || y(e, s) || (r && !!a && l < a);
            }
            const w = (e, t) => {
                    const { height: i, width: n } = e;
                    return n <= t && i <= t ? { width: n, height: i } : n > i ? { width: t, height: Math.round(i / (n / t)) } : { width: Math.round(n / (i / t)), height: t };
                },
                S = (e) => ("function" == typeof e.decode ? e.decode() : Promise.resolve());
            function E(e, t) {
                const { maxFileSize: i = u, maxDimension: s = c, targetQuality: l = h, cropData: d } = t || {},
                    m = f(e, d);
                if (!_(e, t)) return Promise.resolve(e.fileHandle);
                if (!(0, r.DS)(e)) {
                    const e = new a.Z("The provided file is not a valid image", g.FILE_IS_NOT_AN_IMAGE);
                    return Promise.reject(e);
                }
                if (e.isGif) {
                    const e = new a.Z("Gifs cannot be processed.", g.GIF_IS_TOO_LARGE);
                    return Promise.reject(e);
                }
                const p = (e) => o(e, { maxFileSize: i, maxDimension: s, targetQuality: l });
                return e
                    .withDimensionsAndOrientation()
                    .then(({ img: e, orientation: t }) => {
                        const i = ({ height: i, width: s }) => (0, n.$i)(e, s, i, t, m);
                        return S(e)
                            .then(() => ((e) => e(w(m, s)))(i))
                            .then(p);
                    })
                    .catch(() => {
                        const e = new a.Z("Image cannot be processed", g.CANNOT_BE_PROCESSED);
                        return Promise.reject(e);
                    });
            }
        },
        417144: (e, t, i) => {
            function n(e, t = 1) {
                let i = t;
                const n = new Map();
                let s = 0,
                    a = 0,
                    r = 0,
                    l = null;
                function o() {
                    n.clear(), (s = 0), (a = 0), (r = 0);
                }
                return {
                    uploadStart: function (e, t) {
                        n.set(e, { time: Date.now(), bytes: t }), a || (a = Date.now());
                    },
                    uploadFinish: function (d, u) {
                        const c = n.get(d);
                        c &&
                            ((s += u - c.bytes),
                            n.delete(d),
                            ++r === i &&
                                (function () {
                                    if (!a) return;
                                    const n = Date.now() - a;
                                    if (n <= 0) return;
                                    if (1 !== t) return;
                                    const r = s / n;
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
            function s(e) {
                const t = new URLSearchParams();
                for (const i of Object.keys(e)) {
                    const n = e[i];
                    n && t.set(i, n);
                }
                return `&${String(t)}`;
            }
            function a(e, t = l, i = r) {
                const n = Math.max(e, t);
                return Math.min(n, i);
            }
            const r = 5242880,
                l = 65536,
                o = 2e3,
                d = 1e4;
            class u {
                constructor(e, t = E) {
                    var i;
                    (this.timeoutIdMap = {}), (this.mediaId = ""), (this.mediaKey = ""), (this.fileHandle = e), (this.inflightSegments = new Map()), (this.totalBytes = e ? e.size : 0), (this.mediaType = e ? e.type : void 0), (this.initStartTime = new Date()), (this.sruHeaders = t.sruHeaders || {}), (this.uploadUrl = t.uploadUrl || m), (this.retainMediaForever = !!t.retainMediaForever), (this.sruParameterOverrides = t.sruParameterOverrides), (this.minSegmentBytes = this.sruParameterOverrides?.minSegmentBytes || ((i = this.totalBytes), a(Math.ceil(i / d)))), this._clearState();
                }
                upload(e) {
                    ((this.hasAttemptedFinalize && (this.uploadOptions.trimRanges !== e.trimRanges || this.uploadOptions.extraFinalizeParams !== e.extraFinalizeParams)) || this.uploadOptions.extraInitParams !== e.extraInitParams) && this._clearState(),
                        (this.uploadOptions = e),
                        this.state !== S.SUCCEEDED && this.state !== S.PENDING && ((this.state = S.PENDING), this.hasAttemptedFinalize ? this._postFinalize() : this.mediaId ? this._startNextAppendSegment() : this._postInit()),
                        (this._bitrateMonitor = e.withMultiRequests
                            ? n(() => {
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
                    (this.mediaId = e), (this.uploadOptions = t || E), (this.state = S.PENDING), this._getStatus();
                }
                _clearState() {
                    for (const e of Object.keys(this.timeoutIdMap)) clearTimeout(this.timeoutIdMap[e]), delete this.timeoutIdMap[e];
                    (this.state = S.RESET),
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
                uploadExternalMedia(e, t, i, n = E) {
                    (this.uploadOptions = n), (this.state = S.PENDING), (this.progressMode = "uploading");
                    let a = s({ source_url: e, media_type: t, media_category: i });
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
                        let i = s(e);
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
                    this.state === S.PENDING && ((this.mediaId = e.media_id_string), (this.mediaKey = e.media_key), this._setSessionTimeout(e.expires_after_secs), this._bitrateMonitor ? this._bitrateMonitor.start() : this._startNextAppendSegment());
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
                    const n = new FormData();
                    if (this.fileHandle) {
                        const e = this.fileHandle.slice(t, t + i);
                        n.append("media", e);
                    }
                    const a = this.segmentIndex;
                    this.segmentIndex += 1;
                    const r = s({ media_id: this.mediaId, segment_index: String(a) }),
                        l = this._sendXhr(
                            "POST",
                            "APPEND",
                            r,
                            () => {
                                if (this.state === S.PENDING) {
                                    const e = this.inflightSegments.get(a);
                                    e && (this.inflightSegments.delete(a), (this.uploadedBytes += e.bytes)), this._notifyProgress(this._uploadProgress(), this.mediaId), 0 === this.inflightSegments.size && this._startNextAppendSegment();
                                }
                            },
                            (...e) => this._uploadError(...e),
                            5,
                            n,
                            () => this._startNextAppendSegment(),
                            i,
                        );
                    this.inflightSegments.set(a, { bytes: i, request: l });
                }
                _postFinalize() {
                    if (this.uploadOptions.pauseBeforeFinalize) (this.state = S.PAUSED), this.uploadOptions.pause && this.uploadOptions.pause();
                    else {
                        this.hasAttemptedFinalize = !0;
                        const e = { media_id: this.mediaId };
                        this.uploadOptions.trimRanges && (e.trim_ranges = this.uploadOptions.trimRanges), this.mediaType && /^video\//.test(this.mediaType) && (e.allow_async = String(!0)), this.retainMediaForever && (e.ttl = "infinite");
                        let t = s(e);
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
                            return (i = e?.code ? w[String(e.code)] : _.INTERNAL_ERROR), void this._uploadError({ ...e, code: i });
                        }
                        default:
                            return void this._uploadError();
                    }
                    this._notifyProgress(i, this.mediaId, this.mediaKey);
                    const n = t.check_after_secs || 10;
                    setTimeout((...e) => this._getStatus(...e), 1e3 * n);
                }
                _getStatus() {
                    if (this.state === S.PENDING) {
                        const e = s({ media_id: this.mediaId });
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
                    this.state === S.PENDING && ((this.state = S.SUCCEEDED), this._notifyResult());
                }
                _uploadError(e) {
                    if (this.state !== S.PENDING) return;
                    const t = e.error?.match(/{ "message": "maxFileSizeExceeded", "maxFileSizeBytes": \d+ }/);
                    if (t) {
                        const e = JSON.parse(t[0]);
                        this.error = { code: _.FILE_TOO_LARGE, message: e.message, maxSizeBytes: e.maxFileSizeBytes };
                    } else e && e.code ? (this.error = e) : (this.error = { code: _.INTERNAL_ERROR, message: e?.error });
                    (this.state = S.FAILED), this._notifyResult();
                }
                _uploadProgress() {
                    if (this.totalBytes) {
                        return 100 * (this.uploadedBytes / this.totalBytes);
                    }
                    return 0;
                }
                _notifyProgress(e, t, i) {
                    this.state !== S.FAILED && this.uploadOptions.progress && this.uploadOptions.progress(e, this.progressMode, t, i);
                }
                _notifyResult() {
                    this.state === S.SUCCEEDED && this.uploadOptions.success && this.uploadOptions.success(this.mediaId, this.mediaKey), this.state === S.FAILED && this.uploadOptions.error && this.uploadOptions.error(this.error);
                }
                _stats(e, t, i = {}) {
                    const n = i.requestStartTime || this.initStartTime,
                        s = new Date().getTime() - n.getTime();
                    if (((this.totalUploadDuration += s), this.uploadOptions.stats)) {
                        const n = { mediaType: this.mediaType || "", command: e, status: t, duration: s, totalByteSize: this.totalBytes, totalDuration: this.totalUploadDuration };
                        i.segmentBytes && (n.appendByteSize = i.segmentBytes), this.uploadOptions.stats(n);
                    }
                }
                _sendXhr(e, t, i, n, s, r, l, d, u = 0) {
                    const c = `${this.uploadUrl}?command=${t}${i}`;
                    let h = !1;
                    const m = new Date(),
                        p = (a) => {
                            if (r) {
                                const a = [c, r].join("-");
                                this.timeoutIdMap[a] = setTimeout(() => {
                                    this._sendXhr(e, t, i, n, s, r - 1, l, d, u);
                                }, y);
                            } else w(a);
                        },
                        w = (e) => {
                            this._stats(t, e || "unknown-error", { requestStartTime: m, segmentBytes: u }), "function" == typeof s && s(T(S) || { code: _.INVALID_RES_STATUS, mediaId: this.mediaId });
                        },
                        S = new XMLHttpRequest();
                    S.open(e, c, !0),
                        (S.withCredentials = !0),
                        (S.timeout = this.sruParameterOverrides?.clientsideSruUploadTimeoutMs || g),
                        (S.onload = () => {
                            if (S.status >= 200 && S.status < 400) {
                                const e = T(S);
                                204 === S.status || e ? (this._stats(t, "success", { requestStartTime: m, segmentBytes: u }), n(e || {}), !h && d && d()) : p("parsererror");
                            } else S.status && 503 !== S.status ? w("invalid-response") : p("503");
                        }),
                        (S.onerror = () => p("error")),
                        (S.ontimeout = () => {
                            (this.nextSegmentBytes = this.minSegmentBytes), p("timeout");
                        });
                    let E = !1;
                    S.upload.onprogress = (e) => {
                        E ? e.loaded === e.total && this._bitrateMonitor?.uploadFinish(c, e.total) : ((E = !0), this._bitrateMonitor?.uploadStart(c, e.loaded));
                        const t = e.loaded,
                            i = ((this.uploadedBytes + t) / this.totalBytes) * 100;
                        if ((this._notifyProgress(i, this.mediaId), t / e.total > f && !h && ((h = !0), l))) {
                            const e = Math.max(1, new Date().getTime() - m.getTime()),
                                i = this.minSegmentBytes,
                                n = this.sruParameterOverrides?.maxSegmentBytes;
                            (this.nextSegmentBytes = (function (e) {
                                const t = e.idealUploadTimeMs || o,
                                    i = e.sentBytes / e.uploadTimeMs;
                                return a(Math.round(t * i), e.minSegmentBytes, e.maxSegmentBytes);
                            })({ minSegmentBytes: i, sentBytes: t, uploadTimeMs: e, maxSegmentBytes: n, idealUploadTimeMs: this.sruParameterOverrides?.idealUploadTimeMs })),
                                "function" == typeof d && d();
                        }
                    };
                    for (const e in this.sruHeaders) S.setRequestHeader(e, this.sruHeaders[e]);
                    return l ? S.send(l) : S.send(), S;
                }
            }
            const c = 2147483647,
                h = 1,
                g = 45e3,
                m = (window.location.host.includes("twitter.com") ? "https://upload.twitter.com" : "https://upload.x.com") + "/i/media/upload.json",
                p = 2,
                f = 0.95,
                y = 1e3,
                _ = Object.freeze({ FILE_TOO_LARGE: 2, INTERNAL_ERROR: 131, INVALID_MEDIA: 1, RATE_LIMIT: 88, TIMEOUT: 67, UNSUPPORTED_MEDIA: 3, ZERO_FILE_LENGTH: 4, CANCELED: 999, INVALID_RES_STATUS: -1 }),
                w = Object.freeze({ 0: _.INTERNAL_ERROR, 1: _.INVALID_MEDIA, 2: _.FILE_TOO_LARGE, 3: _.UNSUPPORTED_MEDIA, 4: _.TIMEOUT }),
                S = Object.freeze({ RESET: 0, PENDING: 1, PAUSED: 2, SUCCEEDED: 3, FAILED: 4 }),
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
            var n = i(821176);
            e.exports = function () {
                var e = n(this),
                    t = "";
                return e.hasIndices && (t += "d"), e.global && (t += "g"), e.ignoreCase && (t += "i"), e.multiline && (t += "m"), e.dotAll && (t += "s"), e.unicode && (t += "u"), e.unicodeSets && (t += "v"), e.sticky && (t += "y"), t;
            };
        },
        890103: (e, t, i) => {
            var n = i(609859),
                s = i(807400),
                a = i(396616),
                r = i(730895),
                l = i(824229),
                o = n.RegExp,
                d = o.prototype;
            s &&
                l(function () {
                    var e = !0;
                    try {
                        o(".", "d");
                    } catch (t) {
                        e = !1;
                    }
                    var t = {},
                        i = "",
                        n = e ? "dgimsy" : "gimsy",
                        s = function (e, n) {
                            Object.defineProperty(t, e, {
                                get: function () {
                                    return (i += n), !0;
                                },
                            });
                        },
                        a = { dotAll: "s", global: "g", ignoreCase: "i", multiline: "m", sticky: "y" };
                    for (var r in (e && (a.hasIndices = "d"), a)) s(r, a[r]);
                    return Object.getOwnPropertyDescriptor(d, "flags").get.call(t) !== n || i !== n;
                }) &&
                a(d, "flags", { configurable: !0, get: r });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.HoverCard-6107ac1a.447fcbca.js.map
