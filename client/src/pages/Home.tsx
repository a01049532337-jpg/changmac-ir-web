import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Leaf, Zap, Globe, Award } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b border-gray-200">
        <div className="container flex items-center justify-between h-16">
          <div className="text-2xl font-bold text-blue-700">창맥</div>
          <div className="hidden md:flex gap-8">
            <a href="#about" className="text-gray-700 hover:text-blue-700 transition">회사소개</a>
            <a href="#products" className="text-gray-700 hover:text-blue-700 transition">제품</a>
            <a href="#technology" className="text-gray-700 hover:text-blue-700 transition">기술</a>
            <a href="#contact" className="text-gray-700 hover:text-blue-700 transition">연락처</a>
          </div>
          <Button className="bg-blue-700 hover:bg-blue-800">문의하기</Button>
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
              고품질의 재생 플라스틱 소재로 지속가능한 미래를 만들어갑니다.
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
                (주)창맥은 2010년 설립 이후 고품질의 재생 플라스틱 소재 제조에 특화된 기업입니다.
                신소재 기술과 혁신적인 공정으로 지속가능한 순환경제 실현에 앞장서고 있습니다.
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
            주요 제품
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Leaf className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">PCR 컴파운드</h3>
              <p className="text-gray-600 mb-4">
                Post-Consumer Recycled 플라스틱을 기반으로 한 고성능 컴파운드 소재입니다.
                자동차, 가전 등 다양한 산업에 적용됩니다.
              </p>
              <Button variant="ghost" className="text-blue-700">
                자세히 <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Card>

            <Card className="p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-lime-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-lime-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">고성능 소재</h3>
              <p className="text-gray-600 mb-4">
                신소재공학 기술로 강도, 내열성, 내구성을 극대화한 프리미엄 제품입니다.
                까다로운 산업 표준을 충족합니다.
              </p>
              <Button variant="ghost" className="text-blue-700">
                자세히 <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Card>

            <Card className="p-8 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Globe className="w-6 h-6 text-blue-700" />
              </div>
              <h3 className="text-xl font-bold mb-3">맞춤형 솔루션</h3>
              <p className="text-gray-600 mb-4">
                고객사의 요구에 맞춘 특화된 소재 개발 및 공급 서비스입니다.
                기술 지원과 함께 장기 파트너십을 구축합니다.
              </p>
              <Button variant="ghost" className="text-blue-700">
                자세히 <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Technology Section */}
      <section id="technology" className="py-16 md:py-24 bg-gray-50">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            기술 & 인증
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex gap-4">
                <Award className="w-6 h-6 text-lime-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">GRS 국제 인증</h3>
                  <p className="text-gray-600">
                    Global Recycled Standard 인증으로 글로벌 기준의 품질을 보증합니다.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Zap className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">스마트 공장</h3>
                  <p className="text-gray-600">
                    AI 기반 공정 최적화로 에너지 효율과 품질을 동시에 달성합니다.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <Leaf className="w-6 h-6 text-green-600 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">환경 친화적 공정</h3>
                  <p className="text-gray-600">
                    탄소 중립 달성을 목표로 지속가능한 제조 공정을 운영합니다.
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

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-blue-700 text-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            창맥과 함께 지속가능한 미래를 만들어보세요
          </h2>
          <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
            고품질의 재생 플라스틱 소재로 당신의 제품을 한 단계 업그레이드하세요.
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
                <p><strong>전화:</strong> 070-XXXX-XXXX</p>
                <p><strong>이메일:</strong> info@changmac.com</p>
                <p><strong>설립:</strong> 2010년 10월</p>
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
