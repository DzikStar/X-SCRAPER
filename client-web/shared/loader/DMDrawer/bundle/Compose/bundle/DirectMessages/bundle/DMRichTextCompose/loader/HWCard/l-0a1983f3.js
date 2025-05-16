"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.DMDrawer~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~loader.HWCard~l-0a1983f3"],
    {
        447986: (e, t, i) => {
            i.d(t, { Z: () => _ });
            var r = i(202784),
                a = i(325686),
                o = i(310700),
                n = i(784732),
                s = i(453333),
                l = i(682474),
                d = i(757483),
                c = i(530732),
                u = i(659651),
                m = i(392237),
                p = i(336961),
                h = i(538619),
                y = i(85375),
                b = i(94909),
                g = i(596036),
                f = i(747101);
            const v = "image";
            class E extends r.Component {
                constructor(e) {
                    super(e),
                        (this._handleMediaError = () => {
                            this.setState({ isMediaLoaded: !1, hasMediaError: !0 });
                        }),
                        (this._handleMediaLoad = () => {
                            this.setState({ isMediaLoaded: !0, hasMediaError: !1 });
                        }),
                        (this.state = { isMediaLoaded: !1, hasMediaError: !1 });
                }
                get shouldRenderImage() {
                    const { mediaEntity: e, renderPlaceholder: t } = this.props;
                    return !!e?.media_url_https && !t;
                }
                render() {
                    return r.createElement(g.Z.Consumer, null, (e) => (this.props.enableDestinationWrapper ? this._renderDestinationWrapper(e) : this.shouldRenderImage ? this._renderImage(e) : this._renderIcon("news")));
                }
                _renderDestinationWrapper(e) {
                    const { hasMediaError: t, isMediaLoaded: i } = this.state,
                        { "aria-hidden": a, "aria-label": o, componentType: n, destination: s, destinationData: l, focusable: u, mediaEntity: m, onClick: p, style: h, testID: y } = this.props,
                        g = (0, b.j9)(m);
                    let E;
                    g && (E = d.Z.rgbaToCss({ ...g.rgb, alpha: 1 }));
                    const _ = i ? {} : { backgroundColor: E },
                        S = [h, w.root, _],
                        x = [w.root, w.mediaMissing],
                        C = this.shouldRenderImage ? S : x;
                    return r.createElement(f.Z, { componentType: n || v, destinationData: l, destinationKey: s }, ({ link: i, onClick: n }) =>
                        r.createElement(
                            c.Z,
                            {
                                "aria-hidden": a,
                                "aria-label": o,
                                focusable: u,
                                interactive: !1,
                                link: i,
                                onClick: (e) => {
                                    p && p(e), n && n(e);
                                },
                                style: C,
                                testID: y,
                            },
                            this.shouldRenderImage ? (t ? this._renderIcon("media") : this._renderImage(e)) : this._renderIcon("news"),
                        ),
                    );
                }
                _renderImage({ isDataSaverEnabled: e, isPromoted: t }) {
                    const { hideImageDataSaverOverlay: i, ignoreDataSaver: a, locationKey: o, mediaEntity: n, ratio: s } = this.props,
                        { altText: l = "", cropCandidates: d, media_url_https: c } = n || {},
                        { height: u, width: m } = n?.original_info || {};
                    let p;
                    return e && (p = t || a ? "suboptimal" : "preview"), r.createElement(r.Fragment, null, h.v.renderImage({ source: { uri: c, width: m, height: u }, ratio: s, quality: p, layoutCacheKey: o, cropCandidates: d, altText: l, hideDataSaverOverlay: i, onLoad: this._handleMediaLoad, onError: this._handleMediaError }), this._renderOverlay());
                }
                _renderIcon(e) {
                    return r.createElement(
                        l.Z,
                        { ratio: this.props.ratio || 1 },
                        r.createElement(
                            a.Z,
                            { style: [w.image, w.mediaMissingIconContainer] },
                            (() => {
                                switch (e) {
                                    case "media":
                                        return r.createElement(o.default, { style: w.offIcon });
                                    case "news":
                                        return r.createElement(n.default, { style: w.newsIcon });
                                    default:
                                        return null;
                                }
                            })(),
                        ),
                    );
                }
                _renderOverlay() {
                    const { overlay: e, playOverlaySize: t } = this.props;
                    if (!e) return null;
                    switch (e.type) {
                        case y._5.MOMENTS:
                            return r.createElement(u.Z, { align: "left", square: !0 }, r.createElement(s.default, null));
                        case y._5.PLAY:
                            return r.createElement(a.Z, { style: w.playOverlay }, r.createElement(p.Z, { size: t }));
                        case y._5.LABEL:
                            return r.createElement(u.Z, { align: "left", style: w.mediaLabelText, type: "urlCardTitle", wrapperStyle: w.mediaLabelWrapper }, e.text);
                        default:
                            return null;
                    }
                }
            }
            E.defaultProps = { playOverlaySize: "small", componentType: v, enableDestinationWrapper: !0, focusable: !1 };
            const w = m.default.create((e) => ({ root: { width: "100%", overflow: "hidden" }, image: { width: "100%", height: "100%" }, playOverlay: { position: "absolute", width: "100%", height: "100%", alignItems: "center", justifyContent: "center" }, mediaMissing: { backgroundColor: e.colors.gray0 }, mediaMissingIconContainer: { display: "flex", alignItems: "center", justifyContent: "center" }, newsIcon: { color: e.colors.gray700, height: "2em" }, offIcon: { color: e.colors.white, opacity: 0.3, height: "40%" }, mediaLabelWrapper: { end: e.spaces.space12 }, mediaLabelText: { maxWidth: "100%" } })),
                _ = E;
        },
        592180: (e, t, i) => {
            i.d(t, { ZP: () => A });
            var r = i(807896),
                a = i(202784),
                o = i(325686),
                n = i(332920),
                s = i.n(n),
                l = i(803810),
                d = i(731708),
                c = i(235902),
                u = i(58881),
                m = i(530732),
                p = i(952428),
                h = i(352924),
                y = i(392237),
                b = i(935341),
                g = i(747101),
                f = i(835622),
                v = i(268181),
                E = i(966385),
                w = i(260618),
                _ = i(719282),
                S = i(822025),
                x = i(12022),
                C = i(65042),
                L = i(366635);
            const M = y.default.create((e) => ({ wrapper: { paddingVertical: e.spaces.space12, paddingHorizontal: e.spaces.space12, backgroundColor: e.colors.navigationBackground }, container: { display: "flex", flexDirection: "column", gap: e.spaces.space16 } })),
                Z = (e) => {
                    const { destination: t, employmentType: i, formattedSalary: r, formattedSalaryMax: n, formattedSalaryMin: s, location: l, profileUser: d, salaryInterval: c, salaryMax: u, salaryMin: p, shortDescription: h, title: y } = e;
                    return a.createElement(g.Z, { componentType: "job_details", destinationKey: t }, ({ link: e, onClick: t }) => a.createElement(m.Z, { interactive: !1, link: e, onClick: t, style: M.wrapper }, a.createElement(o.Z, { style: M.container }, a.createElement(L.Z, { isBlueVerified: d.is_blue_verified, isVerified: d.verified, name: d.name, profileImageUrl: d.profile_image_url_https, screenName: d.screen_name, verifiedType: d.verified_type }), a.createElement(C.Z, { displayType: "full", employmentType: i, formattedSalary: r, formattedSalaryMax: n, formattedSalaryMin: s, location: l, salaryInterval: c, salaryMax: u, salaryMin: p, shortDescription: h, title: y, titleSize: "headline2" }))));
                };
            var I = i(532738),
                R = i(218440),
                D = i(361996),
                B = i(529509),
                W = i(94909),
                P = i(542908);
            const k = (e) => {
                const { destination: t } = e;
                return a.createElement(g.Z, { componentType: "card_social_context", destinationKey: t }, ({ link: t, onClick: i }) =>
                    a.createElement(
                        m.Z,
                        { interactive: !1, link: t, onClick: i },
                        a.createElement(
                            o.Z,
                            null,
                            (() => {
                                const { facepileUsers: t, totalUsers: i, type: r } = e,
                                    o = (0, W.VR)(t),
                                    n = (0, W.Ur)(t);
                                return r === P.Og.FOLLOWERS ? a.createElement(B.Z, { knownFollowersAvatarUrls: o, knownFollowersCount: i, knownFollowersNames: n, withFacepile: !0 }) : null;
                            })(),
                        ),
                    ),
                );
            };
            var T = i(90444);
            Object.freeze({ CONTROL: "control", GRAY_DETAILS: "gray_details" });
            const z = ({ backgroundColor: e, withFocusWithinFocusRing: t, withInteractiveStyling: i, withOutsetFocusRing: o, ...n }) => {
                if (e) {
                    const s = i ? u.Z.generate({ color: y.default.theme.colors.primary, backgroundColor: y.default.theme.colors[e], insetFocusRing: !o, withFocusWithinFocusRing: t }) : null;
                    return a.createElement(m.Z, (0, r.Z)({}, n, { interactiveStyles: s }));
                }
                return a.createElement(p.Z, (0, r.Z)({}, n, { withFocusWithinFocusRing: t, withInteractiveStyling: i, withOutsetFocusRing: o }));
            };
            class F extends a.Component {
                constructor(e) {
                    super(e),
                        (this._mounted = !0),
                        (this.cardDetailNativeId = (0, h.F)()),
                        (this.cardMediaNativeId = (0, h.F)()),
                        (this._updateSizes = (e) => {
                            if (this._mounted && (0, b.Jz)(this._previousWidth, e)) {
                                this._previousWidth = e;
                                const { buttons: t, details: i } = this.props,
                                    { buttonSize: r, descriptionMaxLines: a, playOverlaySize: o, titleMaxLines: n } = this.state,
                                    s = (0, b.nT)({ hasButtons: !!t, details: i, titleMaxLines: n, descriptionMaxLines: a, playOverlaySize: o, buttonSize: r, width: e });
                                s && this.setState(s);
                            }
                        }),
                        (this._handleLayout = (e) => {
                            const { width: t } = e.nativeEvent.layout;
                            this._updateSizes(t);
                        }),
                        (this._setRootNode = (e) => {
                            e && this._updateSizes(e.clientWidth);
                        }),
                        (this._shouldApplyFullBleedGrayDetailStyles = (e) => {
                            const { buttons: t, followButtonData: i, poll: r } = this.props,
                                a = t?.[0],
                                o = a && "DEPRECATED_secondary" === (0, E.v)(a.data?.styleType, a);
                            return !i && !r && !o && e;
                        }),
                        (this.state = { ...(0, l.Z)(e.details ? (0, b.IW)("large", 500, e.details) : null), ...(0, l.Z)(e.buttons ? { buttonSize: (0, b.CO)(500) } : null) });
                }
                componentWillUnmount() {
                    this._mounted = !1;
                }
                render() {
                    const { backgroundColor: e, buttons: t, chromeless: i, details: r, dmSentOrReceived: n, followButtonData: s, id: l, media: d, onLikelyInteraction: u, poll: m, swipeableMedia: p, testIDs: h, withBorder: b, withBorderShadow: g, withDetail: f, withInteractiveStyling: v, withRoundBorder: E, withSquareBottomBorderRadius: w } = this.props,
                        _ = e && { backgroundColor: y.default.theme.colors[e], ...(y.default.isDarkMode() ? { borderColor: "rgba(255, 255, 255, 0.15)" } : {}) };
                    return a.createElement(c.ZP.UseProps, null, ({ renderCompactCardDetail: c, withEdgeToEdgeContent: y }) => {
                        const S = c(),
                            x = !f || (S && (d?.mediaEntity || p) && !!r?.vanity),
                            C = d?.mediaEntity ? this._renderMedia(S, x) : this._renderSwipeableMedia(S),
                            L = !!m,
                            M = !(i || p || (s && !C)),
                            Z = i && !p,
                            I = !!(m || t || s || (r && !x)) && !p,
                            R = y() && !p,
                            D = this._shouldApplyFullBleedGrayDetailStyles(R);
                        return a.createElement(a.Fragment, null, a.createElement(z, { "aria-labelledby": [this.cardMediaNativeId, this.cardDetailNativeId].join(" "), backgroundColor: e, id: l, onHoverIn: u, onLayout: this._handleLayout, onPressIn: u, style: [g ? N.borderShadow : n && N[n], b && M && !R && N.border, E && N.roundBorder, w && !R && O[w], p && N.rootWithCarousel, D && N.grayDetails, R && N.negativeMargins, _], testID: h?.wrapper, viewRef: this._setRootNode, withFocusWithinFocusRing: !0, withInteractiveStyling: v, withOutsetFocusRing: !0 }, a.createElement(a.Fragment, null, C ? a.createElement(o.Z, { "aria-hidden": !x, id: this.cardMediaNativeId, style: [N.media, Z && !R && N.border, I && !R && N.mediaBottomBorder, L && N.mediaBottomSpace, !!r && O.both], testID: h?.layoutLarge.media }, C) : null, a.createElement(o.Z, { id: this.cardDetailNativeId, style: p && N.carouselBottomContent }, x ? null : this._renderDetail(), this._renderDetailWithMiddotGroup(), this._renderCommunityDetail(), this._renderJobDetail(), this._renderFollowButton(), this._renderSocialContext(), this._renderListDetail(), this._renderAttribution(), this._renderButtons(), this._renderPoll(R)))), this._renderMediaVanityURL(S));
                    });
                }
                _renderDetail() {
                    if (!this.props.details) return null;
                    const { descriptionMaxLines: e, titleMaxLines: t } = this.state,
                        { buttons: i, chromeless: r, details: o, testIDs: n } = this.props,
                        { attribution: s, category: l, description: d, destination: c, footer: u, title: m, vanity: p } = o;
                    return a.createElement(_.Z, { attribution: s, category: l, chromeless: r, description: 0 !== e ? d : void 0, descriptionMaxLines: e, destination: c, footer: u, testID: n?.layoutLarge.detail, title: m, titleMaxLines: t, vanity: p, withBottomPadding: !i });
                }
                _renderDetailWithMiddotGroup() {
                    const { attribution: e, detailsWithMiddotGroup: t } = this.props;
                    if (!t) return null;
                    const { description: i, descriptionMaxLines: r, descriptionTextColor: o, destination: n, label: s, middotGroupContents: l, middotGroupOnTop: d, middotGroupSize: c, middotGroupTextColor: u, showDescriptionOnSmallScreens: m, title: p, titleMaxLines: h, titleSize: y, titleWeight: b } = t;
                    return a.createElement(S.ZP, { description: i, descriptionMaxLines: r, descriptionTextColor: o, destination: n, label: s, middotGroupContents: l, middotGroupOnTop: d, middotGroupSize: c, middotGroupTextColor: u, showDescriptionOnSmallScreens: m, title: p, titleMaxLines: h, titleSize: y, titleWeight: b, withBottomPadding: !!e });
                }
                _renderAttribution() {
                    const { attribution: e } = this.props;
                    if (!e) return null;
                    const { scribeAction: t, user: i } = e;
                    return a.createElement(f.Z, { scribeAction: t, user: i });
                }
                _renderFollowButton() {
                    const { followButtonData: e, promotedContent: t } = this.props;
                    if (!e) return null;
                    const { user_id: i } = e;
                    return a.createElement(x.Z, { promotedContent: t, userId: i });
                }
                _renderSocialContext() {
                    const { socialContextData: e } = this.props;
                    if (!e) return null;
                    const { destination: t, facepileUsers: i, total_user_count: r, type: o } = e;
                    return a.createElement(k, { destination: t, facepileUsers: i, totalUsers: r, type: o });
                }
                _renderCommunityDetail() {
                    const { communityDetails: e } = this.props,
                        { titleMaxLines: t } = this.state;
                    if (!e) return null;
                    const { destination: i, facepileUsers: r, memberCount: o, title: n } = e;
                    return a.createElement(w.Z, { destination: i, facepileUsers: r, memberCount: o, title: n, titleMaxLines: t });
                }
                _renderJobDetail() {
                    const { jobDetails: e } = this.props;
                    if (!e) return null;
                    const { destination: t, employment_type: i, formatted_salary: r, formatted_salary_max: o, formatted_salary_min: n, location: s, profile_user: l, salary_interval: d, salary_max: c, salary_min: u, short_description: m, title: p } = e;
                    return a.createElement(Z, { destination: t, employmentType: i, formattedSalary: r, formattedSalaryMax: o, formattedSalaryMin: n, location: s, profileUser: l, salaryInterval: d, salaryMax: c, salaryMin: u, shortDescription: m, title: p });
                }
                _renderListDetail() {
                    const { listDetails: e } = this.props,
                        { titleMaxLines: t } = this.state;
                    if (!e) return null;
                    const { attribution: i, destination: r, memberCount: o, title: n } = e;
                    return a.createElement(I.Z, { attribution: i, destination: r, memberCount: o, title: n, titleMaxLines: t });
                }
                _renderButtons() {
                    const { buttonSize: e } = this.state,
                        { buttonLayout: t, buttons: i, chromeless: r } = this.props;
                    return i ? a.createElement(v.Z, { buttonLayout: t, buttonSize: e, buttons: i, chromeless: r }) : null;
                }
                _renderPoll(e = !1) {
                    const { isAuthor: t, poll: i, withActionsDisabled: o } = this.props;
                    return i ? a.createElement(D.Z, (0, r.Z)({}, i, { isAuthor: !!t, style: e && N.horizontalPadding, votingDisabled: o })) : null;
                }
                _renderSwipeableMedia(e) {
                    const { details: t, renderVideoPlayer: i, swipeableMedia: r } = this.props;
                    return r ? a.createElement(T.ZP, { playOverlaySize: this.state.playOverlaySize, renderVideoPlayer: i, swipeableMedia: r, title: e ? t?.title : void 0, vanity: e ? t?.vanity : void 0 }) : null;
                }
                _renderMedia(e, t) {
                    const { details: i, locationKey: r, media: o, renderVideoPlayer: n } = this.props,
                        { playOverlaySize: s } = this.state;
                    return a.createElement(R.Z, { focusable: t, locationKey: r, media: o, playOverlaySize: s, renderVideoPlayer: n, title: e && t ? i?.title : void 0, vanity: e && t ? i?.vanity : void 0 });
                }
                _renderMediaVanityURL(e) {
                    const { details: t, media: i } = this.props;
                    return e && t?.vanity
                        ? a.createElement(g.Z, { componentType: "details", destinationKey: i?.destination }, ({ link: e, onClick: i }) =>
                              a.createElement(
                                  d.ZP,
                                  {
                                      color: "gray700",
                                      link: e,
                                      onPress: (e) => {
                                          i && i(e);
                                      },
                                      size: "subtext2",
                                  },
                                  a.createElement(s().I18NFormatMessage, { $i18n: "gec4f969" }, t?.vanity),
                              ),
                          )
                        : null;
                }
            }
            F.defaultProps = { isPromoted: !1, withBorder: !0, withDetail: !0, withInteractiveStyling: !0, withRoundBorder: !0 };
            const O = y.default.create((e) => ({ both: { borderBottomEndRadius: e.borderRadii.none, borderBottomStartRadius: e.borderRadii.none }, left: { borderBottomStartRadius: e.borderRadii.none }, right: { borderBottomEndRadius: e.borderRadii.none } })),
                N = y.default.create((e) => ({ grayDetails: { backgroundColor: e.colors.gray0 }, media: { display: "block" }, mediaBottomBorder: { borderBottomColor: e.colors.nestedBorderColor, borderBottomStyle: "solid", borderBottomWidth: e.borderWidths.small }, mediaBottomSpace: { marginBottom: e.spaces.space12 }, border: { borderColor: e.colors.nestedBorderColor, borderStyle: "solid", borderWidth: e.borderWidths.small, overflow: "hidden" }, borderShadow: { borderRadius: e.borderRadii.xLarge, boxShadow: e.boxShadows.medium, borderColor: e.colors.transparent }, rootWithCarousel: { marginEnd: e.spaces.space32, borderRadius: e.borderRadii.xLarge }, roundBorder: { borderRadius: e.borderRadii.xLarge }, carouselBottomContent: { borderBottomStartRadius: e.borderRadii.xLarge, borderBottomEndRadius: e.borderRadii.xLarge, borderColor: e.colors.nestedBorderColor, borderStyle: "solid", borderWidth: e.borderWidths.small, marginTop: -0.5 }, horizontalPadding: { paddingHorizontal: e.spaces.space16 }, negativeMargins: { marginEnd: -e.spacesPx.space16, marginStart: -e.spacesPx.space16 }, sent: { borderColor: e.colors.primary }, received: { borderColor: e.colors.gray200 } })),
                A = F;
        },
        50246: (e, t, i) => {
            i.d(t, { Z: () => x });
            var r = i(807896),
                a = i(202784),
                o = i(952428),
                n = i(352924),
                s = i(392237),
                l = i(935341),
                d = i(325686),
                c = i(734408),
                u = i(85375),
                m = i(94909),
                p = i(268181),
                h = i(719282),
                y = i(532738),
                b = i(218440),
                g = i(361996),
                f = i(90444);
            const v = s.default.create((e) => ({ media: { display: "block" }, mediaBottomSpace: { marginBottom: e.spaces.space12 }, roundedTopLeft: { borderTopStartRadius: e.borderRadii.xLarge }, roundedTopRight: { borderTopEndRadius: e.borderRadii.xLarge }, roundedBottomLeft: { borderBottomStartRadius: e.borderRadii.xLarge }, roundedBottomRight: { borderBottomEndRadius: e.borderRadii.xLarge }, border: { borderColor: e.colors.nestedBorderColor, borderStyle: "solid", borderWidth: e.borderWidths.small }, overflowHidden: { overflow: "hidden" } })),
                E = (e, t, i) => {
                    const { descriptionMaxLines: r, titleMaxLines: a } = (0, l.IW)("large", e, i),
                        o = i.destination && t[i.destination];
                    return { titleMaxLines: a, descriptionMaxLines: r, vanity: o && (0, m.Yd)(o), description: 0 !== r ? i.description : void 0 };
                },
                w = ({ "aria-hidden": e, card: t, cardWidth: i, chromeless: o, componentName: n, forcedMediaAspectRatio: s, id: w, isAuthor: _, isBottomStackItem: S, isFirstSlide: x, isLastSlide: C, isTopStackItem: L, locationKey: M, nextComponentName: Z, renderVideoPlayer: I, shouldRenderSwipeableMedia: R = !0, shouldRenderVideo: D, testIDs: B, withActionsDisabled: W }) => {
                    const P = t.components_data[n];
                    if (!P) return null;
                    const k = Z ? t.components_data[Z].type : void 0,
                        T = "media" === P.type,
                        z = [L && (!T || x) && v.roundedTopLeft, L && (!T || C) && v.roundedTopRight, S && (!T || x) && v.roundedBottomLeft, S && (!T || C) && v.roundedBottomRight],
                        { destinations: F, media_entities: O } = t,
                        N = i < u.SN ? "small" : "normal";
                    if ("details" === P.type || "topic_details" === P.type || "app_store_details" === P.type || "dpa_details" === P.type) {
                        const t = P.data,
                            n = E(i, F, t);
                        return a.createElement(h.Z, (0, r.Z)({}, t, n, { "aria-hidden": e, chromeless: o, style: z, testID: B?.layoutLarge.detail, withBottomPadding: "button_group" !== k }));
                    }
                    if ("twitter_list_details" === P.type) {
                        const e = P.data,
                            { titleMaxLines: t } = (0, l.IW)("large", i, e);
                        return a.createElement(y.Z, (0, r.Z)({}, e, { style: z, titleMaxLines: t }));
                    }
                    let A;
                    const G = (e) => (t) => {
                        e && t.preventDefault();
                    };
                    if ("swipeable_media" === P.type) {
                        if (!R) return null;
                        const e = (0, m.xV)(P.data.media_list, O);
                        A = a.createElement(f.ZP, { playOverlaySize: N, renderVideoPlayer: I, swipeableMedia: e });
                    } else if ("media" === P.type) {
                        const t = P.data,
                            { aspect_ratio: i, destination: r, overlay: o } = t;
                        let n = t.id && O[t.id],
                            l = !1;
                        if (!D && "uc_video" === n?.type && t.id) {
                            (n = O[(0, c.Vb)(t.id)]), (l = !0);
                        }
                        if (!n) return null;
                        A = a.createElement(d.Z, { onClick: G(l), testID: "mediaWrapper" }, a.createElement(b.Z, { "aria-hidden": e, forcedMediaAspectRatio: s, hideImageDataSaverOverlay: l, locationKey: M, media: { aspect_ratio: i, destination: r, mediaEntity: n, overlay: o }, playOverlaySize: N, renderVideoPlayer: I, useDestination: !l }));
                    }
                    if (A) {
                        const e = "swipeable_media" === P.type;
                        return a.createElement(d.Z, { "aria-hidden": !0, id: w, style: [v.media, z, !e && v.border, v.overflowHidden, "poll" === k && v.mediaBottomSpace], testID: B?.layoutLarge.media }, A);
                    }
                    if ("button_group" === P.type) {
                        const e = P.data.buttons;
                        if (!e) return null;
                        const t = (0, l.CO)(i);
                        return a.createElement(p.Z, { buttonSize: t, buttons: e, chromeless: o, style: z });
                    }
                    if ("poll" === P.type) {
                        const e = P.data;
                        return a.createElement(g.Z, (0, r.Z)({}, e, { isAuthor: !!_, style: z, votingDisabled: W }));
                    }
                    return null;
                },
                _ = (e, t) => ((0, l.Jz)(e, t) ? t : e),
                S = s.default.create((e) => ({ container: { flexGrow: 1, alignItems: "space-between" }, containerWithChrome: { boxShadow: `inset 0 0 0 ${e.borderWidths.small} ${e.colors.nestedBorderColor}`, backgroundColor: e.colors.cellBackground, borderRadius: e.borderRadii.xLarge } })),
                x = ({ componentNames: e, id: t, isCurrentSlide: i, isFirst: s, isLast: l, onLikelyInteraction: d, shouldRenderSwipeableMedia: c, withActionsDisabled: u, withInteractiveStyling: m, ...p }) => {
                    const [h, y] = a.useReducer(_, 0),
                        b = a.useCallback((e) => {
                            y(e.nativeEvent.layout.width);
                        }, []),
                        g = a.useCallback((e) => {
                            e && y(e.clientWidth);
                        }, []),
                        f = e.length,
                        v = a.useMemo(() => Array.from({ length: f }, () => (0, n.F)()), [f]);
                    return a.createElement(
                        o.Z,
                        { "aria-hidden": !i, "aria-labelledby": v.join(" "), id: t, onHoverIn: d, onLayout: b, onPressIn: d, style: [!p.chromeless && S.containerWithChrome, S.container], testID: p.testIDs?.wrapper, viewRef: g, withFocusWithinFocusRing: !0, withInteractiveStyling: m, withOutsetFocusRing: !0 },
                        e.map((t, o) => a.createElement(w, (0, r.Z)({}, p, { "aria-hidden": !i, cardWidth: h, componentName: t, id: v[o], isBottomStackItem: o === f - 1, isFirstSlide: s, isLastSlide: l, isTopStackItem: 0 === o, key: `${o}_${t}`, nextComponentName: e[o + 1], shouldRenderSwipeableMedia: c, withActionsDisabled: u }))),
                    );
                };
        },
        441910: (e, t, i) => {
            i.d(t, { Z: () => E });
            var r = i(202784),
                a = i(325686),
                o = i(332920),
                n = i.n(o),
                s = i(952428),
                l = i(352924),
                d = i(392237),
                c = i(935341),
                u = i(596036),
                m = i(719282),
                p = i(447986);
            const h = n().a3efd2c4,
                y = n().b91c8e53,
                b = n().b3826295;
            class g extends r.Component {
                constructor(e) {
                    super(e),
                        (this._mounted = !0),
                        (this.cardDetailNativeId = (0, l.F)()),
                        (this.cardMediaNativeId = (0, l.F)()),
                        (this._composeTopicCardAccessibilityLabel = (e, t) => (t && t.content && t.content.length > 0 ? b({ title: e.content, description: t.content }) : y({ title: e.content }))),
                        (this._updateSizes = (e) => {
                            if (this._mounted && (0, c.Jz)(this._previousWidth, e)) {
                                this._previousWidth = e;
                                const { descriptionMaxLines: t, imageWidthStyle: i, titleMaxLines: r } = this.state,
                                    { details: a } = this.props,
                                    o = (0, c.IW)("small", e, a, this._getLinesForWidthOptions()),
                                    n = (0, c.IM)(e, a),
                                    { descriptionMaxLines: s, titleMaxLines: l } = o;
                                (n === i && l === r && s === t) || this.setState({ titleMaxLines: l, descriptionMaxLines: s, imageWidthStyle: n });
                            }
                        }),
                        (this._handleLayout = (e) => {
                            const { width: t } = e.nativeEvent.layout;
                            this._updateSizes(t);
                        }),
                        (this._setRootNode = (e) => {
                            e && this._updateSizes(e.clientWidth);
                        }),
                        (this._getLinesForWidthOptions = () => {
                            const { isTopicCard: e } = this.props;
                            return { alwaysShowDescription: e, ...(e ? { capMaxTitleLines: 2 } : null) };
                        });
                    const { details: t } = e,
                        { descriptionMaxLines: i, titleMaxLines: r } = (0, c.IW)("small", 500, t, this._getLinesForWidthOptions());
                    this.state = { descriptionMaxLines: i, titleMaxLines: r, imageWidthStyle: (0, c.IM)(500, t) };
                }
                componentWillUnmount() {
                    this._mounted = !1;
                }
                render() {
                    const { dmSentOrReceived: e, id: t, isTopicCard: i, onLikelyInteraction: o, reverse: n, testIDs: l, withBorderShadow: d, withInteractiveStyling: c, withSquareBottomBorderRadius: u } = this.props,
                        { imageWidthStyle: m } = this.state,
                        p = r.createElement(a.Z, { key: "details", style: v.details }, i ? this._renderTopicDetail() : this._renderDetail()),
                        h = r.createElement(a.Z, { "aria-hidden": !0, id: this.cardMediaNativeId, key: "media", style: [v.media, { width: m }, u && f[u], n ? v.mediaLeftBorder : v.mediaRightBorder], testID: l?.layoutSmall.media }, this._renderMedia());
                    return r.createElement(s.Z, { "aria-labelledby": [this.cardMediaNativeId, this.cardDetailNativeId].join(" "), id: t, onHoverIn: o, onLayout: this._handleLayout, onPressIn: o, style: [v.root, d ? v.borderShadow : e && v[e], u && f[u]], testID: l?.wrapper, viewRef: this._setRootNode, withFocusWithinFocusRing: !0, withInteractiveStyling: c, withOutsetFocusRing: !0 }, n ? [p, h] : [h, p]);
                }
                _renderDetail() {
                    const { descriptionMaxLines: e, titleMaxLines: t } = this.state,
                        { details: i, testIDs: a } = this.props;
                    return r.createElement(m.Z, { attribution: i.attribution, category: i.category, description: 0 !== e ? i.description : void 0, descriptionMaxLines: e, destination: i.destination, footer: i.footer, id: this.cardDetailNativeId, testID: a?.layoutSmall.detail, title: i.title, titleMaxLines: t, vanity: i.vanity, withBottomPadding: !0 });
                }
                _renderTopicDetail() {
                    if (!this.props.isTopicCard) return null;
                    const { descriptionMaxLines: e, titleMaxLines: t } = this.state,
                        {
                            details: { description: i, destination: a, title: o },
                        } = this.props,
                        n = { is_rtl: i?.is_rtl || o?.is_rtl, content: i && i.content ? i.content : h };
                    return r.createElement(m.Z, { "aria-label": o ? this._composeTopicCardAccessibilityLabel(o, i) : void 0, description: n, descriptionMaxLines: e, destination: a, title: o, titleMaxLines: t, withBottomPadding: !0 });
                }
                _renderMedia() {
                    const { locationKey: e, media: t } = this.props,
                        { destination: i, mediaEntity: a, overlay: o } = t;
                    return a && "photo" !== a.type
                        ? null
                        : r.createElement(u.Z.Consumer, null, ({ isDataSaverEnabled: t, isPromoted: n }) => {
                              const s = t && !n;
                              return r.createElement(p.Z, { destination: i, locationKey: e && `${e}-smallCard`, mediaEntity: a, overlay: o, ratio: 1, renderPlaceholder: s });
                          });
                }
            }
            g.defaultProps = { withInteractiveStyling: !0 };
            const f = d.default.create((e) => ({ both: { borderBottomEndRadius: e.borderRadii.none, borderBottomStartRadius: e.borderRadii.none }, left: { borderBottomStartRadius: e.borderRadii.none }, right: { borderBottomEndRadius: e.borderRadii.none } })),
                v = d.default.create((e) => ({ root: { borderColor: e.colors.nestedBorderColor, borderStyle: "solid", borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.xLarge, flexDirection: "row", overflow: "hidden" }, media: { display: "block", borderColor: e.colors.nestedBorderColor, borderStyle: "solid", overflow: "hidden" }, mediaLeftBorder: { borderStartWidth: e.borderWidths.small, borderBottomStartRadius: e.borderRadii.none, borderTopStartRadius: e.borderRadii.none }, mediaRightBorder: { borderEndWidth: e.borderWidths.small, borderBottomEndRadius: e.borderRadii.none, borderTopEndRadius: e.borderRadii.none }, details: { flexGrow: 1, flexShrink: 1, justifyContent: "center" }, sent: { borderColor: e.colors.primary }, received: { borderColor: e.colors.gray200 }, borderShadow: { borderRadius: e.borderRadii.xLarge, boxShadow: e.boxShadows.medium, borderColor: e.colors.transparent } })),
                E = g;
        },
        774235: (e, t, i) => {
            i.d(t, { Z: () => E });
            var r = i(202784),
                a = i(325686),
                o = i(295559),
                n = i(530732),
                s = i(952428),
                l = i(537392),
                d = i(392237),
                c = i(94909),
                u = i(596036),
                m = i(747101),
                p = i(268181),
                h = i(822025),
                y = i(447986),
                b = i(615919);
            const g = `calc(${d.default.theme.spaces.space80} + ${d.default.theme.spaces.space48} + ${d.default.theme.spaces.space4})`,
                f = `calc(${d.default.theme.spaces.space40} + ${d.default.theme.spaces.space20})`,
                v = d.default.create((e) => ({ root: { borderColor: e.colors.nestedBorderColor, borderRadius: e.borderRadii.xLarge, borderStyle: "solid", borderWidth: e.borderWidths.small, overflow: "hidden" }, desktopLayout: { flexDirection: "row" }, mobileLayout: { flexDirection: "column", width: "100%" }, media: { alignSelf: "flex-start", borderColor: (0, o.a7)(d.default.theme.colors.borderColor, 0.7), borderRadius: e.borderRadii.medium, borderWidth: e.borderWidths.small, display: "block", margin: e.spaces.space12, overflow: "hidden" }, details: { alignSelf: "center", flexGrow: 1, flexShrink: 1 }, detailsImageContainer: { flexDirection: "row", width: "100%" }, descriptionMobileLayout: { paddingHorizontal: e.spaces.space12 }, buttonPadding: { paddingBottom: e.spaces.space12, paddingHorizontal: e.spaces.space12, paddingTop: e.spaces.space8 }, buttonLeftAlign: { alignSelf: "flex-start" }, bottomPadding: { paddingBottom: e.spaces.space12 } })),
                E = (e) => {
                    const { button: t, detailsWithMiddotGroup: i, id: o, locationKey: E, media: w, onLikelyInteraction: _, testIDs: S, withInteractiveStyling: x } = e,
                        { description: C, destination: L, middotGroupContents: M, title: Z } = i,
                        I = (e) => r.createElement(h.ZP, { description: C, destination: L, middotGroupContents: M, title: Z, withBottomPadding: !t || e }),
                        R = (e) => {
                            const t = e ? f : g;
                            return r.createElement(
                                a.Z,
                                { "aria-hidden": !0, style: [v.media, { width: t }], testID: "mediaContainer" },
                                (() => {
                                    const { destination: e, mediaEntity: t, overlay: i } = w || {};
                                    return t && "photo" !== t.type
                                        ? null
                                        : r.createElement(u.Z.Consumer, null, ({ isDataSaverEnabled: a, isPromoted: o }) => {
                                              const n = a && !o;
                                              return r.createElement(y.Z, { destination: e, locationKey: E && `${E}-smallCardWithButton`, mediaEntity: t, overlay: i, ratio: 1, renderPlaceholder: n });
                                          });
                                })(),
                            );
                        },
                        D = (e) => (t ? r.createElement(p.Z, { buttons: [t], style: [v.buttonPadding, !e && v.buttonLeftAlign] }) : null),
                        B = () => (C ? r.createElement(m.Z, { componentType: "card_layout_small_with_button", destinationKey: L }, ({ link: e, onClick: i }) => r.createElement(n.Z, { interactive: !1, link: e, onClick: i }, r.createElement(a.Z, { style: [v.descriptionMobileLayout, !t && v.bottomPadding] }, r.createElement(b.Z, { dir: (0, c.XP)(C.is_rtl), numberOfLines: 3, type: "description" }, C.content)))) : null);
                    return r.createElement(l.ZP, null, ({ containerWidth: e }) => {
                        const t = e <= d.default.theme.breakpoints.small;
                        return r.createElement(
                            s.Z,
                            { id: o, onHoverIn: _, onPressIn: _, style: [v.root, t ? v.mobileLayout : v.desktopLayout], testID: S?.wrapper, withFocusWithinFocusRing: !0, withInteractiveStyling: x, withOutsetFocusRing: !0 },
                            ((e) => {
                                const t = I(e),
                                    i = R(e),
                                    o = D(e);
                                return e ? r.createElement(r.Fragment, null, r.createElement(a.Z, { style: v.detailsImageContainer }, r.createElement(a.Z, { style: v.details }, t), i), B(), o) : r.createElement(r.Fragment, null, r.createElement(a.Z, { style: v.details }, t, o), i);
                            })(t),
                        );
                    });
                };
        },
        532738: (e, t, i) => {
            i.d(t, { Z: () => w });
            var r = i(202784),
                a = i(325686),
                o = i(332920),
                n = i.n(o),
                s = i(544367),
                l = i(731708),
                d = i(235902),
                c = i(530732),
                u = i(470397),
                m = i(891198),
                p = i(392237),
                h = i(366635),
                y = i(538619),
                b = i(94909),
                g = i(747101),
                f = i(615919);
            const v = n().c5954d30,
                E = p.default.create((e) => ({ contentWrapper: { flexGrow: 1, flexShrink: 1, justifyContent: "center" }, attributionWrapper: { alignItems: "flex-start" }, detailItemsWrapper: { flexDirection: "row", justifyContent: "space-between", flexGrow: 1 }, horizontalPadding: { paddingHorizontal: e.spaces.space12 }, edgeToEdgeHorizontalPadding: { paddingHorizontal: e.spaces.space16 }, verticalPadding: { paddingTop: e.spaces.space4, paddingBottom: e.spaces.space12 }, spaceBelow: { marginBottom: e.spaces.space4 }, icon: { marginEnd: e.spaces.space2 }, innerRow: { flexDirection: "row", flexShrink: 1 } })),
                w = ({ attribution: e, destination: t, memberCount: i, style: o, title: p, titleMaxLines: w }) =>
                    r.createElement(d.ZP.UseProps, null, ({ withEdgeToEdgeContent: d }) => {
                        const _ = d();
                        return r.createElement(g.Z, { componentType: "twitter_list_details", destinationKey: t }, ({ link: t, onClick: d }) => r.createElement(c.Z, { interactive: !1, link: t, onClick: d, style: [E.contentWrapper, _ ? E.edgeToEdgeHorizontalPadding : E.horizontalPadding, E.verticalPadding, o] }, r.createElement(a.Z, { style: [E.innerRow, E.spaceBelow] }, r.createElement(u.Z, null, r.createElement(l.ZP, { color: "gray700", size: "subtext2", weight: "bold" }, r.createElement(s.default, { style: E.icon }), v), r.createElement(l.ZP, { color: "gray700", size: "subtext2" }, r.createElement(n().I18NFormatMessage, { $i18n: "d6b02329", formattedCount: (0, m.wl)(i), count: i })))), r.createElement(a.Z, { style: E.spaceBelow }, r.createElement(f.Z, { dir: (0, b.XP)(p.is_rtl), numberOfLines: y.v.shouldLimitTextToSingleLine() ? 1 : w, type: "title", weight: "bold" }, p.content)), r.createElement(h.Z, { avatarSize: "small", isBlueVerified: e.is_blue_verified, isProtected: e.protected, isVerified: e.verified, name: e.name, nameSize: "subtext2", profileImageUrl: e.profile_image_url_https, screenName: e.screen_name, screenNameSize: "subtext2", style: E.attributionWrapper, verifiedType: e.verified_type, withLink: !1 })));
                    });
        },
        218440: (e, t, i) => {
            i.d(t, { Z: () => u });
            var r = i(202784),
                a = i(731708),
                o = i(682474),
                n = i(362075),
                s = i(868634),
                l = i(392237),
                d = i(596036),
                c = i(447986);
            const u = function ({ "aria-hidden": e, focusable: t, forcedMediaAspectRatio: i, hideImageDataSaverOverlay: l, locationKey: u, media: p, playOverlaySize: h, renderVideoPlayer: y, title: b, useDestination: g = !0, vanity: f }) {
                    if (!p || !p.mediaEntity) return null;
                    const { aspect_ratio: v, destination: E, mediaEntity: w, overlay: _ } = p,
                        S = [f, b?.content].join(" ");
                    if ("photo" === w.type) {
                        const { height: a, width: o } = w.original_info,
                            n = i || v || (w ? Math.max(o / a, 1) : void 0),
                            s = _ ?? (b?.content ? { type: "label", text: b.content } : void 0);
                        return r.createElement(c.Z, { "aria-hidden": e, "aria-label": S, destination: g ? E : void 0, focusable: t, hideImageDataSaverOverlay: l, locationKey: u && `${u}-largeCard`, mediaEntity: w, overlay: s, playOverlaySize: h, ratio: n });
                    }
                    if ("iframe" === w.type) return r.createElement(o.Z, { ratio: Math.max(w.aspect_ratio, 1) }, r.createElement(n.Z, { src: w.url, style: m.iframe }));
                    if ("video" === w.type || "uc_video" === w.type || "live_broadcast" === w.type || "vine" === w.type || "tweet_video" === w.type || "animated_gif" === w.type) {
                        const e = b?.content ? [r.createElement(s.ZP, { key: "title", style: m.mediaLabelText, type: "urlCardTitle" }, r.createElement(a.ZP, null, b.content))] : [];
                        return y ? r.createElement(d.Z.Consumer, { "aria-label": S }, ({ isDataSaverEnabled: t, isPromoted: i }) => y(w, t ? (i ? "suboptimal" : "preview") : void 0, void 0, void 0, void 0, e)) : null;
                    }
                    return null;
                },
                m = l.default.create({ iframe: { height: "100%" }, mediaLabelText: { maxWidth: "95%" } });
        },
        361996: (e, t, i) => {
            i.d(t, { Z: () => _ });
            var r = i(202784),
                a = i(325686),
                o = i(332920),
                n = i.n(o),
                s = i(731708),
                l = i(470397),
                d = i(891198),
                c = i(352924),
                u = i(392237),
                m = i(818080),
                p = i(542908),
                h = i(268181),
                y = i(495108);
            const b = "cardPoll",
                g = n().fe64170c,
                f = n().g10ace38,
                v = n().a3edf99a,
                E = n().c2b81e9d,
                w = u.default.create((e) => ({ pollDescription: { display: "none" }, pollStatus: { marginTop: e.spaces.space12 } })),
                _ = ({ choices: e, endDatetimeUtc: t, isAuthor: i, isFinal: o, resultTextSize: n, selectedChoice: u, style: _, totalVotes: S, votingDisabled: x }) => {
                    const C = (0, c.b)(),
                        L = r.useMemo(() => e.map(({ cta: e, destination: t, index: i }) => ({ type: p.lW.GENERIC, data: { cta: e, index: i, destination: t } })), [e]);
                    return r.createElement(a.Z, { style: _, testID: b }, u || o || i ? r.createElement(y.Z, { choices: e, isFinal: o, selectedChoice: u, totalVotes: S }) : r.createElement(r.Fragment, null, r.createElement(s.ZP, { id: C, style: w.pollDescription }, g), r.createElement(h.Z, { "aria-describedby": C, "aria-label": f, buttonSize: "DEPRECATED_normalCompact", buttons: L, chromeless: !0, disabled: x, role: "radiogroup" })), r.createElement(s.ZP, { color: "gray700", size: n, style: w.pollStatus }, r.createElement(l.Z, null, r.createElement(s.ZP, null, E({ count: (M = S), formattedCount: (0, d.Gb)(M) })), r.createElement(s.ZP, null, o ? v : m.Z.getTimeLeftLabel(t)))));
                    var M;
                };
        },
        615919: (e, t, i) => {
            i.d(t, { Z: () => d });
            var r = i(202784),
                a = i(630715),
                o = i(731708),
                n = i(392237),
                s = i(538619);
            const l = n.default.create((e) => ({ icon: { marginEnd: e.spaces.space2 } })),
                d = (e) => {
                    const { children: t, color: i, dir: n = "auto", disableIcon: d, numberOfLines: c, size: u, type: m, weight: p } = e,
                        h = "vanity" === m || "description" === m ? "gray700" : "text";
                    return r.createElement(o.ZP, { color: i ?? h, dir: n, numberOfLines: c, size: u, weight: p }, "vanity" !== m || d ? null : r.createElement(o.ZP, { size: "subtext2", style: l.icon }, r.createElement(a.default, null)), s.v.renderTwemojiText(t));
                };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.DMDrawer~bundle.Compose~bundle.DirectMessages~bundle.DMRichTextCompose~loader.HWCard~l-0a1983f3.5516d80a.js.map
