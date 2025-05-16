"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.TimelineRenderer"],
    {
        229333: (e, t, s) => {
            s.d(t, { Z: () => d });
            var r = s(202784),
                n = s(466999),
                i = s(325686),
                o = s(392237),
                a = s(332920);
            const l = s.n(a)().e5b0063d;
            let c = 0;
            class h extends r.Component {
                constructor() {
                    super(), (this._listDomId = `accessible-list-${c}`), (c += 1);
                }
                render() {
                    const { children: e, title: t } = this.props,
                        s = l({ title: t });
                    return r.createElement(i.Z, { "aria-labelledby": this._listDomId, role: "region" }, r.createElement(n.Z, { "aria-level": 1, id: this._listDomId, role: "heading", style: o.default.visuallyHidden }, t), r.createElement(i.Z, { "aria-label": s }, e));
                }
            }
            const d = h;
        },
        414939: (e, t, s) => {
            s.d(t, { Z: () => l });
            var r = s(202784),
                n = s(325686),
                i = s(392237);
            class o extends r.Component {
                shouldComponentUpdate() {
                    return !1;
                }
                render() {
                    return r.createElement(n.Z, { style: a.root });
                }
            }
            const a = i.default.create((e) => ({ root: { height: 10 * e.lineHeightsPx.body } })),
                l = o;
        },
        46705: (e, t, s) => {
            s.d(t, { X: () => r, g: () => n });
            const r = (e) => ({ id: e, distanceToViewportTop: 0 }),
                n = (e) => ({ id: e, distanceToViewportBottom: 0 });
        },
        144256: (e, t, s) => {
            s.d(t, { Z: () => l });
            var r = s(807896),
                n = s(202784),
                i = s(149202),
                o = s(725516);
            class a extends n.PureComponent {
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
                    return n.createElement(i.Z, (0, r.Z)({}, o, { canRefresh: t, onRefresh: this._handleRefresh }));
                }
            }
            const l = (0, o.Z)(a);
        },
        22371: (e, t, s) => {
            s.r(t), s.d(t, { EmptyState: () => ze, TimelineRenderer: () => $e, default: () => Ke });
            var r = s(807896),
                n = (s(136728), s(202784)),
                i = s(400752),
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
                T = s(144256),
                S = s(993547),
                I = s(666536);
            const R = { threshold: [0.01, 0.5] };
            const k = class {
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
                                this._lingerCandidates.forEach((s, r) => {
                                    e - s >= 500 && t.push({ id: r, start: s, end: e });
                                }),
                                t
                            );
                        }),
                        (this._processIntersectionEntries = (e) => {
                            const t = Date.now();
                            e.forEach((e) => {
                                const s = Object.entries(this._itemsUnderObservation).find(([t, s]) => s === e.target);
                                if (s) {
                                    const i = s[0],
                                        { boundingClientRect: o, intersectionRatio: a, rootBounds: l } = e;
                                    if (a >= 0.01) {
                                        const e = null != o && null != l;
                                        this._createImpressionCandidate(i, e ? ((r = o.height), (n = l.height), Math.floor((r / n) * 1e5)) : void 0);
                                    }
                                    a >= 0.5 ? (this._createLingerCandidate(i, t), this._createReactivityCandidate(i, t)) : (this._transitionCandidateToLingerEvent(i, t), this._removeReactivityCandidate(i));
                                }
                                var r, n;
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
                    const t = { ...R, ...e };
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
            const x = ({ children: e, impressionTracker: t }) => {
                const s = n.useMemo(() => ({ impressionTracker: t }), [t]);
                return t ? n.createElement(Z.Z.Provider, { value: s }, e) : e;
            };
            var P = s(614983),
                A = s.n(P),
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
                    for (var t = arguments.length, s = new Array(t > 1 ? t - 1 : 0), r = 1; r < t; r++) s[r - 1] = arguments[r];
                    var n = this._eventCallbacks[e];
                    null != n &&
                        Array.isArray(n) &&
                        n.map((e) => {
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
                                var r = s._eventCallbacks[e].filter((e) => e.toString() !== t.toString());
                                s._eventCallbacks[e] = r;
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
                H = s(529356),
                U = s(392237),
                V = s(520913),
                W = s(946409),
                G = s(947992);
            const q = Object.freeze({ Icon: "Icon", IconSmall: "IconSmall", FullWidth: "FullWidth" });
            var z = s(500002),
                $ = s(686689),
                K = s(668214),
                j = s(601576);
            const Y = (0, K.Z)()
                .propsFromActions(() => ({ addToast: j.fz }))
                .withAnalytics();
            class X extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._getGraphicProps = (0, a.Z)((e, t) => {
                            const s = e ? ({ style: t }) => n.createElement(F.Z, { style: t }, n.createElement(M.Z, { "aria-label": "", aspectMode: O.Z.exact(e.width / e.height), image: e })) : V.default;
                            let r,
                                i = "illustration";
                            return e && t !== q.IconSmall ? t === q.FullWidth && (e.width > e.height ? (r = J.fullWidthNoBleedTop) : (i = "illustrationFullWidth")) : (i = "icon"), { graphic: s, graphicDisplayMode: i, graphicStyle: r };
                        })),
                        (this._scribeAction = (e, t) => {
                            const { analytics: s } = this.props,
                                { action: r, component: n, element: i } = t || {};
                            s.scribe({ action: r || e, component: n || "cover", element: i });
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
                        (this._handleCtaClick = ({ callbacks: e, clientEventInfo: t, ctaBehavior: s }, r) => {
                            const { addToast: n, history: i, processCallback: o } = this.props;
                            if ((this.props.onClose(), this._scribeAction("click", { element: r, ...t }), s.dismiss)) {
                                const { dismiss: e } = s;
                                e && e.feedbackMessage && n({ text: e.feedbackMessage.text });
                            }
                            if (s.navigate) {
                                const { navigate: e } = s,
                                    t = e && (0, W.s9)(e.url);
                                t && (t.external ? N.openURL(t.pathname) : i.push(t.pathname));
                            }
                            e && e.forEach((e) => o(e));
                        });
                }
                componentDidMount() {
                    this.props.onImpression && this.props.onImpression();
                }
                render() {
                    const { details: e, dismissInfo: t, displayType: s, image: r, imageDisplayType: i, primaryCta: a, primaryText: l, secondaryCta: c, secondaryText: h, type: d } = this.props,
                        p = n.createElement($.Z, { entities: l.entities, text: l.text }),
                        u = h ? n.createElement($.Z, { entities: h.entities, text: h.text }) : null,
                        { graphic: m, graphicDisplayMode: _, graphicStyle: g } = this._getGraphicProps(r, i);
                    if (d === G.Z.Full) {
                        const r = e ? n.createElement($.Z, { entities: e.entities, text: e.text }) : null;
                        return n.createElement(H.Z, { actionLabel: a.text, footer: r, graphic: m, graphicDisplayMode: _, graphicStyle: g, headline: p, isFullHeightOnMobile: !t && "CenterCover" !== s, onAction: this._handlePrimaryCtaClick, onClose: this._handleDismiss, onTertiaryAction: this._handleSecondaryCtaClick, subtext: u, tertiaryActionLabel: c && c.text, withCloseButton: !!t });
                    }
                    return n.createElement(H.Z, { actionLabel: a.text, graphic: m, graphicDisplayMode: i === q.FullWidth ? _ : "none", graphicStyle: g, headline: p, onAction: this._handlePrimaryCtaClick, onClose: o.Z, onSecondaryAction: this._handleSecondaryCtaClick, secondaryActionLabel: c && c.text, subtext: u, withCloseButton: !1 });
                }
            }
            X.defaultProps = { imageDisplayType: q.Icon };
            const J = U.default.create((e) => ({ fullWidthNoBleedTop: { width: "100%", height: "auto" } })),
                Q = (0, z.ZP)(Y(X));
            var ee = s(370006),
                te = s(731708),
                se = s(308158),
                re = s(154003),
                ne = s(885015),
                ie = s(58881),
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
            class ge extends n.PureComponent {
                constructor(...e) {
                    super(...e),
                        (this._scribeAction = (e, t) => {
                            const { analytics: s } = this.props,
                                { action: r, component: n, element: i } = t || {};
                            s.scribe({ action: r || e, component: n || "cover", element: i });
                        }),
                        (this._handleButtonPress =
                            ({ clientEventInfo: e, ctaBehavior: t }) =>
                            () => {
                                const { history: s } = this.props;
                                if ((this.props.onClose(), this._scribeAction("click", { ...e }), t.navigate)) {
                                    const { navigate: e } = t,
                                        r = e && (0, W.s9)(e.url);
                                    r && (r.external ? N.openURL(r.pathname) : s.push(r.pathname));
                                }
                            }),
                        (this._handleButtonRefUpdate = (e) => {
                            e && !this._wasFocused && (e.focus(), (this._wasFocused = !0));
                        }),
                        (this._renderCloseButton = () => n.createElement(ee.Z, { backButtonType: "close", onClick: this._handleDismiss })),
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
                    return n.createElement(F.Z, null, e ? n.createElement(F.Z, { style: be.imageContainer }, n.createElement(M.Z, { "aria-label": "", aspectMode: O.Z.exact(e.width / e.height), image: e })) : null, n.createElement(F.Z, { style: be.headingContainer }, n.createElement(te.ZP, { align: "left", size: "title3", style: be.headline, weight: "heavy" }, n.createElement(se.Z, { entities: t.entities, text: t.text })), s ? n.createElement(te.ZP, { align: "left", color: "gray700", weight: "normal" }, n.createElement(se.Z, { entities: s.entities, text: s.text })) : null));
                }
                _renderButton({ isSwitchToAppButton: e = !1, valueData: t }) {
                    const s = t && t.coverCta ? (e ? this._handleSwitchToApp({ clientEventInfo: t.coverCta.clientEventInfo }) : this._handleButtonPress(t.coverCta)) : void 0;
                    return n.createElement(re.ZP, { onPress: s, ref: this._handleButtonRefUpdate, size: "medium", style: [ve.button, ve.ssoButton], type: "brandFilled" }, t?.coverCta?.text);
                }
                _renderAppleSsoButton() {
                    const e = he.yX.LogIn;
                    return n.createElement(ue.Z, { buttonSize: "medium", buttonState: e, style: [ve.button, ve.ssoButton] });
                }
                _renderGoogleSsoButton() {
                    const e = he.yX.LogIn;
                    return n.createElement(me.Z, { buttonSize: "medium", buttonState: e, displayType: _e.qv.Button, style: [ve.button, ve.ssoButton] });
                }
                _renderSeparator(e) {
                    return e ? n.createElement(ne.Z, { style: we.separatorContainer, withGutter: !0 }, n.createElement(F.Z, { style: we.separatorColumn }, n.createElement(F.Z, { style: we.separator })), n.createElement(te.ZP, { size: "headline2", style: we.separatorText }, n.createElement(se.Z, { entities: e.entities, text: e.text })), n.createElement(F.Z, { style: we.separatorColumn }, n.createElement(F.Z, { style: we.separator }))) : n.createElement(F.Z, { style: we.separator, testID: "separator" });
                }
                _returnStaticText(e) {
                    const {
                        detailText: { entities: t, text: s },
                    } = e;
                    return n.createElement(F.Z, { style: Ee.container }, n.createElement(te.ZP, { align: "left", weight: "normal" }, n.createElement(se.Z, { entities: t, onEntityClick: this._handleRichTextEntityClick({ clientEventInfo: e.clientEventInfo }), text: s })));
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
                    return n.createElement(
                        F.Z,
                        { style: { marginBottom: U.default.theme.spaces.space20 } },
                        e.map((e, t) => n.createElement(F.Z, { key: t }, this._renderSettingValue(e))),
                    );
                }
                _renderFooter({ branchInfo: e, clientEventInfo: t, icon: s, primaryText: r }) {
                    const { entities: i, text: o } = r,
                        a = e?.enable_branch,
                        l = ie.Z.generate({ backgroundColor: "transparent", color: U.default.theme.colors.primary });
                    return n.createElement(oe.Z, { interactive: !!a, onClick: a ? this._handleSwitchToApp({ clientEventInfo: t }) : void 0, style: ye.footer }, ({ isFocused: e, isHovered: r, isPressed: c }) => {
                        const h = [l.transitionStyle, r && l.hoverStyle, c && l.pressedStyle, e && l.focusedStyle];
                        return n.createElement(F.Z, { style: h }, n.createElement(te.ZP, { align: "left", size: "body", weight: "bold" }, s && this._renderIcon(s), n.createElement(se.Z, { entities: i, onEntityClick: a ? void 0 : this._handleRichTextEntityClick({ clientEventInfo: t }), style: { marginStart: U.default.theme.spaces.space12 }, text: o })));
                    });
                }
                _renderIcon(e) {
                    if (e === pe.Z.LOGO) return n.createElement(V.default, { style: { color: U.default.theme.colors.primary } });
                }
                _renderAppBarCloseButton(e) {
                    return e ? n.createElement(ae.Z, { leftControl: this._renderCloseButton(), withBackground: !0 }) : null;
                }
                render() {
                    const { dismissInfo: e, displayType: t, footer: s, header: r, onClose: i, settings: o } = this.props,
                        a = !!e,
                        l = !e && "HalfCover" !== t;
                    return n.createElement(le.ZP, null, ({ windowHeight: e, windowWidth: t }) => {
                        const c = t > U.default.theme.breakpoints.medium,
                            h = c;
                        return n.createElement(ce.Z, { enableMaskForDismiss: !0, onMaskClick: a ? i : void 0, style: c && fe.roundedBorders, type: l ? "full" : "bottom", withMask: !0 }, n.createElement(F.Z, { style: [fe.root, h && fe.withBottomPadding, !a && (h ? fe.appBarReplacementSpacer : fe.appBarReplacementSpacerThin)] }, this._renderAppBarCloseButton(a), n.createElement(F.Z, { style: fe.contentContainer }, n.createElement(F.Z, { style: fe.centeredContent }, n.createElement(F.Z, { style: [fe.content, !!s && fe.contentWithFooter] }, r && this._renderHeading(r), o && this._renderSettings(o))))), s && this._renderFooter(s));
                    });
                }
            }
            ge.contextType = C.rC;
            const ve = U.default.create((e) => ({ button: { width: "100%", margin: "auto", marginVertical: e.spaces.space12 }, ssoButton: { width: _e.fI, height: e.spaces.space40 } })),
                fe = U.default.create((e) => ({ root: { backgroundColor: e.colors.cellBackground, flexGrow: 1, overflow: "auto", paddingBottom: e.spaces.space12 }, roundedBorders: { borderRadius: e.borderRadii.xLarge }, withBottomPadding: { paddingBottom: e.spaces.space48 }, appBarReplacementSpacer: { paddingTop: e.spaces.space48 }, appBarReplacementSpacerThin: { paddingTop: e.spaces.space20 }, contentWithFooter: { marginBottom: 0 }, content: { maxWidth: `calc((${e.spaces.space80} * 5) - ${e.spaces.space36})`, margin: e.spaces.space32, paddingHorizontal: e.spaces.space32 }, contentContainer: { alignItems: "center", flexGrow: 1 }, centeredContent: { width: "100%", flexGrow: 1, alignItems: "center", justifyContent: "center" } })),
                ye = U.default.create((e) => ({ footer: { width: "100%", maxWidth: `calc((${e.spaces.space80} * 5)`, paddingVertical: e.spaces.space48, borderTopStyle: "solid", borderTopColor: e.colors.borderColor, borderTopWidth: e.borderWidths.small, alignItems: "center" } })),
                be = U.default.create((e) => ({ headingContainer: { marginVertical: e.spaces.space20 }, content: { marginBottom: e.spaces.space32, justifyContent: "center" }, headline: { marginBottom: e.spaces.space8 }, imageContainer: { marginHorizontal: "auto", height: "initial", width: "initial" } })),
                we = U.default.create((e) => ({ separatorContainer: { width: "100%" }, separatorColumn: { flex: 1, justifyContent: "center" }, separator: { width: "100%", height: e.spaces.space1, backgroundColor: e.colors.gray200, marginTop: e.spaces.space8, marginBottom: e.spaces.space8 }, separatorText: { "flex-basis": "auto" } })),
                Ee = U.default.create((e) => ({ container: { marginTop: e.spaces.space20 } })),
                Ce = (0, z.ZP)((0, b.Z)(ge)),
                Te = { component: "cover", action: "impression" },
                Se = ({ activeCover: e, clearActiveCover: t, processCallback: s }) => {
                    const r = ((e) => {
                            let t = { ...Te };
                            return e && (e.component && (t = { ...t, component: e.component }), e.element && (t = { ...t, element: e.element }), e.action && (t = { ...t, action: e.action })), t;
                        })(e.clientEventInfo),
                        i = (0, b.z)(),
                        o = () => {
                            const {
                                cover: { impressionCallbacks: t },
                            } = e;
                            t && t.forEach((e) => s(e)), i.scribe({ ...r });
                        };
                    switch (e.type) {
                        case "full":
                            return (a = e.cover), n.createElement(Q, { details: a.details || void 0, dismissInfo: a.dismissInfo, displayType: a.displayType, image: a.image, imageDisplayType: a.imageDisplayType || void 0, onClose: t, onImpression: o, primaryCta: a.primaryCoverCta, primaryText: a.primaryText, processCallback: s, secondaryCta: a.secondaryCoverCta, secondaryText: a.secondaryText, type: "full" });
                        case "half":
                            return (function (e) {
                                const r = "CenterCover" === e.displayType ? "full" : "half";
                                return n.createElement(Q, { displayType: e.displayType, image: e.coverImage ? e.coverImage.image : void 0, imageDisplayType: e.coverImage ? e.coverImage.imageDisplayType : void 0, onClose: t, onImpression: o, primaryCta: e.primaryCoverCta, primaryText: e.primaryText, processCallback: s, secondaryCta: e.secondaryCoverCta, secondaryText: e.secondaryText, type: r });
                            })(e.cover);
                        case "settings_list":
                            return (function (e) {
                                return n.createElement(Ce, { dismissInfo: e.dismissInfo, displayType: e.displayType, footer: e.footer, header: e.header, impressionCallbacks: e.impressionCallbacks, onClose: t, onImpression: o, processCallback: s, settings: e.settings });
                            })(e.cover);
                        default:
                            return null;
                    }
                    var a;
                };
            var Ie = s(459643),
                Re = s(143778),
                ke = s(414939),
                Ze = s(290402);
            const xe = (0, Ie.Z)(n.createElement(ke.Z, null)),
                Pe = ({ bottomFetchStatus: e, onBottomRetry: t, withEndOfContent: s }) => n.createElement(F.Z, { style: s && Ae.footer }, n.createElement(Ze.Z, { fetchStatus: e, onRequestRetry: t, render: s ? xe : Re.Z })),
                Ae = U.default.create((e) => ({ footer: { height: 10 * e.lineHeightsPx.body } })),
                Le = n.memo(Pe);
            var Be = s(726499);
            function De({ children: e, entries: t, getScroller: s, withFasterCellEntrance: r = !1 }) {
                const [i, o] = n.useState(null),
                    a = t.findIndex((e) => e.entryId === i),
                    l = (function (e) {
                        const [t, s] = n.useState(0),
                            [r, i] = n.useState(Oe);
                        if (e > t) {
                            s(e);
                            Math.max(Me - He * e, 0);
                            i(Math.min(Oe));
                        } else 0 === e && 0 !== t && s(0);
                        return r;
                    })(a);
                n.useEffect(() => {
                    const e = setTimeout(
                        () => {
                            if (t.length)
                                if (!s()?.isAtNewest() || -1 === a || Fe) o(t[0].entryId);
                                else if (a > 0) {
                                    let e = a - 1;
                                    for (; e > 0; --e) {
                                        const s = t[e].position;
                                        if ("number" == typeof s) {
                                            let r = e - 1;
                                            for (; r >= 0; --r) {
                                                const n = t[r].position;
                                                if ("number" == typeof n && s !== n) break;
                                                e = r;
                                            }
                                            break;
                                        }
                                    }
                                    o(t[e].entryId);
                                }
                        },
                        a > 0 ? (r ? 500 : l) : 0,
                    );
                    return () => {
                        clearTimeout(e);
                    };
                }, [t.length, a, t, l, s, r]);
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
                He = 200;
            const Ue = (e) => e.entryId,
                Ve = (e) => e.sortIndex;
            const We = new Map(),
                Ge = new Map(),
                qe = (e) => {
                    switch (e) {
                        case v.ZP.Tweet:
                            return h.ZP.isDesktopOS() ? 250 : 400;
                        case v.no.ModuleImpressionPlaceholder:
                            return 0;
                        default:
                            return 100;
                    }
                };
            function ze({ analytics: e, renderEmptyState: t, richScribeAction: s }) {
                return (
                    n.useEffect(() => {
                        s({ ...e.contextualScribeNamespace, action: "empty" }, e.contextualScribeData);
                    }, [s, e]),
                    t()
                );
            }
            class $e extends n.PureComponent {
                constructor(e, t) {
                    var s;
                    super(e, t),
                        (this._promotedTweetDistanceMap = new Map()),
                        (this._getScroller = () => this._scroller),
                        (this._renderScroller = (e) => {
                            const { anchoring: t, handlerRegistry: s, header: r, isInitialFocusEntry: i, module: o, nearStartProximityRatio: a, scroller: l, timelineId: c, withKeyboardShortcuts: h, withoutHeadroom: d } = this.props,
                                p = this._getInitialFocusedEntry(e, i),
                                u = p && m.X(Ue(p));
                            return n.createElement(l, { anchoring: t, assumedItemHeight: qe, cacheKey: c, footer: this._renderFooter(), header: r, identityFunction: Ue, initialAnchor: u, items: e, nearStartProximityRatio: a, onAtEnd: this._handleAtBottom, onAtStart: this._handleAtTop, onItemsRendered: this._handleItemsRendered, onKeyboardRefresh: this._handleKeyboardRefresh, onNearEnd: this._handleNearBottom, onNearStart: this._handleNearTop, onPositionRestored: this._handlePositionRestored, ref: this._setScroller, renderer: this._getCellRenderer(s, o), sortIndexFunction: Ve, withKeyboardShortcuts: h, withoutHeadroom: d });
                        }),
                        (this._isAtNewest = () => this._scroller?.isAtNewest() ?? !0),
                        (this._scrollViewportToTopAndUpdate = () => {
                            const { viewport: e } = this.props;
                            e.scrollToTop();
                        }),
                        (this._renderFooter = () => {
                            const { bottomFetchStatus: e, footer: t = null, onBottomRetry: s, showLoadingFooter: r } = this.props;
                            return r ? n.createElement(n.Fragment, null, n.createElement(Le, { bottomFetchStatus: e, onBottomRetry: s, withEndOfContent: !t }), t) : t;
                        }),
                        (this._refreshControlWrapper = (e) => {
                            const { canRefresh: t, onRefresh: s, refreshControl: r, topFetchStatus: i } = this.props;
                            return r ? n.createElement(r, { canRefresh: t, isRefreshing: i === f.Z.LOADING, onRefresh: s }, e) : e;
                        }),
                        (this._getCellRenderer = (0, a.Z)((e, t) => {
                            let s;
                            const r = { module: t, renderEntry: (e) => s(e) };
                            return (
                                (s = (t, s) => {
                                    const n = e.getHandler(t),
                                        i = e.getDisplayType(t) || void 0;
                                    return n && n.render ? n.render(t, r, s, i) : null;
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
                            const { analytics: e, onAtTop: t, removeAlert: s, richScribeAction: r } = this.props;
                            s?.(), t?.();
                            r({ ...e.contextualScribeNamespace, component: "stream", element: "top", action: "show" });
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
                                r = (0, c.Z)(e, (e) => {
                                    const r = t[e.id];
                                    return null != r ? { entry: r, relativeElementHeight: s ? e.relativeElementHeight : void 0 } : null;
                                });
                            this._scribeNewEntries(r);
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
                                    r = this._buildStreamScribeData(e);
                                r.length > 0 && s({ ...t.contextualScribeNamespace, component: "stream", action: "results" }, { items: r });
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
                            const r = t.get(s);
                            if (!r) return [];
                            const { handlerRegistry: n } = this.props,
                                i = { component: "stream", element: "linger", action: "results" },
                                o = this._getEntryIndex(),
                                a = [],
                                l = [];
                            if (
                                (e.forEach(({ end: e, id: t, start: s }) => {
                                    const i = o[t];
                                    if (!i) return;
                                    if (r.has(t) || n.getNeedsLoad(i)) return;
                                    r.add(t);
                                    const c = this._getScribeDataItem(n, i);
                                    let h;
                                    if (i.type === v.ZP.Tweet) {
                                        h = i.content.id;
                                    } else if (i.type === v.ZP.PagedCarouselItem) {
                                        const e = i;
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
                                t({ ...e.contextualScribeNamespace, ...i }, { items: a });
                            }
                            l.length > 0 && this._storeLingerIds(l);
                        }),
                        (this._setScroller = (e) => {
                            this._scroller = e;
                        }),
                        (this._newImpressionTrackerV2 = () => (window.IntersectionObserver ? new k({ onEventsTriggeredCallback: this._impressionTrackerRefactorEnabled ? this._handleOnEventsTriggeredCallback : void 0, root: this.props.viewport.getViewport(), rootMargin: this.props.viewport.getRootMargin(), reactivityCallback: this._handleOnLingerEvent }) : void 0)),
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
                    const { entries: t, handlerRegistry: s, onRef: r, timelineId: n } = this.props;
                    n !== e.timelineId ? this._initialize() : (t === e.entries && s === e.handlerRegistry) || this._initialize(), r && r !== e.onRef && r(this);
                }
                render() {
                    const { entries: e, renderEmptyState: t, timelineId: s, title: r, withProgressiveRender: i } = this.props,
                        { featureSwitches: o, verifiedCrawlerName: a } = this.context,
                        l = this._shouldRenderEmptyState(e) ? n.createElement(ze, { analytics: this.props.analytics, key: `empty-${s}`, renderEmptyState: t, richScribeAction: this.props.richScribeAction }) : n.createElement(x, { impressionTracker: this._impressionTrackerV2 }, n.createElement(d.Z, { title: r }, this._renderActiveCover(), this._renderPill(), i ? n.createElement(De, { entries: e, getScroller: this._getScroller, key: s, withFasterCellEntrance: o.isTrue("gryphon_faster_cell_entrance") }, this._renderScroller) : this._renderScroller(e)));
                    return this._refreshControlWrapper(l);
                }
                _renderPill() {
                    const { alert: e, applyNewTweetsBarInstructions: t, clientSideAlert: s, newTweetsPill: r, removeAlert: i, withNewTweetsPill: o } = this.props,
                        a = r;
                    return o ? n.createElement(a.Configure, { alert: e ?? s, applyNewTweetsBarInstructions: t, isAtNewest: this._isAtNewest, removeAlert: i, scrollToTop: this._scrollViewportToTopAndUpdate }) : null;
                }
                _renderActiveCover() {
                    const { activeCover: e, clearActiveCover: t, processCallback: s } = this.props,
                        r = e && e.cover,
                        i = this.context.featureSwitches.isTrue("responsive_web_timeline_cover_killswitch_enabled");
                    return e && r && !i ? n.createElement(Se, { activeCover: e, clearActiveCover: t, processCallback: s }) : null;
                }
                _shouldRenderEmptyState(e) {
                    const { activeCover: t, hasPendingHandlers: s, initialFetchStatus: r } = this.props,
                        n = r === f.Z.LOADED,
                        i = 0 === e.length;
                    return n && i && !t && !s;
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
                    const { handlerRegistry: t, impressionCache: s, timelineId: r } = this.props;
                    if (!s.has(r)) {
                        const e = new Set();
                        s.set(r, e);
                    }
                    const n = s.get(r);
                    return n
                        ? e.reduce((e, s, r) => {
                              const { entry: i, relativeElementHeight: o } = s,
                                  { entryId: a } = i;
                              if (!n.has(a) && !t.getNeedsLoad(i)) {
                                  n.add(a);
                                  const s = this._getScribeDataItem(t, i);
                                  if (s) {
                                      const t = !!i.content?.promotedMetadata,
                                          r = this._promotedTweetDistanceMap.get(a);
                                      t && r && (s.tweet_count = r), null != o && (s.percent_screen_height_100k = o), e.push(s);
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
            ($e.contextType = C.rC), ($e.defaultProps = { impressionCache: We, lingerCache: Ge, onBottomRetry: o.Z, onNearBottom: o.Z, onNearTop: o.Z, onRefresh: o.Z, refreshControl: T.Z, scroller: u.C, newTweetsPill: _.Z, withoutHeadroom: !1, showLoadingFooter: !0, withKeyboardShortcuts: !0 });
            const Ke = (0, S.Z)(
                (0, b.Z)(
                    ((je = $e),
                    n.forwardRef((e, t) => {
                        const s = (0, i.oR)();
                        return n.createElement(je, (0, r.Z)({}, e, { jotaiStore: s }));
                    })),
                ),
            );
            var je;
        },
        951790: (e, t, s) => {
            s.d(t, { Z: () => o });
            var r = s(323265);
            const n = {
                    setLocation(e) {
                        document.location = e;
                    },
                    getAppStoreURLs(e = "rwoiah") {
                        const t = i(e),
                            s = [t.android, t.ios],
                            r = s.find((e) => e.matches());
                        return r ? [r] : s;
                    },
                    getiOSAppStoreLink(e) {
                        const t = i(e);
                        return t.ios.matches() ? t.ios.url : t.ios.webUrl;
                    },
                    getAndroidAppStoreLink(e) {
                        const t = i(e);
                        return t.android.matches() ? t.android.url : t.android.webUrl;
                    },
                    goToAppStore(e) {
                        const t = this.getAppStoreURLs(e);
                        t[0] && n.setLocation(t[0].url);
                    },
                    openApp(e = "twitter://timeline") {
                        n.setLocation(e);
                    },
                },
                i = (e = "rwoiah") => ({ android: { platform: "android", matches: () => r.ZP.isAndroid(), url: `market://details?id=com.twitter.android&referrer=utm_source%3Drweb%26utm_medium%3D${e}`, webUrl: `https://play.google.com/store/apps/details?id=com.twitter.android&referrer=utm_source%3Drweb%26utm_medium%3D${e}` }, ios: { platform: "ios", matches: () => r.ZP.isIOS(), url: `https://apps.apple.com/app/apple-store/id333903271?pt=9551&ct=${e}&mt=8`, webUrl: `https://apps.apple.com/app/apple-store/id333903271?pt=9551&ct=${e}&mt=8` } }),
                o = n;
        },
        23679: (e, t, s) => {
            s.d(t, { K: () => r });
            const r = Object.freeze({ ON_LINGER: "onLinger", ON_IS_RELEVANT: "onIsRelevant", ON_SHOW_MORE: "onShowMore", ON_LIKE: "onLike", ON_FOLLOW: "onFollow" });
        },
        885015: (e, t, s) => {
            s.d(t, { Z: () => c });
            var r = s(807896),
                n = s(202784),
                i = s(325686),
                o = s(392237);
            class a extends n.Component {
                render() {
                    const { children: e, style: t, withGutter: s, ...o } = this.props,
                        a = n.Children.map(e, (e) => e && n.cloneElement(e, { style: [e.props.style, l.column, s && l.withGutterColumn] }));
                    return n.createElement(i.Z, (0, r.Z)({ style: [t, l.root, s && l.withGutter] }, o), a);
                }
            }
            a.defaultProps = { withGutter: !1 };
            const l = o.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = a;
        },
        149202: (e, t, s) => {
            s.d(t, { Z: () => y });
            var r = s(202784),
                n = s(928316),
                i = s(196001),
                o = s(900664),
                a = s(325686),
                l = s(332920),
                c = s.n(l),
                h = s(668430),
                d = s(323265),
                p = s(908579),
                u = s(167630),
                m = s(392237),
                _ = s(393058);
            const g = c().gdd51574;
            class v extends r.Component {
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
                        n = t && s ? r.createElement(u.Z, null) : r.createElement(h.default, { "aria-label": g, style: [f.refreshArrow, 1 === this.state.pull ? f.refreshArrowReady : null] }),
                        o = { pullDistance: (0, i.ST)(s, i.um.stiff) };
                    return r.createElement(
                        a.Z,
                        { style: f.root },
                        r.createElement(i.y_, { style: o }, ({ pullDistance: t }) => r.createElement(a.Z, { ref: this._getListViewRef, style: !!t && { transform: [{ translate3d: `0,${t}px,0` }] } }, r.createElement(a.Z, { ref: this._getPullViewRef, style: f.ptrCell }, n), r.createElement(a.Z, { style: t ? f.children : void 0 }, e))),
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
                    return (this._scrollParent = this._scrollParent || (0, p.r)(n.findDOMNode(this))), this._scrollParent;
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
                y = function ({ canRefresh: e = !0, children: t, isRefreshing: s = !1, onRefresh: n }) {
                    return _.Z.isTouchSupported() && e
                        ? r.createElement(v, {
                              canRefresh: e,
                              children: t,
                              isRefreshing: s,
                              onRefresh: () => {
                                  n();
                              },
                          })
                        : Array.isArray(t)
                          ? r.createElement(r.Fragment, null, t)
                          : t;
                };
        },
        393058: (e, t, s) => {
            s.d(t, { Z: () => i });
            const r = {},
                n = ["touchend", "touchmove", "touchstart"];
            const i = {
                isTouchSupported: () =>
                    n.some(
                        (e) =>
                            !!(function (e, t) {
                                if (void 0 !== r[e]) return r[e];
                                const s = document.createElement(t || "div"),
                                    n = `on${e}`;
                                let i = n in s;
                                return i || (s.setAttribute(n, "return;"), (i = "function" == typeof s[n])), (r[e] = i), i;
                            })(e),
                    ),
            };
        },
        900664: (e, t, s) => {
            s.d(t, { Z: () => n });
            var r = (e) => {
                "vibrate" in window.navigator && window.navigator.vibrate(e);
            };
            const n = {
                cancel() {
                    r(0);
                },
                vibrate(e) {
                    void 0 === e && (e = 400), r(e);
                },
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.TimelineRenderer.61f6d4fa.js.map
