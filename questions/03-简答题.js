// ===== 📖 简答题 / Essay & Short Answer =====
// 离散数学 · 期末复习 | Discrete Math · Final Review

(function() {
  const questions = [
    // ── 命题逻辑 ──
    {
      id: "dess-01",
      question: "什么是一个命题？请给出命题联结词 ¬, ∧, ∨, →, ↔ 的定义（真值表）。",
      questionEn: "What is a proposition? Define the logical connectives ¬, ∧, ∨, →, ↔ with truth tables.",
      answer: "命题是可以判断真假的陈述句。真值表如下：\n\np q | ¬p | p∧q | p∨q | p→q | p↔q\nT T | F  | T   | T   | T   | T\nT F | F  | F   | T   | F   | F\nF T | T  | F   | T   | T   | F\nF F | T  | F   | F   | T   | T\n\n注意：p→q 仅在 p真q假时为假；p↔q 在 p,q 同真同假时为真。",
      answerEn: "A proposition is a declarative sentence that is either true or false (not both). Truth tables:\n\np q | ¬p | p∧q | p∨q | p→q | p↔q\nT T | F  | T   | T   | T   | T\nT F | F  | F   | T   | F   | F\nF T | T  | F   | T   | T   | F\nF F | T  | F   | F   | T   | T\n\nNote: p→q is false only when p is true and q is false; p↔q is true when p,q have same truth value."
    },
    // ── 谓词逻辑 ──
    {
      id: "dess-02",
      question: "什么是谓词？什么是量词？请举例说明 ∀xP(x) 和 ∃xP(x) 的含义。",
      questionEn: "What is a predicate? What are quantifiers? Explain ∀xP(x) and ∃xP(x) with examples.",
      answer: "谓词是含有变量的陈述，如 P(x): 'x是偶数'。量词分两种：\n① 全称量词 ∀：∀xP(x) 表示'对所有的x，P(x)为真'，如 ∀x(x>0 → x²>0)。\n② 存在量词 ∃：∃xP(x) 表示'存在某个x使得P(x)为真'，如 ∃x(x>0 ∧ x²=4)。\n\n量词否定律：¬∀xP(x) ⇔ ∃x¬P(x)，¬∃xP(x) ⇔ ∀x¬P(x)。",
      answerEn: "A predicate is a statement containing variables, e.g., P(x): 'x is even'. Two quantifiers:\n① Universal ∀: ∀xP(x) means 'for all x, P(x) is true', e.g., ∀x(x>0 → x²>0).\n② Existential ∃: ∃xP(x) means 'there exists x such that P(x) is true', e.g., ∃x(x>0 ∧ x²=4).\n\nQuantifier negation: ¬∀xP(x) ⇔ ∃x¬P(x), ¬∃xP(x) ⇔ ∀x¬P(x)."
    },
    // ── 集合论 ──
    {
      id: "dess-03",
      question: "简述集合的并、交、差、对称差运算的定义，并说明德摩根律。",
      questionEn: "Define set union, intersection, difference, and symmetric difference. State De Morgan's laws.",
      answer: "设A,B为集合：\n① 并 A∪B = {x | x∈A 或 x∈B}\n② 交 A∩B = {x | x∈A 且 x∈B}\n③ 差 A−B = {x | x∈A 且 x∉B}\n④ 对称差 A⊕B = (A−B) ∪ (B−A) = (A∪B)−(A∩B)\n\n德摩根律（De Morgan）：\n① (A∪B)' = A' ∩ B'\n② (A∩B)' = A' ∪ B'",
      answerEn: "Let A,B be sets:\n① Union A∪B = {x | x∈A or x∈B}\n② Intersection A∩B = {x | x∈A and x∈B}\n③ Difference A−B = {x | x∈A and x∉B}\n④ Symmetric diff. A⊕B = (A−B) ∪ (B−A) = (A∪B)−(A∩B)\n\nDe Morgan's laws:\n① (A∪B)' = A' ∩ B'\n② (A∩B)' = A' ∪ B'"
    },
    // ── 关系 ──
    {
      id: "dess-04",
      question: "什么是等价关系？什么是偏序关系？各举一例。",
      questionEn: "What is an equivalence relation? What is a partial order? Give an example of each.",
      answer: "等价关系：满足自反性、对称性、传递性的关系。例：'同余关系'——整数集上模n同余。\n\n偏序关系：满足自反性、反对称性、传递性的关系。例：'整除关系'——正整数集上 a|b（a整除b）。\n\n主要区别：等价关系要求对称性，将元素分成等价类；偏序关系要求反对称性，给元素排序。",
      answerEn: "Equivalence relation: reflexive, symmetric, and transitive. Example: 'congruence modulo n' on integers.\n\nPartial order: reflexive, antisymmetric, and transitive. Example: 'divisibility' a|b on positive integers.\n\nKey difference: equivalence requires symmetry and partitions elements into classes; partial order requires antisymmetry and orders elements."
    },
    // ── 函数 ──
    {
      id: "dess-05",
      question: "什么是单射、满射和双射？双射函数为什么重要？",
      questionEn: "What are injective, surjective, and bijective functions? Why are bijections important?",
      answer: "设 f: A→B：\n① 单射（一对一）：若 x₁≠x₂ 则 f(x₁)≠f(x₂)。不同输入映射到不同输出。\n② 满射（到上）：对任意 y∈B，存在 x∈A 使得 f(x)=y。每个B中元素都有原像。\n③ 双射：既是单射又是满射，即一一对应。\n\n双射的重要性：双射函数存在逆函数，在计数中用于证明两个集合元素个数相等，在群论中构成同构的基础。",
      answerEn: "Let f: A→B:\n① Injective (one-to-one): if x₁≠x₂ then f(x₁)≠f(x₂). Different inputs map to different outputs.\n② Surjective (onto): ∀y∈B, ∃x∈A s.t. f(x)=y. Every element of B has a preimage.\n③ Bijective: both injective and surjective — a one-to-one correspondence.\n\nImportance: bijections have inverses, are used in counting to prove equal cardinalities, and form isomorphisms in algebra."
    },
    // ── 图论 ──
    {
      id: "dess-06",
      question: "什么是欧拉通路和欧拉回路？连通图存在欧拉回路的充要条件是什么？",
      questionEn: "What are Eulerian trails and circuits? What is the necessary and sufficient condition for a connected graph to have an Eulerian circuit?",
      answer: "欧拉通路（Eulerian trail）：经过图中每条边恰好一次的通路。\n欧拉回路（Eulerian circuit）：经过图中每条边恰好一次的回路。——即'一笔画问题'。\n\n连通无向图存在欧拉回路的**充要条件**：所有顶点的度数均为偶数。\n\n存在欧拉通路（非回路）的充要条件：恰有两个顶点度数为奇数。",
      answerEn: "Eulerian trail: a trail that traverses every edge exactly once.\nEulerian circuit: a circuit that traverses every edge exactly once (the 'draw without lifting pen' problem).\n\nConnected undirected graph has an Eulerian circuit **iff** every vertex has even degree.\n\nConnected graph has an Eulerian trail (not circuit) **iff** exactly two vertices have odd degree."
    },
    // ── 树 ──
    {
      id: "dess-07",
      question: "什么是树？树有哪些重要性质？",
      questionEn: "What is a tree? List the important properties of trees.",
      answer: "树（Tree）：连通无回路的无向图。\n\n重要性质：\n① n个顶点的树有n−1条边。\n② 树中任意两顶点之间有唯一路径。\n③ 树是边数最少的连通图（去掉任意一条边就不连通）。\n④ 树是边数最多的无圈图（加任意一条边就产生回路）。\n⑤ 树至少有两个叶节点（度数=1的顶点）。\n⑥ 树是二部图。",
      answerEn: "Tree: a connected acyclic undirected graph.\n\nImportant properties:\n① A tree with n vertices has n−1 edges.\n② There is a unique path between any two vertices.\n③ A tree is minimally connected (removing any edge disconnects it).\n④ A tree is maximally acyclic (adding any edge creates a cycle).\n⑤ Every tree with ≥2 vertices has at least two leaves (degree-1 vertices).\n⑥ Every tree is bipartite."
    },
    // ── 组合数学 ──
    {
      id: "dess-08",
      question: "什么是排列和组合？写出它们的计算公式并解释含义。",
      questionEn: "What are permutations and combinations? Give their formulas and explain.",
      answer: "排列（Permutation）：从 n 个不同元素中取出 k 个进行有序排列，记作 P(n,k) 或 A(n,k)。\n公式：P(n,k) = n! / (n−k)!，含义：n个选k个排顺序。\n\n组合（Combination）：从 n 个不同元素中取出 k 个（不考虑顺序），记作 C(n,k)。\n公式：C(n,k) = n! / [k!·(n−k)!] = P(n,k)/k!\n含义：n个选k个，不考虑顺序。\n\n例：从5人中选3人排一列 → P(5,3)=60。\n从5人中选3人组成小组 → C(5,3)=10。",
      answerEn: "Permutation: ordered selection of k elements from n distinct elements, denoted P(n,k).\nFormula: P(n,k) = n! / (n−k)! — choose k from n and arrange them.\n\nCombination: unordered selection of k elements from n distinct elements, denoted C(n,k).\nFormula: C(n,k) = n! / [k!·(n−k)!] = P(n,k)/k!\n\nExample: choose 3 from 5 and arrange in a row → P(5,3)=60.\nChoose 3 from 5 to form a committee → C(5,3)=10."
    },
    // ── 代数结构 ──
    {
      id: "dess-09",
      question: "什么是群？请列出群的定义中的四条公理，并说明群中消去律为什么成立。",
      questionEn: "What is a group? List the four group axioms and explain why the cancellation law holds.",
      answer: "群 ⟨G,*⟩ 满足四条公理：\n① **封闭性**：∀a,b∈G，a*b∈G\n② **结合律**：∀a,b,c∈G，(a*b)*c = a*(b*c)\n③ **单位元**：存在 e∈G，使得 ∀a∈G，e*a = a*e = a\n④ **逆元**：∀a∈G，存在 a⁻¹∈G，使得 a*a⁻¹ = a⁻¹*a = e\n\n消去律证明（左消去）：若 a·b = a·c，两边左乘 a⁻¹：\na⁻¹·(a·b) = a⁻¹·(a·c)\n结合律：(a⁻¹·a)·b = (a⁻¹·a)·c\ne·b = e·c ∴ b = c。右消去类似。",
      answerEn: "A group ⟨G,*⟩ satisfies four axioms:\n① **Closure**: ∀a,b∈G, a*b∈G\n② **Associativity**: ∀a,b,c∈G, (a*b)*c = a*(b*c)\n③ **Identity**: ∃e∈G s.t. ∀a∈G, e*a = a*e = a\n④ **Inverse**: ∀a∈G, ∃a⁻¹∈G s.t. a*a⁻¹ = a⁻¹*a = e\n\nCancellation proof (left): If a·b = a·c, left-multiply by a⁻¹:\na⁻¹·(a·b) = a⁻¹·(a·c) → (a⁻¹·a)·b = (a⁻¹·a)·c → e·b = e·c → b = c. Right cancellation is similar."
    },
    // ── 布尔代数 ──
    {
      id: "dess-10",
      question: "布尔代数的基本运算有哪些？请列出布尔代数的10条基本定律。",
      questionEn: "What are the basic operations of Boolean algebra? List 10 fundamental laws.",
      answer: "布尔代数有三种基本运算：加法+（或）、乘法·（与）、补'（非）。\n\n10条基本定律：\n① 幂等律：x+x=x, x·x=x\n② 交换律：x+y=y+x, x·y=y·x\n③ 结合律：(x+y)+z=x+(y+z), (x·y)·z=x·(y·z)\n④ 分配律：x·(y+z)=x·y+x·z, x+(y·z)=(x+y)·(x+z)\n⑤ 同一律：x+0=x, x·1=x\n⑥ 零一律：x+1=1, x·0=0\n⑦ 互补律：x+x'=1, x·x'=0\n⑧ 吸收律：x+x·y=x, x·(x+y)=x\n⑨ 德摩根律：(x+y)'=x'·y', (x·y)'=x'+y'\n⑩ 双重否定律：(x')'=x",
      answerEn: "Boolean algebra has three basic operations: + (OR), · (AND), ' (NOT/complement).\n\n10 fundamental laws:\n① Idempotent: x+x=x, x·x=x\n② Commutative: x+y=y+x, x·y=y·x\n③ Associative: (x+y)+z=x+(y+z), (x·y)·z=x·(y·z)\n④ Distributive: x·(y+z)=x·y+x·z, x+(y·z)=(x+y)·(x+z)\n⑤ Identity: x+0=x, x·1=x\n⑥ Zero/One: x+1=1, x·0=0\n⑦ Complement: x+x'=1, x·x'=0\n⑧ Absorption: x+x·y=x, x·(x+y)=x\n⑨ De Morgan: (x+y)'=x'·y', (x·y)'=x'+y'\n⑩ Double negation: (x')'=x"
    }
  ];
  window.registerQuestions('简答题', questions);
})();
