import { TrendingUp, BarChart3, Target, Zap } from "lucide-react";

export default function IR() {
  const financialHighlights = [
    {
      metric: "연간 매출액",
      value: "약 43억 원",
      growth: "전년 대비 안정적 성장",
      icon: BarChart3
    },
    {
      metric: "주요 고객사",
      value: "국내 대형 자동차 부품사",
      growth: "글로벌 확대 진행 중",
      icon: TrendingUp
    },
    {
      metric: "기업 가치",
      value: "약 15~25억 원",
      growth: "5년 내 50억 원 목표",
      icon: Target
    },
    {
      metric: "기술 경쟁력",
      value: "2개 특허 보유",
      growth: "R&D 투자 확대 중",
      icon: Zap
    }
  ];

  const growthStrategies = [
    {
      phase: "1단계 (2025~2026)",
      title: "고부가가치 제품 포트폴리오 확대",
      details: [
        "PA6/PA66 고강도 컴파운드 시장 진입",
        "자동차 경량화용 고기능성 소재 개발",
        "GRS 국제 인증 획득 추진",
        "기존 고객사 공급량 30% 증대"
      ]
    },
    {
      phase: "2단계 (2026~2027)",
      title: "글로벌 시장 진출 및 대기업 공급망 진입",
      details: [
        "국내 대형 자동차 OEM 공급망 진입",
        "동남아시아 거점 설립 검토",
        "글로벌 파트너사 협력 확대",
        "매출 규모 100억 원대 달성"
      ]
    },
    {
      phase: "3단계 (2027~2030)",
      title: "순환경제 리더로서의 입지 강화",
      details: [
        "화학적 순환 자원화 기술 고도화",
        "탄소중립 사업화 지원사업 완료",
        "스마트공장 고도화 (생산 효율 50% 향상)",
        "기업 가치 50억 원 이상 달성"
      ]
    }
  ];

  const investmentHighlights = [
    {
      title: "탄소중립 사업화 지원사업 선정",
      description: "정부 지원 사업 선정으로 기술 개발 및 시장 진출 가속화",
      period: "2025~2027"
    },
    {
      title: "화학적 순환 자원화 기술",
      description: "폐플라스틱의 물성을 원료 수준으로 복원하는 차별화된 기술",
      period: "2023 기술개발 완료"
    },
    {
      title: "스마트공장 기술 보유",
      description: "생산 효율 35% 향상, 품질 편차 50% 감소",
      period: "2022 인증 획득"
    },
    {
      title: "ISO 9001 & 소재부품장비 전문기업",
      description: "국제 품질 기준 충족 및 정부 인증 확보",
      period: "2022 획득"
    }
  ];

  const marketOpportunity = [
    {
      category: "자동차 산업",
      size: "연 2,000억 원 이상",
      trend: "전기차 경량화 수요 급증",
      opportunity: "고강도 재생 컴파운드 수요 증가"
    },
    {
      category: "가전 및 IT",
      size: "연 1,500억 원 이상",
      trend: "친환경 소재 의무화",
      opportunity: "PCR 컴파운드 공급 기회"
    },
    {
      category: "산업기계",
      size: "연 800억 원 이상",
      trend: "내구성 강화 요구",
      opportunity: "고성능 PA6/PA66 수요 증가"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="bg-blue-700 text-white py-16">
        <div className="container">
          <h1 className="text-4xl font-bold mb-4">투자자 정보 (IR)</h1>
          <p className="text-lg opacity-90">순환경제의 리더로서 지속가능한 성장을 추구하는 (주)창맥</p>
        </div>
      </div>

      {/* Financial Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">재무 하이라이트</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {financialHighlights.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="bg-white rounded-lg p-8 shadow-md hover:shadow-lg transition">
                  <Icon className="w-10 h-10 text-blue-700 mb-4" />
                  <h3 className="text-sm font-semibold text-gray-600 mb-2">{item.metric}</h3>
                  <p className="text-2xl font-bold text-gray-900 mb-2">{item.value}</p>
                  <p className="text-sm text-green-600 font-medium">{item.growth}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Growth Strategy */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">3단계 성장 전략</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {growthStrategies.map((strategy, idx) => (
              <div key={idx} className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg p-8">
                <div className="text-sm font-semibold text-blue-700 mb-2">{strategy.phase}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{strategy.title}</h3>
                <ul className="space-y-3">
                  {strategy.details.map((detail, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <span className="text-blue-700 font-bold mt-1">•</span>
                      <span className="text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">투자 매력 요소</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {investmentHighlights.map((item, idx) => (
              <div key={idx} className="bg-white rounded-lg p-8 shadow-md">
                <div className="text-sm font-semibold text-blue-700 mb-2">{item.period}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-700">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Market Opportunity */}
      <section className="py-16">
        <div className="container">
          <h2 className="text-3xl font-bold mb-12 text-center">시장 기회</h2>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-blue-700">
                  <th className="text-left py-4 px-4 font-bold text-gray-900">산업 분야</th>
                  <th className="text-left py-4 px-4 font-bold text-gray-900">시장 규모</th>
                  <th className="text-left py-4 px-4 font-bold text-gray-900">시장 트렌드</th>
                  <th className="text-left py-4 px-4 font-bold text-gray-900">사업 기회</th>
                </tr>
              </thead>
              <tbody>
                {marketOpportunity.map((item, idx) => (
                  <tr key={idx} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="py-4 px-4 font-semibold text-gray-900">{item.category}</td>
                    <td className="py-4 px-4 text-gray-700">{item.size}</td>
                    <td className="py-4 px-4 text-gray-700">{item.trend}</td>
                    <td className="py-4 px-4 text-green-600 font-medium">{item.opportunity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container text-center">
          <h2 className="text-3xl font-bold mb-4">투자 문의</h2>
          <p className="text-lg mb-8 opacity-90">
            (주)창맥의 성장 스토리에 함께하세요
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:changmaec1@naver.com" className="bg-lime-400 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-lime-300 transition">
              이메일 문의
            </a>
            <a href="tel:054-931-0718" className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition">
              전화 문의: 054-931-0718
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
