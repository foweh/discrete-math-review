// ===== 🎨 自定义 / Proof & Challenge =====
// 离散数学 · 期末复习 — 证明题 + 综合题
// Discrete Math · Final Review — Proof & Comprehensive Problems

(function() {
  const questions = [
    // ── 证明题 · 逻辑 ──
    {
      id: "dch-01",
      question: "用真值表法证明 ¬(p → q) 与 p ∧ ¬q 逻辑等价。",
      questionEn: "Prove using truth table that ¬(p → q) is logically equivalent to p ∧ ¬q.",
      answer: "真值表/Truth table:\n\np q | p→q | ¬(p→q) | p ∧ ¬q\nT T |  T  |   F    |   F\nT F |  F  |   T    |   T\nF T |  T  |   F    |   F\nF F |  T  |   F    |   F\n\n两列结果完全相同，故 ¬(p→q) ⇔ p∧¬q。",
      answerEn: "Truth table:\n\np q | p→q | ¬(p→q) | p ∧ ¬q\nT T |  T  |   F    |   F\nT F |  F  |   T    |   T\nF T |  T  |   F    |   F\nF F |  T  |   F    |   F\n\nThe two columns are identical, so ¬(p→q) ⇔ p∧¬q."
    },
    // ── 集合证明 ──
    {
      id: "dch-02",
      question: "证明：A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C)。",
      questionEn: "Prove: A ∪ (B ∩ C) = (A ∪ B) ∩ (A ∪ C).",
      answer: "证明：对任意 x，\nx ∈ A∪(B∩C)\n⇔ x∈A 或 x∈(B∩C)\n⇔ x∈A 或 (x∈B 且 x∈C)\n⇔ (x∈A 或 x∈B) 且 (x∈A 或 x∈C)\n⇔ x∈(A∪B) 且 x∈(A∪C)\n⇔ x∈(A∪B)∩(A∪C)\n\n因此等式成立。",
      answerEn: "Proof: For any x,\nx ∈ A∪(B∩C)\n⇔ x∈A or x∈(B∩C)\n⇔ x∈A or (x∈B and x∈C)\n⇔ (x∈A or x∈B) and (x∈A or x∈C)\n⇔ x∈(A∪B) and x∈(A∪C)\n⇔ x∈(A∪B)∩(A∪C)\n\nThus the equality holds."
    },
    // ── 图论证明 ──
    {
      id: "dch-03",
      question: "证明：在一个有 n 个顶点的树中，边数为 n−1。（用数学归纳法）",
      questionEn: "Prove: A tree with n vertices has n−1 edges. (Use induction)",
      answer: "对顶点数 n 进行归纳。\n\n**基始**：n=1 时，树只有 1 个顶点、0 条边，0 = n−1 ✓\n\n**归纳假设**：假设所有 k 个顶点的树有 k−1 条边。\n\n**归纳步骤**：考虑 n=k+1 个顶点的树 T。T 至少有一个叶节点 v（度数为1）。移除 v 及其关联边，得到 T'。T' 仍有 k 个顶点且连通无回路，是一棵树。由归纳假设，T' 有 k−1 条边。加上之前移除的一条边，T 有 (k−1)+1 = k 条边 = n−1 ✓。",
      answerEn: "Proof by induction on the number of vertices n.\n\n**Base case**: n=1 — tree has 1 vertex, 0 edges. 0 = n−1 ✓\n\n**Inductive hypothesis**: Assume every tree with k vertices has k−1 edges.\n\n**Inductive step**: Consider tree T with n=k+1 vertices. T has at least one leaf v (degree 1). Remove v and its incident edge to get T'. T' has k vertices, is connected and acyclic — a tree. By IH, T' has k−1 edges. Adding back the removed edge, T has (k−1)+1 = k edges = n−1 ✓."
    },
    // ── 组合数学 ──
    {
      id: "dch-04",
      question: "有 5 本不同的中文书和 3 本不同的英文书，要从中选 4 本书，要求至少有 1 本英文书，有多少种选法？",
      questionEn: "There are 5 distinct Chinese books and 3 distinct English books. Choose 4 books with at least 1 English book. How many ways?",
      answer: "解法（分类法）：\n① 选1本英文+3本中文：C(3,1)×C(5,3) = 3×10 = 30\n② 选2本英文+2本中文：C(3,2)×C(5,2) = 3×10 = 30\n③ 选3本英文+1本中文：C(3,3)×C(5,1) = 1×5 = 5\n\n总数 = 30+30+5 = 65。\n\n另解（排除法）：总选法 − 全中文选法 = C(8,4) − C(5,4) = 70 − 5 = 65。",
      answerEn: "Solution (case analysis):\n① 1 English + 3 Chinese: C(3,1)×C(5,3) = 3×10 = 30\n② 2 English + 2 Chinese: C(3,2)×C(5,2) = 3×10 = 30\n③ 3 English + 1 Chinese: C(3,3)×C(5,1) = 1×5 = 5\n\nTotal = 30+30+5 = 65.\n\nAlternative (complement): Total − all Chinese = C(8,4) − C(5,4) = 70 − 5 = 65."
    },
    // ── 关系 ──
    {
      id: "dch-05",
      question: "设 A={1,2,3,4}，R={(1,1),(2,2),(3,3),(4,4),(1,2),(2,1),(2,3),(3,2)}，求 R 的自反闭包、对称闭包和传递闭包。",
      questionEn: "Let A={1,2,3,4}, R={(1,1),(2,2),(3,3),(4,4),(1,2),(2,1),(2,3),(3,2)}. Find the reflexive, symmetric, and transitive closures of R.",
      answer: "① 自反闭包 r(R) = R ∪ I_A = R ∪ {(1,1),(2,2),(3,3),(4,4)} = R（R已自反）。\n\n② 对称闭包 s(R) = R ∪ R⁻¹。R已对称（有(1,2)就有(2,1)，有(2,3)就有(3,2)），所以 s(R)=R。\n\n③ 传递闭包 t(R)：用 Warshall 算法或手动计算。\nR 中有 (1,2)+(2,3) → 需加 (1,3)；有 (3,2)+(2,1) → 需加 (3,1)。\nt(R) = R ∪ {(1,3),(3,1)} ∪ {(1,1),(2,2),(3,3),(4,4)}（已自反）= {A上所有二元对中除去(1,4),(4,1),(2,4),(4,2),(3,4),(4,3)}。\n实际上 t(R) 将 {1,2,3} 变成一个等价类，而 4 孤立。",
      answerEn: "① Reflexive closure r(R)=R∪I_A=R∪{(1,1),(2,2),(3,3),(4,4)}=R (R already reflexive).\n\n② Symmetric closure s(R)=R∪R⁻¹. R is symmetric, so s(R)=R.\n\n③ Transitive closure t(R): Apply Warshall's algorithm.\n(1,2)+(2,3) → add (1,3); (3,2)+(2,1) → add (3,1).\nt(R)=R∪{(1,3),(3,1)}. Also ensure reflexivity over {1,2,3,4}.\nThe result partitions {1,2,3} into one equivalence class, with 4 isolated."
    },
    // ── 群论 ──
    {
      id: "dch-06",
      question: "证明：群 G 中单位元 e 是唯一的。",
      questionEn: "Prove: The identity element e in a group G is unique.",
      answer: "假设有两个单位元 e 和 e'，则：\n由 e 是单位元：∀a∈G, e·a = a·e = a。特别地，取 a=e'，得 e·e' = e'。\n由 e' 是单位元：∀a∈G, e'·a = a·e' = a。特别地，取 a=e，得 e'·e = e。\n\n但 e·e' = e'·e （由单位元性质，两者都等于 e' 和 e），所以 e = e'。\n\n因此单位元唯一。",
      answerEn: "Suppose there are two identity elements e and e'. Then:\nSince e is identity: ∀a∈G, e·a = a·e = a. Take a=e': e·e' = e'.\nSince e' is identity: ∀a∈G, e'·a = a·e' = a. Take a=e: e'·e = e.\n\nBut e·e' = e'·e (both are equal to e' and e by identity properties), so e = e'.\n\nThus the identity element is unique."
    }
  ];
  window.registerQuestions('证明与挑战', questions);
})();
