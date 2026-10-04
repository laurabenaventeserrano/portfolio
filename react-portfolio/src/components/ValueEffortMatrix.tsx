/* Matriz valor / esfuerzo de la lámina "The matrix" de Laura (Case 01 y Case 04): posiciones tal como ella las dibujó.
   La propuesta destacada lleva el punto hueco. */
const PTS: [string, number, number, string][] = [
  ['P1', 1, 2.9, 'Immediate opportunity'],
  ['P2', 2.4, 3.9, 'More complete workflow'],
  ['P3', 4.9, 5, 'Future contextual experience'],
];

export default function ValueEffortMatrix({ highlight }: { highlight: 'P1' | 'P2' | 'P3' }) {
  const x = (v: number) => 40 + (v - 1) * 110;
  const y = (v: number) => 250 - (v - 1) * 55;
  return (
    <svg className="matrix" viewBox="0 0 560 300" role="img" aria-label={`Value against effort: Proposal 1 at the lowest implementation effort with solid value, Proposal 2 in the middle, Proposal 3 at the highest value and the highest effort. ${highlight} is highlighted.`}>
      {[1, 2, 3, 4, 5].map((v) => <line key={`g${v}`} className="matrix__grid" x1={x(1)} x2={x(5)} y1={y(v)} y2={y(v)} />)}
      <line x1={x(1)} x2={x(1)} y1={y(5) - 10} y2={y(1)} />
      <line x1={x(1)} x2={x(5) + 10} y1={y(1)} y2={y(1)} />
      {[1, 2, 3, 4, 5].map((v) => <text key={`x${v}`} x={x(v)} y={y(1) + 22} textAnchor="middle">{v}</text>)}
      <text x={x(3)} y={y(1) + 46} textAnchor="middle">Implementation effort</text>
      <text transform={`translate(${x(1) - 22} ${y(3)}) rotate(-90)`} textAnchor="middle">User and product value</text>
      {PTS.map(([n, ex, va, t]) => {
        const on = n === highlight;
        return (
          <g key={n}>
            <circle cx={x(ex)} cy={y(va)} r={on ? 9 : 7} fill={on ? '#FFFFFF' : '#111111'} stroke="#111111" strokeWidth={on ? 2 : 0} />
            <text className="matrix__p" x={x(ex) + (n === 'P3' ? -16 : 16)} y={y(va) + 4} textAnchor={n === 'P3' ? 'end' : 'start'}>{n} · {t}</text>
          </g>
        );
      })}
    </svg>
  );
}
