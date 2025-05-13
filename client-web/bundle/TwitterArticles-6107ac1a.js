"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterArticles-6107ac1a"],
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
                o = r(594771),
                l = r.n(o),
                n = r(551e3),
                c = r.n(n),
                d = r(486962),
                h = r.n(d),
                u = r(207318),
                p = r.n(u),
                g = r(244275),
                b = r.n(g),
                y = r(51864),
                m = r.n(y),
                _ = r(118869),
                f = r.n(_),
                C = r(342454),
                E = r.n(C),
                v = r(433579),
                D = r.n(v),
                Z = r(934309);
            const I = ({ apiClient: e, featureSwitches: t }) => ({
                createDraftArticle(t) {
                    const { content_state: r, title: i } = t;
                    return e.graphQL(h(), { content_state: r, title: i }).then((e) => (0, a.Fv)(e.articleentity_create_draft?.article_entity_results?.result, s.Z));
                },
                fetchArticleEntity(t) {
                    const { articleEntityId: r } = t;
                    return e.graphQL(b(), { articleEntityId: r }).then((e) => (0, a.Fv)(e.article_result_by_rest_id?.result, s.Z));
                },
                deleteArticleEntity(t) {
                    const { articleEntityId: r } = t;
                    return e.graphQL(c(), { articleEntityId: r }).then((e) => e.articleentity_delete);
                },
                updateArticleEntityContent(t) {
                    const { articleEntityId: r, content_state: i } = t;
                    return e.graphQL(f(), { content_state: i, article_entity: r }).then((e) => (0, a.Fv)(e.articleentity_update_content_state, s.Z));
                },
                updateArticleEntityCoverMedia(t) {
                    const { articleEntityId: r, mediaCategory: i, mediaId: o } = t;
                    return e.graphQL(E(), { articleEntityId: r, coverMedia: o && i ? { media_id: o, media_category: i } : void 0 }).then((e) => (0, a.Fv)(e.articleentity_update_cover_media, s.Z));
                },
                updateArticleEntityTitle(t) {
                    const { articleEntityId: r, title: i } = t;
                    return e.graphQL(D(), { articleEntityId: r, title: i }).then((e) => (0, a.Fv)(e.articleentity_update_title, s.Z));
                },
                publishArticleEntity(t) {
                    const { articleEntityId: r, conversationControl: i, visibilitySetting: o } = t;
                    return e.graphQL(p(), { articleEntityId: r, visibilitySetting: o, ...(i && { conversationControl: { mode: i } }) }).then((e) => (0, a.Fv)(e.articleentity_publish?.article_entity_results?.result, s.Z));
                },
                unpublishArticleEntity(t) {
                    const { articleEntityId: r } = t;
                    return e.graphQL(m(), { articleEntityId: r }).then((e) => (0, a.Fv)(e.articleentity_unpublish?.article_entity_results?.result, s.Z));
                },
                fetchArticleEntitiesSlice: (t) =>
                    t && t.lifecycle
                        ? e
                              .graphQL(
                                  l(),
                                  t,
                                  (0, i.kj)((e) => !e?.user?.result?.articles_article_mixer_slice, "GQL ArticleEntities: Failed to fetch Articles Slice"),
                              )
                              .then((e) => {
                                  const t = e?.user.result;
                                  if ("User" === t?.__typename) {
                                      const e = t?.articles_article_mixer_slice;
                                      if (e) {
                                          const { items: t, slice_info: r } = e,
                                              { entities: i, result: o } = (0, a.Fv)(
                                                  t?.map((e) => e.article_entity_results?.result),
                                                  [s.Z],
                                              );
                                          return { entities: i, result: o, slice_info: r };
                                      }
                                  }
                                  return Z.d;
                              })
                        : Promise.resolve(Z.d),
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
        15038: (e, t, r) => {
            r.d(t, { ZP: () => d });
            var a = r(202784),
                i = r(325686),
                s = r(950822),
                o = r(392237);
            const l = (e) => (0, s.Z)("div", e);
            class n extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this._dragEnterCount = 0),
                        (this.state = { active: !1 }),
                        (this._handleDragDrop = (e) => {
                            const { onFilesAdded: t } = this.props;
                            e.preventDefault();
                            t(Array.from(e && e.dataTransfer.files)), this._updateDragCount(0);
                        }),
                        (this._handleDragEnter = (e) => {
                            const { onDragEnter: t } = this.props;
                            e.preventDefault(), t && t(), this._updateDragCount(this._dragEnterCount + 1);
                        }),
                        (this._handleDragLeave = (e) => {
                            e.preventDefault(), this._updateDragCount(this._dragEnterCount - 1);
                        }),
                        (this._handleDragOver = (e) => {
                            e.preventDefault();
                        });
                }
                render() {
                    const { activeStyle: e, allowDragDrop: t, children: r, style: s } = this.props,
                        { active: o } = this.state,
                        n = t ? c.dragBorderValid : c.dragBorderInvalid;
                    return a.createElement(l, { onDragEnter: this._handleDragEnter, onDragLeave: this._handleDragLeave, onDragOver: this._handleDragOver, onDrop: this._handleDragDrop, style: [c.root, s, o && n, o && e] }, a.createElement(i.Z, { style: c.inner }, "function" == typeof r ? r(o) : r));
                }
                _updateDragCount(e) {
                    (this._dragEnterCount = e), 0 === this._dragEnterCount ? this.setState({ active: !1 }) : this._dragEnterCount > 0 && this.setState({ active: !0 });
                }
            }
            n.defaultProps = { allowDragDrop: !0 };
            const c = o.default.create((e) => ({ root: { display: "flex", flexDirection: "column" }, dragBorderValid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.primary }, dragBorderInvalid: { borderStyle: "dashed", borderWidth: e.spaces.space2, borderColor: e.colors.magenta500 }, inner: { flexGrow: 1 } })),
                d = n;
        },
        392027: (e, t, r) => {
            r.d(t, { Z: () => n });
            var a = r(202784),
                i = r(154003),
                s = r(392237);
            class o extends a.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: t, color: r, disabled: s, href: o, icon: n, label: c, onPress: d, renderMenu: h, style: u, testID: p } = this.props,
                        g = ((e, t) => ("primary" === e && "white" === t ? "whiteOnColor" : "white" === e && "primary" === t ? "primaryOnWhite" : t))(t, r);
                    return a.createElement(i.ZP, { "aria-label": e, backgroundColor: t, color: g, disabled: s, icon: n, link: o, onPress: d, renderMenu: h, size: "xLarge", style: [l.root, !c && l.iconOnly, u], testID: p }, c);
                }
            }
            o.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const l = s.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                n = o;
        },
        420412: (e, t, r) => {
            r.d(t, { Z: () => n });
            var a = r(202784),
                i = r(325686),
                s = r(235902),
                o = r(885015),
                l = r(392237);
            function n({ borderColor: e = "borderColor", isSlim: t = !1, label: r }) {
                const { isWebRedesign: n } = s.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: l.default.theme.colors[e] ?? l.default.theme.colors.borderColor };
                return r ? a.createElement(o.Z, { style: !t && c.root, withGutter: !0 }, a.createElement(i.Z, { style: c.gapColumn }, a.createElement(i.Z, { style: [c.gap, d] })), a.createElement(i.Z, { style: c.gapText }, r), a.createElement(i.Z, { style: c.gapColumn }, a.createElement(i.Z, { style: [c.gap, d] }))) : a.createElement(i.Z, { style: [!t && c.root, n() && c.rootRedesign, c.gap, d] });
            }
            const c = l.default.create((e) => ({ borderColor: { backgroundColor: l.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: l.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, r) => {
            r.d(t, { Z: () => c });
            var a = r(807896),
                i = r(202784),
                s = r(325686),
                o = r(392237);
            class l extends i.Component {
                render() {
                    const { children: e, style: t, withGutter: r, ...o } = this.props,
                        l = i.Children.map(e, (e) => e && i.cloneElement(e, { style: [e.props.style, n.column, r && n.withGutterColumn] }));
                    return i.createElement(s.Z, (0, a.Z)({ style: [t, n.root, r && n.withGutter] }, o), l);
                }
            }
            l.defaultProps = { withGutter: !1 };
            const n = o.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = l;
        },
        449479: (e, t, r) => {
            r.d(t, { Z: () => _ });
            var a = r(202784),
                i = r(325686),
                s = r(913973),
                o = r(731708),
                l = r(950822),
                n = r(466792),
                c = r(58881),
                d = r(530732),
                h = r(352924),
                u = r(392237);
            class p extends a.Component {
                constructor(...e) {
                    super(...e),
                        (this.labelId = (0, h.F)()),
                        (this.descriptionId = (0, h.F)()),
                        (this._handleChange = (e) => {
                            const { checked: t, onChange: r } = this.props;
                            r && !t && r(e.nativeEvent.target.checked);
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        });
                }
                render() {
                    const { "aria-posinset": e, "aria-setsize": t, checked: r, disabled: h, helpText: p, label: b, name: y, testID: m } = this.props,
                        _ = c.Z.generate({ backgroundColor: u.default.theme.colors.transparent, color: u.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        f = c.Z.generate({ backgroundColor: u.default.theme.colors.transparent, color: u.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        C = r ? _ : f;
                    return a.createElement(n.Z, { disabled: h }, (n) => a.createElement(i.Z, { role: "label", style: [g.root, !h && g.interactive], testID: m }, a.createElement(i.Z, { style: g.topContainer }, a.createElement(o.ZP, { id: this.labelId }, b), a.createElement(i.Z, { style: g.radioContainer }, a.createElement(d.Z, { interactiveStyles: C, interactivityState: n, style: g.radioBackground }, a.createElement(i.Z, { style: [g.circle, r && g.circleActive, h && g.circleDisabled, r && h && g.circleCheckedAndDisabled] }, r ? a.createElement(s.default, { style: g.checkMark }) : null)), (0, l.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: r, disabled: h, name: y, onChange: this._handleChange, ref: this._setRef, style: [g.nativeControl], type: "radio" }))), p ? a.createElement(o.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: g.helpText }, p) : null));
                }
                focus() {
                    this._ref && this._ref.focus();
                }
            }
            p.defaultProps = { disabled: !1, checked: !1 };
            const g = u.default.create((e) => ({ root: { paddingVertical: e.spaces.space4 }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, interactive: { cursor: "pointer" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space20 }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, nativeControl: { ...u.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, helpText: { paddingTop: e.spaces.space4 } })),
                b = p,
                y = "radioGroup";
            let m = 1;
            class _ extends a.Component {
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
                    const { "aria-label": e, description: t, disabled: r, label: s, name: l, options: n, value: c } = this.props;
                    return a.createElement(
                        i.Z,
                        { "aria-label": e, "aria-labelledby": s && !e ? this._labelId : void 0, role: "radiogroup", style: r && f.disabled, testID: `${y}${l}` },
                        s ? a.createElement(i.Z, { id: this._labelId, role: "label", style: f.header }, a.createElement(o.ZP, { style: f.label, weight: "bold" }, s), t ? a.createElement(o.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        n.map((e, t) => a.createElement(b, { "aria-posinset": t + 1, "aria-setsize": n.length, checked: e.value === c, disabled: r, helpText: e.helpText, key: e.value, label: e.label, name: l, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === c), testID: e.testID })),
                    );
                }
            }
            _.defaultProps = { disabled: !1 };
            const f = u.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterArticles-6107ac1a.c3f2960a.js.map
