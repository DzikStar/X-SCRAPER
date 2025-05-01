"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ComposeMedia"],
    {
        513313: (e, t, a) => {
            a.d(t, { P: () => i });
            const i = Object.freeze({ Crop: "crop", AltText: "alt_text", SensitiveMedia: "sensitive_media", Subtitles: "subtitles", Trimmer: "trimmer" });
        },
        343362: (e, t, a) => {
            a.r(t), a.d(t, { TabbedMediaEditScreen: () => h, default: () => _ });
            var i = a(807896),
                n = a(202784),
                s = a(443781),
                r = a(536210),
                o = (a(136728), a(668214)),
                d = a(497294),
                c = a(632960);
            const l = (e, t) => {
                    const a = t.location?.state?.showAllMedia;
                    return a ? p(e) : m(e);
                },
                p = (e) => {
                    const t = c.tS(e),
                        a = [];
                    for (const e of t) {
                        const t = e.mediaIds || [];
                        a.push(...t);
                    }
                    return (0, d.m3)(e, a);
                },
                m = (e) => {
                    const t = c.E_(e),
                        a = c.tS(e)[t].mediaIds || [];
                    return (0, d.m3)(e, a);
                },
                u = (e, t) => t.location?.state?.mediaId,
                g = (0, o.Z)()
                    .propsFromState(() => ({ initialMediaId: u, media: l }))
                    .propsFromActions(() => ({ setMediaMetadata: d._B, processMedia: d.C4, updateMediaUpload: d._J }))
                    .withAnalytics({ page: "tabbed_media" });
            class h extends n.Component {
                constructor(e, t) {
                    super(e, t);
                    const { history: a, initialMediaId: i, media: n } = e;
                    (n.length <= 0 || !i) && a.replace("/");
                }
                render() {
                    const e = this.context.featureSwitches.isTrue("sensitive_tweet_warnings_enabled"),
                        { match: t, staticContext: a, ...s } = this.props;
                    return n.createElement(r.Z, (0, i.Z)({}, s, { sensitiveMediaTabEnabled: e }));
                }
            }
            h.contextType = s.rC;
            const _ = g(h);
        },
        583813: (e, t, a) => {
            a.r(t), a.d(t, { TabbedMediaEditScreen: () => m, default: () => u });
            var i = a(807896),
                n = a(202784),
                s = a(536210),
                r = a(668214),
                o = a(798538),
                d = a(497294);
            const c = (e, t) => t.location && t.location.state && t.location.state.mediaId,
                l = (e, t) => {
                    const a = ((e, t) => t.location?.state?.conversationId)(0, t);
                    return (0, o.W8)(e, a);
                },
                p = (0, r.Z)()
                    .propsFromState(() => ({ media: l, initialMediaId: c }))
                    .adjustStateProps(({ initialMediaId: e, media: t }) => ({ media: t ? [t] : [], initialMediaId: e }))
                    .propsFromActions(() => ({ setMediaMetadata: d._B, processMedia: d.C4, updateMediaUpload: d._J }))
                    .withAnalytics({ page: "tabbed_media_dm" });
            class m extends n.Component {
                constructor(e) {
                    super(e);
                    const { history: t, initialMediaId: a, media: i } = e;
                    (i.length <= 0 || !a) && t.replace("/");
                }
                render() {
                    const { match: e, staticContext: t, ...a } = this.props;
                    return n.createElement(s.Z, (0, i.Z)({}, a, { sensitiveMediaTabEnabled: !1 }));
                }
            }
            const u = p(m);
        },
        109006: (e, t, a) => {
            a.r(t), a.d(t, { PhotoTagsScreen: () => Z, default: () => x });
            var i = a(202784),
                n = a(325686),
                s = a(834324),
                r = a(154003),
                o = a(392237),
                d = a(674132),
                c = a.n(d),
                l = a(47086),
                p = a(908478),
                m = a(625661),
                u = a(980407),
                g = a(597496),
                h = a(339110),
                _ = a(161821),
                b = a(668214),
                M = a(632960),
                C = a(104140);
            const f = (e) => {
                    const t = M.E_(e);
                    return M.tS(e)[t].mediaTags;
                },
                y = (e) => {
                    const t = ((e) => {
                        const t = (0, C.sM)(e),
                            a = (t && (0, _.Z)(t)) || [];
                        return (0, h.It)(a);
                    })(e)
                        .filter((e) => e && e.rounded_score)
                        .sort(function (e, t) {
                            return (t.rounded_score || 0) - (e.rounded_score || 0);
                        });
                    return t.slice(0, 12);
                },
                E = (0, b.Z)()
                    .propsFromState(() => ({ existingTags: f, injections: y }))
                    .propsFromActions(() => ({ updateSingleComposer: M.zi }))
                    .withAnalytics({ page: "media_tag", component: "media_tagger" }),
                S = c().b772cd66,
                w = c().c20dc654,
                I = c().d1175c78,
                T = c().ae0831ab;
            function Z(e) {
                const { history: t, injections: a, existingTags: o = [], updateSingleComposer: d } = e,
                    [c, _] = i.useState(o),
                    [b, M] = i.useState(""),
                    C = (e) => {
                        _(c.filter(({ id: t }) => t !== e.id));
                    },
                    f = () => {
                        const e = c.map((e) => e.data.id_str).sort(),
                            t = o.map((e) => e.data.id_str).sort(),
                            a = e.length === t.length && (0, p.Z)(e, t);
                        return i.createElement(n.Z, { style: v.rightColumn }, i.createElement(r.ZP, { disabled: a, onPress: E, size: "small", type: "primaryFilled" }, S));
                    },
                    y = () => {
                        t.goBack();
                    },
                    E = () => {
                        d({ updates: { mediaTags: c } }), t.goBack();
                    };
                return i.createElement(
                    u.Z,
                    { documentTitle: I, history: t, renderHeader: () => i.createElement(m.ZP, { backButtonType: "close", history: t, onBackClick: y, rightControl: f(), title: I }) },
                    i.createElement(g.fb, {
                        getItemDisabledMessage: (e) => {
                            let t;
                            return e.type !== h.El.User || e.data.can_media_tag || (t = T({ screenName: e.data.screen_name })), t;
                        },
                        getItemIsDisabled: (e) => {
                            const t = c.length >= 10;
                            return e.type === h.El.User && (!e.data.can_media_tag || !!t);
                        },
                        injections: b ? void 0 : a,
                        onQueryChange: (e) => {
                            M(e);
                        },
                        onRemove: C,
                        onSelect: (e) => {
                            e.type === h.El.User && (c.find(({ id: t }) => t === e.id) ? C(e) : c.length < 10 && _([...c, e]));
                        },
                        renderCallout: () => (c.length >= 10 ? i.createElement(n.Z, { style: v.inlineCallout }, i.createElement(s.Z, { Icon: l.default, headline: w, type: "warning" })) : null),
                        selectedUsers: c,
                        source: h._4.ComposeMediaTagging,
                        withCompactPills: !0,
                    }),
                );
            }
            const v = o.default.create((e) => ({ rightColumn: { flexDirection: "row", flexGrow: 1, alignItems: "center" }, inlineCallout: { paddingHorizontal: e.spaces.space16, paddingBottom: e.spaces.space4, paddingTop: e.spaces.space8 } })),
                x = E(Z);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ComposeMedia.b708a57a.js.map
