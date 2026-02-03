import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Leaf, Zap, Globe, Award, CheckCircle, Menu } from "lucide-react";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Navigation */}
      <nav className="sticky top-0 z-40 bg-white border-b border-gray-200">
        <div className="container flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-blue-700">창맥</div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-gray-700 hover:text-blue-700 transition">회사소개</a>
            <a href="#products" className="text-gray-700 hover:text-blue-700 transition">사업소개</a>
            <a href="#technology" className="text-gray-700 hover:text-blue-700 transition">지속가능경영</a>
            <a href="#ir" className="text-gray-700 hover:text-blue-700 transition">IR</a>
            <a href="#careers" className="text-gray-700 hover:text-blue-700 transition">채용공고</a>
          </div>

          {/* Mobile Hamburger Menu */}
          <button
            onClick={() => setSidebarOpen(true)}
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition"
          >
            <Menu className="w-6 h-6 text-gray-700" />
          </button>

          {/* Desktop CTA Button */}
          <Button className="hidden md:block bg-blue-700 hover:bg-blue-800">문의하기</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              순환경제의 리더, 창맥
            </h1>
            <p className="text-lg md:text-xl text-blue-100 mb-8">
              고품질의 재생 플라스틱 소재(PP, PC, PA6, PA66)로 지속가능한 미래를 만들어갑니다.
              대기업을 위한 신뢰할 수 있는 파트너입니다.
            </p>
            <div className="flex gap-4">
              <Button className="bg-lime-400 text-blue-900 hover:bg-lime-500">
                제품 보기
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                회사소개 <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            (주)창맥에 대해
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-blue-700 mb-4">
                재생 플라스틱의 미래를 선도합니다
              </h3>
              <p className="text-gray-700 mb-4 leading-relaxed">
                (주)창맥은 2010년 설립 이후 고품질의 재생 플라스틱 소재(PP, PC, PA6, PA66) 제조에 특화된 기업입니다.
                신소재 기술과 혁신적인 공정으로 지속가능한 순환경제 실현에 앞장서고 있습니다.
              </p>
              <p className="text-gray-700 mb-4 leading-relaxed">
                <strong>주요 인증:</strong> 스마트공장 인증 확인서, ISO 9001 인증, 소재부품장비 전문기업 인정
              </p>
              <p className="text-gray-700 mb-6 leading-relaxed">
                대기업의 친환경 제품 개발을 지원하며, 글로벌 표준의 품질을 제공합니다.
              </p>
              <Button className="bg-blue-700 hover:bg-blue-800">
                자세히 알아보기
              </Button>
            </div>
            <div className="bg-gradient-to-br from-blue-100 to-lime-100 rounded-lg h-80 flex items-center justify-center">
              <img 
                src="/images/market-opportunity.jpg" 
                alt="순환경제" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            사업소개
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">PP 컴파운드</h3>
              <p className="text-gray-600 mb-4">
                Post-Consumer Recycled 폴리프로필렌을 기반으로 한 고성능 컴파운드입니다.
                자동차 내장재, 가전 제품, 전자 부품 등에 광범위하게 적용됩니다.
              </p>
              <Button variant="ghost" className="text-blue-700">
                자세히 <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Card>

            <Card className="p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-lime-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">PA6/PA66 컴파운드</h3>
              <p className="text-gray-600 mb-4">
                고강도 폴리아마이드 재생 소재로 자동차 부품, 기계 부품, 산업용 제품에 사용됩니다.
                우수한 내열성과 기계적 강도를 제공합니다.
              </p>
              <Button variant="ghost" className="text-blue-700">
                자세히 <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Card>

            <Card className="p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">PC 컴파운드</h3>
              <p className="text-gray-600 mb-4">
                재생 폴리카보네이트 소재로 투명성과 강도가 필요한 제품에 적합합니다.
                전자제품 외관, 조명 부품, 광학 부품 등에 사용됩니다.
              </p>
              <Button variant="ghost" className="text-blue-700">
                자세히 <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Card>
          </div>

          {/* Product Features */}
          <div className="bg-blue-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold mb-6 text-center">제품 특징</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-lime-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">국제 품질 기준 충족</h4>
                  <p className="text-gray-700 text-sm">ISO 9001 인증으로 일관된 고품질 제품 보증</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-lime-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">환경 친화적</h4>
                  <p className="text-gray-700 text-sm">폐플라스틱 재활용으로 순환경제 실현</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-lime-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">맞춤형 솔루션</h4>
                  <p className="text-gray-700 text-sm">고객 요구에 맞춘 특화된 제품 개발</p>
                </div>
              </div>
              <div className="flex gap-3">
                <CheckCircle className="w-6 h-6 text-lime-600 flex-shrink-0" />
                <div>
                  <h4 className="font-bold mb-1">안정적 공급</h4>
                  <p className="text-gray-700 text-sm">스마트공장으로 안정적인 생산 및 배송</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section id="sustainability" className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            지속가능경영
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="bg-gradient-to-br from-green-100 to-blue-100 rounded-lg h-80 flex items-center justify-center">
              <img 
                src="/images/roadmap-visual.png" 
                alt="지속가능경영" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-blue-700 mb-6">
                환경과 사회를 생각하는 기업
              </h3>
              <div className="space-y-4">
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-lime-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">탄소 중립 달성</h4>
                    <p className="text-gray-700 text-sm">2030년까지 탄소 중립 목표 추진</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-lime-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">폐기물 감량</h4>
                    <p className="text-gray-700 text-sm">재생 플라스틱 활용으로 폐기물 최소화</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-lime-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">사회공헌</h4>
                    <p className="text-gray-700 text-sm">지역사회 발전과 고용 창출에 기여</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <CheckCircle className="w-6 h-6 text-lime-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-bold mb-1">투명한 경영</h4>
                    <p className="text-gray-700 text-sm">윤리 경영과 투명한 정보 공개</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-16 md:py-24">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            기술 & 인증
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <Award className="w-6 h-6 text-lime-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">스마트공장 인증</h3>
                  <p className="text-gray-600">
                    스마트공장 인증 확인서 획득으로 최첨단 제조 기술을 보유한 기업임을 입증합니다.
                    자동화 설비와 데이터 기반 공정 관리로 효율성을 극대화합니다.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Zap className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">ISO 9001 인증</h3>
                  <p className="text-gray-600">
                    국제 품질 경영 시스템 인증으로 일관된 고품질 제품 생산을 보장합니다.
                    엄격한 품질 관리 프로세스를 통해 고객 만족도를 극대화합니다.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Leaf className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">소재부품장비 전문기업</h3>
                  <p className="text-gray-600">
                    정부 인증 소재부품장비 전문기업으로 산업 고도화에 기여하는 핵심 기업입니다.
                    국가 정책 지원 대상 기업으로 선정되어 기술 개발을 지속 추진 중입니다.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Globe className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">특허 기술</h3>
                  <p className="text-gray-600">
                    재생 플라스틱 소재 개발 및 공정 기술에 대한 특허를 보유하고 있으며,
                    지속적인 R&D를 통해 혁신적인 기술을 개발하고 있습니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-lime-100 to-blue-100 rounded-lg h-80 flex items-center justify-center">
              <img 
                src="/images/hero-background.jpg" 
                alt="기술" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* IR Section */}
      <section id="ir" className="py-16 md:py-24 bg-blue-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            IR (투자자 정보)
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-4 text-blue-700">재무 정보</h3>
              <p className="text-gray-600 mb-6">
                (주)창맥의 최신 재무 현황과 성장 추이를 확인하세요.
              </p>
              <Button variant="outline" className="w-full">
                자세히 보기
              </Button>
            </Card>

            <Card className="p-8 hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-4 text-blue-700">기업 가치</h3>
              <p className="text-gray-600 mb-6">
                지속적인 성장으로 기업 가치를 높여나가고 있습니다.
              </p>
              <Button variant="outline" className="w-full">
                자세히 보기
              </Button>
            </Card>

            <Card className="p-8 hover:shadow-lg transition">
              <h3 className="text-xl font-bold mb-4 text-blue-700">투자 기회</h3>
              <p className="text-gray-600 mb-6">
                순환경제 시장의 성장 기회에 함께하세요.
              </p>
              <Button variant="outline" className="w-full">
                문의하기
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Careers Section */}
      <section id="careers" className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            채용공고
          </h2>
          <div className="max-w-2xl mx-auto">
            <Card className="p-8">
              <h3 className="text-2xl font-bold mb-4 text-blue-700">
                함께 성장할 인재를 찾습니다
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                (주)창맥은 순환경제의 미래를 만들어갈 열정적인 인재를 모집하고 있습니다.
                신소재 기술, 공정 기술, 영업, 관리 등 다양한 분야에서 경력직과 신입을 채용하고 있습니다.
              </p>
              <div className="space-y-3 mb-6">
                <p className="text-gray-700"><strong>근무지:</strong> 경북 성주군 선남면</p>
                <p className="text-gray-700"><strong>근무형태:</strong> 정규직</p>
                <p className="text-gray-700"><strong>복리후생:</strong> 경쟁력 있는 급여 및 복리후생</p>
              </div>
              <Button className="w-full bg-blue-700 hover:bg-blue-800">
                채용공고 보기
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-700 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            창맥과 함께 지속가능한 미래를 만들어보세요
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            고품질의 재생 플라스틱 소재로 당신의 제품을 한 단계 업그레이드하세요.
            신뢰할 수 있는 파트너, 창맥입니다.
          </p>
          <Button className="bg-lime-400 text-blue-900 hover:bg-lime-500 text-lg px-8 py-6">
            지금 문의하기
          </Button>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            연락처
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold mb-6">회사 정보</h3>
              <div className="space-y-4 text-gray-700">
                <p><strong>회사명:</strong> (주)창맥</p>
                <p><strong>주소:</strong> 경북 성주군 선남면 선노로 55-36</p>
                <p><strong>전화:</strong> 054-931-0718</p>
                <p><strong>팩스:</strong> 054-931-0719</p>
                <p><strong>이메일:</strong> changmaec1@naver.com</p>
                <p><strong>설립:</strong> 2010년 10월</p>
                <p><strong>주요 제품:</strong> PP, PC, PA6, PA66 재생 컴파운드</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6">문의 양식</h3>
              <form className="space-y-4">
                <input 
                  type="text" 
                  placeholder="이름" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-700"
                />
                <input 
                  type="email" 
                  placeholder="이메일" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-700"
                />
                <input 
                  type="tel" 
                  placeholder="전화번호" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-700"
                />
                <textarea 
                  placeholder="문의 내용" 
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-700"
                />
                <Button className="w-full bg-blue-700 hover:bg-blue-800">
                  문의 보내기
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8">
        <div className="container">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p>&copy; 2026 (주)창맥. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">개인정보처리방침</a>
              <a href="#" className="hover:text-white transition">이용약관</a>
              <a href="#" className="hover:text-white transition">사이트맵</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
