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
                l = o(370006),
                i = o(786998),
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
                    const { backButtonType: e, centerTitle: t, centeredLogo: o, fixed: n, hideBackButton: s, isFullWidth: a, isLarge: c, leftControl: d, middleControl: p, position: h, rightControl: m, secondaryBar: g, style: C, subtitle: f, title: b, titleDomId: y, titleIconCell: k, titleIconCellSize: w, withBackground: B, withWideContainer: Z } = this.props,
                        { isModal: x } = this.context,
                        E = s ? d : r.createElement(l.Z, { backButtonType: e, onClick: this._handleBackClick }),
                        _ = (function (e, t, o) {
                            return e && !(t && o);
                        })(!!B, x, !!g);
                    return r.createElement(r.Fragment, null, r.createElement(i.Z, { centerTitle: t, centeredLogo: o, isFullWidth: a, isLarge: c, leftControl: E, middleControl: p, position: u(h, x, n), rightControl: m, style: C, subtitle: f, title: b, titleDomId: y, titleIconCell: k, titleIconCellSize: w, withBackground: _, withWideContainer: Z }), g || null);
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
                l = o(118823);
            const i = (0, s.Z)()
                .propsFromActions(() => ({ updateLocation: l.YF, updateTweetDetailNav: a.NH }))
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
                            locationKey: l,
                        } = e;
                    let i = !1;
                    t.pathname !== o ? (this._isInBackground = !0) : this._isInBackground && t.pathname === o && ((this._isInBackground = !1), (i = !0));
                    const c = n || l;
                    ((c && n !== l) || (!c && o !== s) || r !== a || i) && this._performPageUpdates(this.props);
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
            const d = (0, n.ZP)(i(c));
        },
        879113: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => h });
            var r = o(202784),
                n = o(476984),
                s = o.n(n),
                a = o(143778),
                l = o(750410),
                i = o(682830);
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
                            return C ? r.createElement(l.Z, { icon: s, onRequestRetry: d, retryMessage: g }) : o ? r.createElement(i.m, { failureMessage: o }) : m();
                        case u:
                            return r.createElement(i.J, { "aria-label": e, color: t, loadingMessage: a });
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
            o.d(t, { Z: () => i });
            var r = o(202784),
                n = o(325686),
                s = o(235902),
                a = o(885015),
                l = o(392237);
            function i({ borderColor: e = "borderColor", isSlim: t = !1, label: o }) {
                const { isWebRedesign: i } = s.ZP.useProps(),
                    d = "borderColor" === e || "nestedBorderColor" === e ? c[e] : { backgroundColor: l.default.theme.colors[e] ?? l.default.theme.colors.borderColor };
                return o ? r.createElement(a.Z, { style: !t && c.root, withGutter: !0 }, r.createElement(n.Z, { style: c.gapColumn }, r.createElement(n.Z, { style: [c.gap, d] })), r.createElement(n.Z, { style: c.gapText }, o), r.createElement(n.Z, { style: c.gapColumn }, r.createElement(n.Z, { style: [c.gap, d] }))) : r.createElement(n.Z, { style: [!t && c.root, i() && c.rootRedesign, c.gap, d] });
            }
            const c = l.default.create((e) => ({ borderColor: { backgroundColor: l.default.theme.colors.borderColor }, nestedBorderColor: { backgroundColor: l.default.theme.colors.nestedBorderColor }, gap: { height: e.borderWidths.small }, gapColumn: { flex: 1, justifyContent: "center" }, gapText: { "flex-basis": "auto" }, root: { marginVertical: e.spaces.space4 }, rootRedesign: { marginHorizontal: e.spaces.space16 } }));
        },
        885015: (e, t, o) => {
            "use strict";
            o.d(t, { Z: () => c });
            var r = o(807896),
                n = o(202784),
                s = o(325686),
                a = o(392237);
            class l extends n.Component {
                render() {
                    const { children: e, style: t, withGutter: o, ...a } = this.props,
                        l = n.Children.map(e, (e) => e && n.cloneElement(e, { style: [e.props.style, i.column, o && i.withGutterColumn] }));
                    return n.createElement(s.Z, (0, r.Z)({ style: [t, i.root, o && i.withGutter] }, a), l);
                }
            }
            l.defaultProps = { withGutter: !1 };
            const i = a.default.create((e) => ({ root: { flexDirection: "row" }, column: { flexBasis: 0, minWidth: 0 }, withGutter: { marginHorizontal: `-${e.spaces.space4}` }, withGutterColumn: { marginHorizontal: e.spaces.space4 } })),
                c = l;
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
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/bundle.AccountAutomation.1ac5f05a.js.map
