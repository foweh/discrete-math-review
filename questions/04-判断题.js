// ===== ⭕ 判断题 / True or False =====
// 离散数学 · 期末复习 | Discrete Math · Final Review

(function() {
  const questions = [
    // ── 命题逻辑 ──
    {
      id: "dtf-01",
      question: "命题 p→q 与 ¬p∨q 逻辑等价。",
      questionEn: "The proposition p→q is logically equivalent to ¬p∨q.",
      options: ["正确", "错误"], optionsEn: ["True", "False"],
      answer: "A", answerEn: "A"
    },
    {
      id: "dtf-02",
      question: "命题公式 p→(q→p) 是矛盾式。",
      questionEn: "The propositional formula p→(q→p) is a contradiction.",
      options: ["正确", "错误"], optionsEn: ["True", "False"],
      answer: "B", answerEn: "B"
    },
    {
      id: "dtf-03",
      question: "命题 p∧q 与 q∧p 逻辑等价。",
      questionEn: "p∧q is logically equivalent to q∧p.",
      options: ["正确", "错误"], optionsEn: ["True", "False"],
      answer: "A", answerEn: "A"
    },
    // ── 谓词逻辑 ──
    {
      id: "dtf-04",
      question: "∀x(P(x) ∨ Q(x)) 等价于 ∀xP(x) ∨ ∀xQ(x)。",
      questionEn: "∀x(P(x) ∨ Q(x)) is equivalent to ∀xP(x) ∨ ∀xQ(x).",
      options: ["正确", "错误"], optionsEn: ["True", "False"],
      answer: "B", answerEn: "B"
    },
    {
      id: "dtf-05",
      question: "¬∃xP(x) 等价于 ∀x¬P(x)。",
      questionEn: "¬∃xP(x) is equivalent to ∀x¬P(x).",
      options: ["正确", "错误"], optionsEn: ["True", "False"],
      answer: "A", answerEn: "A"
    },
    // ── 集合论 ──
    {
      id: "dtf-06",
      question: "空集是任何集合的子集。",
      questionEn: "The empty set is a subset of any set.",
      options: ["正确", "错误"], optionsEn: ["True", "False"],
      answer: "A", answerEn: "A"
    },
    {
      id: "dtf-07",
      question: "若 |A|=3，则 A 的幂集中有 6 个元素。",
      questionEn: "If |A|=3, then the power set of A has 6 elements.",
      options: ["正确", "错误"], optionsEn: ["True", "False"],
      answer: "B", answerEn: "B"
    },
    {
      id: "dtf-08",
      question: "A ∩ B = A 当且仅当 A ⊆ B。",
      questionEn: "A ∩ B = A iff A ⊆ B.",
      options: ["正确", "错误"], optionsEn: ["True", "False"],
      answer: "A", answerEn: "A"
    },
    // ── 关系 ──
    {
      id: "dtf-09",
      question: "关系 R 是对称的当且仅当 R = R⁻¹。",
      questionEn: "A relation R is symmetric iff R = R⁻¹.",
      options: ["正确", "错误"], optionsEn: ["True", "False"],
      answer: "A", answerEn: "A"
    },
    {
      id: "dtf-10",
      question: "偏序关系一定满足对称性。",
      questionEn: "A partial order must be symmetric.",
      options: ["正确", "错误"], optionsEn: ["True", "False"],
      answer: "B", answerEn: "B"
    },
    // ── 函数 ──
    {
      id: "dtf-11",
      question: "若 f 和 g 都是双射，则 f∘g 也是双射。",
      questionEn: "If both f and g are bijections, then f∘g is also a bijection.",
      options: ["正确", "错误"], optionsEn: ["True", "False"],
      answer: "A", answerEn: "A"
    },
    {
      id: "dtf-12",
      question: "任何函数都有反函数。",
      questionEn: "Every function has an inverse.",
      options: ["正确", "错误"], optionsEn: ["True", "False"],
      answer: "B", answerEn: "B"
    },
    // ── 图论 ──
    {
      id: "dtf-13",
      question: "完全图 K₅ 是平面图。",
      questionEn: "The complete graph K₅ is planar.",
      options: ["正确", "错误"], optionsEn: ["True", "False"],
      answer: "B", answerEn: "B"
    },
    {
      id: "dtf-14",
      question: "树一定是二部图。",
      questionEn: "Every tree is bipartite.",
      options: ["正确", "错误"], optionsEn: ["True", "False"],
      answer: "A", answerEn: "A"
    },
    {
      id: "dtf-15",
      question: "若图 G 中每个顶点的度数都是偶数，则 G 一定连通。",
      questionEn: "If every vertex in graph G has even degree, then G is connected.",
      options: ["正确", "错误"], optionsEn: ["True", "False"],
      answer: "B", answerEn: "B"
    },
    {
      id: "dtf-16",
      question: "n个顶点的树有 n−1 条边。",
      questionEn: "A tree with n vertices has n−1 edges.",
      options: ["正确", "错误"], optionsEn: ["True", "False"],
      answer: "A", answerEn: "A"
    },
    // ── 组合数学 ──
    {
      id: "dtf-17",
      question: "C(10,3) = C(10,7)。",
      questionEn: "C(10,3) = C(10,7).",
      options: ["正确", "错误"], optionsEn: ["True", "False"],
      answer: "A", answerEn: "A"
    },
    {
      id: "dtf-18",
      question: "P(5,3) = C(5,3) × 3!。",
      questionEn: "P(5,3) = C(5,3) × 3!",
      options: ["正确", "错误"], optionsEn: ["True", "False"],
      answer: "A", answerEn: "A"
    },
    // ── 代数结构 ──
    {
      id: "dtf-19",
      question: "群中一定有且只有一个单位元。",
      questionEn: "A group has exactly one identity element.",
      options: ["正确", "错误"], optionsEn: ["True", "False"],
      answer: "A", answerEn: "A"
    },
    {
      id: "dtf-20",
      question: "整数集 Z 在加法下成群，在乘法下也成群。",
      questionEn: "The set of integers Z forms a group under addition, and also under multiplication.",
      options: ["正确", "错误"], optionsEn: ["True", "False"],
      answer: "B", answerEn: "B"
    }
  ];
  window.registerQuestions('判断题', questions);
})();
