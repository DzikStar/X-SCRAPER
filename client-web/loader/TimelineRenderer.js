"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.TimelineRenderer"],
    {
        229333: (e, t, s) => {
            s.d(t, { Z: () => d });
            var n = s(202784),
                i = s(466999),
                r = s(325686),
                o = s(392237),
                a = s(111677);
            const l = s.n(a)().e5b0063d;
            let c = 0;
            class h extends n.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${c}`), (c += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        s = l({ title: t });
                    return n.createElement(r.Z, { "aria-labelledby": this._listDomId, role: "region" }, n.createElement(i.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: o.default.visuallyHidden }, t), n.createElement(r.Z, { "aria-label": s }, e));
                }
            }
            const d = h;
        },
        414939: (e, t, s) => {
            s.d(t, { Z: () => l });
            var n = s(202784),
                i = s(325686),
                r = s(392237);
            class o extends n.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return n.createElement(i.Z, { style: a.root });
                }
            }
            const a = r.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                l = o;
        },
        46705: (e, t, s) => {
            s.d(t, { X: () => n, g: () => i });
            const n = (e) => ({ id: e, distanceToViewportTop: 0 }),
                i = (e) => ({ id: e, distanceToViewportBottom: 0 });
        },
        144256: (e, t, s) => {
            s.d(t, { Z: () => l });
            var n = s(807896),
                i = s(202784),
                r = s(149202),
                o = s(725516);
            class a extends i.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._handleRefresh = () => {
                            const { analytics: e, onRefresh: t } = this.props,
                                s = e.contextualScribeNamespace;
                            t(), s && s.page && e.scribeAction("pull_to_refresh");
                        });
                }
                render() {
                    const { analytics: e, canRefresh: t, onRefresh: s, ...o } = this.props;
                    return i.createElement(r.Z, (0, n.Z)({}, o, { canRefresh: t, onRefresh: this._handleRefresh }));
                }
            }
            const l = (0, o.Z)(a);
        },
        22371: (e, t, s) => {
            s.r(t), s.d(t, { EmptyState: () => qe, TimelineRenderer: () => $e, default: () => je });
            var n = s(807896),
                i = (s(136728), s(202784)),
                r = s(400752),
                o = s(516951),
                a = s(912021),
                l = s(697926),
                c = s(459679),
                h = s(323265),
                d = s(229333),
                p = s(774654),
                u = s(334346),
                m = s(46705),
                _ = s(109002),
                g = s(668856),
                v = s(962741),
                f = s(87063),
                y = s(23679),
                b = s(725516),
                w = s(255117),
                E = s(290297),
                C = s(443781),
                S = s(144256),
                T = s(993547),
                I = s(666536);
            const k = { threshold: [0.01, 0.5] };
            const R = class {
                constructor(e) {
                    (this._itemsUnderObservation = {}),
                        (this._lingerCandidates = new Map()),
                        (this._reactivityCandidates = new Map()),
                        (this._lingerEvents = new Map()),
                        (this._impressionEvents = new Map()),
                        (this.dequeueLingerEvents = () => {
                            const e = Array.from(this._lingerEvents, ([e, { end: t, start: s }]) => ({ id: e, start: s, end: t }));
                            return this._lingerEvents.clear(), e;
                        }),
                        (this._getLingerEventForId = (e) => {
                            const t = this._lingerEvents.get(e);
                            if (t) return { id: e, start: t.start, end: t.end };
                        }),
                        (this._getOngoingLingerEvents = (e) => {
                            const t = [];
                            return (
                                this._lingerCandidates.forEach((s, n) => {
                                    e - s >= 500 && t.push({ id: n, start: s, end: e });
                                }),
                                t
                            );
                        }),
                        (this._processIntersectionEntries = (e) => {
                            const t = Date.now();
                            e.forEach((e) => {
                                const s = Object.entries(this._itemsUnderObservation).find(([t, s]) => s === e.target);
                                if (s) {
                                    const r = s[0],
                                        { boundingClientRect: o, intersectionRatio: a, rootBounds: l } = e;
                                    if (a >= 0.01) {
                                        const e = null != o && null != l;
                                        this._createImpressionCandidate(r, e ? ((n = o.height), (i = l.height), Math.floor((n / i) * 1e5)) : void 0);
                                    }
                                    a >= 0.5 ? (this._createLingerCandidate(r, t), this._createReactivityCandidate(r, t)) : (this._transitionCandidateToLingerEvent(r, t), this._removeReactivityCandidate(r));
                                }
                                var n, i;
                            }),
                                this._onEventsTriggeredCallback && this._handleOnEventsTriggered();
                        }),
                        (this._handleOnEventsTriggered = (0, I.Z)(() => {
                            const e = this.dequeueImpressionEvents(),
                                t = this.dequeueLingerEvents();
                            (e.length || t.length) && this._onEventsTriggeredCallback && this._onEventsTriggeredCallback({ impressionEvents: e, lingerEvents: t });
                        }, 100)),
                        (this._createImpressionCandidate = (e, t) => {
                            this._impressionEvents.set(e, { relativeElementHeight: t });
                        }),
                        (this._createLingerCandidate = (e, t) => {
                            this._lingerCandidates.has(e) || this._lingerCandidates.set(e, t);
                        }),
                        (this._transitionCandidateToLingerEvent = (e, t) => {
                            const s = this._lingerCandidates.get(e);
                            void 0 === s || this._lingerEvents.has(e) || (t - s >= 500 && this._lingerEvents.set(e, { start: s, end: t })), this._lingerCandidates.delete(e);
                        }),
                        (this._createReactivityCandidate = (e, t) => {
                            if (!this._reactivityCandidates.has(e)) {
                                const t = window.setTimeout(() => {
                                    this._reactivityCallback(e), this._reactivityCandidates.delete(e);
                                }, 500);
                                this._reactivityCandidates.set(e, t);
                            }
                        }),
                        (this._removeReactivityCandidate = (e) => {
                            window.clearTimeout(this._reactivityCandidates.get(e)), this._reactivityCandidates.delete(e);
                        }),
                        e?.root && e.root === window.document && (e.root = null);
                    const t = { ...k, ...e };
                    (this._onEventsTriggeredCallback = e?.onEventsTriggeredCallback), (this._observer = new window.IntersectionObserver(this._processIntersectionEntries, t)), (this._reactivityCallback = (e && e.reactivityCallback) || o.Z);
                }
                observe(e, t) {
                    e && ((this._itemsUnderObservation[t] = e), this._observer.observe(e));
                }
                unobserve(e, t) {
                    e && (this._observer.unobserve(e), delete this._itemsUnderObservation[t], this._removeReactivityCandidate(t));
                }
                disconnect() {
                    this._observer.disconnect();
                }
                dequeueImpressionEvents() {
                    const e = Array.from(this._impressionEvents, ([e, { relativeElementHeight: t }]) => ({ id: e, relativeElementHeight: t }));
                    return this._impressionEvents.clear(), e;
                }
                flushLingerEvents(e = Date.now()) {
                    const t = this.dequeueLingerEvents(),
                        s = this._getOngoingLingerEvents(e);
                    return this._lingerCandidates.clear(), t.concat(s);
                }
            };
            var Z = s(880598);
            const P = ({ children: e, impressionTracker: t }) => {
                const s = i.useMemo(() => ({ impressionTracker: t }), [t]);
                return t ? i.createElement(Z.Z.Provider, { value: s }, e) : e;
            };
            var x = s(614983),
                A = s.n(x),
                L = s(19017),
                B = L.Z ? window.location.href : "";
            var D = (e, t) => {
                if (L.Z) {
                    var s = new URL(e, window.location).toString();
                    0 === s.indexOf("tel:") ? (window.location = s) : window.open(s, t, "noopener");
                }
            };
            const N = new (class {
                constructor() {
                    this._eventCallbacks = {};
                }
                _dispatchEvent(e) {
                    for (var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), n = 1; n < t; n++) s[n - 1] = arguments[n];
                    var i = this._eventCallbacks[e];
                    null != i &&
                        Array.isArray(i) &&
                        i.map((e) => {
                            e(...s);
                        });
                }
                addEventListener(e, t) {
                    var s = this;
                    return (
                        s._eventCallbacks[e] || (s._eventCallbacks[e] = [t]),
                        s._eventCallbacks[e].push(t),
                        {
                            remove() {
                                var n = s._eventCallbacks[e].filter((e) => e.toString() !== t.toString());
                                s._eventCallbacks[e] = n;
                            },
                        }
                    );
                }
                removeEventListener(e, t) {
                    var s = this._eventCallbacks[e].filter((e) => e.toString() !== t.toString());
                    this._eventCallbacks[e] = s;
                }
                canOpenURL() {
                    return Promise.resolve(!0);
                }
                getInitialURL() {
                    return Promise.resolve(B);
                }
                openURL(e, t) {
                    1 === arguments.length && (t = "_blank");
                    try {
                        return D(e, t), this._dispatchEvent("onOpen", e), Promise.resolve();
                    } catch (e) {
                        return Promise.reject(e);
                    }
                }
                _validateURL(e) {
                    A()("string" == typeof e, "Invalid URL: should be a string. Was: " + e), A()(e, "Invalid URL: cannot be empty");
                }
            })();
            var F = s(325686),
                M = s(530525),
                O = s(439592),
                U = s(529356),
                H = s(392237),
                V = s(520913),
                W = s(946409),
                z = s(947992);
            const G = Object.freeze({ Icon: "Icon", IconSmall: "IconSmall", FullWidth: "FullWidth" });
            var q = s(500002),
                $ = s(686689),
                j = s(668214),
                K = s(601576);
            const Y = (0, j.Z)()
                .propsFromActions(() => ({ addToast: K.fz }))
                .withAnalytics();
            class X extends i.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._getGraphicProps = (0, a.Z)((e, t) => {
                            const s = e ? ({ style: t }) => i.createElement(F.Z, { style: t }, i.createElement(M.Z, { "aria-label": "", aspectMode: O.Z.exact(e.width / e.height), image: e })) : V.default;
                            let n,
                                r = "illustration";
                            return e && t !== G.IconSmall ? t === G.FullWidth && (e.width > e.height ? (n = J.fullWidthNoBleedTop) : (r = "illustrationFullWidth")) : (r = "icon"), { graphic: s, graphicDisplayMode: r, graphicStyle: n };
                        })),
                        (this._scribeAction = (e, t) => {
                            const { analytics: s } = this.props,
                                { action: n, component: i, element: r } = t || {};
                            s.scribe({ action: n || e, component: i || "cover", element: r });
                        }),
                        (this._handleDismiss = () => {
                            const { dismissInfo: e, processCallback: t } = this.props,
                                { callbacks: s } = e || {};
                            s &&
                                s.forEach((e) => {
                                    t(e);
                                }),
                                e && (this._scribeAction("dismiss"), this.props.onClose());
                        }),
                        (this._handlePrimaryCtaClick = () => {
                            this._handleCtaClick(this.props.primaryCta, "primary_cta");
                        }),
                        (this._handleSecondaryCtaClick = () => {
                            this.props.secondaryCta && this._handleCtaClick(this.props.secondaryCta, "secondary_cta");
                        }),
                        (this._handleCtaClick = ({ callbacks: e, clientEventInfo: t, ctaBehavior: s }, n) => {
                            const { addToast: i, history: r, processCallback: o } = this.props;
                            if ((this.props.onClose(), this._scribeAction("click", { element: n, ...t }), s.dismiss)) {
                                const { dismiss: e } = s;
                                e && e.feedbackMessage && i({ text: e.feedbackMessage.text });
                            }
                            if (s.navigate) {
                                const { navigate: e } = s,
                                    t = e && (0, W.s9)(e.url);
                                t && (t.external ? N.openURL(t.pathname) : r.push(t.pathname));
                            }
                            e && e.forEach((e) => o(e));
                        });
                }
                componentDidMount() {
                    this.props.onImpression && this.props.onImpression();
                }
                render() {
                    const { details: e, dismissInfo: t, displayType: s, image: n, imageDisplayType: r, primaryCta: a, primaryText: l, secondaryCta: c, secondaryText: h, type: d } = this.props,
                        p = i.createElement($.Z, { entities: l.entities, text: l.text }),
                        u = h ? i.createElement($.Z, { entities: h.entities, text: h.text }) : null,
                        { graphic: m, graphicDisplayMode: _, graphicStyle: g } = this._getGraphicProps(n, r);
                    if (d === z.Z.Full) {
                        const n = e ? i.createElement($.Z, { entities: e.entities, text: e.text }) : null;
                        return i.createElement(U.Z, { actionLabel: a.text, footer: n, graphic: m, graphicDisplayMode: _, graphicStyle: g, headline: p, isFullHeightOnMobile: !t && "CenterCover" !== s, onAction: this._handlePrimaryCtaClick, onClose: this._handleDismiss, onTertiaryAction: this._handleSecondaryCtaClick, subtext: u, tertiaryActionLabel: c && c.text, withCloseButton: !!t });
                    }
                    return i.createElement(U.Z, { actionLabel: a.text, graphic: m, graphicDisplayMode: r === G.FullWidth ? _ : "none", graphicStyle: g, headline: p, onAction: this._handlePrimaryCtaClick, onClose: o.Z, onSecondaryAction: this._handleSecondaryCtaClick, secondaryActionLabel: c && c.text, subtext: u, withCloseButton: !1 });
                }
            }
            X.defaultProps = { imageDisplayType: G.Icon };
            const J = H.default.create((e) => ({ fullWidthNoBleedTop: { width: "100%", height: "auto" } })),
                Q = (0, q.ZP)(Y(X));
            var ee = s(370006),
                te = s(731708),
                se = s(316046),
                ne = s(154003),
                ie = s(885015),
                re = s(58881),
                oe = s(530732),
                ae = s(786998),
                le = s(537392),
                ce = s(138099),
                he = s(182495),
                de = s(951790),
                pe = s(576513),
                ue = s(3196),
                me = s(487659),
                _e = s(911318);
            class ge extends i.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._scribeAction = (e, t) => {
                            const { analytics: s } = this.props,
                                { action: n, component: i, element: r } = t || {};
                            s.scribe({ action: n || e, component: i || "cover", element: r });
                        }),
                        (this._handleButtonPress =
                            ({ clientEventInfo: e, ctaBehavior: t }) =>
                            () => {
                                const { history: s } = this.props;
                                if ((this.props.onClose(), this._scribeAction("click", { ...e }), t.navigate)) {
                                    const { navigate: e } = t,
                                        n = e && (0, W.s9)(e.url);
                                    n && (n.external ? N.openURL(n.pathname) : s.push(n.pathname));
                                }
                            }),
                        (this._handleButtonRefUpdate = (e) => {
                            e && !this._wasFocused && (e.focus(), (this._wasFocused = !0));
                        }),
                        (this._renderCloseButton = () => i.createElement(ee.Z, { backButtonType: "close", onClick: this._handleDismiss })),
                        (this._handleDismiss = () => {
                            const { dismissInfo: e, processCallback: t } = this.props,
                                { callbacks: s } = e || {};
                            s &&
                                s.forEach((e) => {
                                    t(e);
                                }),
                                e && (this._scribeAction("dismiss"), this.props.onClose());
                        }),
                        (this._handleSwitchToApp =
                            ({ clientEventInfo: e }) =>
                            () => {
                                this.props.onClose(), this._scribeAction("click", { ...e }), de.Z.goToAppStore();
                            }),
                        (this._handleRichTextEntityClick =
                            ({ clientEventInfo: e }) =>
                            () => {
                                this.props.onClose(), this._scribeAction("click", { ...e });
                            });
                }
                componentDidMount() {
                    this.props.onImpression?.();
                }
                _renderHeading({ image: e, primaryText: t, secondaryText: s }) {
                    return i.createElement(F.Z, null, e ? i.createElement(F.Z, { style: be.imageContainer }, i.createElement(M.Z, { "aria-label": "", aspectMode: O.Z.exact(e.width / e.height), image: e })) : null, i.createElement(F.Z, { style: be.headingContainer }, i.createElement(te.ZP, { align: "left", size: "title3", style: be.headline, weight: "heavy" }, i.createElement(se.Z, { entities: t.entities, text: t.text })), s ? i.createElement(te.ZP, { align: "left", color: "gray700", weight: "normal" }, i.createElement(se.Z, { entities: s.entities, text: s.text })) : null));
                }
                _renderButton({ isSwitchToAppButton: e = !1, valueData: t }) {
                    const s = t && t.coverCta ? (e ? this._handleSwitchToApp({ clientEventInfo: t.coverCta.clientEventInfo }) : this._handleButtonPress(t.coverCta)) : void 0;
                    return i.createElement(ne.ZP, { onPress: s, ref: this._handleButtonRefUpdate, size: "medium", style: [ve.button, ve.ssoButton], type: "brandFilled" }, t?.coverCta?.text);
                }
                _renderAppleSsoButton() {
                    const e = he.yX.LogIn;
                    return i.createElement(ue.Z, { buttonSize: "medium", buttonState: e, style: [ve.button, ve.ssoButton] });
                }
                _renderGoogleSsoButton() {
                    const e = he.yX.LogIn;
                    return i.createElement(me.Z, { buttonSize: "medium", buttonState: e, displayType: _e.qv.Button, style: [ve.button, ve.ssoButton] });
                }
                _renderSeparator(e) {
                    return e ? i.createElement(ie.Z, { style: we.separatorContainer, withGutter: !0 }, i.createElement(F.Z, { style: we.separatorColumn }, i.createElement(F.Z, { style: we.separator })), i.createElement(te.ZP, { size: "headline2", style: we.separatorText }, i.createElement(se.Z, { entities: e.entities, text: e.text })), i.createElement(F.Z, { style: we.separatorColumn }, i.createElement(F.Z, { style: we.separator }))) : i.createElement(F.Z, { style: we.separator, testID: "separator" });
                }
                _returnStaticText(e) {
                    const {
                        detailText: { entities: t, text: s },
                    } = e;
                    return i.createElement(F.Z, { style: Ee.container }, i.createElement(te.ZP, { align: "left", weight: "normal" }, i.createElement(se.Z, { entities: t, onEntityClick: this._handleRichTextEntityClick({ clientEventInfo: e.clientEventInfo }), text: s })));
                }
                _renderSettingValue({ valueData: e, valueType: t }) {
                    switch (t) {
                        case "AppleSsoButton":
                            return this._renderAppleSsoButton();
                        case "Button":
                            return this._renderButton({ valueData: e });
                        case "GoogleSsoButton":
                            return this._renderGoogleSsoButton();
                        case "Separator":
                            return this._renderSeparator(e?.separator?.label);
                        case "StaticText":
                            return e && e.staticText && this._returnStaticText(e.staticText);
                        case "SwitchToAppButton":
                            return this._renderButton({ isSwitchToAppButton: !0, valueData: e });
                        default:
                            return null;
                    }
                }
                _renderSettings(e) {
                    return i.createElement(
                        F.Z,
                        { style: { marginBottom: H.default.theme.spaces.space20 } },
                        e.map((e, t) => i.createElement(F.Z, { key: t }, this._renderSettingValue(e))),
                    );
                }
                _renderFooter({ branchInfo: e, clientEventInfo: t, icon: s, primaryText: n }) {
                    const { entities: r, text: o } = n,
                        a = e?.enable_branch,
                        l = re.Z.generate({ backgroundColor: "transparent", color: H.default.theme.colors.primary });
                    return i.createElement(oe.Z, { interactive: !!a, onClick: a ? this._handleSwitchToApp({ clientEventInfo: t }) : void 0, style: ye.footer }, ({ isFocused: e, isHovered: n, isPressed: c }) => {
                        const h = [l.transitionStyle, n && l.hoverStyle, c && l.pressedStyle, e && l.focusedStyle];
                        return i.createElement(F.Z, { style: h }, i.createElement(te.ZP, { align: "left", size: "body", weight: "bold" }, s && this._renderIcon(s), i.createElement(se.Z, { entities: r, onEntityClick: a ? void 0 : this._handleRichTextEntityClick({ clientEventInfo: t }), style: { marginStart: H.default.theme.spaces.space12 }, text: o })));
                    });
                }
                _renderIcon(e) {
                    if (e === pe.Z.LOGO) return i.createElement(V.default, { style: { color: H.default.theme.colors.primary } });
                }
                _renderAppBarCloseButton(e) {
                    return e ? i.createElement(ae.Z, { leftControl: this._renderCloseButton(), withBackground: !0 }) : null;
                }
                render() {
                    const { dismissInfo: e, displayType: t, footer: s, header: n, onClose: r, settings: o } = this.props,
                        a = !!e,
                        l = !e && "HalfCover" !== t;
                    return i.createElement(le.ZP, null, ({ windowHeight: e, windowWidth: t }) => {
                        const c = t > H.default.theme.breakpoints.medium,
                            h = c;
                        return i.createElement(ce.Z, { enableMaskForDismiss: !0, onMaskClick: a ? r : void 0, style: c && fe.roundedBorders, type: l ? "full" : "bottom", withMask: !0 }, i.createElement(F.Z, { style: [fe.root, h && fe.withBottomPadding, !a && (h ? fe.appBarReplacementSpacer : fe.appBarReplacementSpacerThin)] }, this._renderAppBarCloseButton(a), i.createElement(F.Z, { style: fe.contentContainer }, i.createElement(F.Z, { style: fe.centeredContent }, i.createElement(F.Z, { style: [fe.content, !!s && fe.contentWithFooter] }, n && this._renderHeading(n), o && this._renderSettings(o))))), s && this._renderFooter(s));
                    });
                }
            }
            ge.contextType = C.rC;
            const ve = H.default.create((e) => ({ button: { width: "100%", margin: "auto", marginVertical: e.spaces.space12 }, ssoButton: { width: _e.fI, height: e.spaces.space40 } })),
                fe = H.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, overflow: "auto", paddingBottom: e.spaces.space12 }, roundedBorders: { borderRadius: e.borderRadii.xLarge }, withBottomPadding: { paddingBottom: e.spaces.space48 }, appBarReplacementSpacer: { paddingTop: e.spaces.space48 }, appBarReplacementSpacerThin: { paddingTop: e.spaces.space20 }, contentWithFooter: { marginBottom: 0 }, content: { maxWidth: `calc((${e.spaces.space80} * 5) - ${e.spaces.space36})`, margin: e.spaces.space32, paddingHorizontal: e.spaces.space32 }, contentContainer: { alignItems: "center", flexGrow: 1 }, centeredContent: { width: "100%", flexGrow: 1, alignItems: "center", justifyContent: "center" } })),
                ye = H.default.create((e) => ({ footer: { width: "100%", maxWidth: `calc((${e.spaces.space80} * 5)`, paddingVertical: e.spaces.space48, borderTopStyle: "solid", borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small, alignItems: "center" } })),
                be = H.default.create((e) => ({ headingContainer: { marginVertical: e.spaces.space20 }, content: { marginBottom: e.spaces.space32, justifyContent: "center" }, headline: { marginBottom: e.spaces.space8 }, imageContainer: { marginHorizontal: "auto", height: "initial", width: "initial" } })),
                we = H.default.create((e) => ({ separatorContainer: { width: "100%" }, separatorColumn: { flex: 1, justifyContent: "center" }, separator: { width: "100%", height: e.spaces.space1, backgroundColor: e.colors.gray200, marginTop: e.spaces.space8, marginBottom: e.spaces.space8 }, separatorText: { "flex-basis": "auto" } })),
                Ee = H.default.create((e) => ({ container: { marginTop: e.spaces.space20 } })),
                Ce = (0, q.ZP)((0, b.Z)(ge)),
                Se = { component: "cover", action: "impression" },
                Te = ({ activeCover: e, clearActiveCover: t, processCallback: s }) => {
                    const n = ((e) => {
                            let t = { ...Se };
                            return e && (e.component && (t = { ...t, component: e.component }), e.element && (t = { ...t, element: e.element }), e.action && (t = { ...t, action: e.action })), t;
                        })(e.clientEventInfo),
                        r = (0, b.z)(),
                        o = () => {
                            const {
                                cover: { impressionCallbacks: t },
                            } = e;
                            t && t.forEach((e) => s(e)), r.scribe({ ...n });
                        };
                    switch (e.type) {
                        case "full":
                            return (a = e.cover), i.createElement(Q, { details: a.details || void 0, dismissInfo: a.dismissInfo, displayType: a.displayType, image: a.image, imageDisplayType: a.imageDisplayType || void 0, onClose: t, onImpression: o, primaryCta: a.primaryCoverCta, primaryText: a.primaryText, processCallback: s, secondaryCta: a.secondaryCoverCta, secondaryText: a.secondaryText, type: "full" });
                        case "half":
                            return (function (e) {
                                const n = "CenterCover" === e.displayType ? "full" : "half";
                                return i.createElement(Q, { displayType: e.displayType, image: e.coverImage ? e.coverImage.image : void 0, imageDisplayType: e.coverImage ? e.coverImage.imageDisplayType : void 0, onClose: t, onImpression: o, primaryCta: e.primaryCoverCta, primaryText: e.primaryText, processCallback: s, secondaryCta: e.secondaryCoverCta, secondaryText: e.secondaryText, type: n });
                            })(e.cover);
                        case "settings_list":
                            return (function (e) {
                                return i.createElement(Ce, { dismissInfo: e.dismissInfo, displayType: e.displayType, footer: e.footer, header: e.header, impressionCallbacks: e.impressionCallbacks, onClose: t, onImpression: o, processCallback: s, settings: e.settings });
                            })(e.cover);
                        default:
                            return null;
                    }
                    var a;
                };
            var Ie = s(459643),
                ke = s(143778),
                Re = s(414939),
                Ze = s(290402);
            const Pe = (0, Ie.Z)(i.createElement(Re.Z, null)),
                xe = ({ bottomFetchStatus: e, onBottomRetry: t, withEndOfContent: s }) => i.createElement(F.Z, { style: s && Ae.footer }, i.createElement(Ze.Z, { fetchStatus: e, onRequestRetry: t, render: s ? Pe : ke.Z })),
                Ae = H.default.create((e) => ({ footer: { height: 10 * e.lineHeightsPx.body } })),
                Le = i.memo(xe);
            var Be = s(726499);
            function De({ children: e, entries: t, getScroller: s, withFasterCellEntrance: n = !1 }) {
                const [r, o] = i.useState(null),
                    a = t.findIndex((e) => e.entryId === r),
                    l = (function (e) {
                        const [t, s] = i.useState(0),
                            [n, r] = i.useState(Oe);
                        if (e > t) {
                            s(e);
                            Math.max(Me - Ue * e, 0);
                            r(Math.min(Oe));
                        } else 0 === e && 0 !== t && s(0);
                        return n;
                    })(a);
                i.useEffect(() => {
                    const e = setTimeout(
                        () => {
                            if (t.length)
                                if (!s()?.isAtNewest() || -1 === a || Fe) o(t[0].entryId);
                                else if (a > 0) {
                                    let e = a - 1;
                                    for (; e > 0; --e) {
                                        const s = t[e].position;
                                        if ("number" == typeof s) {
                                            let n = e - 1;
                                            for (; n >= 0; --n) {
                                                const i = t[n].position;
                                                if ("number" == typeof i && s !== i) break;
                                                e = n;
                                            }
                                            break;
                                        }
                                    }
                                    o(t[e].entryId);
                                }
                        },
                        a > 0 ? (n ? 500 : l) : 0,
                    );
                    return () => {
                        clearTimeout(e);
                    };
                }, [t.length, a, t, l, s, n]);
                const c = -1 === a ? 0 : a;
                if (Fe) return e(t);
                return e(t.slice(c));
            }
            let Ne,
                Fe = !1;
            Be.Z.addEventListener("change", (e) => {
                "active" === e &&
                    ((Fe = !0),
                    clearTimeout(Ne),
                    (Ne = setTimeout(() => {
                        Fe = !1;
                    }, 5e3)));
            });
            const Me = 8e3,
                Oe = 1e3,
                Ue = 200;
            const He = (e) => e.entryId,
                Ve = (e) => e.sortIndex;
            const We = new Map(),
                ze = new Map(),
                Ge = (e) => {
                    switch (e) {
                        case v.ZP.Tweet:
                            return h.ZP.isDesktopOS() ? 250 : 400;
                        case v.no.ModuleImpressionPlaceholder:
                            return 0;
                        default:
                            return 100;
                    }
                };
            function qe({ analytics: e, renderEmptyState: t, richScribeAction: s }) {
                return (
                    i.useEffect(() => {
                        s({ ...e.contextualScribeNamespace, action: "empty" }, e.contextualScribeData);
                    }, [s, e]),
                    t()
                );
            }
            class $e extends i.PureComponent {
                constructor(e, t) {
                    var s;
                    super(e, t),
                        (this._promotedTweetDistanceMap = new Map()),
                        (this._getScroller = () => this._scroller),
                        (this._renderScroller = (e) => {
                            const { anchoring: t, handlerRegistry: s, header: n, isInitialFocusEntry: r, module: o, nearStartProximityRatio: a, scroller: l, timelineId: c, withKeyboardShortcuts: h, withoutHeadroom: d } = this.props,
                                p = this._getInitialFocusedEntry(e, r),
                                u = p && m.X(He(p));
                            return i.createElement(l, { anchoring: t, assumedItemHeight: Ge, cacheKey: c, footer: this._renderFooter(), header: n, identityFunction: He, initialAnchor: u, items: e, nearStartProximityRatio: a, onAtEnd: this._handleAtBottom, onAtStart: this._handleAtTop, onItemsRendered: this._handleItemsRendered, onKeyboardRefresh: this._handleKeyboardRefresh, onNearEnd: this._handleNearBottom, onNearStart: this._handleNearTop, onPositionRestored: this._handlePositionRestored, ref: this._setScroller, renderer: this._getCellRenderer(s, o), sortIndexFunction: Ve, withKeyboardShortcuts: h, withoutHeadroom: d });
                        }),
                        (this._isAtNewest = () => this._scroller?.isAtNewest() ?? !0),
                        (this._scrollViewportToTopAndUpdate = () => {
                            const { viewport: e } = this.props;
                            e.scrollToTop();
                        }),
                        (this._renderFooter = () => {
                            const { bottomFetchStatus: e, footer: t = null, onBottomRetry: s, showLoadingFooter: n } = this.props;
                            return n ? i.createElement(i.Fragment, null, i.createElement(Le, { bottomFetchStatus: e, onBottomRetry: s, withEndOfContent: !t }), t) : t;
                        }),
                        (this._refreshControlWrapper = (e) => {
                            const { canRefresh: t, onRefresh: s, refreshControl: n, topFetchStatus: r } = this.props;
                            return n ? i.createElement(n, { canRefresh: t, isRefreshing: r === f.Z.LOADING, onRefresh: s }, e) : e;
                        }),
                        (this._getCellRenderer = (0, a.Z)((e, t) => {
                            let s;
                            const n = { module: t, renderEntry: (e) => s(e) };
                            return (
                                (s = (t, s) => {
                                    const i = e.getHandler(t),
                                        r = e.getDisplayType(t) || void 0;
                                    return i && i.render ? i.render(t, n, s, r) : null;
                                }),
                                s
                            );
                        })),
                        (this._getInitialFocusedEntry = (0, a.Z)((e, t) => t && e.find(t))),
                        (this._createEntryIndex = (0, a.Z)((e) => (0, l.Z)(e, (e) => e.entryId))),
                        (this._handleBeforeWindowUnload = () => {
                            this._flushLingerScribes();
                        }),
                        (this._handleKeyboardRefresh = () => {
                            this.refreshOrGoTop(!0);
                        }),
                        (this.scrollToTop = (e) => {
                            if (this._scroller) {
                                const { applyNewTweetsBarInstructions: t, jotaiStore: s } = this.props;
                                t && t(), p.ZM.setVisibilityPercent(s, 100), this._scroller && this._scroller.scrollToNewest(e);
                            }
                        }),
                        (this._handleAtBottom = this._proximityHandler(() => {
                            this.props.onAtBottom && this.props.onAtBottom();
                        })),
                        (this._handleNearBottom = this._proximityHandler(() => {
                            this.props.onNearBottom();
                        })),
                        (this._handleNearTop = this._proximityHandler(() => {
                            const { onNearTop: e } = this.props;
                            e();
                        })),
                        (this._handleAtTop = this._proximityHandler(() => {
                            const { analytics: e, onAtTop: t, removeAlert: s, richScribeAction: n } = this.props;
                            s?.(), t?.();
                            n({ ...e.contextualScribeNamespace, component: "stream", element: "top", action: "show" });
                        })),
                        (this._handleItemsRendered = this._proximityHandler(({ positions: e, viewport: t }) => {
                            if ((this.props.onEntriesRendered && this.props.onEntriesRendered(), !this._impressionTrackerRefactorEnabled)) {
                                const e = this._impressionTrackerV2?.dequeueLingerEvents() || [],
                                    t = this._impressionTrackerV2?.dequeueImpressionEvents() || [];
                                (e.length || t.length) && this._scribeStreamEvents({ impressionEvents: t, lingerEvents: e });
                            }
                        })),
                        (this._scribeImpressionEvents = (e) => {
                            const t = this._getEntryIndex(),
                                s = this.context.featureSwitches?.isTrue("responsive_web_element_size_impression_scribe_enabled"),
                                n = (0, c.Z)(e, (e) => {
                                    const n = t[e.id];
                                    return null != n ? { entry: n, relativeElementHeight: s ? e.relativeElementHeight : void 0 } : null;
                                });
                            this._scribeNewEntries(n);
                        }),
                        (this._handleOnEventsTriggeredCallback = ({ impressionEvents: e, lingerEvents: t }) => {
                            this._scribeStreamEvents({ impressionEvents: e, lingerEvents: t });
                        }),
                        (this._scribeStreamEvents = ({ impressionEvents: e, lingerEvents: t }) => {
                            (window.requestIdleCallback ? window.requestIdleCallback : window.requestAnimationFrame)(() => {
                                this._scribeLingerEvents(t), this._scribeImpressionEvents(e);
                            });
                        }),
                        (this._handleOnLingerEvent = (e) => {
                            const { applyReactionInstructions: t } = this.props,
                                s = this._getEntryIndex()[e];
                            s && t({ entry: s, triggerName: y.K.ON_LINGER });
                        }),
                        (this._handlePositionRestored = () => {
                            this._positionedRestored = !0;
                        }),
                        (this._scheduleNewEntriesScribing =
                            ((s = (e) => {
                                const { analytics: t, richScribeAction: s } = this.props,
                                    n = this._buildStreamScribeData(e);
                                n.length > 0 && s({ ...t.contextualScribeNamespace, component: "stream", action: "results" }, { items: n });
                            }),
                            window.requestIdleCallback
                                ? (e) => {
                                      const t = window.requestIdleCallback(() => s(e));
                                      return () => window.cancelIdleCallback(t);
                                  }
                                : window.requestAnimationFrame
                                  ? (e) => {
                                        const t = window.requestAnimationFrame(() => s(e));
                                        return () => window.cancelAnimationFrame(t);
                                    }
                                  : () => o.Z)),
                        (this._scribeLingerEvents = (e) => {
                            const { lingerCache: t, timelineId: s } = this.props;
                            if (0 === e.length) return;
                            if (!t.has(s)) {
                                const e = new Set();
                                t.set(s, e);
                            }
                            const n = t.get(s);
                            if (!n) return [];
                            const { handlerRegistry: i } = this.props,
                                r = { component: "stream", element: "linger", action: "results" },
                                o = this._getEntryIndex(),
                                a = [],
                                l = [];
                            if (
                                (e.forEach(({ end: e, id: t, start: s }) => {
                                    const r = o[t];
                                    if (!r) return;
                                    if (n.has(t) || i.getNeedsLoad(r)) return;
                                    n.add(t);
                                    const c = this._getScribeDataItem(i, r);
                                    let h;
                                    if (r.type === v.ZP.Tweet) {
                                        h = r.content.id;
                                    } else if (r.type === v.ZP.PagedCarouselItem) {
                                        const e = r;
                                        h = e.content.content && e.content.content.pagedCarouselFeedbackItem && e.content.content.pagedCarouselFeedbackItem.content.tweet.id;
                                    }
                                    if (c) {
                                        const t = { ...c, impression_details: { visibility_start: s, visibility_end: e } };
                                        h && (t.first_impression = !this._lingerIds?.has(h) && !this._lingerIdsLatest?.has(h) && !this._lingerIdsSubscribed?.has(h)), a.push(t);
                                    }
                                    h && l.push(h);
                                }),
                                a.length > 0)
                            ) {
                                const { analytics: e, richScribeAction: t } = this.props;
                                t({ ...e.contextualScribeNamespace, ...r }, { items: a });
                            }
                            l.length > 0 && this._storeLingerIds(l);
                        }),
                        (this._setScroller = (e) => {
                            this._scroller = e;
                        }),
                        (this._newImpressionTrackerV2 = () => (window.IntersectionObserver ? new R({ onEventsTriggeredCallback: this._impressionTrackerRefactorEnabled ? this._handleOnEventsTriggeredCallback : void 0, root: this.props.viewport.getViewport(), rootMargin: this.props.viewport.getRootMargin(), reactivityCallback: this._handleOnLingerEvent }) : void 0)),
                        performance?.mark?.(`${e.perfKey}-initial-render-start`),
                        (this._impressionTrackerRefactorEnabled = t.featureSwitches.isTrue("responsive_web_impression_tracker_refactor_enabled")),
                        (this._streamScribeCancelCallbacks = []),
                        (this._impressionTrackerV2 = this._newImpressionTrackerV2()),
                        (this._lingerIds = t.viewerUserId ? (0, g.T)(t.viewerUserId).get() : void 0),
                        (this._lingerIdsLatest = t.viewerUserId ? (0, g.T)(t.viewerUserId).getLatest() : void 0),
                        (this._lingerIdsSubscribed = t.viewerUserId ? (0, g.T)(t.viewerUserId).getSubscribed() : void 0);
                }
                UNSAFE_componentWillReceiveProps(e) {
                    this.props.timelineId !== e.timelineId && (this._flushLingerScribes(), this._impressionTrackerV2 && this._impressionTrackerV2.disconnect(), (this._impressionTrackerV2 = this._newImpressionTrackerV2()));
                }
                componentDidMount() {
                    const { onRef: e, perfKey: t } = this.props;
                    performance?.measure?.(`${t}-initial-render`, `${t}-initial-render-start`), this._initialize(), window.addEventListener("beforelogout", this._handleBeforeWindowUnload), window.addEventListener("beforeunload", this._handleBeforeWindowUnload), e && e(this);
                }
                componentWillUnmount() {
                    const { onRef: e } = this.props;
                    this._flushLingerScribes(), this._cancelStreamScribeCallbacks(), window.removeEventListener("beforelogout", this._handleBeforeWindowUnload), window.removeEventListener("beforeunload", this._handleBeforeWindowUnload), e && e(void 0), this._impressionTrackerV2?.disconnect();
                }
                componentDidUpdate(e) {
                    const { entries: t, handlerRegistry: s, onRef: n, timelineId: i } = this.props;
                    i !== e.timelineId ? this._initialize() : (t === e.entries && s === e.handlerRegistry) || this._initialize(), n && n !== e.onRef && n(this);
                }
                render() {
                    const { entries: e, renderEmptyState: t, timelineId: s, title: n, withProgressiveRender: r } = this.props,
                        { featureSwitches: o, verifiedCrawlerName: a } = this.context,
                        l = this._shouldRenderEmptyState(e) ? i.createElement(qe, { analytics: this.props.analytics, key: `empty-${s}`, renderEmptyState: t, richScribeAction: this.props.richScribeAction }) : i.createElement(P, { impressionTracker: this._impressionTrackerV2 }, i.createElement(d.Z, { title: n }, this._renderActiveCover(), this._renderPill(), r ? i.createElement(De, { entries: e, getScroller: this._getScroller, key: s, withFasterCellEntrance: o.isTrue("gryphon_faster_cell_entrance") }, this._renderScroller) : this._renderScroller(e)));
                    return this._refreshControlWrapper(l);
                }
                _renderPill() {
                    const { alert: e, applyNewTweetsBarInstructions: t, clientSideAlert: s, newTweetsPill: n, removeAlert: r, withNewTweetsPill: o } = this.props,
                        a = n;
                    return o ? i.createElement(a.Configure, { alert: e ?? s, applyNewTweetsBarInstructions: t, isAtNewest: this._isAtNewest, removeAlert: r, scrollToTop: this._scrollViewportToTopAndUpdate }) : null;
                }
                _renderActiveCover() {
                    const { activeCover: e, clearActiveCover: t, processCallback: s } = this.props,
                        n = e && e.cover,
                        r = this.context.featureSwitches.isTrue("responsive_web_timeline_cover_killswitch_enabled");
                    return e && n && !r ? i.createElement(Te, { activeCover: e, clearActiveCover: t, processCallback: s }) : null;
                }
                _shouldRenderEmptyState(e) {
                    const { activeCover: t, hasPendingHandlers: s, initialFetchStatus: n } = this.props,
                        i = n === f.Z.LOADED,
                        r = 0 === e.length;
                    return i && r && !t && !s;
                }
                _getEntryIndex() {
                    return this._createEntryIndex(this.props.entries);
                }
                _initialize() {
                    this._createPromotedTweetDistanceMap();
                }
                _createPromotedTweetDistanceMap() {
                    const { entries: e } = this.props;
                    this._promotedTweetDistanceMap = new Map();
                    let t = null;
                    e.forEach((e) => {
                        const s = e.content?.promotedMetadata && e.type === v.ZP.Tweet;
                        s && null !== t && this._promotedTweetDistanceMap.set(e.entryId, t), s ? (t = 0) : null !== t && (e.shouldCountTowardsAdSpacing || e.content?.dismissedEntry?.shouldCountTowardsAdSpacing) && (t += 1);
                    });
                }
                _flushLingerScribes() {
                    const e = this._impressionTrackerV2?.flushLingerEvents() || [];
                    this._scribeLingerEvents(e);
                }
                refreshOrGoTop(e) {
                    this._scroller && !this._scroller.isAtNewest() ? this.scrollToTop(e) : this.props.onRefresh();
                }
                scrollAndFocusNewest() {
                    this._scroller && this._scroller.scrollToNewest(!0);
                }
                _proximityHandler(e) {
                    return (t) => {
                        this._positionedRestored && e(t);
                    };
                }
                _scribeNewEntries(e) {
                    const t = this._scheduleNewEntriesScribing(e);
                    for (this._streamScribeCancelCallbacks.push(t); this._streamScribeCancelCallbacks.length >= 20; ) this._streamScribeCancelCallbacks.shift();
                }
                _buildStreamScribeData(e) {
                    const { handlerRegistry: t, impressionCache: s, timelineId: n } = this.props;
                    if (!s.has(n)) {
                        const e = new Set();
                        s.set(n, e);
                    }
                    const i = s.get(n);
                    return i
                        ? e.reduce((e, s, n) => {
                              const { entry: r, relativeElementHeight: o } = s,
                                  { entryId: a } = r;
                              if (!i.has(a) && !t.getNeedsLoad(r)) {
                                  i.add(a);
                                  const s = this._getScribeDataItem(t, r);
                                  if (s) {
                                      const t = !!r.content?.promotedMetadata,
                                          n = this._promotedTweetDistanceMap.get(a);
                                      t && n && (s.tweet_count = n), null != o && (s.percent_screen_height_100k = o), e.push(s);
                                  }
                              }
                              return e;
                          }, [])
                        : [];
                }
                _storeLingerIds(e) {
                    const { timelineId: t } = this.props;
                    t === w.BY && this._lingerIds ? this._lingerIds.addNewTweets(e) : t === w.Fy && this._lingerIdsLatest ? this._lingerIdsLatest.addNewTweets(e) : t === E.S && this._lingerIdsSubscribed && this._lingerIdsSubscribed.addNewTweets(e);
                }
                _getScribeDataItem(e, t) {
                    const s = e.getHandler(t);
                    if (s) return s.getScribeDataItem(t);
                }
                _cancelStreamScribeCallbacks() {
                    this._streamScribeCancelCallbacks.forEach((e) => e());
                }
            }
            ($e.contextType = C.rC), ($e.defaultProps = { impressionCache: We, lingerCache: ze, onBottomRetry: o.Z, onNearBottom: o.Z, onNearTop: o.Z, onRefresh: o.Z, refreshControl: S.Z, scroller: u.C, newTweetsPill: _.Z, withoutHeadroom: !1, showLoadingFooter: !0, withKeyboardShortcuts: !0 });
            const je = (0, T.Z)(
                (0, b.Z)(
                    ((Ke = $e),
                    i.forwardRef((e, t) => {
                        const s = (0, r.oR)();
                        return i.createElement(Ke, (0, n.Z)({}, e, { jotaiStore: s }));
                    })),
                ),
            );
            var Ke;
        },
        3196: (e, t, s) => {
            s.d(t, { Z: () => S });
            s(136728);
            var n = s(202784),
                i = s(99107),
                r = s(688715),
                o = s(154003),
                a = s(111677),
                l = s.n(a),
                c = s(261214),
                h = s(462775),
                d = s(182495),
                p = s(601798),
                u = s(500002),
                m = s(443781),
                _ = s(406837),
                g = s(950570),
                v = s(911318);
            const f = l().ib65b1c6,
                y = l().f55cebb8,
                b = l().dcc304d6,
                w = l().g61ed8a4,
                E = { clientId: v.fp, scope: "name email", usePopup: !0 };
            class C extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this.state = { isScriptLoaded: !1 }),
                        (this._is3rdPartyIntegrationDisabled = (0, h.L)("responsive_web_3rd_party_category_sign_in_with_apple", this.context.featureSwitches)),
                        (this._isSSORedirectEnabled = this.context.featureSwitches.isTrue("responsive_web_sso_redirect_enabled") || this.context.featureSwitches.isTrue("responsive_web_repeat_profile_visits_notifications_device_follow_only_version_enabled") || this.context.featureSwitches.isTrue("responsive_web_repeat_profile_visits_notifications_enabled")),
                        (this._getButtonLabel = () => {
                            const { buttonState: e } = this.props;
                            switch (e) {
                                case d.yX.LogIn:
                                    return y;
                                case d.yX.ContinueWith:
                                    return b;
                                default:
                                    return f;
                            }
                        }),
                        (this._initAppleIDAuth = () => {
                            const { AppleID: e } = window,
                                { fetchSsoInitToken: t } = this.props;
                            e &&
                                t(i.Bm.Apple).then(({ state: t }) => {
                                    e.auth.init({ ...E, redirectURI: (0, r.ju)("https://x.com"), state: t });
                                });
                        }),
                        (this._handleOnPress = () => {
                            const { AppleID: e } = window,
                                { analytics: t, buttonState: s, history: n, loginReturnPath: r, personalizationSettings: o, shouldPropagateP13nSettings: a, ssoInitTokens: l } = this.props,
                                { allowCookieUse: c, allowDeviceAccess: h, allowPartnerships: d, allowPersonalization: p } = o || {};
                            t.scribe({ component: "apple_sign_in", element: s, action: "click" }),
                                e.auth
                                    .signIn()
                                    .then((e) => {
                                        t.scribe({ component: "apple_sign_in", element: s, action: "success" });
                                        const o = e.user && e.user.name && e.user.name.firstName && e.user.name.lastName;
                                        n.push({ pathname: "/i/flow/single_sign_on", state: { input: { cookie_personalization_settings: a && { allow_cookie_use: !!c, allow_device_personalization: !!h, allow_partnerships: !!d, allow_ads_personalization: !!p }, requested_variant: JSON.stringify({ display_name: o && `${e.user.name.firstName} ${e.user.name.lastName}`, id_token: e.authorization.id_token, provider: i.Bm.Apple, state: l[i.Bm.Apple], redirect_uri: this._isSSORedirectEnabled ? r : void 0 }) } } });
                                    })
                                    .catch((e) => {
                                        const { addToast: n } = this.props,
                                            { error: i } = e;
                                        i !== v.IN ? (t.scribe({ component: "apple_sign_in", element: s, action: "failure" }), n({ text: w })) : t.scribe({ component: "apple_sign_in", element: "auth", action: "user_closed_popup" });
                                    });
                        });
                }
                componentDidMount() {
                    this._is3rdPartyIntegrationDisabled ||
                        p.Z.inject({
                            callback: () => {
                                this._initAppleIDAuth(), this.setState({ isScriptLoaded: !0 });
                            },
                            scriptId: "signInWithAppleJsLibrary",
                            src: "https://appleid.cdn-apple.com/appleauth/static/jsapi/appleid/1/en_US/appleid.auth.js",
                        });
                }
                render() {
                    const { buttonSize: e, style: t } = this.props,
                        { isScriptLoaded: s } = this.state,
                        i = this._getButtonLabel();
                    return this._is3rdPartyIntegrationDisabled ? null : n.createElement(o.ZP, { backgroundColor: "white", borderColor: "gray200", children: i, color: "alwaysBaseGray1100", disabled: !s, fontWeight: "normal", icon: n.createElement(c.default, null), onPress: this._handleOnPress, size: e, style: t, testID: g.Z.apple });
                }
            }
            (C.contextType = m.rC), (C.defaultProps = { buttonSize: "xLarge", buttonState: "signup" });
            const S = (0, u.ZP)((0, _.Z)(C));
        },
        951790: (e, t, s) => {
            s.d(t, { Z: () => o });
            var n = s(323265);
            const i = {
                    setLocation(e) {
                        document.location = e;
                    },
                    getAppStoreURLs(e = "rwoiah") {
                        const t = r(e),
                            s = [t.android, t.ios],
                            n = s.find((e) => e.matches());
                        return n ? [n] : s;
                    },
                    getiOSAppStoreLink(e) {
                        const t = r(e);
                        return t.ios.matches() ? t.ios.url : t.ios.webUrl;
                    },
                    getAndroidAppStoreLink(e) {
                        const t = r(e);
                        return t.android.matches() ? t.android.url : t.android.webUrl;
                    },
                    goToAppStore(e) {
                        const t = this.getAppStoreURLs(e);
                        t[0] && i.setLocation(t[0].url);
                    },
                    openApp(e = "twitter://timeline") {
                        i.setLocation(e);
                    },
                },
                r = (e = "rwoiah") => ({ android: { platform: "android", matches: () => n.ZP.isAndroid(), url: `market://details?id=com.twitter.android&referrer=utm_source%3Drweb%26utm_medium%3D${e}`, webUrl: `https://play.google.com/store/apps/details?id=com.twitter.android&referrer=utm_source%3Drweb%26utm_medium%3D${e}` }, ios: { platform: "ios", matches: () => n.ZP.isIOS(), url: `https://apps.apple.com/app/apple-store/id333903271?pt=9551&ct=${e}&mt=8`, webUrl: `https://apps.apple.com/app/apple-store/id333903271?pt=9551&ct=${e}&mt=8` } }),
                o = i;
        },
        23679: (e, t, s) => {
            s.d(t, { K: () => n });
            const n = Object.freeze({ ON_LINGER: "onLinger", ON_IS_RELEVANT: "onIsRelevant", ON_SHOW_MORE: "onShowMore", ON_LIKE: "onLike", ON_FOLLOW: "onFollow" });
        },
        885015: (e, t, s) => {
            s.d(t, { Z: () => c });
            var n = s(807896),
                i = s(202784),
                r = s(325686),
                o = s(392237);
            class a extends i.Component {
                render() {
                    const { children: e, style: t, withGutter: s, ...o } = this.props,
                        a = i.Children.map(e, (e) => e && i.cloneElement(e, { style: [e.props.style, l.column, s && l.withGutterColumn] }));
                    return i.createElement(r.Z, (0, n.Z)({ style: [t, l.root, s && l.withGutter] }, o), a);
                }
            }
            a.defaultProps = { withGutter: !1 };
            const l = o.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = a;
        },
        149202: (e, t, s) => {
            s.d(t, { Z: () => y });
            var n = s(202784),
                i = s(928316),
                r = s(196001),
                o = s(900664),
                a = s(325686),
                l = s(111677),
                c = s.n(l),
                h = s(668430),
                d = s(323265),
                p = s(908579),
                u = s(167630),
                m = s(392237),
                _ = s(401339);
            const g = c().gdd51574;
            class v extends n.Component {
                constructor(...e) {
                    super(...e),
                        (this._unmounted = !1),
                        (this._inPTR = !1),
                        (this._pullHeight = 0),
                        (this.state = { pull: 0, pullDistance: 0 }),
                        (this._onScroll = () => window.requestAnimationFrame(() => this._handleScroll())),
                        (this._getListViewRef = (e) => {
                            this._listView = e;
                        }),
                        (this._getPullViewRef = (e) => {
                            this._pullView = e;
                        }),
                        (this._enablePTRIfNeeded = () => {
                            if (!this._unmounted) {
                                this._getScrollTop() <= 0 && this._enablePTR();
                            }
                        }),
                        (this._handleTouchStart = (e) => {
                            this._pullInfo.startY = e.touches[0].clientY;
                        }),
                        (this._handleTouchMove = (e) => {
                            if ("number" != typeof this._pullInfo.startY || e.defaultPrevented) return;
                            const t = e.touches[0].clientY,
                                s = Math.round(0.4 * (t - this._pullInfo.startY));
                            (s <= 0 && 0 === this.state.pullDistance) || (s > 0 && e.cancelable && e.preventDefault(), this._updatePullPosition(s), this._updatePullState(this.state.pullDistance, s), this.setState({ pullDistance: s }));
                        }),
                        (this._handleTouchEnd = (e) => {
                            const { moved: t } = this._pullInfo;
                            t && this.state.pullDistance > this._pullHeight ? (e.cancelable && e.preventDefault(), this._release()) : this._resetPullInfo();
                        });
                }
                render() {
                    const { children: e, isRefreshing: t } = this.props,
                        { pullDistance: s } = this.state,
                        i = t && s ? n.createElement(u.Z, null) : n.createElement(h.default, { "aria-label": g, style: [f.refreshArrow, 1 === this.state.pull ? f.refreshArrowReady : null] }),
                        o = { pullDistance: (0, r.ST)(s, r.um.stiff) };
                    return n.createElement(
                        a.Z,
                        { style: f.root },
                        n.createElement(r.y_, { style: o }, ({ pullDistance: t }) => n.createElement(a.Z, { ref: this._getListViewRef, style: !!t && { transform: [{ translate3d: `0,${t}px,0` }] } }, n.createElement(a.Z, { ref: this._getPullViewRef, style: f.ptrCell }, i), n.createElement(a.Z, { style: t ? f.children : void 0 }, e))),
                    );
                }
                componentDidMount() {
                    (this._unmounted = !1), this._pullView && (this._pullHeight = this._pullView.getBoundingClientRect().height), this._listView instanceof HTMLElement && (this._listParent = this._listView);
                    const e = this._getScrollParent();
                    e && e.addEventListener("scroll", this._onScroll), this._resetPullInfo(), window.requestAnimationFrame(this._enablePTRIfNeeded);
                }
                componentWillUnmount() {
                    this._unmounted = !0;
                    const e = this._getScrollParent();
                    e && e.removeEventListener("scroll", this._onScroll);
                }
                UNSAFE_componentWillReceiveProps(e) {
                    this.props.isRefreshing && !e.isRefreshing && (this._disablePTR(), this._resetPullInfo(), window.requestAnimationFrame(this._enablePTRIfNeeded));
                }
                _getScrollParent() {
                    return (this._scrollParent = this._scrollParent || (0, p.r)(i.findDOMNode(this))), this._scrollParent;
                }
                _getScrollTop() {
                    const e = this._getScrollParent();
                    return e ? (0, p.c)(e) : 0;
                }
                _enablePTR() {
                    if (!this._inPTR) {
                        this._inPTR = !0;
                        const e = this._listParent;
                        e && (e.addEventListener("touchend", this._handleTouchEnd), e.addEventListener("touchmove", this._handleTouchMove), e.addEventListener("touchstart", this._handleTouchStart, { passive: !0 }), (e.style.overflow = "visible"));
                    }
                }
                _disablePTR() {
                    if (((this._pullInfo.moved = !1), this._inPTR)) {
                        (this._inPTR = !1), this.setState({ pull: 0, pullDistance: 0 });
                        const e = this._listParent;
                        e && (e.removeEventListener("touchend", this._handleTouchEnd), e.removeEventListener("touchmove", this._handleTouchMove), e.removeEventListener("touchstart", this._handleTouchStart));
                    }
                }
                _updatePullState(e, t) {
                    const { lastPull: s } = this._pullInfo;
                    if (t > this._pullHeight) return 0 === this.state.pull && (d.ZP.isFirefox() || o.Z.vibrate(5), this.setState({ pull: 1 })), void (this._pullInfo.lastPull = t);
                    e > 0 && e < s && 1 === this.state.pull && this.setState({ pull: 0 });
                }
                _updatePullPosition(e) {
                    (this._pullInfo.moved = !0), this.setState({ pullDistance: e });
                }
                _release() {
                    this.state.pullDistance > this._pullHeight && (this._disablePTR(), this.props.isRefreshing || this.props.onRefresh(), this.setState({ pullDistance: this._pullHeight })), this.setState({ pull: 0 });
                }
                _handleScroll() {
                    this._getScrollTop() <= 0 ? this._enablePTR() : this._disablePTR();
                }
                _resetPullInfo() {
                    (this._pullInfo = { lastPull: 0, moved: !1, startY: null }), this.setState({ pullDistance: 0 });
                }
            }
            const f = m.default.create((e) => ({ root: { display: "block", position: "relative" }, ptrCell: { alignItems: "center", borderBottomWidth: "1px", borderBottomStyle: "solid", borderBottomColor: e.colors.borderColor, height: "4rem", justifyContent: "center", start: "0", position: "absolute", end: "0", top: "-4rem" }, children: { transform: [{ translate3d: "0, 0, 0" }] }, refreshArrow: { height: "2rem", color: e.colors.gray300, transitionProperty: "transform", transitionDuration: "250ms" }, refreshArrowReady: { transform: [{ rotate: "180deg" }] } })),
                y = function ({ canRefresh: e = !0, children: t, isRefreshing: s = !1, onRefresh: i }) {
                    return _.Z.isTouchSupported() && e
                        ? n.createElement(v, {
                              canRefresh: e,
                              children: t,
                              isRefreshing: s,
                              onRefresh: () => {
                                  i();
                              },
                          })
                        : Array.isArray(t)
                          ? n.createElement(n.Fragment, null, t)
                          : t;
                };
        },
        401339: (e, t, s) => {
            s.d(t, { Z: () => r });
            const n = {},
                i = ["touchend", "touchmove", "touchstart"];
            const r = {
                isTouchSupported: () =>
                    i.some(
                        (e) =>
                            !!(function (e, t) {
                                if (void 0 !== n[e]) return n[e];
                                const s = document.createElement(t || "div"),
                                    i = `on${e}`;
                                let r = i in s;
                                return r || (s.setAttribute(i, "return;"), (r = "function" == typeof s[i])), (n[e] = r), r;
                            })(e),
                    ),
            };
        },
        900664: (e, t, s) => {
            s.d(t, { Z: () => i });
            var n = (e) => {
                "vibrate" in window.navigator && window.navigator.vibrate(e);
            };
            const i = {
                cancel() {
                    n(0);
                },
                vibrate(e) {
                    void 0 === e && (e = 400), n(e);
                },
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TimelineRenderer.f47125aa.js.map
