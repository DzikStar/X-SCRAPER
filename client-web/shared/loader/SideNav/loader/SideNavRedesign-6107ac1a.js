"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.SideNav~loader.SideNavRedesign-6107ac1a", "loader.directMessagesData-6107ac1a"],
    {
        326439: (e, t, i) => {
            i.d(t, { Z: () => d });
            var n,
                s,
                a,
                l,
                r,
                o = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "SensitiveMediaSettingsQuery", selections: [{ alias: "viewer", args: (n = [{ kind: "Literal", name: "s", value: "cd25" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [(a = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: "UserSensitiveMediaSettingsInfo", kind: "LinkedField", name: "sensitive_media_settings", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "SensitiveMediaOptions_userSensitiveMediaSettingsInfo" }, (l = { alias: null, args: null, kind: "ScalarField", name: "can_user_allow_sensitive_content", storageKey: null })], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"cd25")' }], type: "Query", abstractKey: null },
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
                                                                    l,
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            (r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null }),
                                                        ],
                                                        type: "User",
                                                        abstractKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                            r,
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
        929446: (e, t, i) => {
            i.d(t, { Z: () => s });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "UserCell_user",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "is_blue_verified", storageKey: null },
                    { kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null }, action: "THROW" },
                    {
                        alias: null,
                        args: null,
                        concreteType: "UserCore",
                        kind: "LinkedField",
                        name: "core",
                        plural: !1,
                        selections: [
                            { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null }, action: "THROW" },
                            { kind: "RequiredField", field: { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }, action: "THROW" },
                        ],
                        storageKey: null,
                    },
                    { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null }], storageKey: null },
                    { alias: null, args: null, concreteType: "UserPrivacy", kind: "LinkedField", name: "privacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }], storageKey: null },
                    {
                        alias: null,
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
                                    { alias: null, args: null, concreteType: "TimelineUrl", kind: "LinkedField", name: "url", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "TimelineUrl" }], storageKey: null },
                                    { alias: null, args: null, concreteType: "BadgeInfo", kind: "LinkedField", name: "badge", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }], storageKey: null },
                                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                                    { alias: "userLabelType", args: null, kind: "ScalarField", name: "user_label_type", storageKey: null },
                                    { alias: "userLabelDisplayType", args: null, kind: "ScalarField", name: "user_label_display_type", storageKey: null },
                                ],
                                storageKey: null,
                            },
                        ],
                        storageKey: null,
                    },
                    { alias: null, args: null, concreteType: "UserRelationshipPerspectives", kind: "LinkedField", name: "relationship_perspectives", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "followed_by", storageKey: null }], storageKey: null },
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
                ],
                type: "User",
                abstractKey: null,
                hash: "2ed5f16889d23a8b1d55df8a2f7bb966",
            };
            const s = n;
        },
        498510: (e, t, i) => {
            i.d(t, { Z: () => d });
            var n,
                s,
                a,
                l,
                r,
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
                                                            (l = {
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
                    operation: { argumentDefinitions: [], kind: "Operation", name: "fetchDownloadSettingAllowedQuery", selections: [n, { alias: "viewer", args: s, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [a, { kind: "InlineFragment", selections: [l, (r = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, r], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }] },
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
                        (function (e, t, i, s, a, l) {
                            const r = l || { top: 0, left: 0, width: t.width, height: t.height };
                            let o = r.left,
                                d = r.top,
                                u = r.width,
                                h = r.height,
                                c = 0,
                                g = 0,
                                m = i,
                                p = s;
                            switch ((e.save(), a)) {
                                case n.Z.TOP_RIGHT:
                                    e.scale(-1, 1), (o = t.width - r.width - r.left), (c = -i);
                                    break;
                                case n.Z.BOTTOM_RIGHT:
                                    e.rotate(Math.PI), (o = t.width - r.width - r.left), (d = t.height - r.height - r.top), (c = -i), (g = -s);
                                    break;
                                case n.Z.BOTTOM_LEFT:
                                    e.scale(1, -1), (d = t.height - r.height - r.top), (g = -s);
                                    break;
                                case n.Z.LEFT_TOP:
                                    e.translate(i / 2, s / 2), e.rotate(-Math.PI / 2), e.scale(-1, 1), (o = r.top), (d = r.left), (u = r.height), (h = r.width), (c = -s / 2), (g = -i / 2), (m = s), (p = i);
                                    break;
                                case n.Z.LEFT_BOTTOM:
                                    e.translate(i / 2, s / 2), e.rotate(Math.PI / 2), (o = r.top), (d = t.height - r.width - r.left), (u = r.height), (h = r.width), (c = -s / 2), (g = -i / 2), (m = s), (p = i);
                                    break;
                                case n.Z.RIGHT_BOTTOM:
                                    e.translate(i / 2, s / 2), e.rotate(Math.PI / 2), e.scale(-1, 1), (o = t.width - r.height - r.top), (d = t.height - r.width - r.left), (u = r.height), (h = r.width), (c = -s / 2), (g = -i / 2), (m = s), (p = i);
                                    break;
                                case n.Z.RIGHT_TOP:
                                    e.translate(i / 2, s / 2), e.rotate(-Math.PI / 2), (o = t.width - r.height - r.top), (d = r.left), (u = r.height), (h = r.width), (c = -s / 2), (g = -i / 2), (m = s), (p = i);
                            }
                            e.drawImage(t, o, d, u, h, c, g, m, p), e.restore();
                        })(t.getContext("2d"), e, t.width, t.height, s, a),
                        t
                    ),
                );
            }
            const l = 3145728,
                r = 5242880;
            function o(e, t) {
                if (window.CanvasRenderingContext2D) {
                    const i = s(e, t);
                    return d(i)
                        .then(() => i)
                        .catch(() => {
                            const i = e * t;
                            if (i > r) {
                                const i = u(r, e, t);
                                return o(i.width, i.height);
                            }
                            if (i > l) {
                                const i = u(l, e, t);
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
                    function a(a, l, r) {
                        const o = a - s,
                            d = o + l;
                        if (o >= 0 && d <= n.length) r(n.subarray(o, d), a);
                        else {
                            const o = new FileReader();
                            (o.onload = function () {
                                (n = new Uint8Array(this.result)), (s = a), r(n.subarray(0, l), a);
                            }),
                                (o.onerror = t.bind(null, 0)),
                                null !== e && o.readAsArrayBuffer(e.slice(a, a + Math.max(i, l)));
                        }
                    }
                    function l(e) {
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
                        let l = s + 2;
                        for (; a > 0; ) {
                            if (((a -= 1), 274 === n(l, 2) && 3 === n(l + 2, 2) && 1 === n(l + 4, 4))) return void t(n(l + 8, 2));
                            l += 12;
                        }
                        t(0);
                    }
                    e instanceof Blob
                        ? a(0, 10, function e(i, n) {
                              const s = i[1];
                              if (i.length < 4 || 255 !== i[0] || 217 === s) return void t(0);
                              const r = s < 208 || s > 217 ? (i[2] << 8) + i[3] : 0;
                              225 === s && r > 8 && "Exif\0\0" === String.fromCharCode.apply(null, i.subarray(4, 10)) ? a(n + 10, r - 8, l) : a(n + 2 + r, 10, e);
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
            i.d(t, { Lw: () => s, Re: () => h, VJ: () => r, ZF: () => c, hv: () => o, ku: () => n, qp: () => a, uv: () => l, v5: () => u });
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
                                    l = Array(a);
                                for (let e = 0; e < a; e++) l[e] = s.charCodeAt(e);
                                t(new Blob([new Uint8Array(l)], { type: e }));
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
                                s.abort?.(), n(Error(c));
                            }),
                            (s.onload = (e) => {
                                e.target instanceof FileReader && e.target.result instanceof ArrayBuffer ? i(e.target.result) : n(Error("The FileReader result was not of type ArrayBuffer"));
                            }),
                            (s.onerror = (e) => {
                                n(e);
                            }),
                            s.readAsArrayBuffer(e);
                    }),
                l = (e, t) => {
                    const i = document.createElement("a");
                    (i.href = e), (i.download = t), (i.target = "_blank"), i.click(), i.remove();
                },
                r = (e) =>
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
                                l = a.width * t,
                                r = a.height * t;
                            (e.width = l),
                                (e.height = r),
                                s.drawImage(a, 0, 0, l, r),
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
                h = "image/gif",
                c = "Reading aborted";
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
            i.d(t, { DS: () => r, ZP: () => o });
            i(543673), i(240753), i(128399);
            var n = i(790187),
                s = i(276259),
                a = i(122123);
            function l(e, t) {
                const i = (function (e) {
                        return [n.Z.LEFT_BOTTOM, n.Z.LEFT_TOP, n.Z.RIGHT_BOTTOM, n.Z.RIGHT_TOP].indexOf(e) >= 0;
                    })(t),
                    [s, a] = i ? [e.height, e.width] : [e.width, e.height];
                return { width: s, height: a };
            }
            const r = (e) => {
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
                                  const { height: i, width: n } = l(e, t);
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
            i.d(t, { gK: () => s, o2: () => l, po: () => a });
            var n = i(549755);
            const s = { type: "image-load", NO_DIMENSIONS: 1, LOAD_FAILED: 2 };
            function a(e) {
                return new Promise((t, i) => {
                    const a = (e, t) => {
                            const a = new n.Z(e, t, s.type);
                            i(a);
                        },
                        l = new Image();
                    (l.onload = () => {
                        l.width && l.height ? t(l) : a("Image lacks height or width", s.NO_DIMENSIONS);
                    }),
                        (l.onerror = () => {
                            a("Error loading image", s.LOAD_FAILED);
                        }),
                        (l.src = e);
                });
            }
            function l(e) {
                return new Promise((t, i) => {
                    const a = (e, t) => {
                            const a = new n.Z(e, t, s.type);
                            i(a);
                        },
                        l = new Image();
                    l.setAttribute("crossorigin", "anonymous"),
                        (l.onload = () => {
                            if (l.width && l.height) {
                                const e = document.createElement("canvas"),
                                    i = e.getContext("2d");
                                (e.width = l.width),
                                    (e.height = l.height),
                                    i.drawImage(l, 0, 0),
                                    e.toBlob((e) => {
                                        if (e) {
                                            const i = new File([e], "file.jpg", { type: "image/jpeg" });
                                            t(i);
                                        } else a("Failed to convert image to blob", s.LOAD_FAILED);
                                    }, "image/jpeg");
                            } else a("Image lacks height or width", s.NO_DIMENSIONS);
                        }),
                        (l.onerror = () => {
                            a("Error loading image", s.LOAD_FAILED);
                        }),
                        (l.src = e);
                });
            }
        },
        514354: (e, t, i) => {
            i.d(t, { Q: () => o, S: () => r });
            var n = i(332775),
                s = i.n(n),
                a = i(276259),
                l = i(549755);
            const r = { ERROR_READING_IMAGE_FILE: 0, HASHING_ABORTED: 1, INVALID_HASH: 2 },
                o = (e, t) =>
                    (0, a.qp)(e, t)
                        .catch((e) => {
                            throw new l.Z(`An error occurred while reading the image file: ${e}`, e.message === a.ZF ? r.HASHING_ABORTED : r.ERROR_READING_IMAGE_FILE);
                        })
                        .then((e) => {
                            const t = s()(e);
                            if (t && "string" == typeof t) return t;
                            throw new l.Z("Hash is not a non-empty string", r.INVALID_HASH);
                        });
        },
        653843: (e, t, i) => {
            i.d(t, { Y7: () => g, ZP: () => T, m2: () => f });
            var n = i(19697),
                s = i(790187),
                a = i(549755),
                l = i(205074),
                r = i(276259);
            function o(e, { maxDimension: t, maxFileSize: i, targetQuality: n }) {
                return (function (e, t, i, n) {
                    function s(a, l) {
                        return d(e, e.width, e.height, a, l).then((e) => {
                            const o = e.width > i || e.height > i,
                                d = e.toDataURL("image/jpeg", n),
                                u = d.split(";base64,")[1],
                                h = (0, r.ku)(u);
                            if (o || h > t) {
                                let e = 0.8;
                                return o && (e = a > l ? i / a : i / l), s(a * e, l * e);
                            }
                            return d;
                        });
                    }
                    return s(e.width, e.height);
                })(e, i, t, n).then(r.Lw);
            }
            function d(e, t, i, s, a) {
                const l = t / 2,
                    r = i / 2;
                return e instanceof HTMLCanvasElement && t <= s && i <= a ? Promise.resolve(e) : l <= s && r <= a ? (0, n.$i)(e, s, a) : (0, n.$i)(e, l, r).then((e) => d(e, e.width, e.height, s, a));
            }
            const u = 5242880,
                h = 4096,
                c = 0.85,
                g = { GIF_IS_TOO_LARGE: 1, CANNOT_BE_PROCESSED: 2, FILE_IS_NOT_AN_IMAGE: 3 },
                m = (e) => e.orientation !== s.Z.TOP_LEFT && e.orientation !== s.Z.UNKNOWN,
                p = (e, t = u, i = h) => {
                    const { height: n, size: s, width: a } = e;
                    return a > i || n > i || s > t;
                },
                y = (e, t) => t || { top: 0, left: 0, width: e.width, height: e.height },
                _ = (e, t) => {
                    const { height: i, left: n, top: s, width: a } = y(e, t);
                    return !(0 === s && 0 === n && a === e.width && i === e.height);
                };
            function f(e, t) {
                const { maxFileSize: i = u, maxDimension: n = h, cropData: s, jpgPixelsPerByteForResize: a } = t || {},
                    l = "image/jpeg" === e.type,
                    r = (e.width * e.height) / e.size;
                return m(e) || p(e, i, n) || _(e, s) || (l && !!a && r < a);
            }
            const S = (e, t) => {
                    const { height: i, width: n } = e;
                    return n <= t && i <= t ? { width: n, height: i } : n > i ? { width: t, height: Math.round(i / (n / t)) } : { width: Math.round(n / (i / t)), height: t };
                },
                w = (e) => ("function" == typeof e.decode ? e.decode() : Promise.resolve());
            function T(e, t) {
                const { maxFileSize: i = u, maxDimension: s = h, targetQuality: r = c, cropData: d } = t || {},
                    m = y(e, d);
                if (!f(e, t)) return Promise.resolve(e.fileHandle);
                if (!(0, l.DS)(e)) {
                    const e = new a.Z("The provided file is not a valid image", g.FILE_IS_NOT_AN_IMAGE);
                    return Promise.reject(e);
                }
                if (e.isGif) {
                    const e = new a.Z("Gifs cannot be processed.", g.GIF_IS_TOO_LARGE);
                    return Promise.reject(e);
                }
                const p = (e) => o(e, { maxFileSize: i, maxDimension: s, targetQuality: r });
                return e
                    .withDimensionsAndOrientation()
                    .then(({ img: e, orientation: t }) => {
                        const i = ({ height: i, width: s }) => (0, n.$i)(e, s, i, t, m);
                        return w(e)
                            .then(() => ((e) => e(S(m, s)))(i))
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
                    l = 0,
                    r = null;
                function o() {
                    n.clear(), (s = 0), (a = 0), (l = 0);
                }
                return {
                    uploadStart: function (e, t) {
                        n.set(e, { time: Date.now(), bytes: t }), a || (a = Date.now());
                    },
                    uploadFinish: function (d, u) {
                        const h = n.get(d);
                        h &&
                            ((s += u - h.bytes),
                            n.delete(d),
                            ++l === i &&
                                (function () {
                                    if (!a) return;
                                    const n = Date.now() - a;
                                    if (n <= 0) return;
                                    if (1 !== t) return;
                                    const l = s / n;
                                    if (l < 5e3 && 1 === i) return;
                                    !r || r.byterate < l ? ((i += 1), e(), (r = { byterate: l, poolSize: i })) : ((i -= 2), (i = Math.max(i, 1)), (r = null));
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
            i.d(t, { Z: () => u, d: () => f });
            i(543673), i(240753), i(128399);
            function s(e) {
                const t = new URLSearchParams();
                for (const i of Object.keys(e)) {
                    const n = e[i];
                    n && t.set(i, n);
                }
                return `&${String(t)}`;
            }
            function a(e, t = r, i = l) {
                const n = Math.max(e, t);
                return Math.min(n, i);
            }
            const l = 5242880,
                r = 65536,
                o = 2e3,
                d = 1e4;
            class u {
                constructor(e, t = T) {
                    var i;
                    (this.timeoutIdMap = {}), (this.mediaId = ""), (this.mediaKey = ""), (this.fileHandle = e), (this.inflightSegments = new Map()), (this.totalBytes = e ? e.size : 0), (this.mediaType = e ? e.type : void 0), (this.initStartTime = new Date()), (this.sruHeaders = t.sruHeaders || {}), (this.uploadUrl = t.uploadUrl || m), (this.retainMediaForever = !!t.retainMediaForever), (this.sruParameterOverrides = t.sruParameterOverrides), (this.minSegmentBytes = this.sruParameterOverrides?.minSegmentBytes || ((i = this.totalBytes), a(Math.ceil(i / d)))), this._clearState();
                }
                upload(e) {
                    ((this.hasAttemptedFinalize && (this.uploadOptions.trimRanges !== e.trimRanges || this.uploadOptions.extraFinalizeParams !== e.extraFinalizeParams)) || this.uploadOptions.extraInitParams !== e.extraInitParams) && this._clearState(),
                        (this.uploadOptions = e),
                        this.state !== w.SUCCEEDED && this.state !== w.PENDING && ((this.state = w.PENDING), this.hasAttemptedFinalize ? this._postFinalize() : this.mediaId ? this._startNextAppendSegment() : this._postInit()),
                        (this._bitrateMonitor = e.withMultiRequests
                            ? n(() => {
                                  this._startNextAppendSegment();
                              }, e.withMultiRequestsDefaultPoolSize)
                            : void 0),
                        this._notifyResult(),
                        this._notifyProgress(this._uploadProgress());
                }
                cancel() {
                    "function" == typeof this.uploadOptions.error && this.uploadOptions.error({ code: f.CANCELED }), this._clearState();
                }
                pollStatusOfExistingMediaId(e, t) {
                    (this.mediaId = e), (this.uploadOptions = t || T), (this.state = w.PENDING), this._getStatus();
                }
                _clearState() {
                    for (const e of Object.keys(this.timeoutIdMap)) clearTimeout(this.timeoutIdMap[e]), delete this.timeoutIdMap[e];
                    (this.state = w.RESET),
                        (this.mediaId = ""),
                        (this.mediaKey = ""),
                        (this.uploadOptions = T),
                        (this.nextSegmentBytes =
                            this.sruParameterOverrides?.minSegmentBytes ||
                            (function () {
                                const e = window.navigator.connection;
                                if (e) {
                                    const t = e.type || e.effectiveType;
                                    if (e.downlink) return a(((1e3 * e.downlink) / 8 / 2) * o);
                                    if ("wifi" === t) return a(5 * r);
                                }
                                return a(2 * r);
                            })()),
                        (this.segmentIndex = 0),
                        (this.totalUploadDuration = 0),
                        (this.uploadedBytes = 0),
                        (this.hasAttemptedFinalize = !1),
                        this.inflightSegments.forEach(({ request: e }) => e.abort()),
                        (this.inflightSegments = new Map()),
                        this._bitrateMonitor?.reset();
                }
                uploadExternalMedia(e, t, i, n = T) {
                    (this.uploadOptions = n), (this.state = w.PENDING), (this.progressMode = "uploading");
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
                        c,
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
                                c,
                            );
                    } else this._uploadError({ code: f.ZERO_FILE_LENGTH });
                }
                _initSuccess(e) {
                    this.state === w.PENDING && ((this.mediaId = e.media_id_string), (this.mediaKey = e.media_key), this._setSessionTimeout(e.expires_after_secs), this._bitrateMonitor ? this._bitrateMonitor.start() : this._startNextAppendSegment());
                }
                _setSessionTimeout(e) {
                    if ((this.timeoutIdMap.session && (clearTimeout(this.timeoutIdMap.session), delete this.timeoutIdMap.session), e)) {
                        const t = Math.min(h, 1e3 * e);
                        this.timeoutIdMap.session = setTimeout(() => {
                            this._uploadError({ code: f.TIMEOUT }), this._stats("NONE", "timeout"), this._clearState();
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
                    const l = s({ media_id: this.mediaId, segment_index: String(a) }),
                        r = this._sendXhr(
                            "POST",
                            "APPEND",
                            l,
                            () => {
                                if (this.state === w.PENDING) {
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
                    this.inflightSegments.set(a, { bytes: i, request: r });
                }
                _postFinalize() {
                    if (this.uploadOptions.pauseBeforeFinalize) (this.state = w.PAUSED), this.uploadOptions.pause && this.uploadOptions.pause();
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
                                c,
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
                            return (i = e?.code ? S[String(e.code)] : f.INTERNAL_ERROR), void this._uploadError({ ...e, code: i });
                        }
                        default:
                            return void this._uploadError();
                    }
                    this._notifyProgress(i, this.mediaId, this.mediaKey);
                    const n = t.check_after_secs || 10;
                    setTimeout((...e) => this._getStatus(...e), 1e3 * n);
                }
                _getStatus() {
                    if (this.state === w.PENDING) {
                        const e = s({ media_id: this.mediaId });
                        this._sendXhr(
                            "GET",
                            "STATUS",
                            e,
                            (...e) => this._finalizeOrStatusSuccess(...e),
                            (...e) => this._uploadError(...e),
                            c,
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
                        this.error = { code: f.FILE_TOO_LARGE, message: e.message, maxSizeBytes: e.maxFileSizeBytes };
                    } else e && e.code ? (this.error = e) : (this.error = { code: f.INTERNAL_ERROR, message: e?.error });
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
                    const n = i.requestStartTime || this.initStartTime,
                        s = new Date().getTime() - n.getTime();
                    if (((this.totalUploadDuration += s), this.uploadOptions.stats)) {
                        const n = { mediaType: this.mediaType || "", command: e, status: t, duration: s, totalByteSize: this.totalBytes, totalDuration: this.totalUploadDuration };
                        i.segmentBytes && (n.appendByteSize = i.segmentBytes), this.uploadOptions.stats(n);
                    }
                }
                _sendXhr(e, t, i, n, s, l, r, d, u = 0) {
                    const h = `${this.uploadUrl}?command=${t}${i}`;
                    let c = !1;
                    const m = new Date(),
                        p = (a) => {
                            if (l) {
                                const a = [h, l].join("-");
                                this.timeoutIdMap[a] = setTimeout(() => {
                                    this._sendXhr(e, t, i, n, s, l - 1, r, d, u);
                                }, _);
                            } else S(a);
                        },
                        S = (e) => {
                            this._stats(t, e || "unknown-error", { requestStartTime: m, segmentBytes: u }), "function" == typeof s && s(I(w) || { code: f.INVALID_RES_STATUS, mediaId: this.mediaId });
                        },
                        w = new XMLHttpRequest();
                    w.open(e, h, !0),
                        (w.withCredentials = !0),
                        (w.timeout = this.sruParameterOverrides?.clientsideSruUploadTimeoutMs || g),
                        (w.onload = () => {
                            if (w.status >= 200 && w.status < 400) {
                                const e = I(w);
                                204 === w.status || e ? (this._stats(t, "success", { requestStartTime: m, segmentBytes: u }), n(e || {}), !c && d && d()) : p("parsererror");
                            } else w.status && 503 !== w.status ? S("invalid-response") : p("503");
                        }),
                        (w.onerror = () => p("error")),
                        (w.ontimeout = () => {
                            (this.nextSegmentBytes = this.minSegmentBytes), p("timeout");
                        });
                    let T = !1;
                    w.upload.onprogress = (e) => {
                        T ? e.loaded === e.total && this._bitrateMonitor?.uploadFinish(h, e.total) : ((T = !0), this._bitrateMonitor?.uploadStart(h, e.loaded));
                        const t = e.loaded,
                            i = ((this.uploadedBytes + t) / this.totalBytes) * 100;
                        if ((this._notifyProgress(i, this.mediaId), t / e.total > y && !c && ((c = !0), r))) {
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
                    for (const e in this.sruHeaders) w.setRequestHeader(e, this.sruHeaders[e]);
                    return r ? w.send(r) : w.send(), w;
                }
            }
            const h = 2147483647,
                c = 1,
                g = 45e3,
                m = (window.location.host.includes("twitter.com") ? "https://upload.twitter.com" : "https://upload.x.com") + "/i/media/upload.json",
                p = 2,
                y = 0.95,
                _ = 1e3,
                f = Object.freeze({ FILE_TOO_LARGE: 2, INTERNAL_ERROR: 131, INVALID_MEDIA: 1, RATE_LIMIT: 88, TIMEOUT: 67, UNSUPPORTED_MEDIA: 3, ZERO_FILE_LENGTH: 4, CANCELED: 999, INVALID_RES_STATUS: -1 }),
                S = Object.freeze({ 0: f.INTERNAL_ERROR, 1: f.INVALID_MEDIA, 2: f.FILE_TOO_LARGE, 3: f.UNSUPPORTED_MEDIA, 4: f.TIMEOUT }),
                w = Object.freeze({ RESET: 0, PENDING: 1, PAUSED: 2, SUCCEEDED: 3, FAILED: 4 }),
                T = {};
            function I(e) {
                try {
                    return JSON.parse(e.responseText);
                } catch (e) {
                    return null;
                }
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.SideNav~loader.SideNavRedesign-6107ac1a.564aeeaa.js.map
