"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff"],
    {
        705079: (e, t, s) => {
            s.d(t, { s: () => n });
            var o = s(99107);
            const n = (e) => e === o.p_;
        },
        999769: (e, t, s) => {
            s.d(t, { ZP: () => u });
            var o = s(807896),
                n = s(202784),
                i = s(154003),
                r = s(688715),
                a = s(392237),
                l = s(638236),
                c = s(111677),
                d = s.n(c),
                h = s(982790),
                p = s(907552);
            function u(e) {
                const { audioSpaceId: t, type: s } = e,
                    { space: o, utils: i } = (0, h.$)(t),
                    r = i.hashtags().join(" ");
                let a = m;
                "icon" === s ? (a = f) : "icon-borderless" === s && (a = g);
                const l = i.is.replayable ? void 0 : b.dmText,
                    c = Boolean(o?.is_employee_only);
                return n.createElement(p.ZP.Custom, { ButtonComponent: a, isFixed: e.isFixed, pullRight: e.pullRight, scribeNamespace: _, url: y(t) }, c ? null : n.createElement(p.ZP.Action, { scribeNamespace: w.tweet, shareText: r, type: "tweet" }), n.createElement(p.ZP.Action, { scribeNamespace: w.dm, shareText: l, type: "dm" }), n.createElement(p.ZP.Action, { scribeNamespace: w.copy, shareText: r, type: "copy" }), n.createElement(p.ZP.Action, { scribeNamespace: w.via, shareText: r, type: "via" }));
            }
            function m(e) {
                return n.createElement(i.ZP, (0, o.Z)({}, e, { borderColor: "transparent", style: C.shareButton, type: "primaryOutlined" }), b.share);
            }
            function f(e) {
                return n.createElement(i.ZP, (0, o.Z)({}, v, { type: "primaryOutlined" }, e));
            }
            function g(e) {
                return n.createElement(i.ZP, (0, o.Z)({}, v, e));
            }
            const y = (e) => (0, r.ju)(`https://x.com/i/spaces/${e}`),
                _ = { page: "audiospace", component: "share_sheet" },
                w = { tweet: { element: "send_tweet", action: "click" }, dm: { element: "send_dm", action: "click" }, copy: { element: "link", action: "click" }, via: { element: void 0, action: "impression" } },
                C = a.default.create((e) => ({ shareButton: { width: "100%" } })),
                b = { share: d().ifea3114, dmText: d().c63dd2cc },
                v = { "aria-label": b.share, borderColor: "transparent", color: "text", hoverLabel: { label: b.share }, icon: n.createElement(l.Z, null), size: "medium" };
        },
        539432: (e, t, s) => {
            s.d(t, { ZP: () => R, xh: () => I, xg: () => D, ui: () => E });
            var o = s(202784),
                n = s(325686),
                i = s(421158),
                r = s(803224),
                a = s(392237),
                l = s(111677),
                c = s.n(l),
                d = s(177371),
                h = s(295417),
                p = s(321449),
                u = s(443781),
                m = s(807896),
                f = s(154003);
            const g = c().a0e81a2e,
                y = c().f1d9930c,
                _ = a.default.create((e) => ({ containerBackground: { ...a.default.absoluteFillObject, flexDirection: "column", flexGrow: 1, justifyContent: "center", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12, backgroundColor: "rgba(0, 0, 0, 0.5)" }, content: { alignSelf: "center", paddingHorizontal: e.spaces.space12 }, hideButton: { end: e.spaces.space16, position: "absolute", top: e.spaces.space12 }, roundedCorners: { borderRadius: e.borderRadii.xLarge }, showButton: { alignSelf: "flex-end", paddingHorizontal: e.spaces.space12, marginTop: e.spaces.space12 } })),
                w = ({ children: e, onPress: t, showContent: s, withRoundedCorners: i }) => {
                    const r = { borderColor: "transparent", onPress: t, size: "small" };
                    return s ? o.createElement(f.ZP, (0, m.Z)({}, r, { style: _.hideButton, type: "onMediaDominantColorFilled" }), y) : o.createElement(n.Z, { style: [_.containerBackground, i && _.roundedCorners] }, o.createElement(n.Z, { style: _.content }, e, o.createElement(f.ZP, (0, m.Z)({}, r, { style: _.showButton, type: "onMediaLightFilled" }), g)));
                };
            var C = s(668214),
                b = s(38562);
            const v = (0, C.Z)()
                    .propsFromState(() => ({ displaySensitiveMedia: b.f1 }))
                    .withAnalytics(),
                x = c().f277e94a,
                I = { text: o.createElement(h.Z, null), isGlobalSensitiveMedia: !0, withBlurredMedia: !1 },
                E = { MessageComponent: p.Z, isGlobalSensitiveMedia: !1, withBlurredMedia: !0 },
                D = { MessageComponent: p.Z, isGlobalSensitiveMedia: !0, withBlurredMedia: !0 };
            class Z extends o.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._renderStaticTombstone = () => {
                            const { children: e, displaySensitiveMedia: t, revealableTombstoneConfig: s } = this.props;
                            return (s.isGlobalSensitiveMedia && t) || this.state.showContent ? e || null : o.createElement(n.Z, null, o.createElement(d.Z, { actionText: x, inline: !0, onClick: this._createToggleContentPressHandler("show"), role: "presentation" }, this.getTombstoneText(), null));
                        }),
                        (this._renderBlurredMediaTombstone = () => {
                            const { children: e, displaySensitiveMedia: t, withRoundedCorners: s } = this.props,
                                { showContent: a } = this.state,
                                l = a || t,
                                c = l ? "hide" : "show",
                                d = this.context.featureSwitches.isTrue("media_edge_to_edge_content_enabled");
                            return o.createElement(n.Z, { style: [!l && T.blurredMediaTombstoneContainer, s && T.roundedBorders, d && T.negativeMargins, T.flexGrow] }, o.createElement(i.Z.Provider, { value: { playbackPriority: a ? r.W.NORMAL : r.W.INELIGIBLE } }, o.createElement(n.Z, { style: [!l && T.blur, T.flexGrow, d && T.positiveMargins] }, e), !t && o.createElement(w, { onPress: this._createToggleContentPressHandler(c), showContent: a, withRoundedCorners: !!s }, this.getTombstoneText())));
                        }),
                        (this.getTombstoneText = () => {
                            const { mediaVisibilityResults: e, revealableTombstoneConfig: t, sensitiveMediaWarnings: s } = this.props;
                            if (t.withBlurredMedia && t.MessageComponent) {
                                const { MessageComponent: n } = t;
                                return o.createElement(n, { mediaVisibilityResults: e, sensitiveMediaWarnings: s });
                            }
                            return t.text || null;
                        }),
                        (this._createToggleContentPressHandler = (e) => () => {
                            const { analytics: t, revealableTombstoneConfig: s } = this.props;
                            s.withBlurredMedia && t.scribe({ component: "interstitial", action: e }), this.setState((e) => ({ showContent: !e.showContent }));
                        }),
                        (this.state = { showContent: !1 });
                }
                render() {
                    const { revealableTombstoneConfig: e } = this.props;
                    return e.withBlurredMedia ? this._renderBlurredMediaTombstone() : this._renderStaticTombstone();
                }
            }
            (Z.contextType = u.rC), (Z.defaultProps = { withRoundedCorners: !0 });
            const T = a.default.create((e) => ({ blur: { filter: "blur(30px)" }, flexGrow: { flexGrow: 1 }, blurredMediaTombstoneContainer: { overflow: "hidden", minHeight: "16em" }, roundedBorders: { borderRadius: e.borderRadii.xLarge }, hideButton: { position: "absolute", end: e.spaces.space16, bottom: e.spaces.space12 }, positiveMargins: { marginHorizontal: e.spacesPx.space16 }, negativeMargins: { marginHorizontal: -e.spacesPx.space16 } })),
                R = v(Z);
        },
        92342: (e, t, s) => {
            s.d(t, { Z: () => l });
            var o = s(202784),
                n = s(111677),
                i = s.n(n),
                r = s(177371);
            const a = i().b52a940c,
                l = () => o.createElement(r.Z, { inline: !0 }, a);
        },
        177371: (e, t, s) => {
            s.d(t, { Z: () => u });
            var o = s(807896),
                n = s(202784),
                i = s(325686),
                r = s(54989),
                a = s(155727),
                l = s(373926),
                c = s(392237),
                d = s(725516);
            class h extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handleActionClick = (e) => {
                            const { analytics: t, onClick: s } = this.props;
                            t.scribeAction("click"), s && s(e);
                        }),
                        (this._renderCarouselTombstone = (e) => {
                            const { children: t } = this.props;
                            return n.createElement(i.Z, { style: p.carouselTombstone }, n.createElement(r.Z, (0, o.Z)({}, e, { actionButtonWrapperStyle: p.carouselButton, style: p.carouselContent }), t ?? null));
                        }),
                        (this._renderTweetTombstone = (e) => {
                            const { additionalActions: t, children: s, conversationPosition: i, conversationTreeMetadata: r, inline: c, role: d } = this.props,
                                { isEnd: h, isStart: p } = i || {},
                                u = r && r.indents,
                                m = r && r.ancestorConnector,
                                f = r && r.descendantConnector,
                                g = u ? "side" === m : void 0,
                                y = u ? "top" === m : !p,
                                _ = u ? f : !h;
                            this._getTombstoneType(s);
                            return n.createElement(
                                n.Fragment,
                                null,
                                n.createElement(a.Z.Consumer, null, ({ avatarSize: i }) => n.createElement(l.Z, (0, o.Z)({}, e, { additionalActions: t, avatarSize: "xxLarge" === i ? "xLarge" : i, indents: u, role: d, withBottomLine: _, withElbow: g, withFooterGap: !c, withHeader: !c, withHorizontalPadding: !c, withTopLine: y }), s)),
                                !1,
                            );
                        }),
                        (this._getTombstoneType = (e) => {
                            let t;
                            return (
                                n.Children.forEach(e, (e) => {
                                    if (!n.isValidElement(e)) return;
                                    const s = e.props.text || e.props.part?.text || "";
                                    ["deleted", "withheld"].forEach((e) => {
                                        s.includes(e) && (t = e);
                                    });
                                }),
                                t
                            );
                        });
                }
                render() {
                    const { actionLink: e, actionText: t, carousel: s, ctaLink: o, ctaText: n, lang: i, onClick: r } = this.props,
                        a = { actionLink: e, actionText: t, ctaLink: o, ctaText: n, lang: i, onActionClick: r || this._handleActionClick };
                    return s ? this._renderCarouselTombstone(a) : this._renderTweetTombstone(a);
                }
            }
            h.defaultProps = { additionalActions: [], carousel: !1, conversationPosition: { isStart: !0, isEnd: !0 }, inline: !1 };
            const p = c.default.create((e) => ({ carouselTombstone: { padding: e.spaces.space12 }, carouselContent: { borderRadius: e.borderRadii.small, flexDirection: "column" }, carouselButton: { marginVertical: 0 } })),
                u = (0, d.Z)(h, { component: "tombstone" });
        },
        928875: (e, t, s) => {
            s.d(t, { T: () => l, t: () => a });
            s(543673), s(240753), s(128399);
            var o = s(688715),
                n = s(111677),
                i = s.n(n),
                r = s(415506);
            function a(e) {
                const t = new URL(d);
                t.searchParams.set("content_id", e.tweet.id_str), t.searchParams.set("content_type", "Tweet"), e.tweet.user?.screen_name && t.searchParams.set("content_author", `@${e.tweet.user?.screen_name}`);
                const s = String(t);
                return { Icon: r.default, link: s, text: c.reportNetzDG };
            }
            function l(e) {
                const t = new URL(d),
                    s = (0, o.ju)(`https://x.com/i/spaces/${e.audioSpaceId}`);
                t.searchParams.set("content_id", s), t.searchParams.set("content_type", "Tweet");
                const n = String(t);
                return { Icon: r.default, link: n, text: c.reportNetzDG };
            }
            const c = { reportNetzDG: i().d1e21610 },
                d = (0, o.ju)("https://help.x.com/forms/netzwerkdurchsetzungsgesetz");
        },
        208763: (e, t, s) => {
            s.d(t, { Z: () => S });
            var o = s(807896),
                n = s(202784),
                i = s(978253),
                r = (s(136728), s(325686)),
                a = s(67369),
                l = s(719417),
                c = s(666418),
                d = s(392237),
                h = s(954300),
                p = s(443781),
                u = s(24949),
                m = s(782261),
                f = s(668214),
                g = s(836255),
                y = s(919022);
            const _ = (0, u.P1)(
                    (e, t) => {
                        const s = "tweet" === t.videoConfig.source?.videoId?.type,
                            o = g.Z.createHydratedSelector(e);
                        return s && t.videoConfig.tweetId && o(t.videoConfig.tweetId);
                    },
                    y.ZP.selectViewerUser,
                    (e, t) => {
                        const s = e && m.Z.getOriginalTweet(e),
                            o = s && s?.user?.id_str,
                            n = t?.id_str;
                        return Boolean(n) && o === n;
                    },
                ),
                w = (0, f.Z)().propsFromState(() => ({ includeDisputeLinkInCopyrightErrorMessage: _ })),
                C = ({ includeDisputeLinkInCopyrightErrorMessage: e, onClick: t, shouldUseCompactUI: s, testID: i, videoConfig: d }) => {
                    const { aspectRatio: u, autoplayGroupOptions: m, expandedUrl: f, liveBroadcastRewindEnabled: g, type: y, ..._ } = d,
                        [w, C] = n.useState(u),
                        v = n.useRef(!1),
                        { history: x } = n.useContext(p.rC),
                        I = n.useCallback((e) => {
                            const {
                                nativeEvent: {
                                    layout: { height: t, width: s },
                                },
                            } = e;
                            if (s && t) {
                                if (v.current) return void (v.current = !1);
                                (v.current = !0), C(s / t);
                            }
                        }, []),
                        E = (0, a.GS)(),
                        D = n.useCallback(
                            ({ playerApi: e }) => {
                                e?.pause(), f && x.push("string" == typeof f ? f : { pathname: f.pathname, state: f.state });
                            },
                            [f, x, E],
                        ),
                        Z = n.useCallback(
                            (e) => {
                                t?.(e);
                            },
                            [f, x, E, t],
                        ),
                        T = _["aria-label"],
                        R = n.useCallback(({ containerRef: t, playerApi: s, playerState: o }) => n.createElement(l.Z, { "aria-label": T, containerRef: t, includeDisputeLinkInCopyrightErrorMessage: e, liveBroadcastRewindEnabled: g, onClick: D, playerApi: s, playerDisplayOptions: _.displayOptions, playerState: o, poster: _.poster?.url, shouldShowAltLabel: _.shouldShowAltLabel, showWatchAgain: (0, h.I4)({ source: _.source, withPostPlayback: _.withPostPlayback }), useKeyboardShortcuts: !0 }), [T, D, _.source, e, _.displayOptions, _.poster?.url, _.shouldShowAltLabel, _.withPostPlayback, g]);
                    return n.createElement(r.Z, { onClick: Z, onLayout: I, style: b.video, testID: i }, n.createElement(c.Z, (0, o.Z)({}, _, { aspectRatio: w, autoplayGroupOptions: m, uiStack: s ? R : void 0 })));
                },
                b = d.default.create((e) => ({ video: { height: "100%" } })),
                v = w(n.memo(C));
            var x = s(110377),
                I = s(111677),
                E = s.n(I),
                D = s(632658);
            const Z = E().f93bb3ee,
                T = ({ hideAcceptOverlay: e, renderPhoto: t, ...s }) => {
                    const o = n.useCallback(
                        ({ resourceSelectionHandler: e, useMinimumData: o }) => {
                            const i = { ...s, onVariantSelection: e, previewMode: o };
                            return t ? t(i) : n.createElement(x.j, i);
                        },
                        [s, t],
                    );
                    return n.createElement(D.Z, { acceptLabel: Z, hasIntrinsicSize: !1, hideAcceptOverlay: e, renderContent: o, resourceId: s.image.url });
                },
                R = "tweetPhoto",
                S = ({ hideAcceptOverlay: e, ...t }) => {
                    const s = t.media.length > 1,
                        r = n.useCallback(
                            (e) => {
                                const t = { ...e.videoConfig };
                                return n.createElement(v, (0, o.Z)({}, e, { shouldUseCompactUI: s, videoConfig: t }));
                            },
                            [s],
                        ),
                        a = t.renderVideo ?? r,
                        l = n.useCallback((s) => n.createElement(T, (0, o.Z)({}, s, { hideAcceptOverlay: e, renderPhoto: t.renderPhoto })), [t.renderPhoto, e]);
                    return n.createElement(i.Z, (0, o.Z)({}, t, { renderPhoto: l, renderVideo: a, testID: R, withLink: t.withLink && !0 }));
                };
        },
        131364: (e, t, s) => {
            s.d(t, { Z: () => A });
            var o = s(807896),
                n = s(202784),
                i = s(817480),
                r = s(666536),
                a = s(524110),
                l = s(735e3),
                c = s(942893),
                d = s(339110),
                h = s(575211),
                p = s(962741),
                u = s(312771),
                m = s(443781),
                f = (s(136728), s(24949)),
                g = s(459679),
                y = s(450681),
                _ = s(71620),
                w = s(456910),
                C = s(668214),
                b = s(828186),
                v = s(104140),
                x = s(624479),
                I = s(919022);
            const E = [d.my.Users],
                D = (e) => {
                    const { communityId: t, filter: s, query: o, source: n, trustedFriendsId: i } = e;
                    return (0, b.Ol)({ q: o, result_type: (s || E).join(","), src: n }, { communityId: t, trustedFriendsId: i });
                },
                Z = (e, t) => {
                    const s = D(t);
                    return (0, b.uD)(e, s);
                },
                T = (e, t) => {
                    const s = D(t);
                    return (0, b.YN)(e, s);
                },
                R = (e, t) => {
                    const s = D(t);
                    return (0, b.T5)(e, s);
                },
                S = (e, t) => {
                    const s = D(t);
                    return (0, b.dV)(e, s);
                };
            function P(e, t) {
                const s = D(t);
                return (0, b.PG)(e, s);
            }
            const k = (e, t) => (t.rounded_graph_weight || 0) - (e.rounded_graph_weight || 0);
            const L = () =>
                    (0, f.P1)(
                        T,
                        (0, f.P1)(
                            (e, t) => t.query,
                            (e, t) => t.filter,
                            v.Sc,
                            v.sM,
                            (e, t, s, o) => {
                                if (!e || !t || t.indexOf(d.my.Users) < 0) return (0, l.o)();
                                const n = (0, v.UA)(s, e);
                                return (0, d.It)(
                                    n
                                        .map((e) => o[e])
                                        .sort(k)
                                        .slice(0, 10),
                                );
                            },
                        ),
                        Z,
                        (e, t) => t.injectedItems,
                        (e, t) => t.query,
                        (e, t) => t.getUserExactMatch,
                        (e, t) => t.userLimit,
                        (e, t, s, o, n, i, r) => {
                            const a = (0, g.Z)(o || [], (e) => (e.type === d.El.User ? e.data.id_str : void 0)),
                                c = t.filter((e) => a.indexOf(e.id) < 0),
                                h = e.filter((e) => a.indexOf(e.id) < 0),
                                p = (0, w.sY)(c, h).slice(0, r || 10),
                                m = s === u.ZP.LOADED,
                                f = i && i({ query: n, hasResults: !!e.length, isLoaded: m, remoteUsers: e }),
                                y = f ? [...p, f] : p;
                            return { users: y.length ? y : (0, l.o)(), userExactMatch: f, filteredPrefetchUsers: c, filteredRemoteUsers: h };
                        },
                    ),
                M = () =>
                    (0, f.P1)(
                        (0, f.P1)(
                            S,
                            Z,
                            (e, t) => t.query,
                            (e, t) => t.maxEvents,
                            (e, t) => t.filter,
                            (e, t, s, o, n) => {
                                const i = s && n && n.indexOf(d.my.Events) >= 0,
                                    r = e.slice(0, o || 1);
                                return r.length && i ? r : (0, l.o)();
                            },
                        ),
                        (0, f.P1)(
                            P,
                            Z,
                            (e, t) => t.query,
                            (e, t) => t.maxLists,
                            (e, t) => t.filter,
                            (e, t, s, o, n) => {
                                const i = s && n && n.indexOf(d.my.Lists) >= 0,
                                    r = e.slice(0, o || 5);
                                return r.length && i ? r : (0, l.o)();
                            },
                        ),
                        (0, f.P1)(
                            R,
                            Z,
                            (e, t) => t.query,
                            (e, t) => t.maxTopics,
                            (e, t) => t.getTopicExactMatch,
                            (e, t, s, o, n) => {
                                const i = t === u.ZP.LOADED,
                                    r = n && n({ query: s, hasResults: !!e.length, isLoaded: i }),
                                    a = e.slice(0, o || 3);
                                return r && a.push(r), a.length ? a : (0, l.o)();
                            },
                        ),
                        L(),
                        (e, t) => t.injectedItems,
                        (e, t, s, o, n) => {
                            const { users: i } = o,
                                r = n && n.length ? n : null;
                            return e.length || t.length || s.length || i.length ? (0, y.Z)([r, e.length ? e : void 0, s.length ? s : void 0, i.length ? i : void 0, t.length ? t : void 0]) : r ? [r] : (0, l.o)();
                        },
                    ),
                F = (0, C.Z)()
                    .propsFromState(() => ({ fetchStatus: Z, items: M() }))
                    .propsFromActions(() => ({ createLocalApiErrorHandler: (0, _.zr)("TYPEAHEAD_DROPDOWN_CONTAINER_CONTEXT"), fetchTypeaheadIfNeeded: b.o4, fetchUsersIfNeeded: I.ZP.fetchManyIfNeeded, fetchUsersPresenceIfNeeded: x.ZP.fetchManyIfNeeded, prefetchTypeaheadUsersIfNeeded: v.zP }))
                    .withAnalytics({ element: "typeahead" });
            class N extends n.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._fetchUsersIfNeeded = (e = []) => {
                            const { fetchUsersIfNeeded: t, items: s, source: o } = this.props;
                            if (this.context.featureSwitches.isTrue("follow_nudge_search_enabled") && this.context.loggedInUserId && o === d._4.SearchBox) {
                                const o = (0, i.Z)(e)
                                        .filter((e) => e.type === p.ZP.User)
                                        .map((e) => e.id),
                                    n = (0, i.Z)(s)
                                        .filter((e) => e.type === p.ZP.User)
                                        .filter((e) => !o.includes(e.id))
                                        .map((e) => e.id);
                                n?.length && t(n);
                            }
                        }),
                        (this._fetchTypeaheadResultsIfNeeded = (e) => {
                            const t = this.context.featureSwitches.isTrue("c9s_community_composer_hashtag_suggestions_enabled");
                            e.query && e.fetchTypeaheadIfNeeded({ q: e.query, src: e.source, result_type: e.filter.join(","), context_text: e.contextText, topic_type: e.topicType, context_community_id: t ? e.communityId : void 0 }, { communityId: e.communityId, trustedFriendsId: e.trustedFriendsId }).catch(e.createLocalApiErrorHandler({}));
                        }),
                        (this._handleItemClick = (e, t) => {
                            const { analytics: s, onItemClick: o, query: n } = this.props;
                            o(e, t);
                            const i = c.Z.forTypeaheadResult(e, t),
                                r = i ? [i] : void 0;
                            s.scribe({ action: "click", data: { search_details: { query: n }, targets: r } });
                        }),
                        (this._scribeResults = () => {
                            const { analytics: e, items: t, query: s } = this.props;
                            e.scribe({ action: "impression", data: { items: c.Z.forTypeaheadResults(t), search_details: { query: s } } });
                        }),
                        (this._debouncedFetchTypeaheadResultsIfNeeded = (0, r.Z)(this._fetchTypeaheadResultsIfNeeded, 250)),
                        (this.state = { shouldShowPrefetchResults: !0 }),
                        (this._previouslyLoadedResults = (0, l.o)());
                }
                componentDidMount() {
                    const { createLocalApiErrorHandler: e, prefetchTypeaheadUsersIfNeeded: t } = this.props;
                    this._debouncedFetchTypeaheadResultsIfNeeded(this.props), t().catch(e({})), this._fetchUsersIfNeeded();
                }
                componentWillUnmount() {
                    clearTimeout(this._prefetchResultsTimer);
                }
                componentDidUpdate(e) {
                    const { createLocalApiErrorHandler: t, domId: s, fetchUsersPresenceIfNeeded: o, filter: n, items: r, onItemsChanged: a, query: l, shouldDeferPrefetch: c, source: d } = this.props,
                        { filter: m, query: f, source: g } = e,
                        { loggedInUserId: y } = this.context,
                        _ = this.context.featureSwitches.isTrue("voice_rooms_typeahead_audiospace_ring_enabled") && y;
                    if (r?.length && r !== e.items) {
                        if ((this._scribeResults(), a)) {
                            let e = !1;
                            const t = s ? document.getElementById(s) : null;
                            t && t.scrollHeight > t.offsetHeight && (e = !0), a(r, e);
                        }
                        if (_) {
                            const e = (0, i.Z)(r)
                                .filter((e) => e.type === p.ZP.User)
                                .map((e) => e.id);
                            e && o(e).catch(t({}));
                        }
                        this._fetchUsersIfNeeded(e.items);
                    }
                    e.fetchStatus === u.ZP.LOADED && (this._previouslyLoadedResults = e.items),
                        (l === f && n === m && d === g) ||
                            (this._debouncedFetchTypeaheadResultsIfNeeded(this.props),
                            c &&
                                (clearTimeout(this._prefetchResultsTimer),
                                this.setState({ shouldShowPrefetchResults: !1 }),
                                (this._prefetchResultsTimer = setTimeout(() => {
                                    this.props.query && this.props.fetchStatus !== u.ZP.LOADED && this.setState({ shouldShowPrefetchResults: !0 });
                                }, h.n))));
                }
                render() {
                    const { analytics: e, communityId: t, contextText: s, createLocalApiErrorHandler: i, dropdownRef: r, fetchStatus: l, fetchTypeaheadIfNeeded: c, fetchUsersIfNeeded: d, fetchUsersPresenceIfNeeded: h, filter: p, getTopicExactMatch: m, getUserExactMatch: f, injectedItems: g, items: y, maxEvents: _, maxLists: w, maxTopics: C, onItemClick: b, onItemsChanged: v, prefetchTypeaheadUsersIfNeeded: x, query: I, shouldDeferPrefetch: E, topicType: D, trustedFriendsId: Z, userLimit: T, ...R } = this.props,
                        S = I && l !== u.ZP.LOADED;
                    let P;
                    return (P = S ? (this.state.shouldShowPrefetchResults && y.length ? y : this._previouslyLoadedResults) : y), n.createElement(a.Z, (0, o.Z)({}, R, { isLoading: !!S, items: P, onItemClick: this._handleItemClick, query: I, ref: r }));
                }
            }
            (N.contextType = m.rC), (N.defaultProps = { filter: [d.my.Users], injectedItems: [], maxEvents: 3, maxLists: 3, maxTopics: 1 });
            const U = n.forwardRef((e, t) => n.createElement(N, (0, o.Z)({}, e, { dropdownRef: t }))),
                A = F.forwardRef(U);
        },
        874088: (e, t, s) => {
            s.r(t), s.d(t, { TypeaheadInput: () => E, default: () => Z, styles: () => D });
            var o = s(807896),
                n = s(202784),
                i = s(325686),
                r = s(424028),
                a = s(371344),
                l = s(392237),
                c = s(567447),
                d = s(537392),
                h = s(111677),
                p = s.n(h),
                u = s(956272),
                m = s(323265),
                f = s(649872),
                g = s(110548),
                y = s(655352),
                _ = s(530745),
                w = s(339110),
                C = s(456910),
                b = s(443781),
                v = s(131364);
            const x = p().f065ba8c;
            let I = 1;
            class E extends n.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._render = ({ containerWidth: e }) => {
                            const { alwaysOpen: t, disableClearButton: s, inputStyle: l, isCompact: c, isOnHomepage: d, placeholder: h, renderCustomInput: p, renderInSearchField: m, rounded: g, shouldAutoFocus: y, shouldFocusOnClear: _, style: w, testID: C } = this.props,
                                b = this.state.showTypeaheadDropdown || t,
                                v = { Icon: u.default, ariaActiveDescendant: this.state.ariaDescendantId, ariaAutocomplete: "list", ariaExpanded: b, ariaLabel: x, ariaOwns: this._dropdownDomId, ariaRole: "combobox", autoComplete: "off", autoCorrect: !1, autoFocus: y, contentBelow: m && m(), focusOnClear: _, isCompact: c, leftAligned: d, onBlur: this._handleInputBlur, onChange: this._handleInputChange, onClear: this._handleInputClear, onFocus: this._handleInputFocus, onLayout: this._handleInputLayoutChanged, placeholder: h, returnKeyType: "search", spellCheck: "false", styleType: g ? "pill" : "selection", testID: C, value: this.state.query, withClearButton: !s && this.state.showTypeaheadDropdown };
                            return n.createElement(i.Z, { onLayout: this._handleLayout, ref: this._setRootContainerNode, style: [D.root, w] }, n.createElement(r.Z, { onKeyDown: this._handleKeyDown, style: D.keydownInputListener }, n.createElement(f.Z, { "aria-label": h, onSubmit: this._handleFormSubmit, role: "search", style: D.wrapper }, n.createElement(i.Z, { ref: this._setInputContainerNode, style: l }, p ? p({ ...v, handleReturn: this._handleRichTextInputReturn }) : n.createElement(a.Z, (0, o.Z)({}, v, { ref: this._setInputRef }))), n.createElement(i.Z, { style: [D.typeaheadContainer, !g && D.topBorder] }, b ? this._renderDropdown(e) : null))));
                        }),
                        (this._renderDropdown = (e) => {
                            const { communityId: t, filter: s, getItemDisabledMessage: o, getItemIsDisabled: i, getTopicExactMatch: r, getUserDisplayNameLabel: a, getUserDisplayNameType: c, getUserExactMatch: d, injectedItems: h, isModal: p, isOnHomepage: u, maxEvents: m, maxLists: f, maxTopics: g, onItemsChanged: _, renderAvatarDecoration: w, renderCallout: b, renderCustomDropdown: x, renderEmptyState: I, renderHeader: E, renderNoResultsState: Z, renderUserDecoration: T, selectedItems: R, shouldDeferPrefetch: S, source: P, trustedFriendsId: k, userLimit: L, withFixedPositioning: M, withSectionDivider: F, withUserHoverCard: N } = this.props,
                                U = e >= l.default.theme.breakpoints.medium || (0, y.ZP)(),
                                { dropdownOffset: A, query: B } = this.state,
                                H = p ? D.modalDropdown : [D.dropdown, !U && M && A ? [(0, C.xX)(A), { height: `calc(100vh - ${A}px)` }] : null, (U || u) && D.wideModeDropdown, u && D.shortModeDropdown, !U && u && D.shortModeDropdownMobile],
                                O = { ariaDescendantId: this.state.ariaDescendantId, domId: this._dropdownDomId, onDismiss: this._handleOnEmptyStateDismiss, onItemFocusChanged: this._handleItemFocusChanged, ref: this._handleDropdownRef, style: H },
                                z = { ariaDescendantId: this.state.ariaDescendantId, communityId: t, domId: this._dropdownDomId, filter: s, getItemDisabledMessage: o, getItemIsDisabled: i, getTopicExactMatch: r, getUserDisplayNameType: c, getUserDisplayNameLabel: a, getUserExactMatch: d, injectedItems: h, maxEvents: m, maxLists: f, maxTopics: g, onItemClick: this._handleItemClick, onItemFocusChanged: this._handleItemFocusChanged, onItemsChanged: _, query: B, ref: this._handleDropdownRef, renderAvatarDecoration: w, renderCallout: b, renderHeader: E, renderNoResultsState: Z, renderUserDecoration: T, selectedItems: R, shouldDeferPrefetch: S, source: P, style: H, trustedFriendsId: k, userLimit: L, withSectionDivider: F, withUserHoverCard: N };
                            return I && !B ? I(O) : x ? x(z) : n.createElement(v.Z, z);
                        }),
                        (this._dismissDropdown = () => {
                            this.setState({ showTypeaheadDropdown: !1 }), this.props.onDismiss && this.props.onDismiss();
                        }),
                        (this._handleOnEmptyStateDismiss = () => {
                            this._dismissDropdown(), this._inputRef && this._inputRef.blur();
                        }),
                        (this._handleLayout = () => {
                            this._updatePosition();
                        }),
                        (this._handleInputLayoutChanged = () => {
                            this._updatePosition();
                        }),
                        (this._updatePosition = () => {
                            if (!this._inputContainerNode) return;
                            const { bottom: e } = this._inputContainerNode.getBoundingClientRect();
                            e !== this.state.dropdownOffset && this.setState({ dropdownOffset: e });
                        }),
                        (this._handleDropdownRef = (e) => {
                            this._dropdownRef = e;
                        }),
                        (this._setRootContainerNode = (e) => {
                            this._rootContainerNode = e || null;
                        }),
                        (this._setInputRef = (e) => {
                            (this._inputRef = e), this._activeChildRef || (this._activeChildRef = e);
                        }),
                        (this._setInputContainerNode = (e) => {
                            (this._inputContainerNode = e || null), this._inputContainerNode && this._updatePosition();
                        }),
                        (this._handleFocusChange = (e) => {
                            const t = 0 + (this.props.isInModal ? 1 : 0),
                                s = c.Z.getCount() > t;
                            (this._rootContainerNode && this._rootContainerNode.contains(e.target)) || s || (this.state.showTypeaheadDropdown && this._dismissDropdown());
                        }),
                        (this._handleKeyDown = (e) => {
                            const { key: t, shiftKey: s } = e,
                                { alwaysOpen: o } = this.props,
                                { showTypeaheadDropdown: n } = this.state;
                            if ((0, C.kE)(e))
                                if (t !== _.Dd) {
                                    if (this.state.inputHasFocus) return t === _.WX ? (this._focusNext(), void e.preventDefault()) : t === _.kl ? (this._focusPrevious(), void e.preventDefault()) : t === _.nQ && !o && n ? (this._dismissDropdown(), void e.preventDefault()) : t === _.NW && this._hasFocusedItem() ? (this._selectFocusedItem(), void e.preventDefault()) : void ((t !== _.jF && t !== _.Ci) || !this._deleteFocusedItem() ? n || this.setState({ showTypeaheadDropdown: !0 }) : e.preventDefault());
                                } else {
                                    const t = (s && this._navigatePrevious()) || (!s && this._navigateNext());
                                    t ? ((this._activeChildRef = t), e.preventDefault(), t.focus()) : this._dismissDropdown();
                                }
                        }),
                        (this._handleItemFocusChanged = () => {
                            this.setState({ ariaDescendantId: (0, C.A1)() });
                        }),
                        (this._handleInputClear = () => {
                            this.setQuery("");
                        }),
                        (this._handleInputBlur = () => {
                            this.setState({ inputHasFocus: !1 }), this.props.onBlur && this.props.onBlur();
                        }),
                        (this._handleInputFocus = () => {
                            (this._activeChildRef = this._inputRef), this.setState({ inputHasFocus: !0, showTypeaheadDropdown: !0 }), this._updatePosition(), this.props.onFocus && this.props.onFocus();
                        }),
                        (this._handleRichTextInputReturn = (e) => (e.shiftKey ? "not-handled" : (this._hasFocusedItem() || this._handleFormSubmit(e), "handled"))),
                        (this._handleInputChange = (e) => {
                            this.setQuery(e.target.value), this._updatePosition();
                        }),
                        (this._handleFormSubmit = (e) => {
                            e.preventDefault(), e.stopPropagation(), this._inputRef && this._inputRef.blur(), this.setState({ showTypeaheadDropdown: !1 }), this.props.onDismiss && this.props.onDismiss(), this.props.onSubmit && this.props.onSubmit();
                        }),
                        (this._handleItemClick = (e, t) => {
                            const { onDismiss: s, onItemClick: o, shouldClearOnSelect: n, shouldFocusOnClear: i } = this.props,
                                r = n ? "" : this.state.query;
                            this.setState({ showTypeaheadDropdown: !1 }), this._inputRef && (n && i ? this._inputRef.focus() : this._inputRef.blur()), this.setQuery(r), s && s(), o && o(e, t);
                        }),
                        (this._hasFocusedItem = () => this._dropdownRef && this._dropdownRef.hasFocusedItem()),
                        (this._deleteFocusedItem = () => !!(this._dropdownRef && this._dropdownRef.deleteFocusedItem && this._dropdownRef.hasFocusedItem() && this._dropdownRef.deleteFocusedItem())),
                        (this._selectFocusedItem = () => {
                            this._dropdownRef && this._dropdownRef.selectFocusedItem();
                        }),
                        (this._focusNext = () => {
                            this._dropdownRef && this._dropdownRef.focusNext();
                        }),
                        (this._focusPrevious = () => {
                            this._dropdownRef && this._dropdownRef.focusPrevious();
                        }),
                        (this._navigateNext = () => {
                            if (this._dropdownRef && this._dropdownRef.navigateNext) return this._dropdownRef.navigateNext();
                        }),
                        (this._navigatePrevious = () => {
                            if (!this.state.inputHasFocus && this._dropdownRef && this._dropdownRef.navigatePrevious) return this._dropdownRef.navigatePrevious() || this._inputRef;
                        }),
                        (this.state = { ariaDescendantId: (0, C.A1)(), inputHasFocus: !1, query: e.initialValue, showTypeaheadDropdown: !1 }),
                        (this._dropdownDomId = `typeaheadDropdown-${I}`),
                        (I += 1);
                }
                componentDidUpdate(e) {
                    this.props.initialValue !== e.initialValue && this.setQuery(this.props.initialValue);
                }
                componentDidMount() {
                    window.document.addEventListener("click", this._handleFocusChange, !0);
                }
                componentWillUnmount() {
                    window.document.removeEventListener("click", this._handleFocusChange, !0);
                }
                render() {
                    return n.createElement(d.ZP, null, this._render);
                }
                focus() {
                    this._activeChildRef && this._activeChildRef.focus();
                }
                setQuery(e) {
                    this.setState({ query: e }), this.props.onQueryChange && this.props.onQueryChange(e);
                }
            }
            (E.defaultProps = { disableClearButton: !1, filter: [w.my.Users, w.my.Topics], initialValue: "", withSectionDivider: !0, withUserHoverCard: !1 }), (E.contextType = b.rC);
            const D = l.default.create((e) => ({ root: { flex: 1, flexDirection: "column", position: "relative", zIndex: g.R0 + 1 }, typeaheadContainer: { flex: 1, position: "relative" }, keydownInputListener: { flexShrink: 1, width: "100%" }, dropdown: { backgroundColor: e.colors.cellBackground, start: 0, end: 0, overflowY: "auto", overscrollBehavior: m.ZP.isIOS() ? "auto" : "contain", position: "absolute", top: 0 }, modalDropdown: { backgroundColor: e.colors.cellBackground, flex: 1, minHeight: 300, position: "relative", overflowY: "auto", overscrollBehavior: "auto" }, wideModeDropdown: { borderRadius: e.borderRadii.medium, boxShadow: e.boxShadows.medium, minHeight: 100, maxHeight: `calc(80vh - ${e.componentDimensions.appBarHeight})` }, shortModeDropdown: { minHeight: 100, maxHeight: "35vh", paddingBottom: "0" }, shortModeDropdownMobile: { position: "absolute", height: "40vh", top: 0 }, wrapper: { alignItems: "stretch", flex: 1 }, topBorder: { borderTopColor: e.colors.gray200, borderTopStyle: "solid", borderTopWidth: e.borderWidths.small } })),
                Z = E;
        },
        120428: (e, t, s) => {
            s.d(t, { Z: () => l });
            var o = s(202784),
                n = s(325686),
                i = s(530525),
                r = s(439592),
                a = s(731708);
            function l(e) {
                const { image: t, style: s, supportText: l, title: d } = e;
                return o.createElement(n.Z, { style: [c.root, s] }, o.createElement(n.Z, { style: [c.coverContainer, c.cellThumbnail] }, t ? o.createElement(i.Z, { "aria-label": "", aspectMode: r.Z.SQUARE, image: t }) : null), o.createElement(n.Z, { style: c.bodyColumn }, l ? o.createElement(a.ZP, { color: "gray700", numberOfLines: 1, size: "subtext2" }, l) : null, o.createElement(a.ZP, { numberOfLines: 2, weight: "bold" }, d)));
            }
            const c = s(392237).default.create((e) => ({ root: { flexDirection: "row", flexShrink: 1, flexGrow: 1 }, bodyColumn: { justifyContent: "center", flexDirection: "column", marginEnd: e.spaces.space4, marginStart: e.spaces.space12, flexShrink: 1 }, coverContainer: { borderRadius: e.borderRadii.large, overflow: "hidden" }, cellThumbnail: { height: e.spaces.space48, width: e.spaces.space48 } }));
        },
        27951: (e, t, s) => {
            s.d(t, { ib: () => re, ZP: () => oe });
            var o = s(202784),
                n = s(325686),
                i = s(952428),
                r = s(731708),
                a = s(392237),
                l = s(58399),
                c = s(913973),
                d = s(339110),
                h = s(443781),
                p = s(823161);
            const u = a.default.create((e) => ({ container: { flexDirection: "row", padding: e.spaces.space8, gap: 4, alignItems: "center" }, name: { flexDirection: "row", alignItems: "center" } })),
                m = ({ name: e, query: t, url: s }) => {
                    const i = o.useCallback(() => {
                        const s = e.split(new RegExp(`(${t})`, "gi"));
                        return o.createElement(
                            o.Fragment,
                            null,
                            s.map((e, s) => o.createElement(r.ZP, { key: s, size: "subtext1", weight: e?.toLowerCase() === t?.toLowerCase() ? "bold" : "normal" }, e)),
                        );
                    }, [e, t]);
                    return o.createElement(n.Z, { style: u.container }, o.createElement(p.default, { shape: "square", size: "medium", uri: s || "https://abs.twimg.com/sticky/default_profile_images/default_profile_400x400.png" }), o.createElement(n.Z, { style: u.name }, i()));
                };
            var f = s(872405),
                g = s(503115),
                y = s(255534),
                _ = s(297436),
                w = s(668214),
                C = s(182991),
                b = s(919022);
            const v = (e, t) => t.conversationId,
                x = (e, t) => (0, C.x)(e, v(0, t)),
                I = (0, w.Z)()
                    .propsFromState(() => ({ conversationId: v, conversation: x, users: b.ZP.selectAll }))
                    .adjustStateProps(({ conversation: e, conversationId: t, users: s }) => {
                        const o = { conversation: void 0 };
                        return e?.data && (o.conversation = (0, _.E5)(e.data, void 0, s)), o;
                    }),
                E = a.default.create((e) => ({ root: { cursor: "pointer", paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical, width: "100%" }, avatarColumn: { flexGrow: 1, maxWidth: e.spaces.space40, minWidth: "32px" }, bodyColumn: { flexGrow: 7, alignItems: "center", flexDirection: "row", justifyContent: "space-between" }, disabled: { opacity: 0.6, backgroundColor: e.colors.gray0 } })),
                D = I(({ conversation: e, isDisabled: t, isSelected: s, perspective: n }) => (e ? o.createElement(f.Z, { avatarCell: o.createElement(g.Z, { conversation: e, perspective: n, size: "xLarge" }), avatarCellStyle: E.avatarColumn, avatarSize: "xLarge", cellStyle: E.bodyColumn, style: [E.root, !s && t && E.disabled] }, o.createElement(y.Z, { conversation: e, perspective: n, withParticipantsCount: !0 }), re({ isSelected: s })) : null));
            var Z = s(120428),
                T = s(530525),
                R = s(439592),
                S = s(470397),
                P = s(642153);
            function k(e) {
                return o.createElement(n.Z, { style: L.container }, o.createElement(n.Z, { style: L.imageContainer }, o.createElement(T.Z, { "aria-label": "", aspectMode: R.Z.SQUARE, image: e.image })), o.createElement(n.Z, { style: L.bodyContainer }, o.createElement(S.Z, null, o.createElement(r.ZP, { numberOfLines: 1, size: "body", weight: "bold" }, e.name), o.createElement(r.ZP, { color: "gray700", numberOfLines: 1, size: "subtext2" }, e.secondaryContext)), o.createElement(n.Z, { style: L.row }, o.createElement(P.Z, { style: L.facepile, userAvatarSize: "small", userAvatarUrls: e.facepileUrls, withIncreasedSpacing: !0 }), o.createElement(r.ZP, { color: "gray700", numberOfLines: 1, size: "subtext2" }, e.primaryContext))));
            }
            const L = a.default.create((e) => ({ bodyContainer: { flexShrink: 1 }, container: { flexDirection: "row", paddingHorizontal: e.spaces.space16, paddingVertical: e.spaces.space12 }, facepile: { marginEnd: e.spaces.space4 }, imageContainer: { borderRadius: e.borderRadii.medium, height: e.spaces.space40, marginEnd: e.spaces.space12, overflow: "hidden", width: e.spaces.space40 }, row: { flexDirection: "row" } }));
            var M = s(354149),
                F = s(909377),
                N = s(452693),
                U = s(264398),
                A = (s(136728), s(925885));
            const B = a.default.create((e) => ({ root: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, context: { alignItems: "center", flexDirection: "row" }, icon: { color: e.colors.primary, height: e.fontSizes.subtext2, paddingEnd: e.spaces.space4, width: e.fontSizes.subtext2 }, disabled: { backgroundColor: e.colors.gray0 }, searchIcon: { marginEnd: e.spaces.space12, borderWidth: 0, backgroundColor: "none" }, searchIconCell: { flexDirection: "row", alignItems: "center" }, wrapperCellStyle: { justifyContent: "center" } })),
                H = function (e) {
                    const { isDisabled: t, query: s, resultContext: i, showIcon: a, style: l, topic: c } = e,
                        d = (function (e, t) {
                            const s = (0, A.Z)(e),
                                o = e.toLowerCase().indexOf(t.toLowerCase()),
                                n = o + t.length;
                            let i;
                            if (0 === s.length) {
                                const t = [o > 0 ? [0, o] : void 0, [n, e.length]].filter(Boolean);
                                i = [{ highlights: -1 !== o ? t : void 0, text: e, entityType: "text", prefix: "", indices: [0, e.length] }];
                            } else {
                                const t = s.flatMap(({ indices: t }, s, o) => {
                                    const n = 0 === s ? 0 : o[s - 1].indices[1],
                                        i = s === o.length - 1,
                                        r = [];
                                    return n !== t[0] && r.push(e.slice(n, t[0])), r.push(e.substring(t[0], t[1])), i && e.length !== t[1] && r.push(e.slice(t[1])), r;
                                });
                                let r = 0;
                                const a = t.map((e, t, s) => {
                                    r += t > 0 ? s[t - 1].length : 0;
                                    const i = e.length;
                                    return { runningTotal: r, containsQuery: -1 !== o && r + i >= o && r < n };
                                });
                                i = t.map((e, t) => {
                                    const { containsQuery: s, runningTotal: i } = a[t],
                                        r = e.includes("#");
                                    let l, c;
                                    if (s) {
                                        if (s) {
                                            let t = i < o ? o - i : 0,
                                                s = i + e.length < n ? e.length : n - i;
                                            r && ((t -= 1), (s -= 1)), (l = []), t > 0 && l.push([0, t]), s !== e.length - 1 && l.push([s, e.length]);
                                        }
                                    } else l = [[0, e.length]];
                                    return l?.length && (c = l), r ? { highlights: c, text: `${e?.replace("#", "")}`, entityType: "hashtag", prefix: "#", indices: [i, i + e.length] } : { highlights: c, text: e, entityType: "text", prefix: "", indices: [i, i + e.length] };
                                });
                            }
                            return i;
                        })(c, s),
                        h = o.createElement(
                            r.ZP,
                            null,
                            d.map((e, t) => o.createElement(M.ZP, { key: `${e.text}${t}`, part: e })),
                        ),
                        p = "xLarge",
                        u = o.createElement(o.Fragment, null, h, i ? o.createElement(n.Z, { style: B.context }, i && i.types[0] && "followable_topic" === i.types[0].type ? o.createElement(N.default, { style: B.icon }) : null, o.createElement(r.ZP, { color: "gray700" }, i.display_string || " ")) : null);
                    return o.createElement(
                        n.Z,
                        { style: [B.root, t && B.disabled, l] },
                        a
                            ? ((e) => {
                                  const t = o.createElement(F.Z, { Icon: U.default, color: "neutral", size: p, style: B.searchIcon });
                                  return o.createElement(f.Z, { avatarCell: t, avatarCellStyle: B.searchIconCell, avatarSize: p, cellStyle: B.wrapperCellStyle }, e);
                              })(u)
                            : u,
                    );
                };
            var O = s(673510),
                z = s(111677),
                q = s.n(z),
                V = s(788993),
                G = s(624479);
            const j = (e, t) => (0, G.cY)(e, t.userId),
                W = (0, w.Z)().propsFromState(() => ({ userSpace: j })),
                Q = "TypeaheadUser",
                $ = q().ae2205d2,
                K = q().d960b55c,
                Y = q().fd06b02f,
                X = Object.freeze({ num_of_followers: V.Z.Follow, bio: V.Z.TextOnly, location: V.Z.Location, num_tweets: V.Z.NewTweets, follow_relationship: V.Z.Follow, followers_follow: V.Z.Follow, social_proof: V.Z.SocialProof, follow_relationship_mutual_follow: V.Z.FollowMutual, follow_relationship_followed: V.Z.FollowFollowed, follow_relationship_following: V.Z.FollowFollowing, highlighted_label: "HighlightedIcon" });
            class J extends o.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handleAvatarClick = () => {
                            const { userSpace: e } = this.props;
                            e || this._handleClick();
                        }),
                        (this._handleClick = () => {
                            const { isDisabled: e, item: t, onItemClick: s } = this.props;
                            s && s(t, !!e);
                        });
                }
                render() {
                    const { affiliateBadgeInfo: e, avatarDecoration: t, avatarUri: s, decoration: n, disabledMessage: i, displayNameLabel: r, displayNameType: a, isBlueVerified: l, isDisabled: c, isProtected: h, isVerified: p, name: u, screenName: m, source: f, userId: g, userSpace: y, verifiedType: _, withHoverCard: w } = this.props,
                        { featureSwitches: C } = this.context,
                        { context: b, highlightedLabel: v } = this._getItemContext(),
                        x = f === d._4.SearchBox,
                        I = y && C.isTrue("voice_rooms_typeahead_audiospace_ring_enabled") ? y : void 0;
                    return I && (I["aria-label"] = Y({ screenName: m })), o.createElement(O.ZP, { affiliateBadgeInfo: e, avatarDecoration: t, avatarSize: "xLarge", avatarUri: s, decoration: n, disabledMessage: c ? i : void 0, displayMode: "UserCompact", displayNameLabel: r, displayNameLabelType: a, highlightedLabel: v, isBlueVerified: l, isDisabled: c, isProtected: h, isVerified: p, name: u, onAvatarClick: this._handleAvatarClick, onCellClick: this._handleClick, onScreenNameClick: this._handleClick, presenceIndicator: x ? I : void 0, screenName: m, socialContext: b, testID: Q, userId: g, verifiedType: _, withBottomSocialContext: !0, withInteractiveStyling: !1, withLink: w });
                }
                _getItemContext() {
                    const e = this._getResultContext();
                    return { highlightedLabel: e?.highlightedLabel, context: e?.highlightedLabel ? void 0 : e || this._getSocialContext() };
                }
                _getSocialContext() {
                    const { socialContext: e } = this.props;
                    if (!e || !e.following) return;
                    const t = e.followed_by ? $ : K;
                    return { contextType: V.Z.Follow, text: t };
                }
                _getResultContext() {
                    const { resultContext: e } = this.props;
                    if (!e || !e.display_string || !e.types) return;
                    const { display_string: t, icon_url: s, types: o } = e,
                        n = o.length ? o[0].type : void 0,
                        i = n && n in X ? X[n] : V.Z.TextOnly;
                    return { contextType: i, text: t, highlightedLabel: i === X.highlighted_label && s ? { badge: { url: s }, description: t } : void 0 };
                }
            }
            (J.contextType = h.rC), (J.defaultProps = { withHoverCard: !1 });
            const ee = W.forwardRef(J),
                te = "typeaheadResult",
                se = ({ children: e }) => e;
            function oe(e) {
                return o.createElement(se, { item: e.item }, o.createElement(ne, e));
            }
            class ne extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._onViewRef = (e) => {
                            this._viewRef = e;
                            const { onRef: t } = this.props;
                            t && t(e);
                        }),
                        (this._handleClick = () => {
                            const { item: e } = this.props;
                            e.type !== d.El.User && this.props.onClick && this.props.onClick(e, this.isDisabled);
                        });
                }
                componentDidMount() {
                    (this._loaded = !0),
                        this._viewRef &&
                            (this._rafId = window.requestAnimationFrame(() => {
                                this._viewRef && (this._viewRef.style.opacity = "1");
                            }));
                }
                componentDidUpdate(e) {
                    const { onRef: t } = this.props;
                    t && t !== e.onRef && this._viewRef && t(this._viewRef);
                }
                componentWillUnmount() {
                    this._rafId && window.cancelAnimationFrame(this._rafId);
                }
                render() {
                    const { domId: e, isDisabled: t, isFocused: s, isInMultiSelect: r, isSelected: a, item: l, style: c } = this.props,
                        h = l.type === d.El.User,
                        p = r ? "checkbox" : h ? "none" : "button";
                    return o.createElement(n.Z, { "aria-checked": !(!r || !a) || void 0, "aria-selected": t ? void 0 : (r && a) || (!r && !!s), id: e, role: "option", testID: te }, o.createElement(i.Z, { actAsButtonRole: "none" === p, disabled: t, focusable: !0, onPress: this._handleClick, role: p, style: [s && ie.focused, ie.transitionStyles, this._loaded && ie.loaded, c], viewRef: this._onViewRef }, this._renderResult()));
                }
                _renderResult() {
                    const { disabledMessage: e, getUserDisplayNameLabel: t, getUserDisplayNameType: s, isDisabled: i, isSelected: a, item: c, onClick: h, renderAvatarDecoration: p, renderUserDecoration: u, source: f, withUserHoverCard: g } = this.props;
                    switch (c.type) {
                        case d.El.CompanyProfile: {
                            const { data: e } = c;
                            return o.createElement(m, { name: c.name, query: e.query, url: e.logoUrl });
                        }
                        case d.El.DMConversation:
                            return !!this.context.viewerUserId && o.createElement(D, { conversationId: c.id, isDisabled: i, isSelected: a, perspective: this.context.viewerUserId });
                        case d.El.Event: {
                            const { data: e } = c;
                            return o.createElement(Z.Z, { image: e.primary_image && e.primary_image.original_info, style: ie.itemPadding, supportText: e.supporting_text, title: e.topic });
                        }
                        case d.El.Hashtag:
                        case d.El.Topic: {
                            const { query: e } = this.props,
                                { data: t } = c,
                                s = f === d._4.SearchBox;
                            return o.createElement(H, { isDisabled: i, query: e || "", resultContext: t.result_context, showIcon: s, style: s ? ie.itemPadding : void 0, topic: t.topic });
                        }
                        case d.El.List: {
                            const e = c.data.facepile_urls,
                                t = c.data.primary_image.original_info,
                                s = c.data.topic,
                                n = c.data.result_contexts[0].result_context.display_string,
                                i = c.data.result_contexts[1].result_context.display_string;
                            return o.createElement(k, { facepileUrls: e, image: t, name: s, primaryContext: n, secondaryContext: i });
                        }
                        case d.El.SettingGroup: {
                            const { text: e } = c.data;
                            return o.createElement(n.Z, { style: ie.navigationLink }, o.createElement(r.ZP, { style: ie.content, weight: "bold" }, e), o.createElement(l.default, { style: ie.icon }));
                        }
                        case d.El.Setting: {
                            const { text: e } = c.data;
                            return o.createElement(n.Z, { style: ie.navigationLink }, o.createElement(r.ZP, { style: ie.content }, e), o.createElement(l.default, { style: ie.icon }));
                        }
                        case d.El.NoResult: {
                            const { data: e } = c,
                                { text: t } = e;
                            return o.createElement(r.ZP, { style: ie.noResult }, t);
                        }
                        case d.El.User: {
                            const { data: n } = c,
                                r = p?.(),
                                l = u ? u({ userId: n.id_str, user: n, isSelected: a }) : void 0,
                                d = s ? s(c, n) : void 0,
                                m = t ? t(c, n) : void 0;
                            return o.createElement(ee, { affiliateBadgeInfo: n.highlightedLabel, avatarDecoration: r || void 0, avatarUri: n.profile_image_url_https, canDm: !!n.can_dm, canMediaTag: !!n.can_media_tag, decoration: l || void 0, disabledMessage: e, displayNameLabel: m, displayNameType: d, isBlueVerified: n.is_blue_verified, isDisabled: i, isProtected: !!n.protected, isVerified: !!n.verified, item: c, name: n.name, onItemClick: h, resultContext: n.result_context, screenName: n.screen_name, socialContext: n.social_context, source: f, userId: n.id_str, verifiedType: n.verified_type, withHoverCard: g });
                        }
                        case d.El.JobLocation:
                            return o.createElement(n.Z, { style: ie.navigationLink }, o.createElement(r.ZP, { style: ie.content, weight: "bold" }, c.name));
                        default:
                            return null;
                    }
                }
                get isDisabled() {
                    return !!this.props.isDisabled;
                }
            }
            ne.contextType = h.rC;
            const ie = a.default.create((e) => ({ checkIcon: { color: e.colors.primary }, navigationLink: { alignItems: "center", flexDirection: "row", flexGrow: 1, paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, noResult: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.spaces.space16 }, itemPadding: { paddingHorizontal: e.componentDimensions.gutterHorizontal, paddingVertical: e.componentDimensions.gutterVertical }, loaded: { opacity: 1 }, focused: { backgroundColor: e.colors.gray0 }, transitionStyles: { transitionProperty: "opacity", transitionDuration: "250ms", opacity: 0 } })),
                re = ({ isSelected: e }) => (e ? o.createElement(c.default, { "aria-hidden": !0, style: ie.checkIcon }) : null);
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-3fe805ff.6f94bada.js.map
