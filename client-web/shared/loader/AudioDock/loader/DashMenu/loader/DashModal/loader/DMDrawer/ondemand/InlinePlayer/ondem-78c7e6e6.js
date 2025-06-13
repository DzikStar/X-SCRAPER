"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6"],
    {
        12686: (e, t, s) => {
            s.d(t, { Z: () => n });
            s(202784);
            const n = s(247979).Z;
        },
        912838: (e, t, s) => {
            s.d(t, { Z: () => o });
            var n = s(202784),
                i = s(539432);
            function r(e) {
                return n.createElement(i.ZP, e);
            }
            (r.sensitiveMediaTombstoneConfig = i.xh), (r.sensitiveMediaWarningTombstoneConfig = i.ui), (r.sensitiveMediaVisibilityResultsTombstoneConfig = i.xg);
            const o = r;
        },
        509715: (e, t, s) => {
            s.d(t, { Z: () => l });
            var n = s(202784),
                i = s(662285),
                r = s(755988),
                o = s(952793);
            function l(e) {
                return (0, o.hC)("spaces_2022_h2_clipping_consumption") ? n.createElement(i.Z, e) : n.createElement(r.Z, e);
            }
        },
        103165: (e, t, s) => {
            s.d(t, { Z: () => n });
            s(202784);
            const n = s(755988).Z;
        },
        383507: (e, t, s) => {
            s.d(t, { Z: () => l });
            var n = s(202784),
                i = s(163301);
            const r = (e) => {
                const { media: t } = e;
                (0, i.ad)();
                return n.createElement(n.Fragment, null, !1);
            };
            var o = s(208763);
            const l = (0, s(101879).Z)(o.Z, r);
        },
        100929: (e, t, s) => {
            s.d(t, { Z: () => n });
            s(202784);
            const n = s(92342).Z;
        },
        666418: (e, t, s) => {
            s.d(t, { Z: () => l });
            var n = s(202784),
                i = s(443781);
            const r = (e) => {
                const { additionalMediaInfo: t, "aria-label": s, authorScreenName: r, durationMs: o, poster: l, source: a, tweetCreatedAt: c, tweetId: d, tweetText: h } = e;
                n.useContext(i.rC);
                return null;
            };
            var o = s(310453);
            const l = (0, s(101879).Z)(o.Z, r);
        },
        454363: (e, t, s) => {
            s.d(t, { Z: () => n });
            s(202784);
            const n = s(827778).Z;
        },
        395379: (e, t, s) => {
            s.d(t, { Z: () => n });
            s(202784);
            const n = s(622200).Z;
        },
        649872: (e, t, s) => {
            s.d(t, { Z: () => r });
            s(202784);
            var n = s(950822),
                i = s(392237);
            const r = (e) => {
                const { style: t, ...s } = e;
                return (0, n.Z)("form", { ...s, action: "#", style: [i.default.view, t] });
            };
        },
        163301: (e, t, s) => {
            s.d(t, { Kx: () => l, ZP: () => d, ad: () => c });
            s(136728);
            var n = s(202784),
                i = s(107267),
                r = s(443781);
            const o = new WeakMap(),
                l = (e) => {
                    o.set(e, 0);
                },
                a = new WeakMap(),
                c = () => a.get(n.useContext(r.rC)),
                d = (e) => {
                    const { children: t, deletedTombstoneType: s, forwardPivotInfo: o, tweet: l } = e,
                        c = n.useContext(r.rC),
                        { verifiedCrawlerName: d } = ((0, i.useLocation)(), c);
                    return (
                        ((e) => {
                            a.set(n.useContext(r.rC), e?.retweeted_status || e);
                        })(l),
                        n.createElement(n.Fragment, null, t)
                    );
                };
        },
        321835: (e, t, s) => {
            s.d(t, { Z: () => r });
            var n = s(202784),
                i = s(390686);
            function r(e) {
                const t = n.useRef({ events: { impression: !1 } });
                return n.createElement(
                    i.ZP,
                    {
                        onPlacementChange: function (s) {
                            const n = s.visibleFraction() <= i.Ow,
                                r = !n;
                            "function" == typeof e.onOffscreenChange && e.onOffscreenChange({ isOffscreen: n }), "function" == typeof e.onImpression && r && (t.current.events.impression || ((t.current.events.impression = !0), e.onImpression()));
                        },
                        testID: e.testID,
                    },
                    e.children,
                );
            }
        },
        390686: (e, t, s) => {
            s.d(t, { Ow: () => _, tB: () => v, xn: () => g, xh: () => f, ZP: () => b });
            var n = s(202784),
                i = s(325686),
                r = s(2138),
                o = s(443781),
                l = s(993547),
                a = s(781268),
                c = s(393495);
            class d {
                constructor(e, t, s) {
                    (this.item = e), (this.viewport = t), (this.scrollY = s), (this._visiblePart = null);
                }
                isInViewport() {
                    const { bottom: e, left: t, right: s, top: n } = this.item;
                    return t <= this.viewport.right && s >= this.viewport.left && n <= this.viewport.bottom && e >= this.viewport.top;
                }
                visibleFraction() {
                    return h(this.visiblePart(), this.item);
                }
                viewportOccupiedFraction() {
                    return h(this.visiblePart(), this.viewport);
                }
                verticalDistanceToViewportCenter() {
                    return Math.abs(m(this.item) - m(this.viewport));
                }
                verticalDistanceToViewportTop() {
                    return Math.abs(this.item.top - this.viewport.top);
                }
                verticalOverlap() {
                    const e = this.visiblePart();
                    return e ? e.height : 0;
                }
                visiblePart() {
                    return null === this._visiblePart && (this._visiblePart = c.Z.intersection(this.item, this.viewport)), this._visiblePart;
                }
            }
            const h = (e, t) => (e ? u(c.Z.area(e), c.Z.area(t)) : 0),
                u = (e, t) => (0 !== t ? e / t : 0),
                m = (e) => e.top + e.height / 2,
                p = "placementTracking",
                _ = 0,
                v = 0.25,
                f = 0.75,
                g = 1;
            class w extends n.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._getScrollPlacement = () => {
                            if (this._element) {
                                const { viewport: e } = this.props,
                                    t = this._element.getBoundingClientRect(),
                                    s = e.getRect2D(),
                                    n = e.scrollY();
                                return new d(a.Z.fromClientRect(t), s, n);
                            }
                        }),
                        (this._setElementRef = (e) => {
                            this._element = e || void 0;
                        }),
                        (this._schedulePositionSampling = () => {
                            const { onPlacementChange: e } = this.props;
                            this.sample(e);
                        }),
                        (this._handleIntersectionChange = (e, t) => {
                            const { onPlacementChange: s, withScrollListener: n } = this.props;
                            e.forEach((e) => {
                                if (e.rootBounds && e.boundingClientRect) {
                                    const t = new d(a.Z.fromClientRect(e.boundingClientRect), a.Z.fromClientRect(e.rootBounds));
                                    s(t);
                                } else {
                                    const { viewport: t } = this.props,
                                        n = t.getRect2D(),
                                        i = t.scrollY(),
                                        r = new d(a.Z.fromClientRect(e.boundingClientRect), n, i);
                                    s(r);
                                }
                                const t = n && this._offscreenVideoScrollerRemovalEnabled;
                                e.intersectionRatio > 0 && t && this._addScrollListener();
                            });
                        }),
                        (this._observePlacement = () => {
                            if (this._element) {
                                this._disconnectIntersectionObserver && this._disconnectIntersectionObserver();
                                const e = [_, v, 0.5, f, g];
                                this._disconnectIntersectionObserver = this.props.viewport.addIntersectionObserverListener(this._handleIntersectionChange, this._element, e);
                            }
                        });
                    const { withScrollListener: s } = e;
                    s && (this._offscreenVideoScrollerRemovalEnabled = this.context.featureSwitches.isTrue("responsive_web_offscreen_video_scroller_removal_enabled"));
                }
                sample(e) {
                    window.requestAnimationFrame(() => {
                        const t = this._getScrollPlacement();
                        if (t) {
                            this._offscreenVideoScrollerRemovalEnabled && this._disconnectIntersectionObserver && 0 === t.visibleFraction() && this._removeScrollListener(), e(t);
                        }
                    });
                }
                render() {
                    const { children: e, onLayout: t, style: s, testID: r } = this.props;
                    return n.createElement(i.Z, { onLayout: t, ref: this._setElementRef, style: s, testID: r ?? p }, "function" == typeof e ? e({ getScrollPlacement: this._getScrollPlacement }) : e);
                }
                componentDidMount() {
                    this._observePlacement();
                    ((this.props.withScrollListener && !this._offscreenVideoScrollerRemovalEnabled) || !window.IntersectionObserver) && this._addScrollListener();
                }
                componentWillUnmount() {
                    this._removeScrollListener(), this._disconnectIntersectionObserver && this._disconnectIntersectionObserver();
                }
                _addScrollListener() {
                    if (!this._unlistenToScroll) {
                        const e = (0, r.Z)(this._schedulePositionSampling, 150, { trailing: !0 });
                        (this._unlistenToScroll = this.props.viewport.addScrollListener(e)), e();
                    }
                }
                _removeScrollListener() {
                    this._unlistenToScroll && this._unlistenToScroll(), (this._unlistenToScroll = void 0);
                }
            }
            w.contextType = o.rC;
            const b = (0, l.Z)(w);
        },
        295417: (e, t, s) => {
            s.d(t, { Z: () => a });
            var n = s(202784),
                i = s(731708),
                r = s(111677),
                o = s.n(r);
            const l = n.createElement(i.ZP, { link: "/settings/content_you_see" }),
                a = (e) => n.createElement(o().I18NFormatMessage, { $i18n: "dd5806bb" }, n.cloneElement(l, null, o().fe09fde2));
        },
        321449: (e, t, s) => {
            s.d(t, { Z: () => f });
            var n = s(202784),
                i = s(325686),
                r = s(976145),
                o = s(731708),
                l = s(392237),
                a = s(111677),
                c = s.n(a),
                d = s(161335),
                h = s(952793);
            const u = { adult_content: c().faf745fa, graphic_violence: c().b96e6682, other: c().e1b4e672 },
                m = c().cd5cba97,
                p = c().h7215a76,
                _ = c().j32d345e,
                v = l.default.create((e) => ({ header: { marginBottom: e.spaces.space12 }, icon: { color: e.colors.white, marginBottom: e.spaces.space12, height: e.spaces.space24 } })),
                f = ({ mediaVisibilityResults: e, sensitiveMediaWarnings: t }) => {
                    const s = (t ? Array.from(t) : []).map((e, t) => {
                            const s = u[e];
                            return t > 0 ? s.toLowerCase() : s;
                        }),
                        l = s.length ? (0, r.Z)(s) : "";
                    let a, c;
                    if ((0, h.hC)("rweb_mvr_blurred_media_interstitial_enabled") && e?.blurred_image_interstitial && 0 === s.length) {
                        const { text: t, title: s } = e.blurred_image_interstitial;
                        (a = { text: s.text, dir: s.rtl ? "rtl" : "auto" }), (c = { text: t.text, dir: t.rtl ? "rtl" : "auto" });
                    } else {
                        a = { text: m({ formattedWarningList: l }), dir: "auto" };
                        const t = e?.blurred_image_interstitial || 0 !== s.length ? p : _;
                        (a = { text: m({ formattedWarningList: l }), dir: "auto" }), (c = { text: t, dir: "auto" });
                    }
                    return n.createElement(i.Z, null, n.createElement(d.default, { style: v.icon }), n.createElement(o.ZP, { color: "white", dir: a.dir, style: v.header, weight: "bold" }, a.text), n.createElement(o.ZP, { color: "white", dir: c.dir }, c.text));
                };
        },
        524110: (e, t, s) => {
            s.d(t, { Z: () => w });
            var n = s(202784),
                i = s(928316),
                r = s(325686),
                o = s(420412),
                l = s(912021),
                a = s(817480),
                c = s(27951),
                d = s(602427),
                h = s(822399),
                u = s(392237),
                m = s(111677),
                p = s.n(m),
                _ = s(575211);
            const v = p().f2b3fe06,
                f = u.default.create((e) => ({ hidden: { visibility: "hidden" } })),
                g = ({ isLoading: e }) => {
                    const [t, s] = n.useState(!1);
                    return (
                        n.useEffect(() => {
                            let t;
                            return e ? (t = setTimeout(() => s(!0), _.n)) : s(!1), () => clearTimeout(t);
                        }, [e]),
                        n.createElement(h.Z, { ariaValueText: t ? v : "", indeterminate: t, style: !t && f.hidden })
                    );
                };
            class w extends n.Component {
                constructor(e, t) {
                    super(e),
                        (this._setFocusedItemRef = (e) => {
                            this._shouldScrollToFocusedItem && e && ((0, d.up)(this._getScrollParent(), e), (this._shouldScrollToFocusedItem = !1));
                        }),
                        (this._resetScroll = () => {
                            const e = this._getScrollParent();
                            e && (e.scrollTop = 0);
                        }),
                        (this._getFlattenedItems = (0, l.Z)((e) => (0, a.Z)(e))),
                        (this._handleItemClick = (e, t) => {
                            const { items: s, onItemClick: n } = this.props,
                                i = this._getFlattenedItems(s).indexOf(e);
                            e && !t && !this._shouldBlockInteractivity && n(e, i), this._resetFocus();
                        }),
                        (this._getResultCount = () => {
                            const { items: e } = this.props;
                            return this._getFlattenedItems(e).length;
                        }),
                        (this._setFocusIndex = (e, t) => {
                            const { items: s, onItemFocusChanged: n } = this.props;
                            (this._shouldScrollToFocusedItem = t), this.setState({ focusIndex: e }), n && n(this._getFlattenedItems(s)[e]);
                        }),
                        (this._resetFocus = () => {
                            this._setFocusIndex(this.props.withItemAlwaysSelected ? 0 : -1);
                        }),
                        (this.focusNext = () => {
                            const { focusIndex: e } = this.state,
                                t = this._getResultCount();
                            if (0 === t) return;
                            const s = e + 1 >= t ? 0 : e + 1;
                            this._setFocusIndex(s, !0);
                        }),
                        (this.focusPrevious = () => {
                            const { focusIndex: e } = this.state,
                                t = this._getResultCount();
                            if (0 === t) return;
                            const s = e - 1 < 0 ? t - 1 : e - 1;
                            this._setFocusIndex(s, !0);
                        }),
                        (this.hasFocusedItem = () => {
                            const { focusIndex: e } = this.state,
                                t = this._getResultCount();
                            return e >= 0 && t > e;
                        }),
                        (this.selectFocusedItem = () => {
                            const { focusIndex: e } = this.state,
                                { getItemIsDisabled: t, items: s } = this.props;
                            if (this.hasFocusedItem()) {
                                const n = this._getFlattenedItems(s)[e],
                                    i = !!t && t(n, n.data);
                                this._handleItemClick(n, i);
                            }
                        }),
                        (this.state = { focusIndex: e.withItemAlwaysSelected ? 0 : -1 });
                }
                componentDidMount() {
                    this._resetFocus();
                }
                componentWillUnmount() {
                    clearTimeout(this._interactivityTimeout);
                }
                componentDidUpdate(e) {
                    e.items !== this.props.items &&
                        (this._resetFocus(),
                        this._resetScroll(),
                        this._interactivityTimeout && clearTimeout(this._interactivityTimeout),
                        (this._shouldBlockInteractivity = !0),
                        (this._interactivityTimeout = setTimeout(() => {
                            this._shouldBlockInteractivity = !1;
                        }, 500)));
                }
                render() {
                    const { domId: e, isLoading: t, items: s, renderCallout: i, renderFooter: o, renderHeader: l, renderNoResultsState: a, selectedItems: c, shouldAlwaysRender: d, style: h } = this.props,
                        u = !!(t || s.length || d);
                    let m = 0;
                    const p = !!c;
                    return u
                        ? n.createElement(
                              r.Z,
                              { "aria-multiselectable": p, id: e, role: "listbox", style: h },
                              i ? i() : null,
                              n.createElement(g, { isLoading: !!t }),
                              l ? l() : null,
                              s.length
                                  ? s.map((e, t) => {
                                        const n = !Array.isArray(s[t - 1]) && t > 0,
                                            i = t < s.length - 1,
                                            r = Array.isArray(e) ? this._renderTypeaheadGroup(e, m, n, i) : this._renderTypeaheadItem(e, m);
                                        return (m += Array.isArray(e) ? e.length : 1), r;
                                    })
                                  : null,
                              o ? o() : null,
                          )
                        : a
                          ? a({ style: h })
                          : null;
                }
                _renderTypeaheadGroup(e, t, s, i) {
                    const { withSectionDivider: r } = this.props;
                    return n.createElement(
                        n.Fragment,
                        { key: `typeaheadGroup-${t}` },
                        r && s ? n.createElement(o.Z, { key: `typeaheadDividerTop-${t}` }) : null,
                        e.map((e, s) => this._renderTypeaheadItem(e, t + s)),
                        r && i ? n.createElement(o.Z, { key: `typeaheadDividerBottom-${t}` }) : null,
                    );
                }
                _renderTypeaheadItem(e, t) {
                    const { ariaDescendantId: s, getItemDisabledMessage: i, getItemIsDisabled: r, getUserDisplayNameLabel: o, getUserDisplayNameType: l, query: a, renderAvatarDecoration: d, renderUserDecoration: h, selectedItems: u, source: m, withUserHoverCard: p } = this.props,
                        { focusIndex: _ } = this.state,
                        v = !(!u || !e.id) && u.indexOf(e.id) >= 0,
                        f = !!u,
                        g = _ === t,
                        w = r && r(e, e.data),
                        b = i && i(e, e.data);
                    return n.createElement(c.ZP, { disabledMessage: b, domId: g ? s : void 0, getUserDisplayNameLabel: o, getUserDisplayNameType: l, isDisabled: w, isFocused: g, isInMultiSelect: f, isSelected: v, item: e, key: `typeaheadItem-${t}-${e.id || ""}`, onClick: this._handleItemClick, onRef: g ? this._setFocusedItemRef : void 0, query: a, renderAvatarDecoration: d, renderUserDecoration: h, source: m, withUserHoverCard: p });
                }
                _getScrollParent() {
                    if (!this._scrollParent) {
                        const e = (0, d.rP)(i.findDOMNode(this));
                        this._scrollParent = e === window ? null : e;
                    }
                    return this._scrollParent;
                }
            }
        },
        622200: (e, t, s) => {
            s.d(t, { Z: () => v, j: () => p });
            var n = s(202784),
                i = s(325686),
                r = s(811176),
                o = s(310452),
                l = s(354149),
                a = s(111677),
                c = s.n(a),
                d = s(177371);
            const h = "Withheld_Tombstone",
                u = c().eca84b72,
                m = c().gf5e9ea6,
                p = (e) => !!e;
            class _ extends n.Component {
                constructor(e, t) {
                    super(e, t),
                        (this._handleClick = () => {
                            this.setState({ showActionMenu: !0 });
                        }),
                        (this._handleCancel = () => {
                            this.setState({ showActionMenu: !1 });
                        }),
                        (this._getUndoRetweetActions = () => [{ text: u, onClick: this._handleUnretweet }]),
                        (this._handleUnretweet = () => {
                            const { onUnretweet: e } = this.props;
                            e && e(), this._handleCancel();
                        }),
                        (this.state = { showActionMenu: !1 });
                }
                render() {
                    return n.createElement(i.Z, { testID: h }, this._renderTombstone(), this.state.showActionMenu ? n.createElement(r.Z, { items: this._getUndoRetweetActions(), onCloseRequested: this._handleCancel }) : null);
                }
                _renderTombstone() {
                    const { conversationPosition: e, conversationTreeMetadata: t, displayTextRange: s, entities: i, inline: r, lang: a, showUnretweetButton: c, text: h } = this.props;
                    if (!h) return null;
                    const u = o.ZP.tweetTextParts(h, s, i)
                        .map((e, t) => n.createElement(l.ZP, { key: t, linkify: !0, part: e }))
                        .filter(Boolean);
                    return n.createElement(d.Z, { actionText: c ? m : null, children: u, conversationPosition: e, conversationTreeMetadata: t, inline: r, lang: a, onClick: this._handleClick });
                }
            }
            _.defaultProps = { inline: !1 };
            const v = _;
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~loader.AudioDock~loader.DashMenu~loader.DashModal~loader.DMDrawer~ondemand.InlinePlayer~ondem-78c7e6e6.733180fa.js.map
