"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.SettingsProfessionalProfileProfileSpotlight~bundle.UserProfile", "loader.FeedbackSheet"],
    {
        699418: (e, l, a) => {
            a.d(l, { Z: () => t });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "CommunitiesSpotlight_community",
                selections: [
                    { args: null, kind: "FragmentSpread", name: "CommunityFacePile_community" },
                    { args: null, kind: "FragmentSpread", name: "CommunityMemberCount_community" },
                    { args: null, kind: "FragmentSpread", name: "CommunityThumbnailImage_community" },
                    { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                ],
                type: "Community",
                abstractKey: null,
                hash: "34c0c514b034d1f809d48bbf5b8f1381",
            };
            const t = n;
        },
        444770: (e, l, a) => {
            a.d(l, { Z: () => t });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "CommunityFacePile_community",
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "UserResults",
                        kind: "LinkedField",
                        name: "members_facepile_results",
                        plural: !0,
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
                                    { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "UserAvatar", kind: "LinkedField", name: "avatar", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "image_url", storageKey: null }], storageKey: null }], type: "User", abstractKey: null },
                                ],
                                storageKey: null,
                            },
                        ],
                        storageKey: null,
                    },
                ],
                type: "Community",
                abstractKey: null,
                hash: "b057e8f1a7927932f33eae01360eeb54",
            };
            const t = n;
        },
        607566: (e, l, a) => {
            a.d(l, { Z: () => t });
            var n = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "CommunityMemberCount_community", selections: [{ alias: null, args: null, kind: "ScalarField", name: "member_count", storageKey: null }], type: "Community", abstractKey: null, hash: "793bedf8ae1b012c222a20424e8123bb" };
            const t = n;
        },
        903852: (e, l, a) => {
            a.d(l, { Z: () => t });
            var n = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "CommunityThumbnailImage_community", selections: [{ args: null, kind: "FragmentSpread", name: "useCommunityBannerImageThumbnail_community" }], type: "Community", abstractKey: null, hash: "d73ea82f88619cf536fb7bc460610274" };
            const t = n;
        },
        738666: (e, l, a) => {
            a.d(l, { Z: () => t });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "useCommunityBannerImageCustom_community",
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "ApiMedia",
                        kind: "LinkedField",
                        name: "custom_banner_media",
                        plural: !1,
                        selections: [
                            {
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "media_info",
                                plural: !1,
                                selections: [
                                    {
                                        kind: "InlineFragment",
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "MediaColorInfo",
                                                kind: "LinkedField",
                                                name: "color_info",
                                                plural: !1,
                                                selections: [
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "MediaColorPaletteItem",
                                                        kind: "LinkedField",
                                                        name: "palette",
                                                        plural: !0,
                                                        selections: [
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "MediaColor",
                                                                kind: "LinkedField",
                                                                name: "rgb",
                                                                plural: !1,
                                                                selections: [
                                                                    { alias: null, args: null, kind: "ScalarField", name: "red", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "green", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "blue", storageKey: null },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            { alias: null, args: null, kind: "ScalarField", name: "percentage", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                            { alias: null, args: null, kind: "ScalarField", name: "original_img_url", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "original_img_width", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "original_img_height", storageKey: null },
                                        ],
                                        type: "ApiImage",
                                        abstractKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ],
                        storageKey: null,
                    },
                ],
                type: "Community",
                abstractKey: null,
                hash: "f5fb6cadef5e830d674feb387a9eff99",
            };
            const t = n;
        },
        559035: (e, l, a) => {
            a.d(l, { Z: () => t });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "useCommunityBannerImageDefault_community",
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "ApiMedia",
                        kind: "LinkedField",
                        name: "default_banner_media",
                        plural: !1,
                        selections: [
                            {
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "media_info",
                                plural: !1,
                                selections: [
                                    {
                                        kind: "InlineFragment",
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "MediaColorInfo",
                                                kind: "LinkedField",
                                                name: "color_info",
                                                plural: !1,
                                                selections: [
                                                    {
                                                        alias: null,
                                                        args: null,
                                                        concreteType: "MediaColorPaletteItem",
                                                        kind: "LinkedField",
                                                        name: "palette",
                                                        plural: !0,
                                                        selections: [
                                                            {
                                                                alias: null,
                                                                args: null,
                                                                concreteType: "MediaColor",
                                                                kind: "LinkedField",
                                                                name: "rgb",
                                                                plural: !1,
                                                                selections: [
                                                                    { alias: null, args: null, kind: "ScalarField", name: "red", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "green", storageKey: null },
                                                                    { alias: null, args: null, kind: "ScalarField", name: "blue", storageKey: null },
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            { alias: null, args: null, kind: "ScalarField", name: "percentage", storageKey: null },
                                                        ],
                                                        storageKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                            { alias: null, args: null, kind: "ScalarField", name: "original_img_url", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "original_img_width", storageKey: null },
                                            { alias: null, args: null, kind: "ScalarField", name: "original_img_height", storageKey: null },
                                        ],
                                        type: "ApiImage",
                                        abstractKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ],
                        storageKey: null,
                    },
                ],
                type: "Community",
                abstractKey: null,
                hash: "da44821ed2bd33fa8de3b5bd8503e57a",
            };
            const t = n;
        },
        51403: (e, l, a) => {
            a.d(l, { Z: () => i });
            var n,
                t = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "useCommunityBannerImageThumbnail_community",
                    selections: [
                        { args: null, kind: "FragmentSpread", name: "useCommunityBannerImageDefault_community" },
                        { args: null, kind: "FragmentSpread", name: "useCommunityBannerImageCustom_community" },
                        {
                            alias: null,
                            args: null,
                            concreteType: "ApiMedia",
                            kind: "LinkedField",
                            name: "custom_banner_media",
                            plural: !1,
                            selections: (n = [
                                {
                                    alias: null,
                                    args: null,
                                    concreteType: null,
                                    kind: "LinkedField",
                                    name: "media_info",
                                    plural: !1,
                                    selections: [
                                        {
                                            kind: "InlineFragment",
                                            selections: [
                                                {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "ApiMediaRect",
                                                    kind: "LinkedField",
                                                    name: "salient_rect",
                                                    plural: !1,
                                                    selections: [
                                                        { alias: null, args: null, kind: "ScalarField", name: "left", storageKey: null },
                                                        { alias: null, args: null, kind: "ScalarField", name: "top", storageKey: null },
                                                        { alias: null, args: null, kind: "ScalarField", name: "width", storageKey: null },
                                                        { alias: null, args: null, kind: "ScalarField", name: "height", storageKey: null },
                                                    ],
                                                    storageKey: null,
                                                },
                                            ],
                                            type: "ApiImage",
                                            abstractKey: null,
                                        },
                                    ],
                                    storageKey: null,
                                },
                            ]),
                            storageKey: null,
                        },
                        { alias: null, args: null, concreteType: "ApiMedia", kind: "LinkedField", name: "default_banner_media", plural: !1, selections: n, storageKey: null },
                    ],
                    type: "Community",
                    abstractKey: null,
                };
            t.hash = "bda649c5a293882e2d130676e026a4d7";
            const i = t;
        },
        29277: (e, l, a) => {
            a.d(l, { Z: () => t });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "useCommunityBannerImage_community",
                selections: [
                    { args: null, kind: "FragmentSpread", name: "useCommunityBannerImageCustom_community" },
                    { args: null, kind: "FragmentSpread", name: "useCommunityBannerImageDefault_community" },
                ],
                type: "Community",
                abstractKey: null,
                hash: "aecce1c8907386fe71248f72f90e1e26",
            };
            const t = n;
        },
        774426: (e, l, a) => {
            a.r(l), a.d(l, { default: () => d });
            a(136728);
            var n = a(202784),
                t = a(811176),
                i = a(190286),
                r = a(111677),
                s = a.n(r),
                o = a(912021);
            const u = s().cfd2f35e;
            class c extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { activeConfirmation: null }),
                        (this._handleConfirm = (e) => {
                            this.setState({ activeConfirmation: e });
                        }),
                        (this._handleConfirmed = () => {
                            this.state.activeConfirmation && this.state.activeConfirmation.confirmCallback(), this.setState({ activeConfirmation: null }), this.props.onClose();
                        }),
                        (this._handleCancelConfirm = () => {
                            this.state.activeConfirmation && this.state.activeConfirmation.cancelCallback?.(), this.setState({ activeConfirmation: null });
                        }),
                        (this._getMemoizedProcessedActionItems = (0, o.Z)((e, l, a, n) =>
                            e.reduce((e, { Icon: t, confirmation: i, disabled: r, excludeFromActionMenu: s, isEmphasized: o, link: u, onClick: c, subText: d, testID: m, text: g, withCancelButton: p }, y) => {
                                if (!s) {
                                    const s = c
                                        ? () => {
                                              i ? (i.render ? n({ cancelCallback: i.onCancel, confirmCallback: c, render: i.render }) : n({ cancelCallback: i.onCancel, confirmCallback: c, text: i.text, headline: i.headline, label: i.label, confirmButtonType: i.confirmButtonType, withCancelButton: i.withCancelButton })) : (c(), a());
                                          }
                                        : a;
                                    e.push({ disabled: r, Icon: t, isEmphasized: o, testID: m, subText: d, text: g, onClick: s, link: u, withBottomBorder: l && l.includes(y) });
                                }
                                return e;
                            }, []),
                        ));
                }
                render() {
                    const { onClose: e } = this.props,
                        { activeConfirmation: l } = this.state;
                    return l ? this._renderConfirmation(l) : n.createElement(t.Z, { cancelButtonLabel: u, items: this._getProcessedActionItems(), onCloseRequested: e });
                }
                _renderConfirmation(e) {
                    if (e && e.render) return e.render(this._handleConfirmed, this._handleCancelConfirm);
                    {
                        const { confirmButtonType: l, headline: a, label: t, text: r, withCancelButton: s } = e || {};
                        return n.createElement(i.Z, { confirmButtonLabel: t, confirmButtonType: l, headline: a, onCancel: this._handleCancelConfirm, onConfirm: this._handleConfirmed, text: r, withCancelButton: s });
                    }
                }
                _getProcessedActionItems() {
                    const { actionItems: e, dividerIndices: l, onClose: a } = this.props;
                    return this._getMemoizedProcessedActionItems(e, l, a, this._handleConfirm);
                }
            }
            const d = c;
        },
        257466: (e, l, a) => {
            a.d(l, { Z: () => Pe });
            var n = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "ProfileSpotlight_profileSpotlight",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                    { kind: "InlineFragment", selections: [{ args: null, kind: "FragmentSpread", name: "LocationSpotlight_aboutModule" }], type: "AboutModule", abstractKey: null },
                    { kind: "InlineFragment", selections: [{ args: null, kind: "FragmentSpread", name: "ShopSpotlight_shopModule" }], type: "ShopModule", abstractKey: null },
                    { kind: "InlineFragment", selections: [{ args: null, kind: "FragmentSpread", name: "CommunitiesSpotlight_communitiesModule" }], type: "CommunitiesModule", abstractKey: null },
                    { kind: "InlineFragment", selections: [{ args: null, kind: "FragmentSpread", name: "JobSpotlight_jobsModule" }], type: "JobsModule", abstractKey: null },
                ],
                type: "ProfileModule",
                abstractKey: "__isProfileModule",
                hash: "31aa36abc28eae87193a7f810a9e9462",
            };
            const t = n;
            var i = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "ProfileSpotlight_user",
                selections: [
                    { alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "withheld_scope", storageKey: null }], storageKey: null },
                    { alias: null, args: null, concreteType: "UserPrivacy", kind: "LinkedField", name: "privacy", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }], storageKey: null },
                    {
                        alias: null,
                        args: null,
                        concreteType: "UserRelationshipPerspectives",
                        kind: "LinkedField",
                        name: "relationship_perspectives",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "blocking", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "blocked_by", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "following", storageKey: null },
                        ],
                        storageKey: null,
                    },
                    { args: null, kind: "FragmentSpread", name: "LocationSpotlight_user" },
                    { args: null, kind: "FragmentSpread", name: "ShopSpotlight_user" },
                    { args: null, kind: "FragmentSpread", name: "JobSpotlight_user" },
                ],
                type: "User",
                abstractKey: null,
                hash: "99e0fee8d438608ac65276c2fb26229f",
            };
            const r = i;
            var s = a(202784),
                o = (a(585488), a(277660)),
                u = a.n(o),
                c = a(691533),
                d = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "CommunitiesSpotlight_communitiesModule", selections: [{ alias: null, args: null, concreteType: "CommunitiesModuleConfig", kind: "LinkedField", name: "config", plural: !1, selections: [{ alias: null, args: null, concreteType: "CommunityResults", kind: "LinkedField", name: "community_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ args: null, kind: "FragmentSpread", name: "CommunitiesSpotlight_community" }], type: "Community", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: null }], type: "CommunitiesModule", abstractKey: null, hash: "47cfd1c78137fb43ffbdfed140227082" };
            const m = d;
            var g = a(719146);
            const p = m,
                y = ({ profileSpotlightRef: e, showLabel: l = !0 }) => {
                    const a = u()(p, e).config.community_results.result;
                    return a ? s.createElement(g.Z, { community: a, showLabel: l }) : null;
                },
                _ = s.memo(y);
            var f = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "JobSpotlight_user",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                    { alias: null, args: null, kind: "ScalarField", name: "is_verified_organization", storageKey: null },
                    { alias: null, args: null, concreteType: "UserCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }], storageKey: null },
                    { alias: null, args: null, concreteType: "UserRelationshipPerspectives", kind: "LinkedField", name: "relationship_perspectives", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "following", storageKey: null }], storageKey: null },
                ],
                type: "User",
                abstractKey: null,
                hash: "43e69f78d091b0224f6cc6b3fde7ed6e",
            };
            const h = f;
            var b = a(443781),
                k =
                    (a(136728),
                    {
                        argumentDefinitions: [],
                        kind: "Fragment",
                        metadata: null,
                        name: "JobSpotlight_jobsModule",
                        selections: [
                            { alias: null, args: null, concreteType: "JobsModuleConfig", kind: "LinkedField", name: "config", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "show_more_jobs", storageKey: null }], storageKey: null },
                            {
                                alias: null,
                                args: null,
                                concreteType: "JobsModuleData",
                                kind: "LinkedField",
                                name: "data",
                                plural: !1,
                                selections: [
                                    {
                                        alias: null,
                                        args: null,
                                        concreteType: "ApiJobResults",
                                        kind: "LinkedField",
                                        name: "featured_jobs_results",
                                        plural: !0,
                                        selections: [
                                            { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                                            { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "JobCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ args: null, kind: "FragmentSpread", name: "JobSpotlightTileContainer_jobsModule" }], storageKey: null }], type: "ApiJob", abstractKey: null }], storageKey: null },
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ],
                        type: "JobsModule",
                        abstractKey: null,
                        hash: "bc1a839ab37dba4569cb948a52cb2945",
                    });
            const S = k;
            var F = a(325686),
                C = a(67369),
                K = a(731708),
                w = a(174326),
                x = a(392237),
                v = a(111677),
                L = a.n(v),
                T = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "JobSpotlightTileContainer_jobsModule",
                    selections: [
                        { alias: null, args: null, kind: "ScalarField", name: "formatted_salary", storageKey: null },
                        { alias: null, args: null, kind: "ScalarField", name: "location", storageKey: null },
                        { alias: null, args: null, kind: "ScalarField", name: "redirect_url", storageKey: null },
                        { alias: null, args: null, kind: "ScalarField", name: "salary_currency_code", storageKey: null },
                        { alias: null, args: null, kind: "ScalarField", name: "salary_interval", storageKey: null },
                        { alias: null, args: null, kind: "ScalarField", name: "salary_max", storageKey: null },
                        { alias: null, args: null, kind: "ScalarField", name: "salary_min", storageKey: null },
                        { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
                    ],
                    type: "JobCore",
                    abstractKey: null,
                    hash: "e12f018382d560e8d2a737488ee07147",
                };
            const I = T;
            var E = a(9577);
            const M = I,
                Z = ({ isVerifiedOrg: e, isViewerFollowsUser: l, jobId: a, jobIndex: n, jobRef: t, profileId: i }) => {
                    const r = u()(M, t);
                    return s.createElement(E.Z, { formattedSalary: r.formatted_salary, id: a, isVerifiedOrg: e, isViewerFollowsUser: l, jobIndex: n, location: r.location, maxSalary: r.salary_max, minSalary: r.salary_min, profileId: i, redirectUrl: r.redirect_url, salaryInterval: r.salary_interval, title: r.title || "" });
                },
                P = s.memo(Z);
            var D = a(725516),
                B = a(272590);
            const j = L().ddee8ae2,
                R = L().d2a04c68,
                U = S,
                A = ({ profileSpotlight: e, user: l }) => {
                    const [a, n] = s.useState(0),
                        [t, i] = s.useState(0),
                        r = (0, D.z)(),
                        { profile_id: o } = r.contextualScribeData,
                        c = Boolean(l?.relationship_perspectives?.following),
                        d = u()(U, e);
                    s.useEffect(() => {
                        d && d.data?.featured_jobs_results?.length && r.scribe({ ...(0, B.yt)("jobs_module", "impression"), data: { ...(0, B.RV)(void 0, void 0, c, o) } });
                    }, [r, c, d, o]);
                    const m = s.useCallback(
                            ({ next: e, previous: l }) => {
                                (a === e && t === l) || (a !== e && n(e), t !== l && i(l), r.scribe({ ...(0, B.yt)("jobs_module", "scroll"), data: { ...(0, B.RV)(void 0, void 0, c, o) } }));
                            },
                            [r, c, a, t, o],
                        ),
                        [g, p] = s.useState({}),
                        y = s.useCallback(
                            ({ index: e, intersectionRatio: l }) => {
                                const a = e === d?.data?.featured_jobs_results?.length ? "view-all-btn" : d.data.featured_jobs_results?.[e]?.rest_id;
                                if (!g[e]) {
                                    if (l >= 0.5) {
                                        const l = e === d?.data?.featured_jobs_results?.length;
                                        r.scribe({ ...(0, B.yt)("jobs_module", "impression", l ? "view_more" : "job"), data: { ...(0, B.RV)(a, e, c, o) } });
                                    }
                                    p((a) => ({ ...a, [e]: { min: l } }));
                                }
                                var n;
                                if (((n = e), 1 === l && g[n]?.min < 0.5)) {
                                    const l = e === d?.data?.featured_jobs_results?.length;
                                    r.scribe({ ...(0, B.yt)("jobs_module", "impression", l ? "view_more" : "job"), data: { ...(0, B.RV)(d?.data?.featured_jobs_results?.[e]?.rest_id, e, c, o) } }), p((l) => ({ ...l, [e]: { min: 1 } }));
                                } else g[e]?.min > l && p((a) => ({ ...a, [e]: { min: l } }));
                            },
                            [r, g, c, d.data?.featured_jobs_results, o],
                        ),
                        { featured_jobs_results: _ } = d.data,
                        f = s.useCallback(() => {
                            r.scribe({ ...(0, B.yt)("jobs_module", "click", "view_more"), data: { ...(0, B.RV)(void 0, void 0, c, o) } });
                        }, [r, c, o]),
                        h = l.core?.screen_name ? { pathname: `/${l.core.screen_name}/jobs`, external: !1 } : void 0,
                        b = (0, C.yu)();
                    if (0 === _?.length) return null;
                    const k = [z.spotlightCard];
                    return b ? k.push(z.mobileSpotlightCard) : b || k.push(z.desktopSpotlightCard), s.createElement(F.Z, { testID: "jobs" }, s.createElement(F.Z, { style: z.header }, s.createElement(K.ZP, { color: "text", size: "subtext1", weight: "bold" }, R), s.createElement(K.ZP, { link: h, onClick: f, size: "subtext1" }, j)), s.createElement(w.Z, { "aria-label": "Jobs carousel", childrenStyle: z.carouselChild, onScroll: m, onVisibleRangeChange: y, scrollToCenter: !0, showNavButtonsOnHover: !1 }, ((e) => _?.map((a, n) => (a.result?.core ? s.createElement(F.Z, { key: a.rest_id, style: e, testID: `job-tile-${n}` }, s.createElement(P, { isVerifiedOrg: !!l.is_verified_organization, isViewerFollowsUser: c, jobId: a.rest_id, jobIndex: n, jobRef: a.result.core, profileId: o })) : null)) ?? [])(k)));
                },
                z = x.default.create((e) => ({ header: { display: "flex", flexDirection: "row", justifyContent: "space-between" }, carouselChild: { height: "auto" }, spotlightCard: { borderRadius: e.borderRadii.large, boxShadow: e.boxShadows.xSmall, marginVertical: e.spaces.space16, marginHorizontal: `calc(${e.spaces.space4} + ${e.spaces.space2})`, overflow: "hidden", flexGrow: 1 }, desktopSpotlightCard: { minWidth: "150px", maxWidth: "300px" }, mobileSpotlightCard: { minWidth: "150px", maxWidth: "200px" } })),
                O = s.memo(A),
                J = h,
                V = ({ profileSpotlightRef: e, userRef: l }) => {
                    const { featureSwitches: a } = s.useContext(b.rC),
                        { $fragmentType: n, ...t } = u()(J, l);
                    if (!t) return null;
                    return a.isTrue("recruiting_jobs_list_consumption_enabled") ? s.createElement(O, { profileSpotlight: e, user: t }) : null;
                };
            var N,
                $ = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "LocationSpotlight_aboutModule",
                    selections: [
                        {
                            alias: null,
                            args: null,
                            concreteType: "AboutModuleConfig",
                            kind: "LinkedField",
                            name: "config",
                            plural: !1,
                            selections: [
                                { alias: null, args: null, kind: "ScalarField", name: "enable_call", storageKey: null },
                                { alias: null, args: null, kind: "ScalarField", name: "enable_dm", storageKey: null },
                                { alias: null, args: null, kind: "ScalarField", name: "enable_email", storageKey: null },
                                { alias: null, args: null, kind: "ScalarField", name: "enable_sms", storageKey: null },
                            ],
                            storageKey: null,
                        },
                        {
                            alias: null,
                            args: null,
                            concreteType: "AboutModuleData",
                            kind: "LinkedField",
                            name: "data",
                            plural: !1,
                            selections: [
                                { alias: null, args: null, concreteType: "BusinessAddressResponse", kind: "LinkedField", name: "address", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "formatted_address", storageKey: null }], storageKey: null },
                                {
                                    alias: null,
                                    args: null,
                                    concreteType: "BusinessContact",
                                    kind: "LinkedField",
                                    name: "contact",
                                    plural: !1,
                                    selections: [
                                        { alias: null, args: null, concreteType: "BusinessContactEmail", kind: "LinkedField", name: "email", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "email_address", storageKey: null }], storageKey: null },
                                        {
                                            alias: null,
                                            args: null,
                                            concreteType: "BusinessContactPhone",
                                            kind: "LinkedField",
                                            name: "phone",
                                            plural: !1,
                                            selections: [
                                                { alias: null, args: null, kind: "ScalarField", name: "country_code", storageKey: null },
                                                { alias: null, args: null, kind: "ScalarField", name: "number", storageKey: null },
                                            ],
                                            storageKey: null,
                                        },
                                    ],
                                    storageKey: null,
                                },
                                {
                                    alias: null,
                                    args: null,
                                    concreteType: "ApiShortenedUrl",
                                    kind: "LinkedField",
                                    name: "website",
                                    plural: !1,
                                    selections: [
                                        { alias: null, args: null, kind: "ScalarField", name: "display", storageKey: null },
                                        { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null },
                                    ],
                                    storageKey: null,
                                },
                                {
                                    alias: null,
                                    args: null,
                                    concreteType: "BusinessOpenTimesResponse",
                                    kind: "LinkedField",
                                    name: "open_times",
                                    plural: !1,
                                    selections: [
                                        { alias: null, args: null, kind: "ScalarField", name: "open_times_type", storageKey: null },
                                        { alias: null, args: null, kind: "ScalarField", name: "is_open", storageKey: null },
                                        {
                                            alias: null,
                                            args: null,
                                            concreteType: "OpenCloseTimeNext",
                                            kind: "LinkedField",
                                            name: "opens",
                                            plural: !1,
                                            selections: (N = [
                                                { alias: null, args: null, kind: "ScalarField", name: "day", storageKey: null },
                                                {
                                                    alias: null,
                                                    args: null,
                                                    concreteType: "HourMinute",
                                                    kind: "LinkedField",
                                                    name: "time",
                                                    plural: !1,
                                                    selections: [
                                                        { alias: null, args: null, kind: "ScalarField", name: "hour", storageKey: null },
                                                        { alias: null, args: null, kind: "ScalarField", name: "minute", storageKey: null },
                                                    ],
                                                    storageKey: null,
                                                },
                                            ]),
                                            storageKey: null,
                                        },
                                        { alias: null, args: null, concreteType: "OpenCloseTimeNext", kind: "LinkedField", name: "closes", plural: !1, selections: N, storageKey: null },
                                    ],
                                    storageKey: null,
                                },
                                { alias: null, args: null, concreteType: "GoogleVerificationData", kind: "LinkedField", name: "google_verification_data", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "static_map_image_url", storageKey: null }], storageKey: null },
                            ],
                            storageKey: null,
                        },
                    ],
                    type: "AboutModule",
                    abstractKey: null,
                };
            $.hash = "3da47343f1756b0c4208e4edde6a08ca";
            const W = $;
            var G = { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "LocationSpotlight_user", selections: [{ alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }], type: "User", abstractKey: null, hash: "9c8dfb09cccf9c8338bfa02a25fe4c6b" };
            const H = G;
            var Q = a(617041);
            const q = L().jaaa8984,
                Y = H,
                X = W,
                ee = ({ profileSpotlightRef: e, showLabel: l = !0, userRef: a }) => {
                    const { featureSwitches: n } = s.useContext(b.rC),
                        t = n.isTrue("responsive_web_location_spotlight_v1_display"),
                        { $fragmentType: i, ...r } = u()(Y, a),
                        { $fragmentType: o, ...c } = u()(X, e);
                    return t ? s.createElement(Q.Z, { label: l ? q : void 0, location: c, user: r }) : null;
                };
            var le = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "ShopSpotlight_user",
                selections: [
                    { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
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
                    {
                        alias: null,
                        args: null,
                        concreteType: "UserRelationshipPerspectives",
                        kind: "LinkedField",
                        name: "relationship_perspectives",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "followed_by", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "following", storageKey: null },
                        ],
                        storageKey: null,
                    },
                ],
                type: "User",
                abstractKey: null,
                hash: "dad144c45ef10d09cc56fb1f411ce928",
            };
            const ae = le;
            var ne = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "ShopSpotlight_shopModule",
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: "ShopModuleData",
                        kind: "LinkedField",
                        name: "data",
                        plural: !1,
                        selections: [
                            {
                                alias: null,
                                args: null,
                                concreteType: null,
                                kind: "LinkedField",
                                name: "items",
                                plural: !0,
                                selections: [
                                    {
                                        kind: "InlineFragment",
                                        selections: [
                                            {
                                                alias: null,
                                                args: null,
                                                concreteType: "ProductCoreData",
                                                kind: "LinkedField",
                                                name: "product_core_data",
                                                plural: !1,
                                                selections: [
                                                    { args: null, kind: "FragmentSpread", name: "ShopSpotlightTileContainer_shopModule" },
                                                    { alias: null, args: null, concreteType: "ProductMetadata", kind: "LinkedField", name: "product_metadata", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "product_key", storageKey: null }], storageKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                        ],
                                        type: "CommerceProduct",
                                        abstractKey: null,
                                    },
                                ],
                                storageKey: null,
                            },
                        ],
                        storageKey: null,
                    },
                ],
                type: "ShopModule",
                abstractKey: null,
                hash: "a9f48497e2c67dfbd08b62114a530cfe",
            };
            const te = ne;
            var ie = (function () {
                var e = [{ alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }],
                    l = {
                        alias: null,
                        args: null,
                        concreteType: "Price",
                        kind: "LinkedField",
                        name: "price",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "currency_code", storageKey: null },
                            { alias: null, args: null, kind: "ScalarField", name: "micro_value", storageKey: null },
                        ],
                        storageKey: null,
                    };
                return {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "ShopSpotlightTileContainer_shopModule",
                    selections: [
                        { alias: null, args: null, concreteType: "ProductDetails", kind: "LinkedField", name: "product_details", plural: !1, selections: [{ alias: null, args: null, concreteType: "ApiMedia", kind: "LinkedField", name: "cover_media", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "media_info", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "original_img_url", storageKey: null }], type: "ApiImage", abstractKey: null }], storageKey: null }], storageKey: null }, { alias: null, args: null, concreteType: "ApiShortenedUrl", kind: "LinkedField", name: "external_url", plural: !1, selections: e, storageKey: null }, { alias: null, args: null, concreteType: "ApiShortenedUrl", kind: "LinkedField", name: "mobile_url", plural: !1, selections: e, storageKey: null }, l, { alias: null, args: null, concreteType: "ProductSale", kind: "LinkedField", name: "product_sale", plural: !1, selections: [l], storageKey: null }, { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null }], storageKey: null },
                        {
                            alias: null,
                            args: null,
                            concreteType: "ProductIdentifiers",
                            kind: "LinkedField",
                            name: "product_identifiers",
                            plural: !1,
                            selections: [
                                { alias: null, args: null, kind: "ScalarField", name: "custom_product_type", storageKey: null },
                                { alias: null, args: null, concreteType: "GoogleProductCategory", kind: "LinkedField", name: "google_product_category", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "shortened_google_product_category_name", storageKey: null }], storageKey: null },
                            ],
                            storageKey: null,
                        },
                    ],
                    type: "ProductCoreData",
                    abstractKey: null,
                };
            })();
            ie.hash = "741c31cc089fddd0d115ea9b7a8251ca";
            const re = ie;
            var se = a(157396),
                oe = a(530732),
                ue = a(992942),
                ce = a(247056),
                de = a(97882),
                me = a(774426),
                ge = a(688715),
                pe = a(415506);
            const ye = L().h10bb33c,
                _e = L().j24c37b2,
                fe = L().dda5d96a,
                he = ({ onScribeEvent: e }) => ({
                    confirmation: { confirmButtonType: "primary", headline: ye, label: _e, text: s.createElement(s.Fragment, null, s.createElement(K.ZP, { style: be.textFormat }, s.createElement(L().I18NFormatMessage, { $i18n: "i8197603" }, s.createElement(K.ZP, { link: (0, ge.ju)("https://help.x.com/forms/ipi") }, L().fca46f40))), s.createElement(K.ZP, null, s.createElement(L().I18NFormatMessage, { $i18n: "a21f2f79" }, s.createElement(K.ZP, { link: (0, ge.ju)("https://help.x.com/rules-and-policies/twitter-report-violation") }, L().c71a053b)))), withCancelButton: false },
                    Icon: pe.default,
                    onClick: () => {
                        e?.();
                    },
                    testID: "Report Product Action Item",
                    text: fe,
                }),
                be = x.default.create((e) => ({ textFormat: { display: "inline-block", marginBottom: e.spaces.space20 } })),
                ke = x.default.create((e) => ({ card: { display: "flex", flexDirection: "row" }, cardImage: { height: "92px", width: "92px" }, largeCardImage: { height: "119px", width: "119px" }, xLargeCardImage: { height: "129px", width: "129px" }, cardText: { display: "flex", flex: 1, flexDirection: "column", justifyContent: "space-between", margin: e.spaces.space12, marginEnd: 0, textAlign: "start", width: "min-content" }, iconFlag: { marginEnd: 0, marginStart: e.spaces.space12, marginVertical: 0 }, iconMore: { height: "1em", width: "1em" }, imgContainer: { borderRadius: `calc(${e.borderRadii.medium} + (${e.borderRadii.xSmall} / 2))`, margin: e.spaces.space4, marginEnd: 0, overflow: "hidden" }, contentBackground: { backgroundColor: e.colors.cellBackground }, darkModeContentBackground: { backgroundColor: e.colors.gray0 }, menuControl: { transform: "rotate(90deg)" }, menuControlContainer: { padding: "0.5em", marginTop: e.spaces.space4, marginEnd: e.spaces.space4, marginStart: e.spaces.space8 }, textLabel: { display: "block", minWidth: "116px" }, cardSectionWrapper: { display: "flex", flexDirection: "column" }, textOverflow: { overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }, productCategory: { marginBottom: e.spaces.space12 }, priceGap: { paddingEnd: e.spaces.space4 }, priceTruncate: { display: "inline-block" }, priceWrap: { display: "flex", flexWrap: "wrap" }, productName: { marginBottom: e.spaces.space4 }, salePriceOverride: { color: e.colors.gray700, textDecorationLine: "line-through", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" } })),
                Se = (e) => {
                    const { category: l, imgUrl: a, isViewerFollowsUser: n, price: t, productIndex: i, productKey: r, productLink: o, productName: u, profileId: c, salePrice: d } = e,
                        m = (0, D.z)(),
                        { ThemeScaleNames: g } = se.default,
                        p = (e) => x.default.theme.scale === g[e],
                        y = p("xSmall") || p("small") || p("normal"),
                        _ = p("large") || p("xLarge"),
                        f = (e) => (0, de.x)({ amount: parseInt(e.micro_value, 10), currencyCode: e.currency_code.toUpperCase(), formatter: 1e6 }),
                        h = () => {
                            m.scribe({ ...(0, B.UJ)("shop_module", "click", "report_product"), data: { items: [{ commerce_details: { merchant_id: c, product_key: r, product_index: i } }] } });
                        },
                        b = (e) => s.createElement(me.default, { actionItems: [he({ onScribeEvent: h })], dividerIndices: [1], onClose: e });
                    if (a && o) {
                        const e = String(o);
                        return s.createElement(
                            oe.Z,
                            {
                                link: e,
                                onClick: (e) => {
                                    m.scribe({ ...(0, B.UJ)("shop_module", "click", "product"), data: { items: [{ commerce_details: { profile_id: c, product_index: i, product_key: r, is_viewer_follows_user: n } }] } });
                                },
                                role: "link",
                                style: [ke.card, x.default.isDarkMode() ? ke.darkModeContentBackground : ke.contentBackground],
                            },
                            s.createElement(F.Z, { style: ke.imgContainer }, s.createElement(ue.Z, { "aria-label": "product", source: { uri: a }, style: [ke.cardImage, p("large") && ke.largeCardImage, p("xLarge") && ke.xLargeCardImage] })),
                            s.createElement(F.Z, { style: ke.cardText }, s.createElement(F.Z, { style: ke.cardSectionWrapper }, s.createElement(K.ZP, { size: "body", style: [ke.textLabel, ke.productName, ke.textOverflow], weight: "bold" }, u), s.createElement(K.ZP, { color: "gray700", size: "subtext2", style: [ke.textLabel, ke.productCategory, ke.textOverflow], testID: "category", weight: "normal" }, l || " ")), s.createElement(F.Z, { style: ke.cardSectionWrapper }, ((e, l) => (null == l || l?.micro_value > e.micro_value ? s.createElement(K.ZP, { size: "subtext1", style: ke.textOverflow, weight: "bold" }, f(e)) : s.createElement(K.ZP, { numberOfLines: 2, style: [y ? ke.textOverflow : "", _ ? ke.priceWrap : ke.priceTruncate] }, s.createElement(K.ZP, { numberOfLines: 1, size: "subtext1", style: ke.priceGap, weight: "bold" }, f(l)), s.createElement(K.ZP, { numberOfLines: 1, size: "subtext1", style: ke.salePriceOverride, weight: "normal" }, f(e)))))(t, d))),
                            s.createElement(F.Z, { style: ke.menuControlContainer }, s.createElement(ce.Z, { renderActionMenu: b, style: ke.menuControl })),
                        );
                    }
                    return null;
                },
                Fe = re,
                Ce = (e) => {
                    const l = u()(Fe, e.productTile),
                        a = l?.product_identifiers?.custom_product_type,
                        n = l?.product_identifiers?.google_product_category,
                        t = l?.product_details.mobile_url?.url,
                        i = l?.product_details.cover_media.media_info?.original_img_url,
                        r = s.useMemo(() => ({ ...l?.product_details.price }), [l?.product_details.price]),
                        o = l?.product_details.title,
                        c = l?.product_details.external_url.url,
                        d = s.useMemo(() => (l?.product_details.product_sale?.price ? { ...l?.product_details.product_sale?.price } : null), [l?.product_details.product_sale?.price]),
                        m = null === a || (a && null === a[0]) ? n?.shortened_google_product_category_name : a?.[0];
                    return s.createElement(Se, { category: m, imgUrl: i, isViewerFollowsUser: e.isViewerFollowsUser, price: r, productIndex: e.productIndex, productKey: e.productKey, productLink: e.isMobileLayout && t ? t : c, productName: o, profileId: e.profileId, salePrice: d });
                },
                Ke = s.memo(Ce),
                we = ({ profileSpotlight: e, showLabel: l = !0, user: a }) => {
                    const n = (0, D.z)(),
                        { profile_id: t } = n.contextualScribeData,
                        i = Boolean(a?.relationship_perspectives?.following),
                        r = te,
                        o = u()(r, e);
                    s.useEffect(() => {
                        o && o.data?.items.length && n.scribe({ ...(0, B.UJ)("shop_module", "impression"), data: { items: [{ commerce_details: { profile_id: t, is_viewer_follows_user: i } }] } });
                    }, [n, i, t, o]);
                    const [c, d] = s.useState(0),
                        [m, g] = s.useState(0),
                        p = s.useCallback(
                            ({ next: e, previous: l }) => {
                                (c === e && m === l) || (c !== e && d(e), m !== l && g(l), n.scribe({ ...(0, B.UJ)("shop_module", "scroll"), data: { items: [{ commerce_details: { profile_id: t, is_viewer_follows_user: i } }] } }));
                            },
                            [n, i, c, m, t],
                        ),
                        [y, _] = s.useState({}),
                        f = s.useCallback(
                            ({ index: e, intersectionRatio: l }) => {
                                y[e] || (l >= 0.5 && n.scribe({ ...(0, B.UJ)("shop_module", "impression", "product"), data: { items: [{ commerce_details: { profile_id: t, product_index: e, product_key: o?.data.items[e].product_core_data?.product_metadata.product_key, is_viewer_follows_user: i } }] } }), _((a) => ({ ...a, [e]: { min: l } })));
                                var a;
                                ((a = e), 1 === l && y[a]?.min < 0.5) ? (n.scribe({ ...(0, B.UJ)("shop_module", "impression", "product"), data: { items: [{ commerce_details: { profile_id: t, product_index: e, product_key: o?.data.items[e].product_core_data?.product_metadata.product_key, is_viewer_follows_user: i } }] } }), _((l) => ({ ...l, [e]: { min: 1 } }))) : y[e]?.min > l && _((a) => ({ ...a, [e]: { min: l } }));
                            },
                            [n, y, i, t, o?.data.items],
                        ),
                        h = o && o.data.items.length && a && null !== a.relationship_perspectives?.following,
                        b = (0, C.yu)(),
                        k = 1 === o?.data?.items.length;
                    return h
                        ? s.createElement(
                              F.Z,
                              { testID: "Shop" },
                              s.createElement(
                                  w.Z,
                                  { "aria-label": L().b5fea270, childrenStyle: k && xe.singleCard, isLocked: k, onScroll: p, onVisibleRangeChange: f, scrollToCenter: !0, showNavButtonsOnHover: !1 },
                                  ((e, l) => {
                                      const { items: a } = o.data;
                                      return a?.map((a, n) => {
                                          if (a.product_core_data) {
                                              const r = a.product_core_data?.product_metadata.product_key;
                                              return s.createElement(F.Z, { key: n, style: [xe.spotlightCard, l ? "" : e ? xe.mobileSpotlightCard : xe.desktopSpotlightCard] }, s.createElement(Ke, { isMobileLayout: e, isViewerFollowsUser: i, productIndex: n, productKey: r, productTile: a.product_core_data, profileId: t }));
                                          }
                                          return null;
                                      });
                                  })(b, k),
                              ),
                          )
                        : null;
                },
                xe = x.default.create((e) => ({ spotlightCard: { borderRadius: e.borderRadii.large, boxShadow: e.boxShadows.xSmall, minHeight: "100px", marginVertical: e.spaces.space16, marginHorizontal: `calc(${e.spaces.space4} + ${e.spaces.space2})`, overflow: "hidden" }, desktopSpotlightCard: { maxWidth: "350px" }, mobileSpotlightCard: { maxWidth: "304px" }, singleCard: { flex: 1 } })),
                ve = s.memo(we),
                Le = ae,
                Te = ({ profileSpotlightRef: e, showLabel: l = !0, userRef: a }) => {
                    const { featureSwitches: n } = s.useContext(b.rC),
                        t = n.isTrue("responsive_web_commerce_shop_spotlight_enabled"),
                        { $fragmentType: i, ...r } = u()(Le, a);
                    return t ? s.createElement(ve, { profileSpotlight: e, showLabel: l, user: r }) : null;
                },
                Ie = r,
                Ee = t,
                Me = Object.freeze({ Location: "AboutModule", Shop: "ShopModule", Communities: "CommunitiesModule", Jobs: "JobsModule" });
            function Ze({ profileSpotlightRef: e, setIsRenderingProfileSpotlight: l, showLabel: a = !0, userRef: n }) {
                const t = u()(Ie, n),
                    i = u()(Ee, e);
                switch (
                    (s.useEffect(() => {
                        const e = [Me.Shop, Me.Jobs, Me.Communities].includes(i.__typename);
                        l && l(e);
                    }, [i.__typename, l]),
                    i.__typename)
                ) {
                    case Me.Location:
                        return s.createElement(ee, { profileSpotlightRef: i, showLabel: a, userRef: t });
                    case Me.Shop:
                        return s.createElement(Te, { profileSpotlightRef: i, showLabel: a, userRef: t });
                    case Me.Communities:
                        return s.createElement(_, { profileSpotlightRef: i, showLabel: a });
                    case Me.Jobs:
                        return s.createElement(c.Z, { hideOnError: !0 }, s.createElement(V, { profileSpotlightRef: i, userRef: t }));
                    default:
                        return null;
                }
            }
            const Pe = s.memo(Ze);
        },
        719146: (e, l, a) => {
            a.d(l, { Z: () => b });
            var n = a(699418),
                t = a(202784),
                i = a(325686),
                r = (a(585488), a(277660)),
                s = a.n(r),
                o = a(392237),
                u = a(111677),
                c = a.n(u),
                d = a(784380),
                m = a(264223),
                g = a(66918),
                p = a(943957);
            const y = c().f277e94a,
                _ = c().h02a6fe6,
                f = n.Z,
                h = ({ community: e, showLabel: l = !0, showViewAction: a = !1 }) => {
                    const n = s()(f, e),
                        r = t.useMemo(() => ({ label: l ? _ : void 0, headline: n.name, actions: a ? [{ label: y, link: `/i/communities/${n.rest_id}` }] : [], media: t.createElement(g.Z, { community: n }), bodyElements: [n.description ? { elements: [{ text: n.description, numberOfLines: 2 }] } : null], link: a ? void 0 : `/i/communities/${n.rest_id}` }), [n, l, a]);
                    return t.createElement(p.Z, r, t.createElement(i.Z, { style: k.members }, t.createElement(d.Z, { community: n, style: k.facePile, userAvatarSize: "medium" }), t.createElement(m.Z, { community: n, onMedia: !1, style: k.memberCount })));
                },
                b = t.memo(h),
                k = o.default.create((e) => ({ members: { display: "flex", flexDirection: "row", alignItems: "center", columnGap: e.spaces.space8, flexWrap: "wrap", paddingTop: e.spaces.space4 }, facePile: { flexBasis: "auto" }, memberCount: { flexBasis: "auto" } }));
        },
        9577: (e, l, a) => {
            a.d(l, { Z: () => p });
            var n = a(202784),
                t = a(325686),
                i = a(530732),
                r = a(392237),
                s = a(731708),
                o = a(264171),
                u = a(190636),
                c = a(457458),
                d = a(725516),
                m = a(272590);
            const g = r.default.create((e) => ({ card: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space20, height: "100%" }, cardLayout: { display: "flex", flexDirection: "column", gap: e.spaces.space8, height: "100%" }, cardMeta: { display: "flex", flexDirection: "column", gap: 8 }, cardSubtext: { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center", gap: 12 }, withIcon: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4 }, contentBackground: { backgroundColor: e.colors.cellBackground }, darkModeContentBackground: { backgroundColor: e.colors.gray0 } })),
                p = ({ formattedSalary: e, id: l, isVerifiedOrg: a, isViewerFollowsUser: p, jobIndex: y, location: _, profileId: f, redirectUrl: h, salaryInterval: b, timestamp: k, title: S }) => {
                    const F = (0, d.z)(),
                        C = n.useCallback(() => {
                            F.scribe({ ...(0, m.yt)("jobs_module", "click", "job"), data: { profile_id: f, items: [{ position: y, id: l, is_viewer_follows_user: p }] } });
                        }, [F, l, p, y, f]),
                        K = n.useMemo(() => `/i/jobs/${l}`, [l]);
                    return n.createElement(i.Z, { link: a ? { pathname: K, external: !0 } : h || "", onClick: C, role: "link", style: [g.card, r.default.isDarkMode() ? g.darkModeContentBackground : g.contentBackground] }, n.createElement(t.Z, { style: g.cardLayout }, n.createElement(s.ZP, { hoverLabel: { label: S, withDelay: !0 }, numberOfLines: 1, size: "subtext2", weight: "bold" }, S), n.createElement(t.Z, { style: g.cardMeta }, n.createElement(t.Z, { style: g.withIcon }, n.createElement(s.ZP, { color: "gray700", size: "subtext3" }, n.createElement(o.default, null)), n.createElement(s.ZP, { color: "gray700", hoverLabel: { label: _, withDelay: !0 }, numberOfLines: 1, size: "subtext3", weight: "normal" }, _)), e || k ? n.createElement(t.Z, { style: g.cardSubtext }, e ? n.createElement(t.Z, { style: g.withIcon }, n.createElement(s.ZP, { color: "gray700", size: "subtext3" }, n.createElement(u.default, null)), n.createElement(s.ZP, { color: "gray700", hoverLabel: { label: _, withDelay: !0 }, numberOfLines: 1, size: "subtext3", style: g.withIcon, weight: "normal" }, (0, c.M)(e, b))) : null, k ? n.createElement(s.ZP, { color: "gray700", size: "subtext2", weight: "normal" }, k) : null) : null)));
                };
        },
        784380: (e, l, a) => {
            a.d(l, { Z: () => c });
            a(136728);
            var n = a(444770),
                t = a(202784),
                i = (a(585488), a(277660)),
                r = a.n(i),
                s = a(642153);
            const o = n.Z,
                u = ({ community: e, style: l, userAvatarSize: a = "large" }) => {
                    const n = r()(o, e),
                        { members_facepile_results: i } = n,
                        u = t.useMemo(
                            () =>
                                ((e) =>
                                    e.reduce((e, { result: l }) => {
                                        if ("User" === l?.__typename) {
                                            const a = l.avatar?.image_url;
                                            a && e.push(a);
                                        }
                                        return e;
                                    }, []))(i),
                            [i],
                        );
                    return u.length > 0 ? t.createElement(s.Z, { style: l, userAvatarSize: a, userAvatarUrls: u }) : null;
                },
                c = t.memo(u);
        },
        652904: (e, l, a) => {
            a.d(l, { Z: () => c });
            var n = a(202784),
                t = a(500002),
                i = a(668214),
                r = a(997174),
                s = a(118823);
            const o = (0, i.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: r.NH }))
                .withAnalytics();
            class u extends n.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: l },
                            location: { pathname: a, search: n },
                            locationKey: t,
                        } = this.props,
                        {
                            location: { pathname: i, search: r },
                            locationKey: s,
                        } = e;
                    let o = !1;
                    l.pathname !== a ? (this._isInBackground = !0) : this._isInBackground && l.pathname === a && ((this._isInBackground = !1), (o = !0));
                    const u = t || s;
                    ((u && t !== s) || (!u && a !== i) || n !== r || o) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: l, updateLocation: a, updateTweetDetailNav: n } = e;
                    l.scribePageImpression(), a(l.contextualScribeNamespace, l.contextualScribeData), n(l.contextualScribeNamespace);
                }
            }
            u.defaultProps = { children: null };
            const c = (0, t.ZP)(o(u));
        },
        264223: (e, l, a) => {
            a.d(l, { Z: () => g });
            var n = a(607566),
                t = a(202784),
                i = (a(585488), a(277660)),
                r = a.n(i),
                s = a(98538),
                o = a(111677),
                u = a.n(o);
            const c = u().d58baa7f,
                d = { value: t.createElement(s.Z.Value, null), label: t.createElement(s.Z.Label, null) },
                m = ({ community: e, onMedia: l = !1, style: a }) => {
                    const i = r()(n.Z, e),
                        { member_count: o = 0 } = i,
                        m = t.useMemo(() => ({ count: o, formattedCount: c(o) }), [o]);
                    return t.createElement(s.Z.Group, { style: a }, t.createElement(s.Z, { onMedia: l }, t.createElement(u().I18NFormatMessage, { $i18n: "b38e130b" }, t.cloneElement(d.value, null, u().ibd0106e({ formattedCount: m.formattedCount })), t.cloneElement(d.label, null, u().cface2d1({ count: m.count })))));
                },
                g = t.memo(m);
        },
        66918: (e, l, a) => {
            a.d(l, { Z: () => d });
            var n = a(903852),
                t = a(202784),
                i = (a(585488), a(277660)),
                r = a.n(i),
                s = a(530525),
                o = a(439592),
                u = a(392237),
                c = a(910805);
            const d = ({ community: e }) => {
                const l = r()(n.Z, e),
                    { crop: a, image: i } = (0, c.L)(l);
                return t.createElement(s.Z, { "aria-label": "", aspectMode: o.Z.SQUARE, backgroundColor: u.default.theme.colors.gray300, cropCandidates: a, image: i });
            };
        },
        910805: (e, l, a) => {
            a.d(l, { L: () => p, Z: () => g });
            var n = a(51403),
                t = a(29277),
                i = a(559035),
                r = a(738666),
                s = a(202784),
                o = (a(585488), a(277660)),
                u = a.n(o),
                c = a(952183);
            const d = (e) => {
                    const l = u()(r.Z, e);
                    return s.useMemo(() => {
                        const e = l?.custom_banner_media?.media_info;
                        if (e?.original_img_url && e?.original_img_height && e?.original_img_width && e?.color_info?.palette) {
                            const l = e.color_info.palette;
                            return { url: e.original_img_url, height: e.original_img_height, width: e.original_img_width, palette: l.map(({ percentage: e, rgb: l }) => ({ percentage: e, rgb: { blue: l.blue, red: l.red, green: l.green } })) };
                        }
                    }, [l?.custom_banner_media?.media_info]);
                },
                m = (e) => {
                    const l = u()(i.Z, e);
                    return s.useMemo(() => {
                        const e = l?.default_banner_media?.media_info,
                            a = e?.original_img_url,
                            n = e?.original_img_height,
                            t = e?.original_img_width;
                        if (a && n && t) return { url: a, height: n, width: t };
                    }, [l?.default_banner_media?.media_info]);
                },
                g = (e) => {
                    const l = u()(t.Z, e),
                        a = d(l),
                        n = m(l);
                    return a || n || c.bU;
                },
                p = (e) => {
                    const l = u()(n.Z, e),
                        a = d(l),
                        t = m(l);
                    return s.useMemo(() => {
                        if (a) {
                            const e = l.custom_banner_media?.media_info?.salient_rect;
                            return { image: a, crop: y(e) };
                        }
                        if (t) {
                            const e = l.default_banner_media?.media_info?.salient_rect;
                            return { image: t, crop: y(e) };
                        }
                        return { image: c.bU, crop: c.uj };
                    }, [l.custom_banner_media?.media_info?.salient_rect, l.default_banner_media?.media_info?.salient_rect, a, t]);
                },
                y = (e) => {
                    if (!e) return [];
                    const { height: l, left: a, top: n, width: t } = e;
                    return [{ x: a, y: n, w: t, h: l }];
                };
        },
        89217: (e, l, a) => {
            a.d(l, { Ju: () => m, Qw: () => g, eo: () => u });
            var n = a(111677),
                t = a.n(n);
            const i = t().c69eb656,
                r = t().g46ae43c,
                s = t().jf7d4cc6,
                o = t().b2214572,
                u = Object.freeze({ full_time: i, full_time_contract: r, part_time: s, contract_to_hire: o }),
                c = t().f8337bd6,
                d = t().i935bf88,
                m = Object.freeze({ 1: c, 2: d }),
                g = Object.freeze({ annually: { label: c, value: 1 }, hourly: { label: d, value: 2 } });
        },
        457458: (e, l, a) => {
            a.d(l, { G: () => u, M: () => o });
            a(571372);
            var n = a(301503),
                t = a(111677),
                i = a.n(t),
                r = a(89217);
            const s = i().b75b8ffd,
                o = (e, l = 1) => {
                    const a = l ?? 1;
                    return r.Ju[a.toString()] ? s({ salary: e, interval: r.Ju[a.toString()] }) : e;
                },
                u = (e) => {
                    if (e)
                        try {
                            const l = JSON.parse(e);
                            if (!l.entityMap || !l.blocks) throw new Error("Malformed RawDraftContentState");
                            if (!(0, n.convertFromRaw)(l).hasText()) return;
                            return l;
                        } catch (e) {}
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.SettingsProfessionalProfileProfileSpotlight~bundle.UserProfile.6b6c035a.js.map
