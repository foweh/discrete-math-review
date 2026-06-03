// ===== 📝 选择题 / Multiple Choice =====
// 离散数学 · 期末复习 | Discrete Math · Final Review

(function() {
  const questions = [
    // ── 命题逻辑 Propositional Logic ──
    {
      id: "dmc-01",
      question: "下列命题公式中，与 ¬(p ∧ q) 逻辑等价的是（ ）。",
      questionEn: "Which propositional formula is logically equivalent to ¬(p ∧ q)?",
      options: ["¬p ∧ ¬q", "¬p ∨ ¬q", "p → ¬q", "¬(p ∨ q)"],
      optionsEn: ["¬p ∧ ¬q", "¬p ∨ ¬q", "p → ¬q", "¬(p ∨ q)"],
      answer: "B", answerEn: "B"
    },
    {
      id: "dmc-02",
      question: "命题公式 (p → q) ∧ (q → r) → (p → r) 是一个（ ）。",
      questionEn: "The propositional formula (p → q) ∧ (q → r) → (p → r) is a ( ).",
      options: ["永真式（重言式）", "矛盾式", "可满足式", "以上都不是"],
      optionsEn: ["tautology", "contradiction", "satisfiable formula", "none of the above"],
      answer: "A", answerEn: "A"
    },
    {
      id: "dmc-03",
      question: "谓词公式 ∀x(P(x) → Q(x)) 等价于（ ）。",
      questionEn: "The predicate formula ∀x(P(x) → Q(x)) is equivalent to ( ).",
      options: ["∀xP(x) → ∀xQ(x)", "∃xP(x) → ∃xQ(x)", "¬∃x(P(x) ∧ ¬Q(x))", "∃x(P(x) ∧ Q(x))"],
      optionsEn: ["∀xP(x) → ∀xQ(x)", "∃xP(x) → ∃xQ(x)", "¬∃x(P(x) ∧ ¬Q(x))", "∃x(P(x) ∧ Q(x))"],
      answer: "C", answerEn: "C"
    },
    // ── 集合论 Set Theory ──
    {
      id: "dmc-04",
      question: "设 A={1,2,3}, B={2,3,4}，则 A ∪ B 的基数为（ ）。",
      questionEn: "Let A={1,2,3}, B={2,3,4}. The cardinality of A ∪ B is ( ).",
      options: ["3", "4", "5", "6"],
      optionsEn: ["3", "4", "5", "6"],
      answer: "B", answerEn: "B"
    },
    {
      id: "dmc-05",
      question: "设 A={a,b,c}，则 A 的幂集 P(A) 的元素个数为（ ）。",
      questionEn: "Let A={a,b,c}. The number of elements in the power set P(A) is ( ).",
      options: ["3", "6", "8", "9"],
      optionsEn: ["3", "6", "8", "9"],
      answer: "C", answerEn: "C"
    },
    // ── 关系 Relations ──
    {
      id: "dmc-06",
      question: "设R是集合A上的关系，若R满足自反性、对称性和传递性，则R是（ ）。",
      questionEn: "If a relation R on set A is reflexive, symmetric, and transitive, then R is ( ).",
      options: ["偏序关系", "等价关系", "函数关系", "全序关系"],
      optionsEn: ["partial order", "equivalence relation", "function", "total order"],
      answer: "B", answerEn: "B"
    },
    {
      id: "dmc-07",
      question: "设 A={1,2,3,4}，R={(1,1),(2,2),(3,3),(4,4),(1,2),(2,1)}，则 R 是（ ）。",
      questionEn: "Let A={1,2,3,4}, R={(1,1),(2,2),(3,3),(4,4),(1,2),(2,1)}. R is ( ).",
      options: ["等价关系", "偏序关系", "等价关系且偏序关系", "既不是等价也不是偏序"],
      optionsEn: ["an equivalence relation", "a partial order", "both equivalence and partial order", "neither"],
      answer: "A", answerEn: "A"
    },
    // ── 函数 Functions ──
    {
      id: "dmc-08",
      question: "设 f: R → R, f(x)=x²，则 f 是（ ）。",
      questionEn: "Let f: R → R, f(x)=x². The function f is ( ).",
      options: ["双射", "单射", "满射", "既非单射也非满射"],
      optionsEn: ["bijective", "injective", "surjective", "neither injective nor surjective"],
      answer: "D", answerEn: "D"
    },
    {
      id: "dmc-09",
      question: "设 f: A → B, g: B → C，若复合函数 g∘f 是单射，则（ ）。",
      questionEn: "Let f: A → B, g: B → C. If the composition g∘f is injective, then ( ).",
      options: ["f必是单射", "g必是单射", "f必是满射", "g必是满射"],
      optionsEn: ["f must be injective", "g must be injective", "f must be surjective", "g must be surjective"],
      answer: "A", answerEn: "A"
    },
    // ── 图论 Graph Theory ──
    {
      id: "dmc-10",
      question: "n个顶点的无向完全图 K_n 的边数为（ ）。",
      questionEn: "The number of edges in a complete undirected graph K_n with n vertices is ( ).",
      options: ["n", "n(n−1)/2", "n(n−1)", "n²"],
      optionsEn: ["n", "n(n−1)/2", "n(n−1)", "n²"],
      answer: "B", answerEn: "B"
    },
    {
      id: "dmc-11",
      question: "下列哪个图具有欧拉回路（Eulerian circuit）？",
      questionEn: "Which of the following graphs has an Eulerian circuit?",
      options: ["所有顶点度数均为偶数的连通图", "所有顶点度数均为奇数的图", "恰有两个奇度顶点的连通图", "树"],
      optionsEn: ["a connected graph where every vertex has even degree", "a graph where every vertex has odd degree", "a connected graph with exactly two odd-degree vertices", "a tree"],
      answer: "A", answerEn: "A"
    },
    {
      id: "dmc-12",
      question: "已知无向树 T 有 6 个顶点，则 T 的边数为（ ）。",
      questionEn: "A tree T has 6 vertices. The number of edges in T is ( ).",
      options: ["5", "6", "7", "4"],
      optionsEn: ["5", "6", "7", "4"],
      answer: "A", answerEn: "A"
    },
    {
      id: "dmc-13",
      question: "图 G 的邻接矩阵中，第 i 行元素之和等于（ ）。",
      questionEn: "In the adjacency matrix of a graph G, the sum of elements in row i equals ( ).",
      options: ["顶点 v_i 的度数", "顶点 v_i 的出度", "图 G 的边数", "顶点 v_i 的入度"],
      optionsEn: ["the degree of vertex v_i", "the out-degree of v_i", "the number of edges in G", "the in-degree of v_i"],
      answer: "A", answerEn: "A"
    },
    // ── 组合数学 Combinatorics ──
    {
      id: "dmc-14",
      question: "从 10 个不同元素中取 3 个进行排列，排列数为（ ）。",
      questionEn: "The number of permutations of 3 elements chosen from 10 distinct elements is ( ).",
      options: ["120", "720", "1000", "30"],
      optionsEn: ["120", "720", "1000", "30"],
      answer: "B", answerEn: "B"
    },
    {
      id: "dmc-15",
      question: "从 10 个不同元素中取 3 个的组合数为（ ）。",
      questionEn: "The number of combinations of 3 elements chosen from 10 distinct elements is ( ).",
      options: ["120", "720", "1000", "240"],
      optionsEn: ["120", "720", "1000", "240"],
      answer: "A", answerEn: "A"
    },
    // ── 代数结构 Algebraic Structures ──
    {
      id: "dmc-16",
      question: "设 G 为群，∀a,b∈G，方程 ax=b 在 G 中（ ）。",
      questionEn: "Let G be a group. For ∀a,b∈G, the equation ax=b in G ( ).",
      options: ["有唯一解", "有多个解", "无解", "不一定有解"],
      optionsEn: ["has a unique solution", "has multiple solutions", "has no solution", "may not have a solution"],
      answer: "A", answerEn: "A"
    },
    {
      id: "dmc-17",
      question: "设 ⟨L,∨,∧⟩ 为分配格，a,b,c∈L，若 a∧b = a∧c 且 a∨b = a∨c，则（ ）。",
      questionEn: "Let ⟨L,∨,∧⟩ be a distributive lattice. If a∧b = a∧c and a∨b = a∨c, then ( ).",
      options: ["b = c", "a = b", "a = c", "不确定"],
      optionsEn: ["b = c", "a = b", "a = c", "not determined"],
      answer: "A", answerEn: "A"
    },
    // ── 布尔代数 Boolean Algebra ──
    {
      id: "dmc-18",
      question: "布尔代数中，x·(y+z) = x·y + x·z 是（ ）。",
      questionEn: "In Boolean algebra, x·(y+z) = x·y + x·z is the ( ).",
      options: ["分配律", "结合律", "交换律", "吸收律"],
      optionsEn: ["distributive law", "associative law", "commutative law", "absorption law"],
      answer: "A", answerEn: "A"
    },
    {
      id: "dmc-19",
      question: "布尔代数中，x + x' = 1 称为（ ）。",
      questionEn: "In Boolean algebra, x + x' = 1 is called ( ).",
      options: ["互补律", "同一律", "幂等律", "零一律"],
      optionsEn: ["complement law", "identity law", "idempotent law", "zero-one law"],
      answer: "A", answerEn: "A"
    },
    // ── 图论补充 ──
    {
      id: "dmc-20",
      question: "有 n 个顶点的完全有向图有（ ）条有向边。",
      questionEn: "A complete directed graph with n vertices has ( ) directed edges.",
      options: ["n(n−1)", "n(n−1)/2", "n²", "2n"],
      optionsEn: ["n(n−1)", "n(n−1)/2", "n²", "2n"],
      answer: "A", answerEn: "A"
    }
  ];
  window.registerQuestions('选择题', questions);
})();
