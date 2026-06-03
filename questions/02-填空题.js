// ===== ✍️ 填空题 / Fill-in-the-blank =====
// 离散数学 · 期末复习 | Discrete Math · Final Review

(function() {
  const questions = [
    // ── 命题逻辑 ──
    {
      id: "dfb-01",
      question: "命题公式 p → q 逻辑等价于 ¬p ______ q。",
      questionEn: "The propositional formula p → q is logically equivalent to ¬p ______ q.",
      answer: "∨（析取）",
      answerEn: "∨ (or)"
    },
    {
      id: "dfb-02",
      question: "命题公式 p ↔ q 逻辑等价于 (p → q) ______ (q → p)。",
      questionEn: "The propositional formula p ↔ q is logically equivalent to (p → q) ______ (q → p).",
      answer: "∧（合取）",
      answerEn: "∧ (and)"
    },
    {
      id: "dfb-03",
      question: "命题 ¬(p ∨ ¬q) 的对偶式为 ¬p ______ q。",
      questionEn: "The dual of ¬(p ∨ ¬q) is ¬p ______ q.",
      answer: "∧（合取）",
      answerEn: "∧ (and)"
    },
    // ── 谓词逻辑 ──
    {
      id: "dfb-04",
      question: "谓词公式 ¬∀xP(x) 等价于 ______。",
      questionEn: "The predicate formula ¬∀xP(x) is equivalent to ______.",
      answer: "∃x¬P(x)",
      answerEn: "∃x¬P(x)"
    },
    // ── 集合论 ──
    {
      id: "dfb-05",
      question: "设 |A|=m，|B|=n，则从 A 到 B 的不同关系有 ______ 个。",
      questionEn: "Let |A|=m, |B|=n. The number of different relations from A to B is ______.",
      answer: "2^(m×n)",
      answerEn: "2^(m×n)"
    },
    {
      id: "dfb-06",
      question: "集合的笛卡尔积运算不满足交换律，即 A×B ______ B×A（一般情况）。",
      questionEn: "The Cartesian product is not commutative: A×B ______ B×A (in general).",
      answer: "≠（不等于）",
      answerEn: "≠ (not equal to)"
    },
    // ── 关系 ──
    {
      id: "dfb-07",
      question: "设 R 是 A 上的关系，R 的自反闭包 r(R) = R ∪ ______。",
      questionEn: "Let R be a relation on A. The reflexive closure r(R) = R ∪ ______.",
      answer: "I_A（恒等关系）",
      answerEn: "I_A (identity relation)"
    },
    {
      id: "dfb-08",
      question: "等价关系对应的图可以划分为若干个______。",
      questionEn: "An equivalence relation partitions the set into ______.",
      answer: "等价类",
      answerEn: "equivalence classes"
    },
    // ── 函数 ──
    {
      id: "dfb-09",
      question: "若 f: A→B 既是单射又是满射，则称 f 为 ______。",
      questionEn: "If f: A→B is both injective and surjective, f is called ______.",
      answer: "双射（一一对应）",
      answerEn: "bijection (one-to-one correspondence)"
    },
    // ── 图论 ──
    {
      id: "dfb-10",
      question: "对于任意无向图，所有顶点度数之和等于边数的 ______ 倍。",
      questionEn: "For any undirected graph, the sum of all vertex degrees equals ______ times the number of edges.",
      answer: "2",
      answerEn: "2"
    },
    {
      id: "dfb-11",
      question: "完全二部图 K_{3,4} 的边数为 ______。",
      questionEn: "The complete bipartite graph K_{3,4} has ______ edges.",
      answer: "12",
      answerEn: "12"
    },
    {
      id: "dfb-12",
      question: "一棵树有 n 个顶点，则它有 ______ 条边。",
      questionEn: "A tree with n vertices has ______ edges.",
      answer: "n−1",
      answerEn: "n−1"
    },
    // ── 组合数学 ──
    {
      id: "dfb-13",
      question: "C(n,k) = C(n, ______)。",
      questionEn: "C(n,k) = C(n, ______).",
      answer: "n−k",
      answerEn: "n−k"
    },
    {
      id: "dfb-14",
      question: "5 个元素的集合共有 ______ 种不同的排列。",
      questionEn: "A set of 5 elements has ______ distinct permutations.",
      answer: "120",
      answerEn: "120"
    },
    // ── 代数结构 ──
    {
      id: "dfb-15",
      question: "群中满足消去律：若 a·b = a·c，则 b = ______。",
      questionEn: "In a group, if a·b = a·c, then b = ______ (cancellation law).",
      answer: "c",
      answerEn: "c"
    },
    {
      id: "dfb-16",
      question: "设 ⟨G,*⟩ 为群，则 G 中每个元素都 ______ 逆元。",
      questionEn: "In a group ⟨G,*⟩, every element has an ______.",
      answer: "有（存在）",
      answerEn: "inverse"
    }
  ];
  window.registerQuestions('填空题', questions);
})();
