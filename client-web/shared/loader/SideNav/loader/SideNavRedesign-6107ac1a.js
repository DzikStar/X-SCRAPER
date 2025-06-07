"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.SideNav~loader.SideNavRedesign-6107ac1a", "icons/IconPlus-js", "loader.directMessagesData-6107ac1a"],
    {
        326439: (e, t, i) => {
            i.d(t, { Z: () => d });
            var n,
                a,
                r,
                s,
                l,
                o = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "SensitiveMediaSettingsQuery", selections: [{ alias: "viewer", args: (n = [{ kind: "Literal", name: "s", value: "cd25" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(a = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [(r = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: "UserSensitiveMediaSettingsInfo", kind: "LinkedField", name: "sensitive_media_settings", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "SensitiveMediaOptions_userSensitiveMediaSettingsInfo" }, (s = { alias: null, args: null, kind: "ScalarField", name: "can_user_allow_sensitive_content", storageKey: null })], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"cd25")' }], type: "Query", abstractKey: null },
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
                                                    a,
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            r,
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
                                                                    s,
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
        929446: (e, t, i) => {
            i.d(t, { Z: () => a });
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
            const a = n;
        },
        498510: (e, t, i) => {
            i.d(t, { Z: () => d });
            var n,
                a,
                r,
                s,
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
                                args: (a = [{ kind: "Literal", name: "s", value: "4721" }]),
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
                                                    (r = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            (s = {
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
                    operation: { argumentDefinitions: [], kind: "Operation", name: "fetchDownloadSettingAllowedQuery", selections: [n, { alias: "viewer", args: a, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [r, { kind: "InlineFragment", selections: [s, (l = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, l], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }] },
                    params: { id: "P4Y9VY-Vn1cJuBnjOVZ4xA", metadata: {}, name: "fetchDownloadSettingAllowedQuery", operationKind: "query", text: null },
                };
            o.hash = "8a9c6728758bc2d477246d6d2dbf9e46";
            const d = o;
        },
        882127: (e, t, i) => {
            i.d(t, { Z: () => a });
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
            const a = n;
        },
        642153: (e, t, i) => {
            i.d(t, { Z: () => l });
            var n = i(202784),
                a = i(325686),
                r = i(392237),
                s = i(823161);
            const l = (e) => {
                    const { borderColor: t = "cellBackground", borderWidth: i = "small", style: l, userAvatarSize: d = "medium", userAvatarUrls: c, withIncreasedSpacing: u } = e,
                        h = c.length,
                        m = "transparent" === t;
                    return n.createElement(
                        a.Z,
                        { style: [o.root, l, { height: s.default.getSizeStyle(d)?.height }] },
                        c.map((e, a) => n.createElement(s.default, { backgroundColor: t, borderColor: t, borderWidth: m ? "none" : i, key: a, size: d, style: [0 !== a && { marginStart: -1 * r.default.theme.spacesPx[u ? "space4" : "space12"] }, { zIndex: h - a }], uri: e })),
                    );
                },
                o = r.default.create((e) => ({ root: { flexDirection: "row", flexShrink: 0, overflow: "hidden", flexWrap: "wrap", justifyContent: "center" } }));
        },
        215337: (e, t, i) => {
            i.d(t, { Z: () => s });
            var n = i(202784),
                a = i(325686);
            class r extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.getColors = () => {
                            const { colors: e, locations: t } = this.props;
                            return e
                                .map((e, i) => {
                                    const n = t[i];
                                    let a = "";
                                    return n && (a = ` ${100 * n}%`), e + a;
                                })
                                .join(",");
                        });
                }
                render() {
                    const { angle: e, angleUnit: t, children: i, style: r } = this.props;
                    return n.createElement(a.Z, { style: [r, { backgroundImage: `linear-gradient(${e}${t},${this.getColors()})` }] }, i);
                }
            }
            r.defaultProps = { angle: 180, angleUnit: "deg", locations: [] };
            const s = r;
        },
        378729: (e, t, i) => {
            i.d(t, { Z: () => y });
            var n = i(202784),
                a = i(325686),
                r = i(111677),
                s = i.n(r),
                l = i(283379),
                o = i(731708),
                d = i(392237);
            const c = s().f1a1b791,
                u = s().if2bf8b4,
                h = s().f3624b5c,
                m = s().b4b3b113,
                p = s().be222050,
                g = s().hcbbe447;
            class y extends n.Component {
                render() {
                    const { color: e, id: t, style: i } = this.props;
                    return n.createElement(a.Z, { style: [f.root, i] }, n.createElement(l.default, { style: [f.icon, e && f[e]] }), n.createElement(o.ZP, { color: e, id: t, size: "subtext2" }, this._getPromotedLabel()));
                }
                _getPromotedLabel() {
                    const { contentAuthorId: e, label: t, promotedContent: i } = this.props,
                        { adMetadataContainer: n, advertiser: a, advertiser_name: r, disclosure_type: s } = i,
                        l = e && a && e === a.id_str,
                        o = "string" == typeof s && "political" === s.toLowerCase(),
                        d = "string" == typeof s && "issue" === s.toLowerCase(),
                        y = !(!n || "POLITICAL" !== n.disclaimerType) || o,
                        f = !(!n || "ISSUE" !== n.disclaimerType) || d,
                        { removePromotedAttributionForPreroll: w } = n || {};
                    let _;
                    return (_ = t || (!r || l || w ? (y ? h : f ? p : u) : y ? m({ fullName: r }) : f ? g({ fullName: r }) : c({ fullName: r }))), _;
                }
            }
            y.defaultProps = { color: "gray700" };
            const f = d.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row" }, icon: { color: e.colors.gray700, height: "1em", marginEnd: e.spaces.space4, flexShrink: 0 }, gray700: { color: e.colors.gray700 }, white: { color: e.colors.white } }));
        },
        280278: (e, t, i) => {
            i.d(t, { ZP: () => g });
            var n = i(202784),
                a = i(325686),
                r = i(827515),
                s = i(461756),
                l = i(731708),
                o = i(392237);
            const d = "up",
                c = "down",
                u = (e, t, i) => {
                    i((i) => {
                        const n = (0, r.Z)(e) ? (e > (i.count || 0) ? d : c) : d;
                        return { ...i, count: e, oldText: i.text, pendingCount: null, pendingText: null, text: t, transitionDirection: n };
                    });
                },
                h = {};
            [d, c].forEach((e) => {
                const t = "0.3s";
                h[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === d ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === d ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const m = { position: "absolute" },
                p = o.default.create({ root: { overflow: "hidden" } }),
                g = (e) => {
                    const { children: t, containerStyle: i, count: o, ...c } = e,
                        [g, y] = n.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: d }),
                        f = n.useRef(!1);
                    return (
                        n.useEffect(
                            () => (
                                (f.current = !0),
                                function () {
                                    f.current = !1;
                                }
                            ),
                            [],
                        ),
                        n.useEffect(() => {
                            if (f.current)
                                if (s.Z.reducedMotionEnabled) y((i) => ({ ...i, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== g.pendingText) {
                                    t === g.text || ((0, r.Z)(e.count) && g.count === e.count) ? y((e) => ({ ...e, pendingCount: null, pendingText: null })) : (y((i) => ({ ...i, pendingCount: e.count, pendingText: t })), g.animating || u(e.count, t, y));
                                }
                        }, [t]),
                        n.useEffect(() => {
                            f.current &&
                                !1 === g.animating &&
                                (g.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              f.current && y((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : g.pendingText && u(g.pendingCount, g.pendingText, y));
                        }, [g.animating, g.oldText]),
                        n.useMemo(() => {
                            const e = h[g.transitionDirection],
                                t = g.oldText && !s.Z.reducedMotionEnabled,
                                r = !g.animating && g.oldText && !s.Z.reducedMotionEnabled,
                                o = { ...m, ...(g.animating ? e.post : e.active) },
                                d = { ...(r ? e.pre : e.active) };
                            return n.createElement(
                                a.Z,
                                { style: [p.root, i] },
                                t ? n.createElement("span", { style: o }, n.createElement(l.ZP, c, g.oldText)) : null,
                                n.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(f.current, y),
                                        style: d,
                                    },
                                    n.createElement(l.ZP, c, g.text),
                                ),
                            );
                        }, [i, c, g, f, y])
                    );
                };
        },
        537439: (e, t, i) => {
            i.d(t, { Z: () => B });
            var n = i(202784),
                a = i(111677),
                r = i.n(a),
                s = i(492140),
                l = i(720600),
                o = i(761744),
                d = i(25001),
                c = i(453333),
                u = i(136483),
                h = i(98440),
                m = i(790093),
                p = i(452693),
                g = i(544367),
                y = i(264171),
                f = i(159340),
                w = i(404971),
                _ = i(262009),
                E = i(76388),
                S = i(488746),
                T = i(246492),
                b = i(520913),
                v = i(731708),
                F = i(642153),
                I = i(879891),
                x = i(392237),
                k = i(54606);
            const O = r().ae408b76,
                L = r().j355f008,
                P = r().habf9678,
                C = r().db0798ed,
                R = r().dc716ec9,
                D = ({ text: e }) => {
                    const { direction: t } = (0, I.Z)();
                    return n.createElement(v.ZP, { dir: t, withHashflags: !0 }, e);
                },
                A = (e, t) =>
                    t
                        ? O
                        : ((e) => {
                              const t = n.createElement(D, { text: e });
                              return n.createElement(r().I18NFormatMessage, { $i18n: "fcd931ed" }, t);
                          })(e),
                M = x.default.create((e) => ({ small: { height: e.lineHeights.subtext3, width: e.lineHeights.subtext3 }, medium: { height: e.spaces.space48, width: e.spaces.space48 }, large: { height: e.lineHeights.subtext2, width: e.lineHeights.subtext2 }, xLarge: { height: e.lineHeights.subtext1, width: e.lineHeights.subtext1 }, xxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 }, xxxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 } })),
                N = x.default.create((e) => ({ circle: { color: e.colors.primary, width: "0.5em" }, colorDeepGray: { color: e.colors.gray700 }, colorBlue: { color: e.colors.blue500 }, colorGreen: { color: e.colors.green500 }, colorOrange: { color: e.colors.orange500 }, colorPrimary: { color: e.colors.primary }, colorRed: { color: e.colors.magenta500 }, grayscaleImage: { borderRadius: e.borderRadii.infinite, filter: "grayscale(100%)" }, brandColor: { color: e.colors.brandColor } })),
                B = ({ contextType: e, iconColor: t, iconSize: i, link: a, retweetData: r, text: v, topicData: I, userAvatarUrls: O }) => {
                    const { isSelfRetweet: B, name: Z, screenName: K } = r || {},
                        U = ((e, t, i, a = []) => {
                            const r = M[t],
                                v = [i ? { color: x.default.theme.colors[i] } : N.colorDeepGray, r],
                                I = n.createElement(s.default, { style: v }),
                                O = n.createElement(l.default, { style: v }),
                                L = n.createElement(o.default, { style: v }),
                                P = n.createElement(d.default, { style: v }),
                                C = n.createElement(c.default, { style: v }),
                                R = n.createElement(u.default, { style: N.circle }),
                                D = n.createElement(h.default, { style: v }),
                                A = n.createElement(m.default, { style: v }),
                                B = n.createElement(p.default, { style: v }),
                                Z = n.createElement(g.default, { style: v }),
                                K = n.createElement(y.default, { style: v }),
                                U = n.createElement(f.default, { style: v }),
                                z = n.createElement(w.default, { style: v }),
                                H = n.createElement(_.default, { style: v }),
                                G = n.createElement(E.default, { style: v }),
                                Q = n.createElement(S.default, { style: v }),
                                j = n.createElement(T.default, { style: v }),
                                W = n.createElement(F.Z, { borderColor: "cellBackground", userAvatarSize: t, userAvatarUrls: a }),
                                V = n.createElement(b.default, { style: v });
                            switch (e) {
                                case k.Q.Pin:
                                case k.Q.ReplyPin:
                                    return I;
                                case k.Q.Retweet:
                                    return O;
                                case k.Q.Like:
                                    return L;
                                case k.Q.Follow:
                                    return P;
                                case k.Q.Moment:
                                    return C;
                                case k.Q.NewTweets:
                                    return R;
                                case k.Q.Reply:
                                case k.Q.Conversation:
                                    return D;
                                case k.Q.Feedback:
                                    return A;
                                case k.Q.Topic:
                                    return B;
                                case k.Q.List:
                                    return Z;
                                case k.Q.Location:
                                    return K;
                                case k.Q.Community:
                                    return U;
                                case k.Q.Spaces:
                                    return z;
                                case k.Q.Sparkle:
                                    return H;
                                case k.Q.SocialProof:
                                case k.Q.FollowFollowed:
                                    return j;
                                case k.Q.FollowMutual:
                                    return Q;
                                case k.Q.FollowFollowing:
                                    return G;
                                case k.Q.Facepile:
                                    return W;
                                case k.Q.Bird:
                                    return V;
                                case k.Q.TextOnly:
                                default:
                                    return null;
                            }
                        })(e, i, t, O);
                    switch (e) {
                        case k.Q.Retweet:
                            return { Icon: U, text: v || A(Z, B), link: K ? `https://twitter.com/${K}` : void 0 };
                        case k.Q.Pin:
                            return { Icon: U, text: v || L };
                        case k.Q.ReplyPin:
                            return { Icon: U, text: P };
                        case k.Q.Topic:
                            return { Icon: U, "aria-label": "Recommendation" === I?.functionalityType || "RecWithEducation" === I?.functionalityType ? R({ topicName: v }) : C({ topicName: v }), text: v ? n.createElement(D, { text: v }) : null, link: a };
                        default:
                            return { Icon: U, text: v ? n.createElement(D, { text: v }) : null, link: a };
                    }
                };
        },
        126962: (e, t, i) => {
            i.d(t, { Z: () => g });
            i(136728);
            var n = i(202784),
                a = i(325686),
                r = i(731708),
                s = i(872405),
                l = i(235902),
                o = i(392237),
                d = i(139052),
                c = i(488684),
                u = i(537439),
                h = i(54606);
            class m extends n.PureComponent {
                render() {
                    const { avatarSize: e, bottomControl: t, iconStyle: i, id: o, onLayout: d, rightControl: c, style: h, testID: m, textColor: g, textSize: y, topControl: f, weight: w, withBottomBorder: _, withLeftPadding: E, withTextCentered: S, ...T } = this.props,
                        { Icon: b, "aria-label": v, link: F, text: I } = (0, u.Z)(T),
                        x = n.createElement(r.ZP, { "aria-label": v, color: g, id: o, numberOfLines: 2, size: y, testID: m, weight: w, withoutTwemojiAndHashflags: !0 }, I),
                        { cellStyle: k, viewStyle: O } = this._getStyles();
                    return I ? n.createElement(l.ZP.UseProps, null, (r) => n.createElement(n.Fragment, null, f || null, n.createElement(a.Z, { onLayout: d, style: [h, O, r.socialContextRefreshEnabled() && !E && p.socialContextRefresh] }, n.createElement(s.Z, { avatarCell: b || (E ? null : void 0), avatarCellStyle: [i, p.socialContextIconColumn, !E && p.unsetIconWidth, r.socialContextRefreshEnabled() && !E && p.socialContextRefreshIcon], avatarSize: e, cellStyle: k }, n.createElement(a.Z, { style: p.cellWrapper }, n.createElement(a.Z, { style: [p.socialContextTextColumn, r.socialContextRefreshEnabled() && !E && p.socialContextRefreshTextColumn] }, F ? this._renderLink(F, x) : x), c || null)), t || null))) : null;
                }
                _renderLink(e, t) {
                    const { contextType: i, id: a, onClick: s, retweetData: l, textColor: o, topicData: u } = this.props,
                        { screenName: m } = l || {},
                        p = n.createElement(r.ZP, { color: o, id: a, link: e, onClick: s, withoutTwemojiAndHashflags: !0 }, t);
                    return i === h.Q.Topic && u ? n.createElement(d.Z, { topicId: u.topicId }, p) : i === h.Q.Retweet && m ? n.createElement(c.Z, { screenName: m }, p) : p;
                }
                _getStyles() {
                    const { bottomControl: e, contextType: t, withBottomBorder: i, withTextCentered: n } = this.props,
                        a = t === h.Q.TextOnly,
                        r = i ? [p.bottomBorderMargin, !!e && p.bottomBorder] : [],
                        s = i && !e ? [p.bottomBorder] : [];
                    return a && s.push(p.topicContext), n && s.push(p.socialContextTextCentered), { viewStyle: r, cellStyle: s };
                }
            }
            m.defaultProps = { iconSize: "small", textColor: "gray700", textSize: "subtext2", withBottomBorder: !1, withLeftPadding: !0, withTextCentered: !1 };
            const p = o.default.create((e) => ({ socialContextIconColumn: { alignItems: "flex-end", justifyContent: "center" }, bottomBorderMargin: { marginBottom: e.componentDimensions.gutterVertical }, cellWrapper: { flexDirection: "row" }, bottomBorder: { paddingBottom: e.spaces.space4, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small, borderBottomColor: e.colors.borderColor }, topicContext: { paddingBottom: `calc(${e.spaces.space4} + ${e.spaces.space2})` }, socialContextTextColumn: { alignItems: "flex-start", flexShrink: 1, justifyContent: "center" }, unsetIconWidth: { flexBasis: "unset" }, socialContextRefreshIcon: { marginEnd: e.spaces.space8 }, socialContextRefresh: { marginBottom: e.spaces.space8 }, socialContextRefreshTextColumn: { minHeight: e.spaces.space32 }, socialContextTextCentered: { justifyContent: "center" } })),
                g = m;
        },
        54606: (e, t, i) => {
            i.d(t, { Q: () => n });
            i(202784);
            const n = Object.freeze({ FacepileGroup: "FacepileGroup", Bird: "Bird", Community: "Community", Conversation: "Conversation", Facepile: "Facepile", Feedback: "Feedback", Follow: "Follow", FollowFollowed: "FollowFollowed", FollowFollowing: "FollowFollowing", FollowMutual: "FollowMutual", Like: "Like", List: "List", Location: "Location", Megaphone: "Megaphone", Moment: "Moment", NewTweets: "NewTweets", NewUser: "NewUser", Pin: "Pin", Reply: "Reply", RelatedTweets: "RelatedTweets", ReplyPin: "ReplyPin", Retweet: "Retweet", SmartBlockExpiration: "SmartBlockExpiration", SocialProof: "SocialProof", Spaces: "Spaces", Sparkle: "Sparkle", TextOnly: "TextOnly", Topic: "Topic", Trending: "Trending" });
        },
        181054: (e, t, i) => {
            i.d(t, { Z: () => p });
            var n = i(807896),
                a = i(202784),
                r = i(325686),
                s = i(215337),
                l = i(392237),
                o = i(977220);
            const d = (e) => `${e}%`,
                c = l.default.create((e) => ({ container: { height: "100%", overflow: "hidden" }, animate: { height: "100%", width: d(500), transform: [{ translateX: "0%" }], animationDuration: "10000ms", animationIterationCount: "infinite", animationDirection: "alternate", animationTimingFunction: "linear", animationKeyframes: { "0%": { transform: [{ translateX: "0%" }] }, "100%": { transform: [{ translateX: d(-80) }] } } } }));
            function u() {
                const e = (0, o.ai)();
                return a.createElement("defs", null, a.createElement("linearGradient", { gradientUnits: "userSpaceOnUse", id: h, x1: "-9.62%", x2: "109.62%", y1: "82.19%", y2: "17.81%" }, a.createElement("stop", { stopColor: e.primary }), a.createElement("stop", { offset: "1.05", stopColor: e.secondary })));
            }
            const h = "space-gradient";
            u.fill = `url(#${h})`;
            const m = {
                    Default: function ({ children: e, style: t, type: i = "audiospace" }) {
                        return a.createElement(
                            s.Z,
                            (0, n.Z)(
                                {},
                                (function (e) {
                                    const t = (0, o.ai)(e);
                                    return { ...(0, o.Cs)(), colors: [t.primary, t.secondary], locations: [-0.1505, 1.0496] };
                                })(i),
                                { style: t },
                            ),
                            e,
                        );
                    },
                    Animated: function (e) {
                        return a.createElement(
                            r.Z,
                            { style: [c.container, e.style] },
                            a.createElement(
                                s.Z,
                                (0, n.Z)(
                                    {},
                                    (function () {
                                        const e = (0, o.ai)();
                                        return { ...(0, o.Cs)(), colors: [e.primary, e.secondary, e.primary, e.secondary, e.primary], locations: [0.16, 0.24, 0.54, 0.62, 0.88] };
                                    })(),
                                    { style: c.animate },
                                ),
                                e.children,
                            ),
                        );
                    },
                    SVGLinearGradient: u,
                    getColors: o.ai,
                    getDarkModeColors: o.K,
                },
                p = Object.freeze(m);
        },
        977220: (e, t, i) => {
            i.d(t, { Cs: () => c, K: () => l, ai: () => o });
            var n = i(465233),
                a = i(483054),
                r = i(295559),
                s = i(392237);
            function l(e = "audiospace") {
                return s.default.theme.highContrastEnabled ? h(u.HighContrast[e]) : h(u.Default[e]);
            }
            function o(e = "audiospace") {
                return s.default.theme.highContrastEnabled ? u.HighContrast[e] : u.Default[e];
            }
            const d = { angle: 61.63, angleUnit: "deg" };
            function c() {
                return (0, n.Z)(d);
            }
            const u = { Default: { audiospace: { primary: "#2D42FF", secondary: "#9C63FA" }, livevideo: { primary: "#F91880", secondary: "#F91880" } }, HighContrast: { audiospace: { primary: "#2C3CEF", secondary: "#8439FF" }, livevideo: { primary: "#890A46", secondary: "#890A46" } } };
            function h(e) {
                return { primary: m(e.primary), secondary: m(e.secondary) };
            }
            function m(e) {
                const t = r.xO(e),
                    i = a.$n({ color: t, coefficient: 0.5 });
                return r.vq(r.rb(i)).slice(0, -2);
            }
        },
        433460: (e, t, i) => {
            i.d(t, { Z: () => p });
            var n = i(807896),
                a = i(202784),
                r = i(325686),
                s = i(111677),
                l = i.n(s),
                o = i(404971),
                d = i(868634),
                c = i(336373),
                u = i(181054),
                h = i(392237),
                m = i(823161);
            const p = function (e) {
                const t = c.Z.useAnalytics(),
                    [i, r] = a.useState(),
                    s = !!(i && i > 70),
                    { "aria-label": l, presenceRingType: o, spaceId: d, ...h } = e,
                    p =
                        l ||
                        (function (e, t) {
                            switch (e) {
                                case "audiospace":
                                    return w.activeAudioSpace({ screenName: t });
                                case "livevideo":
                                    return w.activeLiveVideo({ screenName: t });
                                default:
                                    return;
                            }
                        })(o, e.screenName);
                a.useEffect(() => {
                    switch (o) {
                        case "audiospace":
                            t.scribe({ action: "impression", element: "audiospace_ring" });
                            break;
                        case "livevideo":
                            t.scribe({ action: "impression", element: "livevideo_ring" });
                    }
                }, [t, o]);
                const y = a.useCallback((e) => a.createElement(u.Z.Default, (0, n.Z)({}, e, { type: o })), [o]);
                return a.createElement(
                    m.default,
                    (0, n.Z)({}, h, {
                        BorderComponent: y,
                        "aria-label": p,
                        avatarRef: function (e) {
                            if (e) {
                                const t = e.getBoundingClientRect();
                                t.width !== i && r(t.width);
                            }
                        },
                        borderWidth: s ? "large" : "medium",
                        decoration: a.createElement(g, { isWide: s, type: o }),
                        gapWidth: s ? "space4" : "space2",
                        onClick: function () {
                            switch (o) {
                                case "audiospace":
                                    t.scribe({ action: "click", element: "audiospace_ring" });
                                    break;
                                case "livevideo":
                                    t.scribe({ action: "click", element: "livevideo_ring" });
                            }
                        },
                        withLink: !0,
                    }),
                );
            };
            function g(e) {
                switch (e.type) {
                    case "audiospace":
                    case "livevideo":
                        return a.createElement(y, e);
                    default:
                        return null;
                }
            }
            function y(e) {
                return "livevideo" === e.type ? a.createElement(d.ZP, { fontSize: e.isWide ? "subtext2" : "subtext3", style: [f.liveVideoLabelContainer, f.borderNarrow, e.isWide ? f.liveVideoLabel : f.liveVideoLabelNarrow], type: "live" }) : a.createElement(r.Z, { style: [f.root, e.isWide ? f.rootWide : f.rootNarrow] }, a.createElement(u.Z.Default, { style: [f.spaceGradient, e.isWide ? f.borderWide : f.borderNarrow] }, a.createElement(o.default, { style: f.spaceIcon })));
            }
            const f = h.default.create((e) => {
                    const t = e.spacesPx.space16 + e.spacesPx.space2,
                        i = "100%",
                        n = e.spacesPx.space4,
                        a = e.spacesPx.space2;
                    return { root: { borderRadius: e.borderRadii.infinite, bottom: 0, end: 0, height: "30%", minHeight: t, minWidth: t, pointerEvents: "none", position: "absolute", width: "30%" }, liveVideoLabelContainer: { maxWidth: "120%" }, liveVideoLabel: { borderColor: e.colors.cellBackground, bottom: 0, start: "50%", position: "absolute", transform: [{ translateX: "-50%" }, { translateY: "25%" }] }, liveVideoLabelNarrow: { borderColor: e.colors.cellBackground, bottom: 0, start: "50%", position: "absolute", transform: [{ translateX: "-50%" }, { translateY: "30%" }], paddingHorizontal: e.spaces.space2, paddingVertical: 0 }, rootWide: { end: -1 * n, bottom: -1 * n }, rootNarrow: { end: -1 * a, bottom: -1 * a }, borderWide: { borderWidth: n }, borderNarrow: { borderWidth: a }, spaceGradient: { justifyContent: "center", width: i, height: i, borderRadius: e.borderRadii.infinite, borderColor: e.colors.cellBackground }, spaceIcon: { padding: e.spaces.space2, color: e.colors.white } };
                }),
                w = { withoutUsernameFallback: l().b3688156, activeAudioSpace: l().c0eb8825, activeLiveVideo: l().d068dc6d };
        },
        238406: (e, t, i) => {
            i.d(t, { Z: () => o });
            var n = i(202784),
                a = i(731708),
                r = i(354149),
                s = i(310452),
                l = i(720283);
            const o = ({ animateIn: e, description: t, entities: i, isConcise: o, style: d, testID: c, userId: u, withheldDescription: h, withheldEntities: m }) => {
                const { description: p, entities: g } = (0, l.H)({ description: t, entities: i, withheldDescription: h, withheldEntities: m }),
                    y = s.ZP.descriptionTextParts(p, g);
                return y.length
                    ? n.createElement(
                          a.ZP,
                          { dir: "auto", numberOfLines: o ? 2 : void 0, style: d, testID: c },
                          y.map((t, i) => n.createElement(r.ZP, { animateIn: e, key: `user_${u}_textpart_${i}`, linkify: !0, part: t })),
                      )
                    : null;
            };
        },
        720283: (e, t, i) => {
            i.d(t, { H: () => n });
            const n = ({ description: e, entities: t, withheldDescription: i, withheldEntities: n }) => (i ? { description: i, entities: n } : { description: e, entities: t });
        },
        379327: (e, t, i) => {
            i.r(t), i.d(t, { default: () => o });
            var n = i(202784),
                a = i(890601),
                r = i(783427),
                s = i(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M11 11V4h2v7h7v2h-7v7h-2v-7H4v-2h7z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const o = l;
        },
        19697: (e, t, i) => {
            i.d(t, { q8: () => d, $i: () => r });
            i(571372);
            var n = i(790187);
            const a = (e, t) => {
                const i = document.createElement("canvas");
                (i.width = e), (i.height = t);
                const n = i.getContext("2d");
                return (n.fillStyle = "#FFFFFF"), n.fillRect(0, 0, e, t), i;
            };
            function r(e, t, i, a, r) {
                return o(t, i).then(
                    (t) => (
                        (function (e, t, i, a, r, s) {
                            const l = s || { top: 0, left: 0, width: t.width, height: t.height };
                            let o = l.left,
                                d = l.top,
                                c = l.width,
                                u = l.height,
                                h = 0,
                                m = 0,
                                p = i,
                                g = a;
                            switch ((e.save(), r)) {
                                case n.Z.TOP_RIGHT:
                                    e.scale(-1, 1), (o = t.width - l.width - l.left), (h = -i);
                                    break;
                                case n.Z.BOTTOM_RIGHT:
                                    e.rotate(Math.PI), (o = t.width - l.width - l.left), (d = t.height - l.height - l.top), (h = -i), (m = -a);
                                    break;
                                case n.Z.BOTTOM_LEFT:
                                    e.scale(1, -1), (d = t.height - l.height - l.top), (m = -a);
                                    break;
                                case n.Z.LEFT_TOP:
                                    e.translate(i / 2, a / 2), e.rotate(-Math.PI / 2), e.scale(-1, 1), (o = l.top), (d = l.left), (c = l.height), (u = l.width), (h = -a / 2), (m = -i / 2), (p = a), (g = i);
                                    break;
                                case n.Z.LEFT_BOTTOM:
                                    e.translate(i / 2, a / 2), e.rotate(Math.PI / 2), (o = l.top), (d = t.height - l.width - l.left), (c = l.height), (u = l.width), (h = -a / 2), (m = -i / 2), (p = a), (g = i);
                                    break;
                                case n.Z.RIGHT_BOTTOM:
                                    e.translate(i / 2, a / 2), e.rotate(Math.PI / 2), e.scale(-1, 1), (o = t.width - l.height - l.top), (d = t.height - l.width - l.left), (c = l.height), (u = l.width), (h = -a / 2), (m = -i / 2), (p = a), (g = i);
                                    break;
                                case n.Z.RIGHT_TOP:
                                    e.translate(i / 2, a / 2), e.rotate(-Math.PI / 2), (o = t.width - l.height - l.top), (d = l.left), (c = l.height), (u = l.width), (h = -a / 2), (m = -i / 2), (p = a), (g = i);
                            }
                            e.drawImage(t, o, d, c, u, h, m, p, g), e.restore();
                        })(t.getContext("2d"), e, t.width, t.height, a, r),
                        t
                    ),
                );
            }
            const s = 3145728,
                l = 5242880;
            function o(e, t) {
                if (window.CanvasRenderingContext2D) {
                    const i = a(e, t);
                    return d(i)
                        .then(() => i)
                        .catch(() => {
                            const i = e * t;
                            if (i > l) {
                                const i = c(l, e, t);
                                return o(i.width, i.height);
                            }
                            if (i > s) {
                                const i = c(s, e, t);
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
            function c(e, t, i) {
                const n = Math.sqrt((e * i) / t),
                    a = (t * n) / i;
                return { height: Math.floor(n), width: Math.floor(a) };
            }
        },
        790187: (e, t, i) => {
            i.d(t, { C: () => r, Z: () => n });
            i(694898), i(38857), i(540171), i(157093), i(265688), i(270315), i(592529), i(86943), i(691157);
            const n = Object.freeze({ UNKNOWN: 0, TOP_LEFT: 1, TOP_RIGHT: 2, BOTTOM_RIGHT: 3, BOTTOM_LEFT: 4, LEFT_TOP: 5, LEFT_BOTTOM: 6, RIGHT_BOTTOM: 7, RIGHT_TOP: 8 }),
                a = (e, t, i = 65536) => {
                    let n = new Uint8Array([]),
                        a = 0;
                    function r(r, s, l) {
                        const o = r - a,
                            d = o + s;
                        if (o >= 0 && d <= n.length) l(n.subarray(o, d), r);
                        else {
                            const o = new FileReader();
                            (o.onload = function () {
                                (n = new Uint8Array(this.result)), (a = r), l(n.subarray(0, s), r);
                            }),
                                (o.onerror = t.bind(null, 0)),
                                null !== e && o.readAsArrayBuffer(e.slice(r, r + Math.max(i, s)));
                        }
                    }
                    function s(e) {
                        const i = { "MM\0*": !0, "II*\0": !1 }[String.fromCharCode.apply(null, e.subarray(0, 4))];
                        if (void 0 === i) return void t(0);
                        function n(t, n) {
                            let a = 0;
                            for (let r = 0; r < n; r++) a = (a << 8) + e[t + (i ? r : n - 1 - r)];
                            return a;
                        }
                        const a = e.length > 8 && n(4, 4);
                        if (!a || a + 2 > e.length) return void t(0);
                        let r = n(a, 2);
                        if (a + 12 * r + 6 > e.length) return void t(0);
                        let s = a + 2;
                        for (; r > 0; ) {
                            if (((r -= 1), 274 === n(s, 2) && 3 === n(s + 2, 2) && 1 === n(s + 4, 4))) return void t(n(s + 8, 2));
                            s += 12;
                        }
                        t(0);
                    }
                    e instanceof Blob
                        ? r(0, 10, function e(i, n) {
                              const a = i[1];
                              if (i.length < 4 || 255 !== i[0] || 217 === a) return void t(0);
                              const l = a < 208 || a > 217 ? (i[2] << 8) + i[3] : 0;
                              225 === a && l > 8 && "Exif\0\0" === String.fromCharCode.apply(null, i.subarray(4, 10)) ? r(n + 10, l - 8, s) : r(n + 2 + l, 10, e);
                          })
                        : t(0);
                },
                r = (e, t) => {
                    const i = document.documentElement && "from-image" === getComputedStyle(document.documentElement).imageOrientation;
                    return new Promise((r) => {
                        i
                            ? r(n.TOP_LEFT)
                            : a(
                                  e,
                                  (e) => {
                                      r(e);
                                  },
                                  t,
                              );
                    });
                };
        },
        276259: (e, t, i) => {
            i.d(t, { Lw: () => a, Re: () => u, VJ: () => l, ZF: () => h, hv: () => o, ku: () => n, qp: () => r, uv: () => s, v5: () => c });
            i(571372), i(875640), i(694898), i(38857), i(540171), i(157093), i(265688), i(270315), i(592529), i(86943), i(691157), i(543673), i(240753), i(128399);
            function n(e) {
                const t = e.match(/=*$/);
                return t ? Math.floor(0.75 * (e.length - t[0].length)) : 0.75 * e.length;
            }
            function a(e) {
                return new Promise((t, i) => {
                    const n = e.split(/data:|;base64,/);
                    if (Blob)
                        if (3 !== n.length) i(Error("Invalid dataUri"));
                        else if (atob)
                            if (Uint8Array) {
                                const [, e, i] = n,
                                    a = atob(i),
                                    r = a.length,
                                    s = Array(r);
                                for (let e = 0; e < r; e++) s[e] = a.charCodeAt(e);
                                t(new Blob([new Uint8Array(s)], { type: e }));
                            } else i(Error("The Uint8Array type is not available"));
                        else i(Error("The atob API is not available"));
                    else i(Error("The Blob API is not available"));
                });
            }
            const r = (e, t) =>
                    new Promise((i, n) => {
                        const a = new FileReader();
                        t &&
                            (t.signal.onabort = () => {
                                a.abort?.(), n(Error(h));
                            }),
                            (a.onload = (e) => {
                                e.target instanceof FileReader && e.target.result instanceof ArrayBuffer ? i(e.target.result) : n(Error("The FileReader result was not of type ArrayBuffer"));
                            }),
                            (a.onerror = (e) => {
                                n(e);
                            }),
                            a.readAsArrayBuffer(e);
                    }),
                s = (e, t) => {
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
                    new Promise((n, a) => {
                        const r = new Image();
                        (r.onload = () => {
                            const e = document.createElement("canvas"),
                                a = e.getContext("2d"),
                                s = r.width * t,
                                l = r.height * t;
                            (e.width = s),
                                (e.height = l),
                                a.drawImage(r, 0, 0, s, l),
                                e.toBlob(
                                    (e) => {
                                        n(new File([e], "image.jpeg", { type: "image/jpeg" }));
                                    },
                                    "image/jpeg",
                                    i,
                                );
                        }),
                            (r.onerror = () => a(new Error("Failed to load image while resizing"))),
                            (r.src = URL.createObjectURL(e));
                    }),
                c = ["image/jpeg", "image/png", "image/webp"],
                u = "image/gif",
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
                a = i(276259),
                r = i(122123);
            function s(e, t) {
                const i = (function (e) {
                        return [n.Z.LEFT_BOTTOM, n.Z.LEFT_TOP, n.Z.RIGHT_BOTTOM, n.Z.RIGHT_TOP].indexOf(e) >= 0;
                    })(t),
                    [a, r] = i ? [e.height, e.width] : [e.width, e.height];
                return { width: a, height: r };
            }
            const l = (e) => {
                const t = e instanceof o,
                    i = e.isImage || e.isGif,
                    n = e.orientation,
                    a = e.width && e.height,
                    r = e.img;
                return !!(t && i && n && a && r);
            };
            class o {
                constructor(e) {
                    (this.fileHandle = e), e instanceof File && (this.name = e.name), (this.size = e.size), (this.type = e.type), (this.url = window.URL.createObjectURL(this.fileHandle)), (this.isGif = this.type === a.Re), (this.isImage = a.v5.some((e) => e === this.type)), (this.isVideo = !1), (this.isSubtitles = !1);
                }
                withDimensionsAndOrientation() {
                    return this.isGif || this.isImage
                        ? (0, r.po)(this.url).then((e) => {
                              const t = (t) => {
                                  const { height: i, width: n } = s(e, t);
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
            i.d(t, { gK: () => a, o2: () => s, po: () => r });
            var n = i(549755);
            const a = { type: "image-load", NO_DIMENSIONS: 1, LOAD_FAILED: 2 };
            function r(e) {
                return new Promise((t, i) => {
                    const r = (e, t) => {
                            const r = new n.Z(e, t, a.type);
                            i(r);
                        },
                        s = new Image();
                    (s.onload = () => {
                        s.width && s.height ? t(s) : r("Image lacks height or width", a.NO_DIMENSIONS);
                    }),
                        (s.onerror = () => {
                            r("Error loading image", a.LOAD_FAILED);
                        }),
                        (s.src = e);
                });
            }
            function s(e) {
                return new Promise((t, i) => {
                    const r = (e, t) => {
                            const r = new n.Z(e, t, a.type);
                            i(r);
                        },
                        s = new Image();
                    s.setAttribute("crossorigin", "anonymous"),
                        (s.onload = () => {
                            if (s.width && s.height) {
                                const e = document.createElement("canvas"),
                                    i = e.getContext("2d");
                                (e.width = s.width),
                                    (e.height = s.height),
                                    i.drawImage(s, 0, 0),
                                    e.toBlob((e) => {
                                        if (e) {
                                            const i = new File([e], "file.jpg", { type: "image/jpeg" });
                                            t(i);
                                        } else r("Failed to convert image to blob", a.LOAD_FAILED);
                                    }, "image/jpeg");
                            } else r("Image lacks height or width", a.NO_DIMENSIONS);
                        }),
                        (s.onerror = () => {
                            r("Error loading image", a.LOAD_FAILED);
                        }),
                        (s.src = e);
                });
            }
        },
        514354: (e, t, i) => {
            i.d(t, { Q: () => o, S: () => l });
            var n = i(332775),
                a = i.n(n),
                r = i(276259),
                s = i(549755);
            const l = { ERROR_READING_IMAGE_FILE: 0, HASHING_ABORTED: 1, INVALID_HASH: 2 },
                o = (e, t) =>
                    (0, r.qp)(e, t)
                        .catch((e) => {
                            throw new s.Z(`An error occurred while reading the image file: ${e}`, e.message === r.ZF ? l.HASHING_ABORTED : l.ERROR_READING_IMAGE_FILE);
                        })
                        .then((e) => {
                            const t = a()(e);
                            if (t && "string" == typeof t) return t;
                            throw new s.Z("Hash is not a non-empty string", l.INVALID_HASH);
                        });
        },
        653843: (e, t, i) => {
            i.d(t, { Y7: () => m, ZP: () => S, m2: () => w });
            var n = i(19697),
                a = i(790187),
                r = i(549755),
                s = i(205074),
                l = i(276259);
            function o(e, { maxDimension: t, maxFileSize: i, targetQuality: n }) {
                return (function (e, t, i, n) {
                    function a(r, s) {
                        return d(e, e.width, e.height, r, s).then((e) => {
                            const o = e.width > i || e.height > i,
                                d = e.toDataURL("image/jpeg", n),
                                c = d.split(";base64,")[1],
                                u = (0, l.ku)(c);
                            if (o || u > t) {
                                let e = 0.8;
                                return o && (e = r > s ? i / r : i / s), a(r * e, s * e);
                            }
                            return d;
                        });
                    }
                    return a(e.width, e.height);
                })(e, i, t, n).then(l.Lw);
            }
            function d(e, t, i, a, r) {
                const s = t / 2,
                    l = i / 2;
                return e instanceof HTMLCanvasElement && t <= a && i <= r ? Promise.resolve(e) : s <= a && l <= r ? (0, n.$i)(e, a, r) : (0, n.$i)(e, s, l).then((e) => d(e, e.width, e.height, a, r));
            }
            const c = 5242880,
                u = 4096,
                h = 0.85,
                m = { GIF_IS_TOO_LARGE: 1, CANNOT_BE_PROCESSED: 2, FILE_IS_NOT_AN_IMAGE: 3 },
                p = (e) => e.orientation !== a.Z.TOP_LEFT && e.orientation !== a.Z.UNKNOWN,
                g = (e, t = c, i = u) => {
                    const { height: n, size: a, width: r } = e;
                    return r > i || n > i || a > t;
                },
                y = (e, t) => t || { top: 0, left: 0, width: e.width, height: e.height },
                f = (e, t) => {
                    const { height: i, left: n, top: a, width: r } = y(e, t);
                    return !(0 === a && 0 === n && r === e.width && i === e.height);
                };
            function w(e, t) {
                const { maxFileSize: i = c, maxDimension: n = u, cropData: a, jpgPixelsPerByteForResize: r } = t || {},
                    s = "image/jpeg" === e.type,
                    l = (e.width * e.height) / e.size;
                return p(e) || g(e, i, n) || f(e, a) || (s && !!r && l < r);
            }
            const _ = (e, t) => {
                    const { height: i, width: n } = e;
                    return n <= t && i <= t ? { width: n, height: i } : n > i ? { width: t, height: Math.round(i / (n / t)) } : { width: Math.round(n / (i / t)), height: t };
                },
                E = (e) => ("function" == typeof e.decode ? e.decode() : Promise.resolve());
            function S(e, t) {
                const { maxFileSize: i = c, maxDimension: a = u, targetQuality: l = h, cropData: d } = t || {},
                    p = y(e, d);
                if (!w(e, t)) return Promise.resolve(e.fileHandle);
                if (!(0, s.DS)(e)) {
                    const e = new r.Z("The provided file is not a valid image", m.FILE_IS_NOT_AN_IMAGE);
                    return Promise.reject(e);
                }
                if (e.isGif) {
                    const e = new r.Z("Gifs cannot be processed.", m.GIF_IS_TOO_LARGE);
                    return Promise.reject(e);
                }
                const g = (e) => o(e, { maxFileSize: i, maxDimension: a, targetQuality: l });
                return e
                    .withDimensionsAndOrientation()
                    .then(({ img: e, orientation: t }) => {
                        const i = ({ height: i, width: a }) => (0, n.$i)(e, a, i, t, p);
                        return E(e)
                            .then(() => ((e) => e(_(p, a)))(i))
                            .then(g);
                    })
                    .catch(() => {
                        const e = new r.Z("Image cannot be processed", m.CANNOT_BE_PROCESSED);
                        return Promise.reject(e);
                    });
            }
        },
        465233: (e, t, i) => {
            i.d(t, { Z: () => a });
            var n = i(716406);
            function a(e) {
                return "object" != typeof e || null === e ? e : Array.isArray(e) ? e.map(a) : (0, n.Z)(e, (e) => a(e));
            }
        },
        417144: (e, t, i) => {
            function n(e, t = 1) {
                let i = t;
                const n = new Map();
                let a = 0,
                    r = 0,
                    s = 0,
                    l = null;
                function o() {
                    n.clear(), (a = 0), (r = 0), (s = 0);
                }
                return {
                    uploadStart: function (e, t) {
                        n.set(e, { time: Date.now(), bytes: t }), r || (r = Date.now());
                    },
                    uploadFinish: function (d, c) {
                        const u = n.get(d);
                        u &&
                            ((a += c - u.bytes),
                            n.delete(d),
                            ++s === i &&
                                (function () {
                                    if (!r) return;
                                    const n = Date.now() - r;
                                    if (n <= 0) return;
                                    if (1 !== t) return;
                                    const s = a / n;
                                    if (s < 5e3 && 1 === i) return;
                                    !l || l.byterate < s ? ((i += 1), e(), (l = { byterate: s, poolSize: i })) : ((i -= 2), (i = Math.max(i, 1)), (l = null));
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
            i.d(t, { Z: () => c, d: () => w });
            i(543673), i(240753), i(128399);
            function a(e) {
                const t = new URLSearchParams();
                for (const i of Object.keys(e)) {
                    const n = e[i];
                    n && t.set(i, n);
                }
                return `&${String(t)}`;
            }
            function r(e, t = l, i = s) {
                const n = Math.max(e, t);
                return Math.min(n, i);
            }
            const s = 5242880,
                l = 65536,
                o = 2e3,
                d = 1e4;
            class c {
                constructor(e, t = S) {
                    var i;
                    (this.timeoutIdMap = {}), (this.mediaId = ""), (this.mediaKey = ""), (this.fileHandle = e), (this.inflightSegments = new Map()), (this.totalBytes = e ? e.size : 0), (this.mediaType = e ? e.type : void 0), (this.initStartTime = new Date()), (this.sruHeaders = t.sruHeaders || {}), (this.uploadUrl = t.uploadUrl || p), (this.retainMediaForever = !!t.retainMediaForever), (this.sruParameterOverrides = t.sruParameterOverrides), (this.minSegmentBytes = this.sruParameterOverrides?.minSegmentBytes || ((i = this.totalBytes), r(Math.ceil(i / d)))), this._clearState();
                }
                upload(e) {
                    ((this.hasAttemptedFinalize && (this.uploadOptions.trimRanges !== e.trimRanges || this.uploadOptions.extraFinalizeParams !== e.extraFinalizeParams)) || this.uploadOptions.extraInitParams !== e.extraInitParams) && this._clearState(),
                        (this.uploadOptions = e),
                        this.state !== E.SUCCEEDED && this.state !== E.PENDING && ((this.state = E.PENDING), this.hasAttemptedFinalize ? this._postFinalize() : this.mediaId ? this._startNextAppendSegment() : this._postInit()),
                        (this._bitrateMonitor = e.withMultiRequests
                            ? n(() => {
                                  this._startNextAppendSegment();
                              }, e.withMultiRequestsDefaultPoolSize)
                            : void 0),
                        this._notifyResult(),
                        this._notifyProgress(this._uploadProgress());
                }
                cancel() {
                    "function" == typeof this.uploadOptions.error && this.uploadOptions.error({ code: w.CANCELED }), this._clearState();
                }
                pollStatusOfExistingMediaId(e, t) {
                    (this.mediaId = e), (this.uploadOptions = t || S), (this.state = E.PENDING), this._getStatus();
                }
                _clearState() {
                    for (const e of Object.keys(this.timeoutIdMap)) clearTimeout(this.timeoutIdMap[e]), delete this.timeoutIdMap[e];
                    (this.state = E.RESET),
                        (this.mediaId = ""),
                        (this.mediaKey = ""),
                        (this.uploadOptions = S),
                        (this.nextSegmentBytes =
                            this.sruParameterOverrides?.minSegmentBytes ||
                            (function () {
                                const e = window.navigator.connection;
                                if (e) {
                                    const t = e.type || e.effectiveType;
                                    if (e.downlink) return r(((1e3 * e.downlink) / 8 / 2) * o);
                                    if ("wifi" === t) return r(5 * l);
                                }
                                return r(2 * l);
                            })()),
                        (this.segmentIndex = 0),
                        (this.totalUploadDuration = 0),
                        (this.uploadedBytes = 0),
                        (this.hasAttemptedFinalize = !1),
                        this.inflightSegments.forEach(({ request: e }) => e.abort()),
                        (this.inflightSegments = new Map()),
                        this._bitrateMonitor?.reset();
                }
                uploadExternalMedia(e, t, i, n = S) {
                    (this.uploadOptions = n), (this.state = E.PENDING), (this.progressMode = "uploading");
                    let r = a({ source_url: e, media_type: t, media_category: i });
                    (r += this.uploadOptions.extraInitParams || ""), (r += this.uploadOptions.extraFinalizeParams || "");
                    this._sendXhr(
                        "POST",
                        "INIT",
                        r,
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
                        let i = a(e);
                        this.uploadOptions.extraInitParams && (i += this.uploadOptions.extraInitParams),
                            this._sendXhr(
                                "POST",
                                "INIT",
                                i,
                                (...e) => this._initSuccess(...e),
                                (...e) => this._uploadError(...e),
                                h,
                            );
                    } else this._uploadError({ code: w.ZERO_FILE_LENGTH });
                }
                _initSuccess(e) {
                    this.state === E.PENDING && ((this.mediaId = e.media_id_string), (this.mediaKey = e.media_key), this._setSessionTimeout(e.expires_after_secs), this._bitrateMonitor ? this._bitrateMonitor.start() : this._startNextAppendSegment());
                }
                _setSessionTimeout(e) {
                    if ((this.timeoutIdMap.session && (clearTimeout(this.timeoutIdMap.session), delete this.timeoutIdMap.session), e)) {
                        const t = Math.min(u, 1e3 * e);
                        this.timeoutIdMap.session = setTimeout(() => {
                            this._uploadError({ code: w.TIMEOUT }), this._stats("NONE", "timeout"), this._clearState();
                        }, t);
                    }
                }
                _startNextAppendSegment() {
                    if (this.hasAttemptedFinalize || this.inflightSegments.size >= (this._bitrateMonitor?.getPoolSize() ?? g)) return;
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
                    const r = this.segmentIndex;
                    this.segmentIndex += 1;
                    const s = a({ media_id: this.mediaId, segment_index: String(r) }),
                        l = this._sendXhr(
                            "POST",
                            "APPEND",
                            s,
                            () => {
                                if (this.state === E.PENDING) {
                                    const e = this.inflightSegments.get(r);
                                    e && (this.inflightSegments.delete(r), (this.uploadedBytes += e.bytes)), this._notifyProgress(this._uploadProgress(), this.mediaId), 0 === this.inflightSegments.size && this._startNextAppendSegment();
                                }
                            },
                            (...e) => this._uploadError(...e),
                            5,
                            n,
                            () => this._startNextAppendSegment(),
                            i,
                        );
                    this.inflightSegments.set(r, { bytes: i, request: l });
                }
                _postFinalize() {
                    if (this.uploadOptions.pauseBeforeFinalize) (this.state = E.PAUSED), this.uploadOptions.pause && this.uploadOptions.pause();
                    else {
                        this.hasAttemptedFinalize = !0;
                        const e = { media_id: this.mediaId };
                        this.uploadOptions.trimRanges && (e.trim_ranges = this.uploadOptions.trimRanges), this.mediaType && /^video\//.test(this.mediaType) && (e.allow_async = String(!0)), this.retainMediaForever && (e.ttl = "infinite");
                        let t = a(e);
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
                            return (i = e?.code ? _[String(e.code)] : w.INTERNAL_ERROR), void this._uploadError({ ...e, code: i });
                        }
                        default:
                            return void this._uploadError();
                    }
                    this._notifyProgress(i, this.mediaId, this.mediaKey);
                    const n = t.check_after_secs || 10;
                    setTimeout((...e) => this._getStatus(...e), 1e3 * n);
                }
                _getStatus() {
                    if (this.state === E.PENDING) {
                        const e = a({ media_id: this.mediaId });
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
                    this.state === E.PENDING && ((this.state = E.SUCCEEDED), this._notifyResult());
                }
                _uploadError(e) {
                    if (this.state !== E.PENDING) return;
                    const t = e.error?.match(/{ "message": "maxFileSizeExceeded", "maxFileSizeBytes": \d+ }/);
                    if (t) {
                        const e = JSON.parse(t[0]);
                        this.error = { code: w.FILE_TOO_LARGE, message: e.message, maxSizeBytes: e.maxFileSizeBytes };
                    } else e && e.code ? (this.error = e) : (this.error = { code: w.INTERNAL_ERROR, message: e?.error });
                    (this.state = E.FAILED), this._notifyResult();
                }
                _uploadProgress() {
                    if (this.totalBytes) {
                        return 100 * (this.uploadedBytes / this.totalBytes);
                    }
                    return 0;
                }
                _notifyProgress(e, t, i) {
                    this.state !== E.FAILED && this.uploadOptions.progress && this.uploadOptions.progress(e, this.progressMode, t, i);
                }
                _notifyResult() {
                    this.state === E.SUCCEEDED && this.uploadOptions.success && this.uploadOptions.success(this.mediaId, this.mediaKey), this.state === E.FAILED && this.uploadOptions.error && this.uploadOptions.error(this.error);
                }
                _stats(e, t, i = {}) {
                    const n = i.requestStartTime || this.initStartTime,
                        a = new Date().getTime() - n.getTime();
                    if (((this.totalUploadDuration += a), this.uploadOptions.stats)) {
                        const n = { mediaType: this.mediaType || "", command: e, status: t, duration: a, totalByteSize: this.totalBytes, totalDuration: this.totalUploadDuration };
                        i.segmentBytes && (n.appendByteSize = i.segmentBytes), this.uploadOptions.stats(n);
                    }
                }
                _sendXhr(e, t, i, n, a, s, l, d, c = 0) {
                    const u = `${this.uploadUrl}?command=${t}${i}`;
                    let h = !1;
                    const p = new Date(),
                        g = (r) => {
                            if (s) {
                                const r = [u, s].join("-");
                                this.timeoutIdMap[r] = setTimeout(() => {
                                    this._sendXhr(e, t, i, n, a, s - 1, l, d, c);
                                }, f);
                            } else _(r);
                        },
                        _ = (e) => {
                            this._stats(t, e || "unknown-error", { requestStartTime: p, segmentBytes: c }), "function" == typeof a && a(T(E) || { code: w.INVALID_RES_STATUS, mediaId: this.mediaId });
                        },
                        E = new XMLHttpRequest();
                    E.open(e, u, !0),
                        (E.withCredentials = !0),
                        (E.timeout = this.sruParameterOverrides?.clientsideSruUploadTimeoutMs || m),
                        (E.onload = () => {
                            if (E.status >= 200 && E.status < 400) {
                                const e = T(E);
                                204 === E.status || e ? (this._stats(t, "success", { requestStartTime: p, segmentBytes: c }), n(e || {}), !h && d && d()) : g("parsererror");
                            } else E.status && 503 !== E.status ? _("invalid-response") : g("503");
                        }),
                        (E.onerror = () => g("error")),
                        (E.ontimeout = () => {
                            (this.nextSegmentBytes = this.minSegmentBytes), g("timeout");
                        });
                    let S = !1;
                    E.upload.onprogress = (e) => {
                        S ? e.loaded === e.total && this._bitrateMonitor?.uploadFinish(u, e.total) : ((S = !0), this._bitrateMonitor?.uploadStart(u, e.loaded));
                        const t = e.loaded,
                            i = ((this.uploadedBytes + t) / this.totalBytes) * 100;
                        if ((this._notifyProgress(i, this.mediaId), t / e.total > y && !h && ((h = !0), l))) {
                            const e = Math.max(1, new Date().getTime() - p.getTime()),
                                i = this.minSegmentBytes,
                                n = this.sruParameterOverrides?.maxSegmentBytes;
                            (this.nextSegmentBytes = (function (e) {
                                const t = e.idealUploadTimeMs || o,
                                    i = e.sentBytes / e.uploadTimeMs;
                                return r(Math.round(t * i), e.minSegmentBytes, e.maxSegmentBytes);
                            })({ minSegmentBytes: i, sentBytes: t, uploadTimeMs: e, maxSegmentBytes: n, idealUploadTimeMs: this.sruParameterOverrides?.idealUploadTimeMs })),
                                "function" == typeof d && d();
                        }
                    };
                    for (const e in this.sruHeaders) E.setRequestHeader(e, this.sruHeaders[e]);
                    return l ? E.send(l) : E.send(), E;
                }
            }
            const u = 2147483647,
                h = 1,
                m = 45e3,
                p = (window.location.host.includes("twitter.com") ? "https://upload.twitter.com" : "https://upload.x.com") + "/i/media/upload.json",
                g = 2,
                y = 0.95,
                f = 1e3,
                w = Object.freeze({ FILE_TOO_LARGE: 2, INTERNAL_ERROR: 131, INVALID_MEDIA: 1, RATE_LIMIT: 88, TIMEOUT: 67, UNSUPPORTED_MEDIA: 3, ZERO_FILE_LENGTH: 4, CANCELED: 999, INVALID_RES_STATUS: -1 }),
                _ = Object.freeze({ 0: w.INTERNAL_ERROR, 1: w.INVALID_MEDIA, 2: w.FILE_TOO_LARGE, 3: w.UNSUPPORTED_MEDIA, 4: w.TIMEOUT }),
                E = Object.freeze({ RESET: 0, PENDING: 1, PAUSED: 2, SUCCEEDED: 3, FAILED: 4 }),
                S = {};
            function T(e) {
                try {
                    return JSON.parse(e.responseText);
                } catch (e) {
                    return null;
                }
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.SideNav~loader.SideNavRedesign-6107ac1a.378878aa.js.map
