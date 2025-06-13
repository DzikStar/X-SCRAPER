"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterArticles-6107ac1a", "loader.AudioContextVoiceMedia"],
    {
        37475: (e, t, r) => {
            r.d(t, { d: () => a });
            const a = Object.freeze({ Public: "Public", Subscribers: "Subscribers" });
        },
        656069: (e, t, r) => {
            r.d(t, { Z: () => I });
            var a = r(506899),
                i = r(414742),
                s = r(679129),
                l = r(805020),
                o = r.n(l),
                n = r(803386),
                c = r.n(n),
                d = r(322821),
                u = r.n(d),
                h = r(93595),
                p = r.n(h),
                b = r(53605),
                g = r.n(b),
                y = r(672075),
                m = r.n(y),
                f = r(196969),
                _ = r.n(f),
                C = r(553600),
                E = r.n(C),
                v = r(446405),
                Z = r.n(v),
                k = r(934309);
            const I = ({ apiClient: e, featureSwitches: t }) => ({
                createDraftArticle(t) {
                    const { content_state: r, title: i } = t;
                    return e.graphQL(u(), { content_state: r, title: i }).then((e) => (0, a.Fv)(e.articleentity_create_draft?.article_entity_results?.result, s.Z));
                },
                fetchArticleEntity(t) {
                    const { articleEntityId: r } = t;
                    return e.graphQL(g(), { articleEntityId: r }).then((e) => (0, a.Fv)(e.article_result_by_rest_id?.result, s.Z));
                },
                deleteArticleEntity(t) {
                    const { articleEntityId: r } = t;
                    return e.graphQL(c(), { articleEntityId: r }).then((e) => e.articleentity_delete);
                },
                updateArticleEntityContent(t) {
                    const { articleEntityId: r, content_state: i } = t;
                    return e.graphQL(_(), { content_state: i, article_entity: r }).then((e) => (0, a.Fv)(e.articleentity_update_content_state, s.Z));
                },
                updateArticleEntityCoverMedia(t) {
                    const { articleEntityId: r, mediaCategory: i, mediaId: l } = t;
                    return e.graphQL(E(), { articleEntityId: r, coverMedia: l && i ? { media_id: l, media_category: i } : void 0 }).then((e) => (0, a.Fv)(e.articleentity_update_cover_media, s.Z));
                },
                updateArticleEntityTitle(t) {
                    const { articleEntityId: r, title: i } = t;
                    return e.graphQL(Z(), { articleEntityId: r, title: i }).then((e) => (0, a.Fv)(e.articleentity_update_title, s.Z));
                },
                publishArticleEntity(t) {
                    const { articleEntityId: r, conversationControl: i, visibilitySetting: l } = t;
                    return e.graphQL(p(), { articleEntityId: r, visibilitySetting: l, ...(i && { conversationControl: { mode: i } }) }).then((e) => (0, a.Fv)(e.articleentity_publish?.article_entity_results?.result, s.Z));
                },
                unpublishArticleEntity(t) {
                    const { articleEntityId: r } = t;
                    return e.graphQL(m(), { articleEntityId: r }).then((e) => (0, a.Fv)(e.articleentity_unpublish?.article_entity_results?.result, s.Z));
                },
                fetchArticleEntitiesSlice: (t) =>
                    t && t.lifecycle
                        ? e
                              .graphQL(
                                  o(),
                                  t,
                                  (0, i.kj)((e) => !e?.user?.result?.articles_article_mixer_slice, "GQL ArticleEntities: Failed to fetch Articles Slice"),
                              )
                              .then((e) => {
                                  const t = e?.user.result;
                                  if ("User" === t?.__typename) {
                                      const e = t?.articles_article_mixer_slice;
                                      if (e) {
                                          const { items: t, slice_info: r } = e,
                                              { entities: i, result: l } = (0, a.Fv)(
                                                  t?.map((e) => e.article_entity_results?.result),
                                                  [s.Z],
                                              );
                                          return { entities: i, result: l, slice_info: r };
                                      }
                                  }
                                  return k.d;
                              })
                        : Promise.resolve(k.d),
            });
        },
        174647: (e, t, r) => {
            r.d(t, { Z: () => a });
            const a = ({ apiClient: e, featureSwitches: t }) => ({
                categories: (t, r) => e.get("foundmedia/categories", t, r),
                category(t, r) {
                    const { category: a, ...i } = t;
                    return e.get(`foundmedia/categories/${a}`, i, r);
                },
                search: (t, r) => e.get("foundmedia/search", t, r),
            });
        },
        661810: (e, t, r) => {
            r.d(t, { Z: () => l });
            var a = r(202784),
                i = r(325686),
                s = r(392237);
            function l({ spacing: e, style: t }) {
                return a.createElement(i.Z, { role: "separator", style: [o.divider, { marginVertical: null != e ? s.default.theme.spaces[e] : void 0 }, t] });
            }
            const o = s.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        879113: (e, t, r) => {
            r.d(t, { Z: () => p });
            var a = r(202784),
                i = r(476984),
                s = r.n(i),
                l = r(143778),
                o = r(750410),
                n = r(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                h = "none";
            class p extends a.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        r = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !r) || !s()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: r, fetchStatus: i, icon: s, loadingMessage: l, onRequestRetry: d, render: p, renderFailure: b, retryMessage: g, retryable: y } = this.props;
                    switch (i) {
                        case c:
                            return y ? a.createElement(o.Z, { icon: s, onRequestRetry: d, retryMessage: g }) : r ? a.createElement(n.m, { failureMessage: r }) : b();
                        case u:
                            return a.createElement(n.J, { "aria-label": e, color: t, loadingMessage: l });
                        case h:
                            return null;
                        default:
                            return p();
                    }
                }
            }
            p.defaultProps = { renderFailure: l.Z, retryable: !0 };
        },
        392027: (e, t, r) => {
            r.d(t, { Z: () => n });
            var a = r(202784),
                i = r(154003),
                s = r(392237);
            class l extends a.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: t, color: r, disabled: s, href: l, icon: n, label: c, onPress: d, renderMenu: u, style: h, testID: p } = this.props,
                        b = ((e, t) => ("primary" === e && "white" === t ? "whiteOnColor" : "white" === e && "primary" === t ? "primaryOnWhite" : t))(t, r);
                    return a.createElement(i.ZP, { "aria-label": e, backgroundColor: t, color: b, disabled: s, icon: n, link: l, onPress: d, renderMenu: u, size: "xLarge", style: [o.root, !c && o.iconOnly, h], testID: p }, c);
                }
            }
            l.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const o = s.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                n = l;
        },
        420412: (e, t, r) => {
            r.d(t, { Z: () => n });
            var a = r(202784),
                i = r(325686),
                s = r(235902),
                l = r(885015),
                o = r(392237);
            function n({ borderColor: e = "borderColor", isSlim: t = !1, label: r }) {
                const { isWebRedesign: n } = s.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: o.default.theme.colors[e] ?? o.default.theme.colors.borderColor };
                return r ? a.createElement(l.Z, { style: !t && c.root, withGutter: !0 }, a.createElement(i.Z, { style: c.gapColumn }, a.createElement(i.Z, { style: [c.gap, d] })), a.createElement(i.Z, { style: c.gapText }, r), a.createElement(i.Z, { style: c.gapColumn }, a.createElement(i.Z, { style: [c.gap, d] }))) : a.createElement(i.Z, { style: [!t && c.root, n() && c.rootRedesign, c.gap, d] });
            }
            const c = o.default.create((e) => ({ borderColor: { backgroundColor: o.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: o.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, r) => {
            r.d(t, { Z: () => c });
            var a = r(807896),
                i = r(202784),
                s = r(325686),
                l = r(392237);
            class o extends i.Component {
                render() {
                    const { children: e, style: t, withGutter: r, ...l } = this.props,
                        o = i.Children.map(e, (e) => e && i.cloneElement(e, { style: [e.props.style, n.column, r && n.withGutterColumn] }));
                    return i.createElement(s.Z, (0, a.Z)({ style: [t, n.root, r && n.withGutter] }, l), o);
                }
            }
            o.defaultProps = { withGutter: !1 };
            const n = l.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = o;
        },
        449479: (e, t, r) => {
            r.d(t, { Z: () => f });
            var a = r(202784),
                i = r(325686),
                s = r(913973),
                l = r(731708),
                o = r(950822),
                n = r(466792),
                c = r(58881),
                d = r(530732),
                u = r(352924),
                h = r(392237);
            class p extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this.labelId = (0, u.F)()),
                        (this.descriptionId = (0, u.F)()),
                        (this._handleChange = (e) => {
                            const { checked: t, onChange: r } = this.props;
                            r && !t && r(e.nativeEvent.target.checked);
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        });
                }
                render() {
                    const { "aria-posinset": e, "aria-setsize": t, checked: r, disabled: u, helpText: p, label: g, name: y, testID: m } = this.props,
                        f = c.Z.generate({ backgroundColor: h.default.theme.colors.transparent, color: h.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        _ = c.Z.generate({ backgroundColor: h.default.theme.colors.transparent, color: h.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        C = r ? f : _;
                    return a.createElement(n.Z, { disabled: u }, (n) => a.createElement(i.Z, { role: "label", style: [b.root, !u && b.interactive], testID: m }, a.createElement(i.Z, { style: b.topContainer }, a.createElement(l.ZP, { id: this.labelId }, g), a.createElement(i.Z, { style: b.radioContainer }, a.createElement(d.Z, { interactiveStyles: C, interactivityState: n, style: b.radioBackground }, a.createElement(i.Z, { style: [b.circle, r && b.circleActive, u && b.circleDisabled, r && u && b.circleCheckedAndDisabled] }, r ? a.createElement(s.default, { style: b.checkMark }) : null)), (0, o.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: r, disabled: u, name: y, onChange: this._handleChange, ref: this._setRef, style: [b.nativeControl], type: "radio" }))), p ? a.createElement(l.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: b.helpText }, p) : null));
                }
                focus() {
                    this._ref && this._ref.focus();
                }
            }
            p.defaultProps = { disabled: !1, checked: !1 };
            const b = h.default.create((e) => ({ root: { paddingVertical: e.spaces.space4 }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, interactive: { cursor: "pointer" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space20 }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, nativeControl: { ...h.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, helpText: { paddingTop: e.spaces.space4 } })),
                g = p,
                y = "radioGroup";
            let m = 1;
            class f extends a.Component {
                constructor() {
                    super(),
                        (this._radioRefs = {}),
                        (this._handleItemChanged = (e) => () => {
                            const { name: t, onChange: r } = this.props;
                            r(t, e);
                        }),
                        (this._setRadioRef = (e, t) => (r) => {
                            (this._radioRefs[e] = r), t && (this._radioRefs.checked = e);
                        }),
                        (this.focus = () => {
                            const e = this._radioRefs.checked,
                                t = e ? this._radioRefs[e] : this._radioRefs[0];
                            t && t.focus();
                        }),
                        (this._labelId = `RADIO_GROUP_${m}_LABEL`),
                        (m += 1);
                }
                render() {
                    const { "aria-label": e, description: t, disabled: r, label: s, name: o, options: n, value: c } = this.props;
                    return a.createElement(
                        i.Z,
                        { "aria-label": e, "aria-labelledby": s && !e ? this._labelId : void 0, role: "radiogroup", style: r && _.disabled, testID: `${y}${o}` },
                        s ? a.createElement(i.Z, { id: this._labelId, role: "label", style: _.header }, a.createElement(l.ZP, { style: _.label, weight: "bold" }, s), t ? a.createElement(l.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        n.map((e, t) => a.createElement(g, { "aria-posinset": t + 1, "aria-setsize": n.length, checked: e.value === c, disabled: r, helpText: e.helpText, key: e.value, label: e.label, name: o, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === c), testID: e.testID })),
                    );
                }
            }
            f.defaultProps = { disabled: !1 };
            const _ = h.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        662678: (e, t, r) => {
            r.d(t, { G: () => i, Z: () => a });
            r(136728);
            const a = function (e, t) {
                return i(e, t);
            };
            function i(e, t) {
                return e.reduce(
                    (r, a, i) => {
                        const s = t ? t(a, i, e) : !!a;
                        return s && r[0].push(a), !s && r[1].push(a), r;
                    },
                    [[], []],
                );
            }
        },
        125568: (e, t, r) => {
            r.d(t, { t: () => i });
            var a = r(202784);
            function i() {
                const e = a.useRef(!0);
                return (
                    a.useLayoutEffect(
                        () => () => {
                            e.current = !1;
                        },
                        [],
                    ),
                    a.useCallback(() => e.current, [])
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterArticles-6107ac1a.bb0be39a.js.map
