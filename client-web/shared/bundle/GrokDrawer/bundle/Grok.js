"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~bundle.GrokDrawer~bundle.Grok", "loader.FeedbackSheet"],
    {
        774426: (e, t, n) => {
            n.r(t), n.d(t, { default: () => m });
            n(136728);
            var a = n(202784),
                o = n(811176),
                r = n(190286),
                i = n(111677),
                s = n.n(i),
                l = n(912021);
            const c = s().cfd2f35e;
            class d extends a.Component {
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
                        (this._getMemoizedProcessedActionItems = (0, l.Z)((e, t, n, a) =>
                            e.reduce((e, { Icon: o, confirmation: r, disabled: i, excludeFromActionMenu: s, isEmphasized: l, link: c, onClick: d, subText: m, testID: p, text: u, withCancelButton: h }, g) => {
                                if (!s) {
                                    const s = d
                                        ? () => {
                                              r ? (r.render ? a({ cancelCallback: r.onCancel, confirmCallback: d, render: r.render }) : a({ cancelCallback: r.onCancel, confirmCallback: d, text: r.text, headline: r.headline, label: r.label, confirmButtonType: r.confirmButtonType, withCancelButton: r.withCancelButton })) : (d(), n());
                                          }
                                        : n;
                                    e.push({ disabled: i, Icon: o, isEmphasized: l, testID: p, subText: m, text: u, onClick: s, link: c, withBottomBorder: t && t.includes(g) });
                                }
                                return e;
                            }, []),
                        ));
                }
                render() {
                    const { onClose: e } = this.props,
                        { activeConfirmation: t } = this.state;
                    return t ? this._renderConfirmation(t) : a.createElement(o.Z, { cancelButtonLabel: c, items: this._getProcessedActionItems(), onCloseRequested: e });
                }
                _renderConfirmation(e) {
                    if (e && e.render) return e.render(this._handleConfirmed, this._handleCancelConfirm);
                    {
                        const { confirmButtonType: t, headline: n, label: o, text: i, withCancelButton: s } = e || {};
                        return a.createElement(r.Z, { confirmButtonLabel: o, confirmButtonType: t, headline: n, onCancel: this._handleCancelConfirm, onConfirm: this._handleConfirmed, text: i, withCancelButton: s });
                    }
                }
                _getProcessedActionItems() {
                    const { actionItems: e, dividerIndices: t, onClose: n } = this.props;
                    return this._getMemoizedProcessedActionItems(e, t, n, this._handleConfirm);
                }
            }
            const m = d;
        },
        507651: (e, t, n) => {
            n.d(t, { Z: () => c });
            var a = n(807896),
                o = n(202784),
                r = n(107267),
                i = n(403556),
                s = n(791632);
            const l = (e) => {
                    const t = (0, r.useHistory)(),
                        { isCompact: n, ...l } = e;
                    return o.createElement(i.Z, (0, a.Z)({}, l, { isCompact: n || (0, s.HD)(t) }));
                },
                c = o.memo(l);
        },
        931292: (e, t, n) => {
            n.d(t, { A: () => i });
            var a = n(6157),
                o = n(917799),
                r = n(189953);
            const i =
                (e) =>
                (t, n, { api: i }) =>
                    o._O(t, { params: { cursor: e }, request: i.withEndpoint(a.Z).fetchHistory })({ actionTypes: r.Sv, context: "FETCH_GROK_HISTORY", meta: {} });
        },
        756869: (e, t, n) => {
            n.d(t, { _: () => i });
            var a = n(6157),
                o = n(917799),
                r = n(189953);
            const i =
                (e) =>
                (t, n, { api: i }) =>
                    o._O(t, { params: { cursor: e }, request: i.withEndpoint(a.Z).fetchMediaHistory })({ actionTypes: r.Ws, context: "FETCH_GROK_MEDIA_HISTORY", meta: {} });
        },
        576466: (e, t, n) => {
            n.d(t, { v: () => i });
            var a = n(6157),
                o = n(917799),
                r = n(189953);
            const i =
                (e) =>
                (t, n, { api: i }) =>
                    o._O(t, { params: { conversationId: e }, request: i.withEndpoint(a.Z).grokPinConversation })({ actionTypes: r.lh, context: "PIN_GROK_CONVERSATION", meta: { conversationId: e } });
        },
        281030: (e, t, n) => {
            n.d(t, { l: () => i });
            var a = n(6157),
                o = n(917799),
                r = n(189953);
            const i =
                (e) =>
                (t, n, { api: i }) =>
                    o._O(t, { params: { conversationId: e }, request: i.withEndpoint(a.Z).grokUnpinConversation })({ actionTypes: r.lm, context: "UNPIN_GROK_CONVERSATION", meta: { conversationId: e } });
        },
        917270: (e, t, n) => {
            n.d(t, { O: () => f });
            var a = n(202784),
                o = n(325686),
                r = n(525271),
                i = n(721266),
                s = n(392237),
                l = n(111677),
                c = n.n(l),
                d = n(323265),
                m = n(725516),
                p = n(54957),
                u = n(888004),
                h = n(871362),
                g = n(302176);
            const C = c().b61ad410,
                f = ({ onDrawerDismiss: e }) => a.createElement(r.Z, { align: "right", buttonType: "primaryText", onDismissed: e, style: b.drawer, title: C, withBackgroundBlur: !0 }, a.createElement(y, { onDrawerDismiss: e })),
                y = ({ onDrawerDismiss: e }) => {
                    const t = (0, m.z)(),
                        [n, r] = a.useState(g.G.all),
                        [s, l] = a.useState(Math.random()),
                        [c, C] = a.useState(void 0),
                        f = a.useCallback(
                            (e) => {
                                t.scribe({ element: "grok_search", action: "submit" }), C(encodeURIComponent(e)), l(Math.random());
                            },
                            [t],
                        ),
                        y = a.useMemo(() => (n === g.G.images ? a.createElement(h.v, null) : n === g.G.pins ? a.createElement(u.s, null) : a.createElement(p.c, { onHistoryLinkClicked: e, onSearchSubmit: f, searchKey: s, searchValue: c ?? "" })), [c, s, n, e, f]);
                    return a.createElement(o.Z, { style: b.container }, d.ZP.isWebView() ? a.createElement(i.Z, { size: "space56" }) : null, a.createElement(o.Z, { style: b.headerContainer }, a.createElement(o.Z, { style: b.contentContainer }, a.createElement(o.Z, { style: b.staticContentContainer }, a.createElement(g.k, { onTabChange: r, selectedTab: n })))), a.createElement(o.Z, { style: b.scrollSection }, a.createElement(o.Z, { style: b.innerContentContainer }, y)));
                },
                b = s.default.create((e) => ({ container: { width: "100%", height: "100%", flexDirection: "column", position: "relative" }, headerContainer: { width: "100%" }, mainContainer: { flex: 1, display: "flex", flexDirection: "column", height: "100%" }, contentContainer: { flex: 1 }, staticContentContainer: { width: "100%", maxWidth: 500, flexShrink: 0 }, drawer: { width: 440 }, searchContainer: { flexDirection: "row", flexGrow: 1, flexShrink: 1, marginHorizontal: e.spaces.space4, alignItems: "center", marginVertical: "unset" }, post: { borderBottomWidth: 1, borderBottomColor: e.colors.borderColor }, scrollView: { flex: 1, width: "100%", marginTop: 0 }, innerContentContainer: { paddingTop: 0, height: "100%" }, scrollSection: { flex: 1, position: "relative" }, searchSection: { flexShrink: 0, width: "100%" } }));
        },
        464023: (e, t, n) => {
            n.d(t, { F4: () => i, J5: () => s, N_: () => o, UD: () => l, c0: () => a, oq: () => c, uY: () => r, vf: () => d });
            const a = "1720665183188922368",
                o = "grokWebviewEventMessageHandler",
                r = "tappedClearHistoryButton",
                i = "clearHistoryWithoutConfirm",
                s = "setModeFun",
                l = "setModeNormal",
                c = "setModel",
                d = 800;
        },
        78882: (e, t, n) => {
            n.d(t, { I2: () => i, T6: () => s, ZP: () => l });
            var a = n(392237),
                o = n(198438),
                r = n(521514);
            const i = [0.4, 0.53, 0.66, 0.8],
                s = 0.8,
                l = a.default.create((e) => ({ root: { position: "relative", alignSelf: "flex-end", marginEnd: e.spaces.space20, marginBottom: e.spaces.space12, minWidth: r.Z.dmDrawerWidth.min, maxWidth: r.Z.dmDrawerWidth.max, transition: `all ${o.s}ms ease` }, main: { position: "absolute", backgroundColor: e.colors.navigationBackground, borderRadius: e.borderRadii.xLarge, overflow: "hidden", boxShadow: e.boxShadows.medium, flex: 1, width: "100%", maxHeight: 100 * s + "vh" }, hidden: { display: "none" }, contentContainer: { flex: 1, height: "unset", overflow: "auto", minHeight: "unset", maxHeight: "unset" }, drawerHeaderRadius: { borderTopStartRadius: e.borderRadii.xLarge, borderTopEndRadius: e.borderRadii.xLarge }, reducedMotion: { transition: "none" }, collapsedSmall: { maxWidth: 55, alignSelf: "flex-end", borderColor: e.colors.gray400, borderWidth: e.spaces.space1, backgroundColor: e.colors.appBarBackground, backdropFilter: "blur(12px)" }, denyPointer: { pointerEvents: "none" }, allowPointer: { pointerEvents: "auto" } }));
        },
        807901: (e, t, n) => {
            n.d(t, { Z: () => C });
            n(543673), n(240753), n(128399), n(136728);
            var a = n(202784),
                o = n(107267),
                r = n(111677),
                i = n.n(r),
                s = n(774426),
                l = n(725516),
                c = n(125363),
                d = n(189953),
                m = n(928831),
                p = n(623494),
                u = n(654917);
            const h = i().f794af9a,
                g = i().eccf9fea;
            function C() {
                const e = (0, c.I0)(),
                    t = (0, u.uf)(),
                    n = (0, o.useHistory)(),
                    r = (0, c.v9)(t.selectCanClearConversation),
                    { access: i, changeMode: C, mode: f } = (0, u.ZP)(),
                    { clearFilterKey: y } = (0, m.w)(),
                    b = !1 !== i,
                    v = (0, l.z)(),
                    k = (0, o.useLocation)(),
                    E = a.useCallback(() => {
                        const a = new URLSearchParams(k.search),
                            o = a.get("analysisEntityId"),
                            i = a.get("conversation");
                        (o || i) && r
                            ? (n.goBack(),
                              setTimeout(() => {
                                  e(t.clearConversation());
                              }, 500))
                            : r
                              ? e(t.clearConversation())
                              : n.goBack();
                    }, [r, e, t, n, k.search]),
                    x = a.useCallback(() => {
                        r && (e(t.clearConversation()), n.push("/i/grok"), (0, p.ZY)(v), y());
                    }, [v, r, e, t, n, y]),
                    Z = a.useCallback(() => {
                        r && (e(t.clearConversation()), (0, p.ZY)(v), y());
                    }, [v, r, e, t, y]),
                    I = a.useCallback(
                        (e) => {
                            const t = [
                                {
                                    disabled: f === d.IK.REGULAR,
                                    onClick: function () {
                                        C(d.IK.REGULAR, v);
                                    },
                                    text: g,
                                },
                                {
                                    disabled: f === d.IK.FUN,
                                    onClick: function () {
                                        C(d.IK.FUN, v);
                                    },
                                    text: h,
                                },
                            ];
                            return a.createElement(s.default, { actionItems: t, onClose: e });
                        },
                        [v, f, C],
                    );
                return { canClearConversation: r, handleBackClick: E, handleClearConversationClick: x, handleClearConversationClickWithoutNav: Z, isEligible: b, renderActionsMenu: I };
            }
        },
        302176: (e, t, n) => {
            n.d(t, { G: () => p, k: () => y });
            var a = n(202784),
                o = n(325686),
                r = n(154003),
                i = n(392237),
                s = n(111677),
                l = n.n(s),
                c = n(894966),
                d = n(323265),
                m = n(507651);
            const p = { all: "all", images: "images", pins: "pins" },
                u = l().dab087ee,
                h = l().i3145aa0,
                g = l().a911623c,
                C = l().b08821f4,
                f = { label: C },
                y = ({ onTabChange: e, selectedTab: t }) => {
                    const n = !!d.ZP.isWebView(),
                        i = a.useCallback((e) => () => t === e, [t]),
                        s = a.useMemo(
                            () => [
                                { key: p.all, label: u, isActive: i(p.all), onClick: () => e(p.all) },
                                { key: p.pins, label: h, isActive: i(p.pins), onClick: () => e(p.pins) },
                                { key: p.images, label: g, isActive: i(p.images), onClick: () => e(p.images) },
                            ],
                            [i, e],
                        );
                    return a.createElement(a.Fragment, null, a.createElement(o.Z, { style: b.header }, n ? a.createElement(o.Z, { style: b.backButtonContainer }, a.createElement(r.ZP, { "aria-label": C, hoverLabel: f, icon: a.createElement(c.default, null), link: "/i/grok", type: "primaryText" })) : null, a.createElement(o.Z, { style: b.tabsContainer }, a.createElement(m.Z, { links: s, style: b.tabs }))));
                },
                b = i.default.create((e) => ({ container: { paddingHorizontal: e.spaces.space24 }, header: { flexDirection: "row", width: "100%" }, tabsContainer: { flex: 1, alignItems: "center", borderBottomWidth: 1, borderColor: e.colors.borderColor }, tabs: { borderBottomWidth: 0, width: "100%", maxWidth: 400, cursor: "pointer" }, backButtonContainer: { alignItems: "center", justifyContent: "center", paddingHorizontal: e.spaces.space8, borderBottomWidth: 1, borderColor: e.colors.borderColor } }));
        },
        736414: (e, t, n) => {
            n.d(t, { G: () => W });
            var a,
                o,
                r = {
                    fragment: {
                        argumentDefinitions: (a = [
                            { defaultValue: null, kind: "LocalArgument", name: "conversationId" },
                            { defaultValue: null, kind: "LocalArgument", name: "title" },
                        ]),
                        kind: "Fragment",
                        metadata: null,
                        name: "ConversationItem_RenameConversationMutation",
                        selections: (o = [
                            {
                                alias: null,
                                args: [
                                    { kind: "Variable", name: "conversation_id", variableName: "conversationId" },
                                    { kind: "Variable", name: "new_title", variableName: "title" },
                                    { kind: "Literal", name: "s", value: "fd90" },
                                ],
                                concreteType: "GrokConversationEditResponse",
                                kind: "LinkedField",
                                name: "grokconversation_edit",
                                plural: !1,
                                selections: [{ alias: null, args: null, concreteType: "GrokConversationEditError", kind: "LinkedField", name: "edit_error", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null }], storageKey: null }],
                                storageKey: null,
                            },
                        ]),
                        type: "Mutation",
                        abstractKey: null,
                    },
                    kind: "Request",
                    operation: { argumentDefinitions: a, kind: "Operation", name: "ConversationItem_RenameConversationMutation", selections: o },
                    params: { id: "bGjN_WgGMm3ugR5LI9MyAA", metadata: {}, name: "ConversationItem_RenameConversationMutation", operationKind: "mutation", text: null },
                };
            r.hash = "6cd9dd0fa4500f77177e5a9677719bfe";
            const i = r;
            var s = (function () {
                var e = [{ defaultValue: null, kind: "LocalArgument", name: "conversationId" }],
                    t = [
                        {
                            alias: null,
                            args: [
                                { kind: "Variable", name: "conversation_id", variableName: "conversationId" },
                                { kind: "Literal", name: "s", value: "fd90" },
                            ],
                            concreteType: "GrokDeletionResponse",
                            kind: "LinkedField",
                            name: "delete_grok_conversation",
                            plural: !1,
                            selections: [{ alias: null, args: null, concreteType: "GrokDeletionError", kind: "LinkedField", name: "grok_deletion_error", plural: !1, selections: [{ alias: null, args: null, kind: "ScalarField", name: "error_code", storageKey: null }], storageKey: null }],
                            storageKey: null,
                        },
                    ];
                return { fragment: { argumentDefinitions: e, kind: "Fragment", metadata: null, name: "ConversationItem_DeleteConversationMutation", selections: t, type: "Mutation", abstractKey: null }, kind: "Request", operation: { argumentDefinitions: e, kind: "Operation", name: "ConversationItem_DeleteConversationMutation", selections: t }, params: { id: "TlKHSWVMVeaa-i7dqQqFQA", metadata: {}, name: "ConversationItem_DeleteConversationMutation", operationKind: "mutation", text: null } };
            })();
            s.hash = "6aa0a6abc91d6a64847a13c0f4b338ae";
            const l = s;
            var c = n(202784),
                d = n(325686),
                m = (n(585488), n(351743)),
                p = n.n(m),
                u = n(58881),
                h = n(392237),
                g = n(811176),
                C = n(530732),
                f = n(371344),
                y = n(731708),
                b = n(247056),
                v = n(111677),
                k = n.n(v),
                E = n(885724),
                x = n(607127),
                Z = n(73416),
                I = n(883069),
                w = n(149170),
                S = n(125363),
                _ = n(389071),
                R = n(576466),
                T = n(281030),
                z = n(601576);
            const H = k().d96cf7ce,
                B = k().ef4602ec,
                P = k().d4eb0e26,
                D = l,
                L = i,
                W = c.memo(({ isFavorite: e, onHistoryLinkClicked: t, restId: n, selected: a, title: o }) => {
                    const r = (0, S.I0)(),
                        [i, s] = c.useState(!1),
                        [l, m] = c.useState(o),
                        [v] = p()(D),
                        [k] = p()(L);
                    c.useEffect(() => {
                        m(o);
                    }, [o]);
                    const W = u.Z.generate({ backgroundColor: h.default.theme.colors.transparent, color: h.default.theme.colors.blue500, insetFocusRing: !0 });
                    function F(e) {
                        m(e.target.value);
                    }
                    function A() {
                        v({
                            onCompleted: (e) => {
                                e.delete_grok_conversation?.grok_deletion_error ? r(z.fz({ text: B })) : r((0, _.SJ)(n));
                            },
                            variables: { conversationId: n },
                        });
                    }
                    function G() {
                        s(!0);
                    }
                    function O() {
                        k({
                            onCompleted: (e) => {
                                e.grokconversation_edit?.edit_error ? r(z.fz({ text: B })) : r((0, _.lo)(n, l)), s(!1);
                            },
                            variables: { conversationId: n, title: l },
                        });
                    }
                    function K(e) {
                        const t = [
                            { Icon: E.default, onClick: G, text: P },
                            { Icon: x.default, onClick: A, text: H },
                        ];
                        return c.createElement(g.Z, { items: t, onCloseRequested: e });
                    }
                    return c.createElement(
                        C.Z,
                        {
                            interactiveStyles: {},
                            link: `/i/grok?conversation=${n}`,
                            onPress: () => {
                                t?.();
                            },
                            style: M.container,
                        },
                        (s) =>
                            c.createElement(
                                d.Z,
                                { style: [M.conversation, a ? M.selected : null, s.isHovered || i ? M.hover : null] },
                                i
                                    ? c.createElement(f.Z, { autoFocus: !0, inputStyle: M.input, numberOfLines: 3, onBlur: O, onChange: F, onSubmitEditing: O, styleType: "selection", value: l })
                                    : c.createElement(
                                          c.Fragment,
                                          null,
                                          c.createElement(
                                              y.ZP,
                                              {
                                                  color: "text",
                                                  link: `/i/grok?conversation=${n}`,
                                                  numberOfLines: 3,
                                                  onPress: () => {
                                                      t?.();
                                                  },
                                                  withInteractiveStyling: !1,
                                              },
                                              o,
                                          ),
                                          c.createElement(
                                              d.Z,
                                              { style: M.controls },
                                              c.createElement(
                                                  y.ZP,
                                                  { color: "gray500" },
                                                  c.createElement(
                                                      C.Z,
                                                      {
                                                          interactiveStyles: W,
                                                          onPress: (t) => {
                                                              r(e ? (0, T.l)(n) : (0, R.v)(n)), t.preventDefault();
                                                          },
                                                          style: { borderRadius: 999 },
                                                      },
                                                      (t) => c.createElement(d.Z, { style: M.starIconContainer }, c.createElement(y.ZP, { color: t.isHovered ? "blue500" : "gray500" }, e ? c.createElement(Z.default, null) : c.createElement(I.default, null))),
                                                  ),
                                              ),
                                              c.createElement(b.Z, { Icon: w.default, renderActionMenu: K }),
                                          ),
                                      ),
                            ),
                    );
                }),
                M = h.default.create((e) => ({ controls: { flexDirection: "row", gap: e.spaces.space4 }, selected: { backgroundColor: e.colors.gray100 }, hover: { backgroundColor: e.colors.gray50 }, container: { marginBottom: e.spaces.space1 }, conversation: { gap: e.spaces.space8, marginStart: e.spaces.space12, marginEnd: e.spaces.space16, backgroundColor: e.colors.transparent, paddingStart: e.spaces.space12, paddingEnd: e.spaces.space16, paddingTop: e.spaces.space8, paddingBottom: e.spaces.space8, transitionProperty: "background-color", transitionDuration: ".1s", alignItems: "center", flexDirection: "row", justifyContent: "space-between", borderRadius: e.borderRadii.large }, input: { padding: 0 }, starIconContainer: { width: 32, height: 32, borderRadius: e.borderRadii.infinite, alignItems: "center", justifyContent: "center", cursor: "pointer" } }));
        },
        54957: (e, t, n) => {
            n.d(t, { c: () => S });
            var a = n(807896),
                o = n(202784),
                r = n(555874),
                i = n(325686),
                s = n(731708),
                l = n(721266),
                c = n(392237),
                d = n(111677),
                m = n.n(d),
                p = n(933277),
                u = n(597496),
                h = n(125363),
                g = n(389071),
                C = n(931292),
                f = n(601576),
                y = n(654917),
                b = n(975226),
                v = n(751621),
                k = n(556756),
                E = n(736414);
            const x = m().b3de2628,
                Z = m().acfbfb28,
                I = m().ef4602ec,
                w = ({ customSearchBox: e, searchBoxOptions: t }) => o.createElement(i.Z, { style: _.searchContainer }, e || o.createElement(u.Rj, (0, a.Z)({}, t, { isCompact: !0, shouldHandleSearchShortcut: !0 }))),
                S = ({ onHistoryLinkClicked: e, onSearchSubmit: t, searchKey: n, searchValue: a }) => {
                    const c = (0, h.I0)(),
                        d = (0, h.v9)(g.bv),
                        m = (0, h.v9)(g.V$),
                        u = (0, h.v9)(g.JE),
                        S = (0, y.uf)(),
                        R = (0, h.v9)(S.selectConversationId),
                        T = o.useMemo(() => (0, p.Z)(d ?? [], ({ created_at_ms: e }) => (e ? (0, b._)(e) : "")), [d]),
                        z = o.useMemo(() => Object.keys(T), [T]),
                        H = o.useCallback(
                            (e = !0) => {
                                const t = e ? m : void 0;
                                null !== t &&
                                    c((0, C.A)(t)).catch(() => {
                                        c((0, f.fz)({ text: I }));
                                    });
                            },
                            [c, m],
                        );
                    o.useEffect(() => {
                        H(!1);
                    }, []);
                    const B = o.useCallback(
                        (t) =>
                            o.createElement(
                                o.Fragment,
                                null,
                                o.createElement(s.ZP, { color: "gray700", style: _.conversation, weight: "bold" }, t.item),
                                T[t.item].map(({ grokConversation: t, is_pinned: n, title: a }) => o.createElement(E.G, { isFavorite: n ?? !1, key: t.rest_id, onHistoryLinkClicked: e, restId: t.rest_id, selected: R === t.rest_id, title: a })),
                            ),
                        [R, T, e],
                    );
                    return 0 === z.length && "loading" === u ? null : d && 0 !== d.length ? o.createElement(i.Z, { style: _.container }, o.createElement(i.Z, { style: _.searchBoxContainer }, o.createElement(w, { customSearchBox: o.createElement(v.v, { initialValue: a, onSubmit: t }) })), a ? o.createElement(k.D, { onSearchHistoryClicked: e, query: a, queryKey: n }) : o.createElement(i.Z, { style: _.content }, o.createElement(r.Z, { ItemSeparatorComponent: () => o.createElement(l.Z, { size: "space8" }), ListFooterComponent: () => o.createElement(l.Z, { size: "space16" }), ListHeaderComponent: () => o.createElement(l.Z, { size: "space8" }), data: z, keyExtractor: (e, t) => z[t], onEndReached: H, onEndReachedThreshold: 0.4, renderItem: B, style: { height: "100%" } }))) : o.createElement(i.Z, { style: _.noHistoryContainer }, o.createElement(i.Z, null, o.createElement(s.ZP, { size: "title3", weight: "bold" }, x), o.createElement(l.Z, { size: "space4" }), o.createElement(s.ZP, { color: "gray500", size: "body" }, Z)));
                },
                _ = c.default.create((e) => ({ container: { width: "100%", maxHeight: "100%", flexDirection: "column", alignItems: "center" }, noHistoryContainer: { width: "100%", height: "calc(100vh - 53px)", alignItems: "center", justifyContent: "center" }, content: { width: "100%", maxHeight: "100%", flex: 1, position: "relative" }, conversation: { alignItems: "start", flexDirection: "row", gap: e.spaces.space8, justifyContent: "space-between", paddingStart: e.spaces.space24, paddingEnd: e.spaces.space16, paddingBottom: e.spaces.space12, paddingTop: e.spaces.space4 }, header: { whiteSpace: "nowrap" }, searchBoxContainer: { paddingStart: e.spaces.space12, paddingEnd: e.spaces.space12, paddingTop: e.spaces.space12, paddingBottom: e.spaces.space12, width: "100%" }, searchContainer: { flexDirection: "row", flexGrow: 1, flexShrink: 1, marginHorizontal: e.spaces.space4, alignItems: "center", marginVertical: "unset" } }));
        },
        888004: (e, t, n) => {
            n.d(t, { s: () => E });
            var a = n(202784),
                o = n(555874),
                r = n(325686),
                i = n(731708),
                s = n(721266),
                l = n(392237),
                c = n(111677),
                d = n.n(c),
                m = n(125363),
                p = n(389071),
                u = n(6157),
                h = n(917799),
                g = n(189953);
            var C = n(601576),
                f = n(654917),
                y = n(736414);
            const b = d().c64975ea,
                v = d().a3e3db6e,
                k = d().ef4602ec,
                E = ({ onHistoryLinkClicked: e }) => {
                    const t = (0, m.I0)(),
                        n = (0, f.uf)(),
                        l = (0, m.v9)(n.selectConversationId),
                        c = (0, m.v9)(p.OR),
                        d = (0, m.v9)(p.NV),
                        E = (0, m.v9)(p.BU),
                        Z = a.useCallback(
                            (e = !0) => {
                                const n = e ? d : void 0;
                                null !== n &&
                                    t(
                                        (
                                            (e) =>
                                            (t, n, { api: a }) =>
                                                h._O(t, { params: { cursor: e }, request: a.withEndpoint(u.Z).fetchPinnedConversations })({ actionTypes: g.En, context: "FETCH_GROK_PINNED_CONVERSATIONS", meta: {} })
                                        )(n),
                                    ).catch(() => {
                                        t((0, C.fz)({ text: k }));
                                    });
                            },
                            [t, d],
                        );
                    a.useEffect(() => {
                        Z(!1);
                    }, []);
                    const I = a.useCallback(({ item: e }) => a.createElement(y.G, { isFavorite: !0, key: e.grokConversation.rest_id, onHistoryLinkClicked: () => {}, restId: e.grokConversation.rest_id, selected: l === e.grokConversation.rest_id, title: e.title }), [l]);
                    return 0 === c.length && "loading" === E ? null : c && 0 !== c.length ? a.createElement(r.Z, { style: x.container }, a.createElement(r.Z, { style: x.content }, a.createElement(o.Z, { ItemSeparatorComponent: () => a.createElement(s.Z, { size: "space8" }), ListFooterComponent: () => a.createElement(s.Z, { size: "space16" }), ListHeaderComponent: () => a.createElement(s.Z, { size: "space8" }), data: c, keyExtractor: (e, t) => e.grokConversation.id, onEndReached: Z, onEndReachedThreshold: 0.4, renderItem: I, style: { height: "100%" } }))) : a.createElement(r.Z, { style: x.noHistoryContainer }, a.createElement(r.Z, null, a.createElement(i.ZP, { size: "title3", weight: "bold" }, b), a.createElement(s.Z, { size: "space4" }), a.createElement(i.ZP, { color: "gray500", size: "body" }, v)));
                },
                x = l.default.create((e) => ({ container: { width: "100%", maxHeight: "100%", flexDirection: "column", alignItems: "center" }, noHistoryContainer: { width: "100%", height: "calc(100vh - 53px)", alignItems: "center", justifyContent: "center", padding: e.spaces.space16, textAlign: "center" }, content: { width: "100%", maxHeight: "100%", flex: 1, position: "relative", paddingVertical: e.spaces.space8 }, conversation: { alignItems: "start", flexDirection: "row", gap: e.spaces.space8, justifyContent: "space-between", paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16, paddingBottom: e.spaces.space16 }, header: { whiteSpace: "nowrap" } }));
        },
        871362: (e, t, n) => {
            n.d(t, { v: () => _ });
            var a = n(202784),
                o = n(555874),
                r = n(325686),
                i = n(537392),
                s = n(392237),
                l = n(731708),
                c = n(721266),
                d = n(111677),
                m = n.n(d),
                p = n(125363),
                u = n(389071),
                h = n(756869),
                g = n(601576),
                C = (n(136728), n(143670)),
                f = n(565421),
                y = n(725516),
                b = n(6157),
                v = n(917799),
                k = n(189953);
            var E = n(86657);
            const x = m().d96cf7ce,
                Z = ({ chatItemId: e, conversationId: t, mediaId: n, mediaUrl: o }) => {
                    const r = (0, p.I0)(),
                        i = (0, y.z)(),
                        s = a.useMemo(() => {
                            const o = [];
                            return (
                                e &&
                                    o.push(
                                        a.createElement(C.Z, {
                                            Icon: f.default,
                                            actionText: x,
                                            iconThumbnailColor: "danger",
                                            key: "deleteImage",
                                            onClick: (a) => {
                                                i.scribe({ element: "delete_image_button", action: "click" }),
                                                    r(
                                                        (
                                                            ({ chatItemId: e, conversationId: t }) =>
                                                            async (n, a, { api: o }) =>
                                                                v._O(n, { params: { conversation_id: t, chat_item_id: e }, request: o.withEndpoint(b.Z).deleteMessage })({ actionTypes: k.VK, context: "DELETE_GROK_MESSAGE", meta: {} })
                                                        )({ chatItemId: e, conversationId: t }),
                                                    ).then(() => {
                                                        r((0, u.Pl)(n));
                                                    });
                                            },
                                            textColor: "red500",
                                        }),
                                    ),
                                o
                            );
                        }, [e, i, t, r, n]);
                    return a.createElement(E.Z, { extraMenuItems: s, file: { fileName: "image.jpg", mimeType: "image/jpeg", mediaId: n, url: o }, isLoading: !1, key: `image_${n}` });
                },
                I = m().f4ae77ac,
                w = m().d57d337e,
                S = m().ef4602ec,
                _ = () => {
                    const e = (0, p.I0)(),
                        t = (0, p.v9)(u.SL),
                        n = (0, p.v9)(u.Tu),
                        d = (0, p.v9)(u.hi),
                        m = (0, i.Zx)(({ containerWidth: e }) => (e < s.default.theme.breakpoints.small ? 2 : 3)),
                        C = a.useCallback(
                            (t = !0) => {
                                const a = t ? n : void 0;
                                null !== a &&
                                    e((0, h._)(a)).catch(() => {
                                        e((0, g.fz)({ text: S }));
                                    });
                            },
                            [e, n],
                        );
                    a.useEffect(() => {
                        C(!1);
                    }, []);
                    const f = a.useMemo(() => {
                            const e = t ?? [],
                                n = [];
                            for (let t = 0; t < e.length; t++) {
                                const a = Math.floor(t / 12);
                                n[a] = [...(n[a] ?? []), e[t]];
                            }
                            return n;
                        }, [t]),
                        y = a.useMemo(() => [R.imagesContainer, { gridTemplateColumns: `repeat(${m}, 1fr)` }], [m]),
                        b = a.useCallback(
                            ({ index: e, item: t }) =>
                                a.createElement(
                                    r.Z,
                                    { style: y },
                                    t.map(({ chat_item_id: e, grokConversation: t, media_id: n, media_url: o }) => (n && t && o ? a.createElement(Z, { chatItemId: e, conversationId: t.rest_id, key: e, mediaId: n, mediaUrl: o }) : null)),
                                ),
                            [y],
                        );
                    return 0 === f.length && "loading" === d ? null : 0 === f.length ? a.createElement(r.Z, { style: R.noHistoryContainer }, a.createElement(r.Z, null, a.createElement(l.ZP, { size: "title3", weight: "bold" }, I), a.createElement(c.Z, { size: "space4" }), a.createElement(l.ZP, { color: "gray500", size: "body" }, w))) : a.createElement(r.Z, { style: R.container }, a.createElement(r.Z, { style: R.content }, a.createElement(o.Z, { ItemSeparatorComponent: () => a.createElement(c.Z, { size: "space8" }), ListFooterComponent: () => a.createElement(c.Z, { size: "space16" }), ListHeaderComponent: () => a.createElement(c.Z, { size: "space8" }), data: f, keyExtractor: (e) => e[0]?.media_id ?? "", onEndReached: C, onEndReachedThreshold: 0.4, renderItem: b })));
                },
                R = s.default.create((e) => ({ container: { width: "100%", maxHeight: "100%", flexDirection: "column", alignItems: "center" }, noHistoryContainer: { width: "100%", height: "calc(100vh - 53px)", alignItems: "center", justifyContent: "center" }, content: { width: "100%", flex: 1 }, conversation: { gap: e.spaces.space8, marginBottom: e.spaces.space24 }, header: { whiteSpace: "nowrap" }, imagesContainer: { display: "grid", flexDirection: "row", flexWrap: "wrap", gap: e.spaces.space12, marginBottom: e.spaces.space12, paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16 } }));
        },
        751621: (e, t, n) => {
            n.d(t, { v: () => u });
            var a = n(202784),
                o = n(325686),
                r = n(371344),
                i = n(392237),
                s = n(111677),
                l = n.n(s),
                c = n(956272),
                d = n(666536),
                m = n(464023);
            const p = l().i1147548,
                u = ({ initialValue: e, onSubmit: t }) => {
                    const [n, i] = a.useState(e),
                        s = a.useRef(null),
                        [l, m] = a.useState(!1),
                        u = a.useCallback(() => m(!1), [m]),
                        g = a.useCallback(() => m(!0), [m]),
                        C = a.useCallback((e) => {
                            i(e.target.value);
                        }, []),
                        f = a.useMemo(() => (0, d.Z)((e) => t(e), 400), [t]);
                    a.useEffect(() => {
                        f(n);
                    }, [n, f]);
                    const y = a.useCallback(() => {
                        f.clear(), t(n);
                    }, [n, t, f]);
                    return a.createElement(
                        o.Z,
                        { style: h.container },
                        a.createElement(
                            o.Z,
                            { style: h.inputWrapper },
                            a.createElement(r.Z, {
                                Icon: c.default,
                                onBlur: u,
                                onChange: C,
                                onClear: (e) => {
                                    i(""), y();
                                },
                                onFocus: g,
                                onSubmitEditing: y,
                                placeholder: p,
                                ref: s,
                                style: [h.input, l ? h.selected : void 0],
                                styleType: "selection",
                                value: n,
                                withClearButton: !0,
                            }),
                        ),
                    );
                },
                h = i.default.create((e) => ({ container: { width: "100%", alignItems: "center", justifyContent: "center" }, inputWrapper: { width: "100%", maxWidth: `calc(${m.vf}px + ${e.spaces.space32})` }, selected: { outlineWidth: i.default.theme.spaces.space1 }, input: { backgroundColor: e.colors.gray50, borderRadius: e.spaces.space32, outlineColor: e.colors.primary, outlineWidth: 0, outlineStyle: "solid" } }));
        },
        556756: (e, t, n) => {
            n.d(t, { D: () => D });
            var a = n(202784),
                o = n(400752),
                r = n(555874),
                i = n(325686),
                s = n(437429),
                l = n.n(s),
                c = n(167630),
                d = n(731708),
                m = n(721266),
                p = n(392237),
                u = n(111677),
                h = n.n(u),
                g = n(166852),
                C = n(420182),
                f = n(125363),
                y = n(6157),
                b = n(917799),
                v = n(189953);
            var k = n(530732),
                E = n(123702),
                x = n(725516),
                Z = n(975226),
                I = n(548102),
                w = n.n(I);
            const S = 200,
                _ = (e, t, n) => {
                    const o = new RegExp(w()(t), "i"),
                        r = e.search(o);
                    if (-1 === r) return e.substring(0, S);
                    const i = r > 100 ? r - 100 : 0,
                        s = e.length > r + 100 ? r + 100 : e.length,
                        l = e.substring(i, s),
                        c = l.split(o),
                        m = l.match(o);
                    return a.createElement(
                        d.ZP,
                        null,
                        c.map((e, t) => a.createElement(a.Fragment, { key: t }, e, t < c.length - 1 ? a.createElement(d.ZP, { style: n }, m?.[t] ?? "") : null)),
                    );
                };
            function R({ chatItemId: e, conversationId: t, createdAt: n, message: o, onSearchHistoryClicked: r, searchQuery: i, title: s }) {
                const l = (0, x.z)(),
                    c = a.useMemo(() => {
                        let e = "";
                        return o && ((e = o.replace(/\n/g, "").trim()), (e = (0, E.K)(e))), i && e ? _(e, i, { fontWeight: "900" }) : e;
                    }, [o, i]),
                    u = a.useMemo(() => (i && s ? _(s, i, { color: p.default.theme.colors.text, fontWeight: "900" }) : s), [s, i]),
                    h = a.useMemo(() => (n ? (0, Z._)(n) : ""), [n]),
                    g = a.useCallback(() => {
                        r?.(), l.scribe({ element: "grok_search_result", action: "click" });
                    }, [l, r]);
                return a.createElement(k.Z, { interactiveStyles: { hoverStyle: T.hover }, link: `/i/grok?conversation=${t}`, onClick: g, style: T.conversation }, a.createElement(d.ZP, { color: "text", numberOfLines: 2, weight: "bold", withInteractiveStyling: !1 }, u), a.createElement(m.Z, { size: "space2" }), a.createElement(d.ZP, { color: "gray900", numberOfLines: 4 }, c), a.createElement(m.Z, { size: "space8" }), a.createElement(d.ZP, { color: "gray500" }, h));
            }
            const T = p.default.create((e) => ({ conversation: { alignItems: "start", paddingVertical: e.spaces.space8, paddingHorizontal: e.spaces.space12 }, hover: { backgroundColor: e.colors.gray0, borderRadius: e.borderRadii.medium } })),
                z = h().ab437026,
                H = h().e12569ec,
                B = h().g61ed8a4,
                P = h().hb52cc4a,
                D = ({ onSearchHistoryClicked: e, query: t, queryKey: n }) => {
                    const [s, p] = a.useState(!1),
                        [u, h] = a.useState(!1),
                        [k, E] = a.useState([]),
                        x = (0, f.I0)(),
                        Z = l()(),
                        [{ apiClient: I }] = (0, o.KO)(C.dd);
                    a.useEffect(() => {
                        p(!0),
                            h(!1),
                            x(
                                (
                                    ({ keyword: e }) =>
                                    async (t, n, { api: a }) =>
                                        b._O(t, { params: { keyword: e }, request: a.withEndpoint(y.Z).searchConversations })({ actionTypes: v.Y8, context: "SEARCH_GROK_HISTORY", meta: {} })
                                )({ keyword: t }),
                            )
                                .then((e) => E(e))
                                .catch((e) => {
                                    h(!0);
                                })
                                .finally(() => {
                                    p(!1);
                                });
                    }, [t, n, x, I, Z]);
                    const w = a.useMemo(() => (0, g.Z)(k, (e) => e.conversation?.id), [k]);
                    return s ? a.createElement(i.Z, { style: L.fullScreenContainer }, a.createElement(c.Z, { size: "large" })) : u ? a.createElement(i.Z, { style: L.fullScreenContainer }, a.createElement(i.Z, null, a.createElement(d.ZP, { size: "title3", weight: "bold" }, B), a.createElement(m.Z, { size: "space4" }), a.createElement(d.ZP, { color: "gray500", size: "body" }, P))) : 0 === w.length ? a.createElement(i.Z, { style: L.fullScreenContainer }, a.createElement(i.Z, null, a.createElement(d.ZP, { size: "title3", weight: "bold" }, z), a.createElement(m.Z, { size: "space4" }), a.createElement(d.ZP, { color: "gray500", size: "body" }, H))) : a.createElement(i.Z, { style: L.container }, a.createElement(i.Z, { style: L.content }, a.createElement(r.Z, { ItemSeparatorComponent: () => a.createElement(m.Z, { size: "space8" }), ListFooterComponent: () => a.createElement(m.Z, { size: "space16" }), ListHeaderComponent: () => a.createElement(m.Z, { size: "space8" }), contentContainerStyle: L.results, data: w, keyExtractor: (e) => `${e.conversation.id}_${e.chatItemId}`, renderItem: ({ item: n }) => a.createElement(R, { chatItemId: n.chatItemId, conversationId: n.conversation.id, createdAt: n.createdAt, message: n.message, onSearchHistoryClicked: e, searchQuery: t, title: n.title }) })));
                },
                L = p.default.create((e) => ({ loadingContainer: { width: "100%", height: "50%", alignItems: "center", justifyContent: "center" }, container: { width: "100%", maxHeight: "100%", alignItems: "center", position: "relative" }, content: { width: "100%", flex: 1 }, results: { paddingHorizontal: e.spaces.space12 }, fullScreenContainer: { width: "100%", height: "calc(100vh - 53px)", alignItems: "center", justifyContent: "center" } }));
        },
        975226: (e, t, n) => {
            n.d(t, { _: () => d });
            var a = n(111677),
                o = n.n(a),
                r = n(207137);
            const i = o().g02dacc0,
                s = o().c6e845c0,
                l = o().f3b9b9a7,
                c = o().jade381b,
                d = (e) => {
                    const t = new Date(e);
                    return (0, r.zk)(t) ? i : (0, r.gO)(t) ? s : (0, r.FI)(t) ? l(t) : c(t);
                };
        },
        403556: (e, t, n) => {
            n.d(t, { Z: () => I });
            var a = n(807896),
                o = n(202784),
                r = n(194504),
                i = n(235902),
                s = n(392237),
                l = n(325686),
                c = n(111677),
                d = n.n(c),
                m = n(912021),
                p = n(516951),
                u = n(731708),
                h = n(310088),
                g = n(175993),
                C = n(58881),
                f = n(530732);
            const y = d().d2414d31,
                b = () => d().ce4e85ae,
                v = d().fb9f6f39;
            class k extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._getMemoizedLink = (0, m.Z)((e, t) => {
                            const { pathname: n, query: a, state: o } = "string" == typeof e ? { pathname: e, state: {}, query: {} } : e;
                            return { pathname: n, query: a, method: "push", state: { ...o, lockScroll: t } };
                        })),
                        (this._unlisten = p.Z),
                        (this.state = { location: this.context.location }),
                        (this._getTextColor = (e, t, n, a) => {
                            const o = s.default.theme.colors.text,
                                r = s.default.theme.colors.gray700;
                            return n || a ? (e || t ? o : r) : e ? o : r;
                        }),
                        (this._setRef = (e) => {
                            this._ref = e;
                        }),
                        (this._handleClick = (e) => {
                            const { onClick: t } = this.props;
                            t && t(e);
                        }),
                        (this.focus = (e) => {
                            this._ref && this._ref.focus(e);
                        });
                }
                componentDidMount() {
                    this.context &&
                        (this._unlisten = this.context.listen((e) => {
                            this.setState({ location: e });
                        }));
                }
                componentWillUnmount() {
                    this._unlisten && this._unlisten();
                }
                render() {
                    const { Icon: e, "aria-label": t, badgeCount: n, badgePip: a, children: r, color: i, isActive: c, isCompact: d, isPillLink: m, isRoundedRect: p, isWebRedesign: g, retainScrollPosition: k, style: x, to: Z } = this.props,
                        { location: I } = this.state,
                        w = Z ? this._getMemoizedLink(Z, k) : void 0,
                        S = c ? c(Z) : I?.pathname === w?.pathname,
                        _ = C.Z.generate({ backgroundColor: "transparent", color: s.default.theme.colors.text, insetFocusRing: !0, customHoverBackgroundColor: m ? E.pillHoverStyle.backgroundColor : void 0 }),
                        R = g ? "medium" : S ? "bold" : "medium";
                    return o.createElement(f.Z, { "aria-label": t, "aria-selected": S, focusable: !!S, interactiveStyles: _, link: w, onPress: this._handleClick, ref: this._setRef, role: "tab", style: [...(m ? [E.pillStyle] : [E.link]), ...(m && S ? [E.pillActiveStyle] : []), d ? (m ? E.compactPill : E.compactLink) : null, p ? E.roundedRect : null, x], withoutInteractiveStyles: g }, ({ isFocused: t, isHovered: c }) => o.createElement(l.Z, { style: m && E.flexGrow }, o.createElement(u.ZP, { size: g ? "headline2" : void 0, style: [E.text, { color: this._getTextColor(S, c, g, m) }, d && E.compactText, g && t && E.focusedText, m && E.pillTextStyle, m && S && E.pillActiveTextStyle, m && c && E.pillHoverTextStyle], weight: R }, e && o.createElement(e, { style: E.icon }), r, g || m ? null : o.createElement(l.Z, { style: S && [E.border, { backgroundColor: s.default.theme.colors[i] }] })), n ? o.createElement(h.Z, { count: n, standalone: !0, style: [E.badge, n >= 10 && E.multiDigitBadge, n >= 20 && E.truncatedCountBadge], truncatedCountFormatter: v, unreadCountLabel: y, withBorder: !1 }) : a ? o.createElement(h.Z, { pip: !0, standalone: !0, style: E.badgePip, textColor: "red500", unreadCountLabel: b, withBorder: !1 }) : null));
                }
            }
            (k.contextType = g.Z), (k.defaultProps = { children: [], color: "primary", retainScrollPosition: !0 });
            const E = s.default.create((e) => ({
                    link: { alignItems: "center", display: "flex", flexDirection: "column", flexGrow: 1, height: e.componentDimensions.appBarHeight, justifyContent: "center", outlineStyle: "none", paddingHorizontal: e.spaces.space16, minWidth: "56px" },
                    compactLink: { height: 0.75 * e.componentDimensions.appBarHeightPx },
                    badge: { position: "absolute", height: e.spaces.space12, minWidth: e.spaces.space12, top: `calc(${e.spaces.space12} + ${e.spaces.space2})`, end: `calc(-1 * ${e.spaces.space16})`, fontSize: `calc(${e.spaces.space8} + ${e.spaces.space1})` },
                    badgePip: { position: "absolute", backgroundColor: e.colors.red500, height: e.spaces.space8, minWidth: e.spaces.space8, top: e.spaces.space16, end: `calc(-1 * ${e.spaces.space12})` },
                    multiDigitBadge: { paddingHorizontal: `calc(2 * ${e.spaces.space2})`, end: `calc(-1 * ${e.spaces.space20})` },
                    truncatedCountBadge: { end: `calc(-1 * ${e.spaces.space28})` },
                    text: { alignItems: "center", paddingTop: e.spaces.space16, paddingBottom: e.spaces.space16, display: "flex", flexDirection: "row", height: "100%", justifyContent: "center", position: "relative" },
                    focusedText: { position: "relative", top: `calc(${e.borderWidths.medium} / 2)`, marginBottom: `-${e.spaces.space16}`, borderStyle: "solid", borderBottomWidth: e.borderWidths.medium, borderColor: e.colors.text, boxSizing: "border-box" },
                    compactText: { paddingTop: e.spaces.space8, paddingBottom: e.spaces.space8 },
                    border: { height: e.borderWidths.large, position: "absolute", bottom: 0, width: "100%", minWidth: "56px", alignSelf: "center", borderRadius: e.borderRadii.infinite },
                    compactPill: { height: e.spaces.space36 },
                    active: { backgroundColor: e.colors.gray50 },
                    pillStyle: { backgroundColor: e.colors.transparent, borderColor: e.colors.gray50, borderRadius: e.borderRadii.infinite, borderStyle: "solid", borderWidth: e.spaces.space1, flexGrow: 1, flexShrink: 1, height: e.spaces.space40, paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space8, minWidth: "56px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" },
                    pillTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    pillHoverStyle: { backgroundColor: e.colors.gray100, borderColor: e.colors.gray50 },
                    pillHoverTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    pillActiveStyle: { backgroundColor: e.colors.gray0, borderColor: e.colors.gray50 },
                    pillActiveTextStyle: { fontSize: e.fontSizes.subtext2, fontWeight: e.fontWeights.medium, color: e.colors.text },
                    flexGrow: { flexGrow: 1 },
                    icon: { marginEnd: e.spaces.space8 },
                    roundedRect: { borderRadius: e.borderRadii.large },
                })),
                x = k,
                Z = s.default.create((e) => ({ segmentedControl: { borderBottomWidth: e.borderWidths.small, borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor }, leftAligned: { alignContent: "start", justifyContent: "start" }, flexGrow: { flexGrow: 1 }, gap: { gap: e.spaces.space8 }, linkRedesign: { paddingHorizontal: e.spaces.space12, alignItems: "start", minWidth: e.spaces.space24 }, firstLinkRedesign: { paddingStart: e.spaces.space16 }, withNoPaddingStart: { paddingStart: 0 } })),
                I = ({ alignFirstItem: e, "aria-label": t, isCompact: n, isPillLink: s, isRoundedRect: l, links: c, style: d, visibleItemIndex: m }) => {
                    const p = c
                            .filter(Boolean)
                            .map((e) => e.key)
                            .join("-"),
                        { isWebRedesign: u } = i.ZP.useProps(),
                        h = u() && !s,
                        g = o.useMemo(
                            () =>
                                c.filter(Boolean).map(({ label: t, viewType: r, ...i }, c) => {
                                    const d = h ? [Z.linkRedesign, 0 === c && Z.firstLinkRedesign, e && 0 === c && Z.withNoPaddingStart] : void 0;
                                    return o.createElement(x, (0, a.Z)({ viewType: r }, i, { isCompact: n, isPillLink: s, isRoundedRect: l, isWebRedesign: h, style: d }), t);
                                }),
                            [e, n, s, l, h, c],
                        );
                    return o.createElement(r.Z, { "aria-label": t, buttonsContainerStyle: s && Z.gap, childrenStyle: !h && Z.flexGrow, key: p, style: [s ? null : Z.segmentedControl, h && Z.leftAligned, d], visibleItemIndex: m }, g);
                };
        },
        452693: (e, t, n) => {
            n.r(t), n.d(t, { default: () => l });
            var a = n(202784),
                o = n(890601),
                r = n(783427),
                i = n(347101);
            const s = (e = {}) => {
                const { direction: t } = (0, r.Z)();
                return (0, o.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [i.Z.root, e.style], viewBox: "0 0 24 24", children: a.createElement("g", null, a.createElement("path", { d: "M12 1.75c-5.11 0-9.25 4.14-9.25 9.25 0 4.77 3.61 8.7 8.25 9.2v2.96l1.15-.17c1.88-.29 4.11-1.56 5.87-3.5 1.79-1.96 3.17-4.69 3.23-7.97.09-5.54-4.14-9.77-9.25-9.77zM13 14H9v-2h4v2zm2-4H9V8h6v2z" })) }, { writingDirection: t });
            };
            s.metadata = { width: 24, height: 24 };
            const l = s;
        },
        548102: (e) => {
            var t = /[|\\{}()[\]^$+*?.]/g;
            e.exports = function (e) {
                if ("string" != typeof e) throw new TypeError("Expected a string");
                return e.replace(t, "\\$&");
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~bundle.GrokDrawer~bundle.Grok.8db587fa.js.map
