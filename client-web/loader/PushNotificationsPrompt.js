"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.PushNotificationsPrompt"],
    {
        470015: (e, t, o) => {
            o.d(t, { Z: () => d });
            var i = o(807896),
                s = o(202784),
                n = o(913309),
                r = o(686689),
                a = o(725405),
                l = o(321835),
                c = o(64899);
            const d = function (e) {
                const { bodyRichText: t, bodyText: o, onImpression: d, primaryAction: p, shouldRenderBorder: h = !1, titleRichText: m, titleText: u, ...y } = e,
                    g = (0, a.Z)(),
                    b = () => {
                        g.scribe({ action: "click" });
                    },
                    f = m ? s.createElement(r.Z, { entities: m.entities, onEntityClick: b, text: m.text }) : u && u.length ? u : null,
                    C = t ? s.createElement(r.Z, { entities: t.entities, onEntityClick: b, text: t.text }) : o && o.length ? o : null,
                    P = (e) => ({
                        ...p,
                        onClick: (t) => {
                            p?.onClick && p.onClick(t), e(t);
                        },
                    }),
                    x = s.createElement(c.H.Consumer, null, ({ handleNextSlide: e }) => s.createElement(n.Z, (0, i.Z)({}, y, { headline: f, primaryAction: p ? P(e) : void 0, shouldRenderBorder: h, subtext: C })));
                return "function" == typeof d ? s.createElement(l.Z, { onImpression: d }, x) : x;
            };
        },
        64899: (e, t, o) => {
            o.d(t, { H: () => n });
            var i = o(202784),
                s = o(516951);
            const n = i.createContext({ handleNextSlide: s.Z });
        },
        529629: (e, t, o) => {
            o.r(t), o.d(t, { PushNotificationsPromptContainer: () => Z, default: () => S });
            var i = o(202784),
                s = o(529356),
                n = o(332920),
                r = o.n(n),
                a = o(684869),
                l = o(516951),
                c = o(154003),
                d = o(837020);
            const p = r().ia5e7488;
            function h({ ariaLabel: e, closeIcon: t, color: o = "white", disabled: s = !1, isOnMedia: n, onClose: r, size: a = "medium", style: l, testID: h }) {
                const m = t || i.createElement(d.default, { testID: h });
                return i.createElement(c.ZP, { "aria-label": e || p, borderColor: "transparent", color: o, disabled: s, icon: m, onPress: r, size: a, style: l, type: n ? "onMediaDominantColorFilled" : void 0 });
            }
            const m = i.memo(h);
            var u = o(470015),
                y = o(668214),
                g = o(257166),
                b = o(601576);
            const f = (0, y.Z)()
                    .propsFromState(() => ({ promptAllowed: g.selectIsEligibleForPushPrompt }))
                    .propsFromActions(() => ({ addToast: b.fz, dismissPushNotificationsPrompt: g.dismissPushNotificationsPrompt, pushSubscribe: g.pushSubscribe }))
                    .withAnalytics({ component: "soft_permission_prompt", element: "push_notifications" }),
                C = r().hee41732,
                P = r().b87c0a72,
                x = r().e71e09ec,
                A = r().e71e09ec,
                w = r().hd50e064,
                _ = r().g4850f44,
                E = r().dc397182;
            class Z extends i.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._messageRightControl = () => i.createElement(m, { color: "gray700", onClose: this._handleCancel })),
                        (this._handleConfirm = () => {
                            const { addToast: e, pushSubscribe: t } = this.props;
                            this._scribeAction("click"),
                                t().then((t) => {
                                    t && (this.setState({ forceShowPrompt: !1 }), e({ action: { label: E, link: "/settings/push_notifications" }, text: _ }));
                                });
                        }),
                        (this._handleCancel = () => {
                            const { dismissPushNotificationsPrompt: e, onDismiss: t } = this.props;
                            e(), this.setState({ forceShowPrompt: !1 }), this._scribeAction("dismiss"), t();
                        }),
                        (this.state = { forceShowPrompt: e.promptAllowed });
                }
                componentDidUpdate(e, t) {
                    const { dismissPushNotificationsPrompt: o, promptAllowed: i } = this.props;
                    !e.promptAllowed && i && (this._scribeAction("impression"), o(), this.setState({ forceShowPrompt: !0 }));
                }
                componentDidMount() {
                    const { dismissPushNotificationsPrompt: e, promptAllowed: t } = this.props;
                    t && (this._scribeAction("impression"), this.setState({ forceShowPrompt: !0 }), e());
                }
                render() {
                    const { fullScreen: e, message: t, promptAllowed: o } = this.props;
                    return o || this.state.forceShowPrompt ? (e ? i.createElement(s.Z, { actionLabel: A, graphic: a.default, headline: x, onAction: this._handleConfirm, onClose: this._handleCancel, onTertiaryAction: this._handleCancel, subtext: t, tertiaryActionLabel: w }) : i.createElement(u.Z, { bodyText: t, primaryAction: { onClick: this._handleConfirm, text: A }, rightControl: this._messageRightControl(), titleText: C })) : null;
                }
                _scribeAction(e) {
                    const { analytics: t } = this.props;
                    t.scribeAction(e);
                }
            }
            Z.defaultProps = { fullScreen: !1, message: P, onDismiss: l.Z };
            const S = f(Z);
        },
        913309: (e, t, o) => {
            o.d(t, { Z: () => y });
            var i = o(202784),
                s = o(325686),
                n = o(530525),
                r = o(731708),
                a = o(439592),
                l = o(154003),
                c = o(392237),
                d = o(444178);
            const p = "inlinePrompt",
                h = "inlinePrompt-primaryAction",
                m = "inlinePrompt-secondaryAction",
                u = "inlinePrompt-centeredImageContainer";
            class y extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderImage = (e, t, o) => {
                            let r = i.createElement(n.Z, { "aria-label": "", aspectMode: a.Z.exact(e.width / e.height), backgroundColor: e.backgroundColor, customVariants: t, image: e });
                            return o && (r = i.createElement(d.Z, { link: o, role: "" }, " ", r)), e.isCentered ? i.createElement(s.Z, { style: g.centeredImage, testID: u }, i.createElement(s.Z, { style: { width: `${e.width}px`, height: `${e.height}px`, ...e.style } }, r)) : e.style ? i.createElement(s.Z, { style: e.style }, r) : r;
                        }),
                        (this._renderTitle = () => {
                            const { headline: e } = this.props;
                            return e ? i.createElement(r.ZP, { align: "left", role: "heading", size: "title3", style: g.flexGrow, weight: "heavy", withHashflags: !0 }, e) : null;
                        }),
                        (this._renderBodyText = () => {
                            const { subtext: e } = this.props;
                            return e ? i.createElement(r.ZP, { align: "left", color: "gray700", style: this.styles.body, withHashflags: !0 }, e) : null;
                        }),
                        (this._renderAction = ({ action: e, buttonSize: t, buttonType: o, style: n, testID: r }) => {
                            const { secondaryAction: a } = this.props,
                                { link: c, onClick: d, text: p } = e;
                            return i.createElement(s.Z, { style: [this.styles.actionContainer, n, { justifyContent: "flex-start" }], testID: r }, i.createElement(l.ZP, { link: c, onPress: d, size: t, style: { width: a ? "100%" : "auto" }, type: o }, p));
                        });
                }
                render() {
                    const { headline: e, image: t, imageActionUrl: o, imageVariants: n, primaryAction: r, rightControl: a, secondaryAction: l, shouldRenderBorder: c, subtext: d } = this.props;
                    return i.createElement(s.Z, { style: c ? [b.root, b.rootMargin] : g.root }, i.createElement(i.Fragment, null, t ? this._renderImage(t, n, o) : null, e || d || r || l ? i.createElement(s.Z, { style: this.styles.rootPadding, testID: p }, this._renderTitle(), this._renderBodyText(), r ? this._renderAction({ action: r, buttonType: "primaryFilled", style: this.styles.primaryAction, buttonSize: "large", testID: h }) : null, l ? this._renderAction({ action: l, buttonType: "primaryOutlined", style: this.styles.secondaryAction, buttonSize: "large", testID: m }) : null) : null), a ? i.createElement(s.Z, { style: g.rightControl }, a) : null);
                }
                get styles() {
                    return this.props.isCompact ? C : f;
                }
            }
            y.defaultProps = { shouldRenderBorder: !1 };
            const g = c.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground }, flexGrow: { flexGrow: 1 }, centeredImage: { display: "flex", flexDirection: "row", justifyContent: "center" }, rightControl: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, position: "absolute", end: 0, top: 0 } })),
                b = c.default.create((e) => ({ root: { borderColor: e.colors.nestedBorderColor, borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.xLarge, overflow: "hidden" }, rootMargin: { marginStart: e.spaces.space16, marginEnd: e.spaces.space16 } })),
                f = c.default.create((e) => ({ rootPadding: { padding: e.spaces.space32 }, body: { marginTop: e.spaces.space8 }, actionContainer: { flexDirection: "row" }, primaryAction: { marginTop: e.spaces.space28 }, secondaryAction: { marginTop: e.spaces.space16 } })),
                C = c.default.create((e) => ({ rootPadding: { padding: e.spaces.space16 }, body: { marginTop: e.spaces.space2 }, actionContainer: { flexDirection: "row" }, primaryAction: { marginTop: e.spaces.space4 }, secondaryAction: { marginTop: e.spaces.space2 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.PushNotificationsPrompt.c9bd14fa.js.map
