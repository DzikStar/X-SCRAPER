"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.TwitterArticles-6107ac1a", "icons/IconCameraPlusStroke-js", "icons/IconChevronRight-js", "icons/IconFollowArrowLeft-js", "icons/IconSparkle-js"],
    {
        37475: (e, t, r) => {
            r.d(t, { d: () => i });
            const i = Object.freeze({ Public: "Public", Subscribers: "Subscribers" });
        },
        656069: (e, t, r) => {
            r.d(t, { Z: () => I });
            var i = r(506899),
                a = r(414742),
                l = r(679129),
                o = r(805020),
                n = r.n(o),
                s = r(803386),
                c = r.n(s),
                d = r(322821),
                h = r.n(d),
                u = r(93595),
                p = r.n(u),
                g = r(53605),
                m = r.n(g),
                b = r(672075),
                y = r.n(b),
                v = r(196969),
                f = r.n(v),
                C = r(553600),
                _ = r.n(C),
                Z = r(446405),
                E = r.n(Z),
                w = r(934309);
            const I = ({ apiClient: e, featureSwitches: t }) => ({
                createDraftArticle(t) {
                    const { content_state: r, title: a } = t;
                    return e.graphQL(h(), { content_state: r, title: a }).then((e) => (0, i.Fv)(e.articleentity_create_draft?.article_entity_results?.result, l.Z));
                },
                fetchArticleEntity(t) {
                    const { articleEntityId: r } = t;
                    return e.graphQL(m(), { articleEntityId: r }).then((e) => (0, i.Fv)(e.article_result_by_rest_id?.result, l.Z));
                },
                deleteArticleEntity(t) {
                    const { articleEntityId: r } = t;
                    return e.graphQL(c(), { articleEntityId: r }).then((e) => e.articleentity_delete);
                },
                updateArticleEntityContent(t) {
                    const { articleEntityId: r, content_state: a } = t;
                    return e.graphQL(f(), { content_state: a, article_entity: r }).then((e) => (0, i.Fv)(e.articleentity_update_content_state, l.Z));
                },
                updateArticleEntityCoverMedia(t) {
                    const { articleEntityId: r, mediaCategory: a, mediaId: o } = t;
                    return e.graphQL(_(), { articleEntityId: r, coverMedia: o && a ? { media_id: o, media_category: a } : void 0 }).then((e) => (0, i.Fv)(e.articleentity_update_cover_media, l.Z));
                },
                updateArticleEntityTitle(t) {
                    const { articleEntityId: r, title: a } = t;
                    return e.graphQL(E(), { articleEntityId: r, title: a }).then((e) => (0, i.Fv)(e.articleentity_update_title, l.Z));
                },
                publishArticleEntity(t) {
                    const { articleEntityId: r, conversationControl: a, visibilitySetting: o } = t;
                    return e.graphQL(p(), { articleEntityId: r, visibilitySetting: o, ...(a && { conversationControl: { mode: a } }) }).then((e) => (0, i.Fv)(e.articleentity_publish?.article_entity_results?.result, l.Z));
                },
                unpublishArticleEntity(t) {
                    const { articleEntityId: r } = t;
                    return e.graphQL(y(), { articleEntityId: r }).then((e) => (0, i.Fv)(e.articleentity_unpublish?.article_entity_results?.result, l.Z));
                },
                fetchArticleEntitiesSlice: (t) =>
                    t && t.lifecycle
                        ? e
                              .graphQL(
                                  n(),
                                  t,
                                  (0, a.kj)((e) => !e?.user?.result?.articles_article_mixer_slice, "GQL ArticleEntities: Failed to fetch Articles Slice"),
                              )
                              .then((e) => {
                                  const t = e?.user.result;
                                  if ("User" === t?.__typename) {
                                      const e = t?.articles_article_mixer_slice;
                                      if (e) {
                                          const { items: t, slice_info: r } = e,
                                              { entities: a, result: o } = (0, i.Fv)(
                                                  t?.map((e) => e.article_entity_results?.result),
                                                  [l.Z],
                                              );
                                          return { entities: a, result: o, slice_info: r };
                                      }
                                  }
                                  return w.d;
                              })
                        : Promise.resolve(w.d),
            });
        },
        174647: (e, t, r) => {
            r.d(t, { Z: () => i });
            const i = ({ apiClient: e, featureSwitches: t }) => ({
                categories: (t, r) => e.get("foundmedia/categories", t, r),
                category(t, r) {
                    const { category: i, ...a } = t;
                    return e.get(`foundmedia/categories/${i}`, a, r);
                },
                search: (t, r) => e.get("foundmedia/search", t, r),
            });
        },
        661810: (e, t, r) => {
            r.d(t, { Z: () => o });
            var i = r(202784),
                a = r(325686),
                l = r(392237);
            function o({ spacing: e, style: t }) {
                return i.createElement(a.Z, { role: "separator", style: [n.divider, { marginVertical: null != e ? l.default.theme.spaces[e] : void 0 }, t] });
            }
            const n = l.default.create((e) => ({ divider: { backgroundColor: e.colors.borderColor, height: e.borderWidths.small } }));
        },
        392027: (e, t, r) => {
            r.d(t, { Z: () => s });
            var i = r(202784),
                a = r(154003),
                l = r(392237);
            class o extends i.PureComponent {
                render() {
                    const { "aria-label": e, backgroundColor: t, color: r, disabled: l, href: o, icon: s, label: c, onPress: d, renderMenu: h, style: u, testID: p } = this.props,
                        g = ((e, t) => ("primary" === e && "white" === t ? "whiteOnColor" : "white" === e && "primary" === t ? "primaryOnWhite" : t))(t, r);
                    return i.createElement(a.ZP, { "aria-label": e, backgroundColor: t, color: g, disabled: l, icon: s, link: o, onPress: d, renderMenu: h, size: "xLarge", style: [n.root, !c && n.iconOnly, u], testID: p }, c);
                }
            }
            o.defaultProps = { backgroundColor: "primary", color: "white", disabled: !1 };
            const n = l.default.create((e) => ({ root: { borderWidth: 0, height: e.spaces.space48, boxShadow: e.boxShadows.small }, iconOnly: { height: e.spaces.space56, width: e.spaces.space56 } })),
                s = o;
        },
        420412: (e, t, r) => {
            r.d(t, { Z: () => s });
            var i = r(202784),
                a = r(325686),
                l = r(235902),
                o = r(885015),
                n = r(392237);
            function s({ borderColor: e = "borderColor", isSlim: t = !1, label: r }) {
                const { isWebRedesign: s } = l.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: n.default.theme.colors[e] ?? n.default.theme.colors.borderColor };
                return r ? i.createElement(o.Z, { style: !t && c.root, withGutter: !0 }, i.createElement(a.Z, { style: c.gapColumn }, i.createElement(a.Z, { style: [c.gap, d] })), i.createElement(a.Z, { style: c.gapText }, r), i.createElement(a.Z, { style: c.gapColumn }, i.createElement(a.Z, { style: [c.gap, d] }))) : i.createElement(a.Z, { style: [!t && c.root, s() && c.rootRedesign, c.gap, d] });
            }
            const c = n.default.create((e) => ({ borderColor: { backgroundColor: n.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: n.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, r) => {
            r.d(t, { Z: () => c });
            var i = r(807896),
                a = r(202784),
                l = r(325686),
                o = r(392237);
            class n extends a.Component {
                render() {
                    const { children: e, style: t, withGutter: r, ...o } = this.props,
                        n = a.Children.map(e, (e) => e && a.cloneElement(e, { style: [e.props.style, s.column, r && s.withGutterColumn] }));
                    return a.createElement(l.Z, (0, i.Z)({ style: [t, s.root, r && s.withGutter] }, o), n);
                }
            }
            n.defaultProps = { withGutter: !1 };
            const s = o.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = n;
        },
        449479: (e, t, r) => {
            r.d(t, { Z: () => v });
            var i = r(202784),
                a = r(325686),
                l = r(913973),
                o = r(731708),
                n = r(950822),
                s = r(466792),
                c = r(58881),
                d = r(530732),
                h = r(352924),
                u = r(392237);
            class p extends i.Component {
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
                    const { "aria-posinset": e, "aria-setsize": t, checked: r, disabled: h, helpText: p, label: m, name: b, testID: y } = this.props,
                        v = c.Z.generate({ backgroundColor: u.default.theme.colors.transparent, color: u.default.theme.colors.primary, withFocusWithinFocusRing: !0 }),
                        f = c.Z.generate({ backgroundColor: u.default.theme.colors.transparent, color: u.default.theme.colors.gray700, withFocusWithinFocusRing: !0 }),
                        C = r ? v : f;
                    return i.createElement(s.Z, { disabled: h }, (s) => i.createElement(a.Z, { role: "label", style: [g.root, !h && g.interactive], testID: y }, i.createElement(a.Z, { style: g.topContainer }, i.createElement(o.ZP, { id: this.labelId }, m), i.createElement(a.Z, { style: g.radioContainer }, i.createElement(d.Z, { interactiveStyles: C, interactivityState: s, style: g.radioBackground }, i.createElement(a.Z, { style: [g.circle, r && g.circleActive, h && g.circleDisabled, r && h && g.circleCheckedAndDisabled] }, r ? i.createElement(l.default, { style: g.checkMark }) : null)), (0, n.Z)("input", { "aria-posinset": e, "aria-setsize": t, "aria-describedby": this.descriptionId, "aria-labelledby": this.labelId, checked: r, disabled: h, name: b, onChange: this._handleChange, ref: this._setRef, style: [g.nativeControl], type: "radio" }))), p ? i.createElement(o.ZP, { color: "gray700", id: this.descriptionId, size: "subtext2", style: g.helpText }, p) : null));
                }
                focus() {
                    this._ref && this._ref.focus();
                }
            }
            p.defaultProps = { disabled: !1, checked: !1 };
            const g = u.default.create((e) => ({ root: { paddingVertical: e.spaces.space4 }, topContainer: { alignItems: "center", flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, interactive: { cursor: "pointer" }, circleDisabled: { borderColor: e.colors.gray200 }, circleCheckedAndDisabled: { backgroundColor: e.colors.gray300, borderColor: e.colors.gray300 }, radioContainer: { userSelect: "none", marginStart: e.spaces.space20 }, radioBackground: { borderRadius: e.borderRadii.infinite, margin: `-${e.spaces.space8}`, padding: e.spaces.space8 }, circle: { alignItems: "center", backgroundColor: e.colors.cellBackground, borderColor: e.colors.gray700, borderStyle: "solid", borderWidth: e.borderWidths.medium, borderRadius: e.spaces.space32, height: e.spaces.space20, justifyContent: "center", width: e.spaces.space20 }, circleActive: { borderColor: e.colors.primary, backgroundColor: e.colors.primary }, checkMark: { width: "18px", height: "18px", color: e.colors.whiteOnColor }, nativeControl: { ...u.default.absoluteFillObject, cursor: "inherit", height: "100%", margin: 0, opacity: 0, padding: 0, width: "100%" }, helpText: { paddingTop: e.spaces.space4 } })),
                m = p,
                b = "radioGroup";
            let y = 1;
            class v extends i.Component {
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
                    const { "aria-label": e, description: t, disabled: r, label: l, name: n, options: s, value: c } = this.props;
                    return i.createElement(
                        a.Z,
                        { "aria-label": e, "aria-labelledby": l && !e ? this._labelId : void 0, role: "radiogroup", style: r && f.disabled, testID: `${b}${n}` },
                        l ? i.createElement(a.Z, { id: this._labelId, role: "label", style: f.header }, i.createElement(o.ZP, { style: f.label, weight: "bold" }, l), t ? i.createElement(o.ZP, { color: "gray700", size: "subtext2" }, t) : null) : null,
                        s.map((e, t) => i.createElement(m, { "aria-posinset": t + 1, "aria-setsize": s.length, checked: e.value === c, disabled: r, helpText: e.helpText, key: e.value, label: e.label, name: n, onChange: this._handleItemChanged(e.value), ref: this._setRadioRef(t, e.value === c), testID: e.testID })),
                    );
                }
            }
            v.defaultProps = { disabled: !1 };
            const f = u.default.create((e) => ({ header: { alignItems: "flex-start" }, label: { paddingTop: e.spaces.space12, paddingBottom: e.spaces.space4 }, disabled: { opacity: 0.5 } }));
        },
        293615: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var i = r(202784),
                a = r(890601),
                l = r(783427),
                o = r(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M9.697 3H11v2h-.697l-3 2H5c-.276 0-.5.224-.5.5v11c0 .276.224.5.5.5h14c.276 0 .5-.224.5-.5V10h2v8.5c0 1.381-1.119 2.5-2.5 2.5H5c-1.381 0-2.5-1.119-2.5-2.5v-11C2.5 6.119 3.619 5 5 5h1.697l3-2zM12 10.5c-1.105 0-2 .895-2 2s.895 2 2 2 2-.895 2-2-.895-2-2-2zm-4 2c0-2.209 1.791-4 4-4s4 1.791 4 4-1.791 4-4 4-4-1.791-4-4zM17 2c0 1.657-1.343 3-3 3v1c1.657 0 3 1.343 3 3h1c0-1.657 1.343-3 3-3V5c-1.657 0-3-1.343-3-3h-1z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const s = n;
        },
        58399: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var i = r(202784),
                a = r(890601),
                l = r(783427),
                o = r(717683),
                n = r(347101);
            const s = (e = {}) => {
                const t = i.useContext(o.Z),
                    { direction: r } = (0, l.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [n.Z.root, e.style, t && n.Z.iconRTL], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M14.586 12L7.543 4.96l1.414-1.42L17.414 12l-8.457 8.46-1.414-1.42L14.586 12z" })) }, { writingDirection: r });
            };
            s.metadata = { width: 24, height: 24 };
            const c = s;
        },
        246492: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var i = r(202784),
                a = r(890601),
                l = r(783427),
                o = r(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M14 6c0 2.21-1.791 4-4 4S6 8.21 6 6s1.791-4 4-4 4 1.79 4 4zm-4 5c-2.352 0-4.373.85-5.863 2.44-1.477 1.58-2.366 3.8-2.632 6.46l-.11 1.1h17.21l-.11-1.1c-.266-2.66-1.155-4.88-2.632-6.46C14.373 11.85 12.352 11 10 11zm5.586-2l4.207 4.21 1.414-1.42L19.414 10H24V8h-4.586l1.793-1.79-1.414-1.42L15.586 9z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const s = n;
        },
        264171: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var i = r(202784),
                a = r(890601),
                l = r(783427),
                o = r(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M12 2c-4.687 0-8.5 3.813-8.5 8.5 0 5.967 7.621 11.116 7.945 11.332l.555.37.555-.37c.324-.216 7.945-5.365 7.945-11.332C20.5 5.813 16.687 2 12 2zm0 11.5c-1.65 0-3-1.34-3-3s1.35-3 3-3c1.66 0 3 1.34 3 3s-1.34 3-3 3z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const s = n;
        },
        98440: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var i = r(202784),
                a = r(890601),
                l = r(783427),
                o = r(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const s = n;
        },
        262009: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var i = r(202784),
                a = r(890601),
                l = r(783427),
                o = r(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M14 2c0 3.35.74 5.53 2.1 6.9 1.36 1.36 3.55 2.1 6.9 2.1v2c-3.35 0-5.54.74-6.9 2.1-1.36 1.37-2.1 3.55-2.1 6.9h-2c0-3.35-.74-5.53-2.11-6.9C8.53 13.74 6.35 13 3 13v-2c3.35 0 5.53-.74 6.89-2.1C11.26 7.53 12 5.35 12 2h2zM5 1c0 1.66-1.34 3-3 3v1c1.66 0 3 1.34 3 3h1c0-1.66 1.34-3 3-3V4C7.34 4 6 2.66 6 1H5z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const s = n;
        },
        465233: (e, t, r) => {
            r.d(t, { Z: () => a });
            var i = r(716406);
            function a(e) {
                return "object" != typeof e || null === e ? e : Array.isArray(e) ? e.map(a) : (0, i.Z)(e, (e) => a(e));
            }
        },
        125568: (e, t, r) => {
            r.d(t, { t: () => a });
            var i = r(202784);
            function a() {
                const e = i.useRef(!0);
                return (
                    i.useLayoutEffect(
                        () => () => {
                            e.current = !1;
                        },
                        [],
                    ),
                    i.useCallback(() => e.current, [])
                );
            }
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.TwitterArticles-6107ac1a.a6bbac1a.js.map
