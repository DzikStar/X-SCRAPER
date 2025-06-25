"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.MessageHandler"],
    {
        470015: (e, t, r) => {
            r.d(t, { Z: () => d });
            var n = r(807896),
                o = r(202784),
                a = r(913309),
                i = r(686689),
                s = r(725405),
                l = r(321835),
                c = r(64899);
            const d = function (e) {
                const { bodyRichText: t, bodyText: r, onImpression: d, primaryAction: m, shouldRenderBorder: p = !1, titleRichText: y, titleText: u, ...g } = e,
                    h = (0, s.Z)(),
                    b = () => {
                        h.scribe({ action: "click" });
                    },
                    k = y ? o.createElement(i.Z, { entities: y.entities, onEntityClick: b, text: y.text }) : u && u.length ? u : null,
                    C = t ? o.createElement(i.Z, { entities: t.entities, onEntityClick: b, text: t.text }) : r && r.length ? r : null,
                    x = (e) => ({
                        ...m,
                        onClick: (t) => {
                            m?.onClick && m.onClick(t), e(t);
                        },
                    }),
                    E = o.createElement(c.H.Consumer, null, ({ handleNextSlide: e }) => o.createElement(a.Z, (0, n.Z)({}, g, { headline: k, primaryAction: m ? x(e) : void 0, shouldRenderBorder: p, subtext: C })));
                return "function" == typeof d ? o.createElement(l.Z, { onImpression: d }, E) : E;
            };
        },
        64899: (e, t, r) => {
            r.d(t, { H: () => a });
            var n = r(202784),
                o = r(516951);
            const a = n.createContext({ handleNextSlide: o.Z });
        },
        225686: (e, t, r) => {
            r.r(t), r.d(t, { default: () => L });
            var n = r(942893),
                o = r(351322),
                a = r(202784),
                i = r(71620),
                s = r(966702);
            const l = Object.freeze({ CompactPrompt: "compactPrompt", HeaderImagePrompt: "headerImagePrompt", InlinePrompt: "inlinePrompt", LargePrompt: "largePrompt" });
            var c = r(668214),
                d = r(960919);
            const m = (e, t) => {
                    const { entry: r } = t;
                    return r.content.content.pagedCarouselFeedbackItem ? void 0 : r.content.content.message ? r.content.content.message : t.entry.content;
                },
                p = (e, t) => {
                    const r = m(0, t)?.content;
                    return (r && (0, s.Z)(r)) || void 0;
                },
                y = (e, t) => {
                    const r = m(0, t)?.content;
                    if (r) return r.headerImagePrompt ? r.headerImagePrompt : r.inlinePrompt ? r.inlinePrompt : r.compactPrompt ? r.compactPrompt : r.largePrompt ? r.largePrompt : void 0;
                },
                u = (e, t) => m(0, t)?.impressionCallbacks,
                g = (e, t) => {
                    const { entry: r } = t;
                    return !!r.content.content.message;
                },
                h = (e, t) => t.entry.entryId,
                b = (e, t) => t.feedbackItems,
                k = (0, c.Z)()
                    .propsFromState(() => ({ displayType: p, entryId: h, feedbackItems: b, messagePrompt: y, impressionCallbacks: u, shouldRenderBorder: g }))
                    .adjustStateProps(({ displayType: e, entryId: t, feedbackItems: r, impressionCallbacks: n, messagePrompt: o, shouldRenderBorder: a }) => {
                        const i = o?.headerImage && { ...o.headerImage.imageVariants[0], backgroundColor: o.headerImage.backgroundColor };
                        return { bodyText: o?.bodyText || void 0, bodyRichText: o?.bodyRichText || void 0, entryId: t, feedbackItems: r, image: i, impressionCallbacks: n, isCompact: e === l.CompactPrompt, primaryButtonAction: o?.primaryButtonAction || void 0, secondaryButtonAction: o?.secondaryButtonAction || void 0, shouldRenderBorder: a, titleText: o?.headerText || void 0, titleRichText: o?.headerRichText || void 0, imageActionUrl: o?.action ? o.action?.url : void 0 };
                    })
                    .propsFromActions(({ module: e }) => ({ createLocalApiErrorHandler: (0, i.zr)("URT_TIMELINE_MESSAGE"), impressEntry: e.impressEntry, processCallback: d.Z, removeEntry: e.removeEntry }));
            var C = r(807896),
                x = r(187669),
                E = r(470015),
                f = r(946409),
                I = r(147735),
                T = r(725405),
                A = r(927389);
            const Z = (e, t) => {
                    if (e) {
                        const r = (0, f.s9)({ url: e, urlType: e.indexOf("twitter://") >= 0 ? I.Z.DeepLink : I.Z.ExternalUrl });
                        return r && { ...r, state: { ...r.state, referringMessageEntryId: t } };
                    }
                },
                P = (e) => {
                    const { createLocalApiErrorHandler: t, entryId: r, feedbackItems: n, impressEntry: o, impressionCallbacks: i, primaryButtonAction: s, processCallback: l, removeEntry: c, secondaryButtonAction: d, ...m } = e,
                        p = (0, T.Z)(),
                        { element: y } = p.contextualScribeNamespace,
                        u = t(),
                        g = (e, t) => {
                            const n = () => {
                                const n = e?.action.onClickCallbacks || [];
                                p.scribe({ element: y || t, action: "click" }),
                                    n &&
                                        n.forEach((e) => {
                                            l(e).catch(u);
                                        }),
                                    e?.action.dismissOnClick && c(r);
                            };
                            if (e) return { link: Z(e.action.url, r), onClick: n, text: e.text };
                        },
                        h = g(s, "primary_action"),
                        b = g(d, "secondary_action"),
                        k = n?.length ? a.createElement(A.Z, { feedbackItems: n, isDisplayedOnMedia: !!e.image }) : null;
                    return (
                        (0, x.q)(() => {
                            p.scribeAction("impression"), i && o({ entryId: r, callbacks: i });
                        }),
                        a.createElement(E.Z, (0, C.Z)({}, m, { imageActionUrl: e?.imageActionUrl, primaryAction: h, rightControl: k, secondaryAction: b }))
                    );
                },
                v = a.memo(P);
            var R = {
                argumentDefinitions: [],
                kind: "Fragment",
                metadata: null,
                name: "relayMessagePrompt",
                selections: [
                    {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "content",
                        plural: !1,
                        selections: [
                            { alias: null, args: null, kind: "ScalarField", name: "__typename", storageKey: null },
                            {
                                kind: "InlineFragment",
                                selections: [
                                    { alias: "titleText", args: null, kind: "ScalarField", name: "header_text", storageKey: null },
                                    { alias: "bodyText", args: null, kind: "ScalarField", name: "body_text", storageKey: null },
                                ],
                                type: "TimelineInlinePrompt",
                                abstractKey: null,
                            },
                        ],
                        storageKey: null,
                    },
                    { alias: "impressionCallbacks", args: null, concreteType: "TimelineCallback", kind: "LinkedField", name: "impression_callbacks", plural: !0, selections: [{ alias: null, args: null, kind: "ScalarField", name: "endpoint", storageKey: null }], storageKey: null },
                ],
                type: "TimelineMessagePrompt",
                abstractKey: null,
                hash: "768f0d46d5770ad2185164d7056ec998",
            };
            const _ = R;
            r(585488);
            var B = r(277660),
                w = r.n(B),
                D = r(163889);
            const S = _,
                H = (e) => {
                    const { createLocalApiErrorHandler: t, entryId: r, feedbackItems: n, impressEntry: o, messageRef: i, processCallback: s, removeEntry: l, shouldRenderBorder: c } = e,
                        d = w()(S, i),
                        m = a.useMemo(() => {
                            if (d.impressionCallbacks) return d.impressionCallbacks.map((e) => ({ ...e }));
                        }, [d]);
                    return "TimelineInlinePrompt" !== d.content.__typename ? ((0, D.ZP)(`Unsupported Message in Relay timeline with type: ${d.content.__typename}`), null) : a.createElement(v, { bodyText: d.content.bodyText || void 0, createLocalApiErrorHandler: t, entryId: r, feedbackItems: n, impressEntry: o, impressionCallbacks: m, isCompact: !1, processCallback: s, removeEntry: l, shouldRenderBorder: c, titleText: d.content.titleText });
                },
                M = a.memo(H),
                F = k((e) => {
                    const { bodyRichText: t, bodyText: r, createLocalApiErrorHandler: n, entry: o, entryId: i, feedbackItems: s, image: l, imageActionUrl: c, impressEntry: d, impressionCallbacks: m, isCompact: p, primaryButtonAction: y, processCallback: u, removeEntry: g, secondaryButtonAction: h, shouldRenderBorder: b, titleRichText: k, titleText: C } = e;
                    return o.itemContentRef ? a.createElement(M, { createLocalApiErrorHandler: n, entryId: i, feedbackItems: s, impressEntry: d, messageRef: o.itemContentRef, processCallback: u, removeEntry: g, shouldRenderBorder: b }) : a.createElement(v, { bodyRichText: t, bodyText: r, createLocalApiErrorHandler: n, entryId: i, feedbackItems: s, image: l, imageActionUrl: c, impressEntry: d, impressionCallbacks: m, isCompact: p, primaryButtonAction: y, processCallback: u, removeEntry: g, secondaryButtonAction: h, shouldRenderBorder: b, titleRichText: k, titleText: C });
                }),
                L = ({ withGaps: e }) => o.iH({ component: F, divider: { bottom: e, top: e }, getScribeDataItem: (e) => n.Z.forMessage(e.itemMetadata.clientEventInfo) }).getHandler();
        },
        927389: (e, t, r) => {
            r.d(t, { Z: () => d });
            var n = r(202784),
                o = r(247056),
                a = r(392237);
            const i = (0, r(523561).Z)({ loader: () => r.e("loader.FeedbackSheet").then(r.bind(r, 774426)) });
            var s = r(725516),
                l = r(851623);
            const c = a.default.create((e) => ({ curationControl: { marginStart: e.spaces.space20 } })),
                d = (0, s.Z)((e) => {
                    const { analytics: t, feedbackItems: r, isDisplayedOnMedia: a } = e,
                        s = n.useCallback((e) => (r ? n.createElement(i, { actionItems: r, onClose: e }) : null), [r]),
                        d = n.useCallback(() => t.scribe({ element: "caret", action: "click" }), [t]);
                    return r && r.length > 0 ? n.createElement(o.Z, { onClick: d, renderActionMenu: s, style: c.curationControl, testID: l.Z.caret, withDarkBackground: a }) : null;
                });
        },
        913309: (e, t, r) => {
            r.d(t, { Z: () => g });
            var n = r(202784),
                o = r(325686),
                a = r(530525),
                i = r(731708),
                s = r(439592),
                l = r(154003),
                c = r(392237),
                d = r(444178);
            const m = "inlinePrompt",
                p = "inlinePrompt-primaryAction",
                y = "inlinePrompt-secondaryAction",
                u = "inlinePrompt-centeredImageContainer";
            class g extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderImage = (e, t, r) => {
                            let i = n.createElement(a.Z, { "aria-label": "", aspectMode: s.Z.exact(e.width / e.height), backgroundColor: e.backgroundColor, customVariants: t, image: e });
                            return r && (i = n.createElement(d.Z, { link: r, role: "" }, " ", i)), e.isCentered ? n.createElement(o.Z, { style: h.centeredImage, testID: u }, n.createElement(o.Z, { style: { width: `${e.width}px`, height: `${e.height}px`, ...e.style } }, i)) : e.style ? n.createElement(o.Z, { style: e.style }, i) : i;
                        }),
                        (this._renderTitle = () => {
                            const { headline: e } = this.props;
                            return e ? n.createElement(i.ZP, { align: "left", role: "heading", size: "title3", style: h.flexGrow, weight: "heavy", withHashflags: !0 }, e) : null;
                        }),
                        (this._renderBodyText = () => {
                            const { subtext: e } = this.props;
                            return e ? n.createElement(i.ZP, { align: "left", color: "gray700", style: this.styles.body, withHashflags: !0 }, e) : null;
                        }),
                        (this._renderAction = ({ action: e, buttonSize: t, buttonType: r, style: a, testID: i }) => {
                            const { secondaryAction: s } = this.props,
                                { link: c, onClick: d, text: m } = e;
                            return n.createElement(o.Z, { style: [this.styles.actionContainer, a, { justifyContent: "flex-start" }], testID: i }, n.createElement(l.ZP, { link: c, onPress: d, size: t, style: { width: s ? "100%" : "auto" }, type: r }, m));
                        });
                }
                render() {
                    const { headline: e, image: t, imageActionUrl: r, imageVariants: a, primaryAction: i, rightControl: s, secondaryAction: l, shouldRenderBorder: c, subtext: d } = this.props;
                    return n.createElement(o.Z, { style: c ? [b.root, b.rootMargin] : h.root }, n.createElement(n.Fragment, null, t ? this._renderImage(t, a, r) : null, e || d || i || l ? n.createElement(o.Z, { style: this.styles.rootPadding, testID: m }, this._renderTitle(), this._renderBodyText(), i ? this._renderAction({ action: i, buttonType: "primaryFilled", style: this.styles.primaryAction, buttonSize: "large", testID: p }) : null, l ? this._renderAction({ action: l, buttonType: "primaryOutlined", style: this.styles.secondaryAction, buttonSize: "large", testID: y }) : null) : null), s ? n.createElement(o.Z, { style: h.rightControl }, s) : null);
                }
                get styles() {
                    return this.props.isCompact ? C : k;
                }
            }
            g.defaultProps = { shouldRenderBorder: !1 };
            const h = c.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground }, flexGrow: { flexGrow: 1 }, centeredImage: { display: "flex", flexDirection: "row", justifyContent: "center" }, rightControl: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, position: "absolute", end: 0, top: 0 } })),
                b = c.default.create((e) => ({ root: { borderColor: e.colors.nestedBorderColor, borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.xLarge, overflow: "hidden" }, rootMargin: { marginStart: e.spaces.space16, marginEnd: e.spaces.space16 } })),
                k = c.default.create((e) => ({ rootPadding: { padding: e.spaces.space32 }, body: { marginTop: e.spaces.space8 }, actionContainer: { flexDirection: "row" }, primaryAction: { marginTop: e.spaces.space28 }, secondaryAction: { marginTop: e.spaces.space16 } })),
                C = c.default.create((e) => ({ rootPadding: { padding: e.spaces.space16 }, body: { marginTop: e.spaces.space2 }, actionContainer: { flexDirection: "row" }, primaryAction: { marginTop: e.spaces.space4 }, secondaryAction: { marginTop: e.spaces.space2 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.MessageHandler.e5e5c96a.js.map
