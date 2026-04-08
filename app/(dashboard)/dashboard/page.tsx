import { PageHeader } from '@/components/common/page-header'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { BarChart3, Users, TrendingUp, Activity } from 'lucide-react'

export default function DashboardPage() {
  return (
    <div>
      <PageHeader title="대시보드" description="주요 지표와 통계를 확인하세요" />

      {/* 통계 카드 */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">총 사용자</CardTitle>
            <Users className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2,543</div>
            <p className="text-xs text-muted-foreground">지난 달 대비 +12% 증가</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">총 매출</CardTitle>
            <TrendingUp className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">$12,543.00</div>
            <p className="text-xs text-muted-foreground">지난 월 대비 +8% 증가</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">활성 세션</CardTitle>
            <Activity className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">342</div>
            <p className="text-xs text-muted-foreground">현재 접속 중인 사용자</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">전환율</CardTitle>
            <BarChart3 className="w-4 h-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">24.5%</div>
            <p className="text-xs text-muted-foreground">지난 주 대비 +3.2% 증가</p>
          </CardContent>
        </Card>
      </div>

      {/* 최근 활동 */}
      <Card className="mt-8">
        <CardHeader>
          <CardTitle>최근 활동</CardTitle>
          <CardDescription>지난 24시간 주요 활동</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between py-2 border-b">
              <div>
                <p className="font-medium">새로운 사용자 가입</p>
                <p className="text-sm text-muted-foreground">user@example.com</p>
              </div>
              <span className="text-sm text-muted-foreground">2시간 전</span>
            </div>
            <div className="flex items-center justify-between py-2 border-b">
              <div>
                <p className="font-medium">결제 완료</p>
                <p className="text-sm text-muted-foreground">$99.99</p>
              </div>
              <span className="text-sm text-muted-foreground">4시간 전</span>
            </div>
            <div className="flex items-center justify-between py-2">
              <div>
                <p className="font-medium">시스템 업데이트</p>
                <p className="text-sm text-muted-foreground">v1.0.0 배포 완료</p>
              </div>
              <span className="text-sm text-muted-foreground">6시간 전</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
