import { c as DC, O as oC } from "./ui.4498bf0c.js";
(function() {
  var x;
  function U(C) {
    var Q = 0;
    return function() {
      return Q < C.length ? { done: !1, value: C[Q++] } : { done: !0 };
    };
  }
  var G = typeof Object.defineProperties == "function" ? Object.defineProperty : function(C, Q, E) {
    return C == Array.prototype || C == Object.prototype || (C[Q] = E.value), C;
  };
  function l(C) {
    C = [typeof globalThis == "object" && globalThis, C, typeof window == "object" && window, typeof self == "object" && self, typeof DC == "object" && DC];
    for (var Q = 0; Q < C.length; ++Q) {
      var E = C[Q];
      if (E && E.Math == Math)
        return E;
    }
    throw Error("Cannot find global object");
  }
  var f = l(this);
  function r(C, Q) {
    if (Q)
      A: {
        var E = f;
        C = C.split(".");
        for (var R = 0; R < C.length - 1; R++) {
          var s = C[R];
          if (!(s in E))
            break A;
          E = E[s];
        }
        C = C[C.length - 1], R = E[C], Q = Q(R), Q != R && Q != null && G(E, C, { configurable: !0, writable: !0, value: Q });
      }
  }
  r("Symbol", function(C) {
    function Q(M) {
      if (this instanceof Q)
        throw new TypeError("Symbol is not a constructor");
      return new E(R + (M || "") + "_" + s++, M);
    }
    function E(M, y) {
      this.g = M, G(this, "description", { configurable: !0, writable: !0, value: y });
    }
    if (C)
      return C;
    E.prototype.toString = function() {
      return this.g;
    };
    var R = "jscomp_symbol_" + (1e9 * Math.random() >>> 0) + "_", s = 0;
    return Q;
  }), r("Symbol.iterator", function(C) {
    if (C)
      return C;
    C = Symbol("Symbol.iterator");
    for (var Q = "Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array".split(" "), E = 0; E < Q.length; E++) {
      var R = f[Q[E]];
      typeof R == "function" && typeof R.prototype[C] != "function" && G(R.prototype, C, { configurable: !0, writable: !0, value: function() {
        return T(U(this));
      } });
    }
    return C;
  });
  function T(C) {
    return C = { next: C }, C[Symbol.iterator] = function() {
      return this;
    }, C;
  }
  function V(C) {
    var Q = typeof Symbol < "u" && Symbol.iterator && C[Symbol.iterator];
    return Q ? Q.call(C) : { next: U(C) };
  }
  function RA(C) {
    if (!(C instanceof Array)) {
      C = V(C);
      for (var Q, E = []; !(Q = C.next()).done; )
        E.push(Q.value);
      C = E;
    }
    return C;
  }
  var W = typeof Object.create == "function" ? Object.create : function(C) {
    function Q() {
    }
    return Q.prototype = C, new Q();
  }, AA;
  if (typeof Object.setPrototypeOf == "function")
    AA = Object.setPrototypeOf;
  else {
    var TA;
    A: {
      var GA = { a: !0 }, lA = {};
      try {
        lA.__proto__ = GA, TA = lA.a;
        break A;
      } catch {
      }
      TA = !1;
    }
    AA = TA ? function(C, Q) {
      if (C.__proto__ = Q, C.__proto__ !== Q)
        throw new TypeError(C + " is not extensible");
      return C;
    } : null;
  }
  var hA = AA;
  function rA(C, Q) {
    if (C.prototype = W(Q.prototype), C.prototype.constructor = C, hA)
      hA(C, Q);
    else
      for (var E in Q)
        if (E != "prototype")
          if (Object.defineProperties) {
            var R = Object.getOwnPropertyDescriptor(Q, E);
            R && Object.defineProperty(C, E, R);
          } else
            C[E] = Q[E];
    C.ea = Q.prototype;
  }
  function dA() {
    this.l = !1, this.i = null, this.h = void 0, this.g = 1, this.s = this.m = 0, this.j = null;
  }
  function _A(C) {
    if (C.l)
      throw new TypeError("Generator is already running");
    C.l = !0;
  }
  dA.prototype.o = function(C) {
    this.h = C;
  };
  function H(C, Q) {
    C.j = { U: Q, V: !0 }, C.g = C.m || C.s;
  }
  dA.prototype.return = function(C) {
    this.j = { return: C }, this.g = this.s;
  };
  function d(C, Q, E) {
    return C.g = E, { value: Q };
  }
  function wA(C) {
    this.g = new dA(), this.h = C;
  }
  function ZI(C, Q) {
    _A(C.g);
    var E = C.g.i;
    return E ? CI(C, "return" in E ? E.return : function(R) {
      return { value: R, done: !0 };
    }, Q, C.g.return) : (C.g.return(Q), LA(C));
  }
  function CI(C, Q, E, R) {
    try {
      var s = Q.call(C.g.i, E);
      if (!(s instanceof Object))
        throw new TypeError("Iterator result " + s + " is not an object");
      if (!s.done)
        return C.g.l = !1, s;
      var M = s.value;
    } catch (y) {
      return C.g.i = null, H(C.g, y), LA(C);
    }
    return C.g.i = null, R.call(C.g, M), LA(C);
  }
  function LA(C) {
    for (; C.g.g; )
      try {
        var Q = C.h(C.g);
        if (Q)
          return C.g.l = !1, { value: Q.value, done: !1 };
      } catch (E) {
        C.g.h = void 0, H(C.g, E);
      }
    if (C.g.l = !1, C.g.j) {
      if (Q = C.g.j, C.g.j = null, Q.V)
        throw Q.U;
      return { value: Q.return, done: !0 };
    }
    return { value: void 0, done: !0 };
  }
  function EI(C) {
    this.next = function(Q) {
      return _A(C.g), C.g.i ? Q = CI(C, C.g.i.next, Q, C.g.o) : (C.g.o(Q), Q = LA(C)), Q;
    }, this.throw = function(Q) {
      return _A(C.g), C.g.i ? Q = CI(C, C.g.i.throw, Q, C.g.o) : (H(C.g, Q), Q = LA(C)), Q;
    }, this.return = function(Q) {
      return ZI(C, Q);
    }, this[Symbol.iterator] = function() {
      return this;
    };
  }
  function HA(C, Q) {
    return Q = new EI(new wA(Q)), hA && C.prototype && hA(Q, C.prototype), Q;
  }
  function UA(C, Q) {
    C instanceof String && (C += "");
    var E = 0, R = !1, s = { next: function() {
      if (!R && E < C.length) {
        var M = E++;
        return { value: Q(M, C[M]), done: !1 };
      }
      return R = !0, { done: !0, value: void 0 };
    } };
    return s[Symbol.iterator] = function() {
      return s;
    }, s;
  }
  var nA = typeof Object.assign == "function" ? Object.assign : function(C, Q) {
    for (var E = 1; E < arguments.length; E++) {
      var R = arguments[E];
      if (R)
        for (var s in R)
          Object.prototype.hasOwnProperty.call(R, s) && (C[s] = R[s]);
    }
    return C;
  };
  r("Object.assign", function(C) {
    return C || nA;
  }), r("Promise", function(C) {
    function Q(y) {
      this.h = 0, this.i = void 0, this.g = [], this.o = !1;
      var k = this.j();
      try {
        y(k.resolve, k.reject);
      } catch (c) {
        k.reject(c);
      }
    }
    function E() {
      this.g = null;
    }
    function R(y) {
      return y instanceof Q ? y : new Q(function(k) {
        k(y);
      });
    }
    if (C)
      return C;
    E.prototype.h = function(y) {
      if (this.g == null) {
        this.g = [];
        var k = this;
        this.i(function() {
          k.l();
        });
      }
      this.g.push(y);
    };
    var s = f.setTimeout;
    E.prototype.i = function(y) {
      s(y, 0);
    }, E.prototype.l = function() {
      for (; this.g && this.g.length; ) {
        var y = this.g;
        this.g = [];
        for (var k = 0; k < y.length; ++k) {
          var c = y[k];
          y[k] = null;
          try {
            c();
          } catch (e) {
            this.j(e);
          }
        }
      }
      this.g = null;
    }, E.prototype.j = function(y) {
      this.i(function() {
        throw y;
      });
    }, Q.prototype.j = function() {
      function y(e) {
        return function(m) {
          c || (c = !0, e.call(k, m));
        };
      }
      var k = this, c = !1;
      return { resolve: y(this.C), reject: y(this.l) };
    }, Q.prototype.C = function(y) {
      if (y === this)
        this.l(new TypeError("A Promise cannot resolve to itself"));
      else if (y instanceof Q)
        this.F(y);
      else {
        A:
          switch (typeof y) {
            case "object":
              var k = y != null;
              break A;
            case "function":
              k = !0;
              break A;
            default:
              k = !1;
          }
        k ? this.u(y) : this.m(y);
      }
    }, Q.prototype.u = function(y) {
      var k = void 0;
      try {
        k = y.then;
      } catch (c) {
        this.l(c);
        return;
      }
      typeof k == "function" ? this.G(k, y) : this.m(y);
    }, Q.prototype.l = function(y) {
      this.s(2, y);
    }, Q.prototype.m = function(y) {
      this.s(1, y);
    }, Q.prototype.s = function(y, k) {
      if (this.h != 0)
        throw Error("Cannot settle(" + y + ", " + k + "): Promise already settled in state" + this.h);
      this.h = y, this.i = k, this.h === 2 && this.D(), this.A();
    }, Q.prototype.D = function() {
      var y = this;
      s(function() {
        if (y.B()) {
          var k = f.console;
          typeof k < "u" && k.error(y.i);
        }
      }, 1);
    }, Q.prototype.B = function() {
      if (this.o)
        return !1;
      var y = f.CustomEvent, k = f.Event, c = f.dispatchEvent;
      return typeof c > "u" ? !0 : (typeof y == "function" ? y = new y("unhandledrejection", { cancelable: !0 }) : typeof k == "function" ? y = new k("unhandledrejection", { cancelable: !0 }) : (y = f.document.createEvent("CustomEvent"), y.initCustomEvent("unhandledrejection", !1, !0, y)), y.promise = this, y.reason = this.i, c(y));
    }, Q.prototype.A = function() {
      if (this.g != null) {
        for (var y = 0; y < this.g.length; ++y)
          M.h(this.g[y]);
        this.g = null;
      }
    };
    var M = new E();
    return Q.prototype.F = function(y) {
      var k = this.j();
      y.J(k.resolve, k.reject);
    }, Q.prototype.G = function(y, k) {
      var c = this.j();
      try {
        y.call(k, c.resolve, c.reject);
      } catch (e) {
        c.reject(e);
      }
    }, Q.prototype.then = function(y, k) {
      function c(_, X) {
        return typeof _ == "function" ? function(b) {
          try {
            e(_(b));
          } catch (O) {
            m(O);
          }
        } : X;
      }
      var e, m, FA = new Q(function(_, X) {
        e = _, m = X;
      });
      return this.J(c(y, e), c(k, m)), FA;
    }, Q.prototype.catch = function(y) {
      return this.then(void 0, y);
    }, Q.prototype.J = function(y, k) {
      function c() {
        switch (e.h) {
          case 1:
            y(e.i);
            break;
          case 2:
            k(e.i);
            break;
          default:
            throw Error("Unexpected state: " + e.h);
        }
      }
      var e = this;
      this.g == null ? M.h(c) : this.g.push(c), this.o = !0;
    }, Q.resolve = R, Q.reject = function(y) {
      return new Q(function(k, c) {
        c(y);
      });
    }, Q.race = function(y) {
      return new Q(function(k, c) {
        for (var e = V(y), m = e.next(); !m.done; m = e.next())
          R(m.value).J(k, c);
      });
    }, Q.all = function(y) {
      var k = V(y), c = k.next();
      return c.done ? R([]) : new Q(function(e, m) {
        function FA(b) {
          return function(O) {
            _[b] = O, X--, X == 0 && e(_);
          };
        }
        var _ = [], X = 0;
        do
          _.push(void 0), X++, R(c.value).J(FA(_.length - 1), m), c = k.next();
        while (!c.done);
      });
    }, Q;
  }), r("Object.is", function(C) {
    return C || function(Q, E) {
      return Q === E ? Q !== 0 || 1 / Q === 1 / E : Q !== Q && E !== E;
    };
  }), r("Array.prototype.includes", function(C) {
    return C || function(Q, E) {
      var R = this;
      R instanceof String && (R = String(R));
      var s = R.length;
      for (E = E || 0, 0 > E && (E = Math.max(E + s, 0)); E < s; E++) {
        var M = R[E];
        if (M === Q || Object.is(M, Q))
          return !0;
      }
      return !1;
    };
  }), r("String.prototype.includes", function(C) {
    return C || function(Q, E) {
      if (this == null)
        throw new TypeError("The 'this' value for String.prototype.includes must not be null or undefined");
      if (Q instanceof RegExp)
        throw new TypeError("First argument to String.prototype.includes must not be a regular expression");
      return this.indexOf(Q, E || 0) !== -1;
    };
  }), r("Array.prototype.keys", function(C) {
    return C || function() {
      return UA(this, function(Q) {
        return Q;
      });
    };
  });
  var iI = this || self;
  function SA(C, Q) {
    C = C.split(".");
    var E = iI;
    C[0] in E || typeof E.execScript > "u" || E.execScript("var " + C[0]);
    for (var R; C.length && (R = C.shift()); )
      C.length || Q === void 0 ? E[R] && E[R] !== Object.prototype[R] ? E = E[R] : E = E[R] = {} : E[R] = Q;
  }
  function qI(C, Q) {
    return Q = String.fromCharCode.apply(null, Q), C == null ? Q : C + Q;
  }
  var TI, wg = typeof TextDecoder < "u", tI, Fg = typeof TextEncoder < "u";
  function Rg(C) {
    if (Fg)
      C = (tI || (tI = new TextEncoder())).encode(C);
    else {
      var Q = void 0;
      Q = Q === void 0 ? !1 : Q;
      for (var E = 0, R = new Uint8Array(3 * C.length), s = 0; s < C.length; s++) {
        var M = C.charCodeAt(s);
        if (128 > M)
          R[E++] = M;
        else {
          if (2048 > M)
            R[E++] = M >> 6 | 192;
          else {
            if (55296 <= M && 57343 >= M) {
              if (56319 >= M && s < C.length) {
                var y = C.charCodeAt(++s);
                if (56320 <= y && 57343 >= y) {
                  M = 1024 * (M - 55296) + y - 56320 + 65536, R[E++] = M >> 18 | 240, R[E++] = M >> 12 & 63 | 128, R[E++] = M >> 6 & 63 | 128, R[E++] = M & 63 | 128;
                  continue;
                } else
                  s--;
              }
              if (Q)
                throw Error("Found an unpaired surrogate");
              M = 65533;
            }
            R[E++] = M >> 12 | 224, R[E++] = M >> 6 & 63 | 128;
          }
          R[E++] = M & 63 | 128;
        }
      }
      C = R.subarray(0, E);
    }
    return C;
  }
  var Ng = {}, rI = null;
  function Xg(C, Q) {
    Q === void 0 && (Q = 0), sg(), Q = Ng[Q];
    for (var E = Array(Math.floor(C.length / 3)), R = Q[64] || "", s = 0, M = 0; s < C.length - 2; s += 3) {
      var y = C[s], k = C[s + 1], c = C[s + 2], e = Q[y >> 2];
      y = Q[(y & 3) << 4 | k >> 4], k = Q[(k & 15) << 2 | c >> 6], c = Q[c & 63], E[M++] = e + y + k + c;
    }
    switch (e = 0, c = R, C.length - s) {
      case 2:
        e = C[s + 1], c = Q[(e & 15) << 2] || R;
      case 1:
        C = C[s], E[M] = Q[C >> 2] + Q[(C & 3) << 4 | e >> 4] + c + R;
    }
    return E.join("");
  }
  function Og(C) {
    var Q = C.length, E = 3 * Q / 4;
    E % 3 ? E = Math.floor(E) : "=.".indexOf(C[Q - 1]) != -1 && (E = "=.".indexOf(C[Q - 2]) != -1 ? E - 2 : E - 1);
    var R = new Uint8Array(E), s = 0;
    return pg(C, function(M) {
      R[s++] = M;
    }), R.subarray(0, s);
  }
  function pg(C, Q) {
    function E(c) {
      for (; R < C.length; ) {
        var e = C.charAt(R++), m = rI[e];
        if (m != null)
          return m;
        if (!/^[\s\xa0]*$/.test(e))
          throw Error("Unknown base64 encoding at char: " + e);
      }
      return c;
    }
    sg();
    for (var R = 0; ; ) {
      var s = E(-1), M = E(0), y = E(64), k = E(64);
      if (k === 64 && s === -1)
        break;
      Q(s << 2 | M >> 4), y != 64 && (Q(M << 4 & 240 | y >> 2), k != 64 && Q(y << 6 & 192 | k));
    }
  }
  function sg() {
    if (!rI) {
      rI = {};
      for (var C = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), Q = ["+/=", "+/", "-_=", "-_.", "-_"], E = 0; 5 > E; E++) {
        var R = C.concat(Q[E].split(""));
        Ng[E] = R;
        for (var s = 0; s < R.length; s++) {
          var M = R[s];
          rI[M] === void 0 && (rI[M] = s);
        }
      }
    }
  }
  var ug = typeof Uint8Array.prototype.slice == "function", hg;
  function nI(C, Q, E) {
    return Q === E ? hg || (hg = new Uint8Array(0)) : ug ? C.slice(Q, E) : new Uint8Array(C.subarray(Q, E));
  }
  var aA = 0, JA = 0;
  function OA(C, Q) {
    Q = Q === void 0 ? {} : Q, Q = Q.v === void 0 ? !1 : Q.v, this.h = null, this.g = this.j = this.l = 0, this.m = !1, this.v = Q, C && eI(this, C);
  }
  function eI(C, Q) {
    Q = Q.constructor === Uint8Array ? Q : Q.constructor === ArrayBuffer ? new Uint8Array(Q) : Q.constructor === Array ? new Uint8Array(Q) : Q.constructor === String ? Og(Q) : Q instanceof Uint8Array ? new Uint8Array(Q.buffer, Q.byteOffset, Q.byteLength) : new Uint8Array(0), C.h = Q, C.l = 0, C.j = C.h.length, C.g = C.l;
  }
  OA.prototype.reset = function() {
    this.g = this.l;
  };
  function n(C) {
    for (var Q = 128, E = 0, R = 0, s = 0; 4 > s && 128 <= Q; s++)
      Q = C.h[C.g++], E |= (Q & 127) << 7 * s;
    if (128 <= Q && (Q = C.h[C.g++], E |= (Q & 127) << 28, R |= (Q & 127) >> 4), 128 <= Q)
      for (s = 0; 5 > s && 128 <= Q; s++)
        Q = C.h[C.g++], R |= (Q & 127) << 7 * s + 3;
    if (128 > Q)
      return C = E >>> 0, Q = R >>> 0, (R = Q & 2147483648) && (C = ~C + 1 >>> 0, Q = ~Q >>> 0, C == 0 && (Q = Q + 1 >>> 0)), C = 4294967296 * Q + (C >>> 0), R ? -C : C;
    C.m = !0;
  }
  OA.prototype.i = function() {
    var C = this.h, Q = C[this.g], E = Q & 127;
    return 128 > Q ? (this.g += 1, E) : (Q = C[this.g + 1], E |= (Q & 127) << 7, 128 > Q ? (this.g += 2, E) : (Q = C[this.g + 2], E |= (Q & 127) << 14, 128 > Q ? (this.g += 3, E) : (Q = C[this.g + 3], E |= (Q & 127) << 21, 128 > Q ? (this.g += 4, E) : (Q = C[this.g + 4], E |= (Q & 15) << 28, 128 > Q ? (this.g += 5, E >>> 0) : (this.g += 5, 128 <= C[this.g++] && 128 <= C[this.g++] && 128 <= C[this.g++] && 128 <= C[this.g++] && this.g++, E)))));
  }, OA.prototype.o = function() {
    var C = this.h[this.g], Q = this.h[this.g + 1], E = this.h[this.g + 2], R = this.h[this.g + 3];
    return this.g += 4, E = (C << 0 | Q << 8 | E << 16 | R << 24) >>> 0, C = 2 * (E >> 31) + 1, Q = E >>> 23 & 255, E &= 8388607, Q == 255 ? E ? NaN : 1 / 0 * C : Q == 0 ? C * Math.pow(2, -149) * E : C * Math.pow(2, Q - 150) * (E + Math.pow(2, 23));
  };
  var pA = [];
  function lI() {
    this.g = new Uint8Array(64), this.h = 0;
  }
  lI.prototype.push = function(C) {
    if (!(this.h + 1 < this.g.length)) {
      var Q = this.g;
      this.g = new Uint8Array(Math.ceil(1 + 2 * this.g.length)), this.g.set(Q);
    }
    this.g[this.h++] = C;
  }, lI.prototype.length = function() {
    return this.h;
  }, lI.prototype.end = function() {
    var C = this.g, Q = this.h;
    return this.h = 0, nI(C, 0, Q);
  };
  function $A(C, Q) {
    for (; 127 < Q; )
      C.push(Q & 127 | 128), Q >>>= 7;
    C.push(Q);
  }
  function KI(C) {
    var Q = {}, E = Q.N === void 0 ? !1 : Q.N;
    this.o = { v: Q.v === void 0 ? !1 : Q.v }, this.N = E, Q = this.o, pA.length ? (E = pA.pop(), Q && (E.v = Q.v), C && eI(E, C), C = E) : C = new OA(C, Q), this.g = C, this.m = this.g.g, this.h = this.i = this.l = -1, this.j = !1;
  }
  KI.prototype.reset = function() {
    this.g.reset(), this.h = this.l = -1;
  };
  function mA(C) {
    var Q = C.g;
    if ((Q = Q.g == Q.j) || (Q = C.j) || (Q = C.g, Q = Q.m || 0 > Q.g || Q.g > Q.j), Q)
      return !1;
    C.m = C.g.g, Q = C.g.i();
    var E = Q & 7;
    return E != 0 && E != 5 && E != 1 && E != 2 && E != 3 && E != 4 ? (C.j = !0, !1) : (C.i = Q, C.l = Q >>> 3, C.h = E, !0);
  }
  function DI(C) {
    switch (C.h) {
      case 0:
        if (C.h != 0)
          DI(C);
        else {
          for (C = C.g; C.h[C.g] & 128; )
            C.g++;
          C.g++;
        }
        break;
      case 1:
        C.h != 1 ? DI(C) : (C = C.g, C.g += 8);
        break;
      case 2:
        if (C.h != 2)
          DI(C);
        else {
          var Q = C.g.i();
          C = C.g, C.g += Q;
        }
        break;
      case 5:
        C.h != 5 ? DI(C) : (C = C.g, C.g += 4);
        break;
      case 3:
        Q = C.l;
        do {
          if (!mA(C)) {
            C.j = !0;
            break;
          }
          if (C.h == 4) {
            C.l != Q && (C.j = !0);
            break;
          }
          DI(C);
        } while (1);
        break;
      default:
        C.j = !0;
    }
  }
  function dI(C, Q, E) {
    var R = C.g.j, s = C.g.i(), M = C.g.g + s;
    if (C.g.j = M, E(Q, C), E = M - C.g.g, E !== 0)
      throw Error("Message parsing ended unexpectedly. Expected to read " + s + " bytes, instead read " + (s - E) + " bytes, either the data ended unexpectedly or the message misreported its own length");
    return C.g.g = M, C.g.j = R, Q;
  }
  function uA(C) {
    return C.g.o();
  }
  function vI(C) {
    var Q = C.g.i();
    C = C.g;
    var E = C.g;
    C.g += Q, C = C.h;
    var R;
    if (wg)
      (R = TI) || (R = TI = new TextDecoder("utf-8", { fatal: !1 })), R = R.decode(C.subarray(E, E + Q));
    else {
      Q = E + Q;
      for (var s = [], M = null, y, k, c; E < Q; )
        y = C[E++], 128 > y ? s.push(y) : 224 > y ? E >= Q ? s.push(65533) : (k = C[E++], 194 > y || (k & 192) !== 128 ? (E--, s.push(65533)) : s.push((y & 31) << 6 | k & 63)) : 240 > y ? E >= Q - 1 ? s.push(65533) : (k = C[E++], (k & 192) !== 128 || y === 224 && 160 > k || y === 237 && 160 <= k || ((R = C[E++]) & 192) !== 128 ? (E--, s.push(65533)) : s.push((y & 15) << 12 | (k & 63) << 6 | R & 63)) : 244 >= y ? E >= Q - 2 ? s.push(65533) : (k = C[E++], (k & 192) !== 128 || (y << 28) + (k - 144) >> 30 !== 0 || ((R = C[E++]) & 192) !== 128 || ((c = C[E++]) & 192) !== 128 ? (E--, s.push(65533)) : (y = (y & 7) << 18 | (k & 63) << 12 | (R & 63) << 6 | c & 63, y -= 65536, s.push((y >> 10 & 1023) + 55296, (y & 1023) + 56320))) : s.push(65533), 8192 <= s.length && (M = qI(M, s), s.length = 0);
      R = qI(M, s);
    }
    return R;
  }
  function ag(C, Q, E) {
    var R = C.g.i();
    for (R = C.g.g + R; C.g.g < R; )
      E.push(Q.call(C.g));
  }
  function yg(C, Q) {
    C.h == 2 ? ag(C, OA.prototype.o, Q) : Q.push(uA(C));
  }
  function _I() {
    this.h = [], this.i = 0, this.g = new lI();
  }
  function UI(C, Q) {
    Q.length !== 0 && (C.h.push(Q), C.i += Q.length);
  }
  function $I(C) {
    var Q = C.i + C.g.length();
    if (Q === 0)
      return new Uint8Array(0);
    Q = new Uint8Array(Q);
    for (var E = C.h, R = E.length, s = 0, M = 0; M < R; M++) {
      var y = E[M];
      y.length !== 0 && (Q.set(y, s), s += y.length);
    }
    return E = C.g, R = E.h, R !== 0 && (Q.set(E.g.subarray(0, R), s), E.h = 0), C.h = [Q], Q;
  }
  function jA(C, Q, E) {
    if (E != null) {
      $A(C.g, 8 * Q + 5), C = C.g;
      var R = E;
      R = (E = 0 > R ? 1 : 0) ? -R : R, R === 0 ? 0 < 1 / R ? aA = JA = 0 : (JA = 0, aA = 2147483648) : isNaN(R) ? (JA = 0, aA = 2147483647) : 34028234663852886e22 < R ? (JA = 0, aA = (E << 31 | 2139095040) >>> 0) : 11754943508222875e-54 > R ? (R = Math.round(R / Math.pow(2, -149)), JA = 0, aA = (E << 31 | R) >>> 0) : (Q = Math.floor(Math.log(R) / Math.LN2), R *= Math.pow(2, -Q), R = Math.round(8388608 * R), 16777216 <= R && ++Q, JA = 0, aA = (E << 31 | Q + 127 << 23 | R & 8388607) >>> 0), E = aA, C.push(E >>> 0 & 255), C.push(E >>> 8 & 255), C.push(E >>> 16 & 255), C.push(E >>> 24 & 255);
    }
  }
  var BI = typeof Uint8Array == "function";
  function MI(C, Q, E) {
    if (C != null)
      return typeof C == "object" ? BI && C instanceof Uint8Array ? E(C) : jg(C, Q, E) : Q(C);
  }
  function jg(C, Q, E) {
    if (Array.isArray(C)) {
      for (var R = Array(C.length), s = 0; s < C.length; s++)
        R[s] = MI(C[s], Q, E);
      return Array.isArray(C) && C.W && YA(R), R;
    }
    R = {};
    for (s in C)
      R[s] = MI(C[s], Q, E);
    return R;
  }
  function mI(C) {
    return typeof C == "number" ? isFinite(C) ? C : String(C) : C;
  }
  var fI = { W: { value: !0, configurable: !0 } };
  function YA(C) {
    return Array.isArray(C) && !Object.isFrozen(C) && Object.defineProperties(C, fI), C;
  }
  var Ag;
  function tA(C, Q, E) {
    var R = Ag;
    Ag = null, C || (C = R), R = this.constructor.ca, C || (C = R ? [R] : []), this.j = R ? 0 : -1, this.m = this.g = null, this.h = C;
    A: {
      if (R = this.h.length, C = R - 1, R && (R = this.h[C], !(R === null || typeof R != "object" || Array.isArray(R) || BI && R instanceof Uint8Array))) {
        this.l = C - this.j, this.i = R;
        break A;
      }
      Q !== void 0 && -1 < Q ? (this.l = Math.max(Q, C + 1 - this.j), this.i = null) : this.l = Number.MAX_VALUE;
    }
    if (E)
      for (Q = 0; Q < E.length; Q++)
        C = E[Q], C < this.l ? (C += this.j, (R = this.h[C]) ? YA(R) : this.h[C] = kI) : (Kg(this), (R = this.i[C]) ? YA(R) : this.i[C] = kI);
  }
  var kI = Object.freeze(YA([]));
  function Kg(C) {
    var Q = C.l + C.j;
    C.h[Q] || (C.i = C.h[Q] = {});
  }
  function yA(C, Q, E) {
    return Q === -1 ? null : (E === void 0 ? 0 : E) || Q >= C.l ? C.i ? C.i[Q] : void 0 : C.h[Q + C.j];
  }
  function xA(C, Q) {
    var E = E === void 0 ? !1 : E, R = yA(C, Q, E);
    return R == null && (R = kI), R === kI && (R = YA([]), Z(C, Q, R, E)), R;
  }
  function Ig(C) {
    var Q = xA(C, 3);
    if (C.m || (C.m = {}), !C.m[3]) {
      for (var E = 0; E < Q.length; E++)
        Q[E] = +Q[E];
      C.m[3] = !0;
    }
    return Q;
  }
  function oI(C, Q, E) {
    return C = yA(C, Q), C == null ? E : C;
  }
  function PA(C, Q, E) {
    return C = yA(C, Q), C = C == null ? C : +C, C == null ? E === void 0 ? 0 : E : C;
  }
  function Z(C, Q, E, R) {
    (R === void 0 ? 0 : R) || Q >= C.l ? (Kg(C), C.i[Q] = E) : C.h[Q + C.j] = E;
  }
  function zA(C, Q, E) {
    if (E === -1)
      return null;
    if (C.g || (C.g = {}), !C.g[E]) {
      var R = yA(C, E, !1);
      R && (C.g[E] = new Q(R));
    }
    return C.g[E];
  }
  function SI(C, Q) {
    C.g || (C.g = {});
    var E = C.g[1];
    if (!E) {
      var R = xA(C, 1);
      E = [];
      for (var s = 0; s < R.length; s++)
        E[s] = new Q(R[s]);
      C.g[1] = E;
    }
    return E;
  }
  function GI(C, Q, E) {
    var R = R === void 0 ? !1 : R;
    C.g || (C.g = {});
    var s = E && a(E);
    C.g[Q] = E, Z(C, Q, s, R);
  }
  function Ug(C, Q, E, R) {
    var s = SI(C, E);
    Q = Q || new E(), C = xA(C, 1), R != null ? (s.splice(R, 0, Q), C.splice(R, 0, a(Q))) : (s.push(Q), C.push(a(Q)));
  }
  tA.prototype.toJSON = function() {
    var C = a(this);
    return jg(C, mI, Xg);
  };
  function a(C, Q) {
    if (C.g)
      for (var E in C.g) {
        var R = C.g[E];
        if (Array.isArray(R))
          for (var s = 0; s < R.length; s++)
            R[s] && a(R[s]);
        else
          R && a(R);
      }
    return C.h;
  }
  tA.prototype.toString = function() {
    return a(this).toString();
  };
  function JI(C, Q) {
    if (C = C.o) {
      UI(Q, Q.g.end());
      for (var E = 0; E < C.length; E++)
        UI(Q, C[E]);
    }
  }
  function MA(C, Q) {
    if (Q.h == 4)
      return !1;
    var E = Q.m;
    return DI(Q), Q.N || (Q = nI(Q.g.h, E, Q.g.g), (E = C.o) ? E.push(Q) : C.o = [Q]), !0;
  }
  function wI(C) {
    tA.call(this, C, -1, Pg);
  }
  rA(wI, tA), wI.prototype.getRows = function() {
    return yA(this, 1);
  }, wI.prototype.getCols = function() {
    return yA(this, 2);
  }, wI.prototype.getPackedDataList = function() {
    return Ig(this);
  }, wI.prototype.getLayout = function() {
    return oI(this, 4, 0);
  };
  function NC(C, Q) {
    for (; mA(Q); )
      switch (Q.i) {
        case 8:
          var E = Q.g.i();
          Z(C, 1, E);
          break;
        case 16:
          E = Q.g.i(), Z(C, 2, E);
          break;
        case 29:
        case 26:
          yg(Q, C.getPackedDataList());
          break;
        case 32:
          E = n(Q.g), Z(C, 4, E);
          break;
        default:
          if (!MA(C, Q))
            return C;
      }
    return C;
  }
  var Pg = [3];
  function WA(C, Q) {
    var E = void 0;
    return new (E || (E = Promise))(function(R, s) {
      function M(c) {
        try {
          k(Q.next(c));
        } catch (e) {
          s(e);
        }
      }
      function y(c) {
        try {
          k(Q.throw(c));
        } catch (e) {
          s(e);
        }
      }
      function k(c) {
        c.done ? R(c.value) : new E(function(e) {
          e(c.value);
        }).then(M, y);
      }
      k((Q = Q.apply(C, void 0)).next());
    });
  }
  function VI(C) {
    tA.call(this, C);
  }
  rA(VI, tA);
  function Mg(C, Q) {
    for (; mA(Q); )
      switch (Q.i) {
        case 8:
          var E = Q.g.i();
          Z(C, 1, E);
          break;
        case 21:
          E = uA(Q), Z(C, 2, E);
          break;
        case 26:
          E = vI(Q), Z(C, 3, E);
          break;
        case 34:
          E = vI(Q), Z(C, 4, E);
          break;
        default:
          if (!MA(C, Q))
            return C;
      }
    return C;
  }
  function iA(C) {
    tA.call(this, C, -1, zg);
  }
  rA(iA, tA), iA.prototype.addClassification = function(C, Q) {
    return Ug(this, C, VI, Q), this;
  };
  var zg = [1];
  function ZA(C) {
    tA.call(this, C);
  }
  rA(ZA, tA);
  function FI(C, Q) {
    for (; mA(Q); )
      switch (Q.i) {
        case 13:
          var E = uA(Q);
          Z(C, 1, E);
          break;
        case 21:
          E = uA(Q), Z(C, 2, E);
          break;
        case 29:
          E = uA(Q), Z(C, 3, E);
          break;
        case 37:
          E = uA(Q), Z(C, 4, E);
          break;
        case 45:
          E = uA(Q), Z(C, 5, E);
          break;
        default:
          if (!MA(C, Q))
            return C;
      }
    return C;
  }
  function kg(C) {
    tA.call(this, C, -1, D);
  }
  rA(kg, tA);
  function p(C) {
    A: {
      var Q = new kg();
      for (C = new KI(C); mA(C); )
        switch (C.i) {
          case 10:
            var E = dI(C, new ZA(), FI);
            Ug(Q, E, ZA, void 0);
            break;
          default:
            if (!MA(Q, C))
              break A;
        }
    }
    return Q;
  }
  var D = [1];
  function kA(C) {
    tA.call(this, C);
  }
  rA(kA, tA);
  function RI(C) {
    tA.call(this, C, -1, _g);
  }
  rA(RI, tA), RI.prototype.getVertexType = function() {
    return oI(this, 1, 0);
  }, RI.prototype.getPrimitiveType = function() {
    return oI(this, 2, 0);
  }, RI.prototype.getVertexBufferList = function() {
    return Ig(this);
  }, RI.prototype.getIndexBufferList = function() {
    return xA(this, 4);
  };
  function vg(C, Q) {
    for (; mA(Q); )
      switch (Q.i) {
        case 8:
          var E = n(Q.g);
          Z(C, 1, E);
          break;
        case 16:
          E = n(Q.g), Z(C, 2, E);
          break;
        case 29:
        case 26:
          yg(Q, C.getVertexBufferList());
          break;
        case 32:
        case 34:
          E = Q;
          var R = C.getIndexBufferList();
          E.h == 2 ? ag(E, OA.prototype.i, R) : R.push(E.g.i());
          break;
        default:
          if (!MA(C, Q))
            return C;
      }
    return C;
  }
  var _g = [3, 4];
  function NI(C) {
    tA.call(this, C);
  }
  rA(NI, tA), NI.prototype.getMesh = function() {
    return zA(this, RI, 1);
  }, NI.prototype.getPoseTransformMatrix = function() {
    return zA(this, wI, 2);
  };
  function bI(C) {
    A: {
      var Q = new NI();
      for (C = new KI(C); mA(C); )
        switch (C.i) {
          case 10:
            var E = dI(C, new RI(), vg);
            GI(Q, 1, E);
            break;
          case 18:
            E = dI(C, new wI(), NC), GI(Q, 2, E);
            break;
          default:
            if (!MA(Q, C))
              break A;
        }
    }
    return Q;
  }
  function sI(C, Q, E) {
    if (E = C.createShader(E === 0 ? C.VERTEX_SHADER : C.FRAGMENT_SHADER), C.shaderSource(E, Q), C.compileShader(E), !C.getShaderParameter(E, C.COMPILE_STATUS))
      throw Error(`Could not compile WebGL shader.

` + C.getShaderInfoLog(E));
    return E;
  }
  function YI(C) {
    return SI(C, VI).map(function(Q) {
      return { index: oI(Q, 1, 0), Y: PA(Q, 2), label: yA(Q, 3) != null ? oI(Q, 3, "") : void 0, displayName: yA(Q, 4) != null ? oI(Q, 4, "") : void 0 };
    });
  }
  function QI(C) {
    return { x: PA(C, 1), y: PA(C, 2), z: PA(C, 3), visibility: yA(C, 4) != null ? PA(C, 4) : void 0 };
  }
  function cI(C, Q) {
    this.h = C, this.g = Q, this.l = 0;
  }
  function Sg(C, Q, E) {
    return $g(C, Q), typeof C.g.canvas.transferToImageBitmap == "function" ? Promise.resolve(C.g.canvas.transferToImageBitmap()) : E ? Promise.resolve(C.g.canvas) : typeof createImageBitmap == "function" ? createImageBitmap(C.g.canvas) : (C.i === void 0 && (C.i = document.createElement("canvas")), new Promise(function(R) {
      C.i.height = C.g.canvas.height, C.i.width = C.g.canvas.width, C.i.getContext("2d", {}).drawImage(C.g.canvas, 0, 0, C.g.canvas.width, C.g.canvas.height), R(C.i);
    }));
  }
  function $g(C, Q) {
    var E = C.g;
    if (C.m === void 0) {
      var R = sI(E, `
  attribute vec2 aVertex;
  attribute vec2 aTex;
  varying vec2 vTex;
  void main(void) {
    gl_Position = vec4(aVertex, 0.0, 1.0);
    vTex = aTex;
  }`, 0), s = sI(E, `
  precision mediump float;
  varying vec2 vTex;
  uniform sampler2D sampler0;
  void main(){
    gl_FragColor = texture2D(sampler0, vTex);
  }`, 1), M = E.createProgram();
      if (E.attachShader(M, R), E.attachShader(M, s), E.linkProgram(M), !E.getProgramParameter(M, E.LINK_STATUS))
        throw Error(`Could not compile WebGL program.

` + E.getProgramInfoLog(M));
      R = C.m = M, E.useProgram(R), s = E.getUniformLocation(R, "sampler0"), C.j = { I: E.getAttribLocation(R, "aVertex"), H: E.getAttribLocation(R, "aTex"), da: s }, C.s = E.createBuffer(), E.bindBuffer(E.ARRAY_BUFFER, C.s), E.enableVertexAttribArray(C.j.I), E.vertexAttribPointer(C.j.I, 2, E.FLOAT, !1, 0, 0), E.bufferData(E.ARRAY_BUFFER, new Float32Array([-1, -1, -1, 1, 1, 1, 1, -1]), E.STATIC_DRAW), E.bindBuffer(E.ARRAY_BUFFER, null), C.o = E.createBuffer(), E.bindBuffer(E.ARRAY_BUFFER, C.o), E.enableVertexAttribArray(C.j.H), E.vertexAttribPointer(
        C.j.H,
        2,
        E.FLOAT,
        !1,
        0,
        0
      ), E.bufferData(E.ARRAY_BUFFER, new Float32Array([0, 1, 0, 0, 1, 0, 1, 1]), E.STATIC_DRAW), E.bindBuffer(E.ARRAY_BUFFER, null), E.uniform1i(s, 0);
    }
    R = C.j, E.useProgram(C.m), E.canvas.width = Q.width, E.canvas.height = Q.height, E.viewport(0, 0, Q.width, Q.height), E.activeTexture(E.TEXTURE0), C.h.bindTexture2d(Q.glName), E.enableVertexAttribArray(R.I), E.bindBuffer(E.ARRAY_BUFFER, C.s), E.vertexAttribPointer(R.I, 2, E.FLOAT, !1, 0, 0), E.enableVertexAttribArray(R.H), E.bindBuffer(E.ARRAY_BUFFER, C.o), E.vertexAttribPointer(
      R.H,
      2,
      E.FLOAT,
      !1,
      0,
      0
    ), E.bindFramebuffer(E.DRAW_FRAMEBUFFER ? E.DRAW_FRAMEBUFFER : E.FRAMEBUFFER, null), E.clearColor(0, 0, 0, 0), E.clear(E.COLOR_BUFFER_BIT), E.colorMask(!0, !0, !0, !0), E.drawArrays(E.TRIANGLE_FAN, 0, 4), E.disableVertexAttribArray(R.I), E.disableVertexAttribArray(R.H), E.bindBuffer(E.ARRAY_BUFFER, null), C.h.bindTexture2d(0);
  }
  function XI(C) {
    this.g = C;
  }
  var gg = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 2, 1, 0, 10, 9, 1, 7, 0, 65, 0, 253, 15, 26, 11]);
  function Cg(C, Q) {
    return Q + C;
  }
  function Bg(C, Q) {
    window[C] = Q;
  }
  function OI(C) {
    var Q = document.createElement("script");
    return Q.setAttribute("src", C), Q.setAttribute("crossorigin", "anonymous"), new Promise(function(E) {
      Q.addEventListener("load", function() {
        E();
      }, !1), Q.addEventListener("error", function() {
        E();
      }, !1), document.body.appendChild(Q);
    });
  }
  function XA() {
    return WA(this, function C() {
      return HA(C, function(Q) {
        switch (Q.g) {
          case 1:
            return Q.m = 2, d(Q, WebAssembly.instantiate(gg), 4);
          case 4:
            Q.g = 3, Q.m = 0;
            break;
          case 2:
            return Q.m = 0, Q.j = null, Q.return(!1);
          case 3:
            return Q.return(!0);
        }
      });
    });
  }
  function Qg(C) {
    if (this.g = C, this.listeners = {}, this.j = {}, this.F = {}, this.m = {}, this.s = {}, this.G = this.o = this.R = !0, this.C = Promise.resolve(), this.P = "", this.B = {}, this.locateFile = C && C.locateFile || Cg, typeof window == "object")
      var Q = window.location.pathname.toString().substring(0, window.location.pathname.toString().lastIndexOf("/")) + "/";
    else if (typeof location < "u")
      Q = location.pathname.toString().substring(0, location.pathname.toString().lastIndexOf("/")) + "/";
    else
      throw Error("solutions can only be loaded on a web page or in a web worker");
    if (this.S = Q, C.options) {
      Q = V(Object.keys(C.options));
      for (var E = Q.next(); !E.done; E = Q.next()) {
        E = E.value;
        var R = C.options[E].default;
        R !== void 0 && (this.j[E] = typeof R == "function" ? R() : R);
      }
    }
  }
  x = Qg.prototype, x.close = function() {
    return this.i && this.i.delete(), Promise.resolve();
  };
  function pI(C, Q) {
    return C.g.files === void 0 ? [] : typeof C.g.files == "function" ? C.g.files(Q) : C.g.files;
  }
  function AC(C) {
    return WA(C, function Q() {
      var E = this, R, s, M, y, k, c, e, m, FA, _, X;
      return HA(Q, function(b) {
        switch (b.g) {
          case 1:
            return R = E, E.R ? (s = pI(E, E.j), d(b, XA(), 2)) : b.return();
          case 2:
            if (M = b.h, typeof window == "object")
              return Bg("createMediapipeSolutionsWasm", { locateFile: E.locateFile }), Bg("createMediapipeSolutionsPackedAssets", { locateFile: E.locateFile }), c = s.filter(function(O) {
                return O.data !== void 0;
              }), e = s.filter(function(O) {
                return O.data === void 0;
              }), m = Promise.all(c.map(function(O) {
                var v = uI(R, O.url);
                if (O.path !== void 0) {
                  var IA = O.path;
                  v = v.then(function(eA) {
                    return R.overrideFile(IA, eA), Promise.resolve(eA);
                  });
                }
                return v;
              })), FA = Promise.all(e.map(function(O) {
                return O.simd === void 0 || O.simd && M || !O.simd && !M ? OI(R.locateFile(O.url, R.S)) : Promise.resolve();
              })).then(function() {
                return WA(R, function O() {
                  var v, IA, eA = this;
                  return HA(O, function(NA) {
                    if (NA.g == 1)
                      return v = window.createMediapipeSolutionsWasm, IA = window.createMediapipeSolutionsPackedAssets, d(NA, v(IA), 2);
                    eA.h = NA.h, NA.g = 0;
                  });
                });
              }), _ = function() {
                return WA(R, function O() {
                  var v = this;
                  return HA(O, function(IA) {
                    return v.g.graph && v.g.graph.url ? IA = d(IA, uI(v, v.g.graph.url), 0) : (IA.g = 0, IA = void 0), IA;
                  });
                });
              }(), d(b, Promise.all([FA, m, _]), 7);
            if (typeof importScripts != "function")
              throw Error("solutions can only be loaded on a web page or in a web worker");
            return y = s.filter(function(O) {
              return O.simd === void 0 || O.simd && M || !O.simd && !M;
            }).map(function(O) {
              return R.locateFile(O.url, R.S);
            }), importScripts.apply(null, RA(y)), d(b, createMediapipeSolutionsWasm(Module), 6);
          case 6:
            E.h = b.h, E.l = new OffscreenCanvas(1, 1), E.h.canvas = E.l, k = E.h.GL.createContext(
              E.l,
              { antialias: !1, alpha: !1, ba: typeof WebGL2RenderingContext < "u" ? 2 : 1 }
            ), E.h.GL.makeContextCurrent(k), b.g = 4;
            break;
          case 7:
            if (E.l = document.createElement("canvas"), X = E.l.getContext("webgl2", {}), !X && (X = E.l.getContext("webgl", {}), !X))
              return alert("Failed to create WebGL canvas context when passing video frame."), b.return();
            E.D = X, E.h.canvas = E.l, E.h.createContext(E.l, !0, !0, {});
          case 4:
            E.i = new E.h.SolutionWasm(), E.R = !1, b.g = 0;
        }
      });
    });
  }
  function Eg(C) {
    return WA(C, function Q() {
      var E = this, R, s, M, y, k, c, e, m;
      return HA(Q, function(FA) {
        if (FA.g == 1) {
          if (E.g.graph && E.g.graph.url && E.P === E.g.graph.url)
            return FA.return();
          if (E.o = !0, !E.g.graph || !E.g.graph.url) {
            FA.g = 2;
            return;
          }
          return E.P = E.g.graph.url, d(FA, uI(E, E.g.graph.url), 3);
        }
        for (FA.g != 2 && (R = FA.h, E.i.loadGraph(R)), s = V(Object.keys(E.B)), M = s.next(); !M.done; M = s.next())
          y = M.value, E.i.overrideFile(y, E.B[y]);
        if (E.B = {}, E.g.listeners)
          for (k = V(E.g.listeners), c = k.next(); !c.done; c = k.next())
            e = c.value, $(E, e);
        m = E.j, E.j = {}, E.setOptions(m), FA.g = 0;
      });
    });
  }
  x.reset = function() {
    return WA(this, function C() {
      var Q = this;
      return HA(C, function(E) {
        Q.i && (Q.i.reset(), Q.m = {}, Q.s = {}), E.g = 0;
      });
    });
  }, x.setOptions = function(C, Q) {
    var E = this;
    if (Q = Q || this.g.options) {
      for (var R = [], s = [], M = {}, y = V(Object.keys(C)), k = y.next(); !k.done; M = { K: M.K, L: M.L }, k = y.next()) {
        var c = k.value;
        c in this.j && this.j[c] === C[c] || (this.j[c] = C[c], k = Q[c], k !== void 0 && (k.onChange && (M.K = k.onChange, M.L = C[c], R.push(function(e) {
          return function() {
            return WA(E, function m() {
              var FA, _ = this;
              return HA(m, function(X) {
                if (X.g == 1)
                  return d(X, e.K(e.L), 2);
                FA = X.h, FA === !0 && (_.o = !0), X.g = 0;
              });
            });
          };
        }(M))), k.graphOptionXref && (c = { valueNumber: k.type === 1 ? C[c] : 0, valueBoolean: k.type === 0 ? C[c] : !1, valueString: k.type === 2 ? C[c] : "" }, k = Object.assign(Object.assign(Object.assign({}, { calculatorName: "", calculatorIndex: 0 }), k.graphOptionXref), c), s.push(k))));
      }
      (R.length !== 0 || s.length !== 0) && (this.o = !0, this.A = (this.A === void 0 ? [] : this.A).concat(s), this.u = (this.u === void 0 ? [] : this.u).concat(R));
    }
  };
  function IC(C) {
    return WA(C, function Q() {
      var E = this, R, s, M, y, k, c, e;
      return HA(Q, function(m) {
        switch (m.g) {
          case 1:
            if (!E.o)
              return m.return();
            if (!E.u) {
              m.g = 2;
              break;
            }
            R = V(E.u), s = R.next();
          case 3:
            if (s.done) {
              m.g = 5;
              break;
            }
            return M = s.value, d(m, M(), 4);
          case 4:
            s = R.next(), m.g = 3;
            break;
          case 5:
            E.u = void 0;
          case 2:
            if (E.A) {
              for (y = new E.h.GraphOptionChangeRequestList(), k = V(E.A), c = k.next(); !c.done; c = k.next())
                e = c.value, y.push_back(e);
              E.i.changeOptions(y), y.delete(), E.A = void 0;
            }
            E.o = !1, m.g = 0;
        }
      });
    });
  }
  x.initialize = function() {
    return WA(this, function C() {
      var Q = this;
      return HA(C, function(E) {
        return E.g == 1 ? d(E, AC(Q), 2) : E.g != 3 ? d(E, Eg(Q), 3) : d(E, IC(Q), 0);
      });
    });
  };
  function uI(C, Q) {
    return WA(C, function E() {
      var R = this, s, M;
      return HA(E, function(y) {
        return Q in R.F ? y.return(R.F[Q]) : (s = R.locateFile(Q, ""), M = fetch(s).then(function(k) {
          return k.arrayBuffer();
        }), R.F[Q] = M, y.return(M));
      });
    });
  }
  x.overrideFile = function(C, Q) {
    this.i ? this.i.overrideFile(C, Q) : this.B[C] = Q;
  }, x.clearOverriddenFiles = function() {
    this.B = {}, this.i && this.i.clearOverriddenFiles();
  }, x.send = function(C, Q) {
    return WA(this, function E() {
      var R = this, s, M, y, k, c, e, m, FA, _;
      return HA(E, function(X) {
        switch (X.g) {
          case 1:
            return R.g.inputs ? (s = 1e3 * (Q == null ? performance.now() : Q), d(X, R.C, 2)) : X.return();
          case 2:
            return d(X, R.initialize(), 3);
          case 3:
            for (M = new R.h.PacketDataList(), y = V(Object.keys(C)), k = y.next(); !k.done; k = y.next())
              if (c = k.value, e = R.g.inputs[c]) {
                A: {
                  var b = R, O = C[c];
                  switch (e.type) {
                    case "video":
                      var v = b.m[e.stream];
                      if (v || (v = new cI(b.h, b.D), b.m[e.stream] = v), b = v, b.l === 0 && (b.l = b.h.createTexture()), typeof HTMLVideoElement < "u" && O instanceof HTMLVideoElement) {
                        var IA = O.videoWidth;
                        v = O.videoHeight;
                      } else
                        typeof HTMLImageElement < "u" && O instanceof HTMLImageElement ? (IA = O.naturalWidth, v = O.naturalHeight) : (IA = O.width, v = O.height);
                      v = { glName: b.l, width: IA, height: v }, IA = b.g, IA.canvas.width = v.width, IA.canvas.height = v.height, IA.activeTexture(IA.TEXTURE0), b.h.bindTexture2d(b.l), IA.texImage2D(IA.TEXTURE_2D, 0, IA.RGBA, IA.RGBA, IA.UNSIGNED_BYTE, O), b.h.bindTexture2d(0), b = v;
                      break A;
                    case "detections":
                      for (v = b.m[e.stream], v || (v = new XI(b.h), b.m[e.stream] = v), b = v, b.data || (b.data = new b.g.DetectionListData()), b.data.reset(O.length), v = 0; v < O.length; ++v) {
                        IA = O[v];
                        var eA = b.data, NA = eA.setBoundingBox, fA = v, cA = IA.T, j = new kA();
                        Z(j, 1, cA.Z), Z(j, 2, cA.$), Z(j, 3, cA.height), Z(j, 4, cA.width), Z(j, 5, cA.rotation), Z(j, 6, cA.X);
                        var CA = cA = new _I();
                        jA(CA, 1, yA(j, 1)), jA(CA, 2, yA(j, 2)), jA(CA, 3, yA(j, 3)), jA(CA, 4, yA(j, 4)), jA(CA, 5, yA(j, 5));
                        var DA = yA(j, 6);
                        if (DA != null && DA != null) {
                          $A(CA.g, 48);
                          var u = CA.g, BA = DA;
                          DA = 0 > BA, BA = Math.abs(BA);
                          var oA = BA >>> 0;
                          for (BA = Math.floor((BA - oA) / 4294967296), BA >>>= 0, DA && (BA = ~BA >>> 0, oA = (~oA >>> 0) + 1, 4294967295 < oA && (oA = 0, BA++, 4294967295 < BA && (BA = 0))), aA = oA, JA = BA, DA = aA, oA = JA; 0 < oA || 127 < DA; )
                            u.push(DA & 127 | 128), DA = (DA >>> 7 | oA << 25) >>> 0, oA >>>= 7;
                          u.push(DA);
                        }
                        if (JI(j, CA), cA = $I(cA), NA.call(eA, fA, cA), IA.O)
                          for (eA = 0; eA < IA.O.length; ++eA)
                            j = IA.O[eA], CA = !!j.visibility, NA = b.data, fA = NA.addNormalizedLandmark, cA = v, j = Object.assign(Object.assign({}, j), { visibility: CA ? j.visibility : 0 }), CA = new ZA(), Z(CA, 1, j.x), Z(CA, 2, j.y), Z(CA, 3, j.z), j.visibility && Z(CA, 4, j.visibility), u = j = new _I(), jA(u, 1, yA(CA, 1)), jA(u, 2, yA(CA, 2)), jA(u, 3, yA(CA, 3)), jA(u, 4, yA(CA, 4)), jA(u, 5, yA(CA, 5)), JI(CA, u), j = $I(j), fA.call(NA, cA, j);
                        if (IA.M)
                          for (eA = 0; eA < IA.M.length; ++eA) {
                            if (NA = b.data, fA = NA.addClassification, cA = v, j = IA.M[eA], CA = new VI(), Z(CA, 2, j.Y), j.index && Z(CA, 1, j.index), j.label && Z(CA, 3, j.label), j.displayName && Z(CA, 4, j.displayName), u = j = new _I(), oA = yA(CA, 1), oA != null && oA != null)
                              if ($A(u.g, 8), DA = u.g, 0 <= oA)
                                $A(DA, oA);
                              else {
                                for (BA = 0; 9 > BA; BA++)
                                  DA.push(oA & 127 | 128), oA >>= 7;
                                DA.push(1);
                              }
                            jA(u, 2, yA(CA, 2)), DA = yA(CA, 3), DA != null && (DA = Rg(DA), $A(u.g, 26), $A(u.g, DA.length), UI(u, u.g.end()), UI(u, DA)), DA = yA(CA, 4), DA != null && (DA = Rg(DA), $A(u.g, 34), $A(u.g, DA.length), UI(u, u.g.end()), UI(u, DA)), JI(CA, u), j = $I(j), fA.call(NA, cA, j);
                          }
                      }
                      b = b.data;
                      break A;
                    default:
                      b = {};
                  }
                }
                switch (m = b, FA = e.stream, e.type) {
                  case "video":
                    M.pushTexture2d(Object.assign(Object.assign({}, m), { stream: FA, timestamp: s }));
                    break;
                  case "detections":
                    _ = m, _.stream = FA, _.timestamp = s, M.pushDetectionList(_);
                    break;
                  default:
                    throw Error("Unknown input config type: '" + e.type + "'");
                }
              }
            return R.i.send(M), d(X, R.C, 4);
          case 4:
            M.delete(), X.g = 0;
        }
      });
    });
  };
  function qA(C, Q, E) {
    return WA(C, function R() {
      var s, M, y, k, c, e, m = this, FA, _, X, b, O, v, IA, eA;
      return HA(R, function(NA) {
        switch (NA.g) {
          case 1:
            if (!E)
              return NA.return(Q);
            for (s = {}, M = 0, y = V(Object.keys(E)), k = y.next(); !k.done; k = y.next())
              c = k.value, e = E[c], typeof e != "string" && e.type === "texture" && Q[e.stream] !== void 0 && ++M;
            1 < M && (m.G = !1), FA = V(Object.keys(E)), k = FA.next();
          case 2:
            if (k.done) {
              NA.g = 4;
              break;
            }
            if (_ = k.value, X = E[_], typeof X == "string")
              return IA = s, eA = _, d(NA, LI(m, _, Q[X]), 14);
            if (b = Q[X.stream], X.type === "detection_list") {
              if (b) {
                for (var fA = b.getRectList(), cA = b.getLandmarksList(), j = b.getClassificationsList(), CA = [], DA = 0; DA < fA.size(); ++DA) {
                  var u = fA.get(DA);
                  A: {
                    var BA = new kA();
                    for (u = new KI(u); mA(u); )
                      switch (u.i) {
                        case 13:
                          var oA = uA(u);
                          Z(BA, 1, oA);
                          break;
                        case 21:
                          oA = uA(u), Z(BA, 2, oA);
                          break;
                        case 29:
                          oA = uA(u), Z(BA, 3, oA);
                          break;
                        case 37:
                          oA = uA(u), Z(BA, 4, oA);
                          break;
                        case 45:
                          oA = uA(u), Z(BA, 5, oA);
                          break;
                        case 48:
                          oA = n(u.g), Z(BA, 6, oA);
                          break;
                        default:
                          if (!MA(BA, u))
                            break A;
                      }
                  }
                  BA = { Z: PA(BA, 1), $: PA(BA, 2), height: PA(BA, 3), width: PA(BA, 4), rotation: PA(BA, 5, 0), X: oI(BA, 6, 0) }, u = SI(p(cA.get(DA)), ZA).map(QI);
                  var II = j.get(DA);
                  A:
                    for (oA = new iA(), II = new KI(II); mA(II); )
                      switch (II.i) {
                        case 10:
                          oA.addClassification(dI(II, new VI(), Mg));
                          break;
                        default:
                          if (!MA(oA, II))
                            break A;
                      }
                  BA = { T: BA, O: u, M: YI(oA) }, CA.push(BA);
                }
                fA = CA;
              } else
                fA = [];
              s[_] = fA, NA.g = 7;
              break;
            }
            if (X.type === "proto_list") {
              if (b) {
                for (fA = Array(b.size()), cA = 0; cA < b.size(); cA++)
                  fA[cA] = b.get(cA);
                b.delete();
              } else
                fA = [];
              s[_] = fA, NA.g = 7;
              break;
            }
            if (b === void 0) {
              NA.g = 3;
              break;
            }
            if (X.type === "float_list") {
              s[_] = b, NA.g = 7;
              break;
            }
            if (X.type === "proto") {
              s[_] = b, NA.g = 7;
              break;
            }
            if (X.type !== "texture")
              throw Error("Unknown output config type: '" + X.type + "'");
            return O = m.s[_], O || (O = new cI(m.h, m.D), m.s[_] = O), d(NA, Sg(O, b, m.G), 13);
          case 13:
            v = NA.h, s[_] = v;
          case 7:
            X.transform && s[_] && (s[_] = X.transform(s[_])), NA.g = 3;
            break;
          case 14:
            IA[eA] = NA.h;
          case 3:
            k = FA.next(), NA.g = 2;
            break;
          case 4:
            return NA.return(s);
        }
      });
    });
  }
  function LI(C, Q, E) {
    return WA(C, function R() {
      var s = this, M;
      return HA(R, function(y) {
        return typeof E == "number" || E instanceof Uint8Array || E instanceof s.h.Uint8BlobList ? y.return(E) : E instanceof s.h.Texture2dDataOut ? (M = s.s[Q], M || (M = new cI(s.h, s.D), s.s[Q] = M), y.return(Sg(M, E, s.G))) : y.return(void 0);
      });
    });
  }
  function $(C, Q) {
    for (var E = Q.name || "$", R = [].concat(RA(Q.wants)), s = new C.h.StringList(), M = V(Q.wants), y = M.next(); !y.done; y = M.next())
      s.push_back(y.value);
    M = C.h.PacketListener.implement({ onResults: function(k) {
      for (var c = {}, e = 0; e < Q.wants.length; ++e)
        c[R[e]] = k.get(e);
      var m = C.listeners[E];
      m && (C.C = qA(C, c, Q.outs).then(function(FA) {
        FA = m(FA);
        for (var _ = 0; _ < Q.wants.length; ++_) {
          var X = c[R[_]];
          typeof X == "object" && X.hasOwnProperty && X.hasOwnProperty("delete") && X.delete();
        }
        FA && (C.C = FA);
      }));
    } }), C.i.attachMultiListener(s, M), s.delete();
  }
  x.onResults = function(C, Q) {
    this.listeners[Q || "$"] = C;
  }, SA("Solution", Qg), SA("OptionType", { BOOL: 0, NUMBER: 1, aa: 2, 0: "BOOL", 1: "NUMBER", 2: "STRING" });
  function AI(C) {
    C = bI(C);
    var Q = C.getMesh();
    if (!Q)
      return C;
    var E = new Float32Array(Q.getVertexBufferList());
    Q.getVertexBufferList = function() {
      return E;
    };
    var R = new Uint32Array(Q.getIndexBufferList());
    return Q.getIndexBufferList = function() {
      return R;
    }, C;
  }
  var gC = { files: [{ url: "face_mesh_solution_packed_assets_loader.js" }, { simd: !0, url: "face_mesh_solution_simd_wasm_bin.js" }, { simd: !1, url: "face_mesh_solution_wasm_bin.js" }], graph: { url: "face_mesh.binarypb" }, listeners: [{ wants: ["multi_face_geometry", "image_transformed", "multi_face_landmarks"], outs: { image: "image_transformed", multiFaceGeometry: { type: "proto_list", stream: "multi_face_geometry", transform: function(C) {
    return C.map(AI);
  } }, multiFaceLandmarks: { type: "proto_list", stream: "multi_face_landmarks", transform: function(C) {
    return C.map(function(Q) {
      return SI(
        p(Q),
        ZA
      ).map(QI);
    });
  } } } }], inputs: { image: { type: "video", stream: "input_frames_gpu" } }, options: { useCpuInference: { type: 0, graphOptionXref: { calculatorType: "InferenceCalculator", fieldName: "use_cpu_inference" }, default: "iPad Simulator;iPhone Simulator;iPod Simulator;iPad;iPhone;iPod".split(";").includes(navigator.platform) || navigator.userAgent.includes("Mac") && "ontouchend" in document }, enableFaceGeometry: { type: 0, graphOptionXref: {
    calculatorName: "EnableFaceGeometryConstant",
    calculatorType: "ConstantSidePacketCalculator",
    fieldName: "bool_value"
  } }, selfieMode: { type: 0, graphOptionXref: { calculatorType: "GlScalerCalculator", calculatorIndex: 1, fieldName: "flip_horizontal" } }, maxNumFaces: { type: 1, graphOptionXref: { calculatorType: "ConstantSidePacketCalculator", calculatorName: "ConstantSidePacketCalculatorNumFaces", fieldName: "int_value" } }, refineLandmarks: { type: 0, graphOptionXref: { calculatorType: "ConstantSidePacketCalculator", calculatorName: "ConstantSidePacketCalculatorRefineLandmarks", fieldName: "bool_value" } }, minDetectionConfidence: {
    type: 1,
    graphOptionXref: { calculatorType: "TensorsToDetectionsCalculator", calculatorName: "facelandmarkfrontgpu__facedetectionshortrangegpu__facedetectionshortrangecommon__TensorsToDetectionsCalculator", fieldName: "min_score_thresh" }
  }, minTrackingConfidence: { type: 1, graphOptionXref: { calculatorType: "ThresholdingCalculator", calculatorName: "facelandmarkfrontgpu__facelandmarkgpu__ThresholdingCalculator", fieldName: "threshold" } }, cameraNear: { type: 1, graphOptionXref: {
    calculatorType: "FaceGeometryEnvGeneratorCalculator",
    fieldName: "near"
  } }, cameraFar: { type: 1, graphOptionXref: { calculatorType: "FaceGeometryEnvGeneratorCalculator", fieldName: "far" } }, cameraVerticalFovDegrees: { type: 1, graphOptionXref: { calculatorType: "FaceGeometryEnvGeneratorCalculator", fieldName: "vertical_fov_degrees" } } } }, Jg = [[61, 146], [146, 91], [91, 181], [181, 84], [84, 17], [17, 314], [314, 405], [405, 321], [321, 375], [375, 291], [61, 185], [185, 40], [40, 39], [39, 37], [37, 0], [0, 267], [267, 269], [269, 270], [270, 409], [409, 291], [78, 95], [95, 88], [88, 178], [178, 87], [87, 14], [14, 317], [317, 402], [402, 318], [318, 324], [324, 308], [78, 191], [191, 80], [80, 81], [81, 82], [82, 13], [13, 312], [312, 311], [311, 310], [310, 415], [415, 308]], Yg = [[263, 249], [249, 390], [390, 373], [373, 374], [374, 380], [380, 381], [381, 382], [382, 362], [263, 466], [466, 388], [388, 387], [387, 386], [
    386,
    385
  ], [385, 384], [384, 398], [398, 362]], jI = [[276, 283], [283, 282], [282, 295], [295, 285], [300, 293], [293, 334], [334, 296], [296, 336]], PI = [[33, 7], [7, 163], [163, 144], [144, 145], [145, 153], [153, 154], [154, 155], [155, 133], [33, 246], [246, 161], [161, 160], [160, 159], [159, 158], [158, 157], [157, 173], [173, 133]], ig = [[46, 53], [53, 52], [52, 65], [65, 55], [70, 63], [63, 105], [105, 66], [66, 107]], cg = [
    [10, 338],
    [338, 297],
    [297, 332],
    [332, 284],
    [284, 251],
    [251, 389],
    [389, 356],
    [356, 454],
    [454, 323],
    [323, 361],
    [361, 288],
    [288, 397],
    [397, 365],
    [365, 379],
    [379, 378],
    [378, 400],
    [400, 377],
    [377, 152],
    [152, 148],
    [148, 176],
    [176, 149],
    [149, 150],
    [150, 136],
    [136, 172],
    [172, 58],
    [58, 132],
    [132, 93],
    [93, 234],
    [234, 127],
    [127, 162],
    [162, 21],
    [21, 54],
    [54, 103],
    [103, 67],
    [67, 109],
    [109, 10]
  ], Lg = [].concat(RA(Jg), RA(Yg), RA(jI), RA(PI), RA(ig), RA(cg));
  function HI(C) {
    C = C || {}, C = Object.assign(Object.assign({}, gC), C), this.g = new Qg(C);
  }
  x = HI.prototype, x.close = function() {
    return this.g.close(), Promise.resolve();
  }, x.onResults = function(C) {
    this.g.onResults(C);
  }, x.initialize = function() {
    return WA(this, function C() {
      var Q = this;
      return HA(C, function(E) {
        return d(E, Q.g.initialize(), 0);
      });
    });
  }, x.reset = function() {
    this.g.reset();
  }, x.send = function(C) {
    return WA(this, function Q() {
      var E = this;
      return HA(Q, function(R) {
        return d(R, E.g.send(C), 0);
      });
    });
  }, x.setOptions = function(C) {
    this.g.setOptions(C);
  }, SA("FACE_GEOMETRY", { Layout: { COLUMN_MAJOR: 0, ROW_MAJOR: 1, 0: "COLUMN_MAJOR", 1: "ROW_MAJOR" }, PrimitiveType: { TRIANGLE: 0, 0: "TRIANGLE" }, VertexType: { VERTEX_PT: 0, 0: "VERTEX_PT" }, DEFAULT_CAMERA_PARAMS: { verticalFovDegrees: 63, near: 1, far: 1e4 } }), SA("FaceMesh", HI), SA("FACEMESH_LIPS", Jg), SA("FACEMESH_LEFT_EYE", Yg), SA("FACEMESH_LEFT_EYEBROW", jI), SA("FACEMESH_LEFT_IRIS", [[474, 475], [475, 476], [476, 477], [477, 474]]), SA("FACEMESH_RIGHT_EYE", PI), SA("FACEMESH_RIGHT_EYEBROW", ig), SA("FACEMESH_RIGHT_IRIS", [[469, 470], [470, 471], [471, 472], [472, 469]]), SA("FACEMESH_FACE_OVAL", cg), SA("FACEMESH_CONTOURS", Lg), SA("FACEMESH_TESSELATION", [
    [127, 34],
    [34, 139],
    [139, 127],
    [11, 0],
    [0, 37],
    [37, 11],
    [232, 231],
    [231, 120],
    [120, 232],
    [72, 37],
    [37, 39],
    [39, 72],
    [128, 121],
    [121, 47],
    [47, 128],
    [232, 121],
    [121, 128],
    [128, 232],
    [104, 69],
    [69, 67],
    [67, 104],
    [175, 171],
    [171, 148],
    [148, 175],
    [118, 50],
    [50, 101],
    [101, 118],
    [73, 39],
    [39, 40],
    [40, 73],
    [9, 151],
    [151, 108],
    [108, 9],
    [48, 115],
    [115, 131],
    [131, 48],
    [194, 204],
    [204, 211],
    [211, 194],
    [74, 40],
    [40, 185],
    [185, 74],
    [80, 42],
    [42, 183],
    [183, 80],
    [40, 92],
    [92, 186],
    [186, 40],
    [230, 229],
    [229, 118],
    [118, 230],
    [202, 212],
    [
      212,
      214
    ],
    [214, 202],
    [83, 18],
    [18, 17],
    [17, 83],
    [76, 61],
    [61, 146],
    [146, 76],
    [160, 29],
    [29, 30],
    [30, 160],
    [56, 157],
    [157, 173],
    [173, 56],
    [106, 204],
    [204, 194],
    [194, 106],
    [135, 214],
    [214, 192],
    [192, 135],
    [203, 165],
    [165, 98],
    [98, 203],
    [21, 71],
    [71, 68],
    [68, 21],
    [51, 45],
    [45, 4],
    [4, 51],
    [144, 24],
    [24, 23],
    [23, 144],
    [77, 146],
    [146, 91],
    [91, 77],
    [205, 50],
    [50, 187],
    [187, 205],
    [201, 200],
    [200, 18],
    [18, 201],
    [91, 106],
    [106, 182],
    [182, 91],
    [90, 91],
    [91, 181],
    [181, 90],
    [85, 84],
    [84, 17],
    [17, 85],
    [206, 203],
    [203, 36],
    [36, 206],
    [148, 171],
    [171, 140],
    [140, 148],
    [
      92,
      40
    ],
    [40, 39],
    [39, 92],
    [193, 189],
    [189, 244],
    [244, 193],
    [159, 158],
    [158, 28],
    [28, 159],
    [247, 246],
    [246, 161],
    [161, 247],
    [236, 3],
    [3, 196],
    [196, 236],
    [54, 68],
    [68, 104],
    [104, 54],
    [193, 168],
    [168, 8],
    [8, 193],
    [117, 228],
    [228, 31],
    [31, 117],
    [189, 193],
    [193, 55],
    [55, 189],
    [98, 97],
    [97, 99],
    [99, 98],
    [126, 47],
    [47, 100],
    [100, 126],
    [166, 79],
    [79, 218],
    [218, 166],
    [155, 154],
    [154, 26],
    [26, 155],
    [209, 49],
    [49, 131],
    [131, 209],
    [135, 136],
    [136, 150],
    [150, 135],
    [47, 126],
    [126, 217],
    [217, 47],
    [223, 52],
    [52, 53],
    [53, 223],
    [45, 51],
    [51, 134],
    [134, 45],
    [211, 170],
    [
      170,
      140
    ],
    [140, 211],
    [67, 69],
    [69, 108],
    [108, 67],
    [43, 106],
    [106, 91],
    [91, 43],
    [230, 119],
    [119, 120],
    [120, 230],
    [226, 130],
    [130, 247],
    [247, 226],
    [63, 53],
    [53, 52],
    [52, 63],
    [238, 20],
    [20, 242],
    [242, 238],
    [46, 70],
    [70, 156],
    [156, 46],
    [78, 62],
    [62, 96],
    [96, 78],
    [46, 53],
    [53, 63],
    [63, 46],
    [143, 34],
    [34, 227],
    [227, 143],
    [123, 117],
    [117, 111],
    [111, 123],
    [44, 125],
    [125, 19],
    [19, 44],
    [236, 134],
    [134, 51],
    [51, 236],
    [216, 206],
    [206, 205],
    [205, 216],
    [154, 153],
    [153, 22],
    [22, 154],
    [39, 37],
    [37, 167],
    [167, 39],
    [200, 201],
    [201, 208],
    [208, 200],
    [36, 142],
    [142, 100],
    [
      100,
      36
    ],
    [57, 212],
    [212, 202],
    [202, 57],
    [20, 60],
    [60, 99],
    [99, 20],
    [28, 158],
    [158, 157],
    [157, 28],
    [35, 226],
    [226, 113],
    [113, 35],
    [160, 159],
    [159, 27],
    [27, 160],
    [204, 202],
    [202, 210],
    [210, 204],
    [113, 225],
    [225, 46],
    [46, 113],
    [43, 202],
    [202, 204],
    [204, 43],
    [62, 76],
    [76, 77],
    [77, 62],
    [137, 123],
    [123, 116],
    [116, 137],
    [41, 38],
    [38, 72],
    [72, 41],
    [203, 129],
    [129, 142],
    [142, 203],
    [64, 98],
    [98, 240],
    [240, 64],
    [49, 102],
    [102, 64],
    [64, 49],
    [41, 73],
    [73, 74],
    [74, 41],
    [212, 216],
    [216, 207],
    [207, 212],
    [42, 74],
    [74, 184],
    [184, 42],
    [169, 170],
    [170, 211],
    [211, 169],
    [
      170,
      149
    ],
    [149, 176],
    [176, 170],
    [105, 66],
    [66, 69],
    [69, 105],
    [122, 6],
    [6, 168],
    [168, 122],
    [123, 147],
    [147, 187],
    [187, 123],
    [96, 77],
    [77, 90],
    [90, 96],
    [65, 55],
    [55, 107],
    [107, 65],
    [89, 90],
    [90, 180],
    [180, 89],
    [101, 100],
    [100, 120],
    [120, 101],
    [63, 105],
    [105, 104],
    [104, 63],
    [93, 137],
    [137, 227],
    [227, 93],
    [15, 86],
    [86, 85],
    [85, 15],
    [129, 102],
    [102, 49],
    [49, 129],
    [14, 87],
    [87, 86],
    [86, 14],
    [55, 8],
    [8, 9],
    [9, 55],
    [100, 47],
    [47, 121],
    [121, 100],
    [145, 23],
    [23, 22],
    [22, 145],
    [88, 89],
    [89, 179],
    [179, 88],
    [6, 122],
    [122, 196],
    [196, 6],
    [88, 95],
    [95, 96],
    [96, 88],
    [138, 172],
    [172, 136],
    [136, 138],
    [215, 58],
    [58, 172],
    [172, 215],
    [115, 48],
    [48, 219],
    [219, 115],
    [42, 80],
    [80, 81],
    [81, 42],
    [195, 3],
    [3, 51],
    [51, 195],
    [43, 146],
    [146, 61],
    [61, 43],
    [171, 175],
    [175, 199],
    [199, 171],
    [81, 82],
    [82, 38],
    [38, 81],
    [53, 46],
    [46, 225],
    [225, 53],
    [144, 163],
    [163, 110],
    [110, 144],
    [52, 65],
    [65, 66],
    [66, 52],
    [229, 228],
    [228, 117],
    [117, 229],
    [34, 127],
    [127, 234],
    [234, 34],
    [107, 108],
    [108, 69],
    [69, 107],
    [109, 108],
    [108, 151],
    [151, 109],
    [48, 64],
    [64, 235],
    [235, 48],
    [62, 78],
    [78, 191],
    [191, 62],
    [129, 209],
    [209, 126],
    [126, 129],
    [111, 35],
    [35, 143],
    [
      143,
      111
    ],
    [117, 123],
    [123, 50],
    [50, 117],
    [222, 65],
    [65, 52],
    [52, 222],
    [19, 125],
    [125, 141],
    [141, 19],
    [221, 55],
    [55, 65],
    [65, 221],
    [3, 195],
    [195, 197],
    [197, 3],
    [25, 7],
    [7, 33],
    [33, 25],
    [220, 237],
    [237, 44],
    [44, 220],
    [70, 71],
    [71, 139],
    [139, 70],
    [122, 193],
    [193, 245],
    [245, 122],
    [247, 130],
    [130, 33],
    [33, 247],
    [71, 21],
    [21, 162],
    [162, 71],
    [170, 169],
    [169, 150],
    [150, 170],
    [188, 174],
    [174, 196],
    [196, 188],
    [216, 186],
    [186, 92],
    [92, 216],
    [2, 97],
    [97, 167],
    [167, 2],
    [141, 125],
    [125, 241],
    [241, 141],
    [164, 167],
    [167, 37],
    [37, 164],
    [72, 38],
    [38, 12],
    [12, 72],
    [38, 82],
    [82, 13],
    [13, 38],
    [63, 68],
    [68, 71],
    [71, 63],
    [226, 35],
    [35, 111],
    [111, 226],
    [101, 50],
    [50, 205],
    [205, 101],
    [206, 92],
    [92, 165],
    [165, 206],
    [209, 198],
    [198, 217],
    [217, 209],
    [165, 167],
    [167, 97],
    [97, 165],
    [220, 115],
    [115, 218],
    [218, 220],
    [133, 112],
    [112, 243],
    [243, 133],
    [239, 238],
    [238, 241],
    [241, 239],
    [214, 135],
    [135, 169],
    [169, 214],
    [190, 173],
    [173, 133],
    [133, 190],
    [171, 208],
    [208, 32],
    [32, 171],
    [125, 44],
    [44, 237],
    [237, 125],
    [86, 87],
    [87, 178],
    [178, 86],
    [85, 86],
    [86, 179],
    [179, 85],
    [84, 85],
    [85, 180],
    [180, 84],
    [83, 84],
    [84, 181],
    [181, 83],
    [201, 83],
    [83, 182],
    [182, 201],
    [137, 93],
    [93, 132],
    [132, 137],
    [76, 62],
    [62, 183],
    [183, 76],
    [61, 76],
    [76, 184],
    [184, 61],
    [57, 61],
    [61, 185],
    [185, 57],
    [212, 57],
    [57, 186],
    [186, 212],
    [214, 207],
    [207, 187],
    [187, 214],
    [34, 143],
    [143, 156],
    [156, 34],
    [79, 239],
    [239, 237],
    [237, 79],
    [123, 137],
    [137, 177],
    [177, 123],
    [44, 1],
    [1, 4],
    [4, 44],
    [201, 194],
    [194, 32],
    [32, 201],
    [64, 102],
    [102, 129],
    [129, 64],
    [213, 215],
    [215, 138],
    [138, 213],
    [59, 166],
    [166, 219],
    [219, 59],
    [242, 99],
    [99, 97],
    [97, 242],
    [2, 94],
    [94, 141],
    [141, 2],
    [75, 59],
    [59, 235],
    [235, 75],
    [24, 110],
    [110, 228],
    [
      228,
      24
    ],
    [25, 130],
    [130, 226],
    [226, 25],
    [23, 24],
    [24, 229],
    [229, 23],
    [22, 23],
    [23, 230],
    [230, 22],
    [26, 22],
    [22, 231],
    [231, 26],
    [112, 26],
    [26, 232],
    [232, 112],
    [189, 190],
    [190, 243],
    [243, 189],
    [221, 56],
    [56, 190],
    [190, 221],
    [28, 56],
    [56, 221],
    [221, 28],
    [27, 28],
    [28, 222],
    [222, 27],
    [29, 27],
    [27, 223],
    [223, 29],
    [30, 29],
    [29, 224],
    [224, 30],
    [247, 30],
    [30, 225],
    [225, 247],
    [238, 79],
    [79, 20],
    [20, 238],
    [166, 59],
    [59, 75],
    [75, 166],
    [60, 75],
    [75, 240],
    [240, 60],
    [147, 177],
    [177, 215],
    [215, 147],
    [20, 79],
    [79, 166],
    [166, 20],
    [187, 147],
    [147, 213],
    [213, 187],
    [112, 233],
    [233, 244],
    [244, 112],
    [233, 128],
    [128, 245],
    [245, 233],
    [128, 114],
    [114, 188],
    [188, 128],
    [114, 217],
    [217, 174],
    [174, 114],
    [131, 115],
    [115, 220],
    [220, 131],
    [217, 198],
    [198, 236],
    [236, 217],
    [198, 131],
    [131, 134],
    [134, 198],
    [177, 132],
    [132, 58],
    [58, 177],
    [143, 35],
    [35, 124],
    [124, 143],
    [110, 163],
    [163, 7],
    [7, 110],
    [228, 110],
    [110, 25],
    [25, 228],
    [356, 389],
    [389, 368],
    [368, 356],
    [11, 302],
    [302, 267],
    [267, 11],
    [452, 350],
    [350, 349],
    [349, 452],
    [302, 303],
    [303, 269],
    [269, 302],
    [357, 343],
    [343, 277],
    [277, 357],
    [452, 453],
    [453, 357],
    [357, 452],
    [333, 332],
    [
      332,
      297
    ],
    [297, 333],
    [175, 152],
    [152, 377],
    [377, 175],
    [347, 348],
    [348, 330],
    [330, 347],
    [303, 304],
    [304, 270],
    [270, 303],
    [9, 336],
    [336, 337],
    [337, 9],
    [278, 279],
    [279, 360],
    [360, 278],
    [418, 262],
    [262, 431],
    [431, 418],
    [304, 408],
    [408, 409],
    [409, 304],
    [310, 415],
    [415, 407],
    [407, 310],
    [270, 409],
    [409, 410],
    [410, 270],
    [450, 348],
    [348, 347],
    [347, 450],
    [422, 430],
    [430, 434],
    [434, 422],
    [313, 314],
    [314, 17],
    [17, 313],
    [306, 307],
    [307, 375],
    [375, 306],
    [387, 388],
    [388, 260],
    [260, 387],
    [286, 414],
    [414, 398],
    [398, 286],
    [335, 406],
    [406, 418],
    [418, 335],
    [364, 367],
    [
      367,
      416
    ],
    [416, 364],
    [423, 358],
    [358, 327],
    [327, 423],
    [251, 284],
    [284, 298],
    [298, 251],
    [281, 5],
    [5, 4],
    [4, 281],
    [373, 374],
    [374, 253],
    [253, 373],
    [307, 320],
    [320, 321],
    [321, 307],
    [425, 427],
    [427, 411],
    [411, 425],
    [421, 313],
    [313, 18],
    [18, 421],
    [321, 405],
    [405, 406],
    [406, 321],
    [320, 404],
    [404, 405],
    [405, 320],
    [315, 16],
    [16, 17],
    [17, 315],
    [426, 425],
    [425, 266],
    [266, 426],
    [377, 400],
    [400, 369],
    [369, 377],
    [322, 391],
    [391, 269],
    [269, 322],
    [417, 465],
    [465, 464],
    [464, 417],
    [386, 257],
    [257, 258],
    [258, 386],
    [466, 260],
    [260, 388],
    [388, 466],
    [456, 399],
    [399, 419],
    [419, 456],
    [284, 332],
    [332, 333],
    [333, 284],
    [417, 285],
    [285, 8],
    [8, 417],
    [346, 340],
    [340, 261],
    [261, 346],
    [413, 441],
    [441, 285],
    [285, 413],
    [327, 460],
    [460, 328],
    [328, 327],
    [355, 371],
    [371, 329],
    [329, 355],
    [392, 439],
    [439, 438],
    [438, 392],
    [382, 341],
    [341, 256],
    [256, 382],
    [429, 420],
    [420, 360],
    [360, 429],
    [364, 394],
    [394, 379],
    [379, 364],
    [277, 343],
    [343, 437],
    [437, 277],
    [443, 444],
    [444, 283],
    [283, 443],
    [275, 440],
    [440, 363],
    [363, 275],
    [431, 262],
    [262, 369],
    [369, 431],
    [297, 338],
    [338, 337],
    [337, 297],
    [273, 375],
    [375, 321],
    [321, 273],
    [450, 451],
    [
      451,
      349
    ],
    [349, 450],
    [446, 342],
    [342, 467],
    [467, 446],
    [293, 334],
    [334, 282],
    [282, 293],
    [458, 461],
    [461, 462],
    [462, 458],
    [276, 353],
    [353, 383],
    [383, 276],
    [308, 324],
    [324, 325],
    [325, 308],
    [276, 300],
    [300, 293],
    [293, 276],
    [372, 345],
    [345, 447],
    [447, 372],
    [352, 345],
    [345, 340],
    [340, 352],
    [274, 1],
    [1, 19],
    [19, 274],
    [456, 248],
    [248, 281],
    [281, 456],
    [436, 427],
    [427, 425],
    [425, 436],
    [381, 256],
    [256, 252],
    [252, 381],
    [269, 391],
    [391, 393],
    [393, 269],
    [200, 199],
    [199, 428],
    [428, 200],
    [266, 330],
    [330, 329],
    [329, 266],
    [287, 273],
    [273, 422],
    [422, 287],
    [250, 462],
    [
      462,
      328
    ],
    [328, 250],
    [258, 286],
    [286, 384],
    [384, 258],
    [265, 353],
    [353, 342],
    [342, 265],
    [387, 259],
    [259, 257],
    [257, 387],
    [424, 431],
    [431, 430],
    [430, 424],
    [342, 353],
    [353, 276],
    [276, 342],
    [273, 335],
    [335, 424],
    [424, 273],
    [292, 325],
    [325, 307],
    [307, 292],
    [366, 447],
    [447, 345],
    [345, 366],
    [271, 303],
    [303, 302],
    [302, 271],
    [423, 266],
    [266, 371],
    [371, 423],
    [294, 455],
    [455, 460],
    [460, 294],
    [279, 278],
    [278, 294],
    [294, 279],
    [271, 272],
    [272, 304],
    [304, 271],
    [432, 434],
    [434, 427],
    [427, 432],
    [272, 407],
    [407, 408],
    [408, 272],
    [394, 430],
    [430, 431],
    [431, 394],
    [395, 369],
    [369, 400],
    [400, 395],
    [334, 333],
    [333, 299],
    [299, 334],
    [351, 417],
    [417, 168],
    [168, 351],
    [352, 280],
    [280, 411],
    [411, 352],
    [325, 319],
    [319, 320],
    [320, 325],
    [295, 296],
    [296, 336],
    [336, 295],
    [319, 403],
    [403, 404],
    [404, 319],
    [330, 348],
    [348, 349],
    [349, 330],
    [293, 298],
    [298, 333],
    [333, 293],
    [323, 454],
    [454, 447],
    [447, 323],
    [15, 16],
    [16, 315],
    [315, 15],
    [358, 429],
    [429, 279],
    [279, 358],
    [14, 15],
    [15, 316],
    [316, 14],
    [285, 336],
    [336, 9],
    [9, 285],
    [329, 349],
    [349, 350],
    [350, 329],
    [374, 380],
    [380, 252],
    [252, 374],
    [318, 402],
    [402, 403],
    [403, 318],
    [6, 197],
    [
      197,
      419
    ],
    [419, 6],
    [318, 319],
    [319, 325],
    [325, 318],
    [367, 364],
    [364, 365],
    [365, 367],
    [435, 367],
    [367, 397],
    [397, 435],
    [344, 438],
    [438, 439],
    [439, 344],
    [272, 271],
    [271, 311],
    [311, 272],
    [195, 5],
    [5, 281],
    [281, 195],
    [273, 287],
    [287, 291],
    [291, 273],
    [396, 428],
    [428, 199],
    [199, 396],
    [311, 271],
    [271, 268],
    [268, 311],
    [283, 444],
    [444, 445],
    [445, 283],
    [373, 254],
    [254, 339],
    [339, 373],
    [282, 334],
    [334, 296],
    [296, 282],
    [449, 347],
    [347, 346],
    [346, 449],
    [264, 447],
    [447, 454],
    [454, 264],
    [336, 296],
    [296, 299],
    [299, 336],
    [338, 10],
    [10, 151],
    [151, 338],
    [278, 439],
    [
      439,
      455
    ],
    [455, 278],
    [292, 407],
    [407, 415],
    [415, 292],
    [358, 371],
    [371, 355],
    [355, 358],
    [340, 345],
    [345, 372],
    [372, 340],
    [346, 347],
    [347, 280],
    [280, 346],
    [442, 443],
    [443, 282],
    [282, 442],
    [19, 94],
    [94, 370],
    [370, 19],
    [441, 442],
    [442, 295],
    [295, 441],
    [248, 419],
    [419, 197],
    [197, 248],
    [263, 255],
    [255, 359],
    [359, 263],
    [440, 275],
    [275, 274],
    [274, 440],
    [300, 383],
    [383, 368],
    [368, 300],
    [351, 412],
    [412, 465],
    [465, 351],
    [263, 467],
    [467, 466],
    [466, 263],
    [301, 368],
    [368, 389],
    [389, 301],
    [395, 378],
    [378, 379],
    [379, 395],
    [412, 351],
    [351, 419],
    [419, 412],
    [436, 426],
    [426, 322],
    [322, 436],
    [2, 164],
    [164, 393],
    [393, 2],
    [370, 462],
    [462, 461],
    [461, 370],
    [164, 0],
    [0, 267],
    [267, 164],
    [302, 11],
    [11, 12],
    [12, 302],
    [268, 12],
    [12, 13],
    [13, 268],
    [293, 300],
    [300, 301],
    [301, 293],
    [446, 261],
    [261, 340],
    [340, 446],
    [330, 266],
    [266, 425],
    [425, 330],
    [426, 423],
    [423, 391],
    [391, 426],
    [429, 355],
    [355, 437],
    [437, 429],
    [391, 327],
    [327, 326],
    [326, 391],
    [440, 457],
    [457, 438],
    [438, 440],
    [341, 382],
    [382, 362],
    [362, 341],
    [459, 457],
    [457, 461],
    [461, 459],
    [434, 430],
    [430, 394],
    [394, 434],
    [414, 463],
    [463, 362],
    [362, 414],
    [396, 369],
    [369, 262],
    [262, 396],
    [354, 461],
    [461, 457],
    [457, 354],
    [316, 403],
    [403, 402],
    [402, 316],
    [315, 404],
    [404, 403],
    [403, 315],
    [314, 405],
    [405, 404],
    [404, 314],
    [313, 406],
    [406, 405],
    [405, 313],
    [421, 418],
    [418, 406],
    [406, 421],
    [366, 401],
    [401, 361],
    [361, 366],
    [306, 408],
    [408, 407],
    [407, 306],
    [291, 409],
    [409, 408],
    [408, 291],
    [287, 410],
    [410, 409],
    [409, 287],
    [432, 436],
    [436, 410],
    [410, 432],
    [434, 416],
    [416, 411],
    [411, 434],
    [264, 368],
    [368, 383],
    [383, 264],
    [309, 438],
    [438, 457],
    [457, 309],
    [352, 376],
    [376, 401],
    [401, 352],
    [274, 275],
    [275, 4],
    [4, 274],
    [421, 428],
    [
      428,
      262
    ],
    [262, 421],
    [294, 327],
    [327, 358],
    [358, 294],
    [433, 416],
    [416, 367],
    [367, 433],
    [289, 455],
    [455, 439],
    [439, 289],
    [462, 370],
    [370, 326],
    [326, 462],
    [2, 326],
    [326, 370],
    [370, 2],
    [305, 460],
    [460, 455],
    [455, 305],
    [254, 449],
    [449, 448],
    [448, 254],
    [255, 261],
    [261, 446],
    [446, 255],
    [253, 450],
    [450, 449],
    [449, 253],
    [252, 451],
    [451, 450],
    [450, 252],
    [256, 452],
    [452, 451],
    [451, 256],
    [341, 453],
    [453, 452],
    [452, 341],
    [413, 464],
    [464, 463],
    [463, 413],
    [441, 413],
    [413, 414],
    [414, 441],
    [258, 442],
    [442, 441],
    [441, 258],
    [257, 443],
    [443, 442],
    [442, 257],
    [259, 444],
    [444, 443],
    [443, 259],
    [260, 445],
    [445, 444],
    [444, 260],
    [467, 342],
    [342, 445],
    [445, 467],
    [459, 458],
    [458, 250],
    [250, 459],
    [289, 392],
    [392, 290],
    [290, 289],
    [290, 328],
    [328, 460],
    [460, 290],
    [376, 433],
    [433, 435],
    [435, 376],
    [250, 290],
    [290, 392],
    [392, 250],
    [411, 416],
    [416, 433],
    [433, 411],
    [341, 463],
    [463, 464],
    [464, 341],
    [453, 464],
    [464, 465],
    [465, 453],
    [357, 465],
    [465, 412],
    [412, 357],
    [343, 412],
    [412, 399],
    [399, 343],
    [360, 363],
    [363, 440],
    [440, 360],
    [437, 399],
    [399, 456],
    [456, 437],
    [420, 456],
    [456, 363],
    [363, 420],
    [401, 435],
    [435, 288],
    [288, 401],
    [
      372,
      383
    ],
    [383, 353],
    [353, 372],
    [339, 255],
    [255, 249],
    [249, 339],
    [448, 261],
    [261, 255],
    [255, 448],
    [133, 243],
    [243, 190],
    [190, 133],
    [133, 155],
    [155, 112],
    [112, 133],
    [33, 246],
    [246, 247],
    [247, 33],
    [33, 130],
    [130, 25],
    [25, 33],
    [398, 384],
    [384, 286],
    [286, 398],
    [362, 398],
    [398, 414],
    [414, 362],
    [362, 463],
    [463, 341],
    [341, 362],
    [263, 359],
    [359, 467],
    [467, 263],
    [263, 249],
    [249, 255],
    [255, 263],
    [466, 467],
    [467, 260],
    [260, 466],
    [75, 60],
    [60, 166],
    [166, 75],
    [238, 239],
    [239, 79],
    [79, 238],
    [162, 127],
    [127, 139],
    [139, 162],
    [72, 11],
    [11, 37],
    [37, 72],
    [121, 232],
    [
      232,
      120
    ],
    [120, 121],
    [73, 72],
    [72, 39],
    [39, 73],
    [114, 128],
    [128, 47],
    [47, 114],
    [233, 232],
    [232, 128],
    [128, 233],
    [103, 104],
    [104, 67],
    [67, 103],
    [152, 175],
    [175, 148],
    [148, 152],
    [119, 118],
    [118, 101],
    [101, 119],
    [74, 73],
    [73, 40],
    [40, 74],
    [107, 9],
    [9, 108],
    [108, 107],
    [49, 48],
    [48, 131],
    [131, 49],
    [32, 194],
    [194, 211],
    [211, 32],
    [184, 74],
    [74, 185],
    [185, 184],
    [191, 80],
    [80, 183],
    [183, 191],
    [185, 40],
    [40, 186],
    [186, 185],
    [119, 230],
    [230, 118],
    [118, 119],
    [210, 202],
    [202, 214],
    [214, 210],
    [84, 83],
    [83, 17],
    [17, 84],
    [77, 76],
    [76, 146],
    [146, 77],
    [161, 160],
    [160, 30],
    [30, 161],
    [190, 56],
    [56, 173],
    [173, 190],
    [182, 106],
    [106, 194],
    [194, 182],
    [138, 135],
    [135, 192],
    [192, 138],
    [129, 203],
    [203, 98],
    [98, 129],
    [54, 21],
    [21, 68],
    [68, 54],
    [5, 51],
    [51, 4],
    [4, 5],
    [145, 144],
    [144, 23],
    [23, 145],
    [90, 77],
    [77, 91],
    [91, 90],
    [207, 205],
    [205, 187],
    [187, 207],
    [83, 201],
    [201, 18],
    [18, 83],
    [181, 91],
    [91, 182],
    [182, 181],
    [180, 90],
    [90, 181],
    [181, 180],
    [16, 85],
    [85, 17],
    [17, 16],
    [205, 206],
    [206, 36],
    [36, 205],
    [176, 148],
    [148, 140],
    [140, 176],
    [165, 92],
    [92, 39],
    [39, 165],
    [245, 193],
    [193, 244],
    [244, 245],
    [27, 159],
    [159, 28],
    [28, 27],
    [
      30,
      247
    ],
    [247, 161],
    [161, 30],
    [174, 236],
    [236, 196],
    [196, 174],
    [103, 54],
    [54, 104],
    [104, 103],
    [55, 193],
    [193, 8],
    [8, 55],
    [111, 117],
    [117, 31],
    [31, 111],
    [221, 189],
    [189, 55],
    [55, 221],
    [240, 98],
    [98, 99],
    [99, 240],
    [142, 126],
    [126, 100],
    [100, 142],
    [219, 166],
    [166, 218],
    [218, 219],
    [112, 155],
    [155, 26],
    [26, 112],
    [198, 209],
    [209, 131],
    [131, 198],
    [169, 135],
    [135, 150],
    [150, 169],
    [114, 47],
    [47, 217],
    [217, 114],
    [224, 223],
    [223, 53],
    [53, 224],
    [220, 45],
    [45, 134],
    [134, 220],
    [32, 211],
    [211, 140],
    [140, 32],
    [109, 67],
    [67, 108],
    [108, 109],
    [146, 43],
    [43, 91],
    [91, 146],
    [231, 230],
    [230, 120],
    [120, 231],
    [113, 226],
    [226, 247],
    [247, 113],
    [105, 63],
    [63, 52],
    [52, 105],
    [241, 238],
    [238, 242],
    [242, 241],
    [124, 46],
    [46, 156],
    [156, 124],
    [95, 78],
    [78, 96],
    [96, 95],
    [70, 46],
    [46, 63],
    [63, 70],
    [116, 143],
    [143, 227],
    [227, 116],
    [116, 123],
    [123, 111],
    [111, 116],
    [1, 44],
    [44, 19],
    [19, 1],
    [3, 236],
    [236, 51],
    [51, 3],
    [207, 216],
    [216, 205],
    [205, 207],
    [26, 154],
    [154, 22],
    [22, 26],
    [165, 39],
    [39, 167],
    [167, 165],
    [199, 200],
    [200, 208],
    [208, 199],
    [101, 36],
    [36, 100],
    [100, 101],
    [43, 57],
    [57, 202],
    [202, 43],
    [242, 20],
    [20, 99],
    [99, 242],
    [56, 28],
    [
      28,
      157
    ],
    [157, 56],
    [124, 35],
    [35, 113],
    [113, 124],
    [29, 160],
    [160, 27],
    [27, 29],
    [211, 204],
    [204, 210],
    [210, 211],
    [124, 113],
    [113, 46],
    [46, 124],
    [106, 43],
    [43, 204],
    [204, 106],
    [96, 62],
    [62, 77],
    [77, 96],
    [227, 137],
    [137, 116],
    [116, 227],
    [73, 41],
    [41, 72],
    [72, 73],
    [36, 203],
    [203, 142],
    [142, 36],
    [235, 64],
    [64, 240],
    [240, 235],
    [48, 49],
    [49, 64],
    [64, 48],
    [42, 41],
    [41, 74],
    [74, 42],
    [214, 212],
    [212, 207],
    [207, 214],
    [183, 42],
    [42, 184],
    [184, 183],
    [210, 169],
    [169, 211],
    [211, 210],
    [140, 170],
    [170, 176],
    [176, 140],
    [104, 105],
    [105, 69],
    [69, 104],
    [193, 122],
    [122, 168],
    [168, 193],
    [50, 123],
    [123, 187],
    [187, 50],
    [89, 96],
    [96, 90],
    [90, 89],
    [66, 65],
    [65, 107],
    [107, 66],
    [179, 89],
    [89, 180],
    [180, 179],
    [119, 101],
    [101, 120],
    [120, 119],
    [68, 63],
    [63, 104],
    [104, 68],
    [234, 93],
    [93, 227],
    [227, 234],
    [16, 15],
    [15, 85],
    [85, 16],
    [209, 129],
    [129, 49],
    [49, 209],
    [15, 14],
    [14, 86],
    [86, 15],
    [107, 55],
    [55, 9],
    [9, 107],
    [120, 100],
    [100, 121],
    [121, 120],
    [153, 145],
    [145, 22],
    [22, 153],
    [178, 88],
    [88, 179],
    [179, 178],
    [197, 6],
    [6, 196],
    [196, 197],
    [89, 88],
    [88, 96],
    [96, 89],
    [135, 138],
    [138, 136],
    [136, 135],
    [138, 215],
    [215, 172],
    [172, 138],
    [
      218,
      115
    ],
    [115, 219],
    [219, 218],
    [41, 42],
    [42, 81],
    [81, 41],
    [5, 195],
    [195, 51],
    [51, 5],
    [57, 43],
    [43, 61],
    [61, 57],
    [208, 171],
    [171, 199],
    [199, 208],
    [41, 81],
    [81, 38],
    [38, 41],
    [224, 53],
    [53, 225],
    [225, 224],
    [24, 144],
    [144, 110],
    [110, 24],
    [105, 52],
    [52, 66],
    [66, 105],
    [118, 229],
    [229, 117],
    [117, 118],
    [227, 34],
    [34, 234],
    [234, 227],
    [66, 107],
    [107, 69],
    [69, 66],
    [10, 109],
    [109, 151],
    [151, 10],
    [219, 48],
    [48, 235],
    [235, 219],
    [183, 62],
    [62, 191],
    [191, 183],
    [142, 129],
    [129, 126],
    [126, 142],
    [116, 111],
    [111, 143],
    [143, 116],
    [118, 117],
    [117, 50],
    [50, 118],
    [223, 222],
    [
      222,
      52
    ],
    [52, 223],
    [94, 19],
    [19, 141],
    [141, 94],
    [222, 221],
    [221, 65],
    [65, 222],
    [196, 3],
    [3, 197],
    [197, 196],
    [45, 220],
    [220, 44],
    [44, 45],
    [156, 70],
    [70, 139],
    [139, 156],
    [188, 122],
    [122, 245],
    [245, 188],
    [139, 71],
    [71, 162],
    [162, 139],
    [149, 170],
    [170, 150],
    [150, 149],
    [122, 188],
    [188, 196],
    [196, 122],
    [206, 216],
    [216, 92],
    [92, 206],
    [164, 2],
    [2, 167],
    [167, 164],
    [242, 141],
    [141, 241],
    [241, 242],
    [0, 164],
    [164, 37],
    [37, 0],
    [11, 72],
    [72, 12],
    [12, 11],
    [12, 38],
    [38, 13],
    [13, 12],
    [70, 63],
    [63, 71],
    [71, 70],
    [31, 226],
    [226, 111],
    [111, 31],
    [36, 101],
    [101, 205],
    [205, 36],
    [203, 206],
    [206, 165],
    [165, 203],
    [126, 209],
    [209, 217],
    [217, 126],
    [98, 165],
    [165, 97],
    [97, 98],
    [237, 220],
    [220, 218],
    [218, 237],
    [237, 239],
    [239, 241],
    [241, 237],
    [210, 214],
    [214, 169],
    [169, 210],
    [140, 171],
    [171, 32],
    [32, 140],
    [241, 125],
    [125, 237],
    [237, 241],
    [179, 86],
    [86, 178],
    [178, 179],
    [180, 85],
    [85, 179],
    [179, 180],
    [181, 84],
    [84, 180],
    [180, 181],
    [182, 83],
    [83, 181],
    [181, 182],
    [194, 201],
    [201, 182],
    [182, 194],
    [177, 137],
    [137, 132],
    [132, 177],
    [184, 76],
    [76, 183],
    [183, 184],
    [185, 61],
    [61, 184],
    [184, 185],
    [186, 57],
    [57, 185],
    [185, 186],
    [216, 212],
    [
      212,
      186
    ],
    [186, 216],
    [192, 214],
    [214, 187],
    [187, 192],
    [139, 34],
    [34, 156],
    [156, 139],
    [218, 79],
    [79, 237],
    [237, 218],
    [147, 123],
    [123, 177],
    [177, 147],
    [45, 44],
    [44, 4],
    [4, 45],
    [208, 201],
    [201, 32],
    [32, 208],
    [98, 64],
    [64, 129],
    [129, 98],
    [192, 213],
    [213, 138],
    [138, 192],
    [235, 59],
    [59, 219],
    [219, 235],
    [141, 242],
    [242, 97],
    [97, 141],
    [97, 2],
    [2, 141],
    [141, 97],
    [240, 75],
    [75, 235],
    [235, 240],
    [229, 24],
    [24, 228],
    [228, 229],
    [31, 25],
    [25, 226],
    [226, 31],
    [230, 23],
    [23, 229],
    [229, 230],
    [231, 22],
    [22, 230],
    [230, 231],
    [232, 26],
    [26, 231],
    [231, 232],
    [233, 112],
    [112, 232],
    [232, 233],
    [244, 189],
    [189, 243],
    [243, 244],
    [189, 221],
    [221, 190],
    [190, 189],
    [222, 28],
    [28, 221],
    [221, 222],
    [223, 27],
    [27, 222],
    [222, 223],
    [224, 29],
    [29, 223],
    [223, 224],
    [225, 30],
    [30, 224],
    [224, 225],
    [113, 247],
    [247, 225],
    [225, 113],
    [99, 60],
    [60, 240],
    [240, 99],
    [213, 147],
    [147, 215],
    [215, 213],
    [60, 20],
    [20, 166],
    [166, 60],
    [192, 187],
    [187, 213],
    [213, 192],
    [243, 112],
    [112, 244],
    [244, 243],
    [244, 233],
    [233, 245],
    [245, 244],
    [245, 128],
    [128, 188],
    [188, 245],
    [188, 114],
    [114, 174],
    [174, 188],
    [134, 131],
    [131, 220],
    [220, 134],
    [174, 217],
    [217, 236],
    [236, 174],
    [236, 198],
    [198, 134],
    [134, 236],
    [215, 177],
    [177, 58],
    [58, 215],
    [156, 143],
    [143, 124],
    [124, 156],
    [25, 110],
    [110, 7],
    [7, 25],
    [31, 228],
    [228, 25],
    [25, 31],
    [264, 356],
    [356, 368],
    [368, 264],
    [0, 11],
    [11, 267],
    [267, 0],
    [451, 452],
    [452, 349],
    [349, 451],
    [267, 302],
    [302, 269],
    [269, 267],
    [350, 357],
    [357, 277],
    [277, 350],
    [350, 452],
    [452, 357],
    [357, 350],
    [299, 333],
    [333, 297],
    [297, 299],
    [396, 175],
    [175, 377],
    [377, 396],
    [280, 347],
    [347, 330],
    [330, 280],
    [269, 303],
    [303, 270],
    [270, 269],
    [151, 9],
    [9, 337],
    [337, 151],
    [344, 278],
    [278, 360],
    [360, 344],
    [424, 418],
    [
      418,
      431
    ],
    [431, 424],
    [270, 304],
    [304, 409],
    [409, 270],
    [272, 310],
    [310, 407],
    [407, 272],
    [322, 270],
    [270, 410],
    [410, 322],
    [449, 450],
    [450, 347],
    [347, 449],
    [432, 422],
    [422, 434],
    [434, 432],
    [18, 313],
    [313, 17],
    [17, 18],
    [291, 306],
    [306, 375],
    [375, 291],
    [259, 387],
    [387, 260],
    [260, 259],
    [424, 335],
    [335, 418],
    [418, 424],
    [434, 364],
    [364, 416],
    [416, 434],
    [391, 423],
    [423, 327],
    [327, 391],
    [301, 251],
    [251, 298],
    [298, 301],
    [275, 281],
    [281, 4],
    [4, 275],
    [254, 373],
    [373, 253],
    [253, 254],
    [375, 307],
    [307, 321],
    [321, 375],
    [280, 425],
    [425, 411],
    [411, 280],
    [200, 421],
    [
      421,
      18
    ],
    [18, 200],
    [335, 321],
    [321, 406],
    [406, 335],
    [321, 320],
    [320, 405],
    [405, 321],
    [314, 315],
    [315, 17],
    [17, 314],
    [423, 426],
    [426, 266],
    [266, 423],
    [396, 377],
    [377, 369],
    [369, 396],
    [270, 322],
    [322, 269],
    [269, 270],
    [413, 417],
    [417, 464],
    [464, 413],
    [385, 386],
    [386, 258],
    [258, 385],
    [248, 456],
    [456, 419],
    [419, 248],
    [298, 284],
    [284, 333],
    [333, 298],
    [168, 417],
    [417, 8],
    [8, 168],
    [448, 346],
    [346, 261],
    [261, 448],
    [417, 413],
    [413, 285],
    [285, 417],
    [326, 327],
    [327, 328],
    [328, 326],
    [277, 355],
    [355, 329],
    [329, 277],
    [309, 392],
    [392, 438],
    [438, 309],
    [381, 382],
    [
      382,
      256
    ],
    [256, 381],
    [279, 429],
    [429, 360],
    [360, 279],
    [365, 364],
    [364, 379],
    [379, 365],
    [355, 277],
    [277, 437],
    [437, 355],
    [282, 443],
    [443, 283],
    [283, 282],
    [281, 275],
    [275, 363],
    [363, 281],
    [395, 431],
    [431, 369],
    [369, 395],
    [299, 297],
    [297, 337],
    [337, 299],
    [335, 273],
    [273, 321],
    [321, 335],
    [348, 450],
    [450, 349],
    [349, 348],
    [359, 446],
    [446, 467],
    [467, 359],
    [283, 293],
    [293, 282],
    [282, 283],
    [250, 458],
    [458, 462],
    [462, 250],
    [300, 276],
    [276, 383],
    [383, 300],
    [292, 308],
    [308, 325],
    [325, 292],
    [283, 276],
    [276, 293],
    [293, 283],
    [264, 372],
    [372, 447],
    [447, 264],
    [346, 352],
    [352, 340],
    [340, 346],
    [354, 274],
    [274, 19],
    [19, 354],
    [363, 456],
    [456, 281],
    [281, 363],
    [426, 436],
    [436, 425],
    [425, 426],
    [380, 381],
    [381, 252],
    [252, 380],
    [267, 269],
    [269, 393],
    [393, 267],
    [421, 200],
    [200, 428],
    [428, 421],
    [371, 266],
    [266, 329],
    [329, 371],
    [432, 287],
    [287, 422],
    [422, 432],
    [290, 250],
    [250, 328],
    [328, 290],
    [385, 258],
    [258, 384],
    [384, 385],
    [446, 265],
    [265, 342],
    [342, 446],
    [386, 387],
    [387, 257],
    [257, 386],
    [422, 424],
    [424, 430],
    [430, 422],
    [445, 342],
    [342, 276],
    [276, 445],
    [422, 273],
    [273, 424],
    [424, 422],
    [306, 292],
    [292, 307],
    [307, 306],
    [
      352,
      366
    ],
    [366, 345],
    [345, 352],
    [268, 271],
    [271, 302],
    [302, 268],
    [358, 423],
    [423, 371],
    [371, 358],
    [327, 294],
    [294, 460],
    [460, 327],
    [331, 279],
    [279, 294],
    [294, 331],
    [303, 271],
    [271, 304],
    [304, 303],
    [436, 432],
    [432, 427],
    [427, 436],
    [304, 272],
    [272, 408],
    [408, 304],
    [395, 394],
    [394, 431],
    [431, 395],
    [378, 395],
    [395, 400],
    [400, 378],
    [296, 334],
    [334, 299],
    [299, 296],
    [6, 351],
    [351, 168],
    [168, 6],
    [376, 352],
    [352, 411],
    [411, 376],
    [307, 325],
    [325, 320],
    [320, 307],
    [285, 295],
    [295, 336],
    [336, 285],
    [320, 319],
    [319, 404],
    [404, 320],
    [329, 330],
    [330, 349],
    [349, 329],
    [334, 293],
    [293, 333],
    [333, 334],
    [366, 323],
    [323, 447],
    [447, 366],
    [316, 15],
    [15, 315],
    [315, 316],
    [331, 358],
    [358, 279],
    [279, 331],
    [317, 14],
    [14, 316],
    [316, 317],
    [8, 285],
    [285, 9],
    [9, 8],
    [277, 329],
    [329, 350],
    [350, 277],
    [253, 374],
    [374, 252],
    [252, 253],
    [319, 318],
    [318, 403],
    [403, 319],
    [351, 6],
    [6, 419],
    [419, 351],
    [324, 318],
    [318, 325],
    [325, 324],
    [397, 367],
    [367, 365],
    [365, 397],
    [288, 435],
    [435, 397],
    [397, 288],
    [278, 344],
    [344, 439],
    [439, 278],
    [310, 272],
    [272, 311],
    [311, 310],
    [248, 195],
    [195, 281],
    [281, 248],
    [375, 273],
    [273, 291],
    [291, 375],
    [175, 396],
    [396, 199],
    [199, 175],
    [312, 311],
    [311, 268],
    [268, 312],
    [276, 283],
    [283, 445],
    [445, 276],
    [390, 373],
    [373, 339],
    [339, 390],
    [295, 282],
    [282, 296],
    [296, 295],
    [448, 449],
    [449, 346],
    [346, 448],
    [356, 264],
    [264, 454],
    [454, 356],
    [337, 336],
    [336, 299],
    [299, 337],
    [337, 338],
    [338, 151],
    [151, 337],
    [294, 278],
    [278, 455],
    [455, 294],
    [308, 292],
    [292, 415],
    [415, 308],
    [429, 358],
    [358, 355],
    [355, 429],
    [265, 340],
    [340, 372],
    [372, 265],
    [352, 346],
    [346, 280],
    [280, 352],
    [295, 442],
    [442, 282],
    [282, 295],
    [354, 19],
    [19, 370],
    [370, 354],
    [285, 441],
    [441, 295],
    [295, 285],
    [
      195,
      248
    ],
    [248, 197],
    [197, 195],
    [457, 440],
    [440, 274],
    [274, 457],
    [301, 300],
    [300, 368],
    [368, 301],
    [417, 351],
    [351, 465],
    [465, 417],
    [251, 301],
    [301, 389],
    [389, 251],
    [394, 395],
    [395, 379],
    [379, 394],
    [399, 412],
    [412, 419],
    [419, 399],
    [410, 436],
    [436, 322],
    [322, 410],
    [326, 2],
    [2, 393],
    [393, 326],
    [354, 370],
    [370, 461],
    [461, 354],
    [393, 164],
    [164, 267],
    [267, 393],
    [268, 302],
    [302, 12],
    [12, 268],
    [312, 268],
    [268, 13],
    [13, 312],
    [298, 293],
    [293, 301],
    [301, 298],
    [265, 446],
    [446, 340],
    [340, 265],
    [280, 330],
    [330, 425],
    [425, 280],
    [322, 426],
    [426, 391],
    [391, 322],
    [
      420,
      429
    ],
    [429, 437],
    [437, 420],
    [393, 391],
    [391, 326],
    [326, 393],
    [344, 440],
    [440, 438],
    [438, 344],
    [458, 459],
    [459, 461],
    [461, 458],
    [364, 434],
    [434, 394],
    [394, 364],
    [428, 396],
    [396, 262],
    [262, 428],
    [274, 354],
    [354, 457],
    [457, 274],
    [317, 316],
    [316, 402],
    [402, 317],
    [316, 315],
    [315, 403],
    [403, 316],
    [315, 314],
    [314, 404],
    [404, 315],
    [314, 313],
    [313, 405],
    [405, 314],
    [313, 421],
    [421, 406],
    [406, 313],
    [323, 366],
    [366, 361],
    [361, 323],
    [292, 306],
    [306, 407],
    [407, 292],
    [306, 291],
    [291, 408],
    [408, 306],
    [291, 287],
    [287, 409],
    [409, 291],
    [287, 432],
    [432, 410],
    [410, 287],
    [427, 434],
    [434, 411],
    [411, 427],
    [372, 264],
    [264, 383],
    [383, 372],
    [459, 309],
    [309, 457],
    [457, 459],
    [366, 352],
    [352, 401],
    [401, 366],
    [1, 274],
    [274, 4],
    [4, 1],
    [418, 421],
    [421, 262],
    [262, 418],
    [331, 294],
    [294, 358],
    [358, 331],
    [435, 433],
    [433, 367],
    [367, 435],
    [392, 289],
    [289, 439],
    [439, 392],
    [328, 462],
    [462, 326],
    [326, 328],
    [94, 2],
    [2, 370],
    [370, 94],
    [289, 305],
    [305, 455],
    [455, 289],
    [339, 254],
    [254, 448],
    [448, 339],
    [359, 255],
    [255, 446],
    [446, 359],
    [254, 253],
    [253, 449],
    [449, 254],
    [253, 252],
    [252, 450],
    [450, 253],
    [252, 256],
    [256, 451],
    [451, 252],
    [
      256,
      341
    ],
    [341, 452],
    [452, 256],
    [414, 413],
    [413, 463],
    [463, 414],
    [286, 441],
    [441, 414],
    [414, 286],
    [286, 258],
    [258, 441],
    [441, 286],
    [258, 257],
    [257, 442],
    [442, 258],
    [257, 259],
    [259, 443],
    [443, 257],
    [259, 260],
    [260, 444],
    [444, 259],
    [260, 467],
    [467, 445],
    [445, 260],
    [309, 459],
    [459, 250],
    [250, 309],
    [305, 289],
    [289, 290],
    [290, 305],
    [305, 290],
    [290, 460],
    [460, 305],
    [401, 376],
    [376, 435],
    [435, 401],
    [309, 250],
    [250, 392],
    [392, 309],
    [376, 411],
    [411, 433],
    [433, 376],
    [453, 341],
    [341, 464],
    [464, 453],
    [357, 453],
    [453, 465],
    [465, 357],
    [343, 357],
    [357, 412],
    [412, 343],
    [437, 343],
    [343, 399],
    [399, 437],
    [344, 360],
    [360, 440],
    [440, 344],
    [420, 437],
    [437, 456],
    [456, 420],
    [360, 420],
    [420, 363],
    [363, 360],
    [361, 401],
    [401, 288],
    [288, 361],
    [265, 372],
    [372, 353],
    [353, 265],
    [390, 339],
    [339, 249],
    [249, 390],
    [339, 448],
    [448, 255],
    [255, 339]
  ]), SA("matrixDataToMatrix", function(C) {
    for (var Q = C.getCols(), E = C.getRows(), R = C.getPackedDataList(), s = [], M = 0; M < E; M++)
      s.push(Array(Q));
    for (M = 0; M < E; M++)
      for (var y = 0; y < Q; y++) {
        var k = C.getLayout() === 1 ? M * Q + y : y * E + M;
        s[M][y] = R[k];
      }
    return s;
  }), SA("VERSION", "0.4.1633559619");
}).call(DC);
class pB {
  constructor() {
    this.detectResolve = null, this.faceMesh = new FaceMesh({ locateFile: (U) => `https://cdn.jsdelivr.net/npm/@mediapipe/face_mesh@0.4/${U}` }), this.faceMesh.setOptions({
      maxNumFaces: 1,
      refineLandmarks: !1,
      minDetectionConfidence: 0.5,
      minTrackingConfidence: 0.5
    }), this.faceMesh.onResults((U) => {
      this.detectResolve && this.detectResolve(U);
    });
  }
  async detect(U) {
    return await new Promise((l, f) => {
      this.detectResolve = l, this.faceMesh.send({ image: U });
    });
  }
}
let uB = {};
var rC = function() {
  var x = typeof document < "u" && document.currentScript ? document.currentScript.src : void 0;
  return typeof __filename < "u" && (x = x || __filename), function(U) {
    U = U || {};
    var G = typeof U < "u" ? U : {}, l, f;
    G.ready = new Promise(function(A, I) {
      l = A, f = I;
    });
    var r = {}, T;
    for (T in G)
      G.hasOwnProperty(T) && (r[T] = G[T]);
    var V = "./this.program", RA = !1, W = !1, AA = !1, TA = !1;
    RA = typeof window == "object", W = typeof importScripts == "function", AA = typeof process == "object" && typeof process.versions == "object" && typeof process.versions.node == "string", TA = !RA && !AA && !W;
    var GA = "";
    function lA(A) {
      return G.locateFile ? G.locateFile(A, GA) : GA + A;
    }
    var hA, rA, dA, _A, H;
    AA ? (W ? GA = require("path").dirname(GA) + "/" : GA = __dirname + "/", hA = function(I, g) {
      var B = xI(I);
      return B ? g ? B : B.toString() : (_A || (_A = require("fs")), H || (H = require("path")), I = H.normalize(I), _A.readFileSync(I, g ? null : "utf8"));
    }, dA = function(I) {
      var g = hA(I, !0);
      return g.buffer || (g = new Uint8Array(g)), nA(g.buffer), g;
    }, process.argv.length > 1 && (V = process.argv[1].replace(/\\/g, "/")), process.argv.slice(2), process.on("uncaughtException", function(A) {
      if (!(A instanceof tC))
        throw A;
    }), process.on("unhandledRejection", YA), G.inspect = function() {
      return "[Emscripten Module object]";
    }) : TA ? (typeof read < "u" && (hA = function(I) {
      var g = xI(I);
      return g ? YC(g) : read(I);
    }), dA = function(I) {
      var g;
      return g = xI(I), g || (typeof readbuffer == "function" ? new Uint8Array(readbuffer(I)) : (g = read(I, "binary"), nA(typeof g == "object"), g));
    }, typeof scriptArgs < "u" && scriptArgs, typeof print < "u" && (typeof console > "u" && (console = {}), console.log = print, console.warn = console.error = typeof printErr < "u" ? printErr : print)) : (RA || W) && (W ? GA = self.location.href : typeof document < "u" && document.currentScript && (GA = document.currentScript.src), x && (GA = x), GA.indexOf("blob:") !== 0 ? GA = GA.substr(0, GA.lastIndexOf("/") + 1) : GA = "", hA = function(I) {
      try {
        var g = new XMLHttpRequest();
        return g.open("GET", I, !1), g.send(null), g.responseText;
      } catch (i) {
        var B = xI(I);
        if (B)
          return YC(B);
        throw i;
      }
    }, W && (dA = function(I) {
      try {
        var g = new XMLHttpRequest();
        return g.open("GET", I, !1), g.responseType = "arraybuffer", g.send(null), new Uint8Array(g.response);
      } catch (i) {
        var B = xI(I);
        if (B)
          return B;
        throw i;
      }
    }), rA = function(I, g, B) {
      var i = new XMLHttpRequest();
      i.open("GET", I, !0), i.responseType = "arraybuffer", i.onload = function() {
        if (i.status == 200 || i.status == 0 && i.response) {
          g(i.response);
          return;
        }
        var w = xI(I);
        if (w) {
          g(w.buffer);
          return;
        }
        B();
      }, i.onerror = B, i.send(null);
    });
    var d = G.print || console.log.bind(console), wA = G.printErr || console.warn.bind(console);
    for (T in r)
      r.hasOwnProperty(T) && (G[T] = r[T]);
    r = null, G.arguments && G.arguments, G.thisProgram && (V = G.thisProgram), G.quit && G.quit;
    var ZI = 16;
    function CI(A, I) {
      return I || (I = ZI), Math.ceil(A / I) * I;
    }
    function LA(A) {
      LA.shown || (LA.shown = {}), LA.shown[A] || (LA.shown[A] = 1, wA(A));
    }
    var EI;
    G.wasmBinary && (EI = G.wasmBinary), G.noExitRuntime && G.noExitRuntime, typeof WebAssembly != "object" && YA("no native wasm support detected");
    var HA, UA = !1;
    function nA(A, I) {
      A || YA("Assertion failed: " + I);
    }
    var iI = typeof TextDecoder < "u" ? new TextDecoder("utf8") : void 0;
    function SA(A, I, g) {
      for (var B = I + g, i = I; A[i] && !(i >= B); )
        ++i;
      if (i - I > 16 && A.subarray && iI)
        return iI.decode(A.subarray(I, i));
      for (var o = ""; I < i; ) {
        var w = A[I++];
        if (!(w & 128)) {
          o += String.fromCharCode(w);
          continue;
        }
        var F = A[I++] & 63;
        if ((w & 224) == 192) {
          o += String.fromCharCode((w & 31) << 6 | F);
          continue;
        }
        var N = A[I++] & 63;
        if ((w & 240) == 224 ? w = (w & 15) << 12 | F << 6 | N : w = (w & 7) << 18 | F << 12 | N << 6 | A[I++] & 63, w < 65536)
          o += String.fromCharCode(w);
        else {
          var h = w - 65536;
          o += String.fromCharCode(55296 | h >> 10, 56320 | h & 1023);
        }
      }
      return o;
    }
    function qI(A, I) {
      return A ? SA(JA, A, I) : "";
    }
    function TI(A, I, g, B) {
      if (!(B > 0))
        return 0;
      for (var i = g, o = g + B - 1, w = 0; w < A.length; ++w) {
        var F = A.charCodeAt(w);
        if (F >= 55296 && F <= 57343) {
          var N = A.charCodeAt(++w);
          F = 65536 + ((F & 1023) << 10) | N & 1023;
        }
        if (F <= 127) {
          if (g >= o)
            break;
          I[g++] = F;
        } else if (F <= 2047) {
          if (g + 1 >= o)
            break;
          I[g++] = 192 | F >> 6, I[g++] = 128 | F & 63;
        } else if (F <= 65535) {
          if (g + 2 >= o)
            break;
          I[g++] = 224 | F >> 12, I[g++] = 128 | F >> 6 & 63, I[g++] = 128 | F & 63;
        } else {
          if (g + 3 >= o)
            break;
          I[g++] = 240 | F >> 18, I[g++] = 128 | F >> 12 & 63, I[g++] = 128 | F >> 6 & 63, I[g++] = 128 | F & 63;
        }
      }
      return I[g] = 0, g - i;
    }
    function wg(A, I, g) {
      return TI(A, JA, I, g);
    }
    function tI(A) {
      for (var I = 0, g = 0; g < A.length; ++g) {
        var B = A.charCodeAt(g);
        B >= 55296 && B <= 57343 && (B = 65536 + ((B & 1023) << 10) | A.charCodeAt(++g) & 1023), B <= 127 ? ++I : B <= 2047 ? I += 2 : B <= 65535 ? I += 3 : I += 4;
      }
      return I;
    }
    var Fg = typeof TextDecoder < "u" ? new TextDecoder("utf-16le") : void 0;
    function Rg(A, I) {
      for (var g = A, B = g >> 1, i = B + I / 2; !(B >= i) && eI[B]; )
        ++B;
      if (g = B << 1, g - A > 32 && Fg)
        return Fg.decode(JA.subarray(A, g));
      for (var o = "", w = 0; !(w >= I / 2); ++w) {
        var F = OA[A + w * 2 >> 1];
        if (F == 0)
          break;
        o += String.fromCharCode(F);
      }
      return o;
    }
    function Ng(A, I, g) {
      if (g === void 0 && (g = 2147483647), g < 2)
        return 0;
      g -= 2;
      for (var B = I, i = g < A.length * 2 ? g / 2 : A.length, o = 0; o < i; ++o) {
        var w = A.charCodeAt(o);
        OA[I >> 1] = w, I += 2;
      }
      return OA[I >> 1] = 0, I - B;
    }
    function rI(A) {
      return A.length * 2;
    }
    function Xg(A, I) {
      for (var g = 0, B = ""; !(g >= I / 4); ) {
        var i = n[A + g * 4 >> 2];
        if (i == 0)
          break;
        if (++g, i >= 65536) {
          var o = i - 65536;
          B += String.fromCharCode(55296 | o >> 10, 56320 | o & 1023);
        } else
          B += String.fromCharCode(i);
      }
      return B;
    }
    function Og(A, I, g) {
      if (g === void 0 && (g = 2147483647), g < 4)
        return 0;
      for (var B = I, i = B + g - 4, o = 0; o < A.length; ++o) {
        var w = A.charCodeAt(o);
        if (w >= 55296 && w <= 57343) {
          var F = A.charCodeAt(++o);
          w = 65536 + ((w & 1023) << 10) | F & 1023;
        }
        if (n[I >> 2] = w, I += 4, I + 4 > i)
          break;
      }
      return n[I >> 2] = 0, I - B;
    }
    function pg(A) {
      for (var I = 0, g = 0; g < A.length; ++g) {
        var B = A.charCodeAt(g);
        B >= 55296 && B <= 57343 && ++g, I += 4;
      }
      return I;
    }
    function sg(A, I) {
      aA.set(A, I);
    }
    function ug(A, I, g) {
      for (var B = 0; B < A.length; ++B)
        aA[I++ >> 0] = A.charCodeAt(B);
      g || (aA[I >> 0] = 0);
    }
    function hg(A, I) {
      return A % I > 0 && (A += I - A % I), A;
    }
    var nI, aA, JA, OA, eI, n, pA, lI, $A;
    function KI(A) {
      nI = A, G.HEAP8 = aA = new Int8Array(A), G.HEAP16 = OA = new Int16Array(A), G.HEAP32 = n = new Int32Array(A), G.HEAPU8 = JA = new Uint8Array(A), G.HEAPU16 = eI = new Uint16Array(A), G.HEAPU32 = pA = new Uint32Array(A), G.HEAPF32 = lI = new Float32Array(A), G.HEAPF64 = $A = new Float64Array(A);
    }
    G.INITIAL_MEMORY;
    var mA, DI = [], dI = [], uA = [], vI = [];
    function ag() {
      if (G.preRun)
        for (typeof G.preRun == "function" && (G.preRun = [G.preRun]); G.preRun.length; )
          $I(G.preRun.shift());
      JI(DI);
    }
    function yg() {
      !G.noFSInit && !D.init.initialized && D.init(), JI(dI);
    }
    function _I() {
      D.ignorePermissions = !1, JI(uA);
    }
    function UI() {
      if (G.postRun)
        for (typeof G.postRun == "function" && (G.postRun = [G.postRun]); G.postRun.length; )
          jA(G.postRun.shift());
      JI(vI);
    }
    function $I(A) {
      DI.unshift(A);
    }
    function jA(A) {
      vI.unshift(A);
    }
    var BI = 0, MI = null;
    function jg(A) {
      return A;
    }
    function mI(A) {
      BI++, G.monitorRunDependencies && G.monitorRunDependencies(BI);
    }
    function fI(A) {
      if (BI--, G.monitorRunDependencies && G.monitorRunDependencies(BI), BI == 0 && MI) {
        var I = MI;
        MI = null, I();
      }
    }
    G.preloadedImages = {}, G.preloadedAudios = {};
    function YA(A) {
      G.onAbort && G.onAbort(A), A += "", wA(A), UA = !0, A = "abort(" + A + "). Build with -s ASSERTIONS=1 for more info.";
      var I = new WebAssembly.RuntimeError(A);
      throw f(I), I;
    }
    function Ag(A, I) {
      return String.prototype.startsWith ? A.startsWith(I) : A.indexOf(I) === 0;
    }
    var tA = "data:application/octet-stream;base64,";
    function kI(A) {
      return Ag(A, tA);
    }
    var Kg = "file://";
    function yA(A) {
      return Ag(A, Kg);
    }
    kI(xA) || (xA = lA(xA));
    function Ig() {
      try {
        if (EI)
          return new Uint8Array(EI);
        var A = xI(xA);
        if (A)
          return A;
        if (dA)
          return dA(xA);
        throw "both async and sync fetching of the wasm failed";
      } catch (I) {
        YA(I);
      }
    }
    function oI() {
      return !EI && (RA || W) && typeof fetch == "function" && !yA(xA) ? fetch(xA, { credentials: "same-origin" }).then(function(A) {
        if (!A.ok)
          throw "failed to load wasm binary file at '" + xA + "'";
        return A.arrayBuffer();
      }).catch(function() {
        return Ig();
      }) : Promise.resolve().then(Ig);
    }
    function PA() {
      var A = { env: cC, wasi_snapshot_preview1: cC };
      function I(w, F) {
        var N = w.exports;
        G.asm = N, HA = G.asm.memory, KI(HA.buffer), mA = G.asm.__indirect_function_table, fI();
      }
      mI();
      function g(w) {
        I(w.instance);
      }
      function B(w) {
        return oI().then(function(F) {
          return WebAssembly.instantiate(F, A);
        }).then(w, function(F) {
          wA("failed to asynchronously prepare wasm: " + F), YA(F);
        });
      }
      function i() {
        return !EI && typeof WebAssembly.instantiateStreaming == "function" && !kI(xA) && !yA(xA) && typeof fetch == "function" ? fetch(xA, { credentials: "same-origin" }).then(function(w) {
          var F = WebAssembly.instantiateStreaming(w, A);
          return F.then(g, function(N) {
            return wA("wasm streaming compile failed: " + N), wA("falling back to ArrayBuffer instantiation"), B(g);
          });
        }) : B(g);
      }
      if (G.instantiateWasm)
        try {
          var o = G.instantiateWasm(A, I);
          return o;
        } catch (w) {
          return wA("Module.instantiateWasm callback failed with error: " + w), !1;
        }
      return i().catch(f), {};
    }
    var Z, zA;
    function SI(A, I) {
      if (a.mainLoop.timingMode = A, a.mainLoop.timingValue = I, !a.mainLoop.func)
        return 1;
      if (A == 0)
        a.mainLoop.scheduler = function() {
          var w = Math.max(0, a.mainLoop.tickStartTime + I - GI()) | 0;
          setTimeout(a.mainLoop.runner, w);
        }, a.mainLoop.method = "timeout";
      else if (A == 1)
        a.mainLoop.scheduler = function() {
          a.requestAnimationFrame(a.mainLoop.runner);
        }, a.mainLoop.method = "rAF";
      else if (A == 2) {
        if (typeof setImmediate > "u") {
          var g = [], B = "setimmediate", i = function(o) {
            (o.data === B || o.data.target === B) && (o.stopPropagation(), g.shift()());
          };
          addEventListener("message", i, !0), setImmediate = function(w) {
            g.push(w), W ? (G.setImmediates === void 0 && (G.setImmediates = []), G.setImmediates.push(w), postMessage({ target: B })) : postMessage(B, "*");
          };
        }
        a.mainLoop.scheduler = function() {
          setImmediate(a.mainLoop.runner);
        }, a.mainLoop.method = "immediate";
      }
      return 0;
    }
    var GI;
    AA ? GI = function() {
      var A = process.hrtime();
      return A[0] * 1e3 + A[1] / 1e6;
    } : typeof dateNow < "u" ? GI = dateNow : GI = function() {
      return performance.now();
    };
    function Ug(A, I, g, B, i) {
      nA(!a.mainLoop.func, "emscripten_set_main_loop: there can only be one main loop function at once: call emscripten_cancel_main_loop to cancel the previous one before setting a new one with different parameters."), a.mainLoop.func = A, a.mainLoop.arg = B;
      var o = a.mainLoop.currentlyRunningMainloop;
      if (a.mainLoop.runner = function() {
        if (!UA) {
          if (a.mainLoop.queue.length > 0) {
            var F = Date.now(), N = a.mainLoop.queue.shift();
            if (N.func(N.arg), a.mainLoop.remainingBlockers) {
              var h = a.mainLoop.remainingBlockers, K = h % 1 == 0 ? h - 1 : Math.floor(h);
              N.counted ? a.mainLoop.remainingBlockers = K : (K = K + 0.5, a.mainLoop.remainingBlockers = (8 * h + K) / 9);
            }
            if (console.log('main loop blocker "' + N.name + '" took ' + (Date.now() - F) + " ms"), a.mainLoop.updateStatus(), o < a.mainLoop.currentlyRunningMainloop)
              return;
            setTimeout(a.mainLoop.runner, 0);
            return;
          }
          if (!(o < a.mainLoop.currentlyRunningMainloop)) {
            if (a.mainLoop.currentFrameNumber = a.mainLoop.currentFrameNumber + 1 | 0, a.mainLoop.timingMode == 1 && a.mainLoop.timingValue > 1 && a.mainLoop.currentFrameNumber % a.mainLoop.timingValue != 0) {
              a.mainLoop.scheduler();
              return;
            } else
              a.mainLoop.timingMode == 0 && (a.mainLoop.tickStartTime = GI());
            a.mainLoop.runIter(A), !(o < a.mainLoop.currentlyRunningMainloop) && (typeof SDL == "object" && SDL.audio && SDL.audio.queueNewAudioData && SDL.audio.queueNewAudioData(), a.mainLoop.scheduler());
          }
        }
      }, i || (I && I > 0 ? SI(0, 1e3 / I) : SI(1, 1), a.mainLoop.scheduler()), g)
        throw "unwind";
    }
    var a = { mainLoop: { scheduler: null, method: "", currentlyRunningMainloop: 0, func: null, arg: 0, timingMode: 0, timingValue: 0, currentFrameNumber: 0, queue: [], pause: function() {
      a.mainLoop.scheduler = null, a.mainLoop.currentlyRunningMainloop++;
    }, resume: function() {
      a.mainLoop.currentlyRunningMainloop++;
      var A = a.mainLoop.timingMode, I = a.mainLoop.timingValue, g = a.mainLoop.func;
      a.mainLoop.func = null, Ug(g, 0, !1, a.mainLoop.arg, !0), SI(A, I), a.mainLoop.scheduler();
    }, updateStatus: function() {
      if (G.setStatus) {
        var A = G.statusMessage || "Please wait...", I = a.mainLoop.remainingBlockers, g = a.mainLoop.expectedBlockers;
        I ? I < g ? G.setStatus(A + " (" + (g - I) + "/" + g + ")") : G.setStatus(A) : G.setStatus("");
      }
    }, runIter: function(A) {
      if (!UA) {
        if (G.preMainLoop) {
          var I = G.preMainLoop();
          if (I === !1)
            return;
        }
        try {
          A();
        } catch (g) {
          if (g instanceof tC)
            return;
          if (g == "unwind")
            return;
          throw g && typeof g == "object" && g.stack && wA("exception thrown: " + [g, g.stack]), g;
        }
        G.postMainLoop && G.postMainLoop();
      }
    } }, isFullscreen: !1, pointerLock: !1, moduleContextCreatedCallbacks: [], workers: [], init: function() {
      if (G.preloadPlugins || (G.preloadPlugins = []), a.initted)
        return;
      a.initted = !0;
      try {
        new Blob(), a.hasBlobConstructor = !0;
      } catch {
        a.hasBlobConstructor = !1, console.log("warning: no blob constructor, cannot create blobs with mimetypes");
      }
      a.BlobBuilder = typeof MozBlobBuilder < "u" ? MozBlobBuilder : typeof WebKitBlobBuilder < "u" ? WebKitBlobBuilder : a.hasBlobConstructor ? null : console.log("warning: no BlobBuilder"), a.URLObject = typeof window < "u" ? window.URL ? window.URL : window.webkitURL : void 0, !G.noImageDecoding && typeof a.URLObject > "u" && (console.log("warning: Browser does not support creating object URLs. Built-in browser image decoding will not be available."), G.noImageDecoding = !0);
      var A = {};
      A.canHandle = function(o) {
        return !G.noImageDecoding && /\.(jpg|jpeg|png|bmp)$/i.test(o);
      }, A.handle = function(o, w, F, N) {
        var h = null;
        if (a.hasBlobConstructor)
          try {
            h = new Blob([o], { type: a.getMimetype(w) }), h.size !== o.length && (h = new Blob([new Uint8Array(o).buffer], { type: a.getMimetype(w) }));
          } catch (L) {
            LA("Blob constructor present but fails: " + L + "; falling back to blob builder");
          }
        if (!h) {
          var K = new a.BlobBuilder();
          K.append(new Uint8Array(o).buffer), h = K.getBlob();
        }
        var J = a.URLObject.createObjectURL(h), S = new Image();
        S.onload = function() {
          nA(S.complete, "Image " + w + " could not be decoded");
          var q = document.createElement("canvas");
          q.width = S.width, q.height = S.height;
          var P = q.getContext("2d");
          P.drawImage(S, 0, 0), G.preloadedImages[w] = q, a.URLObject.revokeObjectURL(J), F && F(o);
        }, S.onerror = function(q) {
          console.log("Image " + J + " could not be decoded"), N && N();
        }, S.src = J;
      }, G.preloadPlugins.push(A);
      var I = {};
      I.canHandle = function(o) {
        return !G.noAudioDecoding && o.substr(-4) in { ".ogg": 1, ".wav": 1, ".mp3": 1 };
      }, I.handle = function(o, w, F, N) {
        var h = !1;
        function K(P) {
          h || (h = !0, G.preloadedAudios[w] = P, F && F(o));
        }
        function J() {
          h || (h = !0, G.preloadedAudios[w] = new Audio(), N && N());
        }
        if (a.hasBlobConstructor) {
          try {
            var S = new Blob([o], { type: a.getMimetype(w) });
          } catch {
            return J();
          }
          var L = a.URLObject.createObjectURL(S), q = new Audio();
          q.addEventListener("canplaythrough", function() {
            K(q);
          }, !1), q.onerror = function(sA) {
            if (h)
              return;
            console.log("warning: browser could not fully decode audio " + w + ", trying slower base64 approach");
            function QA(Y) {
              for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", EA = "=", z = "", gA = 0, bA = 0, gI = 0; gI < Y.length; gI++)
                for (gA = gA << 8 | Y[gI], bA += 8; bA >= 6; ) {
                  var OB = gA >> bA - 6 & 63;
                  bA -= 6, z += t[OB];
                }
              return bA == 2 ? (z += t[(gA & 3) << 4], z += EA + EA) : bA == 4 && (z += t[(gA & 15) << 2], z += EA), z;
            }
            q.src = "data:audio/x-" + w.substr(-3) + ";base64," + QA(o), K(q);
          }, q.src = L, a.safeSetTimeout(function() {
            K(q);
          }, 1e4);
        } else
          return J();
      }, G.preloadPlugins.push(I);
      function g() {
        a.pointerLock = document.pointerLockElement === G.canvas || document.mozPointerLockElement === G.canvas || document.webkitPointerLockElement === G.canvas || document.msPointerLockElement === G.canvas;
      }
      var B = G.canvas;
      B && (B.requestPointerLock = B.requestPointerLock || B.mozRequestPointerLock || B.webkitRequestPointerLock || B.msRequestPointerLock || function() {
      }, B.exitPointerLock = document.exitPointerLock || document.mozExitPointerLock || document.webkitExitPointerLock || document.msExitPointerLock || function() {
      }, B.exitPointerLock = B.exitPointerLock.bind(document), document.addEventListener("pointerlockchange", g, !1), document.addEventListener("mozpointerlockchange", g, !1), document.addEventListener("webkitpointerlockchange", g, !1), document.addEventListener("mspointerlockchange", g, !1), G.elementPointerLock && B.addEventListener("click", function(i) {
        !a.pointerLock && G.canvas.requestPointerLock && (G.canvas.requestPointerLock(), i.preventDefault());
      }, !1));
    }, createContext: function(A, I, g, B) {
      if (I && G.ctx && A == G.canvas)
        return G.ctx;
      var i, o;
      if (I) {
        var w = { antialias: !1, alpha: !1, majorVersion: 1 };
        if (B)
          for (var F in B)
            w[F] = B[F];
        typeof GL < "u" && (o = GL.createContext(A, w), o && (i = GL.getContext(o).GLctx));
      } else
        i = A.getContext("2d");
      return i ? (g && (I || nA(typeof GLctx > "u", "cannot set in module if GLctx is used, but we are a non-GL context that would replace it"), G.ctx = i, I && GL.makeContextCurrent(o), G.useWebGL = I, a.moduleContextCreatedCallbacks.forEach(function(N) {
        N();
      }), a.init()), i) : null;
    }, destroyContext: function(A, I, g) {
    }, fullscreenHandlersInstalled: !1, lockPointer: void 0, resizeCanvas: void 0, requestFullscreen: function(A, I) {
      a.lockPointer = A, a.resizeCanvas = I, typeof a.lockPointer > "u" && (a.lockPointer = !0), typeof a.resizeCanvas > "u" && (a.resizeCanvas = !1);
      var g = G.canvas;
      function B() {
        a.isFullscreen = !1;
        var o = g.parentNode;
        (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === o ? (g.exitFullscreen = a.exitFullscreen, a.lockPointer && g.requestPointerLock(), a.isFullscreen = !0, a.resizeCanvas ? a.setFullscreenCanvasSize() : a.updateCanvasDimensions(g)) : (o.parentNode.insertBefore(g, o), o.parentNode.removeChild(o), a.resizeCanvas ? a.setWindowedCanvasSize() : a.updateCanvasDimensions(g)), G.onFullScreen && G.onFullScreen(a.isFullscreen), G.onFullscreen && G.onFullscreen(a.isFullscreen);
      }
      a.fullscreenHandlersInstalled || (a.fullscreenHandlersInstalled = !0, document.addEventListener("fullscreenchange", B, !1), document.addEventListener("mozfullscreenchange", B, !1), document.addEventListener("webkitfullscreenchange", B, !1), document.addEventListener("MSFullscreenChange", B, !1));
      var i = document.createElement("div");
      g.parentNode.insertBefore(i, g), i.appendChild(g), i.requestFullscreen = i.requestFullscreen || i.mozRequestFullScreen || i.msRequestFullscreen || (i.webkitRequestFullscreen ? function() {
        i.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
      } : null) || (i.webkitRequestFullScreen ? function() {
        i.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
      } : null), i.requestFullscreen();
    }, exitFullscreen: function() {
      if (!a.isFullscreen)
        return !1;
      var A = document.exitFullscreen || document.cancelFullScreen || document.mozCancelFullScreen || document.msExitFullscreen || document.webkitCancelFullScreen || function() {
      };
      return A.apply(document, []), !0;
    }, nextRAF: 0, fakeRequestAnimationFrame: function(A) {
      var I = Date.now();
      if (a.nextRAF === 0)
        a.nextRAF = I + 1e3 / 60;
      else
        for (; I + 2 >= a.nextRAF; )
          a.nextRAF += 1e3 / 60;
      var g = Math.max(a.nextRAF - I, 0);
      setTimeout(A, g);
    }, requestAnimationFrame: function(A) {
      if (typeof requestAnimationFrame == "function") {
        requestAnimationFrame(A);
        return;
      }
      var I = a.fakeRequestAnimationFrame;
      I(A);
    }, safeCallback: function(A) {
      return function() {
        if (!UA)
          return A.apply(null, arguments);
      };
    }, allowAsyncCallbacks: !0, queuedAsyncCallbacks: [], pauseAsyncCallbacks: function() {
      a.allowAsyncCallbacks = !1;
    }, resumeAsyncCallbacks: function() {
      if (a.allowAsyncCallbacks = !0, a.queuedAsyncCallbacks.length > 0) {
        var A = a.queuedAsyncCallbacks;
        a.queuedAsyncCallbacks = [], A.forEach(function(I) {
          I();
        });
      }
    }, safeRequestAnimationFrame: function(A) {
      return a.requestAnimationFrame(function() {
        UA || (a.allowAsyncCallbacks ? A() : a.queuedAsyncCallbacks.push(A));
      });
    }, safeSetTimeout: function(A, I) {
      return setTimeout(function() {
        UA || (a.allowAsyncCallbacks ? A() : a.queuedAsyncCallbacks.push(A));
      }, I);
    }, safeSetInterval: function(A, I) {
      return setInterval(function() {
        UA || a.allowAsyncCallbacks && A();
      }, I);
    }, getMimetype: function(A) {
      return { jpg: "image/jpeg", jpeg: "image/jpeg", png: "image/png", bmp: "image/bmp", ogg: "audio/ogg", wav: "audio/wav", mp3: "audio/mpeg" }[A.substr(A.lastIndexOf(".") + 1)];
    }, getUserMedia: function(A) {
      window.getUserMedia || (window.getUserMedia = navigator.getUserMedia || navigator.mozGetUserMedia), window.getUserMedia(A);
    }, getMovementX: function(A) {
      return A.movementX || A.mozMovementX || A.webkitMovementX || 0;
    }, getMovementY: function(A) {
      return A.movementY || A.mozMovementY || A.webkitMovementY || 0;
    }, getMouseWheelDelta: function(A) {
      var I = 0;
      switch (A.type) {
        case "DOMMouseScroll":
          I = A.detail / 3;
          break;
        case "mousewheel":
          I = A.wheelDelta / 120;
          break;
        case "wheel":
          switch (I = A.deltaY, A.deltaMode) {
            case 0:
              I /= 100;
              break;
            case 1:
              I /= 3;
              break;
            case 2:
              I *= 80;
              break;
            default:
              throw "unrecognized mouse wheel delta mode: " + A.deltaMode;
          }
          break;
        default:
          throw "unrecognized mouse wheel event: " + A.type;
      }
      return I;
    }, mouseX: 0, mouseY: 0, mouseMovementX: 0, mouseMovementY: 0, touches: {}, lastTouches: {}, calculateMouseEvent: function(A) {
      if (a.pointerLock)
        A.type != "mousemove" && "mozMovementX" in A ? a.mouseMovementX = a.mouseMovementY = 0 : (a.mouseMovementX = a.getMovementX(A), a.mouseMovementY = a.getMovementY(A)), typeof SDL < "u" ? (a.mouseX = SDL.mouseX + a.mouseMovementX, a.mouseY = SDL.mouseY + a.mouseMovementY) : (a.mouseX += a.mouseMovementX, a.mouseY += a.mouseMovementY);
      else {
        var I = G.canvas.getBoundingClientRect(), g = G.canvas.width, B = G.canvas.height, i = typeof window.scrollX < "u" ? window.scrollX : window.pageXOffset, o = typeof window.scrollY < "u" ? window.scrollY : window.pageYOffset;
        if (A.type === "touchstart" || A.type === "touchend" || A.type === "touchmove") {
          var w = A.touch;
          if (w === void 0)
            return;
          var F = w.pageX - (i + I.left), N = w.pageY - (o + I.top);
          F = F * (g / I.width), N = N * (B / I.height);
          var h = { x: F, y: N };
          if (A.type === "touchstart")
            a.lastTouches[w.identifier] = h, a.touches[w.identifier] = h;
          else if (A.type === "touchend" || A.type === "touchmove") {
            var K = a.touches[w.identifier];
            K || (K = h), a.lastTouches[w.identifier] = K, a.touches[w.identifier] = h;
          }
          return;
        }
        var J = A.pageX - (i + I.left), S = A.pageY - (o + I.top);
        J = J * (g / I.width), S = S * (B / I.height), a.mouseMovementX = J - a.mouseX, a.mouseMovementY = S - a.mouseY, a.mouseX = J, a.mouseY = S;
      }
    }, asyncLoad: function(A, I, g, B) {
      var i = B ? "" : "al " + A;
      rA(A, function(o) {
        nA(o, 'Loading data file "' + A + '" failed (no arrayBuffer).'), I(new Uint8Array(o)), i && fI();
      }, function(o) {
        if (g)
          g();
        else
          throw 'Loading data file "' + A + '" failed.';
      }), i && mI();
    }, resizeListeners: [], updateResizeListeners: function() {
      var A = G.canvas;
      a.resizeListeners.forEach(function(I) {
        I(A.width, A.height);
      });
    }, setCanvasSize: function(A, I, g) {
      var B = G.canvas;
      a.updateCanvasDimensions(B, A, I), g || a.updateResizeListeners();
    }, windowedWidth: 0, windowedHeight: 0, setFullscreenCanvasSize: function() {
      if (typeof SDL < "u") {
        var A = pA[SDL.screen >> 2];
        A = A | 8388608, n[SDL.screen >> 2] = A;
      }
      a.updateCanvasDimensions(G.canvas), a.updateResizeListeners();
    }, setWindowedCanvasSize: function() {
      if (typeof SDL < "u") {
        var A = pA[SDL.screen >> 2];
        A = A & -8388609, n[SDL.screen >> 2] = A;
      }
      a.updateCanvasDimensions(G.canvas), a.updateResizeListeners();
    }, updateCanvasDimensions: function(A, I, g) {
      I && g ? (A.widthNative = I, A.heightNative = g) : (I = A.widthNative, g = A.heightNative);
      var B = I, i = g;
      if (G.forcedAspectRatio && G.forcedAspectRatio > 0 && (B / i < G.forcedAspectRatio ? B = Math.round(i * G.forcedAspectRatio) : i = Math.round(B / G.forcedAspectRatio)), (document.fullscreenElement || document.mozFullScreenElement || document.msFullscreenElement || document.webkitFullscreenElement || document.webkitCurrentFullScreenElement) === A.parentNode && typeof screen < "u") {
        var o = Math.min(screen.width / B, screen.height / i);
        B = Math.round(B * o), i = Math.round(i * o);
      }
      a.resizeCanvas ? (A.width != B && (A.width = B), A.height != i && (A.height = i), typeof A.style < "u" && (A.style.removeProperty("width"), A.style.removeProperty("height"))) : (A.width != I && (A.width = I), A.height != g && (A.height = g), typeof A.style < "u" && (B != I || i != g ? (A.style.setProperty("width", B + "px", "important"), A.style.setProperty("height", i + "px", "important")) : (A.style.removeProperty("width"), A.style.removeProperty("height"))));
    }, wgetRequests: {}, nextWgetRequestHandle: 0, getNextWgetRequestHandle: function() {
      var A = a.nextWgetRequestHandle;
      return a.nextWgetRequestHandle++, A;
    } };
    function JI(A) {
      for (; A.length > 0; ) {
        var I = A.shift();
        if (typeof I == "function") {
          I(G);
          continue;
        }
        var g = I.func;
        typeof g == "number" ? I.arg === void 0 ? mA.get(g)() : mA.get(g)(I.arg) : g(I.arg === void 0 ? null : I.arg);
      }
    }
    var MA = { DESTRUCTOR_OFFSET: 0, REFCOUNT_OFFSET: 4, TYPE_OFFSET: 8, CAUGHT_OFFSET: 12, RETHROWN_OFFSET: 13, SIZE: 16 };
    function wI(A) {
      return Gg(A + MA.SIZE) + MA.SIZE;
    }
    function NC(A, I) {
    }
    function Pg(A, I) {
      return void 0;
    }
    function WA(A) {
      this.excPtr = A, this.ptr = A - MA.SIZE, this.set_type = function(I) {
        n[this.ptr + MA.TYPE_OFFSET >> 2] = I;
      }, this.get_type = function() {
        return n[this.ptr + MA.TYPE_OFFSET >> 2];
      }, this.set_destructor = function(I) {
        n[this.ptr + MA.DESTRUCTOR_OFFSET >> 2] = I;
      }, this.get_destructor = function() {
        return n[this.ptr + MA.DESTRUCTOR_OFFSET >> 2];
      }, this.set_refcount = function(I) {
        n[this.ptr + MA.REFCOUNT_OFFSET >> 2] = I;
      }, this.set_caught = function(I) {
        I = I ? 1 : 0, aA[this.ptr + MA.CAUGHT_OFFSET >> 0] = I;
      }, this.get_caught = function() {
        return aA[this.ptr + MA.CAUGHT_OFFSET >> 0] != 0;
      }, this.set_rethrown = function(I) {
        I = I ? 1 : 0, aA[this.ptr + MA.RETHROWN_OFFSET >> 0] = I;
      }, this.get_rethrown = function() {
        return aA[this.ptr + MA.RETHROWN_OFFSET >> 0] != 0;
      }, this.init = function(I, g) {
        this.set_type(I), this.set_destructor(g), this.set_refcount(0), this.set_caught(!1), this.set_rethrown(!1);
      }, this.add_ref = function() {
        var I = n[this.ptr + MA.REFCOUNT_OFFSET >> 2];
        n[this.ptr + MA.REFCOUNT_OFFSET >> 2] = I + 1;
      }, this.release_ref = function() {
        var I = n[this.ptr + MA.REFCOUNT_OFFSET >> 2];
        return n[this.ptr + MA.REFCOUNT_OFFSET >> 2] = I - 1, I === 1;
      };
    }
    function VI(A, I, g) {
      var B = new WA(A);
      throw B.init(I, g), A;
    }
    function Mg(A) {
      return n[HC() >> 2] = A, A;
    }
    var iA = { splitPath: function(A) {
      var I = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/;
      return I.exec(A).slice(1);
    }, normalizeArray: function(A, I) {
      for (var g = 0, B = A.length - 1; B >= 0; B--) {
        var i = A[B];
        i === "." ? A.splice(B, 1) : i === ".." ? (A.splice(B, 1), g++) : g && (A.splice(B, 1), g--);
      }
      if (I)
        for (; g; g--)
          A.unshift("..");
      return A;
    }, normalize: function(A) {
      var I = A.charAt(0) === "/", g = A.substr(-1) === "/";
      return A = iA.normalizeArray(A.split("/").filter(function(B) {
        return !!B;
      }), !I).join("/"), !A && !I && (A = "."), A && g && (A += "/"), (I ? "/" : "") + A;
    }, dirname: function(A) {
      var I = iA.splitPath(A), g = I[0], B = I[1];
      return !g && !B ? "." : (B && (B = B.substr(0, B.length - 1)), g + B);
    }, basename: function(A) {
      if (A === "/")
        return "/";
      A = iA.normalize(A), A = A.replace(/\/$/, "");
      var I = A.lastIndexOf("/");
      return I === -1 ? A : A.substr(I + 1);
    }, extname: function(A) {
      return iA.splitPath(A)[3];
    }, join: function() {
      var A = Array.prototype.slice.call(arguments, 0);
      return iA.normalize(A.join("/"));
    }, join2: function(A, I) {
      return iA.normalize(A + "/" + I);
    } };
    function zg() {
      if (typeof crypto == "object" && typeof crypto.getRandomValues == "function") {
        var A = new Uint8Array(1);
        return function() {
          return crypto.getRandomValues(A), A[0];
        };
      } else if (AA)
        try {
          var I = require("crypto");
          return function() {
            return I.randomBytes(1)[0];
          };
        } catch {
        }
      return function() {
        YA("randomDevice");
      };
    }
    var ZA = { resolve: function() {
      for (var A = "", I = !1, g = arguments.length - 1; g >= -1 && !I; g--) {
        var B = g >= 0 ? arguments[g] : D.cwd();
        if (typeof B != "string")
          throw new TypeError("Arguments to path.resolve must be strings");
        if (!B)
          return "";
        A = B + "/" + A, I = B.charAt(0) === "/";
      }
      return A = iA.normalizeArray(A.split("/").filter(function(i) {
        return !!i;
      }), !I).join("/"), (I ? "/" : "") + A || ".";
    }, relative: function(A, I) {
      A = ZA.resolve(A).substr(1), I = ZA.resolve(I).substr(1);
      function g(h) {
        for (var K = 0; K < h.length && h[K] === ""; K++)
          ;
        for (var J = h.length - 1; J >= 0 && h[J] === ""; J--)
          ;
        return K > J ? [] : h.slice(K, J - K + 1);
      }
      for (var B = g(A.split("/")), i = g(I.split("/")), o = Math.min(B.length, i.length), w = o, F = 0; F < o; F++)
        if (B[F] !== i[F]) {
          w = F;
          break;
        }
      for (var N = [], F = w; F < B.length; F++)
        N.push("..");
      return N = N.concat(i.slice(w)), N.join("/");
    } }, FI = { ttys: [], init: function() {
    }, shutdown: function() {
    }, register: function(A, I) {
      FI.ttys[A] = { input: [], output: [], ops: I }, D.registerDevice(A, FI.stream_ops);
    }, stream_ops: { open: function(A) {
      var I = FI.ttys[A.node.rdev];
      if (!I)
        throw new D.ErrnoError(43);
      A.tty = I, A.seekable = !1;
    }, close: function(A) {
      A.tty.ops.flush(A.tty);
    }, flush: function(A) {
      A.tty.ops.flush(A.tty);
    }, read: function(A, I, g, B, i) {
      if (!A.tty || !A.tty.ops.get_char)
        throw new D.ErrnoError(60);
      for (var o = 0, w = 0; w < B; w++) {
        var F;
        try {
          F = A.tty.ops.get_char(A.tty);
        } catch {
          throw new D.ErrnoError(29);
        }
        if (F === void 0 && o === 0)
          throw new D.ErrnoError(6);
        if (F == null)
          break;
        o++, I[g + w] = F;
      }
      return o && (A.node.timestamp = Date.now()), o;
    }, write: function(A, I, g, B, i) {
      if (!A.tty || !A.tty.ops.put_char)
        throw new D.ErrnoError(60);
      try {
        for (var o = 0; o < B; o++)
          A.tty.ops.put_char(A.tty, I[g + o]);
      } catch {
        throw new D.ErrnoError(29);
      }
      return B && (A.node.timestamp = Date.now()), o;
    } }, default_tty_ops: { get_char: function(A) {
      if (!A.input.length) {
        var I = null;
        if (AA) {
          var g = 256, B = Buffer.alloc ? Buffer.alloc(g) : new Buffer(g), i = 0;
          try {
            i = _A.readSync(process.stdin.fd, B, 0, g, null);
          } catch (o) {
            if (o.toString().indexOf("EOF") != -1)
              i = 0;
            else
              throw o;
          }
          i > 0 ? I = B.slice(0, i).toString("utf-8") : I = null;
        } else
          typeof window < "u" && typeof window.prompt == "function" ? (I = window.prompt("Input: "), I !== null && (I += `
`)) : typeof readline == "function" && (I = readline(), I !== null && (I += `
`));
        if (!I)
          return null;
        A.input = fg(I, !0);
      }
      return A.input.shift();
    }, put_char: function(A, I) {
      I === null || I === 10 ? (d(SA(A.output, 0)), A.output = []) : I != 0 && A.output.push(I);
    }, flush: function(A) {
      A.output && A.output.length > 0 && (d(SA(A.output, 0)), A.output = []);
    } }, default_tty1_ops: { put_char: function(A, I) {
      I === null || I === 10 ? (wA(SA(A.output, 0)), A.output = []) : I != 0 && A.output.push(I);
    }, flush: function(A) {
      A.output && A.output.length > 0 && (wA(SA(A.output, 0)), A.output = []);
    } } };
    function kg(A) {
      for (var I = CI(A, 16384), g = Gg(I); A < I; )
        aA[g + A++] = 0;
      return g;
    }
    var p = { ops_table: null, mount: function(A) {
      return p.createNode(null, "/", 16895, 0);
    }, createNode: function(A, I, g, B) {
      if (D.isBlkdev(g) || D.isFIFO(g))
        throw new D.ErrnoError(63);
      p.ops_table || (p.ops_table = { dir: { node: { getattr: p.node_ops.getattr, setattr: p.node_ops.setattr, lookup: p.node_ops.lookup, mknod: p.node_ops.mknod, rename: p.node_ops.rename, unlink: p.node_ops.unlink, rmdir: p.node_ops.rmdir, readdir: p.node_ops.readdir, symlink: p.node_ops.symlink }, stream: { llseek: p.stream_ops.llseek } }, file: { node: { getattr: p.node_ops.getattr, setattr: p.node_ops.setattr }, stream: { llseek: p.stream_ops.llseek, read: p.stream_ops.read, write: p.stream_ops.write, allocate: p.stream_ops.allocate, mmap: p.stream_ops.mmap, msync: p.stream_ops.msync } }, link: { node: { getattr: p.node_ops.getattr, setattr: p.node_ops.setattr, readlink: p.node_ops.readlink }, stream: {} }, chrdev: { node: { getattr: p.node_ops.getattr, setattr: p.node_ops.setattr }, stream: D.chrdev_stream_ops } });
      var i = D.createNode(A, I, g, B);
      return D.isDir(i.mode) ? (i.node_ops = p.ops_table.dir.node, i.stream_ops = p.ops_table.dir.stream, i.contents = {}) : D.isFile(i.mode) ? (i.node_ops = p.ops_table.file.node, i.stream_ops = p.ops_table.file.stream, i.usedBytes = 0, i.contents = null) : D.isLink(i.mode) ? (i.node_ops = p.ops_table.link.node, i.stream_ops = p.ops_table.link.stream) : D.isChrdev(i.mode) && (i.node_ops = p.ops_table.chrdev.node, i.stream_ops = p.ops_table.chrdev.stream), i.timestamp = Date.now(), A && (A.contents[I] = i), i;
    }, getFileDataAsRegularArray: function(A) {
      if (A.contents && A.contents.subarray) {
        for (var I = [], g = 0; g < A.usedBytes; ++g)
          I.push(A.contents[g]);
        return I;
      }
      return A.contents;
    }, getFileDataAsTypedArray: function(A) {
      return A.contents ? A.contents.subarray ? A.contents.subarray(0, A.usedBytes) : new Uint8Array(A.contents) : new Uint8Array(0);
    }, expandFileStorage: function(A, I) {
      var g = A.contents ? A.contents.length : 0;
      if (!(g >= I)) {
        var B = 1024 * 1024;
        I = Math.max(I, g * (g < B ? 2 : 1.125) >>> 0), g != 0 && (I = Math.max(I, 256));
        var i = A.contents;
        A.contents = new Uint8Array(I), A.usedBytes > 0 && A.contents.set(i.subarray(0, A.usedBytes), 0);
      }
    }, resizeFileStorage: function(A, I) {
      if (A.usedBytes != I) {
        if (I == 0) {
          A.contents = null, A.usedBytes = 0;
          return;
        }
        if (!A.contents || A.contents.subarray) {
          var g = A.contents;
          A.contents = new Uint8Array(I), g && A.contents.set(g.subarray(0, Math.min(I, A.usedBytes))), A.usedBytes = I;
          return;
        }
        if (A.contents || (A.contents = []), A.contents.length > I)
          A.contents.length = I;
        else
          for (; A.contents.length < I; )
            A.contents.push(0);
        A.usedBytes = I;
      }
    }, node_ops: { getattr: function(A) {
      var I = {};
      return I.dev = D.isChrdev(A.mode) ? A.id : 1, I.ino = A.id, I.mode = A.mode, I.nlink = 1, I.uid = 0, I.gid = 0, I.rdev = A.rdev, D.isDir(A.mode) ? I.size = 4096 : D.isFile(A.mode) ? I.size = A.usedBytes : D.isLink(A.mode) ? I.size = A.link.length : I.size = 0, I.atime = new Date(A.timestamp), I.mtime = new Date(A.timestamp), I.ctime = new Date(A.timestamp), I.blksize = 4096, I.blocks = Math.ceil(I.size / I.blksize), I;
    }, setattr: function(A, I) {
      I.mode !== void 0 && (A.mode = I.mode), I.timestamp !== void 0 && (A.timestamp = I.timestamp), I.size !== void 0 && p.resizeFileStorage(A, I.size);
    }, lookup: function(A, I) {
      throw D.genericErrors[44];
    }, mknod: function(A, I, g, B) {
      return p.createNode(A, I, g, B);
    }, rename: function(A, I, g) {
      if (D.isDir(A.mode)) {
        var B;
        try {
          B = D.lookupNode(I, g);
        } catch {
        }
        if (B)
          for (var i in B.contents)
            throw new D.ErrnoError(55);
      }
      delete A.parent.contents[A.name], A.name = g, I.contents[g] = A, A.parent = I;
    }, unlink: function(A, I) {
      delete A.contents[I];
    }, rmdir: function(A, I) {
      var g = D.lookupNode(A, I);
      for (var B in g.contents)
        throw new D.ErrnoError(55);
      delete A.contents[I];
    }, readdir: function(A) {
      var I = [".", ".."];
      for (var g in A.contents)
        !A.contents.hasOwnProperty(g) || I.push(g);
      return I;
    }, symlink: function(A, I, g) {
      var B = p.createNode(A, I, 41471, 0);
      return B.link = g, B;
    }, readlink: function(A) {
      if (!D.isLink(A.mode))
        throw new D.ErrnoError(28);
      return A.link;
    } }, stream_ops: { read: function(A, I, g, B, i) {
      var o = A.node.contents;
      if (i >= A.node.usedBytes)
        return 0;
      var w = Math.min(A.node.usedBytes - i, B);
      if (w > 8 && o.subarray)
        I.set(o.subarray(i, i + w), g);
      else
        for (var F = 0; F < w; F++)
          I[g + F] = o[i + F];
      return w;
    }, write: function(A, I, g, B, i, o) {
      if (I.buffer === aA.buffer && (o = !1), !B)
        return 0;
      var w = A.node;
      if (w.timestamp = Date.now(), I.subarray && (!w.contents || w.contents.subarray)) {
        if (o)
          return w.contents = I.subarray(g, g + B), w.usedBytes = B, B;
        if (w.usedBytes === 0 && i === 0)
          return w.contents = I.slice(g, g + B), w.usedBytes = B, B;
        if (i + B <= w.usedBytes)
          return w.contents.set(I.subarray(g, g + B), i), B;
      }
      if (p.expandFileStorage(w, i + B), w.contents.subarray && I.subarray)
        w.contents.set(I.subarray(g, g + B), i);
      else
        for (var F = 0; F < B; F++)
          w.contents[i + F] = I[g + F];
      return w.usedBytes = Math.max(w.usedBytes, i + B), B;
    }, llseek: function(A, I, g) {
      var B = I;
      if (g === 1 ? B += A.position : g === 2 && D.isFile(A.node.mode) && (B += A.node.usedBytes), B < 0)
        throw new D.ErrnoError(28);
      return B;
    }, allocate: function(A, I, g) {
      p.expandFileStorage(A.node, I + g), A.node.usedBytes = Math.max(A.node.usedBytes, I + g);
    }, mmap: function(A, I, g, B, i, o) {
      if (nA(I === 0), !D.isFile(A.node.mode))
        throw new D.ErrnoError(43);
      var w, F, N = A.node.contents;
      if (!(o & 2) && N.buffer === nI)
        F = !1, w = N.byteOffset;
      else {
        if ((B > 0 || B + g < N.length) && (N.subarray ? N = N.subarray(B, B + g) : N = Array.prototype.slice.call(N, B, B + g)), F = !0, w = kg(g), !w)
          throw new D.ErrnoError(48);
        aA.set(N, w);
      }
      return { ptr: w, allocated: F };
    }, msync: function(A, I, g, B, i) {
      if (!D.isFile(A.node.mode))
        throw new D.ErrnoError(43);
      return i & 2 || p.stream_ops.write(A, I, 0, B, g, !1), 0;
    } } }, D = { root: null, mounts: [], devices: {}, streams: [], nextInode: 1, nameTable: null, currentPath: "/", initialized: !1, ignorePermissions: !0, trackingDelegate: {}, tracking: { openFlags: { READ: 1, WRITE: 2 } }, ErrnoError: null, genericErrors: {}, filesystems: null, syncFSRequests: 0, lookupPath: function(A, I) {
      if (A = ZA.resolve(D.cwd(), A), I = I || {}, !A)
        return { path: "", node: null };
      var g = { follow_mount: !0, recurse_count: 0 };
      for (var B in g)
        I[B] === void 0 && (I[B] = g[B]);
      if (I.recurse_count > 8)
        throw new D.ErrnoError(32);
      for (var i = iA.normalizeArray(A.split("/").filter(function(S) {
        return !!S;
      }), !1), o = D.root, w = "/", F = 0; F < i.length; F++) {
        var N = F === i.length - 1;
        if (N && I.parent)
          break;
        if (o = D.lookupNode(o, i[F]), w = iA.join2(w, i[F]), D.isMountpoint(o) && (!N || N && I.follow_mount) && (o = o.mounted.root), !N || I.follow)
          for (var h = 0; D.isLink(o.mode); ) {
            var K = D.readlink(w);
            w = ZA.resolve(iA.dirname(w), K);
            var J = D.lookupPath(w, { recurse_count: I.recurse_count });
            if (o = J.node, h++ > 40)
              throw new D.ErrnoError(32);
          }
      }
      return { path: w, node: o };
    }, getPath: function(A) {
      for (var I; ; ) {
        if (D.isRoot(A)) {
          var g = A.mount.mountpoint;
          return I ? g[g.length - 1] !== "/" ? g + "/" + I : g + I : g;
        }
        I = I ? A.name + "/" + I : A.name, A = A.parent;
      }
    }, hashName: function(A, I) {
      for (var g = 0, B = 0; B < I.length; B++)
        g = (g << 5) - g + I.charCodeAt(B) | 0;
      return (A + g >>> 0) % D.nameTable.length;
    }, hashAddNode: function(A) {
      var I = D.hashName(A.parent.id, A.name);
      A.name_next = D.nameTable[I], D.nameTable[I] = A;
    }, hashRemoveNode: function(A) {
      var I = D.hashName(A.parent.id, A.name);
      if (D.nameTable[I] === A)
        D.nameTable[I] = A.name_next;
      else
        for (var g = D.nameTable[I]; g; ) {
          if (g.name_next === A) {
            g.name_next = A.name_next;
            break;
          }
          g = g.name_next;
        }
    }, lookupNode: function(A, I) {
      var g = D.mayLookup(A);
      if (g)
        throw new D.ErrnoError(g, A);
      for (var B = D.hashName(A.id, I), i = D.nameTable[B]; i; i = i.name_next) {
        var o = i.name;
        if (i.parent.id === A.id && o === I)
          return i;
      }
      return D.lookup(A, I);
    }, createNode: function(A, I, g, B) {
      var i = new D.FSNode(A, I, g, B);
      return D.hashAddNode(i), i;
    }, destroyNode: function(A) {
      D.hashRemoveNode(A);
    }, isRoot: function(A) {
      return A === A.parent;
    }, isMountpoint: function(A) {
      return !!A.mounted;
    }, isFile: function(A) {
      return (A & 61440) === 32768;
    }, isDir: function(A) {
      return (A & 61440) === 16384;
    }, isLink: function(A) {
      return (A & 61440) === 40960;
    }, isChrdev: function(A) {
      return (A & 61440) === 8192;
    }, isBlkdev: function(A) {
      return (A & 61440) === 24576;
    }, isFIFO: function(A) {
      return (A & 61440) === 4096;
    }, isSocket: function(A) {
      return (A & 49152) === 49152;
    }, flagModes: { r: 0, "r+": 2, w: 577, "w+": 578, a: 1089, "a+": 1090 }, modeStringToFlags: function(A) {
      var I = D.flagModes[A];
      if (typeof I > "u")
        throw new Error("Unknown file open mode: " + A);
      return I;
    }, flagsToPermissionString: function(A) {
      var I = ["r", "w", "rw"][A & 3];
      return A & 512 && (I += "w"), I;
    }, nodePermissions: function(A, I) {
      return D.ignorePermissions ? 0 : I.indexOf("r") !== -1 && !(A.mode & 292) || I.indexOf("w") !== -1 && !(A.mode & 146) || I.indexOf("x") !== -1 && !(A.mode & 73) ? 2 : 0;
    }, mayLookup: function(A) {
      var I = D.nodePermissions(A, "x");
      return I || (A.node_ops.lookup ? 0 : 2);
    }, mayCreate: function(A, I) {
      try {
        var g = D.lookupNode(A, I);
        return 20;
      } catch {
      }
      return D.nodePermissions(A, "wx");
    }, mayDelete: function(A, I, g) {
      var B;
      try {
        B = D.lookupNode(A, I);
      } catch (o) {
        return o.errno;
      }
      var i = D.nodePermissions(A, "wx");
      if (i)
        return i;
      if (g) {
        if (!D.isDir(B.mode))
          return 54;
        if (D.isRoot(B) || D.getPath(B) === D.cwd())
          return 10;
      } else if (D.isDir(B.mode))
        return 31;
      return 0;
    }, mayOpen: function(A, I) {
      return A ? D.isLink(A.mode) ? 32 : D.isDir(A.mode) && (D.flagsToPermissionString(I) !== "r" || I & 512) ? 31 : D.nodePermissions(A, D.flagsToPermissionString(I)) : 44;
    }, MAX_OPEN_FDS: 4096, nextfd: function(A, I) {
      A = A || 0, I = I || D.MAX_OPEN_FDS;
      for (var g = A; g <= I; g++)
        if (!D.streams[g])
          return g;
      throw new D.ErrnoError(33);
    }, getStream: function(A) {
      return D.streams[A];
    }, createStream: function(A, I, g) {
      D.FSStream || (D.FSStream = function() {
      }, D.FSStream.prototype = { object: { get: function() {
        return this.node;
      }, set: function(w) {
        this.node = w;
      } }, isRead: { get: function() {
        return (this.flags & 2097155) !== 1;
      } }, isWrite: { get: function() {
        return (this.flags & 2097155) !== 0;
      } }, isAppend: { get: function() {
        return this.flags & 1024;
      } } });
      var B = new D.FSStream();
      for (var i in A)
        B[i] = A[i];
      A = B;
      var o = D.nextfd(I, g);
      return A.fd = o, D.streams[o] = A, A;
    }, closeStream: function(A) {
      D.streams[A] = null;
    }, chrdev_stream_ops: { open: function(A) {
      var I = D.getDevice(A.node.rdev);
      A.stream_ops = I.stream_ops, A.stream_ops.open && A.stream_ops.open(A);
    }, llseek: function() {
      throw new D.ErrnoError(70);
    } }, major: function(A) {
      return A >> 8;
    }, minor: function(A) {
      return A & 255;
    }, makedev: function(A, I) {
      return A << 8 | I;
    }, registerDevice: function(A, I) {
      D.devices[A] = { stream_ops: I };
    }, getDevice: function(A) {
      return D.devices[A];
    }, getMounts: function(A) {
      for (var I = [], g = [A]; g.length; ) {
        var B = g.pop();
        I.push(B), g.push.apply(g, B.mounts);
      }
      return I;
    }, syncfs: function(A, I) {
      typeof A == "function" && (I = A, A = !1), D.syncFSRequests++, D.syncFSRequests > 1 && wA("warning: " + D.syncFSRequests + " FS.syncfs operations in flight at once, probably just doing extra work");
      var g = D.getMounts(D.root.mount), B = 0;
      function i(w) {
        return D.syncFSRequests--, I(w);
      }
      function o(w) {
        if (w)
          return o.errored ? void 0 : (o.errored = !0, i(w));
        ++B >= g.length && i(null);
      }
      g.forEach(function(w) {
        if (!w.type.syncfs)
          return o(null);
        w.type.syncfs(w, A, o);
      });
    }, mount: function(A, I, g) {
      var B = g === "/", i = !g, o;
      if (B && D.root)
        throw new D.ErrnoError(10);
      if (!B && !i) {
        var w = D.lookupPath(g, { follow_mount: !1 });
        if (g = w.path, o = w.node, D.isMountpoint(o))
          throw new D.ErrnoError(10);
        if (!D.isDir(o.mode))
          throw new D.ErrnoError(54);
      }
      var F = { type: A, opts: I, mountpoint: g, mounts: [] }, N = A.mount(F);
      return N.mount = F, F.root = N, B ? D.root = N : o && (o.mounted = F, o.mount && o.mount.mounts.push(F)), N;
    }, unmount: function(A) {
      var I = D.lookupPath(A, { follow_mount: !1 });
      if (!D.isMountpoint(I.node))
        throw new D.ErrnoError(28);
      var g = I.node, B = g.mounted, i = D.getMounts(B);
      Object.keys(D.nameTable).forEach(function(w) {
        for (var F = D.nameTable[w]; F; ) {
          var N = F.name_next;
          i.indexOf(F.mount) !== -1 && D.destroyNode(F), F = N;
        }
      }), g.mounted = null;
      var o = g.mount.mounts.indexOf(B);
      g.mount.mounts.splice(o, 1);
    }, lookup: function(A, I) {
      return A.node_ops.lookup(A, I);
    }, mknod: function(A, I, g) {
      var B = D.lookupPath(A, { parent: !0 }), i = B.node, o = iA.basename(A);
      if (!o || o === "." || o === "..")
        throw new D.ErrnoError(28);
      var w = D.mayCreate(i, o);
      if (w)
        throw new D.ErrnoError(w);
      if (!i.node_ops.mknod)
        throw new D.ErrnoError(63);
      return i.node_ops.mknod(i, o, I, g);
    }, create: function(A, I) {
      return I = I !== void 0 ? I : 438, I &= 4095, I |= 32768, D.mknod(A, I, 0);
    }, mkdir: function(A, I) {
      return I = I !== void 0 ? I : 511, I &= 1023, I |= 16384, D.mknod(A, I, 0);
    }, mkdirTree: function(A, I) {
      for (var g = A.split("/"), B = "", i = 0; i < g.length; ++i)
        if (!!g[i]) {
          B += "/" + g[i];
          try {
            D.mkdir(B, I);
          } catch (o) {
            if (o.errno != 20)
              throw o;
          }
        }
    }, mkdev: function(A, I, g) {
      return typeof g > "u" && (g = I, I = 438), I |= 8192, D.mknod(A, I, g);
    }, symlink: function(A, I) {
      if (!ZA.resolve(A))
        throw new D.ErrnoError(44);
      var g = D.lookupPath(I, { parent: !0 }), B = g.node;
      if (!B)
        throw new D.ErrnoError(44);
      var i = iA.basename(I), o = D.mayCreate(B, i);
      if (o)
        throw new D.ErrnoError(o);
      if (!B.node_ops.symlink)
        throw new D.ErrnoError(63);
      return B.node_ops.symlink(B, i, A);
    }, rename: function(A, I) {
      var g = iA.dirname(A), B = iA.dirname(I), i = iA.basename(A), o = iA.basename(I), w, F, N;
      if (w = D.lookupPath(A, { parent: !0 }), F = w.node, w = D.lookupPath(I, { parent: !0 }), N = w.node, !F || !N)
        throw new D.ErrnoError(44);
      if (F.mount !== N.mount)
        throw new D.ErrnoError(75);
      var h = D.lookupNode(F, i), K = ZA.relative(A, B);
      if (K.charAt(0) !== ".")
        throw new D.ErrnoError(28);
      if (K = ZA.relative(I, g), K.charAt(0) !== ".")
        throw new D.ErrnoError(55);
      var J;
      try {
        J = D.lookupNode(N, o);
      } catch {
      }
      if (h !== J) {
        var S = D.isDir(h.mode), L = D.mayDelete(F, i, S);
        if (L)
          throw new D.ErrnoError(L);
        if (L = J ? D.mayDelete(N, o, S) : D.mayCreate(N, o), L)
          throw new D.ErrnoError(L);
        if (!F.node_ops.rename)
          throw new D.ErrnoError(63);
        if (D.isMountpoint(h) || J && D.isMountpoint(J))
          throw new D.ErrnoError(10);
        if (N !== F && (L = D.nodePermissions(F, "w"), L))
          throw new D.ErrnoError(L);
        try {
          D.trackingDelegate.willMovePath && D.trackingDelegate.willMovePath(A, I);
        } catch (q) {
          wA("FS.trackingDelegate['willMovePath']('" + A + "', '" + I + "') threw an exception: " + q.message);
        }
        D.hashRemoveNode(h);
        try {
          F.node_ops.rename(h, N, o);
        } catch (q) {
          throw q;
        } finally {
          D.hashAddNode(h);
        }
        try {
          D.trackingDelegate.onMovePath && D.trackingDelegate.onMovePath(A, I);
        } catch (q) {
          wA("FS.trackingDelegate['onMovePath']('" + A + "', '" + I + "') threw an exception: " + q.message);
        }
      }
    }, rmdir: function(A) {
      var I = D.lookupPath(A, { parent: !0 }), g = I.node, B = iA.basename(A), i = D.lookupNode(g, B), o = D.mayDelete(g, B, !0);
      if (o)
        throw new D.ErrnoError(o);
      if (!g.node_ops.rmdir)
        throw new D.ErrnoError(63);
      if (D.isMountpoint(i))
        throw new D.ErrnoError(10);
      try {
        D.trackingDelegate.willDeletePath && D.trackingDelegate.willDeletePath(A);
      } catch (w) {
        wA("FS.trackingDelegate['willDeletePath']('" + A + "') threw an exception: " + w.message);
      }
      g.node_ops.rmdir(g, B), D.destroyNode(i);
      try {
        D.trackingDelegate.onDeletePath && D.trackingDelegate.onDeletePath(A);
      } catch (w) {
        wA("FS.trackingDelegate['onDeletePath']('" + A + "') threw an exception: " + w.message);
      }
    }, readdir: function(A) {
      var I = D.lookupPath(A, { follow: !0 }), g = I.node;
      if (!g.node_ops.readdir)
        throw new D.ErrnoError(54);
      return g.node_ops.readdir(g);
    }, unlink: function(A) {
      var I = D.lookupPath(A, { parent: !0 }), g = I.node, B = iA.basename(A), i = D.lookupNode(g, B), o = D.mayDelete(g, B, !1);
      if (o)
        throw new D.ErrnoError(o);
      if (!g.node_ops.unlink)
        throw new D.ErrnoError(63);
      if (D.isMountpoint(i))
        throw new D.ErrnoError(10);
      try {
        D.trackingDelegate.willDeletePath && D.trackingDelegate.willDeletePath(A);
      } catch (w) {
        wA("FS.trackingDelegate['willDeletePath']('" + A + "') threw an exception: " + w.message);
      }
      g.node_ops.unlink(g, B), D.destroyNode(i);
      try {
        D.trackingDelegate.onDeletePath && D.trackingDelegate.onDeletePath(A);
      } catch (w) {
        wA("FS.trackingDelegate['onDeletePath']('" + A + "') threw an exception: " + w.message);
      }
    }, readlink: function(A) {
      var I = D.lookupPath(A), g = I.node;
      if (!g)
        throw new D.ErrnoError(44);
      if (!g.node_ops.readlink)
        throw new D.ErrnoError(28);
      return ZA.resolve(D.getPath(g.parent), g.node_ops.readlink(g));
    }, stat: function(A, I) {
      var g = D.lookupPath(A, { follow: !I }), B = g.node;
      if (!B)
        throw new D.ErrnoError(44);
      if (!B.node_ops.getattr)
        throw new D.ErrnoError(63);
      return B.node_ops.getattr(B);
    }, lstat: function(A) {
      return D.stat(A, !0);
    }, chmod: function(A, I, g) {
      var B;
      if (typeof A == "string") {
        var i = D.lookupPath(A, { follow: !g });
        B = i.node;
      } else
        B = A;
      if (!B.node_ops.setattr)
        throw new D.ErrnoError(63);
      B.node_ops.setattr(B, { mode: I & 4095 | B.mode & -4096, timestamp: Date.now() });
    }, lchmod: function(A, I) {
      D.chmod(A, I, !0);
    }, fchmod: function(A, I) {
      var g = D.getStream(A);
      if (!g)
        throw new D.ErrnoError(8);
      D.chmod(g.node, I);
    }, chown: function(A, I, g, B) {
      var i;
      if (typeof A == "string") {
        var o = D.lookupPath(A, { follow: !B });
        i = o.node;
      } else
        i = A;
      if (!i.node_ops.setattr)
        throw new D.ErrnoError(63);
      i.node_ops.setattr(i, { timestamp: Date.now() });
    }, lchown: function(A, I, g) {
      D.chown(A, I, g, !0);
    }, fchown: function(A, I, g) {
      var B = D.getStream(A);
      if (!B)
        throw new D.ErrnoError(8);
      D.chown(B.node, I, g);
    }, truncate: function(A, I) {
      if (I < 0)
        throw new D.ErrnoError(28);
      var g;
      if (typeof A == "string") {
        var B = D.lookupPath(A, { follow: !0 });
        g = B.node;
      } else
        g = A;
      if (!g.node_ops.setattr)
        throw new D.ErrnoError(63);
      if (D.isDir(g.mode))
        throw new D.ErrnoError(31);
      if (!D.isFile(g.mode))
        throw new D.ErrnoError(28);
      var i = D.nodePermissions(g, "w");
      if (i)
        throw new D.ErrnoError(i);
      g.node_ops.setattr(g, { size: I, timestamp: Date.now() });
    }, ftruncate: function(A, I) {
      var g = D.getStream(A);
      if (!g)
        throw new D.ErrnoError(8);
      if ((g.flags & 2097155) === 0)
        throw new D.ErrnoError(28);
      D.truncate(g.node, I);
    }, utime: function(A, I, g) {
      var B = D.lookupPath(A, { follow: !0 }), i = B.node;
      i.node_ops.setattr(i, { timestamp: Math.max(I, g) });
    }, open: function(A, I, g, B, i) {
      if (A === "")
        throw new D.ErrnoError(44);
      I = typeof I == "string" ? D.modeStringToFlags(I) : I, g = typeof g > "u" ? 438 : g, I & 64 ? g = g & 4095 | 32768 : g = 0;
      var o;
      if (typeof A == "object")
        o = A;
      else {
        A = iA.normalize(A);
        try {
          var w = D.lookupPath(A, { follow: !(I & 131072) });
          o = w.node;
        } catch {
        }
      }
      var F = !1;
      if (I & 64)
        if (o) {
          if (I & 128)
            throw new D.ErrnoError(20);
        } else
          o = D.mknod(A, g, 0), F = !0;
      if (!o)
        throw new D.ErrnoError(44);
      if (D.isChrdev(o.mode) && (I &= -513), I & 65536 && !D.isDir(o.mode))
        throw new D.ErrnoError(54);
      if (!F) {
        var N = D.mayOpen(o, I);
        if (N)
          throw new D.ErrnoError(N);
      }
      I & 512 && D.truncate(o, 0), I &= -131713;
      var h = D.createStream({ node: o, path: D.getPath(o), flags: I, seekable: !0, position: 0, stream_ops: o.stream_ops, ungotten: [], error: !1 }, B, i);
      h.stream_ops.open && h.stream_ops.open(h), G.logReadFiles && !(I & 1) && (D.readFiles || (D.readFiles = {}), A in D.readFiles || (D.readFiles[A] = 1, wA("FS.trackingDelegate error on read file: " + A)));
      try {
        if (D.trackingDelegate.onOpenFile) {
          var K = 0;
          (I & 2097155) !== 1 && (K |= D.tracking.openFlags.READ), (I & 2097155) !== 0 && (K |= D.tracking.openFlags.WRITE), D.trackingDelegate.onOpenFile(A, K);
        }
      } catch (J) {
        wA("FS.trackingDelegate['onOpenFile']('" + A + "', flags) threw an exception: " + J.message);
      }
      return h;
    }, close: function(A) {
      if (D.isClosed(A))
        throw new D.ErrnoError(8);
      A.getdents && (A.getdents = null);
      try {
        A.stream_ops.close && A.stream_ops.close(A);
      } catch (I) {
        throw I;
      } finally {
        D.closeStream(A.fd);
      }
      A.fd = null;
    }, isClosed: function(A) {
      return A.fd === null;
    }, llseek: function(A, I, g) {
      if (D.isClosed(A))
        throw new D.ErrnoError(8);
      if (!A.seekable || !A.stream_ops.llseek)
        throw new D.ErrnoError(70);
      if (g != 0 && g != 1 && g != 2)
        throw new D.ErrnoError(28);
      return A.position = A.stream_ops.llseek(A, I, g), A.ungotten = [], A.position;
    }, read: function(A, I, g, B, i) {
      if (B < 0 || i < 0)
        throw new D.ErrnoError(28);
      if (D.isClosed(A))
        throw new D.ErrnoError(8);
      if ((A.flags & 2097155) === 1)
        throw new D.ErrnoError(8);
      if (D.isDir(A.node.mode))
        throw new D.ErrnoError(31);
      if (!A.stream_ops.read)
        throw new D.ErrnoError(28);
      var o = typeof i < "u";
      if (!o)
        i = A.position;
      else if (!A.seekable)
        throw new D.ErrnoError(70);
      var w = A.stream_ops.read(A, I, g, B, i);
      return o || (A.position += w), w;
    }, write: function(A, I, g, B, i, o) {
      if (B < 0 || i < 0)
        throw new D.ErrnoError(28);
      if (D.isClosed(A))
        throw new D.ErrnoError(8);
      if ((A.flags & 2097155) === 0)
        throw new D.ErrnoError(8);
      if (D.isDir(A.node.mode))
        throw new D.ErrnoError(31);
      if (!A.stream_ops.write)
        throw new D.ErrnoError(28);
      A.seekable && A.flags & 1024 && D.llseek(A, 0, 2);
      var w = typeof i < "u";
      if (!w)
        i = A.position;
      else if (!A.seekable)
        throw new D.ErrnoError(70);
      var F = A.stream_ops.write(A, I, g, B, i, o);
      w || (A.position += F);
      try {
        A.path && D.trackingDelegate.onWriteToFile && D.trackingDelegate.onWriteToFile(A.path);
      } catch (N) {
        wA("FS.trackingDelegate['onWriteToFile']('" + A.path + "') threw an exception: " + N.message);
      }
      return F;
    }, allocate: function(A, I, g) {
      if (D.isClosed(A))
        throw new D.ErrnoError(8);
      if (I < 0 || g <= 0)
        throw new D.ErrnoError(28);
      if ((A.flags & 2097155) === 0)
        throw new D.ErrnoError(8);
      if (!D.isFile(A.node.mode) && !D.isDir(A.node.mode))
        throw new D.ErrnoError(43);
      if (!A.stream_ops.allocate)
        throw new D.ErrnoError(138);
      A.stream_ops.allocate(A, I, g);
    }, mmap: function(A, I, g, B, i, o) {
      if ((i & 2) !== 0 && (o & 2) === 0 && (A.flags & 2097155) !== 2)
        throw new D.ErrnoError(2);
      if ((A.flags & 2097155) === 1)
        throw new D.ErrnoError(2);
      if (!A.stream_ops.mmap)
        throw new D.ErrnoError(43);
      return A.stream_ops.mmap(A, I, g, B, i, o);
    }, msync: function(A, I, g, B, i) {
      return !A || !A.stream_ops.msync ? 0 : A.stream_ops.msync(A, I, g, B, i);
    }, munmap: function(A) {
      return 0;
    }, ioctl: function(A, I, g) {
      if (!A.stream_ops.ioctl)
        throw new D.ErrnoError(59);
      return A.stream_ops.ioctl(A, I, g);
    }, readFile: function(A, I) {
      if (I = I || {}, I.flags = I.flags || 0, I.encoding = I.encoding || "binary", I.encoding !== "utf8" && I.encoding !== "binary")
        throw new Error('Invalid encoding type "' + I.encoding + '"');
      var g, B = D.open(A, I.flags), i = D.stat(A), o = i.size, w = new Uint8Array(o);
      return D.read(B, w, 0, o, 0), I.encoding === "utf8" ? g = SA(w, 0) : I.encoding === "binary" && (g = w), D.close(B), g;
    }, writeFile: function(A, I, g) {
      g = g || {}, g.flags = g.flags || 577;
      var B = D.open(A, g.flags, g.mode);
      if (typeof I == "string") {
        var i = new Uint8Array(tI(I) + 1), o = TI(I, i, 0, i.length);
        D.write(B, i, 0, o, void 0, g.canOwn);
      } else if (ArrayBuffer.isView(I))
        D.write(B, I, 0, I.byteLength, void 0, g.canOwn);
      else
        throw new Error("Unsupported data type");
      D.close(B);
    }, cwd: function() {
      return D.currentPath;
    }, chdir: function(A) {
      var I = D.lookupPath(A, { follow: !0 });
      if (I.node === null)
        throw new D.ErrnoError(44);
      if (!D.isDir(I.node.mode))
        throw new D.ErrnoError(54);
      var g = D.nodePermissions(I.node, "x");
      if (g)
        throw new D.ErrnoError(g);
      D.currentPath = I.path;
    }, createDefaultDirectories: function() {
      D.mkdir("/tmp"), D.mkdir("/home"), D.mkdir("/home/web_user");
    }, createDefaultDevices: function() {
      D.mkdir("/dev"), D.registerDevice(D.makedev(1, 3), { read: function() {
        return 0;
      }, write: function(I, g, B, i, o) {
        return i;
      } }), D.mkdev("/dev/null", D.makedev(1, 3)), FI.register(D.makedev(5, 0), FI.default_tty_ops), FI.register(D.makedev(6, 0), FI.default_tty1_ops), D.mkdev("/dev/tty", D.makedev(5, 0)), D.mkdev("/dev/tty1", D.makedev(6, 0));
      var A = zg();
      D.createDevice("/dev", "random", A), D.createDevice("/dev", "urandom", A), D.mkdir("/dev/shm"), D.mkdir("/dev/shm/tmp");
    }, createSpecialDirectories: function() {
      D.mkdir("/proc"), D.mkdir("/proc/self"), D.mkdir("/proc/self/fd"), D.mount({ mount: function() {
        var A = D.createNode("/proc/self", "fd", 16895, 73);
        return A.node_ops = { lookup: function(I, g) {
          var B = +g, i = D.getStream(B);
          if (!i)
            throw new D.ErrnoError(8);
          var o = { parent: null, mount: { mountpoint: "fake" }, node_ops: { readlink: function() {
            return i.path;
          } } };
          return o.parent = o, o;
        } }, A;
      } }, {}, "/proc/self/fd");
    }, createStandardStreams: function() {
      G.stdin ? D.createDevice("/dev", "stdin", G.stdin) : D.symlink("/dev/tty", "/dev/stdin"), G.stdout ? D.createDevice("/dev", "stdout", null, G.stdout) : D.symlink("/dev/tty", "/dev/stdout"), G.stderr ? D.createDevice("/dev", "stderr", null, G.stderr) : D.symlink("/dev/tty1", "/dev/stderr"), D.open("/dev/stdin", 0), D.open("/dev/stdout", 1), D.open("/dev/stderr", 1);
    }, ensureErrnoError: function() {
      D.ErrnoError || (D.ErrnoError = function(I, g) {
        this.node = g, this.setErrno = function(B) {
          this.errno = B;
        }, this.setErrno(I), this.message = "FS error";
      }, D.ErrnoError.prototype = new Error(), D.ErrnoError.prototype.constructor = D.ErrnoError, [44].forEach(function(A) {
        D.genericErrors[A] = new D.ErrnoError(A), D.genericErrors[A].stack = "<generic error, no stack>";
      }));
    }, staticInit: function() {
      D.ensureErrnoError(), D.nameTable = new Array(4096), D.mount(p, {}, "/"), D.createDefaultDirectories(), D.createDefaultDevices(), D.createSpecialDirectories(), D.filesystems = { MEMFS: p };
    }, init: function(A, I, g) {
      D.init.initialized = !0, D.ensureErrnoError(), G.stdin = A || G.stdin, G.stdout = I || G.stdout, G.stderr = g || G.stderr, D.createStandardStreams();
    }, quit: function() {
      D.init.initialized = !1;
      var A = G._fflush;
      A && A(0);
      for (var I = 0; I < D.streams.length; I++) {
        var g = D.streams[I];
        !g || D.close(g);
      }
    }, getMode: function(A, I) {
      var g = 0;
      return A && (g |= 365), I && (g |= 146), g;
    }, findObject: function(A, I) {
      var g = D.analyzePath(A, I);
      return g.exists ? g.object : null;
    }, analyzePath: function(A, I) {
      try {
        var g = D.lookupPath(A, { follow: !I });
        A = g.path;
      } catch {
      }
      var B = { isRoot: !1, exists: !1, error: 0, name: null, path: null, object: null, parentExists: !1, parentPath: null, parentObject: null };
      try {
        var g = D.lookupPath(A, { parent: !0 });
        B.parentExists = !0, B.parentPath = g.path, B.parentObject = g.node, B.name = iA.basename(A), g = D.lookupPath(A, { follow: !I }), B.exists = !0, B.path = g.path, B.object = g.node, B.name = g.node.name, B.isRoot = g.path === "/";
      } catch (i) {
        B.error = i.errno;
      }
      return B;
    }, createPath: function(A, I, g, B) {
      A = typeof A == "string" ? A : D.getPath(A);
      for (var i = I.split("/").reverse(); i.length; ) {
        var o = i.pop();
        if (!!o) {
          var w = iA.join2(A, o);
          try {
            D.mkdir(w);
          } catch {
          }
          A = w;
        }
      }
      return w;
    }, createFile: function(A, I, g, B, i) {
      var o = iA.join2(typeof A == "string" ? A : D.getPath(A), I), w = D.getMode(B, i);
      return D.create(o, w);
    }, createDataFile: function(A, I, g, B, i, o) {
      var w = I ? iA.join2(typeof A == "string" ? A : D.getPath(A), I) : A, F = D.getMode(B, i), N = D.create(w, F);
      if (g) {
        if (typeof g == "string") {
          for (var h = new Array(g.length), K = 0, J = g.length; K < J; ++K)
            h[K] = g.charCodeAt(K);
          g = h;
        }
        D.chmod(N, F | 146);
        var S = D.open(N, 577);
        D.write(S, g, 0, g.length, 0, o), D.close(S), D.chmod(N, F);
      }
      return N;
    }, createDevice: function(A, I, g, B) {
      var i = iA.join2(typeof A == "string" ? A : D.getPath(A), I), o = D.getMode(!!g, !!B);
      D.createDevice.major || (D.createDevice.major = 64);
      var w = D.makedev(D.createDevice.major++, 0);
      return D.registerDevice(w, { open: function(F) {
        F.seekable = !1;
      }, close: function(F) {
        B && B.buffer && B.buffer.length && B(10);
      }, read: function(F, N, h, K, J) {
        for (var S = 0, L = 0; L < K; L++) {
          var q;
          try {
            q = g();
          } catch {
            throw new D.ErrnoError(29);
          }
          if (q === void 0 && S === 0)
            throw new D.ErrnoError(6);
          if (q == null)
            break;
          S++, N[h + L] = q;
        }
        return S && (F.node.timestamp = Date.now()), S;
      }, write: function(F, N, h, K, J) {
        for (var S = 0; S < K; S++)
          try {
            B(N[h + S]);
          } catch {
            throw new D.ErrnoError(29);
          }
        return K && (F.node.timestamp = Date.now()), S;
      } }), D.mkdev(i, o, w);
    }, forceLoadFile: function(A) {
      if (A.isDevice || A.isFolder || A.link || A.contents)
        return !0;
      if (typeof XMLHttpRequest < "u")
        throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers. Use --embed-file or --preload-file in emcc on the main thread.");
      if (hA)
        try {
          A.contents = fg(hA(A.url), !0), A.usedBytes = A.contents.length;
        } catch {
          throw new D.ErrnoError(29);
        }
      else
        throw new Error("Cannot load without read() or XMLHttpRequest.");
    }, createLazyFile: function(A, I, g, B, i) {
      function o() {
        this.lengthKnown = !1, this.chunks = [];
      }
      if (o.prototype.get = function(S) {
        if (!(S > this.length - 1 || S < 0)) {
          var L = S % this.chunkSize, q = S / this.chunkSize | 0;
          return this.getter(q)[L];
        }
      }, o.prototype.setDataGetter = function(S) {
        this.getter = S;
      }, o.prototype.cacheLength = function() {
        var S = new XMLHttpRequest();
        if (S.open("HEAD", g, !1), S.send(null), !(S.status >= 200 && S.status < 300 || S.status === 304))
          throw new Error("Couldn't load " + g + ". Status: " + S.status);
        var L = Number(S.getResponseHeader("Content-length")), q, P = (q = S.getResponseHeader("Accept-Ranges")) && q === "bytes", sA = (q = S.getResponseHeader("Content-Encoding")) && q === "gzip", QA = 1024 * 1024;
        P || (QA = L);
        var Y = function(EA, z) {
          if (EA > z)
            throw new Error("invalid range (" + EA + ", " + z + ") or no bytes requested!");
          if (z > L - 1)
            throw new Error("only " + L + " bytes available! programmer error!");
          var gA = new XMLHttpRequest();
          if (gA.open("GET", g, !1), L !== QA && gA.setRequestHeader("Range", "bytes=" + EA + "-" + z), typeof Uint8Array < "u" && (gA.responseType = "arraybuffer"), gA.overrideMimeType && gA.overrideMimeType("text/plain; charset=x-user-defined"), gA.send(null), !(gA.status >= 200 && gA.status < 300 || gA.status === 304))
            throw new Error("Couldn't load " + g + ". Status: " + gA.status);
          return gA.response !== void 0 ? new Uint8Array(gA.response || []) : fg(gA.responseText || "", !0);
        }, t = this;
        t.setDataGetter(function(EA) {
          var z = EA * QA, gA = (EA + 1) * QA - 1;
          if (gA = Math.min(gA, L - 1), typeof t.chunks[EA] > "u" && (t.chunks[EA] = Y(z, gA)), typeof t.chunks[EA] > "u")
            throw new Error("doXHR failed!");
          return t.chunks[EA];
        }), (sA || !L) && (QA = L = 1, L = this.getter(0).length, QA = L, d("LazyFiles on gzip forces download of the whole file when length is accessed")), this._length = L, this._chunkSize = QA, this.lengthKnown = !0;
      }, typeof XMLHttpRequest < "u") {
        if (!W)
          throw "Cannot do synchronous binary XHRs outside webworkers in modern browsers. Use --embed-file or --preload-file in emcc";
        var w = new o();
        Object.defineProperties(w, { length: { get: function() {
          return this.lengthKnown || this.cacheLength(), this._length;
        } }, chunkSize: { get: function() {
          return this.lengthKnown || this.cacheLength(), this._chunkSize;
        } } });
        var F = { isDevice: !1, contents: w };
      } else
        var F = { isDevice: !1, url: g };
      var N = D.createFile(A, I, F, B, i);
      F.contents ? N.contents = F.contents : F.url && (N.contents = null, N.url = F.url), Object.defineProperties(N, { usedBytes: { get: function() {
        return this.contents.length;
      } } });
      var h = {}, K = Object.keys(N.stream_ops);
      return K.forEach(function(J) {
        var S = N.stream_ops[J];
        h[J] = function() {
          return D.forceLoadFile(N), S.apply(null, arguments);
        };
      }), h.read = function(S, L, q, P, sA) {
        D.forceLoadFile(N);
        var QA = S.node.contents;
        if (sA >= QA.length)
          return 0;
        var Y = Math.min(QA.length - sA, P);
        if (QA.slice)
          for (var t = 0; t < Y; t++)
            L[q + t] = QA[sA + t];
        else
          for (var t = 0; t < Y; t++)
            L[q + t] = QA.get(sA + t);
        return Y;
      }, N.stream_ops = h, N;
    }, createPreloadedFile: function(A, I, g, B, i, o, w, F, N, h) {
      a.init();
      var K = I ? ZA.resolve(iA.join2(A, I)) : A;
      function J(S) {
        function L(P) {
          h && h(), F || D.createDataFile(A, I, P, B, i, N), o && o(), fI();
        }
        var q = !1;
        G.preloadPlugins.forEach(function(P) {
          q || P.canHandle(K) && (P.handle(S, K, L, function() {
            w && w(), fI();
          }), q = !0);
        }), q || L(S);
      }
      mI(), typeof g == "string" ? a.asyncLoad(g, function(S) {
        J(S);
      }, w) : J(g);
    }, indexedDB: function() {
      return window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    }, DB_NAME: function() {
      return "EM_FS_" + window.location.pathname;
    }, DB_VERSION: 20, DB_STORE_NAME: "FILE_DATA", saveFilesToDB: function(A, I, g) {
      I = I || function() {
      }, g = g || function() {
      };
      var B = D.indexedDB();
      try {
        var i = B.open(D.DB_NAME(), D.DB_VERSION);
      } catch (o) {
        return g(o);
      }
      i.onupgradeneeded = function() {
        d("creating db");
        var w = i.result;
        w.createObjectStore(D.DB_STORE_NAME);
      }, i.onsuccess = function() {
        var w = i.result, F = w.transaction([D.DB_STORE_NAME], "readwrite"), N = F.objectStore(D.DB_STORE_NAME), h = 0, K = 0, J = A.length;
        function S() {
          K == 0 ? I() : g();
        }
        A.forEach(function(L) {
          var q = N.put(D.analyzePath(L).object.contents, L);
          q.onsuccess = function() {
            h++, h + K == J && S();
          }, q.onerror = function() {
            K++, h + K == J && S();
          };
        }), F.onerror = g;
      }, i.onerror = g;
    }, loadFilesFromDB: function(A, I, g) {
      I = I || function() {
      }, g = g || function() {
      };
      var B = D.indexedDB();
      try {
        var i = B.open(D.DB_NAME(), D.DB_VERSION);
      } catch (o) {
        return g(o);
      }
      i.onupgradeneeded = g, i.onsuccess = function() {
        var w = i.result;
        try {
          var F = w.transaction([D.DB_STORE_NAME], "readonly");
        } catch (L) {
          g(L);
          return;
        }
        var N = F.objectStore(D.DB_STORE_NAME), h = 0, K = 0, J = A.length;
        function S() {
          K == 0 ? I() : g();
        }
        A.forEach(function(L) {
          var q = N.get(L);
          q.onsuccess = function() {
            D.analyzePath(L).exists && D.unlink(L), D.createDataFile(iA.dirname(L), iA.basename(L), q.result, !0, !0, !0), h++, h + K == J && S();
          }, q.onerror = function() {
            K++, h + K == J && S();
          };
        }), F.onerror = g;
      }, i.onerror = g;
    } }, kA = { mappings: {}, DEFAULT_POLLMASK: 5, umask: 511, calculateAt: function(A, I) {
      if (I[0] !== "/") {
        var g;
        if (A === -100)
          g = D.cwd();
        else {
          var B = D.getStream(A);
          if (!B)
            throw new D.ErrnoError(8);
          g = B.path;
        }
        I = iA.join2(g, I);
      }
      return I;
    }, doStat: function(A, I, g) {
      try {
        var B = A(I);
      } catch (i) {
        if (i && i.node && iA.normalize(I) !== iA.normalize(D.getPath(i.node)))
          return -54;
        throw i;
      }
      return n[g >> 2] = B.dev, n[g + 4 >> 2] = 0, n[g + 8 >> 2] = B.ino, n[g + 12 >> 2] = B.mode, n[g + 16 >> 2] = B.nlink, n[g + 20 >> 2] = B.uid, n[g + 24 >> 2] = B.gid, n[g + 28 >> 2] = B.rdev, n[g + 32 >> 2] = 0, zA = [B.size >>> 0, (Z = B.size, +Math.abs(Z) >= 1 ? Z > 0 ? (Math.min(+Math.floor(Z / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((Z - +(~~Z >>> 0)) / 4294967296) >>> 0 : 0)], n[g + 40 >> 2] = zA[0], n[g + 44 >> 2] = zA[1], n[g + 48 >> 2] = 4096, n[g + 52 >> 2] = B.blocks, n[g + 56 >> 2] = B.atime.getTime() / 1e3 | 0, n[g + 60 >> 2] = 0, n[g + 64 >> 2] = B.mtime.getTime() / 1e3 | 0, n[g + 68 >> 2] = 0, n[g + 72 >> 2] = B.ctime.getTime() / 1e3 | 0, n[g + 76 >> 2] = 0, zA = [B.ino >>> 0, (Z = B.ino, +Math.abs(Z) >= 1 ? Z > 0 ? (Math.min(+Math.floor(Z / 4294967296), 4294967295) | 0) >>> 0 : ~~+Math.ceil((Z - +(~~Z >>> 0)) / 4294967296) >>> 0 : 0)], n[g + 80 >> 2] = zA[0], n[g + 84 >> 2] = zA[1], 0;
    }, doMsync: function(A, I, g, B, i) {
      var o = JA.slice(A, A + g);
      D.msync(I, o, i, g, B);
    }, doMkdir: function(A, I) {
      return A = iA.normalize(A), A[A.length - 1] === "/" && (A = A.substr(0, A.length - 1)), D.mkdir(A, I, 0), 0;
    }, doMknod: function(A, I, g) {
      switch (I & 61440) {
        case 32768:
        case 8192:
        case 24576:
        case 4096:
        case 49152:
          break;
        default:
          return -28;
      }
      return D.mknod(A, I, g), 0;
    }, doReadlink: function(A, I, g) {
      if (g <= 0)
        return -28;
      var B = D.readlink(A), i = Math.min(g, tI(B)), o = aA[I + i];
      return wg(B, I, g + 1), aA[I + i] = o, i;
    }, doAccess: function(A, I) {
      if (I & -8)
        return -28;
      var g, B = D.lookupPath(A, { follow: !0 });
      if (g = B.node, !g)
        return -44;
      var i = "";
      return I & 4 && (i += "r"), I & 2 && (i += "w"), I & 1 && (i += "x"), i && D.nodePermissions(g, i) ? -2 : 0;
    }, doDup: function(A, I, g) {
      var B = D.getStream(g);
      return B && D.close(B), D.open(A, I, 0, g, g).fd;
    }, doReadv: function(A, I, g, B) {
      for (var i = 0, o = 0; o < g; o++) {
        var w = n[I + o * 8 >> 2], F = n[I + (o * 8 + 4) >> 2], N = D.read(A, aA, w, F, B);
        if (N < 0)
          return -1;
        if (i += N, N < F)
          break;
      }
      return i;
    }, doWritev: function(A, I, g, B) {
      for (var i = 0, o = 0; o < g; o++) {
        var w = n[I + o * 8 >> 2], F = n[I + (o * 8 + 4) >> 2], N = D.write(A, aA, w, F, B);
        if (N < 0)
          return -1;
        i += N;
      }
      return i;
    }, varargs: void 0, get: function() {
      kA.varargs += 4;
      var A = n[kA.varargs - 4 >> 2];
      return A;
    }, getStr: function(A) {
      var I = qI(A);
      return I;
    }, getStreamFromFD: function(A) {
      var I = D.getStream(A);
      if (!I)
        throw new D.ErrnoError(8);
      return I;
    }, get64: function(A, I) {
      return A;
    } };
    function RI(A, I, g) {
      kA.varargs = g;
      try {
        var B = kA.getStreamFromFD(A);
        switch (I) {
          case 0: {
            var i = kA.get();
            if (i < 0)
              return -28;
            var o;
            return o = D.open(B.path, B.flags, 0, i), o.fd;
          }
          case 1:
          case 2:
            return 0;
          case 3:
            return B.flags;
          case 4: {
            var i = kA.get();
            return B.flags |= i, 0;
          }
          case 12: {
            var i = kA.get(), w = 0;
            return OA[i + w >> 1] = 2, 0;
          }
          case 13:
          case 14:
            return 0;
          case 16:
          case 8:
            return -28;
          case 9:
            return Mg(28), -1;
          default:
            return -28;
        }
      } catch (F) {
        return (typeof D > "u" || !(F instanceof D.ErrnoError)) && YA(F), -F.errno;
      }
    }
    function vg(A, I, g) {
      kA.varargs = g;
      try {
        var B = kA.getStreamFromFD(A);
        switch (I) {
          case 21509:
          case 21505:
            return B.tty ? 0 : -59;
          case 21510:
          case 21511:
          case 21512:
          case 21506:
          case 21507:
          case 21508:
            return B.tty ? 0 : -59;
          case 21519: {
            if (!B.tty)
              return -59;
            var i = kA.get();
            return n[i >> 2] = 0, 0;
          }
          case 21520:
            return B.tty ? -28 : -59;
          case 21531: {
            var i = kA.get();
            return D.ioctl(B, I, i);
          }
          case 21523:
            return B.tty ? 0 : -59;
          case 21524:
            return B.tty ? 0 : -59;
          default:
            YA("bad ioctl syscall " + I);
        }
      } catch (o) {
        return (typeof D > "u" || !(o instanceof D.ErrnoError)) && YA(o), -o.errno;
      }
    }
    function _g(A, I, g) {
      kA.varargs = g;
      try {
        var B = kA.getStr(A), i = kA.get(), o = D.open(B, I, i);
        return o.fd;
      } catch (w) {
        return (typeof D > "u" || !(w instanceof D.ErrnoError)) && YA(w), -w.errno;
      }
    }
    var NI = {};
    function bI(A) {
      for (; A.length; ) {
        var I = A.pop(), g = A.pop();
        g(I);
      }
    }
    function sI(A) {
      return this.fromWireType(pA[A >> 2]);
    }
    var YI = {}, QI = {}, cI = {}, Sg = 48, $g = 57;
    function XI(A) {
      if (A === void 0)
        return "_unknown";
      A = A.replace(/[^a-zA-Z0-9_]/g, "$");
      var I = A.charCodeAt(0);
      return I >= Sg && I <= $g ? "_" + A : A;
    }
    function gg(A, I) {
      return A = XI(A), new Function("body", "return function " + A + `() {
    "use strict";    return body.apply(this, arguments);
};
`)(I);
    }
    function Cg(A, I) {
      var g = gg(I, function(B) {
        this.name = I, this.message = B;
        var i = new Error(B).stack;
        i !== void 0 && (this.stack = this.toString() + `
` + i.replace(/^Error(:[^\n]*)?\n/, ""));
      });
      return g.prototype = Object.create(A.prototype), g.prototype.constructor = g, g.prototype.toString = function() {
        return this.message === void 0 ? this.name : this.name + ": " + this.message;
      }, g;
    }
    var Bg = void 0;
    function OI(A) {
      throw new Bg(A);
    }
    function XA(A, I, g) {
      A.forEach(function(F) {
        cI[F] = I;
      });
      function B(F) {
        var N = g(F);
        N.length !== A.length && OI("Mismatched type converter count");
        for (var h = 0; h < A.length; ++h)
          AI(A[h], N[h]);
      }
      var i = new Array(I.length), o = [], w = 0;
      I.forEach(function(F, N) {
        QI.hasOwnProperty(F) ? i[N] = QI[F] : (o.push(F), YI.hasOwnProperty(F) || (YI[F] = []), YI[F].push(function() {
          i[N] = QI[F], ++w, w === o.length && B(i);
        }));
      }), o.length === 0 && B(i);
    }
    function Qg(A) {
      var I = NI[A];
      delete NI[A];
      var g = I.elements, B = g.length, i = g.map(function(F) {
        return F.getterReturnType;
      }).concat(g.map(function(F) {
        return F.setterArgumentType;
      })), o = I.rawConstructor, w = I.rawDestructor;
      XA([A], i, function(F) {
        return g.forEach(function(N, h) {
          var K = F[h], J = N.getter, S = N.getterContext, L = F[h + B], q = N.setter, P = N.setterContext;
          N.read = function(sA) {
            return K.fromWireType(J(S, sA));
          }, N.write = function(sA, QA) {
            var Y = [];
            q(P, sA, L.toWireType(Y, QA)), bI(Y);
          };
        }), [{ name: I.name, fromWireType: function(N) {
          for (var h = new Array(B), K = 0; K < B; ++K)
            h[K] = g[K].read(N);
          return w(N), h;
        }, toWireType: function(N, h) {
          if (B !== h.length)
            throw new TypeError("Incorrect number of tuple elements for " + I.name + ": expected=" + B + ", actual=" + h.length);
          for (var K = o(), J = 0; J < B; ++J)
            g[J].write(K, h[J]);
          return N !== null && N.push(w, K), K;
        }, argPackAdvance: 8, readValueFromPointer: sI, destructorFunction: w }];
      });
    }
    var pI = {};
    function AC(A) {
      var I = pI[A];
      delete pI[A];
      var g = I.rawConstructor, B = I.rawDestructor, i = I.fields, o = i.map(function(w) {
        return w.getterReturnType;
      }).concat(i.map(function(w) {
        return w.setterArgumentType;
      }));
      XA([A], o, function(w) {
        var F = {};
        return i.forEach(function(N, h) {
          var K = N.fieldName, J = w[h], S = N.getter, L = N.getterContext, q = w[h + i.length], P = N.setter, sA = N.setterContext;
          F[K] = { read: function(QA) {
            return J.fromWireType(S(L, QA));
          }, write: function(QA, Y) {
            var t = [];
            P(sA, QA, q.toWireType(t, Y)), bI(t);
          } };
        }), [{ name: I.name, fromWireType: function(N) {
          var h = {};
          for (var K in F)
            h[K] = F[K].read(N);
          return B(N), h;
        }, toWireType: function(N, h) {
          for (var K in F)
            if (!(K in h))
              throw new TypeError('Missing field:  "' + K + '"');
          var J = g();
          for (K in F)
            F[K].write(J, h[K]);
          return N !== null && N.push(B, J), J;
        }, argPackAdvance: 8, readValueFromPointer: sI, destructorFunction: B }];
      });
    }
    function Eg(A) {
      switch (A) {
        case 1:
          return 0;
        case 2:
          return 1;
        case 4:
          return 2;
        case 8:
          return 3;
        default:
          throw new TypeError("Unknown type size: " + A);
      }
    }
    function IC() {
      for (var A = new Array(256), I = 0; I < 256; ++I)
        A[I] = String.fromCharCode(I);
      uI = A;
    }
    var uI = void 0;
    function qA(A) {
      for (var I = "", g = A; JA[g]; )
        I += uI[JA[g++]];
      return I;
    }
    var LI = void 0;
    function $(A) {
      throw new LI(A);
    }
    function AI(A, I, g) {
      if (g = g || {}, !("argPackAdvance" in I))
        throw new TypeError("registerType registeredInstance requires argPackAdvance");
      var B = I.name;
      if (A || $('type "' + B + '" must have a positive integer typeid pointer'), QI.hasOwnProperty(A)) {
        if (g.ignoreDuplicateRegistrations)
          return;
        $("Cannot register type '" + B + "' twice");
      }
      if (QI[A] = I, delete cI[A], YI.hasOwnProperty(A)) {
        var i = YI[A];
        delete YI[A], i.forEach(function(o) {
          o();
        });
      }
    }
    function gC(A, I, g, B, i) {
      var o = Eg(g);
      I = qA(I), AI(A, { name: I, fromWireType: function(w) {
        return !!w;
      }, toWireType: function(w, F) {
        return F ? B : i;
      }, argPackAdvance: 8, readValueFromPointer: function(w) {
        var F;
        if (g === 1)
          F = aA;
        else if (g === 2)
          F = OA;
        else if (g === 4)
          F = n;
        else
          throw new TypeError("Unknown boolean type size: " + I);
        return this.fromWireType(F[w >> o]);
      }, destructorFunction: null });
    }
    function Jg(A) {
      if (!(this instanceof c) || !(A instanceof c))
        return !1;
      for (var I = this.$$.ptrType.registeredClass, g = this.$$.ptr, B = A.$$.ptrType.registeredClass, i = A.$$.ptr; I.baseClass; )
        g = I.upcast(g), I = I.baseClass;
      for (; B.baseClass; )
        i = B.upcast(i), B = B.baseClass;
      return I === B && g === i;
    }
    function Yg(A) {
      return { count: A.count, deleteScheduled: A.deleteScheduled, preservePointerOnDelete: A.preservePointerOnDelete, ptr: A.ptr, ptrType: A.ptrType, smartPtr: A.smartPtr, smartPtrType: A.smartPtrType };
    }
    function jI(A) {
      function I(g) {
        return g.$$.ptrType.registeredClass.name;
      }
      $(I(A) + " instance already deleted");
    }
    var PI = !1;
    function ig(A) {
    }
    function cg(A) {
      A.smartPtr ? A.smartPtrType.rawDestructor(A.smartPtr) : A.ptrType.registeredClass.rawDestructor(A.ptr);
    }
    function Lg(A) {
      A.count.value -= 1;
      var I = A.count.value === 0;
      I && cg(A);
    }
    function HI(A) {
      return typeof FinalizationGroup > "u" ? (HI = function(I) {
        return I;
      }, A) : (PI = new FinalizationGroup(function(I) {
        for (var g = I.next(); !g.done; g = I.next()) {
          var B = g.value;
          B.ptr ? Lg(B) : console.warn("object already deleted: " + B.ptr);
        }
      }), HI = function(I) {
        return PI.register(I, I.$$, I.$$), I;
      }, ig = function(I) {
        PI.unregister(I.$$);
      }, HI(A));
    }
    function C() {
      if (this.$$.ptr || jI(this), this.$$.preservePointerOnDelete)
        return this.$$.count.value += 1, this;
      var A = HI(Object.create(Object.getPrototypeOf(this), { $$: { value: Yg(this.$$) } }));
      return A.$$.count.value += 1, A.$$.deleteScheduled = !1, A;
    }
    function Q() {
      this.$$.ptr || jI(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && $("Object already scheduled for deletion"), ig(this), Lg(this.$$), this.$$.preservePointerOnDelete || (this.$$.smartPtr = void 0, this.$$.ptr = void 0);
    }
    function E() {
      return !this.$$.ptr;
    }
    var R = void 0, s = [];
    function M() {
      for (; s.length; ) {
        var A = s.pop();
        A.$$.deleteScheduled = !1, A.delete();
      }
    }
    function y() {
      return this.$$.ptr || jI(this), this.$$.deleteScheduled && !this.$$.preservePointerOnDelete && $("Object already scheduled for deletion"), s.push(this), s.length === 1 && R && R(M), this.$$.deleteScheduled = !0, this;
    }
    function k() {
      c.prototype.isAliasOf = Jg, c.prototype.clone = C, c.prototype.delete = Q, c.prototype.isDeleted = E, c.prototype.deleteLater = y;
    }
    function c() {
    }
    var e = {};
    function m(A, I, g) {
      if (A[I].overloadTable === void 0) {
        var B = A[I];
        A[I] = function() {
          return A[I].overloadTable.hasOwnProperty(arguments.length) || $("Function '" + g + "' called with an invalid number of arguments (" + arguments.length + ") - expects one of (" + A[I].overloadTable + ")!"), A[I].overloadTable[arguments.length].apply(this, arguments);
        }, A[I].overloadTable = [], A[I].overloadTable[B.argCount] = B;
      }
    }
    function FA(A, I, g) {
      G.hasOwnProperty(A) ? ((g === void 0 || G[A].overloadTable !== void 0 && G[A].overloadTable[g] !== void 0) && $("Cannot register public name '" + A + "' twice"), m(G, A, A), G.hasOwnProperty(g) && $("Cannot register multiple overloads of a function with the same number of arguments (" + g + ")!"), G[A].overloadTable[g] = I) : (G[A] = I, g !== void 0 && (G[A].numArguments = g));
    }
    function _(A, I, g, B, i, o, w, F) {
      this.name = A, this.constructor = I, this.instancePrototype = g, this.rawDestructor = B, this.baseClass = i, this.getActualType = o, this.upcast = w, this.downcast = F, this.pureVirtualFunctions = [];
    }
    function X(A, I, g) {
      for (; I !== g; )
        I.upcast || $("Expected null or instance of " + g.name + ", got an instance of " + I.name), A = I.upcast(A), I = I.baseClass;
      return A;
    }
    function b(A, I) {
      if (I === null)
        return this.isReference && $("null is not a valid " + this.name), 0;
      I.$$ || $('Cannot pass "' + zI(I) + '" as a ' + this.name), I.$$.ptr || $("Cannot pass deleted object as a pointer of type " + this.name);
      var g = I.$$.ptrType.registeredClass, B = X(I.$$.ptr, g, this.registeredClass);
      return B;
    }
    function O(A, I) {
      var g;
      if (I === null)
        return this.isReference && $("null is not a valid " + this.name), this.isSmartPointer ? (g = this.rawConstructor(), A !== null && A.push(this.rawDestructor, g), g) : 0;
      I.$$ || $('Cannot pass "' + zI(I) + '" as a ' + this.name), I.$$.ptr || $("Cannot pass deleted object as a pointer of type " + this.name), !this.isConst && I.$$.ptrType.isConst && $("Cannot convert argument of type " + (I.$$.smartPtrType ? I.$$.smartPtrType.name : I.$$.ptrType.name) + " to parameter type " + this.name);
      var B = I.$$.ptrType.registeredClass;
      if (g = X(I.$$.ptr, B, this.registeredClass), this.isSmartPointer)
        switch (I.$$.smartPtr === void 0 && $("Passing raw pointer to smart pointer is illegal"), this.sharingPolicy) {
          case 0:
            I.$$.smartPtrType === this ? g = I.$$.smartPtr : $("Cannot convert argument of type " + (I.$$.smartPtrType ? I.$$.smartPtrType.name : I.$$.ptrType.name) + " to parameter type " + this.name);
            break;
          case 1:
            g = I.$$.smartPtr;
            break;
          case 2:
            if (I.$$.smartPtrType === this)
              g = I.$$.smartPtr;
            else {
              var i = I.clone();
              g = this.rawShare(g, Dg(function() {
                i.delete();
              })), A !== null && A.push(this.rawDestructor, g);
            }
            break;
          default:
            $("Unsupporting sharing policy");
        }
      return g;
    }
    function v(A, I) {
      if (I === null)
        return this.isReference && $("null is not a valid " + this.name), 0;
      I.$$ || $('Cannot pass "' + zI(I) + '" as a ' + this.name), I.$$.ptr || $("Cannot pass deleted object as a pointer of type " + this.name), I.$$.ptrType.isConst && $("Cannot convert argument of type " + I.$$.ptrType.name + " to parameter type " + this.name);
      var g = I.$$.ptrType.registeredClass, B = X(I.$$.ptr, g, this.registeredClass);
      return B;
    }
    function IA(A) {
      return this.rawGetPointee && (A = this.rawGetPointee(A)), A;
    }
    function eA(A) {
      this.rawDestructor && this.rawDestructor(A);
    }
    function NA(A) {
      A !== null && A.delete();
    }
    function fA(A, I, g) {
      if (I === g)
        return A;
      if (g.baseClass === void 0)
        return null;
      var B = fA(A, I, g.baseClass);
      return B === null ? null : g.downcast(B);
    }
    function cA() {
      return Object.keys(u).length;
    }
    function j() {
      var A = [];
      for (var I in u)
        u.hasOwnProperty(I) && A.push(u[I]);
      return A;
    }
    function CA(A) {
      R = A, s.length && R && R(M);
    }
    function DA() {
      G.getInheritedInstanceCount = cA, G.getLiveInheritedInstances = j, G.flushPendingDeletes = M, G.setDelayFunction = CA;
    }
    var u = {};
    function BA(A, I) {
      for (I === void 0 && $("ptr should not be undefined"); A.baseClass; )
        I = A.upcast(I), A = A.baseClass;
      return I;
    }
    function oA(A, I) {
      return I = BA(A, I), u[I];
    }
    function II(A, I) {
      (!I.ptrType || !I.ptr) && OI("makeClassHandle requires ptr and ptrType");
      var g = !!I.smartPtrType, B = !!I.smartPtr;
      return g !== B && OI("Both smartPtrType and smartPtr must be specified"), I.count = { value: 1 }, HI(Object.create(A, { $$: { value: I } }));
    }
    function fC(A) {
      var I = this.getPointee(A);
      if (!I)
        return this.destructor(A), null;
      var g = oA(this.registeredClass, I);
      if (g !== void 0) {
        if (g.$$.count.value === 0)
          return g.$$.ptr = I, g.$$.smartPtr = A, g.clone();
        var B = g.clone();
        return this.destructor(A), B;
      }
      function i() {
        return this.isSmartPointer ? II(this.registeredClass.instancePrototype, { ptrType: this.pointeeType, ptr: I, smartPtrType: this, smartPtr: A }) : II(this.registeredClass.instancePrototype, { ptrType: this, ptr: A });
      }
      var o = this.registeredClass.getActualType(I), w = e[o];
      if (!w)
        return i.call(this);
      var F;
      this.isConst ? F = w.constPointerType : F = w.pointerType;
      var N = fA(I, this.registeredClass, F.registeredClass);
      return N === null ? i.call(this) : this.isSmartPointer ? II(F.registeredClass.instancePrototype, { ptrType: F, ptr: N, smartPtrType: this, smartPtr: A }) : II(F.registeredClass.instancePrototype, { ptrType: F, ptr: N });
    }
    function VC() {
      hI.prototype.getPointee = IA, hI.prototype.destructor = eA, hI.prototype.argPackAdvance = 8, hI.prototype.readValueFromPointer = sI, hI.prototype.deleteObject = NA, hI.prototype.fromWireType = fC;
    }
    function hI(A, I, g, B, i, o, w, F, N, h, K) {
      this.name = A, this.registeredClass = I, this.isReference = g, this.isConst = B, this.isSmartPointer = i, this.pointeeType = o, this.sharingPolicy = w, this.rawGetPointee = F, this.rawConstructor = N, this.rawShare = h, this.rawDestructor = K, !i && I.baseClass === void 0 ? B ? (this.toWireType = b, this.destructorFunction = null) : (this.toWireType = v, this.destructorFunction = null) : this.toWireType = O;
    }
    function sC(A, I, g) {
      G.hasOwnProperty(A) || OI("Replacing nonexistant public symbol"), G[A].overloadTable !== void 0 && g !== void 0 ? G[A].overloadTable[g] = I : (G[A] = I, G[A].argCount = g);
    }
    function bC(A, I, g) {
      return g && g.length ? G["dynCall_" + A].apply(null, [I].concat(g)) : G["dynCall_" + A].call(null, I);
    }
    function WC(A, I, g) {
      return A.indexOf("j") != -1 ? bC(A, I, g) : mA.get(I).apply(null, g);
    }
    function xC(A, I) {
      nA(A.indexOf("j") >= 0, "getDynCaller should only be called with i64 sigs");
      var g = [];
      return function() {
        g.length = arguments.length;
        for (var B = 0; B < arguments.length; B++)
          g[B] = arguments[B];
        return WC(A, I, g);
      };
    }
    function VA(A, I) {
      A = qA(A);
      function g() {
        return A.indexOf("j") != -1 ? xC(A, I) : mA.get(I);
      }
      var B = g();
      return typeof B != "function" && $("unknown function pointer with signature " + A + ": " + I), B;
    }
    var hC = void 0;
    function aC(A) {
      var I = qC(A), g = qA(I);
      return aI(I), g;
    }
    function WI(A, I) {
      var g = [], B = {};
      function i(o) {
        if (!B[o] && !QI[o]) {
          if (cI[o]) {
            cI[o].forEach(i);
            return;
          }
          g.push(o), B[o] = !0;
        }
      }
      throw I.forEach(i), new hC(A + ": " + g.map(aC).join([", "]));
    }
    function ZC(A, I, g, B, i, o, w, F, N, h, K, J, S) {
      K = qA(K), o = VA(i, o), F && (F = VA(w, F)), h && (h = VA(N, h)), S = VA(J, S);
      var L = XI(K);
      FA(L, function() {
        WI("Cannot construct " + K + " due to unbound types", [B]);
      }), XA([A, I, g], B ? [B] : [], function(q) {
        q = q[0];
        var P, sA;
        B ? (P = q.registeredClass, sA = P.instancePrototype) : sA = c.prototype;
        var QA = gg(L, function() {
          if (Object.getPrototypeOf(this) !== Y)
            throw new LI("Use 'new' to construct " + K);
          if (t.constructor_body === void 0)
            throw new LI(K + " has no accessible constructor");
          var bA = t.constructor_body[arguments.length];
          if (bA === void 0)
            throw new LI("Tried to invoke ctor of " + K + " with invalid number of parameters (" + arguments.length + ") - expected (" + Object.keys(t.constructor_body).toString() + ") parameters instead!");
          return bA.apply(this, arguments);
        }), Y = Object.create(sA, { constructor: { value: QA } });
        QA.prototype = Y;
        var t = new _(K, QA, Y, S, P, o, F, h), EA = new hI(K, t, !0, !1, !1), z = new hI(K + "*", t, !1, !1, !1), gA = new hI(K + " const*", t, !1, !0, !1);
        return e[A] = { pointerType: z, constPointerType: gA }, sC(L, QA), [EA, z, gA];
      });
    }
    function yC(A, I) {
      if (!(A instanceof Function))
        throw new TypeError("new_ called with constructor type " + typeof A + " which is not a function");
      var g = gg(A.name || "unknownFunctionName", function() {
      });
      g.prototype = A.prototype;
      var B = new g(), i = A.apply(B, I);
      return i instanceof Object ? i : B;
    }
    function CC(A, I, g, B, i) {
      var o = I.length;
      o < 2 && $("argTypes array size mismatch! Must at least get return value and 'this' types!");
      for (var w = I[1] !== null && g !== null, F = !1, N = 1; N < I.length; ++N)
        if (I[N] !== null && I[N].destructorFunction === void 0) {
          F = !0;
          break;
        }
      for (var h = I[0].name !== "void", K = "", J = "", N = 0; N < o - 2; ++N)
        K += (N !== 0 ? ", " : "") + "arg" + N, J += (N !== 0 ? ", " : "") + "arg" + N + "Wired";
      var S = "return function " + XI(A) + "(" + K + `) {
if (arguments.length !== ` + (o - 2) + `) {
throwBindingError('function ` + A + " called with ' + arguments.length + ' arguments, expected " + (o - 2) + ` args!');
}
`;
      F && (S += `var destructors = [];
`);
      var L = F ? "destructors" : "null", q = ["throwBindingError", "invoker", "fn", "runDestructors", "retType", "classParam"], P = [$, B, i, bI, I[0], I[1]];
      w && (S += "var thisWired = classParam.toWireType(" + L + `, this);
`);
      for (var N = 0; N < o - 2; ++N)
        S += "var arg" + N + "Wired = argType" + N + ".toWireType(" + L + ", arg" + N + "); // " + I[N + 2].name + `
`, q.push("argType" + N), P.push(I[N + 2]);
      if (w && (J = "thisWired" + (J.length > 0 ? ", " : "") + J), S += (h ? "var rv = " : "") + "invoker(fn" + (J.length > 0 ? ", " : "") + J + `);
`, F)
        S += `runDestructors(destructors);
`;
      else
        for (var N = w ? 1 : 2; N < I.length; ++N) {
          var sA = N === 1 ? "thisWired" : "arg" + (N - 2) + "Wired";
          I[N].destructorFunction !== null && (S += sA + "_dtor(" + sA + "); // " + I[N].name + `
`, q.push(sA + "_dtor"), P.push(I[N].destructorFunction));
        }
      h && (S += `var ret = retType.fromWireType(rv);
return ret;
`), S += `}
`, q.push(S);
      var QA = yC(Function, q).apply(null, P);
      return QA;
    }
    function Hg(A, I) {
      for (var g = [], B = 0; B < A; B++)
        g.push(n[(I >> 2) + B]);
      return g;
    }
    function TC(A, I, g, B, i, o, w) {
      var F = Hg(g, B);
      I = qA(I), o = VA(i, o), XA([], [A], function(N) {
        N = N[0];
        var h = N.name + "." + I;
        function K() {
          WI("Cannot call " + h + " due to unbound types", F);
        }
        var J = N.registeredClass.constructor;
        return J[I] === void 0 ? (K.argCount = g - 1, J[I] = K) : (m(J, I, h), J[I].overloadTable[g - 1] = K), XA([], F, function(S) {
          var L = [S[0], null].concat(S.slice(1)), q = CC(h, L, null, o, w);
          return J[I].overloadTable === void 0 ? (q.argCount = g - 1, J[I] = q) : J[I].overloadTable[g - 1] = q, [];
        }), [];
      });
    }
    function mC(A, I, g, B, i, o) {
      nA(I > 0);
      var w = Hg(I, g);
      i = VA(B, i);
      var F = [o], N = [];
      XA([], [A], function(h) {
        h = h[0];
        var K = "constructor " + h.name;
        if (h.registeredClass.constructor_body === void 0 && (h.registeredClass.constructor_body = []), h.registeredClass.constructor_body[I - 1] !== void 0)
          throw new LI("Cannot register multiple constructors with identical number of parameters (" + (I - 1) + ") for class '" + h.name + "'! Overload resolution is currently only performed using the parameter count, not actual type info!");
        return h.registeredClass.constructor_body[I - 1] = function() {
          WI("Cannot construct " + h.name + " due to unbound types", w);
        }, XA([], w, function(J) {
          return h.registeredClass.constructor_body[I - 1] = function() {
            arguments.length !== I - 1 && $(K + " called with " + arguments.length + " arguments, expected " + (I - 1)), N.length = 0, F.length = I;
            for (var L = 1; L < I; ++L)
              F[L] = J[L].toWireType(N, arguments[L - 1]);
            var q = i.apply(null, F);
            return bI(N), J[0].fromWireType(q);
          }, [];
        }), [];
      });
    }
    function XC(A, I, g, B, i, o, w, F) {
      var N = Hg(g, B);
      I = qA(I), o = VA(i, o), XA([], [A], function(h) {
        h = h[0];
        var K = h.name + "." + I;
        F && h.registeredClass.pureVirtualFunctions.push(I);
        function J() {
          WI("Cannot call " + K + " due to unbound types", N);
        }
        var S = h.registeredClass.instancePrototype, L = S[I];
        return L === void 0 || L.overloadTable === void 0 && L.className !== h.name && L.argCount === g - 2 ? (J.argCount = g - 2, J.className = h.name, S[I] = J) : (m(S, I, K), S[I].overloadTable[g - 2] = J), XA([], N, function(q) {
          var P = CC(K, q, h, o, w);
          return S[I].overloadTable === void 0 ? (P.argCount = g - 2, S[I] = P) : S[I].overloadTable[g - 2] = P, [];
        }), [];
      });
    }
    function KC(A, I, g) {
      return A instanceof Object || $(g + ' with invalid "this": ' + A), A instanceof I.registeredClass.constructor || $(g + ' incompatible with "this" of type ' + A.constructor.name), A.$$.ptr || $("cannot call emscripten binding method " + g + " on deleted object"), X(A.$$.ptr, A.$$.ptrType.registeredClass, I.registeredClass);
    }
    function OC(A, I, g, B, i, o, w, F, N, h) {
      I = qA(I), i = VA(B, i), XA([], [A], function(K) {
        K = K[0];
        var J = K.name + "." + I, S = { get: function() {
          WI("Cannot access " + J + " due to unbound types", [g, w]);
        }, enumerable: !0, configurable: !0 };
        return N ? S.set = function() {
          WI("Cannot access " + J + " due to unbound types", [g, w]);
        } : S.set = function(L) {
          $(J + " is a read-only property");
        }, Object.defineProperty(K.registeredClass.instancePrototype, I, S), XA([], N ? [g, w] : [g], function(L) {
          var q = L[0], P = { get: function() {
            var QA = KC(this, K, J + " getter");
            return q.fromWireType(i(o, QA));
          }, enumerable: !0 };
          if (N) {
            N = VA(F, N);
            var sA = L[1];
            P.set = function(QA) {
              var Y = KC(this, K, J + " setter"), t = [];
              N(h, Y, sA.toWireType(t, QA)), bI(t);
            };
          }
          return Object.defineProperty(K.registeredClass.instancePrototype, I, P), [];
        }), [];
      });
    }
    function pC(A, I, g) {
      A = qA(A), XA([], [I], function(B) {
        return B = B[0], G[A] = B.fromWireType(g), [];
      });
    }
    var BC = [], vA = [{}, { value: void 0 }, { value: null }, { value: !0 }, { value: !1 }];
    function UC(A) {
      A > 4 && --vA[A].refcount === 0 && (vA[A] = void 0, BC.push(A));
    }
    function uC() {
      for (var A = 0, I = 5; I < vA.length; ++I)
        vA[I] !== void 0 && ++A;
      return A;
    }
    function jC() {
      for (var A = 5; A < vA.length; ++A)
        if (vA[A] !== void 0)
          return vA[A];
      return null;
    }
    function PC() {
      G.count_emval_handles = uC, G.get_first_emval = jC;
    }
    function Dg(A) {
      switch (A) {
        case void 0:
          return 1;
        case null:
          return 2;
        case !0:
          return 3;
        case !1:
          return 4;
        default: {
          var I = BC.length ? BC.pop() : vA.length;
          return vA[I] = { refcount: 1, value: A }, I;
        }
      }
    }
    function zC(A, I) {
      I = qA(I), AI(A, { name: I, fromWireType: function(g) {
        var B = vA[g].value;
        return UC(g), B;
      }, toWireType: function(g, B) {
        return Dg(B);
      }, argPackAdvance: 8, readValueFromPointer: sI, destructorFunction: null });
    }
    function zI(A) {
      if (A === null)
        return "null";
      var I = typeof A;
      return I === "object" || I === "array" || I === "function" ? A.toString() : "" + A;
    }
    function vC(A, I) {
      switch (I) {
        case 2:
          return function(g) {
            return this.fromWireType(lI[g >> 2]);
          };
        case 3:
          return function(g) {
            return this.fromWireType($A[g >> 3]);
          };
        default:
          throw new TypeError("Unknown float type: " + A);
      }
    }
    function _C(A, I, g) {
      var B = Eg(g);
      I = qA(I), AI(A, { name: I, fromWireType: function(i) {
        return i;
      }, toWireType: function(i, o) {
        if (typeof o != "number" && typeof o != "boolean")
          throw new TypeError('Cannot convert "' + zI(o) + '" to ' + this.name);
        return o;
      }, argPackAdvance: 8, readValueFromPointer: vC(I, B), destructorFunction: null });
    }
    function $C(A, I, g, B, i, o) {
      var w = Hg(I, g);
      A = qA(A), i = VA(B, i), FA(A, function() {
        WI("Cannot call " + A + " due to unbound types", w);
      }, I - 1), XA([], w, function(F) {
        var N = [F[0], null].concat(F.slice(1));
        return sC(A, CC(A, N, null, i, o), I - 1), [];
      });
    }
    function AB(A, I, g) {
      switch (I) {
        case 0:
          return g ? function(i) {
            return aA[i];
          } : function(i) {
            return JA[i];
          };
        case 1:
          return g ? function(i) {
            return OA[i >> 1];
          } : function(i) {
            return eI[i >> 1];
          };
        case 2:
          return g ? function(i) {
            return n[i >> 2];
          } : function(i) {
            return pA[i >> 2];
          };
        default:
          throw new TypeError("Unknown integer type: " + A);
      }
    }
    function IB(A, I, g, B, i) {
      I = qA(I), i === -1 && (i = 4294967295);
      var o = Eg(g), w = function(h) {
        return h;
      };
      if (B === 0) {
        var F = 32 - 8 * g;
        w = function(h) {
          return h << F >>> F;
        };
      }
      var N = I.indexOf("unsigned") != -1;
      AI(A, { name: I, fromWireType: w, toWireType: function(h, K) {
        if (typeof K != "number" && typeof K != "boolean")
          throw new TypeError('Cannot convert "' + zI(K) + '" to ' + this.name);
        if (K < B || K > i)
          throw new TypeError('Passing a number "' + zI(K) + '" from JS side to C/C++ side to an argument of type "' + I + '", which is outside the valid range [' + B + ", " + i + "]!");
        return N ? K >>> 0 : K | 0;
      }, argPackAdvance: 8, readValueFromPointer: AB(I, o, B !== 0), destructorFunction: null });
    }
    function gB(A, I, g) {
      var B = [Int8Array, Uint8Array, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array], i = B[I];
      function o(w) {
        w = w >> 2;
        var F = pA, N = F[w], h = F[w + 1];
        return new i(nI, h, N);
      }
      g = qA(g), AI(A, { name: g, fromWireType: o, argPackAdvance: 8, readValueFromPointer: o }, { ignoreDuplicateRegistrations: !0 });
    }
    function CB(A, I) {
      I = qA(I);
      var g = I === "std::string";
      AI(A, { name: I, fromWireType: function(B) {
        var i = pA[B >> 2], o;
        if (g)
          for (var w = B + 4, F = 0; F <= i; ++F) {
            var N = B + 4 + F;
            if (F == i || JA[N] == 0) {
              var h = N - w, K = qI(w, h);
              o === void 0 ? o = K : (o += String.fromCharCode(0), o += K), w = N + 1;
            }
          }
        else {
          for (var J = new Array(i), F = 0; F < i; ++F)
            J[F] = String.fromCharCode(JA[B + 4 + F]);
          o = J.join("");
        }
        return aI(B), o;
      }, toWireType: function(B, i) {
        i instanceof ArrayBuffer && (i = new Uint8Array(i));
        var o, w = typeof i == "string";
        w || i instanceof Uint8Array || i instanceof Uint8ClampedArray || i instanceof Int8Array || $("Cannot pass non-string to std::string"), g && w ? o = function() {
          return tI(i);
        } : o = function() {
          return i.length;
        };
        var F = o(), N = Gg(4 + F + 1);
        if (pA[N >> 2] = F, g && w)
          wg(i, N + 4, F + 1);
        else if (w)
          for (var h = 0; h < F; ++h) {
            var K = i.charCodeAt(h);
            K > 255 && (aI(N), $("String has UTF-16 code units that do not fit in 8 bits")), JA[N + 4 + h] = K;
          }
        else
          for (var h = 0; h < F; ++h)
            JA[N + 4 + h] = i[h];
        return B !== null && B.push(aI, N), N;
      }, argPackAdvance: 8, readValueFromPointer: sI, destructorFunction: function(B) {
        aI(B);
      } });
    }
    function BB(A, I, g) {
      g = qA(g);
      var B, i, o, w, F;
      I === 2 ? (B = Rg, i = Ng, w = rI, o = function() {
        return eI;
      }, F = 1) : I === 4 && (B = Xg, i = Og, w = pg, o = function() {
        return pA;
      }, F = 2), AI(A, { name: g, fromWireType: function(N) {
        for (var h = pA[N >> 2], K = o(), J, S = N + 4, L = 0; L <= h; ++L) {
          var q = N + 4 + L * I;
          if (L == h || K[q >> F] == 0) {
            var P = q - S, sA = B(S, P);
            J === void 0 ? J = sA : (J += String.fromCharCode(0), J += sA), S = q + I;
          }
        }
        return aI(N), J;
      }, toWireType: function(N, h) {
        typeof h != "string" && $("Cannot pass non-string to C++ string type " + g);
        var K = w(h), J = Gg(4 + K + I);
        return pA[J >> 2] = K >> F, i(h, J + 4, K + I), N !== null && N.push(aI, J), J;
      }, argPackAdvance: 8, readValueFromPointer: sI, destructorFunction: function(N) {
        aI(N);
      } });
    }
    function QB(A, I, g, B, i, o) {
      NI[A] = { name: qA(I), rawConstructor: VA(g, B), rawDestructor: VA(i, o), elements: [] };
    }
    function EB(A, I, g, B, i, o, w, F, N) {
      NI[A].elements.push({ getterReturnType: I, getter: VA(g, B), getterContext: i, setterArgumentType: o, setter: VA(w, F), setterContext: N });
    }
    function iB(A, I, g, B, i, o) {
      pI[A] = { name: qA(I), rawConstructor: VA(g, B), rawDestructor: VA(i, o), fields: [] };
    }
    function DB(A, I, g, B, i, o, w, F, N, h) {
      pI[A].fields.push({ fieldName: qA(I), getterReturnType: g, getter: VA(B, i), getterContext: o, setterArgumentType: w, setter: VA(F, N), setterContext: h });
    }
    function oB(A, I) {
      I = qA(I), AI(A, { isVoid: !0, name: I, argPackAdvance: 0, fromWireType: function() {
      }, toWireType: function(g, B) {
      } });
    }
    var GB = {};
    function MC(A) {
      var I = GB[A];
      return I === void 0 ? qA(A) : I;
    }
    var QC = [];
    function qg(A) {
      return A || $("Cannot use deleted val. handle = " + A), vA[A].value;
    }
    function wB(A, I, g, B) {
      A = QC[A], I = qg(I), g = MC(g), A(I, g, null, B);
    }
    function FB(A) {
      var I = QC.length;
      return QC.push(A), I;
    }
    function kC(A, I) {
      var g = QI[A];
      return g === void 0 && $(I + " has unknown type " + aC(A)), g;
    }
    function RB(A, I) {
      for (var g = new Array(A), B = 0; B < A; ++B)
        g[B] = kC(n[(I >> 2) + B], "parameter " + B);
      return g;
    }
    function NB(A, I) {
      for (var g = RB(A, I), B = g[0], i = B.name + "_$" + g.slice(1).map(function(L) {
        return L.name;
      }).join("_") + "$", o = ["retType"], w = [B], F = "", N = 0; N < A - 1; ++N)
        F += (N !== 0 ? ", " : "") + "arg" + N, o.push("argType" + N), w.push(g[1 + N]);
      for (var h = XI("methodCaller_" + i), K = "return function " + h + `(handle, name, destructors, args) {
`, J = 0, N = 0; N < A - 1; ++N)
        K += "    var arg" + N + " = argType" + N + ".readValueFromPointer(args" + (J ? "+" + J : "") + `);
`, J += g[N + 1].argPackAdvance;
      K += "    var rv = handle[name](" + F + `);
`;
      for (var N = 0; N < A - 1; ++N)
        g[N + 1].deleteObject && (K += "    argType" + N + ".deleteObject(arg" + N + `);
`);
      B.isVoid || (K += `    return retType.toWireType(destructors, rv);
`), K += `};
`, o.push(K);
      var S = yC(Function, o).apply(null, w);
      return FB(S);
    }
    function sB(A) {
      A > 4 && (vA[A].refcount += 1);
    }
    function hB() {
      return Dg([]);
    }
    function aB(A) {
      return Dg(MC(A));
    }
    function yB(A, I, g) {
      A = qg(A), I = qg(I), g = qg(g), A[I] = g;
    }
    function KB(A, I) {
      A = kC(A, "_emval_take_value");
      var g = A.readValueFromPointer(I);
      return Dg(g);
    }
    function UB() {
      YA();
    }
    var MB = !0;
    function kB(A, I) {
      var g;
      if (A === 0)
        g = Date.now();
      else if ((A === 1 || A === 4) && MB)
        g = GI();
      else
        return Mg(28), -1;
      return n[I >> 2] = g / 1e3 | 0, n[I + 4 >> 2] = g % 1e3 * 1e3 * 1e3 | 0, 0;
    }
    function SB(A, I, g) {
      JA.copyWithin(A, I, I + g);
    }
    function JB() {
      return JA.length;
    }
    function YB(A) {
      try {
        return HA.grow(A - nI.byteLength + 65535 >>> 16), KI(HA.buffer), 1;
      } catch {
      }
    }
    function cB(A) {
      A = A >>> 0;
      var I = JB(), g = 1073741824;
      if (A > g)
        return !1;
      for (var B = 16777216, i = 1; i <= 4; i *= 2) {
        var o = I * (1 + 0.2 / i);
        o = Math.min(o, A + 100663296);
        var w = Math.min(g, hg(Math.max(B, A, o), 65536)), F = YB(w);
        if (F)
          return !0;
      }
      return !1;
    }
    var SC = {};
    function LB() {
      return V || "./this.program";
    }
    function og() {
      if (!og.strings) {
        var A = (typeof navigator == "object" && navigator.languages && navigator.languages[0] || "C").replace("-", "_") + ".UTF-8", I = { USER: "web_user", LOGNAME: "web_user", PATH: "/", PWD: "/", HOME: "/home/web_user", LANG: A, _: LB() };
        for (var g in SC)
          I[g] = SC[g];
        var B = [];
        for (var g in I)
          B.push(g + "=" + I[g]);
        og.strings = B;
      }
      return og.strings;
    }
    function HB(A, I) {
      try {
        var g = 0;
        return og().forEach(function(B, i) {
          var o = I + g;
          n[A + i * 4 >> 2] = o, ug(B, o), g += B.length + 1;
        }), 0;
      } catch (B) {
        return (typeof D > "u" || !(B instanceof D.ErrnoError)) && YA(B), B.errno;
      }
    }
    function qB(A, I) {
      try {
        var g = og();
        n[A >> 2] = g.length;
        var B = 0;
        return g.forEach(function(i) {
          B += i.length + 1;
        }), n[I >> 2] = B, 0;
      } catch (i) {
        return (typeof D > "u" || !(i instanceof D.ErrnoError)) && YA(i), i.errno;
      }
    }
    function tB(A) {
      try {
        var I = kA.getStreamFromFD(A);
        return D.close(I), 0;
      } catch (g) {
        return (typeof D > "u" || !(g instanceof D.ErrnoError)) && YA(g), g.errno;
      }
    }
    function rB(A, I, g, B) {
      try {
        var i = kA.getStreamFromFD(A), o = kA.doReadv(i, I, g);
        return n[B >> 2] = o, 0;
      } catch (w) {
        return (typeof D > "u" || !(w instanceof D.ErrnoError)) && YA(w), w.errno;
      }
    }
    function nB(A, I, g, B, i) {
    }