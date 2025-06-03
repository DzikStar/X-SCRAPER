(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["bundle.AccountAutomation"],
    {
        625661: (e, t, o) => {
            "use strict";
            o.d(t, { ZP: () => p });
            var r = o(202784),
                n = o(614983),
                s = o.n(n),
                a = o(325686),
                i = o(370006),
                l = o(786998),
                c = o(929028),
                d = o(386802);
            function u(e, t, o) {
                return e || (!t && o ? "fixed" : void 0);
            }
            class p extends r.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleBackClick = () => {
                            const { history: e, onBackClick: t } = this.props;
                            s()(t || e, "Either onBackClick must be specified, or history should be supplied"), t ? t(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: e, history: t } = this.props;
                            t && t.goBack({ backLocation: e });
                        });
                }
                _renderContent() {
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: n, hideBackButton: s, isFullWidth: a, isLarge: c, leftControl: d, middleControl: p, position: h, rightControl: m, secondaryBar: g, style: C, subtitle: f, title: b, titleDomId: y, titleIconCell: k, titleIconCellSize: w, withBackground: Z, withWideContainer: B } = this.props,
                        { isModal: x } = this.context,
                        E = s ? d : r.createElement(i.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        _ = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!Z, x, !!g);
                    return r.createElement(r.Fragment, null, r.createElement(l.Z, { centerTitle: t, centeredLogo: o, isFullWidth: a, isLarge: c, leftControl: E, middleControl: p, position: u(h, x, n), rightControl: m, style: C, subtitle: f, title: b, titleDomId: y, titleIconCell: k, titleIconCellSize: w, withBackground: _, withWideContainer: B }), g || null);
                }
                render() {
                    const { secondaryBar: e } = this.props,
                        { isModal: t } = this.context,
                        o = c.Z.getBackgroundStyles();
                    return t ? r.createElement(a.Z, { style: !!e && o }, this._renderContent()) : this._renderContent();
                }
            }
            (p.contextType = d.Z), (p.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        652904: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => d });
            var r = o(202784),
                n = o(500002),
                s = o(668214),
                a = o(997174),
                i = o(118823);
            const l = (0, s.Z)()
                .propsFromActions(() => ({ updateLocation: i.YF, updateTweetDetailNav: a.NH }))
                .withAnalytics();
            class c extends r.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(e) {
                    const {
                            history: { location: t },
                            location: { pathname: o, search: r },
                            locationKey: n,
                        } = this.props,
                        {
                            location: { pathname: s, search: a },
                            locationKey: i,
                        } = e;
                    let l = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (l = !0));
                    const c = n || i;
                    ((c && n !== i) || (!c && o !== s) || r !== a || l) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(e) {
                    const { analytics: t, updateLocation: o, updateTweetDetailNav: r } = e;
                    t.scribePageImpression(), o(t.contextualScribeNamespace, t.contextualScribeData), r(t.contextualScribeNamespace);
                }
            }
            c.defaultProps = { children: null };
            const d = (0, n.ZP)(l(c));
        },
        879113: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => h });
            var r = o(202784),
                n = o(476984),
                s = o.n(n),
                a = o(143778),
                i = o(750410),
                l = o(682830);
            const c = "failed",
                d = "loaded",
                u = "loading",
                p = "none";
            class h extends r.Component {
                shouldComponentUpdate(e) {
                    const t = e.fetchStatus === d,
                        o = this.props.fetchStatus !== e.fetchStatus;
                    return !(!t && !o) || !s()(e, this.props);
                }
                render() {
                    const { "aria-label": e, color: t, failureMessage: o, fetchStatus: n, icon: s, loadingMessage: a, onRequestRetry: d, render: h, renderFailure: m, retryMessage: g, retryable: C } = this.props;
                    switch (n) {
                        case c:
                            return C ? r.createElement(i.Z, { icon: s, onRequestRetry: d, retryMessage: g }) : o ? r.createElement(l.m, { failureMessage: o }) : m();
                        case u:
                            return r.createElement(l.J, { "aria-label": e, color: t, loadingMessage: a });
                        case p:
                            return null;
                        default:
                            return h();
                    }
                }
            }
            h.defaultProps = { renderFailure: a.Z, retryable: !0 };
        },
        420412: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => l });
            var r = o(202784),
                n = o(325686),
                s = o(235902),
                a = o(885015),
                i = o(392237);
            function l({ borderColor: e = "borderColor", isSlim: t = !1, label: o }) {
                const { isWebRedesign: l } = s.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: i.default.theme.colors[e] ?? i.default.theme.colors.borderColor };
                return o ? r.createElement(a.Z, { style: !t && c.root, withGutter: !0 }, r.createElement(n.Z, { style: c.gapColumn }, r.createElement(n.Z, { style: [c.gap, d] })), r.createElement(n.Z, { style: c.gapText }, o), r.createElement(n.Z, { style: c.gapColumn }, r.createElement(n.Z, { style: [c.gap, d] }))) : r.createElement(n.Z, { style: [!t && c.root, l() && c.rootRedesign, c.gap, d] });
            }
            const c = i.default.create((e) => ({ borderColor: { backgroundColor: i.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: i.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => c });
            var r = o(807896),
                n = o(202784),
                s = o(325686),
                a = o(392237);
            class i extends n.Component {
                render() {
                    const { children: e, style: t, withGutter: o, ...a } = this.props,
                        i = n.Children.map(e, (e) => e && n.cloneElement(e, { style: [e.props.style, l.column, o && l.withGutterColumn] }));
                    return n.createElement(s.Z, (0, r.Z)({ style: [t, l.root, o && l.withGutter] }, a), i);
                }
            }
            i.defaultProps = { withGutter: !1 };
            const l = a.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = i;
        },
        41065: (e, t, o) => {
            "use strict";
            o.r(t), o.d(t, { default: () => l });
            var r = o(202784),
                n = o(890601),
                s = o(783427),
                a = o(347101);
            const i = (e = {}) => {
                const { direction: t } = (0, s.Z)();
                return (0, n.Z)("svg", { ...e, role: e["aria-label"] ? e.role || "img" : void 0, "aria-hidden": void 0 === e["aria-label"], style: [a.Z.root, e.style], viewBox: "0 0 24 24", children: r.createElement("g", null, r.createElement("path", { d: "M6.866 18H.846l.075-1.069C1.33 11.083 4.335 9 7.011 9c1.457 0 2.734.576 3.743 1.615-.515.378-1.003.826-1.45 1.355-.562-.569-1.305-.97-2.293-.97-2.074 0-3.522 1.847-3.981 5h4.225c-.169.616-.295 1.288-.389 2zM4 5c0-1.654 1.343-3 3-3s3 1.346 3 3-1.343 3-3 3-3-1.346-3-3zm2 0c0 .551.448 1 1 1s1-.449 1-1-.448-1-1-1-1 .449-1 1zm9.5 5c-.778 0-1.49-.263-2.071-.693C12.566 8.669 12 7.653 12 6.5 12 4.57 13.567 3 15.5 3S19 4.57 19 6.5c0 1.111-.53 2.092-1.34 2.733-.596.472-1.341.767-2.16.767zM14 6.5c0 .827.673 1.5 1.5 1.5S17 7.327 17 6.5 16.327 5 15.5 5 14 5.673 14 6.5zm1.5 4.496c3.264 0 6.816 2.358 7 8.977L22.529 21H8.472l.029-1.027c.184-6.618 3.736-8.977 7-8.977zm0 2c-2.767 0-4.57 2.223-4.938 6.004h9.875c-.367-3.781-2.17-6.004-4.938-6.004z" })) }, { writingDirection: t });
            };
            i.metadata = { width: 24, height: 24 };
            const l = i;
        },
        424869: (e) => {
            e.exports = function e(t) {
                return (
                    Object.freeze(t),
                    Object.getOwnPropertyNames(t).forEach(function (o) {
                        !t.hasOwnProperty(o) || null === t[o] || ("object" != typeof t[o] && "function" != typeof t[o]) || Object.isFrozen(t[o]) || e(t[o]);
                    }),
                    t
                );
            };
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAutomation.38cd522a.js.map
