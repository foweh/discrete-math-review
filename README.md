#  离散数学 · 期末复习系统
#  Discrete Mathematics · Final Review System

>  基于通用考试练习骨架的离散数学（中英双语）期末复习题库
>  Discrete Mathematics bilingual final review bank, built on the exam skeleton framework

---

##  题库概览 / Question Bank Overview

| 题型 / Type | 题数 / Count | 覆盖章节 / Topics |
|-------------|:-----------:|-------------------|
| 选择题 MC | 20 题 | 命题逻辑、谓词逻辑、集合论、关系、函数、图论、树、组合数学、代数结构 |
| 填空题 Fill | 16 题 | 同上，侧重基础概念记忆 |
| 简答题 Essay | 10 题 | 核心概念解释 + 例题，含详细参考答案 |
| 判断题 T/F | 20 题 | 易混淆知识点辨析 |
| 证明挑战 Proof | 6 题 | 证明题 + 综合应用题 |

**总计：72 道题（中英双语） / Total: 72 bilingual questions**

---

##  文件结构 / File Structure

```
discrete-math-review/
├── index.html                  # 主界面（含中英双语切换）
├── question-loader.js          # 题库加载器
├── README.md                   # 本文件
└── questions/
    ├── 01-选择题.js              # 选择题（20题）
    ├── 02-填空题.js              # 填空题（16题）
    ├── 03-简答题.js              # 简答题（10题）
    ├── 04-判断题.js              # 判断题（20题）
    └── 05-自定义题.js            # 证明与挑战（6题）
```

---

##  开始使用 / How to Use

1. **打开**：双击 `index.html`，用浏览器打开
2. **切换语言**：点击右上角 `中 / EN` 按钮
3. **练习模式**：选题型 → 设题数 → 开始练习 → 即时反馈
4. **考试模式**：设题数 / 时限 / 及格线 → 开始考试 → 自动评分
5. **错题本**：答错的题自动收录，可重做或清空

### 覆盖章节 / Topics Covered

|  章节 |  Chapter | 题数 Qs |
|---------|-------------|:------:|
| 命题逻辑 | Propositional Logic | ~10 |
| 谓词逻辑 | Predicate Logic | ~6 |
| 集合论 | Set Theory | ~8 |
| 关系 | Relations | ~8 |
| 函数 | Functions | ~6 |
| 图论 | Graph Theory | ~12 |
| 树 | Trees | ~6 |
| 组合数学 | Combinatorics | ~8 |
| 代数结构（群） | Algebraic Structures (Groups) | ~6 |
| 布尔代数 | Boolean Algebra | ~4 |

---

## ‍ 使用建议 / Study Tips

- **先做选择题**快速回顾概念
- **再做判断题**辨析易错点
- **然后做填空题**加深记忆
- **最后做简答题和证明题**检验综合理解
- 善用 **考试模式** 限时模拟

---

##  License

MIT — 自由使用、修改、分享
