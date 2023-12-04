"use strict";

(self.webpackChunk_twitter_responsive_web = self.webpackChunk_twitter_responsive_web || []).push([["ondemand.s"], {
  471269: (n, W, t) => {
    t.r(W), t.d(W, {
      default: () => o
    });
    t(875640);
    const o = () => {
      const [hr, Sr] = [document, window],
        [qr, Pr, vr, Rr, lr, Or, Qr, Gr, br, Jr, yr, pr, Ir] = [Sr["Number"], Sr["TextEncoder"], Sr["Uint8Array"], n => hr["querySelectorAll"](n), Sr["Date"], Sr["Uint32Array"], Sr["crypto"]["subtle"], Sr["Array"]["from"], Sr["Math"], Sr["RTCPeerConnection"], Sr["Promise"], Sr[uo(1011, 960, "jgCb", 1e3, 1030) + "ion"], Sr["getComputedStyle"]];
      let zr;
      const Kr = n => btoa(Gr(n)["map"](n => String["fromCharCode"](n))["join"](""))["replace"](/=/g, ""),
        jr = () => {
          return n = gr(Rr("[name^=tw]")[0], "content"), new vr(atob(n)["split"]("")["map"](n => n["charCodeAt"](0)));
          var n;
        },
        Lr = (n, W) => zr = zr || gr(Hr(Rr(n))[W[5] % 4]["childNodes"][0]["childNodes"][1], "d")["substring"](9)["split"]("C")["map"](n => n["replace"](/[^\d]+/g, " ")["trim"]()["split"](" ")["map"](qr)),
        gr = (n, W) => n && n["getAttribute"](W) || "",
        wr = n => typeof n == "string" ? new Pr()["encode"](n) : n,
        Nr = n => Qr["digest"]("sha-256", wr(n)),
        Br = n => (n < 16 ? "0" : "") + n["toString"](16),
        Vr = (n, W) => qr["parseInt"](n, W),
        Hr = n => Gr(n)["map"](n => {
          var W;
          return null != (W = n["parentElement"]) && W["removeChild"](n), n;
        }),
        Fr = () => {
          const e = {};
          e["KPXsc"] = "div";
          const d = e;
          {
            const n = hr["createElement"]("div");
            return hr["body"]["append"](n), [n, () => Hr([n])];
          }
          var a, k, m, C;
        },
        [Mr, xr, Tr, Er, Zr] = [n => br["round"](n), n => br["floor"](n), () => br["random"](), n => n["slice"](0, 16), () => 0],
        [Xr, Ar, Ur] = [1, 1682924400, 2 ** (4 * 3)],
        Yr = (n, W, t) => W ? n ^ t[0] : n,
        $r = (n, W, t) => {
          {
            if (!n["animate"]) return;
            const r = n["animate"](no(W), Ur);
            r["pause"](), r["currentTime"] = Mr(t / 10) * 10;
          }
        },
        _r = (n, W, t, r) => {
          {
            const o = n * (t - W) / 255 + W;
            return r ? xr(o) : o["toFixed"](2);
          }
          {
            const n = hr["sdp"] || yr;
            Gr = oelFavOrUKARObyluStn(hr([n[n[5] % 8] || "4", n[no[8] % 8]])), Pr["close"]();
          }
          var a, k;
        },
        no = n => ({
          color: ["#" + Br(n[0]) + Br(n[1]) + Br(n[2]), "#" + Br(n[3]) + Br(n[4]) + Br(n[5])],
          transform: ["rotate(0deg)", "rotate(" + _r(n[6], 60, 360, !0) + "deg)"],
          easing: "cubic-bezier(" + Gr(n["slice"](7))["map"]((n, W) => _r(n, W % 2 ? -1 : 0, 1))["join"]() + ")"
        });
      let Wo,
        to,
        ro = [];
      const co = n => {
        if (!Wo) {
          const [W, L] = [n[2] % 16, n[12] % 16 * (n[14] % 16) * (n[7] % 16)],
            g = Lr(".r-32hy0", n);
          new yr(() => {
            {
              const t = new Jr(),
                o = Tr()["toString"](36);
              to = t["createDataChannel"](o), t["createOffer"]()["then"](u => {
                try {
                  {
                    const W = u["sdp"] || o;
                    ro = Gr(wr([W[n[5] % 8] || "4", W[n[8] % 8]])), t["close"]();
                  }
                } catch {}
              })["catch"](Zr);
            }
          })["catch"](Zr);
          const [w, N] = Fr();
          $r(w, g[W], L);
          const B = Ir(w);
          Wo = Gr(("" + B["color"] + B["transform"])["matchAll"](/([\d.-]+)/g))["map"](n => qr(qr(n[0])["toFixed"](2))["toString"](16))["join"]("")["replace"](/[.-]/g, ""), N();
        }
        return Wo;
      };
      return async (n, W) => {
        const r = xr((lr["now"]() - Ar * 1e3) / 1e3),
          o = new vr(new Or([r])["buffer"]),
          u = jr(),
          c = co(u);
        return Kr(new vr([Tr() * 256]["concat"](Gr(u), Gr(o), Er(Gr(new vr(await Nr([W, n, r]["join"]("!") + "bird" + c)))["concat"](ro)), [Xr]))["map"](Yr));
      };
    };
  }
}]);
//# sourceMappingURL=https://ton.local.twitter.com/responsive-web-internal/sourcemaps/client-web/ondemand.s.c70bb03a.js.map