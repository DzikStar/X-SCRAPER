"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1"],
    {
        847224: (e, t, r) => {
            r.d(t, { Z: () => P });
            var n = r(202784),
                i = r(325686),
                o = r(111677),
                a = r.n(o),
                s = r(58399),
                l = r(500040),
                d = r(47086),
                c = r(187929),
                u = r(410547),
                m = r(731708),
                p = r(235902),
                h = r(638009),
                g = r(952428),
                f = r(336373),
                w = r(392237),
                y = r(950152);
            const _ = { element: "forward_pivot" },
                C = { element: "quoted_forward_pivot" },
                b = "StayInformed",
                v = a().e9f1af3a,
                x = a().d7e50a66,
                S = a().f1881d86,
                E = a().j3d37222,
                T = ({ inQuoteTweet: e, isLinkExternal: t, isTweetNonCompliant: r, onPress: o, pivotLinkObject: a, softInterventionDisplayType: l = b, text: d, scribeOnImpression: c }) => {
                    const { Icon: u, backgroundColor: p, headerText: h, iconColor: f } = Z()[l] || Z()[b],
                        w = "GovernmentRequested" === l,
                        y = "gray700",
                        _ = "Fosnr" === l ? x : v;
                    return (
                        n.useEffect(() => {
                            c?.();
                        }, [c]),
                        n.createElement(g.Z, { link: a, onPress: o, style: [k.softInterventionContainer, e ? k.softInterventionQTContainer : k.softInterventionContainerBorder, p] }, n.createElement(i.Z, { style: k.softInterventionHeader }, n.createElement(u, { style: [k.icon, f] }), n.createElement(m.ZP, { weight: "bold" }, h), n.createElement(s.default, { style: k.chevronIcon })), n.createElement(m.ZP, { color: y }, `${d} `, n.createElement(m.ZP, { link: a, style: k.learnMoreLink }, _)), w || (r && !e) ? n.createElement(m.ZP, { color: y, style: k.softInterventionFooter }, w ? E : S) : null)
                    );
                },
                I = (e, t, r, n) => ({ items: [{ id: n, forward_pivot_details: { associated_tweet_id: n, display_type: e, landing_url: t.url, soft_intervention_type: r } }] }),
                k = w.default.create((e) => ({ backgroundColorGray: { backgroundColor: e.colors.gray0 }, chevronIcon: { color: e.colors.gray300, flexShrink: 0, height: e.spaces.space16, width: e.spaces.space16, marginStart: "auto" }, icon: { flexShrink: 0, height: e.spaces.space16, width: e.spaces.space16, marginEnd: e.spaces.space4 }, iconBlue: { color: w.default.theme.colors.blue500 }, iconGray: { color: w.default.theme.colors.gray500 }, iconOrange: { color: w.default.theme.colors.orange500 }, iconRed: { color: w.default.theme.colors.red500 }, learnMoreLink: { whiteSpace: "nowrap", flexShrink: 0, paddingTop: e.spaces.space2 }, softInterventionContainer: { borderRadius: e.borderRadii.xLarge, padding: e.spaces.space12 }, softInterventionQTContainer: { borderTopStartRadius: e.borderRadii.none, borderTopEndRadius: e.borderRadii.none, borderTopWidth: e.borderWidths.small, borderTopColor: e.colors.borderColor, borderTopStyle: "solid" }, softInterventionContainerBorder: { borderWidth: e.borderWidths.small, borderColor: e.colors.gray200, borderStyle: "solid" }, softInterventionFooter: { marginTop: e.spaces.space8, paddingTop: e.spaces.space8, borderTopColor: e.colors.borderColor, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small }, softInterventionHeader: { alignItems: "center", flexDirection: "row", paddingBottom: e.spaces.space2 } })),
                Z = () => ({ GetTheLatest: { Icon: l.default, headerText: a().e461d0ee, iconColor: k.iconBlue }, StayInformed: { Icon: d.default, headerText: a().d1386940, iconColor: k.iconOrange }, Misleading: { Icon: c.default, headerText: a().ecda5f9e, iconColor: k.iconRed }, GovernmentRequested: { Icon: u.default, backgroundColor: k.backgroundColorGray, headerText: a().a423473c, iconColor: k.iconGray }, Fosnr: { Icon: l.default, backgroundColor: k.backgroundColorGray, headerText: a().b3296688, iconColor: k.iconGray } }),
                P = ({ displayType: e, inQuoteTweet: t, isTweetNonCompliant: r, landingUrl: i, onPress: o, softInterventionDisplayType: a, text: s, tweetId: l }) => {
                    const d = f.Z.useAnalytics(),
                        c = n.useMemo(() => (t ? C : _), [t]),
                        u = n.useCallback(() => {
                            d.scribe({ ...c, action: "impression", data: I(e, i, a, l) });
                        }, [d, c, e, i, a, l]),
                        m = () => {
                            o && o(), i && d.scribe({ ...c, action: "click", data: I(e, i, a, l) });
                        },
                        g = p.ZP.useProps(),
                        w = e === y.x.SoftIntervention && !("Fosnr" === a && !g.fosnrSoftInterventionsEnabled());
                    return n.createElement(h.ZP.Consumer, null, (e) => {
                        const o = i ? e.getLinkFromUrtUrl(i) : void 0;
                        if (!o) return null;
                        const l = !o || !!o.external;
                        return w ? n.createElement(T, { inQuoteTweet: t, isLinkExternal: l, isTweetNonCompliant: r, onPress: m, pivotLinkObject: o, scribeOnImpression: u, softInterventionDisplayType: a, text: s.text }) : null;
                    });
                };
        },
        680665: (e, t, r) => {
            r.d(t, { ZP: () => s });
            var n = r(202784),
                i = r(325686),
                o = r(392237);
            const a = 2;
            function s(e) {
                const { count: t, max: r, selectedIndex: s } = e,
                    m = (function () {
                        const { theme: e } = o.default;
                        return 2 * c(e).px + e.borderWidthsPx.small;
                    })(),
                    p = n.useRef({ left: 0, right: r - 1 }),
                    h = n.useRef(0),
                    [g, f] = n.useState(d(p.current, t, m));
                n.useEffect(() => {
                    function e() {
                        const e = t - 1,
                            { left: r, right: n } = p.current,
                            i = n - s + 1 <= a && n !== e,
                            o = s + 1 - r <= a && 0 !== r;
                        return !(!i && !o) && (i ? ((p.current.left = r + 1), (p.current.right = n + 1)) : o && ((p.current.left = r - 1), (p.current.right = n - 1)), !0);
                    }
                    for (; e(); );
                    f(d(p.current, t, m)), (h.current = s);
                }, [s, t, r, m]);
                const w = new Array(t).fill(1).map((e, i) => {
                    const o = i === s;
                    if (t <= r) return n.createElement(l, { key: i, selected: o });
                    const a = g[i];
                    return n.createElement(l, { continuation: Boolean(a), continuationType: a, key: i, selected: o });
                });
                return n.createElement(i.Z, { style: [u.indicatorWindowContainer, { width: `calc(${r} * ${m}px)`, height: `${m}px` }] }, n.createElement(i.Z, { style: [u.indicatorsContainer, { height: `${m}px`, width: `calc(${m}px * ${t})` }, g.style] }, w));
            }
            function l(e) {
                let t = u.indicator;
                if (e.selected) t = u.indicatorSelected;
                else if (e.continuation)
                    switch (e.continuationType) {
                        case m.small:
                            t = u.indicatorContinuationSmall;
                            break;
                        case m.medium:
                            t = u.indicatorContinuationMedium;
                    }
                return n.createElement(i.Z, { style: t });
            }
            function d(e, t, r) {
                const { left: n, right: i } = e,
                    o = { style: { transform: [{ translateX: -1 * r * n }] } };
                return (o[n - 1] = m.small), (o[n] = m.small), (o[n + 1] = m.medium), (o[i - 1] = m.medium), (o[i] = m.small), (o[i + 1] = m.small), 0 === n ? (delete o[0], delete o[1]) : i > t - a && (delete o[t - 1], delete o[t - 2]), o;
            }
            function c(e) {
                return { style: e.spaces.space8, px: e.spacesPx.space8 };
            }
            const u = o.default.create((e) => {
                    const t = c(e).style,
                        r = { transition: "transform 200ms" },
                        n = { ...r, display: "inline-flex", alignItems: "center", justifyContent: "center", borderRadius: e.borderRadii.infinite, marginHorizontal: e.spaces.space4, width: t, height: t, transform: [{ scale: 0.5 }] },
                        i = { ...n, backgroundColor: e.colors.gray300 };
                    return { indicatorWindowContainer: { marginVertical: e.spaces.space12, overflow: "hidden", margin: "auto" }, indicatorsContainer: { ...r, display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "center", margin: "auto" }, indicatorSelected: { ...n, borderWidth: e.borderWidths.small, borderColor: e.colors.gray300, borderStyle: "solid", backgroundColor: e.colors.white, transform: [{ scale: 1 }] }, indicator: { ...n, backgroundColor: e.colors.gray300 }, indicatorContinuationSmall: { ...i, transform: [{ scale: 0.3 }] }, indicatorContinuationMedium: { ...i, transform: [{ scale: 0.4 }] } };
                }),
                m = Object.freeze({ small: "small", medium: "medium" });
        },
        454740: (e, t, r) => {
            r.d(t, { W: () => l, Z: () => s });
            var n = r(202784),
                i = r(325686),
                o = r(731708),
                a = r(392237);
            const s = (e) => {
                    const { containerStyle: t, decoration: r, description: a, label: s, testID: d } = e,
                        c = "string" == typeof s ? n.createElement(o.ZP, { weight: "bold" }, s) : s,
                        u = a ? ("string" == typeof a ? n.createElement(o.ZP, { color: "gray700", style: l.description }, a) : a) : null;
                    return n.createElement(i.Z, { role: "listitem", style: [l.root, t], testID: d }, r ? n.createElement(i.Z, { style: l.decorationContainer }, r) : null, n.createElement(i.Z, { style: l.content }, c, u));
                },
                l = a.default.create((e) => ({ root: { alignItems: "flex-start", justifyContent: "space-between", paddingVertical: e.componentDimensions.gutterVertical, paddingHorizontal: e.spaces.space32, flexDirection: "row", flexGrow: 1, minHeight: `calc(${a.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})` }, content: { alignSelf: "center", flexGrow: 1, flexShrink: 1 }, description: { marginTop: e.spaces.space4 }, decorationContainer: { justifyContent: "center" } }));
        },
        593866: (e, t, r) => {
            r.d(t, { Z: () => s });
            var n = r(807896),
                i = r(202784),
                o = r(325686),
                a = r(454740);
            const s = (e) => {
                const { "aria-label": t, containerStyle: r, items: s } = e;
                return i.createElement(
                    o.Z,
                    { "aria-label": t, role: "list" },
                    s.map((e, t) => i.createElement(a.Z, (0, n.Z)({ containerStyle: r, key: t }, e))),
                );
            };
        },
        525754: (e, t, r) => {
            r.d(t, { Z: () => s });
            var n = r(807896),
                i = r(202784),
                o = r(896632),
                a = r(796684);
            const s = (e) => i.createElement(o.Z, (0, n.Z)({}, e, { renderSelector: ({ value: e, ...t }) => i.createElement(a.Z, (0, n.Z)({}, t, { key: e })) }));
        },
        834324: (e, t, r) => {
            r.d(t, { Z: () => b });
            r(136728);
            var n = r(202784),
                i = r(325686),
                o = r(111677),
                a = r.n(o),
                s = r(837020),
                l = r(797681),
                d = r(731708),
                c = r(154003),
                u = r(392237),
                m = r(909377);
            const p = "icon",
                h = "thumbnail",
                g = a().af8fa2ae,
                f = Object.freeze({ primary: { "aria-live": "polite" }, exclusive: { "aria-live": "polite" }, danger: { "aria-live": "assertive" }, success: { "aria-live": "polite" }, warning: { "aria-live": "polite" } });
            class w extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.state = { contentMidpoint: void 0 }),
                        (this._handleLayout = () => {
                            if (this._contentNode) {
                                const { left: e, width: t } = this._contentNode.getBoundingClientRect(),
                                    r = e + t / 2;
                                this.setState({ contentMidpoint: r });
                            }
                        }),
                        (this._setContentNode = (e) => {
                            this._contentNode = e;
                        });
                }
                render() {
                    const { Icon: e, headline: t, onClose: r, style: o, type: a, withCloseButton: d, withRightArrow: u, withThumbnail: m } = this.props,
                        w = f[a],
                        { "aria-live": b } = w,
                        v = m && e ? h : e && t ? p : null;
                    return n.createElement(n.Fragment, null, n.createElement(i.Z, { "aria-live": b, onLayout: this._handleLayout, ref: this._setContentNode, role: "status", style: [y.root, _[a], o] }, n.createElement(i.Z, { style: y.contentContainer, testID: v }, this._renderIconOrThumbnail(), n.createElement(i.Z, { style: y.contentTextContainer }, this._renderHeadline(), this._renderSubtext())), d && r ? n.createElement(c.ZP, { "aria-label": g, icon: n.createElement(s.default, null), onPress: r, size: "smallCompact", type: "brandText" }) : null), u ? n.createElement(l.default, { style: [{ transform: [{ rotate: "90deg" }], position: "absolute" }, C[a], this._getSideArrowStyle()] }) : null);
                }
                _renderIconOrThumbnail() {
                    const { Icon: e, action: t, headline: r, withThumbnail: i } = this.props,
                        o = r || t;
                    if (e) {
                        if (i) return n.createElement(m.Z, { Icon: e, color: this._getThumbnailColor(), size: o ? "large" : "medium", style: [y.thumbnail, o && y.thumbnailLargeMargin] });
                        if (r) return n.createElement(d.ZP, { align: "center" }, n.createElement(e, { style: y.headlineIcon }));
                    }
                }
                _renderHeadline() {
                    const { headline: e, text: t } = this.props;
                    if (e) return n.createElement(d.ZP, { style: t && y.headlineMarginBottom, weight: "bold" }, e);
                }
                _renderSubtext() {
                    const { id: e, text: t, textStyle: r } = this.props;
                    return n.createElement(n.Fragment, null, n.createElement(d.ZP, { id: e, size: "subtext1", style: r }, t), this._renderActionLabel());
                }
                _renderActionLabel() {
                    const { action: e, onAction: t } = this.props;
                    if (e) return n.createElement(d.ZP, { children: e.label, color: "text", link: e.link, onPress: t, size: "subtext1", style: y.actionText, weight: "bold", withInteractiveStyling: !0, withUnderline: !0 });
                }
                _getThumbnailColor() {
                    const { type: e } = this.props;
                    return "exclusive" === e ? "exclusive" : "danger" === e ? "danger" : "warning" === e ? "warning" : "success" === e ? "success" : void 0;
                }
                _getSideArrowStyle() {
                    if (this._contentNode) {
                        const { bottom: e, left: t, right: r, top: n } = this._contentNode.getBoundingClientRect(),
                            i = [],
                            o = r - t,
                            a = (e - n) / 2;
                        return i.push({ bottom: a - 8, start: o - 8 }), i;
                    }
                }
            }
            w.defaultProps = { type: "primary", withCloseButton: !1, withThumbnail: !1 };
            const y = u.default.create((e) => ({ root: { borderRadius: e.borderRadii.medium, display: "flex", flexDirection: "row", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12, width: "100%" }, thumbnail: { alignSelf: "start", flexBasis: "auto", marginEnd: e.spaces.space12 }, thumbnailLargeMargin: { marginEnd: e.spaces.space16 }, headlineMarginBottom: { marginBottom: e.spaces.space4 }, actionText: { marginTop: e.spaces.space12, whiteSpace: "nowrap", flexShrink: 0, textUnderlineOffset: e.spaces.space2, paddingBottom: e.spaces.space4 }, arrow: { marginBottom: `-${e.spaces.space16}`, top: `calc(-${e.spaces.space4} - ${e.spaces.space1})` }, contentContainer: { flex: 1, flexDirection: "row" }, contentTextContainer: { flex: 1, justifyContent: "center", alignItems: "flex-start" }, headlineIcon: { marginEnd: e.spaces.space8 } })),
                _ = u.default.create((e) => ({ primary: { backgroundColor: e.colors.primary0 }, exclusive: { backgroundColor: e.colors.plum0 }, danger: { backgroundColor: e.colors.red0 }, success: { backgroundColor: e.colors.green0 }, warning: { backgroundColor: e.colors.orange0 } })),
                C = u.default.create((e) => ({ primary: { color: e.colors.primary0 }, exclusive: { color: e.colors.plum0 }, danger: { color: e.colors.red50 }, success: { backgroundColor: e.colors.green50 }, warning: { backgroundColor: e.colors.orange50 } })),
                b = w;
        },
        215337: (e, t, r) => {
            r.d(t, { Z: () => a });
            var n = r(202784),
                i = r(325686);
            class o extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this.getColors = () => {
                            const { colors: e, locations: t } = this.props;
                            return e
                                .map((e, r) => {
                                    const n = t[r];
                                    let i = "";
                                    return n && (i = ` ${100 * n}%`), e + i;
                                })
                                .join(",");
                        });
                }
                render() {
                    const { angle: e, angleUnit: t, children: r, style: o } = this.props;
                    return n.createElement(i.Z, { style: [o, { backgroundImage: `linear-gradient(${e}${t},${this.getColors()})` }] }, r);
                }
            }
            o.defaultProps = { angle: 180, angleUnit: "deg", locations: [] };
            const a = o;
        },
        22379: (e, t, r) => {
            r.d(t, { Z: () => m });
            var n = r(202784),
                i = r(325686),
                o = r(111677),
                a = r.n(o),
                s = r(731708),
                l = r(336373),
                d = r(366635);
            const c = a().f4393d0f,
                u = { element: "screen_name", action: "profile_click" },
                m = ({ size: e, sourceTweetId: t, style: r, userAffiliateBadgeInfo: o, userIsBlueVerified: m, userIsProtected: p, userIsVerified: h, userName: g, userScreenName: f, userVerifiedType: w }) => {
                    const y = l.Z.useAnalytics(),
                        _ = n.useCallback(() => {
                            y.scribe(u);
                        }, [y]),
                        C = n.useMemo(() => ({ pathname: `/i/status/${t || ""}` }), [t]),
                        b = t ? n.createElement(s.ZP, { link: C, onPress: _ }, n.createElement(d.Z, { affiliateBadgeInfo: o, isBlueVerified: m, isProtected: p, isVerified: h, name: g, screenName: f, verifiedType: w, withHoverCard: !0, withLink: !1, withScreenName: !1 })) : n.createElement(d.Z, { affiliateBadgeInfo: o, isBlueVerified: m, isProtected: p, isVerified: h, name: g, onLinkClick: _, screenName: f, verifiedType: w, withHoverCard: !0, withLink: !0, withScreenName: !1 });
                    return n.createElement(i.Z, { "aria-label": c({ name: g }), style: r }, n.createElement(s.ZP, { color: "gray700", size: e }, n.createElement(a().I18NFormatMessage, { $i18n: "dbf19261" }, b)));
                };
        },
        309854: (e, t, r) => {
            r.d(t, { Z: () => i });
            var n = r(483677);
            const i = {
                getBackgroundColor: (e) => {
                    const t = e.ext_media_color && e.ext_media_color.palette,
                        r = t && n.Z.get(t);
                    return r ? r.rgb : void 0;
                },
                getCropCandidates: (e) => e.original_info && e.original_info.focus_rects,
                getOriginalImage: (e) => (e.original_info ? { url: e.media_url_https, width: e.original_info.width, height: e.original_info.height } : void 0),
            };
        },
        175848: (e, t, r) => {
            r.d(t, { ZP: () => a });
            var n = r(446503),
                i = r(166852);
            const o = (e) => e.features?.all?.tags || [],
                a = {
                    mergeTaggedUsers: (e) => {
                        const t = (0, n.Z)(e, o).filter((e) => "user" === e.type);
                        return (0, i.Z)(t, (e) => e.user_id);
                    },
                };
        },
        65118: (e, t, r) => {
            r.d(t, { Z: () => m });
            var n = r(202784),
                i = r(325686),
                o = r(111677),
                a = r.n(o),
                s = r(25001),
                l = r(337637),
                d = r(731708),
                c = r(392237);
            const u = a().f8e8e32e;
            class m extends n.Component {
                render() {
                    const { linkPath: e, onClick: t, size: r, users: o, withIcon: a } = this.props,
                        l = this._decodeUserList(),
                        { isCurrentUserIncluded: c } = l,
                        u = c ? h.withCurrentUser : h.withoutCurrentUser,
                        m = this._selectMessage(u, l),
                        p = o.map((e) => e.user_id),
                        f = e && { pathname: e, state: { userIds: p } };
                    return o.length > 0 ? n.createElement(i.Z, { style: [g.root, this.props.style] }, n.createElement(d.ZP, { color: "gray700", link: f, onPress: t, size: r, withInteractiveStyling: !!f }, a ? n.createElement(s.default, { style: g.icon }) : null, m)) : null;
                }
                _selectMessage(e, t) {
                    const { users: r } = this.props;
                    switch (r.length) {
                        case 0:
                            return null;
                        case 1:
                            return e.single(t);
                        default:
                            return e.multiple(t);
                    }
                }
                _decodeUserList() {
                    const { loggedInUserId: e, users: t } = this.props,
                        r = e ? (0, l.Z)(t, (t) => t.user_id === e) : -1,
                        n = r >= 0,
                        i = n && t[r] ? t[r] : void 0;
                    return { isCurrentUserIncluded: n, firstName: t.length >= 1 ? (n && i ? i.name : t[0].name) : void 0, secondName: t.length >= 2 ? (n && 0 !== r ? t[0].name : t[1].name) : void 0, otherUsersCount: t.length > 0 ? t.length - 1 : 0 };
                }
            }
            const p = (e, t = "normal") => n.createElement(d.ZP, { color: "gray700", weight: t }, e),
                h = { withCurrentUser: { single: () => p(u, "bold"), multiple: ({ otherUsersCount: e, secondName: t }) => (e && t ? p(n.createElement(a().I18NFormatMessage, { $i18n: "d7b2c271" }, n.createElement(d.ZP, { weight: "bold" }, a().df6703d3), a().c20f7e9f({ otherUsersCount: e, secondName: n.createElement(d.ZP, null, t) }))) : null) }, withoutCurrentUser: { single: ({ firstName: e }) => (e ? p(e) : null), multiple: ({ firstName: e, otherUsersCount: t, secondName: r }) => (t ? p(n.createElement(a().I18NFormatMessage, { $i18n: "b035fe73" }, n.createElement(d.ZP, null, e), a().he26f627({ otherUsersCount: t, secondName: n.createElement(d.ZP, null, r) }))) : null) } },
                g = c.default.create((e) => ({ root: { flexDirection: "row" }, icon: { color: e.colors.gray700, marginEnd: e.spaces.space4 } }));
        },
        284702: (e, t, r) => {
            r.d(t, { Z: () => b });
            r(202784);
            var n = r(111677),
                i = r.n(n),
                o = r(161821),
                a = r(184605),
                s = r(309854),
                l = r(782578);
            const d = "animated_gif",
                c = "video",
                u = "vine",
                m = Object.freeze({ ANIMATED_GIF: d, VIDEO: c, VINE: u }),
                p = (0, o.Z)(m),
                h = i().fc45ccc6,
                g = (e) => (e.additional_media_info && e.additional_media_info.call_to_actions ? f(e.additional_media_info.call_to_actions) : void 0),
                f = (e) => (e.visit_site ? { type: "url", url: e.visit_site.url } : e.watch_now ? { type: "watch", url: e.watch_now.url } : void 0),
                w = (e) => y(e.mediaStats && e.mediaStats.viewCount),
                y = (e) => {
                    const t = e && parseInt(e, 10);
                    return t && (0, a.Z)(t) && t >= 0 ? t : void 0;
                },
                _ = (e) => !!e && (e.type === d || e.type === c || e.type === u),
                C = (e) => {
                    if (e.allow_download_status?.allow_download) return e.video_info.variants.reduce((e, t) => (t.bitrate && "video/mp4" === t.content_type && (!e || (e.bitrate && e.bitrate < t.bitrate)) ? t : e), void 0)?.url;
                },
                b = {
                    extractVideoProps: (e, t, r, n, i = !1) => {
                        const { duration_millis: o, variants: a } = t.video_info || {},
                            d = { "aria-label": "string" == typeof t.ext_alt_text ? t.ext_alt_text : h, additionalMediaInfo: t.additional_media_info, aspectRatio: l.Z.getAspectRatio(t.video_info, 1), backgroundColor: s.Z.getBackgroundColor(t), cta: g(t), durationMs: o, media_key: t.media_key, poster: s.Z.getOriginalImage(t), shouldShowAltLabel: !!t.ext_alt_text && i, source: { eventId: r, contentId: t.id_str, variants: a, videoId: e, downloadLink: C(t) }, videoType: t.type, viewCount: w(t), timecode: t.media_results?.result?.watch_info?.last_watched_seconds?.toString() };
                        return n && (d.forwardPivotInfo = n), d;
                    },
                    getSourceTweetId: (e) => {
                        if (_(e)) return e.source_status_id_str;
                    },
                    getVideoFromCoverMedia: (e) => (e && "photo" !== e.type ? e : void 0),
                    getViewCount: w,
                    isVideo: _,
                    VIDEO_TYPES: p,
                };
        },
        470397: (e, t, r) => {
            r.d(t, { Z: () => s });
            r(136728);
            var n = r(202784),
                i = r(325686),
                o = r(124964),
                a = r(392237);
            const s = ({ children: e, color: t = "gray700", size: r, style: a }) => {
                    const s = [];
                    return (
                        n.Children.forEach(e, (e) => {
                            const i = s.length;
                            e && (i > 0 && s.push(n.createElement(o.Z, { color: t, key: `middot-${i}`, size: r })), s.push(e));
                        }),
                        s.length ? n.createElement(i.Z, { style: [l.middotGroup, a] }, s) : null
                    );
                },
                l = a.default.create((e) => ({ middotGroup: { alignItems: "baseline", flexDirection: "row", flexShrink: 1 } }));
        },
        844685: (e, t, r) => {
            r.d(t, { T: () => m, Z: () => h });
            var n = r(202784),
                i = r(325686),
                o = r(568320),
                a = r(731708),
                s = r(58881),
                l = r(530732),
                d = r(392237),
                c = r(452693);
            const u = d.default.create((e) => ({ icon: { color: e.colors.primary, height: e.fontSizes.title4, paddingEnd: e.spaces.space12, width: e.fontSizes.title4 } })),
                m = Object.freeze({ TopicFilled: "TOPIC_FILLED" });
            const p = d.default.create((e) => ({ root: { justifyContent: "space-between", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, mainContent: { flexDirection: "row", fontSize: "inherit" }, subtext: { alignSelf: "flex-start" }, withSubtext: { alignSelf: "center" }, icon: { alignSelf: "flex-start", height: e.spaces.space20, justifyContent: "center" }, iconArrow: { color: e.colors.text }, rightControlGroup: { flexDirection: "row", justifyContent: "flex-end", flexGrow: 1, marginStart: e.spaces.space4, alignSelf: "center" } })),
                h = function ({ icon: e, id: t, landingUrl: r, rightControl: h, style: g, subtext: f, testID: w, text: y }) {
                    const _ = ((e) => (e === m.TopicFilled ? n.createElement(c.default, { style: u.icon }) : null))(e),
                        C = f ? null : p.withSubtext,
                        b = s.Z.generate({ backgroundColor: d.default.theme.colors.gray0, color: d.default.theme.colors.cellBackground, customFocusBackgroundColor: d.default.theme.colors.gray0, customHoverBackgroundColor: d.default.theme.colors.gray0, customPressedBackgroundColor: d.default.theme.colors.gray0 });
                    return n.createElement(l.Z, { id: t, interactiveStyles: r ? b : null, link: r, style: [p.root, g], testID: w }, n.createElement(i.Z, { "aria-level": 2, role: "heading", style: p.mainContent }, n.createElement(i.Z, { style: p.icon }, _), n.createElement(a.ZP, { numberOfLines: 3, size: "headline1", style: C, weight: "heavy", withHashflags: !0 }, y), n.createElement(i.Z, { style: p.rightControlGroup }, r ? n.createElement(i.Z, { style: C }, n.createElement(o.default, { style: p.iconArrow })) : null, h ? n.createElement(i.Z, null, h) : null)), f ? n.createElement(a.ZP, { color: "gray700", numberOfLines: 2, size: "subtext2", style: p.subtext, withHashflags: !0 }, f) : null);
                };
        },
        378729: (e, t, r) => {
            r.d(t, { Z: () => f });
            var n = r(202784),
                i = r(325686),
                o = r(111677),
                a = r.n(o),
                s = r(283379),
                l = r(731708),
                d = r(392237);
            const c = a().f1a1b791,
                u = a().if2bf8b4,
                m = a().f3624b5c,
                p = a().b4b3b113,
                h = a().be222050,
                g = a().hcbbe447;
            class f extends n.Component {
                render() {
                    const { color: e, id: t, style: r } = this.props;
                    return n.createElement(i.Z, { style: [w.root, r] }, n.createElement(s.default, { style: [w.icon, e && w[e]] }), n.createElement(l.ZP, { color: e, id: t, size: "subtext2" }, this._getPromotedLabel()));
                }
                _getPromotedLabel() {
                    const { contentAuthorId: e, label: t, promotedContent: r } = this.props,
                        { adMetadataContainer: n, advertiser: i, advertiser_name: o, disclosure_type: a } = r,
                        s = e && i && e === i.id_str,
                        l = "string" == typeof a && "political" === a.toLowerCase(),
                        d = "string" == typeof a && "issue" === a.toLowerCase(),
                        f = !(!n || "POLITICAL" !== n.disclaimerType) || l,
                        w = !(!n || "ISSUE" !== n.disclaimerType) || d,
                        { removePromotedAttributionForPreroll: y } = n || {};
                    let _;
                    return (_ = t || (!o || s || y ? (f ? m : w ? h : u) : f ? p({ fullName: o }) : w ? g({ fullName: o }) : c({ fullName: o }))), _;
                }
            }
            f.defaultProps = { color: "gray700" };
            const w = d.default.create((e) => ({ root: { alignItems: "center", flexDirection: "row" }, icon: { color: e.colors.gray700, height: "1em", marginEnd: e.spaces.space4, flexShrink: 0 }, gray700: { color: e.colors.gray700 }, white: { color: e.colors.white } }));
        },
        521288: (e, t, r) => {
            r.d(t, { Z: () => V });
            var n = r(807896),
                i = r(202784),
                o = r(325686),
                a = r(111677),
                s = r.n(a),
                l = r(908478),
                d = r(161821),
                c = r(731708),
                u = r(766661),
                m = r(12686),
                p = r(276563),
                h = r(235902),
                g = r(847224),
                f = r(950152),
                w = r(649846),
                y = r(952428),
                _ = r(470397),
                C = r(966886),
                b = r(126962),
                v = r(287826),
                x = r(392237),
                S = r(530338),
                E = r(16037),
                T = r(103737),
                I = r(278957),
                k = r(650028),
                Z = r(451051),
                P = r(100929),
                L = r(5273),
                R = r(528647),
                B = r(782261),
                A = r(586035),
                M = r(454363),
                N = r(395379);
            const D = s().bb5c5864,
                H = s().a8b58cf4,
                U = s().i5f742fe,
                z = "quote_tweet",
                W = 16 / 9,
                V = (e) => {
                    const { shouldRenderIfBlocked: t, tweet: r, withBirdwatchPivot: o } = e,
                        a = !!r && !B.Z.isQuotedTweetUnavailable({ is_quote_status: !0, quoted_status: r }, t),
                        s = h.ZP.useProps(),
                        l = r?.extended_entities?.media,
                        d = l && l.length > 1 && s.withMediaCarousel();
                    return r && a ? i.createElement(O, (0, n.Z)({}, e, { isCarouselItem: s.isCarouselItem(), renderArticleCardInTweet: s.renderArticleCardInTweet(), tweet: r, withBirdwatchPivot: o, withEditAnatomy: r.isEdited && s.isEditTweetConsumptionEnabled(), withMediaCarousel: d })) : i.createElement(P.Z, null);
                };
            class O extends i.Component {
                constructor(...e) {
                    super(...e),
                        (this._renderForwardPivot = () => {
                            const { forwardPivotInfo: e, tweet: t } = this.props;
                            if (e && e.displayType === f.x.SoftIntervention) {
                                const { displayType: r, landingUrl: n, softInterventionDisplayType: o, text: a } = e;
                                return i.createElement(g.Z, { displayType: r, inQuoteTweet: !0, isTweetNonCompliant: "non_compliant" === t.limited_actions, landingUrl: n, softInterventionDisplayType: o, text: a, tweetId: t.id_str });
                            }
                        }),
                        (this._renderBirdwatchPivot = () => {
                            const { tweet: e, withBirdwatchPivot: t } = this.props;
                            if (e.birdwatch_pivot && t) return i.createElement(u.Z, (0, n.Z)({}, e.birdwatch_pivot, { isForQuoteTweet: !0, tweetId: e.id_str }));
                        }),
                        (this._renderStaleEditCallout = () => {
                            const { isCondensed: e } = this.props,
                                t = this.shouldRenderRichContent && !e;
                            return i.createElement(o.Z, { style: [F.textContentSpacing, t && F.marginTopSmall] }, i.createElement(E.Z, { editType: "stale", textMode: "inline", textSize: "subtext2" }));
                        }),
                        (this._renderLatestEditIcon = () => i.createElement(E.Z, { editType: "latest" })),
                        (this._mediaCarouselStyle = [F.marginHorizontalSmall, F.marginTopXXSmall, F.marginBottomSmall]),
                        (this._renderPreviewCta = () => {
                            const { tweet: e } = this.props;
                            return e.isPreviewDisplay && e.cta && i.createElement(o.Z, { style: [F.quotePreview, F.marginBottomSmall] }, i.createElement(I.Z, (0, n.Z)({}, e.cta, { renderInQuoteTweet: !0 })));
                        }),
                        (this._handlePress = (e) => {
                            const { onPress: t } = this.props;
                            t && t(e);
                        });
                }
                shouldComponentUpdate(e) {
                    return !(0, l.Z)(e, this.props);
                }
                render() {
                    const { tweet: e } = this.props;
                    return this._isWithheldTweet(e) ? this._renderWithheldTweet() : this._renderTweet();
                }
                _getTweetLink() {
                    const { tweet: e, withEditAnatomy: t } = this.props;
                    let r = e.permalink;
                    return e.isStaleEdit && t && (r = B.Z.getTweetLatestVersionPermalink(e)), { pathname: `https://twitter.com${r}`, anchorless: !0 };
                }
                _renderTweet() {
                    const { id: e, shouldShowBorder: t, style: r, withLink: n } = this.props,
                        a = [F.quoteTweetContainer, t && F.quoteTweetContainerBorder, !n && F.quoteTweetWithoutLink, r];
                    return i.createElement(o.Z, { id: e }, i.createElement(c.ZP, { style: x.default.visuallyHidden }, D), i.createElement(y.Z, { link: n ? this._getTweetLink() : void 0, onPress: this._handlePress, style: a, withInteractiveStyling: !!n, withOutsetFocusRing: !0 }, this._renderTweetContent(), this._renderForwardPivot(), this._renderBirdwatchPivot()));
                }
                _renderTweetContent() {
                    const { isCondensed: e, tweet: t, withEditAnatomy: r } = this.props;
                    return i.createElement(o.Z, null, this._renderHeader(), e ? this._renderTweetContentCondensed() : this._renderTweetContentExpanded(), t.isStaleEdit && r ? this._renderStaleEditCallout() : null);
                }
                _renderTweetContentCondensed() {
                    return i.createElement(o.Z, { style: F.condensedContentBody }, this._renderArticleContent(), this.shouldRenderRichContent ? i.createElement(o.Z, { style: [F.marginTopXSmall, F.condensedMediaSide, this.props.isCarouselItem ? F.carouselStyleMediaSide : void 0], testID: "testCondensedMedia" }, this._renderTweetRichContent(!0)) : null, i.createElement(o.Z, { style: F.condensedContentSide }, this._renderTextContent(!0)), this._renderPreviewCta());
                }
                _renderTweetContentExpanded() {
                    const { withMediaCarousel: e } = this.props;
                    return i.createElement(i.Fragment, null, this._renderTextContent(!1), this._renderArticleContent(), this._renderPreviewCta(), this.shouldRenderRichContent ? i.createElement(o.Z, { style: e ? this._mediaCarouselStyle : F.marginTopXXSmall }, this._renderTweetRichContent(!1)) : null);
                }
                _renderHeader() {
                    const { socialContextProps: e, tweet: t } = this.props,
                        r = t.user || {};
                    return i.createElement(o.Z, { style: F.headerContainer }, e ? this._renderSocialContext() : null, i.createElement(o.Z, { style: [r.highlightedLabel ? F.attributionWrapperFlexStart : F.attributionWrapperCenter, F.attributionWrapper] }, this._renderUserName(r)));
                }
                _renderSocialContext() {
                    const { socialContextProps: e } = this.props;
                    if (e) {
                        const { iconStyle: t, style: r, ...o } = e;
                        return i.createElement(b.Z, (0, n.Z)({ iconStyle: [F.socialContextIconSpacing, t], style: [F.socialContextSpacing, r], withLeftPadding: !1 }, o));
                    }
                }
                _renderTextContent(e) {
                    const { isCarouselItem: t, tweet: r, withEditAnatomy: n } = this.props,
                        a = !this.shouldRenderRichContent && r.isStaleEdit && n;
                    return i.createElement(o.Z, { style: [F.textContentSpacing, a && F.marginBottomXXSmall] }, r.self_thread ? null : this._renderReplyContext(), this._renderTweetText(e), t ? null : this._renderShowLinks());
                }
                _renderShowLinks() {
                    const { tweet: e } = this.props;
                    return this.shouldRenderShowPollText ? this._renderShowText(U) : e.self_thread ? this._renderShowText(H) : null;
                }
                _renderTweetText(e) {
                    const { renderArticleCardInTweet: t, renderGrokTranslationHeader: r, tweet: n, withEditAnatomy: o, withMediaAsTextLinks: a } = this.props,
                        s = n.isStaleEdit && o,
                        l = n.grok_translated_post,
                        d = n.note_tweet && n.note_tweet.is_expandable,
                        c = (l ? null != l?.preview_translation : d) ? n.permalink : void 0,
                        u = l?.preview_translation ?? l?.translation ?? "",
                        m = r?.();
                    return i.createElement(i.Fragment, null, m, i.createElement(Z.Z, { article: t ? n.article : void 0, color: s ? "gray700" : "text", displayTextRange: l ? [0, u.length] : n.display_text_range, entities: l ? (l?.entities ?? {}) : n.entities, isCondensed: e, isPreviewDisplay: n.isPreviewDisplay, lang: n.lang, numberOfLines: this._renderReplyContext() ? 4 : 5, quotedTweetPermalink: n.quoted_status_permalink, style: e ? F.marginTopXSmall : F.marginTopXXSmall, text: l ? u : n.text, withCardLinks: !0, withMediaLinks: a || n.possibly_sensitive || this._hasSensitiveMediaWarnings(), withQuoteLinks: !0, withShowMore: c }));
                }
                _renderUserName(e) {
                    const { tweet: t, withHeaderLinks: r, withUserHoverCard: n } = this.props,
                        a = t.author_community_relationship?.role;
                    return i.createElement(o.Z, { style: F.userNameRoot }, i.createElement(o.Z, { style: F.userNameWrapper }, i.createElement(L.Z, { onClick: this.props.onAvatarClick, onHoverCardScreenNameClick: this.props.onScreenNameClick, screenName: e.screen_name, size: "medium", style: F.userAvatar, uri: e.profile_image_url_https, withHoverCard: n, withLink: r }), i.createElement(R.Z, { onLinkClick: this.props.onScreenNameClick, onScreenNameClick: this.props.onScreenNameClick, screenNameSuffix: (() => i.createElement(_.Z, null, this._renderTimestamp(t.created_at)))(), tweetId: t.id_str, userData: { affiliateBadgeInfo: e.highlightedLabel, communityModeratorStatus: a, isBlueVerified: e.is_blue_verified, isProtected: e.protected, isVerified: e.verified, name: e.name, screenName: e.screen_name, userId: e.id_str, verifiedType: e.verified_type }, withHoverCard: n, withLink: r })), e.highlightedLabel ? i.createElement(w.Z, { label: e.highlightedLabel }) : null);
                }
                _renderArticleContent() {
                    const { renderArticleCardInTweet: e, tweet: t } = this.props;
                    if (e && t.article) return i.createElement(o.Z, { style: [F.quoteArticle, F.marginBottomSmall] }, i.createElement(S.Z, { articleEntity: t.article, hasSensitiveContent: t.possibly_sensitive, mediaVisibilityResults: t.mediaVisibilityResults, renderInQuoteTweet: !0 }));
                }
                _renderTweetRichContent(e) {
                    const { forwardPivotInfo: t, loggedInUserId: r, mediaContentStyles: n, mediaMaxHeight: a, nudges: s, onMediaClick: l, preventVideoPlayback: d, promotedContent: c, shouldShowAltLabelAlways: u, singleImageMaxAspectRatio: h, singleImageMinAspectRatio: g, tweet: f, withActionsDisabled: w, withCenterCrop: y, withLink: _ } = this.props;
                    if (A.B(f)) return i.createElement(o.Z, { style: F.marginTopXXSmall }, i.createElement(M.Z, { tweet: f, withStraightBorders: !0 }));
                    if (f.card && p.default.isSpaceCard(f.card.name)) return i.createElement(o.Z, { style: F.marginTopXXSmall }, i.createElement(v.Z, { audioSpaceId: f.card.binding_values.id?.string_value, clipMetadata: f.card.binding_values.clip_metadata?.string_value, withStraightBorders: !0 }));
                    if (f.card && p.default.isBroadcastCard(f.card.name)) return i.createElement(m.Z, { card: f.card, cardContext: { locationKey: z, tweetId: f.id_str, tweetPermalink: f.permalink, tweetUserId: f.user.id_str, viewerUserId: r, withActionsDisabled: w }, preventVideoPlayback: d, promotedContent: c, withBorder: !1, withDetail: !1, withRoundBorder: !1 });
                    const C = e ? 1 : W,
                        b = e ? 1 : void 0,
                        x = e ? "quote_tweet_small" : z,
                        S = Boolean(f.extended_entities?.media && f.extended_entities?.media.length > 1),
                        E = { displayOptions: { badgeConfiguration: e ? { hideDuration: !1, hideDataSize: !0, hideViewCount: !0 } : void 0, hideLeftBadges: e && S }, hidePreviewPlayButton: e },
                        I = !!a && !e;
                    return i.createElement(T.Z, { authorId: f.user.id_str, authorScreenName: f.user.screen_name, cacheLocationKey: x, containerAspectRatio: C, displayMediaTags: !1, forwardPivotInfo: t, hasSensitiveMedia: f.possibly_sensitive, hideAcceptOverlay: e, isCondensed: e, loggedInUserId: r, mediaContentStyles: n, mediaDetails: f.extended_entities?.media, mediaMaxHeight: a, mediaTagsLink: `${f.permalink}/media_tags`, mediaVisibilityResults: f.mediaVisibilityResults, nudges: s, onClick: l, preventPlayback: e || d, shouldShowAltLabelAlways: u, showBorder: e, showRoundCorners: e, singleImageMaxAspectRatio: e ? b : h, singleImageMinAspectRatio: e ? b : g, style: I ? F.centerItems : void 0, tweetCreatedAt: f.created_at, tweetId: f.id_str, tweetText: f.text, videoAspectRatio: C, videoOptions: E, withCenterCrop: y, withLink: _, withPostPlayback: !0 });
                }
                _renderTimestamp(e) {
                    const { tweet: t, withHeaderLinks: r } = this.props,
                        n = r ? { pathname: `https://twitter.com${t.permalink}` } : void 0;
                    return i.createElement(C.Z, { link: n, timestamp: e });
                }
                _renderReplyContext() {
                    const { isCarouselItem: e, tweet: t } = this.props;
                    return t.in_reply_to_status_id_str ? i.createElement(k.ZP, { displayTextRange: t.display_text_range, inReplyToName: t.in_reply_to_name, inReplyToScreenName: t.in_reply_to_screen_name, inReplyToUserIdStr: t.in_reply_to_user_id_str, linkType: k.ZP.ReplyContextLinkTypes.none, style: [F.marginTopXXSmall, e ? F.textOverflowEllipsis : void 0], tweetPermalink: t.permalink, userMentionsEntities: t.entities?.user_mentions }) : null;
                }
                _renderShowText(e) {
                    const { withLink: t } = this.props;
                    return i.createElement(c.ZP, { color: "link", style: [F.marginTopXXSmall, !t && F.disabledLink] }, e);
                }
                _renderWithheldTweet() {
                    const { style: e, tweet: t } = this.props;
                    return i.createElement(o.Z, { style: e }, i.createElement(N.Z, { displayTextRange: t.display_text_range, entities: t.withheld_entities || t.entities, inline: !0, lang: t.lang, text: t.withheld_text || t.text }));
                }
                get shouldRenderRichContent() {
                    const { hideMedia: e, tweet: t } = this.props;
                    return !e && this._hasRichContent(t) && !t.possibly_sensitive && !this._hasSensitiveMediaWarnings();
                }
                get shouldRenderShowPollText() {
                    const { tweet: e } = this.props;
                    return e.card && p.default.isPollCard(e.card.name);
                }
                _hasRichContent(e) {
                    const { extended_entities: t } = e,
                        { withMediaAsTextLinks: r } = this.props;
                    return this._canRenderAudioSpaceCard(e) || this._canRenderBroadcastCard(e) || !!e.article || !(!(t && t.media && t.media.length) || r);
                }
                _hasSensitiveMediaWarnings() {
                    const { tweet: e } = this.props;
                    return !!e.extended_entities?.media?.flatMap((e) => (e.sensitive_media_warning ? (0, d.Z)(e.sensitive_media_warning) : [])).some(Boolean);
                }
                _canRenderAudioSpaceCard(e) {
                    return Boolean(e.card && p.default.isSpaceCard(e.card.name) && !this.props.isCondensed);
                }
                _canRenderBroadcastCard(e) {
                    return Boolean(e.card && p.default.isBroadcastCard(e.card.name) && !this.props.isCondensed);
                }
                _isWithheldTweet(e) {
                    return !!e.withheld_scope;
                }
            }
            O.defaultProps = { hideMedia: !1, onPress: void 0, onMediaClick: void 0, onAvatarClick: void 0, onScreenNameClick: void 0, shouldShowBorder: !0, withCenterCrop: !1, withEditAnatomy: !1, withMediaAsTextLinks: !1, withHeaderLinks: !1, withLink: !0, withUserHoverCard: !0, isCarouselItem: !1, withBirdwatchPivot: !1, renderArticleCardInTweet: !1 };
            const F = x.default.create((e) => ({
                attributionWrapper: { flexShrink: 1, flexDirection: "row" },
                attributionWrapperCenter: { alignItems: "center" },
                attributionWrapperFlexStart: { alignItems: "flex-start" },
                carouselStyleMediaSide: { flex: 4, maxHeight: `calc(2 * ${e.spaces.space64})`, maxWidth: `calc(2* ${e.spaces.space64})` },
                centerItems: { alignItems: "center" },
                condensedMediaSide: { flex: 2, alignSelf: "flex-start", marginVertical: e.spaces.space12, marginStart: e.spaces.space12, overflow: "hidden", borderRadius: e.borderRadii.xLarge, borderStyle: "solid", borderColor: "transparent" },
                condensedContentSide: { flex: 8, flexBasis: "0%" },
                condensedContentBody: { flexDirection: "row" },
                disabledLink: { opacity: 0.5 },
                headerContainer: { flexDirection: "column", marginHorizontal: e.spaces.space12, marginTop: e.spaces.space12 },
                marginBottomXXSmall: { marginBottom: e.spaces.space4 },
                marginTopXXSmall: { marginTop: e.spaces.space4 },
                marginTopXSmall: { marginTop: e.spaces.space8 },
                marginBottomSmall: { marginBottom: e.spaces.space12 },
                marginHorizontalSmall: { marginHorizontal: e.spaces.space12 },
                marginTopSmall: { marginTop: e.spaces.space12 },
                quoteTweetContainer: { overflow: "hidden", minHeight: e.spaces.space64 },
                quoteTweetContainerBorder: { borderColor: e.colors.nestedBorderColor, borderWidth: e.borderWidths.small, borderRadius: e.borderRadii.xLarge },
                quoteTweetWithoutLink: { cursor: "default" },
                socialContextIconSpacing: { marginEnd: e.spaces.space4 },
                socialContextSpacing: { marginBottom: e.spaces.space2, marginStart: e.spaces.space8 },
                textOverflowEllipsis: { textOverflow: "ellipsis", whiteSpace: "nowrap", overflow: "hidden" },
                userNameRoot: { flexShrink: 1, overflow: "hidden" },
                userNameWrapper: { alignItems: "center", flexDirection: "row", maxWidth: "100%" },
                textContentSpacing: { marginHorizontal: e.spaces.space12, marginBottom: e.spaces.space12 },
                timestampWrapper: { flexShrink: 0, whiteSpace: "pre" },
                userAvatar: { marginEnd: e.spaces.space4 },
                quoteArticle: { maxWidth: "100%", paddingHorizontal: e.spaces.space12 },
                quotePreview: { paddingHorizontal: e.spaces.space12, marginTop: e.spaces.space8 },
            }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-676e3eb1.59c0df7a.js.map
