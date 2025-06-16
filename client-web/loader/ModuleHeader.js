"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.ModuleHeader"],
    {
        927389: (e, l, n) => {
            n.d(l, { Z: () => d });
            var t = n(202784),
                a = n(247056),
                r = n(392237);
            const i = (0, n(523561).Z)({ loader: () => n.e("loader.FeedbackSheet").then(n.bind(n, 774426)) });
            var o = n(725516),
                s = n(851623);
            const c = r.default.create((e) => ({ curationControl: { marginStart: e.spaces.space20 } })),
                d = (0, o.Z)((e) => {
                    const { analytics: l, feedbackItems: n, isDisplayedOnMedia: r } = e,
                        o = t.useCallback((e) => (n ? t.createElement(i, { actionItems: n, onClose: e }) : null), [n]),
                        d = t.useCallback(() => l.scribe({ element: "caret", action: "click" }), [l]);
                    return n && n.length > 0 ? t.createElement(a.Z, { onClick: d, renderActionMenu: o, style: c.curationControl, testID: s.Z.caret, withDarkBackground: r }) : null;
                });
        },
        267471: (e, l, n) => {
            n.r(l), n.d(l, { default: () => I });
            var t,
                a,
                r,
                i = n(459643),
                o = n(351322),
                s = n(202784),
                c = {
                    argumentDefinitions: [],
                    kind: "Fragment",
                    metadata: null,
                    name: "relayURTModuleHeader_TimelineTimelineModule",
                    selections: [
                        {
                            alias: null,
                            args: null,
                            concreteType: "TimelineModuleHeader",
                            kind: "LinkedField",
                            name: "header",
                            plural: !1,
                            selections: [
                                { alias: null, args: null, kind: "ScalarField", name: "icon", storageKey: null },
                                (a = {
                                    alias: "landingUrl",
                                    args: null,
                                    concreteType: "TimelineUrl",
                                    kind: "LinkedField",
                                    name: "landing_url",
                                    plural: !1,
                                    selections: [
                                        {
                                            kind: "InlineDataFragmentSpread",
                                            name: "formatUrl_timelineUrl",
                                            selections: [
                                                (t = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null }),
                                                { alias: "urlType", args: null, kind: "ScalarField", name: "url_type", storageKey: null },
                                                {
                                                    alias: "urtEndpointOptions",
                                                    args: null,
                                                    concreteType: "TimelineUrtEndpointOptions",
                                                    kind: "LinkedField",
                                                    name: "urt_endpoint_options",
                                                    plural: !1,
                                                    selections: [
                                                        { alias: "cacheId", args: null, kind: "ScalarField", name: "cache_id", storageKey: null },
                                                        {
                                                            alias: "requestParams",
                                                            args: null,
                                                            concreteType: "RequestParamsEntry",
                                                            kind: "LinkedField",
                                                            name: "request_params",
                                                            plural: !0,
                                                            selections: [
                                                                { alias: null, args: null, kind: "ScalarField", name: "key", storageKey: null },
                                                                { alias: null, args: null, kind: "ScalarField", name: "value", storageKey: null },
                                                            ],
                                                            storageKey: null,
                                                        },
                                                        { alias: null, args: null, kind: "ScalarField", name: "subtitle", storageKey: null },
                                                        {
                                                            alias: "timelineWithContext",
                                                            args: null,
                                                            concreteType: "TimelineWithContext",
                                                            kind: "LinkedField",
                                                            name: "timeline_with_context",
                                                            plural: !1,
                                                            selections: [
                                                                { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null },
                                                                { alias: null, args: null, kind: "ScalarField", name: "context", storageKey: null },
                                                            ],
                                                            storageKey: null,
                                                        },
                                                        { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
                                                    ],
                                                    storageKey: null,
                                                },
                                            ],
                                            args: null,
                                            argumentDefinitions: [],
                                        },
                                    ],
                                    storageKey: null,
                                }),
                                { alias: "socialContext", args: null, concreteType: null, kind: "LinkedField", name: "social_context", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ alias: "contextType", args: null, kind: "ScalarField", name: "context_type", storageKey: null }, (r = { alias: null, args: null, kind: "ScalarField", name: "text", storageKey: null }), t, { alias: "contextImageUrls", args: null, kind: "ScalarField", name: "context_image_urls", storageKey: null }, a], type: "TimelineGeneralContext", abstractKey: null }], storageKey: null },
                                r,
                            ],
                            storageKey: null,
                        },
                    ],
                    type: "TimelineTimelineModule",
                    abstractKey: null,
                };
            c.hash = "bcd067baa57f7b4ff20e2f20ac489f5d";
            const d = c;
            n(585488);
            var u = n(277660),
                m = n.n(u),
                g = n(117444),
                k = n(844685),
                y = n(530732),
                p = n(187669),
                x = n(946409),
                C = n(725516),
                b = n(927389);
            const f = ({ feedbackItems: e, icon: l, landingUrl: n, renderCustomControl: t, socialContext: a, text: r }) => {
                    const i = (0, C.z)(),
                        o = s.useCallback(() => {
                            i.scribe({ element: "header", action: "click" });
                        }, [i]),
                        c = a && a.generalContext && a.generalContext.text,
                        d = s.useMemo(() => (t ? t() : s.createElement(b.Z, { feedbackItems: e })), [e, t]),
                        u = s.useMemo(() => {
                            const e = n && (0, x.s9)(n);
                            return s.createElement(k.Z, { icon: l, landingUrl: e, rightControl: d, subtext: c, text: r });
                        }, [l, n, d, c, r]);
                    return (
                        (0, p.q)(() => {
                            n && i.scribe({ element: "header", action: "impression" });
                        }),
                        n ? s.createElement(y.Z, { interactive: !1, onPress: o }, u) : u
                    );
                },
                F = s.memo(f),
                T = d,
                h = ({ feedbackItems: e, moduleContentRef: l, renderCustomControl: n }) => {
                    const t = m()(T, l),
                        { header: a } = t,
                        r = s.useMemo(() => (a?.landingUrl ? (0, g.Y)(a.landingUrl) : void 0), [a]);
                    if (!a && !a?.text) return null;
                    const i = ((e) => {
                            if ("TopicFilled" === e) return "TOPIC_FILLED";
                        })(a.icon),
                        o = ((e) => {
                            const l = {};
                            if (e?.text && e?.contextType) return (l.text = e?.text), (l.contextType = e?.contextType), e?.contextImageUrls && (l.contextImageUrls = e.contextImageUrls.concat()), e?.landingUrl && (l.landingUrl = (0, g.Y)(e.landingUrl)), { generalContext: l };
                        })(a.socialContext);
                    return s.createElement(F, { feedbackItems: e, icon: i, landingUrl: r, renderCustomControl: n, socialContext: o, text: a.text });
                },
                K = s.memo(h),
                _ = ({ entry: e, feedbackItems: l }) => {
                    const { icon: n, landingUrl: t, renderCustomControl: a, socialContext: r, text: i } = e.content.header,
                        { moduleContentRef: o } = e.content.timelineModule;
                    return o ? s.createElement(K, { moduleContentRef: o, renderCustomControl: a }) : s.createElement(F, { feedbackItems: l, icon: n, landingUrl: t, renderCustomControl: a, socialContext: r, text: i });
                },
                U = s.memo(_),
                I = o.iH({ component: U, defaultScribeNamespace: { element: "header" }, feedbackEntrySelector: (e) => e.content.timelineModule, shouldDisplayBorder: (0, i.Z)(!1) }).getHandler();
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.ModuleHeader.9dace48a.js.map
