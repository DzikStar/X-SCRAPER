"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.SideNav~loader.SideNavRedesign-6107ac1a", "icons/IconFollowArrows-js", "loader.directMessagesData-6107ac1a"],
    {
        326439: (e, t, i) => {
            i.d(t, { Z: () => d });
            var n,
                a,
                s,
                r,
                l,
                o = {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "SensitiveMediaSettingsQuery", selections: [{ alias: "viewer", args: (n = [{ kind: "Literal", name: "s", value: "cd25" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [(a = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }), { kind: "InlineFragment", selections: [(s = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }), { alias: null, args: null, concreteType: "UserSensitiveMediaSettingsInfo", kind: "LinkedField", name: "sensitive_media_settings", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "SensitiveMediaOptions_userSensitiveMediaSettingsInfo" }, (r = { alias: null, args: null, kind: "ScalarField", name: "can_user_allow_sensitive_content", storageKey: null })], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"cd25")' }], type: "Query", abstractKey: null },
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
                                                            s,
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
                s,
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
                                                    (s = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
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
                    operation: { argumentDefinitions: [], kind: "Operation", name: "fetchDownloadSettingAllowedQuery", selections: [n, { alias: "viewer", args: a, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [s, { kind: "InlineFragment", selections: [r, (l = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, l], storageKey: null }], storageKey: 'viewer_v2(s:"4721")' }] },
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
                s = i(392237),
                r = i(823161);
            const l = (e) => {
                    const { borderColor: t = "cellBackground", borderWidth: i = "small", style: l, userAvatarSize: d = "medium", userAvatarUrls: c, withIncreasedSpacing: u } = e,
                        h = c.length,
                        m = "transparent" === t;
                    return n.createElement(
                        a.Z,
                        { style: [o.root, l, { height: r.default.getSizeStyle(d)?.height }] },
                        c.map((e, a) => n.createElement(r.default, { backgroundColor: t, borderColor: t, borderWidth: m ? "none" : i, key: a, size: d, style: [0 !== a && { marginStart: -1 * s.default.theme.spacesPx[u ? "space4" : "space12"] }, { zIndex: h - a }], uri: e })),
                    );
                },
                o = s.default.create((e) => ({ root: { flexDirection: "row", flexShrink: 0, overflow: "hidden", flexWrap: "wrap", justifyContent: "center" } }));
        },
        215337: (e, t, i) => {
            i.d(t, { Z: () => r });
            var n = i(202784),
                a = i(325686);
            class s extends n.Component {
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
                    const { angle: e, angleUnit: t, children: i, style: s } = this.props;
                    return n.createElement(a.Z, { style: [s, { backgroundImage: `linear-gradient(${e}${t},${this.getColors()})` }] }, i);
                }
            }
            s.defaultProps = { angle: 180, angleUnit: "deg", locations: [] };
            const r = s;
        },
        378729: (e, t, i) => {
            i.d(t, { Z: () => y });
            var n = i(202784),
                a = i(325686),
                s = i(111677),
                r = i.n(s),
                l = i(283379),
                o = i(731708),
                d = i(392237);
            const c = r().f1a1b791,
                u = r().if2bf8b4,
                h = r().f3624b5c,
                m = r().b4b3b113,
                p = r().be222050,
                g = r().hcbbe447;
            class y extends n.Component {
                render() {
                    const { color: e, id: t, style: i } = this.props;
                    return n.createElement(a.Z, { style: [f.root, i] }, n.createElement(l.default, { style: [f.icon, e && f[e]] }), n.createElement(o.ZP, { color: e, id: t, size: "subtext2" }, this._getPromotedLabel()));
                }
                _getPromotedLabel() {
                    const { contentAuthorId: e, label: t, promotedContent: i } = this.props,
                        { adMetadataContainer: n, advertiser: a, advertiser_name: s, disclosure_type: r } = i,
                        l = e && a && e === a.id_str,
                        o = "string" == typeof r && "political" === r.toLowerCase(),
                        d = "string" == typeof r && "issue" === r.toLowerCase(),
                        y = !(!n || "POLITICAL" !== n.disclaimerType) || o,
                        f = !(!n || "ISSUE" !== n.disclaimerType) || d,
                        { removePromotedAttributionForPreroll: w } = n || {};
                    let _;
                    return (_ = t || (!s || l || w ? (y ? h : f ? p : u) : y ? m({ fullName: s }) : f ? g({ fullName: s }) : c({ fullName: s }))), _;
                }
            }
            y.defaultProps = { color: "gray700" };
            const f = d.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row" }, icon: { color: e.colors.gray700, height: "1em", marginEnd: e.spaces.space4, flexShrink: 0 }, gray700: { color: e.colors.gray700 }, white: { color: e.colors.white } }));
        },
        537439: (e, t, i) => {
            i.d(t, { Z: () => B });
            var n = i(202784),
                a = i(111677),
                s = i.n(a),
                r = i(492140),
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
                b = i(246492),
                T = i(520913),
                F = i(731708),
                v = i(642153),
                I = i(879891),
                k = i(392237),
                x = i(54606);
            const O = s().ae408b76,
                L = s().j355f008,
                R = s().habf9678,
                P = s().db0798ed,
                C = s().dc716ec9,
                D = ({ text: e }) => {
                    const { direction: t } = (0, I.Z)();
                    return n.createElement(F.ZP, { dir: t, withHashflags: !0 }, e);
                },
                A = (e, t) =>
                    t
                        ? O
                        : ((e) => {
                              const t = n.createElement(D, { text: e });
                              return n.createElement(s().I18NFormatMessage, { $i18n: "fcd931ed" }, t);
                          })(e),
                M = k.default.create((e) => ({ small: { height: e.lineHeights.subtext3, width: e.lineHeights.subtext3 }, medium: { height: e.spaces.space48, width: e.spaces.space48 }, large: { height: e.lineHeights.subtext2, width: e.lineHeights.subtext2 }, xLarge: { height: e.lineHeights.subtext1, width: e.lineHeights.subtext1 }, xxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 }, xxxLarge: { height: e.lineHeights.headline1, width: e.lineHeights.headline1 } })),
                N = k.default.create((e) => ({ circle: { color: e.colors.primary, width: "0.5em" }, colorDeepGray: { color: e.colors.gray700 }, colorBlue: { color: e.colors.blue500 }, colorGreen: { color: e.colors.green500 }, colorOrange: { color: e.colors.orange500 }, colorPrimary: { color: e.colors.primary }, colorRed: { color: e.colors.magenta500 }, grayscaleImage: { borderRadius: e.borderRadii.infinite, filter: "grayscale(100%)" }, brandColor: { color: e.colors.brandColor } })),
                B = ({ contextType: e, iconColor: t, iconSize: i, link: a, retweetData: s, text: F, topicData: I, userAvatarUrls: O }) => {
                    const { isSelfRetweet: B, name: K, screenName: U } = s || {},
                        Z = ((e, t, i, a = []) => {
                            const s = M[t],
                                F = [i ? { color: k.default.theme.colors[i] } : N.colorDeepGray, s],
                                I = n.createElement(r.default, { style: F }),
                                O = n.createElement(l.default, { style: F }),
                                L = n.createElement(o.default, { style: F }),
                                R = n.createElement(d.default, { style: F }),
                                P = n.createElement(c.default, { style: F }),
                                C = n.createElement(u.default, { style: N.circle }),
                                D = n.createElement(h.default, { style: F }),
                                A = n.createElement(m.default, { style: F }),
                                B = n.createElement(p.default, { style: F }),
                                K = n.createElement(g.default, { style: F }),
                                U = n.createElement(y.default, { style: F }),
                                Z = n.createElement(f.default, { style: F }),
                                z = n.createElement(w.default, { style: F }),
                                H = n.createElement(_.default, { style: F }),
                                G = n.createElement(E.default, { style: F }),
                                Q = n.createElement(S.default, { style: F }),
                                j = n.createElement(b.default, { style: F }),
                                W = n.createElement(v.Z, { borderColor: "cellBackground", userAvatarSize: t, userAvatarUrls: a }),
                                V = n.createElement(T.default, { style: F });
                            switch (e) {
                                case x.Q.Pin:
                                case x.Q.ReplyPin:
                                    return I;
                                case x.Q.Retweet:
                                    return O;
                                case x.Q.Like:
                                    return L;
                                case x.Q.Follow:
                                    return R;
                                case x.Q.Moment:
                                    return P;
                                case x.Q.NewTweets:
                                    return C;
                                case x.Q.Reply:
                                case x.Q.Conversation:
                                    return D;
                                case x.Q.Feedback:
                                    return A;
                                case x.Q.Topic:
                                    return B;
                                case x.Q.List:
                                    return K;
                                case x.Q.Location:
                                    return U;
                                case x.Q.Community:
                                    return Z;
                                case x.Q.Spaces:
                                    return z;
                                case x.Q.Sparkle:
                                    return H;
                                case x.Q.SocialProof:
                                case x.Q.FollowFollowed:
                                    return j;
                                case x.Q.FollowMutual:
                                    return Q;
                                case x.Q.FollowFollowing:
                                    return G;
                                case x.Q.Facepile:
                                    return W;
                                case x.Q.Bird:
                                    return V;
                                case x.Q.TextOnly:
                                default:
                                    return null;
                            }
                        })(e, i, t, O);
                    switch (e) {
                        case x.Q.Retweet:
                            return { Icon: Z, text: F || A(K, B), link: U ? `https://twitter.com/${U}` : void 0 };
                        case x.Q.Pin:
                            return { Icon: Z, text: F || L };
                        case x.Q.ReplyPin:
                            return { Icon: Z, text: R };
                        case x.Q.Topic:
                            return { Icon: Z, "aria-label": "Recommendation" === I?.functionalityType || "RecWithEducation" === I?.functionalityType ? C({ topicName: F }) : P({ topicName: F }), text: F ? n.createElement(D, { text: F }) : null, link: a };
                        default:
                            return { Icon: Z, text: F ? n.createElement(D, { text: F }) : null, link: a };
                    }
                };
        },
        126962: (e, t, i) => {
            i.d(t, { Z: () => g });
            i(136728);
            var n = i(202784),
                a = i(325686),
                s = i(731708),
                r = i(872405),
                l = i(235902),
                o = i(392237),
                d = i(139052),
                c = i(488684),
                u = i(537439),
                h = i(54606);
            class m extends n.PureComponent {
                render() {
                    const { avatarSize: e, bottomControl: t, iconStyle: i, id: o, onLayout: d, rightControl: c, style: h, testID: m, textColor: g, textSize: y, topControl: f, weight: w, withBottomBorder: _, withLeftPadding: E, withTextCentered: S, ...b } = this.props,
                        { Icon: T, "aria-label": F, link: v, text: I } = (0, u.Z)(b),
                        k = n.createElement(s.ZP, { "aria-label": F, color: g, id: o, numberOfLines: 2, size: y, testID: m, weight: w, withoutTwemojiAndHashflags: !0 }, I),
                        { cellStyle: x, viewStyle: O } = this._getStyles();
                    return I ? n.createElement(l.ZP.UseProps, null, (s) => n.createElement(n.Fragment, null, f || null, n.createElement(a.Z, { onLayout: d, style: [h, O, s.socialContextRefreshEnabled() && !E && p.socialContextRefresh] }, n.createElement(r.Z, { avatarCell: T || (E ? null : void 0), avatarCellStyle: [i, p.socialContextIconColumn, !E && p.unsetIconWidth, s.socialContextRefreshEnabled() && !E && p.socialContextRefreshIcon], avatarSize: e, cellStyle: x }, n.createElement(a.Z, { style: p.cellWrapper }, n.createElement(a.Z, { style: [p.socialContextTextColumn, s.socialContextRefreshEnabled() && !E && p.socialContextRefreshTextColumn] }, v ? this._renderLink(v, k) : k), c || null)), t || null))) : null;
                }
                _renderLink(e, t) {
                    const { contextType: i, id: a, onClick: r, retweetData: l, textColor: o, topicData: u } = this.props,
                        { screenName: m } = l || {},
                        p = n.createElement(s.ZP, { color: o, id: a, link: e, onClick: r, withoutTwemojiAndHashflags: !0 }, t);
                    return i === h.Q.Topic && u ? n.createElement(d.Z, { topicId: u.topicId }, p) : i === h.Q.Retweet && m ? n.createElement(c.Z, { screenName: m }, p) : p;
                }
                _getStyles() {
                    const { bottomControl: e, contextType: t, withBottomBorder: i, withTextCentered: n } = this.props,
                        a = t === h.Q.TextOnly,
                        s = i ? [p.bottomBorderMargin, !!e && p.bottomBorder] : [],
                        r = i && !e ? [p.bottomBorder] : [];
                    return a && r.push(p.topicContext), n && r.push(p.socialContextTextCentered), { viewStyle: s, cellStyle: r };
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
                s = i(325686),
                r = i(215337),
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
                            r.Z,
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
                            s.Z,
                            { style: [c.container, e.style] },
                            a.createElement(
                                r.Z,
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
                s = i(295559),
                r = i(392237);
            function l(e = "audiospace") {
                return r.default.theme.highContrastEnabled ? h(u.HighContrast[e]) : h(u.Default[e]);
            }
            function o(e = "audiospace") {
                return r.default.theme.highContrastEnabled ? u.HighContrast[e] : u.Default[e];
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
                const t = s.xO(e),
                    i = a.$n({ color: t, coefficient: 0.5 });
                return s.vq(s.rb(i)).slice(0, -2);
            }
        },
        433460: (e, t, i) => {
            i.d(t, { Z: () => p });
            var n = i(807896),
                a = i(202784),
                s = i(325686),
                r = i(111677),
                l = i.n(r),
                o = i(404971),
                d = i(868634),
                c = i(336373),
                u = i(181054),
                h = i(392237),
                m = i(823161);
            const p = function (e) {
                const t = c.Z.useAnalytics(),
                    [i, s] = a.useState(),
                    r = !!(i && i > 70),
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
                                t.width !== i && s(t.width);
                            }
                        },
                        borderWidth: r ? "large" : "medium",
                        decoration: a.createElement(g, { isWide: r, type: o }),
                        gapWidth: r ? "space4" : "space2",
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
                return "livevideo" === e.type ? a.createElement(d.ZP, { fontSize: e.isWide ? "subtext2" : "subtext3", style: [f.liveVideoLabelContainer, f.borderNarrow, e.isWide ? f.liveVideoLabel : f.liveVideoLabelNarrow], type: "live" }) : a.createElement(s.Z, { style: [f.root, e.isWide ? f.rootWide : f.rootNarrow] }, a.createElement(u.Z.Default, { style: [f.spaceGradient, e.isWide ? f.borderWide : f.borderNarrow] }, a.createElement(o.default, { style: f.spaceIcon })));
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
                s = i(354149),
                r = i(310452),
                l = i(720283);
            const o = ({ animateIn: e, description: t, entities: i, isConcise: o, style: d, testID: c, userId: u, withheldDescription: h, withheldEntities: m }) => {
                const { description: p, entities: g } = (0, l.H)({ description: t, entities: i, withheldDescription: h, withheldEntities: m }),
                    y = r.ZP.descriptionTextParts(p, g);
                return y.length
                    ? n.createElement(
                          a.ZP,
                          { dir: "auto", numberOfLines: o ? 2 : void 0, style: d, testID: c },
                          y.map((t, i) => n.createElement(s.ZP, { animateIn: e, key: `user_${u}_textpart_${i}`, linkify: !0, part: t })),
                      )
                    : null;
            };
        },
        720283: (e, t, i) => {
            i.d(t, { H: () => n });
            const n = ({ description: e, entities: t, withheldDescription: i, withheldEntities: n }) => (i ? { description: i, entities: n } : { description: e, entities: t });
        },
        488746: (e, t, i) => {
            i.r(t), i.d(t, { default: () => o });
            var n = i(202784),
                a = i(890601),
                s = i(783427),
                r = i(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [r.Z.root, e.style], viewBox: "0 0 24 24", children: n.createElement("g", null, n.createElement("path", { d: "M15.96 1.54L21.41 7l-5.45 5.46-1.42-1.42L17.59 8H3V6h14.59l-3.05-3.04 1.42-1.42zM6.41 18l3.05 3.04-1.42 1.42L2.59 17l5.45-5.46 1.42 1.42L6.41 16H21v2H6.41z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const o = l;
        },
        19697: (e, t, i) => {
            i.d(t, { q8: () => d, $i: () => s });
            i(571372);
            var n = i(790187);
            const a = (e, t) => {
                const i = document.createElement("canvas");
                (i.width = e), (i.height = t);
                const n = i.getContext("2d");
                return (n.fillStyle = "#FFFFFF"), n.fillRect(0, 0, e, t), i;
            };
            function s(e, t, i, a, s) {
                return o(t, i).then(
                    (t) => (
                        (function (e, t, i, a, s, r) {
                            const l = r || { top: 0, left: 0, width: t.width, height: t.height };
                            let o = l.left,
                                d = l.top,
                                c = l.width,
                                u = l.height,
                                h = 0,
                                m = 0,
                                p = i,
                                g = a;
                            switch ((e.save(), s)) {
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
                        })(t.getContext("2d"), e, t.width, t.height, a, s),
                        t
                    ),
                );
            }
            const r = 3145728,
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
                            if (i > r) {
                                const i = c(r, e, t);
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
            i.d(t, { C: () => s, Z: () => n });
            i(694898), i(38857), i(540171), i(157093), i(265688), i(270315), i(592529), i(86943), i(691157);
            const n = Object.freeze({ UNKNOWN: 0, TOP_LEFT: 1, TOP_RIGHT: 2, BOTTOM_RIGHT: 3, BOTTOM_LEFT: 4, LEFT_TOP: 5, LEFT_BOTTOM: 6, RIGHT_BOTTOM: 7, RIGHT_TOP: 8 }),
                a = (e, t, i = 65536) => {
                    let n = new Uint8Array([]),
                        a = 0;
                    function s(s, r, l) {
                        const o = s - a,
                            d = o + r;
                        if (o >= 0 && d <= n.length) l(n.subarray(o, d), s);
                        else {
                            const o = new FileReader();
                            (o.onload = function () {
                                (n = new Uint8Array(this.result)), (a = s), l(n.subarray(0, r), s);
                            }),
                                (o.onerror = t.bind(null, 0)),
                                null !== e && o.readAsArrayBuffer(e.slice(s, s + Math.max(i, r)));
                        }
                    }
                    function r(e) {
                        const i = { "MM\0*": !0, "II*\0": !1 }[String.fromCharCode.apply(null, e.subarray(0, 4))];
                        if (void 0 === i) return void t(0);
                        function n(t, n) {
                            let a = 0;
                            for (let s = 0; s < n; s++) a = (a << 8) + e[t + (i ? s : n - 1 - s)];
                            return a;
                        }
                        const a = e.length > 8 && n(4, 4);
                        if (!a || a + 2 > e.length) return void t(0);
                        let s = n(a, 2);
                        if (a + 12 * s + 6 > e.length) return void t(0);
                        let r = a + 2;
                        for (; s > 0; ) {
                            if (((s -= 1), 274 === n(r, 2) && 3 === n(r + 2, 2) && 1 === n(r + 4, 4))) return void t(n(r + 8, 2));
                            r += 12;
                        }
                        t(0);
                    }
                    e instanceof Blob
                        ? s(0, 10, function e(i, n) {
                              const a = i[1];
                              if (i.length < 4 || 255 !== i[0] || 217 === a) return void t(0);
                              const l = a < 208 || a > 217 ? (i[2] << 8) + i[3] : 0;
                              225 === a && l > 8 && "Exif\0\0" === String.fromCharCode.apply(null, i.subarray(4, 10)) ? s(n + 10, l - 8, r) : s(n + 2 + l, 10, e);
                          })
                        : t(0);
                },
                s = (e, t) => {
                    const i = document.documentElement && "from-image" === getComputedStyle(document.documentElement).imageOrientation;
                    return new Promise((s) => {
                        i
                            ? s(n.TOP_LEFT)
                            : a(
                                  e,
                                  (e) => {
                                      s(e);
                                  },
                                  t,
                              );
                    });
                };
        },
        276259: (e, t, i) => {
            i.d(t, { Lw: () => a, Re: () => u, VJ: () => l, ZF: () => h, hv: () => o, ku: () => n, qp: () => s, uv: () => r, v5: () => c });
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
                                    s = a.length,
                                    r = Array(s);
                                for (let e = 0; e < s; e++) r[e] = a.charCodeAt(e);
                                t(new Blob([new Uint8Array(r)], { type: e }));
                            } else i(Error("The Uint8Array type is not available"));
                        else i(Error("The atob API is not available"));
                    else i(Error("The Blob API is not available"));
                });
            }
            const s = (e, t) =>
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
                    new Promise((n, a) => {
                        const s = new Image();
                        (s.onload = () => {
                            const e = document.createElement("canvas"),
                                a = e.getContext("2d"),
                                r = s.width * t,
                                l = s.height * t;
                            (e.width = r),
                                (e.height = l),
                                a.drawImage(s, 0, 0, r, l),
                                e.toBlob(
                                    (e) => {
                                        n(new File([e], "image.jpeg", { type: "image/jpeg" }));
                                    },
                                    "image/jpeg",
                                    i,
                                );
                        }),
                            (s.onerror = () => a(new Error("Failed to load image while resizing"))),
                            (s.src = URL.createObjectURL(e));
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
                s = i(122123);
            function r(e, t) {
                const i = (function (e) {
                        return [n.Z.LEFT_BOTTOM, n.Z.LEFT_TOP, n.Z.RIGHT_BOTTOM, n.Z.RIGHT_TOP].indexOf(e) >= 0;
                    })(t),
                    [a, s] = i ? [e.height, e.width] : [e.width, e.height];
                return { width: a, height: s };
            }
            const l = (e) => {
                const t = e instanceof o,
                    i = e.isImage || e.isGif,
                    n = e.orientation,
                    a = e.width && e.height,
                    s = e.img;
                return !!(t && i && n && a && s);
            };
            class o {
                constructor(e) {
                    (this.fileHandle = e), e instanceof File && (this.name = e.name), (this.size = e.size), (this.type = e.type), (this.url = window.URL.createObjectURL(this.fileHandle)), (this.isGif = this.type === a.Re), (this.isImage = a.v5.some((e) => e === this.type)), (this.isVideo = !1), (this.isSubtitles = !1);
                }
                withDimensionsAndOrientation() {
                    return this.isGif || this.isImage
                        ? (0, s.po)(this.url).then((e) => {
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
            i.d(t, { gK: () => a, o2: () => r, po: () => s });
            var n = i(549755);
            const a = { type: "image-load", NO_DIMENSIONS: 1, LOAD_FAILED: 2 };
            function s(e) {
                return new Promise((t, i) => {
                    const s = (e, t) => {
                            const s = new n.Z(e, t, a.type);
                            i(s);
                        },
                        r = new Image();
                    (r.onload = () => {
                        r.width && r.height ? t(r) : s("Image lacks height or width", a.NO_DIMENSIONS);
                    }),
                        (r.onerror = () => {
                            s("Error loading image", a.LOAD_FAILED);
                        }),
                        (r.src = e);
                });
            }
            function r(e) {
                return new Promise((t, i) => {
                    const s = (e, t) => {
                            const s = new n.Z(e, t, a.type);
                            i(s);
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
                                        } else s("Failed to convert image to blob", a.LOAD_FAILED);
                                    }, "image/jpeg");
                            } else s("Image lacks height or width", a.NO_DIMENSIONS);
                        }),
                        (r.onerror = () => {
                            s("Error loading image", a.LOAD_FAILED);
                        }),
                        (r.src = e);
                });
            }
        },
        514354: (e, t, i) => {
            i.d(t, { Q: () => o, S: () => l });
            var n = i(332775),
                a = i.n(n),
                s = i(276259),
                r = i(549755);
            const l = { ERROR_READING_IMAGE_FILE: 0, HASHING_ABORTED: 1, INVALID_HASH: 2 },
                o = (e, t) =>
                    (0, s.qp)(e, t)
                        .catch((e) => {
                            throw new r.Z(`An error occurred while reading the image file: ${e}`, e.message === s.ZF ? l.HASHING_ABORTED : l.ERROR_READING_IMAGE_FILE);
                        })
                        .then((e) => {
                            const t = a()(e);
                            if (t && "string" == typeof t) return t;
                            throw new r.Z("Hash is not a non-empty string", l.INVALID_HASH);
                        });
        },
        653843: (e, t, i) => {
            i.d(t, { Y7: () => m, ZP: () => S, m2: () => w });
            var n = i(19697),
                a = i(790187),
                s = i(549755),
                r = i(205074),
                l = i(276259);
            function o(e, { maxDimension: t, maxFileSize: i, targetQuality: n }) {
                return (function (e, t, i, n) {
                    function a(s, r) {
                        return d(e, e.width, e.height, s, r).then((e) => {
                            const o = e.width > i || e.height > i,
                                d = e.toDataURL("image/jpeg", n),
                                c = d.split(";base64,")[1],
                                u = (0, l.ku)(c);
                            if (o || u > t) {
                                let e = 0.8;
                                return o && (e = s > r ? i / s : i / r), a(s * e, r * e);
                            }
                            return d;
                        });
                    }
                    return a(e.width, e.height);
                })(e, i, t, n).then(l.Lw);
            }
            function d(e, t, i, a, s) {
                const r = t / 2,
                    l = i / 2;
                return e instanceof HTMLCanvasElement && t <= a && i <= s ? Promise.resolve(e) : r <= a && l <= s ? (0, n.$i)(e, a, s) : (0, n.$i)(e, r, l).then((e) => d(e, e.width, e.height, a, s));
            }
            const c = 5242880,
                u = 4096,
                h = 0.85,
                m = { GIF_IS_TOO_LARGE: 1, CANNOT_BE_PROCESSED: 2, FILE_IS_NOT_AN_IMAGE: 3 },
                p = (e) => e.orientation !== a.Z.TOP_LEFT && e.orientation !== a.Z.UNKNOWN,
                g = (e, t = c, i = u) => {
                    const { height: n, size: a, width: s } = e;
                    return s > i || n > i || a > t;
                },
                y = (e, t) => t || { top: 0, left: 0, width: e.width, height: e.height },
                f = (e, t) => {
                    const { height: i, left: n, top: a, width: s } = y(e, t);
                    return !(0 === a && 0 === n && s === e.width && i === e.height);
                };
            function w(e, t) {
                const { maxFileSize: i = c, maxDimension: n = u, cropData: a, jpgPixelsPerByteForResize: s } = t || {},
                    r = "image/jpeg" === e.type,
                    l = (e.width * e.height) / e.size;
                return p(e) || g(e, i, n) || f(e, a) || (r && !!s && l < s);
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
                if (!(0, r.DS)(e)) {
                    const e = new s.Z("The provided file is not a valid image", m.FILE_IS_NOT_AN_IMAGE);
                    return Promise.reject(e);
                }
                if (e.isGif) {
                    const e = new s.Z("Gifs cannot be processed.", m.GIF_IS_TOO_LARGE);
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
                        const e = new s.Z("Image cannot be processed", m.CANNOT_BE_PROCESSED);
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
                    s = 0,
                    r = 0,
                    l = null;
                function o() {
                    n.clear(), (a = 0), (s = 0), (r = 0);
                }
                return {
                    uploadStart: function (e, t) {
                        n.set(e, { time: Date.now(), bytes: t }), s || (s = Date.now());
                    },
                    uploadFinish: function (d, c) {
                        const u = n.get(d);
                        u &&
                            ((a += c - u.bytes),
                            n.delete(d),
                            ++r === i &&
                                (function () {
                                    if (!s) return;
                                    const n = Date.now() - s;
                                    if (n <= 0) return;
                                    if (1 !== t) return;
                                    const r = a / n;
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
            function s(e, t = l, i = r) {
                const n = Math.max(e, t);
                return Math.min(n, i);
            }
            const r = 5242880,
                l = 65536,
                o = 2e3,
                d = 1e4;
            class c {
                constructor(e, t = S) {
                    var i;
                    (this.timeoutIdMap = {}), (this.mediaId = ""), (this.mediaKey = ""), (this.fileHandle = e), (this.inflightSegments = new Map()), (this.totalBytes = e ? e.size : 0), (this.mediaType = e ? e.type : void 0), (this.initStartTime = new Date()), (this.sruHeaders = t.sruHeaders || {}), (this.uploadUrl = t.uploadUrl || p), (this.retainMediaForever = !!t.retainMediaForever), (this.sruParameterOverrides = t.sruParameterOverrides), (this.minSegmentBytes = this.sruParameterOverrides?.minSegmentBytes || ((i = this.totalBytes), s(Math.ceil(i / d)))), this._clearState();
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
                                    if (e.downlink) return s(((1e3 * e.downlink) / 8 / 2) * o);
                                    if ("wifi" === t) return s(5 * l);
                                }
                                return s(2 * l);
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
                    let s = a({ source_url: e, media_type: t, media_category: i });
                    (s += this.uploadOptions.extraInitParams || ""), (s += this.uploadOptions.extraFinalizeParams || "");
                    this._sendXhr(
                        "POST",
                        "INIT",
                        s,
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
                    const s = this.segmentIndex;
                    this.segmentIndex += 1;
                    const r = a({ media_id: this.mediaId, segment_index: String(s) }),
                        l = this._sendXhr(
                            "POST",
                            "APPEND",
                            r,
                            () => {
                                if (this.state === E.PENDING) {
                                    const e = this.inflightSegments.get(s);
                                    e && (this.inflightSegments.delete(s), (this.uploadedBytes += e.bytes)), this._notifyProgress(this._uploadProgress(), this.mediaId), 0 === this.inflightSegments.size && this._startNextAppendSegment();
                                }
                            },
                            (...e) => this._uploadError(...e),
                            5,
                            n,
                            () => this._startNextAppendSegment(),
                            i,
                        );
                    this.inflightSegments.set(s, { bytes: i, request: l });
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
                _sendXhr(e, t, i, n, a, r, l, d, c = 0) {
                    const u = `${this.uploadUrl}?command=${t}${i}`;
                    let h = !1;
                    const p = new Date(),
                        g = (s) => {
                            if (r) {
                                const s = [u, r].join("-");
                                this.timeoutIdMap[s] = setTimeout(() => {
                                    this._sendXhr(e, t, i, n, a, r - 1, l, d, c);
                                }, f);
                            } else _(s);
                        },
                        _ = (e) => {
                            this._stats(t, e || "unknown-error", { requestStartTime: p, segmentBytes: c }), "function" == typeof a && a(b(E) || { code: w.INVALID_RES_STATUS, mediaId: this.mediaId });
                        },
                        E = new XMLHttpRequest();
                    E.open(e, u, !0),
                        (E.withCredentials = !0),
                        (E.timeout = this.sruParameterOverrides?.clientsideSruUploadTimeoutMs || m),
                        (E.onload = () => {
                            if (E.status >= 200 && E.status < 400) {
                                const e = b(E);
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
                                return s(Math.round(t * i), e.minSegmentBytes, e.maxSegmentBytes);
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
            function b(e) {
                try {
                    return JSON.parse(e.responseText);
                } catch (e) {
                    return null;
                }
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.SideNav~loader.SideNavRedesign-6107ac1a.e54e6a7a.js.map
