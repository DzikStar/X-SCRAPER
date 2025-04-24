"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["shared~ondemand.SettingsRevamp~ondemand.SettingsMonetization~ondemand.SettingsSuperFollows~ondemand.SettingsA"],
    {
        625661: (a, e, t) => {
            t.d(e, { ZP: () => h });
            var i = t(202784),
                n = t(614983),
                r = t.n(n),
                p = t(325686),
                o = t(370006),
                s = t(786998),
                d = t(929028),
                g = t(386802);
            function A(a, e, t) {
                return a || (!e && t ? "fixed" : void 0);
            }
            class h extends i.Component {
                constructor(...a) {
                    super(...a),
                        (this._handleBackClick = () => {
                            const { history: a, onBackClick: e } = this.props;
                            r()(e || a, "Either onBackClick must be specified, or history should be supplied"), e ? e(this.goBack) : this.goBack();
                        }),
                        (this.goBack = () => {
                            const { backLocation: a, history: e } = this.props;
                            e && e.goBack({ backLocation: a });
                        });
                }
                _renderContent() {
                    const { backButtonType: a, centerTitle: e, centeredLogo: t, fixed: n, hideBackButton: r, isFullWidth: p, isLarge: d, leftControl: g, middleControl: h, position: c, rightControl: l, secondaryBar: b, style: u, subtitle: f, title: x, titleDomId: B, titleIconCell: w, titleIconCellSize: C, withBackground: m, withWideContainer: v } = this.props,
                        { isModal: k } = this.context,
                        T = r ? g : i.createElement(o.Z, { backButtonType: a, onClick: this._handleBackClick }),
                        S = (function (a, e, t) {
                            return a && !(e && t);
                        })(!!m, k, !!b);
                    return i.createElement(i.Fragment, null, i.createElement(s.Z, { centerTitle: e, centeredLogo: t, isFullWidth: p, isLarge: d, leftControl: T, middleControl: h, position: A(c, k, n), rightControl: l, style: u, subtitle: f, title: x, titleDomId: B, titleIconCell: w, titleIconCellSize: C, withBackground: S, withWideContainer: v }), b || null);
                }
                render() {
                    const { secondaryBar: a } = this.props,
                        { isModal: e } = this.context,
                        t = d.Z.getBackgroundStyles();
                    return e ? i.createElement(p.Z, { style: !!a && t }, this._renderContent()) : this._renderContent();
                }
            }
            (h.contextType = g.Z), (h.defaultProps = { fixed: !0, backLocation: "/", isFullWidth: !1, isLarge: !1, withBackground: !0 });
        },
        980407: (a, e, t) => {
            t.d(e, { Z: () => b, w: () => c });
            var i = t(202784),
                n = t(325686),
                r = t(108362),
                p = t(386802),
                o = t(392237),
                s = t(652904),
                d = t(555079),
                g = t(625661),
                A = t(449067),
                h = t(715601);
            class c extends i.Component {
                constructor(...a) {
                    super(...a),
                        (this._renderChildViewAppBar = () => {
                            const { appBarRef: a, appBarStyle: e, backButtonType: t, backLocation: r, centerTitle: p, hideBackButton: o, history: s, isFullWidth: A, isLarge: h, middleControl: c, onBackClick: b, rightControl: u, secondaryBar: f, subtitle: x, title: B } = this.props,
                                { isModal: w } = this.context;
                            return i.createElement(n.Z, { style: w ? [l.childViewAppBarRoot, l.appBarZindex] : l.appBarZindex }, i.createElement(g.ZP, { backButtonType: t || (w ? "close" : "back"), backLocation: r, centerTitle: p, fixed: !w, hideBackButton: o, history: s, isFullWidth: A, isLarge: h, middleControl: c, onBackClick: b, ref: a, rightControl: u, secondaryBar: f, style: [w && l.appBarModal, e], subtitle: x, title: B, titleDomId: d.Q_ }));
                        }),
                        (this._handleLayout = (a) => {
                            const { onLayout: e } = this.props,
                                { isModal: t } = this.context;
                            e && (t ? window.requestAnimationFrame(() => e(a)) : e(a));
                        });
                }
                render() {
                    const { "aria-hidden": a, bottomBar: e, children: t, containerStyle: p, documentTitle: o, isFullWidth: d, isLarge: g, renderHeader: c, title: b, withoutBottomBarMobile: u } = this.props,
                        { isModal: f } = this.context,
                        x = c ? c(this._renderChildViewAppBar()) : this._renderChildViewAppBar();
                    return i.createElement(s.Z, null, i.createElement(A.Z.Configure, { documentTitle: o, headerless: !0, title: b }), i.createElement(n.Z, { "aria-hidden": a, onLayout: this._handleLayout, style: [l.root, f && l.rootModal] }, !f && x, i.createElement(r.Z, { isFullWidth: d, isLarge: g, style: [l.container, f && l.containerModal, p] }, f ? i.createElement(h.Z, { style: l.viewport }, x, t) : t), e ? i.createElement(n.Z, { style: [l.bottomBarModal, !f && !u && l.bottomBarMobile] }, i.createElement(r.Z, { isFullWidth: d, isLarge: g }, e)) : null));
                }
            }
            (c.defaultProps = { isFullWidth: !1, isLarge: !1 }), (c.contextType = p.Z);
            const l = o.default.create((a) => ({ root: { backgroundColor: a.colors.cellBackground, flexGrow: 1, flexShrink: 1 }, rootModal: { borderRadius: a.borderRadii.xLarge, flexShrink: 1 }, appBarModal: { borderTopStartRadius: a.borderRadii.small, borderTopEndRadius: a.borderRadii.small }, childViewAppBarRoot: { position: "sticky", top: 0 }, appBarZindex: { zIndex: a.componentZIndices.appBarZIndex }, container: { flexGrow: 1 }, containerModal: { flexShrink: 1 }, viewport: { borderBottomStartRadius: a.borderRadii.xLarge, borderBottomEndRadius: a.borderRadii.xLarge, flexGrow: 1, flexShrink: 1, overflow: "auto", zIndex: void 0 }, bottomBarModal: { borderTopColor: a.colors.borderColor, borderTopWidth: a.borderWidths.small }, bottomBarMobile: { position: "fixed", backfaceVisibility: "hidden", bottom: 0, width: "100%", paddingBottom: o.default.iPhoneOffsetBottom, backgroundColor: a.colors.navigationBackground, borderTopStyle: "solid" } })),
                b = c;
        },
        698537: (a, e, t) => {
            t.d(e, { j: () => Ce, Z: () => me });
            var i = t(202784),
                n = t(325686),
                r = t(530525),
                p = t(439592),
                o = t(392237);
            const s = t.p + "Arrow.bbf355fa.png",
                d = t.p + "Arrow@2x.1079fd3a.png",
                g = t.p + "Arrow@3x.4bb73bfa.png",
                A = t.p + "Award.68be832a.png",
                h = t.p + "Award@2x.a0c59f8a.png",
                c = t.p + "Award@3x.7a6f947a.png",
                l = t.p + "Badge.22294b2a.png",
                b = t.p + "Badge@2x.c1db7fca.png",
                u = t.p + "Badge@3x.abdf748a.png",
                f = t.p + "Bench.ed6113aa.png",
                x = t.p + "Bench@2x.49eea9ea.png",
                B = t.p + "Bench@3x.eb78fbba.png",
                w = t.p + "Bonus.b7580a8a.png",
                C = t.p + "Bonus@2x.be02885a.png",
                m = t.p + "Bonus@3x.f1da98aa.png",
                v = t.p + "Cat.581a02ca.png",
                k = t.p + "Cat@2x.f2c0bc6a.png",
                T = t.p + "Cat@3x.e8bbed5a.png",
                S = t.p + "Chat.62494e6a.png",
                y = t.p + "Chat@2x.f6eeca0a.png",
                P = t.p + "Chat@3x.dd8438ca.png",
                L = t.p + "Clipboard.279374fa.png",
                E = t.p + "Clipboard@2x.13b4b63a.png",
                R = t.p + "Clipboard@3x.a07957da.png",
                Z = t.p + "Cog.788d351a.png",
                M = t.p + "Cog@2x.3528d16a.png",
                z = t.p + "Cog@3x.e4185e9a.png",
                U = t.p + "Coin.684ea18a.png",
                F = t.p + "Coin@2x.9e02069a.png",
                _ = t.p + "Coin@3x.d5ecbc9a.png",
                D = t.p + "CoinPurse.5e7e5f2a.png",
                I = t.p + "CoinPurse@2x.62abfada.png",
                G = t.p + "CoinPurse@3x.6b9f5d0a.png",
                H = t.p + "CoinsHand.f6f5813a.png",
                W = t.p + "CoinsHand@2x.0da86fba.png",
                V = t.p + "CoinsHand@3x.371d543a.png",
                N = t.p + "CoinsStairs.295fdeaa.png",
                O = t.p + "CoinsStairs@2x.22eb2a2a.png",
                Q = t.p + "CoinsStairs@3x.ea04943a.png",
                J = t.p + "CoinsThumbs.d702e22a.png",
                K = t.p + "CoinsThumbs@2x.b8a2cd1a.png",
                X = t.p + "CoinsThumbs@3x.695f875a.png",
                j = t.p + "Cone.e7e68c9a.png",
                Y = t.p + "Cone@2x.94d66a1a.png",
                q = t.p + "Cone@3x.f471865a.png",
                $ = t.p + "ConfusedDog.f329e38a.png",
                aa = t.p + "ConfusedDog@2x.74c93d1a.png",
                ea = t.p + "ConfusedDog@3x.baf8e90a.png",
                ta = t.p + "Cross.eed0ff5a.png",
                ia = t.p + "Cross@2x.6824943a.png",
                na = t.p + "Cross@3x.5959505a.png",
                ra = t.p + "Crown.65bc0d5a.png",
                pa = t.p + "DiscoGlobe.ed123c4a.png",
                oa = t.p + "DiscoGlobe@2x.525325ea.png",
                sa = t.p + "DiscoGlobe@3x.490e4c6a.png",
                da = t.p + "FirstAid.962ae7ea.png",
                ga = t.p + "FirstAid@2x.0964005a.png",
                Aa = t.p + "FirstAid@3x.b6884b1a.png",
                ha = t.p + "Gem.6a25e93a.png",
                ca = t.p + "Gem@2x.9fdab1ea.png",
                la = t.p + "Gem@3x.9f51f0ca.png",
                ba = t.p + "Heart.a7bdca8a.png",
                ua = t.p + "Heart@2x.a3108cea.png",
                fa = t.p + "Heart@3x.2866f2fa.png",
                xa = t.p + "LifeSaver.19af1fba.png",
                Ba = t.p + "LifeSaver@2x.5f9465aa.png",
                wa = t.p + "LifeSaver@3x.3cde1caa.png",
                Ca = t.p + "Lightbulb.632a0dea.png",
                ma = t.p + "Lightbulb@2x.ea0a7dca.png",
                va = t.p + "Lightbulb@3x.d47fac7a.png",
                ka = t.p + "NoEntry.89a117aa.png",
                Ta = t.p + "NoEntry@2x.6460d27a.png",
                Sa = t.p + "NoEntry@3x.cf8e946a.png",
                ya = t.p + "OneFinger.2700aaaa.png",
                Pa = t.p + "OneFinger@2x.d52597aa.png",
                La = t.p + "OneFinger@3x.ff8ba62a.png",
                Ea = t.p + "PaperAirplane.89b2359a.png",
                Ra = t.p + "PaperAirplane@2x.9fec7eda.png",
                Za = t.p + "PaperAirplane@3x.7a3f9cfa.png",
                Ma = t.p + "Pencil.6ac7a9aa.png",
                za = t.p + "Pencil@2x.e6d394ca.png",
                Ua = t.p + "Pencil@3x.7e45c2ea.png",
                Fa = t.p + "PiggyBank.571af82a.png",
                _a = t.p + "PiggyBank@2x.f6b3cb1a.png",
                Da = t.p + "PiggyBank@3x.f166bc1a.png",
                Ia = t.p + "Plant.2e93bbba.png",
                Ga = t.p + "Plant@2x.5660c14a.png",
                Ha = t.p + "Plant@3x.60b6685a.png",
                Wa = t.p + "Puzzle.5148ca8a.png",
                Va = t.p + "Puzzle@2x.33f30e6a.png",
                Na = t.p + "Puzzle@3x.3231b3aa.png",
                Oa = t.p + "PuzzlePieces.5917591a.png",
                Qa = t.p + "PuzzlePieces@2x.d239439a.png",
                Ja = t.p + "PuzzlePieces@3x.ed9bd73a.png",
                Ka = t.p + "Ribbon.a0d66a6a.png",
                Xa = t.p + "Ribbon@2x.d981e09a.png",
                ja = t.p + "Ribbon@3x.d6c8e50a.png",
                Ya = t.p + "Spheres.c33c7b9a.png",
                qa = t.p + "Spheres@2x.6b6732fa.png",
                $a = t.p + "Spheres@3x.5e58c98a.png",
                ae = t.p + "Star.2714eb9a.png",
                ee = t.p + "Star@2x.25a57fda.png",
                te = t.p + "Star@3x.206f9d8a.png",
                ie = t.p + "Success.ff2ef23a.png",
                ne = t.p + "Success@2x.97486aea.png",
                re = t.p + "Success@3x.915e6dea.png",
                pe = t.p + "ThumbsUp.0e3bffda.png",
                oe = t.p + "ThumbsUp@2x.38e7642a.png",
                se = t.p + "ThumbsUp@3x.ff9b6b0a.png",
                de = t.p + "TrafficBarricade.067c8a9a.png",
                ge = t.p + "TrafficBarricade@2x.9bde865a.png",
                Ae = t.p + "TrafficBarricade@3x.338b3bea.png",
                he = t.p + "TrafficBarricadeAlt.926ac6aa.png",
                ce = t.p + "TrafficBarricadeAlt@2x.6cf6d65a.png",
                le = t.p + "TrafficBarricadeAlt@3x.aaf995da.png",
                be = t.p + "TrafficLight.125db8da.png",
                ue = t.p + "TrafficLight@2x.c00a4f7a.png",
                fe = t.p + "TrafficLight@3x.c4bb5b8a.png",
                xe = t.p + "TrashCan.7ed1704a.png",
                Be = t.p + "TrashCan@2x.79c8ba3a.png",
                we = t.p + "TrashCan@3x.91184baa.png",
                Ce = {
                    ConfusedDog: { variants: [$, aa, ea], width: 465, height: 186 },
                    Success: { variants: [ie, ne, re], width: 465, height: 186 },
                    Arrow: { variants: [s, d, g], width: 147, height: 100 },
                    Bench: { variants: [f, x, B], width: 311, height: 215 },
                    Blank: { variants: ["data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAATcAAADXAQAAAABXaiupAAAAAnRSTlMAAHaTzTgAAAAfSURBVHgB7cExAQAAAMIg+6c2xT5gJAAAAAAAAAAADiGYAAHjEk89AAAAAElFTkSuQmCC", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAm4AAAGuAQAAAAAB07eXAAAAAnRSTlMAAHaTzTgAAAA4SURBVHgB7cEBDQAAAMIg+6c2xzdgIQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAwAGEsgABSmlaDAAAAABJRU5ErkJggg==", "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAA6UAAAKFAQAAAAAcgXJpAAAAAnRSTlMAAHaTzTgAAABfSURBVHgB7cGBAAAAAMOg+1MfZNUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIO8pXQABmRxXNgAAAABJRU5ErkJggg=="], width: 311, height: 215 },
                    Cat: { variants: [v, k, T], width: 311, height: 215 },
                    Clipboard: { variants: [L, E, R], width: 233, height: 161 },
                    CoinsHand: { variants: [H, W, V], width: 233, height: 161 },
                    CoinsStairs: { variants: [N, O, Q], width: 311, height: 215 },
                    CoinsThumbs: { variants: [J, K, X], width: 311, height: 215 },
                    OneFinger: { variants: [ya, Pa, La], width: 311, height: 215 },
                    PaperAirplane: { variants: [Ea, Ra, Za], width: 311, height: 215 },
                    Puzzle: { variants: [Wa, Va, Na], width: 311, height: 215 },
                    ThumbsUp: { variants: [pe, oe, se], width: 311, height: 215 },
                    TrafficBarricade: { variants: [de, ge, Ae], width: 311, height: 215 },
                    TrafficBarricadeAlt: { variants: [he, ce, le], width: 311, height: 215 },
                    TrafficLight: { variants: [be, ue, fe], width: 147, height: 100 },
                    UTurn: { variants: [t.p + "UTurn.619b3aaa.png", t.p + "UTurn@2x.83237a8a.png", t.p + "UTurn@3x.67d2b35a.png"], width: 311, height: 215 },
                    DiscoGlobe: { variants: [pa, oa, sa], width: 311, height: 215 },
                    Award: { variants: [A, h, c], width: 80, height: 96 },
                    Badge: { variants: [l, b, u], width: 48, height: 48 },
                    Crown: { variants: [ra], width: 88, height: 88 },
                    Bonus: { variants: [w, C, m], width: 48, height: 48 },
                    Gem: { variants: [ha, ca, la], width: 48, height: 48 },
                    Chat: { variants: [S, y, P], width: 36, height: 36 },
                    Cog: { variants: [Z, M, z], width: 36, height: 36 },
                    Coin: { variants: [U, F, _], width: 36, height: 36 },
                    CoinPurse: { variants: [D, I, G], width: 36, height: 36 },
                    Cone: { variants: [j, Y, q], width: 36, height: 36 },
                    Cross: { variants: [ta, ia, na], width: 36, height: 36 },
                    FirstAid: { variants: [da, ga, Aa], width: 36, height: 36 },
                    Heart: { variants: [ba, ua, fa], width: 36, height: 36 },
                    LifeSaver: { variants: [xa, Ba, wa], width: 36, height: 36 },
                    Lightbulb: { variants: [Ca, ma, va], width: 36, height: 36 },
                    NoEntry: { variants: [ka, Ta, Sa], width: 36, height: 36 },
                    Pencil: { variants: [Ma, za, Ua], width: 36, height: 36 },
                    PiggyBank: { variants: [Fa, _a, Da], width: 36, height: 36 },
                    Plant: { variants: [Ia, Ga, Ha], width: 36, height: 36 },
                    PuzzlePieces: { variants: [Oa, Qa, Ja], width: 36, height: 36 },
                    Ribbon: { variants: [Ka, Xa, ja], width: 36, height: 36 },
                    Spheres: { variants: [Ya, qa, $a], width: 36, height: 36 },
                    Star: { variants: [ae, ee, te], width: 36, height: 36 },
                    TrashCan: { variants: [xe, Be, we], width: 36, height: 36 },
                    Wallet: { variants: [t.p + "Wallet.0ca9943a.png", t.p + "Wallet@2x.d3b0554a.png", t.p + "Wallet@3x.90c942fa.png"], width: 36, height: 36 },
                },
                me = (a) => {
                    const { "aria-label": e = "", style: t, type: o, width: s = o.width } = a,
                        {
                            aspectRatio: d,
                            customVariants: g,
                            image: A,
                        } = ((a) => {
                            const { height: e, variants: t, width: i } = a;
                            return { aspectRatio: i / e, image: { url: t[0], width: i * (t.length + 1), height: e * (t.length + 1) }, customVariants: t.map((a, t) => ({ uri: a, width: i * (t + 1), height: e * (t + 1) })) };
                        })(o),
                        h = { width: s, height: Math.round(s / d) };
                    return i.createElement(n.Z, { style: [ve.illustration, t, h] }, i.createElement(r.Z, { "aria-label": e, aspectMode: p.Z.exact(d), customVariants: g, draggable: !1, image: A }));
                },
                ve = o.default.create((a) => ({ illustration: { alignSelf: "center" } }));
        },
        652904: (a, e, t) => {
            t.d(e, { Z: () => g });
            var i = t(202784),
                n = t(500002),
                r = t(668214),
                p = t(997174),
                o = t(118823);
            const s = (0, r.Z)()
                .propsFromActions(() => ({ updateLocation: o.YF, updateTweetDetailNav: p.NH }))
                .withAnalytics();
            class d extends i.Component {
                componentDidMount() {
                    this._performPageUpdates(this.props);
                }
                componentDidUpdate(a) {
                    const {
                            history: { location: e },
                            location: { pathname: t, search: i },
                            locationKey: n,
                        } = this.props,
                        {
                            location: { pathname: r, search: p },
                            locationKey: o,
                        } = a;
                    let s = !1;
                    e.pathname !== t ? (this._isInBackground = !0) : this._isInBackground && e.pathname === t && ((this._isInBackground = !1), (s = !0));
                    const d = n || o;
                    ((d && n !== o) || (!d && t !== r) || i !== p || s) && this._performPageUpdates(this.props);
                }
                render() {
                    return this.props.children;
                }
                _performPageUpdates(a) {
                    const { analytics: e, updateLocation: t, updateTweetDetailNav: i } = a;
                    e.scribePageImpression(), t(e.contextualScribeNamespace, e.contextualScribeData), i(e.contextualScribeNamespace);
                }
            }
            d.defaultProps = { children: null };
            const g = (0, n.ZP)(s(d));
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/shared~ondemand.SettingsRevamp~ondemand.SettingsMonetization~ondemand.SettingsSuperFollows~ondemand.SettingsA.900c891a.js.map
