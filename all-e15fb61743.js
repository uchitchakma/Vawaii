!(function (t, e) {
  "object" == typeof module && "object" == typeof module.exports
    ? (module.exports = t.document
        ? e(t, !0)
        : function (t) {
            if (!t.document)
              throw new Error("jQuery requires a window with a document");
            return e(t);
          })
    : e(t);
})("undefined" != typeof window ? window : this, function (t, e) {
  function i(t) {
    var e = t.length,
      i = J.type(t);
    return (
      "function" !== i &&
      !J.isWindow(t) &&
      (!(1 !== t.nodeType || !e) ||
        "array" === i ||
        0 === e ||
        ("number" == typeof e && e > 0 && e - 1 in t))
    );
  }
  function n(t, e, i) {
    if (J.isFunction(e))
      return J.grep(t, function (t, n) {
        return !!e.call(t, n, t) !== i;
      });
    if (e.nodeType)
      return J.grep(t, function (t) {
        return (t === e) !== i;
      });
    if ("string" == typeof e) {
      if (at.test(e)) return J.filter(e, t, i);
      e = J.filter(e, t);
    }
    return J.grep(t, function (t) {
      return Y.call(e, t) >= 0 !== i;
    });
  }
  function r(t, e) {
    for (; (t = t[e]) && 1 !== t.nodeType; );
    return t;
  }
  function s(t) {
    var e = (dt[t] = {});
    return (
      J.each(t.match(pt) || [], function (t, i) {
        e[i] = !0;
      }),
      e
    );
  }
  function o() {
    Z.removeEventListener("DOMContentLoaded", o, !1),
      t.removeEventListener("load", o, !1),
      J.ready();
  }
  function a() {
    Object.defineProperty((this.cache = {}), 0, {
      get: function () {
        return {};
      },
    }),
      (this.expando = J.expando + Math.random());
  }
  function l(t, e, i) {
    var n;
    if (void 0 === i && 1 === t.nodeType)
      if (
        ((n = "data-" + e.replace(xt, "-$1").toLowerCase()),
        (i = t.getAttribute(n)),
        "string" == typeof i)
      ) {
        try {
          i =
            "true" === i ||
            ("false" !== i &&
              ("null" === i
                ? null
                : +i + "" === i
                ? +i
                : yt.test(i)
                ? J.parseJSON(i)
                : i));
        } catch (r) {}
        vt.set(t, e, i);
      } else i = void 0;
    return i;
  }
  function u() {
    return !0;
  }
  function h() {
    return !1;
  }
  function c() {
    try {
      return Z.activeElement;
    } catch (t) {}
  }
  function f(t, e) {
    return J.nodeName(t, "table") &&
      J.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr")
      ? t.getElementsByTagName("tbody")[0] ||
          t.appendChild(t.ownerDocument.createElement("tbody"))
      : t;
  }
  function p(t) {
    return (t.type = (null !== t.getAttribute("type")) + "/" + t.type), t;
  }
  function d(t) {
    var e = jt.exec(t.type);
    return e ? (t.type = e[1]) : t.removeAttribute("type"), t;
  }
  function m(t, e) {
    for (var i = 0, n = t.length; n > i; i++)
      _t.set(t[i], "globalEval", !e || _t.get(e[i], "globalEval"));
  }
  function g(t, e) {
    var i, n, r, s, o, a, l, u;
    if (1 === e.nodeType) {
      if (
        _t.hasData(t) &&
        ((s = _t.access(t)), (o = _t.set(e, s)), (u = s.events))
      ) {
        delete o.handle, (o.events = {});
        for (r in u)
          for (i = 0, n = u[r].length; n > i; i++) J.event.add(e, r, u[r][i]);
      }
      vt.hasData(t) &&
        ((a = vt.access(t)), (l = J.extend({}, a)), vt.set(e, l));
    }
  }
  function _(t, e) {
    var i = t.getElementsByTagName
      ? t.getElementsByTagName(e || "*")
      : t.querySelectorAll
      ? t.querySelectorAll(e || "*")
      : [];
    return void 0 === e || (e && J.nodeName(t, e)) ? J.merge([t], i) : i;
  }
  function v(t, e) {
    var i = e.nodeName.toLowerCase();
    "input" === i && Pt.test(t.type)
      ? (e.checked = t.checked)
      : ("input" === i || "textarea" === i) &&
        (e.defaultValue = t.defaultValue);
  }
  function y(e, i) {
    var n,
      r = J(i.createElement(e)).appendTo(i.body),
      s =
        t.getDefaultComputedStyle && (n = t.getDefaultComputedStyle(r[0]))
          ? n.display
          : J.css(r[0], "display");
    return r.detach(), s;
  }
  function x(t) {
    var e = Z,
      i = zt[t];
    return (
      i ||
        ((i = y(t, e)),
        ("none" !== i && i) ||
          ((Ht = (
            Ht || J("<iframe frameborder='0' width='0' height='0'/>")
          ).appendTo(e.documentElement)),
          (e = Ht[0].contentDocument),
          e.write(),
          e.close(),
          (i = y(t, e)),
          Ht.detach()),
        (zt[t] = i)),
      i
    );
  }
  function T(t, e, i) {
    var n,
      r,
      s,
      o,
      a = t.style;
    return (
      (i = i || Bt(t)),
      i && (o = i.getPropertyValue(e) || i[e]),
      i &&
        ("" !== o || J.contains(t.ownerDocument, t) || (o = J.style(t, e)),
        $t.test(o) &&
          Wt.test(e) &&
          ((n = a.width),
          (r = a.minWidth),
          (s = a.maxWidth),
          (a.minWidth = a.maxWidth = a.width = o),
          (o = i.width),
          (a.width = n),
          (a.minWidth = r),
          (a.maxWidth = s))),
      void 0 !== o ? o + "" : o
    );
  }
  function w(t, e) {
    return {
      get: function () {
        return t()
          ? void delete this.get
          : (this.get = e).apply(this, arguments);
      },
    };
  }
  function b(t, e) {
    if (e in t) return e;
    for (var i = e[0].toUpperCase() + e.slice(1), n = e, r = Gt.length; r--; )
      if (((e = Gt[r] + i), e in t)) return e;
    return n;
  }
  function P(t, e, i) {
    var n = Xt.exec(e);
    return n ? Math.max(0, n[1] - (i || 0)) + (n[2] || "px") : e;
  }
  function S(t, e, i, n, r) {
    for (
      var s = i === (n ? "border" : "content") ? 4 : "width" === e ? 1 : 0,
        o = 0;
      4 > s;
      s += 2
    )
      "margin" === i && (o += J.css(t, i + wt[s], !0, r)),
        n
          ? ("content" === i && (o -= J.css(t, "padding" + wt[s], !0, r)),
            "margin" !== i &&
              (o -= J.css(t, "border" + wt[s] + "Width", !0, r)))
          : ((o += J.css(t, "padding" + wt[s], !0, r)),
            "padding" !== i &&
              (o += J.css(t, "border" + wt[s] + "Width", !0, r)));
    return o;
  }
  function C(t, e, i) {
    var n = !0,
      r = "width" === e ? t.offsetWidth : t.offsetHeight,
      s = Bt(t),
      o = "border-box" === J.css(t, "boxSizing", !1, s);
    if (0 >= r || null == r) {
      if (
        ((r = T(t, e, s)), (0 > r || null == r) && (r = t.style[e]), $t.test(r))
      )
        return r;
      (n = o && (Q.boxSizingReliable() || r === t.style[e])),
        (r = parseFloat(r) || 0);
    }
    return r + S(t, e, i || (o ? "border" : "content"), n, s) + "px";
  }
  function k(t, e) {
    for (var i, n, r, s = [], o = 0, a = t.length; a > o; o++)
      (n = t[o]),
        n.style &&
          ((s[o] = _t.get(n, "olddisplay")),
          (i = n.style.display),
          e
            ? (s[o] || "none" !== i || (n.style.display = ""),
              "" === n.style.display &&
                bt(n) &&
                (s[o] = _t.access(n, "olddisplay", x(n.nodeName))))
            : ((r = bt(n)),
              ("none" === i && r) ||
                _t.set(n, "olddisplay", r ? i : J.css(n, "display"))));
    for (o = 0; a > o; o++)
      (n = t[o]),
        n.style &&
          ((e && "none" !== n.style.display && "" !== n.style.display) ||
            (n.style.display = e ? s[o] || "" : "none"));
    return t;
  }
  function O(t, e, i, n, r) {
    return new O.prototype.init(t, e, i, n, r);
  }
  function D() {
    return (
      setTimeout(function () {
        Qt = void 0;
      }),
      (Qt = J.now())
    );
  }
  function A(t, e) {
    var i,
      n = 0,
      r = { height: t };
    for (e = e ? 1 : 0; 4 > n; n += 2 - e)
      (i = wt[n]), (r["margin" + i] = r["padding" + i] = t);
    return e && (r.opacity = r.width = t), r;
  }
  function M(t, e, i) {
    for (
      var n, r = (ie[e] || []).concat(ie["*"]), s = 0, o = r.length;
      o > s;
      s++
    )
      if ((n = r[s].call(i, e, t))) return n;
  }
  function R(t, e, i) {
    var n,
      r,
      s,
      o,
      a,
      l,
      u,
      h,
      c = this,
      f = {},
      p = t.style,
      d = t.nodeType && bt(t),
      m = _t.get(t, "fxshow");
    i.queue ||
      ((a = J._queueHooks(t, "fx")),
      null == a.unqueued &&
        ((a.unqueued = 0),
        (l = a.empty.fire),
        (a.empty.fire = function () {
          a.unqueued || l();
        })),
      a.unqueued++,
      c.always(function () {
        c.always(function () {
          a.unqueued--, J.queue(t, "fx").length || a.empty.fire();
        });
      })),
      1 === t.nodeType &&
        ("height" in e || "width" in e) &&
        ((i.overflow = [p.overflow, p.overflowX, p.overflowY]),
        (u = J.css(t, "display")),
        (h = "none" === u ? _t.get(t, "olddisplay") || x(t.nodeName) : u),
        "inline" === h &&
          "none" === J.css(t, "float") &&
          (p.display = "inline-block")),
      i.overflow &&
        ((p.overflow = "hidden"),
        c.always(function () {
          (p.overflow = i.overflow[0]),
            (p.overflowX = i.overflow[1]),
            (p.overflowY = i.overflow[2]);
        }));
    for (n in e)
      if (((r = e[n]), Kt.exec(r))) {
        if (
          (delete e[n], (s = s || "toggle" === r), r === (d ? "hide" : "show"))
        ) {
          if ("show" !== r || !m || void 0 === m[n]) continue;
          d = !0;
        }
        f[n] = (m && m[n]) || J.style(t, n);
      } else u = void 0;
    if (J.isEmptyObject(f))
      "inline" === ("none" === u ? x(t.nodeName) : u) && (p.display = u);
    else {
      m ? "hidden" in m && (d = m.hidden) : (m = _t.access(t, "fxshow", {})),
        s && (m.hidden = !d),
        d
          ? J(t).show()
          : c.done(function () {
              J(t).hide();
            }),
        c.done(function () {
          var e;
          _t.remove(t, "fxshow");
          for (e in f) J.style(t, e, f[e]);
        });
      for (n in f)
        (o = M(d ? m[n] : 0, n, c)),
          n in m ||
            ((m[n] = o.start),
            d &&
              ((o.end = o.start),
              (o.start = "width" === n || "height" === n ? 1 : 0)));
    }
  }
  function N(t, e) {
    var i, n, r, s, o;
    for (i in t)
      if (
        ((n = J.camelCase(i)),
        (r = e[n]),
        (s = t[i]),
        J.isArray(s) && ((r = s[1]), (s = t[i] = s[0])),
        i !== n && ((t[n] = s), delete t[i]),
        (o = J.cssHooks[n]),
        o && "expand" in o)
      ) {
        (s = o.expand(s)), delete t[n];
        for (i in s) i in t || ((t[i] = s[i]), (e[i] = r));
      } else e[n] = r;
  }
  function E(t, e, i) {
    var n,
      r,
      s = 0,
      o = ee.length,
      a = J.Deferred().always(function () {
        delete l.elem;
      }),
      l = function () {
        if (r) return !1;
        for (
          var e = Qt || D(),
            i = Math.max(0, u.startTime + u.duration - e),
            n = i / u.duration || 0,
            s = 1 - n,
            o = 0,
            l = u.tweens.length;
          l > o;
          o++
        )
          u.tweens[o].run(s);
        return (
          a.notifyWith(t, [u, s, i]),
          1 > s && l ? i : (a.resolveWith(t, [u]), !1)
        );
      },
      u = a.promise({
        elem: t,
        props: J.extend({}, e),
        opts: J.extend(!0, { specialEasing: {} }, i),
        originalProperties: e,
        originalOptions: i,
        startTime: Qt || D(),
        duration: i.duration,
        tweens: [],
        createTween: function (e, i) {
          var n = J.Tween(
            t,
            u.opts,
            e,
            i,
            u.opts.specialEasing[e] || u.opts.easing
          );
          return u.tweens.push(n), n;
        },
        stop: function (e) {
          var i = 0,
            n = e ? u.tweens.length : 0;
          if (r) return this;
          for (r = !0; n > i; i++) u.tweens[i].run(1);
          return e ? a.resolveWith(t, [u, e]) : a.rejectWith(t, [u, e]), this;
        },
      }),
      h = u.props;
    for (N(h, u.opts.specialEasing); o > s; s++)
      if ((n = ee[s].call(u, t, h, u.opts))) return n;
    return (
      J.map(h, M, u),
      J.isFunction(u.opts.start) && u.opts.start.call(t, u),
      J.fx.timer(J.extend(l, { elem: t, anim: u, queue: u.opts.queue })),
      u
        .progress(u.opts.progress)
        .done(u.opts.done, u.opts.complete)
        .fail(u.opts.fail)
        .always(u.opts.always)
    );
  }
  function L(t) {
    return function (e, i) {
      "string" != typeof e && ((i = e), (e = "*"));
      var n,
        r = 0,
        s = e.toLowerCase().match(pt) || [];
      if (J.isFunction(i))
        for (; (n = s[r++]); )
          "+" === n[0]
            ? ((n = n.slice(1) || "*"), (t[n] = t[n] || []).unshift(i))
            : (t[n] = t[n] || []).push(i);
    };
  }
  function j(t, e, i, n) {
    function r(a) {
      var l;
      return (
        (s[a] = !0),
        J.each(t[a] || [], function (t, a) {
          var u = a(e, i, n);
          return "string" != typeof u || o || s[u]
            ? o
              ? !(l = u)
              : void 0
            : (e.dataTypes.unshift(u), r(u), !1);
        }),
        l
      );
    }
    var s = {},
      o = t === Te;
    return r(e.dataTypes[0]) || (!s["*"] && r("*"));
  }
  function F(t, e) {
    var i,
      n,
      r = J.ajaxSettings.flatOptions || {};
    for (i in e) void 0 !== e[i] && ((r[i] ? t : n || (n = {}))[i] = e[i]);
    return n && J.extend(!0, t, n), t;
  }
  function I(t, e, i) {
    for (var n, r, s, o, a = t.contents, l = t.dataTypes; "*" === l[0]; )
      l.shift(),
        void 0 === n && (n = t.mimeType || e.getResponseHeader("Content-Type"));
    if (n)
      for (r in a)
        if (a[r] && a[r].test(n)) {
          l.unshift(r);
          break;
        }
    if (l[0] in i) s = l[0];
    else {
      for (r in i) {
        if (!l[0] || t.converters[r + " " + l[0]]) {
          s = r;
          break;
        }
        o || (o = r);
      }
      s = s || o;
    }
    return s ? (s !== l[0] && l.unshift(s), i[s]) : void 0;
  }
  function H(t, e, i, n) {
    var r,
      s,
      o,
      a,
      l,
      u = {},
      h = t.dataTypes.slice();
    if (h[1]) for (o in t.converters) u[o.toLowerCase()] = t.converters[o];
    for (s = h.shift(); s; )
      if (
        (t.responseFields[s] && (i[t.responseFields[s]] = e),
        !l && n && t.dataFilter && (e = t.dataFilter(e, t.dataType)),
        (l = s),
        (s = h.shift()))
      )
        if ("*" === s) s = l;
        else if ("*" !== l && l !== s) {
          if (((o = u[l + " " + s] || u["* " + s]), !o))
            for (r in u)
              if (
                ((a = r.split(" ")),
                a[1] === s && (o = u[l + " " + a[0]] || u["* " + a[0]]))
              ) {
                o === !0
                  ? (o = u[r])
                  : u[r] !== !0 && ((s = a[0]), h.unshift(a[1]));
                break;
              }
          if (o !== !0)
            if (o && t["throws"]) e = o(e);
            else
              try {
                e = o(e);
              } catch (c) {
                return {
                  state: "parsererror",
                  error: o ? c : "No conversion from " + l + " to " + s,
                };
              }
        }
    return { state: "success", data: e };
  }
  function z(t, e, i, n) {
    var r;
    if (J.isArray(e))
      J.each(e, function (e, r) {
        i || Se.test(t)
          ? n(t, r)
          : z(t + "[" + ("object" == typeof r ? e : "") + "]", r, i, n);
      });
    else if (i || "object" !== J.type(e)) n(t, e);
    else for (r in e) z(t + "[" + r + "]", e[r], i, n);
  }
  function W(t) {
    return J.isWindow(t) ? t : 9 === t.nodeType && t.defaultView;
  }
  var $ = [],
    B = $.slice,
    q = $.concat,
    X = $.push,
    Y = $.indexOf,
    U = {},
    V = U.toString,
    G = U.hasOwnProperty,
    Q = {},
    Z = t.document,
    K = "2.1.1",
    J = function (t, e) {
      return new J.fn.init(t, e);
    },
    tt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    et = /^-ms-/,
    it = /-([\da-z])/gi,
    nt = function (t, e) {
      return e.toUpperCase();
    };
  (J.fn = J.prototype =
    {
      jquery: K,
      constructor: J,
      selector: "",
      length: 0,
      toArray: function () {
        return B.call(this);
      },
      get: function (t) {
        return null != t
          ? 0 > t
            ? this[t + this.length]
            : this[t]
          : B.call(this);
      },
      pushStack: function (t) {
        var e = J.merge(this.constructor(), t);
        return (e.prevObject = this), (e.context = this.context), e;
      },
      each: function (t, e) {
        return J.each(this, t, e);
      },
      map: function (t) {
        return this.pushStack(
          J.map(this, function (e, i) {
            return t.call(e, i, e);
          })
        );
      },
      slice: function () {
        return this.pushStack(B.apply(this, arguments));
      },
      first: function () {
        return this.eq(0);
      },
      last: function () {
        return this.eq(-1);
      },
      eq: function (t) {
        var e = this.length,
          i = +t + (0 > t ? e : 0);
        return this.pushStack(i >= 0 && e > i ? [this[i]] : []);
      },
      end: function () {
        return this.prevObject || this.constructor(null);
      },
      push: X,
      sort: $.sort,
      splice: $.splice,
    }),
    (J.extend = J.fn.extend =
      function () {
        var t,
          e,
          i,
          n,
          r,
          s,
          o = arguments[0] || {},
          a = 1,
          l = arguments.length,
          u = !1;
        for (
          "boolean" == typeof o && ((u = o), (o = arguments[a] || {}), a++),
            "object" == typeof o || J.isFunction(o) || (o = {}),
            a === l && ((o = this), a--);
          l > a;
          a++
        )
          if (null != (t = arguments[a]))
            for (e in t)
              (i = o[e]),
                (n = t[e]),
                o !== n &&
                  (u && n && (J.isPlainObject(n) || (r = J.isArray(n)))
                    ? (r
                        ? ((r = !1), (s = i && J.isArray(i) ? i : []))
                        : (s = i && J.isPlainObject(i) ? i : {}),
                      (o[e] = J.extend(u, s, n)))
                    : void 0 !== n && (o[e] = n));
        return o;
      }),
    J.extend({
      expando: "jQuery" + (K + Math.random()).replace(/\D/g, ""),
      isReady: !0,
      error: function (t) {
        throw new Error(t);
      },
      noop: function () {},
      isFunction: function (t) {
        return "function" === J.type(t);
      },
      isArray: Array.isArray,
      isWindow: function (t) {
        return null != t && t === t.window;
      },
      isNumeric: function (t) {
        return !J.isArray(t) && t - parseFloat(t) >= 0;
      },
      isPlainObject: function (t) {
        return (
          "object" === J.type(t) &&
          !t.nodeType &&
          !J.isWindow(t) &&
          !(t.constructor && !G.call(t.constructor.prototype, "isPrototypeOf"))
        );
      },
      isEmptyObject: function (t) {
        var e;
        for (e in t) return !1;
        return !0;
      },
      type: function (t) {
        return null == t
          ? t + ""
          : "object" == typeof t || "function" == typeof t
          ? U[V.call(t)] || "object"
          : typeof t;
      },
      globalEval: function (t) {
        var e,
          i = eval;
        (t = J.trim(t)),
          t &&
            (1 === t.indexOf("use strict")
              ? ((e = Z.createElement("script")),
                (e.text = t),
                Z.head.appendChild(e).parentNode.removeChild(e))
              : i(t));
      },
      camelCase: function (t) {
        return t.replace(et, "ms-").replace(it, nt);
      },
      nodeName: function (t, e) {
        return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase();
      },
      each: function (t, e, n) {
        var r,
          s = 0,
          o = t.length,
          a = i(t);
        if (n) {
          if (a) for (; o > s && ((r = e.apply(t[s], n)), r !== !1); s++);
          else for (s in t) if (((r = e.apply(t[s], n)), r === !1)) break;
        } else if (a)
          for (; o > s && ((r = e.call(t[s], s, t[s])), r !== !1); s++);
        else for (s in t) if (((r = e.call(t[s], s, t[s])), r === !1)) break;
        return t;
      },
      trim: function (t) {
        return null == t ? "" : (t + "").replace(tt, "");
      },
      makeArray: function (t, e) {
        var n = e || [];
        return (
          null != t &&
            (i(Object(t))
              ? J.merge(n, "string" == typeof t ? [t] : t)
              : X.call(n, t)),
          n
        );
      },
      inArray: function (t, e, i) {
        return null == e ? -1 : Y.call(e, t, i);
      },
      merge: function (t, e) {
        for (var i = +e.length, n = 0, r = t.length; i > n; n++) t[r++] = e[n];
        return (t.length = r), t;
      },
      grep: function (t, e, i) {
        for (var n, r = [], s = 0, o = t.length, a = !i; o > s; s++)
          (n = !e(t[s], s)), n !== a && r.push(t[s]);
        return r;
      },
      map: function (t, e, n) {
        var r,
          s = 0,
          o = t.length,
          a = i(t),
          l = [];
        if (a) for (; o > s; s++) (r = e(t[s], s, n)), null != r && l.push(r);
        else for (s in t) (r = e(t[s], s, n)), null != r && l.push(r);
        return q.apply([], l);
      },
      guid: 1,
      proxy: function (t, e) {
        var i, n, r;
        return (
          "string" == typeof e && ((i = t[e]), (e = t), (t = i)),
          J.isFunction(t)
            ? ((n = B.call(arguments, 2)),
              (r = function () {
                return t.apply(e || this, n.concat(B.call(arguments)));
              }),
              (r.guid = t.guid = t.guid || J.guid++),
              r)
            : void 0
        );
      },
      now: Date.now,
      support: Q,
    }),
    J.each(
      "Boolean Number String Function Array Date RegExp Object Error".split(
        " "
      ),
      function (t, e) {
        U["[object " + e + "]"] = e.toLowerCase();
      }
    );
  var rt = (function (t) {
    function e(t, e, i, n) {
      var r, s, o, a, l, u, c, p, d, m;
      if (
        ((e ? e.ownerDocument || e : z) !== R && M(e),
        (e = e || R),
        (i = i || []),
        !t || "string" != typeof t)
      )
        return i;
      if (1 !== (a = e.nodeType) && 9 !== a) return [];
      if (E && !n) {
        if ((r = vt.exec(t)))
          if ((o = r[1])) {
            if (9 === a) {
              if (((s = e.getElementById(o)), !s || !s.parentNode)) return i;
              if (s.id === o) return i.push(s), i;
            } else if (
              e.ownerDocument &&
              (s = e.ownerDocument.getElementById(o)) &&
              I(e, s) &&
              s.id === o
            )
              return i.push(s), i;
          } else {
            if (r[2]) return J.apply(i, e.getElementsByTagName(t)), i;
            if (
              (o = r[3]) &&
              T.getElementsByClassName &&
              e.getElementsByClassName
            )
              return J.apply(i, e.getElementsByClassName(o)), i;
          }
        if (T.qsa && (!L || !L.test(t))) {
          if (
            ((p = c = H),
            (d = e),
            (m = 9 === a && t),
            1 === a && "object" !== e.nodeName.toLowerCase())
          ) {
            for (
              u = S(t),
                (c = e.getAttribute("id"))
                  ? (p = c.replace(xt, "\\$&"))
                  : e.setAttribute("id", p),
                p = "[id='" + p + "'] ",
                l = u.length;
              l--;

            )
              u[l] = p + f(u[l]);
            (d = (yt.test(t) && h(e.parentNode)) || e), (m = u.join(","));
          }
          if (m)
            try {
              return J.apply(i, d.querySelectorAll(m)), i;
            } catch (g) {
            } finally {
              c || e.removeAttribute("id");
            }
        }
      }
      return k(t.replace(lt, "$1"), e, i, n);
    }
    function i() {
      function t(i, n) {
        return (
          e.push(i + " ") > w.cacheLength && delete t[e.shift()],
          (t[i + " "] = n)
        );
      }
      var e = [];
      return t;
    }
    function n(t) {
      return (t[H] = !0), t;
    }
    function r(t) {
      var e = R.createElement("div");
      try {
        return !!t(e);
      } catch (i) {
        return !1;
      } finally {
        e.parentNode && e.parentNode.removeChild(e), (e = null);
      }
    }
    function s(t, e) {
      for (var i = t.split("|"), n = t.length; n--; ) w.attrHandle[i[n]] = e;
    }
    function o(t, e) {
      var i = e && t,
        n =
          i &&
          1 === t.nodeType &&
          1 === e.nodeType &&
          (~e.sourceIndex || V) - (~t.sourceIndex || V);
      if (n) return n;
      if (i) for (; (i = i.nextSibling); ) if (i === e) return -1;
      return t ? 1 : -1;
    }
    function a(t) {
      return function (e) {
        var i = e.nodeName.toLowerCase();
        return "input" === i && e.type === t;
      };
    }
    function l(t) {
      return function (e) {
        var i = e.nodeName.toLowerCase();
        return ("input" === i || "button" === i) && e.type === t;
      };
    }
    function u(t) {
      return n(function (e) {
        return (
          (e = +e),
          n(function (i, n) {
            for (var r, s = t([], i.length, e), o = s.length; o--; )
              i[(r = s[o])] && (i[r] = !(n[r] = i[r]));
          })
        );
      });
    }
    function h(t) {
      return t && typeof t.getElementsByTagName !== U && t;
    }
    function c() {}
    function f(t) {
      for (var e = 0, i = t.length, n = ""; i > e; e++) n += t[e].value;
      return n;
    }
    function p(t, e, i) {
      var n = e.dir,
        r = i && "parentNode" === n,
        s = $++;
      return e.first
        ? function (e, i, s) {
            for (; (e = e[n]); ) if (1 === e.nodeType || r) return t(e, i, s);
          }
        : function (e, i, o) {
            var a,
              l,
              u = [W, s];
            if (o) {
              for (; (e = e[n]); )
                if ((1 === e.nodeType || r) && t(e, i, o)) return !0;
            } else
              for (; (e = e[n]); )
                if (1 === e.nodeType || r) {
                  if (
                    ((l = e[H] || (e[H] = {})),
                    (a = l[n]) && a[0] === W && a[1] === s)
                  )
                    return (u[2] = a[2]);
                  if (((l[n] = u), (u[2] = t(e, i, o)))) return !0;
                }
          };
    }
    function d(t) {
      return t.length > 1
        ? function (e, i, n) {
            for (var r = t.length; r--; ) if (!t[r](e, i, n)) return !1;
            return !0;
          }
        : t[0];
    }
    function m(t, i, n) {
      for (var r = 0, s = i.length; s > r; r++) e(t, i[r], n);
      return n;
    }
    function g(t, e, i, n, r) {
      for (var s, o = [], a = 0, l = t.length, u = null != e; l > a; a++)
        (s = t[a]) && (!i || i(s, n, r)) && (o.push(s), u && e.push(a));
      return o;
    }
    function _(t, e, i, r, s, o) {
      return (
        r && !r[H] && (r = _(r)),
        s && !s[H] && (s = _(s, o)),
        n(function (n, o, a, l) {
          var u,
            h,
            c,
            f = [],
            p = [],
            d = o.length,
            _ = n || m(e || "*", a.nodeType ? [a] : a, []),
            v = !t || (!n && e) ? _ : g(_, f, t, a, l),
            y = i ? (s || (n ? t : d || r) ? [] : o) : v;
          if ((i && i(v, y, a, l), r))
            for (u = g(y, p), r(u, [], a, l), h = u.length; h--; )
              (c = u[h]) && (y[p[h]] = !(v[p[h]] = c));
          if (n) {
            if (s || t) {
              if (s) {
                for (u = [], h = y.length; h--; )
                  (c = y[h]) && u.push((v[h] = c));
                s(null, (y = []), u, l);
              }
              for (h = y.length; h--; )
                (c = y[h]) &&
                  (u = s ? et.call(n, c) : f[h]) > -1 &&
                  (n[u] = !(o[u] = c));
            }
          } else (y = g(y === o ? y.splice(d, y.length) : y)), s ? s(null, o, y, l) : J.apply(o, y);
        })
      );
    }
    function v(t) {
      for (
        var e,
          i,
          n,
          r = t.length,
          s = w.relative[t[0].type],
          o = s || w.relative[" "],
          a = s ? 1 : 0,
          l = p(
            function (t) {
              return t === e;
            },
            o,
            !0
          ),
          u = p(
            function (t) {
              return et.call(e, t) > -1;
            },
            o,
            !0
          ),
          h = [
            function (t, i, n) {
              return (
                (!s && (n || i !== O)) ||
                ((e = i).nodeType ? l(t, i, n) : u(t, i, n))
              );
            },
          ];
        r > a;
        a++
      )
        if ((i = w.relative[t[a].type])) h = [p(d(h), i)];
        else {
          if (((i = w.filter[t[a].type].apply(null, t[a].matches)), i[H])) {
            for (n = ++a; r > n && !w.relative[t[n].type]; n++);
            return _(
              a > 1 && d(h),
              a > 1 &&
                f(
                  t
                    .slice(0, a - 1)
                    .concat({ value: " " === t[a - 2].type ? "*" : "" })
                ).replace(lt, "$1"),
              i,
              n > a && v(t.slice(a, n)),
              r > n && v((t = t.slice(n))),
              r > n && f(t)
            );
          }
          h.push(i);
        }
      return d(h);
    }
    function y(t, i) {
      var r = i.length > 0,
        s = t.length > 0,
        o = function (n, o, a, l, u) {
          var h,
            c,
            f,
            p = 0,
            d = "0",
            m = n && [],
            _ = [],
            v = O,
            y = n || (s && w.find.TAG("*", u)),
            x = (W += null == v ? 1 : Math.random() || 0.1),
            T = y.length;
          for (u && (O = o !== R && o); d !== T && null != (h = y[d]); d++) {
            if (s && h) {
              for (c = 0; (f = t[c++]); )
                if (f(h, o, a)) {
                  l.push(h);
                  break;
                }
              u && (W = x);
            }
            r && ((h = !f && h) && p--, n && m.push(h));
          }
          if (((p += d), r && d !== p)) {
            for (c = 0; (f = i[c++]); ) f(m, _, o, a);
            if (n) {
              if (p > 0) for (; d--; ) m[d] || _[d] || (_[d] = Z.call(l));
              _ = g(_);
            }
            J.apply(l, _),
              u && !n && _.length > 0 && p + i.length > 1 && e.uniqueSort(l);
          }
          return u && ((W = x), (O = v)), m;
        };
      return r ? n(o) : o;
    }
    var x,
      T,
      w,
      b,
      P,
      S,
      C,
      k,
      O,
      D,
      A,
      M,
      R,
      N,
      E,
      L,
      j,
      F,
      I,
      H = "sizzle" + -new Date(),
      z = t.document,
      W = 0,
      $ = 0,
      B = i(),
      q = i(),
      X = i(),
      Y = function (t, e) {
        return t === e && (A = !0), 0;
      },
      U = "undefined",
      V = 1 << 31,
      G = {}.hasOwnProperty,
      Q = [],
      Z = Q.pop,
      K = Q.push,
      J = Q.push,
      tt = Q.slice,
      et =
        Q.indexOf ||
        function (t) {
          for (var e = 0, i = this.length; i > e; e++)
            if (this[e] === t) return e;
          return -1;
        },
      it =
        "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
      nt = "[\\x20\\t\\r\\n\\f]",
      rt = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
      st = rt.replace("w", "w#"),
      ot =
        "\\[" +
        nt +
        "*(" +
        rt +
        ")(?:" +
        nt +
        "*([*^$|!~]?=)" +
        nt +
        "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" +
        st +
        "))|)" +
        nt +
        "*\\]",
      at =
        ":(" +
        rt +
        ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" +
        ot +
        ")*)|.*)\\)|)",
      lt = new RegExp(
        "^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$",
        "g"
      ),
      ut = new RegExp("^" + nt + "*," + nt + "*"),
      ht = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
      ct = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
      ft = new RegExp(at),
      pt = new RegExp("^" + st + "$"),
      dt = {
        ID: new RegExp("^#(" + rt + ")"),
        CLASS: new RegExp("^\\.(" + rt + ")"),
        TAG: new RegExp("^(" + rt.replace("w", "w*") + ")"),
        ATTR: new RegExp("^" + ot),
        PSEUDO: new RegExp("^" + at),
        CHILD: new RegExp(
          "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" +
            nt +
            "*(even|odd|(([+-]|)(\\d*)n|)" +
            nt +
            "*(?:([+-]|)" +
            nt +
            "*(\\d+)|))" +
            nt +
            "*\\)|)",
          "i"
        ),
        bool: new RegExp("^(?:" + it + ")$", "i"),
        needsContext: new RegExp(
          "^" +
            nt +
            "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
            nt +
            "*((?:-\\d)?\\d*)" +
            nt +
            "*\\)|)(?=[^-]|$)",
          "i"
        ),
      },
      mt = /^(?:input|select|textarea|button)$/i,
      gt = /^h\d$/i,
      _t = /^[^{]+\{\s*\[native \w/,
      vt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
      yt = /[+~]/,
      xt = /'|\\/g,
      Tt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
      wt = function (t, e, i) {
        var n = "0x" + e - 65536;
        return n !== n || i
          ? e
          : 0 > n
          ? String.fromCharCode(n + 65536)
          : String.fromCharCode((n >> 10) | 55296, (1023 & n) | 56320);
      };
    try {
      J.apply((Q = tt.call(z.childNodes)), z.childNodes),
        Q[z.childNodes.length].nodeType;
    } catch (bt) {
      J = {
        apply: Q.length
          ? function (t, e) {
              K.apply(t, tt.call(e));
            }
          : function (t, e) {
              for (var i = t.length, n = 0; (t[i++] = e[n++]); );
              t.length = i - 1;
            },
      };
    }
    (T = e.support = {}),
      (P = e.isXML =
        function (t) {
          var e = t && (t.ownerDocument || t).documentElement;
          return !!e && "HTML" !== e.nodeName;
        }),
      (M = e.setDocument =
        function (t) {
          var e,
            i = t ? t.ownerDocument || t : z,
            n = i.defaultView;
          return i !== R && 9 === i.nodeType && i.documentElement
            ? ((R = i),
              (N = i.documentElement),
              (E = !P(i)),
              n &&
                n !== n.top &&
                (n.addEventListener
                  ? n.addEventListener(
                      "unload",
                      function () {
                        M();
                      },
                      !1
                    )
                  : n.attachEvent &&
                    n.attachEvent("onunload", function () {
                      M();
                    })),
              (T.attributes = r(function (t) {
                return (t.className = "i"), !t.getAttribute("className");
              })),
              (T.getElementsByTagName = r(function (t) {
                return (
                  t.appendChild(i.createComment("")),
                  !t.getElementsByTagName("*").length
                );
              })),
              (T.getElementsByClassName =
                _t.test(i.getElementsByClassName) &&
                r(function (t) {
                  return (
                    (t.innerHTML =
                      "<div class='a'></div><div class='a i'></div>"),
                    (t.firstChild.className = "i"),
                    2 === t.getElementsByClassName("i").length
                  );
                })),
              (T.getById = r(function (t) {
                return (
                  (N.appendChild(t).id = H),
                  !i.getElementsByName || !i.getElementsByName(H).length
                );
              })),
              T.getById
                ? ((w.find.ID = function (t, e) {
                    if (typeof e.getElementById !== U && E) {
                      var i = e.getElementById(t);
                      return i && i.parentNode ? [i] : [];
                    }
                  }),
                  (w.filter.ID = function (t) {
                    var e = t.replace(Tt, wt);
                    return function (t) {
                      return t.getAttribute("id") === e;
                    };
                  }))
                : (delete w.find.ID,
                  (w.filter.ID = function (t) {
                    var e = t.replace(Tt, wt);
                    return function (t) {
                      var i =
                        typeof t.getAttributeNode !== U &&
                        t.getAttributeNode("id");
                      return i && i.value === e;
                    };
                  })),
              (w.find.TAG = T.getElementsByTagName
                ? function (t, e) {
                    return typeof e.getElementsByTagName !== U
                      ? e.getElementsByTagName(t)
                      : void 0;
                  }
                : function (t, e) {
                    var i,
                      n = [],
                      r = 0,
                      s = e.getElementsByTagName(t);
                    if ("*" === t) {
                      for (; (i = s[r++]); ) 1 === i.nodeType && n.push(i);
                      return n;
                    }
                    return s;
                  }),
              (w.find.CLASS =
                T.getElementsByClassName &&
                function (t, e) {
                  return typeof e.getElementsByClassName !== U && E
                    ? e.getElementsByClassName(t)
                    : void 0;
                }),
              (j = []),
              (L = []),
              (T.qsa = _t.test(i.querySelectorAll)) &&
                (r(function (t) {
                  (t.innerHTML =
                    "<select msallowclip=''><option selected=''></option></select>"),
                    t.querySelectorAll("[msallowclip^='']").length &&
                      L.push("[*^$]=" + nt + "*(?:''|\"\")"),
                    t.querySelectorAll("[selected]").length ||
                      L.push("\\[" + nt + "*(?:value|" + it + ")"),
                    t.querySelectorAll(":checked").length || L.push(":checked");
                }),
                r(function (t) {
                  var e = i.createElement("input");
                  e.setAttribute("type", "hidden"),
                    t.appendChild(e).setAttribute("name", "D"),
                    t.querySelectorAll("[name=d]").length &&
                      L.push("name" + nt + "*[*^$|!~]?="),
                    t.querySelectorAll(":enabled").length ||
                      L.push(":enabled", ":disabled"),
                    t.querySelectorAll("*,:x"),
                    L.push(",.*:");
                })),
              (T.matchesSelector = _t.test(
                (F =
                  N.matches ||
                  N.webkitMatchesSelector ||
                  N.mozMatchesSelector ||
                  N.oMatchesSelector ||
                  N.msMatchesSelector)
              )) &&
                r(function (t) {
                  (T.disconnectedMatch = F.call(t, "div")),
                    F.call(t, "[s!='']:x"),
                    j.push("!=", at);
                }),
              (L = L.length && new RegExp(L.join("|"))),
              (j = j.length && new RegExp(j.join("|"))),
              (e = _t.test(N.compareDocumentPosition)),
              (I =
                e || _t.test(N.contains)
                  ? function (t, e) {
                      var i = 9 === t.nodeType ? t.documentElement : t,
                        n = e && e.parentNode;
                      return (
                        t === n ||
                        !(
                          !n ||
                          1 !== n.nodeType ||
                          !(i.contains
                            ? i.contains(n)
                            : t.compareDocumentPosition &&
                              16 & t.compareDocumentPosition(n))
                        )
                      );
                    }
                  : function (t, e) {
                      if (e)
                        for (; (e = e.parentNode); ) if (e === t) return !0;
                      return !1;
                    }),
              (Y = e
                ? function (t, e) {
                    if (t === e) return (A = !0), 0;
                    var n =
                      !t.compareDocumentPosition - !e.compareDocumentPosition;
                    return n
                      ? n
                      : ((n =
                          (t.ownerDocument || t) === (e.ownerDocument || e)
                            ? t.compareDocumentPosition(e)
                            : 1),
                        1 & n ||
                        (!T.sortDetached && e.compareDocumentPosition(t) === n)
                          ? t === i || (t.ownerDocument === z && I(z, t))
                            ? -1
                            : e === i || (e.ownerDocument === z && I(z, e))
                            ? 1
                            : D
                            ? et.call(D, t) - et.call(D, e)
                            : 0
                          : 4 & n
                          ? -1
                          : 1);
                  }
                : function (t, e) {
                    if (t === e) return (A = !0), 0;
                    var n,
                      r = 0,
                      s = t.parentNode,
                      a = e.parentNode,
                      l = [t],
                      u = [e];
                    if (!s || !a)
                      return t === i
                        ? -1
                        : e === i
                        ? 1
                        : s
                        ? -1
                        : a
                        ? 1
                        : D
                        ? et.call(D, t) - et.call(D, e)
                        : 0;
                    if (s === a) return o(t, e);
                    for (n = t; (n = n.parentNode); ) l.unshift(n);
                    for (n = e; (n = n.parentNode); ) u.unshift(n);
                    for (; l[r] === u[r]; ) r++;
                    return r
                      ? o(l[r], u[r])
                      : l[r] === z
                      ? -1
                      : u[r] === z
                      ? 1
                      : 0;
                  }),
              i)
            : R;
        }),
      (e.matches = function (t, i) {
        return e(t, null, null, i);
      }),
      (e.matchesSelector = function (t, i) {
        if (
          ((t.ownerDocument || t) !== R && M(t),
          (i = i.replace(ct, "='$1']")),
          !(!T.matchesSelector || !E || (j && j.test(i)) || (L && L.test(i))))
        )
          try {
            var n = F.call(t, i);
            if (
              n ||
              T.disconnectedMatch ||
              (t.document && 11 !== t.document.nodeType)
            )
              return n;
          } catch (r) {}
        return e(i, R, null, [t]).length > 0;
      }),
      (e.contains = function (t, e) {
        return (t.ownerDocument || t) !== R && M(t), I(t, e);
      }),
      (e.attr = function (t, e) {
        (t.ownerDocument || t) !== R && M(t);
        var i = w.attrHandle[e.toLowerCase()],
          n = i && G.call(w.attrHandle, e.toLowerCase()) ? i(t, e, !E) : void 0;
        return void 0 !== n
          ? n
          : T.attributes || !E
          ? t.getAttribute(e)
          : (n = t.getAttributeNode(e)) && n.specified
          ? n.value
          : null;
      }),
      (e.error = function (t) {
        throw new Error("Syntax error, unrecognized expression: " + t);
      }),
      (e.uniqueSort = function (t) {
        var e,
          i = [],
          n = 0,
          r = 0;
        if (
          ((A = !T.detectDuplicates),
          (D = !T.sortStable && t.slice(0)),
          t.sort(Y),
          A)
        ) {
          for (; (e = t[r++]); ) e === t[r] && (n = i.push(r));
          for (; n--; ) t.splice(i[n], 1);
        }
        return (D = null), t;
      }),
      (b = e.getText =
        function (t) {
          var e,
            i = "",
            n = 0,
            r = t.nodeType;
          if (r) {
            if (1 === r || 9 === r || 11 === r) {
              if ("string" == typeof t.textContent) return t.textContent;
              for (t = t.firstChild; t; t = t.nextSibling) i += b(t);
            } else if (3 === r || 4 === r) return t.nodeValue;
          } else for (; (e = t[n++]); ) i += b(e);
          return i;
        }),
      (w = e.selectors =
        {
          cacheLength: 50,
          createPseudo: n,
          match: dt,
          attrHandle: {},
          find: {},
          relative: {
            ">": { dir: "parentNode", first: !0 },
            " ": { dir: "parentNode" },
            "+": { dir: "previousSibling", first: !0 },
            "~": { dir: "previousSibling" },
          },
          preFilter: {
            ATTR: function (t) {
              return (
                (t[1] = t[1].replace(Tt, wt)),
                (t[3] = (t[3] || t[4] || t[5] || "").replace(Tt, wt)),
                "~=" === t[2] && (t[3] = " " + t[3] + " "),
                t.slice(0, 4)
              );
            },
            CHILD: function (t) {
              return (
                (t[1] = t[1].toLowerCase()),
                "nth" === t[1].slice(0, 3)
                  ? (t[3] || e.error(t[0]),
                    (t[4] = +(t[4]
                      ? t[5] + (t[6] || 1)
                      : 2 * ("even" === t[3] || "odd" === t[3]))),
                    (t[5] = +(t[7] + t[8] || "odd" === t[3])))
                  : t[3] && e.error(t[0]),
                t
              );
            },
            PSEUDO: function (t) {
              var e,
                i = !t[6] && t[2];
              return dt.CHILD.test(t[0])
                ? null
                : (t[3]
                    ? (t[2] = t[4] || t[5] || "")
                    : i &&
                      ft.test(i) &&
                      (e = S(i, !0)) &&
                      (e = i.indexOf(")", i.length - e) - i.length) &&
                      ((t[0] = t[0].slice(0, e)), (t[2] = i.slice(0, e))),
                  t.slice(0, 3));
            },
          },
          filter: {
            TAG: function (t) {
              var e = t.replace(Tt, wt).toLowerCase();
              return "*" === t
                ? function () {
                    return !0;
                  }
                : function (t) {
                    return t.nodeName && t.nodeName.toLowerCase() === e;
                  };
            },
            CLASS: function (t) {
              var e = B[t + " "];
              return (
                e ||
                ((e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) &&
                  B(t, function (t) {
                    return e.test(
                      ("string" == typeof t.className && t.className) ||
                        (typeof t.getAttribute !== U &&
                          t.getAttribute("class")) ||
                        ""
                    );
                  }))
              );
            },
            ATTR: function (t, i, n) {
              return function (r) {
                var s = e.attr(r, t);
                return null == s
                  ? "!=" === i
                  : !i ||
                      ((s += ""),
                      "=" === i
                        ? s === n
                        : "!=" === i
                        ? s !== n
                        : "^=" === i
                        ? n && 0 === s.indexOf(n)
                        : "*=" === i
                        ? n && s.indexOf(n) > -1
                        : "$=" === i
                        ? n && s.slice(-n.length) === n
                        : "~=" === i
                        ? (" " + s + " ").indexOf(n) > -1
                        : "|=" === i &&
                          (s === n || s.slice(0, n.length + 1) === n + "-"));
              };
            },
            CHILD: function (t, e, i, n, r) {
              var s = "nth" !== t.slice(0, 3),
                o = "last" !== t.slice(-4),
                a = "of-type" === e;
              return 1 === n && 0 === r
                ? function (t) {
                    return !!t.parentNode;
                  }
                : function (e, i, l) {
                    var u,
                      h,
                      c,
                      f,
                      p,
                      d,
                      m = s !== o ? "nextSibling" : "previousSibling",
                      g = e.parentNode,
                      _ = a && e.nodeName.toLowerCase(),
                      v = !l && !a;
                    if (g) {
                      if (s) {
                        for (; m; ) {
                          for (c = e; (c = c[m]); )
                            if (
                              a
                                ? c.nodeName.toLowerCase() === _
                                : 1 === c.nodeType
                            )
                              return !1;
                          d = m = "only" === t && !d && "nextSibling";
                        }
                        return !0;
                      }
                      if (((d = [o ? g.firstChild : g.lastChild]), o && v)) {
                        for (
                          h = g[H] || (g[H] = {}),
                            u = h[t] || [],
                            p = u[0] === W && u[1],
                            f = u[0] === W && u[2],
                            c = p && g.childNodes[p];
                          (c = (++p && c && c[m]) || (f = p = 0) || d.pop());

                        )
                          if (1 === c.nodeType && ++f && c === e) {
                            h[t] = [W, p, f];
                            break;
                          }
                      } else if (
                        v &&
                        (u = (e[H] || (e[H] = {}))[t]) &&
                        u[0] === W
                      )
                        f = u[1];
                      else
                        for (
                          ;
                          (c = (++p && c && c[m]) || (f = p = 0) || d.pop()) &&
                          ((a
                            ? c.nodeName.toLowerCase() !== _
                            : 1 !== c.nodeType) ||
                            !++f ||
                            (v && ((c[H] || (c[H] = {}))[t] = [W, f]),
                            c !== e));

                        );
                      return (f -= r), f === n || (f % n === 0 && f / n >= 0);
                    }
                  };
            },
            PSEUDO: function (t, i) {
              var r,
                s =
                  w.pseudos[t] ||
                  w.setFilters[t.toLowerCase()] ||
                  e.error("unsupported pseudo: " + t);
              return s[H]
                ? s(i)
                : s.length > 1
                ? ((r = [t, t, "", i]),
                  w.setFilters.hasOwnProperty(t.toLowerCase())
                    ? n(function (t, e) {
                        for (var n, r = s(t, i), o = r.length; o--; )
                          (n = et.call(t, r[o])), (t[n] = !(e[n] = r[o]));
                      })
                    : function (t) {
                        return s(t, 0, r);
                      })
                : s;
            },
          },
          pseudos: {
            not: n(function (t) {
              var e = [],
                i = [],
                r = C(t.replace(lt, "$1"));
              return r[H]
                ? n(function (t, e, i, n) {
                    for (var s, o = r(t, null, n, []), a = t.length; a--; )
                      (s = o[a]) && (t[a] = !(e[a] = s));
                  })
                : function (t, n, s) {
                    return (e[0] = t), r(e, null, s, i), !i.pop();
                  };
            }),
            has: n(function (t) {
              return function (i) {
                return e(t, i).length > 0;
              };
            }),
            contains: n(function (t) {
              return function (e) {
                return (e.textContent || e.innerText || b(e)).indexOf(t) > -1;
              };
            }),
            lang: n(function (t) {
              return (
                pt.test(t || "") || e.error("unsupported lang: " + t),
                (t = t.replace(Tt, wt).toLowerCase()),
                function (e) {
                  var i;
                  do
                    if (
                      (i = E
                        ? e.lang
                        : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                    )
                      return (
                        (i = i.toLowerCase()),
                        i === t || 0 === i.indexOf(t + "-")
                      );
                  while ((e = e.parentNode) && 1 === e.nodeType);
                  return !1;
                }
              );
            }),
            target: function (e) {
              var i = t.location && t.location.hash;
              return i && i.slice(1) === e.id;
            },
            root: function (t) {
              return t === N;
            },
            focus: function (t) {
              return (
                t === R.activeElement &&
                (!R.hasFocus || R.hasFocus()) &&
                !!(t.type || t.href || ~t.tabIndex)
              );
            },
            enabled: function (t) {
              return t.disabled === !1;
            },
            disabled: function (t) {
              return t.disabled === !0;
            },
            checked: function (t) {
              var e = t.nodeName.toLowerCase();
              return (
                ("input" === e && !!t.checked) ||
                ("option" === e && !!t.selected)
              );
            },
            selected: function (t) {
              return (
                t.parentNode && t.parentNode.selectedIndex, t.selected === !0
              );
            },
            empty: function (t) {
              for (t = t.firstChild; t; t = t.nextSibling)
                if (t.nodeType < 6) return !1;
              return !0;
            },
            parent: function (t) {
              return !w.pseudos.empty(t);
            },
            header: function (t) {
              return gt.test(t.nodeName);
            },
            input: function (t) {
              return mt.test(t.nodeName);
            },
            button: function (t) {
              var e = t.nodeName.toLowerCase();
              return ("input" === e && "button" === t.type) || "button" === e;
            },
            text: function (t) {
              var e;
              return (
                "input" === t.nodeName.toLowerCase() &&
                "text" === t.type &&
                (null == (e = t.getAttribute("type")) ||
                  "text" === e.toLowerCase())
              );
            },
            first: u(function () {
              return [0];
            }),
            last: u(function (t, e) {
              return [e - 1];
            }),
            eq: u(function (t, e, i) {
              return [0 > i ? i + e : i];
            }),
            even: u(function (t, e) {
              for (var i = 0; e > i; i += 2) t.push(i);
              return t;
            }),
            odd: u(function (t, e) {
              for (var i = 1; e > i; i += 2) t.push(i);
              return t;
            }),
            lt: u(function (t, e, i) {
              for (var n = 0 > i ? i + e : i; --n >= 0; ) t.push(n);
              return t;
            }),
            gt: u(function (t, e, i) {
              for (var n = 0 > i ? i + e : i; ++n < e; ) t.push(n);
              return t;
            }),
          },
        }),
      (w.pseudos.nth = w.pseudos.eq);
    for (x in { radio: !0, checkbox: !0, file: !0, password: !0, image: !0 })
      w.pseudos[x] = a(x);
    for (x in { submit: !0, reset: !0 }) w.pseudos[x] = l(x);
    return (
      (c.prototype = w.filters = w.pseudos),
      (w.setFilters = new c()),
      (S = e.tokenize =
        function (t, i) {
          var n,
            r,
            s,
            o,
            a,
            l,
            u,
            h = q[t + " "];
          if (h) return i ? 0 : h.slice(0);
          for (a = t, l = [], u = w.preFilter; a; ) {
            (!n || (r = ut.exec(a))) &&
              (r && (a = a.slice(r[0].length) || a), l.push((s = []))),
              (n = !1),
              (r = ht.exec(a)) &&
                ((n = r.shift()),
                s.push({ value: n, type: r[0].replace(lt, " ") }),
                (a = a.slice(n.length)));
            for (o in w.filter)
              !(r = dt[o].exec(a)) ||
                (u[o] && !(r = u[o](r))) ||
                ((n = r.shift()),
                s.push({ value: n, type: o, matches: r }),
                (a = a.slice(n.length)));
            if (!n) break;
          }
          return i ? a.length : a ? e.error(t) : q(t, l).slice(0);
        }),
      (C = e.compile =
        function (t, e) {
          var i,
            n = [],
            r = [],
            s = X[t + " "];
          if (!s) {
            for (e || (e = S(t)), i = e.length; i--; )
              (s = v(e[i])), s[H] ? n.push(s) : r.push(s);
            (s = X(t, y(r, n))), (s.selector = t);
          }
          return s;
        }),
      (k = e.select =
        function (t, e, i, n) {
          var r,
            s,
            o,
            a,
            l,
            u = "function" == typeof t && t,
            c = !n && S((t = u.selector || t));
          if (((i = i || []), 1 === c.length)) {
            if (
              ((s = c[0] = c[0].slice(0)),
              s.length > 2 &&
                "ID" === (o = s[0]).type &&
                T.getById &&
                9 === e.nodeType &&
                E &&
                w.relative[s[1].type])
            ) {
              if (
                ((e = (w.find.ID(o.matches[0].replace(Tt, wt), e) || [])[0]),
                !e)
              )
                return i;
              u && (e = e.parentNode), (t = t.slice(s.shift().value.length));
            }
            for (
              r = dt.needsContext.test(t) ? 0 : s.length;
              r-- && ((o = s[r]), !w.relative[(a = o.type)]);

            )
              if (
                (l = w.find[a]) &&
                (n = l(
                  o.matches[0].replace(Tt, wt),
                  (yt.test(s[0].type) && h(e.parentNode)) || e
                ))
              ) {
                if ((s.splice(r, 1), (t = n.length && f(s)), !t))
                  return J.apply(i, n), i;
                break;
              }
          }
          return (
            (u || C(t, c))(n, e, !E, i, (yt.test(t) && h(e.parentNode)) || e), i
          );
        }),
      (T.sortStable = H.split("").sort(Y).join("") === H),
      (T.detectDuplicates = !!A),
      M(),
      (T.sortDetached = r(function (t) {
        return 1 & t.compareDocumentPosition(R.createElement("div"));
      })),
      r(function (t) {
        return (
          (t.innerHTML = "<a href='#'></a>"),
          "#" === t.firstChild.getAttribute("href")
        );
      }) ||
        s("type|href|height|width", function (t, e, i) {
          return i
            ? void 0
            : t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2);
        }),
      (T.attributes &&
        r(function (t) {
          return (
            (t.innerHTML = "<input/>"),
            t.firstChild.setAttribute("value", ""),
            "" === t.firstChild.getAttribute("value")
          );
        })) ||
        s("value", function (t, e, i) {
          return i || "input" !== t.nodeName.toLowerCase()
            ? void 0
            : t.defaultValue;
        }),
      r(function (t) {
        return null == t.getAttribute("disabled");
      }) ||
        s(it, function (t, e, i) {
          var n;
          return i
            ? void 0
            : t[e] === !0
            ? e.toLowerCase()
            : (n = t.getAttributeNode(e)) && n.specified
            ? n.value
            : null;
        }),
      e
    );
  })(t);
  (J.find = rt),
    (J.expr = rt.selectors),
    (J.expr[":"] = J.expr.pseudos),
    (J.unique = rt.uniqueSort),
    (J.text = rt.getText),
    (J.isXMLDoc = rt.isXML),
    (J.contains = rt.contains);
  var st = J.expr.match.needsContext,
    ot = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    at = /^.[^:#\[\.,]*$/;
  (J.filter = function (t, e, i) {
    var n = e[0];
    return (
      i && (t = ":not(" + t + ")"),
      1 === e.length && 1 === n.nodeType
        ? J.find.matchesSelector(n, t)
          ? [n]
          : []
        : J.find.matches(
            t,
            J.grep(e, function (t) {
              return 1 === t.nodeType;
            })
          )
    );
  }),
    J.fn.extend({
      find: function (t) {
        var e,
          i = this.length,
          n = [],
          r = this;
        if ("string" != typeof t)
          return this.pushStack(
            J(t).filter(function () {
              for (e = 0; i > e; e++) if (J.contains(r[e], this)) return !0;
            })
          );
        for (e = 0; i > e; e++) J.find(t, r[e], n);
        return (
          (n = this.pushStack(i > 1 ? J.unique(n) : n)),
          (n.selector = this.selector ? this.selector + " " + t : t),
          n
        );
      },
      filter: function (t) {
        return this.pushStack(n(this, t || [], !1));
      },
      not: function (t) {
        return this.pushStack(n(this, t || [], !0));
      },
      is: function (t) {
        return !!n(
          this,
          "string" == typeof t && st.test(t) ? J(t) : t || [],
          !1
        ).length;
      },
    });
  var lt,
    ut = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    ht = (J.fn.init = function (t, e) {
      var i, n;
      if (!t) return this;
      if ("string" == typeof t) {
        if (
          ((i =
            "<" === t[0] && ">" === t[t.length - 1] && t.length >= 3
              ? [null, t, null]
              : ut.exec(t)),
          !i || (!i[1] && e))
        )
          return !e || e.jquery
            ? (e || lt).find(t)
            : this.constructor(e).find(t);
        if (i[1]) {
          if (
            ((e = e instanceof J ? e[0] : e),
            J.merge(
              this,
              J.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : Z, !0)
            ),
            ot.test(i[1]) && J.isPlainObject(e))
          )
            for (i in e)
              J.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
          return this;
        }
        return (
          (n = Z.getElementById(i[2])),
          n && n.parentNode && ((this.length = 1), (this[0] = n)),
          (this.context = Z),
          (this.selector = t),
          this
        );
      }
      return t.nodeType
        ? ((this.context = this[0] = t), (this.length = 1), this)
        : J.isFunction(t)
        ? "undefined" != typeof lt.ready
          ? lt.ready(t)
          : t(J)
        : (void 0 !== t.selector &&
            ((this.selector = t.selector), (this.context = t.context)),
          J.makeArray(t, this));
    });
  (ht.prototype = J.fn), (lt = J(Z));
  var ct = /^(?:parents|prev(?:Until|All))/,
    ft = { children: !0, contents: !0, next: !0, prev: !0 };
  J.extend({
    dir: function (t, e, i) {
      for (var n = [], r = void 0 !== i; (t = t[e]) && 9 !== t.nodeType; )
        if (1 === t.nodeType) {
          if (r && J(t).is(i)) break;
          n.push(t);
        }
      return n;
    },
    sibling: function (t, e) {
      for (var i = []; t; t = t.nextSibling)
        1 === t.nodeType && t !== e && i.push(t);
      return i;
    },
  }),
    J.fn.extend({
      has: function (t) {
        var e = J(t, this),
          i = e.length;
        return this.filter(function () {
          for (var t = 0; i > t; t++) if (J.contains(this, e[t])) return !0;
        });
      },
      closest: function (t, e) {
        for (
          var i,
            n = 0,
            r = this.length,
            s = [],
            o =
              st.test(t) || "string" != typeof t ? J(t, e || this.context) : 0;
          r > n;
          n++
        )
          for (i = this[n]; i && i !== e; i = i.parentNode)
            if (
              i.nodeType < 11 &&
              (o
                ? o.index(i) > -1
                : 1 === i.nodeType && J.find.matchesSelector(i, t))
            ) {
              s.push(i);
              break;
            }
        return this.pushStack(s.length > 1 ? J.unique(s) : s);
      },
      index: function (t) {
        return t
          ? "string" == typeof t
            ? Y.call(J(t), this[0])
            : Y.call(this, t.jquery ? t[0] : t)
          : this[0] && this[0].parentNode
          ? this.first().prevAll().length
          : -1;
      },
      add: function (t, e) {
        return this.pushStack(J.unique(J.merge(this.get(), J(t, e))));
      },
      addBack: function (t) {
        return this.add(
          null == t ? this.prevObject : this.prevObject.filter(t)
        );
      },
    }),
    J.each(
      {
        parent: function (t) {
          var e = t.parentNode;
          return e && 11 !== e.nodeType ? e : null;
        },
        parents: function (t) {
          return J.dir(t, "parentNode");
        },
        parentsUntil: function (t, e, i) {
          return J.dir(t, "parentNode", i);
        },
        next: function (t) {
          return r(t, "nextSibling");
        },
        prev: function (t) {
          return r(t, "previousSibling");
        },
        nextAll: function (t) {
          return J.dir(t, "nextSibling");
        },
        prevAll: function (t) {
          return J.dir(t, "previousSibling");
        },
        nextUntil: function (t, e, i) {
          return J.dir(t, "nextSibling", i);
        },
        prevUntil: function (t, e, i) {
          return J.dir(t, "previousSibling", i);
        },
        siblings: function (t) {
          return J.sibling((t.parentNode || {}).firstChild, t);
        },
        children: function (t) {
          return J.sibling(t.firstChild);
        },
        contents: function (t) {
          return t.contentDocument || J.merge([], t.childNodes);
        },
      },
      function (t, e) {
        J.fn[t] = function (i, n) {
          var r = J.map(this, e, i);
          return (
            "Until" !== t.slice(-5) && (n = i),
            n && "string" == typeof n && (r = J.filter(n, r)),
            this.length > 1 &&
              (ft[t] || J.unique(r), ct.test(t) && r.reverse()),
            this.pushStack(r)
          );
        };
      }
    );
  var pt = /\S+/g,
    dt = {};
  (J.Callbacks = function (t) {
    t = "string" == typeof t ? dt[t] || s(t) : J.extend({}, t);
    var e,
      i,
      n,
      r,
      o,
      a,
      l = [],
      u = !t.once && [],
      h = function (s) {
        for (
          e = t.memory && s, i = !0, a = r || 0, r = 0, o = l.length, n = !0;
          l && o > a;
          a++
        )
          if (l[a].apply(s[0], s[1]) === !1 && t.stopOnFalse) {
            e = !1;
            break;
          }
        (n = !1),
          l && (u ? u.length && h(u.shift()) : e ? (l = []) : c.disable());
      },
      c = {
        add: function () {
          if (l) {
            var i = l.length;
            !(function s(e) {
              J.each(e, function (e, i) {
                var n = J.type(i);
                "function" === n
                  ? (t.unique && c.has(i)) || l.push(i)
                  : i && i.length && "string" !== n && s(i);
              });
            })(arguments),
              n ? (o = l.length) : e && ((r = i), h(e));
          }
          return this;
        },
        remove: function () {
          return (
            l &&
              J.each(arguments, function (t, e) {
                for (var i; (i = J.inArray(e, l, i)) > -1; )
                  l.splice(i, 1), n && (o >= i && o--, a >= i && a--);
              }),
            this
          );
        },
        has: function (t) {
          return t ? J.inArray(t, l) > -1 : !(!l || !l.length);
        },
        empty: function () {
          return (l = []), (o = 0), this;
        },
        disable: function () {
          return (l = u = e = void 0), this;
        },
        disabled: function () {
          return !l;
        },
        lock: function () {
          return (u = void 0), e || c.disable(), this;
        },
        locked: function () {
          return !u;
        },
        fireWith: function (t, e) {
          return (
            !l ||
              (i && !u) ||
              ((e = e || []),
              (e = [t, e.slice ? e.slice() : e]),
              n ? u.push(e) : h(e)),
            this
          );
        },
        fire: function () {
          return c.fireWith(this, arguments), this;
        },
        fired: function () {
          return !!i;
        },
      };
    return c;
  }),
    J.extend({
      Deferred: function (t) {
        var e = [
            ["resolve", "done", J.Callbacks("once memory"), "resolved"],
            ["reject", "fail", J.Callbacks("once memory"), "rejected"],
            ["notify", "progress", J.Callbacks("memory")],
          ],
          i = "pending",
          n = {
            state: function () {
              return i;
            },
            always: function () {
              return r.done(arguments).fail(arguments), this;
            },
            then: function () {
              var t = arguments;
              return J.Deferred(function (i) {
                J.each(e, function (e, s) {
                  var o = J.isFunction(t[e]) && t[e];
                  r[s[1]](function () {
                    var t = o && o.apply(this, arguments);
                    t && J.isFunction(t.promise)
                      ? t
                          .promise()
                          .done(i.resolve)
                          .fail(i.reject)
                          .progress(i.notify)
                      : i[s[0] + "With"](
                          this === n ? i.promise() : this,
                          o ? [t] : arguments
                        );
                  });
                }),
                  (t = null);
              }).promise();
            },
            promise: function (t) {
              return null != t ? J.extend(t, n) : n;
            },
          },
          r = {};
        return (
          (n.pipe = n.then),
          J.each(e, function (t, s) {
            var o = s[2],
              a = s[3];
            (n[s[1]] = o.add),
              a &&
                o.add(
                  function () {
                    i = a;
                  },
                  e[1 ^ t][2].disable,
                  e[2][2].lock
                ),
              (r[s[0]] = function () {
                return r[s[0] + "With"](this === r ? n : this, arguments), this;
              }),
              (r[s[0] + "With"] = o.fireWith);
          }),
          n.promise(r),
          t && t.call(r, r),
          r
        );
      },
      when: function (t) {
        var e,
          i,
          n,
          r = 0,
          s = B.call(arguments),
          o = s.length,
          a = 1 !== o || (t && J.isFunction(t.promise)) ? o : 0,
          l = 1 === a ? t : J.Deferred(),
          u = function (t, i, n) {
            return function (r) {
              (i[t] = this),
                (n[t] = arguments.length > 1 ? B.call(arguments) : r),
                n === e ? l.notifyWith(i, n) : --a || l.resolveWith(i, n);
            };
          };
        if (o > 1)
          for (e = new Array(o), i = new Array(o), n = new Array(o); o > r; r++)
            s[r] && J.isFunction(s[r].promise)
              ? s[r]
                  .promise()
                  .done(u(r, n, s))
                  .fail(l.reject)
                  .progress(u(r, i, e))
              : --a;
        return a || l.resolveWith(n, s), l.promise();
      },
    });
  var mt;
  (J.fn.ready = function (t) {
    return J.ready.promise().done(t), this;
  }),
    J.extend({
      isReady: !1,
      readyWait: 1,
      holdReady: function (t) {
        t ? J.readyWait++ : J.ready(!0);
      },
      ready: function (t) {
        (t === !0 ? --J.readyWait : J.isReady) ||
          ((J.isReady = !0),
          (t !== !0 && --J.readyWait > 0) ||
            (mt.resolveWith(Z, [J]),
            J.fn.triggerHandler &&
              (J(Z).triggerHandler("ready"), J(Z).off("ready"))));
      },
    }),
    (J.ready.promise = function (e) {
      return (
        mt ||
          ((mt = J.Deferred()),
          "complete" === Z.readyState
            ? setTimeout(J.ready)
            : (Z.addEventListener("DOMContentLoaded", o, !1),
              t.addEventListener("load", o, !1))),
        mt.promise(e)
      );
    }),
    J.ready.promise();
  var gt = (J.access = function (t, e, i, n, r, s, o) {
    var a = 0,
      l = t.length,
      u = null == i;
    if ("object" === J.type(i)) {
      r = !0;
      for (a in i) J.access(t, e, a, i[a], !0, s, o);
    } else if (
      void 0 !== n &&
      ((r = !0),
      J.isFunction(n) || (o = !0),
      u &&
        (o
          ? (e.call(t, n), (e = null))
          : ((u = e),
            (e = function (t, e, i) {
              return u.call(J(t), i);
            }))),
      e)
    )
      for (; l > a; a++) e(t[a], i, o ? n : n.call(t[a], a, e(t[a], i)));
    return r ? t : u ? e.call(t) : l ? e(t[0], i) : s;
  });
  (J.acceptData = function (t) {
    return 1 === t.nodeType || 9 === t.nodeType || !+t.nodeType;
  }),
    (a.uid = 1),
    (a.accepts = J.acceptData),
    (a.prototype = {
      key: function (t) {
        if (!a.accepts(t)) return 0;
        var e = {},
          i = t[this.expando];
        if (!i) {
          i = a.uid++;
          try {
            (e[this.expando] = { value: i }), Object.defineProperties(t, e);
          } catch (n) {
            (e[this.expando] = i), J.extend(t, e);
          }
        }
        return this.cache[i] || (this.cache[i] = {}), i;
      },
      set: function (t, e, i) {
        var n,
          r = this.key(t),
          s = this.cache[r];
        if ("string" == typeof e) s[e] = i;
        else if (J.isEmptyObject(s)) J.extend(this.cache[r], e);
        else for (n in e) s[n] = e[n];
        return s;
      },
      get: function (t, e) {
        var i = this.cache[this.key(t)];
        return void 0 === e ? i : i[e];
      },
      access: function (t, e, i) {
        var n;
        return void 0 === e || (e && "string" == typeof e && void 0 === i)
          ? ((n = this.get(t, e)),
            void 0 !== n ? n : this.get(t, J.camelCase(e)))
          : (this.set(t, e, i), void 0 !== i ? i : e);
      },
      remove: function (t, e) {
        var i,
          n,
          r,
          s = this.key(t),
          o = this.cache[s];
        if (void 0 === e) this.cache[s] = {};
        else {
          J.isArray(e)
            ? (n = e.concat(e.map(J.camelCase)))
            : ((r = J.camelCase(e)),
              e in o
                ? (n = [e, r])
                : ((n = r), (n = n in o ? [n] : n.match(pt) || []))),
            (i = n.length);
          for (; i--; ) delete o[n[i]];
        }
      },
      hasData: function (t) {
        return !J.isEmptyObject(this.cache[t[this.expando]] || {});
      },
      discard: function (t) {
        t[this.expando] && delete this.cache[t[this.expando]];
      },
    });
  var _t = new a(),
    vt = new a(),
    yt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
    xt = /([A-Z])/g;
  J.extend({
    hasData: function (t) {
      return vt.hasData(t) || _t.hasData(t);
    },
    data: function (t, e, i) {
      return vt.access(t, e, i);
    },
    removeData: function (t, e) {
      vt.remove(t, e);
    },
    _data: function (t, e, i) {
      return _t.access(t, e, i);
    },
    _removeData: function (t, e) {
      _t.remove(t, e);
    },
  }),
    J.fn.extend({
      data: function (t, e) {
        var i,
          n,
          r,
          s = this[0],
          o = s && s.attributes;
        if (void 0 === t) {
          if (
            this.length &&
            ((r = vt.get(s)), 1 === s.nodeType && !_t.get(s, "hasDataAttrs"))
          ) {
            for (i = o.length; i--; )
              o[i] &&
                ((n = o[i].name),
                0 === n.indexOf("data-") &&
                  ((n = J.camelCase(n.slice(5))), l(s, n, r[n])));
            _t.set(s, "hasDataAttrs", !0);
          }
          return r;
        }
        return "object" == typeof t
          ? this.each(function () {
              vt.set(this, t);
            })
          : gt(
              this,
              function (e) {
                var i,
                  n = J.camelCase(t);
                if (s && void 0 === e) {
                  if (((i = vt.get(s, t)), void 0 !== i)) return i;
                  if (((i = vt.get(s, n)), void 0 !== i)) return i;
                  if (((i = l(s, n, void 0)), void 0 !== i)) return i;
                } else
                  this.each(function () {
                    var i = vt.get(this, n);
                    vt.set(this, n, e),
                      -1 !== t.indexOf("-") &&
                        void 0 !== i &&
                        vt.set(this, t, e);
                  });
              },
              null,
              e,
              arguments.length > 1,
              null,
              !0
            );
      },
      removeData: function (t) {
        return this.each(function () {
          vt.remove(this, t);
        });
      },
    }),
    J.extend({
      queue: function (t, e, i) {
        var n;
        return t
          ? ((e = (e || "fx") + "queue"),
            (n = _t.get(t, e)),
            i &&
              (!n || J.isArray(i)
                ? (n = _t.access(t, e, J.makeArray(i)))
                : n.push(i)),
            n || [])
          : void 0;
      },
      dequeue: function (t, e) {
        e = e || "fx";
        var i = J.queue(t, e),
          n = i.length,
          r = i.shift(),
          s = J._queueHooks(t, e),
          o = function () {
            J.dequeue(t, e);
          };
        "inprogress" === r && ((r = i.shift()), n--),
          r &&
            ("fx" === e && i.unshift("inprogress"),
            delete s.stop,
            r.call(t, o, s)),
          !n && s && s.empty.fire();
      },
      _queueHooks: function (t, e) {
        var i = e + "queueHooks";
        return (
          _t.get(t, i) ||
          _t.access(t, i, {
            empty: J.Callbacks("once memory").add(function () {
              _t.remove(t, [e + "queue", i]);
            }),
          })
        );
      },
    }),
    J.fn.extend({
      queue: function (t, e) {
        var i = 2;
        return (
          "string" != typeof t && ((e = t), (t = "fx"), i--),
          arguments.length < i
            ? J.queue(this[0], t)
            : void 0 === e
            ? this
            : this.each(function () {
                var i = J.queue(this, t, e);
                J._queueHooks(this, t),
                  "fx" === t && "inprogress" !== i[0] && J.dequeue(this, t);
              })
        );
      },
      dequeue: function (t) {
        return this.each(function () {
          J.dequeue(this, t);
        });
      },
      clearQueue: function (t) {
        return this.queue(t || "fx", []);
      },
      promise: function (t, e) {
        var i,
          n = 1,
          r = J.Deferred(),
          s = this,
          o = this.length,
          a = function () {
            --n || r.resolveWith(s, [s]);
          };
        for (
          "string" != typeof t && ((e = t), (t = void 0)), t = t || "fx";
          o--;

        )
          (i = _t.get(s[o], t + "queueHooks")),
            i && i.empty && (n++, i.empty.add(a));
        return a(), r.promise(e);
      },
    });
  var Tt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    wt = ["Top", "Right", "Bottom", "Left"],
    bt = function (t, e) {
      return (
        (t = e || t),
        "none" === J.css(t, "display") || !J.contains(t.ownerDocument, t)
      );
    },
    Pt = /^(?:checkbox|radio)$/i;
  !(function () {
    var t = Z.createDocumentFragment(),
      e = t.appendChild(Z.createElement("div")),
      i = Z.createElement("input");
    i.setAttribute("type", "radio"),
      i.setAttribute("checked", "checked"),
      i.setAttribute("name", "t"),
      e.appendChild(i),
      (Q.checkClone = e.cloneNode(!0).cloneNode(!0).lastChild.checked),
      (e.innerHTML = "<textarea>x</textarea>"),
      (Q.noCloneChecked = !!e.cloneNode(!0).lastChild.defaultValue);
  })();
  var St = "undefined";
  Q.focusinBubbles = "onfocusin" in t;
  var Ct = /^key/,
    kt = /^(?:mouse|pointer|contextmenu)|click/,
    Ot = /^(?:focusinfocus|focusoutblur)$/,
    Dt = /^([^.]*)(?:\.(.+)|)$/;
  (J.event = {
    global: {},
    add: function (t, e, i, n, r) {
      var s,
        o,
        a,
        l,
        u,
        h,
        c,
        f,
        p,
        d,
        m,
        g = _t.get(t);
      if (g)
        for (
          i.handler && ((s = i), (i = s.handler), (r = s.selector)),
            i.guid || (i.guid = J.guid++),
            (l = g.events) || (l = g.events = {}),
            (o = g.handle) ||
              (o = g.handle =
                function (e) {
                  return typeof J !== St && J.event.triggered !== e.type
                    ? J.event.dispatch.apply(t, arguments)
                    : void 0;
                }),
            e = (e || "").match(pt) || [""],
            u = e.length;
          u--;

        )
          (a = Dt.exec(e[u]) || []),
            (p = m = a[1]),
            (d = (a[2] || "").split(".").sort()),
            p &&
              ((c = J.event.special[p] || {}),
              (p = (r ? c.delegateType : c.bindType) || p),
              (c = J.event.special[p] || {}),
              (h = J.extend(
                {
                  type: p,
                  origType: m,
                  data: n,
                  handler: i,
                  guid: i.guid,
                  selector: r,
                  needsContext: r && J.expr.match.needsContext.test(r),
                  namespace: d.join("."),
                },
                s
              )),
              (f = l[p]) ||
                ((f = l[p] = []),
                (f.delegateCount = 0),
                (c.setup && c.setup.call(t, n, d, o) !== !1) ||
                  (t.addEventListener && t.addEventListener(p, o, !1))),
              c.add &&
                (c.add.call(t, h), h.handler.guid || (h.handler.guid = i.guid)),
              r ? f.splice(f.delegateCount++, 0, h) : f.push(h),
              (J.event.global[p] = !0));
    },
    remove: function (t, e, i, n, r) {
      var s,
        o,
        a,
        l,
        u,
        h,
        c,
        f,
        p,
        d,
        m,
        g = _t.hasData(t) && _t.get(t);
      if (g && (l = g.events)) {
        for (e = (e || "").match(pt) || [""], u = e.length; u--; )
          if (
            ((a = Dt.exec(e[u]) || []),
            (p = m = a[1]),
            (d = (a[2] || "").split(".").sort()),
            p)
          ) {
            for (
              c = J.event.special[p] || {},
                p = (n ? c.delegateType : c.bindType) || p,
                f = l[p] || [],
                a =
                  a[2] &&
                  new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                o = s = f.length;
              s--;

            )
              (h = f[s]),
                (!r && m !== h.origType) ||
                  (i && i.guid !== h.guid) ||
                  (a && !a.test(h.namespace)) ||
                  (n && n !== h.selector && ("**" !== n || !h.selector)) ||
                  (f.splice(s, 1),
                  h.selector && f.delegateCount--,
                  c.remove && c.remove.call(t, h));
            o &&
              !f.length &&
              ((c.teardown && c.teardown.call(t, d, g.handle) !== !1) ||
                J.removeEvent(t, p, g.handle),
              delete l[p]);
          } else for (p in l) J.event.remove(t, p + e[u], i, n, !0);
        J.isEmptyObject(l) && (delete g.handle, _t.remove(t, "events"));
      }
    },
    trigger: function (e, i, n, r) {
      var s,
        o,
        a,
        l,
        u,
        h,
        c,
        f = [n || Z],
        p = G.call(e, "type") ? e.type : e,
        d = G.call(e, "namespace") ? e.namespace.split(".") : [];
      if (
        ((o = a = n = n || Z),
        3 !== n.nodeType &&
          8 !== n.nodeType &&
          !Ot.test(p + J.event.triggered) &&
          (p.indexOf(".") >= 0 &&
            ((d = p.split(".")), (p = d.shift()), d.sort()),
          (u = p.indexOf(":") < 0 && "on" + p),
          (e = e[J.expando] ? e : new J.Event(p, "object" == typeof e && e)),
          (e.isTrigger = r ? 2 : 3),
          (e.namespace = d.join(".")),
          (e.namespace_re = e.namespace
            ? new RegExp("(^|\\.)" + d.join("\\.(?:.*\\.|)") + "(\\.|$)")
            : null),
          (e.result = void 0),
          e.target || (e.target = n),
          (i = null == i ? [e] : J.makeArray(i, [e])),
          (c = J.event.special[p] || {}),
          r || !c.trigger || c.trigger.apply(n, i) !== !1))
      ) {
        if (!r && !c.noBubble && !J.isWindow(n)) {
          for (
            l = c.delegateType || p, Ot.test(l + p) || (o = o.parentNode);
            o;
            o = o.parentNode
          )
            f.push(o), (a = o);
          a === (n.ownerDocument || Z) &&
            f.push(a.defaultView || a.parentWindow || t);
        }
        for (s = 0; (o = f[s++]) && !e.isPropagationStopped(); )
          (e.type = s > 1 ? l : c.bindType || p),
            (h = (_t.get(o, "events") || {})[e.type] && _t.get(o, "handle")),
            h && h.apply(o, i),
            (h = u && o[u]),
            h &&
              h.apply &&
              J.acceptData(o) &&
              ((e.result = h.apply(o, i)),
              e.result === !1 && e.preventDefault());
        return (
          (e.type = p),
          r ||
            e.isDefaultPrevented() ||
            (c._default && c._default.apply(f.pop(), i) !== !1) ||
            !J.acceptData(n) ||
            (u &&
              J.isFunction(n[p]) &&
              !J.isWindow(n) &&
              ((a = n[u]),
              a && (n[u] = null),
              (J.event.triggered = p),
              n[p](),
              (J.event.triggered = void 0),
              a && (n[u] = a))),
          e.result
        );
      }
    },
    dispatch: function (t) {
      t = J.event.fix(t);
      var e,
        i,
        n,
        r,
        s,
        o = [],
        a = B.call(arguments),
        l = (_t.get(this, "events") || {})[t.type] || [],
        u = J.event.special[t.type] || {};
      if (
        ((a[0] = t),
        (t.delegateTarget = this),
        !u.preDispatch || u.preDispatch.call(this, t) !== !1)
      ) {
        for (
          o = J.event.handlers.call(this, t, l), e = 0;
          (r = o[e++]) && !t.isPropagationStopped();

        )
          for (
            t.currentTarget = r.elem, i = 0;
            (s = r.handlers[i++]) && !t.isImmediatePropagationStopped();

          )
            (!t.namespace_re || t.namespace_re.test(s.namespace)) &&
              ((t.handleObj = s),
              (t.data = s.data),
              (n = (
                (J.event.special[s.origType] || {}).handle || s.handler
              ).apply(r.elem, a)),
              void 0 !== n &&
                (t.result = n) === !1 &&
                (t.preventDefault(), t.stopPropagation()));
        return u.postDispatch && u.postDispatch.call(this, t), t.result;
      }
    },
    handlers: function (t, e) {
      var i,
        n,
        r,
        s,
        o = [],
        a = e.delegateCount,
        l = t.target;
      if (a && l.nodeType && (!t.button || "click" !== t.type))
        for (; l !== this; l = l.parentNode || this)
          if (l.disabled !== !0 || "click" !== t.type) {
            for (n = [], i = 0; a > i; i++)
              (s = e[i]),
                (r = s.selector + " "),
                void 0 === n[r] &&
                  (n[r] = s.needsContext
                    ? J(r, this).index(l) >= 0
                    : J.find(r, this, null, [l]).length),
                n[r] && n.push(s);
            n.length && o.push({ elem: l, handlers: n });
          }
      return a < e.length && o.push({ elem: this, handlers: e.slice(a) }), o;
    },
    props:
      "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(
        " "
      ),
    fixHooks: {},
    keyHooks: {
      props: "char charCode key keyCode".split(" "),
      filter: function (t, e) {
        return (
          null == t.which &&
            (t.which = null != e.charCode ? e.charCode : e.keyCode),
          t
        );
      },
    },
    mouseHooks: {
      props:
        "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(
          " "
        ),
      filter: function (t, e) {
        var i,
          n,
          r,
          s = e.button;
        return (
          null == t.pageX &&
            null != e.clientX &&
            ((i = t.target.ownerDocument || Z),
            (n = i.documentElement),
            (r = i.body),
            (t.pageX =
              e.clientX +
              ((n && n.scrollLeft) || (r && r.scrollLeft) || 0) -
              ((n && n.clientLeft) || (r && r.clientLeft) || 0)),
            (t.pageY =
              e.clientY +
              ((n && n.scrollTop) || (r && r.scrollTop) || 0) -
              ((n && n.clientTop) || (r && r.clientTop) || 0))),
          t.which ||
            void 0 === s ||
            (t.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
          t
        );
      },
    },
    fix: function (t) {
      if (t[J.expando]) return t;
      var e,
        i,
        n,
        r = t.type,
        s = t,
        o = this.fixHooks[r];
      for (
        o ||
          (this.fixHooks[r] = o =
            kt.test(r) ? this.mouseHooks : Ct.test(r) ? this.keyHooks : {}),
          n = o.props ? this.props.concat(o.props) : this.props,
          t = new J.Event(s),
          e = n.length;
        e--;

      )
        (i = n[e]), (t[i] = s[i]);
      return (
        t.target || (t.target = Z),
        3 === t.target.nodeType && (t.target = t.target.parentNode),
        o.filter ? o.filter(t, s) : t
      );
    },
    special: {
      load: { noBubble: !0 },
      focus: {
        trigger: function () {
          return this !== c() && this.focus ? (this.focus(), !1) : void 0;
        },
        delegateType: "focusin",
      },
      blur: {
        trigger: function () {
          return this === c() && this.blur ? (this.blur(), !1) : void 0;
        },
        delegateType: "focusout",
      },
      click: {
        trigger: function () {
          return "checkbox" === this.type &&
            this.click &&
            J.nodeName(this, "input")
            ? (this.click(), !1)
            : void 0;
        },
        _default: function (t) {
          return J.nodeName(t.target, "a");
        },
      },
      beforeunload: {
        postDispatch: function (t) {
          void 0 !== t.result &&
            t.originalEvent &&
            (t.originalEvent.returnValue = t.result);
        },
      },
    },
    simulate: function (t, e, i, n) {
      var r = J.extend(new J.Event(), i, {
        type: t,
        isSimulated: !0,
        originalEvent: {},
      });
      n ? J.event.trigger(r, null, e) : J.event.dispatch.call(e, r),
        r.isDefaultPrevented() && i.preventDefault();
    },
  }),
    (J.removeEvent = function (t, e, i) {
      t.removeEventListener && t.removeEventListener(e, i, !1);
    }),
    (J.Event = function (t, e) {
      return this instanceof J.Event
        ? (t && t.type
            ? ((this.originalEvent = t),
              (this.type = t.type),
              (this.isDefaultPrevented =
                t.defaultPrevented ||
                (void 0 === t.defaultPrevented && t.returnValue === !1)
                  ? u
                  : h))
            : (this.type = t),
          e && J.extend(this, e),
          (this.timeStamp = (t && t.timeStamp) || J.now()),
          void (this[J.expando] = !0))
        : new J.Event(t, e);
    }),
    (J.Event.prototype = {
      isDefaultPrevented: h,
      isPropagationStopped: h,
      isImmediatePropagationStopped: h,
      preventDefault: function () {
        var t = this.originalEvent;
        (this.isDefaultPrevented = u),
          t && t.preventDefault && t.preventDefault();
      },
      stopPropagation: function () {
        var t = this.originalEvent;
        (this.isPropagationStopped = u),
          t && t.stopPropagation && t.stopPropagation();
      },
      stopImmediatePropagation: function () {
        var t = this.originalEvent;
        (this.isImmediatePropagationStopped = u),
          t && t.stopImmediatePropagation && t.stopImmediatePropagation(),
          this.stopPropagation();
      },
    }),
    J.each(
      {
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout",
      },
      function (t, e) {
        J.event.special[t] = {
          delegateType: e,
          bindType: e,
          handle: function (t) {
            var i,
              n = this,
              r = t.relatedTarget,
              s = t.handleObj;
            return (
              (!r || (r !== n && !J.contains(n, r))) &&
                ((t.type = s.origType),
                (i = s.handler.apply(this, arguments)),
                (t.type = e)),
              i
            );
          },
        };
      }
    ),
    Q.focusinBubbles ||
      J.each({ focus: "focusin", blur: "focusout" }, function (t, e) {
        var i = function (t) {
          J.event.simulate(e, t.target, J.event.fix(t), !0);
        };
        J.event.special[e] = {
          setup: function () {
            var n = this.ownerDocument || this,
              r = _t.access(n, e);
            r || n.addEventListener(t, i, !0), _t.access(n, e, (r || 0) + 1);
          },
          teardown: function () {
            var n = this.ownerDocument || this,
              r = _t.access(n, e) - 1;
            r
              ? _t.access(n, e, r)
              : (n.removeEventListener(t, i, !0), _t.remove(n, e));
          },
        };
      }),
    J.fn.extend({
      on: function (t, e, i, n, r) {
        var s, o;
        if ("object" == typeof t) {
          "string" != typeof e && ((i = i || e), (e = void 0));
          for (o in t) this.on(o, e, i, t[o], r);
          return this;
        }
        if (
          (null == i && null == n
            ? ((n = e), (i = e = void 0))
            : null == n &&
              ("string" == typeof e
                ? ((n = i), (i = void 0))
                : ((n = i), (i = e), (e = void 0))),
          n === !1)
        )
          n = h;
        else if (!n) return this;
        return (
          1 === r &&
            ((s = n),
            (n = function (t) {
              return J().off(t), s.apply(this, arguments);
            }),
            (n.guid = s.guid || (s.guid = J.guid++))),
          this.each(function () {
            J.event.add(this, t, n, i, e);
          })
        );
      },
      one: function (t, e, i, n) {
        return this.on(t, e, i, n, 1);
      },
      off: function (t, e, i) {
        var n, r;
        if (t && t.preventDefault && t.handleObj)
          return (
            (n = t.handleObj),
            J(t.delegateTarget).off(
              n.namespace ? n.origType + "." + n.namespace : n.origType,
              n.selector,
              n.handler
            ),
            this
          );
        if ("object" == typeof t) {
          for (r in t) this.off(r, e, t[r]);
          return this;
        }
        return (
          (e === !1 || "function" == typeof e) && ((i = e), (e = void 0)),
          i === !1 && (i = h),
          this.each(function () {
            J.event.remove(this, t, i, e);
          })
        );
      },
      trigger: function (t, e) {
        return this.each(function () {
          J.event.trigger(t, e, this);
        });
      },
      triggerHandler: function (t, e) {
        var i = this[0];
        return i ? J.event.trigger(t, e, i, !0) : void 0;
      },
    });
  var At =
      /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Mt = /<([\w:]+)/,
    Rt = /<|&#?\w+;/,
    Nt = /<(?:script|style|link)/i,
    Et = /checked\s*(?:[^=]|=\s*.checked.)/i,
    Lt = /^$|\/(?:java|ecma)script/i,
    jt = /^true\/(.*)/,
    Ft = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    It = {
      option: [1, "<select multiple='multiple'>", "</select>"],
      thead: [1, "<table>", "</table>"],
      col: [2, "<table><colgroup>", "</colgroup></table>"],
      tr: [2, "<table><tbody>", "</tbody></table>"],
      td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
      _default: [0, "", ""],
    };
  (It.optgroup = It.option),
    (It.tbody = It.tfoot = It.colgroup = It.caption = It.thead),
    (It.th = It.td),
    J.extend({
      clone: function (t, e, i) {
        var n,
          r,
          s,
          o,
          a = t.cloneNode(!0),
          l = J.contains(t.ownerDocument, t);
        if (
          !(
            Q.noCloneChecked ||
            (1 !== t.nodeType && 11 !== t.nodeType) ||
            J.isXMLDoc(t)
          )
        )
          for (o = _(a), s = _(t), n = 0, r = s.length; r > n; n++)
            v(s[n], o[n]);
        if (e)
          if (i)
            for (s = s || _(t), o = o || _(a), n = 0, r = s.length; r > n; n++)
              g(s[n], o[n]);
          else g(t, a);
        return (
          (o = _(a, "script")), o.length > 0 && m(o, !l && _(t, "script")), a
        );
      },
      buildFragment: function (t, e, i, n) {
        for (
          var r,
            s,
            o,
            a,
            l,
            u,
            h = e.createDocumentFragment(),
            c = [],
            f = 0,
            p = t.length;
          p > f;
          f++
        )
          if (((r = t[f]), r || 0 === r))
            if ("object" === J.type(r)) J.merge(c, r.nodeType ? [r] : r);
            else if (Rt.test(r)) {
              for (
                s = s || h.appendChild(e.createElement("div")),
                  o = (Mt.exec(r) || ["", ""])[1].toLowerCase(),
                  a = It[o] || It._default,
                  s.innerHTML = a[1] + r.replace(At, "<$1></$2>") + a[2],
                  u = a[0];
                u--;

              )
                s = s.lastChild;
              J.merge(c, s.childNodes),
                (s = h.firstChild),
                (s.textContent = "");
            } else c.push(e.createTextNode(r));
        for (h.textContent = "", f = 0; (r = c[f++]); )
          if (
            (!n || -1 === J.inArray(r, n)) &&
            ((l = J.contains(r.ownerDocument, r)),
            (s = _(h.appendChild(r), "script")),
            l && m(s),
            i)
          )
            for (u = 0; (r = s[u++]); ) Lt.test(r.type || "") && i.push(r);
        return h;
      },
      cleanData: function (t) {
        for (
          var e, i, n, r, s = J.event.special, o = 0;
          void 0 !== (i = t[o]);
          o++
        ) {
          if (
            J.acceptData(i) &&
            ((r = i[_t.expando]), r && (e = _t.cache[r]))
          ) {
            if (e.events)
              for (n in e.events)
                s[n] ? J.event.remove(i, n) : J.removeEvent(i, n, e.handle);
            _t.cache[r] && delete _t.cache[r];
          }
          delete vt.cache[i[vt.expando]];
        }
      },
    }),
    J.fn.extend({
      text: function (t) {
        return gt(
          this,
          function (t) {
            return void 0 === t
              ? J.text(this)
              : this.empty().each(function () {
                  (1 === this.nodeType ||
                    11 === this.nodeType ||
                    9 === this.nodeType) &&
                    (this.textContent = t);
                });
          },
          null,
          t,
          arguments.length
        );
      },
      append: function () {
        return this.domManip(arguments, function (t) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var e = f(this, t);
            e.appendChild(t);
          }
        });
      },
      prepend: function () {
        return this.domManip(arguments, function (t) {
          if (
            1 === this.nodeType ||
            11 === this.nodeType ||
            9 === this.nodeType
          ) {
            var e = f(this, t);
            e.insertBefore(t, e.firstChild);
          }
        });
      },
      before: function () {
        return this.domManip(arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this);
        });
      },
      after: function () {
        return this.domManip(arguments, function (t) {
          this.parentNode && this.parentNode.insertBefore(t, this.nextSibling);
        });
      },
      remove: function (t, e) {
        for (
          var i, n = t ? J.filter(t, this) : this, r = 0;
          null != (i = n[r]);
          r++
        )
          e || 1 !== i.nodeType || J.cleanData(_(i)),
            i.parentNode &&
              (e && J.contains(i.ownerDocument, i) && m(_(i, "script")),
              i.parentNode.removeChild(i));
        return this;
      },
      empty: function () {
        for (var t, e = 0; null != (t = this[e]); e++)
          1 === t.nodeType && (J.cleanData(_(t, !1)), (t.textContent = ""));
        return this;
      },
      clone: function (t, e) {
        return (
          (t = null != t && t),
          (e = null == e ? t : e),
          this.map(function () {
            return J.clone(this, t, e);
          })
        );
      },
      html: function (t) {
        return gt(
          this,
          function (t) {
            var e = this[0] || {},
              i = 0,
              n = this.length;
            if (void 0 === t && 1 === e.nodeType) return e.innerHTML;
            if (
              "string" == typeof t &&
              !Nt.test(t) &&
              !It[(Mt.exec(t) || ["", ""])[1].toLowerCase()]
            ) {
              t = t.replace(At, "<$1></$2>");
              try {
                for (; n > i; i++)
                  (e = this[i] || {}),
                    1 === e.nodeType &&
                      (J.cleanData(_(e, !1)), (e.innerHTML = t));
                e = 0;
              } catch (r) {}
            }
            e && this.empty().append(t);
          },
          null,
          t,
          arguments.length
        );
      },
      replaceWith: function () {
        var t = arguments[0];
        return (
          this.domManip(arguments, function (e) {
            (t = this.parentNode),
              J.cleanData(_(this)),
              t && t.replaceChild(e, this);
          }),
          t && (t.length || t.nodeType) ? this : this.remove()
        );
      },
      detach: function (t) {
        return this.remove(t, !0);
      },
      domManip: function (t, e) {
        t = q.apply([], t);
        var i,
          n,
          r,
          s,
          o,
          a,
          l = 0,
          u = this.length,
          h = this,
          c = u - 1,
          f = t[0],
          m = J.isFunction(f);
        if (m || (u > 1 && "string" == typeof f && !Q.checkClone && Et.test(f)))
          return this.each(function (i) {
            var n = h.eq(i);
            m && (t[0] = f.call(this, i, n.html())), n.domManip(t, e);
          });
        if (
          u &&
          ((i = J.buildFragment(t, this[0].ownerDocument, !1, this)),
          (n = i.firstChild),
          1 === i.childNodes.length && (i = n),
          n)
        ) {
          for (r = J.map(_(i, "script"), p), s = r.length; u > l; l++)
            (o = i),
              l !== c &&
                ((o = J.clone(o, !0, !0)), s && J.merge(r, _(o, "script"))),
              e.call(this[l], o, l);
          if (s)
            for (
              a = r[r.length - 1].ownerDocument, J.map(r, d), l = 0;
              s > l;
              l++
            )
              (o = r[l]),
                Lt.test(o.type || "") &&
                  !_t.access(o, "globalEval") &&
                  J.contains(a, o) &&
                  (o.src
                    ? J._evalUrl && J._evalUrl(o.src)
                    : J.globalEval(o.textContent.replace(Ft, "")));
        }
        return this;
      },
    }),
    J.each(
      {
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith",
      },
      function (t, e) {
        J.fn[t] = function (t) {
          for (var i, n = [], r = J(t), s = r.length - 1, o = 0; s >= o; o++)
            (i = o === s ? this : this.clone(!0)),
              J(r[o])[e](i),
              X.apply(n, i.get());
          return this.pushStack(n);
        };
      }
    );
  var Ht,
    zt = {},
    Wt = /^margin/,
    $t = new RegExp("^(" + Tt + ")(?!px)[a-z%]+$", "i"),
    Bt = function (t) {
      return t.ownerDocument.defaultView.getComputedStyle(t, null);
    };
  !(function () {
    function e() {
      (o.style.cssText =
        "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute"),
        (o.innerHTML = ""),
        r.appendChild(s);
      var e = t.getComputedStyle(o, null);
      (i = "1%" !== e.top), (n = "4px" === e.width), r.removeChild(s);
    }
    var i,
      n,
      r = Z.documentElement,
      s = Z.createElement("div"),
      o = Z.createElement("div");
    o.style &&
      ((o.style.backgroundClip = "content-box"),
      (o.cloneNode(!0).style.backgroundClip = ""),
      (Q.clearCloneStyle = "content-box" === o.style.backgroundClip),
      (s.style.cssText =
        "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute"),
      s.appendChild(o),
      t.getComputedStyle &&
        J.extend(Q, {
          pixelPosition: function () {
            return e(), i;
          },
          boxSizingReliable: function () {
            return null == n && e(), n;
          },
          reliableMarginRight: function () {
            var e,
              i = o.appendChild(Z.createElement("div"));
            return (
              (i.style.cssText = o.style.cssText =
                "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0"),
              (i.style.marginRight = i.style.width = "0"),
              (o.style.width = "1px"),
              r.appendChild(s),
              (e = !parseFloat(t.getComputedStyle(i, null).marginRight)),
              r.removeChild(s),
              e
            );
          },
        }));
  })(),
    (J.swap = function (t, e, i, n) {
      var r,
        s,
        o = {};
      for (s in e) (o[s] = t.style[s]), (t.style[s] = e[s]);
      r = i.apply(t, n || []);
      for (s in e) t.style[s] = o[s];
      return r;
    });
  var qt = /^(none|table(?!-c[ea]).+)/,
    Xt = new RegExp("^(" + Tt + ")(.*)$", "i"),
    Yt = new RegExp("^([+-])=(" + Tt + ")", "i"),
    Ut = { position: "absolute", visibility: "hidden", display: "block" },
    Vt = { letterSpacing: "0", fontWeight: "400" },
    Gt = ["Webkit", "O", "Moz", "ms"];
  J.extend({
    cssHooks: {
      opacity: {
        get: function (t, e) {
          if (e) {
            var i = T(t, "opacity");
            return "" === i ? "1" : i;
          }
        },
      },
    },
    cssNumber: {
      columnCount: !0,
      fillOpacity: !0,
      flexGrow: !0,
      flexShrink: !0,
      fontWeight: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
    },
    cssProps: { float: "cssFloat" },
    style: function (t, e, i, n) {
      if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
        var r,
          s,
          o,
          a = J.camelCase(e),
          l = t.style;
        return (
          (e = J.cssProps[a] || (J.cssProps[a] = b(l, a))),
          (o = J.cssHooks[e] || J.cssHooks[a]),
          void 0 === i
            ? o && "get" in o && void 0 !== (r = o.get(t, !1, n))
              ? r
              : l[e]
            : ((s = typeof i),
              "string" === s &&
                (r = Yt.exec(i)) &&
                ((i = (r[1] + 1) * r[2] + parseFloat(J.css(t, e))),
                (s = "number")),
              void (
                null != i &&
                i === i &&
                ("number" !== s || J.cssNumber[a] || (i += "px"),
                Q.clearCloneStyle ||
                  "" !== i ||
                  0 !== e.indexOf("background") ||
                  (l[e] = "inherit"),
                (o && "set" in o && void 0 === (i = o.set(t, i, n))) ||
                  (l[e] = i))
              ))
        );
      }
    },
    css: function (t, e, i, n) {
      var r,
        s,
        o,
        a = J.camelCase(e);
      return (
        (e = J.cssProps[a] || (J.cssProps[a] = b(t.style, a))),
        (o = J.cssHooks[e] || J.cssHooks[a]),
        o && "get" in o && (r = o.get(t, !0, i)),
        void 0 === r && (r = T(t, e, n)),
        "normal" === r && e in Vt && (r = Vt[e]),
        "" === i || i
          ? ((s = parseFloat(r)), i === !0 || J.isNumeric(s) ? s || 0 : r)
          : r
      );
    },
  }),
    J.each(["height", "width"], function (t, e) {
      J.cssHooks[e] = {
        get: function (t, i, n) {
          return i
            ? qt.test(J.css(t, "display")) && 0 === t.offsetWidth
              ? J.swap(t, Ut, function () {
                  return C(t, e, n);
                })
              : C(t, e, n)
            : void 0;
        },
        set: function (t, i, n) {
          var r = n && Bt(t);
          return P(
            t,
            i,
            n ? S(t, e, n, "border-box" === J.css(t, "boxSizing", !1, r), r) : 0
          );
        },
      };
    }),
    (J.cssHooks.marginRight = w(Q.reliableMarginRight, function (t, e) {
      return e
        ? J.swap(t, { display: "inline-block" }, T, [t, "marginRight"])
        : void 0;
    })),
    J.each({ margin: "", padding: "", border: "Width" }, function (t, e) {
      (J.cssHooks[t + e] = {
        expand: function (i) {
          for (
            var n = 0, r = {}, s = "string" == typeof i ? i.split(" ") : [i];
            4 > n;
            n++
          )
            r[t + wt[n] + e] = s[n] || s[n - 2] || s[0];
          return r;
        },
      }),
        Wt.test(t) || (J.cssHooks[t + e].set = P);
    }),
    J.fn.extend({
      css: function (t, e) {
        return gt(
          this,
          function (t, e, i) {
            var n,
              r,
              s = {},
              o = 0;
            if (J.isArray(e)) {
              for (n = Bt(t), r = e.length; r > o; o++)
                s[e[o]] = J.css(t, e[o], !1, n);
              return s;
            }
            return void 0 !== i ? J.style(t, e, i) : J.css(t, e);
          },
          t,
          e,
          arguments.length > 1
        );
      },
      show: function () {
        return k(this, !0);
      },
      hide: function () {
        return k(this);
      },
      toggle: function (t) {
        return "boolean" == typeof t
          ? t
            ? this.show()
            : this.hide()
          : this.each(function () {
              bt(this) ? J(this).show() : J(this).hide();
            });
      },
    }),
    (J.Tween = O),
    (O.prototype = {
      constructor: O,
      init: function (t, e, i, n, r, s) {
        (this.elem = t),
          (this.prop = i),
          (this.easing = r || "swing"),
          (this.options = e),
          (this.start = this.now = this.cur()),
          (this.end = n),
          (this.unit = s || (J.cssNumber[i] ? "" : "px"));
      },
      cur: function () {
        var t = O.propHooks[this.prop];
        return t && t.get ? t.get(this) : O.propHooks._default.get(this);
      },
      run: function (t) {
        var e,
          i = O.propHooks[this.prop];
        return (
          (this.pos = e =
            this.options.duration
              ? J.easing[this.easing](
                  t,
                  this.options.duration * t,
                  0,
                  1,
                  this.options.duration
                )
              : t),
          (this.now = (this.end - this.start) * e + this.start),
          this.options.step &&
            this.options.step.call(this.elem, this.now, this),
          i && i.set ? i.set(this) : O.propHooks._default.set(this),
          this
        );
      },
    }),
    (O.prototype.init.prototype = O.prototype),
    (O.propHooks = {
      _default: {
        get: function (t) {
          var e;
          return null == t.elem[t.prop] ||
            (t.elem.style && null != t.elem.style[t.prop])
            ? ((e = J.css(t.elem, t.prop, "")), e && "auto" !== e ? e : 0)
            : t.elem[t.prop];
        },
        set: function (t) {
          J.fx.step[t.prop]
            ? J.fx.step[t.prop](t)
            : t.elem.style &&
              (null != t.elem.style[J.cssProps[t.prop]] || J.cssHooks[t.prop])
            ? J.style(t.elem, t.prop, t.now + t.unit)
            : (t.elem[t.prop] = t.now);
        },
      },
    }),
    (O.propHooks.scrollTop = O.propHooks.scrollLeft =
      {
        set: function (t) {
          t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now);
        },
      }),
    (J.easing = {
      linear: function (t) {
        return t;
      },
      swing: function (t) {
        return 0.5 - Math.cos(t * Math.PI) / 2;
      },
    }),
    (J.fx = O.prototype.init),
    (J.fx.step = {});
  var Qt,
    Zt,
    Kt = /^(?:toggle|show|hide)$/,
    Jt = new RegExp("^(?:([+-])=|)(" + Tt + ")([a-z%]*)$", "i"),
    te = /queueHooks$/,
    ee = [R],
    ie = {
      "*": [
        function (t, e) {
          var i = this.createTween(t, e),
            n = i.cur(),
            r = Jt.exec(e),
            s = (r && r[3]) || (J.cssNumber[t] ? "" : "px"),
            o =
              (J.cssNumber[t] || ("px" !== s && +n)) &&
              Jt.exec(J.css(i.elem, t)),
            a = 1,
            l = 20;
          if (o && o[3] !== s) {
            (s = s || o[3]), (r = r || []), (o = +n || 1);
            do (a = a || ".5"), (o /= a), J.style(i.elem, t, o + s);
            while (a !== (a = i.cur() / n) && 1 !== a && --l);
          }
          return (
            r &&
              ((o = i.start = +o || +n || 0),
              (i.unit = s),
              (i.end = r[1] ? o + (r[1] + 1) * r[2] : +r[2])),
            i
          );
        },
      ],
    };
  (J.Animation = J.extend(E, {
    tweener: function (t, e) {
      J.isFunction(t) ? ((e = t), (t = ["*"])) : (t = t.split(" "));
      for (var i, n = 0, r = t.length; r > n; n++)
        (i = t[n]), (ie[i] = ie[i] || []), ie[i].unshift(e);
    },
    prefilter: function (t, e) {
      e ? ee.unshift(t) : ee.push(t);
    },
  })),
    (J.speed = function (t, e, i) {
      var n =
        t && "object" == typeof t
          ? J.extend({}, t)
          : {
              complete: i || (!i && e) || (J.isFunction(t) && t),
              duration: t,
              easing: (i && e) || (e && !J.isFunction(e) && e),
            };
      return (
        (n.duration = J.fx.off
          ? 0
          : "number" == typeof n.duration
          ? n.duration
          : n.duration in J.fx.speeds
          ? J.fx.speeds[n.duration]
          : J.fx.speeds._default),
        (null == n.queue || n.queue === !0) && (n.queue = "fx"),
        (n.old = n.complete),
        (n.complete = function () {
          J.isFunction(n.old) && n.old.call(this),
            n.queue && J.dequeue(this, n.queue);
        }),
        n
      );
    }),
    J.fn.extend({
      fadeTo: function (t, e, i, n) {
        return this.filter(bt)
          .css("opacity", 0)
          .show()
          .end()
          .animate({ opacity: e }, t, i, n);
      },
      animate: function (t, e, i, n) {
        var r = J.isEmptyObject(t),
          s = J.speed(e, i, n),
          o = function () {
            var e = E(this, J.extend({}, t), s);
            (r || _t.get(this, "finish")) && e.stop(!0);
          };
        return (
          (o.finish = o),
          r || s.queue === !1 ? this.each(o) : this.queue(s.queue, o)
        );
      },
      stop: function (t, e, i) {
        var n = function (t) {
          var e = t.stop;
          delete t.stop, e(i);
        };
        return (
          "string" != typeof t && ((i = e), (e = t), (t = void 0)),
          e && t !== !1 && this.queue(t || "fx", []),
          this.each(function () {
            var e = !0,
              r = null != t && t + "queueHooks",
              s = J.timers,
              o = _t.get(this);
            if (r) o[r] && o[r].stop && n(o[r]);
            else for (r in o) o[r] && o[r].stop && te.test(r) && n(o[r]);
            for (r = s.length; r--; )
              s[r].elem !== this ||
                (null != t && s[r].queue !== t) ||
                (s[r].anim.stop(i), (e = !1), s.splice(r, 1));
            (e || !i) && J.dequeue(this, t);
          })
        );
      },
      finish: function (t) {
        return (
          t !== !1 && (t = t || "fx"),
          this.each(function () {
            var e,
              i = _t.get(this),
              n = i[t + "queue"],
              r = i[t + "queueHooks"],
              s = J.timers,
              o = n ? n.length : 0;
            for (
              i.finish = !0,
                J.queue(this, t, []),
                r && r.stop && r.stop.call(this, !0),
                e = s.length;
              e--;

            )
              s[e].elem === this &&
                s[e].queue === t &&
                (s[e].anim.stop(!0), s.splice(e, 1));
            for (e = 0; o > e; e++)
              n[e] && n[e].finish && n[e].finish.call(this);
            delete i.finish;
          })
        );
      },
    }),
    J.each(["toggle", "show", "hide"], function (t, e) {
      var i = J.fn[e];
      J.fn[e] = function (t, n, r) {
        return null == t || "boolean" == typeof t
          ? i.apply(this, arguments)
          : this.animate(A(e, !0), t, n, r);
      };
    }),
    J.each(
      {
        slideDown: A("show"),
        slideUp: A("hide"),
        slideToggle: A("toggle"),
        fadeIn: { opacity: "show" },
        fadeOut: { opacity: "hide" },
        fadeToggle: { opacity: "toggle" },
      },
      function (t, e) {
        J.fn[t] = function (t, i, n) {
          return this.animate(e, t, i, n);
        };
      }
    ),
    (J.timers = []),
    (J.fx.tick = function () {
      var t,
        e = 0,
        i = J.timers;
      for (Qt = J.now(); e < i.length; e++)
        (t = i[e]), t() || i[e] !== t || i.splice(e--, 1);
      i.length || J.fx.stop(), (Qt = void 0);
    }),
    (J.fx.timer = function (t) {
      J.timers.push(t), t() ? J.fx.start() : J.timers.pop();
    }),
    (J.fx.interval = 13),
    (J.fx.start = function () {
      Zt || (Zt = setInterval(J.fx.tick, J.fx.interval));
    }),
    (J.fx.stop = function () {
      clearInterval(Zt), (Zt = null);
    }),
    (J.fx.speeds = { slow: 600, fast: 200, _default: 400 }),
    (J.fn.delay = function (t, e) {
      return (
        (t = J.fx ? J.fx.speeds[t] || t : t),
        (e = e || "fx"),
        this.queue(e, function (e, i) {
          var n = setTimeout(e, t);
          i.stop = function () {
            clearTimeout(n);
          };
        })
      );
    }),
    (function () {
      var t = Z.createElement("input"),
        e = Z.createElement("select"),
        i = e.appendChild(Z.createElement("option"));
      (t.type = "checkbox"),
        (Q.checkOn = "" !== t.value),
        (Q.optSelected = i.selected),
        (e.disabled = !0),
        (Q.optDisabled = !i.disabled),
        (t = Z.createElement("input")),
        (t.value = "t"),
        (t.type = "radio"),
        (Q.radioValue = "t" === t.value);
    })();
  var ne,
    re,
    se = J.expr.attrHandle;
  J.fn.extend({
    attr: function (t, e) {
      return gt(this, J.attr, t, e, arguments.length > 1);
    },
    removeAttr: function (t) {
      return this.each(function () {
        J.removeAttr(this, t);
      });
    },
  }),
    J.extend({
      attr: function (t, e, i) {
        var n,
          r,
          s = t.nodeType;
        if (t && 3 !== s && 8 !== s && 2 !== s)
          return typeof t.getAttribute === St
            ? J.prop(t, e, i)
            : ((1 === s && J.isXMLDoc(t)) ||
                ((e = e.toLowerCase()),
                (n = J.attrHooks[e] || (J.expr.match.bool.test(e) ? re : ne))),
              void 0 === i
                ? n && "get" in n && null !== (r = n.get(t, e))
                  ? r
                  : ((r = J.find.attr(t, e)), null == r ? void 0 : r)
                : null !== i
                ? n && "set" in n && void 0 !== (r = n.set(t, i, e))
                  ? r
                  : (t.setAttribute(e, i + ""), i)
                : void J.removeAttr(t, e));
      },
      removeAttr: function (t, e) {
        var i,
          n,
          r = 0,
          s = e && e.match(pt);
        if (s && 1 === t.nodeType)
          for (; (i = s[r++]); )
            (n = J.propFix[i] || i),
              J.expr.match.bool.test(i) && (t[n] = !1),
              t.removeAttribute(i);
      },
      attrHooks: {
        type: {
          set: function (t, e) {
            if (!Q.radioValue && "radio" === e && J.nodeName(t, "input")) {
              var i = t.value;
              return t.setAttribute("type", e), i && (t.value = i), e;
            }
          },
        },
      },
    }),
    (re = {
      set: function (t, e, i) {
        return e === !1 ? J.removeAttr(t, i) : t.setAttribute(i, i), i;
      },
    }),
    J.each(J.expr.match.bool.source.match(/\w+/g), function (t, e) {
      var i = se[e] || J.find.attr;
      se[e] = function (t, e, n) {
        var r, s;
        return (
          n ||
            ((s = se[e]),
            (se[e] = r),
            (r = null != i(t, e, n) ? e.toLowerCase() : null),
            (se[e] = s)),
          r
        );
      };
    });
  var oe = /^(?:input|select|textarea|button)$/i;
  J.fn.extend({
    prop: function (t, e) {
      return gt(this, J.prop, t, e, arguments.length > 1);
    },
    removeProp: function (t) {
      return this.each(function () {
        delete this[J.propFix[t] || t];
      });
    },
  }),
    J.extend({
      propFix: { for: "htmlFor", class: "className" },
      prop: function (t, e, i) {
        var n,
          r,
          s,
          o = t.nodeType;
        if (t && 3 !== o && 8 !== o && 2 !== o)
          return (
            (s = 1 !== o || !J.isXMLDoc(t)),
            s && ((e = J.propFix[e] || e), (r = J.propHooks[e])),
            void 0 !== i
              ? r && "set" in r && void 0 !== (n = r.set(t, i, e))
                ? n
                : (t[e] = i)
              : r && "get" in r && null !== (n = r.get(t, e))
              ? n
              : t[e]
          );
      },
      propHooks: {
        tabIndex: {
          get: function (t) {
            return t.hasAttribute("tabindex") || oe.test(t.nodeName) || t.href
              ? t.tabIndex
              : -1;
          },
        },
      },
    }),
    Q.optSelected ||
      (J.propHooks.selected = {
        get: function (t) {
          var e = t.parentNode;
          return e && e.parentNode && e.parentNode.selectedIndex, null;
        },
      }),
    J.each(
      [
        "tabIndex",
        "readOnly",
        "maxLength",
        "cellSpacing",
        "cellPadding",
        "rowSpan",
        "colSpan",
        "useMap",
        "frameBorder",
        "contentEditable",
      ],
      function () {
        J.propFix[this.toLowerCase()] = this;
      }
    );
  var ae = /[\t\r\n\f]/g;
  J.fn.extend({
    addClass: function (t) {
      var e,
        i,
        n,
        r,
        s,
        o,
        a = "string" == typeof t && t,
        l = 0,
        u = this.length;
      if (J.isFunction(t))
        return this.each(function (e) {
          J(this).addClass(t.call(this, e, this.className));
        });
      if (a)
        for (e = (t || "").match(pt) || []; u > l; l++)
          if (
            ((i = this[l]),
            (n =
              1 === i.nodeType &&
              (i.className ? (" " + i.className + " ").replace(ae, " ") : " ")))
          ) {
            for (s = 0; (r = e[s++]); )
              n.indexOf(" " + r + " ") < 0 && (n += r + " ");
            (o = J.trim(n)), i.className !== o && (i.className = o);
          }
      return this;
    },
    removeClass: function (t) {
      var e,
        i,
        n,
        r,
        s,
        o,
        a = 0 === arguments.length || ("string" == typeof t && t),
        l = 0,
        u = this.length;
      if (J.isFunction(t))
        return this.each(function (e) {
          J(this).removeClass(t.call(this, e, this.className));
        });
      if (a)
        for (e = (t || "").match(pt) || []; u > l; l++)
          if (
            ((i = this[l]),
            (n =
              1 === i.nodeType &&
              (i.className ? (" " + i.className + " ").replace(ae, " ") : "")))
          ) {
            for (s = 0; (r = e[s++]); )
              for (; n.indexOf(" " + r + " ") >= 0; )
                n = n.replace(" " + r + " ", " ");
            (o = t ? J.trim(n) : ""), i.className !== o && (i.className = o);
          }
      return this;
    },
    toggleClass: function (t, e) {
      var i = typeof t;
      return "boolean" == typeof e && "string" === i
        ? e
          ? this.addClass(t)
          : this.removeClass(t)
        : this.each(
            J.isFunction(t)
              ? function (i) {
                  J(this).toggleClass(t.call(this, i, this.className, e), e);
                }
              : function () {
                  if ("string" === i)
                    for (
                      var e, n = 0, r = J(this), s = t.match(pt) || [];
                      (e = s[n++]);

                    )
                      r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                  else
                    (i === St || "boolean" === i) &&
                      (this.className &&
                        _t.set(this, "__className__", this.className),
                      (this.className =
                        this.className || t === !1
                          ? ""
                          : _t.get(this, "__className__") || ""));
                }
          );
    },
    hasClass: function (t) {
      for (var e = " " + t + " ", i = 0, n = this.length; n > i; i++)
        if (
          1 === this[i].nodeType &&
          (" " + this[i].className + " ").replace(ae, " ").indexOf(e) >= 0
        )
          return !0;
      return !1;
    },
  });
  var le = /\r/g;
  J.fn.extend({
    val: function (t) {
      var e,
        i,
        n,
        r = this[0];
      return arguments.length
        ? ((n = J.isFunction(t)),
          this.each(function (i) {
            var r;
            1 === this.nodeType &&
              ((r = n ? t.call(this, i, J(this).val()) : t),
              null == r
                ? (r = "")
                : "number" == typeof r
                ? (r += "")
                : J.isArray(r) &&
                  (r = J.map(r, function (t) {
                    return null == t ? "" : t + "";
                  })),
              (e =
                J.valHooks[this.type] ||
                J.valHooks[this.nodeName.toLowerCase()]),
              (e && "set" in e && void 0 !== e.set(this, r, "value")) ||
                (this.value = r));
          }))
        : r
        ? ((e = J.valHooks[r.type] || J.valHooks[r.nodeName.toLowerCase()]),
          e && "get" in e && void 0 !== (i = e.get(r, "value"))
            ? i
            : ((i = r.value),
              "string" == typeof i ? i.replace(le, "") : null == i ? "" : i))
        : void 0;
    },
  }),
    J.extend({
      valHooks: {
        option: {
          get: function (t) {
            var e = J.find.attr(t, "value");
            return null != e ? e : J.trim(J.text(t));
          },
        },
        select: {
          get: function (t) {
            for (
              var e,
                i,
                n = t.options,
                r = t.selectedIndex,
                s = "select-one" === t.type || 0 > r,
                o = s ? null : [],
                a = s ? r + 1 : n.length,
                l = 0 > r ? a : s ? r : 0;
              a > l;
              l++
            )
              if (
                ((i = n[l]),
                !(
                  (!i.selected && l !== r) ||
                  (Q.optDisabled
                    ? i.disabled
                    : null !== i.getAttribute("disabled")) ||
                  (i.parentNode.disabled &&
                    J.nodeName(i.parentNode, "optgroup"))
                ))
              ) {
                if (((e = J(i).val()), s)) return e;
                o.push(e);
              }
            return o;
          },
          set: function (t, e) {
            for (
              var i, n, r = t.options, s = J.makeArray(e), o = r.length;
              o--;

            )
              (n = r[o]), (n.selected = J.inArray(n.value, s) >= 0) && (i = !0);
            return i || (t.selectedIndex = -1), s;
          },
        },
      },
    }),
    J.each(["radio", "checkbox"], function () {
      (J.valHooks[this] = {
        set: function (t, e) {
          return J.isArray(e)
            ? (t.checked = J.inArray(J(t).val(), e) >= 0)
            : void 0;
        },
      }),
        Q.checkOn ||
          (J.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value;
          });
    }),
    J.each(
      "blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(
        " "
      ),
      function (t, e) {
        J.fn[e] = function (t, i) {
          return arguments.length > 0
            ? this.on(e, null, t, i)
            : this.trigger(e);
        };
      }
    ),
    J.fn.extend({
      hover: function (t, e) {
        return this.mouseenter(t).mouseleave(e || t);
      },
      bind: function (t, e, i) {
        return this.on(t, null, e, i);
      },
      unbind: function (t, e) {
        return this.off(t, null, e);
      },
      delegate: function (t, e, i, n) {
        return this.on(e, t, i, n);
      },
      undelegate: function (t, e, i) {
        return 1 === arguments.length
          ? this.off(t, "**")
          : this.off(e, t || "**", i);
      },
    });
  var ue = J.now(),
    he = /\?/;
  (J.parseJSON = function (t) {
    return JSON.parse(t + "");
  }),
    (J.parseXML = function (t) {
      var e, i;
      if (!t || "string" != typeof t) return null;
      try {
        (i = new DOMParser()), (e = i.parseFromString(t, "text/xml"));
      } catch (n) {
        e = void 0;
      }
      return (
        (!e || e.getElementsByTagName("parsererror").length) &&
          J.error("Invalid XML: " + t),
        e
      );
    });
  var ce,
    fe,
    pe = /#.*$/,
    de = /([?&])_=[^&]*/,
    me = /^(.*?):[ \t]*([^\r\n]*)$/gm,
    ge = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    _e = /^(?:GET|HEAD)$/,
    ve = /^\/\//,
    ye = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
    xe = {},
    Te = {},
    we = "*/".concat("*");
  try {
    fe = location.href;
  } catch (be) {
    (fe = Z.createElement("a")), (fe.href = ""), (fe = fe.href);
  }
  (ce = ye.exec(fe.toLowerCase()) || []),
    J.extend({
      active: 0,
      lastModified: {},
      etag: {},
      ajaxSettings: {
        url: fe,
        type: "GET",
        isLocal: ge.test(ce[1]),
        global: !0,
        processData: !0,
        async: !0,
        contentType: "application/x-www-form-urlencoded; charset=UTF-8",
        accepts: {
          "*": we,
          text: "text/plain",
          html: "text/html",
          xml: "application/xml, text/xml",
          json: "application/json, text/javascript",
        },
        contents: { xml: /xml/, html: /html/, json: /json/ },
        responseFields: {
          xml: "responseXML",
          text: "responseText",
          json: "responseJSON",
        },
        converters: {
          "* text": String,
          "text html": !0,
          "text json": J.parseJSON,
          "text xml": J.parseXML,
        },
        flatOptions: { url: !0, context: !0 },
      },
      ajaxSetup: function (t, e) {
        return e ? F(F(t, J.ajaxSettings), e) : F(J.ajaxSettings, t);
      },
      ajaxPrefilter: L(xe),
      ajaxTransport: L(Te),
      ajax: function (t, e) {
        function i(t, e, i, o) {
          var l,
            h,
            _,
            v,
            x,
            w = e;
          2 !== y &&
            ((y = 2),
            a && clearTimeout(a),
            (n = void 0),
            (s = o || ""),
            (T.readyState = t > 0 ? 4 : 0),
            (l = (t >= 200 && 300 > t) || 304 === t),
            i && (v = I(c, T, i)),
            (v = H(c, v, T, l)),
            l
              ? (c.ifModified &&
                  ((x = T.getResponseHeader("Last-Modified")),
                  x && (J.lastModified[r] = x),
                  (x = T.getResponseHeader("etag")),
                  x && (J.etag[r] = x)),
                204 === t || "HEAD" === c.type
                  ? (w = "nocontent")
                  : 304 === t
                  ? (w = "notmodified")
                  : ((w = v.state), (h = v.data), (_ = v.error), (l = !_)))
              : ((_ = w), (t || !w) && ((w = "error"), 0 > t && (t = 0))),
            (T.status = t),
            (T.statusText = (e || w) + ""),
            l ? d.resolveWith(f, [h, w, T]) : d.rejectWith(f, [T, w, _]),
            T.statusCode(g),
            (g = void 0),
            u && p.trigger(l ? "ajaxSuccess" : "ajaxError", [T, c, l ? h : _]),
            m.fireWith(f, [T, w]),
            u &&
              (p.trigger("ajaxComplete", [T, c]),
              --J.active || J.event.trigger("ajaxStop")));
        }
        "object" == typeof t && ((e = t), (t = void 0)), (e = e || {});
        var n,
          r,
          s,
          o,
          a,
          l,
          u,
          h,
          c = J.ajaxSetup({}, e),
          f = c.context || c,
          p = c.context && (f.nodeType || f.jquery) ? J(f) : J.event,
          d = J.Deferred(),
          m = J.Callbacks("once memory"),
          g = c.statusCode || {},
          _ = {},
          v = {},
          y = 0,
          x = "canceled",
          T = {
            readyState: 0,
            getResponseHeader: function (t) {
              var e;
              if (2 === y) {
                if (!o)
                  for (o = {}; (e = me.exec(s)); ) o[e[1].toLowerCase()] = e[2];
                e = o[t.toLowerCase()];
              }
              return null == e ? null : e;
            },
            getAllResponseHeaders: function () {
              return 2 === y ? s : null;
            },
            setRequestHeader: function (t, e) {
              var i = t.toLowerCase();
              return y || ((t = v[i] = v[i] || t), (_[t] = e)), this;
            },
            overrideMimeType: function (t) {
              return y || (c.mimeType = t), this;
            },
            statusCode: function (t) {
              var e;
              if (t)
                if (2 > y) for (e in t) g[e] = [g[e], t[e]];
                else T.always(t[T.status]);
              return this;
            },
            abort: function (t) {
              var e = t || x;
              return n && n.abort(e), i(0, e), this;
            },
          };
        if (
          ((d.promise(T).complete = m.add),
          (T.success = T.done),
          (T.error = T.fail),
          (c.url = ((t || c.url || fe) + "")
            .replace(pe, "")
            .replace(ve, ce[1] + "//")),
          (c.type = e.method || e.type || c.method || c.type),
          (c.dataTypes = J.trim(c.dataType || "*")
            .toLowerCase()
            .match(pt) || [""]),
          null == c.crossDomain &&
            ((l = ye.exec(c.url.toLowerCase())),
            (c.crossDomain = !(
              !l ||
              (l[1] === ce[1] &&
                l[2] === ce[2] &&
                (l[3] || ("http:" === l[1] ? "80" : "443")) ===
                  (ce[3] || ("http:" === ce[1] ? "80" : "443")))
            ))),
          c.data &&
            c.processData &&
            "string" != typeof c.data &&
            (c.data = J.param(c.data, c.traditional)),
          j(xe, c, e, T),
          2 === y)
        )
          return T;
        (u = c.global),
          u && 0 === J.active++ && J.event.trigger("ajaxStart"),
          (c.type = c.type.toUpperCase()),
          (c.hasContent = !_e.test(c.type)),
          (r = c.url),
          c.hasContent ||
            (c.data &&
              ((r = c.url += (he.test(r) ? "&" : "?") + c.data), delete c.data),
            c.cache === !1 &&
              (c.url = de.test(r)
                ? r.replace(de, "$1_=" + ue++)
                : r + (he.test(r) ? "&" : "?") + "_=" + ue++)),
          c.ifModified &&
            (J.lastModified[r] &&
              T.setRequestHeader("If-Modified-Since", J.lastModified[r]),
            J.etag[r] && T.setRequestHeader("If-None-Match", J.etag[r])),
          ((c.data && c.hasContent && c.contentType !== !1) || e.contentType) &&
            T.setRequestHeader("Content-Type", c.contentType),
          T.setRequestHeader(
            "Accept",
            c.dataTypes[0] && c.accepts[c.dataTypes[0]]
              ? c.accepts[c.dataTypes[0]] +
                  ("*" !== c.dataTypes[0] ? ", " + we + "; q=0.01" : "")
              : c.accepts["*"]
          );
        for (h in c.headers) T.setRequestHeader(h, c.headers[h]);
        if (c.beforeSend && (c.beforeSend.call(f, T, c) === !1 || 2 === y))
          return T.abort();
        x = "abort";
        for (h in { success: 1, error: 1, complete: 1 }) T[h](c[h]);
        if ((n = j(Te, c, e, T))) {
          (T.readyState = 1),
            u && p.trigger("ajaxSend", [T, c]),
            c.async &&
              c.timeout > 0 &&
              (a = setTimeout(function () {
                T.abort("timeout");
              }, c.timeout));
          try {
            (y = 1), n.send(_, i);
          } catch (w) {
            if (!(2 > y)) throw w;
            i(-1, w);
          }
        } else i(-1, "No Transport");
        return T;
      },
      getJSON: function (t, e, i) {
        return J.get(t, e, i, "json");
      },
      getScript: function (t, e) {
        return J.get(t, void 0, e, "script");
      },
    }),
    J.each(["get", "post"], function (t, e) {
      J[e] = function (t, i, n, r) {
        return (
          J.isFunction(i) && ((r = r || n), (n = i), (i = void 0)),
          J.ajax({ url: t, type: e, dataType: r, data: i, success: n })
        );
      };
    }),
    J.each(
      [
        "ajaxStart",
        "ajaxStop",
        "ajaxComplete",
        "ajaxError",
        "ajaxSuccess",
        "ajaxSend",
      ],
      function (t, e) {
        J.fn[e] = function (t) {
          return this.on(e, t);
        };
      }
    ),
    (J._evalUrl = function (t) {
      return J.ajax({
        url: t,
        type: "GET",
        dataType: "script",
        async: !1,
        global: !1,
        throws: !0,
      });
    }),
    J.fn.extend({
      wrapAll: function (t) {
        var e;
        return J.isFunction(t)
          ? this.each(function (e) {
              J(this).wrapAll(t.call(this, e));
            })
          : (this[0] &&
              ((e = J(t, this[0].ownerDocument).eq(0).clone(!0)),
              this[0].parentNode && e.insertBefore(this[0]),
              e
                .map(function () {
                  for (var t = this; t.firstElementChild; )
                    t = t.firstElementChild;
                  return t;
                })
                .append(this)),
            this);
      },
      wrapInner: function (t) {
        return this.each(
          J.isFunction(t)
            ? function (e) {
                J(this).wrapInner(t.call(this, e));
              }
            : function () {
                var e = J(this),
                  i = e.contents();
                i.length ? i.wrapAll(t) : e.append(t);
              }
        );
      },
      wrap: function (t) {
        var e = J.isFunction(t);
        return this.each(function (i) {
          J(this).wrapAll(e ? t.call(this, i) : t);
        });
      },
      unwrap: function () {
        return this.parent()
          .each(function () {
            J.nodeName(this, "body") || J(this).replaceWith(this.childNodes);
          })
          .end();
      },
    }),
    (J.expr.filters.hidden = function (t) {
      return t.offsetWidth <= 0 && t.offsetHeight <= 0;
    }),
    (J.expr.filters.visible = function (t) {
      return !J.expr.filters.hidden(t);
    });
  var Pe = /%20/g,
    Se = /\[\]$/,
    Ce = /\r?\n/g,
    ke = /^(?:submit|button|image|reset|file)$/i,
    Oe = /^(?:input|select|textarea|keygen)/i;
  (J.param = function (t, e) {
    var i,
      n = [],
      r = function (t, e) {
        (e = J.isFunction(e) ? e() : null == e ? "" : e),
          (n[n.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e));
      };
    if (
      (void 0 === e && (e = J.ajaxSettings && J.ajaxSettings.traditional),
      J.isArray(t) || (t.jquery && !J.isPlainObject(t)))
    )
      J.each(t, function () {
        r(this.name, this.value);
      });
    else for (i in t) z(i, t[i], e, r);
    return n.join("&").replace(Pe, "+");
  }),
    J.fn.extend({
      serialize: function () {
        return J.param(this.serializeArray());
      },
      serializeArray: function () {
        return this.map(function () {
          var t = J.prop(this, "elements");
          return t ? J.makeArray(t) : this;
        })
          .filter(function () {
            var t = this.type;
            return (
              this.name &&
              !J(this).is(":disabled") &&
              Oe.test(this.nodeName) &&
              !ke.test(t) &&
              (this.checked || !Pt.test(t))
            );
          })
          .map(function (t, e) {
            var i = J(this).val();
            return null == i
              ? null
              : J.isArray(i)
              ? J.map(i, function (t) {
                  return { name: e.name, value: t.replace(Ce, "\r\n") };
                })
              : { name: e.name, value: i.replace(Ce, "\r\n") };
          })
          .get();
      },
    }),
    (J.ajaxSettings.xhr = function () {
      try {
        return new XMLHttpRequest();
      } catch (t) {}
    });
  var De = 0,
    Ae = {},
    Me = { 0: 200, 1223: 204 },
    Re = J.ajaxSettings.xhr();
  t.ActiveXObject &&
    J(t).on("unload", function () {
      for (var t in Ae) Ae[t]();
    }),
    (Q.cors = !!Re && "withCredentials" in Re),
    (Q.ajax = Re = !!Re),
    J.ajaxTransport(function (t) {
      var e;
      return Q.cors || (Re && !t.crossDomain)
        ? {
            send: function (i, n) {
              var r,
                s = t.xhr(),
                o = ++De;
              if (
                (s.open(t.type, t.url, t.async, t.username, t.password),
                t.xhrFields)
              )
                for (r in t.xhrFields) s[r] = t.xhrFields[r];
              t.mimeType &&
                s.overrideMimeType &&
                s.overrideMimeType(t.mimeType),
                t.crossDomain ||
                  i["X-Requested-With"] ||
                  (i["X-Requested-With"] = "XMLHttpRequest");
              for (r in i) s.setRequestHeader(r, i[r]);
              (e = function (t) {
                return function () {
                  e &&
                    (delete Ae[o],
                    (e = s.onload = s.onerror = null),
                    "abort" === t
                      ? s.abort()
                      : "error" === t
                      ? n(s.status, s.statusText)
                      : n(
                          Me[s.status] || s.status,
                          s.statusText,
                          "string" == typeof s.responseText
                            ? { text: s.responseText }
                            : void 0,
                          s.getAllResponseHeaders()
                        ));
                };
              }),
                (s.onload = e()),
                (s.onerror = e("error")),
                (e = Ae[o] = e("abort"));
              try {
                s.send((t.hasContent && t.data) || null);
              } catch (a) {
                if (e) throw a;
              }
            },
            abort: function () {
              e && e();
            },
          }
        : void 0;
    }),
    J.ajaxSetup({
      accepts: {
        script:
          "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript",
      },
      contents: { script: /(?:java|ecma)script/ },
      converters: {
        "text script": function (t) {
          return J.globalEval(t), t;
        },
      },
    }),
    J.ajaxPrefilter("script", function (t) {
      void 0 === t.cache && (t.cache = !1), t.crossDomain && (t.type = "GET");
    }),
    J.ajaxTransport("script", function (t) {
      if (t.crossDomain) {
        var e, i;
        return {
          send: function (n, r) {
            (e = J("<script>")
              .prop({ async: !0, charset: t.scriptCharset, src: t.url })
              .on(
                "load error",
                (i = function (t) {
                  e.remove(),
                    (i = null),
                    t && r("error" === t.type ? 404 : 200, t.type);
                })
              )),
              Z.head.appendChild(e[0]);
          },
          abort: function () {
            i && i();
          },
        };
      }
    });
  var Ne = [],
    Ee = /(=)\?(?=&|$)|\?\?/;
  J.ajaxSetup({
    jsonp: "callback",
    jsonpCallback: function () {
      var t = Ne.pop() || J.expando + "_" + ue++;
      return (this[t] = !0), t;
    },
  }),
    J.ajaxPrefilter("json jsonp", function (e, i, n) {
      var r,
        s,
        o,
        a =
          e.jsonp !== !1 &&
          (Ee.test(e.url)
            ? "url"
            : "string" == typeof e.data &&
              !(e.contentType || "").indexOf(
                "application/x-www-form-urlencoded"
              ) &&
              Ee.test(e.data) &&
              "data");
      return a || "jsonp" === e.dataTypes[0]
        ? ((r = e.jsonpCallback =
            J.isFunction(e.jsonpCallback)
              ? e.jsonpCallback()
              : e.jsonpCallback),
          a
            ? (e[a] = e[a].replace(Ee, "$1" + r))
            : e.jsonp !== !1 &&
              (e.url += (he.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
          (e.converters["script json"] = function () {
            return o || J.error(r + " was not called"), o[0];
          }),
          (e.dataTypes[0] = "json"),
          (s = t[r]),
          (t[r] = function () {
            o = arguments;
          }),
          n.always(function () {
            (t[r] = s),
              e[r] && ((e.jsonpCallback = i.jsonpCallback), Ne.push(r)),
              o && J.isFunction(s) && s(o[0]),
              (o = s = void 0);
          }),
          "script")
        : void 0;
    }),
    (J.parseHTML = function (t, e, i) {
      if (!t || "string" != typeof t) return null;
      "boolean" == typeof e && ((i = e), (e = !1)), (e = e || Z);
      var n = ot.exec(t),
        r = !i && [];
      return n
        ? [e.createElement(n[1])]
        : ((n = J.buildFragment([t], e, r)),
          r && r.length && J(r).remove(),
          J.merge([], n.childNodes));
    });
  var Le = J.fn.load;
  (J.fn.load = function (t, e, i) {
    if ("string" != typeof t && Le) return Le.apply(this, arguments);
    var n,
      r,
      s,
      o = this,
      a = t.indexOf(" ");
    return (
      a >= 0 && ((n = J.trim(t.slice(a))), (t = t.slice(0, a))),
      J.isFunction(e)
        ? ((i = e), (e = void 0))
        : e && "object" == typeof e && (r = "POST"),
      o.length > 0 &&
        J.ajax({ url: t, type: r, dataType: "html", data: e })
          .done(function (t) {
            (s = arguments),
              o.html(n ? J("<div>").append(J.parseHTML(t)).find(n) : t);
          })
          .complete(
            i &&
              function (t, e) {
                o.each(i, s || [t.responseText, e, t]);
              }
          ),
      this
    );
  }),
    (J.expr.filters.animated = function (t) {
      return J.grep(J.timers, function (e) {
        return t === e.elem;
      }).length;
    });
  var je = t.document.documentElement;
  (J.offset = {
    setOffset: function (t, e, i) {
      var n,
        r,
        s,
        o,
        a,
        l,
        u,
        h = J.css(t, "position"),
        c = J(t),
        f = {};
      "static" === h && (t.style.position = "relative"),
        (a = c.offset()),
        (s = J.css(t, "top")),
        (l = J.css(t, "left")),
        (u =
          ("absolute" === h || "fixed" === h) && (s + l).indexOf("auto") > -1),
        u
          ? ((n = c.position()), (o = n.top), (r = n.left))
          : ((o = parseFloat(s) || 0), (r = parseFloat(l) || 0)),
        J.isFunction(e) && (e = e.call(t, i, a)),
        null != e.top && (f.top = e.top - a.top + o),
        null != e.left && (f.left = e.left - a.left + r),
        "using" in e ? e.using.call(t, f) : c.css(f);
    },
  }),
    J.fn.extend({
      offset: function (t) {
        if (arguments.length)
          return void 0 === t
            ? this
            : this.each(function (e) {
                J.offset.setOffset(this, t, e);
              });
        var e,
          i,
          n = this[0],
          r = { top: 0, left: 0 },
          s = n && n.ownerDocument;
        return s
          ? ((e = s.documentElement),
            J.contains(e, n)
              ? (typeof n.getBoundingClientRect !== St &&
                  (r = n.getBoundingClientRect()),
                (i = W(s)),
                {
                  top: r.top + i.pageYOffset - e.clientTop,
                  left: r.left + i.pageXOffset - e.clientLeft,
                })
              : r)
          : void 0;
      },
      position: function () {
        if (this[0]) {
          var t,
            e,
            i = this[0],
            n = { top: 0, left: 0 };
          return (
            "fixed" === J.css(i, "position")
              ? (e = i.getBoundingClientRect())
              : ((t = this.offsetParent()),
                (e = this.offset()),
                J.nodeName(t[0], "html") || (n = t.offset()),
                (n.top += J.css(t[0], "borderTopWidth", !0)),
                (n.left += J.css(t[0], "borderLeftWidth", !0))),
            {
              top: e.top - n.top - J.css(i, "marginTop", !0),
              left: e.left - n.left - J.css(i, "marginLeft", !0),
            }
          );
        }
      },
      offsetParent: function () {
        return this.map(function () {
          for (
            var t = this.offsetParent || je;
            t && !J.nodeName(t, "html") && "static" === J.css(t, "position");

          )
            t = t.offsetParent;
          return t || je;
        });
      },
    }),
    J.each(
      { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" },
      function (e, i) {
        var n = "pageYOffset" === i;
        J.fn[e] = function (r) {
          return gt(
            this,
            function (e, r, s) {
              var o = W(e);
              return void 0 === s
                ? o
                  ? o[i]
                  : e[r]
                : void (o
                    ? o.scrollTo(n ? t.pageXOffset : s, n ? s : t.pageYOffset)
                    : (e[r] = s));
            },
            e,
            r,
            arguments.length,
            null
          );
        };
      }
    ),
    J.each(["top", "left"], function (t, e) {
      J.cssHooks[e] = w(Q.pixelPosition, function (t, i) {
        return i
          ? ((i = T(t, e)), $t.test(i) ? J(t).position()[e] + "px" : i)
          : void 0;
      });
    }),
    J.each({ Height: "height", Width: "width" }, function (t, e) {
      J.each(
        { padding: "inner" + t, content: e, "": "outer" + t },
        function (i, n) {
          J.fn[n] = function (n, r) {
            var s = arguments.length && (i || "boolean" != typeof n),
              o = i || (n === !0 || r === !0 ? "margin" : "border");
            return gt(
              this,
              function (e, i, n) {
                var r;
                return J.isWindow(e)
                  ? e.document.documentElement["client" + t]
                  : 9 === e.nodeType
                  ? ((r = e.documentElement),
                    Math.max(
                      e.body["scroll" + t],
                      r["scroll" + t],
                      e.body["offset" + t],
                      r["offset" + t],
                      r["client" + t]
                    ))
                  : void 0 === n
                  ? J.css(e, i, o)
                  : J.style(e, i, n, o);
              },
              e,
              s ? n : void 0,
              s,
              null
            );
          };
        }
      );
    }),
    (J.fn.size = function () {
      return this.length;
    }),
    (J.fn.andSelf = J.fn.addBack),
    "function" == typeof define &&
      define.amd &&
      define("jquery", [], function () {
        return J;
      });
  var Fe = t.jQuery,
    Ie = t.$;
  return (
    (J.noConflict = function (e) {
      return t.$ === J && (t.$ = Ie), e && t.jQuery === J && (t.jQuery = Fe), J;
    }),
    typeof e === St && (t.jQuery = t.$ = J),
    J
  );
});
var _gsScope =
  "undefined" != typeof module && module.exports && "undefined" != typeof global
    ? global
    : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  "use strict";
  _gsScope._gsDefine(
    "TweenMax",
    ["core.Animation", "core.SimpleTimeline", "TweenLite"],
    function (t, e, i) {
      var n = function (t) {
          var e,
            i = [],
            n = t.length;
          for (e = 0; e !== n; i.push(t[e++]));
          return i;
        },
        r = function (t, e, n) {
          i.call(this, t, e, n),
            (this._cycle = 0),
            (this._yoyo = this.vars.yoyo === !0),
            (this._repeat = this.vars.repeat || 0),
            (this._repeatDelay = this.vars.repeatDelay || 0),
            (this._dirty = !0),
            (this.render = r.prototype.render);
        },
        s = 1e-10,
        o = i._internals,
        a = o.isSelector,
        l = o.isArray,
        u = (r.prototype = i.to({}, 0.1, {})),
        h = [];
      (r.version = "1.16.1"),
        (u.constructor = r),
        (u.kill()._gc = !1),
        (r.killTweensOf = r.killDelayedCallsTo = i.killTweensOf),
        (r.getTweensOf = i.getTweensOf),
        (r.lagSmoothing = i.lagSmoothing),
        (r.ticker = i.ticker),
        (r.render = i.render),
        (u.invalidate = function () {
          return (
            (this._yoyo = this.vars.yoyo === !0),
            (this._repeat = this.vars.repeat || 0),
            (this._repeatDelay = this.vars.repeatDelay || 0),
            this._uncache(!0),
            i.prototype.invalidate.call(this)
          );
        }),
        (u.updateTo = function (t, e) {
          var n,
            r = this.ratio,
            s = this.vars.immediateRender || t.immediateRender;
          e &&
            this._startTime < this._timeline._time &&
            ((this._startTime = this._timeline._time),
            this._uncache(!1),
            this._gc
              ? this._enabled(!0, !1)
              : this._timeline.insert(this, this._startTime - this._delay));
          for (n in t) this.vars[n] = t[n];
          if (this._initted || s)
            if (e) (this._initted = !1), s && this.render(0, !0, !0);
            else if (
              (this._gc && this._enabled(!0, !1),
              this._notifyPluginsOfEnabled &&
                this._firstPT &&
                i._onPluginEvent("_onDisable", this),
              this._time / this._duration > 0.998)
            ) {
              var o = this._time;
              this.render(0, !0, !1),
                (this._initted = !1),
                this.render(o, !0, !1);
            } else if (this._time > 0 || s) {
              (this._initted = !1), this._init();
              for (var a, l = 1 / (1 - r), u = this._firstPT; u; )
                (a = u.s + u.c), (u.c *= l), (u.s = a - u.c), (u = u._next);
            }
          return this;
        }),
        (u.render = function (t, e, i) {
          this._initted ||
            (0 === this._duration && this.vars.repeat && this.invalidate());
          var n,
            r,
            a,
            l,
            u,
            c,
            f,
            p,
            d = this._dirty ? this.totalDuration() : this._totalDuration,
            m = this._time,
            g = this._totalTime,
            _ = this._cycle,
            v = this._duration,
            y = this._rawPrevTime;
          if (
            (t >= d
              ? ((this._totalTime = d),
                (this._cycle = this._repeat),
                this._yoyo && 0 !== (1 & this._cycle)
                  ? ((this._time = 0),
                    (this.ratio = this._ease._calcEnd
                      ? this._ease.getRatio(0)
                      : 0))
                  : ((this._time = v),
                    (this.ratio = this._ease._calcEnd
                      ? this._ease.getRatio(1)
                      : 1)),
                this._reversed ||
                  ((n = !0),
                  (r = "onComplete"),
                  (i = i || this._timeline.autoRemoveChildren)),
                0 === v &&
                  (this._initted || !this.vars.lazy || i) &&
                  (this._startTime === this._timeline._duration && (t = 0),
                  (0 === t || 0 > y || y === s) &&
                    y !== t &&
                    ((i = !0), y > s && (r = "onReverseComplete")),
                  (this._rawPrevTime = p = !e || t || y === t ? t : s)))
              : 1e-7 > t
              ? ((this._totalTime = this._time = this._cycle = 0),
                (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
                (0 !== g || (0 === v && y > 0)) &&
                  ((r = "onReverseComplete"), (n = this._reversed)),
                0 > t &&
                  ((this._active = !1),
                  0 === v &&
                    (this._initted || !this.vars.lazy || i) &&
                    (y >= 0 && (i = !0),
                    (this._rawPrevTime = p = !e || t || y === t ? t : s))),
                this._initted || (i = !0))
              : ((this._totalTime = this._time = t),
                0 !== this._repeat &&
                  ((l = v + this._repeatDelay),
                  (this._cycle = (this._totalTime / l) >> 0),
                  0 !== this._cycle &&
                    this._cycle === this._totalTime / l &&
                    this._cycle--,
                  (this._time = this._totalTime - this._cycle * l),
                  this._yoyo &&
                    0 !== (1 & this._cycle) &&
                    (this._time = v - this._time),
                  this._time > v
                    ? (this._time = v)
                    : 0 > this._time && (this._time = 0)),
                this._easeType
                  ? ((u = this._time / v),
                    (c = this._easeType),
                    (f = this._easePower),
                    (1 === c || (3 === c && u >= 0.5)) && (u = 1 - u),
                    3 === c && (u *= 2),
                    1 === f
                      ? (u *= u)
                      : 2 === f
                      ? (u *= u * u)
                      : 3 === f
                      ? (u *= u * u * u)
                      : 4 === f && (u *= u * u * u * u),
                    (this.ratio =
                      1 === c
                        ? 1 - u
                        : 2 === c
                        ? u
                        : 0.5 > this._time / v
                        ? u / 2
                        : 1 - u / 2))
                  : (this.ratio = this._ease.getRatio(this._time / v))),
            m === this._time && !i && _ === this._cycle)
          )
            return void (
              g !== this._totalTime &&
              this._onUpdate &&
              (e ||
                this._onUpdate.apply(
                  this.vars.onUpdateScope || this,
                  this.vars.onUpdateParams || h
                ))
            );
          if (!this._initted) {
            if ((this._init(), !this._initted || this._gc)) return;
            if (
              !i &&
              this._firstPT &&
              ((this.vars.lazy !== !1 && this._duration) ||
                (this.vars.lazy && !this._duration))
            )
              return (
                (this._time = m),
                (this._totalTime = g),
                (this._rawPrevTime = y),
                (this._cycle = _),
                o.lazyTweens.push(this),
                void (this._lazy = [t, e])
              );
            this._time && !n
              ? (this.ratio = this._ease.getRatio(this._time / v))
              : n &&
                this._ease._calcEnd &&
                (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
          }
          for (
            this._lazy !== !1 && (this._lazy = !1),
              this._active ||
                (!this._paused &&
                  this._time !== m &&
                  t >= 0 &&
                  (this._active = !0)),
              0 === g &&
                (2 === this._initted && t > 0 && this._init(),
                this._startAt &&
                  (t >= 0
                    ? this._startAt.render(t, e, i)
                    : r || (r = "_dummyGS")),
                this.vars.onStart &&
                  (0 !== this._totalTime || 0 === v) &&
                  (e ||
                    this.vars.onStart.apply(
                      this.vars.onStartScope || this,
                      this.vars.onStartParams || h
                    ))),
              a = this._firstPT;
            a;

          )
            a.f
              ? a.t[a.p](a.c * this.ratio + a.s)
              : (a.t[a.p] = a.c * this.ratio + a.s),
              (a = a._next);
          this._onUpdate &&
            (0 > t &&
              this._startAt &&
              this._startTime &&
              this._startAt.render(t, e, i),
            e ||
              ((this._totalTime !== g || n) &&
                this._onUpdate.apply(
                  this.vars.onUpdateScope || this,
                  this.vars.onUpdateParams || h
                ))),
            this._cycle !== _ &&
              (e ||
                this._gc ||
                (this.vars.onRepeat &&
                  this.vars.onRepeat.apply(
                    this.vars.onRepeatScope || this,
                    this.vars.onRepeatParams || h
                  ))),
            r &&
              (!this._gc || i) &&
              (0 > t &&
                this._startAt &&
                !this._onUpdate &&
                this._startTime &&
                this._startAt.render(t, e, i),
              n &&
                (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                (this._active = !1)),
              !e &&
                this.vars[r] &&
                this.vars[r].apply(
                  this.vars[r + "Scope"] || this,
                  this.vars[r + "Params"] || h
                ),
              0 === v &&
                this._rawPrevTime === s &&
                p !== s &&
                (this._rawPrevTime = 0));
        }),
        (r.to = function (t, e, i) {
          return new r(t, e, i);
        }),
        (r.from = function (t, e, i) {
          return (
            (i.runBackwards = !0),
            (i.immediateRender = 0 != i.immediateRender),
            new r(t, e, i)
          );
        }),
        (r.fromTo = function (t, e, i, n) {
          return (
            (n.startAt = i),
            (n.immediateRender =
              0 != n.immediateRender && 0 != i.immediateRender),
            new r(t, e, n)
          );
        }),
        (r.staggerTo = r.allTo =
          function (t, e, s, o, u, c, f) {
            o = o || 0;
            var p,
              d,
              m,
              g,
              _ = s.delay || 0,
              v = [],
              y = function () {
                s.onComplete &&
                  s.onComplete.apply(s.onCompleteScope || this, arguments),
                  u.apply(f || this, c || h);
              };
            for (
              l(t) ||
                ("string" == typeof t && (t = i.selector(t) || t),
                a(t) && (t = n(t))),
                t = t || [],
                0 > o && ((t = n(t)), t.reverse(), (o *= -1)),
                p = t.length - 1,
                m = 0;
              p >= m;
              m++
            ) {
              d = {};
              for (g in s) d[g] = s[g];
              (d.delay = _),
                m === p && u && (d.onComplete = y),
                (v[m] = new r(t[m], e, d)),
                (_ += o);
            }
            return v;
          }),
        (r.staggerFrom = r.allFrom =
          function (t, e, i, n, s, o, a) {
            return (
              (i.runBackwards = !0),
              (i.immediateRender = 0 != i.immediateRender),
              r.staggerTo(t, e, i, n, s, o, a)
            );
          }),
        (r.staggerFromTo = r.allFromTo =
          function (t, e, i, n, s, o, a, l) {
            return (
              (n.startAt = i),
              (n.immediateRender =
                0 != n.immediateRender && 0 != i.immediateRender),
              r.staggerTo(t, e, n, s, o, a, l)
            );
          }),
        (r.delayedCall = function (t, e, i, n, s) {
          return new r(e, 0, {
            delay: t,
            onComplete: e,
            onCompleteParams: i,
            onCompleteScope: n,
            onReverseComplete: e,
            onReverseCompleteParams: i,
            onReverseCompleteScope: n,
            immediateRender: !1,
            useFrames: s,
            overwrite: 0,
          });
        }),
        (r.set = function (t, e) {
          return new r(t, 0, e);
        }),
        (r.isTweening = function (t) {
          return i.getTweensOf(t, !0).length > 0;
        });
      var c = function (t, e) {
          for (var n = [], r = 0, s = t._first; s; )
            s instanceof i
              ? (n[r++] = s)
              : (e && (n[r++] = s), (n = n.concat(c(s, e))), (r = n.length)),
              (s = s._next);
          return n;
        },
        f = (r.getAllTweens = function (e) {
          return c(t._rootTimeline, e).concat(c(t._rootFramesTimeline, e));
        });
      (r.killAll = function (t, i, n, r) {
        null == i && (i = !0), null == n && (n = !0);
        var s,
          o,
          a,
          l = f(0 != r),
          u = l.length,
          h = i && n && r;
        for (a = 0; u > a; a++)
          (o = l[a]),
            (h ||
              o instanceof e ||
              ((s = o.target === o.vars.onComplete) && n) ||
              (i && !s)) &&
              (t
                ? o.totalTime(o._reversed ? 0 : o.totalDuration())
                : o._enabled(!1, !1));
      }),
        (r.killChildTweensOf = function (t, e) {
          if (null != t) {
            var s,
              u,
              h,
              c,
              f,
              p = o.tweenLookup;
            if (
              ("string" == typeof t && (t = i.selector(t) || t),
              a(t) && (t = n(t)),
              l(t))
            )
              for (c = t.length; --c > -1; ) r.killChildTweensOf(t[c], e);
            else {
              s = [];
              for (h in p)
                for (u = p[h].target.parentNode; u; )
                  u === t && (s = s.concat(p[h].tweens)), (u = u.parentNode);
              for (f = s.length, c = 0; f > c; c++)
                e && s[c].totalTime(s[c].totalDuration()),
                  s[c]._enabled(!1, !1);
            }
          }
        });
      var p = function (t, i, n, r) {
        (i = i !== !1), (n = n !== !1), (r = r !== !1);
        for (var s, o, a = f(r), l = i && n && r, u = a.length; --u > -1; )
          (o = a[u]),
            (l ||
              o instanceof e ||
              ((s = o.target === o.vars.onComplete) && n) ||
              (i && !s)) &&
              o.paused(t);
      };
      return (
        (r.pauseAll = function (t, e, i) {
          p(!0, t, e, i);
        }),
        (r.resumeAll = function (t, e, i) {
          p(!1, t, e, i);
        }),
        (r.globalTimeScale = function (e) {
          var n = t._rootTimeline,
            r = i.ticker.time;
          return arguments.length
            ? ((e = e || s),
              (n._startTime = r - ((r - n._startTime) * n._timeScale) / e),
              (n = t._rootFramesTimeline),
              (r = i.ticker.frame),
              (n._startTime = r - ((r - n._startTime) * n._timeScale) / e),
              (n._timeScale = t._rootTimeline._timeScale = e),
              e)
            : n._timeScale;
        }),
        (u.progress = function (t) {
          return arguments.length
            ? this.totalTime(
                this.duration() *
                  (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) +
                  this._cycle * (this._duration + this._repeatDelay),
                !1
              )
            : this._time / this.duration();
        }),
        (u.totalProgress = function (t) {
          return arguments.length
            ? this.totalTime(this.totalDuration() * t, !1)
            : this._totalTime / this.totalDuration();
        }),
        (u.time = function (t, e) {
          return arguments.length
            ? (this._dirty && this.totalDuration(),
              t > this._duration && (t = this._duration),
              this._yoyo && 0 !== (1 & this._cycle)
                ? (t =
                    this._duration -
                    t +
                    this._cycle * (this._duration + this._repeatDelay))
                : 0 !== this._repeat &&
                  (t += this._cycle * (this._duration + this._repeatDelay)),
              this.totalTime(t, e))
            : this._time;
        }),
        (u.duration = function (e) {
          return arguments.length
            ? t.prototype.duration.call(this, e)
            : this._duration;
        }),
        (u.totalDuration = function (t) {
          return arguments.length
            ? -1 === this._repeat
              ? this
              : this.duration(
                  (t - this._repeat * this._repeatDelay) / (this._repeat + 1)
                )
            : (this._dirty &&
                ((this._totalDuration =
                  -1 === this._repeat
                    ? 999999999999
                    : this._duration * (this._repeat + 1) +
                      this._repeatDelay * this._repeat),
                (this._dirty = !1)),
              this._totalDuration);
        }),
        (u.repeat = function (t) {
          return arguments.length
            ? ((this._repeat = t), this._uncache(!0))
            : this._repeat;
        }),
        (u.repeatDelay = function (t) {
          return arguments.length
            ? ((this._repeatDelay = t), this._uncache(!0))
            : this._repeatDelay;
        }),
        (u.yoyo = function (t) {
          return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
        }),
        r
      );
    },
    !0
  ),
    _gsScope._gsDefine(
      "TimelineLite",
      ["core.Animation", "core.SimpleTimeline", "TweenLite"],
      function (t, e, i) {
        var n = function (t) {
            e.call(this, t),
              (this._labels = {}),
              (this.autoRemoveChildren = this.vars.autoRemoveChildren === !0),
              (this.smoothChildTiming = this.vars.smoothChildTiming === !0),
              (this._sortChildren = !0),
              (this._onUpdate = this.vars.onUpdate);
            var i,
              n,
              r = this.vars;
            for (n in r)
              (i = r[n]),
                l(i) &&
                  -1 !== i.join("").indexOf("{self}") &&
                  (r[n] = this._swapSelfInParams(i));
            l(r.tweens) && this.add(r.tweens, 0, r.align, r.stagger);
          },
          r = 1e-10,
          s = i._internals,
          o = (n._internals = {}),
          a = s.isSelector,
          l = s.isArray,
          u = s.lazyTweens,
          h = s.lazyRender,
          c = [],
          f = _gsScope._gsDefine.globals,
          p = function (t) {
            var e,
              i = {};
            for (e in t) i[e] = t[e];
            return i;
          },
          d = (o.pauseCallback = function (t, e, i, n) {
            var s,
              o = t._timeline,
              a = o._totalTime,
              l = t._startTime,
              u = 0 > t._rawPrevTime || (0 === t._rawPrevTime && o._reversed),
              h = u ? 0 : r,
              f = u ? r : 0;
            if (e || !this._forcingPlayhead) {
              for (o.pause(l), s = t._prev; s && s._startTime === l; )
                (s._rawPrevTime = f), (s = s._prev);
              for (s = t._next; s && s._startTime === l; )
                (s._rawPrevTime = h), (s = s._next);
              e && e.apply(n || o, i || c),
                (this._forcingPlayhead || !o._paused) && o.seek(a);
            }
          }),
          m = function (t) {
            var e,
              i = [],
              n = t.length;
            for (e = 0; e !== n; i.push(t[e++]));
            return i;
          },
          g = (n.prototype = new e());
        return (
          (n.version = "1.16.1"),
          (g.constructor = n),
          (g.kill()._gc = g._forcingPlayhead = !1),
          (g.to = function (t, e, n, r) {
            var s = (n.repeat && f.TweenMax) || i;
            return e ? this.add(new s(t, e, n), r) : this.set(t, n, r);
          }),
          (g.from = function (t, e, n, r) {
            return this.add(((n.repeat && f.TweenMax) || i).from(t, e, n), r);
          }),
          (g.fromTo = function (t, e, n, r, s) {
            var o = (r.repeat && f.TweenMax) || i;
            return e ? this.add(o.fromTo(t, e, n, r), s) : this.set(t, r, s);
          }),
          (g.staggerTo = function (t, e, r, s, o, l, u, h) {
            var c,
              f = new n({
                onComplete: l,
                onCompleteParams: u,
                onCompleteScope: h,
                smoothChildTiming: this.smoothChildTiming,
              });
            for (
              "string" == typeof t && (t = i.selector(t) || t),
                t = t || [],
                a(t) && (t = m(t)),
                s = s || 0,
                0 > s && ((t = m(t)), t.reverse(), (s *= -1)),
                c = 0;
              t.length > c;
              c++
            )
              r.startAt && (r.startAt = p(r.startAt)),
                f.to(t[c], e, p(r), c * s);
            return this.add(f, o);
          }),
          (g.staggerFrom = function (t, e, i, n, r, s, o, a) {
            return (
              (i.immediateRender = 0 != i.immediateRender),
              (i.runBackwards = !0),
              this.staggerTo(t, e, i, n, r, s, o, a)
            );
          }),
          (g.staggerFromTo = function (t, e, i, n, r, s, o, a, l) {
            return (
              (n.startAt = i),
              (n.immediateRender =
                0 != n.immediateRender && 0 != i.immediateRender),
              this.staggerTo(t, e, n, r, s, o, a, l)
            );
          }),
          (g.call = function (t, e, n, r) {
            return this.add(i.delayedCall(0, t, e, n), r);
          }),
          (g.set = function (t, e, n) {
            return (
              (n = this._parseTimeOrLabel(n, 0, !0)),
              null == e.immediateRender &&
                (e.immediateRender = n === this._time && !this._paused),
              this.add(new i(t, 0, e), n)
            );
          }),
          (n.exportRoot = function (t, e) {
            (t = t || {}),
              null == t.smoothChildTiming && (t.smoothChildTiming = !0);
            var r,
              s,
              o = new n(t),
              a = o._timeline;
            for (
              null == e && (e = !0),
                a._remove(o, !0),
                o._startTime = 0,
                o._rawPrevTime = o._time = o._totalTime = a._time,
                r = a._first;
              r;

            )
              (s = r._next),
                (e && r instanceof i && r.target === r.vars.onComplete) ||
                  o.add(r, r._startTime - r._delay),
                (r = s);
            return a.add(o, 0), o;
          }),
          (g.add = function (r, s, o, a) {
            var u, h, c, f, p, d;
            if (
              ("number" != typeof s &&
                (s = this._parseTimeOrLabel(s, 0, !0, r)),
              !(r instanceof t))
            ) {
              if (r instanceof Array || (r && r.push && l(r))) {
                for (
                  o = o || "normal", a = a || 0, u = s, h = r.length, c = 0;
                  h > c;
                  c++
                )
                  l((f = r[c])) && (f = new n({ tweens: f })),
                    this.add(f, u),
                    "string" != typeof f &&
                      "function" != typeof f &&
                      ("sequence" === o
                        ? (u = f._startTime + f.totalDuration() / f._timeScale)
                        : "start" === o && (f._startTime -= f.delay())),
                    (u += a);
                return this._uncache(!0);
              }
              if ("string" == typeof r) return this.addLabel(r, s);
              if ("function" != typeof r)
                throw (
                  "Cannot add " +
                  r +
                  " into the timeline; it is not a tween, timeline, function, or string."
                );
              r = i.delayedCall(0, r);
            }
            if (
              (e.prototype.add.call(this, r, s),
              (this._gc || this._time === this._duration) &&
                !this._paused &&
                this._duration < this.duration())
            )
              for (p = this, d = p.rawTime() > r._startTime; p._timeline; )
                d && p._timeline.smoothChildTiming
                  ? p.totalTime(p._totalTime, !0)
                  : p._gc && p._enabled(!0, !1),
                  (p = p._timeline);
            return this;
          }),
          (g.remove = function (e) {
            if (e instanceof t) return this._remove(e, !1);
            if (e instanceof Array || (e && e.push && l(e))) {
              for (var i = e.length; --i > -1; ) this.remove(e[i]);
              return this;
            }
            return "string" == typeof e
              ? this.removeLabel(e)
              : this.kill(null, e);
          }),
          (g._remove = function (t, i) {
            e.prototype._remove.call(this, t, i);
            var n = this._last;
            return (
              n
                ? this._time > n._startTime + n._totalDuration / n._timeScale &&
                  ((this._time = this.duration()),
                  (this._totalTime = this._totalDuration))
                : (this._time =
                    this._totalTime =
                    this._duration =
                    this._totalDuration =
                      0),
              this
            );
          }),
          (g.append = function (t, e) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t));
          }),
          (g.insert = g.insertMultiple =
            function (t, e, i, n) {
              return this.add(t, e || 0, i, n);
            }),
          (g.appendMultiple = function (t, e, i, n) {
            return this.add(t, this._parseTimeOrLabel(null, e, !0, t), i, n);
          }),
          (g.addLabel = function (t, e) {
            return (this._labels[t] = this._parseTimeOrLabel(e)), this;
          }),
          (g.addPause = function (t, e, n, r) {
            var s = i.delayedCall(0, d, ["{self}", e, n, r], this);
            return (s.data = "isPause"), this.add(s, t);
          }),
          (g.removeLabel = function (t) {
            return delete this._labels[t], this;
          }),
          (g.getLabelTime = function (t) {
            return null != this._labels[t] ? this._labels[t] : -1;
          }),
          (g._parseTimeOrLabel = function (e, i, n, r) {
            var s;
            if (r instanceof t && r.timeline === this) this.remove(r);
            else if (r && (r instanceof Array || (r.push && l(r))))
              for (s = r.length; --s > -1; )
                r[s] instanceof t &&
                  r[s].timeline === this &&
                  this.remove(r[s]);
            if ("string" == typeof i)
              return this._parseTimeOrLabel(
                i,
                n && "number" == typeof e && null == this._labels[i]
                  ? e - this.duration()
                  : 0,
                n
              );
            if (
              ((i = i || 0),
              "string" != typeof e || (!isNaN(e) && null == this._labels[e]))
            )
              null == e && (e = this.duration());
            else {
              if (((s = e.indexOf("=")), -1 === s))
                return null == this._labels[e]
                  ? n
                    ? (this._labels[e] = this.duration() + i)
                    : i
                  : this._labels[e] + i;
              (i =
                parseInt(e.charAt(s - 1) + "1", 10) * Number(e.substr(s + 1))),
                (e =
                  s > 1
                    ? this._parseTimeOrLabel(e.substr(0, s - 1), 0, n)
                    : this.duration());
            }
            return Number(e) + i;
          }),
          (g.seek = function (t, e) {
            return this.totalTime(
              "number" == typeof t ? t : this._parseTimeOrLabel(t),
              e !== !1
            );
          }),
          (g.stop = function () {
            return this.paused(!0);
          }),
          (g.gotoAndPlay = function (t, e) {
            return this.play(t, e);
          }),
          (g.gotoAndStop = function (t, e) {
            return this.pause(t, e);
          }),
          (g.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n,
              s,
              o,
              a,
              l,
              f = this._dirty ? this.totalDuration() : this._totalDuration,
              p = this._time,
              d = this._startTime,
              m = this._timeScale,
              g = this._paused;
            if (t >= f)
              (this._totalTime = this._time = f),
                this._reversed ||
                  this._hasPausedChild() ||
                  ((s = !0),
                  (a = "onComplete"),
                  (l = !!this._timeline.autoRemoveChildren),
                  0 === this._duration &&
                    (0 === t ||
                      0 > this._rawPrevTime ||
                      this._rawPrevTime === r) &&
                    this._rawPrevTime !== t &&
                    this._first &&
                    ((l = !0),
                    this._rawPrevTime > r && (a = "onReverseComplete"))),
                (this._rawPrevTime =
                  this._duration || !e || t || this._rawPrevTime === t ? t : r),
                (t = f + 1e-4);
            else if (1e-7 > t)
              if (
                ((this._totalTime = this._time = 0),
                (0 !== p ||
                  (0 === this._duration &&
                    this._rawPrevTime !== r &&
                    (this._rawPrevTime > 0 ||
                      (0 > t && this._rawPrevTime >= 0)))) &&
                  ((a = "onReverseComplete"), (s = this._reversed)),
                0 > t)
              )
                (this._active = !1),
                  this._timeline.autoRemoveChildren && this._reversed
                    ? ((l = s = !0), (a = "onReverseComplete"))
                    : this._rawPrevTime >= 0 && this._first && (l = !0),
                  (this._rawPrevTime = t);
              else {
                if (
                  ((this._rawPrevTime =
                    this._duration || !e || t || this._rawPrevTime === t
                      ? t
                      : r),
                  0 === t && s)
                )
                  for (n = this._first; n && 0 === n._startTime; )
                    n._duration || (s = !1), (n = n._next);
                (t = 0), this._initted || (l = !0);
              }
            else this._totalTime = this._time = this._rawPrevTime = t;
            if ((this._time !== p && this._first) || i || l) {
              if (
                (this._initted || (this._initted = !0),
                this._active ||
                  (!this._paused &&
                    this._time !== p &&
                    t > 0 &&
                    (this._active = !0)),
                0 === p &&
                  this.vars.onStart &&
                  0 !== this._time &&
                  (e ||
                    this.vars.onStart.apply(
                      this.vars.onStartScope || this,
                      this.vars.onStartParams || c
                    )),
                this._time >= p)
              )
                for (
                  n = this._first;
                  n && ((o = n._next), !this._paused || g);

                )
                  (n._active ||
                    (n._startTime <= this._time && !n._paused && !n._gc)) &&
                    (n._reversed
                      ? n.render(
                          (n._dirty ? n.totalDuration() : n._totalDuration) -
                            (t - n._startTime) * n._timeScale,
                          e,
                          i
                        )
                      : n.render((t - n._startTime) * n._timeScale, e, i)),
                    (n = o);
              else
                for (n = this._last; n && ((o = n._prev), !this._paused || g); )
                  (n._active || (p >= n._startTime && !n._paused && !n._gc)) &&
                    (n._reversed
                      ? n.render(
                          (n._dirty ? n.totalDuration() : n._totalDuration) -
                            (t - n._startTime) * n._timeScale,
                          e,
                          i
                        )
                      : n.render((t - n._startTime) * n._timeScale, e, i)),
                    (n = o);
              this._onUpdate &&
                (e ||
                  (u.length && h(),
                  this._onUpdate.apply(
                    this.vars.onUpdateScope || this,
                    this.vars.onUpdateParams || c
                  ))),
                a &&
                  (this._gc ||
                    ((d === this._startTime || m !== this._timeScale) &&
                      (0 === this._time || f >= this.totalDuration()) &&
                      (s &&
                        (u.length && h(),
                        this._timeline.autoRemoveChildren &&
                          this._enabled(!1, !1),
                        (this._active = !1)),
                      !e &&
                        this.vars[a] &&
                        this.vars[a].apply(
                          this.vars[a + "Scope"] || this,
                          this.vars[a + "Params"] || c
                        ))));
            }
          }),
          (g._hasPausedChild = function () {
            for (var t = this._first; t; ) {
              if (t._paused || (t instanceof n && t._hasPausedChild()))
                return !0;
              t = t._next;
            }
            return !1;
          }),
          (g.getChildren = function (t, e, n, r) {
            r = r || -9999999999;
            for (var s = [], o = this._first, a = 0; o; )
              r > o._startTime ||
                (o instanceof i
                  ? e !== !1 && (s[a++] = o)
                  : (n !== !1 && (s[a++] = o),
                    t !== !1 &&
                      ((s = s.concat(o.getChildren(!0, e, n))),
                      (a = s.length)))),
                (o = o._next);
            return s;
          }),
          (g.getTweensOf = function (t, e) {
            var n,
              r,
              s = this._gc,
              o = [],
              a = 0;
            for (
              s && this._enabled(!0, !0), n = i.getTweensOf(t), r = n.length;
              --r > -1;

            )
              (n[r].timeline === this || (e && this._contains(n[r]))) &&
                (o[a++] = n[r]);
            return s && this._enabled(!1, !0), o;
          }),
          (g.recent = function () {
            return this._recent;
          }),
          (g._contains = function (t) {
            for (var e = t.timeline; e; ) {
              if (e === this) return !0;
              e = e.timeline;
            }
            return !1;
          }),
          (g.shiftChildren = function (t, e, i) {
            i = i || 0;
            for (var n, r = this._first, s = this._labels; r; )
              r._startTime >= i && (r._startTime += t), (r = r._next);
            if (e) for (n in s) s[n] >= i && (s[n] += t);
            return this._uncache(!0);
          }),
          (g._kill = function (t, e) {
            if (!t && !e) return this._enabled(!1, !1);
            for (
              var i = e ? this.getTweensOf(e) : this.getChildren(!0, !0, !1),
                n = i.length,
                r = !1;
              --n > -1;

            )
              i[n]._kill(t, e) && (r = !0);
            return r;
          }),
          (g.clear = function (t) {
            var e = this.getChildren(!1, !0, !0),
              i = e.length;
            for (this._time = this._totalTime = 0; --i > -1; )
              e[i]._enabled(!1, !1);
            return t !== !1 && (this._labels = {}), this._uncache(!0);
          }),
          (g.invalidate = function () {
            for (var e = this._first; e; ) e.invalidate(), (e = e._next);
            return t.prototype.invalidate.call(this);
          }),
          (g._enabled = function (t, i) {
            if (t === this._gc)
              for (var n = this._first; n; ) n._enabled(t, !0), (n = n._next);
            return e.prototype._enabled.call(this, t, i);
          }),
          (g.totalTime = function () {
            this._forcingPlayhead = !0;
            var e = t.prototype.totalTime.apply(this, arguments);
            return (this._forcingPlayhead = !1), e;
          }),
          (g.duration = function (t) {
            return arguments.length
              ? (0 !== this.duration() &&
                  0 !== t &&
                  this.timeScale(this._duration / t),
                this)
              : (this._dirty && this.totalDuration(), this._duration);
          }),
          (g.totalDuration = function (t) {
            if (!arguments.length) {
              if (this._dirty) {
                for (var e, i, n = 0, r = this._last, s = 999999999999; r; )
                  (e = r._prev),
                    r._dirty && r.totalDuration(),
                    r._startTime > s && this._sortChildren && !r._paused
                      ? this.add(r, r._startTime - r._delay)
                      : (s = r._startTime),
                    0 > r._startTime &&
                      !r._paused &&
                      ((n -= r._startTime),
                      this._timeline.smoothChildTiming &&
                        (this._startTime += r._startTime / this._timeScale),
                      this.shiftChildren(-r._startTime, !1, -9999999999),
                      (s = 0)),
                    (i = r._startTime + r._totalDuration / r._timeScale),
                    i > n && (n = i),
                    (r = e);
                (this._duration = this._totalDuration = n), (this._dirty = !1);
              }
              return this._totalDuration;
            }
            return (
              0 !== this.totalDuration() &&
                0 !== t &&
                this.timeScale(this._totalDuration / t),
              this
            );
          }),
          (g.paused = function (e) {
            if (!e)
              for (var i = this._first, n = this._time; i; )
                i._startTime === n &&
                  "isPause" === i.data &&
                  (i._rawPrevTime = 0),
                  (i = i._next);
            return t.prototype.paused.apply(this, arguments);
          }),
          (g.usesFrames = function () {
            for (var e = this._timeline; e._timeline; ) e = e._timeline;
            return e === t._rootFramesTimeline;
          }),
          (g.rawTime = function () {
            return this._paused
              ? this._totalTime
              : (this._timeline.rawTime() - this._startTime) * this._timeScale;
          }),
          n
        );
      },
      !0
    ),
    _gsScope._gsDefine(
      "TimelineMax",
      ["TimelineLite", "TweenLite", "easing.Ease"],
      function (t, e, i) {
        var n = function (e) {
            t.call(this, e),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              (this._cycle = 0),
              (this._yoyo = this.vars.yoyo === !0),
              (this._dirty = !0);
          },
          r = 1e-10,
          s = [],
          o = e._internals,
          a = o.lazyTweens,
          l = o.lazyRender,
          u = new i(null, null, 1, 0),
          h = (n.prototype = new t());
        return (
          (h.constructor = n),
          (h.kill()._gc = !1),
          (n.version = "1.16.1"),
          (h.invalidate = function () {
            return (
              (this._yoyo = this.vars.yoyo === !0),
              (this._repeat = this.vars.repeat || 0),
              (this._repeatDelay = this.vars.repeatDelay || 0),
              this._uncache(!0),
              t.prototype.invalidate.call(this)
            );
          }),
          (h.addCallback = function (t, i, n, r) {
            return this.add(e.delayedCall(0, t, n, r), i);
          }),
          (h.removeCallback = function (t, e) {
            if (t)
              if (null == e) this._kill(null, t);
              else
                for (
                  var i = this.getTweensOf(t, !1),
                    n = i.length,
                    r = this._parseTimeOrLabel(e);
                  --n > -1;

                )
                  i[n]._startTime === r && i[n]._enabled(!1, !1);
            return this;
          }),
          (h.removePause = function (e) {
            return this.removeCallback(t._internals.pauseCallback, e);
          }),
          (h.tweenTo = function (t, i) {
            i = i || {};
            var n,
              r,
              o,
              a = {
                ease: u,
                useFrames: this.usesFrames(),
                immediateRender: !1,
              };
            for (r in i) a[r] = i[r];
            return (
              (a.time = this._parseTimeOrLabel(t)),
              (n =
                Math.abs(Number(a.time) - this._time) / this._timeScale ||
                0.001),
              (o = new e(this, n, a)),
              (a.onStart = function () {
                o.target.paused(!0),
                  o.vars.time !== o.target.time() &&
                    n === o.duration() &&
                    o.duration(
                      Math.abs(o.vars.time - o.target.time()) /
                        o.target._timeScale
                    ),
                  i.onStart &&
                    i.onStart.apply(i.onStartScope || o, i.onStartParams || s);
              }),
              o
            );
          }),
          (h.tweenFromTo = function (t, e, i) {
            (i = i || {}),
              (t = this._parseTimeOrLabel(t)),
              (i.startAt = {
                onComplete: this.seek,
                onCompleteParams: [t],
                onCompleteScope: this,
              }),
              (i.immediateRender = i.immediateRender !== !1);
            var n = this.tweenTo(e, i);
            return n.duration(
              Math.abs(n.vars.time - t) / this._timeScale || 0.001
            );
          }),
          (h.render = function (t, e, i) {
            this._gc && this._enabled(!0, !1);
            var n,
              o,
              u,
              h,
              c,
              f,
              p = this._dirty ? this.totalDuration() : this._totalDuration,
              d = this._duration,
              m = this._time,
              g = this._totalTime,
              _ = this._startTime,
              v = this._timeScale,
              y = this._rawPrevTime,
              x = this._paused,
              T = this._cycle;
            if (t >= p)
              this._locked ||
                ((this._totalTime = p), (this._cycle = this._repeat)),
                this._reversed ||
                  this._hasPausedChild() ||
                  ((o = !0),
                  (h = "onComplete"),
                  (c = !!this._timeline.autoRemoveChildren),
                  0 === this._duration &&
                    (0 === t || 0 > y || y === r) &&
                    y !== t &&
                    this._first &&
                    ((c = !0), y > r && (h = "onReverseComplete"))),
                (this._rawPrevTime =
                  this._duration || !e || t || this._rawPrevTime === t ? t : r),
                this._yoyo && 0 !== (1 & this._cycle)
                  ? (this._time = t = 0)
                  : ((this._time = d), (t = d + 1e-4));
            else if (1e-7 > t)
              if (
                (this._locked || (this._totalTime = this._cycle = 0),
                (this._time = 0),
                (0 !== m ||
                  (0 === d &&
                    y !== r &&
                    (y > 0 || (0 > t && y >= 0)) &&
                    !this._locked)) &&
                  ((h = "onReverseComplete"), (o = this._reversed)),
                0 > t)
              )
                (this._active = !1),
                  this._timeline.autoRemoveChildren && this._reversed
                    ? ((c = o = !0), (h = "onReverseComplete"))
                    : y >= 0 && this._first && (c = !0),
                  (this._rawPrevTime = t);
              else {
                if (
                  ((this._rawPrevTime =
                    d || !e || t || this._rawPrevTime === t ? t : r),
                  0 === t && o)
                )
                  for (n = this._first; n && 0 === n._startTime; )
                    n._duration || (o = !1), (n = n._next);
                (t = 0), this._initted || (c = !0);
              }
            else
              0 === d && 0 > y && (c = !0),
                (this._time = this._rawPrevTime = t),
                this._locked ||
                  ((this._totalTime = t),
                  0 !== this._repeat &&
                    ((f = d + this._repeatDelay),
                    (this._cycle = (this._totalTime / f) >> 0),
                    0 !== this._cycle &&
                      this._cycle === this._totalTime / f &&
                      this._cycle--,
                    (this._time = this._totalTime - this._cycle * f),
                    this._yoyo &&
                      0 !== (1 & this._cycle) &&
                      (this._time = d - this._time),
                    this._time > d
                      ? ((this._time = d), (t = d + 1e-4))
                      : 0 > this._time
                      ? (this._time = t = 0)
                      : (t = this._time)));
            if (this._cycle !== T && !this._locked) {
              var w = this._yoyo && 0 !== (1 & T),
                b = w === (this._yoyo && 0 !== (1 & this._cycle)),
                P = this._totalTime,
                S = this._cycle,
                C = this._rawPrevTime,
                k = this._time;
              if (
                ((this._totalTime = T * d),
                T > this._cycle ? (w = !w) : (this._totalTime += d),
                (this._time = m),
                (this._rawPrevTime = 0 === d ? y - 1e-4 : y),
                (this._cycle = T),
                (this._locked = !0),
                (m = w ? 0 : d),
                this.render(m, e, 0 === d),
                e ||
                  this._gc ||
                  (this.vars.onRepeat &&
                    this.vars.onRepeat.apply(
                      this.vars.onRepeatScope || this,
                      this.vars.onRepeatParams || s
                    )),
                b && ((m = w ? d + 1e-4 : -1e-4), this.render(m, !0, !1)),
                (this._locked = !1),
                this._paused && !x)
              )
                return;
              (this._time = k),
                (this._totalTime = P),
                (this._cycle = S),
                (this._rawPrevTime = C);
            }
            if (!((this._time !== m && this._first) || i || c))
              return void (
                g !== this._totalTime &&
                this._onUpdate &&
                (e ||
                  this._onUpdate.apply(
                    this.vars.onUpdateScope || this,
                    this.vars.onUpdateParams || s
                  ))
              );
            if (
              (this._initted || (this._initted = !0),
              this._active ||
                (!this._paused &&
                  this._totalTime !== g &&
                  t > 0 &&
                  (this._active = !0)),
              0 === g &&
                this.vars.onStart &&
                0 !== this._totalTime &&
                (e ||
                  this.vars.onStart.apply(
                    this.vars.onStartScope || this,
                    this.vars.onStartParams || s
                  )),
              this._time >= m)
            )
              for (n = this._first; n && ((u = n._next), !this._paused || x); )
                (n._active ||
                  (n._startTime <= this._time && !n._paused && !n._gc)) &&
                  (n._reversed
                    ? n.render(
                        (n._dirty ? n.totalDuration() : n._totalDuration) -
                          (t - n._startTime) * n._timeScale,
                        e,
                        i
                      )
                    : n.render((t - n._startTime) * n._timeScale, e, i)),
                  (n = u);
            else
              for (n = this._last; n && ((u = n._prev), !this._paused || x); )
                (n._active || (m >= n._startTime && !n._paused && !n._gc)) &&
                  (n._reversed
                    ? n.render(
                        (n._dirty ? n.totalDuration() : n._totalDuration) -
                          (t - n._startTime) * n._timeScale,
                        e,
                        i
                      )
                    : n.render((t - n._startTime) * n._timeScale, e, i)),
                  (n = u);
            this._onUpdate &&
              (e ||
                (a.length && l(),
                this._onUpdate.apply(
                  this.vars.onUpdateScope || this,
                  this.vars.onUpdateParams || s
                ))),
              h &&
                (this._locked ||
                  this._gc ||
                  ((_ === this._startTime || v !== this._timeScale) &&
                    (0 === this._time || p >= this.totalDuration()) &&
                    (o &&
                      (a.length && l(),
                      this._timeline.autoRemoveChildren &&
                        this._enabled(!1, !1),
                      (this._active = !1)),
                    !e &&
                      this.vars[h] &&
                      this.vars[h].apply(
                        this.vars[h + "Scope"] || this,
                        this.vars[h + "Params"] || s
                      ))));
          }),
          (h.getActive = function (t, e, i) {
            null == t && (t = !0), null == e && (e = !0), null == i && (i = !1);
            var n,
              r,
              s = [],
              o = this.getChildren(t, e, i),
              a = 0,
              l = o.length;
            for (n = 0; l > n; n++) (r = o[n]), r.isActive() && (s[a++] = r);
            return s;
          }),
          (h.getLabelAfter = function (t) {
            t || (0 !== t && (t = this._time));
            var e,
              i = this.getLabelsArray(),
              n = i.length;
            for (e = 0; n > e; e++) if (i[e].time > t) return i[e].name;
            return null;
          }),
          (h.getLabelBefore = function (t) {
            null == t && (t = this._time);
            for (var e = this.getLabelsArray(), i = e.length; --i > -1; )
              if (t > e[i].time) return e[i].name;
            return null;
          }),
          (h.getLabelsArray = function () {
            var t,
              e = [],
              i = 0;
            for (t in this._labels) e[i++] = { time: this._labels[t], name: t };
            return (
              e.sort(function (t, e) {
                return t.time - e.time;
              }),
              e
            );
          }),
          (h.progress = function (t, e) {
            return arguments.length
              ? this.totalTime(
                  this.duration() *
                    (this._yoyo && 0 !== (1 & this._cycle) ? 1 - t : t) +
                    this._cycle * (this._duration + this._repeatDelay),
                  e
                )
              : this._time / this.duration();
          }),
          (h.totalProgress = function (t, e) {
            return arguments.length
              ? this.totalTime(this.totalDuration() * t, e)
              : this._totalTime / this.totalDuration();
          }),
          (h.totalDuration = function (e) {
            return arguments.length
              ? -1 === this._repeat
                ? this
                : this.duration(
                    (e - this._repeat * this._repeatDelay) / (this._repeat + 1)
                  )
              : (this._dirty &&
                  (t.prototype.totalDuration.call(this),
                  (this._totalDuration =
                    -1 === this._repeat
                      ? 999999999999
                      : this._duration * (this._repeat + 1) +
                        this._repeatDelay * this._repeat)),
                this._totalDuration);
          }),
          (h.time = function (t, e) {
            return arguments.length
              ? (this._dirty && this.totalDuration(),
                t > this._duration && (t = this._duration),
                this._yoyo && 0 !== (1 & this._cycle)
                  ? (t =
                      this._duration -
                      t +
                      this._cycle * (this._duration + this._repeatDelay))
                  : 0 !== this._repeat &&
                    (t += this._cycle * (this._duration + this._repeatDelay)),
                this.totalTime(t, e))
              : this._time;
          }),
          (h.repeat = function (t) {
            return arguments.length
              ? ((this._repeat = t), this._uncache(!0))
              : this._repeat;
          }),
          (h.repeatDelay = function (t) {
            return arguments.length
              ? ((this._repeatDelay = t), this._uncache(!0))
              : this._repeatDelay;
          }),
          (h.yoyo = function (t) {
            return arguments.length ? ((this._yoyo = t), this) : this._yoyo;
          }),
          (h.currentLabel = function (t) {
            return arguments.length
              ? this.seek(t, !0)
              : this.getLabelBefore(this._time + 1e-8);
          }),
          n
        );
      },
      !0
    ),
    (function () {
      var t = 180 / Math.PI,
        e = [],
        i = [],
        n = [],
        r = {},
        s = _gsScope._gsDefine.globals,
        o = function (t, e, i, n) {
          (this.a = t),
            (this.b = e),
            (this.c = i),
            (this.d = n),
            (this.da = n - t),
            (this.ca = i - t),
            (this.ba = e - t);
        },
        a =
          ",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",
        l = function (t, e, i, n) {
          var r = { a: t },
            s = {},
            o = {},
            a = { c: n },
            l = (t + e) / 2,
            u = (e + i) / 2,
            h = (i + n) / 2,
            c = (l + u) / 2,
            f = (u + h) / 2,
            p = (f - c) / 8;
          return (
            (r.b = l + (t - l) / 4),
            (s.b = c + p),
            (r.c = s.a = (r.b + s.b) / 2),
            (s.c = o.a = (c + f) / 2),
            (o.b = f - p),
            (a.b = h + (n - h) / 4),
            (o.c = a.a = (o.b + a.b) / 2),
            [r, s, o, a]
          );
        },
        u = function (t, r, s, o, a) {
          var u,
            h,
            c,
            f,
            p,
            d,
            m,
            g,
            _,
            v,
            y,
            x,
            T,
            w = t.length - 1,
            b = 0,
            P = t[0].a;
          for (u = 0; w > u; u++)
            (p = t[b]),
              (h = p.a),
              (c = p.d),
              (f = t[b + 1].d),
              a
                ? ((y = e[u]),
                  (x = i[u]),
                  (T = (0.25 * (x + y) * r) / (o ? 0.5 : n[u] || 0.5)),
                  (d = c - (c - h) * (o ? 0.5 * r : 0 !== y ? T / y : 0)),
                  (m = c + (f - c) * (o ? 0.5 * r : 0 !== x ? T / x : 0)),
                  (g =
                    c - (d + (((m - d) * ((3 * y) / (y + x) + 0.5)) / 4 || 0))))
                : ((d = c - 0.5 * (c - h) * r),
                  (m = c + 0.5 * (f - c) * r),
                  (g = c - (d + m) / 2)),
              (d += g),
              (m += g),
              (p.c = _ = d),
              (p.b = 0 !== u ? P : (P = p.a + 0.6 * (p.c - p.a))),
              (p.da = c - h),
              (p.ca = _ - h),
              (p.ba = P - h),
              s
                ? ((v = l(h, P, _, c)),
                  t.splice(b, 1, v[0], v[1], v[2], v[3]),
                  (b += 4))
                : b++,
              (P = m);
          (p = t[b]),
            (p.b = P),
            (p.c = P + 0.4 * (p.d - P)),
            (p.da = p.d - p.a),
            (p.ca = p.c - p.a),
            (p.ba = P - p.a),
            s &&
              ((v = l(p.a, P, p.c, p.d)),
              t.splice(b, 1, v[0], v[1], v[2], v[3]));
        },
        h = function (t, n, r, s) {
          var a,
            l,
            u,
            h,
            c,
            f,
            p = [];
          if (s)
            for (t = [s].concat(t), l = t.length; --l > -1; )
              "string" == typeof (f = t[l][n]) &&
                "=" === f.charAt(1) &&
                (t[l][n] = s[n] + Number(f.charAt(0) + f.substr(2)));
          if (((a = t.length - 2), 0 > a))
            return (p[0] = new o(t[0][n], 0, 0, t[-1 > a ? 0 : 1][n])), p;
          for (l = 0; a > l; l++)
            (u = t[l][n]),
              (h = t[l + 1][n]),
              (p[l] = new o(u, 0, 0, h)),
              r &&
                ((c = t[l + 2][n]),
                (e[l] = (e[l] || 0) + (h - u) * (h - u)),
                (i[l] = (i[l] || 0) + (c - h) * (c - h)));
          return (p[l] = new o(t[l][n], 0, 0, t[l + 1][n])), p;
        },
        c = function (t, s, o, l, c, f) {
          var p,
            d,
            m,
            g,
            _,
            v,
            y,
            x,
            T = {},
            w = [],
            b = f || t[0];
          (c = "string" == typeof c ? "," + c + "," : a), null == s && (s = 1);
          for (d in t[0]) w.push(d);
          if (t.length > 1) {
            for (x = t[t.length - 1], y = !0, p = w.length; --p > -1; )
              if (((d = w[p]), Math.abs(b[d] - x[d]) > 0.05)) {
                y = !1;
                break;
              }
            y &&
              ((t = t.concat()),
              f && t.unshift(f),
              t.push(t[1]),
              (f = t[t.length - 3]));
          }
          for (e.length = i.length = n.length = 0, p = w.length; --p > -1; )
            (d = w[p]),
              (r[d] = -1 !== c.indexOf("," + d + ",")),
              (T[d] = h(t, d, r[d], f));
          for (p = e.length; --p > -1; )
            (e[p] = Math.sqrt(e[p])), (i[p] = Math.sqrt(i[p]));
          if (!l) {
            for (p = w.length; --p > -1; )
              if (r[d])
                for (m = T[w[p]], v = m.length - 1, g = 0; v > g; g++)
                  (_ = m[g + 1].da / i[g] + m[g].da / e[g]),
                    (n[g] = (n[g] || 0) + _ * _);
            for (p = n.length; --p > -1; ) n[p] = Math.sqrt(n[p]);
          }
          for (p = w.length, g = o ? 4 : 1; --p > -1; )
            (d = w[p]),
              (m = T[d]),
              u(m, s, o, l, r[d]),
              y && (m.splice(0, g), m.splice(m.length - g, g));
          return T;
        },
        f = function (t, e, i) {
          e = e || "soft";
          var n,
            r,
            s,
            a,
            l,
            u,
            h,
            c,
            f,
            p,
            d,
            m = {},
            g = "cubic" === e ? 3 : 2,
            _ = "soft" === e,
            v = [];
          if ((_ && i && (t = [i].concat(t)), null == t || g + 1 > t.length))
            throw "invalid Bezier data";
          for (f in t[0]) v.push(f);
          for (u = v.length; --u > -1; ) {
            for (
              f = v[u], m[f] = l = [], p = 0, c = t.length, h = 0;
              c > h;
              h++
            )
              (n =
                null == i
                  ? t[h][f]
                  : "string" == typeof (d = t[h][f]) && "=" === d.charAt(1)
                  ? i[f] + Number(d.charAt(0) + d.substr(2))
                  : Number(d)),
                _ && h > 1 && c - 1 > h && (l[p++] = (n + l[p - 2]) / 2),
                (l[p++] = n);
            for (c = p - g + 1, p = 0, h = 0; c > h; h += g)
              (n = l[h]),
                (r = l[h + 1]),
                (s = l[h + 2]),
                (a = 2 === g ? 0 : l[h + 3]),
                (l[p++] = d =
                  3 === g
                    ? new o(n, r, s, a)
                    : new o(n, (2 * r + n) / 3, (2 * r + s) / 3, s));
            l.length = p;
          }
          return m;
        },
        p = function (t, e, i) {
          for (
            var n, r, s, o, a, l, u, h, c, f, p, d = 1 / i, m = t.length;
            --m > -1;

          )
            for (
              f = t[m],
                s = f.a,
                o = f.d - s,
                a = f.c - s,
                l = f.b - s,
                n = r = 0,
                h = 1;
              i >= h;
              h++
            )
              (u = d * h),
                (c = 1 - u),
                (n = r - (r = (u * u * o + 3 * c * (u * a + c * l)) * u)),
                (p = m * i + h - 1),
                (e[p] = (e[p] || 0) + n * n);
        },
        d = function (t, e) {
          e = e >> 0 || 6;
          var i,
            n,
            r,
            s,
            o = [],
            a = [],
            l = 0,
            u = 0,
            h = e - 1,
            c = [],
            f = [];
          for (i in t) p(t[i], o, e);
          for (r = o.length, n = 0; r > n; n++)
            (l += Math.sqrt(o[n])),
              (s = n % e),
              (f[s] = l),
              s === h &&
                ((u += l),
                (s = (n / e) >> 0),
                (c[s] = f),
                (a[s] = u),
                (l = 0),
                (f = []));
          return { length: u, lengths: a, segments: c };
        },
        m = _gsScope._gsDefine.plugin({
          propName: "bezier",
          priority: -1,
          version: "1.3.4",
          API: 2,
          global: !0,
          init: function (t, e, i) {
            (this._target = t),
              e instanceof Array && (e = { values: e }),
              (this._func = {}),
              (this._round = {}),
              (this._props = []),
              (this._timeRes =
                null == e.timeResolution ? 6 : parseInt(e.timeResolution, 10));
            var n,
              r,
              s,
              o,
              a,
              l = e.values || [],
              u = {},
              h = l[0],
              p = e.autoRotate || i.vars.orientToBezier;
            this._autoRotate = p
              ? p instanceof Array
                ? p
                : [["x", "y", "rotation", p === !0 ? 0 : Number(p) || 0]]
              : null;
            for (n in h) this._props.push(n);
            for (s = this._props.length; --s > -1; )
              (n = this._props[s]),
                this._overwriteProps.push(n),
                (r = this._func[n] = "function" == typeof t[n]),
                (u[n] = r
                  ? t[
                      n.indexOf("set") ||
                      "function" != typeof t["get" + n.substr(3)]
                        ? n
                        : "get" + n.substr(3)
                    ]()
                  : parseFloat(t[n])),
                a || (u[n] !== l[0][n] && (a = u));
            if (
              ((this._beziers =
                "cubic" !== e.type &&
                "quadratic" !== e.type &&
                "soft" !== e.type
                  ? c(
                      l,
                      isNaN(e.curviness) ? 1 : e.curviness,
                      !1,
                      "thruBasic" === e.type,
                      e.correlate,
                      a
                    )
                  : f(l, e.type, u)),
              (this._segCount = this._beziers[n].length),
              this._timeRes)
            ) {
              var m = d(this._beziers, this._timeRes);
              (this._length = m.length),
                (this._lengths = m.lengths),
                (this._segments = m.segments),
                (this._l1 = this._li = this._s1 = this._si = 0),
                (this._l2 = this._lengths[0]),
                (this._curSeg = this._segments[0]),
                (this._s2 = this._curSeg[0]),
                (this._prec = 1 / this._curSeg.length);
            }
            if ((p = this._autoRotate))
              for (
                this._initialRotations = [],
                  p[0] instanceof Array || (this._autoRotate = p = [p]),
                  s = p.length;
                --s > -1;

              ) {
                for (o = 0; 3 > o; o++)
                  (n = p[s][o]),
                    (this._func[n] =
                      "function" == typeof t[n] &&
                      t[
                        n.indexOf("set") ||
                        "function" != typeof t["get" + n.substr(3)]
                          ? n
                          : "get" + n.substr(3)
                      ]);
                (n = p[s][2]),
                  (this._initialRotations[s] = this._func[n]
                    ? this._func[n].call(this._target)
                    : this._target[n]);
              }
            return (this._startRatio = i.vars.runBackwards ? 1 : 0), !0;
          },
          set: function (e) {
            var i,
              n,
              r,
              s,
              o,
              a,
              l,
              u,
              h,
              c,
              f = this._segCount,
              p = this._func,
              d = this._target,
              m = e !== this._startRatio;
            if (this._timeRes) {
              if (
                ((h = this._lengths),
                (c = this._curSeg),
                (e *= this._length),
                (r = this._li),
                e > this._l2 && f - 1 > r)
              ) {
                for (u = f - 1; u > r && e >= (this._l2 = h[++r]); );
                (this._l1 = h[r - 1]),
                  (this._li = r),
                  (this._curSeg = c = this._segments[r]),
                  (this._s2 = c[(this._s1 = this._si = 0)]);
              } else if (this._l1 > e && r > 0) {
                for (; r > 0 && (this._l1 = h[--r]) >= e; );
                0 === r && this._l1 > e ? (this._l1 = 0) : r++,
                  (this._l2 = h[r]),
                  (this._li = r),
                  (this._curSeg = c = this._segments[r]),
                  (this._s1 = c[(this._si = c.length - 1) - 1] || 0),
                  (this._s2 = c[this._si]);
              }
              if (
                ((i = r),
                (e -= this._l1),
                (r = this._si),
                e > this._s2 && c.length - 1 > r)
              ) {
                for (u = c.length - 1; u > r && e >= (this._s2 = c[++r]); );
                (this._s1 = c[r - 1]), (this._si = r);
              } else if (this._s1 > e && r > 0) {
                for (; r > 0 && (this._s1 = c[--r]) >= e; );
                0 === r && this._s1 > e ? (this._s1 = 0) : r++,
                  (this._s2 = c[r]),
                  (this._si = r);
              }
              a = (r + (e - this._s1) / (this._s2 - this._s1)) * this._prec;
            } else
              (i = 0 > e ? 0 : e >= 1 ? f - 1 : (f * e) >> 0),
                (a = (e - i * (1 / f)) * f);
            for (n = 1 - a, r = this._props.length; --r > -1; )
              (s = this._props[r]),
                (o = this._beziers[s][i]),
                (l = (a * a * o.da + 3 * n * (a * o.ca + n * o.ba)) * a + o.a),
                this._round[s] && (l = Math.round(l)),
                p[s] ? d[s](l) : (d[s] = l);
            if (this._autoRotate) {
              var g,
                _,
                v,
                y,
                x,
                T,
                w,
                b = this._autoRotate;
              for (r = b.length; --r > -1; )
                (s = b[r][2]),
                  (T = b[r][3] || 0),
                  (w = b[r][4] === !0 ? 1 : t),
                  (o = this._beziers[b[r][0]]),
                  (g = this._beziers[b[r][1]]),
                  o &&
                    g &&
                    ((o = o[i]),
                    (g = g[i]),
                    (_ = o.a + (o.b - o.a) * a),
                    (y = o.b + (o.c - o.b) * a),
                    (_ += (y - _) * a),
                    (y += (o.c + (o.d - o.c) * a - y) * a),
                    (v = g.a + (g.b - g.a) * a),
                    (x = g.b + (g.c - g.b) * a),
                    (v += (x - v) * a),
                    (x += (g.c + (g.d - g.c) * a - x) * a),
                    (l = m
                      ? Math.atan2(x - v, y - _) * w + T
                      : this._initialRotations[r]),
                    p[s] ? d[s](l) : (d[s] = l));
            }
          },
        }),
        g = m.prototype;
      (m.bezierThrough = c),
        (m.cubicToQuadratic = l),
        (m._autoCSS = !0),
        (m.quadraticToCubic = function (t, e, i) {
          return new o(t, (2 * e + t) / 3, (2 * e + i) / 3, i);
        }),
        (m._cssRegister = function () {
          var t = s.CSSPlugin;
          if (t) {
            var e = t._internals,
              i = e._parseToProxy,
              n = e._setPluginRatio,
              r = e.CSSPropTween;
            e._registerComplexSpecialProp("bezier", {
              parser: function (t, e, s, o, a, l) {
                e instanceof Array && (e = { values: e }), (l = new m());
                var u,
                  h,
                  c,
                  f = e.values,
                  p = f.length - 1,
                  d = [],
                  g = {};
                if (0 > p) return a;
                for (u = 0; p >= u; u++)
                  (c = i(t, f[u], o, a, l, p !== u)), (d[u] = c.end);
                for (h in e) g[h] = e[h];
                return (
                  (g.values = d),
                  (a = new r(t, "bezier", 0, 0, c.pt, 2)),
                  (a.data = c),
                  (a.plugin = l),
                  (a.setRatio = n),
                  0 === g.autoRotate && (g.autoRotate = !0),
                  !g.autoRotate ||
                    g.autoRotate instanceof Array ||
                    ((u = g.autoRotate === !0 ? 0 : Number(g.autoRotate)),
                    (g.autoRotate =
                      null != c.end.left
                        ? [["left", "top", "rotation", u, !1]]
                        : null != c.end.x && [["x", "y", "rotation", u, !1]])),
                  g.autoRotate &&
                    (o._transform || o._enableTransforms(!1),
                    (c.autoRotate = o._target._gsTransform)),
                  l._onInitTween(c.proxy, g, o._tween),
                  a
                );
              },
            });
          }
        }),
        (g._roundProps = function (t, e) {
          for (var i = this._overwriteProps, n = i.length; --n > -1; )
            (t[i[n]] || t.bezier || t.bezierThrough) && (this._round[i[n]] = e);
        }),
        (g._kill = function (t) {
          var e,
            i,
            n = this._props;
          for (e in this._beziers)
            if (e in t)
              for (
                delete this._beziers[e], delete this._func[e], i = n.length;
                --i > -1;

              )
                n[i] === e && n.splice(i, 1);
          return this._super._kill.call(this, t);
        });
    })(),
    _gsScope._gsDefine(
      "plugins.CSSPlugin",
      ["plugins.TweenPlugin", "TweenLite"],
      function (t, e) {
        var i,
          n,
          r,
          s,
          o = function () {
            t.call(this, "css"),
              (this._overwriteProps.length = 0),
              (this.setRatio = o.prototype.setRatio);
          },
          a = _gsScope._gsDefine.globals,
          l = {},
          u = (o.prototype = new t("css"));
        (u.constructor = o),
          (o.version = "1.16.1"),
          (o.API = 2),
          (o.defaultTransformPerspective = 0),
          (o.defaultSkewType = "compensated"),
          (u = "px"),
          (o.suffixMap = {
            top: u,
            right: u,
            bottom: u,
            left: u,
            width: u,
            height: u,
            fontSize: u,
            padding: u,
            margin: u,
            perspective: u,
            lineHeight: "",
          });
        var h,
          c,
          f,
          p,
          d,
          m,
          g = /(?:\d|\-\d|\.\d|\-\.\d)+/g,
          _ = /(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,
          v = /(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,
          y = /(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,
          x = /(?:\d|\-|\+|=|#|\.)*/g,
          T = /opacity *= *([^)]*)/i,
          w = /opacity:([^;]*)/i,
          b = /alpha\(opacity *=.+?\)/i,
          P = /^(rgb|hsl)/,
          S = /([A-Z])/g,
          C = /-([a-z])/gi,
          k = /(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,
          O = function (t, e) {
            return e.toUpperCase();
          },
          D = /(?:Left|Right|Width)/i,
          A = /(M11|M12|M21|M22)=[\d\-\.e]+/gi,
          M = /progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,
          R = /,(?=[^\)]*(?:\(|$))/gi,
          N = Math.PI / 180,
          E = 180 / Math.PI,
          L = {},
          j = document,
          F = function (t) {
            return j.createElementNS
              ? j.createElementNS("http://www.w3.org/1999/xhtml", t)
              : j.createElement(t);
          },
          I = F("div"),
          H = F("img"),
          z = (o._internals = { _specialProps: l }),
          W = navigator.userAgent,
          $ = (function () {
            var t = W.indexOf("Android"),
              e = F("a");
            return (
              (f =
                -1 !== W.indexOf("Safari") &&
                -1 === W.indexOf("Chrome") &&
                (-1 === t || Number(W.substr(t + 8, 1)) > 3)),
              (d = f && 6 > Number(W.substr(W.indexOf("Version/") + 8, 1))),
              (p = -1 !== W.indexOf("Firefox")),
              (/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(W) ||
                /Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(W)) &&
                (m = parseFloat(RegExp.$1)),
              !!e &&
                ((e.style.cssText = "top:1px;opacity:.55;"),
                /^0.55/.test(e.style.opacity))
            );
          })(),
          B = function (t) {
            return T.test(
              "string" == typeof t
                ? t
                : (t.currentStyle ? t.currentStyle.filter : t.style.filter) ||
                    ""
            )
              ? parseFloat(RegExp.$1) / 100
              : 1;
          },
          q = function (t) {
            window.console && console.log(t);
          },
          X = "",
          Y = "",
          U = function (t, e) {
            e = e || I;
            var i,
              n,
              r = e.style;
            if (void 0 !== r[t]) return t;
            for (
              t = t.charAt(0).toUpperCase() + t.substr(1),
                i = ["O", "Moz", "ms", "Ms", "Webkit"],
                n = 5;
              --n > -1 && void 0 === r[i[n] + t];

            );
            return n >= 0
              ? ((Y = 3 === n ? "ms" : i[n]),
                (X = "-" + Y.toLowerCase() + "-"),
                Y + t)
              : null;
          },
          V = j.defaultView ? j.defaultView.getComputedStyle : function () {},
          G = (o.getStyle = function (t, e, i, n, r) {
            var s;
            return $ || "opacity" !== e
              ? (!n && t.style[e]
                  ? (s = t.style[e])
                  : (i = i || V(t))
                  ? (s =
                      i[e] ||
                      i.getPropertyValue(e) ||
                      i.getPropertyValue(e.replace(S, "-$1").toLowerCase()))
                  : t.currentStyle && (s = t.currentStyle[e]),
                null == r ||
                (s && "none" !== s && "auto" !== s && "auto auto" !== s)
                  ? s
                  : r)
              : B(t);
          }),
          Q = (z.convertToPixels = function (t, i, n, r, s) {
            if ("px" === r || !r) return n;
            if ("auto" === r || !n) return 0;
            var a,
              l,
              u,
              h = D.test(i),
              c = t,
              f = I.style,
              p = 0 > n;
            if ((p && (n = -n), "%" === r && -1 !== i.indexOf("border")))
              a = (n / 100) * (h ? t.clientWidth : t.clientHeight);
            else {
              if (
                ((f.cssText =
                  "border:0 solid red;position:" +
                  G(t, "position") +
                  ";line-height:0;"),
                "%" !== r && c.appendChild)
              )
                f[h ? "borderLeftWidth" : "borderTopWidth"] = n + r;
              else {
                if (
                  ((c = t.parentNode || j.body),
                  (l = c._gsCache),
                  (u = e.ticker.frame),
                  l && h && l.time === u)
                )
                  return (l.width * n) / 100;
                f[h ? "width" : "height"] = n + r;
              }
              c.appendChild(I),
                (a = parseFloat(I[h ? "offsetWidth" : "offsetHeight"])),
                c.removeChild(I),
                h &&
                  "%" === r &&
                  o.cacheWidths !== !1 &&
                  ((l = c._gsCache = c._gsCache || {}),
                  (l.time = u),
                  (l.width = 100 * (a / n))),
                0 !== a || s || (a = Q(t, i, n, r, !0));
            }
            return p ? -a : a;
          }),
          Z = (z.calculateOffset = function (t, e, i) {
            if ("absolute" !== G(t, "position", i)) return 0;
            var n = "left" === e ? "Left" : "Top",
              r = G(t, "margin" + n, i);
            return (
              t["offset" + n] - (Q(t, e, parseFloat(r), r.replace(x, "")) || 0)
            );
          }),
          K = function (t, e) {
            var i,
              n,
              r,
              s = {};
            if ((e = e || V(t, null)))
              if ((i = e.length))
                for (; --i > -1; )
                  (r = e[i]),
                    (-1 === r.indexOf("-transform") || bt === r) &&
                      (s[r.replace(C, O)] = e.getPropertyValue(r));
              else
                for (i in e)
                  (-1 === i.indexOf("Transform") || wt === i) && (s[i] = e[i]);
            else if ((e = t.currentStyle || t.style))
              for (i in e)
                "string" == typeof i &&
                  void 0 === s[i] &&
                  (s[i.replace(C, O)] = e[i]);
            return (
              $ || (s.opacity = B(t)),
              (n = Rt(t, e, !1)),
              (s.rotation = n.rotation),
              (s.skewX = n.skewX),
              (s.scaleX = n.scaleX),
              (s.scaleY = n.scaleY),
              (s.x = n.x),
              (s.y = n.y),
              St &&
                ((s.z = n.z),
                (s.rotationX = n.rotationX),
                (s.rotationY = n.rotationY),
                (s.scaleZ = n.scaleZ)),
              s.filters && delete s.filters,
              s
            );
          },
          J = function (t, e, i, n, r) {
            var s,
              o,
              a,
              l = {},
              u = t.style;
            for (o in i)
              "cssText" !== o &&
                "length" !== o &&
                isNaN(o) &&
                (e[o] !== (s = i[o]) || (r && r[o])) &&
                -1 === o.indexOf("Origin") &&
                ("number" == typeof s || "string" == typeof s) &&
                ((l[o] =
                  "auto" !== s || ("left" !== o && "top" !== o)
                    ? ("" !== s && "auto" !== s && "none" !== s) ||
                      "string" != typeof e[o] ||
                      "" === e[o].replace(y, "")
                      ? s
                      : 0
                    : Z(t, o)),
                void 0 !== u[o] && (a = new pt(u, o, u[o], a)));
            if (n) for (o in n) "className" !== o && (l[o] = n[o]);
            return { difs: l, firstMPT: a };
          },
          tt = { width: ["Left", "Right"], height: ["Top", "Bottom"] },
          et = ["marginLeft", "marginRight", "marginTop", "marginBottom"],
          it = function (t, e, i) {
            var n = parseFloat("width" === e ? t.offsetWidth : t.offsetHeight),
              r = tt[e],
              s = r.length;
            for (i = i || V(t, null); --s > -1; )
              (n -= parseFloat(G(t, "padding" + r[s], i, !0)) || 0),
                (n -= parseFloat(G(t, "border" + r[s] + "Width", i, !0)) || 0);
            return n;
          },
          nt = function (t, e) {
            (null == t || "" === t || "auto" === t || "auto auto" === t) &&
              (t = "0 0");
            var i = t.split(" "),
              n =
                -1 !== t.indexOf("left")
                  ? "0%"
                  : -1 !== t.indexOf("right")
                  ? "100%"
                  : i[0],
              r =
                -1 !== t.indexOf("top")
                  ? "0%"
                  : -1 !== t.indexOf("bottom")
                  ? "100%"
                  : i[1];
            return (
              null == r
                ? (r = "center" === n ? "50%" : "0")
                : "center" === r && (r = "50%"),
              ("center" === n ||
                (isNaN(parseFloat(n)) && -1 === (n + "").indexOf("="))) &&
                (n = "50%"),
              (t = n + " " + r + (i.length > 2 ? " " + i[2] : "")),
              e &&
                ((e.oxp = -1 !== n.indexOf("%")),
                (e.oyp = -1 !== r.indexOf("%")),
                (e.oxr = "=" === n.charAt(1)),
                (e.oyr = "=" === r.charAt(1)),
                (e.ox = parseFloat(n.replace(y, ""))),
                (e.oy = parseFloat(r.replace(y, ""))),
                (e.v = t)),
              e || t
            );
          },
          rt = function (t, e) {
            return "string" == typeof t && "=" === t.charAt(1)
              ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2))
              : parseFloat(t) - parseFloat(e);
          },
          st = function (t, e) {
            return null == t
              ? e
              : "string" == typeof t && "=" === t.charAt(1)
              ? parseInt(t.charAt(0) + "1", 10) * parseFloat(t.substr(2)) + e
              : parseFloat(t);
          },
          ot = function (t, e, i, n) {
            var r,
              s,
              o,
              a,
              l,
              u = 1e-6;
            return (
              null == t
                ? (a = e)
                : "number" == typeof t
                ? (a = t)
                : ((r = 360),
                  (s = t.split("_")),
                  (l = "=" === t.charAt(1)),
                  (o =
                    (l
                      ? parseInt(t.charAt(0) + "1", 10) *
                        parseFloat(s[0].substr(2))
                      : parseFloat(s[0])) *
                      (-1 === t.indexOf("rad") ? 1 : E) -
                    (l ? 0 : e)),
                  s.length &&
                    (n && (n[i] = e + o),
                    -1 !== t.indexOf("short") &&
                      ((o %= r),
                      o !== o % (r / 2) && (o = 0 > o ? o + r : o - r)),
                    -1 !== t.indexOf("_cw") && 0 > o
                      ? (o = ((o + 9999999999 * r) % r) - (0 | (o / r)) * r)
                      : -1 !== t.indexOf("ccw") &&
                        o > 0 &&
                        (o = ((o - 9999999999 * r) % r) - (0 | (o / r)) * r)),
                  (a = e + o)),
              u > a && a > -u && (a = 0),
              a
            );
          },
          at = {
            aqua: [0, 255, 255],
            lime: [0, 255, 0],
            silver: [192, 192, 192],
            black: [0, 0, 0],
            maroon: [128, 0, 0],
            teal: [0, 128, 128],
            blue: [0, 0, 255],
            navy: [0, 0, 128],
            white: [255, 255, 255],
            fuchsia: [255, 0, 255],
            olive: [128, 128, 0],
            yellow: [255, 255, 0],
            orange: [255, 165, 0],
            gray: [128, 128, 128],
            purple: [128, 0, 128],
            green: [0, 128, 0],
            red: [255, 0, 0],
            pink: [255, 192, 203],
            cyan: [0, 255, 255],
            transparent: [255, 255, 255, 0],
          },
          lt = function (t, e, i) {
            return (
              (t = 0 > t ? t + 1 : t > 1 ? t - 1 : t),
              0 |
                (255 *
                  (1 > 6 * t
                    ? e + 6 * (i - e) * t
                    : 0.5 > t
                    ? i
                    : 2 > 3 * t
                    ? e + 6 * (i - e) * (2 / 3 - t)
                    : e) +
                  0.5)
            );
          },
          ut = (o.parseColor = function (t) {
            var e, i, n, r, s, o;
            return t && "" !== t
              ? "number" == typeof t
                ? [t >> 16, 255 & (t >> 8), 255 & t]
                : ("," === t.charAt(t.length - 1) &&
                    (t = t.substr(0, t.length - 1)),
                  at[t]
                    ? at[t]
                    : "#" === t.charAt(0)
                    ? (4 === t.length &&
                        ((e = t.charAt(1)),
                        (i = t.charAt(2)),
                        (n = t.charAt(3)),
                        (t = "#" + e + e + i + i + n + n)),
                      (t = parseInt(t.substr(1), 16)),
                      [t >> 16, 255 & (t >> 8), 255 & t])
                    : "hsl" === t.substr(0, 3)
                    ? ((t = t.match(g)),
                      (r = (Number(t[0]) % 360) / 360),
                      (s = Number(t[1]) / 100),
                      (o = Number(t[2]) / 100),
                      (i = 0.5 >= o ? o * (s + 1) : o + s - o * s),
                      (e = 2 * o - i),
                      t.length > 3 && (t[3] = Number(t[3])),
                      (t[0] = lt(r + 1 / 3, e, i)),
                      (t[1] = lt(r, e, i)),
                      (t[2] = lt(r - 1 / 3, e, i)),
                      t)
                    : ((t = t.match(g) || at.transparent),
                      (t[0] = Number(t[0])),
                      (t[1] = Number(t[1])),
                      (t[2] = Number(t[2])),
                      t.length > 3 && (t[3] = Number(t[3])),
                      t))
              : at.black;
          }),
          ht = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#.+?\\b";
        for (u in at) ht += "|" + u + "\\b";
        ht = RegExp(ht + ")", "gi");
        var ct = function (t, e, i, n) {
            if (null == t)
              return function (t) {
                return t;
              };
            var r,
              s = e ? (t.match(ht) || [""])[0] : "",
              o = t.split(s).join("").match(v) || [],
              a = t.substr(0, t.indexOf(o[0])),
              l = ")" === t.charAt(t.length - 1) ? ")" : "",
              u = -1 !== t.indexOf(" ") ? " " : ",",
              h = o.length,
              c = h > 0 ? o[0].replace(g, "") : "";
            return h
              ? (r = e
                  ? function (t) {
                      var e, f, p, d;
                      if ("number" == typeof t) t += c;
                      else if (n && R.test(t)) {
                        for (
                          d = t.replace(R, "|").split("|"), p = 0;
                          d.length > p;
                          p++
                        )
                          d[p] = r(d[p]);
                        return d.join(",");
                      }
                      if (
                        ((e = (t.match(ht) || [s])[0]),
                        (f = t.split(e).join("").match(v) || []),
                        (p = f.length),
                        h > p--)
                      )
                        for (; h > ++p; )
                          f[p] = i ? f[0 | ((p - 1) / 2)] : o[p];
                      return (
                        a +
                        f.join(u) +
                        u +
                        e +
                        l +
                        (-1 !== t.indexOf("inset") ? " inset" : "")
                      );
                    }
                  : function (t) {
                      var e, s, f;
                      if ("number" == typeof t) t += c;
                      else if (n && R.test(t)) {
                        for (
                          s = t.replace(R, "|").split("|"), f = 0;
                          s.length > f;
                          f++
                        )
                          s[f] = r(s[f]);
                        return s.join(",");
                      }
                      if (((e = t.match(v) || []), (f = e.length), h > f--))
                        for (; h > ++f; )
                          e[f] = i ? e[0 | ((f - 1) / 2)] : o[f];
                      return a + e.join(u) + l;
                    })
              : function (t) {
                  return t;
                };
          },
          ft = function (t) {
            return (
              (t = t.split(",")),
              function (e, i, n, r, s, o, a) {
                var l,
                  u = (i + "").split(" ");
                for (a = {}, l = 0; 4 > l; l++)
                  a[t[l]] = u[l] = u[l] || u[((l - 1) / 2) >> 0];
                return r.parse(e, a, s, o);
              }
            );
          },
          pt =
            ((z._setPluginRatio = function (t) {
              this.plugin.setRatio(t);
              for (
                var e,
                  i,
                  n,
                  r,
                  s = this.data,
                  o = s.proxy,
                  a = s.firstMPT,
                  l = 1e-6;
                a;

              )
                (e = o[a.v]),
                  a.r ? (e = Math.round(e)) : l > e && e > -l && (e = 0),
                  (a.t[a.p] = e),
                  (a = a._next);
              if (
                (s.autoRotate && (s.autoRotate.rotation = o.rotation), 1 === t)
              )
                for (a = s.firstMPT; a; ) {
                  if (((i = a.t), i.type)) {
                    if (1 === i.type) {
                      for (r = i.xs0 + i.s + i.xs1, n = 1; i.l > n; n++)
                        r += i["xn" + n] + i["xs" + (n + 1)];
                      i.e = r;
                    }
                  } else i.e = i.s + i.xs0;
                  a = a._next;
                }
            }),
            function (t, e, i, n, r) {
              (this.t = t),
                (this.p = e),
                (this.v = i),
                (this.r = r),
                n && ((n._prev = this), (this._next = n));
            }),
          dt =
            ((z._parseToProxy = function (t, e, i, n, r, s) {
              var o,
                a,
                l,
                u,
                h,
                c = n,
                f = {},
                p = {},
                d = i._transform,
                m = L;
              for (
                i._transform = null,
                  L = e,
                  n = h = i.parse(t, e, n, r),
                  L = m,
                  s &&
                    ((i._transform = d),
                    c && ((c._prev = null), c._prev && (c._prev._next = null)));
                n && n !== c;

              ) {
                if (
                  1 >= n.type &&
                  ((a = n.p),
                  (p[a] = n.s + n.c),
                  (f[a] = n.s),
                  s || ((u = new pt(n, "s", a, u, n.r)), (n.c = 0)),
                  1 === n.type)
                )
                  for (o = n.l; --o > 0; )
                    (l = "xn" + o),
                      (a = n.p + "_" + l),
                      (p[a] = n.data[l]),
                      (f[a] = n[l]),
                      s || (u = new pt(n, l, a, u, n.rxp[l]));
                n = n._next;
              }
              return { proxy: f, end: p, firstMPT: u, pt: h };
            }),
            (z.CSSPropTween = function (t, e, n, r, o, a, l, u, h, c, f) {
              (this.t = t),
                (this.p = e),
                (this.s = n),
                (this.c = r),
                (this.n = l || e),
                t instanceof dt || s.push(this.n),
                (this.r = u),
                (this.type = a || 0),
                h && ((this.pr = h), (i = !0)),
                (this.b = void 0 === c ? n : c),
                (this.e = void 0 === f ? n + r : f),
                o && ((this._next = o), (o._prev = this));
            })),
          mt = (o.parseComplex = function (t, e, i, n, r, s, o, a, l, u) {
            (i = i || s || ""),
              (o = new dt(t, e, 0, 0, o, u ? 2 : 1, null, !1, a, i, n)),
              (n += "");
            var c,
              f,
              p,
              d,
              m,
              v,
              y,
              x,
              T,
              w,
              b,
              S,
              C = i.split(", ").join(",").split(" "),
              k = n.split(", ").join(",").split(" "),
              O = C.length,
              D = h !== !1;
            for (
              (-1 !== n.indexOf(",") || -1 !== i.indexOf(",")) &&
                ((C = C.join(" ").replace(R, ", ").split(" ")),
                (k = k.join(" ").replace(R, ", ").split(" ")),
                (O = C.length)),
                O !== k.length && ((C = (s || "").split(" ")), (O = C.length)),
                o.plugin = l,
                o.setRatio = u,
                c = 0;
              O > c;
              c++
            )
              if (((d = C[c]), (m = k[c]), (x = parseFloat(d)), x || 0 === x))
                o.appendXtra(
                  "",
                  x,
                  rt(m, x),
                  m.replace(_, ""),
                  D && -1 !== m.indexOf("px"),
                  !0
                );
              else if (r && ("#" === d.charAt(0) || at[d] || P.test(d)))
                (S = "," === m.charAt(m.length - 1) ? ")," : ")"),
                  (d = ut(d)),
                  (m = ut(m)),
                  (T = d.length + m.length > 6),
                  T && !$ && 0 === m[3]
                    ? ((o["xs" + o.l] += o.l ? " transparent" : "transparent"),
                      (o.e = o.e.split(k[c]).join("transparent")))
                    : ($ || (T = !1),
                      o
                        .appendXtra(
                          T ? "rgba(" : "rgb(",
                          d[0],
                          m[0] - d[0],
                          ",",
                          !0,
                          !0
                        )
                        .appendXtra("", d[1], m[1] - d[1], ",", !0)
                        .appendXtra("", d[2], m[2] - d[2], T ? "," : S, !0),
                      T &&
                        ((d = 4 > d.length ? 1 : d[3]),
                        o.appendXtra(
                          "",
                          d,
                          (4 > m.length ? 1 : m[3]) - d,
                          S,
                          !1
                        )));
              else if ((v = d.match(g))) {
                if (((y = m.match(_)), !y || y.length !== v.length)) return o;
                for (p = 0, f = 0; v.length > f; f++)
                  (b = v[f]),
                    (w = d.indexOf(b, p)),
                    o.appendXtra(
                      d.substr(p, w - p),
                      Number(b),
                      rt(y[f], b),
                      "",
                      D && "px" === d.substr(w + b.length, 2),
                      0 === f
                    ),
                    (p = w + b.length);
                o["xs" + o.l] += d.substr(p);
              } else o["xs" + o.l] += o.l ? " " + d : d;
            if (-1 !== n.indexOf("=") && o.data) {
              for (S = o.xs0 + o.data.s, c = 1; o.l > c; c++)
                S += o["xs" + c] + o.data["xn" + c];
              o.e = S + o["xs" + c];
            }
            return o.l || ((o.type = -1), (o.xs0 = o.e)), o.xfirst || o;
          }),
          gt = 9;
        for (u = dt.prototype, u.l = u.pr = 0; --gt > 0; )
          (u["xn" + gt] = 0), (u["xs" + gt] = "");
        (u.xs0 = ""),
          (u._next =
            u._prev =
            u.xfirst =
            u.data =
            u.plugin =
            u.setRatio =
            u.rxp =
              null),
          (u.appendXtra = function (t, e, i, n, r, s) {
            var o = this,
              a = o.l;
            return (
              (o["xs" + a] += s && a ? " " + t : t || ""),
              i || 0 === a || o.plugin
                ? (o.l++,
                  (o.type = o.setRatio ? 2 : 1),
                  (o["xs" + o.l] = n || ""),
                  a > 0
                    ? ((o.data["xn" + a] = e + i),
                      (o.rxp["xn" + a] = r),
                      (o["xn" + a] = e),
                      o.plugin ||
                        ((o.xfirst = new dt(
                          o,
                          "xn" + a,
                          e,
                          i,
                          o.xfirst || o,
                          0,
                          o.n,
                          r,
                          o.pr
                        )),
                        (o.xfirst.xs0 = 0)),
                      o)
                    : ((o.data = { s: e + i }),
                      (o.rxp = {}),
                      (o.s = e),
                      (o.c = i),
                      (o.r = r),
                      o))
                : ((o["xs" + a] += e + (n || "")), o)
            );
          });
        var _t = function (t, e) {
            (e = e || {}),
              (this.p = e.prefix ? U(t) || t : t),
              (l[t] = l[this.p] = this),
              (this.format =
                e.formatter ||
                ct(e.defaultValue, e.color, e.collapsible, e.multi)),
              e.parser && (this.parse = e.parser),
              (this.clrs = e.color),
              (this.multi = e.multi),
              (this.keyword = e.keyword),
              (this.dflt = e.defaultValue),
              (this.pr = e.priority || 0);
          },
          vt = (z._registerComplexSpecialProp = function (t, e, i) {
            "object" != typeof e && (e = { parser: i });
            var n,
              r,
              s = t.split(","),
              o = e.defaultValue;
            for (i = i || [o], n = 0; s.length > n; n++)
              (e.prefix = 0 === n && e.prefix),
                (e.defaultValue = i[n] || o),
                (r = new _t(s[n], e));
          }),
          yt = function (t) {
            if (!l[t]) {
              var e = t.charAt(0).toUpperCase() + t.substr(1) + "Plugin";
              vt(t, {
                parser: function (t, i, n, r, s, o, u) {
                  var h = a.com.greensock.plugins[e];
                  return h
                    ? (h._cssRegister(), l[n].parse(t, i, n, r, s, o, u))
                    : (q("Error: " + e + " js file not loaded."), s);
                },
              });
            }
          };
        (u = _t.prototype),
          (u.parseComplex = function (t, e, i, n, r, s) {
            var o,
              a,
              l,
              u,
              h,
              c,
              f = this.keyword;
            if (
              (this.multi &&
                (R.test(i) || R.test(e)
                  ? ((a = e.replace(R, "|").split("|")),
                    (l = i.replace(R, "|").split("|")))
                  : f && ((a = [e]), (l = [i]))),
              l)
            ) {
              for (
                u = l.length > a.length ? l.length : a.length, o = 0;
                u > o;
                o++
              )
                (e = a[o] = a[o] || this.dflt),
                  (i = l[o] = l[o] || this.dflt),
                  f &&
                    ((h = e.indexOf(f)),
                    (c = i.indexOf(f)),
                    h !== c &&
                      (-1 === c
                        ? (a[o] = a[o].split(f).join(""))
                        : -1 === h && (a[o] += " " + f)));
              (e = a.join(", ")), (i = l.join(", "));
            }
            return mt(t, this.p, e, i, this.clrs, this.dflt, n, this.pr, r, s);
          }),
          (u.parse = function (t, e, i, n, s, o) {
            return this.parseComplex(
              t.style,
              this.format(G(t, this.p, r, !1, this.dflt)),
              this.format(e),
              s,
              o
            );
          }),
          (o.registerSpecialProp = function (t, e, i) {
            vt(t, {
              parser: function (t, n, r, s, o, a) {
                var l = new dt(t, r, 0, 0, o, 2, r, !1, i);
                return (l.plugin = a), (l.setRatio = e(t, n, s._tween, r)), l;
              },
              priority: i,
            });
          }),
          (o.useSVGTransformAttr = f);
        var xt,
          Tt =
            "scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(
              ","
            ),
          wt = U("transform"),
          bt = X + "transform",
          Pt = U("transformOrigin"),
          St = null !== U("perspective"),
          Ct = (z.Transform = function () {
            (this.perspective = parseFloat(o.defaultTransformPerspective) || 0),
              (this.force3D =
                !(o.defaultForce3D === !1 || !St) &&
                (o.defaultForce3D || "auto"));
          }),
          kt = window.SVGElement,
          Ot = function (t, e, i) {
            var n,
              r = j.createElementNS("http://www.w3.org/2000/svg", t),
              s = /([a-z])([A-Z])/g;
            for (n in i)
              r.setAttributeNS(null, n.replace(s, "$1-$2").toLowerCase(), i[n]);
            return e.appendChild(r), r;
          },
          Dt = j.documentElement,
          At = (function () {
            var t,
              e,
              i,
              n = m || (/Android/i.test(W) && !window.chrome);
            return (
              j.createElementNS &&
                !n &&
                ((t = Ot("svg", Dt)),
                (e = Ot("rect", t, { width: 100, height: 50, x: 100 })),
                (i = e.getBoundingClientRect().width),
                (e.style[Pt] = "50% 50%"),
                (e.style[wt] = "scaleX(0.5)"),
                (n = i === e.getBoundingClientRect().width && !(p && St)),
                Dt.removeChild(t)),
              n
            );
          })(),
          Mt = function (t, e, i, n) {
            var r, s;
            (n && (s = n.split(" ")).length) ||
              ((r = t.getBBox()),
              (e = nt(e).split(" ")),
              (s = [
                (-1 !== e[0].indexOf("%")
                  ? (parseFloat(e[0]) / 100) * r.width
                  : parseFloat(e[0])) + r.x,
                (-1 !== e[1].indexOf("%")
                  ? (parseFloat(e[1]) / 100) * r.height
                  : parseFloat(e[1])) + r.y,
              ])),
              (i.xOrigin = parseFloat(s[0])),
              (i.yOrigin = parseFloat(s[1])),
              t.setAttribute("data-svg-origin", s.join(" "));
          },
          Rt = (z.getTransform = function (t, e, i, n) {
            if (t._gsTransform && i && !n) return t._gsTransform;
            var s,
              a,
              l,
              u,
              h,
              c,
              f,
              p,
              d,
              m,
              g = i ? t._gsTransform || new Ct() : new Ct(),
              _ = 0 > g.scaleX,
              v = 2e-5,
              y = 1e5,
              x = St
                ? parseFloat(G(t, Pt, e, !1, "0 0 0").split(" ")[2]) ||
                  g.zOrigin ||
                  0
                : 0,
              T = parseFloat(o.defaultTransformPerspective) || 0;
            if (
              (wt
                ? (a = G(t, bt, e, !0))
                : t.currentStyle &&
                  ((a = t.currentStyle.filter.match(A)),
                  (a =
                    a && 4 === a.length
                      ? [
                          a[0].substr(4),
                          Number(a[2].substr(4)),
                          Number(a[1].substr(4)),
                          a[3].substr(4),
                          g.x || 0,
                          g.y || 0,
                        ].join(",")
                      : "")),
              (s = !a || "none" === a || "matrix(1, 0, 0, 1, 0, 0)" === a),
              (g.svg = !!(
                kt &&
                "function" == typeof t.getBBox &&
                t.getCTM &&
                (!t.parentNode || (t.parentNode.getBBox && t.parentNode.getCTM))
              )),
              g.svg &&
                (s &&
                  -1 !== (t.style[wt] + "").indexOf("matrix") &&
                  ((a = t.style[wt]), (s = !1)),
                Mt(
                  t,
                  G(t, Pt, r, !1, "50% 50%") + "",
                  g,
                  t.getAttribute("data-svg-origin")
                ),
                (xt = o.useSVGTransformAttr || At),
                (l = t.getAttribute("transform")),
                s && l && -1 !== l.indexOf("matrix") && ((a = l), (s = 0))),
              !s)
            ) {
              for (
                l = (a || "").match(/(?:\-|\b)[\d\-\.e]+\b/gi) || [],
                  u = l.length;
                --u > -1;

              )
                (h = Number(l[u])),
                  (l[u] = (c = h - (h |= 0))
                    ? (0 | (c * y + (0 > c ? -0.5 : 0.5))) / y + h
                    : h);
              if (16 === l.length) {
                var w,
                  b,
                  P,
                  S,
                  C,
                  k = l[0],
                  O = l[1],
                  D = l[2],
                  M = l[3],
                  R = l[4],
                  N = l[5],
                  L = l[6],
                  j = l[7],
                  F = l[8],
                  I = l[9],
                  H = l[10],
                  z = l[12],
                  W = l[13],
                  $ = l[14],
                  B = l[11],
                  q = Math.atan2(L, H);
                g.zOrigin &&
                  (($ = -g.zOrigin),
                  (z = F * $ - l[12]),
                  (W = I * $ - l[13]),
                  ($ = H * $ + g.zOrigin - l[14])),
                  (g.rotationX = q * E),
                  q &&
                    ((S = Math.cos(-q)),
                    (C = Math.sin(-q)),
                    (w = R * S + F * C),
                    (b = N * S + I * C),
                    (P = L * S + H * C),
                    (F = R * -C + F * S),
                    (I = N * -C + I * S),
                    (H = L * -C + H * S),
                    (B = j * -C + B * S),
                    (R = w),
                    (N = b),
                    (L = P)),
                  (q = Math.atan2(F, H)),
                  (g.rotationY = q * E),
                  q &&
                    ((S = Math.cos(-q)),
                    (C = Math.sin(-q)),
                    (w = k * S - F * C),
                    (b = O * S - I * C),
                    (P = D * S - H * C),
                    (I = O * C + I * S),
                    (H = D * C + H * S),
                    (B = M * C + B * S),
                    (k = w),
                    (O = b),
                    (D = P)),
                  (q = Math.atan2(O, k)),
                  (g.rotation = q * E),
                  q &&
                    ((S = Math.cos(-q)),
                    (C = Math.sin(-q)),
                    (k = k * S + R * C),
                    (b = O * S + N * C),
                    (N = O * -C + N * S),
                    (L = D * -C + L * S),
                    (O = b)),
                  g.rotationX &&
                    Math.abs(g.rotationX) + Math.abs(g.rotation) > 359.9 &&
                    ((g.rotationX = g.rotation = 0), (g.rotationY += 180)),
                  (g.scaleX = (0 | (Math.sqrt(k * k + O * O) * y + 0.5)) / y),
                  (g.scaleY = (0 | (Math.sqrt(N * N + I * I) * y + 0.5)) / y),
                  (g.scaleZ = (0 | (Math.sqrt(L * L + H * H) * y + 0.5)) / y),
                  (g.skewX = 0),
                  (g.perspective = B ? 1 / (0 > B ? -B : B) : 0),
                  (g.x = z),
                  (g.y = W),
                  (g.z = $),
                  g.svg &&
                    ((g.x -= g.xOrigin - (g.xOrigin * k - g.yOrigin * R)),
                    (g.y -= g.yOrigin - (g.yOrigin * O - g.xOrigin * N)));
              } else if (
                !(
                  (St &&
                    !n &&
                    l.length &&
                    g.x === l[4] &&
                    g.y === l[5] &&
                    (g.rotationX || g.rotationY)) ||
                  (void 0 !== g.x && "none" === G(t, "display", e))
                )
              ) {
                var X = l.length >= 6,
                  Y = X ? l[0] : 1,
                  U = l[1] || 0,
                  V = l[2] || 0,
                  Q = X ? l[3] : 1;
                (g.x = l[4] || 0),
                  (g.y = l[5] || 0),
                  (f = Math.sqrt(Y * Y + U * U)),
                  (p = Math.sqrt(Q * Q + V * V)),
                  (d = Y || U ? Math.atan2(U, Y) * E : g.rotation || 0),
                  (m = V || Q ? Math.atan2(V, Q) * E + d : g.skewX || 0),
                  Math.abs(m) > 90 &&
                    270 > Math.abs(m) &&
                    (_
                      ? ((f *= -1),
                        (m += 0 >= d ? 180 : -180),
                        (d += 0 >= d ? 180 : -180))
                      : ((p *= -1), (m += 0 >= m ? 180 : -180))),
                  (g.scaleX = f),
                  (g.scaleY = p),
                  (g.rotation = d),
                  (g.skewX = m),
                  St &&
                    ((g.rotationX = g.rotationY = g.z = 0),
                    (g.perspective = T),
                    (g.scaleZ = 1)),
                  g.svg &&
                    ((g.x -= g.xOrigin - (g.xOrigin * Y - g.yOrigin * U)),
                    (g.y -= g.yOrigin - (g.yOrigin * Q - g.xOrigin * V)));
              }
              g.zOrigin = x;
              for (u in g) v > g[u] && g[u] > -v && (g[u] = 0);
            }
            return (
              i &&
                ((t._gsTransform = g),
                g.svg &&
                  (xt && t.style[wt]
                    ? jt(t.style, wt)
                    : !xt &&
                      t.getAttribute("transform") &&
                      t.removeAttribute("transform"))),
              g
            );
          }),
          Nt = function (t) {
            var e,
              i,
              n = this.data,
              r = -n.rotation * N,
              s = r + n.skewX * N,
              o = 1e5,
              a = (0 | (Math.cos(r) * n.scaleX * o)) / o,
              l = (0 | (Math.sin(r) * n.scaleX * o)) / o,
              u = (0 | (Math.sin(s) * -n.scaleY * o)) / o,
              h = (0 | (Math.cos(s) * n.scaleY * o)) / o,
              c = this.t.style,
              f = this.t.currentStyle;
            if (f) {
              (i = l), (l = -u), (u = -i), (e = f.filter), (c.filter = "");
              var p,
                d,
                g = this.t.offsetWidth,
                _ = this.t.offsetHeight,
                v = "absolute" !== f.position,
                y =
                  "progid:DXImageTransform.Microsoft.Matrix(M11=" +
                  a +
                  ", M12=" +
                  l +
                  ", M21=" +
                  u +
                  ", M22=" +
                  h,
                w = n.x + (g * n.xPercent) / 100,
                b = n.y + (_ * n.yPercent) / 100;
              if (
                (null != n.ox &&
                  ((p = (n.oxp ? 0.01 * g * n.ox : n.ox) - g / 2),
                  (d = (n.oyp ? 0.01 * _ * n.oy : n.oy) - _ / 2),
                  (w += p - (p * a + d * l)),
                  (b += d - (p * u + d * h))),
                v
                  ? ((p = g / 2),
                    (d = _ / 2),
                    (y +=
                      ", Dx=" +
                      (p - (p * a + d * l) + w) +
                      ", Dy=" +
                      (d - (p * u + d * h) + b) +
                      ")"))
                  : (y += ", sizingMethod='auto expand')"),
                (c.filter =
                  -1 !== e.indexOf("DXImageTransform.Microsoft.Matrix(")
                    ? e.replace(M, y)
                    : y + " " + e),
                (0 === t || 1 === t) &&
                  1 === a &&
                  0 === l &&
                  0 === u &&
                  1 === h &&
                  ((v && -1 === y.indexOf("Dx=0, Dy=0")) ||
                    (T.test(e) && 100 !== parseFloat(RegExp.$1)) ||
                    (-1 === e.indexOf(e.indexOf("Alpha")) &&
                      c.removeAttribute("filter"))),
                !v)
              ) {
                var P,
                  S,
                  C,
                  k = 8 > m ? 1 : -1;
                for (
                  p = n.ieOffsetX || 0,
                    d = n.ieOffsetY || 0,
                    n.ieOffsetX = Math.round(
                      (g - ((0 > a ? -a : a) * g + (0 > l ? -l : l) * _)) / 2 +
                        w
                    ),
                    n.ieOffsetY = Math.round(
                      (_ - ((0 > h ? -h : h) * _ + (0 > u ? -u : u) * g)) / 2 +
                        b
                    ),
                    gt = 0;
                  4 > gt;
                  gt++
                )
                  (S = et[gt]),
                    (P = f[S]),
                    (i =
                      -1 !== P.indexOf("px")
                        ? parseFloat(P)
                        : Q(this.t, S, parseFloat(P), P.replace(x, "")) || 0),
                    (C =
                      i !== n[S]
                        ? 2 > gt
                          ? -n.ieOffsetX
                          : -n.ieOffsetY
                        : 2 > gt
                        ? p - n.ieOffsetX
                        : d - n.ieOffsetY),
                    (c[S] =
                      (n[S] = Math.round(
                        i - C * (0 === gt || 2 === gt ? 1 : k)
                      )) + "px");
              }
            }
          },
          Et =
            (z.set3DTransformRatio =
            z.setTransformRatio =
              function (t) {
                var e,
                  i,
                  n,
                  r,
                  s,
                  o,
                  a,
                  l,
                  u,
                  h,
                  c,
                  f,
                  d,
                  m,
                  g,
                  _,
                  v,
                  y,
                  x,
                  T,
                  w,
                  b,
                  P,
                  S = this.data,
                  C = this.t.style,
                  k = S.rotation,
                  O = S.rotationX,
                  D = S.rotationY,
                  A = S.scaleX,
                  M = S.scaleY,
                  R = S.scaleZ,
                  E = S.x,
                  L = S.y,
                  j = S.z,
                  F = S.svg,
                  I = S.perspective,
                  H = S.force3D;
                if (
                  !(
                    (((1 !== t && 0 !== t) ||
                      "auto" !== H ||
                      (this.tween._totalTime !== this.tween._totalDuration &&
                        this.tween._totalTime)) &&
                      H) ||
                    j ||
                    I ||
                    D ||
                    O
                  ) ||
                  (xt && F) ||
                  !St
                )
                  return void (k || S.skewX || F
                    ? ((k *= N),
                      (b = S.skewX * N),
                      (P = 1e5),
                      (e = Math.cos(k) * A),
                      (r = Math.sin(k) * A),
                      (i = Math.sin(k - b) * -M),
                      (s = Math.cos(k - b) * M),
                      b &&
                        "simple" === S.skewType &&
                        ((v = Math.tan(b)),
                        (v = Math.sqrt(1 + v * v)),
                        (i *= v),
                        (s *= v),
                        S.skewY && ((e *= v), (r *= v))),
                      F &&
                        ((E += S.xOrigin - (S.xOrigin * e + S.yOrigin * i)),
                        (L += S.yOrigin - (S.xOrigin * r + S.yOrigin * s)),
                        (m = 1e-6),
                        m > E && E > -m && (E = 0),
                        m > L && L > -m && (L = 0)),
                      (x =
                        (0 | (e * P)) / P +
                        "," +
                        (0 | (r * P)) / P +
                        "," +
                        (0 | (i * P)) / P +
                        "," +
                        (0 | (s * P)) / P +
                        "," +
                        E +
                        "," +
                        L +
                        ")"),
                      F && xt
                        ? this.t.setAttribute("transform", "matrix(" + x)
                        : (C[wt] =
                            (S.xPercent || S.yPercent
                              ? "translate(" +
                                S.xPercent +
                                "%," +
                                S.yPercent +
                                "%) matrix("
                              : "matrix(") + x))
                    : (C[wt] =
                        (S.xPercent || S.yPercent
                          ? "translate(" +
                            S.xPercent +
                            "%," +
                            S.yPercent +
                            "%) matrix("
                          : "matrix(") +
                        A +
                        ",0,0," +
                        M +
                        "," +
                        E +
                        "," +
                        L +
                        ")"));
                if (
                  (p &&
                    ((m = 1e-4),
                    m > A && A > -m && (A = R = 2e-5),
                    m > M && M > -m && (M = R = 2e-5),
                    !I || S.z || S.rotationX || S.rotationY || (I = 0)),
                  k || S.skewX)
                )
                  (k *= N),
                    (g = e = Math.cos(k)),
                    (_ = r = Math.sin(k)),
                    S.skewX &&
                      ((k -= S.skewX * N),
                      (g = Math.cos(k)),
                      (_ = Math.sin(k)),
                      "simple" === S.skewType &&
                        ((v = Math.tan(S.skewX * N)),
                        (v = Math.sqrt(1 + v * v)),
                        (g *= v),
                        (_ *= v),
                        S.skewY && ((e *= v), (r *= v)))),
                    (i = -_),
                    (s = g);
                else {
                  if (!(D || O || 1 !== R || I || F))
                    return void (C[wt] =
                      (S.xPercent || S.yPercent
                        ? "translate(" +
                          S.xPercent +
                          "%," +
                          S.yPercent +
                          "%) translate3d("
                        : "translate3d(") +
                      E +
                      "px," +
                      L +
                      "px," +
                      j +
                      "px)" +
                      (1 !== A || 1 !== M
                        ? " scale(" + A + "," + M + ")"
                        : ""));
                  (e = s = 1), (i = r = 0);
                }
                (u = 1),
                  (n = o = a = l = h = c = 0),
                  (f = I ? -1 / I : 0),
                  (d = S.zOrigin),
                  (m = 1e-6),
                  (T = ","),
                  (w = "0"),
                  (k = D * N),
                  k &&
                    ((g = Math.cos(k)),
                    (_ = Math.sin(k)),
                    (a = -_),
                    (h = f * -_),
                    (n = e * _),
                    (o = r * _),
                    (u = g),
                    (f *= g),
                    (e *= g),
                    (r *= g)),
                  (k = O * N),
                  k &&
                    ((g = Math.cos(k)),
                    (_ = Math.sin(k)),
                    (v = i * g + n * _),
                    (y = s * g + o * _),
                    (l = u * _),
                    (c = f * _),
                    (n = i * -_ + n * g),
                    (o = s * -_ + o * g),
                    (u *= g),
                    (f *= g),
                    (i = v),
                    (s = y)),
                  1 !== R && ((n *= R), (o *= R), (u *= R), (f *= R)),
                  1 !== M && ((i *= M), (s *= M), (l *= M), (c *= M)),
                  1 !== A && ((e *= A), (r *= A), (a *= A), (h *= A)),
                  (d || F) &&
                    (d && ((E += n * -d), (L += o * -d), (j += u * -d + d)),
                    F &&
                      ((E += S.xOrigin - (S.xOrigin * e + S.yOrigin * i)),
                      (L += S.yOrigin - (S.xOrigin * r + S.yOrigin * s))),
                    m > E && E > -m && (E = w),
                    m > L && L > -m && (L = w),
                    m > j && j > -m && (j = 0)),
                  (x =
                    S.xPercent || S.yPercent
                      ? "translate(" +
                        S.xPercent +
                        "%," +
                        S.yPercent +
                        "%) matrix3d("
                      : "matrix3d("),
                  (x +=
                    (m > e && e > -m ? w : e) +
                    T +
                    (m > r && r > -m ? w : r) +
                    T +
                    (m > a && a > -m ? w : a)),
                  (x +=
                    T +
                    (m > h && h > -m ? w : h) +
                    T +
                    (m > i && i > -m ? w : i) +
                    T +
                    (m > s && s > -m ? w : s)),
                  O || D
                    ? ((x +=
                        T +
                        (m > l && l > -m ? w : l) +
                        T +
                        (m > c && c > -m ? w : c) +
                        T +
                        (m > n && n > -m ? w : n)),
                      (x +=
                        T +
                        (m > o && o > -m ? w : o) +
                        T +
                        (m > u && u > -m ? w : u) +
                        T +
                        (m > f && f > -m ? w : f) +
                        T))
                    : (x += ",0,0,0,0,1,0,"),
                  (x += E + T + L + T + j + T + (I ? 1 + -j / I : 1) + ")"),
                  (C[wt] = x);
              });
        (u = Ct.prototype),
          (u.x =
            u.y =
            u.z =
            u.skewX =
            u.skewY =
            u.rotation =
            u.rotationX =
            u.rotationY =
            u.zOrigin =
            u.xPercent =
            u.yPercent =
              0),
          (u.scaleX = u.scaleY = u.scaleZ = 1),
          vt(
            "transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent",
            {
              parser: function (t, e, i, n, s, a, l) {
                if (n._lastParsedTransform === l) return s;
                n._lastParsedTransform = l;
                var u,
                  h,
                  c,
                  f,
                  p,
                  d,
                  m,
                  g = (n._transform = Rt(t, r, !0, l.parseTransform)),
                  _ = t.style,
                  v = 1e-6,
                  y = Tt.length,
                  x = l,
                  T = {};
                if ("string" == typeof x.transform && wt)
                  (c = I.style),
                    (c[wt] = x.transform),
                    (c.display = "block"),
                    (c.position = "absolute"),
                    j.body.appendChild(I),
                    (u = Rt(I, null, !1)),
                    j.body.removeChild(I);
                else if ("object" == typeof x) {
                  if (
                    ((u = {
                      scaleX: st(
                        null != x.scaleX ? x.scaleX : x.scale,
                        g.scaleX
                      ),
                      scaleY: st(
                        null != x.scaleY ? x.scaleY : x.scale,
                        g.scaleY
                      ),
                      scaleZ: st(x.scaleZ, g.scaleZ),
                      x: st(x.x, g.x),
                      y: st(x.y, g.y),
                      z: st(x.z, g.z),
                      xPercent: st(x.xPercent, g.xPercent),
                      yPercent: st(x.yPercent, g.yPercent),
                      perspective: st(x.transformPerspective, g.perspective),
                    }),
                    (m = x.directionalRotation),
                    null != m)
                  )
                    if ("object" == typeof m) for (c in m) x[c] = m[c];
                    else x.rotation = m;
                  "string" == typeof x.x &&
                    -1 !== x.x.indexOf("%") &&
                    ((u.x = 0), (u.xPercent = st(x.x, g.xPercent))),
                    "string" == typeof x.y &&
                      -1 !== x.y.indexOf("%") &&
                      ((u.y = 0), (u.yPercent = st(x.y, g.yPercent))),
                    (u.rotation = ot(
                      "rotation" in x
                        ? x.rotation
                        : "shortRotation" in x
                        ? x.shortRotation + "_short"
                        : "rotationZ" in x
                        ? x.rotationZ
                        : g.rotation,
                      g.rotation,
                      "rotation",
                      T
                    )),
                    St &&
                      ((u.rotationX = ot(
                        "rotationX" in x
                          ? x.rotationX
                          : "shortRotationX" in x
                          ? x.shortRotationX + "_short"
                          : g.rotationX || 0,
                        g.rotationX,
                        "rotationX",
                        T
                      )),
                      (u.rotationY = ot(
                        "rotationY" in x
                          ? x.rotationY
                          : "shortRotationY" in x
                          ? x.shortRotationY + "_short"
                          : g.rotationY || 0,
                        g.rotationY,
                        "rotationY",
                        T
                      ))),
                    (u.skewX =
                      null == x.skewX ? g.skewX : ot(x.skewX, g.skewX)),
                    (u.skewY =
                      null == x.skewY ? g.skewY : ot(x.skewY, g.skewY)),
                    (h = u.skewY - g.skewY) &&
                      ((u.skewX += h), (u.rotation += h));
                }
                for (
                  St &&
                    null != x.force3D &&
                    ((g.force3D = x.force3D), (d = !0)),
                    g.skewType = x.skewType || g.skewType || o.defaultSkewType,
                    p =
                      g.force3D ||
                      g.z ||
                      g.rotationX ||
                      g.rotationY ||
                      u.z ||
                      u.rotationX ||
                      u.rotationY ||
                      u.perspective,
                    p || null == x.scale || (u.scaleZ = 1);
                  --y > -1;

                )
                  (i = Tt[y]),
                    (f = u[i] - g[i]),
                    (f > v || -v > f || null != x[i] || null != L[i]) &&
                      ((d = !0),
                      (s = new dt(g, i, g[i], f, s)),
                      i in T && (s.e = T[i]),
                      (s.xs0 = 0),
                      (s.plugin = a),
                      n._overwriteProps.push(s.n));
                return (
                  (f = x.transformOrigin),
                  g.svg &&
                    (f || x.svgOrigin) &&
                    (Mt(t, nt(f), u, x.svgOrigin),
                    (s = new dt(
                      g,
                      "xOrigin",
                      g.xOrigin,
                      u.xOrigin - g.xOrigin,
                      s,
                      -1,
                      "transformOrigin"
                    )),
                    (s.b = g.xOrigin),
                    (s.e = s.xs0 = u.xOrigin),
                    (s = new dt(
                      g,
                      "yOrigin",
                      g.yOrigin,
                      u.yOrigin - g.yOrigin,
                      s,
                      -1,
                      "transformOrigin"
                    )),
                    (s.b = g.yOrigin),
                    (s.e = s.xs0 = u.yOrigin),
                    (f = xt ? null : "0px 0px")),
                  (f || (St && p && g.zOrigin)) &&
                    (wt
                      ? ((d = !0),
                        (i = Pt),
                        (f = (f || G(t, i, r, !1, "50% 50%")) + ""),
                        (s = new dt(_, i, 0, 0, s, -1, "transformOrigin")),
                        (s.b = _[i]),
                        (s.plugin = a),
                        St
                          ? ((c = g.zOrigin),
                            (f = f.split(" ")),
                            (g.zOrigin =
                              (f.length > 2 && (0 === c || "0px" !== f[2])
                                ? parseFloat(f[2])
                                : c) || 0),
                            (s.xs0 = s.e =
                              f[0] + " " + (f[1] || "50%") + " 0px"),
                            (s = new dt(g, "zOrigin", 0, 0, s, -1, s.n)),
                            (s.b = c),
                            (s.xs0 = s.e = g.zOrigin))
                          : (s.xs0 = s.e = f))
                      : nt(f + "", g)),
                  d &&
                    (n._transformType =
                      (g.svg && xt) || (!p && 3 !== this._transformType)
                        ? 2
                        : 3),
                  s
                );
              },
              prefix: !0,
            }
          ),
          vt("boxShadow", {
            defaultValue: "0px 0px 0px 0px #999",
            prefix: !0,
            color: !0,
            multi: !0,
            keyword: "inset",
          }),
          vt("borderRadius", {
            defaultValue: "0px",
            parser: function (t, e, i, s, o) {
              e = this.format(e);
              var a,
                l,
                u,
                h,
                c,
                f,
                p,
                d,
                m,
                g,
                _,
                v,
                y,
                x,
                T,
                w,
                b = [
                  "borderTopLeftRadius",
                  "borderTopRightRadius",
                  "borderBottomRightRadius",
                  "borderBottomLeftRadius",
                ],
                P = t.style;
              for (
                m = parseFloat(t.offsetWidth),
                  g = parseFloat(t.offsetHeight),
                  a = e.split(" "),
                  l = 0;
                b.length > l;
                l++
              )
                this.p.indexOf("border") && (b[l] = U(b[l])),
                  (c = h = G(t, b[l], r, !1, "0px")),
                  -1 !== c.indexOf(" ") &&
                    ((h = c.split(" ")), (c = h[0]), (h = h[1])),
                  (f = u = a[l]),
                  (p = parseFloat(c)),
                  (v = c.substr((p + "").length)),
                  (y = "=" === f.charAt(1)),
                  y
                    ? ((d = parseInt(f.charAt(0) + "1", 10)),
                      (f = f.substr(2)),
                      (d *= parseFloat(f)),
                      (_ = f.substr((d + "").length - (0 > d ? 1 : 0)) || ""))
                    : ((d = parseFloat(f)), (_ = f.substr((d + "").length))),
                  "" === _ && (_ = n[i] || v),
                  _ !== v &&
                    ((x = Q(t, "borderLeft", p, v)),
                    (T = Q(t, "borderTop", p, v)),
                    "%" === _
                      ? ((c = 100 * (x / m) + "%"), (h = 100 * (T / g) + "%"))
                      : "em" === _
                      ? ((w = Q(t, "borderLeft", 1, "em")),
                        (c = x / w + "em"),
                        (h = T / w + "em"))
                      : ((c = x + "px"), (h = T + "px")),
                    y &&
                      ((f = parseFloat(c) + d + _),
                      (u = parseFloat(h) + d + _))),
                  (o = mt(P, b[l], c + " " + h, f + " " + u, !1, "0px", o));
              return o;
            },
            prefix: !0,
            formatter: ct("0px 0px 0px 0px", !1, !0),
          }),
          vt("backgroundPosition", {
            defaultValue: "0 0",
            parser: function (t, e, i, n, s, o) {
              var a,
                l,
                u,
                h,
                c,
                f,
                p = "background-position",
                d = r || V(t, null),
                g = this.format(
                  (d
                    ? m
                      ? d.getPropertyValue(p + "-x") +
                        " " +
                        d.getPropertyValue(p + "-y")
                      : d.getPropertyValue(p)
                    : t.currentStyle.backgroundPositionX +
                      " " +
                      t.currentStyle.backgroundPositionY) || "0 0"
                ),
                _ = this.format(e);
              if (
                (-1 !== g.indexOf("%")) != (-1 !== _.indexOf("%")) &&
                ((f = G(t, "backgroundImage").replace(k, "")),
                f && "none" !== f)
              ) {
                for (
                  a = g.split(" "),
                    l = _.split(" "),
                    H.setAttribute("src", f),
                    u = 2;
                  --u > -1;

                )
                  (g = a[u]),
                    (h = -1 !== g.indexOf("%")),
                    h !== (-1 !== l[u].indexOf("%")) &&
                      ((c =
                        0 === u
                          ? t.offsetWidth - H.width
                          : t.offsetHeight - H.height),
                      (a[u] = h
                        ? (parseFloat(g) / 100) * c + "px"
                        : 100 * (parseFloat(g) / c) + "%"));
                g = a.join(" ");
              }
              return this.parseComplex(t.style, g, _, s, o);
            },
            formatter: nt,
          }),
          vt("backgroundSize", { defaultValue: "0 0", formatter: nt }),
          vt("perspective", { defaultValue: "0px", prefix: !0 }),
          vt("perspectiveOrigin", { defaultValue: "50% 50%", prefix: !0 }),
          vt("transformStyle", { prefix: !0 }),
          vt("backfaceVisibility", { prefix: !0 }),
          vt("userSelect", { prefix: !0 }),
          vt("margin", {
            parser: ft("marginTop,marginRight,marginBottom,marginLeft"),
          }),
          vt("padding", {
            parser: ft("paddingTop,paddingRight,paddingBottom,paddingLeft"),
          }),
          vt("clip", {
            defaultValue: "rect(0px,0px,0px,0px)",
            parser: function (t, e, i, n, s, o) {
              var a, l, u;
              return (
                9 > m
                  ? ((l = t.currentStyle),
                    (u = 8 > m ? " " : ","),
                    (a =
                      "rect(" +
                      l.clipTop +
                      u +
                      l.clipRight +
                      u +
                      l.clipBottom +
                      u +
                      l.clipLeft +
                      ")"),
                    (e = this.format(e).split(",").join(u)))
                  : ((a = this.format(G(t, this.p, r, !1, this.dflt))),
                    (e = this.format(e))),
                this.parseComplex(t.style, a, e, s, o)
              );
            },
          }),
          vt("textShadow", {
            defaultValue: "0px 0px 0px #999",
            color: !0,
            multi: !0,
          }),
          vt("autoRound,strictUnits", {
            parser: function (t, e, i, n, r) {
              return r;
            },
          }),
          vt("border", {
            defaultValue: "0px solid #000",
            parser: function (t, e, i, n, s, o) {
              return this.parseComplex(
                t.style,
                this.format(
                  G(t, "borderTopWidth", r, !1, "0px") +
                    " " +
                    G(t, "borderTopStyle", r, !1, "solid") +
                    " " +
                    G(t, "borderTopColor", r, !1, "#000")
                ),
                this.format(e),
                s,
                o
              );
            },
            color: !0,
            formatter: function (t) {
              var e = t.split(" ");
              return (
                e[0] +
                " " +
                (e[1] || "solid") +
                " " +
                (t.match(ht) || ["#000"])[0]
              );
            },
          }),
          vt("borderWidth", {
            parser: ft(
              "borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth"
            ),
          }),
          vt("float,cssFloat,styleFloat", {
            parser: function (t, e, i, n, r) {
              var s = t.style,
                o = "cssFloat" in s ? "cssFloat" : "styleFloat";
              return new dt(s, o, 0, 0, r, -1, i, !1, 0, s[o], e);
            },
          });
        var Lt = function (t) {
          var e,
            i = this.t,
            n = i.filter || G(this.data, "filter") || "",
            r = 0 | (this.s + this.c * t);
          100 === r &&
            (-1 === n.indexOf("atrix(") &&
            -1 === n.indexOf("radient(") &&
            -1 === n.indexOf("oader(")
              ? (i.removeAttribute("filter"), (e = !G(this.data, "filter")))
              : ((i.filter = n.replace(b, "")), (e = !0))),
            e ||
              (this.xn1 && (i.filter = n = n || "alpha(opacity=" + r + ")"),
              -1 === n.indexOf("pacity")
                ? (0 === r && this.xn1) ||
                  (i.filter = n + " alpha(opacity=" + r + ")")
                : (i.filter = n.replace(T, "opacity=" + r)));
        };
        vt("opacity,alpha,autoAlpha", {
          defaultValue: "1",
          parser: function (t, e, i, n, s, o) {
            var a = parseFloat(G(t, "opacity", r, !1, "1")),
              l = t.style,
              u = "autoAlpha" === i;
            return (
              "string" == typeof e &&
                "=" === e.charAt(1) &&
                (e =
                  ("-" === e.charAt(0) ? -1 : 1) * parseFloat(e.substr(2)) + a),
              u &&
                1 === a &&
                "hidden" === G(t, "visibility", r) &&
                0 !== e &&
                (a = 0),
              $
                ? (s = new dt(l, "opacity", a, e - a, s))
                : ((s = new dt(l, "opacity", 100 * a, 100 * (e - a), s)),
                  (s.xn1 = u ? 1 : 0),
                  (l.zoom = 1),
                  (s.type = 2),
                  (s.b = "alpha(opacity=" + s.s + ")"),
                  (s.e = "alpha(opacity=" + (s.s + s.c) + ")"),
                  (s.data = t),
                  (s.plugin = o),
                  (s.setRatio = Lt)),
              u &&
                ((s = new dt(
                  l,
                  "visibility",
                  0,
                  0,
                  s,
                  -1,
                  null,
                  !1,
                  0,
                  0 !== a ? "inherit" : "hidden",
                  0 === e ? "hidden" : "inherit"
                )),
                (s.xs0 = "inherit"),
                n._overwriteProps.push(s.n),
                n._overwriteProps.push(i)),
              s
            );
          },
        });
        var jt = function (t, e) {
            e &&
              (t.removeProperty
                ? (("ms" === e.substr(0, 2) || "webkit" === e.substr(0, 6)) &&
                    (e = "-" + e),
                  t.removeProperty(e.replace(S, "-$1").toLowerCase()))
                : t.removeAttribute(e));
          },
          Ft = function (t) {
            if (((this.t._gsClassPT = this), 1 === t || 0 === t)) {
              this.t.setAttribute("class", 0 === t ? this.b : this.e);
              for (var e = this.data, i = this.t.style; e; )
                e.v ? (i[e.p] = e.v) : jt(i, e.p), (e = e._next);
              1 === t &&
                this.t._gsClassPT === this &&
                (this.t._gsClassPT = null);
            } else
              this.t.getAttribute("class") !== this.e &&
                this.t.setAttribute("class", this.e);
          };
        vt("className", {
          parser: function (t, e, n, s, o, a, l) {
            var u,
              h,
              c,
              f,
              p,
              d = t.getAttribute("class") || "",
              m = t.style.cssText;
            if (
              ((o = s._classNamePT = new dt(t, n, 0, 0, o, 2)),
              (o.setRatio = Ft),
              (o.pr = -11),
              (i = !0),
              (o.b = d),
              (h = K(t, r)),
              (c = t._gsClassPT))
            ) {
              for (f = {}, p = c.data; p; ) (f[p.p] = 1), (p = p._next);
              c.setRatio(1);
            }
            return (
              (t._gsClassPT = o),
              (o.e =
                "=" !== e.charAt(1)
                  ? e
                  : d.replace(RegExp("\\s*\\b" + e.substr(2) + "\\b"), "") +
                    ("+" === e.charAt(0) ? " " + e.substr(2) : "")),
              t.setAttribute("class", o.e),
              (u = J(t, h, K(t), l, f)),
              t.setAttribute("class", d),
              (o.data = u.firstMPT),
              (t.style.cssText = m),
              (o = o.xfirst = s.parse(t, u.difs, o, a))
            );
          },
        });
        var It = function (t) {
          if (
            (1 === t || 0 === t) &&
            this.data._totalTime === this.data._totalDuration &&
            "isFromStart" !== this.data.data
          ) {
            var e,
              i,
              n,
              r,
              s,
              o = this.t.style,
              a = l.transform.parse;
            if ("all" === this.e) (o.cssText = ""), (r = !0);
            else
              for (
                e = this.e.split(" ").join("").split(","), n = e.length;
                --n > -1;

              )
                (i = e[n]),
                  l[i] &&
                    (l[i].parse === a
                      ? (r = !0)
                      : (i = "transformOrigin" === i ? Pt : l[i].p)),
                  jt(o, i);
            r &&
              (jt(o, wt),
              (s = this.t._gsTransform),
              s &&
                (s.svg && this.t.removeAttribute("data-svg-origin"),
                delete this.t._gsTransform));
          }
        };
        for (
          vt("clearProps", {
            parser: function (t, e, n, r, s) {
              return (
                (s = new dt(t, n, 0, 0, s, 2)),
                (s.setRatio = It),
                (s.e = e),
                (s.pr = -10),
                (s.data = r._tween),
                (i = !0),
                s
              );
            },
          }),
            u = "bezier,throwProps,physicsProps,physics2D".split(","),
            gt = u.length;
          gt--;

        )
          yt(u[gt]);
        (u = o.prototype),
          (u._firstPT = u._lastParsedTransform = u._transform = null),
          (u._onInitTween = function (t, e, a) {
            if (!t.nodeType) return !1;
            (this._target = t),
              (this._tween = a),
              (this._vars = e),
              (h = e.autoRound),
              (i = !1),
              (n = e.suffixMap || o.suffixMap),
              (r = V(t, "")),
              (s = this._overwriteProps);
            var u,
              p,
              m,
              g,
              _,
              v,
              y,
              x,
              T,
              b = t.style;
            if (
              (c &&
                "" === b.zIndex &&
                ((u = G(t, "zIndex", r)),
                ("auto" === u || "" === u) && this._addLazySet(b, "zIndex", 0)),
              "string" == typeof e &&
                ((g = b.cssText),
                (u = K(t, r)),
                (b.cssText = g + ";" + e),
                (u = J(t, u, K(t)).difs),
                !$ && w.test(e) && (u.opacity = parseFloat(RegExp.$1)),
                (e = u),
                (b.cssText = g)),
              (this._firstPT = p =
                e.className
                  ? l.className.parse(
                      t,
                      e.className,
                      "className",
                      this,
                      null,
                      null,
                      e
                    )
                  : this.parse(t, e, null)),
              this._transformType)
            ) {
              for (
                T = 3 === this._transformType,
                  wt
                    ? f &&
                      ((c = !0),
                      "" === b.zIndex &&
                        ((y = G(t, "zIndex", r)),
                        ("auto" === y || "" === y) &&
                          this._addLazySet(b, "zIndex", 0)),
                      d &&
                        this._addLazySet(
                          b,
                          "WebkitBackfaceVisibility",
                          this._vars.WebkitBackfaceVisibility ||
                            (T ? "visible" : "hidden")
                        ))
                    : (b.zoom = 1),
                  m = p;
                m && m._next;

              )
                m = m._next;
              (x = new dt(t, "transform", 0, 0, null, 2)),
                this._linkCSSP(x, null, m),
                (x.setRatio = wt ? Et : Nt),
                (x.data = this._transform || Rt(t, r, !0)),
                (x.tween = a),
                (x.pr = -1),
                s.pop();
            }
            if (i) {
              for (; p; ) {
                for (v = p._next, m = g; m && m.pr > p.pr; ) m = m._next;
                (p._prev = m ? m._prev : _) ? (p._prev._next = p) : (g = p),
                  (p._next = m) ? (m._prev = p) : (_ = p),
                  (p = v);
              }
              this._firstPT = g;
            }
            return !0;
          }),
          (u.parse = function (t, e, i, s) {
            var o,
              a,
              u,
              c,
              f,
              p,
              d,
              m,
              g,
              _,
              v = t.style;
            for (o in e)
              (p = e[o]),
                (a = l[o]),
                a
                  ? (i = a.parse(t, p, o, this, i, s, e))
                  : ((f = G(t, o, r) + ""),
                    (g = "string" == typeof p),
                    "color" === o ||
                    "fill" === o ||
                    "stroke" === o ||
                    -1 !== o.indexOf("Color") ||
                    (g && P.test(p))
                      ? (g ||
                          ((p = ut(p)),
                          (p =
                            (p.length > 3 ? "rgba(" : "rgb(") +
                            p.join(",") +
                            ")")),
                        (i = mt(v, o, f, p, !0, "transparent", i, 0, s)))
                      : !g || (-1 === p.indexOf(" ") && -1 === p.indexOf(","))
                      ? ((u = parseFloat(f)),
                        (d = u || 0 === u ? f.substr((u + "").length) : ""),
                        ("" === f || "auto" === f) &&
                          ("width" === o || "height" === o
                            ? ((u = it(t, o, r)), (d = "px"))
                            : "left" === o || "top" === o
                            ? ((u = Z(t, o, r)), (d = "px"))
                            : ((u = "opacity" !== o ? 0 : 1), (d = ""))),
                        (_ = g && "=" === p.charAt(1)),
                        _
                          ? ((c = parseInt(p.charAt(0) + "1", 10)),
                            (p = p.substr(2)),
                            (c *= parseFloat(p)),
                            (m = p.replace(x, "")))
                          : ((c = parseFloat(p)),
                            (m = g ? p.replace(x, "") : "")),
                        "" === m && (m = o in n ? n[o] : d),
                        (p = c || 0 === c ? (_ ? c + u : c) + m : e[o]),
                        d !== m &&
                          "" !== m &&
                          (c || 0 === c) &&
                          u &&
                          ((u = Q(t, o, u, d)),
                          "%" === m
                            ? ((u /= Q(t, o, 100, "%") / 100),
                              e.strictUnits !== !0 && (f = u + "%"))
                            : "em" === m
                            ? (u /= Q(t, o, 1, "em"))
                            : "px" !== m && ((c = Q(t, o, c, m)), (m = "px")),
                          _ && (c || 0 === c) && (p = c + u + m)),
                        _ && (c += u),
                        (!u && 0 !== u) || (!c && 0 !== c)
                          ? void 0 !== v[o] &&
                            (p || ("NaN" != p + "" && null != p))
                            ? ((i = new dt(
                                v,
                                o,
                                c || u || 0,
                                0,
                                i,
                                -1,
                                o,
                                !1,
                                0,
                                f,
                                p
                              )),
                              (i.xs0 =
                                "none" !== p ||
                                ("display" !== o && -1 === o.indexOf("Style"))
                                  ? p
                                  : f))
                            : q("invalid " + o + " tween value: " + e[o])
                          : ((i = new dt(
                              v,
                              o,
                              u,
                              c - u,
                              i,
                              0,
                              o,
                              h !== !1 && ("px" === m || "zIndex" === o),
                              0,
                              f,
                              p
                            )),
                            (i.xs0 = m)))
                      : (i = mt(v, o, f, p, !0, null, i, 0, s))),
                s && i && !i.plugin && (i.plugin = s);
            return i;
          }),
          (u.setRatio = function (t) {
            var e,
              i,
              n,
              r = this._firstPT,
              s = 1e-6;
            if (
              1 !== t ||
              (this._tween._time !== this._tween._duration &&
                0 !== this._tween._time)
            )
              if (
                t ||
                (this._tween._time !== this._tween._duration &&
                  0 !== this._tween._time) ||
                this._tween._rawPrevTime === -1e-6
              )
                for (; r; ) {
                  if (
                    ((e = r.c * t + r.s),
                    r.r ? (e = Math.round(e)) : s > e && e > -s && (e = 0),
                    r.type)
                  )
                    if (1 === r.type)
                      if (((n = r.l), 2 === n))
                        r.t[r.p] = r.xs0 + e + r.xs1 + r.xn1 + r.xs2;
                      else if (3 === n)
                        r.t[r.p] =
                          r.xs0 + e + r.xs1 + r.xn1 + r.xs2 + r.xn2 + r.xs3;
                      else if (4 === n)
                        r.t[r.p] =
                          r.xs0 +
                          e +
                          r.xs1 +
                          r.xn1 +
                          r.xs2 +
                          r.xn2 +
                          r.xs3 +
                          r.xn3 +
                          r.xs4;
                      else if (5 === n)
                        r.t[r.p] =
                          r.xs0 +
                          e +
                          r.xs1 +
                          r.xn1 +
                          r.xs2 +
                          r.xn2 +
                          r.xs3 +
                          r.xn3 +
                          r.xs4 +
                          r.xn4 +
                          r.xs5;
                      else {
                        for (i = r.xs0 + e + r.xs1, n = 1; r.l > n; n++)
                          i += r["xn" + n] + r["xs" + (n + 1)];
                        r.t[r.p] = i;
                      }
                    else
                      -1 === r.type
                        ? (r.t[r.p] = r.xs0)
                        : r.setRatio && r.setRatio(t);
                  else r.t[r.p] = e + r.xs0;
                  r = r._next;
                }
              else
                for (; r; )
                  2 !== r.type ? (r.t[r.p] = r.b) : r.setRatio(t),
                    (r = r._next);
            else
              for (; r; )
                2 !== r.type ? (r.t[r.p] = r.e) : r.setRatio(t), (r = r._next);
          }),
          (u._enableTransforms = function (t) {
            (this._transform = this._transform || Rt(this._target, r, !0)),
              (this._transformType =
                (this._transform.svg && xt) || (!t && 3 !== this._transformType)
                  ? 2
                  : 3);
          });
        var Ht = function () {
          (this.t[this.p] = this.e),
            this.data._linkCSSP(this, this._next, null, !0);
        };
        (u._addLazySet = function (t, e, i) {
          var n = (this._firstPT = new dt(t, e, 0, 0, this._firstPT, 2));
          (n.e = i), (n.setRatio = Ht), (n.data = this);
        }),
          (u._linkCSSP = function (t, e, i, n) {
            return (
              t &&
                (e && (e._prev = t),
                t._next && (t._next._prev = t._prev),
                t._prev
                  ? (t._prev._next = t._next)
                  : this._firstPT === t &&
                    ((this._firstPT = t._next), (n = !0)),
                i
                  ? (i._next = t)
                  : n || null !== this._firstPT || (this._firstPT = t),
                (t._next = e),
                (t._prev = i)),
              t
            );
          }),
          (u._kill = function (e) {
            var i,
              n,
              r,
              s = e;
            if (e.autoAlpha || e.alpha) {
              s = {};
              for (n in e) s[n] = e[n];
              (s.opacity = 1), s.autoAlpha && (s.visibility = 1);
            }
            return (
              e.className &&
                (i = this._classNamePT) &&
                ((r = i.xfirst),
                r && r._prev
                  ? this._linkCSSP(r._prev, i._next, r._prev._prev)
                  : r === this._firstPT && (this._firstPT = i._next),
                i._next && this._linkCSSP(i._next, i._next._next, r._prev),
                (this._classNamePT = null)),
              t.prototype._kill.call(this, s)
            );
          });
        var zt = function (t, e, i) {
          var n, r, s, o;
          if (t.slice) for (r = t.length; --r > -1; ) zt(t[r], e, i);
          else
            for (n = t.childNodes, r = n.length; --r > -1; )
              (s = n[r]),
                (o = s.type),
                s.style && (e.push(K(s)), i && i.push(s)),
                (1 !== o && 9 !== o && 11 !== o) ||
                  !s.childNodes.length ||
                  zt(s, e, i);
        };
        return (
          (o.cascadeTo = function (t, i, n) {
            var r,
              s,
              o,
              a,
              l = e.to(t, i, n),
              u = [l],
              h = [],
              c = [],
              f = [],
              p = e._internals.reservedProps;
            for (
              t = l._targets || l.target,
                zt(t, h, f),
                l.render(i, !0, !0),
                zt(t, c),
                l.render(0, !0, !0),
                l._enabled(!0),
                r = f.length;
              --r > -1;

            )
              if (((s = J(f[r], h[r], c[r])), s.firstMPT)) {
                s = s.difs;
                for (o in n) p[o] && (s[o] = n[o]);
                a = {};
                for (o in s) a[o] = h[r][o];
                u.push(e.fromTo(f[r], i, a, s));
              }
            return u;
          }),
          t.activate([o]),
          o
        );
      },
      !0
    ),
    (function () {
      var t = _gsScope._gsDefine.plugin({
          propName: "roundProps",
          priority: -1,
          API: 2,
          init: function (t, e, i) {
            return (this._tween = i), !0;
          },
        }),
        e = t.prototype;
      (e._onInitAllProps = function () {
        for (
          var t,
            e,
            i,
            n = this._tween,
            r =
              n.vars.roundProps instanceof Array
                ? n.vars.roundProps
                : n.vars.roundProps.split(","),
            s = r.length,
            o = {},
            a = n._propLookup.roundProps;
          --s > -1;

        )
          o[r[s]] = 1;
        for (s = r.length; --s > -1; )
          for (t = r[s], e = n._firstPT; e; )
            (i = e._next),
              e.pg
                ? e.t._roundProps(o, !0)
                : e.n === t &&
                  (this._add(e.t, t, e.s, e.c),
                  i && (i._prev = e._prev),
                  e._prev
                    ? (e._prev._next = i)
                    : n._firstPT === e && (n._firstPT = i),
                  (e._next = e._prev = null),
                  (n._propLookup[t] = a)),
              (e = i);
        return !1;
      }),
        (e._add = function (t, e, i, n) {
          this._addTween(t, e, i, i + n, e, !0), this._overwriteProps.push(e);
        });
    })(),
    _gsScope._gsDefine.plugin({
      propName: "attr",
      API: 2,
      version: "0.3.3",
      init: function (t, e) {
        var i, n, r;
        if ("function" != typeof t.setAttribute) return !1;
        (this._target = t),
          (this._proxy = {}),
          (this._start = {}),
          (this._end = {});
        for (i in e)
          (this._start[i] = this._proxy[i] = n = t.getAttribute(i)),
            (r = this._addTween(this._proxy, i, parseFloat(n), e[i], i)),
            (this._end[i] = r ? r.s + r.c : e[i]),
            this._overwriteProps.push(i);
        return !0;
      },
      set: function (t) {
        this._super.setRatio.call(this, t);
        for (
          var e,
            i = this._overwriteProps,
            n = i.length,
            r = 1 === t ? this._end : t ? this._proxy : this._start;
          --n > -1;

        )
          (e = i[n]), this._target.setAttribute(e, r[e] + "");
      },
    }),
    (_gsScope._gsDefine.plugin({
      propName: "directionalRotation",
      version: "0.2.1",
      API: 2,
      init: function (t, e) {
        "object" != typeof e && (e = { rotation: e }), (this.finals = {});
        var i,
          n,
          r,
          s,
          o,
          a,
          l = e.useRadians === !0 ? 2 * Math.PI : 360,
          u = 1e-6;
        for (i in e)
          "useRadians" !== i &&
            ((a = (e[i] + "").split("_")),
            (n = a[0]),
            (r = parseFloat(
              "function" != typeof t[i]
                ? t[i]
                : t[
                    i.indexOf("set") ||
                    "function" != typeof t["get" + i.substr(3)]
                      ? i
                      : "get" + i.substr(3)
                  ]()
            )),
            (s = this.finals[i] =
              "string" == typeof n && "=" === n.charAt(1)
                ? r + parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2))
                : Number(n) || 0),
            (o = s - r),
            a.length &&
              ((n = a.join("_")),
              -1 !== n.indexOf("short") &&
                ((o %= l), o !== o % (l / 2) && (o = 0 > o ? o + l : o - l)),
              -1 !== n.indexOf("_cw") && 0 > o
                ? (o = ((o + 9999999999 * l) % l) - (0 | (o / l)) * l)
                : -1 !== n.indexOf("ccw") &&
                  o > 0 &&
                  (o = ((o - 9999999999 * l) % l) - (0 | (o / l)) * l)),
            (o > u || -u > o) &&
              (this._addTween(t, i, r, r + o, i),
              this._overwriteProps.push(i)));
        return !0;
      },
      set: function (t) {
        var e;
        if (1 !== t) this._super.setRatio.call(this, t);
        else
          for (e = this._firstPT; e; )
            e.f ? e.t[e.p](this.finals[e.p]) : (e.t[e.p] = this.finals[e.p]),
              (e = e._next);
      },
    })._autoCSS = !0),
    _gsScope._gsDefine(
      "easing.Back",
      ["easing.Ease"],
      function (t) {
        var e,
          i,
          n,
          r = _gsScope.GreenSockGlobals || _gsScope,
          s = r.com.greensock,
          o = 2 * Math.PI,
          a = Math.PI / 2,
          l = s._class,
          u = function (e, i) {
            var n = l("easing." + e, function () {}, !0),
              r = (n.prototype = new t());
            return (r.constructor = n), (r.getRatio = i), n;
          },
          h = t.register || function () {},
          c = function (t, e, i, n) {
            var r = l(
              "easing." + t,
              { easeOut: new e(), easeIn: new i(), easeInOut: new n() },
              !0
            );
            return h(r, t), r;
          },
          f = function (t, e, i) {
            (this.t = t),
              (this.v = e),
              i &&
                ((this.next = i),
                (i.prev = this),
                (this.c = i.v - e),
                (this.gap = i.t - t));
          },
          p = function (e, i) {
            var n = l(
                "easing." + e,
                function (t) {
                  (this._p1 = t || 0 === t ? t : 1.70158),
                    (this._p2 = 1.525 * this._p1);
                },
                !0
              ),
              r = (n.prototype = new t());
            return (
              (r.constructor = n),
              (r.getRatio = i),
              (r.config = function (t) {
                return new n(t);
              }),
              n
            );
          },
          d = c(
            "Back",
            p("BackOut", function (t) {
              return (t -= 1) * t * ((this._p1 + 1) * t + this._p1) + 1;
            }),
            p("BackIn", function (t) {
              return t * t * ((this._p1 + 1) * t - this._p1);
            }),
            p("BackInOut", function (t) {
              return 1 > (t *= 2)
                ? 0.5 * t * t * ((this._p2 + 1) * t - this._p2)
                : 0.5 * ((t -= 2) * t * ((this._p2 + 1) * t + this._p2) + 2);
            })
          ),
          m = l(
            "easing.SlowMo",
            function (t, e, i) {
              (e = e || 0 === e ? e : 0.7),
                null == t ? (t = 0.7) : t > 1 && (t = 1),
                (this._p = 1 !== t ? e : 0),
                (this._p1 = (1 - t) / 2),
                (this._p2 = t),
                (this._p3 = this._p1 + this._p2),
                (this._calcEnd = i === !0);
            },
            !0
          ),
          g = (m.prototype = new t());
        return (
          (g.constructor = m),
          (g.getRatio = function (t) {
            var e = t + (0.5 - t) * this._p;
            return this._p1 > t
              ? this._calcEnd
                ? 1 - (t = 1 - t / this._p1) * t
                : e - (t = 1 - t / this._p1) * t * t * t * e
              : t > this._p3
              ? this._calcEnd
                ? 1 - (t = (t - this._p3) / this._p1) * t
                : e + (t - e) * (t = (t - this._p3) / this._p1) * t * t * t
              : this._calcEnd
              ? 1
              : e;
          }),
          (m.ease = new m(0.7, 0.7)),
          (g.config = m.config =
            function (t, e, i) {
              return new m(t, e, i);
            }),
          (e = l(
            "easing.SteppedEase",
            function (t) {
              (t = t || 1), (this._p1 = 1 / t), (this._p2 = t + 1);
            },
            !0
          )),
          (g = e.prototype = new t()),
          (g.constructor = e),
          (g.getRatio = function (t) {
            return (
              0 > t ? (t = 0) : t >= 1 && (t = 0.999999999),
              ((this._p2 * t) >> 0) * this._p1
            );
          }),
          (g.config = e.config =
            function (t) {
              return new e(t);
            }),
          (i = l(
            "easing.RoughEase",
            function (e) {
              e = e || {};
              for (
                var i,
                  n,
                  r,
                  s,
                  o,
                  a,
                  l = e.taper || "none",
                  u = [],
                  h = 0,
                  c = 0 | (e.points || 20),
                  p = c,
                  d = e.randomize !== !1,
                  m = e.clamp === !0,
                  g = e.template instanceof t ? e.template : null,
                  _ = "number" == typeof e.strength ? 0.4 * e.strength : 0.4;
                --p > -1;

              )
                (i = d ? Math.random() : (1 / c) * p),
                  (n = g ? g.getRatio(i) : i),
                  "none" === l
                    ? (r = _)
                    : "out" === l
                    ? ((s = 1 - i), (r = s * s * _))
                    : "in" === l
                    ? (r = i * i * _)
                    : 0.5 > i
                    ? ((s = 2 * i), (r = 0.5 * s * s * _))
                    : ((s = 2 * (1 - i)), (r = 0.5 * s * s * _)),
                  d
                    ? (n += Math.random() * r - 0.5 * r)
                    : p % 2
                    ? (n += 0.5 * r)
                    : (n -= 0.5 * r),
                  m && (n > 1 ? (n = 1) : 0 > n && (n = 0)),
                  (u[h++] = { x: i, y: n });
              for (
                u.sort(function (t, e) {
                  return t.x - e.x;
                }),
                  a = new f(1, 1, null),
                  p = c;
                --p > -1;

              )
                (o = u[p]), (a = new f(o.x, o.y, a));
              this._prev = new f(0, 0, 0 !== a.t ? a : a.next);
            },
            !0
          )),
          (g = i.prototype = new t()),
          (g.constructor = i),
          (g.getRatio = function (t) {
            var e = this._prev;
            if (t > e.t) {
              for (; e.next && t >= e.t; ) e = e.next;
              e = e.prev;
            } else for (; e.prev && e.t >= t; ) e = e.prev;
            return (this._prev = e), e.v + ((t - e.t) / e.gap) * e.c;
          }),
          (g.config = function (t) {
            return new i(t);
          }),
          (i.ease = new i()),
          c(
            "Bounce",
            u("BounceOut", function (t) {
              return 1 / 2.75 > t
                ? 7.5625 * t * t
                : 2 / 2.75 > t
                ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                : 2.5 / 2.75 > t
                ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375;
            }),
            u("BounceIn", function (t) {
              return 1 / 2.75 > (t = 1 - t)
                ? 1 - 7.5625 * t * t
                : 2 / 2.75 > t
                ? 1 - (7.5625 * (t -= 1.5 / 2.75) * t + 0.75)
                : 2.5 / 2.75 > t
                ? 1 - (7.5625 * (t -= 2.25 / 2.75) * t + 0.9375)
                : 1 - (7.5625 * (t -= 2.625 / 2.75) * t + 0.984375);
            }),
            u("BounceInOut", function (t) {
              var e = 0.5 > t;
              return (
                (t = e ? 1 - 2 * t : 2 * t - 1),
                (t =
                  1 / 2.75 > t
                    ? 7.5625 * t * t
                    : 2 / 2.75 > t
                    ? 7.5625 * (t -= 1.5 / 2.75) * t + 0.75
                    : 2.5 / 2.75 > t
                    ? 7.5625 * (t -= 2.25 / 2.75) * t + 0.9375
                    : 7.5625 * (t -= 2.625 / 2.75) * t + 0.984375),
                e ? 0.5 * (1 - t) : 0.5 * t + 0.5
              );
            })
          ),
          c(
            "Circ",
            u("CircOut", function (t) {
              return Math.sqrt(1 - (t -= 1) * t);
            }),
            u("CircIn", function (t) {
              return -(Math.sqrt(1 - t * t) - 1);
            }),
            u("CircInOut", function (t) {
              return 1 > (t *= 2)
                ? -0.5 * (Math.sqrt(1 - t * t) - 1)
                : 0.5 * (Math.sqrt(1 - (t -= 2) * t) + 1);
            })
          ),
          (n = function (e, i, n) {
            var r = l(
                "easing." + e,
                function (t, e) {
                  (this._p1 = t >= 1 ? t : 1),
                    (this._p2 = (e || n) / (1 > t ? t : 1)),
                    (this._p3 =
                      (this._p2 / o) * (Math.asin(1 / this._p1) || 0)),
                    (this._p2 = o / this._p2);
                },
                !0
              ),
              s = (r.prototype = new t());
            return (
              (s.constructor = r),
              (s.getRatio = i),
              (s.config = function (t, e) {
                return new r(t, e);
              }),
              r
            );
          }),
          c(
            "Elastic",
            n(
              "ElasticOut",
              function (t) {
                return (
                  this._p1 *
                    Math.pow(2, -10 * t) *
                    Math.sin((t - this._p3) * this._p2) +
                  1
                );
              },
              0.3
            ),
            n(
              "ElasticIn",
              function (t) {
                return -(
                  this._p1 *
                  Math.pow(2, 10 * (t -= 1)) *
                  Math.sin((t - this._p3) * this._p2)
                );
              },
              0.3
            ),
            n(
              "ElasticInOut",
              function (t) {
                return 1 > (t *= 2)
                  ? -0.5 *
                      this._p1 *
                      Math.pow(2, 10 * (t -= 1)) *
                      Math.sin((t - this._p3) * this._p2)
                  : 0.5 *
                      this._p1 *
                      Math.pow(2, -10 * (t -= 1)) *
                      Math.sin((t - this._p3) * this._p2) +
                      1;
              },
              0.45
            )
          ),
          c(
            "Expo",
            u("ExpoOut", function (t) {
              return 1 - Math.pow(2, -10 * t);
            }),
            u("ExpoIn", function (t) {
              return Math.pow(2, 10 * (t - 1)) - 0.001;
            }),
            u("ExpoInOut", function (t) {
              return 1 > (t *= 2)
                ? 0.5 * Math.pow(2, 10 * (t - 1))
                : 0.5 * (2 - Math.pow(2, -10 * (t - 1)));
            })
          ),
          c(
            "Sine",
            u("SineOut", function (t) {
              return Math.sin(t * a);
            }),
            u("SineIn", function (t) {
              return -Math.cos(t * a) + 1;
            }),
            u("SineInOut", function (t) {
              return -0.5 * (Math.cos(Math.PI * t) - 1);
            })
          ),
          l(
            "easing.EaseLookup",
            {
              find: function (e) {
                return t.map[e];
              },
            },
            !0
          ),
          h(r.SlowMo, "SlowMo", "ease,"),
          h(i, "RoughEase", "ease,"),
          h(e, "SteppedEase", "ease,"),
          d
        );
      },
      !0
    );
}),
  _gsScope._gsDefine && _gsScope._gsQueue.pop()(),
  (function (t, e) {
    "use strict";
    var i = (t.GreenSockGlobals = t.GreenSockGlobals || t);
    if (!i.TweenLite) {
      var n,
        r,
        s,
        o,
        a,
        l = function (t) {
          var e,
            n = t.split("."),
            r = i;
          for (e = 0; n.length > e; e++) r[n[e]] = r = r[n[e]] || {};
          return r;
        },
        u = l("com.greensock"),
        h = 1e-10,
        c = function (t) {
          var e,
            i = [],
            n = t.length;
          for (e = 0; e !== n; i.push(t[e++]));
          return i;
        },
        f = function () {},
        p = (function () {
          var t = Object.prototype.toString,
            e = t.call([]);
          return function (i) {
            return (
              null != i &&
              (i instanceof Array ||
                ("object" == typeof i && !!i.push && t.call(i) === e))
            );
          };
        })(),
        d = {},
        m = function (n, r, s, o) {
          (this.sc = d[n] ? d[n].sc : []),
            (d[n] = this),
            (this.gsClass = null),
            (this.func = s);
          var a = [];
          (this.check = function (u) {
            for (var h, c, f, p, g = r.length, _ = g; --g > -1; )
              (h = d[r[g]] || new m(r[g], [])).gsClass
                ? ((a[g] = h.gsClass), _--)
                : u && h.sc.push(this);
            if (0 === _ && s)
              for (
                c = ("com.greensock." + n).split("."),
                  f = c.pop(),
                  p = l(c.join("."))[f] = this.gsClass = s.apply(s, a),
                  o &&
                    ((i[f] = p),
                    "function" == typeof define && define.amd
                      ? define(
                          (t.GreenSockAMDPath ? t.GreenSockAMDPath + "/" : "") +
                            n.split(".").pop(),
                          [],
                          function () {
                            return p;
                          }
                        )
                      : n === e &&
                        "undefined" != typeof module &&
                        module.exports &&
                        (module.exports = p)),
                  g = 0;
                this.sc.length > g;
                g++
              )
                this.sc[g].check();
          }),
            this.check(!0);
        },
        g = (t._gsDefine = function (t, e, i, n) {
          return new m(t, e, i, n);
        }),
        _ = (u._class = function (t, e, i) {
          return (
            (e = e || function () {}),
            g(
              t,
              [],
              function () {
                return e;
              },
              i
            ),
            e
          );
        });
      g.globals = i;
      var v = [0, 0, 1, 1],
        y = [],
        x = _(
          "easing.Ease",
          function (t, e, i, n) {
            (this._func = t),
              (this._type = i || 0),
              (this._power = n || 0),
              (this._params = e ? v.concat(e) : v);
          },
          !0
        ),
        T = (x.map = {}),
        w = (x.register = function (t, e, i, n) {
          for (
            var r,
              s,
              o,
              a,
              l = e.split(","),
              h = l.length,
              c = (i || "easeIn,easeOut,easeInOut").split(",");
            --h > -1;

          )
            for (
              s = l[h],
                r = n ? _("easing." + s, null, !0) : u.easing[s] || {},
                o = c.length;
              --o > -1;

            )
              (a = c[o]),
                (T[s + "." + a] =
                  T[a + s] =
                  r[a] =
                    t.getRatio ? t : t[a] || new t());
        });
      for (
        s = x.prototype,
          s._calcEnd = !1,
          s.getRatio = function (t) {
            if (this._func)
              return (
                (this._params[0] = t), this._func.apply(null, this._params)
              );
            var e = this._type,
              i = this._power,
              n = 1 === e ? 1 - t : 2 === e ? t : 0.5 > t ? 2 * t : 2 * (1 - t);
            return (
              1 === i
                ? (n *= n)
                : 2 === i
                ? (n *= n * n)
                : 3 === i
                ? (n *= n * n * n)
                : 4 === i && (n *= n * n * n * n),
              1 === e ? 1 - n : 2 === e ? n : 0.5 > t ? n / 2 : 1 - n / 2
            );
          },
          n = ["Linear", "Quad", "Cubic", "Quart", "Quint,Strong"],
          r = n.length;
        --r > -1;

      )
        (s = n[r] + ",Power" + r),
          w(new x(null, null, 1, r), s, "easeOut", !0),
          w(
            new x(null, null, 2, r),
            s,
            "easeIn" + (0 === r ? ",easeNone" : "")
          ),
          w(new x(null, null, 3, r), s, "easeInOut");
      (T.linear = u.easing.Linear.easeIn), (T.swing = u.easing.Quad.easeInOut);
      var b = _("events.EventDispatcher", function (t) {
        (this._listeners = {}), (this._eventTarget = t || this);
      });
      (s = b.prototype),
        (s.addEventListener = function (t, e, i, n, r) {
          r = r || 0;
          var s,
            l,
            u = this._listeners[t],
            h = 0;
          for (
            null == u && (this._listeners[t] = u = []), l = u.length;
            --l > -1;

          )
            (s = u[l]),
              s.c === e && s.s === i
                ? u.splice(l, 1)
                : 0 === h && r > s.pr && (h = l + 1);
          u.splice(h, 0, { c: e, s: i, up: n, pr: r }),
            this !== o || a || o.wake();
        }),
        (s.removeEventListener = function (t, e) {
          var i,
            n = this._listeners[t];
          if (n)
            for (i = n.length; --i > -1; )
              if (n[i].c === e) return void n.splice(i, 1);
        }),
        (s.dispatchEvent = function (t) {
          var e,
            i,
            n,
            r = this._listeners[t];
          if (r)
            for (e = r.length, i = this._eventTarget; --e > -1; )
              (n = r[e]),
                n &&
                  (n.up
                    ? n.c.call(n.s || i, { type: t, target: i })
                    : n.c.call(n.s || i));
        });
      var P = t.requestAnimationFrame,
        S = t.cancelAnimationFrame,
        C =
          Date.now ||
          function () {
            return new Date().getTime();
          },
        k = C();
      for (n = ["ms", "moz", "webkit", "o"], r = n.length; --r > -1 && !P; )
        (P = t[n[r] + "RequestAnimationFrame"]),
          (S =
            t[n[r] + "CancelAnimationFrame"] ||
            t[n[r] + "CancelRequestAnimationFrame"]);
      _("Ticker", function (t, e) {
        var i,
          n,
          r,
          s,
          l,
          u = this,
          c = C(),
          p = e !== !1 && P,
          d = 500,
          m = 33,
          g = "tick",
          _ = function (t) {
            var e,
              o,
              a = C() - k;
            a > d && (c += a - m),
              (k += a),
              (u.time = (k - c) / 1e3),
              (e = u.time - l),
              (!i || e > 0 || t === !0) &&
                (u.frame++, (l += e + (e >= s ? 0.004 : s - e)), (o = !0)),
              t !== !0 && (r = n(_)),
              o && u.dispatchEvent(g);
          };
        b.call(u),
          (u.time = u.frame = 0),
          (u.tick = function () {
            _(!0);
          }),
          (u.lagSmoothing = function (t, e) {
            (d = t || 1 / h), (m = Math.min(e, d, 0));
          }),
          (u.sleep = function () {
            null != r &&
              (p && S ? S(r) : clearTimeout(r),
              (n = f),
              (r = null),
              u === o && (a = !1));
          }),
          (u.wake = function () {
            null !== r ? u.sleep() : u.frame > 10 && (k = C() - d + 5),
              (n =
                0 === i
                  ? f
                  : p && P
                  ? P
                  : function (t) {
                      return setTimeout(t, 0 | (1e3 * (l - u.time) + 1));
                    }),
              u === o && (a = !0),
              _(2);
          }),
          (u.fps = function (t) {
            return arguments.length
              ? ((i = t),
                (s = 1 / (i || 60)),
                (l = this.time + s),
                void u.wake())
              : i;
          }),
          (u.useRAF = function (t) {
            return arguments.length ? (u.sleep(), (p = t), void u.fps(i)) : p;
          }),
          u.fps(t),
          setTimeout(function () {
            p && 5 > u.frame && u.useRAF(!1);
          }, 1500);
      }),
        (s = u.Ticker.prototype = new u.events.EventDispatcher()),
        (s.constructor = u.Ticker);
      var O = _("core.Animation", function (t, e) {
        if (
          ((this.vars = e = e || {}),
          (this._duration = this._totalDuration = t || 0),
          (this._delay = Number(e.delay) || 0),
          (this._timeScale = 1),
          (this._active = e.immediateRender === !0),
          (this.data = e.data),
          (this._reversed = e.reversed === !0),
          B)
        ) {
          a || o.wake();
          var i = this.vars.useFrames ? $ : B;
          i.add(this, i._time), this.vars.paused && this.paused(!0);
        }
      });
      (o = O.ticker = new u.Ticker()),
        (s = O.prototype),
        (s._dirty = s._gc = s._initted = s._paused = !1),
        (s._totalTime = s._time = 0),
        (s._rawPrevTime = -1),
        (s._next = s._last = s._onUpdate = s._timeline = s.timeline = null),
        (s._paused = !1);
      var D = function () {
        a && C() - k > 2e3 && o.wake(), setTimeout(D, 2e3);
      };
      D(),
        (s.play = function (t, e) {
          return null != t && this.seek(t, e), this.reversed(!1).paused(!1);
        }),
        (s.pause = function (t, e) {
          return null != t && this.seek(t, e), this.paused(!0);
        }),
        (s.resume = function (t, e) {
          return null != t && this.seek(t, e), this.paused(!1);
        }),
        (s.seek = function (t, e) {
          return this.totalTime(Number(t), e !== !1);
        }),
        (s.restart = function (t, e) {
          return this.reversed(!1)
            .paused(!1)
            .totalTime(t ? -this._delay : 0, e !== !1, !0);
        }),
        (s.reverse = function (t, e) {
          return (
            null != t && this.seek(t || this.totalDuration(), e),
            this.reversed(!0).paused(!1)
          );
        }),
        (s.render = function () {}),
        (s.invalidate = function () {
          return (
            (this._time = this._totalTime = 0),
            (this._initted = this._gc = !1),
            (this._rawPrevTime = -1),
            (this._gc || !this.timeline) && this._enabled(!0),
            this
          );
        }),
        (s.isActive = function () {
          var t,
            e = this._timeline,
            i = this._startTime;
          return (
            !e ||
            (!this._gc &&
              !this._paused &&
              e.isActive() &&
              (t = e.rawTime()) >= i &&
              i + this.totalDuration() / this._timeScale > t)
          );
        }),
        (s._enabled = function (t, e) {
          return (
            a || o.wake(),
            (this._gc = !t),
            (this._active = this.isActive()),
            e !== !0 &&
              (t && !this.timeline
                ? this._timeline.add(this, this._startTime - this._delay)
                : !t && this.timeline && this._timeline._remove(this, !0)),
            !1
          );
        }),
        (s._kill = function () {
          return this._enabled(!1, !1);
        }),
        (s.kill = function (t, e) {
          return this._kill(t, e), this;
        }),
        (s._uncache = function (t) {
          for (var e = t ? this : this.timeline; e; )
            (e._dirty = !0), (e = e.timeline);
          return this;
        }),
        (s._swapSelfInParams = function (t) {
          for (var e = t.length, i = t.concat(); --e > -1; )
            "{self}" === t[e] && (i[e] = this);
          return i;
        }),
        (s.eventCallback = function (t, e, i, n) {
          if ("on" === (t || "").substr(0, 2)) {
            var r = this.vars;
            if (1 === arguments.length) return r[t];
            null == e
              ? delete r[t]
              : ((r[t] = e),
                (r[t + "Params"] =
                  p(i) && -1 !== i.join("").indexOf("{self}")
                    ? this._swapSelfInParams(i)
                    : i),
                (r[t + "Scope"] = n)),
              "onUpdate" === t && (this._onUpdate = e);
          }
          return this;
        }),
        (s.delay = function (t) {
          return arguments.length
            ? (this._timeline.smoothChildTiming &&
                this.startTime(this._startTime + t - this._delay),
              (this._delay = t),
              this)
            : this._delay;
        }),
        (s.duration = function (t) {
          return arguments.length
            ? ((this._duration = this._totalDuration = t),
              this._uncache(!0),
              this._timeline.smoothChildTiming &&
                this._time > 0 &&
                this._time < this._duration &&
                0 !== t &&
                this.totalTime(this._totalTime * (t / this._duration), !0),
              this)
            : ((this._dirty = !1), this._duration);
        }),
        (s.totalDuration = function (t) {
          return (
            (this._dirty = !1),
            arguments.length ? this.duration(t) : this._totalDuration
          );
        }),
        (s.time = function (t, e) {
          return arguments.length
            ? (this._dirty && this.totalDuration(),
              this.totalTime(t > this._duration ? this._duration : t, e))
            : this._time;
        }),
        (s.totalTime = function (t, e, i) {
          if ((a || o.wake(), !arguments.length)) return this._totalTime;
          if (this._timeline) {
            if (
              (0 > t && !i && (t += this.totalDuration()),
              this._timeline.smoothChildTiming)
            ) {
              this._dirty && this.totalDuration();
              var n = this._totalDuration,
                r = this._timeline;
              if (
                (t > n && !i && (t = n),
                (this._startTime =
                  (this._paused ? this._pauseTime : r._time) -
                  (this._reversed ? n - t : t) / this._timeScale),
                r._dirty || this._uncache(!1),
                r._timeline)
              )
                for (; r._timeline; )
                  r._timeline._time !==
                    (r._startTime + r._totalTime) / r._timeScale &&
                    r.totalTime(r._totalTime, !0),
                    (r = r._timeline);
            }
            this._gc && this._enabled(!0, !1),
              (this._totalTime !== t || 0 === this._duration) &&
                (this.render(t, e, !1), E.length && X());
          }
          return this;
        }),
        (s.progress = s.totalProgress =
          function (t, e) {
            return arguments.length
              ? this.totalTime(this.duration() * t, e)
              : this._time / this.duration();
          }),
        (s.startTime = function (t) {
          return arguments.length
            ? (t !== this._startTime &&
                ((this._startTime = t),
                this.timeline &&
                  this.timeline._sortChildren &&
                  this.timeline.add(this, t - this._delay)),
              this)
            : this._startTime;
        }),
        (s.endTime = function (t) {
          return (
            this._startTime +
            (0 != t ? this.totalDuration() : this.duration()) / this._timeScale
          );
        }),
        (s.timeScale = function (t) {
          if (!arguments.length) return this._timeScale;
          if (
            ((t = t || h), this._timeline && this._timeline.smoothChildTiming)
          ) {
            var e = this._pauseTime,
              i = e || 0 === e ? e : this._timeline.totalTime();
            this._startTime = i - ((i - this._startTime) * this._timeScale) / t;
          }
          return (this._timeScale = t), this._uncache(!1);
        }),
        (s.reversed = function (t) {
          return arguments.length
            ? (t != this._reversed &&
                ((this._reversed = t),
                this.totalTime(
                  this._timeline && !this._timeline.smoothChildTiming
                    ? this.totalDuration() - this._totalTime
                    : this._totalTime,
                  !0
                )),
              this)
            : this._reversed;
        }),
        (s.paused = function (t) {
          if (!arguments.length) return this._paused;
          var e,
            i,
            n = this._timeline;
          return (
            t != this._paused &&
              n &&
              (a || t || o.wake(),
              (e = n.rawTime()),
              (i = e - this._pauseTime),
              !t &&
                n.smoothChildTiming &&
                ((this._startTime += i), this._uncache(!1)),
              (this._pauseTime = t ? e : null),
              (this._paused = t),
              (this._active = this.isActive()),
              !t &&
                0 !== i &&
                this._initted &&
                this.duration() &&
                this.render(
                  n.smoothChildTiming
                    ? this._totalTime
                    : (e - this._startTime) / this._timeScale,
                  !0,
                  !0
                )),
            this._gc && !t && this._enabled(!0, !1),
            this
          );
        });
      var A = _("core.SimpleTimeline", function (t) {
        O.call(this, 0, t),
          (this.autoRemoveChildren = this.smoothChildTiming = !0);
      });
      (s = A.prototype = new O()),
        (s.constructor = A),
        (s.kill()._gc = !1),
        (s._first = s._last = s._recent = null),
        (s._sortChildren = !1),
        (s.add = s.insert =
          function (t, e) {
            var i, n;
            if (
              ((t._startTime = Number(e || 0) + t._delay),
              t._paused &&
                this !== t._timeline &&
                (t._pauseTime =
                  t._startTime +
                  (this.rawTime() - t._startTime) / t._timeScale),
              t.timeline && t.timeline._remove(t, !0),
              (t.timeline = t._timeline = this),
              t._gc && t._enabled(!0, !0),
              (i = this._last),
              this._sortChildren)
            )
              for (n = t._startTime; i && i._startTime > n; ) i = i._prev;
            return (
              i
                ? ((t._next = i._next), (i._next = t))
                : ((t._next = this._first), (this._first = t)),
              t._next ? (t._next._prev = t) : (this._last = t),
              (t._prev = i),
              (this._recent = t),
              this._timeline && this._uncache(!0),
              this
            );
          }),
        (s._remove = function (t, e) {
          return (
            t.timeline === this &&
              (e || t._enabled(!1, !0),
              t._prev
                ? (t._prev._next = t._next)
                : this._first === t && (this._first = t._next),
              t._next
                ? (t._next._prev = t._prev)
                : this._last === t && (this._last = t._prev),
              (t._next = t._prev = t.timeline = null),
              t === this._recent && (this._recent = this._last),
              this._timeline && this._uncache(!0)),
            this
          );
        }),
        (s.render = function (t, e, i) {
          var n,
            r = this._first;
          for (this._totalTime = this._time = this._rawPrevTime = t; r; )
            (n = r._next),
              (r._active || (t >= r._startTime && !r._paused)) &&
                (r._reversed
                  ? r.render(
                      (r._dirty ? r.totalDuration() : r._totalDuration) -
                        (t - r._startTime) * r._timeScale,
                      e,
                      i
                    )
                  : r.render((t - r._startTime) * r._timeScale, e, i)),
              (r = n);
        }),
        (s.rawTime = function () {
          return a || o.wake(), this._totalTime;
        });
      var M = _(
          "TweenLite",
          function (e, i, n) {
            if (
              (O.call(this, i, n),
              (this.render = M.prototype.render),
              null == e)
            )
              throw "Cannot tween a null target.";
            this.target = e = "string" != typeof e ? e : M.selector(e) || e;
            var r,
              s,
              o,
              a =
                e.jquery ||
                (e.length &&
                  e !== t &&
                  e[0] &&
                  (e[0] === t || (e[0].nodeType && e[0].style && !e.nodeType))),
              l = this.vars.overwrite;
            if (
              ((this._overwrite = l =
                null == l
                  ? W[M.defaultOverwrite]
                  : "number" == typeof l
                  ? l >> 0
                  : W[l]),
              (a || e instanceof Array || (e.push && p(e))) &&
                "number" != typeof e[0])
            )
              for (
                this._targets = o = c(e),
                  this._propLookup = [],
                  this._siblings = [],
                  r = 0;
                o.length > r;
                r++
              )
                (s = o[r]),
                  s
                    ? "string" != typeof s
                      ? s.length &&
                        s !== t &&
                        s[0] &&
                        (s[0] === t ||
                          (s[0].nodeType && s[0].style && !s.nodeType))
                        ? (o.splice(r--, 1),
                          (this._targets = o = o.concat(c(s))))
                        : ((this._siblings[r] = Y(s, this, !1)),
                          1 === l &&
                            this._siblings[r].length > 1 &&
                            V(s, this, null, 1, this._siblings[r]))
                      : ((s = o[r--] = M.selector(s)),
                        "string" == typeof s && o.splice(r + 1, 1))
                    : o.splice(r--, 1);
            else
              (this._propLookup = {}),
                (this._siblings = Y(e, this, !1)),
                1 === l &&
                  this._siblings.length > 1 &&
                  V(e, this, null, 1, this._siblings);
            (this.vars.immediateRender ||
              (0 === i &&
                0 === this._delay &&
                this.vars.immediateRender !== !1)) &&
              ((this._time = -h), this.render(-this._delay));
          },
          !0
        ),
        R = function (e) {
          return (
            e &&
            e.length &&
            e !== t &&
            e[0] &&
            (e[0] === t || (e[0].nodeType && e[0].style && !e.nodeType))
          );
        },
        N = function (t, e) {
          var i,
            n = {};
          for (i in t)
            z[i] ||
              (i in e &&
                "transform" !== i &&
                "x" !== i &&
                "y" !== i &&
                "width" !== i &&
                "height" !== i &&
                "className" !== i &&
                "border" !== i) ||
              !(!F[i] || (F[i] && F[i]._autoCSS)) ||
              ((n[i] = t[i]), delete t[i]);
          t.css = n;
        };
      (s = M.prototype = new O()),
        (s.constructor = M),
        (s.kill()._gc = !1),
        (s.ratio = 0),
        (s._firstPT = s._targets = s._overwrittenProps = s._startAt = null),
        (s._notifyPluginsOfEnabled = s._lazy = !1),
        (M.version = "1.16.1"),
        (M.defaultEase = s._ease = new x(null, null, 1, 1)),
        (M.defaultOverwrite = "auto"),
        (M.ticker = o),
        (M.autoSleep = 120),
        (M.lagSmoothing = function (t, e) {
          o.lagSmoothing(t, e);
        }),
        (M.selector =
          t.$ ||
          t.jQuery ||
          function (e) {
            var i = t.$ || t.jQuery;
            return i
              ? ((M.selector = i), i(e))
              : "undefined" == typeof document
              ? e
              : document.querySelectorAll
              ? document.querySelectorAll(e)
              : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e);
          });
      var E = [],
        L = {},
        j = (M._internals = { isArray: p, isSelector: R, lazyTweens: E }),
        F = (M._plugins = {}),
        I = (j.tweenLookup = {}),
        H = 0,
        z = (j.reservedProps = {
          ease: 1,
          delay: 1,
          overwrite: 1,
          onComplete: 1,
          onCompleteParams: 1,
          onCompleteScope: 1,
          useFrames: 1,
          runBackwards: 1,
          startAt: 1,
          onUpdate: 1,
          onUpdateParams: 1,
          onUpdateScope: 1,
          onStart: 1,
          onStartParams: 1,
          onStartScope: 1,
          onReverseComplete: 1,
          onReverseCompleteParams: 1,
          onReverseCompleteScope: 1,
          onRepeat: 1,
          onRepeatParams: 1,
          onRepeatScope: 1,
          easeParams: 1,
          yoyo: 1,
          immediateRender: 1,
          repeat: 1,
          repeatDelay: 1,
          data: 1,
          paused: 1,
          reversed: 1,
          autoCSS: 1,
          lazy: 1,
          onOverwrite: 1,
        }),
        W = {
          none: 0,
          all: 1,
          auto: 2,
          concurrent: 3,
          allOnStart: 4,
          preexisting: 5,
          true: 1,
          false: 0,
        },
        $ = (O._rootFramesTimeline = new A()),
        B = (O._rootTimeline = new A()),
        q = 30,
        X = (j.lazyRender = function () {
          var t,
            e = E.length;
          for (L = {}; --e > -1; )
            (t = E[e]),
              t &&
                t._lazy !== !1 &&
                (t.render(t._lazy[0], t._lazy[1], !0), (t._lazy = !1));
          E.length = 0;
        });
      (B._startTime = o.time),
        ($._startTime = o.frame),
        (B._active = $._active = !0),
        setTimeout(X, 1),
        (O._updateRoot = M.render =
          function () {
            var t, e, i;
            if (
              (E.length && X(),
              B.render((o.time - B._startTime) * B._timeScale, !1, !1),
              $.render((o.frame - $._startTime) * $._timeScale, !1, !1),
              E.length && X(),
              o.frame >= q)
            ) {
              q = o.frame + (parseInt(M.autoSleep, 10) || 120);
              for (i in I) {
                for (e = I[i].tweens, t = e.length; --t > -1; )
                  e[t]._gc && e.splice(t, 1);
                0 === e.length && delete I[i];
              }
              if (
                ((i = B._first),
                (!i || i._paused) &&
                  M.autoSleep &&
                  !$._first &&
                  1 === o._listeners.tick.length)
              ) {
                for (; i && i._paused; ) i = i._next;
                i || o.sleep();
              }
            }
          }),
        o.addEventListener("tick", O._updateRoot);
      var Y = function (t, e, i) {
          var n,
            r,
            s = t._gsTweenID;
          if (
            (I[s || (t._gsTweenID = s = "t" + H++)] ||
              (I[s] = { target: t, tweens: [] }),
            e && ((n = I[s].tweens), (n[(r = n.length)] = e), i))
          )
            for (; --r > -1; ) n[r] === e && n.splice(r, 1);
          return I[s].tweens;
        },
        U = function (t, e, i, n) {
          var r,
            s,
            o = t.vars.onOverwrite;
          return (
            o && (r = o(t, e, i, n)),
            (o = M.onOverwrite),
            o && (s = o(t, e, i, n)),
            r !== !1 && s !== !1
          );
        },
        V = function (t, e, i, n, r) {
          var s, o, a, l;
          if (1 === n || n >= 4) {
            for (l = r.length, s = 0; l > s; s++)
              if ((a = r[s]) !== e)
                a._gc || (U(a, e) && a._enabled(!1, !1) && (o = !0));
              else if (5 === n) break;
            return o;
          }
          var u,
            c = e._startTime + h,
            f = [],
            p = 0,
            d = 0 === e._duration;
          for (s = r.length; --s > -1; )
            (a = r[s]) === e ||
              a._gc ||
              a._paused ||
              (a._timeline !== e._timeline
                ? ((u = u || G(e, 0, d)), 0 === G(a, u, d) && (f[p++] = a))
                : c >= a._startTime &&
                  a._startTime + a.totalDuration() / a._timeScale > c &&
                  (((d || !a._initted) && 2e-10 >= c - a._startTime) ||
                    (f[p++] = a)));
          for (s = p; --s > -1; )
            if (
              ((a = f[s]),
              2 === n && a._kill(i, t, e) && (o = !0),
              2 !== n || (!a._firstPT && a._initted))
            ) {
              if (2 !== n && !U(a, e)) continue;
              a._enabled(!1, !1) && (o = !0);
            }
          return o;
        },
        G = function (t, e, i) {
          for (
            var n = t._timeline, r = n._timeScale, s = t._startTime;
            n._timeline;

          ) {
            if (((s += n._startTime), (r *= n._timeScale), n._paused))
              return -100;
            n = n._timeline;
          }
          return (
            (s /= r),
            s > e
              ? s - e
              : (i && s === e) || (!t._initted && 2 * h > s - e)
              ? h
              : (s += t.totalDuration() / t._timeScale / r) > e + h
              ? 0
              : s - e - h
          );
        };
      (s._init = function () {
        var t,
          e,
          i,
          n,
          r,
          s = this.vars,
          o = this._overwrittenProps,
          a = this._duration,
          l = !!s.immediateRender,
          u = s.ease;
        if (s.startAt) {
          this._startAt && (this._startAt.render(-1, !0), this._startAt.kill()),
            (r = {});
          for (n in s.startAt) r[n] = s.startAt[n];
          if (
            ((r.overwrite = !1),
            (r.immediateRender = !0),
            (r.lazy = l && s.lazy !== !1),
            (r.startAt = r.delay = null),
            (this._startAt = M.to(this.target, 0, r)),
            l)
          )
            if (this._time > 0) this._startAt = null;
            else if (0 !== a) return;
        } else if (s.runBackwards && 0 !== a)
          if (this._startAt)
            this._startAt.render(-1, !0),
              this._startAt.kill(),
              (this._startAt = null);
          else {
            0 !== this._time && (l = !1), (i = {});
            for (n in s) (z[n] && "autoCSS" !== n) || (i[n] = s[n]);
            if (
              ((i.overwrite = 0),
              (i.data = "isFromStart"),
              (i.lazy = l && s.lazy !== !1),
              (i.immediateRender = l),
              (this._startAt = M.to(this.target, 0, i)),
              l)
            ) {
              if (0 === this._time) return;
            } else
              this._startAt._init(),
                this._startAt._enabled(!1),
                this.vars.immediateRender && (this._startAt = null);
          }
        if (
          ((this._ease = u =
            u
              ? u instanceof x
                ? u
                : "function" == typeof u
                ? new x(u, s.easeParams)
                : T[u] || M.defaultEase
              : M.defaultEase),
          s.easeParams instanceof Array &&
            u.config &&
            (this._ease = u.config.apply(u, s.easeParams)),
          (this._easeType = this._ease._type),
          (this._easePower = this._ease._power),
          (this._firstPT = null),
          this._targets)
        )
          for (t = this._targets.length; --t > -1; )
            this._initProps(
              this._targets[t],
              (this._propLookup[t] = {}),
              this._siblings[t],
              o ? o[t] : null
            ) && (e = !0);
        else
          e = this._initProps(this.target, this._propLookup, this._siblings, o);
        if (
          (e && M._onPluginEvent("_onInitAllProps", this),
          o &&
            (this._firstPT ||
              ("function" != typeof this.target && this._enabled(!1, !1))),
          s.runBackwards)
        )
          for (i = this._firstPT; i; )
            (i.s += i.c), (i.c = -i.c), (i = i._next);
        (this._onUpdate = s.onUpdate), (this._initted = !0);
      }),
        (s._initProps = function (e, i, n, r) {
          var s, o, a, l, u, h;
          if (null == e) return !1;
          L[e._gsTweenID] && X(),
            this.vars.css ||
              (e.style &&
                e !== t &&
                e.nodeType &&
                F.css &&
                this.vars.autoCSS !== !1 &&
                N(this.vars, e));
          for (s in this.vars) {
            if (((h = this.vars[s]), z[s]))
              h &&
                (h instanceof Array || (h.push && p(h))) &&
                -1 !== h.join("").indexOf("{self}") &&
                (this.vars[s] = h = this._swapSelfInParams(h, this));
            else if (
              F[s] &&
              (l = new F[s]())._onInitTween(e, this.vars[s], this)
            ) {
              for (
                this._firstPT = u =
                  {
                    _next: this._firstPT,
                    t: l,
                    p: "setRatio",
                    s: 0,
                    c: 1,
                    f: !0,
                    n: s,
                    pg: !0,
                    pr: l._priority,
                  },
                  o = l._overwriteProps.length;
                --o > -1;

              )
                i[l._overwriteProps[o]] = this._firstPT;
              (l._priority || l._onInitAllProps) && (a = !0),
                (l._onDisable || l._onEnable) &&
                  (this._notifyPluginsOfEnabled = !0);
            } else
              (this._firstPT =
                i[s] =
                u =
                  {
                    _next: this._firstPT,
                    t: e,
                    p: s,
                    f: "function" == typeof e[s],
                    n: s,
                    pg: !1,
                    pr: 0,
                  }),
                (u.s = u.f
                  ? e[
                      s.indexOf("set") ||
                      "function" != typeof e["get" + s.substr(3)]
                        ? s
                        : "get" + s.substr(3)
                    ]()
                  : parseFloat(e[s])),
                (u.c =
                  "string" == typeof h && "=" === h.charAt(1)
                    ? parseInt(h.charAt(0) + "1", 10) * Number(h.substr(2))
                    : Number(h) - u.s || 0);
            u && u._next && (u._next._prev = u);
          }
          return r && this._kill(r, e)
            ? this._initProps(e, i, n, r)
            : this._overwrite > 1 &&
              this._firstPT &&
              n.length > 1 &&
              V(e, this, i, this._overwrite, n)
            ? (this._kill(i, e), this._initProps(e, i, n, r))
            : (this._firstPT &&
                ((this.vars.lazy !== !1 && this._duration) ||
                  (this.vars.lazy && !this._duration)) &&
                (L[e._gsTweenID] = !0),
              a);
        }),
        (s.render = function (t, e, i) {
          var n,
            r,
            s,
            o,
            a = this._time,
            l = this._duration,
            u = this._rawPrevTime;
          if (t >= l)
            (this._totalTime = this._time = l),
              (this.ratio = this._ease._calcEnd ? this._ease.getRatio(1) : 1),
              this._reversed ||
                ((n = !0),
                (r = "onComplete"),
                (i = i || this._timeline.autoRemoveChildren)),
              0 === l &&
                (this._initted || !this.vars.lazy || i) &&
                (this._startTime === this._timeline._duration && (t = 0),
                (0 === t || 0 > u || (u === h && "isPause" !== this.data)) &&
                  u !== t &&
                  ((i = !0), u > h && (r = "onReverseComplete")),
                (this._rawPrevTime = o = !e || t || u === t ? t : h));
          else if (1e-7 > t)
            (this._totalTime = this._time = 0),
              (this.ratio = this._ease._calcEnd ? this._ease.getRatio(0) : 0),
              (0 !== a || (0 === l && u > 0)) &&
                ((r = "onReverseComplete"), (n = this._reversed)),
              0 > t &&
                ((this._active = !1),
                0 === l &&
                  (this._initted || !this.vars.lazy || i) &&
                  (u >= 0 && (u !== h || "isPause" !== this.data) && (i = !0),
                  (this._rawPrevTime = o = !e || t || u === t ? t : h))),
              this._initted || (i = !0);
          else if (((this._totalTime = this._time = t), this._easeType)) {
            var c = t / l,
              f = this._easeType,
              p = this._easePower;
            (1 === f || (3 === f && c >= 0.5)) && (c = 1 - c),
              3 === f && (c *= 2),
              1 === p
                ? (c *= c)
                : 2 === p
                ? (c *= c * c)
                : 3 === p
                ? (c *= c * c * c)
                : 4 === p && (c *= c * c * c * c),
              (this.ratio =
                1 === f
                  ? 1 - c
                  : 2 === f
                  ? c
                  : 0.5 > t / l
                  ? c / 2
                  : 1 - c / 2);
          } else this.ratio = this._ease.getRatio(t / l);
          if (this._time !== a || i) {
            if (!this._initted) {
              if ((this._init(), !this._initted || this._gc)) return;
              if (
                !i &&
                this._firstPT &&
                ((this.vars.lazy !== !1 && this._duration) ||
                  (this.vars.lazy && !this._duration))
              )
                return (
                  (this._time = this._totalTime = a),
                  (this._rawPrevTime = u),
                  E.push(this),
                  void (this._lazy = [t, e])
                );
              this._time && !n
                ? (this.ratio = this._ease.getRatio(this._time / l))
                : n &&
                  this._ease._calcEnd &&
                  (this.ratio = this._ease.getRatio(0 === this._time ? 0 : 1));
            }
            for (
              this._lazy !== !1 && (this._lazy = !1),
                this._active ||
                  (!this._paused &&
                    this._time !== a &&
                    t >= 0 &&
                    (this._active = !0)),
                0 === a &&
                  (this._startAt &&
                    (t >= 0
                      ? this._startAt.render(t, e, i)
                      : r || (r = "_dummyGS")),
                  this.vars.onStart &&
                    (0 !== this._time || 0 === l) &&
                    (e ||
                      this.vars.onStart.apply(
                        this.vars.onStartScope || this,
                        this.vars.onStartParams || y
                      ))),
                s = this._firstPT;
              s;

            )
              s.f
                ? s.t[s.p](s.c * this.ratio + s.s)
                : (s.t[s.p] = s.c * this.ratio + s.s),
                (s = s._next);
            this._onUpdate &&
              (0 > t &&
                this._startAt &&
                t !== -1e-4 &&
                this._startAt.render(t, e, i),
              e ||
                ((this._time !== a || n) &&
                  this._onUpdate.apply(
                    this.vars.onUpdateScope || this,
                    this.vars.onUpdateParams || y
                  ))),
              r &&
                (!this._gc || i) &&
                (0 > t &&
                  this._startAt &&
                  !this._onUpdate &&
                  t !== -1e-4 &&
                  this._startAt.render(t, e, i),
                n &&
                  (this._timeline.autoRemoveChildren && this._enabled(!1, !1),
                  (this._active = !1)),
                !e &&
                  this.vars[r] &&
                  this.vars[r].apply(
                    this.vars[r + "Scope"] || this,
                    this.vars[r + "Params"] || y
                  ),
                0 === l &&
                  this._rawPrevTime === h &&
                  o !== h &&
                  (this._rawPrevTime = 0));
          }
        }),
        (s._kill = function (t, e, i) {
          if (
            ("all" === t && (t = null),
            null == t && (null == e || e === this.target))
          )
            return (this._lazy = !1), this._enabled(!1, !1);
          e =
            "string" != typeof e
              ? e || this._targets || this.target
              : M.selector(e) || e;
          var n, r, s, o, a, l, u, h, c;
          if ((p(e) || R(e)) && "number" != typeof e[0])
            for (n = e.length; --n > -1; ) this._kill(t, e[n]) && (l = !0);
          else {
            if (this._targets) {
              for (n = this._targets.length; --n > -1; )
                if (e === this._targets[n]) {
                  (a = this._propLookup[n] || {}),
                    (this._overwrittenProps = this._overwrittenProps || []),
                    (r = this._overwrittenProps[n] =
                      t ? this._overwrittenProps[n] || {} : "all");
                  break;
                }
            } else {
              if (e !== this.target) return !1;
              (a = this._propLookup),
                (r = this._overwrittenProps =
                  t ? this._overwrittenProps || {} : "all");
            }
            if (a) {
              if (
                ((u = t || a),
                (h =
                  t !== r &&
                  "all" !== r &&
                  t !== a &&
                  ("object" != typeof t || !t._tempKill)),
                i && (M.onOverwrite || this.vars.onOverwrite))
              ) {
                for (s in u) a[s] && (c || (c = []), c.push(s));
                if (!U(this, i, e, c)) return !1;
              }
              for (s in u)
                (o = a[s]) &&
                  (o.pg && o.t._kill(u) && (l = !0),
                  (o.pg && 0 !== o.t._overwriteProps.length) ||
                    (o._prev
                      ? (o._prev._next = o._next)
                      : o === this._firstPT && (this._firstPT = o._next),
                    o._next && (o._next._prev = o._prev),
                    (o._next = o._prev = null)),
                  delete a[s]),
                  h && (r[s] = 1);
              !this._firstPT && this._initted && this._enabled(!1, !1);
            }
          }
          return l;
        }),
        (s.invalidate = function () {
          return (
            this._notifyPluginsOfEnabled &&
              M._onPluginEvent("_onDisable", this),
            (this._firstPT =
              this._overwrittenProps =
              this._startAt =
              this._onUpdate =
                null),
            (this._notifyPluginsOfEnabled = this._active = this._lazy = !1),
            (this._propLookup = this._targets ? {} : []),
            O.prototype.invalidate.call(this),
            this.vars.immediateRender &&
              ((this._time = -h), this.render(-this._delay)),
            this
          );
        }),
        (s._enabled = function (t, e) {
          if ((a || o.wake(), t && this._gc)) {
            var i,
              n = this._targets;
            if (n)
              for (i = n.length; --i > -1; )
                this._siblings[i] = Y(n[i], this, !0);
            else this._siblings = Y(this.target, this, !0);
          }
          return (
            O.prototype._enabled.call(this, t, e),
            !(!this._notifyPluginsOfEnabled || !this._firstPT) &&
              M._onPluginEvent(t ? "_onEnable" : "_onDisable", this)
          );
        }),
        (M.to = function (t, e, i) {
          return new M(t, e, i);
        }),
        (M.from = function (t, e, i) {
          return (
            (i.runBackwards = !0),
            (i.immediateRender = 0 != i.immediateRender),
            new M(t, e, i)
          );
        }),
        (M.fromTo = function (t, e, i, n) {
          return (
            (n.startAt = i),
            (n.immediateRender =
              0 != n.immediateRender && 0 != i.immediateRender),
            new M(t, e, n)
          );
        }),
        (M.delayedCall = function (t, e, i, n, r) {
          return new M(e, 0, {
            delay: t,
            onComplete: e,
            onCompleteParams: i,
            onCompleteScope: n,
            onReverseComplete: e,
            onReverseCompleteParams: i,
            onReverseCompleteScope: n,
            immediateRender: !1,
            lazy: !1,
            useFrames: r,
            overwrite: 0,
          });
        }),
        (M.set = function (t, e) {
          return new M(t, 0, e);
        }),
        (M.getTweensOf = function (t, e) {
          if (null == t) return [];
          t = "string" != typeof t ? t : M.selector(t) || t;
          var i, n, r, s;
          if ((p(t) || R(t)) && "number" != typeof t[0]) {
            for (i = t.length, n = []; --i > -1; )
              n = n.concat(M.getTweensOf(t[i], e));
            for (i = n.length; --i > -1; )
              for (s = n[i], r = i; --r > -1; ) s === n[r] && n.splice(i, 1);
          } else
            for (n = Y(t).concat(), i = n.length; --i > -1; )
              (n[i]._gc || (e && !n[i].isActive())) && n.splice(i, 1);
          return n;
        }),
        (M.killTweensOf = M.killDelayedCallsTo =
          function (t, e, i) {
            "object" == typeof e && ((i = e), (e = !1));
            for (var n = M.getTweensOf(t, e), r = n.length; --r > -1; )
              n[r]._kill(i, t);
          });
      var Q = _(
        "plugins.TweenPlugin",
        function (t, e) {
          (this._overwriteProps = (t || "").split(",")),
            (this._propName = this._overwriteProps[0]),
            (this._priority = e || 0),
            (this._super = Q.prototype);
        },
        !0
      );
      if (
        ((s = Q.prototype),
        (Q.version = "1.10.1"),
        (Q.API = 2),
        (s._firstPT = null),
        (s._addTween = function (t, e, i, n, r, s) {
          var o, a;
          return null != n &&
            (o =
              "number" == typeof n || "=" !== n.charAt(1)
                ? Number(n) - i
                : parseInt(n.charAt(0) + "1", 10) * Number(n.substr(2)))
            ? ((this._firstPT = a =
                {
                  _next: this._firstPT,
                  t: t,
                  p: e,
                  s: i,
                  c: o,
                  f: "function" == typeof t[e],
                  n: r || e,
                  r: s,
                }),
              a._next && (a._next._prev = a),
              a)
            : void 0;
        }),
        (s.setRatio = function (t) {
          for (var e, i = this._firstPT, n = 1e-6; i; )
            (e = i.c * t + i.s),
              i.r ? (e = Math.round(e)) : n > e && e > -n && (e = 0),
              i.f ? i.t[i.p](e) : (i.t[i.p] = e),
              (i = i._next);
        }),
        (s._kill = function (t) {
          var e,
            i = this._overwriteProps,
            n = this._firstPT;
          if (null != t[this._propName]) this._overwriteProps = [];
          else for (e = i.length; --e > -1; ) null != t[i[e]] && i.splice(e, 1);
          for (; n; )
            null != t[n.n] &&
              (n._next && (n._next._prev = n._prev),
              n._prev
                ? ((n._prev._next = n._next), (n._prev = null))
                : this._firstPT === n && (this._firstPT = n._next)),
              (n = n._next);
          return !1;
        }),
        (s._roundProps = function (t, e) {
          for (var i = this._firstPT; i; )
            (t[this._propName] ||
              (null != i.n && t[i.n.split(this._propName + "_").join("")])) &&
              (i.r = e),
              (i = i._next);
        }),
        (M._onPluginEvent = function (t, e) {
          var i,
            n,
            r,
            s,
            o,
            a = e._firstPT;
          if ("_onInitAllProps" === t) {
            for (; a; ) {
              for (o = a._next, n = r; n && n.pr > a.pr; ) n = n._next;
              (a._prev = n ? n._prev : s) ? (a._prev._next = a) : (r = a),
                (a._next = n) ? (n._prev = a) : (s = a),
                (a = o);
            }
            a = e._firstPT = r;
          }
          for (; a; )
            a.pg && "function" == typeof a.t[t] && a.t[t]() && (i = !0),
              (a = a._next);
          return i;
        }),
        (Q.activate = function (t) {
          for (var e = t.length; --e > -1; )
            t[e].API === Q.API && (F[new t[e]()._propName] = t[e]);
          return !0;
        }),
        (g.plugin = function (t) {
          if (!(t && t.propName && t.init && t.API))
            throw "illegal plugin definition.";
          var e,
            i = t.propName,
            n = t.priority || 0,
            r = t.overwriteProps,
            s = {
              init: "_onInitTween",
              set: "setRatio",
              kill: "_kill",
              round: "_roundProps",
              initAll: "_onInitAllProps",
            },
            o = _(
              "plugins." + i.charAt(0).toUpperCase() + i.substr(1) + "Plugin",
              function () {
                Q.call(this, i, n), (this._overwriteProps = r || []);
              },
              t.global === !0
            ),
            a = (o.prototype = new Q(i));
          (a.constructor = o), (o.API = t.API);
          for (e in s) "function" == typeof t[e] && (a[s[e]] = t[e]);
          return (o.version = t.version), Q.activate([o]), o;
        }),
        (n = t._gsQueue))
      ) {
        for (r = 0; n.length > r; r++) n[r]();
        for (s in d)
          d[s].func ||
            t.console.log(
              "GSAP encountered missing dependency: com.greensock." + s
            );
      }
      a = !1;
    }
  })(
    "undefined" != typeof module &&
      module.exports &&
      "undefined" != typeof global
      ? global
      : this || window,
    "TweenMax"
  );
var _gsScope =
  "undefined" != typeof module && module.exports && "undefined" != typeof global
    ? global
    : this || window;
(_gsScope._gsQueue || (_gsScope._gsQueue = [])).push(function () {
  "use strict";
  var t = document.documentElement,
    e = window,
    i = function (i, n) {
      var r = "x" === n ? "Width" : "Height",
        s = "scroll" + r,
        o = "client" + r,
        a = document.body;
      return i === e || i === t || i === a
        ? Math.max(t[s], a[s]) - (e["inner" + r] || Math.max(t[o], a[o]))
        : i[s] - i["offset" + r];
    },
    n = _gsScope._gsDefine.plugin({
      propName: "scrollTo",
      API: 2,
      version: "1.7.4",
      init: function (t, n, r) {
        return (
          (this._wdw = t === e),
          (this._target = t),
          (this._tween = r),
          "object" != typeof n && (n = { y: n }),
          (this.vars = n),
          (this._autoKill = n.autoKill !== !1),
          (this.x = this.xPrev = this.getX()),
          (this.y = this.yPrev = this.getY()),
          null != n.x
            ? (this._addTween(
                this,
                "x",
                this.x,
                "max" === n.x ? i(t, "x") : n.x,
                "scrollTo_x",
                !0
              ),
              this._overwriteProps.push("scrollTo_x"))
            : (this.skipX = !0),
          null != n.y
            ? (this._addTween(
                this,
                "y",
                this.y,
                "max" === n.y ? i(t, "y") : n.y,
                "scrollTo_y",
                !0
              ),
              this._overwriteProps.push("scrollTo_y"))
            : (this.skipY = !0),
          !0
        );
      },
      set: function (t) {
        this._super.setRatio.call(this, t);
        var n = this._wdw || !this.skipX ? this.getX() : this.xPrev,
          r = this._wdw || !this.skipY ? this.getY() : this.yPrev,
          s = r - this.yPrev,
          o = n - this.xPrev;
        this._autoKill &&
          (!this.skipX &&
            (o > 7 || -7 > o) &&
            i(this._target, "x") > n &&
            (this.skipX = !0),
          !this.skipY &&
            (s > 7 || -7 > s) &&
            i(this._target, "y") > r &&
            (this.skipY = !0),
          this.skipX &&
            this.skipY &&
            (this._tween.kill(),
            this.vars.onAutoKill &&
              this.vars.onAutoKill.apply(
                this.vars.onAutoKillScope || this._tween,
                this.vars.onAutoKillParams || []
              ))),
          this._wdw
            ? e.scrollTo(this.skipX ? n : this.x, this.skipY ? r : this.y)
            : (this.skipY || (this._target.scrollTop = this.y),
              this.skipX || (this._target.scrollLeft = this.x)),
          (this.xPrev = this.x),
          (this.yPrev = this.y);
      },
    }),
    r = n.prototype;
  (n.max = i),
    (r.getX = function () {
      return this._wdw
        ? null != e.pageXOffset
          ? e.pageXOffset
          : null != t.scrollLeft
          ? t.scrollLeft
          : document.body.scrollLeft
        : this._target.scrollLeft;
    }),
    (r.getY = function () {
      return this._wdw
        ? null != e.pageYOffset
          ? e.pageYOffset
          : null != t.scrollTop
          ? t.scrollTop
          : document.body.scrollTop
        : this._target.scrollTop;
    }),
    (r._kill = function (t) {
      return (
        t.scrollTo_x && (this.skipX = !0),
        t.scrollTo_y && (this.skipY = !0),
        this._super._kill.call(this, t)
      );
    });
}),
  _gsScope._gsDefine && _gsScope._gsQueue.pop()();
var _gsScope =
  "undefined" != typeof module && module.exports && "undefined" != typeof global
    ? global
    : this || window;
!(function (t) {
  "use strict";
  var e = t.GreenSockGlobals || t,
    i = function (t) {
      var i,
        n = t.split("."),
        r = e;
      for (i = 0; n.length > i; i++) r[n[i]] = r = r[n[i]] || {};
      return r;
    },
    n = i("com.greensock.utils"),
    r = function (t) {
      var e = t.nodeType,
        i = "";
      if (1 === e || 9 === e || 11 === e) {
        if ("string" == typeof t.textContent) return t.textContent;
        for (t = t.firstChild; t; t = t.nextSibling) i += r(t);
      } else if (3 === e || 4 === e) return t.nodeValue;
      return i;
    },
    s = document,
    o = s.defaultView ? s.defaultView.getComputedStyle : function () {},
    a = /([A-Z])/g,
    l = function (t, e, i, n) {
      var r;
      return (
        (i = i || o(t, null))
          ? ((t = i.getPropertyValue(e.replace(a, "-$1").toLowerCase())),
            (r = t || i.length ? t : i[e]))
          : t.currentStyle && ((i = t.currentStyle), (r = i[e])),
        n ? r : parseInt(r, 10) || 0
      );
    },
    u = function (t) {
      return !!(
        t.length &&
        t[0] &&
        ((t[0].nodeType && t[0].style && !t.nodeType) ||
          (t[0].length && t[0][0]))
      );
    },
    h = function (t) {
      var e,
        i,
        n,
        r = [],
        s = t.length;
      for (e = 0; s > e; e++)
        if (((i = t[e]), u(i)))
          for (n = i.length, n = 0; i.length > n; n++) r.push(i[n]);
        else r.push(i);
      return r;
    },
    c = ")eefec303079ad17405c",
    f = /(?:<br>|<br\/>|<br \/>)/gi,
    p = s.all && !s.addEventListener,
    d =
      "<div style='position:relative;display:inline-block;" +
      (p ? "*display:inline;*zoom:1;'" : "'"),
    m = function (t) {
      t = t || "";
      var e = -1 !== t.indexOf("++"),
        i = 1;
      return (
        e && (t = t.split("++").join("")),
        function () {
          return d + (t ? " class='" + t + (e ? i++ : "") + "'>" : ">");
        }
      );
    },
    g =
      (n.SplitText =
      e.SplitText =
        function (t, e) {
          if (("string" == typeof t && (t = g.selector(t)), !t))
            throw "cannot split a null element.";
          (this.elements = u(t) ? h(t) : [t]),
            (this.chars = []),
            (this.words = []),
            (this.lines = []),
            (this._originals = []),
            (this.vars = e || {}),
            this.split(e);
        }),
    _ = function (t, e, i) {
      var n = t.nodeType;
      if (1 === n || 9 === n || 11 === n)
        for (t = t.firstChild; t; t = t.nextSibling) _(t, e, i);
      else (3 === n || 4 === n) && (t.nodeValue = t.nodeValue.split(e).join(i));
    },
    v = function (t, e) {
      for (var i = e.length; --i > -1; ) t.push(e[i]);
    },
    y = function (t, e, i, n, a) {
      f.test(t.innerHTML) && (t.innerHTML = t.innerHTML.replace(f, c));
      var u,
        h,
        p,
        d,
        g,
        y,
        x,
        T,
        w,
        b,
        P,
        S,
        C,
        k,
        O = r(t),
        D = e.type || e.split || "chars,words,lines",
        A = -1 !== D.indexOf("lines") ? [] : null,
        M = -1 !== D.indexOf("words"),
        R = -1 !== D.indexOf("chars"),
        N = "absolute" === e.position || e.absolute === !0,
        E = N ? "&#173; " : " ",
        L = -999,
        j = o(t),
        F = l(t, "paddingLeft", j),
        I = l(t, "borderBottomWidth", j) + l(t, "borderTopWidth", j),
        H = l(t, "borderLeftWidth", j) + l(t, "borderRightWidth", j),
        z = l(t, "paddingTop", j) + l(t, "paddingBottom", j),
        W = l(t, "paddingLeft", j) + l(t, "paddingRight", j),
        $ = l(t, "textAlign", j, !0),
        B = t.clientHeight,
        q = t.clientWidth,
        X = "</div>",
        Y = m(e.wordsClass),
        U = m(e.charsClass),
        V = -1 !== (e.linesClass || "").indexOf("++"),
        G = e.linesClass,
        Q = -1 !== O.indexOf("<"),
        Z = !0,
        K = [],
        J = [],
        tt = [];
      for (
        V && (G = G.split("++").join("")),
          Q && (O = O.split("<").join("{{LT}}")),
          u = O.length,
          d = Y(),
          g = 0;
        u > g;
        g++
      )
        if (((x = O.charAt(g)), ")" === x && O.substr(g, 20) === c))
          (d += (Z ? X : "") + "<BR/>"),
            (Z = !1),
            g !== u - 20 &&
              O.substr(g + 20, 20) !== c &&
              ((d += " " + Y()), (Z = !0)),
            (g += 19);
        else if (
          " " === x &&
          " " !== O.charAt(g - 1) &&
          g !== u - 1 &&
          O.substr(g - 20, 20) !== c
        ) {
          for (d += Z ? X : "", Z = !1; " " === O.charAt(g + 1); )
            (d += E), g++;
          (")" !== O.charAt(g + 1) || O.substr(g + 1, 20) !== c) &&
            ((d += E + Y()), (Z = !0));
        } else d += R && " " !== x ? U() + x + "</div>" : x;
      for (
        t.innerHTML = d + (Z ? X : ""),
          Q && _(t, "{{LT}}", "<"),
          y = t.getElementsByTagName("*"),
          u = y.length,
          T = [],
          g = 0;
        u > g;
        g++
      )
        T[g] = y[g];
      if (A || N)
        for (g = 0; u > g; g++)
          (w = T[g]),
            (p = w.parentNode === t),
            (p || N || (R && !M)) &&
              ((b = w.offsetTop),
              A &&
                p &&
                b !== L &&
                "BR" !== w.nodeName &&
                ((h = []), A.push(h), (L = b)),
              N &&
                ((w._x = w.offsetLeft),
                (w._y = b),
                (w._w = w.offsetWidth),
                (w._h = w.offsetHeight)),
              A &&
                ((M !== p && R) || (h.push(w), (w._x -= F)),
                p && g && (T[g - 1]._wordEnd = !0),
                "BR" === w.nodeName &&
                  w.nextSibling &&
                  "BR" === w.nextSibling.nodeName &&
                  A.push([])));
      for (g = 0; u > g; g++)
        (w = T[g]),
          (p = w.parentNode === t),
          "BR" !== w.nodeName
            ? (N &&
                ((S = w.style),
                M ||
                  p ||
                  ((w._x += w.parentNode._x), (w._y += w.parentNode._y)),
                (S.left = w._x + "px"),
                (S.top = w._y + "px"),
                (S.position = "absolute"),
                (S.display = "block"),
                (S.width = w._w + 1 + "px"),
                (S.height = w._h + "px")),
              M
                ? p && "" !== w.innerHTML
                  ? J.push(w)
                  : R && K.push(w)
                : p
                ? (t.removeChild(w), T.splice(g--, 1), u--)
                : !p &&
                  R &&
                  ((b = !A && !N && w.nextSibling),
                  t.appendChild(w),
                  b || t.appendChild(s.createTextNode(" ")),
                  K.push(w)))
            : A || N
            ? (t.removeChild(w), T.splice(g--, 1), u--)
            : M || t.appendChild(w);
      if (A) {
        for (
          N &&
            ((P = s.createElement("div")),
            t.appendChild(P),
            (C = P.offsetWidth + "px"),
            (b = P.offsetParent === t ? 0 : t.offsetLeft),
            t.removeChild(P)),
            S = t.style.cssText,
            t.style.cssText = "display:none;";
          t.firstChild;

        )
          t.removeChild(t.firstChild);
        for (k = !N || (!M && !R), g = 0; A.length > g; g++) {
          for (
            h = A[g],
              P = s.createElement("div"),
              P.style.cssText =
                "display:block;text-align:" +
                $ +
                ";position:" +
                (N ? "absolute;" : "relative;"),
              G && (P.className = G + (V ? g + 1 : "")),
              tt.push(P),
              u = h.length,
              y = 0;
            u > y;
            y++
          )
            "BR" !== h[y].nodeName &&
              ((w = h[y]),
              P.appendChild(w),
              k && (w._wordEnd || M) && P.appendChild(s.createTextNode(" ")),
              N &&
                (0 === y &&
                  ((P.style.top = w._y + "px"), (P.style.left = F + b + "px")),
                (w.style.top = "0px"),
                b && (w.style.left = w._x - b + "px")));
          0 === u && (P.innerHTML = "&nbsp;"),
            M ||
              R ||
              (P.innerHTML = r(P).split(String.fromCharCode(160)).join(" ")),
            N && ((P.style.width = C), (P.style.height = w._h + "px")),
            t.appendChild(P);
        }
        t.style.cssText = S;
      }
      N &&
        (B > t.clientHeight &&
          ((t.style.height = B - z + "px"),
          B > t.clientHeight && (t.style.height = B + I + "px")),
        q > t.clientWidth &&
          ((t.style.width = q - W + "px"),
          q > t.clientWidth && (t.style.width = q + H + "px"))),
        v(i, K),
        v(n, J),
        v(a, tt);
    },
    x = g.prototype;
  (x.split = function (t) {
    this.isSplit && this.revert(),
      (this.vars = t || this.vars),
      (this._originals.length =
        this.chars.length =
        this.words.length =
        this.lines.length =
          0);
    for (var e = this.elements.length; --e > -1; )
      (this._originals[e] = this.elements[e].innerHTML),
        y(this.elements[e], this.vars, this.chars, this.words, this.lines);
    return (
      this.chars.reverse(),
      this.words.reverse(),
      this.lines.reverse(),
      (this.isSplit = !0),
      this
    );
  }),
    (x.revert = function () {
      if (!this._originals) throw "revert() call wasn't scoped properly.";
      for (var t = this._originals.length; --t > -1; )
        this.elements[t].innerHTML = this._originals[t];
      return (
        (this.chars = []),
        (this.words = []),
        (this.lines = []),
        (this.isSplit = !1),
        this
      );
    }),
    (g.selector =
      t.$ ||
      t.jQuery ||
      function (e) {
        var i = t.$ || t.jQuery;
        return i
          ? ((g.selector = i), i(e))
          : "undefined" == typeof document
          ? e
          : document.querySelectorAll
          ? document.querySelectorAll(e)
          : document.getElementById("#" === e.charAt(0) ? e.substr(1) : e);
      }),
    (g.version = "0.3.3");
})(_gsScope),
  (function (t) {
    "use strict";
    var e = function () {
      return (_gsScope.GreenSockGlobals || _gsScope)[t];
    };
    "function" == typeof define && define.amd
      ? define(["TweenLite"], e)
      : "undefined" != typeof module &&
        module.exports &&
        (module.exports = e());
  })("SplitText"),
  !(function t(e, i, n) {
    function r(o, a) {
      if (!i[o]) {
        if (!e[o]) {
          var l = "function" == typeof require && require;
          if (!a && l) return l(o, !0);
          if (s) return s(o, !0);
          var u = new Error("Cannot find module '" + o + "'");
          throw ((u.code = "MODULE_NOT_FOUND"), u);
        }
        var h = (i[o] = { exports: {} });
        e[o][0].call(
          h.exports,
          function (t) {
            var i = e[o][1][t];
            return r(i ? i : t);
          },
          h,
          h.exports,
          t,
          e,
          i,
          n
        );
      }
      return i[o].exports;
    }
    for (
      var s = "function" == typeof require && require, o = 0;
      o < n.length;
      o++
    )
      r(n[o]);
    return r;
  })(
    {
      1: [
        function (t, e, i) {
          "use strict";
          function n() {
            (m.wW = window.innerWidth),
              (m.wH = window.innerHeight),
              (m.hH = $("#header").height()),
              (m.fH = $("#footer").is(":hidden") ? 0 : $("#footer").height()),
              (m.scrollTop = $(window).scrollTop()),
              (m.maxScroll = $(document).height() - m.wH);
          }
          function r() {
            (m.video = $("#bg-video")),
              m.resizeVideo(),
              $("#page-container > section").each(function (t) {
                m.homeSections[t] = new c($(this), t);
              }),
              $(window).scroll(function () {
                $(m.homeSections).each(function (t) {
                  this.onScroll(m.scrollTop);
                });
              }),
              $(document).mousemove(function () {
                var t = -25,
                  e = -t;
                if (!m.transitioning) {
                  var i = e * (1 - m.posY / (m.wH / 2));
                  (i = Math.round(Math.min(Math.max(i, t), e))),
                    $(m.homeSections).each(function (t) {
                      this.onMousemove(-i);
                    });
                }
              });
          }
          function s(t) {
            t.preventDefault();
          }
          function o() {
            console.log("clickety"), l(!1);
          }
          function a(t) {
            "Escape" === t.key && l(!1);
          }
          function l(t, e) {
            e && (e = e.replace("/", ""));
            var i = document.querySelector(e);
            (t && !i) ||
              (t
                ? (document.addEventListener("wheel", s, { passive: !1 }),
                  document.addEventListener("keydown", a),
                  p.on("click", o),
                  i.classList.add("is-open"))
                : (document.removeEventListener("wheel", s),
                  document.removeEventListener("keydown", a),
                  p.off("click", o),
                  d.removeClass("is-open")),
              f.toggleClass("overlay-open", t));
          }
          var u = t("./modules/Browser"),
            h = t("./modules/PageTransition"),
            c = t("./modules/HomeSection"),
            f = $("body"),
            p = $(".iframeCtn"),
            d = $(".iframeWrapper"),
            m = window.W || {};
          (m.Browser = new u()),
            (m.pixelDensity = window.devicePixelRatio || 1),
            (m.transitioning = !1),
            (m.currentPage = f.data("page-id")),
            (m.homeSections = []),
            (m.navCenter = $("#content--menu > .nav__center > li")),
            (m.navLeft = $("#content--menu > .nav__left")),
            (m.contentMenu = $("#content--menu")),
            (m.secLeftGr = $(".section--left .background--gradient")),
            (m.menuOpen = !1),
            m.scrollTimer,
            (m.menuAnim = new TimelineMax({
              paused: !0,
              onReverseComplete: function () {
                f.removeClass("menu--open"), (m.menuOpen = !1);
              },
              onStart: function () {
                f.addClass("menu--open"), (m.menuOpen = !0);
              },
            })),
            m.menuAnim.add(
              TweenMax.fromTo(
                m.navLeft,
                0.3,
                { alpha: 0, y: 20 },
                { alpha: 1, y: 0 }
              )
            ),
            m.menuAnim.add(
              TweenMax.staggerFromTo(
                m.navCenter,
                0.5,
                { alpha: 0, y: 20 },
                { alpha: 1, y: 0 },
                0.05
              )
            ),
            $(document).on("click touchend", "#btn--menu", function (t) {
              t.preventDefault(),
                m.wW <= 850 &&
                  (m.menuOpen ? m.menuAnim.reverse(0) : m.menuAnim.play(0));
            }),
            $(document).on("touchmove", function (t) {
              m.menuOpen && m.wW <= 850 && t.preventDefault();
            }),
            $(document).on("click touchend", "[data-goto]", function (t) {
              if ((t.preventDefault(), !m.transitioning)) {
                var e = $(this).attr("href"),
                  i = $(this).data("goto");
                if (
                  ("home" === m.currentPage &&
                    ("/" === e &&
                      TweenMax.to(window, 1, {
                        scrollTo: {
                          y: m.homeSections[0].offsetTop - m.hH,
                          autoKill: !1,
                        },
                        ease: Expo.easeInOut,
                      }),
                    e.indexOf("#about") !== -1 &&
                      TweenMax.to(window, 1, {
                        scrollTo: {
                          y: m.homeSections[1].offsetTop - m.hH,
                          autoKill: !1,
                        },
                        ease: Expo.easeInOut,
                      })),
                  e.indexOf("#booking") !== -1 || e.indexOf("#voucher") !== -1)
                )
                  return void l(!0, e);
                m.currentPage !== i && m.pageTransition.startTransition(e, i),
                  m.menuOpen && m.wW <= 850 && m.menuAnim.reverse(0);
              }
            }),
            $(document).on("mousemove", "section", function (t) {
              (m.posX = t.pageX), (m.posY = t.pageY - m.scrollTop);
              var e = m.wW > 1024 ? -35 : -18,
                i = m.wW > 1024 ? 70 : 35;
              if (!m.transitioning) {
                var n = i * (1 - m.posX / (m.wW / 2));
                (n = Math.round(Math.min(Math.max(n, e), i))),
                  TweenMax.to(".separator", 2, {
                    x: n,
                    force3D: !0,
                    ease: Quad.easeOut,
                  });
              }
            }),
            $(document).on("click touchend", "#nav--bar > li", function (t) {
              t.preventDefault();
              var e = $(this).index("#nav--bar > li");
              TweenMax.to(window, 1, {
                scrollTo: {
                  y: m.homeSections[e].offsetTop - m.hH,
                  autoKill: !1,
                },
                ease: Expo.easeInOut,
              });
            }),
            $(window).scroll(function () {
              if ("home" != m.currentPage) {
                var t = Math.round(Math.min(0.08 * m.scrollTop, 100));
                TweenMax.to(".container--background", 0.2, {
                  y: -t,
                  ease: Quad.EaseOut,
                  force3D: !0,
                }),
                  clearTimeout(m.scrollTimer),
                  (m.scrollTimer = setTimeout(function () {
                    var t = Math.round(Math.min(0.08 * m.scrollTop, 100));
                    TweenMax.to(".container--background", 0.5, {
                      y: -t,
                      ease: Quad.EaseInOut,
                      force3D: !0,
                    });
                  }, 200));
              }
            }),
            $(document).mousemove(function () {
              var t = -25,
                e = -t;
              if (!m.transitioning) {
                var i = e * (1 - m.posY / (m.wH / 2));
                (i = Math.round(Math.min(Math.max(i, t), e))),
                  m.wW > 920 &&
                    m.secLeftGr.length > 0 &&
                    TweenMax.to(m.secLeftGr, 1, {
                      rotationZ: -i,
                      scale: 1.5,
                      force3D: !0,
                      ease: Quad.easeOut,
                    });
              }
            }),
            (m.resizeVideo = function () {
              var t = m.wH / 1080,
                e = m.wW / 1920;
              e > t
                ? m.video.height("auto").width(m.wW + "px")
                : m.video.height(m.wH + "px").width("auto");
            }),
            (m.track = function (t) {
              void 0 !== ga && ga("send", "pageview", t);
            }),
            (m.onDocumentReady = function (t) {
              switch (((m.pageTransition = new h()), t)) {
                case "home":
                  r();
              }
            }),
            (m.onPageLoad = function (t) {}),
            $(document).ready(function () {
              (window.W = m),
                n(),
                m.Browser.Safari && $("html").addClass("safari"),
                m.onDocumentReady(m.currentPage),
                m.wW > 850 && m.menuAnim.progress(1, !1).pause(),
                history.pushState(
                  m.currentPage,
                  "",
                  document.location.pathname
                );
            }),
            $(window).load(function () {
              $("html").removeClass("preload"), m.onPageLoad(m.currentPage);
            }),
            $(window).resize(function () {
              n(),
                "home" === m.currentPage && m.resizeVideo(),
                m.wW > 850 &&
                  (m.menuAnim.progress(1, !1).pause(),
                  f.removeClass("menu--open"),
                  (m.menuOpen = !1));
            }),
            $(window).scroll(function () {
              m.scrollTop = window.pageYOffset;
            }),
            (window.onpopstate = function (t) {
              if (null !== t.state && !m.transitioning) {
                var e = "home" === t.state ? "/" : "/" + t.state,
                  i = "home" === t.state ? "home" : t.state;
                m.currentPage !== i &&
                  m.pageTransition.startTransition(e, i, !0);
              }
            });
        },
        {
          "./modules/Browser": 2,
          "./modules/HomeSection": 3,
          "./modules/PageTransition": 4,
        },
      ],
      2: [
        function (t, e, i) {
          "use strict";
          e.exports = function (t, e) {
            var i = this;
            (i.mobile =
              !!/iPhone|iPad|iPod|Android|webOS|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
              )),
              (i.IE9 = !!$("html").hasClass("ie9")),
              (i.Chrome = navigator.userAgent.indexOf("Chrome") > -1),
              (i.Explorer = navigator.userAgent.indexOf("MSIE") > -1),
              (i.Firefox = navigator.userAgent.indexOf("Firefox") > -1),
              (i.Safari = navigator.userAgent.indexOf("Safari") > -1),
              (i.Opera = navigator.userAgent.indexOf("Presto") > -1),
              i.Chrome && i.Safari && (i.Safari = !1);
          };
        },
        {},
      ],
      3: [
        function (t, e, i) {
          "use strict";
          e.exports = function (t, e) {
            var i = this;
            (i.index = e),
              (i.selector = t),
              (i.maxScale = 1.2),
              (i.imgHRatio = 1556 / 2792),
              (i.imgWRatio = 2792 / 1556),
              (i.DOMel = {
                section: $(t),
                bg: $(t).find(".section--background"),
                img: $(t).find(".section--background img"),
                gr: $(t).find(".section--gradient"),
                article: $(t).find("article"),
                scrollInfo: $("#scroll--info"),
                navBar: $("#nav--bar > li"),
              }),
              (i.init = function () {
                (i.height = i.DOMel.section.height()),
                  (i.width = i.DOMel.section.width()),
                  (i.offsetTop = i.DOMel.section.offset().top),
                  i.setImagesSize(),
                  0 !== i.index &&
                    TweenMax.set(i.DOMel.img, {
                      y: 0,
                      scale: i.maxScale,
                      force3D: !0,
                    }),
                  $(window).resize(function () {
                    i.onResize();
                  });
              }),
              (i.setImagesSize = function () {
                var t = Math.max(i.width, i.height * i.imgWRatio),
                  e = Math.max(i.height, i.width * i.imgHRatio);
                TweenMax.set(i.DOMel.img, { width: t, height: e, force3D: !0 });
              }),
              (i.onScroll = function (t) {
                var e = null;
                (i.scrollTop = t + W.wH - W.fH),
                  (i.distToTop = i.scrollTop - i.offsetTop - i.height);
                for (
                  var n = i.distToTop / i.height,
                    r =
                      (0 !== i.index && W.homeSections[i.index - 1],
                      i.index !== W.homeSections.length - 1 &&
                        W.homeSections[i.index + 1]),
                    s = 0;
                  s < W.homeSections.length;
                  s++
                )
                  t + i.height / 2 >= W.homeSections[s].offsetTop &&
                    (e = W.homeSections[s].index);
                if (
                  (i.index == e &&
                    i.DOMel.navBar
                      .removeClass("current")
                      .eq(e)
                      .addClass("current"),
                  i.scrollTop > i.offsetTop + i.height)
                ) {
                  if (
                    (0 === i.index && i.DOMel.scrollInfo.addClass("hide"),
                    n <= 1)
                  ) {
                    var o = (1 - n).toFixed(2);
                    if (
                      (TweenMax.to(i.DOMel.section, 0.5, { opacity: o }),
                      TweenMax.to(i.DOMel.img, 0.5, {
                        y: Math.floor(0.3 * i.distToTop),
                        force3D: !0,
                      }),
                      TweenMax.to(i.DOMel.article, 0.5, {
                        y: Math.floor(0.3 * i.distToTop),
                        force3D: !0,
                      }),
                      r)
                    ) {
                      var a = (i.maxScale - n * (i.maxScale - 1)).toFixed(3);
                      TweenMax.to(r.DOMel.article, 0.5, {
                        opacity: n.toFixed(2),
                        force3D: !0,
                      }),
                        TweenMax.to(r.DOMel.img, 0.5, {
                          scale: a,
                          force3D: !0,
                        });
                    }
                  }
                } else
                  0 === i.index && i.DOMel.scrollInfo.removeClass("hide"),
                    TweenMax.to(i.DOMel.section, 0.5, { opacity: 1 }),
                    TweenMax.to(i.DOMel.article, 0.5, {
                      opacity: 1,
                      y: 0,
                      force3D: !0,
                    }),
                    TweenMax.to(i.DOMel.img, 0.5, { y: 0, force3D: !0 });
                i.distToTop > i.height
                  ? 0 !== i.index || W.video[0].paused || W.video[0].pause()
                  : 0 === i.index && W.video[0].paused && W.video[0].play();
              }),
              (i.onMousemove = function (t) {
                $(i.DOMel.gr).hasClass("section--gradient_right") && (t = -t),
                  W.wW > 920 &&
                    TweenMax.to(i.DOMel.gr, 1, {
                      rotationZ: t,
                      scale: 1.5,
                      force3D: !0,
                      ease: Quad.easeOut,
                    });
              }),
              (i.onResize = function () {
                (i.height = i.DOMel.section.height()),
                  (i.width = i.DOMel.section.width()),
                  (i.offsetTop = i.DOMel.section.offset().top),
                  i.setImagesSize();
              }),
              i.init();
          };
        },
        {},
      ],
      4: [
        function (t, e, i) {
          "use strict";
          e.exports = function () {
            var t = this;
            (t.DOM = {
              canvas: document.getElementById("c"),
              separatorL: $(".separator--left"),
              separatorR: $(".separator--right"),
              h2: $(".section--left h2"),
              h3: $(".section--left h3"),
            }),
              (t.running = !1),
              (t.ctx = t.DOM.canvas.getContext("2d")),
              (t.seashell = new Image()),
              (t.seashell.src =
                "/img/illustrations/moxhe-seashell__dark_2x.jpg"),
              (t.seashellDim = {}),
              (t.init = function () {
                t.setCanvasSize(),
                  t.centerSeashell(),
                  t.getRectPoints(),
                  t.DOM.separatorL.length > 0 && t.splitText(),
                  $(window).resize(function () {
                    t.onResize();
                  });
              }),
              (t.setCanvasSize = function () {
                (t.canvasW = $(t.DOM.canvas).width() * W.pixelDensity),
                  (t.canvasH = $(t.DOM.canvas).height() * W.pixelDensity),
                  (t.DOM.canvas.width = t.canvasW),
                  (t.DOM.canvas.height = t.canvasH);
              }),
              (t.getRectPoints = function () {
                (t.rectPoints1 = {
                  TL: { x: 0, y: t.canvasH / 2 },
                  BL: { x: 0, y: t.canvasH / 2 },
                  TR: { x: t.canvasW, y: t.canvasH / 2 },
                  BR: { x: t.canvasW, y: t.canvasH / 2 },
                }),
                  (t.rectPoints2 = {
                    TL: { x: 0, y: t.canvasH / 2 },
                    BL: { x: 0, y: t.canvasH / 2 },
                    TR: { x: t.canvasW, y: t.canvasH / 2 },
                    BR: { x: t.canvasW, y: t.canvasH / 2 },
                  });
              }),
              (t.centerSeashell = function () {
                (t.seashellDim.height = 1.465 * t.canvasH),
                  (t.seashellDim.width = t.seashellDim.height / 1.194),
                  (t.seashellDim.posX =
                    0.5 * t.canvasW - t.seashellDim.width / 2),
                  (t.seashellDim.posY = -(0.1585 * t.seashellDim.height)),
                  (t.seashellDim.scale = 1);
              }),
              (t.startTransition = function (e, i, n) {
                (t.slug = e),
                  (t.dest = i),
                  (t.popstate = n),
                  (W.transitioning = !0),
                  $("#header nav a").removeClass("current"),
                  $('#header nav a[data-goto="' + i + '"]')
                    .eq(0)
                    .addClass("current"),
                  t.DOM.separatorL.length > 0
                    ? (t.hideText(),
                      TweenMax.to(t.DOM.separatorL, 0.8, {
                        x: 0,
                        scaleX: 9,
                        backgroundColor: "#1a1a1a",
                        ease: Expo.easeIn,
                      }),
                      TweenMax.to(t.DOM.separatorR, 0.8, {
                        x: 0,
                        scaleX: 7,
                        backgroundColor: "#1a1a1a",
                        ease: Expo.easeIn,
                        onComplete: t.openMask,
                      }))
                    : t.openMask();
              }),
              (t.splitText = function () {
                var e =
                  "contact" !== W.currentPage
                    ? t.DOM.h3
                    : $(".section--left h3 span");
                (t.splitH2 = new SplitText(t.DOM.h2, {
                  type: "chars",
                  position: "relative",
                })),
                  (t.splitH3 = new SplitText(e, {
                    type: "words",
                    position: "relative",
                  }));
              }),
              (t.hideText = function () {
                if (t.DOM.h2.length) {
                  TweenMax.set(t.DOM.h2, {
                    overflow: "hidden",
                    position: "relative",
                  }),
                    TweenMax.set(t.DOM.h3, {
                      overflow: "hidden",
                      position: "relative",
                    }),
                    t.splitText();
                  var e = 0.2 / t.splitH2.chars.length,
                    i = 0.2 / t.splitH3.words.length;
                  TweenMax.staggerTo(
                    t.splitH2.chars,
                    0.6,
                    { delay: 0.1, y: "100%", ease: Power3.easeIn, force3D: !0 },
                    e
                  ),
                    TweenMax.staggerTo(
                      t.splitH3.words,
                      0.6,
                      {
                        delay: 0.1,
                        y: "-300%",
                        ease: Power3.easeIn,
                        force3D: !0,
                      },
                      i
                    );
                }
              }),
              (t.showText = function () {
                if (t.DOM.h2.length) {
                  TweenMax.set(t.DOM.h2, {
                    overflow: "hidden",
                    position: "relative",
                  }),
                    TweenMax.set(t.DOM.h3, {
                      overflow: "hidden",
                      position: "relative",
                    }),
                    t.splitText();
                  var e = -(0.2 / t.splitH2.chars.length),
                    i = -(0.2 / t.splitH3.words.length);
                  TweenMax.staggerFrom(
                    t.splitH2.chars,
                    0.6,
                    {
                      delay: 0.3,
                      y: "100%",
                      ease: Power3.easeOut,
                      force3D: !0,
                    },
                    e
                  ),
                    TweenMax.staggerFrom(
                      t.splitH3.words,
                      0.6,
                      {
                        delay: 0.3,
                        y: "-300%",
                        ease: Power3.easeOut,
                        force3D: !0,
                      },
                      i
                    );
                }
              }),
              (t.openMask = function () {
                $("html").addClass("transitioning"), (t.running = !0), t.draw();
                var e = "booking" === t.dest ? 1 : 1.2,
                  i = "booking" === t.dest ? 1.2 : 4,
                  n = "booking" === t.dest ? Quad.easeOut : Linear.easeNone;
                return "booking" === W.currentPage
                  ? (TweenMax.set(W.bookingForm, { alpha: 0 }),
                    TweenMax.fromTo(
                      t.seashellDim,
                      4,
                      { scale: 1 },
                      { scale: 1.4, delay: 0.8, ease: n }
                    ),
                    TweenMax.set([t.rectPoints1.TL, t.rectPoints1.TR], {
                      y: 0,
                      delay: 0.8,
                    }),
                    void TweenMax.set([t.rectPoints2.BL, t.rectPoints2.BR], {
                      y: t.canvasH,
                      delay: 0.8,
                      onComplete: function () {
                        $("html").addClass("loading-page"),
                          t.loadPage(t.slug, t.dest);
                      },
                    }))
                  : (TweenMax.fromTo(
                      t.seashellDim,
                      i,
                      { scale: 0.8 },
                      { scale: e, ease: n }
                    ),
                    TweenMax.to(t.rectPoints1.TL, 1, {
                      y: 0,
                      ease: Expo.easeInOut,
                    }),
                    TweenMax.to(t.rectPoints1.TR, 1, {
                      y: 0,
                      ease: Expo.easeInOut,
                    }),
                    TweenMax.to(t.rectPoints2.BL, 1, {
                      y: t.canvasH,
                      ease: Expo.easeInOut,
                    }),
                    void TweenMax.to(t.rectPoints2.BR, 1, {
                      y: t.canvasH,
                      ease: Expo.easeInOut,
                      onComplete: function () {
                        $("html").addClass("loading-page"),
                          t.loadPage(t.slug, t.dest);
                      },
                    }));
              }),
              (t.closeMask = function () {
                return (
                  $("html").removeClass("transitioning loading-page"),
                  "booking" === t.dest
                    ? (TweenMax.set([t.rectPoints1.BL, t.rectPoints1.BR], {
                        y: 0,
                      }),
                      TweenMax.set([t.rectPoints2.TL, t.rectPoints2.TR], {
                        y: t.canvasH,
                      }),
                      void setTimeout(function () {
                        (t.running = !1), (W.transitioning = !1);
                      }, 100))
                    : (TweenMax.to(t.rectPoints1.BL, 1, {
                        y: 0,
                        ease: Expo.easeInOut,
                      }),
                      TweenMax.to(t.rectPoints1.BR, 1, {
                        y: 0,
                        ease: Expo.easeInOut,
                      }),
                      TweenMax.to(t.rectPoints2.TL, 1, {
                        y: t.canvasH,
                        ease: Expo.easeInOut,
                      }),
                      void TweenMax.to(t.rectPoints2.TR, 1, {
                        y: t.canvasH,
                        ease: Expo.easeInOut,
                        onComplete: function () {
                          setTimeout(function () {
                            (t.running = !1), (W.transitioning = !1);
                          }, 100);
                        },
                      }))
                );
              }),
              (t.clipImage = function (e, i, n, r, s) {
                t.ctx.save(),
                  t.ctx.clip(),
                  t.ctx.translate(i + r / 2, n + s / 2),
                  t.ctx.scale(t.seashellDim.scale, t.seashellDim.scale),
                  t.ctx.drawImage(e, -r / 2, -s / 2, r, s),
                  t.ctx.restore();
              }),
              (t.draw = function () {
                t.running &&
                  (t.ctx.clearRect(0, 0, t.canvasW, t.canvasH),
                  t.ctx.beginPath(),
                  t.ctx.moveTo(t.rectPoints1.TL.x, t.rectPoints1.TL.y),
                  t.ctx.lineTo(t.rectPoints1.TR.x, t.rectPoints1.TL.y),
                  t.ctx.lineTo(t.rectPoints1.BR.x, t.rectPoints1.BR.y),
                  t.ctx.lineTo(t.rectPoints1.BL.x, t.rectPoints1.BL.y),
                  t.ctx.moveTo(t.rectPoints2.TL.x, t.rectPoints2.TL.y),
                  t.ctx.lineTo(t.rectPoints2.TR.x, t.rectPoints2.TL.y),
                  t.ctx.lineTo(t.rectPoints2.BR.x, t.rectPoints2.BR.y),
                  t.ctx.lineTo(t.rectPoints2.BL.x, t.rectPoints2.BL.y),
                  t.ctx.closePath(),
                  (t.ctx.fillStyle = "#1a1a1a"),
                  t.ctx.fill(),
                  t.clipImage(
                    t.seashell,
                    t.seashellDim.posX,
                    t.seashellDim.posY,
                    t.seashellDim.width,
                    t.seashellDim.height
                  ),
                  requestAnimationFrame(t.draw));
              }),
              (t.loadPage = function (e, i) {
                $("title").load(e + " title", "", function () {
                  document.title = $(this).text();
                }),
                  $("#page-container").load(
                    e + " #page-container>*",
                    function () {
                      (W.currentPage = i),
                        $("body").attr("data-page-id", i),
                        W.track(e),
                        t.popstate || history.pushState(i, "", e),
                        t.scrollTop(),
                        W.onDocumentReady(W.currentPage),
                        W.onPageLoad(W.currentPage),
                        (t.DOM = {
                          h2: $(".section--left h2"),
                          h3: $(".section--left h3"),
                        }),
                        (W.secLeftGr = $(
                          ".section--left .background--gradient"
                        )),
                        setTimeout(function () {
                          t.showText(),
                            t.closeMask(),
                            e.indexOf("#") !== -1 &&
                              TweenMax.to(window, 1, {
                                delay: 0.5,
                                scrollTo: {
                                  y: W.homeSections[1].offsetTop - W.hH,
                                  autoKill: !1,
                                },
                                ease: Expo.easeInOut,
                              });
                        }, 100);
                    }
                  );
              }),
              (t.scrollTop = function () {
                TweenMax.set(window, { scrollTo: { y: 0 } });
              }),
              (t.onResize = function () {
                t.running ||
                  ((t.DOM.canvas = document.getElementById("c")),
                  t.setCanvasSize(),
                  t.centerSeashell(),
                  t.getRectPoints());
              }),
              t.init();
          };
        },
        {},
      ],
    },
    {},
    [1]
  );
