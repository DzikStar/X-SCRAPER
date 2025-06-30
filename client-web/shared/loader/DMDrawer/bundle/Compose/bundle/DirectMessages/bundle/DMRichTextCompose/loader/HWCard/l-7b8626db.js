"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DMDrawer~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~loader.HWCard~l-7b8626db", "icons/IconArrow360Rotate-js", "icons/IconCoins-js"],
    {
        705048: (e, t, a) => {
            a.d(t, { Z: () => L });
            var r = a(202784),
                s = a(325686),
                l = a(111677),
                o = a.n(l),
                n = a(161335),
                i = a(99223),
                c = a(731708),
                d = a(154003),
                p = a(596036),
                u = a(747101),
                g = a(992942),
                h = a(466792),
                m = a(530732),
                f = a(521288),
                w = a(336373),
                b = a(392237),
                y = a(14284),
                v = a(642153);
            const E = function (e, t = {}) {
                const a = { listUnicodeChar: t.listUnicodeChar ?? void 0, stripListLeaders: t.stripListLeaders ?? !0, gfm: t.gfm ?? !0, useImgAltText: t.useImgAltText ?? !0, abbr: t.abbr ?? !1, replaceLinksWithURL: t.replaceLinksWithURL ?? !1, htmlTagsToSkip: t.htmlTagsToSkip ?? [], throwError: t.throwError ?? !1 };
                let r = e || "";
                r = r.replace(/^(-\s*?|\*\s*?|_\s*?){3,}\s*/gm, "");
                try {
                    a.stripListLeaders && (r = a.listUnicodeChar ? r.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm, `${a.listUnicodeChar} $1`) : r.replace(/^([\s\t]*)([\*\-\+]|\d+\.)\s+/gm, "$1")),
                        a.gfm &&
                            (r = r
                                .replace(/\n={2,}/g, "\n")
                                .replace(/~{3}.*\n/g, "")
                                .replace(/~~/g, "")
                                .replace(/`{3}.*\n/g, "")),
                        a.abbr && (r = r.replace(/\*\[.*\]:.*\n/, "")),
                        (r = r.replace(/<[^>]*>/g, ""));
                    let e = new RegExp("<[^>]*>", "g");
                    if (a.htmlTagsToSkip.length > 0) {
                        const t = `(?!${a.htmlTagsToSkip.join("|")})`;
                        e = new RegExp(`<${t}[^>]*>`, "ig");
                    }
                    r = r
                        .replace(e, "")
                        .replace(/^[=\-]{2,}\s*$/g, "")
                        .replace(/\[\^.+?\](\: .*?$)?/g, "")
                        .replace(/\s{0,2}\[.*?\]: .*?$/g, "")
                        .replace(/\!\[(.*?)\][\[\(].*?[\]\)]/g, a.useImgAltText ? "$1" : "")
                        .replace(/\[([^\]]*?)\][\[\(].*?[\]\)]/g, a.replaceLinksWithURL ? "$2" : "$1")
                        .replace(/^(\n)?\s{0,3}>\s?/gm, "$1")
                        .replace(/^\s{1,2}\[(.*?)\]: (\S+)( ".*?")?\s*$/g, "")
                        .replace(/^(\n)?\s{0,}#{1,6}\s*( (.+))? +#+$|^(\n)?\s{0,}#{1,6}\s*( (.+))?$/gm, "$1$3$4$6")
                        .replace(/([\*]+)(\S)(.*?\S)??\1/g, "$2$3")
                        .replace(/(^|\W)([_]+)(\S)(.*?\S)??\2($|\W)/g, "$1$3$4$5")
                        .replace(/(`{3,})(.*?)\1/gm, "$2")
                        .replace(/`(.+?)`/g, "$1")
                        .replace(/~(.*?)~/g, "$1");
                } catch (t) {
                    if (a.throwError) throw t;
                    return e;
                }
                return r;
            };
            a(136728);
            const x = o().e82adfeb,
                _ = o().cfb8c1f7,
                Z = o().g78032d5,
                C = ({ images: e, webResultUrls: t, xPostIds: a }) => {
                    const l = t.length + a.length;
                    if (l <= 0) return null;
                    let o = "";
                    t.length > 0 && a.length > 0 ? (o = Z({ count: l })) : t.length > 0 ? (o = x({ count: l })) : a.length > 0 && (o = _({ count: l }));
                    return r.createElement(s.Z, { style: I.sourcesPill }, e.length > 0 ? r.createElement(v.Z, { userAvatarSize: "medium", userAvatarUrls: e.slice(0, 6), withIncreasedSpacing: e.length < 5 }) : a.length > 0 && r.createElement(y.default, { style: I.xPostsIcon }), r.createElement(c.ZP, { color: "gray900", size: "subtext2" }, o));
                },
                I = b.default.create((e) => ({ sourcesPill: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space8, marginBottom: e.spaces.space8 }, xPostsIcon: { color: e.colors.gray900, width: e.spaces.space16, height: e.spaces.space16 } })),
                R = ({ deepsearch_headers: e, deepsearchHeaders: t, rawResponse: a }) => {
                    const {
                        images: l,
                        webResultUrls: o,
                        xPostIds: n,
                    } = (function ({ deepsearch_headers: e, deepsearchHeaders: t, rawResponse: a }) {
                        const r = (function ({ deepsearch_headers: e, deepsearchHeaders: t }) {
                                return t || (e ? e.map((e) => ({ header: e.header, steps: e.steps.map((e) => ({ assistant: e.assistant, decision: e.decision, finalMessage: e.final_message, functionCall: e.function_call, rawFunctionResult: e.raw_function_result, summary: e.summary, header: e.header, webResults: e.web_results?.map((e) => ({ favicon: e.favicon, faviconBase64: e.favicon_base64, language: e.language, title: e.title, snippet: e.snippet, url: e.url })), xPostIds: e.x_post_ids, toolUsageCardResults: e.tool_usage_card_results?.map((e) => ({ toolUsageCardId: e.tool_usage_card_id, webResults: e.web_results?.map((e) => ({ favicon: e.favicon, faviconBase64: e.favicon_base64, language: e.language, title: e.title, snippet: e.snippet, url: e.url })), xPostIds: e.x_post_ids })) })) })) : []);
                            })({ deepsearch_headers: e, deepsearchHeaders: t }),
                            s = [],
                            l = [],
                            o = [];
                        for (const e of r)
                            for (const t of e.steps)
                                t.webResults &&
                                    t.webResults.forEach((e) => {
                                        l.includes(e.url) || (l.push(e.url), e.faviconBase64 && s.push(e.faviconBase64));
                                    }),
                                    t.xPostIds &&
                                        t.xPostIds.forEach((e) => {
                                            o.includes(e) || o.push(e);
                                        }),
                                    t.toolUsageCardResults &&
                                        t.toolUsageCardResults.forEach((e) => {
                                            e.webResults &&
                                                e.webResults.forEach((e) => {
                                                    l.includes(e.url) || (l.push(e.url), e.faviconBase64 && s.push(e.faviconBase64));
                                                }),
                                                e.xPostIds &&
                                                    e.xPostIds.forEach((e) => {
                                                        o.includes(e) || o.push(e);
                                                    });
                                        });
                        return { images: s, webResultUrls: l, xPostIds: o };
                    })({ deepsearch_headers: e, deepsearchHeaders: t, rawResponse: a });
                    return r.createElement(s.Z, null, r.createElement(C, { images: l, webResultUrls: o, xPostIds: n }), r.createElement(c.ZP, { numberOfLines: 8 }, E(a)));
                },
                P = o().gdd173da,
                k = o().dfd6eeac,
                S = o().deceb214,
                T = o().befddd48,
                $ = o().hf3f8e3a,
                M = o().h504ea5e,
                z = o().eb722de2,
                B = b.default.create((e) => ({
                    root: { backgroundColor: e.colors.cellBackground, borderColor: e.colors.borderColor, borderRadius: e.borderRadii.large, borderStyle: "solid", borderWidth: e.borderWidths.small, overflow: "hidden", width: "100%", cursor: "pointer" },
                    rootImage: { width: "100%" },
                    labelBtnPadding: { paddingStart: e.spaces.space4 },
                    footer: { padding: e.spaces.space12, marginTop: e.spaces.space8 },
                    footerInteractive: { backgroundColor: e.colors.gray50 },
                    grokIcon: { color: e.colors.buttonWhite, width: e.spaces.space20, height: e.spaces.space20 },
                    footerIcon: { color: e.colors.text, width: e.spaces.space20, height: e.spaces.space20 },
                    header: { flexDirection: "row", gap: e.spaces.space8, justifyContent: "space-between" },
                    headerIcon: { height: e.spaces.space20, minHeight: e.spaces.space20, fill: e.colors.text, minWidth: e.spaces.space20, width: e.spaces.space20 },
                    headerTextContent: { gap: e.spaces.space4, flexDirection: "column", flex: 1 },
                    headerText: { lineHeight: "140%" },
                    headerContent: { flexDirection: "row", alignItems: "flex-start", gap: e.spaces.space8, flex: 1 },
                    headerImage: { height: "100%", width: "100%" },
                    content: { position: "relative" },
                    contentImage: { position: "relative", borderColor: e.colors.borderColor, borderRadius: e.borderRadii.xLarge, borderStyle: "solid", borderWidth: e.borderWidths.small, overflow: "hidden" },
                    paddingImage: { paddingBottom: e.spaces.space8, gap: e.spaces.space16 },
                    padding: { paddingTop: e.spaces.space12, paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16, paddingBottom: e.spaces.space4, gap: e.spaces.space16 },
                    paddingBody: { paddingTop: e.spaces.space4, paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16, paddingBottom: e.spaces.space16, gap: e.spaces.space8 },
                    imageOverlay: { position: "absolute", backgroundColor: e.colors.translucentBlack30, padding: e.spaces.space16, width: "100%", gap: e.spaces.space8 },
                    imagesContainer: { width: "100%", gap: e.spaces.space8 },
                    image: { width: "100%", aspectRatio: 1.5 },
                    sensitiveContent: { backgroundColor: e.colors.translucentBlack77, backdropFilter: "blur(30px)", width: "100%", height: "100%", position: "absolute", alignItems: "center", justifyContent: "center", gap: e.spaces.space16, padding: e.spaces.space16, top: 0, start: 0 },
                    sensitiveLabels: { gap: e.spaces.space4 },
                    blurIcon: { color: e.colors.whiteOnColor, width: e.spaces.space24, height: e.spaces.space24 },
                    blurContainer: { height: "100%", maxHeight: 50, aspectRatio: 1.5, borderRadius: e.borderRadii.small, overflow: "hidden" },
                    blur: { filter: "blur(3px)" },
                    quoteTweetContainer: { flex: 1, marginStart: `calc(${b.default.theme.spaces.space12} * -1)`, marginTop: `calc(${b.default.theme.spaces.space12} * -1)`, marginBottom: `calc(${b.default.theme.spaces.space4} * -1)`, pointerEvents: "none" },
                })),
                L = ({ continueInGrokEnabled: e, conversation: t, destination: a, mediaVisibilityResults: l, metadata: o, openGrok: b }) => {
                    const [y, v] = r.useState(!!l),
                        x = r.useCallback(
                            (e) => {
                                e.stopPropagation(), e.preventDefault(), v(!1);
                            },
                            [v],
                        ),
                        _ = w.Z.useAnalytics(),
                        Z = r.useContext(p.Z).cardContext,
                        C = Z ? Z.tweetId : "",
                        I = Z ? Z.locationKey : "",
                        [L, D] = r.useState(!1),
                        [W, U] = r.useState(8),
                        H = t.length - 2,
                        O = t.length - 1;
                    if (t.length < 2) return null;
                    const j = (t[O].deepsearch_headers && t[O].deepsearch_headers.length > 0) || (t[O].deepsearchHeaders && t[O].deepsearchHeaders.length > 0),
                        F = E(t[H].message),
                        A = E(t[O].message),
                        J = t[H].mediaUrls[0],
                        V = t[O].mediaUrls[0],
                        N = l?.blurred_image_interstitial?.title.text,
                        G = l?.blurred_image_interstitial?.text.text,
                        q = () => (V ? o?.text || S : o?.text ? o.text : "FUN" === t[H].grokMode ? P : k);
                    return r.createElement(u.Z, { componentType: "grok_share", destinationKey: a }, ({ link: a, onClick: l }) =>
                        r.createElement(
                            r.Fragment,
                            null,
                            r.createElement(
                                s.Z,
                                { style: V ? B.rootImage : B.root },
                                r.createElement(
                                    m.Z,
                                    {
                                        interactive: !1,
                                        link: a,
                                        onClick: () => {
                                            _.scribe({ element: "grok_share_card", action: "click", data: { event_source: I, tweet_id: C } }), l && l();
                                        },
                                    },
                                    V ? null : r.createElement(s.Z, { style: [V ? B.paddingImage : B.padding, B.header] }, r.createElement(s.Z, { style: B.headerContent }, J ? r.createElement(s.Z, { style: B.blurContainer }, r.createElement(g.Z, { source: { uri: J }, style: [B.headerImage, y ? B.blur : void 0] })) : null, r.createElement(s.Z, { style: B.headerTextContent }, t[0] && t[0].analysis_post ? r.createElement(s.Z, { style: B.quoteTweetContainer }, r.createElement(f.Z, { isCondensed: !0, shouldShowBorder: !1, tweet: t[0].analysis_post, withLink: !1 })) : r.createElement(c.ZP, { numberOfLines: 1, size: "headline2", style: B.headerText, weight: "bold" }, F), r.createElement(c.ZP, { color: "gray900", size: "subtext2" }, q())))),
                                    r.createElement(
                                        s.Z,
                                        { style: V ? B.contentImage : B.content },
                                        V
                                            ? r.createElement(r.Fragment, null, r.createElement(g.Z, { source: { uri: V }, style: B.image }), r.createElement(s.Z, { style: B.imageOverlay }, r.createElement(c.ZP, { color: "white", numberOfLines: 1, size: "headline2", weight: "bold" }, F), r.createElement(c.ZP, { color: "white", size: "subtext2" }, q())), y ? r.createElement(s.Z, { style: B.sensitiveContent }, r.createElement(n.default, { style: B.blurIcon }), r.createElement(s.Z, { style: B.sensitiveLabels }, N ? r.createElement(c.ZP, { color: "whiteOnColor", size: "body", weight: "bold" }, N) : null, G ? r.createElement(c.ZP, { color: "whiteOnColor", size: "body" }, G) : null), r.createElement(d.ZP, { onPress: x, type: "onMediaLightFilled" }, T)) : null)
                                            : r.createElement(h.Z, null, ({ isHovered: e }) =>
                                                  r.createElement(
                                                      s.Z,
                                                      { style: B.paddingBody },
                                                      j
                                                          ? r.createElement(R, { deepsearchHeaders: t[O].deepsearchHeaders, deepsearch_headers: t[O].deepsearch_headers, rawResponse: t[O].message })
                                                          : r.createElement(
                                                                c.ZP,
                                                                {
                                                                    getTextOverflow: (e) => {
                                                                        e && !L && (D(!0), U(7));
                                                                    },
                                                                    numberOfLines: W,
                                                                },
                                                                A,
                                                            ),
                                                      L || j
                                                          ? r.createElement(
                                                                c.ZP,
                                                                {
                                                                    color: "link",
                                                                    onClick: (e) => {
                                                                        !j && W <= 8 && (e.stopPropagation(), e.preventDefault(), U(W + 24));
                                                                    },
                                                                    style: { padding: 0, margin: 0 },
                                                                    withUnderline: e,
                                                                },
                                                                $,
                                                            )
                                                          : null,
                                                  ),
                                              ),
                                    ),
                                ),
                            ),
                            e && void 0 !== I
                                ? r.createElement(
                                      d.ZP,
                                      {
                                          icon: r.createElement(i.default, null),
                                          onPress: () => {
                                              _.scribe({ element: "grok_create_your_version", action: "click", data: { event_source: I, tweet_id: C } }), b?.({ text: F, imageUrl: J, autoSubmit: !0, source: "grok_share_card" + (V ? "_image" : "_text") });
                                          },
                                          style: B.footer,
                                          type: "primaryFilled",
                                      },
                                      r.createElement(c.ZP, { size: "body", style: B.labelBtnPadding, weight: "bold" }, V ? M : z),
                                  )
                                : null,
                        ),
                    );
                };
        },
        362075: (e, t, a) => {
            a.d(t, { Z: () => u });
            var r = a(807896),
                s = a(202784),
                l = a(325686),
                o = a(688715),
                n = a(950822),
                i = a(386802),
                c = a(392237);
            class d extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this._ref = s.createRef()),
                        (this._handleRef = (e) => {
                            (this._ref.current = e), this.props.forwardedRef && ("function" == typeof this.props.forwardedRef ? this.props.forwardedRef(e) : (this.props.forwardedRef.current = e));
                        }),
                        (this._handleMessage = (e) => {
                            const { onMessage: t, reportError: a } = this.props;
                            if (!t || ("string" == typeof e.data && 0 === e.data.indexOf("setImmediate$"))) return;
                            if (e.origin !== `${window.location.protocol}//${window.location.host}`) return a ? a(`Invalid cross-origin postMessage from ${e.origin}`) : null;
                            if (this._ref?.current?.contentWindow !== e.source) return;
                            let r;
                            if ((e.stopImmediatePropagation(), "string" == typeof e.data && "undefined" !== e.data)) {
                                try {
                                    r = JSON.parse(e.data);
                                } catch (t) {
                                    return void (a && a(`Invalid postMessage data from ${e.origin}: ${e.data}`));
                                }
                                t(r);
                            }
                        });
                }
                componentDidMount() {
                    var e;
                    this.props.onMessage && ((e = this._handleMessage), window.addEventListener("message", e, !1));
                }
                componentWillUnmount() {
                    var e;
                    this.props.onMessage && ((e = this._handleMessage), window.removeEventListener("message", e, !1));
                }
                render() {
                    const { allowClipboardWrite: e, allowForms: t, allowTopNavigation: a, dangerouslyDisableSandbox: r, src: i, style: c, title: d } = this.props,
                        { isModal: u } = this.context,
                        g = ["autoplay", "fullscreen", "web-share", ...(e ? ["clipboard-write"] : [])],
                        h = (0, n.Z)("iframe", { allow: `${g.join("; ")}`, allowFullScreen: !0, onLoad: this.props.onLoad, ref: this._handleRef, src: (0, o.ju)(i), style: p.iframe, title: d, ...(r ? null : { sandbox: `allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts${t ? " allow-forms" : ""}${a ? " allow-top-navigation" : ""}` }) });
                    return s.createElement(l.Z, { style: u ? [p.root, p.modalPadding, c] : [p.root, c] }, h);
                }
            }
            d.contextType = i.t;
            const p = c.default.create((e) => ({ root: { overflow: "auto", WebkitOverflowScrolling: "touch" }, modalPadding: { paddingTop: e.componentDimensions.appBarHeight }, iframe: { borderWidth: 0, flexGrow: 1 } })),
                u = s.forwardRef((e, t) => s.createElement(d, (0, r.Z)({ forwardedRef: t }, e)));
        },
        65042: (e, t, a) => {
            a.d(t, { Z: () => C });
            var r = a(202784),
                s = a(325686),
                l = a(264171),
                o = a(190636),
                n = a(536698),
                i = a(731708),
                c = a(872405),
                d = a(154003),
                p = a(524496),
                u = a(392237),
                g = a(823161),
                h = a(366635),
                m = a(89217),
                f = a(457458);
            const w = ({ displayType: e }) => {
                    switch (e) {
                        case "carousel":
                            return Z.carouselMeta;
                        case "compact":
                            return Z.compactMeta;
                        default:
                            return Z.fullMeta;
                    }
                },
                b = ({ displayType: e }) => "carousel" !== e,
                y = ({ displayType: e }) => "carousel" !== e,
                v = (e) => {
                    const { displayType: t, recruitingOrganization: a } = e;
                    if (!a) return null;
                    const { is_blue_verified: s, name: l, profile_image_url_https: o, screen_name: n, verified: i, verified_type: d } = a,
                        p = "carousel" === t ? "medium" : void 0,
                        u = !!n,
                        m = r.createElement(h.Z, { isBlueVerified: s, isVerified: i, name: l, screenName: n || "<none>", verifiedType: d, weight: p, withScreenName: u });
                    return (({ displayType: e }) => "carousel" === e)(e) && o ? r.createElement(c.Z, { avatarCell: r.createElement(g.default, { shape: "square", size: "small", uri: o }), avatarCellStyle: Z.avatarCell, avatarSize: "small", style: Z.avatarRow }, m) : m;
                },
                E = (e) => {
                    const { location: t } = e;
                    return t ? r.createElement(s.Z, { style: Z.locationWithIcon }, b(e) ? r.createElement(i.ZP, { color: "gray700", size: "body", style: Z.dontShrinkMeBro }, r.createElement(l.default, null)) : null, r.createElement(i.ZP, { color: "gray700", style: Z.elidedText }, t)) : null;
                },
                x = (e) => {
                    const { employmentType: t, formattedSalary: a, salaryInterval: l } = e;
                    return a || t ? r.createElement(s.Z, { style: Z.metaRow }, a ? r.createElement(s.Z, { style: Z.withIcon }, b(e) ? r.createElement(i.ZP, { color: "gray700", size: "body" }, r.createElement(o.default, null)) : null, r.createElement(i.ZP, { color: "gray700" }, (0, f.M)(a, l))) : null, t ? r.createElement(s.Z, { style: Z.withIcon }, b(e) ? r.createElement(i.ZP, { color: "gray700", size: "body" }, r.createElement(n.default, null)) : null, r.createElement(i.ZP, { color: "gray700" }, m.eo[t])) : null) : null;
                },
                _ = ({ shortDescription: e }) => {
                    const t = (0, f.G)(e);
                    return t ? r.createElement(s.Z, { style: Z.richTextWrapper }, r.createElement(p.Z, { contentState: t })) : null;
                },
                Z = u.default.create((e) => ({ job: { display: "flex", flexDirection: "column", gap: e.spaces.space8 }, carouselJob: { display: "flex", flexDirection: "column", gap: e.spaces.space8 }, fullMeta: { gap: "inherit" }, carouselMeta: { gap: "inherit" }, compactMeta: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space12 }, withIcon: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4 }, locationWithIcon: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space4, flex: 1 }, elidedText: { whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }, dontShrinkMeBro: { display: "flex", flexShrink: 0 }, metaRow: { display: "flex", flexDirection: "row", alignItems: "center", gap: e.spaces.space12 }, richTextWrapper: { color: e.colors.gray900, fontSize: e.fontSizes.body, fontFamily: e.fontFamilies.normal, fontWeight: e.fontWeights.regular, marginTop: e.spaces.space12 }, avatarRow: { alignItems: "center" }, avatarCell: { flexBasis: e.spaces.space12 } })),
                C = (e) => {
                    const { displayType: t, title: a, titleSize: l } = e,
                        o = "carousel" === t,
                        n = "full" === t,
                        c = "full" !== t;
                    return r.createElement(s.Z, { style: o ? Z.carouselJob : Z.job }, r.createElement(i.ZP, { size: l, style: c ? Z.elidedText : void 0, weight: "bold" }, a), r.createElement(v, e), r.createElement(s.Z, { style: w(e) }, r.createElement(E, e), y(e) ? r.createElement(x, e) : null), n ? r.createElement(r.Fragment, null, r.createElement(_, e), r.createElement(d.ZP, { "aria-label": "Apply", size: "small", type: "primaryFilled" }, "View job")) : null);
                };
        },
        89217: (e, t, a) => {
            a.d(t, { Ju: () => u, Qw: () => g, eo: () => c });
            var r = a(111677),
                s = a.n(r);
            const l = s().c69eb656,
                o = s().g46ae43c,
                n = s().jf7d4cc6,
                i = s().b2214572,
                c = Object.freeze({ full_time: l, full_time_contract: o, part_time: n, contract_to_hire: i }),
                d = s().f8337bd6,
                p = s().i935bf88,
                u = Object.freeze({ 1: d, 2: p }),
                g = Object.freeze({ annually: { label: d, value: 1 }, hourly: { label: p, value: 2 } });
        },
        457458: (e, t, a) => {
            a.d(t, { G: () => c, M: () => i });
            a(571372);
            var r = a(301503),
                s = a(111677),
                l = a.n(s),
                o = a(89217);
            const n = l().b75b8ffd,
                i = (e, t = 1) => {
                    const a = t ?? 1;
                    return o.Ju[a.toString()] ? n({ salary: e, interval: o.Ju[a.toString()] }) : e;
                },
                c = (e) => {
                    if (e)
                        try {
                            const t = JSON.parse(e);
                            if (!t.entityMap || !t.blocks) throw new Error("Malformed RawDraftContentState");
                            if (!(0, r.convertFromRaw)(t).hasText()) return;
                            return t;
                        } catch (e) {}
                };
        },
        270711: (e, t, a) => {
            a.r(t), a.d(t, { default: () => i });
            var r = a(202784),
                s = a(890601),
                l = a(783427),
                o = a(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, s.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M19.518 7.57C17.542 6.582 14.883 6 12 6s-5.543.582-7.518 1.57C2.566 8.528 1 10.036 1 12c0 1.393.803 2.565 1.913 3.446 1.054.836 2.473 1.488 4.087 1.923v-2.082c-1.19-.372-2.158-.863-2.844-1.408C3.322 13.218 3 12.564 3 12c0-.798.673-1.789 2.376-2.641C7.019 8.537 9.36 8 12 8s4.98.537 6.624 1.359C20.327 10.211 21 11.202 21 12s-.673 1.789-2.376 2.641c-1.299.65-3.038 1.116-5.012 1.286l1.353-1.459-1.467-1.359-3.564 3.845 3.844 3.564 1.36-1.467-1.231-1.141c2.137-.196 4.081-.714 5.612-1.479 1.916-.958 3.482-2.466 3.482-4.43s-1.566-3.472-3.482-4.43z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const i = n;
        },
        894023: (e, t, a) => {
            a.r(t), a.d(t, { default: () => i });
            var r = a(202784),
                s = a(890601),
                l = a(783427),
                o = a(347101);
            const n = (e = {}) => {
                const { direction: t } = (0, l.Z)();
                return (0, s.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [o.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M4 7h3v2H4v2h3v2H4v2h3v2H4v2h3v2H2V3h13v5h-2V5H4v2zm18 4v10H10V11h12zm-2 2h-8v2h3v2h-3v2h8v-6z" })) }, { writingDirection: t });
            };
            n.metadata = { width: 24, height: 24 };
            const i = n;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DMDrawer~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~loader.HWCard~l-7b8626db.be058cda.js.map
