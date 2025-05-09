"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.ReportCenter"],
    {
        980407: (e, l, a) => {
            a.d(l, { Z: () => y, w: () => m });
            var n = a(202784),
                t = a(325686),
                r = a(108362),
                i = a(386802),
                s = a(392237),
                o = a(652904),
                c = a(555079),
                u = a(625661),
                d = a(449067),
                p = a(715601);
            class m extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: e, appBarStyle: l, backButtonType: a, backLocation: r, centerTitle: i, hideBackButton: s, history: o, isFullWidth: d, isLarge: p, middleControl: m, onBackClick: y, rightControl: k, secondaryBar: h, subtitle: b, title: F } = this.props,
                                { isModal: _ } = this.context;
                            return n.createElement(t.Z, { style: _ ? [g.childViewAppBarRoot, g.appBarZindex] : g.appBarZindex }, n.createElement(u.ZP, { backButtonType: a || (_ ? "close" : "back"), backLocation: r, centerTitle: i, fixed: !_, hideBackButton: s, history: o, isFullWidth: d, isLarge: p, middleControl: m, onBackClick: y, ref: e, rightControl: k, secondaryBar: h, style: [_ && g.appBarModal, l], subtitle: b, title: F, titleDomId: c.Q_ }));
                        }),
                        (this._handleLayout = (e) => {
                            const { onLayout: l } = this.props,
                                { isModal: a } = this.context;
                            l && (a ? window.requestAnimationFrame(() => l(e)) : l(e));
                        });
                }
                render() {
                    const { "aria-hidden": e, bottomBar: l, children: a, containerStyle: i, documentTitle: s, isFullWidth: c, isLarge: u, renderHeader: m, title: y, withoutBottomBarMobile: k } = this.props,
                        { isModal: h } = this.context,
                        b = m ? m(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return n.createElement(o.Z, null, n.createElement(d.Z.Configure, { documentTitle: s, headerless: !0, title: y }), n.createElement(t.Z, { "aria-hidden": e, onLayout: this._handleLayout, style: [g.root, h && g.rootModal] }, !h && b, n.createElement(r.Z, { isFullWidth: c, isLarge: u, style: [g.container, h && g.containerModal, i] }, h ? n.createElement(p.Z, { style: g.viewport }, b, a) : a), l ? n.createElement(t.Z, { style: [g.bottomBarModal, !h && !k && g.bottomBarMobile] }, n.createElement(r.Z, { isFullWidth: c, isLarge: u }, l)) : null));
                }
            }
            (m.defaultProps = { isFullWidth: !1, isLarge: !1 }), (m.contextType = i.Z);
            const g = s.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: e.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: e.borderRadii.small, borderTopEndRadius: e.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: e.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: s.default.iPhoneOffsetBottom, backgroundColor: e.colors.navigationBackground, borderTopStyle: "solid" } })),
                y = m;
        },
        652904: (e, l, a) => {
            a.d(l, { Z: () => u });
            var n = a(202784),
                t = a(500002),
                r = a(668214),
                i = a(997174),
                s = a(118823);
            const o = (0, r.Z)()
                .propsFromActions(() => ({ updateLocation: s.YF, updateTweetDetailNav: i.NH }))
                .withAnalytics();
            class c extends n.Component {
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
                            location: { pathname: r, search: i },
                            locationKey: s,
                        } = e;
                    let o = !1;
                    l.pathname !== a ? (this._isInBackground = !0) : this._isInBackground && l.pathname === a && ((this._isInBackground = !1), (o = !0));
                    const c = t || s;
                    ((c && t !== s) || (!c && a !== r) || n !== i || o) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: l, updateLocation: a, updateTweetDetailNav: n } = e;
                    l.scribePageImpression(), a(l.contextualScribeNamespace, l.contextualScribeData), n(l.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const u = (0, t.ZP)(o(c));
        },
        657137: (e, l, a) => {
            a.r(l), a.d(l, { default: () => Ke });
            var n,
                t,
                r,
                i,
                s,
                o,
                c,
                u,
                d,
                p,
                m,
                g,
                y,
                k,
                h,
                b,
                F,
                _,
                T,
                K,
                f,
                w,
                S,
                E = {
                    fragment: {
                        argumentDefinitions: (n = [{ defaultValue: null, kind: "LocalArgument", name: "reportId" }]),
                        kind: "Fragment",
                        metadata: null,
                        name: "ReportDetailQuery",
                        selections: [{ alias: null, args: (t = [{ kind: "Literal", name: "s", value: "7f13" }]), concreteType: "Viewer", kind: "LinkedField", name: "viewer_v2", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [{ kind: "InlineFragment", selections: [{ alias: null, args: (r = [{ kind: "Variable", name: "report_notification_id", variableName: "reportId" }]), concreteType: "ReportDetailV2", kind: "LinkedField", name: "report_detail", plural: !1, selections: [(i = { alias: null, args: null, kind: "ScalarField", name: "actioned_report_type", storageKey: null }), (s = { alias: null, args: null, kind: "ScalarField", name: "header", storageKey: null }), (o = { alias: null, args: null, kind: "ScalarField", name: "last_update_time", storageKey: null }), (c = { alias: null, args: null, kind: "ScalarField", name: "outcome_text", storageKey: null }), (u = { alias: null, args: null, kind: "ScalarField", name: "remediation", storageKey: null }), { alias: null, args: null, concreteType: null, kind: "LinkedField", name: "report_entities_results", plural: !0, selections: [{ args: null, kind: "FragmentSpread", name: "ReportEntityList_reportEntityResults" }], storageKey: null }, (d = { alias: null, args: null, kind: "ScalarField", name: "report_status", storageKey: null }), (p = { alias: null, args: null, kind: "ScalarField", name: "rule_link", storageKey: null }), (m = { alias: null, args: null, kind: "ScalarField", name: "verdict", storageKey: null })], storageKey: null }], type: "User", abstractKey: null }], storageKey: null }], storageKey: null }], storageKey: 'viewer_v2(s:"7f13")' }],
                        type: "Query",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: {
                        argumentDefinitions: n,
                        kind: "Operation",
                        name: "ReportDetailQuery",
                        selections: [
                            {
                                alias: null,
                                args: t,
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
                                                    (g = { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null }),
                                                    {
                                                        kind: "InlineFragment",
                                                        selections: [
                                                            {
                                                                alias: null,
                                                                args: r,
                                                                concreteType: "ReportDetailV2",
                                                                kind: "LinkedField",
                                                                name: "report_detail",
                                                                plural: !1,
                                                                selections: [
                                                                    i,
                                                                    s,
                                                                    o,
                                                                    c,
                                                                    u,
                                                                    {
                                                                        alias: null,
                                                                        args: null,
                                                                        concreteType: null,
                                                                        kind: "LinkedField",
                                                                        name: "report_entities_results",
                                                                        plural: !0,
                                                                        selections: [
                                                                            g,
                                                                            { kind: "TypeDiscriminator", abstractKey: "__isReportEntityResults" },
                                                                            {
                                                                                kind: "InlineFragment",
                                                                                selections: [
                                                                                    {
                                                                                        alias: null,
                                                                                        args: null,
                                                                                        concreteType: null,
                                                                                        kind: "LinkedField",
                                                                                        name: "result",
                                                                                        plural: !1,
                                                                                        selections: [
                                                                                            g,
                                                                                            {
                                                                                                kind: "InlineFragment",
                                                                                                selections: [
                                                                                                    {
                                                                                                        alias: null,
                                                                                                        args: null,
                                                                                                        concreteType: "Tweet",
                                                                                                        kind: "LinkedField",
                                                                                                        name: "tweet",
                                                                                                        plural: !1,
                                                                                                        selections: (T = [
                                                                                                            { alias: null, args: null, concreteType: "TweetCore", kind: "LinkedField", name: "core", plural: !1, selections: [{ alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [g, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [(y = { alias: null, args: null, kind: "ScalarField", name: "description", storageKey: null }), (k = { alias: null, args: null, kind: "ScalarField", name: "profile_image_url_https", storageKey: null }), { alias: null, args: null, kind: "ScalarField", name: "protected", storageKey: null }, (h = { alias: null, args: null, kind: "ScalarField", name: "screen_name", storageKey: null }), (b = { alias: null, args: null, kind: "ScalarField", name: "name", storageKey: null })], storageKey: null }, (F = { alias: null, args: null, filters: null, handle: "defaultScalars", key: "", kind: "LinkedHandle", name: "legacy" }), { alias: null, args: null, concreteType: "UserVerification", kind: "LinkedField", name: "verification", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "verified", storageKey: null }], storageKey: null }, (_ = { alias: null, args: null, kind: "ScalarField", name: "id", storageKey: null })], type: "User", abstractKey: null }], storageKey: null }, _], storageKey: null }], storageKey: null },
                                                                                                            {
                                                                                                                alias: null,
                                                                                                                args: null,
                                                                                                                concreteType: "LegacyTweet",
                                                                                                                kind: "LinkedField",
                                                                                                                name: "legacy",
                                                                                                                plural: !1,
                                                                                                                selections: [
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "created_at", storageKey: null },
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "display_text_range", storageKey: null },
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "full_text", storageKey: null },
                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "id_str", storageKey: null },
                                                                                                                ],
                                                                                                                storageKey: null,
                                                                                                            },
                                                                                                            F,
                                                                                                            _,
                                                                                                        ]),
                                                                                                        storageKey: null,
                                                                                                    },
                                                                                                ],
                                                                                                type: "TweetWithVisibilityResults",
                                                                                                abstractKey: null,
                                                                                            },
                                                                                            { kind: "InlineFragment", selections: T, type: "Tweet", abstractKey: null },
                                                                                            {
                                                                                                kind: "InlineFragment",
                                                                                                selections: [
                                                                                                    {
                                                                                                        alias: null,
                                                                                                        args: null,
                                                                                                        concreteType: null,
                                                                                                        kind: "LinkedField",
                                                                                                        name: "tombstone",
                                                                                                        plural: !1,
                                                                                                        selections: [
                                                                                                            g,
                                                                                                            {
                                                                                                                kind: "InlineFragment",
                                                                                                                selections: [
                                                                                                                    {
                                                                                                                        alias: null,
                                                                                                                        args: null,
                                                                                                                        concreteType: "TimelineRichText",
                                                                                                                        kind: "LinkedField",
                                                                                                                        name: "text",
                                                                                                                        plural: !1,
                                                                                                                        selections: [
                                                                                                                            {
                                                                                                                                alias: null,
                                                                                                                                args: null,
                                                                                                                                concreteType: "TimelineRichTextEntity",
                                                                                                                                kind: "LinkedField",
                                                                                                                                name: "entities",
                                                                                                                                plural: !0,
                                                                                                                                selections: [
                                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "format", storageKey: null },
                                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "from_index", storageKey: null },
                                                                                                                                    {
                                                                                                                                        alias: null,
                                                                                                                                        args: null,
                                                                                                                                        concreteType: null,
                                                                                                                                        kind: "LinkedField",
                                                                                                                                        name: "ref",
                                                                                                                                        plural: !1,
                                                                                                                                        selections: [
                                                                                                                                            g,
                                                                                                                                            { kind: "TypeDiscriminator", abstractKey: "__isTimelineReferenceObject" },
                                                                                                                                            { kind: "InlineFragment", selections: (f = [(K = { alias: null, args: null, kind: "ScalarField", name: "text", storageKey: null })]), type: "TimelineRichTextCashtag", abstractKey: null },
                                                                                                                                            { kind: "InlineFragment", selections: [_, (w = { alias: null, args: null, kind: "ScalarField", name: "url", storageKey: null })], type: "TimelineRichTextList", abstractKey: null },
                                                                                                                                            { kind: "InlineFragment", selections: f, type: "TimelineRichTextHashtag", abstractKey: null },
                                                                                                                                            { kind: "InlineFragment", selections: [(S = { alias: null, args: null, concreteType: "UserResults", kind: "LinkedField", name: "user_results", plural: !1, selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [g, { kind: "InlineFragment", selections: [{ alias: null, args: null, kind: "ScalarField", name: "rest_id", storageKey: null }, _], type: "User", abstractKey: null }], storageKey: null }, _], storageKey: null })], type: "TimelineRichTextUser", abstractKey: null },
                                                                                                                                            { kind: "InlineFragment", selections: [S, h], type: "TimelineRichTextMention", abstractKey: null },
                                                                                                                                            {
                                                                                                                                                kind: "InlineFragment",
                                                                                                                                                selections: [
                                                                                                                                                    w,
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
                                                                                                                                                            { alias: "timelineWithContext", args: null, concreteType: "TimelineWithContext", kind: "LinkedField", name: "timeline_with_context", plural: !1, selections: [_, { alias: null, args: null, kind: "ScalarField", name: "context", storageKey: null }], storageKey: null },
                                                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "title", storageKey: null },
                                                                                                                                                        ],
                                                                                                                                                        storageKey: null,
                                                                                                                                                    },
                                                                                                                                                ],
                                                                                                                                                type: "TimelineUrl",
                                                                                                                                                abstractKey: null,
                                                                                                                                            },
                                                                                                                                        ],
                                                                                                                                        storageKey: null,
                                                                                                                                    },
                                                                                                                                    { alias: null, args: null, kind: "ScalarField", name: "to_index", storageKey: null },
                                                                                                                                ],
                                                                                                                                storageKey: null,
                                                                                                                            },
                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "rtl", storageKey: null },
                                                                                                                            K,
                                                                                                                            { alias: null, args: null, kind: "ScalarField", name: "alignment", storageKey: null },
                                                                                                                        ],
                                                                                                                        storageKey: null,
                                                                                                                    },
                                                                                                                ],
                                                                                                                type: "TextTombstone",
                                                                                                                abstractKey: null,
                                                                                                            },
                                                                                                        ],
                                                                                                        storageKey: null,
                                                                                                    },
                                                                                                ],
                                                                                                type: "TweetTombstone",
                                                                                                abstractKey: null,
                                                                                            },
                                                                                        ],
                                                                                        storageKey: null,
                                                                                    },
                                                                                    _,
                                                                                ],
                                                                                type: "TweetResults",
                                                                                abstractKey: null,
                                                                            },
                                                                            { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: null, kind: "LinkedField", name: "result", plural: !1, selections: [g, { kind: "InlineFragment", selections: [{ alias: null, args: null, concreteType: "ApiUser", kind: "LinkedField", name: "legacy", plural: !1, selections: [y, { alias: "idStr", args: null, kind: "ScalarField", name: "id_str", storageKey: null }, b, k, h], storageKey: null }, F, _], type: "User", abstractKey: null }], storageKey: null }, _], type: "UserResults", abstractKey: null },
                                                                        ],
                                                                        storageKey: null,
                                                                    },
                                                                    d,
                                                                    p,
                                                                    m,
                                                                ],
                                                                storageKey: null,
                                                            },
                                                            _,
                                                        ],
                                                        type: "User",
                                                        abstractKey: null,
                                                    },
                                                ],
                                                storageKey: null,
                                            },
                                            _,
                                        ],
                                        storageKey: null,
                                    },
                                ],
                                storageKey: 'viewer_v2(s:"7f13")',
                            },
                        ],
                    },
                    params: { id: "p_25S7FUTca-Ls6hT2Wu_Q", metadata: {}, name: "ReportDetailQuery", operationKind: "query", text: null },
                };
            E.hash = "e9eed8d592e76b49f0c5ac5b9791f86b";
            const x = E;
            var L = a(202784),
                B = a(325686),
                Z = (a(585488), a(107267)),
                R = a(731708),
                I = a(593866),
                v = a(868634),
                P = a(470397),
                C = a(386802),
                U = a(392237),
                M = a(674132),
                V = a.n(M),
                D = a(189700),
                z = a(200112),
                A = a(450681),
                H = a(143778),
                W = a(323265),
                N = a(980407),
                O = a(430759),
                q = a(443781),
                Q = a(736063),
                G = a(725516),
                $ = a(535338),
                j = a(17164);
            const Y = V().e37836f8,
                J = V().ccf2f24e,
                X = V().fb35e52a,
                ee = V().e238c590,
                le = V().if218e60,
                ae = V().b6dc1984,
                ne = V().b0a16894,
                te = [V().d4716820, V().e899a534, V().d9c4e7ae],
                re = V().afb51066,
                ie = "gray700",
                se = V().b7ba712a,
                oe = V().d90b8c04,
                ce = V().c2d0494a,
                ue = V().be46e000,
                de = V().e846ae32,
                pe = V().e3647d08,
                me = V().gad89c4a,
                ge = V().h7fa9240,
                ye = V().fb2ff552,
                ke = V().bb57e8c0,
                he = V().b9ce59ba,
                be = x,
                Fe = (e) => {
                    const l = e?.verdict,
                        a = e?.outcome_text,
                        n = a ? a.replace(/\\n/g, "\n") : "",
                        t = e?.actioned_report_type,
                        r = [
                            { decoration: L.createElement(D.default, { style: fe.icon }), label: ue, description: de },
                            { decoration: L.createElement(z.default, { style: fe.icon }), label: pe, description: me },
                        ];
                    return L.createElement(
                        L.Fragment,
                        null,
                        l
                            ? L.createElement(
                                  v.ZP,
                                  { style: fe.label },
                                  L.createElement(
                                      R.ZP,
                                      { style: fe.labelText },
                                      ((e) => {
                                          switch (e) {
                                              case "NoViolation":
                                                  return oe;
                                              case "Violation":
                                                  return se;
                                              default:
                                                  return "";
                                          }
                                      })(l).toUpperCase(),
                                  ),
                              )
                            : null,
                        L.createElement(R.ZP, { color: ie }, n),
                        (() => {
                            if ("EncouragingSelfHarm" === t)
                                return L.createElement(
                                    R.ZP,
                                    { color: ie },
                                    "\n",
                                    L.createElement("strong", null, ge, " "),
                                    " ",
                                    ye,
                                    "\n\n",
                                    L.createElement("strong", null, ke, " "),
                                    (() => {
                                        const e = () => L.createElement(V().I18NFormatMessage, { $i18n: "ef72b01b" }, L.createElement(R.ZP, { link: "https://findahelpline.com/i/iasp" }, V().d42899ad));
                                        return L.createElement(R.ZP, { style: fe.selfHarmLabel }, L.createElement(e, null));
                                    })(),
                                    "\n\n",
                                    he,
                                );
                        })(),
                        (() => {
                            if ("NonConsensualNudity" === t || "PrivateInfo" === t) return L.createElement(L.Fragment, null, L.createElement(R.ZP, { role: "heading", size: "headline1", style: fe.headline, weight: "heavy" }, ce), L.createElement(I.Z, { items: r }));
                        })(),
                    );
                },
                _e = (e) => {
                    switch (e?.report_status || "") {
                        case "Open":
                            return L.createElement(
                                L.Fragment,
                                null,
                                L.createElement(R.ZP, { size: "headline1", style: fe.headline, weight: "heavy" }, ee),
                                L.createElement(R.ZP, { color: ie, size: "body", weight: "normal" }, le),
                                L.createElement(R.ZP, { size: "headline1", style: fe.headline, weight: "heavy" }, ae),
                                L.createElement(R.ZP, { color: ie, size: "body", weight: "normal" }, ne),
                                L.createElement(
                                    "ul",
                                    null,
                                    te.map((e, l) => L.createElement("li", { key: l }, L.createElement(R.ZP, { color: ie, size: "body", weight: "normal" }, e))),
                                ),
                                L.createElement(R.ZP, { color: ie, size: "body", weight: "normal" }, re),
                            );
                        case "Reviewed":
                            return Fe(e);
                        default:
                            return null;
                    }
                },
                Te = () => {
                    const e = (0, Z.useParams)(),
                        l = (0, $.p)(be, { reportId: e.reportId || "" }, { fetchPolicy: "network-only" });
                    if (!l) return null;
                    const a = l?.viewer_v2?.user_results?.result?.report_detail,
                        n = a?.last_update_time
                            ? ((e) => {
                                  const l = V().ba2e82a1,
                                      a = parseInt(e, 10);
                                  return l(new Date(a));
                              })(a?.last_update_time)
                            : "",
                        t = a?.header,
                        r = a?.report_entities_results,
                        i = a?.rule_link;
                    return L.createElement(L.Fragment, null, L.createElement(P.Z, { color: ie }, L.createElement(R.ZP, { color: ie, weight: "bold" }, J), L.createElement(R.ZP, { color: ie }, n)), L.createElement(R.ZP, { size: "title4", style: fe.header, weight: "heavy" }, t), L.createElement(R.ZP, { link: i }, X), r ? L.createElement(O.Z, { report: (0, A.Z)(r) }) : null, _e(a));
                },
                Ke = (0, G.Z)(
                    () => {
                        const e = (0, Z.useHistory)(),
                            { isModal: l } = L.useContext(C.Z),
                            a = H.Z,
                            n = W.ZP.isTwitterApp(),
                            t = (0, Z.useParams)(),
                            { featureSwitches: r } = L.useContext(q.rC),
                            i = r.isTrue("sc_r4_enabled"),
                            s = L.useMemo(() => (n ? a : void 0), [n, a]);
                        return i && t.reportId ? L.createElement(j.Z, { to: `/i/safety_center/reports/${t.reportId}` }) : L.createElement(N.Z, { backButtonType: "close", containerStyle: fe.root, documentTitle: Y, history: e, renderHeader: s }, L.createElement(B.Z, { style: [fe.contentBody, l ? fe.wideScreen : fe.narrowScreen] }, L.createElement(Q.H, { errorConfig: { context: "REPORT_DETAIL" } }, L.createElement(Te, null))));
                    },
                    { page: "report_center", component: "report_detail" },
                ),
                fe = U.default.create((e) => ({ contentBody: { alignItems: "left", marginTop: e.spaces.space20 }, header: { marginVertical: e.spaces.space8 }, headline: { marginBottom: e.spaces.space8, marginTop: e.spaces.space20 }, iconTwitter: { color: e.colors.primary, flexGrow: 1, height: "1.75rem" }, narrowScreen: { marginBottom: `calc(${e.spaces.space20} + ${U.default.iPhoneOffsetBottom})`, marginHorizontal: e.spaces.space32 }, root: { flexShrink: 1, flexGrow: 1, paddingBottom: e.spaces.space32 }, tombstone: { border: "none", marginHorizontal: e.spaces.space32, marginVertical: e.spaces.space20 }, wideScreen: { marginBottom: e.spaces.space20, marginHorizontal: e.spaces.space72 }, icon: { color: e.colors.primary, height: "1.5rem", marginEnd: e.spaces.space20, marginTop: e.spaces.space2 }, label: { backgroundColor: e.colors.blue50, marginBottom: e.spaces.space12, marginTop: e.spaces.space20 }, labelText: { color: e.colors.blue900 }, selfHarmLabel: { whiteSpace: "pre-line" } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.ReportCenter.2c884b9a.js.map
