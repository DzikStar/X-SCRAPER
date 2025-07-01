"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.ArticleHandler"],
    {
        415725: (e, t, r) => {
            r.d(t, { Z: () => s });
            var n = r(202784),
                i = r(325686),
                a = r(392237),
                o = r(822228);
            const l = "activeRoute",
                c = a.default.create((e) => ({ activeRoot: { backgroundColor: e.colors.gray0 }, overlay: { ...a.default.absoluteFillObject, borderEndStyle: "solid", borderEndWidth: e.borderWidths.medium, borderEndColor: e.colors.primary, zIndex: 1 } })),
                s = ({ children: e, ...t }) => n.createElement(o.Z, t, (t) => n.createElement(i.Z, { style: t && c.activeRoot, testID: l }, "function" == typeof e ? e(t) : e, t ? n.createElement(i.Z, { pointerEvents: "none", style: c.overlay }) : null));
        },
        546608: (e, t, r) => {
            r.d(t, { Z: () => B });
            var n = r(202784),
                i = r(325686),
                a = r(638009),
                o = r(352924),
                l = r(470397),
                c = r(731708),
                s = r(966886),
                d = r(154003),
                m = r(682474),
                u = r(392237),
                p = r(530525),
                b = r(439592),
                g = r(126962),
                h = r(952428),
                Z = r(530732),
                x = r(111677),
                E = r.n(x),
                y = r(490359),
                C = r(769471),
                f = r(415725),
                w = r(725405),
                v = r(500002),
                _ = r(71620),
                k = r(668214),
                z = r(502909),
                I = r(600823);
            const S = (0, z.ZP)({ namespace: "articles" }),
                A = I.Z.register(S),
                D = (e, t) => A.select(e, t.id.toString()),
                L = (0, k.Z)()
                    .propsFromState(() => ({ article: D }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, _.zr)("ARTICLE_SUMMARY") })),
                P = E().afb7e8f8,
                R = u.default.create((e) => ({ horizontalContainer: { flex: 1, flexDirection: "row" }, textContainer: { flex: 1 }, text: { marginBottom: e.spaces.space4 }, buttonContainer: { alignItems: "flex-start", marginTop: e.spaces.space12, marginBottom: e.spaces.space16 }, imageContainer: { borderRadius: e.borderRadii.large, height: 100, marginStart: e.componentDimensions.gutterHorizontal, overflow: "hidden", width: 100 }, container: { flexDirection: "column", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, bottomBorder: { borderBottomColor: e.colors.borderColor, borderBottomWidth: e.borderWidths.small }, middotGroup: { marginBottom: e.spaces.space8 } })),
                B = (0, v.ZP)(
                    L(({ article: e, createLocalApiErrorHandler: t, id: r, location: x, socialContext: E, withInternalLink: v }) => {
                        const _ = (0, w.Z)(),
                            k = n.useContext(a.ZP),
                            { article_url: z, description: I, domain: S, image_url: A, publish_date: D, title: L } = e || {},
                            B = { domain: o.b(), timestamp: o.b(), title: o.b(), description: o.b(), adFree: o.b(), socialContext: o.b() },
                            F = [B.domain, B.timestamp, B.title, B.description, B.socialContext],
                            H = n.useMemo(() => {
                                const e = (0, y.Z)(_.contextualScribeData.items || []) || {};
                                return { url: z, items: [(0, C.Z)({}, e, { article_details: { publisher_name: S, is_showing_label: !1, is_ad_free: !1 } })] };
                            }, [_.contextualScribeData.items, z, S]),
                            U = n.useCallback(() => {
                                _.scribe({ action: "impression", data: H });
                            }, [_, H]);
                        if (
                            (n.useEffect(() => {
                                U();
                            }, [U]),
                            !e)
                        )
                            return null;
                        const { contextImageUrls: M, landingUrl: O, text: T } = E || {},
                            W = A ? { url: A, height: 750, width: 1250 } : void 0,
                            j = { pathname: z, external: !0 },
                            q = (e) => {
                                _.scribe({ element: v ? "read_article" : "article_header", action: "open_link", data: H });
                            },
                            G = () => {
                                _.scribe({ element: "conversation_view", action: "click", data: H });
                            },
                            V = O ? k.getLinkFromUrtUrl(O) : void 0,
                            $ = V ? k.withAnchorless(V) : void 0,
                            N = $
                                ? {
                                      ...$,
                                      pathname: `${$.pathname}?time_window=${(() => {
                                          const e = x?.query?.time_window;
                                          return Number(e) || 24;
                                      })()}`,
                                  }
                                : void 0,
                            Q = n.createElement(n.Fragment, null, n.createElement(i.Z, { style: R.horizontalContainer }, n.createElement(i.Z, { style: R.textContainer }, n.createElement(l.Z, { style: R.middotGroup }, S && n.createElement(c.ZP, { color: "gray700", id: B.domain, size: "subtext2", weight: "bold" }, S), D && n.createElement(c.ZP, { color: "gray700", id: B.timestamp, size: "subtext2" }, n.createElement(s.Z, { timestamp: D }))), n.createElement(c.ZP, { color: "text", id: B.title, link: N, numberOfLines: 3, size: "headline2", style: R.text, weight: "bold", withInteractiveStyling: !1 }, L), I ? n.createElement(c.ZP, { id: B.description, numberOfLines: 2 }, I) : null, v ? n.createElement(i.Z, { style: R.buttonContainer }, n.createElement(d.ZP, { link: j, onClick: q, size: "xSmall", type: "primaryOutlined" }, P)) : null), W ? n.createElement(i.Z, { style: R.imageContainer }, n.createElement(m.Z, { ratio: u.default.theme.aspectRatios.square }, n.createElement(p.Z, { "aria-label": "", aspectMode: b.Z.SQUARE, image: W }))) : null), n.createElement(g.Z, { contextType: "Facepile", iconSize: "large", id: B.socialContext, text: T, textSize: "subtext2", userAvatarUrls: M, withLeftPadding: !1, withTextCentered: !0 }));
                        return v ? n.createElement(f.Z, { exact: !1, path: N?.pathname || "" }, (e) => n.createElement(h.Z, { "aria-labelledby": F.join(" "), "aria-selected": e, link: N, onClick: G, role: "article", style: R.container }, Q)) : n.createElement(Z.Z, { link: j, onClick: q, style: [R.container, R.bottomBorder] }, Q);
                    }),
                );
        },
        521380: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var n = r(459643),
                i = r(942893),
                a = r(351322),
                o = r(202784),
                l = r(546608);
            const c = (e) => {
                    const { entry: t } = e;
                    return o.createElement(l.Z, { id: t.content.articleId, socialContext: t.content.socialContext?.generalContext || void 0, withInternalLink: !0 });
                },
                s = a
                    .iH({
                        component: c,
                        shouldDisplayBorder: (0, n.Z)(!0),
                        isFocusable: (0, n.Z)(!0),
                        getScribeDataItem: (e) =>
                            ((e) => {
                                const { articleId: t } = e.content;
                                return i.Z.getArticleItem(t, e.itemMetadata.clientEventInfo);
                            })(e),
                    })
                    .getHandler();
        },
        490359: (e, t, r) => {
            r.d(t, { Z: () => n });
            const n = (e) => (Array.isArray(e) ? e[0] : void 0);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.ArticleHandler.732547ca.js.map
