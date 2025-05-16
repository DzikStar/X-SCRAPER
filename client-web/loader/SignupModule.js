"use strict";
(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([
    ["loader.SignupModule"],
    {
        173446: (e, t, n) => {
            n.r(t), n.d(t, { SignupModuleContainer: () => E, default: () => Z });
            var s = n(202784),
                a = n(325686),
                o = n(392237),
                r = n(537392),
                l = n(844685),
                i = n(731708),
                u = n(154003),
                c = n(332920),
                p = n.n(c),
                m = n(443781),
                d = n(3196),
                y = n(487659),
                g = n(911318),
                S = n(880647),
                b = n(182495);
            const C = p().a565833e,
                h = p().c6b51af8,
                w = p().ie8e1ffc,
                f = o.default.create((e) => ({ buttonContainer: { marginTop: e.spaces.space16, marginBottom: e.spaces.space16, marginStart: e.spaces.space12, marginEnd: e.spaces.space12 }, ssoButtonStyles: { marginBottom: e.spaces.space12 }, buttonStyles: { width: g.fI, height: e.spaces.space40 }, narrowButtonStyles: { width: g.ND }, moduleContent: { paddingStart: e.spaces.space12, paddingEnd: e.spaces.space12 }, footerLabel: { marginBottom: e.spaces.space16 } })),
                B = ({ onSignupClick: e }) => {
                    const { featureSwitches: t } = s.useContext(m.rC),
                        n = (0, b.BG)(t),
                        { signUpLabel: o } = (0, b.M5)(t),
                        c = (0, r.Zx)(({ containerWidth: e }) => S.Z.isTwoColumnSmallLayout(e));
                    return s.createElement(a.Z, { "aria-label": C, role: "summary" }, s.createElement(l.Z, { text: h }), s.createElement(i.ZP, { color: "gray700", size: "subtext2", style: f.moduleContent }, w), s.createElement(a.Z, { style: f.buttonContainer }, s.createElement(s.Fragment, null, s.createElement(y.Z, { buttonSize: "medium", buttonState: n, customWidth: c ? g.ND : void 0, displayType: g.qv.Button, style: [f.ssoButtonStyles, f.buttonStyles, c && f.narrowButtonStyles] }), s.createElement(d.Z, { buttonSize: "medium", buttonState: n, style: [f.ssoButtonStyles, f.buttonStyles, c && f.narrowButtonStyles] }), s.createElement(u.ZP, { backgroundColor: "white", borderColor: "gray200", color: "alwaysBaseGray1100", link: { pathname: "/i/flow/signup", state: { input: { requested_variant: JSON.stringify({ signup_type: b.mk }) } } }, onPress: e, role: "link", size: "medium", style: [f.buttonStyles, c && f.narrowButtonStyles] }, o))), s.createElement(i.ZP, { color: "gray700", size: "subtext2", style: [f.moduleContent, f.footerLabel] }, b.K2));
                };
            var k = n(725516);
            class E extends s.Component {
                constructor(...e) {
                    super(...e),
                        (this._handleSignupClick = () => {
                            const { analytics: e } = this.props;
                            e.scribeAction("signup");
                        });
                }
                render() {
                    return s.createElement(B, { onSignupClick: this._handleSignupClick });
                }
            }
            const Z = (0, k.Z)(E, { component: "signup_module" });
        },
    },
]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/loader.SignupModule.af02df0a.js.map
