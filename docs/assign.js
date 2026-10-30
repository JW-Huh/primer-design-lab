/* 학번 → 유전자 배정 (핀볼과 교수자용 분반 코드 페이지가 같이 씀)
 *
 * 1) 분반 코드가 없을 때: 학번 뒤 3자리를 8개씩 묶어(000–007, 008–015, …) 한 묶음 안에서 8개 유전자가 하나씩 나온다.
 *    묶음마다 순서는 '앞 6자리 + 묶음 번호'의 해시로 섞는다. 연속된 학번은 고르게, 띄엄띄엄한 학번은 무작위처럼 나뉜다.
 * 2) 분반 코드가 있을 때: 해시('코드 + 학번') % 8. 교수자 페이지가 그 반 명단이 가장 고르게 나뉘는 코드를 찾아 준다.
 *    명단은 저장소에 올리지 않고, 학생은 학번과 코드만 넣는다.
 *
 * 순서를 바꾸면 모든 배정이 바뀐다. 학기 중에는 고정.
 */
(function (root) {
  var SYMS = ['HBB', 'IL6', 'TNF', 'IL10', 'IFNG', 'SOD1', 'APOE', 'HMOX1'];
  var N = SYMS.length;
  var CODE_CHARS = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';   // I, O, 0, 1은 헷갈려서 뺌
  var CODE_LEN = 5;

  function hash32(s) {
    var h = 2166136261;
    for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    h ^= h >>> 16; h = Math.imul(h, 0x85ebca6b); h ^= h >>> 13; h = Math.imul(h, 0xc2b2ae35); h ^= h >>> 16;
    return h >>> 0;
  }
  function rng(seed) {
    return function () {
      seed |= 0; seed = seed + 0x6D2B79F5 | 0;
      var t = Math.imul(seed ^ seed >>> 15, 1 | seed);
      t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
      return ((t ^ t >>> 14) >>> 0) / 4294967296;
    };
  }
  function isId(id) { return /^202\d{6}$/.test(id); }
  function normCode(c) { return String(c || '').toUpperCase().replace(/[^A-Z0-9]/g, ''); }
  function isCode(c) { return c.length === CODE_LEN && c.split('').every(function (x) { return CODE_CHARS.indexOf(x) >= 0; }); }

  function pickDefault(id) {
    var pre = id.slice(0, 6), ser = parseInt(id.slice(6), 10) || 0;
    var block = Math.floor(ser / N), pos = ser % N, perm = [];
    for (var i = 0; i < N; i++) perm.push(i);
    var r = rng(hash32('PRIMER-2026|' + pre + '|' + block));
    for (var j = N - 1; j > 0; j--) { var k = Math.floor(r() * (j + 1)), t = perm[j]; perm[j] = perm[k]; perm[k] = t; }
    return perm[pos];
  }
  function pickCode(id, code) { return hash32('PRIMER-2026|C|' + code + '|' + id) % N; }
  function pick(id, code) { return code ? pickCode(id, code) : pickDefault(id); }

  root.ASSIGN = { SYMS: SYMS, N: N, CODE_CHARS: CODE_CHARS, CODE_LEN: CODE_LEN, hash32: hash32, rng: rng, isId: isId, normCode: normCode, isCode: isCode, pick: pick, pickDefault: pickDefault, pickCode: pickCode };
})(window);
