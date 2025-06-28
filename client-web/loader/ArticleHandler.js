"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.ArticleHandler"],
    {
        415725: (e, t, r) => {
            r.d(t, { Z: () => s });
            var i = r(202784),
                a = r(325686),
                n = r(392237),
                o = r(822228);
            const l = "activeRoute",
                c = n.default.create((e) => ({ activeRoot: { backgroundColor: e.colors.gray0 }, overlay: { ...n.default.absoluteFillObject, borderEndStyle: "solid", borderEndWidth: e.borderWidths.medium, borderEndColor: e.colors.primary, zIndex: 1 } })),
                s = ({ children: e, ...t }) => i.createElement(o.Z, t, (t) => i.createElement(a.Z, { style: t && c.activeRoot, testID: l }, "function" == typeof e ? e(t) : e, t ? i.createElement(a.Z, { pointerEvents: "none", style: c.overlay }) : null));
        },
        546608: (e, t, r) => {
            r.d(t, { Z: () => R });
            var i = r(202784),
                a = r(325686),
                n = r(638009),
                o = r(352924),
                l = r(470397),
                c = r(731708),
                s = r(966886),
                d = r(154003),
                m = r(682474),
                u = r(392237),
                p = r(530525),
                b = r(439592),
                h = r(126962),
                g = r(952428),
                Z = r(530732),
                x = r(111677),
                E = r.n(x),
                y = r(490359),
                v = r(769471),
                C = r(415725),
                w = r(725405),
                f = r(500002),
                _ = r(71620),
                k = r(668214),
                z = r(502909),
                I = r(600823);
            const S = (0, z.ZP)({ namespace: "articles" }),
                A = I.Z.register(S),
                D = (e, t) => A.select(e, t.id.toString()),
                B = (0, k.Z)()
                    .propsFromState(() => ({ article: D }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, _.zr)("ARTICLE_SUMMARY") })),
                L = E().afb7e8f8,
                P = u.default.create((e) => ({ horizontalContainer: { flex: 1, flexDirection: "row" }, textContainer: { flex: 1 }, text: { marginBottom: e.spaces.space4 }, buttonContainer: { alignItems: "flex-start", marginTop: e.spaces.space12, marginBottom: e.spaces.space16 }, imageContainer: { borderRadius: e.borderRadii.large, height: 100, marginStart: e.componentDimensions.gutterHorizontal, overflow: "hidden", width: 100 }, container: { flexDirection: "column", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, bottomBorder: { borderBottomColor: e.colors.borderColor, borderBottomWidth: e.borderWidths.small }, middotGroup: { marginBottom: e.spaces.space8 } })),
                R = (0, f.ZP)(
                    B(({ article: e, createLocalApiErrorHandler: t, id: r, location: x, socialContext: E, withInternalLink: f }) => {
                        const _ = (0, w.Z)(),
                            k = i.useContext(n.ZP),
                            { article_url: z, description: I, domain: S, image_url: A, publish_date: D, title: B } = e || {},
                            R = { domain: o.b(), timestamp: o.b(), title: o.b(), description: o.b(), adFree: o.b(), socialContext: o.b() },
                            F = [R.domain, R.timestamp, R.title, R.description, R.socialContext],
                            H = i.useMemo(() => {
                                const e = (0, y.Z)(_.contextualScribeData.items || []) || {};
                                return { url: z, items: [(0, v.Z)({}, e, { article_details: { publisher_name: S, is_showing_label: !1, is_ad_free: !1 } })] };
                            }, [_.contextualScribeData.items, z, S]),
                            U = i.useCallback(() => {
                                _.scribe({ action: "impression", data: H });
                            }, [_, H]);
                        if (
                            (i.useEffect(() => {
                                U();
                            }, [U]),
                            !e)
                        )
                            return null;
                        const { contextImageUrls: M, landingUrl: O, text: T } = E || {},
                            W = A ? { url: A, height: 750, width: 1250 } : void 0,
                            j = { pathname: z, external: !0 },
                            q = (e) => {
                                _.scribe({ element: f ? "read_article" : "article_header", action: "open_link", data: H });
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
                            Q = i.createElement(i.Fragment, null, i.createElement(a.Z, { style: P.horizontalContainer }, i.createElement(a.Z, { style: P.textContainer }, i.createElement(l.Z, { style: P.middotGroup }, S && i.createElement(c.ZP, { color: "gray700", id: R.domain, size: "subtext2", weight: "bold" }, S), D && i.createElement(c.ZP, { color: "gray700", id: R.timestamp, size: "subtext2" }, i.createElement(s.Z, { timestamp: D }))), i.createElement(c.ZP, { color: "text", id: R.title, link: N, numberOfLines: 3, size: "headline2", style: P.text, weight: "bold", withInteractiveStyling: !1 }, B), I ? i.createElement(c.ZP, { id: R.description, numberOfLines: 2 }, I) : null, f ? i.createElement(a.Z, { style: P.buttonContainer }, i.createElement(d.ZP, { link: j, onClick: q, size: "xSmall", type: "primaryOutlined" }, L)) : null), W ? i.createElement(a.Z, { style: P.imageContainer }, i.createElement(m.Z, { ratio: u.default.theme.aspectRatios.square }, i.createElement(p.Z, { "aria-label": "", aspectMode: b.Z.SQUARE, image: W }))) : null), i.createElement(h.Z, { contextType: "Facepile", iconSize: "large", id: R.socialContext, text: T, textSize: "subtext2", userAvatarUrls: M, withLeftPadding: !1, withTextCentered: !0 }));
                        return f ? i.createElement(C.Z, { exact: !1, path: N?.pathname || "" }, (e) => i.createElement(g.Z, { "aria-labelledby": F.join(" "), "aria-selected": e, link: N, onClick: G, role: "article", style: P.container }, Q)) : i.createElement(Z.Z, { link: j, onClick: q, style: [P.container, P.bottomBorder] }, Q);
                    }),
                );
        },
        521380: (e, t, r) => {
            r.r(t), r.d(t, { default: () => s });
            var i = r(459643),
                a = r(942893),
                n = r(351322),
                o = r(202784),
                l = r(546608);
            const c = (e) => {
                    const { entry: t } = e;
                    return o.createElement(l.Z, { id: t.content.articleId, socialContext: t.content.socialContext?.generalContext || void 0, withInternalLink: !0 });
                },
                s = n
                    .iH({
                        component: c,
                        shouldDisplayBorder: (0, i.Z)(!0),
                        isFocusable: (0, i.Z)(!0),
                        getScribeDataItem: (e) =>
                            ((e) => {
                                const { articleId: t } = e.content;
                                return a.Z.getArticleItem(t, e.itemMetadata.clientEventInfo);
                            })(e),
                    })
                    .getHandler();
        },
        98440: (e, t, r) => {
            r.r(t), r.d(t, { default: () => c });
            var i = r(202784),
                a = r(890601),
                n = r(783427),
                o = r(347101);
            const l = (e = {}) => {
                const { direction: t } = (0, n.Z)();
                return (0, a.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: i.createElement("g", null, i.createElement("path", { d: "M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01z" })) }, { writingDirection: t });
            };
            l.metadata = { width: 24, height: 24 };
            const c = l;
        },
        490359: (e, t, r) => {
            r.d(t, { Z: () => i });
            const i = (e) => (Array.isArray(e) ? e[0] : void 0);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.ArticleHandler.b11e53da.js.map
