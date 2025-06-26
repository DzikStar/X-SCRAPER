"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.SettingsProfessionalProfileMobileAppSpotlight"],
    {
        625661: (e, t, n) => {
            n.d(t, { ZP: () => u });
            var o = n(202784),
                a = n(614983),
                r = n.n(a),
                i = n(325686),
                l = n(370006),
                s = n(786998),
                c = n(929028),
                d = n(386802);
            function p(e, t, n) {
                return e || (!t && n ? "fixed" : void 0);
            }
            class u extends o.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            r()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: n, fixed: a, hideBackButton: r, isFullWidth: i, isLarge: c, leftControl: d, middleControl: u, position: h, rightControl: m, secondaryBar: b, style: g, subtitle: f, title: y, titleDomId: k, titleIconCell: C, titleIconCellSize: E, withBackground: v, withWideContainer: S } = this.props,
                        { isModal: Z } = this.context,
                        B = r ? d : o.createElement(l.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        P = (function (e, t, n) {
                            return e && !(t && n);
                        })(!!v, Z, !!b);
                    return o.createElement(o.Fragment, null, o.createElement(s.Z, { centerTitle: t, centeredLogo: n, isFullWidth: i, isLarge: c, leftControl: B, middleControl: u, position: p(h, Z, a), rightControl: m, style: g, subtitle: f, title: y, titleDomId: k, titleIconCell: C, titleIconCellSize: E, withBackground: P, withWideContainer: S }), b || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        n = c.Z.getBackgroundStyles();
                    return t ? o.createElement(i.Z, { style: !!e && n }, this._renderContent()) : this._renderContent();
                }
            }
            (u.contextType = d.Z), (u.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        652904: (e, t, n) => {
            n.d(t, { Z: () => d });
            var o = n(202784),
                a = n(500002),
                r = n(668214),
                i = n(997174),
                l = n(118823);
            const s = (0, r.Z)()
                .propsFromActions(() => ({ updateLocation: l.YF, updateTweetDetailNav: i.NH }))
                .withAnalytics();
            class c extends o.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: n, search: o },
                            locationKey: a,
                        } = this.props,
                        {
                            location: { pathname: r, search: i },
                            locationKey: l,
                        } = e;
                    let s = !1;
                    t.pathname !== n ? (this._isInBackground = !0) : this._isInBackground && t.pathname === n && ((this._isInBackground = !1), (s = !0));
                    const c = a || l;
                    ((c && a !== l) || (!c && n !== r) || o !== i || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: n, updateTweetDetailNav: o } = e;
                    t.scribePageImpression(), n(t.contextualScribeNamespace, t.contextualScribeData), o(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, a.ZP)(s(c));
        },
        202407: (e, t, n) => {
            n.r(t), n.d(t, { default: () => I });
            var o = n(807896),
                a = n(202784),
                r = n(325686),
                i = n(107267),
                l = n(154003),
                s = n(779610),
                c = n(392237),
                d = n(111677),
                p = n.n(d),
                u = n(509875),
                h = n(980407),
                m = n(800536),
                b = n(855488),
                g = n(731708),
                f = n(521219);
            const y = p().b772cd66,
                k = p().g4098f78,
                C = p().b949cdc6;
            function E(e) {
                const [t, n] = a.useState(e.values.url),
                    o = a.useMemo(() => t && (0, f.Z)(t), [t]),
                    { helpLink: i, inputLabel: s, onCancel: c, onChange: d, title: p } = e;
                function u() {
                    o || d(t);
                }
                return a.createElement(
                    h.Z,
                    { "aria-hidden": !1, backButtonType: "back", onBackClick: c, rightControl: a.createElement(l.ZP, { disabled: !t || !!o, onPress: u }, y), title: p },
                    a.createElement(
                        r.Z,
                        { style: v.container },
                        a.createElement(b.Z, {
                            autoFocus: !0,
                            errorText: o,
                            invalid: !!o,
                            label: s,
                            maxLength: f.c,
                            name: "url",
                            onChange: function (e) {
                                n(e.target.value);
                            },
                            onSubmitEditing: u,
                            value: t,
                        }),
                        a.createElement(g.ZP, { link: i, style: v.text, weight: "bold", withUnderline: !0 }, k),
                        a.createElement(g.ZP, { align: "center", color: "red500", style: v.removeApp }, C),
                    ),
                );
            }
            const v = c.default.create((e) => ({ container: { paddingBottom: e.spaces.space64 }, removeApp: { padding: e.spaces.space16, paddingTop: e.spaces.space40 }, text: { paddingStart: e.spaces.space16, paddingEnd: e.spaces.space16 } })),
                S = p().b91d1394,
                Z = p().i2209530,
                B = Object.freeze({ IOS: "ios", ANDROID: "android" }),
                P = [
                    { key: B.IOS, label: p().aab2fae0, placeholder: p().af40a8e0, component: E, constants: { title: p().d3cd1160, helpLink: "", inputLabel: p().f2124008 } },
                    { key: B.ANDROID, label: p().f7d1a8e0, placeholder: p().af40a8e0, component: E, constants: { title: p().dc0d9d6a, helpLink: "", inputLabel: p().dd1605f0 } },
                ],
                w = Object.freeze({ APPLE_APP_STORE: 1, GOOGLE_PLAY_STORE: 2 });
            function I(e) {
                const t = (0, i.useHistory)(),
                    [n, c] = a.useState(),
                    d = { isDirty: !1, hasAllRequiredValues: !1, values: { appStoreListings: [] } },
                    p = a.useCallback(() => {
                        t.goBack({ backLocation: m.V5 });
                    }, [t]);
                function b() {}
                function g(e, t = !1) {
                    let n;
                    if (e.key === B.IOS) {
                        const e = d?.values?.appStoreListings?.find((e) => e.appStore === w.APPLE_APP_STORE);
                        n = e?.url;
                    } else if (e.key === B.ANDROID) {
                        const e = d?.values?.appStoreListings?.find((e) => e.appStore === w.GOOGLE_PLAY_STORE);
                        n = e?.url;
                    }
                    return !n && t ? e.placeholder : n;
                }
                function f() {
                    c(void 0);
                }
                if (n) {
                    const e = n.component,
                        t = { url: g(n) };
                    return a.createElement(e, (0, o.Z)({ onCancel: f, onChange: f, values: t }, n.constants));
                }
                return a.createElement(
                    h.Z,
                    {
                        "aria-hidden": !1,
                        backButtonType: "back",
                        onBackClick: p,
                        rightControl: (function () {
                            const e = !d.isDirty || !d.hasAllRequiredValues || false;
                            return a.createElement(l.ZP, { disabled: e, onPress: b }, Z);
                        })(),
                        title: S,
                    },
                    a.createElement(
                        r.Z,
                        { style: L.container },
                        P.map((e) => {
                            return a.createElement(s.Z, {
                                description: g(e, !0),
                                key: e.key,
                                label: e.label,
                                onPress:
                                    ((t = e),
                                    (e) => {
                                        e.preventDefault(), c(t);
                                    }),
                                thumbnail: a.createElement(u.default, { style: L.addIcon }),
                                thumbnailSize: "medium",
                            });
                            var t;
                        }),
                    ),
                );
            }
            const L = c.default.create((e) => ({ container: { paddingBottom: e.spaces.space64 }, addIcon: { color: e.colors.gray700, backgroundColor: e.colors.gray50, borderRadius: "50%", padding: e.spaces.space8 } }));
        },
        521219: (e, t, n) => {
            n.d(t, { Z: () => l, c: () => a });
            var o = n(111677);
            const a = 385,
                r = n.n(o)().b679ff6a,
                i = /[(http(s)?)://(www.)?a-zA-Z0-9@:%._+~#=]{2,385}\.[a-z]{2,10}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/;
            function l(e) {
                return e.length > a ? r : i.test(e) ? void 0 : r;
            }
        },
        779610: (e, t, n) => {
            n.d(t, { Z: () => d });
            var o = n(202784),
                a = n(325686),
                r = n(191796),
                i = n(58399),
                l = n(731708),
                s = n(952428),
                c = n(392237);
            const d = (e) => {
                    const { decoration: t, description: n, disabled: d = !1, isActive: u = !1, label: h, link: m, onPress: b, paddingHorizontal: g, renderRightContent: f, role: y = "tab", styleOverride: k, testID: C = "pivot", thumbnail: E, thumbnailSize: v, withoutArrow: S = !1 } = e,
                        Z = [p.thumbnailContainer, "medium" === v && p.thumbnailContainerMedium],
                        B = "string" == typeof h ? o.createElement(l.ZP, null, h) : h,
                        P = "object" == typeof m && m.external && !m.openInSameFrame,
                        w = n ? ("string" == typeof n ? o.createElement(l.ZP, { color: "gray700", size: "subtext2", testID: `${C}-description` }, n) : n) : null,
                        I = o.useMemo(() => ("space0" === g ? { paddingHorizontal: 0 } : { paddingHorizontal: g ? c.default.theme.spaces[g] : c.default.theme.componentDimensions.gutterHorizontal }), [g]);
                    return o.createElement(s.Z, { "aria-selected": "tab" === y ? u : null, disabled: d, link: d ? void 0 : m, onPress: b, role: y, style: [p.root, I, d && p.disabled, k], testID: C, withInteractiveStyling: !!m || !!b }, o.createElement(a.Z, { style: p.contentContainer }, E ? o.createElement(a.Z, { style: Z }, E) : null, o.createElement(a.Z, { style: p.content }, B, w), f ? f() : null, (!m && !b) || d || S ? null : P ? o.createElement(r.default, { style: p.icon }) : o.createElement(i.default, { style: p.icon })), t);
                },
                p = c.default.create((e) => ({ root: { justifyContent: "space-between", minHeight: `calc(${c.default.theme.lineHeights.headline1} + 2 * ${e.componentDimensions.gutterVertical})`, paddingVertical: e.componentDimensions.gutterVertical }, disabled: { opacity: 0.5 }, contentContainer: { alignItems: "center", flexDirection: "row", flexGrow: 1 }, content: { flexGrow: 1, flexShrink: 1 }, icon: { color: e.colors.gray700, paddingStart: e.spaces.space12, flexShrink: 0 }, thumbnailContainer: { alignItems: "center", justifyContent: "center", height: e.spaces.space48, width: e.spaces.space48, marginEnd: e.spaces.space16 }, thumbnailContainerMedium: { height: e.spaces.space32, width: e.spaces.space32 } }));
        },
        183806: (e, t, n) => {
            n.d(t, { Z: () => o });
            const o = n(392237).default.create((e) => ({ border: { borderRadius: e.borderRadii.small, borderWidth: e.borderWidths.small, borderColor: e.colors.gray200 }, focusedBorderValid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.primary}`, borderColor: e.colors.primary }, focusedBorderInvalid: { boxShadow: `0 0 0 ${e.borderWidths.small} ${e.colors.red500}` }, invalidBorderColor: { borderColor: e.colors.red500 }, invalidColor: { color: e.colors.red500 }, validColor: { color: e.colors.primary }, validIconColor: { color: e.colors.green500 }, disabled: { cursor: "default", opacity: 0.5, backgroundColor: e.colors.gray50, borderColor: e.colors.gray50 } }));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.SettingsProfessionalProfileMobileAppSpotlight.1ba6157a.js.map
