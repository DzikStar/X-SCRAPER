"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterArticles-6107ac1a", "icons/IconFolderArrowLeft-js"],
    {
        37475: (e, t, r) => {
            r.d(t, { d: () => a });
            const a = Object.freeze({ Public: "Public", Subscribers: "Subscribers" });
        },
        656069: (e, t, r) => {
            r.d(t, { Z: () => k });
            var a = r(506899),
                i = r(414742),
                l = r(679129),
                s = r(805020),
                o = r.n(s),
                n = r(803386),
                c = r.n(n),
                d = r(322821),
                u = r.n(d),
                h = r(93595),
                p = r.n(h),
                g = r(53605),
                b = r.n(g),
                m = r(672075),
                y = r.n(m),
                f = r(196969),
                C = r.n(f),
                _ = r(553600),
                v = r.n(_),
                E = r(446405),
                Z = r.n(E),
                w = r(934309);
            const k = ({ apiClient: e, featureSwitches: t }) => ({
                createDraftArticle(t) {
                    const { content_state: r, title: i } = t;
                    return e.graphQL(u(), { content_state: r, title: i }).then((e) => (0, a.Fv)(e.articleentity_create_draft?.article_entity_results?.result, l.Z));
                },
                fetchArticleEntity(t) {
                    const { articleEntityId: r } = t;
                    return e.graphQL(b(), { articleEntityId: r }).then((e) => (0, a.Fv)(e.article_result_by_rest_id?.result, l.Z));
                },
                deleteArticleEntity(t) {
                    const { articleEntityId: r } = t;
                    return e.graphQL(c(), { articleEntityId: r }).then((e) => e.articleentity_delete);
                },
                updateArticleEntityContent(t) {
                    const { articleEntityId: r, content_state: i } = t;
                    return e.graphQL(C(), { content_state: i, article_entity: r }).then((e) => (0, a.Fv)(e.articleentity_update_content_state, l.Z));
                },
                updateArticleEntityCoverMedia(t) {
                    const { articleEntityId: r, mediaCategory: i, mediaId: s } = t;
                    return e.graphQL(v(), { articleEntityId: r, coverMedia: s && i ? { media_id: s, media_category: i } : void 0 }).then((e) => (0, a.Fv)(e.articleentity_update_cover_media, l.Z));
                },
                updateArticleEntityTitle(t) {
                    const { articleEntityId: r, title: i } = t;
                    return e.graphQL(Z(), { articleEntityId: r, title: i }).then((e) => (0, a.Fv)(e.articleentity_update_title, l.Z));
                },
                publishArticleEntity(t) {
                    const { articleEntityId: r, conversationControl: i, visibilitySetting: s } = t;
                    return e.graphQL(p(), { articleEntityId: r, visibilitySetting: s, ...(i && { conversationControl: { mode: i } }) }).then((e) => (0, a.Fv)(e.articleentity_publish?.article_entity_results?.result, l.Z));
                },
                unpublishArticleEntity(t) {
                    const { articleEntityId: r } = t;
                    return e.graphQL(y(), { articleEntityId: r }).then((e) => (0, a.Fv)(e.articleentity_unpublish?.article_entity_results?.result, l.Z));
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
                                              { entities: i, result: s } = (0, a.Fv)(
                                                  t?.map((e) => e.article_entity_results?.result),
                                                  [l.Z],
                                              );
                                          return { entities: i, result: s, slice_info: r };
                                      }
                                  }
                                  return w.d;
                              })
                        : Promise.resolve(w.d),
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
            r.d(t, { Z: () => s });
            var a = r(202784),
                i = r(325686),
                l = r(392237);
            function s({ spacing: e, style: t }) {
                return a.createElement(i.Z, { role: "separator", style: [o.divider, { marginVertical: null != e ? l.default.theme.spaces[e] : void 0 }, t] });
            }
            const o = l.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        879113: (e, t, r) => {
            r.d(t, { Z: () => p });
            var a = r(202784),
                i = r(476984),
                l = r.n(i),
                s = r(143778),
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
                    return !(!t && !r) || !l()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: r, fetchStatus: i, icon: l, loadingMessage: s, onRequestRetry: d, render: p, renderFailure: g, retryMessage: b, retryable: m } = this.props;
                    switch (i) {
                        case c:
                            return m ? a.createElement(o.Z, { icon: l, onRequestRetry: d, retryMessage: b }) : r ? a.createElement(n.m, { failureMessage: r }) : g();
                        case u:
                            return a.createElement(n.J, { "aria-label": e, color: t, loadingMessage: s });
                        case h:
                            return null;
                        default:
                            return p();
                    }
                }
            }
            p.defaultProps = { renderFailure: s.Z, retryable: !0 };
        },
        392027: (e, t, r) => {
            r.d(t, { Z: () => n });
            var a = r(202784),
                i = r(154003),
                l = r(392237);
            class s extends a.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: t, color: r, disabled: l, href: s, icon: n, label: c, onPress: d, renderMenu: u, style: h, testID: p } = this.props,
                        g = ((e, t) => ("primary" === e && "white" === t ? "whiteOnColor" : "white" === e && "primary" === t ? "primaryOnWhite" : t))(t, r);
                    return a.createElement(i.ZP, { "aria-label": e, backgroundColor: t, color: g, disabled: l, icon: n, link: s, onPress: d, renderMenu: u, size: "xLarge", style: [o.root, !c && o.iconOnly, h], testID: p }, c);
                }
            }
            s.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const o = l.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                n = s;
        },
        420412: (e, t, r) => {
            r.d(t, { Z: () => n });
            var a = r(202784),
                i = r(325686),
                l = r(235902),
                s = r(885015),
                o = r(392237);
            function n({ borderColor: e = "borderColor", isSlim: t = !1, label: r }) {
                const { isWebRedesign: n } = l.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: o.default.theme.colors[e] ?? o.default.theme.colors.borderColor };
                return r ? a.createElement(s.Z, { style: !t && c.root, withGutter: !0 }, a.createElement(i.Z, { style: c.gapColumn }, a.createElement(i.Z, { style: [c.gap, d] })), a.createElement(i.Z, { style: c.gapText }, r), a.createElement(i.Z, { style: c.gapColumn }, a.createElement(i.Z, { style: [c.gap, d] }))) : a.createElement(i.Z, { style: [!t && c.root, n() && c.rootRedesign, c.gap, d] });
            }
            const c = o.default.create((e) => ({ borderColor: { backgroundColor: o.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: o.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, r) => {
            r.d(t, { Z: () => c });
            var a = r(807896),
                i = r(202784),
                l = r(325686),
                s = r(392237);
            class o extends i.Component {
                render() {
                    const { children: e, style: t, withGutter: r, ...s } = this.props,
                        o = i.Children.map(e, (e) => e && i.cloneElement(e, { style: [e.props.style, n.column, r && n.withGutterColumn] }));
                    return i.createElement(l.Z, (0, a.Z)({ style: [t, n.root, r && n.withGutter] }, s), o);
                }
            }
            o.defaultProps = { withGutter: !1 };
            const n = s.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = o;
        },
        449479: (e, t, r) => {
            r.d(t, { Z: () => f });
            var a = r(202784),
                i = r(325686),
                l = r(913973),
                s = r(731708),
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
                    const { "aria-posinset": e, "aria-setsize": t, checked: r, disabled: u, helpText: p, label: b, name: m, testID: y } = this.props,
                        f = c.Z.generate({ backgroundColor: h.default.theme.colors.transparent, color: h.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        C = c.Z.generate({ backgroundColor: h.default.theme.colors.transparent, color: h.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        _ = r ? f : C;
                    return a.createElement(n.Z, { disabled: u }, (n) => a.createElement(i.Z, { role: "label", style: [g.root, !u && g.interactive], testID: y }, a.createElement(i.Z, { style: g.topContainer }, a.createElement(s.ZP, { id: this.labelId }, b), a.createElement(i.Z, { style: g.radioContainer }, a.createElement(d.Z, { interactiveStyles: _, interactivityState: n, style: g.radioBackground }, a.createElement(i.Z, { style: [g.circle, r && g.circleActive, u && g.circleDisabled, r && u && g.circleCheckedAndDisabled] }, r ? a.createElement(l.default, { style: g.checkMark }) : null)), (0, o.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: r, disabled: u, name: m, onChange: this._handleChange, ref: this._setRef, style: [g.nativeControl], type: "radio" }))), p ? a.createElement(s.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: g.helpText }, p) : null));
                }
                focus() {
                    this._ref && this._ref.focus();
                }
            }
            p.defaultProps = { disabled: !1, checked: !1 };
            const g = h.default.create((e) => ({ root: { paddingVertical: e.spaces.space4 }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, interactive: { cursor: "pointer" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space20 }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, nativeControl: { ...h.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, helpText: { paddingTop: e.spaces.space4 } })),
                b = p,
                m = "radioGroup";
            let y = 1;
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
                        (this._labelId = `RADIO_GROUP_${y}_LABEL`),
                        (y += 1);
                }
                render() {
                    const { "aria-label": e, description: t, disabled: r, label: l, name: o, options: n, value: c } = this.props;
                    return a.createElement(
                        i.Z,
                        { "aria-label": e, "aria-labelledby": l && !e ? this._labelId : void 0, role: "radiogroup", style: r && C.disabled, testID: `${m}${o}` },
                        l ? a.createElement(i.Z, { id: this._labelId, role: "label", style: C.header }, a.createElement(s.ZP, { style: C.label, weight: "bold" }, l), t ? a.createElement(s.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        n.map((e, t) => a.createElement(b, { "aria-posinset": t + 1, "aria-setsize": n.length, checked: e.value === c, disabled: r, helpText: e.helpText, key: e.value, label: e.label, name: o, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === c), testID: e.testID })),
                    );
                }
            }
            f.defaultProps = { disabled: !1 };
            const C = h.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        745088: (e, t, r) => {
            r.r(t), r.d(t, { default: () => n });
            var a = r(202784),
                i = r(890601),
                l = r(783427),
                s = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M11 18v2H4.502c-1.378 0-2.5-1.121-2.5-2.5V3h8.535l2 3h9.465v7h-2V8h-8.535l-2-3H4.002v12.5c0 .275.224.5.5.5H11zm8.502 0h-2.073l2-2-1.414-1.414L13.601 19l4.414 4.414L19.429 22l-2-2H23v-2h-3.498z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const n = o;
        },
        391366: (e, t, r) => {
            r.r(t), r.d(t, { default: () => n });
            var a = r(202784),
                i = r(890601),
                l = r(783427),
                s = r(347101);
            const o = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, i.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [s.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M18 1.2v21.6L8.71 17H5.5C4.12 17 3 15.88 3 14.5v-5C3 8.12 4.12 7 5.5 7h3.21L18 1.2zM8 9H5.5c-.28 0-.5.22-.5.5v5c0 .28.22.5.5.5H8V9zm2 6.45l6 3.75V4.8l-6 3.75v6.9z" })) }, { writingDirection: t });
            };
            o.metadata = { width: 24, height: 24 };
            const n = o;
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
                        const l = t ? t(a, i, e) : !!a;
                        return l && r[0].push(a), !l && r[1].push(a), r;
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterArticles-6107ac1a.f943323a.js.map
