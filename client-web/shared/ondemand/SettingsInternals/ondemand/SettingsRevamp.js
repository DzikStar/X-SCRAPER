"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~ondemand.SettingsInternals~ondemand.SettingsRevamp"],
    {
        130919: (e, t, n) => {
            n.d(t, { t: () => i });
            const i = Object.freeze({ CanVerifyIdentity: "CanVerifyIdentity", IdentityNonVerifiable: "IdentityNonVerifiable", IdentityVerified: "IdentityVerified", PendingResult: "PendingResult", RequestLocked: "RequestLocked", UnavailableMissingBlueSubscription: "UnavailableMissingBlueSubscription" });
        },
        534763: (e, t, n) => {
            n.d(t, { H: () => c, b: () => u });
            var i = n(807896),
                r = n(202784),
                a = n(392237),
                s = n(779610);
            const l = (e) => {
                    const { Icon: t, iconColor: n, testID: i } = e;
                    return r.createElement(t, { style: n ? { color: a.default.theme.colors[n] } : o.thumbnail, testID: i });
                },
                o = a.default.create((e) => ({ thumbnail: { color: e.colors.gray700 } }));
            function c(e) {
                const { Icon: t, iconColor: n, testID: a, ...o } = e;
                return r.createElement(s.Z, (0, i.Z)({}, o, { thumbnail: r.createElement(l, { Icon: t, iconColor: n, testID: a }), thumbnailSize: "large" }));
            }
            function u(e) {
                const { link: t, ...n } = e;
                return r.createElement(s.Z, (0, i.Z)({}, n, { link: { external: !0, pathname: e.link } }));
            }
        },
        670094: (e, t, n) => {
            n.d(t, { d: () => c });
            var i = n(674132),
                r = n.n(i),
                a = n(88656),
                s = n(601576),
                l = n(163889);
            const o = r().a5d4fda0,
                c = (e = o, t = !0) => ({
                    customErrorHandler: (n) => {
                        const { context: i } = n;
                        return (!n) instanceof a.Z && (n.message = `Strato error occurred in ${i.id}: ${i.action}`), (0, l.ZP)(n, { extra: { context: i, isStrato: !0 } }), t ? (0, s.mf)({ text: e }) : [];
                    },
                });
        },
        715684: (e, t, n) => {
            n.d(t, { Fm: () => T, TG: () => v, UD: () => S, _1: () => I, dj: () => k, kz: () => b });
            var i = n(24949),
                r = n(697926),
                a = n(744531),
                s = n(226395),
                l = n(499627),
                o = n(917799),
                c = n(312771);
            const u = `${n(291020).Y}/sessions`,
                d = `rweb/${u}`,
                m = o.dg(d, "FETCH_SESSIONS"),
                p = o.dg(d, "REVOKE_SESSION"),
                f = o.dg(d, "REVOKE_ALL_SESSIONS"),
                _ = { fetchStatus: c.ZP.NONE, sessions: {} };
            function g(e = _, t) {
                if (!t) return e;
                switch (t.type) {
                    case m.REQUEST:
                        return { ...e, fetchStatus: c.ZP.LOADING };
                    case m.FAILURE:
                        return { ...e, error: t.payload, fetchStatus: c.ZP.FAILED };
                    case m.SUCCESS:
                        return { ...e, error: null, fetchStatus: c.ZP.LOADED, sessions: (0, r.Z)(E(t.payload), (e) => e.token) };
                    case p.SUCCESS:
                        return { ...e, sessions: (0, a.Z)(e.sessions, t.meta.hashed_token) };
                    default:
                        return e;
                }
            }
            l.Z.register({ [u]: g });
            function y(e) {
                return { token: e.hashed_token, name: e.device_name, summary: e.device_summary, icon_type: e.icon_type, is_current_session: e.is_current_session, location: e.location, last_seen_time_ms: e.last_seen_at };
            }
            const E = (e) => (e?.viewer?.user_results?.result?.sessions_list ? e.viewer.user_results.result.sessions_list : e.viewer?.user?.sessions_list ? e.viewer.user.sessions_list : e.sessions ? e.sessions.map(y) : []),
                h = (e) => e[u].sessions,
                v = (0, i.P1)(h, (e) => Object.values(e)),
                b = (e, t) => h(e)[t],
                S = (e) => e[u].fetchStatus,
                k = (e) => (t, n) => (S(n()) === c.ZP.LOADED ? Promise.resolve() : t(Z(e))),
                Z =
                    (e) =>
                    (t, n, { api: i }) =>
                        o._O(t, { params: e, request: i.withEndpoint(s.Z).fetchSessions })({ actionTypes: m, context: "FETCH_SESSIONS" }),
                I =
                    (e) =>
                    (t, n, { api: i }) => {
                        const r = { hashed_token: e };
                        return o._O(t, { params: r, request: i.withEndpoint(s.Z).revokeSession })({ actionTypes: p, context: "REVOKE_SESSION", meta: { hashed_token: e } });
                    },
                T =
                    (e) =>
                    (t, n, { api: i }) =>
                        o
                            ._O(t, { params: e, request: i.withEndpoint(s.Z).revokeAllSessions })({ actionTypes: f, context: "REVOKE_ALL_SESSIONS" })
                            .then(() => Z()(t, n, { api: i }));
        },
        948985: (e, t, n) => {
            n.d(t, { $q: () => h, UD: () => v, wz: () => b, zw: () => S });
            var i = n(24949),
                r = n(166852),
                a = n(226395),
                s = n(499627),
                l = n(917799),
                o = n(312771),
                c = n(56519),
                u = n(502909),
                d = n(600823);
            const m = `${n(291020).Y}/applications`,
                p = `rweb/${m}`,
                f = l.dg(p, "FETCH_APPLICATIONS"),
                _ = { fetchStatus: o.ZP.NONE };
            function g(e = _, t) {
                if (!t) return e;
                switch (t.type) {
                    case f.REQUEST:
                        return { ...e, fetchStatus: o.ZP.LOADING };
                    case f.FAILURE:
                        return { ...e, error: t.payload, fetchStatus: o.ZP.FAILED };
                    case f.SUCCESS:
                        return { ...e, error: null, fetchStatus: o.ZP.LOADED };
                    default:
                        return e;
                }
            }
            s.Z.register({ [m]: g });
            const y = {
                    revokeApplication: {
                        reducer: (e, t) => {
                            if (t.type === E.customActionTypes.revokeApplication.SUCCESS) {
                                const { revoked: n } = t.payload,
                                    { entityId: i } = t.meta,
                                    r = e.entities[i];
                                return { ...e, entities: { ...e.entities, [i]: { ...r, revoked: n } } };
                            }
                            return e;
                        },
                        getParams: (e) => ({ token: e }),
                        getApiMethod: (e) => e.withEndpoint(a.Z).revokeApplication,
                    },
                    revokeOauth2Token: {
                        reducer: (e, t) => {
                            if (t.type === E.customActionTypes.revokeOauth2Token.SUCCESS) {
                                const { revoked: n } = t.payload,
                                    { entityId: i } = t.meta,
                                    r = e.entities[i];
                                return { ...e, entities: { ...e.entities, [i]: { ...r, revoked: n } } };
                            }
                            return e;
                        },
                        getParams: (e) => ({ token_hash: e }),
                        getApiMethod: (e) => e.withEndpoint(a.Z).revokeOauth2Token,
                    },
                },
                E = (0, u.ZP)({ namespace: "applications", customActions: y });
            (E.selectUniqUnrevokedApps = (0, i.P1)(E.selectAll, (e) => {
                const t = Object.values(e).filter((e) => !0 !== e.revoked);
                return (0, r.Z)(t, (e) => e.app_id);
            })),
                (E.selectAppsById = (0, i.P1)(
                    E.selectAll,
                    (e, t) => t,
                    (e, t) => Object.values(e).filter((e) => e.app_id === t),
                ));
            const h = d.Z.register(E),
                v = (e) => e[m].fetchStatus,
                b = (e) => (t, n) => (v(n()) === o.ZP.LOADED ? Promise.resolve() : t(k(e))),
                S =
                    (e, t, n) =>
                    (n, i, { api: r }) => {
                        const a = i();
                        return E.selectAppsById(a, e).length > 0 ? Promise.resolve() : n(k(t));
                    },
                k =
                    (e) =>
                    (t, n, { api: i }) =>
                        l._O(t, { params: e, request: i.withEndpoint(a.Z).fetchApplications })({ actionTypes: f, context: "FETCH_APPLICATIONS" }, (e, t) => {
                            if (e) return [(0, c.dP)(e.entities)];
                        });
        },
        915566: (e, t, n) => {
            n.d(t, { Jb: () => s, Jf: () => d, LT: () => u, MQ: () => a, NC: () => c, hJ: () => l, zV: () => o });
            var i = n(688715),
                r = n(130919);
            const a = Object.freeze({ premiumSubscription: "premiumSubscription", premiumSettings: "premiumSettings", securitySettings: "securitySettings", creator: "creator" }),
                s = { [a.premiumSubscription]: "/i/flow/premium_signup_nux_flow", [a.premiumSettings]: "/settings/premium", [a.securitySettings]: "/settings/security", [a.creator]: "/settings/monetization" },
                l = `/settings/account/id_verification?status=${r.t.PendingResult}`,
                o = `/settings/monetization?status=${r.t.PendingResult}`,
                c = "/settings/account/id_verification",
                u = (0, i.ju)("https://help.x.com/rules-and-policies/verification-policy"),
                d = (0, i.ju)("https://help.x.com/using-x/x-premium");
        },
        284430: (e, t, n) => {
            n.r(t), n.d(t, { IDVerificationQueryRenderer: () => G, IDVerificationQueryRequest: () => B, default: () => Y, isPendingStatus: () => j });
            var i,
                r,
                a = {
                    fragment: {
                        argumentDefinitions: (i = [
                            { defaultValue: null, kind: "LocalArgument", name: "is_identity_verified_label_hidden" },
                            { defaultValue: null, kind: "LocalArgument", name: "user_id" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "IDVerificationUpdateHideLabelMutation",
                        selections: (r = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "is_identity_verified_label_hidden", variableName: "is_identity_verified_label_hidden" },
                                    { kind: "Variable", name: "user_id", variableName: "user_id" },
                                ],
                                kind: "ScalarField",
                                name: "userverificationinfo_is_identity_verified_label_hidden_put",
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: i, kind: "Operation", name: "IDVerificationUpdateHideLabelMutation", selections: r },
                    params: { id: "lqIzyQL1p3XCZg77zekzZA", metadata: {}, name: "IDVerificationUpdateHideLabelMutation", operationKind: "mutation", text: null },
                };
            a.hash = "6b62958a6368974d13a27b8fe59103e0";
            const s = a;
            var l = (function () {
                var e = [{ kind: "Literal", name: "s", value: "4721" }],
                    t = { alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null },
                    n = { alias: null, args: null, kind: "ScalarField", name: "is_identity_verified", storageKey: null },
                    i = { alias: null, args: null, kind: "ScalarField", name: "is_identity_verified_label_hidden", storageKey: null },
                    r = { alias: null, args: null, kind: "ScalarField", name: "identity_verification_status", storageKey: null },
                    a = { kind: "ClientExtension", selections: [{ alias: null, args: null, kind: "ScalarField", name: "__id", storageKey: null }] },
                    s = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null };
                return {
                    fragment: { argumentDefinitions: [], kind: "Fragment", metadata: null, name: "IDVerificationQuery", selections: [{ kind: "RequiredField", field: { alias: "viewer", args: e, concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ kind: "RequiredField", field: { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [t, { alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [n, i, { kind: "RequiredField", field: r, action: "THROW" }, a], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }, action: "THROW" }], storageKey: null }, action: "THROW" }], storageKey: 'viewer_v2(s:"4721")' }, action: "THROW" }], type: "Query", abstractKey: null },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: [],
                        kind: "Operation",
                        name: "IDVerificationQuery",
                        selections: [
                            {
                                alias: "viewer",
                                args: e,
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
                                                    { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                                                    { kind: "InlineFragment", selections: [t, { alias: null, args: null, concreteType: "UserVerificationInfo", kind: "LinkedField", name: "verification_info", plural: !1, selections: [n, i, r, s, a], storageKey: null }, s], type: "User", abstractKey: null },
                                                ],
                                                storageKey: null,
                                            },
                                            s,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"4721")',
                            },
                        ],
                    },
                    params: { id: "3Wx7dsynDTSI0LO52L8L8A", metadata: { features: ["identity_verification_hide_verified_label_settings_enabled"] }, name: "IDVerificationQuery", operationKind: "query", text: null },
                };
            })();
            l.hash = "6269adea05f11011ee2eec87df25951d";
            const o = l;
            var c = n(202784),
                u = n(360917),
                d = n.n(u),
                m = n(614983),
                p = n.n(m),
                f = n(325686),
                _ = (n(585488), n(351743)),
                g = n.n(_),
                y = n(107267),
                E = n(750410),
                h = n(943401),
                v = n(954110),
                b = n(167630),
                S = n(392237),
                k = n(731708),
                Z = n(674132),
                I = n.n(Z),
                T = n(750442),
                D = n(130919),
                x = n(727828),
                C = n(534763),
                w = n(443781),
                L = n(652904),
                P = n(301410),
                A = n(725516),
                R = n(312771),
                O = n(615027),
                V = n(466441),
                F = n(264922),
                K = n(915566);
            const N = I().afe4a358,
                U = I().g268fbb8,
                q = I().f66d24be,
                z = I().c8255462,
                H = I().c6e731ee,
                M = I().be582166,
                $ = { [D.t.PendingResult]: I().b496bc94, [D.t.RequestLocked]: I().d8f5cce4, [D.t.IdentityNonVerifiable]: I().i8427a1e, [D.t.CanVerifyIdentity]: M },
                Q = c.createElement(C.b, { label: q, link: K.LT }),
                j = (e) => {
                    const t = e.query?.status;
                    return !(!t || Array.isArray(t)) && t === D.t.PendingResult;
                },
                B = o,
                W = s,
                G = (0, P.z)(B, { errorConfig: { context: "ID_VERIFICATION_CONTEXT" } }),
                J = S.default.create((e) => ({ layoutDimensions: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, iconTheme: { color: e.colors.text }, idLabel: { alignItems: "center", flexDirection: "row", gap: e.spaces.space8 } })),
                X = c.createElement(f.Z, { style: J.idLabel }, c.createElement(T.default, { style: J.iconTheme }), c.createElement(k.ZP, { color: "gray700" }, U)),
                Y = c.memo(
                    (0, A.Z)(
                        ({ analytics: e, ...t }) => {
                            const { featureSwitches: n } = c.useContext(w.rC),
                                i = n.isTrue("identity_verification_hide_verified_label_settings_enabled"),
                                r = (0, y.useLocation)(),
                                [a] = g()(W),
                                s = c.useCallback(
                                    (e, t) => (n, i) => {
                                        e &&
                                            t &&
                                            a({
                                                variables: { is_identity_verified_label_hidden: i, user_id: e },
                                                updater: (e, n) => {
                                                    const r = e.get(t);
                                                    p()(r, "userRecord must be specified"), r.setValue(i, "is_identity_verified_label_hidden");
                                                },
                                            });
                                    },
                                    [a],
                                ),
                                l = c.useCallback(
                                    ({ data: n, fetchStatus: a, retry: l }) => {
                                        if (a === R.ZP.FAILED) return c.createElement(E.Z, { onRequestRetry: l });
                                        if (a === R.ZP.LOADED && n) {
                                            const a = n.viewer.user_results.result,
                                                o = a.rest_id,
                                                u = a.verification_info;
                                            if (!u) return c.createElement(E.Z, { onRequestRetry: l });
                                            const d = !!u.is_identity_verified_label_hidden,
                                                m = u.identity_verification_status,
                                                p = m === D.t.CanVerifyIdentity && j(r) ? D.t.PendingResult : m,
                                                _ = p === D.t.UnavailableMissingBlueSubscription;
                                            switch ((e.scribe({ page: "identity_verification_settings", section: p, action: "impression" }), p)) {
                                                case D.t.RequestLocked:
                                                case D.t.PendingResult:
                                                case D.t.IdentityNonVerifiable:
                                                    return c.createElement(c.Fragment, null, c.createElement(h.Z, { description: $[p] }), Q);
                                                case D.t.IdentityVerified:
                                                case D.t.UnavailableMissingBlueSubscription:
                                                    return c.createElement(f.Z, null, c.createElement(h.Z, { description: M }), c.createElement(f.Z, { style: J.layoutDimensions }, _ ? c.createElement(x.Z, { variant: "IdVerification", withColoredIcon: !0 }) : X), i ? c.createElement(f.Z, null, c.createElement(v.Z, { checked: d, disabled: _, helpText: H, label: z, name: "is_identity_verified_label_hidden", onChange: s(o, u.__id) })) : null, Q);
                                                case D.t.CanVerifyIdentity:
                                                    return c.createElement(f.Z, null, c.createElement(h.Z, { description: $[p] }), c.createElement(y.Switch, null, c.createElement(y.Route, null, c.createElement(O.Z, { to: "/settings/account/id_verification/start" }))));
                                                default:
                                                    return c.createElement(V.default, t);
                                            }
                                        }
                                        return c.createElement(b.Z, null);
                                    },
                                    [e, i, r, s, t],
                                );
                            return c.createElement(L.Z, null, c.createElement(F.Z, { location: r, title: N }, c.createElement(G, { render: l, variables: d() })));
                        },
                        { page: "id_verification", section: "settings" },
                    ),
                );
        },
        467604: (e, t, n) => {
            n.d(t, { Z: () => u });
            var i = n(202784),
                r = n(909377),
                a = n(501578),
                s = n(762863),
                l = n(875516),
                o = n(875782),
                c = n(932466);
            class u extends i.PureComponent {
                render() {
                    const { deviceType: e } = this.props;
                    switch (e.toString().toLowerCase()) {
                        case "mobile":
                            return i.createElement(r.Z, { Icon: a.default, color: "neutral" });
                        case "laptop":
                            return i.createElement(r.Z, { Icon: s.default, color: "neutral" });
                        case "tablet":
                            return i.createElement(r.Z, { Icon: l.default, color: "neutral" });
                        case "tv":
                            return i.createElement(r.Z, { Icon: o.default, color: "neutral" });
                        default:
                            return i.createElement(r.Z, { Icon: c.default, color: "neutral" });
                    }
                }
            }
        },
        972934: (e, t, n) => {
            n.d(t, { Z: () => p });
            var i = n(202784),
                r = n(966886),
                a = n(868634),
                s = n(470397),
                l = n(731708),
                o = n(779610),
                c = n(674132),
                u = n.n(c),
                d = n(467604);
            const m = u().ed5ab16a;
            class p extends i.PureComponent {
                _renderLocationAndDateLabel() {
                    const { session: e } = this.props,
                        t = e.last_seen_time_ms,
                        n = e.location,
                        o = t ? i.createElement(r.Z, { cutoff: "years", humanReadable: !0, timestamp: Number(t) }) : null,
                        c = e.is_current_session ? i.createElement(a.ZP, { background: "primary" }, m) : o;
                    return i.createElement(s.Z, null, n && i.createElement(l.ZP, null, n), c);
                }
                _renderDeviceIcon() {
                    const { session: e } = this.props;
                    return i.createElement(d.Z, { deviceType: e.icon_type });
                }
                _renderDeviceName() {
                    const { session: e } = this.props;
                    return e.name;
                }
                _renderDescription() {
                    const { session: e, withSummary: t } = this.props;
                    return i.createElement(l.ZP, { color: "gray700", numberOfLines: 1, size: "subtext2" }, t ? e.summary : this._renderLocationAndDateLabel());
                }
                render() {
                    const { link: e } = this.props;
                    return i.createElement(o.Z, { description: this._renderDescription(), label: this._renderDeviceName(), link: e, thumbnail: this._renderDeviceIcon() });
                }
            }
        },
        829824: (e, t, n) => {
            n.d(t, { Z: () => y });
            var i = n(202784),
                r = n(99107),
                a = n(420740),
                s = n(731708),
                l = n(674132),
                o = n.n(l),
                c = n(443781),
                u = n(918621),
                d = n(725405),
                m = n(125363),
                p = n(390387);
            const f = o().ffeb836a,
                _ = o().f2fb9746;
            function g() {
                const e = (0, d.Z)();
                return (
                    i.useEffect(() => {
                        e.scribe({ element: "error_page", action: "show" });
                    }, [e]),
                    i.createElement(a.Z, { title: f }, i.createElement(s.ZP, null, _))
                );
            }
            function y(e) {
                const { featureSwitches: t } = i.useContext(c.rC),
                    n = (0, m.v9)(p.Qb),
                    a = (0, u.Xh)(r.b7, t);
                return n || a ? e.children : i.createElement(g, null);
            }
        },
        170069: (e, t, n) => {
            n.d(t, { Z: () => l });
            var i = n(202784),
                r = n(325686),
                a = n(731708),
                s = n(392237);
            const l = ({ children: e }) => i.createElement(r.Z, { style: o.labelContainer }, i.createElement(r.Z, { style: o.contentContainer }, i.createElement(r.Z, { style: o.appText }, i.createElement(a.ZP, { color: "gray700", size: "subtext2" }, e)))),
                o = s.default.create((e) => ({ contentContainer: { alignItems: "center", flex: 1, flexDirection: "row", justifyContent: "space-between" }, labelContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, minHeight: `calc(${s.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})` }, appText: { flexShrink: 1, width: "100%" } }));
        },
        928088: (e, t, n) => {
            n.d(t, { Z: () => s });
            var i = n(202784),
                r = n(325686);
            const a = n(392237).default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical } })),
                s = function ({ children: e }) {
                    return i.createElement(r.Z, { style: a.root }, e);
                };
        },
        280278: (e, t, n) => {
            n.d(t, { ZP: () => _ });
            var i = n(202784),
                r = n(325686),
                a = n(827515),
                s = n(461756),
                l = n(731708),
                o = n(392237);
            const c = "up",
                u = "down",
                d = (e, t, n) => {
                    n((n) => {
                        const i = (0, a.Z)(e) ? (e > (n.count || 0) ? c : u) : c;
                        return { ...n, count: e, oldText: n.text, pendingCount: null, pendingText: null, text: t, transitionDirection: i };
                    });
                },
                m = {};
            [c, u].forEach((e) => {
                const t = "0.3s";
                m[e] = { active: { transitionProperty: "transform", transitionDuration: t, transform: "translate3d(0, 0, 0)" }, pre: { transform: `translate3d(0, ${e === c ? "100%" : "-100%"}, 0)` }, post: { transform: `translate3d(0, ${e === c ? "-100%" : "100%"}, 0)`, transitionProperty: "transform", transitionDuration: t } };
            });
            const p = { position: "absolute" },
                f = o.default.create({ root: { overflow: "hidden" } }),
                _ = (e) => {
                    const { children: t, containerStyle: n, count: o, ...u } = e,
                        [_, g] = i.useState({ animating: !1, count: e.count, pendingCount: null, text: e.children, oldText: null, pendingText: null, transitionDirection: c }),
                        y = i.useRef(!1);
                    return (
                        i.useEffect(
                            () => (
                                (y.current = !0),
                                function () {
                                    y.current = !1;
                                }
                            ),
                            [],
                        ),
                        i.useEffect(() => {
                            if (y.current)
                                if (s.Z.reducedMotionEnabled) g((n) => ({ ...n, oldText: null, text: t, pendingText: null, pendingCount: null, count: e.count }));
                                else if (t !== _.pendingText) {
                                    t === _.text || ((0, a.Z)(e.count) && _.count === e.count) ? g((e) => ({ ...e, pendingCount: null, pendingText: null })) : (g((n) => ({ ...n, pendingCount: e.count, pendingText: t })), _.animating || d(e.count, t, g));
                                }
                        }, [t]),
                        i.useEffect(() => {
                            y.current &&
                                !1 === _.animating &&
                                (_.oldText
                                    ? window.requestAnimationFrame(() =>
                                          window.requestAnimationFrame(() => {
                                              y.current && g((e) => ({ ...e, animating: !0 }));
                                          }),
                                      )
                                    : _.pendingText && d(_.pendingCount, _.pendingText, g));
                        }, [_.animating, _.oldText]),
                        i.useMemo(() => {
                            const e = m[_.transitionDirection],
                                t = _.oldText && !s.Z.reducedMotionEnabled,
                                a = !_.animating && _.oldText && !s.Z.reducedMotionEnabled,
                                o = { ...p, ...(_.animating ? e.post : e.active) },
                                c = { ...(a ? e.pre : e.active) };
                            return i.createElement(
                                r.Z,
                                { style: [f.root, n] },
                                t ? i.createElement("span", { style: o }, i.createElement(l.ZP, u, _.oldText)) : null,
                                i.createElement(
                                    "span",
                                    {
                                        "data-testid": "app-text-transition-container",
                                        onTransitionEnd: () =>
                                            ((e, t) => {
                                                e && t((e) => ({ ...e, animating: !1, oldText: null }));
                                            })(y.current, g),
                                        style: c,
                                    },
                                    i.createElement(l.ZP, u, _.text),
                                ),
                            );
                        }, [n, u, _, y, g])
                    );
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~ondemand.SettingsInternals~ondemand.SettingsRevamp.783d0caa.js.map
